var isMoving = true,
	brd1, brd2, animate;
main();


/* Model fizyczny układu zachowawczego o jednym stopniu swobody */
function PunktModel(pos0, vel0, gamma){           
    var pos = pos0,
    	vel = vel0,
    	dt = 0.005,
    	time = 0;
    
    var posList = [pos], 
		velList = [vel];

    function setPos(x) {
    	pos = x;
    }
    
    function setVel(v) {
    	vel = v;
    }
        
    // energia kinetyczna
    function Ek(x){
    	return x*x/2;  // m = 1 
    }
    
    // energia potencjalna
    function Ep(x) {
    	return 0.25*Math.pow(x, 4) - 0.5*Math.pow(x, 2);
    }
    
    // energia całkowita 
    function Ec(){
    	return Ep(pos) + Ek(vel);
    }
    
    // przyśpieszenie
    function accel(x, v, t) {
    	return -x*(x*x - 1) - gamma*v;
    }
  
    // całkowanie równań ruchu metodą RK4.
    function rk4Integration(){
    	time = time + dt;
    	
    	var x = pos;
    	var v = vel;
    	
    	var x1 = x;
    	var v1 = v;
    	var a1 = accel(x1, v1, time);
    	
    	var x2 = x + 0.5*v1*dt;
    	var v2 = v + 0.5*a1*dt;
    	var a2 = accel(x2, v2, time);

    	var x3 = x + 0.5*v2*dt;
    	var v3 = v + 0.5*a2*dt;
    	var a3 = accel(x3, v3, time);
    	
    	var x4 = x + v3*dt;
    	var v4 = v + a3*dt;
    	var a4 = accel(x4, v4, time);

        pos = x + (dt/6.0)*(v1 + 2*(v2 + v3) + v4);
        vel = v + (dt/6.0)*(a1 + 2*(a2 + a3) + a4); 
    }
      
    function move() {
    	rk4Integration();
    	
        posList.push(pos);
        velList.push(vel); 
    }
    
    function resetPosVelList() {
    	posList = [];
    	velList = [];
    }
    
    return{
    	Ep: Ep,
    	Ec: Ec,
    	move: move,
    	resetPosVelList: resetPosVelList,
    	getTime: function() {return time;},
    	setPos: setPos,
    	setVel: setVel,
    	getPos: function() {return pos;},
    	getVel: function() {return vel;},
    	getPosList: function() {return posList;},
    	getVelList: function() {return velList;},    	
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
	main();
}


/* Wartośc początkowe dla punktów p1 i p2 */
function InitialValues(){
	return {
		pos: 1*document.getElementById('x0').value,
		vel: 1*document.getElementById('xdot0').value,
		gamma: 1*document.getElementById('gamma').value,
    };     
};


function main(){
	brd1 = JXG.JSXGraph.initBoard('box1', {boundingbox:[-2,2,2,-0.5], axis:true, grid:true, showCopyright:false});  
	brd2 = JXG.JSXGraph.initBoard('box2', {boundingbox:[-4, 4, 4,-4], axis:true, grid:true, showCopyright:false});  

	var init = new InitialValues(),
		punkt = new PunktModel(init.pos, init.vel, init.gamma);

	// elementy na brd1
    var wykresEp = brd1.create('functiongraph', [function(x){return punkt.Ep(x);}, -10, 10], {strokeColor:'red'}),
    	energia = brd1.create('functiongraph', [function(x){return punkt.Ec();}, -10, 10], {strokeColor:'green', strokeWidth:2, dash:1}),
    	punktbrd1 = brd1.create('glider', [function(){return punkt.getPos();}, 0, wykresEp], {name:'', withLabel:false, color:'green', fixed:true});
    
	// elementy na brd2
    var urlstr = "http://visual.icse.us.edu.pl/image/basins/";
	brd2.create('image',[function(){return urlstr + init.gamma + ".jpg";}, [-3,-3], [6, 6]], {opacity:0.4});
	
    var curve = brd2.create('curve', [[0], [0]], {strokeColor:'green'}),
		punktbrd2 = brd2.create('point', [function() {return punkt.getPos();}, function() {return punkt.getVel();}], 
													{name:'', withLabel:false, color:'green', fixed:true});
    
    curve.updateDataArray = function(){
    	this.dataX = punkt.getPosList();
    	this.dataY = punkt.getVelList();
    };

	var getMouseCoords = function(e) {
	    	var cPos = brd2.getCoordsTopLeftCorner(e),
	        	absPos = JXG.getPosition(e),
	        	dx = absPos[0]-cPos[0],
	        	dy = absPos[1]-cPos[1];

	    	return new JXG.Coords(JXG.COORDS_BY_SCREEN, [dx, dy], brd2);
		},
		up = function(e) {
	    	var coords = getMouseCoords(e),
	    		x = coords.usrCoords[1],
	    		y = coords.usrCoords[2];
	    	
	    	// register mouse clicks over background image only
	    	if( (x >= -3) && (x <= 3) && (y >= -3) && (y <= 3) ) {
	    		punkt.resetPosVelList();
	    		punkt.setPos(x);
	    		punkt.setVel(y);
	    		
	    		isMoving = true;
	    	
	    		displayStaticOutput(punkt);	    	
	    		start();
	    	}
		};
	brd2.addHook(up, 'mouseup');
	
	// aniumuje obiekty
	var start = function() {		
	    animate = setInterval(function() {   
	    	if ( isMoving && (punkt.Ec() > -0.1) ) {
				
				for (var i = 1 ; i <= 5 ; i++) {
					punkt.move();    
				}
				
	    		updateElements([punktbrd1, punktbrd2, energia, curve]);
	    	}
	    }, 33); 
	};
   
}


function displayStaticOutput(obj) {
	document.getElementById('x0').value = obj.getPos().toFixed(2); 
	document.getElementById('xdot0').value = obj.getVel().toFixed(2);
}


function updateElements(objects) {
	for (var i = 0 ; i < objects.length ; i++) {
		objects[i].prepareUpdate().update().updateRenderer(); 
	}
}



