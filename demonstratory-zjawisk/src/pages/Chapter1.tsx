import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Info, BrainCircuit, Box, CircleDashed, TrendingUp, Circle } from 'lucide-react';
import { motion } from 'motion/react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// --- Math Helpers --- //
const getSphereVolume = (D: number, R: number = 1) => {
    let vol = 1;
    if (D % 2 === 0) {
        const k = D / 2;
        let factorial = 1;
        for (let i = 1; i <= k; i++) factorial *= i;
        vol = Math.pow(Math.PI, k) / factorial;
    } else {
        const k = (D - 1) / 2;
        let doubleFactorial = 1;
        for (let i = 1; i <= D; i += 2) doubleFactorial *= i;
        vol = 2 * Math.pow(2 * Math.PI, k) / doubleFactorial;
    }
    return vol * Math.pow(R, D);
};

const getEdibleFraction = (D: number, epsilon: number, shape: string) => {
    if (shape === 'cube' || shape === 'sphere') {
        return Math.pow(1 - epsilon, D);
    } else if (shape === 'gaussian') {
        const R_max = Math.sqrt(D) + 1.5;
        const T = R_max * (1 - epsilon);
        const x = (T * T) / D;
        const mu = 1 - 2 / (9 * D);
        const sigma = Math.sqrt(2 / (9 * D));
        const z = (Math.pow(x, 1 / 3) - mu) / sigma;
        
        const phi = (z: number) => {
            const a1 =  0.254829592;
            const a2 = -0.284496736;
            const a3 =  1.421413741;
            const a4 = -1.453152027;
            const a5 =  1.061405429;
            const p  =  0.3275911;
            const sign = z < 0 ? -1 : 1;
            const x_abs = Math.abs(z) / Math.sqrt(2.0);
            const t = 1.0 / (1.0 + p * x_abs);
            const erf = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x_abs * x_abs);
            return 0.5 * (1.0 + sign * erf);
        };
        return phi(z);
    }
    return 0;
};

const randomNormal = () => {
    let u = 0, v = 0;
    while(u === 0) u = Math.random();
    while(v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
};

const generatePoints = (D: number, numPoints: number, epsilon: number, shape: 'cube' | 'sphere' | 'gaussian') => {
    const points = [];
    
    // Helper for Chi-Square distribution using Wilson-Hilferty transformation
    const randomChiSquare = (k: number) => {
        if (k <= 0) return 0;
        const z = randomNormal();
        const term = 1 - 2 / (9 * k) + z * Math.sqrt(2 / (9 * k));
        return k * Math.pow(Math.max(0, term), 3);
    };

    for (let i = 0; i < numPoints; i++) {
        const projectedCoords = [];
        let r = 0;
        
        if (shape === 'cube') {
            let maxAbs3 = 0; 
            for (let j = 0; j < Math.min(D, 3); j++) {
                const val = Math.random() * 2 - 1;
                projectedCoords.push(val);
                if (Math.abs(val) > maxAbs3) maxAbs3 = Math.abs(val);
            }
            if (D > 3) {
                // The maximum of D-3 independent U(0,1) variables
                const maxAbsRest = Math.pow(Math.random(), 1 / (D - 3));
                r = Math.max(maxAbs3, maxAbsRest);
            } else {
                r = maxAbs3;
            }
        } else if (shape === 'sphere') {
            let sqSum3 = 0;
            const first3 = [];
            for (let j = 0; j < Math.min(D, 3); j++) {
                const val = randomNormal();
                first3.push(val);
                sqSum3 += val * val;
            }
            
            let sqSum = sqSum3;
            if (D > 3) {
                sqSum += randomChiSquare(D - 3);
            }
            
            const norm = Math.sqrt(sqSum);
            r = Math.pow(Math.random(), 1 / D);
            const scale = r / norm;
            
            for (let j = 0; j < Math.min(D, 3); j++) {
                projectedCoords.push(first3[j] * scale);
            }
        } else if (shape === 'gaussian') {
            let sqSum3 = 0;
            for (let j = 0; j < Math.min(D, 3); j++) {
                const val = randomNormal();
                projectedCoords.push(val);
                sqSum3 += val * val;
            }
            
            let sqSum = sqSum3;
            if (D > 3) {
                sqSum += randomChiSquare(D - 3);
            }
            r = Math.sqrt(sqSum);
        }
        
        // For Gaussian, the "rind" is defined as r > R_max * (1 - epsilon)
        const R_max = Math.sqrt(D) + 1.5;
        const isRind = shape === 'gaussian' ? r >= R_max * (1 - epsilon) : r >= (1 - epsilon);
        
        if (shape === 'gaussian') {
            for (let j = 0; j < projectedCoords.length; j++) {
                projectedCoords[j] /= 3; // Scale standard normal to fit roughly in [-1, 1] for canvas
            }
        }
        
        points.push({
            coords: projectedCoords,
            r: r,
            isRind: isRind
        });
    }
    return points;
};

// --- Components --- //

const useCanvasZoom = (initialZoom = 1, minZoom = 0.2, maxZoom = 5) => {
    const [zoom, setZoom] = useState(initialZoom);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const zoomRef = useRef(zoom);

    useEffect(() => {
        zoomRef.current = zoom;
    }, [zoom]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const newZoom = Math.min(maxZoom, Math.max(minZoom, zoomRef.current - e.deltaY * 0.002));
            setZoom(newZoom);
        };

        let initialPinchDist: number | null = null;
        let initialZoomAtPinchStart: number = 1;

        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                initialPinchDist = Math.sqrt(dx * dx + dy * dy);
                initialZoomAtPinchStart = zoomRef.current;
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length === 2 && initialPinchDist !== null) {
                e.preventDefault();
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const scaleChange = dist / initialPinchDist;
                setZoom(Math.min(maxZoom, Math.max(minZoom, initialZoomAtPinchStart * scaleChange)));
            }
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (e.touches.length < 2) {
                initialPinchDist = null;
            }
        };

        canvas.addEventListener('wheel', handleWheel, { passive: false });
        canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvas.addEventListener('touchend', handleTouchEnd);

        return () => {
            canvas.removeEventListener('wheel', handleWheel);
            canvas.removeEventListener('touchstart', handleTouchStart);
            canvas.removeEventListener('touchmove', handleTouchMove);
            canvas.removeEventListener('touchend', handleTouchEnd);
        };
    }, [maxZoom, minZoom]);

    return { zoom, canvasRef };
};

