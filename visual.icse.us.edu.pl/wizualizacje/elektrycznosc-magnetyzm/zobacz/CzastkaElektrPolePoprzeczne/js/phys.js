var isMoving = true,
	brd1, animate;
main();



function CzastkaPoleElektryczneModel(v0, m, q, L, E, dt) { 
    var posx = -9.5,
    	posy = 0,
    	velx = v0,
    	vely = 0,
    	vel = velx; 
    
    function accel() {
        if ((posx >= -L/2) &&  (posx <= L/2)) {
        	return q*E/m;
        } else {
        	return 0;
        }
    };
    
    function eulerIntegration() {
    	posx  = posx + velx*dt;
        posy  = posy + vely*dt;

        vely = vely + accel()*dt;
    };
    
    function move() {
    	eulerIntegration();   	
    	
    	vel = Math.sqrt(velx*velx + vely*vely);
    	angleDeg = 180*Math.atan2(vely, velx)/Math.PI;
    };
    
    return {
    	L: L,
    	move: move,
    	getPosX: function() {return posx;},
    	getPosY: function() {return posy;},
    	getVelX: function() {return velx;},
    	getVelY: function() {return vely;},
    	getVel: function() {return vel;},
    	getAngleDeg: function() {return angleDeg;},
    };
} 


function CzastkaPoleElektryczneView(board1, model) {

    var punkt = board1.create('point',[function() {return model.getPosX();}, function() {return model.getPosY();}], 
    		                          {name:'', withLabel:false, fixed:true, size:0.5, color:"red"}),
    	curvePos = board1.create('curve', [[0], [0]], {strokeColor:"blue", dash:1});

    var posList = [[], []];
    
    curvePos.updateDataArray = function(){
    	this.dataX = posList[0];
    	this.dataY = posList[1];
    };
    
    var okladkaUpP1 = board1.create('point', [-model.L/2, 1], {visible:false}),
    	okladkaUpP2 = board1.create('point', [model.L/2, 1], {visible:false});
    board1.create('segment', [okladkaUpP1, okladkaUpP2], {strokeColor:"black"});
    
    var okladkaDownP1 = board1.create('point', [-model.L/2, -1], {visible:false}),
		okladkaDownP2 = board1.create('point', [model.L/2, -1], {visible:false});
	board1.create('segment', [okladkaDownP1, okladkaDownP2], {strokeColor:"black"});

	
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
		var step = 10;
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
		document.getElementById('vy').value = model.getVelY().toFixed(2);
		document.getElementById('theta').value = model.getAngleDeg().toFixed(2);
	};
	
	function checkStopConditions() {
		if (model.getPosX() > 7.5) {
			isMoving = false;
		}
		
		if ((model.getPosX() >= -model.L/2) && (model.getPosX() <= model.L/2)) {
			if ((model.getPosY() >= 1) || (model.getPosY() <= -1)) {
				isMoving = false;
			}
		} 
	}
	
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
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-10, 5, 10,-5], axis:true,grid:false, showCopyright:false}); 
	
	var init = {
		v0: 1*document.getElementById('v0').value,
		m: 1*document.getElementById('m').value,
		q: 1*document.getElementById('q').value,
		L: 1*document.getElementById('L').value,
		E: 1*document.getElementById('E').value, 
		dt: 0.001
	};
	
	var czastkaPoleElektrModel = new CzastkaPoleElektryczneModel(init.v0, 
														    init.m,
														    init.q,
														    init.L,
														    init.E,
														    init.dt),
		czastkaPoleElektrView = new CzastkaPoleElektryczneView(brd1, czastkaPoleElektrModel);
	
	czastkaPoleElektrView.runAnimation(15);
	
}




