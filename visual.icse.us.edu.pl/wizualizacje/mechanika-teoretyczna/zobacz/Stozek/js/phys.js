/*------------------------------------------------------*/
/* Ruch punktu po powierzchni stożka                    */
/*------------------------------------------------------*/

var isMoving = false,
	brd1, brd2, animate;
start();

/* Model fizyczny punktu poruszajacego sie po powierzchni stozka. */
function PunktNaStozkuModel(g, m, theta, r0, fi0, rdot0, fidot0) {
    var r = r0,
    	fi = fi0,
    	rdot = rdot0,
    	fidot = fidot0,
    	posx = r*Math.cos(fi),
    	posy = r*Math.sin(fi),
    	posz = r/Math.tan(theta),
    	dt = 0.01;
    
    var SinTheta2 = Math.sin(theta)*Math.sin(theta),
    	SinCosTheta = Math.sin(theta)*Math.cos(theta);
    	    
    // przyśpieszenie
    function accel(x, v) {
    	var a = [];
    	//a[0] = x[0]*v[1]*v[1]*Math.sin(theta)*Math.sin(theta) - g*Math.sin(theta)*Math.cos(theta);
    	a[0] = x[0]*v[1]*v[1]*SinTheta2 - g*SinCosTheta;
    	a[1] = -2*v[0]*v[1]/x[0];
    	
        return [a[0], a[1]];
    };
      
    // całkowanie równań ruchu metodą RK4.
    function rk4Integration() {
    	var x1 = [], x2 = [], x3 = [], x4 = [], 
    		v1 = [], v2 = [], v3 = [], v4 = [], 
    		a1 = [], a2 = [], a3 = [], a4 = [];
	
    	x1[0] = r;
    	v1[0] = rdot;
    	x1[1] = fi;
    	v1[1] = fidot;
    	a1 = accel(x1, v1);

    	x2[0] = x1[0] + 0.5 * v1[0] * dt;
		v2[0] = v1[0] + 0.5 * a1[0] * dt;
		x2[1] = x1[1] + 0.5 * v1[1] * dt;
		v2[1] = v1[1] + 0.5 * a1[1] * dt;
		a2 = accel(x2, v2);
    	
    	x3[0] = x1[0] + 0.5 * v2[0] * dt;
		v3[0] = v1[0] + 0.5 * a2[0] * dt;
		x3[1] = x1[1] + 0.5 * v2[1] * dt;
		v3[1] = v1[1] + 0.5 * a2[1] * dt;
		a3 = accel(x3, v3);
    	
    	x4[0] = x1[0] + v3[0] * dt;
    	v4[0] = v1[0] + a3[0] * dt;
    	x4[1] = x1[1] + v3[1] * dt;
    	v4[1] = v1[1] + a3[1] * dt;
    	a4 = accel(x4, v4);
    	
    	r = x1[0] +  (dt/6.0) * (v1[0] + 2*v2[0] + 2*v3[0] + v4[0]);
    	rdot = v1[0] + (dt/6.0) * (a1[0] + 2*a2[0] + 2*a3[0] + a4[0]);
    	
    	fi = x1[1] +  (dt/6.0) * (v1[1] + 2*v2[1] + 2*v3[1] + v4[1]);
    	fidot = v1[1] + (dt/6.0) * (a1[1] + 2*a2[1] + 2*a3[1] + a4[1]);
    }; 
    
    function polarToCartesian() {
    	posx = r*Math.cos(fi);
    	posy = r*Math.sin(fi);
    	posz = r/Math.tan(theta);
    };
    
    function move() {
    	rk4Integration();
    	polarToCartesian();
    	
    	if ((r < 0) || (posz < 0)) {
    		fi =0;
    		r = 0;
    		rdot = 0;
    		fidpt = 0;
    	}
    };
    
    return {
    	move: move,
    	theta: theta,
    	getR: function() {return r;},
    	getRDot: function() {return rdot;},
    	getFi: function() {return fi;},
    	getFiDot: function() {return fidot;},
    	getPosX: function() {return posx;},
    	getPosY: function() {return posy;},
    	getPosZ: function() {return posz;}
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
    clearInterval(animate); 
	start();
}

/* Wartości początkowe. */
function InitialValues() {
	return {
	    g: 1*document.getElementById('g').value,  
	    theta: 1*document.getElementById('theta').value,
	    r0: 1*document.getElementById('r0').value,
	    fi0: 1*document.getElementById('fi0').value,
	    rdot0: 1*document.getElementById('rdot0').value,
	    fidot0: 1*document.getElementById('fidot0').value,
	};
};

function start() {
	// boards
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-3, 3, 3,-3], axis:false, grid:false, showCopyright:false, keepaspectratio:true}); 
	brd2 = JXG.JSXGraph.initBoard('box2',{boundingbox:[-3, 6, 3,-1], axis:false, grid:false, showCopyright:false, keepaspectratio:true}); 
	
	// axis & ticks - board1
	var ax1 = brd1.createElement('line', [[0,0],[1,0]], {color:'black', strokeWidth:0.5});
	var ax2 = brd1.createElement('line', [[0,0],[0,1]], {color:'black', strokeWidth:0.5});
	brd1.createElement('ticks',[ax1, 1], {minorTicks:1, majorHeight:5, minorHeight:3, drawLabels:true});
	brd1.createElement('ticks',[ax2, 1], {minorTicks:1, majorHeight:5, minorHeight:3, drawLabels:true});
	
	// axis & ticks - board2
	var ax1 = brd2.createElement('line', [[0,0],[1,0]], {color:'black', strokeWidth:0.5});
	var ax2 = brd2.createElement('line', [[0,0],[0,1]], {color:'black', strokeWidth:0.5});
	brd2.createElement('ticks',[ax1, 1], {minorTicks:1, majorHeight:5, minorHeight:3, drawLabels:true});
	brd2.createElement('ticks',[ax2, 1], {minorTicks:1, majorHeight:5, minorHeight:3, drawLabels:true});
	
	// wartości początkowe & model punktu poruszającego się po stożku
	init = new InitialValues();
	punkt = new PunktNaStozkuModel(
				init.g, 
				1, 
				init.theta, 
				init.r0, 
				init.fi0, 
				init.rdot0,
				init.fidot0);
		
	// kontury stożka - rzut z góry & rzut z boku
	var tg = Math.tan(Math.PI/2 - init.theta);
	for(var i = 1 ; i <= 15 ; i++){
		brd1.createElement('circle',[[0,0], 0.5*i], {strokeColor:'blue', strokeWidth:0.5, dash:1, fixed:true});
		brd2.createElement('segment',[[-0.5*i, 0.5*i*tg], [0.5*i, 0.5*i*tg]],{strokeColor:'blue', strokeWidth:0.5, dash:1, fixed:true});
	}
	
	// zarys stożka - rzut z boku
	brd2.create('functiongraph', [function(x) {return tg*x;}, 0, 100]);
	brd2.create('functiongraph', [function(x) {return -tg*x;}, -100, 0]);
	
	// punkt poruszający się po stożku - rzut z góry
	var p1 = brd1.create('point', [
	                      function() {return punkt.getPosX();},
	                      function() {return punkt.getPosY();}
	                      ], {size:0.7, name:'', withLabel:false, fixed:true});
	
	// punkt poruszający się po stożku - rzut z boku
	var p2 = brd2.create('point', [
	                      function() {return punkt.getPosX();},
	                      function() {return punkt.getPosZ();}
	                      ], {size:0.7, name:'', withLabel:false, fixed:true});

    // tor punktu - rzut z góry
	var posxList = [],
		posyList1 = [], posyList2 = [];
	var path1 = brd1.create('curve', [posxList, posyList1], {strokeColor:'red'});
	var path2 = brd2.create('curve', [posxList, posyList2], {strokeColor:'red'});
 	
	// animacja ruchu
    animate = setInterval(function() {
    	if (isMoving) {
    		punkt.move();
    		
        	posxList.push(punkt.getPosX());
        	posyList1.push(punkt.getPosY());
    		posyList2.push(punkt.getPosZ());

    		updateElements([p1, p2, path1, path2]);
    	}
    }, 25); 
 
}

function updateElements(objects) {
	for (var i = 0 ; i < objects.length ; i++) {
		objects[i].prepareUpdate().update().updateRenderer(); 
	}
}



