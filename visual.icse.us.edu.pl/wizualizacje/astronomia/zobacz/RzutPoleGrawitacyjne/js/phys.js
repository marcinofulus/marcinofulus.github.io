var isMoving = false,
	brd1, animate;
main();


function BalistykaModel(h0, alpha0, v0, GM, R) { 
    var posx = 0,
    	posy = R + h0,
    	alphaRad0 = Math.PI*alpha0/180.0,
    	velx = v0*Math.cos(alphaRad0),
    	vely = v0*Math.sin(alphaRad0),
    	h = h0,
    	r = posy,
    	v = v0,
    	time = 0;
    	dt = 0.01; 
    
    function accel(x, v) {
    	var rt = Math.sqrt(x[0]*x[0] + x[1]*x[1]),
    		commonPart = -GM/(rt*rt*rt);
    	
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
    	if (r >= R) {
    		time = time + dt;
    		rk4Integration();  
    		
        	r = Math.sqrt(posx*posx + posy*posy);
        	h = r - R;
        	v = Math.sqrt(velx*velx + vely*vely);
    	} 
    };
    
    return {
    	move: move,
    	R: R,
    	time: function() {return time;},
    	r: function() {return r;},
    	h: function() {return h;},
    	v: function() {return v;},
    	getPosX: function() {return posx;},
    	getPosY: function() {return posy;},
    };
} 


function BalistykaView(board1, model) {

	var posxList = [],
		posyList = [];
	
    var punkt = board1.create('point',[function() {return model.getPosX();}, function() {return model.getPosY();}], 
    		                          {name:'', withLabel:false, fixed:true, size:2, color:"red"}),
    	curvePos = board1.create('curve', [[0], [0]], {strokeColor:"blue", dash:1}),
    	arrow = board1.create('arrow', [[0,0], punkt], {name:'r', withLabel:true, strokeColor:'black', strokeWidth:1});

    curvePos.updateDataArray = function(){
    	this.dataX = posxList;
    	this.dataY = posyList;
    };
  
    board1.createElement('circle',[[0,0], model.R], {strokeColor:'brown', fillColor:'brown', strokeWidth:2, fillOpacity:0.5, fixed:true});
	
	function runAnimation(interval) {
		animate = setInterval(function() {
			if(isMoving){
			    updateModel();
			    updatePosData();
			    updateJSXelements([punkt, curvePos, arrow]);
    			displayDynamicOutput();
    			if (model.r < model.R) {isMoving = false;}
    		}
		}, interval); 
	};
    
	function updateModel() {
		var step = 2000;
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
	    document.getElementById('h').value = Math.round(model.h());
		document.getElementById('r').value = Math.round(model.r());
		document.getElementById('v').value = model.v().toFixed(4);
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
		h0: 1*document.getElementById('h0').value, 
	    alpha0: 1*document.getElementById('alpha0').value,
	    v0: 1*document.getElementById('v0').value,
	    GM: 1*document.getElementById('GM').value,
	    R: 1*document.getElementById('R').value,
	};
}


function main() {
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-18000, 10000, 18000,-10000], axis:true,grid:false, showCopyright:false}); 
	
	var init = new InitialValues(),
		balistyka = new BalistykaModel(init.h0, 
									   init.alpha0, 
									   init.v0,
									   init.GM, 
									   init.R),
	    balistykaView = new BalistykaView(brd1, balistyka);
	
	balistykaView.runAnimation(10);
	
}




