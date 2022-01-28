var isMoving = false,
	brd1, animate;
main();


function UkladTrzechCialModel(alpha0, phi0, h0, v0, GM1, R1, GM2, R2, d) { 
    var beta = alpha0 + 90 - phi0,
    	betaRad = Math.PI*beta/180.0,
    	phiRad0 = Math.PI*phi0/180.0,
    	posx = (R1 + h0)*Math.cos(phiRad0),
    	posy = (R1 + h0)*Math.sin(phiRad0),
    	velx = -v0*Math.cos(betaRad),
    	vely = v0*Math.sin(betaRad),
    	r1 = Math.sqrt(posx*posx + posy*posy),
    	r2 = Math.sqrt((posx - d)*(posx - d) + posy*posy),
    	h1 = h0,
    	h2 = r2 - R2,
    	v = v0,
    	time = 0,
    	dt = 0.05; 
    
    function accel(x, v) {
    	var r1t = Math.sqrt(x[0]*x[0] + x[1]*x[1]),
    		r2t = Math.sqrt((x[0] - d)*(x[0] - d) + x[1]*x[1]),
    		commonPart1 = -GM1/(r1t*r1t*r1t),
    		commonPart2 = -GM2/(r2t*r2t*r2t);
    	
    	var ax = commonPart1*x[0] + commonPart2*(x[0] - d),
    		ay = commonPart1*x[1] + commonPart2*x[1];
	
    	return [ax, ay]; 
    };
    
    function rk4Integration() {
    	var x1 = [], x2 = [], x3 = [], x4 = [], 
    		v1 = [], v2 = [], v3 = [], v4 = [], 
    		a1 = [], a2 = [], a3 = [], a4 = [];
	
    	x1[0] = posx;
    	v1[0] = velx;
    	x1[1] = posy;
    	v1[1] = vely;
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
    	
    	posx = x1[0] +  (dt/6.0) * (v1[0] + 2*v2[0] + 2*v3[0] + v4[0]);
    	velx = v1[0] + (dt/6.0) * (a1[0] + 2*a2[0] + 2*a3[0] + a4[0]);
    	
    	posy = x1[1] +  (dt/6.0) * (v1[1] + 2*v2[1] + 2*v3[1] + v4[1]);
    	vely = v1[1] + (dt/6.0) * (a1[1] + 2*a2[1] + 2*a3[1] + a4[1]);
    };

    function move() {
    	time = time + dt;
    	rk4Integration();  
    		
        r1 = Math.sqrt(posx*posx + posy*posy);
        r2 = Math.sqrt((posx - d)*(posx - d) + posy*posy);
        h1 = r1 - R1;
        h2 = r2 - R2;
        v = Math.sqrt(velx*velx + vely*vely); 
    };
    
    return {
    	time: function() {return time;},
    	move: move,
    	d: d,
    	R1: R1,
    	R2: R2,
    	getVelX: function() {return velx;},
    	getVelY: function() {return vely;},
    	r1: function() {return r1;},
    	r2: function() {return r2;},
    	h1: function() {return h1;},
    	h2: function() {return h2;},
    	v: function() {return v;},
    	getPosX: function() {return posx;},
    	getPosY: function() {return posy;},
    };
} 


function View(board1, model) {
	
    var punkt = board1.create('point',[function() {return model.getPosX();}, function() {return model.getPosY();}], {name:'', withLabel:false, fixed:true, size:2, color:'red'}),
    	curvePos = board1.create('curve', [[0], [0]], {strokeColor:'blue', dash:1});
    
    var arrowScale = 4000,
    	tempPunkt = board1.create('point',[function() {return model.getPosX() + arrowScale*model.getVelX();}, 
                                           function() {return model.getPosY() + arrowScale*model.getVelY();}], 
                                           {name:'', withLabel:false, fixed:true, visible:false}),
	    velocityArrow = board1.create('arrow', [punkt,tempPunkt], {name:'', withLabel:false, strokeColor:'black', strokeWidth:1});
    
	var posxList = [],
		posyList = [];
    
    curvePos.updateDataArray = function(){
    	this.dataX = posxList;
    	this.dataY = posyList;
    };
    
    board1.createElement('circle',[[0, 0], model.R1], {strokeColor:'blue', fillColor:'blue', strokeWidth:2, fillOpacity:0.5, fixed:true});
    board1.createElement('circle',[[model.d, 0], model.R2], {strokeColor:'grey', fillColor:'grey', strokeWidth:2, fillOpacity:0.5, fixed:true});
    
	function runAnimation(interval) {
		animate = setInterval(function() {
			if(isMoving){
			    updateModel();
			    updatePosData();
			    updateJSXelements([punkt, curvePos, tempPunkt, velocityArrow]);
    			displayDynamicOutput();
    			if ( (model.r1() < model.R1) || (model.r2() < model.R2) ) {
    				isMoving = false;
    			}
    		}
		}, interval); 
	};
    
	function updateModel() {
		var step = 10000;
	    for (var i = 1 ; i<=step ; i++) {
	    	model.move();
	    }	
	};
	
	function updatePosData() {
		posxList.push(model.getPosX());
		posyList.push(model.getPosY());
	};

	function updateJSXelements(objects) {
		for (var i = 0 ; i < objects.length ; i++) {
			objects[i].prepareUpdate().update().updateRenderer(); 
		}
	};
	
	function displayDynamicOutput() {
		document.getElementById('t').value = Math.round(model.time());
		document.getElementById('tdni').value = (model.time()/60.0/60.0/24.0).toFixed(2);
		document.getElementById('v').value = model.v().toFixed(4);
	    document.getElementById('h1').value = Math.round(model.h1());
	    document.getElementById('h2').value = Math.round(model.h2());
		document.getElementById('r1').value = Math.round(model.r1());
		document.getElementById('r2').value = Math.round(model.r2());
	};
	
    return{
    	runAnimation: runAnimation,   	
    };
}


function startStopAnimation(){
	if(isMoving){
		isMoving = false;
	} else {
		isMoving = true;	
	}
}


function resetAnimation(){ 
    JXG.JSXGraph.freeBoard(brd1);
    clearInterval(animate); 
	main();
}


function InitialValues() {
	return { 
	    alpha0: 1*document.getElementById('alpha0').value,
	    phi0: 1*document.getElementById('phi0').value,
	    h0: 1*document.getElementById('h0').value,
	    v0: 1*document.getElementById('v0').value,
	    GM1: 1*document.getElementById('GM1').value,
	    R1: 1*document.getElementById('R1').value,
	    GM2: 1*document.getElementById('GM2').value,
	    R2: 1*document.getElementById('R2').value,
	    d: 1*document.getElementById('d').value,
	};
}


function main() {
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-20000, 116666, 400000, -116666], axis:true,grid:false, showCopyright:false}); 
	
	var init = new InitialValues(),
		ukladTrzechCial = new UkladTrzechCialModel(init.alpha0, 
									   			   init.phi0, 
									   			   init.h0,
									   			   init.v0,
									   			   init.GM1,
									   			   init.R1, 
									   			   init.GM2,
									   			   init.R2,	
									   			   init.d),
	    view = new View(brd1, ukladTrzechCial);
	
	view.runAnimation(15);
	
}




