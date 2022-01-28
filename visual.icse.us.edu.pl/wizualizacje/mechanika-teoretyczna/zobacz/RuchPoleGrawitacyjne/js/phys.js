var isMoving = false,
	brd1, brd2, animate;
main();


function CialoGrawitacjaModel(G, M, r0, v0, epsilon, dt) { 
    var posx = 0,
    	posy = r0,
    	velx = v0,
    	vely = 0,
    	r = posy,
    	v = v0,
    	GM = G*M;
    	time = 0;
    
    function accel(x, v) {
    	var rt = x[0]*x[0] + x[1]*x[1],
    		commonPart = -GM/(Math.pow(rt, (3.0 + epsilon)*0.5));
    	
    	var ax = commonPart*x[0],
    		ay = commonPart*x[1];
	
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
    		
        r = Math.sqrt(posx*posx + posy*posy);
        v = Math.sqrt(velx*velx + vely*vely);
    };
    
    return {
    	move: move,
    	getTime: function() {return time;},
    	getR: function() {return r;},
    	getV: function() {return v;},
    	getPosX: function() {return posx;},
    	getPosY: function() {return posy;},
    	getVelX: function() {return velx;},
    	getVelY: function() {return vely;},
    };
} 


function View(board1, board2, model) {
    var punkt = board1.create('point',[function() {return model.getPosX();}, function() {return model.getPosY();}], {name:'', withLabel:false, fixed:true, size:2, color:'red'}),
    	curvePos = board1.create('curve', [[0], [0]], {strokeColor:'blue', dash:1}),
    	curveR = board2.create('curve', [[model.getPosX()], [model.getPosY()]], {strokeColor:'blue'});
    
    var arrowScale = 5,
    	tempPunkt = board1.create('point',[function() {return model.getPosX() + arrowScale*model.getVelX();}, 
                                           function() {return model.getPosY() + arrowScale*model.getVelY();}], 
                                           {name:'', withLabel:false, fixed:true, visible:false}),
	    velocityArrow = board1.create('arrow', [punkt,tempPunkt], {name:'', withLabel:false, strokeColor:'black', strokeWidth:1});
    
	var posxList = [],
		posyList = [],
		timeList = [],
		rList = [];
    
    curvePos.updateDataArray = function(){
    	this.dataX = posxList;
    	this.dataY = posyList;
    };
    
    curveR.updateDataArray = function(){
    	this.dataX = timeList;
    	this.dataY = rList;
    };
    
	function runAnimation(interval) {
		animate = setInterval(function() {
			if(isMoving){
			    updateModel();
			    updatePosData();
			    updateJSXelements([punkt, curvePos, curveR, tempPunkt, velocityArrow]);
    			displayDynamicOutput();
    		}
		}, interval); 
	};
    
	function updateModel() {
		var step = 100;
	    for (var i = 1 ; i<=step ; i++) {
	    	model.move();
	    }	
	};
	
	function updatePosData() {
		posxList.push(model.getPosX());
		posyList.push(model.getPosY());
		timeList.push(model.getTime());
		rList.push(model.getR());
	};

	function updateJSXelements(objects) {
		for (var i = 0 ; i < objects.length ; i++) {
			objects[i].prepareUpdate().update().updateRenderer(); 
		}
	};
	
	function displayDynamicOutput() {
		document.getElementById('t').value = Math.round(model.getTime());
		document.getElementById('v').value = model.getV().toFixed(2);
		document.getElementById('r').value = model.getR().toFixed(2);
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
    JXG.JSXGraph.freeBoard(brd2);
    clearInterval(animate); 
	main();
}


function InitialValues() {
	return { 
	    G: 1*document.getElementById('G').value,
	    M: 1*document.getElementById('M').value,
	    r0: 1*document.getElementById('r0').value,
	    v0: 1*document.getElementById('v0').value,
	    epsilon: 1*document.getElementById('epsilon').value,
	    dt: 1*document.getElementById('dt').value,
	};
}


function main() {
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-22.5, 10, 22.5,-10], axis:true, grid:false, showCopyright:false}); 
	brd2 = JXG.JSXGraph.initBoard('box2',{boundingbox:[-1, 10, 200,-2], axis:true, grid:false, showCopyright:false});
	
	var init = new InitialValues(),
		cialoGrawitacja = new CialoGrawitacjaModel(init.G, 
									   			   init.M, 
									   			   init.r0,
									   			   init.v0,
									   			   init.epsilon,
									   			   init.dt),								   			   
	    view1 = new View(brd1, brd2, cialoGrawitacja);
	
	view1.runAnimation(15);

}




