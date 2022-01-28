var isMoving = true,
	brd, animate;
	
main();


function MagneticPendulumModel(init, magnets){           
    var x = init.x0,
    	y = init.y0,
    	vx = 0,
    	vy = 0,
    	dt = 0.01,
    	time = 0,    	
    	kf = 0.2,
		kg = 0.5,
		d2 = 0.1 * 0.1;
    
    var km1 = magnets.magnet1.km,
		km2 = magnets.magnet2.km,
		km3 = magnets.magnet3.km;
    
    var x1 = magnets.magnet1.x,
		x2 = magnets.magnet2.x,
		x3 = magnets.magnet3.x,
		y1 = magnets.magnet1.y,
		y2 = magnets.magnet2.y,
		y3 = magnets.magnet3.y;
    
    var xList = [x], 
		yList = [y];
    
    function calculateAccleration() {
		var dd1 = Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y) + d2);
		var sqrtdd1 = dd1 * dd1 *dd1;
		
		var dd2 = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y) + d2);
		var sqrtdd2 = dd2 * dd2 *dd2;		

		var dd3 = Math.sqrt((x3 - x) * (x3 - x) + (y3 - y) * (y3 - y) + d2);
		var sqrtdd3 = dd3 * dd3 *dd3;
		
		var ax = -kf * vx - kg * x + 
			km1 * (x1 - x) / sqrtdd1 + 
		    km2 * (x2 - x) / sqrtdd2 + 
		    km3 * (x3 - x) / sqrtdd3;
		var ay = -kf * vy - kg * y +
		    km1 * (y1 - y) / sqrtdd1 + 
		    km2 * (y2 - y) / sqrtdd2 + 
		    km3 * (y3 - y) / sqrtdd3;
		
    	return [ax, ay];
    }

    function eulerIntegration(){
    	time = time + dt;
    	
    	var acceleration = calculateAccleration();
    	var ax = acceleration[0];
    	var ay = acceleration[1];
    	
    	vx = vx + ax * dt;
        vy = vy + ay * dt;
                
        x = x + vx * dt;
        y = y + vy * dt;   
    }
      
    function move() {
    	eulerIntegration();
    	
        xList.push(x);
        yList.push(y); 
    }
    
    function reset(posX, posY) {
		time = 0;
		
		x = posX;
		y = posY;
		
		vx = 0;
		vy = 0;
	
    	xList = [x];
    	yList = [y];
    }
    
    return{
    	move: move,
    	reset: reset,
    	getTime: function() {return time;},
    	getVel: function() {return [vx, vy]},
    	getX: function() {return x;},
    	getY: function() {return y;},
    	getXList: function() {return xList;},
    	getYList: function() {return yList;},    	
    };
}   

function startStopAnimation() {
	if(isMoving){
		isMoving = false;
	} else {
		isMoving = true;	
	}
}

function resetAnimation() { 
    JXG.JSXGraph.freeBoard(brd);
    clearInterval(animate); 
    isMoving = false;
	main();
}

function InitialValues(){
	return {
		pos: 1*document.getElementById('x0').value,
		vel: 1*document.getElementById('y0').value,
		example: document.getElementById('example').value,
    };     
};

function Magnet(x, y, km) {
	this.x = x;
	this.y = y;
	this.km = km;
}

function MagnetsExample1() {
	this.magnet1 = new Magnet(1, 0, 0.5);
	this.magnet2 = new Magnet(-1, -1, 0.5);
	this.magnet3 = new Magnet(-1, 1, 0.5);
}

function MagnetsExample2() {
	this.magnet1 = new Magnet(0.5, 0, 0.5);
	this.magnet2 = new Magnet(-0.5, -0.5, 0.5);
	this.magnet3 = new Magnet(-0.5, 0.5, 0.5);
}

function main(){
	brd = JXG.JSXGraph.initBoard('box2', {boundingbox: [-4.5, 4.5, 4.5,-4.5], axis: true, grid: false, showCopyright: false});  

	var init = new InitialValues();
	var magnets;

	if (init.example == "example1") {
		magnets = new MagnetsExample1();
	} else if (init.example == "example2") {
		magnets = new MagnetsExample2();
	}
	
	var model = new MagneticPendulumModel(init, magnets);

    var urlstr = "http://visual.icse.us.edu.pl/image/basins/";
	brd.create('image', [function() {return urlstr + init.example + ".png";}, [-4, -4], [8, 8]], {opacity: 1.0});
	
    var curve = brd.create('curve', [[0], [0]], {strokeColor: 'white'}),
		punktbrd = brd.create('point', [function() {return model.getX();}, 
		                                function() {return model.getY();}], 
										{name: '', withLabel: false, color: 'white', fixed: true, size: 1});
    
    curve.updateDataArray = function(){
    	this.dataX = model.getXList();
    	this.dataY = model.getYList();
    };

	var getMouseCoords = function(e) {
	    	var cPos = brd.getCoordsTopLeftCorner(e),
	        	absPos = JXG.getPosition(e),
	        	dx = absPos[0] - cPos[0],
	        	dy = absPos[1] - cPos[1];

	    	return new JXG.Coords(JXG.COORDS_BY_SCREEN, [dx, dy], brd);
		},
		up = function(e) {
	    	var coords = getMouseCoords(e),
	    		x = coords.usrCoords[1],
	    		y = coords.usrCoords[2];
	    	
	    	// register mouse clicks over background image only
	    	if( (x >= -4) && (x <= 4) && (y >= -4) && (y <= 4) ) {
				clearInterval(animate); 
	    		model.reset(x, y);
	    		
	    		isMoving = true;

	    		displayStaticOutput(model);	    	
	    		start();
	    	}
		};
		
	brd.addHook(up, 'mouseup');
	
	var start = function() {	
			
	    animate = setInterval(function() {   
	    	if ( isMoving && model.getTime() <= 60) {
				
				for (var i = 1 ; i <= 10 ; i++) {
					model.move();    
				}
				
	    		updateElements([punktbrd, curve]);
	    	}
	    }, 35); 
	    
	};
   
}

function displayStaticOutput(obj) {
	document.getElementById('x0').value = obj.getX().toFixed(2); 
	document.getElementById('y0').value = obj.getY().toFixed(2);
}

function updateElements(objects) {
	for (var i = 0 ; i < objects.length ; i++) {
		objects[i].prepareUpdate().update().updateRenderer(); 
	}
}



