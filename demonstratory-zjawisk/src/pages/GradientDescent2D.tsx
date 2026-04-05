import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

type Algorithm = 'GD' | 'Momentum' | 'RMSprop' | 'Adam';

const defaultLRs: Record<Algorithm, number> = {
    'GD': 0.01,
    'Momentum': 0.01,
    'RMSprop': 0.05,
    'Adam': 0.1
};

export default function GradientDescent2D() {
    const [algorithm, setAlgorithm] = useState<Algorithm>('GD');
    const [lr, setLr] = useState(defaultLRs['GD']);
    const [isRunning, setIsRunning] = useState(false);
    
    // Himmelblau's function
    const f = (x: number, y: number) => Math.pow(x * x + y - 11, 2) + Math.pow(x + y * y - 7, 2);
    const dfx = (x: number, y: number) => 4 * x * (x * x + y - 11) + 2 * (x + y * y - 7);
    const dfy = (x: number, y: number) => 2 * (x * x + y - 11) + 4 * y * (x + y * y - 7);

    const [history, setHistory] = useState<{ x: number, y: number }[]>([{ x: 0, y: 0 }]);
    const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
    
    // Optimizer state
    const velocityRef = useRef({ x: 0, y: 0 });
    const sqGradRef = useRef({ x: 0, y: 0 });
    const mRef = useRef({ x: 0, y: 0 });
    const vRef = useRef({ x: 0, y: 0 });
    const tRef = useRef(0);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const historyCanvasRef = useRef<HTMLCanvasElement>(null);
    const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);

    const reset = useCallback((startX = 0, startY = 0) => {
        setIsRunning(false);
        setCurrentPos({ x: startX, y: startY });
        setHistory([{ x: startX, y: startY }]);
        velocityRef.current = { x: 0, y: 0 };
        sqGradRef.current = { x: 0, y: 0 };
        mRef.current = { x: 0, y: 0 };
        vRef.current = { x: 0, y: 0 };
        tRef.current = 0;
    }, []);

    const performStep = useCallback(() => {
        setCurrentPos(prev => {
            const gx = dfx(prev.x, prev.y);
            const gy = dfy(prev.x, prev.y);
            
            let nextX = prev.x;
            let nextY = prev.y;

            if (algorithm === 'GD') {
                nextX = prev.x - lr * gx;
                nextY = prev.y - lr * gy;
            } else if (algorithm === 'Momentum') {
                const beta = 0.9;
                velocityRef.current.x = beta * velocityRef.current.x + (1 - beta) * gx;
                velocityRef.current.y = beta * velocityRef.current.y + (1 - beta) * gy;
                nextX = prev.x - lr * velocityRef.current.x;
                nextY = prev.y - lr * velocityRef.current.y;
            } else if (algorithm === 'RMSprop') {
                const beta = 0.9;
                const eps = 1e-8;
                sqGradRef.current.x = beta * sqGradRef.current.x + (1 - beta) * gx * gx;
                sqGradRef.current.y = beta * sqGradRef.current.y + (1 - beta) * gy * gy;
                nextX = prev.x - lr * gx / (Math.sqrt(sqGradRef.current.x) + eps);
                nextY = prev.y - lr * gy / (Math.sqrt(sqGradRef.current.y) + eps);
            } else if (algorithm === 'Adam') {
                const beta1 = 0.9;
                const beta2 = 0.999;
                const eps = 1e-8;
                tRef.current += 1;
                
                mRef.current.x = beta1 * mRef.current.x + (1 - beta1) * gx;
                mRef.current.y = beta1 * mRef.current.y + (1 - beta1) * gy;
                
                vRef.current.x = beta2 * vRef.current.x + (1 - beta2) * gx * gx;
                vRef.current.y = beta2 * vRef.current.y + (1 - beta2) * gy * gy;
                
                const mHatX = mRef.current.x / (1 - Math.pow(beta1, tRef.current));
                const mHatY = mRef.current.y / (1 - Math.pow(beta1, tRef.current));
                
                const vHatX = vRef.current.x / (1 - Math.pow(beta2, tRef.current));
                const vHatY = vRef.current.y / (1 - Math.pow(beta2, tRef.current));
                
                nextX = prev.x - lr * mHatX / (Math.sqrt(vHatX) + eps);
                nextY = prev.y - lr * mHatY / (Math.sqrt(vHatY) + eps);
            }

            // Prevent extreme divergence
            if (Math.abs(nextX) > 10 || Math.abs(nextY) > 10 || isNaN(nextX) || isNaN(nextY)) {
                setIsRunning(false);
                return prev;
            }

            setHistory(h => [...h, { x: nextX, y: nextY }]);
            return { x: nextX, y: nextY };
        });
    }, [lr, algorithm]);

    useEffect(() => {
        let interval: number;
        if (isRunning) {
            interval = window.setInterval(performStep, 50);
        }
        return () => clearInterval(interval);
    }, [isRunning, performStep]);

    // Draw heatmap and path
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;
        
        // Map [-5, 5] to [0, width]
        const mapX = (x: number) => ((x + 5) / 10) * width;
        const mapY = (y: number) => ((5 - y) / 10) * height; // Invert Y
        const unmapX = (px: number) => (px / width) * 10 - 5;
        const unmapY = (py: number) => 5 - (py / height) * 10;

        // Initialize offscreen canvas for heatmap if not exists
        if (!offscreenCanvasRef.current) {
            const offscreen = document.createElement('canvas');
            offscreen.width = width;
            offscreen.height = height;
            const offCtx = offscreen.getContext('2d');
            
            if (offCtx) {
                const step = 4; // Pixel size
                for (let py = 0; py < height; py += step) {
                    for (let px = 0; px < width; px += step) {
                        const x = unmapX(px + step/2);
                        const y = unmapY(py + step/2);
                        const val = f(x, y);
                        
                        // Log scale
                        const normalized = Math.log(val + 1) / Math.log(2000 + 1);
                        const clamped = Math.max(0, Math.min(1, normalized));
                        
                        const r = Math.floor(255 * clamped);
                        const g = Math.floor(255 * (1 - clamped) * 0.5); // Darker green/blue for low
                        const b = Math.floor(255 * (1 - clamped));

                        offCtx.fillStyle = `rgb(${r},${g},${b})`;
                        offCtx.fillRect(px, py, step, step);
                    }
                }
            }
            offscreenCanvasRef.current = offscreen;
        }

        // Draw heatmap from offscreen canvas
        if (offscreenCanvasRef.current) {
            ctx.drawImage(offscreenCanvasRef.current, 0, 0);
        }

        // Draw path
        if (history.length > 0) {
            ctx.beginPath();
            ctx.moveTo(mapX(history[0].x), mapY(history[0].y));
            for (let i = 1; i < history.length; i++) {
                ctx.lineTo(mapX(history[i].x), mapY(history[i].y));
            }
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw points
            history.forEach((p, i) => {
                ctx.beginPath();
                ctx.arc(mapX(p.x), mapY(p.y), i === history.length - 1 ? 4 : 2, 0, 2 * Math.PI);
                ctx.fillStyle = i === history.length - 1 ? 'yellow' : 'white';
                ctx.fill();
            });
        }

    }, [history]);

    // Draw history plot (Loss vs Iteration)
    useEffect(() => {
        const canvas = historyCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);

        const padding = 40;
        const plotWidth = width - padding * 2;
        const plotHeight = height - padding * 2;

        // Draw axes
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.strokeStyle = '#9ca3af';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Labels
        ctx.fillStyle = '#6b7280';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Iteracja', width / 2, height - 10);
        
        ctx.save();
        ctx.translate(15, height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Wartość f(x,y)', 0, 0);
        ctx.restore();

        if (history.length < 2) return;

        const losses = history.map(p => f(p.x, p.y));
        const maxLoss = Math.max(...losses, 1);
        const minLoss = Math.min(...losses, 0);
        const lossRange = maxLoss - minLoss || 1;

        const mapIter = (i: number) => padding + (i / (history.length - 1)) * plotWidth;
        const mapLoss = (l: number) => height - padding - ((l - minLoss) / lossRange) * plotHeight;

        ctx.beginPath();
        ctx.moveTo(mapIter(0), mapLoss(losses[0]));
        for (let i = 1; i < losses.length; i++) {
            ctx.lineTo(mapIter(i), mapLoss(losses[i]));
        }
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 2;
        ctx.stroke();

    }, [history]);

    const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        
        const x = (px / canvas.width) * 10 - 5;
        const y = 5 - (py / canvas.height) * 10;
        
        reset(x, y);
    };

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">Gradient Descent 2D</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Wizualizacja algorytmu spadku gradientu w dwóch wymiarach na funkcji Himmelblau'a.
                    Kliknij na mapę cieplną, aby wybrać punkt startowy.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Sterowanie</h2>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setIsRunning(!isRunning)}
                                    className={`p-2 rounded-lg flex items-center gap-2 ${
                                        isRunning 
                                        ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                    }`}
                                >
                                    {isRunning ? <Pause size={20} /> : <Play size={20} />}
                                    {isRunning ? 'Pauza' : 'Start'}
                                </button>
                                <button
                                    onClick={() => reset(0, 0)}
                                    className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-2"
                                >
                                    <RotateCcw size={20} />
                                    Reset
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Algorytm
                                </label>
                                <select
                                    value={algorithm}
                                    onChange={(e) => {
                                        const newAlgo = e.target.value as Algorithm;
                                        setAlgorithm(newAlgo);
                                        setLr(defaultLRs[newAlgo]);
                                        reset(currentPos.x, currentPos.y);
                                    }}
                                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                                >
                                    <option value="GD">Gradient Descent (Standard)</option>
                                    <option value="Momentum">Momentum</option>
                                    <option value="RMSprop">RMSprop</option>
                                    <option value="Adam">Adam</option>
                                </select>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium">Learning Rate (α)</label>
                                    <span className="text-sm text-gray-500">{lr.toFixed(4)}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0.001"
                                    max="0.5"
                                    step="0.001"
                                    value={lr}
                                    onChange={(e) => setLr(parseFloat(e.target.value))}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-2 font-mono text-sm">
                            <div className="flex justify-between">
                                <span>Iteracja:</span>
                                <span>{history.length - 1}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Pozycja (x, y):</span>
                                <span>({currentPos.x.toFixed(3)}, {currentPos.y.toFixed(3)})</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Wartość f(x,y):</span>
                                <span>{f(currentPos.x, currentPos.y).toFixed(4)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold mb-4">Historia Wartości Funkcji</h3>
                        <canvas
                            ref={historyCanvasRef}
                            width={500}
                            height={300}
                            className="w-full h-auto bg-gray-50 dark:bg-gray-900 rounded-lg"
                        />
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-4">Mapa Cieplna i Ścieżka</h3>
                    <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                        <canvas
                            ref={canvasRef}
                            width={500}
                            height={500}
                            onClick={handleCanvasClick}
                            className="w-full h-full rounded-lg cursor-crosshair border border-gray-200 dark:border-gray-700"
                        />
                    </div>
                    <p className="text-sm text-gray-500 mt-4 text-center">
                        Funkcja Himmelblau'a: f(x,y) = (x² + y - 11)² + (x + y² - 7)²
                    </p>
                </div>
            </div>
        </div>
    );
}