const PointCloudCanvas = ({ D, epsilon, numPoints, title, shape }: { D: number, epsilon: number, numPoints: number, title: string, shape: 'cube' | 'sphere' | 'gaussian' }) => {
    const { zoom, canvasRef } = useCanvasZoom(1, 0.2, 5);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);
        
        const cx = width / 2;
        const cy = height / 2;
        const scale = ((width / 2) - 15) * zoom;

        ctx.beginPath();
        if (D === 1) {
            ctx.moveTo(cx - scale, cy);
            ctx.lineTo(cx + scale, cy);
            ctx.strokeStyle = '#9ca3af';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            let innerScale = scale * (1 - epsilon);
            if (shape === 'gaussian') {
                const R_max = Math.sqrt(1) + 1.5; // 2.5
                innerScale = scale * (R_max * (1 - epsilon)) / 3;
            }
            
            ctx.fillStyle = '#dc2626';
            ctx.fillRect(cx - innerScale, cy - 4, innerScale * 2, 8);
            ctx.fillStyle = '#16a34a';
            ctx.fillRect(cx - scale, cy - 4, scale - innerScale, 8);
            ctx.fillRect(cx + innerScale, cy - 4, scale - innerScale, 8);
        } else {
            if (shape === 'cube') {
                ctx.rect(cx - scale, cy - scale, scale * 2, scale * 2);
                ctx.strokeStyle = '#9ca3af';
                ctx.lineWidth = 1;
                ctx.stroke();
                
                ctx.beginPath();
                const innerScale = scale * (1 - epsilon);
                ctx.rect(cx - innerScale, cy - innerScale, innerScale * 2, innerScale * 2);
                ctx.strokeStyle = '#fca5a5';
                ctx.setLineDash([5, 5]);
                ctx.stroke();
                ctx.setLineDash([]);
            } else if (shape === 'sphere') {
                ctx.arc(cx, cy, scale, 0, 2 * Math.PI);
                ctx.strokeStyle = '#9ca3af';
                ctx.lineWidth = 1;
                ctx.stroke();
                
                ctx.beginPath();
                const innerScale = scale * (1 - epsilon);
                ctx.arc(cx, cy, innerScale, 0, 2 * Math.PI);
                ctx.strokeStyle = '#fca5a5';
                ctx.setLineDash([5, 5]);
                ctx.stroke();
                ctx.setLineDash([]);
            } else if (shape === 'gaussian') {
                if (D === 2 || D === 3) {
                    const R_max = Math.sqrt(D) + 1.5;
                    const innerScale = scale * (R_max * (1 - epsilon)) / 3;
                    
                    ctx.beginPath();
                    ctx.arc(cx, cy, innerScale, 0, 2 * Math.PI);
                    ctx.strokeStyle = '#fca5a5';
                    ctx.setLineDash([5, 5]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
            }
        }

        const points = generatePoints(D, numPoints, epsilon, shape);
        
        points.forEach(p => {
            ctx.beginPath();
            const x = cx + (p.coords[0] || 0) * scale;
            const y = D === 1 ? cy + (Math.random() * 20 - 10) : cy + (p.coords[1] || 0) * scale;
            
            ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
            ctx.fillStyle = p.isRind ? 'rgba(22, 163, 74, 0.7)' : 'rgba(220, 38, 38, 0.7)';
            ctx.fill();
        });

    }, [D, epsilon, numPoints, shape, zoom]);

    return (
        <div className="flex flex-col items-center bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-white/10">
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">{title}</h3>
            <div className="relative">
                <canvas ref={canvasRef} width={280} height={280} className="bg-slate-50 dark:bg-slate-800 rounded-lg cursor-crosshair touch-none" />
                <div className="absolute bottom-2 right-2 text-[10px] text-slate-400 dark:text-slate-500 pointer-events-none bg-white/50 dark:bg-slate-900/50 px-1 rounded">Scroll/Pinch to zoom</div>
                {D > 3 && (
                    <div className="absolute top-2 left-2 right-2 bg-white/90 dark:bg-slate-900/90 p-2 text-xs text-slate-600 dark:text-slate-400 rounded shadow-sm border border-black/5 dark:border-white/10">
                        <strong>Rzut na 2D:</strong> {
                            shape === 'cube' 
                                ? 'Współrzędne są niezależne, więc kwadrat jest pełny. Ale punkty są zielone, bo na innych osiach uderzyły w brzeg!' 
                                : shape === 'sphere' 
                                    ? 'W hiperkuli rzut na 2D skupia się w centrum (rozkład normalny), ponieważ suma kwadratów pozostałych D-2 współrzędnych "zjada" cały dostępny promień!'
                                    : 'Dla Gaussa rzut na 2D to zwykły rozkład normalny. Choć w 2D punkty są blisko zera, w D wymiarach ich odległość od środka to aż √D!'
                        }
                    </div>
                )}
            </div>
            <div className="mt-3 text-sm flex gap-4">
                <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-red-600 opacity-70"></div> Miąższ</span>
                <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-green-600 opacity-70"></div> Skórka</span>
            </div>
        </div>
    );
};

const PointCloudCanvas3D = ({ D, epsilon, numPoints, title, shape }: { D: number, epsilon: number, numPoints: number, title: string, shape: 'cube' | 'sphere' | 'gaussian' }) => {
    const { zoom, canvasRef } = useCanvasZoom(1, 0.2, 5);
    const points = useMemo(() => generatePoints(D, numPoints, epsilon, shape), [D, numPoints, epsilon, shape]);

    const rotRef = useRef({ x: 0, y: 0.3 });
    const velRef = useRef({ x: 0.01, y: 0 }); 
    const dragRef = useRef({ isDragging: false, lastX: 0, lastY: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let animationFrameId: number | null = null;
        let hasDrawn = false;
        
        const render = () => {
            let needsRedraw = false;
            
            if (!dragRef.current.isDragging) {
                rotRef.current.x += velRef.current.x;
                rotRef.current.y += velRef.current.y;
                velRef.current.x *= 0.985;
                velRef.current.y *= 0.985;
            }
            
            if (dragRef.current.isDragging || Math.abs(velRef.current.x) > 0.0001 || Math.abs(velRef.current.y) > 0.0001) {
                needsRedraw = true;
            }
            
            if (!needsRedraw && hasDrawn) {
                animationFrameId = null;
                return;
            }
            
            hasDrawn = true;

            const width = canvas.width;
            const height = canvas.height;
            ctx.clearRect(0, 0, width, height);
            
            const cx = width / 2;
            const cy = height / 2;
            const scale = ((width / 2) - 30) * zoom;
            
            if (shape === 'sphere') {
                ctx.beginPath();
                ctx.arc(cx, cy, scale, 0, 2 * Math.PI);
                ctx.strokeStyle = 'rgba(156, 163, 175, 0.3)';
                ctx.lineWidth = 1;
                ctx.stroke();
            } else if (shape === 'gaussian') {
                const R_max = Math.sqrt(D) + 1.5;
                const innerScale = scale * (R_max * (1 - epsilon)) / 3;
                ctx.beginPath();
                ctx.arc(cx, cy, innerScale, 0, 2 * Math.PI);
                ctx.strokeStyle = 'rgba(252, 165, 165, 0.3)';
                ctx.setLineDash([5, 5]);
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.setLineDash([]);
            }

            const angleX = rotRef.current.x;
            const angleY = rotRef.current.y;

            const projected = points.map(p => {
                const x = p.coords[0] || 0;
                const y = p.coords[1] || 0;
                const z = p.coords[2] || 0;
                
                const x1 = x * Math.cos(angleX) - z * Math.sin(angleX);
                const z1 = x * Math.sin(angleX) + z * Math.cos(angleX);
                
                const y2 = y * Math.cos(angleY) - z1 * Math.sin(angleY);
                const z2 = y * Math.sin(angleY) + z1 * Math.cos(angleY);
                
                return { x: x1, y: y2, z: z2, isRind: p.isRind };
            });
            
            projected.sort((a, b) => a.z - b.z);
            
            projected.forEach(p => {
                const px = cx + p.x * scale;
                const py = cy + p.y * scale;
                const size = Math.max(0.5, 2.5 + p.z * 1.5);
                
                ctx.beginPath();
                ctx.arc(px, py, size, 0, 2 * Math.PI);
                ctx.fillStyle = p.isRind ? 'rgba(22, 163, 74, 0.8)' : 'rgba(220, 38, 38, 0.8)';
                ctx.fill();
            });
            
            animationFrameId = requestAnimationFrame(render);
        };
        
        render();

        const startLoopIfNeeded = () => {
            if (animationFrameId === null) {
                render();
            }
        };

        const handlePointerDown = (e: PointerEvent) => {
            dragRef.current.isDragging = true;
            dragRef.current.lastX = e.clientX;
            dragRef.current.lastY = e.clientY;
            velRef.current = { x: 0, y: 0 };
            canvas.setPointerCapture(e.pointerId);
            startLoopIfNeeded();
        };

        const handlePointerMove = (e: PointerEvent) => {
            if (!dragRef.current.isDragging) return;
            const dx = e.clientX - dragRef.current.lastX;
            const dy = e.clientY - dragRef.current.lastY;
            
            velRef.current.x = dx * 0.005;
            velRef.current.y = dy * 0.005;
            
            rotRef.current.x += velRef.current.x;
            rotRef.current.y += velRef.current.y;
            
            dragRef.current.lastX = e.clientX;
            dragRef.current.lastY = e.clientY;
            startLoopIfNeeded();
        };

        const handlePointerUp = (e: PointerEvent) => {
            dragRef.current.isDragging = false;
            canvas.releasePointerCapture(e.pointerId);
            startLoopIfNeeded();
        };

        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointermove', handlePointerMove);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointercancel', handlePointerUp);

        return () => {
            if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointermove', handlePointerMove);
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('pointercancel', handlePointerUp);
        };
    }, [points, shape, zoom]);

    return (
        <div className="flex flex-col items-center bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-white/10">
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">{title}</h3>
            <div className="relative">
                <canvas ref={canvasRef} width={280} height={280} className="bg-slate-50 dark:bg-slate-800 rounded-lg cursor-crosshair touch-none" />
                <div className="absolute bottom-2 right-2 text-[10px] text-slate-400 dark:text-slate-500 pointer-events-none bg-white/50 dark:bg-slate-900/50 px-1 rounded">Scroll/Pinch to zoom</div>
            </div>
            <div className="mt-3 text-sm flex gap-4">
                <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-red-600 opacity-70"></div> Miąższ</span>
                <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-green-600 opacity-70"></div> Skórka</span>
            </div>
        </div>
    );
};

