import React, { useState, useEffect, useRef } from 'react';
import { Zap, MoveRight, Lock, Unlock, Target, AlertCircle } from 'lucide-react';

export default function IntegralLab() {
    const [isDragging, setIsDragging] = useState(false);
    const [blockX, setBlockX] = useState(0); 
    const [dragStartX, setDragStartX] = useState(0); 
    const [dragOffsetX, setDragOffsetX] = useState(0); 
    
    const [ratchetSegments, setRatchetSegments] = useState<{startX: number, endX: number}[]>([]); 
    const [shotX, setShotX] = useState(0); 
    
    const [approxMethod, setApproxMethod] = useState('end'); 
    const [forceType, setForceType] = useState('shiftedCubic'); 
    
    const [isReleased, setIsReleased] = useState(false);
    const [animPos, setAnimPos] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [flash, setFlash] = useState(false);
    
    const trackRef = useRef<HTMLDivElement>(null);
    const [maxTrackX, setMaxTrackX] = useState(500); 

    const requestRef = useRef<number>();
    const releaseStartX = useRef(0);

    const MASS = 10; 
    const LOGICAL_MAX_X = 2.0; 
    const LOGICAL_MAX_F = 50.0; 
    
    const WALL_WIDTH = 40; 
    const BLOCK_WIDTH = 80; 

    const GRAPH_W = 380;
    const GRAPH_H = 130;
    const GRAPH_LEFT = 20;
    const GRAPH_BOTTOM = 140;
    
    const SCALE_X = GRAPH_W / maxTrackX;
    const SCALE_Y = GRAPH_H / LOGICAL_MAX_F;

    const pxToMeters = (px: number) => (px / maxTrackX) * LOGICAL_MAX_X;
    const mapX = (px: number) => GRAPH_LEFT + px * SCALE_X;
    const mapY = (f: number) => GRAPH_BOTTOM - f * SCALE_Y;
    const mapW = (dxPx: number) => dxPx * SCALE_X;
    const mapH = (f: number) => f * SCALE_Y;

    useEffect(() => {
        const updateWidth = () => {
        if (trackRef.current) {
            const newMax = Math.max(200, trackRef.current.clientWidth - WALL_WIDTH - BLOCK_WIDTH - 60);
            setMaxTrackX(newMax);
        }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const getForceAt = (metersX: number, type: string) => {
        const rawU = metersX / LOGICAL_MAX_X; 
        
        if (type === 'linear') {
        return LOGICAL_MAX_F * rawU;
        }
        if (type === 'cubic') {
        return LOGICAL_MAX_F * Math.pow(rawU, 3);
        }
        if (type === 'shiftedCubic') {
        return LOGICAL_MAX_F * (2 * rawU * Math.pow(1.5 - rawU, 2));
        }
        return LOGICAL_MAX_F * rawU;
    };

    const getCurrentF = (pxStartX: number, pxCurrentX: number, method: string, fType: string) => {
        const mStart = pxToMeters(pxStartX);
        const mCurrent = pxToMeters(pxCurrentX);
        
        if (method === 'start') return getForceAt(mStart, fType);
        if (method === 'end') return getForceAt(mCurrent, fType);
        if (method === 'middle') return getForceAt((mStart + mCurrent) / 2, fType);
        return getForceAt(mStart, fType);
    };

    const getExactWork = (pxX: number, type: string) => {
        let sum = 0;
        const steps = 1000;
        const dxPx = pxX / steps;
        const dxM = pxToMeters(dxPx);
        for(let i = 0; i < steps; i++) {
        sum += getForceAt(pxToMeters(i * dxPx + dxPx/2), type) * dxM;
        }
        return sum;
    };

    const evaluatedPoints = ratchetSegments.map(seg => ({
        x: seg.startX,
        dx: seg.endX - seg.startX,
        f: getCurrentF(seg.startX, seg.endX, approxMethod, forceType)
    }));

    const activeF = isDragging ? getCurrentF(dragStartX, blockX, approxMethod, forceType) : 0;
    const currentDragWork = isDragging ? (activeF * pxToMeters(blockX - dragStartX)) : 0;
    const totalApproxWork = evaluatedPoints.reduce((sum, p) => sum + (p.f * pxToMeters(p.dx)), 0) + currentDragWork;

    const exactW = (isReleased || showResult) ? getExactWork(shotX, forceType) : getExactWork(blockX, forceType);
    const displayedV = Math.sqrt((2 * totalApproxWork) / MASS);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!isReleased) {
        let currentVisualX = blockX;
        if (showResult) {
            setRatchetSegments([]);
            setShowResult(false);
            setFlash(false);
            setBlockX(0);
            currentVisualX = 0;
        }
        
        setIsDragging(true);
        
        if (trackRef.current) {
            const rect = trackRef.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            
            const blockVisualLeft = WALL_WIDTH + currentVisualX; 
            setDragOffsetX(mouseX - blockVisualLeft);
            setDragStartX(currentVisualX);
        }
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        
        let newX = mouseX - dragOffsetX - WALL_WIDTH; 
        newX = Math.max(dragStartX, Math.min(newX, maxTrackX));
        setBlockX(newX);
    };

    const handleMouseUp = () => {
        if (isDragging) {
        if (blockX > dragStartX) {
            setRatchetSegments(prev => [...prev, { startX: dragStartX, endX: blockX }]);
        }
        setIsDragging(false);
        }
    };

    const handleShoot = () => {
        if (isReleased || blockX === 0) return;
        
        setShotX(blockX);
        releaseStartX.current = blockX;
        setIsReleased(true);
        setAnimPos(blockX);
    };

    useEffect(() => {
        if (isReleased) {
        const speed = releaseStartX.current / 90; 

        const animate = () => {
            setAnimPos(prev => {
            const next = prev - speed;
            
            if (next <= 0) {
                setIsReleased(false);
                setBlockX(0); 
                setDragStartX(0);
                
                setFlash(true);
                setTimeout(() => setFlash(false), 500);
                
                setShowResult(true); 
                return 0; 
            }
            return next;
            });
            requestRef.current = requestAnimationFrame(animate);
        };
        requestRef.current = requestAnimationFrame(animate);
        }
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [isReleased]);

    const handleForceChange = (type: string) => {
        setForceType(type);
        setBlockX(0);
        setRatchetSegments([]);
        setIsReleased(false);
        setAnimPos(0);
        setShowResult(false);
        setFlash(false);
    };

    const currentX = isReleased ? animPos : blockX;
    
    const getIdealPathPoints = (pxMaxX: number) => {
        let pts = [];
        for (let px = 0; px <= pxMaxX; px += 5) {
        pts.push(`${mapX(px)},${mapY(getForceAt(pxToMeters(px), forceType))}`);
        }
        pts.push(`${mapX(pxMaxX)},${mapY(getForceAt(pxToMeters(pxMaxX), forceType))}`);
        return pts.join(" ");
    };

    const getIdealAreaPoints = (pxMaxX: number) => {
        let pts = [`${mapX(0)},${mapY(0)}`];
        for (let px = 0; px <= pxMaxX; px += 5) {
        pts.push(`${mapX(px)},${mapY(getForceAt(pxToMeters(px), forceType))}`);
        }
        pts.push(`${mapX(pxMaxX)},${mapY(getForceAt(pxToMeters(pxMaxX), forceType))}`);
        pts.push(`${mapX(pxMaxX)},${mapY(0)}`);
        return pts.join(" ");
    };

    const getSpringPath = (width: number) => {
        const w = Math.max(2, width);
        const segments = 24; 
        const step = w / segments;
        let path = `M 0 0 `;
        for(let i = 1; i < segments; i++) {
        const y = i % 2 === 0 ? -12 : 12;
        path += `L ${i * step} ${y} `;
        }
        path += `L ${w} 0`;
        return path;
    };

    const ratchetAngle = isDragging ? 55 - Math.sin(blockX * 0.4) * 15 : 45;
    const errorPercent = exactW > 0 ? (((totalApproxWork - exactW) / exactW) * 100).toFixed(1) : "0.0";

    return (
        <div className="flex flex-col min-h-screen p-4 md:p-8 font-sans text-slate-900 justify-center select-none bg-slate-50 dark:bg-slate-800">
            <div className="max-w-6xl mx-auto w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-black/5 dark:border-white/10">
                
                <div className="bg-slate-900 p-6 text-white flex justify-between items-center border-b-4 border-indigo-500">
                    <div>
                        <h1 className="text-3xl font-black italic text-indigo-400">INTEGRAL LAB v11.0</h1>
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mt-1">Zapadka, Realna Sprężyna i Lokalne Max</p>
                    </div>
                    <Zap className={isReleased ? "text-yellow-400 animate-pulse w-8 h-8" : "text-slate-700 dark:text-slate-300 w-8 h-8"} />
                </div>

                <div className="p-6 md:p-8 space-y-6">
                    <div 
                        ref={trackRef}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        className="relative bg-slate-950 rounded-2xl p-6 shadow-inner border-b-8 border-slate-800 flex flex-col justify-center overflow-hidden min-h-[500px]"
                        style={{ cursor: !isReleased ? 'crosshair' : 'default' }}
                    >
                        <div className="w-full space-y-12">
                            <div className="relative w-full h-48 bg-slate-900/50 rounded-xl border-x-4 border-slate-800 overflow-visible shadow-inner mt-4">
                                <div 
                                    className="absolute -top-6 flex justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400 pointer-events-none"
                                    style={{ left: `${WALL_WIDTH + BLOCK_WIDTH/2}px`, width: `${maxTrackX}px` }}
                                >
                                    <div className="flex flex-col items-center">0.0m<div className="h-2 w-px bg-slate-500 mt-1"/></div>
                                    <div className="flex flex-col items-center">0.5m<div className="h-2 w-px bg-slate-500 mt-1"/></div>
                                    <div className="flex flex-col items-center">1.0m<div className="h-2 w-px bg-slate-500 mt-1"/></div>
                                    <div className="flex flex-col items-center">1.5m<div className="h-2 w-px bg-slate-500 mt-1"/></div>
                                    <div className="flex flex-col items-center">2.0m<div className="h-2 w-px bg-slate-500 mt-1"/></div>
                                </div>

                                <div 
                                    className="absolute bottom-0 h-3 opacity-40 pointer-events-none"
                                    style={{ 
                                        left: `${WALL_WIDTH}px`, 
                                        right: 0,
                                        background: 'repeating-linear-gradient(-60deg, transparent, transparent 8px, #475569 8px, #475569 12px)' 
                                    }}
                                />

                                <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-red-950 to-red-800 shadow-xl z-20 flex flex-col justify-around py-3 border-r-2 border-red-500" style={{ width: `${WALL_WIDTH}px` }}>
                                    {[...Array(6)].map((_, i) => <div key={i} className="h-1.5 w-full bg-red-500/20" />)}
                                    
                                    {flash && (
                                        <div 
                                            className="absolute z-50 pointer-events-none flex items-center justify-center animate-bounce-y"
                                            style={{
                                                left: `${WALL_WIDTH - 20}px`, 
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                fontSize: '5rem',
                                                filter: 'drop-shadow(0 0 25px rgba(255,100,0,1))'
                                            }}
                                        >
                                            💥
                                        </div>
                                    )}
                                </div>
                                
                                <svg 
                                    className="absolute pointer-events-none z-10 overflow-visible" 
                                    style={{ 
                                        left: `${WALL_WIDTH}px`, 
                                        bottom: '40px', 
                                        width: `${Math.max(2, currentX)}px`,
                                        height: '2px' 
                                    }} 
                                >
                                    <path 
                                        d={getSpringPath(currentX)} 
                                        fill="none" 
                                        stroke="#94a3b8" 
                                        strokeWidth="3.5" 
                                        strokeLinejoin="round"
                                        style={{ filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.6))', opacity: currentX > 5 ? 1 : 0 }}
                                    />
                                </svg>

                                <div 
                                    className="absolute z-30"
                                    style={{ 
                                        left: `${currentX + WALL_WIDTH}px`, 
                                        bottom: '8px', 
                                    }}
                                >
                                    <div 
                                        onMouseDown={handleMouseDown}
                                        onDragStart={(e) => e.preventDefault()}
                                        draggable={false}
                                        className={`relative rounded-xl shadow-2xl flex flex-col items-center justify-center border-2 transition-transform cursor-grab active:cursor-grabbing select-none ${isReleased ? 'bg-red-600 border-red-400' : 'bg-indigo-600 border-indigo-400 text-white hover:bg-indigo-500 hover:scale-[1.02]'}`}
                                        style={{ width: `${BLOCK_WIDTH}px`, height: `${BLOCK_WIDTH}px` }}
                                    >
                                        <Lock size={20} className={`pointer-events-none ${isReleased ? "hidden" : "opacity-50 mb-1"}`} />
                                        <span className="text-sm font-black pointer-events-none">{MASS}kg</span>
                                        
                                        {!isReleased && (
                                            <div 
                                                className="absolute top-full left-[25%] w-1.5 h-[14px] bg-slate-300 origin-top pointer-events-none rounded-b-full shadow-md"
                                                style={{
                                                    transform: `translateX(-50%) rotate(${ratchetAngle}deg)`,
                                                    transition: isDragging ? 'none' : 'transform 0.15s ease-out'
                                                }}
                                            />
                                        )}
                                        
                                        <div className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 flex flex-col gap-2 w-64 pointer-events-none transition-opacity duration-150 ${isDragging ? 'opacity-100' : 'opacity-0'}`}>
                                            <div className="flex items-center text-[10px] font-semibold text-indigo-300">
                                                <span className="w-20 text-right mr-2">F (obliczona):</span>
                                                <div className="h-1.5 bg-indigo-400 rounded-r" style={{ width: `${Math.max(1, activeF * 1.5)}px` }} />
                                                <span className="ml-2 whitespace-nowrap">{activeF.toFixed(1)} N</span>
                                            </div>
                                            <div className="flex items-center text-[10px] font-semibold text-red-400">
                                                <span className="w-20 text-right mr-2">F (sprężyny):</span>
                                                <div className="h-1.5 bg-red-500 rounded-r shadow-[0_0_8px_rgba(239,68,68,0.8)]" style={{ width: `${Math.max(1, getForceAt(pxToMeters(blockX), forceType) * 1.5)}px` }} />
                                                <span className="ml-2 whitespace-nowrap">{getForceAt(pxToMeters(blockX), forceType).toFixed(1)} N</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
                                <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800">
                                    <div className="text-xs text-indigo-400 font-black mb-3 uppercase flex justify-between">
                                        <span>Wykres Aproksymacji Siły (F vs X)</span>
                                        <span className="text-slate-500 dark:text-slate-400 italic flex items-center gap-1">
                                            <AlertCircle size={12} /> Przeciągnij = Prostokąt
                                        </span>
                                    </div>
                                    <svg className="w-full h-40" viewBox="0 0 400 160" preserveAspectRatio="none">
                                        <line x1={GRAPH_LEFT} y1={GRAPH_BOTTOM} x2={GRAPH_LEFT + GRAPH_W} y2={GRAPH_BOTTOM} className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2" />
                                        <line x1={GRAPH_LEFT} y1={GRAPH_BOTTOM} x2={GRAPH_LEFT} y2={10} className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2" />
                                        
                                        <text x={GRAPH_LEFT - 5} y={GRAPH_BOTTOM} fontSize="10" fill="#64748b" textAnchor="end">0N</text>
                                        <text x={GRAPH_LEFT - 5} y={mapY(LOGICAL_MAX_F)} fontSize="10" fill="#64748b" textAnchor="end">{LOGICAL_MAX_F}N</text>
                                        
                                        <polyline 
                                            points={getIdealPathPoints(maxTrackX)} 
                                            fill="none"
                                            stroke="#ef4444" strokeWidth="5" strokeDasharray="10 8" opacity="0.8" 
                                        />
                                        
                                        {showResult && (
                                            <polygon 
                                                points={getIdealAreaPoints(shotX)} 
                                                fill="rgba(239, 68, 68, 0.2)" 
                                            />
                                        )}
                                        
                                        {evaluatedPoints.map((p, i) => (
                                            <rect 
                                                key={i} 
                                                x={mapX(p.x)} 
                                                y={mapY(p.f)} 
                                                width={mapW(p.dx)} 
                                                height={mapH(p.f)} 
                                                fill="rgba(99, 102, 241, 0.45)" 
                                                stroke="rgba(129, 140, 248, 0.9)" 
                                                strokeWidth="1.5" 
                                            />
                                        ))}
                                        
                                        {isDragging && (
                                            <rect 
                                                x={mapX(dragStartX)} 
                                                y={mapY(activeF)} 
                                                width={mapW(blockX - dragStartX)} 
                                                height={mapH(activeF)} 
                                                fill="rgba(99, 102, 241, 0.2)"
                                                stroke="rgba(129, 140, 248, 0.6)"
                                                strokeWidth="1.5"
                                                strokeDasharray="4"
                                                className="animate-pulse"
                                            />
                                        )}

                                        {showResult && (
                                            <polyline 
                                                points={getIdealPathPoints(shotX)} 
                                                fill="none"
                                                stroke="#ef4444" strokeWidth="4" opacity="1" 
                                            />
                                        )}
                                    </svg>
                                </div>

                                <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 flex flex-col justify-center space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-slate-400 font-black uppercase tracking-wider">Praca (Suma pól):</span>
                                        <span className="text-indigo-400 font-mono text-3xl font-black">{totalApproxWork.toFixed(2)} J</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                                        <span className={`text-xs font-black uppercase tracking-wider ${showResult ? 'text-red-400' : 'text-slate-600 dark:text-slate-400'}`}>Dokładna całka:</span>
                                        <span className={`font-mono text-2xl font-black ${showResult ? 'text-red-400' : 'text-slate-600 dark:text-slate-400'}`}>
                                            {showResult ? `${exactW.toFixed(2)} J` : '??? J'}
                                        </span>
                                    </div>
                                    
                                    {showResult && (
                                        <div className="pt-2 animate-in fade-in slide-in-from-bottom-2">
                                            <div className="text-xs text-emerald-400 font-black uppercase mb-2 tracking-widest">Wypadkowa Prędkość:</div>
                                            <div className="text-white font-mono text-2xl mb-1">
                                                V = {displayedV.toFixed(2)} m/s
                                            </div>
                                            <div className="text-slate-400 font-mono text-xs flex justify-between items-center mt-3">
                                                <span className="uppercase">Błąd w wyliczaniu energii:</span>
                                                <span className={`px-2 py-1 rounded font-black ${parseFloat(errorPercent) > 0 ? 'bg-emerald-900/60 text-emerald-400' : 'bg-red-900/60 text-red-400'}`}>
                                                    {parseFloat(errorPercent) > 0 ? '+' : ''}{errorPercent}%
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm">
                        <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-5">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl transition-all ${isDragging ? 'bg-indigo-100 text-indigo-600 scale-110' : 'bg-white dark:bg-slate-900 border border-black/5 dark:border-white/10 text-slate-400'}`}>
                                    {isDragging ? <MoveRight size={24} className="animate-bounce-x" /> : <Target size={24} />}
                                </div>
                                <div>
                                    <p className="text-sm font-black uppercase text-slate-800 dark:text-slate-200">Krok Eksperymentu</p>
                                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                                        {isDragging ? "Budowanie prostokąta..." : (isReleased ? "Trwa ruch bloku..." : (showResult ? "Gotowe! Zmień opcje na dole by zaktualizować wynik, albo pociągnij znów." : "Chwyć blok myszką i narysuj prostokąty."))}
                                    </p>
                                </div>
                            </div>
                            
                            <button 
                                onClick={handleShoot}
                                disabled={isReleased || blockX === 0 || isDragging}
                                className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 disabled:opacity-40 disabled:hover:shadow-none transition-all flex items-center gap-2"
                            >
                                <Unlock size={18} /> Strzał (Zwolnij)
                            </button>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 justify-between">
                            <div className="flex flex-col gap-2 flex-1">
                                <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider">Prawo Siły Sprężyny (F):</span>
                                <div className="flex bg-white dark:bg-slate-900 rounded-xl p-1.5 shadow-sm border border-black/5 dark:border-white/10">
                                    <button 
                                        onClick={() => handleForceChange('linear')} 
                                        className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-black uppercase transition-all ${forceType === 'linear' ? 'bg-indigo-50 dark:bg-indigo-900/30 shadow-sm text-indigo-700 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600 dark:text-slate-400'}`}
                                    >
                                        Liniowa
                                    </button>
                                    <button 
                                        onClick={() => handleForceChange('cubic')} 
                                        className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-black uppercase transition-all ${forceType === 'cubic' ? 'bg-indigo-50 dark:bg-indigo-900/30 shadow-sm text-indigo-700 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600 dark:text-slate-400'}`}
                                    >
                                        x³ (Lawina)
                                    </button>
                                    <button 
                                        onClick={() => handleForceChange('shiftedCubic')} 
                                        className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-black uppercase transition-all ${forceType === 'shiftedCubic' ? 'bg-indigo-50 dark:bg-indigo-900/30 shadow-sm text-indigo-700 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600 dark:text-slate-400'}`}
                                    >
                                        Złożona (Max Lokalne)
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 flex-1">
                                <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider">Wysokość tworzonych prostokątów:</span>
                                <div className="flex bg-white dark:bg-slate-900 rounded-xl p-1.5 shadow-sm border border-black/5 dark:border-white/10">
                                    <button 
                                        onClick={() => setApproxMethod('start')} 
                                        disabled={isDragging} 
                                        className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-black uppercase transition-all ${approxMethod === 'start' ? 'bg-indigo-50 dark:bg-indigo-900/30 shadow-sm text-indigo-700 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600 dark:text-slate-400 disabled:opacity-50'}`}
                                    >
                                        Lewy Brzeg
                                    </button>
                                    <button 
                                        onClick={() => setApproxMethod('middle')} 
                                        disabled={isDragging} 
                                        className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-black uppercase transition-all ${approxMethod === 'middle' ? 'bg-indigo-50 dark:bg-indigo-900/30 shadow-sm text-indigo-700 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600 dark:text-slate-400 disabled:opacity-50'}`}
                                    >
                                        Środek
                                    </button>
                                    <button 
                                        onClick={() => setApproxMethod('end')} 
                                        disabled={isDragging} 
                                        className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-black uppercase transition-all ${approxMethod === 'end' ? 'bg-indigo-50 dark:bg-indigo-900/30 shadow-sm text-indigo-700 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600 dark:text-slate-400 disabled:opacity-50'}`}
                                    >
                                        Prawy Brzeg
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
