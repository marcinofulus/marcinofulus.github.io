import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Info, Activity, Target, Box, Zap } from 'lucide-react';

const WhatIsHappening = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mb-6">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
            >
                <div className="bg-blue-100 dark:bg-blue-900/50 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                    <Zap size={16} />
                </div>
                <span>Co się dzieje? (Kliknij, aby rozwinąć)</span>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
            <div className="mt-4 bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-5 rounded-r-2xl text-sm text-indigo-900 dark:text-indigo-100 leading-relaxed shadow-md">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Generator szumu Gaussowskiego (Box-Muller Transform w czasie rzeczywistym) ---
let spareRandom: number | null = null;
function fast_randn() {
    if (spareRandom !== null) {
        let val = spareRandom;
        spareRandom = null;
        return val;
    }
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); // omijamy 0
    while(v === 0) v = Math.random();
    const r = Math.sqrt(-2.0 * Math.log(u));
    const theta = 2.0 * Math.PI * v;
    spareRandom = r * Math.sin(theta);
    return r * Math.cos(theta);
}

function generateData(D: number, nTrain: number, clusterDist: number, clusterSigma: number, randomDirection: boolean) {
    spareRandom = null; 

    let dir = new Float64Array(D);
    if (randomDirection) {
        let norm = 0;
        for (let i = 0; i < D; i++) {
            dir[i] = fast_randn();
            norm += dir[i] * dir[i];
        }
        norm = Math.sqrt(norm) || 1;
        for (let i = 0; i < D; i++) dir[i] /= norm;
    } else {
        dir[0] = 1; 
    }

    const trainPts = [];
    for (let i = 0; i < nTrain; i++) {
        const label = i < nTrain / 2 ? 0 : 1;
        const sign = label === 0 ? -1 : 1;
        const coords = new Float64Array(D);
        for (let j = 0; j < D; j++) {
            coords[j] = sign * (clusterDist / 2) * dir[j] + fast_randn() * clusterSigma;
        }
        trainPts.push({ coords, label });
    }

    const testPts = [];
    const nTest = 100;
    for (let i = 0; i < nTest; i++) {
        const label = i < nTest / 2 ? 0 : 1;
        const sign = label === 0 ? -1 : 1;
        const coords = new Float64Array(D);
        for (let j = 0; j < D; j++) {
            coords[j] = sign * (clusterDist / 2) * dir[j] + fast_randn() * clusterSigma;
        }
        testPts.push({ coords, label });
    }

    return { trainPts, testPts, dir };
}

function computeAccuracy(trainPts: any[], testPts: any[], D: number) {
    let correct = 0;
    for(let testPt of testPts) {
        let bestDist = Infinity;
        let bestLabel = -1;
        for(let trainPt of trainPts) {
            let dist = 0;
            for(let j=0; j<D; j++) {
                const diff = testPt.coords[j] - trainPt.coords[j];
                dist += diff * diff;
            }
            if(dist < bestDist) {
                bestDist = dist;
                bestLabel = trainPt.label;
            }
        }
        if(bestLabel === testPt.label) correct++;
    }
    return correct / testPts.length;
}