const RadialDistributionPlot = ({ D, epsilon, shape }: { D: number, epsilon: number, shape: 'cube' | 'sphere' | 'gaussian' }) => {
    const width = 300;
    const height = 120;
    const paddingX = 15;
    const paddingY = 15;
    
    const plotWidth = width - 2 * paddingX;
    const plotHeight = height - 2 * paddingY;
    
    const { binsFlesh, binsSkin, maxR } = useMemo(() => {
        let maxR = 1;
        if (shape === 'cube') maxR = Math.sqrt(D);
        else if (shape === 'gaussian') maxR = Math.sqrt(D) + 3;

        const numBins = 100;
        const bFlesh = new Array(numBins).fill(0);
        const bSkin = new Array(numBins).fill(0);
        
        // Adjust sample count based on D to keep performance consistent
        const numSamples = Math.min(100000, Math.max(2000, Math.floor(2000000 / D)));
        
        // Helper for Chi-Square distribution using Wilson-Hilferty transformation
        const randomChiSquare = (k: number) => {
            if (k <= 0) return 0;
            let u = 0, v = 0;
            while(u === 0) u = Math.random();
            while(v === 0) v = Math.random();
            const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
            const term = 1 - 2 / (9 * k) + z * Math.sqrt(2 / (9 * k));
            return k * Math.pow(Math.max(0, term), 3);
        };
        
        for(let i=0; i<numSamples; i++) {
            let r = 0;
            let isSkin = false;
            
            if (shape === 'cube') {
                let maxAbs = 0;
                let sqSum = 0;
                for(let j=0; j<D; j++) {
                    const x = (Math.random() * 2) - 1;
                    const absX = Math.abs(x);
                    if (absX > maxAbs) maxAbs = absX;
                    sqSum += x*x;
                }
                r = Math.sqrt(sqSum);
                isSkin = maxAbs > (1 - epsilon);
            } else if (shape === 'sphere') {
                r = Math.pow(Math.random(), 1/D);
                isSkin = r > (1 - epsilon);
            } else if (shape === 'gaussian') {
                const sqSum = randomChiSquare(D);
                r = Math.sqrt(sqSum);
                const R_max = Math.sqrt(D) + 1.5;
                isSkin = r > R_max * (1 - epsilon);
            }
            
            const binIdx = Math.floor((r / maxR) * numBins);
            if (binIdx >= 0 && binIdx < numBins) {
                if (isSkin) bSkin[binIdx]++;
                else bFlesh[binIdx]++;
            }
        }
        
        // Smooth the bins slightly for better visuals
        const smooth = (arr: number[]) => {
            const res = [...arr];
            for(let iter=0; iter<2; iter++) {
                const temp = [...res];
                for(let i=1; i<arr.length-1; i++) {
                    res[i] = 0.25 * temp[i-1] + 0.5 * temp[i] + 0.25 * temp[i+1];
                }
            }
            return res;
        };
        
        return { 
            binsFlesh: smooth(bFlesh), 
            binsSkin: smooth(bSkin), 
            maxR 
        };
    }, [D, epsilon, shape]);

    const numBins = binsFlesh.length;
    const maxBin = Math.max(...binsFlesh.map((v, i) => v + binsSkin[i]));
    
    const getPath = (bins: number[], isStacked: boolean, baseBins?: number[]) => {
        if (maxBin === 0) return "";
        let path = `M ${paddingX} ${height - paddingY}`;
        for(let i=0; i<numBins; i++) {
            const x = paddingX + (i / (numBins - 1)) * plotWidth;
            let yVal = bins[i];
            if (isStacked && baseBins) yVal += baseBins[i];
            const y = height - paddingY - (yVal / maxBin) * plotHeight;
            path += ` L ${x} ${y}`;
        }
        if (isStacked && baseBins) {
            for(let i=numBins-1; i>=0; i--) {
                const x = paddingX + (i / (numBins - 1)) * plotWidth;
                const y = height - paddingY - (baseBins[i] / maxBin) * plotHeight;
                path += ` L ${x} ${y}`;
            }
        } else {
            path += ` L ${paddingX + plotWidth} ${height - paddingY}`;
        }
        path += ` Z`;
        return path;
    };

    const totalBins = binsFlesh.map((v, i) => v + binsSkin[i]);
    let outlinePath = "";
    if (maxBin > 0) {
        outlinePath = `M ${paddingX} ${height - paddingY - (totalBins[0] / maxBin) * plotHeight}`;
        for(let i=1; i<numBins; i++) {
            const x = paddingX + (i / (numBins - 1)) * plotWidth;
            const y = height - paddingY - (totalBins[i] / maxBin) * plotHeight;
            outlinePath += ` L ${x} ${y}`;
        }
    }

    return (
        <div className="mt-6 border-t border-slate-100 dark:border-white/10 pt-4">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Gęstość rozkładu odległości Euklidesowej od centrum
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Wykres ukazuje, jak masa figury (odległość Euklidesowa <InlineMath math="r" />) wypychana jest na zewnątrz przy rosnącym <InlineMath math="D" />. 
                {shape === 'cube' && " Zauważ, że dla kostki maksymalna odległość rośnie do "}
                {shape === 'cube' && <InlineMath math="\sqrt{D}" />}
                {shape === 'cube' && ", a 'skórka' i 'miąższ' nakładają się na siebie."}
                {shape === 'sphere' && " Dla hiperkuli maksymalny promień to zawsze 1, a masa skupia się przy samej granicy."}
                {shape === 'gaussian' && " Dla rozkładu Gaussa nie ma sztywnej granicy, ale masa ucieka z centrum i tworzy 'pustą skorupę' wokół "}
                {shape === 'gaussian' && <InlineMath math="\sqrt{D}" />}
                {shape === 'gaussian' && "."}
            </p>
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto bg-white dark:bg-slate-900 rounded border border-black/5 dark:border-white/10 shadow-sm overflow-visible">
                <path d={getPath(binsFlesh, false)} fill="rgba(220, 38, 38, 0.4)" />
                <path d={getPath(binsSkin, true, binsFlesh)} fill="rgba(22, 163, 74, 0.4)" />
                
                <path d={outlinePath} fill="none" stroke="#3b82f6" strokeWidth="2" />
                
                <line x1={paddingX} y1={height - paddingY} x2={width - paddingX + 5} y2={height - paddingY} stroke="#9ca3af" strokeWidth="1" />
                <text x={paddingX} y={height - paddingY + 12} fontSize="10" fill="#6b7280" textAnchor="middle">0</text>
                <text x={width - paddingX} y={height - paddingY + 12} fontSize="10" fill="#6b7280" textAnchor="middle">
                    {shape === 'cube' ? `√D` : shape === 'gaussian' ? `√D+3` : '1'}
                </text>
            </svg>
        </div>
    );
};

