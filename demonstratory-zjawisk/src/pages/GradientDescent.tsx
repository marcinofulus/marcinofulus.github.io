import React, { useState, useEffect, useRef, useCallback } from 'react';

type Algorithm = 'GD' | 'Momentum' | 'RMSprop' | 'Adam';

const defaultLRs: Record<Algorithm, number> = {
    'GD': 0.1,
    'Momentum': 0.02,
    'RMSprop': 0.05,
    'Adam': 0.1
};

// --- Matematyka ---
const f = (x: number) => 0.25 * Math.pow(x, 4) - Math.pow(x, 2) + 0.1 * x;
const df = (x: number) => Math.pow(x, 3) - 2 * x + 0.1;

const X_MIN = -2.5;
const X_MAX = 2.5;
const Y_MIN = -1.5;
const Y_MAX = 3.5;

export default function GradientDescent() {
    const [algorithm, setAlgorithm] = useState<Algorithm>('GD');
    const [lr, setLr] = useState(defaultLRs['GD']);
    const [isRunning, setIsRunning] = useState(false);
    const [alertMsg, setAlertMsg] = useState<string | null>(null);

    const canvasFuncRef = useRef<HTMLCanvasElement>(null);
    const canvasHistRef = useRef<HTMLCanvasElement>(null);

    const currentXRef = useRef(2.0);
    const historyXRef = useRef<number[]>([2.0]);
    const runIntervalRef = useRef<number | null>(null);
    const optStateRef = useRef({ v: 0, s: 0, m: 0, t: 0 });

    const drawAll = useCallback(() => {
        const canvasFunc = canvasFuncRef.current;
        const canvasHist = canvasHistRef.current;
        if (!canvasFunc || !canvasHist) return;

        const ctxFunc = canvasFunc.getContext('2d');
        const ctxHist = canvasHist.getContext('2d');
        if (!ctxFunc || !ctxHist) return;

        // --- Mapowanie współrzędnych ---
        const toCanvasFuncX = (x: number) => ((x - X_MIN) / (X_MAX - X_MIN)) * canvasFunc.width;
        const toCanvasFuncY = (y: number) => canvasFunc.height - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * canvasFunc.height;

        // --- Rysowanie: Wykres Funkcji ---
        ctxFunc.clearRect(0, 0, canvasFunc.width, canvasFunc.height);

        ctxFunc.beginPath();
        ctxFunc.strokeStyle = '#cbd5e1';
        ctxFunc.lineWidth = 1;
        
        const zeroX = toCanvasFuncX(0);
        ctxFunc.moveTo(zeroX, 0);
        ctxFunc.lineTo(zeroX, canvasFunc.height);
        
        const zeroY = toCanvasFuncY(0);
        ctxFunc.moveTo(0, zeroY);
        ctxFunc.lineTo(canvasFunc.width, zeroY);
        ctxFunc.stroke();

        ctxFunc.beginPath();
        ctxFunc.strokeStyle = '#4f46e5';
        ctxFunc.lineWidth = 3;
        
        for (let cx = 0; cx <= canvasFunc.width; cx++) {
            const mathX = X_MIN + (cx / canvasFunc.width) * (X_MAX - X_MIN);
            const mathY = f(mathX);
            const cy = toCanvasFuncY(mathY);
            if (cx === 0) ctxFunc.moveTo(cx, cy);
            else ctxFunc.lineTo(cx, cy);
        }
        ctxFunc.stroke();

        const currentX = currentXRef.current;
        if (currentX !== null && isFinite(currentX)) {
            const px = toCanvasFuncX(currentX);
            const py = toCanvasFuncY(f(currentX));

            ctxFunc.beginPath();
            ctxFunc.setLineDash([5, 5]);
            ctxFunc.strokeStyle = '#ef4444';
            ctxFunc.lineWidth = 2;
            ctxFunc.moveTo(px, py);
            ctxFunc.lineTo(px, zeroY);
            ctxFunc.stroke();
            ctxFunc.setLineDash([]);

            ctxFunc.beginPath();
            ctxFunc.arc(px, py, 8, 0, 2 * Math.PI);
            ctxFunc.fillStyle = '#ef4444';
            ctxFunc.fill();
            ctxFunc.strokeStyle = 'white';
            ctxFunc.lineWidth = 2;
            ctxFunc.stroke();
        }

        // --- Rysowanie: Wykres Historii ---
        ctxHist.clearRect(0, 0, canvasHist.width, canvasHist.height);

        const PADDING_LEFT = 45;
        const PADDING_BOTTOM = 35;
        const PADDING_TOP = 15;
        const PADDING_RIGHT = 15;

        const histW = canvasHist.width - PADDING_LEFT - PADDING_RIGHT;
        const histH = canvasHist.height - PADDING_TOP - PADDING_BOTTOM;

        const toCanvasHistX = (iter: number, maxIter: number) => PADDING_LEFT + (iter / maxIter) * histW;
        const toCanvasHistY = (xVal: number) => PADDING_TOP + histH - ((xVal - X_MIN) / (X_MAX - X_MIN)) * histH;

        // Oś X (y=0)
        const histZeroY = toCanvasHistY(0);
        ctxHist.beginPath();
        ctxHist.strokeStyle = '#cbd5e1';
        ctxHist.lineWidth = 1;
        ctxHist.moveTo(PADDING_LEFT, histZeroY);
        ctxHist.lineTo(canvasHist.width - PADDING_RIGHT, histZeroY);
        ctxHist.stroke();

        // Osie główne wykresu
        ctxHist.beginPath();
        ctxHist.strokeStyle = '#94a3b8';
        ctxHist.lineWidth = 1;
        ctxHist.moveTo(PADDING_LEFT, PADDING_TOP);
        ctxHist.lineTo(PADDING_LEFT, canvasHist.height - PADDING_BOTTOM);
        ctxHist.lineTo(canvasHist.width - PADDING_RIGHT, canvasHist.height - PADDING_BOTTOM);
        ctxHist.stroke();

        // Opisy osi
        ctxHist.fillStyle = '#64748b';
        ctxHist.font = '12px sans-serif';
        ctxHist.textAlign = 'center';
        ctxHist.textBaseline = 'top';
        ctxHist.fillText('Iteracja', PADDING_LEFT + histW / 2, canvasHist.height - PADDING_BOTTOM + 10);

        ctxHist.save();
        ctxHist.translate(PADDING_LEFT - 30, PADDING_TOP + histH / 2);
        ctxHist.rotate(-Math.PI / 2);
        ctxHist.textAlign = 'center';
        ctxHist.textBaseline = 'bottom';
        ctxHist.fillText('Wartość x', 0, 0);
        ctxHist.restore();

        const historyX = historyXRef.current;
        if (historyX.length === 0) return;

        const maxIter = Math.max(10, historyX.length - 1);

        ctxHist.beginPath();
        ctxHist.strokeStyle = '#ef4444';
        ctxHist.lineWidth = 2;

        for (let i = 0; i < historyX.length; i++) {
            const hx = toCanvasHistX(i, maxIter);
            let hy = toCanvasHistY(historyX[i]);
            
            if(hy > canvasHist.height + 100) hy = canvasHist.height + 100;
            if(hy < -100) hy = -100;

            if (i === 0) ctxHist.moveTo(hx, hy);
            else ctxHist.lineTo(hx, hy);
        }
        ctxHist.stroke();

        ctxHist.fillStyle = '#ef4444';
        for (let i = 0; i < historyX.length; i++) {
            const hx = toCanvasHistX(i, maxIter);
            const hy = toCanvasHistY(historyX[i]);
            
            if(hy >= PADDING_TOP && hy <= canvasHist.height - PADDING_BOTTOM) {
                ctxHist.beginPath();
                ctxHist.arc(hx, hy, 4, 0, 2 * Math.PI);
                ctxHist.fill();
            }
        }
    }, []);

    const performStep = useCallback(() => {
        let currentX = currentXRef.current;
        if (currentX === null || !isFinite(currentX)) return;

        const gradient = df(currentX);
        let nextX = currentX;
        const state = optStateRef.current;

        switch (algorithm) {
            case 'GD':
                nextX = currentX - lr * gradient;
                break;
            case 'Momentum':
                const betaM = 0.9;
                state.v = betaM * state.v + lr * gradient;
                nextX = currentX - state.v;
                break;
            case 'RMSprop':
                const betaR = 0.9;
                const epsR = 1e-8;
                state.s = betaR * state.s + (1 - betaR) * gradient * gradient;
                nextX = currentX - (lr / Math.sqrt(state.s + epsR)) * gradient;
                break;
            case 'Adam':
                const beta1 = 0.9;
                const beta2 = 0.999;
                const epsA = 1e-8;
                state.t += 1;
                state.m = beta1 * state.m + (1 - beta1) * gradient;
                state.v = beta2 * state.v + (1 - beta2) * gradient * gradient;
                const mHat = state.m / (1 - Math.pow(beta1, state.t));
                const vHat = state.v / (1 - Math.pow(beta2, state.t));
                nextX = currentX - (lr / Math.sqrt(vHat + epsA)) * mHat;
                break;
        }

        if (Math.abs(nextX) > 5) {
            setAlertMsg(`Algorytm rozbiegł do nieskończoności! Wartość x przekroczyła granice (|x| > 5). Gradient "wybuchł".`);
            setIsRunning(false);
            nextX = nextX > 0 ? Infinity : -Infinity; 
        }
        
        historyXRef.current.push(nextX);
        currentXRef.current = nextX;
        
        drawAll();
    }, [lr, algorithm, drawAll]);

    const resetPoint = useCallback((newX: number) => {
        setAlertMsg(null);
        setIsRunning(false);
        currentXRef.current = newX;
        historyXRef.current = [newX];
        optStateRef.current = { v: 0, s: 0, m: 0, t: 0 };
        drawAll();
    }, [drawAll]);

    useEffect(() => {
        const handleResize = () => {
            if (canvasFuncRef.current) {
                canvasFuncRef.current.width = canvasFuncRef.current.clientWidth;
                canvasFuncRef.current.height = canvasFuncRef.current.clientHeight;
            }
            if (canvasHistRef.current) {
                canvasHistRef.current.width = canvasHistRef.current.clientWidth;
                canvasHistRef.current.height = canvasHistRef.current.clientHeight;
            }
            drawAll();
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [drawAll]);

    useEffect(() => {
        if (isRunning) {
            if (!isFinite(currentXRef.current)) {
                resetPoint(2.0);
            }
            runIntervalRef.current = window.setInterval(() => {
                performStep();
            }, 150);
        } else {
            if (runIntervalRef.current !== null) {
                clearInterval(runIntervalRef.current);
            }
        }
        return () => {
            if (runIntervalRef.current !== null) clearInterval(runIntervalRef.current);
        };
    }, [isRunning, performStep, resetPoint]);

    const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasFuncRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newMathX = X_MIN + (clickX / canvas.width) * (X_MAX - X_MIN);
        resetPoint(newMathX);
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-sans min-h-screen flex flex-col">
            <header className="bg-white dark:bg-slate-900 shadow-sm py-4 px-6 mb-6">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-semibold text-indigo-600">Spadek wzdłuż gradientu (Gradient Descent)</h1>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Badanie stabilności i wpływu współczynnika uczenia (Learning Rate)</p>
                    </div>
                </div>
            </header>

            <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 flex flex-col gap-6">
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-black/5 dark:border-white/10 flex flex-wrap gap-6 items-center justify-between">
                    <div className="flex-grow min-w-[200px]">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Algorytm optymalizacji
                        </label>
                        <select 
                            value={algorithm}
                            onChange={(e) => {
                                const alg = e.target.value as Algorithm;
                                setAlgorithm(alg);
                                setLr(defaultLRs[alg]);
                                resetPoint(currentXRef.current);
                            }}
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="GD">Gradient Descent</option>
                            <option value="Momentum">Momentum</option>
                            <option value="RMSprop">RMSprop</option>
                            <option value="Adam">Adam</option>
                        </select>
                    </div>

                    <div className="flex-grow min-w-[250px]">
                        <label htmlFor="lr-slider" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Współczynnik uczenia (LR): <span className="font-semibold text-indigo-600">{lr.toFixed(3)}</span>
                        </label>
                        <input 
                            type="range" 
                            id="lr-slider" 
                            min="0.001" max="1.5" step="0.001" 
                            value={lr} 
                            onChange={(e) => setLr(parseFloat(e.target.value))}
                            className="w-full accent-indigo-600" 
                        />
                        <div className="flex justify-between text-xs text-slate-400 mt-1">
                            <span>Mniejszy (0.001)</span>
                            <span>Większy (1.5)</span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button 
                            onClick={() => { setIsRunning(false); performStep(); }}
                            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors border border-slate-300 shadow-sm"
                        >
                            Krok (Step)
                        </button>
                        <button 
                            onClick={() => setIsRunning(!isRunning)}
                            className={`px-6 py-2 text-white rounded-lg font-medium transition-colors shadow-sm w-32 ${isRunning ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                        >
                            {isRunning ? 'Stop' : 'Start'}
                        </button>
                    </div>
                </div>

                {alertMsg && (
                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-700 text-sm font-medium">
                        {alertMsg}
                    </div>
                )}

                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-black/5 dark:border-white/10 flex flex-col">
                    <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">Wykres Funkcji (f(x) = 0.25x⁴ - x² + 0.1x)</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Kliknij w dowolne miejsce na wykresie, aby ustawić <b>punkt startowy</b>.</p>
                    <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-100">
                        <canvas 
                            ref={canvasFuncRef} 
                            onMouseDown={handleCanvasClick}
                            className="absolute inset-0 w-full h-full cursor-crosshair select-none"
                        />
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-black/5 dark:border-white/10 flex flex-col mb-8">
                    <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">Historia Pozycji X vs Iteracja</h2>
                    <div className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-100">
                        <canvas ref={canvasHistRef} className="absolute inset-0 w-full h-full select-none" />
                    </div>
                </div>
            </main>
        </div>
    );
}
