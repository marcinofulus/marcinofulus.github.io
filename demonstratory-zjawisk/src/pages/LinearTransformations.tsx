import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, Play, Pause, Box, Square } from 'lucide-react';
import { Matrix, SingularValueDecomposition } from 'ml-matrix';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function LinearTransformations() {
    const canvas2DRef = useRef<HTMLCanvasElement>(null);
    const canvas3DRef = useRef<HTMLDivElement>(null);
    const [mode, setMode] = useState<'2D' | '3D'>('2D');
    
    // 2D Matrix
    const [matrix2D, setMatrix2D] = useState({ a: 1, b: 0, c: 0, d: 1 });
    const targetMatrix2DRef = useRef({ a: 1, b: 0, c: 0, d: 1 });
    
    // 3D Matrix
    const [matrix3D, setMatrix3D] = useState({
        m11: 1, m12: 0, m13: 0,
        m21: 0, m22: 1, m23: 0,
        m31: 0, m32: 0, m33: 1
    });
    const targetMatrix3DRef = useRef({
        m11: 1, m12: 0, m13: 0,
        m21: 0, m22: 1, m23: 0,
        m31: 0, m32: 0, m33: 1
    });

    const [animating, setAnimating] = useState(false);
    const [progress, setProgress] = useState(1); // 0 to 1
    const animationRef = useRef<number>();

    // Rotation parameterization state
    const [angle2D, setAngle2D] = useState(0);
    const [angles3D, setAngles3D] = useState({ x: 0, y: 0, z: 0 });

    // Three.js refs
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sphereMeshRef = useRef<THREE.Mesh | null>(null);
    const gridHelperRef = useRef<THREE.GridHelper | null>(null);
    const axesHelperRef = useRef<THREE.AxesHelper | null>(null);
    const basisVectorsRef = useRef<THREE.ArrowHelper[]>([]);
    const svdAxesRef = useRef<THREE.Line[]>([]);

    // 2D Drawing
    const draw2D = (ctx: CanvasRenderingContext2D, width: number, height: number, currentMatrix: {a:number, b:number, c:number, d:number}) => {
        ctx.clearRect(0, 0, width, height);
        ctx.save();
        ctx.translate(width / 2, height / 2); // Center origin

        const scale = 40; // Pixels per unit
        const gridLimit = 10;

        const transform = (x: number, y: number) => {
            return {
                x: (currentMatrix.a * x + currentMatrix.b * y) * scale,
                y: -(currentMatrix.c * x + currentMatrix.d * y) * scale // Invert Y for canvas
            };
        };

        const isDark = document.documentElement.classList.contains('dark');
        const gridColor = isDark ? '#374151' : '#e5e7eb';
        const axisColorX = '#ef4444';
        const axisColorY = '#10b981';

        // Draw transformed grid lines
        ctx.lineWidth = 1;
        for (let i = -gridLimit; i <= gridLimit; i++) {
            // Vertical lines (x = i)
            ctx.beginPath();
            let p1 = transform(i, -gridLimit);
            let p2 = transform(i, gridLimit);
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = i === 0 ? axisColorY : gridColor;
            ctx.stroke();

            // Horizontal lines (y = i)
            ctx.beginPath();
            p1 = transform(-gridLimit, i);
            p2 = transform(gridLimit, i);
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = i === 0 ? axisColorX : gridColor;
            ctx.stroke();
        }

        // Draw original circle and its transformed image (ellipse)
        ctx.lineWidth = 2;
        
        // Original circle (faint)
        ctx.beginPath();
        ctx.arc(0, 0, scale, 0, Math.PI * 2);
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
        ctx.stroke();

        // Transformed circle (ellipse)
        ctx.beginPath();
        const steps = 100;
        for (let i = 0; i <= steps; i++) {
            const angle = (i / steps) * Math.PI * 2;
            const x = Math.cos(angle);
            const y = Math.sin(angle);
            const p = transform(x, y);
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = '#8b5cf6'; // Purple
        ctx.stroke();
        ctx.fillStyle = 'rgba(139, 92, 246, 0.1)';
        ctx.fill();

        // Draw basis vectors
        ctx.lineWidth = 3;
        
        // i-hat (red)
        const iHat = transform(1, 0);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(iHat.x, iHat.y);
        ctx.strokeStyle = '#ef4444';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(iHat.x, iHat.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ef4444';
        ctx.fill();

        // j-hat (green)
        const jHat = transform(0, 1);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(jHat.x, jHat.y);
        ctx.strokeStyle = '#10b981';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(jHat.x, jHat.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#10b981';
        ctx.fill();

        // Draw SVD Principal Axes if available
        try {
            const m = new Matrix([[currentMatrix.a, currentMatrix.b], [currentMatrix.c, currentMatrix.d]]);
            const svd = new SingularValueDecomposition(m);
            const U = svd.leftSingularVectors;
            const S = svd.diagonalMatrix;
            
            // The principal axes of the ellipse are given by the columns of U scaled by singular values
            const u1x = U.get(0, 0) * S.get(0, 0);
            const u1y = U.get(1, 0) * S.get(0, 0);
            const u2x = U.get(0, 1) * S.get(1, 1);
            const u2y = U.get(1, 1) * S.get(1, 1);

            // Draw principal axes
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            
            // Axis 1
            ctx.beginPath();
            ctx.moveTo(-u1x * scale, u1y * scale);
            ctx.lineTo(u1x * scale, -u1y * scale);
            ctx.strokeStyle = '#f59e0b'; // Amber
            ctx.stroke();

            // Axis 2
            ctx.beginPath();
            ctx.moveTo(-u2x * scale, u2y * scale);
            ctx.lineTo(u2x * scale, -u2y * scale);
            ctx.strokeStyle = '#0ea5e9'; // Sky blue
            ctx.stroke();
            
            ctx.setLineDash([]);
        } catch (e) {
            // SVD might fail for zero matrix or similar edge cases
        }

        ctx.restore();
    };

    // 3D Setup
    useEffect(() => {
        if (mode !== '3D' || !canvas3DRef.current) return;

        const width = canvas3DRef.current.clientWidth;
        const height = canvas3DRef.current.clientHeight;

        const scene = new THREE.Scene();
        sceneRef.current = scene;
        scene.background = new THREE.Color(document.documentElement.classList.contains('dark') ? '#0f172a' : '#f8fafc');

        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.set(5, 5, 5);
        camera.lookAt(0, 0, 0);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        canvas3DRef.current.innerHTML = '';
        canvas3DRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        // Grid and Axes
        const gridHelper = new THREE.GridHelper(10, 10, 0x888888, 0x444444);
        scene.add(gridHelper);
        gridHelperRef.current = gridHelper;

        const axesHelper = new THREE.AxesHelper(3);
        scene.add(axesHelper);
        axesHelperRef.current = axesHelper;

        // Sphere (will be transformed into ellipsoid)
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x8b5cf6, 
            wireframe: true,
            transparent: true,
            opacity: 0.5
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        sphereMeshRef.current = sphere;

        // Basis vectors
        const origin = new THREE.Vector3(0, 0, 0);
        const arrowI = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), origin, 1, 0xef4444, 0.2, 0.1);
        const arrowJ = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), origin, 1, 0x10b981, 0.2, 0.1);
        const arrowK = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), origin, 1, 0x3b82f6, 0.2, 0.1);
        scene.add(arrowI, arrowJ, arrowK);
        basisVectorsRef.current = [arrowI, arrowJ, arrowK];

        // SVD Principal Axes in 3D
        const createDashedLine = (color: number) => {
            const material = new THREE.LineDashedMaterial({ color, dashSize: 0.2, gapSize: 0.1 });
            const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(1,0,0)]);
            const line = new THREE.Line(geometry, material);
            line.computeLineDistances();
            return line;
        };

        const svdLine1 = createDashedLine(0xf59e0b); // Amber
        const svdLine2 = createDashedLine(0x0ea5e9); // Sky blue
        const svdLine3 = createDashedLine(0xd946ef); // Fuchsia
        
        scene.add(svdLine1, svdLine2, svdLine3);
        svdAxesRef.current = [svdLine1, svdLine2, svdLine3];

        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            controls.dispose();
            renderer.dispose();
            if (sphereMeshRef.current) {
                sphereMeshRef.current.geometry.dispose();
                (sphereMeshRef.current.material as THREE.Material).dispose();
            }
            svdAxesRef.current.forEach(line => {
                line.geometry.dispose();
                (line.material as THREE.Material).dispose();
            });
        };
    }, [mode]);

    // Update 3D scene based on matrix
    useEffect(() => {
        if (mode !== '3D' || !sphereMeshRef.current || !basisVectorsRef.current.length) return;

        const m = {
            m11: 1 + (targetMatrix3DRef.current.m11 - 1) * progress,
            m12: 0 + (targetMatrix3DRef.current.m12 - 0) * progress,
            m13: 0 + (targetMatrix3DRef.current.m13 - 0) * progress,
            m21: 0 + (targetMatrix3DRef.current.m21 - 0) * progress,
            m22: 1 + (targetMatrix3DRef.current.m22 - 1) * progress,
            m23: 0 + (targetMatrix3DRef.current.m23 - 0) * progress,
            m31: 0 + (targetMatrix3DRef.current.m31 - 0) * progress,
            m32: 0 + (targetMatrix3DRef.current.m32 - 0) * progress,
            m33: 1 + (targetMatrix3DRef.current.m33 - 1) * progress,
        };

        const transformMatrix = new THREE.Matrix4();
        transformMatrix.set(
            m.m11, m.m12, m.m13, 0,
            m.m21, m.m22, m.m23, 0,
            m.m31, m.m32, m.m33, 0,
            0, 0, 0, 1
        );

        // Apply to sphere
        sphereMeshRef.current.matrixAutoUpdate = false;
        sphereMeshRef.current.matrix.copy(transformMatrix);

        // Apply to basis vectors
        const vI = new THREE.Vector3(m.m11, m.m21, m.m31);
        const vJ = new THREE.Vector3(m.m12, m.m22, m.m32);
        const vK = new THREE.Vector3(m.m13, m.m23, m.m33);

        if (vI.length() > 0.001) {
            basisVectorsRef.current[0].setDirection(vI.clone().normalize());
            basisVectorsRef.current[0].setLength(vI.length(), 0.2, 0.1);
        }
        if (vJ.length() > 0.001) {
            basisVectorsRef.current[1].setDirection(vJ.clone().normalize());
            basisVectorsRef.current[1].setLength(vJ.length(), 0.2, 0.1);
        }
        if (vK.length() > 0.001) {
            basisVectorsRef.current[2].setDirection(vK.clone().normalize());
            basisVectorsRef.current[2].setLength(vK.length(), 0.2, 0.1);
        }

        // Calculate SVD for the current interpolated matrix to draw principal axes
        try {
            const currentM = new Matrix([
                [m.m11, m.m12, m.m13],
                [m.m21, m.m22, m.m23],
                [m.m31, m.m32, m.m33]
            ]);
            const svd = new SingularValueDecomposition(currentM);
            const U = svd.leftSingularVectors;
            const S = svd.diagonalMatrix;

            const updateLine = (line: THREE.Line, u: THREE.Vector3, s: number) => {
                if (s > 0.001) {
                    const end = u.clone().normalize().multiplyScalar(s);
                    line.geometry.setFromPoints([end.clone().negate(), end]);
                    line.computeLineDistances();
                    line.visible = true;
                } else {
                    line.visible = false;
                }
            };

            updateLine(svdAxesRef.current[0], new THREE.Vector3(U.get(0, 0), U.get(1, 0), U.get(2, 0)), S.get(0, 0));
            updateLine(svdAxesRef.current[1], new THREE.Vector3(U.get(0, 1), U.get(1, 1), U.get(2, 1)), S.get(1, 1));
            updateLine(svdAxesRef.current[2], new THREE.Vector3(U.get(0, 2), U.get(1, 2), U.get(2, 2)), S.get(2, 2));
        } catch (e) {
            svdAxesRef.current.forEach(line => line.visible = false);
        }

    }, [progress, matrix3D, mode]);

    // 2D Animation Loop
    useEffect(() => {
        if (mode !== '2D') return;
        const canvas = canvas2DRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const currentMatrix = {
            a: 1 + (targetMatrix2DRef.current.a - 1) * progress,
            b: 0 + (targetMatrix2DRef.current.b - 0) * progress,
            c: 0 + (targetMatrix2DRef.current.c - 0) * progress,
            d: 1 + (targetMatrix2DRef.current.d - 1) * progress,
        };

        draw2D(ctx, canvas.width, canvas.height, currentMatrix);
    }, [progress, matrix2D, mode]);

    const animateToMatrix2D = (target: {a:number, b:number, c:number, d:number}) => {
        targetMatrix2DRef.current = target;
        setMatrix2D(target);
        setProgress(0);
        setAnimating(true);

        let start = performance.now();
        const duration = 1500;

        const step = (time: number) => {
            let p = (time - start) / duration;
            if (p > 1) p = 1;
            const easeP = 1 - Math.pow(1 - p, 3);
            setProgress(easeP);

            if (p < 1) {
                animationRef.current = requestAnimationFrame(step);
            } else {
                setAnimating(false);
            }
        };
        
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        animationRef.current = requestAnimationFrame(step);
    };

    const animateToMatrix3D = (target: any) => {
        targetMatrix3DRef.current = target;
        setMatrix3D(target);
        setProgress(0);
        setAnimating(true);

        let start = performance.now();
        const duration = 1500;

        const step = (time: number) => {
            let p = (time - start) / duration;
            if (p > 1) p = 1;
            const easeP = 1 - Math.pow(1 - p, 3);
            setProgress(easeP);

            if (p < 1) {
                animationRef.current = requestAnimationFrame(step);
            } else {
                setAnimating(false);
            }
        };
        
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        animationRef.current = requestAnimationFrame(step);
    };

    const handleAngle2DChange = (deg: number) => {
        setAngle2D(deg);
        const rad = (deg * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        animateToMatrix2D({ a: cos, b: -sin, c: sin, d: cos });
    };

    const handleAngles3DChange = (axis: 'x' | 'y' | 'z', deg: number) => {
        const newAngles = { ...angles3D, [axis]: deg };
        setAngles3D(newAngles);
        
        const rx = newAngles.x * Math.PI / 180;
        const ry = newAngles.y * Math.PI / 180;
        const rz = newAngles.z * Math.PI / 180;

        const euler = new THREE.Euler(rx, ry, rz, 'XYZ');
        const m = new THREE.Matrix4().makeRotationFromEuler(euler);
        const e = m.elements;

        animateToMatrix3D({
            m11: e[0], m12: e[4], m13: e[8],
            m21: e[1], m22: e[5], m23: e[9],
            m31: e[2], m32: e[6], m33: e[10]
        });
    };

    const applyPreset2D = (preset: 'shear' | 'rotate' | 'scale' | 'reflect' | 'singular') => {
        switch (preset) {
            case 'shear': animateToMatrix2D({ a: 1, b: 1, c: 0, d: 1 }); break;
            case 'rotate': 
                setAngle2D(90);
                animateToMatrix2D({ a: 0, b: -1, c: 1, d: 0 }); 
                break;
            case 'scale': animateToMatrix2D({ a: 2, b: 0, c: 0, d: 2 }); break;
            case 'reflect': animateToMatrix2D({ a: 1, b: 0, c: 0, d: -1 }); break;
            case 'singular': animateToMatrix2D({ a: 1, b: 1, c: 1, d: 1 }); break; // Rank 1
        }
    };

    const applyPreset3D = (preset: 'shear' | 'rotate' | 'scale' | 'singular1' | 'singular2') => {
        switch (preset) {
            case 'shear': animateToMatrix3D({ m11: 1, m12: 1, m13: 0, m21: 0, m22: 1, m23: 0, m31: 0, m32: 0, m33: 1 }); break;
            case 'rotate': 
                setAngles3D({ x: 0, y: 0, z: 45 });
                animateToMatrix3D({ m11: Math.cos(Math.PI/4), m12: -Math.sin(Math.PI/4), m13: 0, m21: Math.sin(Math.PI/4), m22: Math.cos(Math.PI/4), m23: 0, m31: 0, m32: 0, m33: 1 }); 
                break;
            case 'scale': animateToMatrix3D({ m11: 2, m12: 0, m13: 0, m21: 0, m22: 0.5, m23: 0, m31: 0, m32: 0, m33: 1.5 }); break;
            case 'singular2': animateToMatrix3D({ m11: 1, m12: 0, m13: 1, m21: 0, m22: 1, m23: 1, m31: 0, m32: 0, m33: 0 }); break; // Rank 2
            case 'singular1': animateToMatrix3D({ m11: 1, m12: 1, m13: 1, m21: 1, m22: 1, m23: 1, m31: 1, m32: 1, m33: 1 }); break; // Rank 1
        }
    };

    const reset = () => {
        if (mode === '2D') {
            setAngle2D(0);
            animateToMatrix2D({ a: 1, b: 0, c: 0, d: 1 });
        } else {
            setAngles3D({ x: 0, y: 0, z: 0 });
            animateToMatrix3D({ m11: 1, m12: 0, m13: 0, m21: 0, m22: 1, m23: 0, m31: 0, m32: 0, m33: 1 });
        }
    };

    // Calculate SVD and Subspaces
    let svdInfo = null;
    let rank = 0;
    try {
        if (mode === '2D') {
            const m = new Matrix([[matrix2D.a, matrix2D.b], [matrix2D.c, matrix2D.d]]);
            const svd = new SingularValueDecomposition(m);
            rank = svd.rank;
            svdInfo = {
                U: svd.leftSingularVectors.to2DArray(),
                S: svd.diagonalMatrix.to2DArray(),
                V: svd.rightSingularVectors.transpose().to2DArray()
            };
        } else {
            const m = new Matrix([
                [matrix3D.m11, matrix3D.m12, matrix3D.m13],
                [matrix3D.m21, matrix3D.m22, matrix3D.m23],
                [matrix3D.m31, matrix3D.m32, matrix3D.m33]
            ]);
            const svd = new SingularValueDecomposition(m);
            rank = svd.rank;
            svdInfo = {
                U: svd.leftSingularVectors.to2DArray(),
                S: svd.diagonalMatrix.to2DArray(),
                V: svd.rightSingularVectors.transpose().to2DArray()
            };
        }
    } catch (e) {}

    const formatNum = (n: number) => (Math.abs(n) < 0.001 ? '0.00' : n.toFixed(2));

    return (
        <div className="max-w-7xl mx-auto p-8 space-y-8">
            <header className="space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                        Przekształcenia Liniowe i SVD
                    </h1>
                    <div className="flex bg-slate-200 dark:bg-slate-800 rounded-lg p-1">
                        <button 
                            onClick={() => setMode('2D')}
                            className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${mode === '2D' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400 font-medium' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'}`}
                        >
                            <Square size={18} /> 2D
                        </button>
                        <button 
                            onClick={() => setMode('3D')}
                            className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${mode === '3D' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400 font-medium' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'}`}
                        >
                            <Box size={18} /> 3D
                        </button>
                    </div>
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl">
                    Zobacz, jak macierze transformują przestrzeń. Obraz okręgu (lub sfery) po przekształceniu liniowym jest <strong>zawsze</strong> elipsą (lub elipsoidą). Rozkład SVD (Singular Value Decomposition) ujawnia osie główne tej elipsy.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-black/5 dark:border-white/10 flex flex-col overflow-hidden relative min-h-[500px]">
                    {mode === '2D' ? (
                        <canvas 
                            ref={canvas2DRef}
                            width={800}
                            height={600}
                            className="bg-slate-50 dark:bg-slate-800 rounded-xl border border-black/5 dark:border-white/10 w-full h-full object-contain"
                        />
                    ) : (
                        <div 
                            ref={canvas3DRef} 
                            className="bg-slate-50 dark:bg-slate-800 rounded-xl border border-black/5 dark:border-white/10 w-full h-full min-h-[500px]"
                        />
                    )}
                    
                    {/* Legend */}
                    <div className="absolute bottom-10 left-10 bg-white/90 dark:bg-slate-900/90 p-3 rounded-lg shadow-sm border border-black/5 dark:border-white/10 text-sm backdrop-blur-sm">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div> Wektor bazowy X (i)</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-full"></div> Wektor bazowy Y (j)</div>
                        {mode === '3D' && <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-full"></div> Wektor bazowy Z (k)</div>}
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-500 rounded-full opacity-50"></div> Obraz {mode === '2D' ? 'okręgu' : 'sfery'}</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-0 border-t-2 border-dashed border-amber-500"></div> Oś główna 1 (SVD)</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-0 border-t-2 border-dashed border-sky-500"></div> Oś główna 2 (SVD)</div>
                        {mode === '3D' && <div className="flex items-center gap-2"><div className="w-3 h-0 border-t-2 border-dashed border-fuchsia-500"></div> Oś główna 3 (SVD)</div>}
                    </div>
                </div>

                <div className="space-y-6 h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-black/5 dark:border-white/10 space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Macierz Transformacji A</h3>
                            <button 
                                onClick={reset}
                                className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                title="Resetuj"
                            >
                                <RotateCcw size={20} />
                            </button>
                        </div>
                        
                        {mode === '2D' ? (
                            <div className="grid grid-cols-2 gap-4">
                                <input type="number" step="0.1" value={matrix2D.a} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix2D(m => ({...m, a: val})); targetMatrix2DRef.current.a = val; setProgress(1); }} className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent" disabled={animating} />
                                <input type="number" step="0.1" value={matrix2D.b} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix2D(m => ({...m, b: val})); targetMatrix2DRef.current.b = val; setProgress(1); }} className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent" disabled={animating} />
                                <input type="number" step="0.1" value={matrix2D.c} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix2D(m => ({...m, c: val})); targetMatrix2DRef.current.c = val; setProgress(1); }} className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent" disabled={animating} />
                                <input type="number" step="0.1" value={matrix2D.d} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix2D(m => ({...m, d: val})); targetMatrix2DRef.current.d = val; setProgress(1); }} className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent" disabled={animating} />
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 gap-2">
                                <input type="number" step="0.1" value={matrix3D.m11} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix3D(m => ({...m, m11: val})); targetMatrix3DRef.current.m11 = val; setProgress(1); }} className="w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent text-sm" disabled={animating} />
                                <input type="number" step="0.1" value={matrix3D.m12} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix3D(m => ({...m, m12: val})); targetMatrix3DRef.current.m12 = val; setProgress(1); }} className="w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent text-sm" disabled={animating} />
                                <input type="number" step="0.1" value={matrix3D.m13} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix3D(m => ({...m, m13: val})); targetMatrix3DRef.current.m13 = val; setProgress(1); }} className="w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent text-sm" disabled={animating} />
                                
                                <input type="number" step="0.1" value={matrix3D.m21} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix3D(m => ({...m, m21: val})); targetMatrix3DRef.current.m21 = val; setProgress(1); }} className="w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent text-sm" disabled={animating} />
                                <input type="number" step="0.1" value={matrix3D.m22} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix3D(m => ({...m, m22: val})); targetMatrix3DRef.current.m22 = val; setProgress(1); }} className="w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent text-sm" disabled={animating} />
                                <input type="number" step="0.1" value={matrix3D.m23} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix3D(m => ({...m, m23: val})); targetMatrix3DRef.current.m23 = val; setProgress(1); }} className="w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent text-sm" disabled={animating} />
                                
                                <input type="number" step="0.1" value={matrix3D.m31} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix3D(m => ({...m, m31: val})); targetMatrix3DRef.current.m31 = val; setProgress(1); }} className="w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent text-sm" disabled={animating} />
                                <input type="number" step="0.1" value={matrix3D.m32} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix3D(m => ({...m, m32: val})); targetMatrix3DRef.current.m32 = val; setProgress(1); }} className="w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent text-sm" disabled={animating} />
                                <input type="number" step="0.1" value={matrix3D.m33} onChange={(e) => { const val = parseFloat(e.target.value) || 0; setMatrix3D(m => ({...m, m33: val})); targetMatrix3DRef.current.m33 = val; setProgress(1); }} className="w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent text-sm" disabled={animating} />
                            </div>
                        )}

                        <div className="space-y-2">
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Animacje</p>
                            <div className="flex flex-wrap gap-2">
                                {mode === '2D' ? (
                                    <>
                                        <button onClick={() => applyPreset2D('shear')} className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">Ścinanie</button>
                                        <button onClick={() => applyPreset2D('rotate')} className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">Obrót 90°</button>
                                        <button onClick={() => applyPreset2D('scale')} className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">Skalowanie</button>
                                        <button onClick={() => applyPreset2D('reflect')} className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">Odbicie</button>
                                        <button onClick={() => applyPreset2D('singular')} className="px-3 py-1.5 text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-lg transition-colors">Osobliwa (Rank 1)</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => applyPreset3D('shear')} className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">Ścinanie</button>
                                        <button onClick={() => applyPreset3D('rotate')} className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">Obrót Z 45°</button>
                                        <button onClick={() => applyPreset3D('scale')} className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">Skalowanie</button>
                                        <button onClick={() => applyPreset3D('singular2')} className="px-3 py-1.5 text-sm bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900/50 rounded-lg transition-colors">Osobliwa (Rank 2)</button>
                                        <button onClick={() => applyPreset3D('singular1')} className="px-3 py-1.5 text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-lg transition-colors">Osobliwa (Rank 1)</button>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Parametryzacja obrotu</p>
                            {mode === '2D' ? (
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs text-slate-500">
                                        <span>Kąt θ</span>
                                        <span>{angle2D}°</span>
                                    </div>
                                    <input 
                                        type="range" min="-180" max="180" value={angle2D} 
                                        onChange={(e) => handleAngle2DChange(parseFloat(e.target.value))}
                                        className="w-full accent-blue-500"
                                        disabled={animating}
                                    />
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-xs text-slate-500"><span>Oś X (Pitch)</span><span>{angles3D.x}°</span></div>
                                        <input type="range" min="-180" max="180" value={angles3D.x} onChange={(e) => handleAngles3DChange('x', parseFloat(e.target.value))} className="w-full accent-blue-500" disabled={animating} />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-xs text-slate-500"><span>Oś Y (Yaw)</span><span>{angles3D.y}°</span></div>
                                        <input type="range" min="-180" max="180" value={angles3D.y} onChange={(e) => handleAngles3DChange('y', parseFloat(e.target.value))} className="w-full accent-blue-500" disabled={animating} />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-xs text-slate-500"><span>Oś Z (Roll)</span><span>{angles3D.z}°</span></div>
                                        <input type="range" min="-180" max="180" value={angles3D.z} onChange={(e) => handleAngles3DChange('z', parseFloat(e.target.value))} className="w-full accent-blue-500" disabled={animating} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-black/5 dark:border-white/10 space-y-4">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Rozkład SVD (A = U Σ Vᵀ)</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Każde przekształcenie liniowe można rozłożyć na: obrót (Vᵀ), skalowanie wzdłuż osi (Σ) i kolejny obrót (U).
                        </p>
                        
                        {svdInfo && (
                            <div className="space-y-4 font-mono text-xs overflow-x-auto">
                                <div>
                                    <div className="text-slate-500 mb-1">U (Obrót wyjściowy / Osie elipsy):</div>
                                    <div className="grid gap-1 bg-slate-50 dark:bg-slate-800 p-2 rounded">
                                        {svdInfo.U.map((row: number[], i: number) => (
                                            <div key={i} className="flex gap-4">
                                                {row.map((val, j) => <span key={j} className="w-12 text-right">{formatNum(val)}</span>)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">Σ (Wartości szczególne / Długości półosi):</div>
                                    <div className="grid gap-1 bg-slate-50 dark:bg-slate-800 p-2 rounded">
                                        {svdInfo.S.map((row: number[], i: number) => (
                                            <div key={i} className="flex gap-4">
                                                {row.map((val, j) => <span key={j} className={`w-12 text-right ${i===j ? 'font-bold text-blue-600 dark:text-blue-400' : ''}`}>{formatNum(val)}</span>)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">Vᵀ (Obrót wejściowy):</div>
                                    <div className="grid gap-1 bg-slate-50 dark:bg-slate-800 p-2 rounded">
                                        {svdInfo.V.map((row: number[], i: number) => (
                                            <div key={i} className="flex gap-4">
                                                {row.map((val, j) => <span key={j} className="w-12 text-right">{formatNum(val)}</span>)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-black/5 dark:border-white/10 space-y-4">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">4 Przestrzenie Fundamentalne</h3>
                        
                        <div className="space-y-3 text-sm">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
                                <span className="font-semibold text-blue-800 dark:text-blue-300">Przestrzeń Kolumnowa (Obraz)</span>
                                <p className="text-blue-600 dark:text-blue-400 mt-1">Wszystkie możliwe wyniki Ax. Wymiar (Rząd) = {rank}.</p>
                                {rank < (mode === '2D' ? 2 : 3) && <p className="text-red-500 font-medium mt-1">Przestrzeń została "spłaszczona"!</p>}
                            </div>
                            
                            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800/30">
                                <span className="font-semibold text-purple-800 dark:text-purple-300">Przestrzeń Zerowa (Jądro)</span>
                                <p className="text-purple-600 dark:text-purple-400 mt-1">Wektory x, dla których Ax = 0. Wymiar = {(mode === '2D' ? 2 : 3) - rank}.</p>
                            </div>

                            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800/30">
                                <span className="font-semibold text-amber-800 dark:text-amber-300">Przestrzeń Wierszowa</span>
                                <p className="text-amber-600 dark:text-amber-400 mt-1">Rozpięta przez wiersze A. Ortogonalna do jądra. Wymiar = {rank}.</p>
                            </div>

                            <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                                <span className="font-semibold text-emerald-800 dark:text-emerald-300">Lewa Przestrzeń Zerowa</span>
                                <p className="text-emerald-600 dark:text-emerald-400 mt-1">Wektory y, dla których Aᵀy = 0. Ortogonalna do obrazu. Wymiar = {(mode === '2D' ? 2 : 3) - rank}.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
