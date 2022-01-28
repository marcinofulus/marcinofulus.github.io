var isMoving = true,
	brd1, animate;
main();


function BalistykaModel(alpha, vel0, r, rhoz, g, rhop, kappa, dt) { 
    var posx = 0,
    	posy = 0,
    	alphaRad0 = Math.PI*alpha/180.0,
    	alphaRad = alphaRad0,
    	velx = vel0*Math.cos(alphaRad),
    	vely = vel0*Math.sin(alphaRad),
    	m = rhoz*4.0/3.0*Math.PI*r*r*r,
    	C = 3.0*kappa*rhop/(8.0*rhoz*r); 
    
    var posxList = [posx], 
		posyList = [posy];
    
    function eulerIntegration() {
    	var vel = Math.sqrt(velx*velx + vely*vely);
    	
    	posx  = posx + velx*dt;
        posy  = posy + vely*dt;
        
        velx = velx - C*vel*velx*dt;
        vely = vely - (C*vel*vely + g)*dt;
    };
    
    function move() {
    	if (posy >= 0) {
    		eulerIntegration();   	
        	posxList.push(posx);
        	posyList.push(posy);
    	} 
    };
    
    return {
    	C: C,
    	g: g,
    	m: m,
    	alphaRad0: alphaRad0,
    	vel0: vel0,
    	move: move,
    	getPosX: function() {return posx;},
    	getPosY: function() {return posy;},
    	getPosXList: function() {return posxList;},
    	getPosYList: function() {return posyList;}, 
    };
} 


function BalistykaView(board1, model, colorName) {

    var punkt = board1.create('point',[function() {return model.getPosX();}, function() {return model.getPosY();}], 
    		                          {name:'', withLabel:false, fixed:true, size:4, color:colorName}),
    	curvePos = board1.create('curve', [[0], [0]], {strokeColor:colorName});

    curvePos.updateDataArray = function(){
    	this.dataX = model.getPosXList();
    	this.dataY = model.getPosYList();
    };
    
    board1.create('functiongraph', [function(x) {return x*Math.tan(model.alphaRad0) - 0.5*model.g / (model.vel0*model.vel0 * Math.cos(model.alphaRad0)*Math.cos(model.alphaRad0)) * x*x;}, 0, 50000], {dash:1});
    
	function updateElements(objects) {
		for (var i = 0 ; i < objects.length ; i++) {
			objects[i].prepareUpdate().update().updateRenderer(); 
		}
	};
	
	function updateView() {
		updateElements([punkt, curvePos]);
	};
	
	function displayStaticOutput() {
		document.getElementById('m').value = model.m.toFixed(2); 
		document.getElementById('C').value = model.C.toFixed(4); 
	};
	
	function runAnimation(interval) {
		displayStaticOutput();
		
		animate = setInterval(function() {
			if(isMoving){
    			model.move();
    			updateView();
    			if (model.getPosY() <= 0) {isMoving = false;}
    		}
		}, interval); 
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
		alpha: 1*document.getElementById('alpha').value, 
	    v0: 1*document.getElementById('v0').value,
	    r: 1*document.getElementById('r').value,
	    rhoz: 1*document.getElementById('rhoz').value,
	    g: 1*document.getElementById('g').value,
	    rhop: 1*document.getElementById('rhop').value,
	    kappa: 1*document.getElementById('kappa').value,
	    dt: 1*document.getElementById('dt').value,
	};
}


function main() {
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-200, 2000, 8000,-200], axis:true,grid:false, showCopyright:false}); 
	
	var init = new InitialValues(),
		balistyka = new BalistykaModel(init.alpha, 
									   init.v0, 
									   init.r,
									   init.rhoz, 
									   init.g,
									   init.rhop,
									   init.kappa,
									   init.dt),
	    balistykaView = new BalistykaView(brd1, balistyka, "red");
	
	balistykaView.runAnimation(15);
	
}




