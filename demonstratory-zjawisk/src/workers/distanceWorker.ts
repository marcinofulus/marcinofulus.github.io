self.onmessage = (e) => {
    const { dim, nPointsPower, shape } = e.data;
    const nPoints = Math.pow(10, nPointsPower);
    
    const pts = [];
    
    const randomNormal = () => {
        let u = 0, v = 0;
        while(u === 0) u = Math.random();
        while(v === 0) v = Math.random();
        return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    for (let i = 0; i < nPoints; i++) {
        const p = new Float32Array(dim);
        if (shape === 'cube') {
            for (let j = 0; j < dim; j++) p[j] = Math.random() * 2 - 1;
        } else if (shape === 'sphere') {
            let sqSum = 0;
            for (let j = 0; j < dim; j++) {
                const val = randomNormal();
                p[j] = val;
                sqSum += val * val;
            }
            const norm = Math.sqrt(sqSum);
            const scale = Math.pow(Math.random(), 1 / dim) / norm;
            for (let j = 0; j < dim; j++) {
                p[j] *= scale;
            }
        } else if (shape === 'gaussian') {
            for (let j = 0; j < dim; j++) {
                p[j] = randomNormal();
            }
        }
        pts.push(p);
    }
    
    const dists = [];
    let sum = 0;
    
    const MAX_PAIRS = 50000;
    const totalPossiblePairs = (nPoints * (nPoints - 1)) / 2;
    const pairsToCompute = Math.min(totalPossiblePairs, MAX_PAIRS);

    if (totalPossiblePairs <= MAX_PAIRS) {
        for (let i = 0; i < nPoints; i++) {
            for (let j = i + 1; j < nPoints; j++) {
                let sq = 0;
                for (let d = 0; d < dim; d++) {
                    const diff = pts[i][d] - pts[j][d];
                    sq += diff * diff;
                }
                const dVal = Math.sqrt(sq);
                dists.push(dVal);
                sum += dVal;
            }
        }
    } else {
        for (let k = 0; k < MAX_PAIRS; k++) {
            const i = Math.floor(Math.random() * nPoints);
            let j = Math.floor(Math.random() * nPoints);
            while (i === j) j = Math.floor(Math.random() * nPoints);
            
            let sq = 0;
            for (let d = 0; d < dim; d++) {
                const diff = pts[i][d] - pts[j][d];
                sq += diff * diff;
            }
            const dVal = Math.sqrt(sq);
            dists.push(dVal);
            sum += dVal;
        }
    }
    
    const mean = dists.length > 0 ? sum / dists.length : 0;
    
    // Dla hiperkostki max dystans to 2*sqrt(D), dla D=1000 to ~63.2. Ustawiamy 65.
    // Dla hiperkuli max dystans (średnica) to zawsze 2.0.
    // Dla Gaussa średnia odległość to ~sqrt(2D), max to ok. sqrt(2D) + 4.
    let globalMaxPossible = 2.0;
    if (shape === 'cube') {
        globalMaxPossible = 65.0; 
    } else if (shape === 'gaussian') {
        globalMaxPossible = Math.sqrt(2 * dim) + 5.0;
    }
    
    const absBins = Array(40).fill(0);
    dists.forEach(d => {
        const idx = Math.min(39, Math.floor((d / globalMaxPossible) * 40));
        absBins[idx]++;
    });
    const maxAbsBin = Math.max(...absBins, 1);
    
    const relBins = Array(40).fill(0);
    dists.forEach(d => {
        const rel = mean > 0 ? d / mean : 0;
        const clamped = Math.max(0, Math.min(1.999, rel));
        const idx = Math.floor((clamped / 2.0) * 40);
        relBins[idx]++;
    });
    const maxRelBin = Math.max(...relBins, 1);
    
    const projectedPts = pts.slice(0, 1500).map(p => [p[0], p[1]]);

    self.postMessage({ 
        projectedPts, mean, globalMaxPossible, 
        absBins, maxAbsBin, relBins, maxRelBin, 
        numPairs: dists.length, totalPossiblePairs 
    });
};