const HypersphereVsHypercubeSection = () => {
    const maxD = 20;
    const data = [];
    for (let d = 1; d <= maxD; d++) {
        const sphereVol = getSphereVolume(d, 1);
        const cubeVol = Math.pow(2, d);
        const ratio = sphereVol / cubeVol;
        data.push({ d, ratio });
    }

    const width = 600;
    const height = 200;
    const padding = 30;
    const plotWidth = width - 2 * padding;
    const plotHeight = height - 2 * padding;
    const maxRatio = Math.max(...data.map(d => d.ratio));

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-black/5 dark:border-white/10 p-6 md:p-8 mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CircleDashed className="text-blue-500" />
                Paradoks 2: Znikająca Hiperkula i Uciekający Gauss
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Wydawałoby się, że kula wpisana w sześcian zawsze zajmuje znaczną jego część (w 2D koło zajmuje ok. 78% kwadratu, w 3D kula zajmuje ok. 52% sześcianu). Jednak w miarę wzrostu wymiarów, <strong>objętość hiperkuli dąży do zera</strong>, podczas gdy objętość hiperkostki rośnie wykładniczo! W wysokich wymiarach hiperkula staje się nieskończenie małym pyłkiem w centrum ogromnej hiperkostki.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-xl mb-6">
                <p className="text-blue-900 dark:text-blue-200 text-sm md:text-base">
                    <strong>A co z rozkładem Gaussa?</strong> Podobnie jak hiperkula, standardowy wielowymiarowy rozkład normalny "ucieka" z centrum. Ponieważ jego masa skupia się w odległości <InlineMath math="\sqrt{D}" /> od środka, szansa na wylosowanie punktu z rozkładu Gaussa, który wpadnie do kuli jednostkowej (o promieniu 1), dąży do zera w wysokich wymiarach. Środek rozkładu staje się praktycznie pusty!
                </p>
            </div>
            
            <div className="overflow-x-auto">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto min-w-[500px] bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-white/10">
                    <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#9ca3af" strokeWidth="2" />
                    <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#9ca3af" strokeWidth="2" />
                    
                    <path 
                        d={data.map((p, i) => {
                            const x = padding + (i / (maxD - 1)) * plotWidth;
                            const y = height - padding - (p.ratio / maxRatio) * plotHeight;
                            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                        }).join(' ')} 
                        fill="none" stroke="#3b82f6" strokeWidth="3" 
                    />
                    
                    {data.map((p, i) => {
                        const x = padding + (i / (maxD - 1)) * plotWidth;
                        const y = height - padding - (p.ratio / maxRatio) * plotHeight;
                        return (
                            <g key={p.d}>
                                <circle cx={x} cy={y} r="4" fill="#2563eb" />
                                {i % 2 === 0 && (
                                    <text x={x} y={height - padding + 15} fontSize="10" fill="#6b7280" textAnchor="middle">D={p.d}</text>
                                )}
                            </g>
                        );
                    })}
                    <text x={padding + 10} y={padding + 10} fontSize="12" fill="#3b82f6" fontWeight="bold">Stosunek objętości (Kula / Kostka)</text>
                </svg>
            </div>
        </div>
    );
};

const HedgehogSyndromeSection = () => {
    const maxD = 100;
    const data = [];
    for (let d = 1; d <= maxD; d++) {
        data.push({ d, corner: Math.sqrt(d), face: 1, gaussianMax: Math.sqrt(Math.max(0, d - 1)) });
    }

    const width = 600;
    const height = 200;
    const padding = 30;
    const plotWidth = width - 2 * padding;
    const plotHeight = height - 2 * padding;
    const maxCorner = Math.sqrt(maxD);

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-black/5 dark:border-white/10 p-6 md:p-8 mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <TrendingUp className="text-orange-500" />
                Paradoks 3: Syndrom Jeżowca i "Pusta Skorupa" Gaussa
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                W kwadracie (2D) odległość od środka do ściany wynosi 1, a do rogu <InlineMath math="\sqrt{2} \approx 1.41" />. W 100-wymiarowej hiperkostce odległość do ściany to nadal 1, ale odległość do rogu wynosi <InlineMath math="\sqrt{100} = 10" />! Oznacza to, że hiperkostka w wysokich wymiarach wcale nie przypomina pudełka – jej rogi sterczą daleko w przestrzeń, przypominając kolce jeżowca.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-xl mb-6">
                <p className="text-blue-900 dark:text-blue-200 text-sm md:text-base">
                    <strong>A co z rozkładem Gaussa?</strong> Rozkład normalny jest idealnie symetryczny, więc nie ma "rogów". Jednak z racji tego, że jego masa skupia się w odległości <InlineMath math="\sqrt{D}" /> (dokładne położenie maksimum rozkładu radialnego to <InlineMath math="r = \sqrt{D-1}" />), zachowuje się jak "pusta skorupa" (bańka mydlana). W połączeniu z koncentracją miary sprawia to, że losowe wektory z rozkładu Gaussa są <strong>niemal ortogonalne</strong> (kąt między nimi dąży do 90 stopni)!
                </p>
            </div>
            
            <div className="overflow-x-auto">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto min-w-[500px] bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-white/10">
                    <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#9ca3af" strokeWidth="2" />
                    <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#9ca3af" strokeWidth="2" />
                    
                    <path 
                        d={`M ${padding} ${height - padding - (1 / maxCorner) * plotHeight} L ${width - padding} ${height - padding - (1 / maxCorner) * plotHeight}`} 
                        fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5"
                    />
                    
                    <path 
                        d={data.map((p, i) => {
                            const x = padding + (i / (maxD - 1)) * plotWidth;
                            const y = height - padding - (p.corner / maxCorner) * plotHeight;
                            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                        }).join(' ')} 
                        fill="none" stroke="#f97316" strokeWidth="3" 
                    />

                    <path 
                        d={data.map((p, i) => {
                            const x = padding + (i / (maxD - 1)) * plotWidth;
                            const y = height - padding - (p.gaussianMax / maxCorner) * plotHeight;
                            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                        }).join(' ')} 
                        fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,4"
                    />
                    
                    <text x={padding + 10} y={padding + 15} fontSize="12" fill="#f97316" fontWeight="bold">Odległość do rogu kostki (√D)</text>
                    <text x={padding + 10} y={padding + 30} fontSize="12" fill="#3b82f6" fontWeight="bold">Max rozkładu Gaussa (√(D-1))</text>
                    <text x={padding + 10} y={height - padding - (1 / maxCorner) * plotHeight - 10} fontSize="12" fill="#10b981" fontWeight="bold">Odległość do ściany kostki (1)</text>
                    <text x={width - padding - 20} y={height - padding + 15} fontSize="10" fill="#6b7280" textAnchor="middle">D=100</text>
                </svg>
            </div>
        </div>
    );
};

