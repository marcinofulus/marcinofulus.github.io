var isMoving = true,
	brd1, animate;
main();



function CzastkaPoleElektrMagnModel(vx0, vy0, m, q, Bz, Ey, dt) { 
    var posx = 0,
    	posy = 0,
    	velx = vx0,
    	vely = vy0,
    	vel = vely; 
    
    function accel() {
    	var fact = q/m,
    		ax = fact*Bz*vely,
    		ay = fact*(Ey - Bz*velx);
    	
        return [ax, ay];
    };
    
    function eulerIntegration() {
    	posx  = posx + velx*dt;
        posy  = posy + vely*dt;
        
        velx = velx + accel()[0]*dt;
        vely = vely + accel()[1]*dt;
    };
    
    function move() {
    	eulerIntegration();   	
    	
    	vel = Math.sqrt(velx*velx + vely*vely);
    };
    
    return {
    	move: move,
    	getPosX: function() {return posx;},
    	getPosY: function() {return posy;},
    	getVelX: function() {return velx;},
    	getVelY: function() {return vely;},
    	getVel: function() {return vel;},
    };
} 


function CzastkaPoleElektrMagnView(board1, model) {

    var punkt = board1.create('point',[function() {return model.getPosX();}, function() {return model.getPosY();}], 
    		                          {name:'', withLabel:false, fixed:true, size:0.5, color:"red"}),
    	curvePos = board1.create('curve', [[0], [0]], {strokeColor:"blue", dash:1});

    var posList = [[], []];
    
    curvePos.updateDataArray = function(){
    	this.dataX = posList[0];
    	this.dataY = posList[1];
    };
	
	function runAnimation(interval) {
		animate = setInterval(function() {
			if(isMoving){
				updateModel();
				updatePosData();
    			updateView();
    			displayDynamicOutput();
    		}
		}, interval); 
	};
	
	function updateModel() {
		var step = 5;
		
	    for (var i = 1 ; i<=step ; i++) {
	    	model.move();
	    	checkStopConditions();
	    }	
	};
	
	function updatePosData() {
		posList[0].push(model.getPosX());
		posList[1].push(model.getPosY());
	};
    
	function updateView() {
		updateElements([punkt, curvePos]);
	};
	
	function displayDynamicOutput() {
		document.getElementById('v').value = model.getVel().toFixed(2);
		document.getElementById('vx').value = model.getVelX().toFixed(2);
		document.getElementById('vy').value = model.getVelY().toFixed(2);
	};
	
	function checkStopConditions() {
		var d = Math.sqrt(model.getPosX()*model.getPosX() + model.getPosY()*model.getPosY());
		
		if (d > 25) {
			isMoving = false;
		}
	};
	
	function updateElements(objects) {
		for (var i = 0 ; i < objects.length ; i++) {
			objects[i].prepareUpdate().update().updateRenderer(); 
		}
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


function main() {
	JXG.Options.axis.strokeColor = '#949494'; 
	JXG.Options.text.strokeColor = '#949494'; 
	JXG.Options.zoom.wheel = true;
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-10, 5, 10,-5], axis:true,grid:false, showCopyright:false}); 
	
	var init = {
		vx0: 1*document.getElementById('vx0').value,			
		vy0: 1*document.getElementById('vy0').value,
		m: 1*document.getElementById('m').value,
		q: 1*document.getElementById('q').value,
		B: 1*document.getElementById('B').value,
		E: 1*document.getElementById('E').value, 
		dt: 0.001
	};
	
	var czastkaPoleElektrMagnModel = new CzastkaPoleElektrMagnModel(init.vx0, 
																	init.vy0, 
														    	    init.m,
														    	    init.q,
														    	    init.B,
														    	    init.E,
														    	    init.dt),
		czastkaPoleElektrMagnView = new CzastkaPoleElektrMagnView(brd1, czastkaPoleElektrMagnModel);
	
	czastkaPoleElektrMagnView .runAnimation(15);
	
}