const KDTreeVisualizer = () => {
    const [depth, setDepth] = useState(2);
    const [queryRadius, setQueryRadius] = useState(0.15);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const points = useMemo(() => {
        return Array.from({ length: 40 }, () => ({
            x: Math.random(),
            y: Math.random()
        }));
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const size = canvas.width;
        ctx.clearRect(0, 0, size, size);

        const drawNode = (pts: any[], d: number, xMin: number, xMax: number, yMin: number, yMax: number) => {
            if (pts.length === 0 || d > depth) return;

            const axis = d % 2; 
            pts.sort((a, b) => axis === 0 ? a.x - b.x : a.y - b.y);
            const medianIdx = Math.floor(pts.length / 2);
            const median = pts[medianIdx];

            ctx.beginPath();
            ctx.strokeStyle = axis === 0 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(239, 68, 68, 0.6)';
            ctx.lineWidth = Math.max(1, 2.5 - d * 0.3);
            
            if (axis === 0) {
                ctx.moveTo(median.x * size, yMin * size);
                ctx.lineTo(median.x * size, yMax * size);
                ctx.stroke();
                drawNode(pts.slice(0, medianIdx), d + 1, xMin, median.x, yMin, yMax);
                drawNode(pts.slice(medianIdx + 1), d + 1, median.x, xMax, yMin, yMax);
            } else {
                ctx.moveTo(xMin * size, median.y * size);
                ctx.lineTo(xMax * size, median.y * size);
                ctx.stroke();
                drawNode(pts.slice(0, medianIdx), d + 1, xMin, xMax, yMin, median.y);
                drawNode(pts.slice(medianIdx + 1), d + 1, xMin, xMax, median.y, yMax);
            }

            ctx.beginPath();
            ctx.arc(median.x * size, median.y * size, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = '#374151';
            ctx.fill();
        };

        drawNode(points, 0, 0, 1, 0, 1);

        // Draw query ball
        const qx = 0.5 * size;
        const qy = 0.5 * size;
        const qr = queryRadius * size;
        ctx.beginPath();
        ctx.arc(qx, qy, qr, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.8)';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.fillStyle = 'rgba(168, 85, 247, 0.05)';
        ctx.fill();
        ctx.setLineDash([]);

    }, [points, depth, queryRadius]);

    return (
        <div className="flex flex-col items-center">
            <canvas ref={canvasRef} width={280} height={280} className="bg-white dark:bg-slate-900 rounded-lg shadow-inner mb-4 border border-gray-100 dark:border-slate-800" />
            <div className="w-full max-w-[280px] space-y-3">
                <div>
                    <label className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Głębokość podziału: {depth}</label>
                    <input type="range" min="0" max="6" step="1" value={depth} onChange={(e) => setDepth(parseInt(e.target.value))} className="w-full accent-blue-500" />
                </div>
                <div>
                    <label className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Promień zapytania: {queryRadius.toFixed(2)}</label>
                    <input type="range" min="0.05" max="0.4" step="0.01" value={queryRadius} onChange={(e) => setQueryRadius(parseFloat(e.target.value))} className="w-full accent-purple-500" />
                </div>
            </div>
        </div>
    );
};

const KDTree3D = () => {
    const [depth, setDepth] = useState(2);
    
    const points = useMemo(() => {
        return Array.from({ length: 12 }).map(() => ({
            x: Math.random() * 160 - 80,
            y: Math.random() * 160 - 80,
            z: Math.random() * 160 - 80
        }));
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-[280px] h-[280px] bg-white dark:bg-slate-900 rounded-lg shadow-inner mb-4 border border-gray-100 dark:border-slate-800 flex items-center justify-center overflow-hidden" style={{ perspective: '800px' }}>
                <motion.div 
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative w-40 h-40"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Cube faces */}
                    <div className="absolute inset-0 border border-gray-300 dark:border-slate-700 bg-blue-500/5" style={{ transform: 'translateZ(80px)' }} />
                    <div className="absolute inset-0 border border-gray-300 dark:border-slate-700 bg-blue-500/5" style={{ transform: 'translateZ(-80px)' }} />
                    <div className="absolute inset-0 border border-gray-300 dark:border-slate-700 bg-blue-500/5" style={{ transform: 'rotateY(90deg) translateZ(80px)' }} />
                    <div className="absolute inset-0 border border-gray-300 dark:border-slate-700 bg-blue-500/5" style={{ transform: 'rotateY(-90deg) translateZ(80px)' }} />
                    <div className="absolute inset-0 border border-gray-300 dark:border-slate-700 bg-blue-500/5" style={{ transform: 'rotateX(90deg) translateZ(80px)' }} />
                    <div className="absolute inset-0 border border-gray-300 dark:border-slate-700 bg-blue-500/5" style={{ transform: 'rotateX(-90deg) translateZ(80px)' }} />

                    {/* Split Planes */}
                    {depth >= 1 && (
                        <div className="absolute inset-y-0 left-1/2 w-px bg-blue-500/40" style={{ transform: 'translateZ(0) rotateY(0)', width: '160px', height: '160px', marginLeft: '-80px', backgroundColor: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.4)' }} />
                    )}
                    {depth >= 2 && (
                        <div className="absolute inset-x-0 top-1/2 h-px bg-red-500/40" style={{ transform: 'rotateX(90deg)', width: '160px', height: '160px', marginTop: '-80px', backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '1px solid rgba(239, 68, 68, 0.4)' }} />
                    )}
                    {depth >= 3 && (
                        <div className="absolute inset-0 border-l border-green-500/40" style={{ transform: 'rotateY(90deg)', width: '160px', height: '160px', backgroundColor: 'rgba(34, 197, 94, 0.2)', border: '1px solid rgba(34, 197, 94, 0.4)' }} />
                    )}

                    {/* Points in 3D */}
                    {points.map((p, i) => (
                        <div 
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-slate-800 dark:bg-slate-200 rounded-full"
                            style={{ 
                                transform: `translate3d(${p.x}px, ${p.y}px, ${p.z}px)` 
                            }}
                        />
                    ))}
                </motion.div>
            </div>
            <div className="w-full max-w-[280px] space-y-3">
                <div>
                    <label className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Głębokość (3D): {depth}</label>
                    <input type="range" min="0" max="3" step="1" value={depth} onChange={(e) => setDepth(parseInt(e.target.value))} className="w-full accent-green-500" />
                </div>
            </div>
        </div>
    );
};

const WatermelonProjection = () => {
    const [dimExp, setDimExp] = useState(1);
    const [dist, setDist] = useState(2.0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const dim = useMemo(() => Math.pow(2, dimExp), [dimExp]);

    const points = useMemo(() => {
        const pts = [];
        const nPerCluster = 500;
        
        // Optimization for high dimensions:
        // Instead of generating D coordinates, we use the fact that:
        // 1. Projection of a D-dim Gaussian onto 2D is a 2D Gaussian.
        // 2. The squared norm of a D-dim Gaussian follows Chi-squared(D) distribution.
        
        // Helper to generate Chi-squared(k)
        const chi2 = (k: number) => {
            if (k <= 0) return 0;
            if (k < 30) {
                let sum = 0;
                for(let i=0; i<k; i++) {
                    const z = fast_randn();
                    sum += z * z;
                }
                return sum;
            } else {
                // Wilson-Hilferty transformation for k >= 30
                const z = fast_randn();
                return k * Math.pow(1 - 2/(9*k) + z * Math.sqrt(2/(9*k)), 3);
            }
        };

        // Separation vector projection
        // A random unit vector in D-space projected to 2D has components (z1/R, z2/R)
        // where z1, z2 ~ N(0,1) and R^2 ~ Chi2(D)
        const z1_sep = fast_randn();
        const z2_sep = fast_randn();
        const r2_tail_sep = chi2(dim - 2);
        const norm_sep = Math.sqrt(z1_sep * z1_sep + z2_sep * z2_sep + r2_tail_sep) || 1;
        
        const sepX = (z1_sep / norm_sep) * dist;
        const sepY = (z2_sep / norm_sep) * dist;

        for (let cluster = 0; cluster < 2; cluster++) {
            for (let i = 0; i < nPerCluster; i++) {
                const z1 = fast_randn();
                const z2 = fast_randn();
                const r2_tail = chi2(dim - 2);
                const total_norm = Math.sqrt(z1 * z1 + z2 * z2 + r2_tail) || 1;
                
                // Point in D-sphere: pick radius r ~ U(0,1)^(1/D)
                const r = Math.pow(Math.random(), 1 / dim);
                const scale = r / total_norm;
                
                let px = z1 * scale;
                let py = z2 * scale;
                
                if (cluster === 1) {
                    px += sepX;
                    py += sepY;
                }
                
                pts.push({
                    x: px,
                    y: py,
                    cluster: cluster
                });
            }
        }
        return pts;
    }, [dim, dist]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const size = canvas.width;
        ctx.clearRect(0, 0, size, size);
        const cx = size / 2;
        const cy = size / 2;
        
        // Dynamic scaling: as dimension increases, points concentrate in the center.
        // We zoom in to keep them visible, but keep the boundary visible to show the "watermelon" context.
        const baseScale = size * 0.35;
        const zoomFactor = Math.pow(dim, 0.4); // Stronger zoom for high dimensions
        const scale = baseScale * zoomFactor;

        // Draw conceptual boundary (The "Unit Sphere" edge)
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = 'rgba(156, 163, 175, 0.3)';
        ctx.beginPath();
        ctx.arc(cx, cy, scale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        points.forEach(p => {
            ctx.beginPath();
            ctx.arc(cx + p.x * scale, cy + p.y * scale, 1.2, 0, Math.PI * 2);
            ctx.fillStyle = p.cluster === 0 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(239, 68, 68, 0.6)';
            ctx.fill();
        });
    }, [points]);

    return (
        <div className="flex flex-col items-center bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Iluzja Rzutu: Dlaczego rzuty kłamią?</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
                <div className="flex flex-col items-center">
                    <canvas ref={canvasRef} width={300} height={300} className="bg-gray-50 dark:bg-slate-800/50 rounded-xl shadow-inner mb-4 border border-gray-100 dark:border-slate-800" />
                    <p className="text-[10px] text-gray-400 font-medium italic">Rzut 2D klastrów z przestrzeni {dim}D</p>
                </div>

                <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
                        <div className="mb-4">
                            <label className="flex justify-between text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                                <span>Wymiarowość (D)</span>
                                <span className="text-blue-600 dark:text-blue-400">{dim >= 1024 ? (dim/1024).toFixed(0) + 'k' : dim}D</span>
                            </label>
                            <input 
                                type="range" min="1" max="15" step="1" 
                                value={dimExp} 
                                onChange={(e) => setDimExp(parseInt(e.target.value))} 
                                className="w-full accent-blue-500" 
                            />
                        </div>
                        <div>
                            <label className="flex justify-between text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                                <span>Odległość w {dim}D</span>
                                <span className="text-purple-600 dark:text-purple-400">{dist.toFixed(1)}</span>
                            </label>
                            <input 
                                type="range" min="0.5" max="10.0" step="0.1" 
                                value={dist} 
                                onChange={(e) => setDist(parseFloat(e.target.value))} 
                                className="w-full accent-purple-500" 
                            />
                        </div>
                    </div>

                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-900/50 text-xs text-indigo-900 dark:text-indigo-200 leading-relaxed">
                        <p className="mb-2"><strong>Obserwacja:</strong> W 2D klastry są wyraźnie oddzielone. Jednak w wysokich wymiarach (np. 32k D), wektor przesunięcia między nimi "rozmywa się" na tysiące osi.</p>
                        <p>Nawet jeśli klastry są od siebie bardzo daleko w pełnej przestrzeni, ich rzut na dowolne 2D prawie zawsze pokaże je jako <strong>nachodzące na siebie</strong>. To fundamentalny powód, dla którego wizualizacje (jak PCA czy t-SNE) mogą sugerować brak separacji tam, gdzie ona faktycznie istnieje.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HughesPhenomenon = () => {
    const [dim, setDim] = useState(2); 
    const [params, setParams] = useState({ nTrain: 100, clusterDist: 2.0, clusterSigma: 1.0, randomDirection: false });
    
    const [calculatedPoints, setCalculatedPoints] = useState<Record<number, number>>({});
    const [runningAverage, setRunningAverage] = useState<Record<number, {total: number, count: number}>>({}); 
    
    const [isCalculatingAll, setIsCalculatingAll] = useState(false);
    const [currentData, setCurrentData] = useState<any>(null);
    
    const MAX_D_EXP = 15; 
    const MAX_D = Math.pow(2, MAX_D_EXP);
    
    const steps = useMemo(() => {
        const arr = [];
        for(let p=0; p<=MAX_D_EXP; p++) arr.push(Math.pow(2, p));
        return arr;
    }, []);

    useEffect(() => {
        setCurrentData(generateData(dim, params.nTrain, params.clusterDist, params.clusterSigma, params.randomDirection));
    }, [dim, params]);

    useEffect(() => {
        if (!isCalculatingAll && currentData && calculatedPoints[dim] === undefined) {
            const timer = setTimeout(() => {
                const acc = computeAccuracy(currentData.trainPts, currentData.testPts, dim);
                setCalculatedPoints(prev => ({...prev, [dim]: acc}));
            }, 50); 
            return () => clearTimeout(timer);
        }
    }, [dim, currentData, calculatedPoints, isCalculatingAll]);

    const handleParamChange = (field: string, value: any) => {
        setParams(p => ({ ...p, [field]: value }));
        setCalculatedPoints({}); 
        setRunningAverage({}); 
    };

    const handleCalculateAll = async () => {
        setIsCalculatingAll(true);
        
        setCalculatedPoints({});
        setCurrentData(generateData(dim, params.nTrain, params.clusterDist, params.clusterSigma, params.randomDirection));
        
        const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        
        for (let d of steps) {
            await sleep(10); 
            
            const data = generateData(d, params.nTrain, params.clusterDist, params.clusterSigma, params.randomDirection);
            const acc = computeAccuracy(data.trainPts, data.testPts, d);
            
            setCalculatedPoints(prev => ({...prev, [d]: acc}));
            
            setRunningAverage(prev => {
                const current = prev[d] || { total: 0, count: 0 };
                return {
                    ...prev,
                    [d]: {
                        total: current.total + acc,
                        count: current.count + 1
                    }
                };
            });
        }
        setIsCalculatingAll(false);
    };

    const width = 500;
    const height = 200;
    const padding = { top: 20, right: 20, bottom: 30, left: 40 };
    const plotW = width - padding.left - padding.right;
    const plotH = height - padding.top - padding.bottom;

    const getX = (d: number) => padding.left + (Math.log2(d) / MAX_D_EXP) * plotW;
    const getY = (acc: number) => padding.top + plotH - ((acc - 0.4) / 0.6) * plotH;

    const sortedDims = Object.keys(calculatedPoints).map(Number).sort((a,b) => a-b);
    const testPath = sortedDims.map((d, i) => `${i===0 ? 'M' : 'L'} ${getX(d)} ${getY(calculatedPoints[d])}`).join(' ');
    const trainPath = `M ${getX(1)} ${getY(1.0)} L ${getX(MAX_D)} ${getY(1.0)}`;

    const avgSortedDims = Object.keys(runningAverage).map(Number).sort((a,b) => a-b);
    const maxRuns = avgSortedDims.length > 0 ? Math.max(...avgSortedDims.map(d => runningAverage[d].count)) : 0;
    const hasAverages = maxRuns > 1; 
    
    const avgPath = avgSortedDims.map((d, i) => {
        const avgVal = runningAverage[d].total / runningAverage[d].count;
        return `${i===0 ? 'M' : 'L'} ${getX(d)} ${getY(avgVal)}`;
    }).join(' ');

    const maxVal = Math.max(4, (params.clusterDist / 2) + 3 * params.clusterSigma);
    const viewSize = maxVal * 2;
    const pointRadius = maxVal * 0.03;
    
    const currentAcc = calculatedPoints[dim];
    const isCalculated = currentAcc !== undefined;
    const accBoxColor = !isCalculated ? 'bg-gray-50 border-gray-200' : (currentAcc < 0.6 ? 'bg-red-50 border-red-200' : 'bg-indigo-50 border-indigo-200');
    const accBoxTextColor = !isCalculated ? 'text-gray-400' : (currentAcc < 0.6 ? 'text-red-600' : 'text-indigo-600');

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">1. Zjawisko Hughesa (Przeuczenie / Overfitting)</h2>
            
            <WhatIsHappening title="Zjawisko Hughesa">
                <p className="mb-2"><strong>Problem:</strong> Model (1-NN) stara się odróżnić kropki niebieskie od czerwonych. Algorytm dostaje nowe cechy, ale większość z nich to bezużyteczny szum.</p>
                <p className="mb-2"><strong>Dlaczego tak się dzieje:</strong> Gdy wchodzimy w wysokie wymiary, odległości ulegają zaburzeniu. Model zaczyna uczyć się "na pamięć" szumu. Skuteczność na danych treningowych to zawsze 100%, ale na nowych (Test) dramatycznie spada do losowych ~50%.</p>
                <p>W 1000D przestrzeni, każdy punkt testowy jest niemal tak samo odległy od każdego punktu treningowego. Wybór "najbliższego" staje się rzutem monetą.</p>
            </WhatIsHappening>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
                    <div>
                        <label className="flex justify-between text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                            <span>Liczba Wymiarów (D)</span>
                            <span className="text-indigo-600">{dim}</span>
                        </label>
                        <input 
                            type="range" min="0" max={MAX_D_EXP} step="1" 
                            value={Math.log2(dim)} 
                            onChange={(e) => setDim(Math.pow(2, parseInt(e.target.value)))} 
                            className="w-full accent-indigo-600 mb-2" 
                        />
                        <button 
                            onClick={handleCalculateAll} 
                            disabled={isCalculatingAll}
                            className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 border border-indigo-200 font-semibold py-1.5 px-3 rounded text-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                        >
                            {isCalculatingAll ? 'Obliczanie...' : 'Przelicz ponownie (Run)'}
                        </button>
                    </div>
                    <div>
                        <label className="flex justify-between text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                            <span>Ilość pkt. tren. (N)</span>
                            <span className="text-green-600">{params.nTrain}</span>
                        </label>
                        <input type="range" min="20" max="400" step="20" value={params.nTrain} onChange={(e) => handleParamChange('nTrain', parseInt(e.target.value))} className="w-full accent-green-600" />
                    </div>
                    <div>
                        <label className="flex justify-between text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                            <span>Odl. Środków (Sygnał)</span>
                            <span className="text-blue-600">{params.clusterDist.toFixed(1)}</span>
                        </label>
                        <input type="range" min="0" max="10" step="0.5" value={params.clusterDist} onChange={(e) => handleParamChange('clusterDist', parseFloat(e.target.value))} className="w-full accent-blue-600" />
                    </div>
                    <div>
                        <label className="flex justify-between text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                            <span>Rozrzut (Sigma)</span>
                            <span className="text-pink-600">{params.clusterSigma.toFixed(1)}</span>
                        </label>
                        <input type="range" min="0.1" max="5.0" step="0.1" value={params.clusterSigma} onChange={(e) => handleParamChange('clusterSigma', parseFloat(e.target.value))} className="w-full accent-pink-600" />
                    </div>
                </div>

                <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 mt-2 shadow-sm">
                    <input 
                        type="checkbox" 
                        id="randomDir"
                        checked={params.randomDirection}
                        onChange={(e) => handleParamChange('randomDirection', e.target.checked)}
                        className="w-5 h-5 accent-indigo-600 rounded cursor-pointer shrink-0"
                    />
                    <label htmlFor="randomDir" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer font-bold flex-1">
                        Losowy kierunek klastrów w {dim}D przestrzeni
                    </label>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400 max-w-xs text-right hidden sm:block">
                        Zamiast sztywno układać sygnał tylko na osi X, algorytm dobiera losowy kąt rozdzielenia. Zmiana resetuje wyliczenia.
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Rzut 2D (Scatter Plot) */}
                <div className="flex flex-col items-center">
                    <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Rzut 2D (Cecha 1 vs Cecha 2)</h3>
                    <div className="w-full max-w-[300px] aspect-square relative bg-white dark:bg-slate-900 border border-gray-300 dark:border-white/10 rounded shadow-inner">
                        <svg viewBox={`-${maxVal} -${maxVal} ${viewSize} ${viewSize}`} className="w-full h-full overflow-visible">
                            <line x1={`-${maxVal}`} y1="0" x2={maxVal} y2="0" stroke="#e5e7eb" strokeWidth={maxVal * 0.01} className="dark:opacity-20" />
                            <line x1="0" y1={`-${maxVal}`} x2="0" y2={maxVal} stroke="#e5e7eb" strokeWidth={maxVal * 0.01} className="dark:opacity-20" />
                            
                            {currentData && currentData.trainPts.map((p: any, i: number) => (
                                <circle 
                                    key={i} 
                                    cx={p.coords[0]} 
                                    cy={-(p.coords[1] || 0)} 
                                    r={pointRadius} 
                                    fill={p.label === 0 ? '#3b82f6' : '#ef4444'} 
                                    opacity="0.6" 
                                />
                            ))}
                        </svg>
                        <div className="absolute top-1 left-2 text-[10px] text-gray-400 font-medium">Oś Y: Cecha 2</div>
                        <div className="absolute bottom-1 right-2 text-[10px] text-gray-400 font-medium">Oś X: Cecha 1</div>
                    </div>
                    
                    {params.randomDirection && dim > 2 ? (
                        <p className="text-[10px] text-orange-600 font-bold mt-3 text-center max-w-[300px] leading-tight px-2">
                            Iluzja wymiarowości: w rzucie 2D klastry zlewają się, ponieważ wylosowany wektor uległ spłaszczeniu geometrycznemu.
                        </p>
                    ) : (
                        <p className="text-xs text-gray-500 mt-3 text-center">Niebieskie (Klasa 0) vs Czerwone (Klasa 1).</p>
                    )}
                </div>

                {/* Wykres Liniowy (Krzywa Hughesa) */}
                <div className="relative flex flex-col items-center">
                    <div className="w-full flex justify-between gap-4 mb-4">
                        <div className="flex-1 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-2 text-center">
                            <div className="text-[10px] text-green-700 dark:text-green-400 font-bold mb-0.5 uppercase tracking-wide">Celność (Trening)</div>
                            <div className="text-xl font-black text-green-600">100%</div>
                        </div>
                        <div className={`flex-1 border rounded-lg p-2 text-center transition-colors ${accBoxColor}`}>
                            <div className={`text-[10px] font-bold mb-0.5 uppercase tracking-wide ${accBoxTextColor}`}>Celność (Test) dla D={dim}</div>
                            <div className={`text-xl font-black ${accBoxTextColor}`}>
                                {isCalculated ? (currentAcc * 100).toFixed(1) + '%' : '...'}
                            </div>
                        </div>
                    </div>

                    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-inner">
                        <line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} stroke="#d1d5db" />
                        <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke="#d1d5db" />
                        
                        <text x={padding.left - 5} y={getY(1.0) + 4} fontSize="10" textAnchor="end" fill="#6b7280">100%</text>
                        <text x={padding.left - 5} y={getY(0.7) + 4} fontSize="10" textAnchor="end" fill="#6b7280">70%</text>
                        <text x={padding.left - 5} y={getY(0.5) + 4} fontSize="10" textAnchor="end" fill="#6b7280">50%</text>

                        {/* Pozioma linia przerywana dla 50% (losowość) */}
                        <line x1={padding.left} y1={getY(0.5)} x2={width - padding.right} y2={getY(0.5)} stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,4" />
                        <text x={width - padding.right - 5} y={getY(0.5) - 5} fontSize="10" textAnchor="end" fill="#9ca3af" className="italic">Losowość (50%)</text>

                        <text x={getX(1)} y={height - 10} fontSize="10" textAnchor="middle" fill="#6b7280">1D</text>
                        <text x={getX(32)} y={height - 10} fontSize="10" textAnchor="middle" fill="#6b7280">32D</text>
                        <text x={getX(1024)} y={height - 10} fontSize="10" textAnchor="middle" fill="#6b7280">1024D</text>
                        <text x={getX(32768)} y={height - 10} fontSize="10" textAnchor="middle" fill="#6b7280">32kD</text>

                        {steps.map(d => calculatedPoints[d] === undefined && (
                            <circle key={`empty-${d}`} cx={getX(d)} cy={height - padding.bottom} r="2" fill="#d1d5db" />
                        ))}

                        {hasAverages && (
                            <path d={avgPath} fill="none" stroke="#9ca3af" strokeWidth="4" strokeLinejoin="round" opacity="0.45" />
                        )}

                        <path d={trainPath} fill="none" stroke="#16a34a" strokeWidth="2" strokeDasharray="4,4" />
                        {sortedDims.length > 1 && <path d={testPath} fill="none" stroke="#4f46e5" strokeWidth="3" />}

                        {sortedDims.map(d => (
                            <circle key={d} cx={getX(d)} cy={getY(calculatedPoints[d])} r="3.5" fill="#4f46e5" />
                        ))}

                        <line x1={getX(dim)} y1={padding.top} x2={getX(dim)} y2={height - padding.bottom} stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
                        <circle cx={getX(dim)} cy={getY(1.0)} r="4" fill="#16a34a" />
                        
                        {isCalculated && (
                            <circle cx={getX(dim)} cy={getY(currentAcc)} r="6" fill="#ef4444" stroke="#fff" strokeWidth="2.5" />
                        )}
                    </svg>
                    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-3 text-xs w-full">
                        <span className="flex items-center gap-1 text-green-700"><div className="w-3 h-0 border-t-2 border-dashed border-green-600"></div> Trening</span>
                        <span className="flex items-center gap-1 text-indigo-700"><div className="w-3 h-0 border-t-2 border-indigo-600"></div> Aktualny Test</span>
                        {hasAverages && (
                            <span className="flex items-center gap-1 text-gray-600 font-medium">
                                <div className="w-3 h-1.5 bg-gray-400 opacity-60 rounded-sm"></div> Średnia ({maxRuns} prób)
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

function buildKDTree(pts: any[], depth: number, K: number): any {
    if(pts.length === 0) return null;
    let axis = depth % K;
    pts.sort((a,b) => a[axis] - b[axis]);
    let median = Math.floor(pts.length / 2);
    return {
        point: pts[median],
        axis: axis,
        left: buildKDTree(pts.slice(0, median), depth + 1, K),
        right: buildKDTree(pts.slice(median + 1), depth + 1, K)
    };
}

function searchKDTree(node: any, target: any[], depth: number, K: number, visited: {count: number}, best: {dist: number}) {
    if(!node) return;
    visited.count++;
    
    let dist = 0;
    for(let i=0; i<K; i++) {
        let diff = node.point[i] - target[i];
        dist += diff * diff;
    }
    
    if(dist < best.dist) {
        best.dist = dist;
    }
    
    let axis = node.axis;
    let diff = target[axis] - node.point[axis];
    
    let first = diff < 0 ? node.left : node.right;
    let second = diff < 0 ? node.right : node.left;
    
    searchKDTree(first, target, depth+1, K, visited, best);
    
    if(diff * diff < best.dist) {
        searchKDTree(second, target, depth+1, K, visited, best);
    }
}

const KDTreeDegradation = () => {
    const [dim, setDim] = useState(2);
    const MAX_D = 40;
    const N_POINTS = 2000;
    const N_QUERIES = 20;

    const treeData = useMemo(() => {
        const data = [];
        for(let d=2; d<=MAX_D; d+=2) {
            const points = Array.from({length: N_POINTS}, () => Array.from({length: d}, () => Math.random()));
            const tree = buildKDTree(points, 0, d);
            
            const queries = Array.from({length: N_QUERIES}, () => Array.from({length: d}, () => Math.random()));
            let totalVisited = 0;
            
            for(let q of queries) {
                let visited = { count: 0 };
                let best = { dist: Infinity };
                searchKDTree(tree, q, 0, d, visited, best);
                totalVisited += visited.count;
            }
            data.push({ d, visited: totalVisited / N_QUERIES });
        }
        return data;
    }, []);

    const currentData = treeData.find(p => p.d === dim) || treeData[0];
    const bruteForceChecks = N_POINTS;
    const percentageScanned = (currentData.visited / bruteForceChecks) * 100;

    const width = 500;
    const height = 200;
    const padding = { top: 20, right: 20, bottom: 30, left: 50 };
    const plotW = width - padding.left - padding.right;
    const plotH = height - padding.top - padding.bottom;

    const getX = (d: number) => padding.left + ((d - 2) / (MAX_D - 2)) * plotW;
    const getY = (v: number) => padding.top + plotH - (v / N_POINTS) * plotH;

    const treePath = treeData.map((p, i) => `${i===0 ? 'M' : 'L'} ${getX(p.d)} ${getY(p.visited)}`).join(' ');
    const brutePath = `M ${getX(2)} ${getY(bruteForceChecks)} L ${getX(MAX_D)} ${getY(bruteForceChecks)}`;

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">2. Załamanie Struktur Danych (KD-Tree vs Brute Force)</h2>
            
            <WhatIsHappening title="Załamanie Struktur Danych">
                <p className="mb-2"><strong>Problem:</strong> Inteligentne struktury indeksujące, takie jak Drzewa KD (KD-Trees), są stworzone, by ekstremalnie przyspieszać wyszukiwanie najbliższego sąsiada w 2D czy 3D. Ich siła polega na <em>odcinaniu całych gałęzi drzewa</em>.</p>
                <p className="mb-2"><strong>Dlaczego tak się dzieje:</strong> W wysokich wymiarach zjawisko <strong>Koncentracji Miary</strong> sprawia, że kule poszukiwań "przecinają" niemal wszystkie płaszczyzny podziału drzewa. W rezultacie struktura staje się bezużyteczna, a algorytm zmuszony jest sprawdzić 100% węzłów!</p>
                <p>To tak, jakbyś szukał kluczy w domu, gdzie każda ściana jest przezroczysta i musisz zajrzeć do każdego pokoju naraz.</p>
            </WhatIsHappening>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <div>
                        <label className="flex justify-between font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <span>Liczba Wymiarów Przestrzeni</span>
                            <span className="text-purple-600 font-bold">D = {dim}</span>
                        </label>
                        <input 
                            type="range" min="2" max={MAX_D} step="2" value={dim} 
                            onChange={(e) => setDim(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600 mb-2"
                        />
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                                Obserwuj, ile punktów musi fizycznie sprawdzić algorytm, by znaleźć 1 najbliższego sąsiada z {N_POINTS} punktów. 
                                W 2D KD-Tree jest błyskawiczne, ale w 40D staje się wolniejsze od Brute Force!
                            </p>
                    </div>

                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-gray-200 dark:border-white/10 text-center">
                            <h3 className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-4">Dlaczego to się psuje?</h3>
                            <p className="text-xs text-gray-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                                W 2D kula zapytania przecina tylko kilka linii podziału. Ale w 40D, ze względu na <strong>koncentrację miary</strong>, 
                                niemal każda płaszczyzna podziału znajduje się "blisko" kuli zapytania. 
                                <br/><br/>
                                Algorytm nie może niczego odrzucić i musi odwiedzić prawie wszystkie liście drzewa, co czyni go wolniejszym od zwykłego skanowania (Brute Force).
                            </p>
                        </div>
                </div>

                <div className="space-y-4">
                    <div className="relative">
                        <div className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-3 relative overflow-hidden">
                            <div className="relative z-10 flex justify-between items-center">
                                <div>
                                    <div className="text-xs font-bold text-gray-700 dark:text-gray-200 mb-0.5">Pętla Brute Force</div>
                                    <div className="text-[10px] text-gray-500 dark:text-gray-400">Sprawdza wszystkie punkty (O(N))</div>
                                </div>
                                <div className="text-xl font-black text-gray-700 dark:text-gray-200">{bruteForceChecks}</div>
                            </div>
                            <div className="absolute top-0 left-0 bottom-0 bg-gray-200 dark:bg-slate-700" style={{ width: '100%', opacity: 0.3 }}></div>
                        </div>

                        <div className={`border rounded-lg p-3 relative overflow-hidden transition-colors ${percentageScanned > 90 ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' : 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'}`}>
                            <div className="relative z-10 flex justify-between items-center">
                                <div>
                                    <div className={`text-xs font-bold mb-0.5 ${percentageScanned > 90 ? 'text-red-700 dark:text-red-400' : 'text-purple-700 dark:text-purple-400'}`}>Inteligentne Drzewo (KD-Tree)</div>
                                    <div className={`text-[10px] ${percentageScanned > 90 ? 'text-red-600 dark:text-red-500' : 'text-purple-600 dark:text-purple-500'}`}>
                                        Zeskanowano <strong>{percentageScanned.toFixed(1)}%</strong> bazy
                                    </div>
                                </div>
                                <div className={`text-xl font-black ${percentageScanned > 90 ? 'text-red-600 dark:text-red-400' : 'text-purple-600 dark:text-purple-400'}`}>
                                    {Math.round(currentData.visited)}
                                </div>
                            </div>
                            <div className={`absolute top-0 left-0 bottom-0 transition-all duration-300 ${percentageScanned > 90 ? 'bg-red-100 dark:bg-red-900/40' : 'bg-purple-200 dark:bg-purple-900/40'}`} style={{ width: `${percentageScanned}%`, opacity: 0.5 }}></div>
                        </div>
                    </div>

                    <div className="relative">
                        <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 text-center">Ilość sprawdzonych węzłów (Mniej = Lepiej)</h3>
                        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-inner">
                            <line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} stroke="#d1d5db" />
                            <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke="#d1d5db" />
                            
                            <text x={padding.left - 5} y={getY(2000) + 4} fontSize="10" textAnchor="end" fill="#6b7280">2000</text>
                            <text x={padding.left - 5} y={getY(1000) + 4} fontSize="10" textAnchor="end" fill="#6b7280">1000</text>
                            <text x={padding.left - 5} y={getY(0) + 0} fontSize="10" textAnchor="end" fill="#6b7280">0</text>

                            <text x={getX(2)} y={height - 10} fontSize="10" textAnchor="middle" fill="#6b7280">2D</text>
                            <text x={getX(20)} y={height - 10} fontSize="10" textAnchor="middle" fill="#6b7280">20D</text>
                            <text x={getX(40)} y={height - 10} fontSize="10" textAnchor="middle" fill="#6b7280">40D</text>

                            <path d={brutePath} fill="none" stroke="#6b7280" strokeWidth="2" strokeDasharray="4,4" />
                            <path d={treePath} fill="none" stroke="#9333ea" strokeWidth="3" />

                            <line x1={getX(dim)} y1={padding.top} x2={getX(dim)} y2={height - padding.bottom} stroke="#ef4444" strokeWidth="1" />
                            <circle cx={getX(dim)} cy={getY(currentData.visited)} r="5" fill="#ef4444" stroke="#fff" strokeWidth="2" />
                        </svg>
                        <div className="flex justify-center gap-6 mt-2 text-xs">
                            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400"><div className="w-3 h-0 border-t-2 border-dashed border-gray-500"></div> Brute Force</span>
                            <span className="flex items-center gap-1 text-purple-700 dark:text-purple-400"><div className="w-3 h-0 border-t-2 border-purple-600"></div> KD-Tree</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Chapter2() {
    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10 p-6 md:p-8">
                <h1 className="text-3xl font-bold mb-3 flex items-center gap-3 text-slate-800 dark:text-slate-100">
                    <Activity className="text-blue-500" />
                    Załamanie Algorytmów
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    Po zrozumieniu paradoksów geometrycznych (Koncentracja Miary i Odległości), nadszedł czas, aby sprawdzić, <strong>jak wysokie wymiary psują algorytmy</strong>. Poniższe interaktywne demonstracje ilustrują, dlaczego naiwne podejście do wielu cech niszczy modele uczenia maszynowego oraz spowalnia zaawansowane struktury danych.
                </p>
            </div>

            <HughesPhenomenon />
            
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Interludium: Dlaczego rzuty kłamią?</h2>
                <div className="max-w-3xl mb-8">
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        Większość wizualizacji wysokich wymiarów to rzuty na 2D. To bardzo niebezpieczne! 
                        W 2D wydaje się, że punkty są blisko środka, ale w rzeczywistości są one na samej krawędzi (w skórce arbuza).
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-bold">
                        To złudzenie sprawia, że algorytmy takie jak k-NN czy k-Means "wariują", bo widzą coś innego niż podpowiada nam intuicja 2D.
                    </p>
                </div>
                <WatermelonProjection />
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Jak działa KD-Tree? (Podział Przestrzeni)</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Algorytm KD-Tree dzieli przestrzeń na coraz mniejsze "pudełka" (hiperprostokąty). 
                            W każdym kroku wybieramy jeden wymiar (np. X, potem Y, potem Z) i dzielimy dane wzdłuż mediany.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/50">
                            <h4 className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">Dlaczego to jest szybkie?</h4>
                            <p className="text-xs text-blue-700 dark:text-blue-400">
                                Podczas szukania sąsiada, jeśli "pudełko" jest zbyt daleko od naszej kuli zapytania, 
                                możemy <strong>odrzucić całą gałąź drzewa</strong> bez sprawdzania punktów w środku.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-slate-800">
                            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">Przykład 2D</h4>
                            <KDTreeVisualizer />
                        </div>
                        <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-slate-800">
                            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">Przykład 3D</h4>
                            <KDTree3D />
                        </div>
                    </div>
                </div>
            </div>

            <KDTreeDegradation />
            
            <footer className="text-center text-gray-500 text-sm py-4">
                Modele działają na żywo w Twojej przeglądarce, wykonując dziesiątki milionów obliczeń!
            </footer>
        </div>
    );
}