const DistanceParadoxSection = ({ shape }: { shape: 'cube' | 'sphere' | 'gaussian' }) => {
    const { zoom, canvasRef } = useCanvasZoom(1, 0.2, 5);
    const [dim, setDim] = useState(100);
    const [nPointsPower, setNPointsPower] = useState(2); 
    const nPoints = Math.pow(10, nPointsPower);
    
    const [data, setData] = useState<any>(null);
    const workerRef = useRef<Worker | null>(null);

    useEffect(() => {
        workerRef.current = new Worker(new URL('../workers/distanceWorker.ts', import.meta.url), { type: 'module' });
        workerRef.current.onmessage = (e) => {
            setData(e.data);
        };
        return () => workerRef.current?.terminate();
    }, []);

    useEffect(() => {
        if (workerRef.current) {
            workerRef.current.postMessage({ dim, nPointsPower, shape });
        }
    }, [dim, nPointsPower, shape]);

    useEffect(() => {
        if (!data) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);
        
        const cx = width / 2;
        const cy = height / 2;
        const scale = ((width / 2) - 20) * zoom;

        ctx.beginPath();
        if (shape === 'cube') {
            ctx.rect(cx - scale, cy - scale, scale * 2, scale * 2);
            ctx.strokeStyle = document.documentElement.classList.contains('dark') ? '#374151' : '#e5e7eb';
            ctx.lineWidth = 2;
            ctx.stroke();
        } else if (shape === 'sphere') {
            ctx.arc(cx, cy, scale, 0, 2 * Math.PI);
            ctx.strokeStyle = document.documentElement.classList.contains('dark') ? '#374151' : '#e5e7eb';
            ctx.lineWidth = 2;
            ctx.stroke();
        } else if (shape === 'gaussian') {
            // No boundary for gaussian
        }
        ctx.setLineDash([]);

        data.projectedPts.forEach((p: number[]) => {
            const x = cx + p[0] * scale;
            const y = dim === 1 ? cy : cy + p[1] * scale;
            
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(109, 40, 217, 0.4)';
            ctx.fill();
        });

        if(data.projectedPts.length >= 2) {
            const p1 = data.projectedPts[0];
            const p2 = data.projectedPts[data.projectedPts.length - 1];
            const x1 = cx + p1[0] * scale;
            const y1 = dim === 1 ? cy : cy + p1[1] * scale;
            const x2 = cx + p2[0] * scale;
            const y2 = dim === 1 ? cy : cy + p2[1] * scale;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.beginPath(); ctx.arc(x1, y1, 5, 0, 2 * Math.PI); ctx.fillStyle = '#ef4444'; ctx.fill();
            ctx.beginPath(); ctx.arc(x2, y2, 5, 0, 2 * Math.PI); ctx.fillStyle = '#ef4444'; ctx.fill();
        }
    }, [data, dim, shape, zoom]);

    const absMeanLeftPercent = data ? Math.min(100, (data.mean / data.globalMaxPossible) * 100) : 0;

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-black/5 dark:border-white/10 p-6 md:p-8 overflow-hidden mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Paradoks 4: Koncentracja Odległości</h2>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-4 rounded-r-xl mb-6">
                <p className="text-yellow-900 dark:text-yellow-200 text-sm md:text-base">
                    <strong>W literaturze:</strong> Zjawisko to znane jest jako <strong>Koncentracja Miary</strong> (ang. <em>Concentration of Measure</em>). Kiedy liczba wymiarów <InlineMath math="D" /> rośnie, wariancja (zmienność) odległości rośnie drastycznie wolniej niż sama średnia. W efekcie stosunek zmienności do średniej dąży do zera, sprawiając, że niemal każdy punkt znajduje się w <em>tej samej odległości</em> od dowolnego innego punktu!
                </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-black/5 dark:border-white/10 mb-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                    <strong>Jak wykonano symulację:</strong> Losujemy zadaną na suwaku liczbę punktów <InlineMath math="N" /> za pomocą generatora wewnątrz <InlineMath math="D" />-wymiarowej figury ({shape === 'cube' ? 'hiperkostki' : shape === 'sphere' ? 'hiperkuli' : 'wielowymiarowego rozkładu Gaussa'}). Następnie sprawdzamy <em>każdą możliwą parę</em> tych punktów (dla dużych <InlineMath math="N" /> analizujemy tylko losową próbkę) i liczymy ich prawdziwą (wielowymiarową) odległość Euklidesową. Obliczenia są wykonywane w tle (Web Worker), aby nie blokować interfejsu.
                </p>
                <details className="mt-3 group">
                    <summary className="cursor-pointer font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors select-none">
                        Jak losuje się punkty wewnątrz hiperkuli w setkach wymiarów? (Rozwiń)
                    </summary>
                    <div className="mt-3 pl-4 border-l-2 border-blue-200 dark:border-blue-800/50 space-y-3 text-slate-600 dark:text-slate-400">
                        <p>
                            Gdybyśmy próbowali losować punkty wewnątrz hiperkostki i po prostu <strong>odrzucali</strong> te, które "wystają" poza hiperkulę (tzw. metoda akceptacji-odrzucenia), algorytm dla np. 100 wymiarów działałby w nieskończoność. W wysokich wymiarach objętość hiperkuli wpisanej w hiperkostkę dąży do zera – szansa na "trafienie" w nią jest praktycznie zerowa.
                        </p>
                        <p>
                            Dlatego w kodzie zastosowano algorytm, który bezpośrednio i natychmiastowo generuje punkt równomiernie rozłożony wewnątrz hiperkuli:
                        </p>
                        <ol className="list-decimal list-inside space-y-2 ml-1">
                            <li>
                                <strong>Losowanie kierunku (powierzchnia hiperkuli):</strong> Każda z <i>D</i> współrzędnych punktu jest losowana z rozkładu normalnego (Gaussa) przy użyciu transformacji Boxa-Mullera. Wektor stworzony z niezależnych zmiennych o rozkładzie normalnym ma wspaniałą właściwość: jego kierunek jest idealnie izotropowy (równomiernie rozłożony we wszystkich kierunkach). Następnie wektor jest normalizowany (dzielony przez swoją długość), co rzutuje go dokładnie na powierzchnię hiperkuli o promieniu 1.
                            </li>
                            <li>
                                <strong>Losowanie odległości od środka (promienia):</strong> Nie możemy wylosować promienia liniowo z przedziału (0, 1), bo w wysokich wymiarach punkty nienaturalnie zagęściłyby się w centrum (zjawisko "skorupki pomarańczy"). Aby rozkład w całej objętości był równomierny, losujemy liczbę <i>U</i> z przedziału (0, 1), a następnie wyciągamy z niej <strong>pierwiastek D-tego stopnia</strong> (<i>U<sup>1/D</sup></i>). Ten pierwiastek "wypycha" punkty na zewnątrz, dokładnie kompensując fakt, że w wyższych wymiarach objętość rośnie w potędze <i>D</i>.
                            </li>
                            <li>
                                <strong>Skalowanie:</strong> Na koniec mnożymy nasz znormalizowany wektor kierunkowy przez obliczony promień.
                            </li>
                        </ol>
                    </div>
                </details>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-slate-100 dark:border-white/10 pb-6">
                <div>
                    <label className="flex justify-between font-medium text-slate-700 dark:text-slate-300 mb-2">
                        <span>Wymiar (<i>D</i>)</span>
                        <span className="text-blue-600 font-semibold">{dim}</span>
                    </label>
                    <input 
                        type="range" min="2" max="1000" step="2" value={dim} 
                        onChange={(e) => setDim(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Im wyższy wymiar, tym silniejsza kompresja zmienności do zera.</p>
                </div>
                <div>
                    <label className="flex justify-between font-medium text-slate-700 dark:text-slate-300 mb-2">
                        <span>Liczba wylosowanych punktów (<i>N</i>)</span>
                        <span className="text-purple-600 font-semibold">{nPoints.toLocaleString()}</span>
                    </label>
                    <input 
                        type="range" min="1" max="4" step="1" value={nPointsPower} 
                        onChange={(e) => setNPointsPower(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                    />
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Więcej punktów wygładza histogram {data && `(obecnie badamy ${data.numPairs.toLocaleString()} z ${data.totalPossiblePairs.toLocaleString()} par)`}.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 flex flex-col items-center">
                    <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Rzut na 2D: {data ? Math.min(nPoints, 1500).toLocaleString() : 0} punktów</h3>
                    <div className="relative">
                        <canvas ref={canvasRef} width={280} height={280} className="bg-white dark:bg-slate-900 rounded-lg border border-black/5 dark:border-white/10 shadow-sm cursor-crosshair touch-none" />
                        <div className="absolute bottom-2 right-2 text-[10px] text-slate-400 dark:text-slate-500 pointer-events-none bg-white/50 dark:bg-slate-900/50 px-1 rounded">Scroll/Pinch to zoom</div>
                    </div>
                    <p className="mt-2 text-xs text-center text-slate-500 dark:text-slate-400">Na rzucie punkty wyglądają na rozrzucone w różnych odległościach (czerwoną linią połączono tylko 1 przykładową parę).</p>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-8">
                    <div className="w-full">
                        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 text-center">Rzeczywiste Odległości (Nieprzeskalowane)</h3>
                        <div className="h-32 w-full flex items-end gap-[1px] bg-slate-50 dark:bg-slate-800 p-2 rounded border border-black/5 dark:border-white/10 relative mb-5">
                            {data?.absBins.map((count: number, i: number) => (
                                <motion.div 
                                    key={i} 
                                    className="flex-1 bg-purple-400 hover:bg-purple-600 transition-colors"
                                    initial={{ height: 0 }}
                                    animate={{ height: `${(count / data.maxAbsBin) * 100}%` }}
                                    transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                                    title={`Ilość par: ${count}`}
                                />
                            ))}
                            <motion.div 
                                className="absolute top-0 bottom-0 border-l-2 border-red-500 border-dashed"
                                animate={{ left: `${absMeanLeftPercent}%` }}
                                transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                            />
                            <div className="absolute -bottom-5 text-xs text-slate-500 dark:text-slate-400 left-0">0</div>
                            <motion.div 
                                className="absolute -bottom-5 text-xs text-red-600 font-semibold" 
                                animate={{ left: `calc(${absMeanLeftPercent}% - 15px)` }}
                                transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                            >
                                Średnia
                            </motion.div>
                            <div className="absolute -bottom-5 text-xs text-slate-500 dark:text-slate-400 right-0">{data?.globalMaxPossible.toFixed(0)} {shape === 'cube' ? '(Max dla D=1000)' : shape === 'gaussian' ? '(Max dla D=1000)' : '(Średnica)'}</div>
                        </div>
                    </div>

                    <div className="w-full">
                        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 text-center">Zmienność względem Średniej (Odległość / Średnia)</h3>
                        <div className="h-32 w-full flex items-end gap-[1px] bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded border border-indigo-200 dark:border-indigo-700 relative mb-5">
                            {data?.relBins.map((count: number, i: number) => (
                                <motion.div 
                                    key={i} 
                                    className="flex-1 bg-indigo-500 hover:bg-indigo-700 transition-colors"
                                    initial={{ height: 0 }}
                                    animate={{ height: `${(count / data.maxRelBin) * 100}%` }}
                                    transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                                    title={`Ilość par: ${count}`}
                                />
                            ))}
                            <div 
                                className="absolute top-0 bottom-0 border-l-2 border-red-500 border-dashed"
                                style={{ left: `50%` }}
                            />
                            <div className="absolute -bottom-5 text-xs text-slate-500 dark:text-slate-400 left-0">0.0 (0%)</div>
                            <div className="absolute -bottom-5 text-xs text-red-600 font-semibold" style={{ left: `calc(50% - 10px)` }}>1.0</div>
                            <div className="absolute -bottom-5 text-xs text-slate-500 dark:text-slate-400 right-0">2.0 (200%)</div>
                        </div>
                        <p className="text-[11px] text-indigo-800 dark:text-indigo-300 text-center mt-2 leading-tight">
                            Zwróć uwagę: przy bardzo wysokim wymiarze <i>D</i> przeskalowany rozkład zwija się w punkt przy wartości 1.0 (funkcja delty Diraca). Oznacza to, że względna zmienność (odchylenie procentowe od średniej) wynosi <strong>dokładnie zero</strong>!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MachineLearningCorner = () => {
    return (
        <div className="bg-gradient-to-br from-indigo-50 dark:from-indigo-950 to-purple-50 dark:to-purple-950 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-800 p-6 md:p-8 mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
                <BrainCircuit className="text-indigo-600" />
                Kącik Machine Learningu: Dlaczego to psuje AI?
            </h2>
            <p className="text-indigo-800 dark:text-indigo-300 mb-4 leading-relaxed">
                Wszystkie te paradoksy (ucieczka objętości, koncentracja odległości, syndrom jeżowca) składają się na zjawisko, które spędza sen z powiek badaczom AI: <strong>Przekleństwo Wymiarowości</strong>.
            </p>
            <ul className="list-disc list-inside space-y-2 text-indigo-700 dark:text-indigo-400">
                <li><strong>Algorytmy k-NN (k-Najbliższych Sąsiadów) przestają działać:</strong> Skoro w wysokich wymiarach każdy punkt jest niemal tak samo odległy od każdego innego (Paradoks 4), pojęcie "najbliższego sąsiada" traci sens. Różnica między najbliższym a najdalszym punktem zaciera się.</li>
                <li><strong>Potrzeba ogromnej ilości danych:</strong> Aby gęsto pokryć przestrzeń 100-wymiarową (aby punkty nie leżały tylko w "skórce" lub "rogach"), potrzebujemy wykładniczo więcej danych treningowych.</li>
                <li><strong>Rozwiązanie:</strong> Dlatego współczesne sieci neuronowe (np. te przetwarzające obrazy czy tekst) stosują techniki <em>redukcji wymiarowości</em> (np. PCA, Autoenkodery) lub uczą się tzw. <em>embeddings</em> – gęstych wektorów w niższych wymiarach, gdzie pojęcie odległości wciąż ma matematyczny sens.</li>
            </ul>
        </div>
    );
};

// --- Main App Component --- //
export default function Chapter1() {
    const [shape, setShape] = useState<'cube' | 'sphere' | 'gaussian'>('cube');
    const [epsilon, setEpsilon] = useState(0.1);
    const [nD, setND] = useState(20);
    const [numPoints, setNumPoints] = useState(1500);
    const [isDraggingEpsilon, setIsDraggingEpsilon] = useState(false);
    const [isDraggingND, setIsDraggingND] = useState(false);

    const formatPercent = (value: number) => {
        if (value > 99.999) return "> 99.999%";
        if (value < 0.001 && value > 0) return "< 0.001%";
        if (value === 0) return "~ 0%";
        if (value === 100) return "100%";
        return value.toFixed(3) + "%";
    };

    const getBubbleStyle = (value: number, min: number, max: number) => {
        const percent = (value - min) / (max - min);
        return { left: `calc(${percent * 100}% + ${8 - percent * 16}px)` };
    };

    // Ułamek objętości dla hiperkostki i hiperkuli jest matematycznie taki sam!
    const edibleFraction = getEdibleFraction(nD, epsilon, shape);
    const rindFractionPercent = (1 - edibleFraction) * 100;

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 p-4 md:p-8 font-sans text-slate-800 dark:text-slate-200">
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10 p-6 md:p-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                        <Box className="text-blue-500" />
                        Geometria Wysokich Wymiarów: Koncentracja Miary
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Wyobraź sobie arbuza w kształcie <strong>hiperkostki</strong>, <strong>hiperkuli</strong>, lub chmurę punktów z <strong>rozkładu Gaussa</strong>. Jego zielona skórka to obszar przy zewnętrznej granicy o grubości <InlineMath math="\epsilon" />. Losując punkty, każda kolejna dorzucona oś <InlineMath math="D" /> sprawia, że szansa wylosowania wnętrza drastycznie maleje. Stosunek objętości miąższu do całej figury dla kostki i kuli wynosi dokładnie <InlineMath math="(1 - \epsilon)^D" />. Dla rozkładu Gaussa masa również ucieka z centrum (koncentruje się w cienkiej sferze). Zjawisko to w literaturze naukowej nazywane jest <strong>Koncentracją Miary</strong> (ang. <em>Concentration of Measure</em>). W wysokich wymiarach każda figura staje się "pustą skorupą"!
                    </p>
                </div>

                <div className="flex justify-center mt-4 mb-2">
                    <div className="bg-slate-200 dark:bg-slate-700 p-1 rounded-xl inline-flex shadow-inner">
                        <button 
                            onClick={() => setShape('cube')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all ${shape === 'cube' ? 'bg-white dark:bg-slate-900 shadow-sm text-blue-600' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:text-slate-300'}`}
                        >
                            <Box size={18} />
                            Hiperkostka
                        </button>
                        <button 
                            onClick={() => setShape('sphere')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all ${shape === 'sphere' ? 'bg-white dark:bg-slate-900 shadow-sm text-blue-600' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:text-slate-300'}`}
                        >
                            <Circle size={18} />
                            Hiperkula
                        </button>
                        <button 
                            onClick={() => setShape('gaussian')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all ${shape === 'gaussian' ? 'bg-white dark:bg-slate-900 shadow-sm text-blue-600' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:text-slate-300'}`}
                        >
                            <CircleDashed size={18} />
                            Rozkład Gaussa
                        </button>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-black/5 dark:border-white/10 p-6">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <Box className="text-green-600" />
                        Paradoks 1: Ucieczka Objętości
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <label className="flex justify-between font-medium text-slate-700 dark:text-slate-300">
                                    <span>
                                        {shape === 'gaussian' ? 
                                            <>Grubość skórki przy granicy (<InlineMath math="\epsilon" />)</> : 
                                            <>Grubość skórki przy granicy (<InlineMath math="\epsilon" />)</>}
                                    </span>
                                    <span className="text-red-600 font-semibold">
                                        {shape === 'gaussian' ? 
                                            <>{(epsilon * 100).toFixed(0)}% z <InlineMath math="\sqrt{D} + 1.5" /></> : 
                                            `${(epsilon * 100).toFixed(0)}% promienia`}
                                    </span>
                                </label>
                                <div 
                                    className="relative pt-8 pb-2"
                                    onMouseEnter={() => setIsDraggingEpsilon(true)}
                                    onMouseLeave={() => setIsDraggingEpsilon(false)}
                                    onTouchStart={() => setIsDraggingEpsilon(true)}
                                    onTouchEnd={() => setIsDraggingEpsilon(false)}
                                >
                                    <div 
                                        className={`absolute top-0 transform -translate-x-1/2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm transition-opacity duration-200 pointer-events-none ${isDraggingEpsilon ? 'opacity-100' : 'opacity-0'} after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[5px] after:border-transparent after:border-t-green-600`}
                                        style={getBubbleStyle(epsilon, 0.01, 0.5)}
                                    >
                                        {(epsilon * 100).toFixed(0)}%
                                    </div>
                                    <input 
                                        type="range" 
                                        min="0.01" 
                                        max="0.5" 
                                        step="0.01" 
                                        value={epsilon} 
                                        onChange={(e) => setEpsilon(parseFloat(e.target.value))}
                                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-600"
                                    />
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    {shape === 'gaussian' 
                                        ? <>Dla Gaussa przyjmujemy umowny promień figury jako <InlineMath math="\sqrt{D} + 1.5" /> (obejmuje ok. 98% masy). Skórka to zewnętrzny ułamek <InlineMath math="\epsilon" /> tego promienia.</> 
                                        : <>Skórka to zewnętrzny ułamek <InlineMath math="\epsilon" /> promienia kuli (lub połowy boku kostki).</>}
                                </p>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="flex justify-between font-medium text-slate-700 dark:text-slate-300">
                                    <span>Wymiar <InlineMath math="D" /> przestrzeni</span>
                                    <span className="text-blue-600 font-semibold">D = {nD}</span>
                                </label>
                                <div 
                                    className="relative pt-8 pb-2"
                                    onMouseEnter={() => setIsDraggingND(true)}
                                    onMouseLeave={() => setIsDraggingND(false)}
                                    onTouchStart={() => setIsDraggingND(true)}
                                    onTouchEnd={() => setIsDraggingND(false)}
                                >
                                    <div 
                                        className={`absolute top-0 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm transition-opacity duration-200 pointer-events-none ${isDraggingND ? 'opacity-100' : 'opacity-0'} after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[5px] after:border-transparent after:border-t-blue-600`}
                                        style={getBubbleStyle(Math.log10(nD / 3) / Math.log10(10000 / 3) * 100, 0, 100)}
                                    >
                                        {nD}
                                    </div>
                                    <input 
                                        type="range" 
                                        min="0" 
                                        max="100" 
                                        step="0.1" 
                                        value={Math.log10(nD / 3) / Math.log10(10000 / 3) * 100} 
                                        onChange={(e) => {
                                            const val = parseFloat(e.target.value);
                                            const newD = Math.round(Math.pow(10, (val / 100) * Math.log10(10000 / 3)) * 3);
                                            setND(newD);
                                        }}
                                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                    />
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Zbadaj efekt rzutowania wielowymiarowej figury na 2D.</p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-5 border border-green-200 dark:border-green-700 shadow-sm mt-4">
                                <p className="text-sm font-medium text-green-800 mb-1">Obliczona objętość skórki (wynik):</p>
                                <p className="text-4xl font-black text-green-600 tracking-tight">
                                    {formatPercent(rindFractionPercent)}
                                </p>
                                <p className="text-xs text-green-700 dark:text-green-400 mt-2">Dla porównania, czerwony miąższ zajmuje tylko {formatPercent(edibleFraction * 100)}</p>
                            </div>
                        </div>

                        <div className="h-full flex flex-col justify-center">
                            <RadialDistributionPlot D={nD} epsilon={epsilon} shape={shape} />
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-black/5 dark:border-white/10 mb-8">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                        Dlaczego tak się dzieje?
                    </h3>
                    <div className="space-y-4 text-slate-600 dark:text-slate-300">
                        <p>
                            Objętość <InlineMath math="D" />-wymiarowej figury (np. kuli o promieniu <InlineMath math="R" /> lub kostki o boku <InlineMath math="2R" />) jest proporcjonalna do <InlineMath math="R^D" />.
                            Jeśli rozważymy "miąższ" (wnętrze) pomniejszony o ułamek <InlineMath math="\epsilon" /> (czyli o promieniu <InlineMath math="R_{wew} = R(1-\epsilon)" />),
                            jego objętość stanowi ułamek całkowitej objętości równy:
                        </p>
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg flex justify-center overflow-x-auto">
                            <BlockMath math="\frac{V_{wew}}{V_{calk}} = \frac{C \cdot (R(1-\epsilon))^D}{C \cdot R^D} = (1-\epsilon)^D" />
                        </div>
                        <p>
                            Dla dowolnie małej grubości skórki <InlineMath math="\epsilon > 0" />, gdy wymiar <InlineMath math="D \to \infty" />,
                            wartość <InlineMath math="(1-\epsilon)^D \to 0" />. Oznacza to, że <strong>cała objętość skupia się w nieskończenie cienkiej warstwie przy powierzchni</strong>.
                        </p>
                        <p>
                            W przypadku rozkładu Gaussa, gęstość prawdopodobieństwa to <InlineMath math="e^{-r^2/2}" />, ale "powierzchnia" sfery w odległości <InlineMath math="r" /> rośnie jak <InlineMath math="r^{D-1}" />.
                            Iloczyn tych dwóch funkcji tworzy ostry pik wokół promienia <InlineMath math="r \approx \sqrt{D}" />.
                            Dlatego w wysokich wymiarach rozkład normalny przypomina "pustą bańkę mydlaną" (tzw. <em>Gaussian Annulus Theorem</em>).
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <PointCloudCanvas D={1} epsilon={epsilon} numPoints={numPoints} title={shape === 'gaussian' ? "Gauss (D = 1)" : "Odcinek (D = 1)"} shape={shape} />
                    <PointCloudCanvas D={2} epsilon={epsilon} numPoints={numPoints} title={shape === 'cube' ? "Kwadrat (D = 2)" : shape === 'sphere' ? "Koło (D = 2)" : "Gauss (D = 2)"} shape={shape} />
                    <PointCloudCanvas3D D={3} epsilon={epsilon} numPoints={numPoints} title={shape === 'cube' ? "Sześcian (D = 3)" : shape === 'sphere' ? "Kula (D = 3)" : "Gauss (D = 3)"} shape={shape} />
                    <PointCloudCanvas D={nD} epsilon={epsilon} numPoints={numPoints} title={`Rzut na 2D (D = ${nD})`} shape={shape} />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-xl flex items-start gap-4">
                    <Info className="text-blue-600 shrink-0 mt-0.5 w-6 h-6" />
                    <div className="text-blue-900 dark:text-blue-200 text-sm md:text-base">
                        <p><strong>Dlaczego w hiperkuli rzut <InlineMath math="nD" /> wygląda inaczej niż w hiperkostce?</strong></p>
                        <p className="mt-1">W hiperkostce współrzędne są niezależne, więc rzut na 2D zawsze wypełnia pełny kwadrat. W hiperkuli współrzędne są <strong>zależne</strong> (suma ich kwadratów musi być mniejsza od 1). Kiedy wymiarów jest dużo, większość "budżetu" promienia pochłaniają pozostałe ukryte osie. Dlatego rzut hiperkuli na 2D koncentruje się niezwykle gęsto wokół zera, przypominając rozkład normalny (Gaussa)!</p>
                        <p className="mt-2"><strong>A co z samym rozkładem Gaussa?</strong> W przypadku wielowymiarowego rozkładu Gaussa, współrzędne są niezależne, ale ich suma kwadratów (odległość od środka) rośnie wraz z wymiarem. W efekcie, w wysokich wymiarach, niemal cała masa prawdopodobieństwa skupia się w cienkiej sferze o promieniu <InlineMath math="\sqrt{D}" /> (tzw. <em>Gaussian Annulus Theorem</em>). Wnętrze chmury staje się puste!</p>
                        <p className="mt-2"><strong>Wniosek:</strong> Niezależnie od tego, czy mamy do czynienia z kostką, kulą, czy rozkładem Gaussa – w wysokich wymiarach cała "treść" ucieka na zewnątrz (do "skórki").</p>
                    </div>
                </div>

                <HypersphereVsHypercubeSection />
                
                <HedgehogSyndromeSection />

                <DistanceParadoxSection shape={shape} />

                <MachineLearningCorner />

            </div>
        </div>
    );
}
