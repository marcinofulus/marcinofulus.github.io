import React, { useState, useCallback, useRef, useEffect } from 'react';
import { RotateCcw, Play, StepForward, Plus, MousePointer2 } from 'lucide-react';

interface Point {
    x: number;
    y: number;
    cluster?: number;
}

interface Centroid {
    x: number;
    y: number;
    color: string;
}

const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

export default function KMeans() {
    const [points, setPoints] = useState<Point[]>([]);
    const [centroids, setCentroids] = useState<Centroid[]>([]);
    const [k, setK] = useState(3);
    const [step, setStep] = useState<'init' | 'assign' | 'update'>('init');
    const svgRef = useRef<SVGSVGElement>(null);

    const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
        if (!svgRef.current) return;
        const rect = svgRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        setPoints(prev => [...prev, { x, y }]);
    };

    const generateRandomPoints = () => {
        const newPoints: Point[] = [];
        for (let i = 0; i < 50; i++) {
            newPoints.push({
                x: Math.random() * 600,
                y: Math.random() * 400
            });
        }
        setPoints(newPoints);
        setCentroids([]);
        setStep('init');
    };

    const initCentroids = () => {
        if (points.length < k) {
            alert('Dodaj więcej punktów niż wynosi K!');
            return;
        }
        
        // Randomly pick K points as initial centroids
        const shuffled = [...points].sort(() => 0.5 - Math.random());
        const initialCentroids = shuffled.slice(0, k).map((p, i) => ({
            x: p.x,
            y: p.y,
            color: COLORS[i % COLORS.length]
        }));
        
        setCentroids(initialCentroids);
        setStep('assign');
        
        // Reset point assignments
        setPoints(prev => prev.map(p => ({ ...p, cluster: undefined })));
    };

    const assignPoints = () => {
        setPoints(prev => prev.map(p => {
            let minDistance = Infinity;
            let closestCluster = 0;
            
            centroids.forEach((c, i) => {
                const dist = Math.sqrt(Math.pow(p.x - c.x, 2) + Math.pow(p.y - c.y, 2));
                if (dist < minDistance) {
                    minDistance = dist;
                    closestCluster = i;
                }
            });
            
            return { ...p, cluster: closestCluster };
        }));
        setStep('update');
    };

    const updateCentroids = () => {
        setCentroids(prev => prev.map((c, i) => {
            const clusterPoints = points.filter(p => p.cluster === i);
            if (clusterPoints.length === 0) return c; // Keep centroid if no points
            
            const sumX = clusterPoints.reduce((sum, p) => sum + p.x, 0);
            const sumY = clusterPoints.reduce((sum, p) => sum + p.y, 0);
            
            return {
                ...c,
                x: sumX / clusterPoints.length,
                y: sumY / clusterPoints.length
            };
        }));
        setStep('assign');
    };

    const reset = () => {
        setPoints([]);
        setCentroids([]);
        setStep('init');
    };

    return (
        <div className="max-w-6xl mx-auto p-8 space-y-8">
            <header className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 tracking-tight">
                    Algorytm K-Means (K-Średnich)
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
                    Interaktywna wizualizacja algorytmu grupowania. Kliknij na planszę, aby dodać punkty, a następnie obserwuj, jak algorytm iteracyjnie znajduje środki skupień.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-black/5 dark:border-white/10">
                    <svg 
                        ref={svgRef}
                        width="100%" 
                        height="400" 
                        className="bg-slate-50 dark:bg-slate-800 rounded-xl border border-black/5 dark:border-white/10 cursor-crosshair"
                        onClick={handleSvgClick}
                        viewBox="0 0 600 400"
                    >
                        {/* Voronoi-like lines could go here, but let's stick to points and lines to centroids for simplicity */}
                        {points.map((p, i) => (
                            <g key={`p-${i}`}>
                                {p.cluster !== undefined && centroids[p.cluster] && (
                                    <line 
                                        x1={p.x} 
                                        y1={p.y} 
                                        x2={centroids[p.cluster].x} 
                                        y2={centroids[p.cluster].y} 
                                        stroke={centroids[p.cluster].color} 
                                        strokeWidth="1" 
                                        strokeOpacity="0.3"
                                    />
                                )}
                                <circle 
                                    cx={p.x} 
                                    cy={p.y} 
                                    r={4} 
                                    fill={p.cluster !== undefined ? centroids[p.cluster].color : '#9ca3af'} 
                                    className="transition-all duration-500"
                                />
                            </g>
                        ))}
                        
                        {centroids.map((c, i) => (
                            <g key={`c-${i}`} className="transition-all duration-500" style={{ transform: `translate(${c.x}px, ${c.y}px)` }}>
                                <path 
                                    d="M0,-8 L8,8 L-8,8 Z" 
                                    fill={c.color} 
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </g>
                        ))}
                    </svg>
                    <div className="mt-4 flex justify-between text-sm text-slate-500 dark:text-slate-400">
                        <span>Punkty: {points.length}</span>
                        <span>Centroidy: {centroids.length}</span>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-black/5 dark:border-white/10 space-y-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Sterowanie</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Liczba klastrów (K): {k}
                                </label>
                                <input 
                                    type="range" 
                                    min="2" 
                                    max="5" 
                                    value={k} 
                                    onChange={(e) => setK(parseInt(e.target.value))}
                                    className="w-full"
                                    disabled={step !== 'init'}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <button 
                                    onClick={generateRandomPoints}
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-colors text-sm font-medium"
                                >
                                    <Plus size={16} /> Losowe
                                </button>
                                <button 
                                    onClick={reset}
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-colors text-sm font-medium"
                                >
                                    <RotateCcw size={16} /> Wyczyść
                                </button>
                            </div>

                            <div className="h-px bg-slate-200 dark:bg-slate-700 w-full my-4"></div>

                            {step === 'init' && (
                                <button 
                                    onClick={initCentroids}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium shadow-sm"
                                >
                                    <Play size={18} /> Inicjalizuj Centroidy
                                </button>
                            )}

                            {step === 'assign' && (
                                <button 
                                    onClick={assignPoints}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors font-medium shadow-sm"
                                >
                                    <MousePointer2 size={18} /> Przypisz Punkty
                                </button>
                            )}

                            {step === 'update' && (
                                <button 
                                    onClick={updateCentroids}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors font-medium shadow-sm"
                                >
                                    <StepForward size={18} /> Aktualizuj Centroidy
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl border border-blue-100 text-blue-900 dark:text-blue-200 text-sm space-y-3">
                        <h4 className="font-semibold flex items-center gap-2">
                            Jak to działa?
                        </h4>
                        <ol className="list-decimal list-inside space-y-2">
                            <li><strong>Inicjalizacja:</strong> Wybieramy losowo K punktów jako początkowe środki klastrów (centroidy).</li>
                            <li><strong>Przypisanie:</strong> Każdy punkt danych jest przypisywany do najbliższego centroidu.</li>
                            <li><strong>Aktualizacja:</strong> Przesuwamy centroidy do środka ciężkości (średniej) przypisanych im punktów.</li>
                            <li>Powtarzamy kroki 2 i 3 aż centroidy przestaną się poruszać.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
