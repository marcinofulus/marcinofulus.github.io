var isMoving = false,
	brd1, brd2, brd3, animate;

start();

/* Model fizyczny koralika poruszającego się po pierścieniu. Pierścień się obraca. */
function KoralikModel(R, m, g, omega, theta0, thetaDot0, gamma) {
    var theta = theta0,
    	thetaDot = thetaDot0,
    	dt = 0.001,
    	bigOmega2 = g/R,
    	bigOmega = Math.sqrt(bigOmega2),
    	omega2 = omega*omega;
    
        
    // energia potencjalna
    function Ep(x) {
    	return m*R * (g*Math.cos(x) - R*omega2 * Math.sin(x)*Math.sin(x) * 0.5);
    };
        
    // energia kinetyczna
    function Ek(v) {
        return m * R*R * v*v * 0.5;
    };
    
    // energia całkowita
    function Ec() {
    	return Ep(theta) + Ek(thetaDot);
    };
    
    // przyśpieszenie
    function accel(x, v) {
        return Math.sin(x) * (omega2 * Math.cos(x) + bigOmega2) - gamma / m * v;
    };
      
    // całkowanie równań ruchu metodą RK4.
    function rk4Integration() {
    	var x, 
    		v = [], 
    		a = [];
    	
    	x = theta;
    	v[1] = thetaDot;
    	a[1] = accel(x, v[1]);

    	x = theta + 0.5 * v[1] * dt;
		v[2] = thetaDot + 0.5 * a[1] * dt;
		a[2] = accel(x, v[2]);
    	
    	x = theta + 0.5 * v[2] * dt;
		v[3] = thetaDot + 0.5 * a[2] * dt;
		a[3] = accel(x, v[3]);
    	
    	x = theta + v[3] * dt;
    	v[4] = thetaDot + a[3] * dt;
    	a[4] = accel(x, v[4]);
    	
    	theta = theta + (dt/6.0) * (v[1] + 2*v[2] + 2*v[3] + v[4]);
    	thetaDot = thetaDot + (dt/6.0)*(a[1] + 2*a[2] + 2*a[3] + a[4]);
    } 
    
    return {
    	R: R, 
    	bigOmega2: bigOmega2,
    	bigOmega: bigOmega,
    	Ep: Ep,
    	Ek: Ek,
    	Ec: Ec,
    	rk4Integration: rk4Integration,
    	getTheta: function(){return theta;},
    	getThetaDot: function(){return thetaDot;}
    };
}   

/* Zatrzymuje i wznawia animację. */
function startStopAnimation() {
	if(isMoving){
		isMoving = false;
	} else {
		isMoving = true;	
	}
}

/* Resetuje animację. */
function resetAnimation() { 
    JXG.JSXGraph.freeBoard(brd1);
    JXG.JSXGraph.freeBoard(brd2);
    JXG.JSXGraph.freeBoard(brd3);
    clearInterval(animate); 
	start();
}


/* Wartości początkowe. */
function InitialValues() {
	return {
		R: 1*document.getElementById('R').value,          
	    m: 1*document.getElementById('m').value,
	    g: 1*document.getElementById('g').value, 
	    omega: 1*document.getElementById('omega').value,  
	    theta0: 1*document.getElementById('theta0').value,
	    thetaDot0: 1*document.getElementById('thetaDot0').value, 
	    gamma: 1*document.getElementById('gamma').value,
	};
};

function start() {
	JXG.JSXGraph.licenseText = "";	
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-1,1,1,-1], axis:true,grid:true}); 
	brd2 = JXG.JSXGraph.initBoard('box2',{axis:true,grid:true}); 
	brd3 = JXG.JSXGraph.initBoard('box3',{boundingbox:[0,6,6,-6], axis:true,grid:true}); 
	
	init = new InitialValues();
	
	koralik = new KoralikModel(
				init.R, 
				init.m, 
				init.g, 
				init.omega, 
				init.theta0, 
				init.thetaDot0, 
				init.gamma);
	
	// elementy dla brd1: pierścień i koralik
    brd1.createElement('circle',[[0,0],koralik.R], {strokeColor:'blue', strokeWidth:1, fixed:true});
    var koralikBrd1 = brd1.create('point',[function() {return koralik.R*Math.sin(koralik.getTheta());},
                         function() {return koralik.R*Math.cos(koralik.getTheta());}], {name:'', withLabel:false, fixed:true});  
    
    // elementy dla brd2: wykres potencjału, energia całkowita początkowa i aktualna, koralik
    var graph = brd2.create('functiongraph', [function(x) { return koralik.Ep(x);}, -5, 10], {fixed:true});
    var totalEnergy = brd2.create('functiongraph', [function(x) {return koralik.Ec();}, -10, 10], {strokeColor:'red', strokeWidth:1, dash:1});
    var koralikBrd2 = brd2.create('glider',[function() {return koralik.getTheta();},0,graph], {name:'', withLabel:false, color: 'gray', size: 2, fixed:true});
	var koralikBrd2Xaxis = brd2.create('point',[function() {return koralik.getTheta();}, 0], {name:'', withLabel:false, color: 'red', fixed:true});
	var pointLine = brd2.create('line', [koralikBrd2, koralikBrd2Xaxis], {straightFirst: false, straightLast: false, strokeWidth: 1, dash:2, color:'gray'});
	
    // elementy dla brd3: przestrzeń fazowa
	var posList = [],
		velList = [];
	var phaseSpaceGraph = brd3.create('curve', [posList, velList]);
	var koralikBrd3 = brd3.create('point',[function() {return koralik.getTheta();}, 
	                     function() {return koralik.getThetaDot();}], {name:'', withLabel:false, fixed:true});

	displayStaticOutput(koralik);
	
	function updateElements(objects) {
		for (var i = 0 ; i < objects.length ; i++) {
			objects[i].prepareUpdate().update().updateRenderer(); 
		}
	};
	
    animate = setInterval(function() {
    	if(isMoving){
			for (var i = 1 ; i <= 16 ; i++) {
				koralik.rk4Integration();
			}

        	posList.push(koralik.getTheta());
        	velList.push(koralik.getThetaDot());
        	
        	displayDynamicOutput(koralik);
        	
        	updateElements([koralikBrd1, koralikBrd2, koralikBrd3, phaseSpaceGraph, totalEnergy, pointLine, koralikBrd2Xaxis]);
    	}
    }, 33); 
}


function displayStaticOutput(obj) {
	document.getElementById('BigOmega2').value = obj.bigOmega2.toFixed(4); 
	document.getElementById('BigOmega').value = obj.bigOmega.toFixed(4); 
}

function displayDynamicOutput(obj) {
	document.getElementById('theta').value = obj.getTheta().toFixed(4);
	document.getElementById('thetaDot').value = obj.getThetaDot().toFixed(4); 
}	




