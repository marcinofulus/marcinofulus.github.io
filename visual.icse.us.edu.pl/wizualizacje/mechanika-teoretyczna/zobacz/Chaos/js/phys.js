var isMoving = true,
	brd1, brd2, animate;
main();


function PunktModel(pos0, vel0, gamma, A, omega){           
    var pos = pos0,
    	vel = vel0,
    	dt = 0.005,
    	time = 0;
    
    var timeList = [time],
    	posList = [pos], 
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
    	return -x*(x*x - 1) - gamma*v + A*Math.cos(omega*t);
    }

    // całkowanie równań ruchu metodą RK4.
    function rk4Integration(){
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
    	time = time + dt;
    	rk4Integration();
    	
    	timeList.push(time);
        posList.push(pos);
        velList.push(vel); 
    }
    
    function resetLists() {
    	timeList = [];
    	posList = [];
    	velList = [];
    }
    
    return{
    	Ep: Ep,
    	Ec: Ec,
    	move: move,
    	resetLists: resetLists,
    	setPos: setPos,
    	setVel: setVel,
    	getTime: function() {return time;},
    	getPos: function() {return pos;},
    	getVel: function() {return vel;},
    	getTimeList: function() {return timeList;},
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


/* Wartośc początkowe */
function InitialValues(){
	return {
		pos: 1*document.getElementById('x0').value,
		vel: 1*document.getElementById('xdot0').value,
		gamma: 1*document.getElementById('gamma').value,
		A: 1*document.getElementById('A').value,
		omega: 1*document.getElementById('omega').value,
    };     
};


function main(){
	brd1 = JXG.JSXGraph.initBoard('box1', {boundingbox:[-2, 2, 100,-2], axis:true, grid:false, showCopyright:false});  
	brd2 = JXG.JSXGraph.initBoard('box2', {boundingbox:[-2, 2, 2,-2], axis:true, grid:true, showCopyright:false});  

	var init = new InitialValues(),
		punkt = new PunktModel(init.pos, 
							   init.vel, 
							   init.gamma,
							   init.A,
							   init.omega);

	// elementy na brd1
    var curve1 = brd1.create('curve', [[0], [0]], {strokeColor:'blue'}),
		punktbrd1 = brd1.create('point', [function() {return punkt.getTime();}, function() {return punkt.getPos();}], 
												{name:'', withLabel:false, color:'red', fixed:true});
    
    curve1.updateDataArray = function(){
    	this.dataX = punkt.getTimeList();
    	this.dataY = punkt.getPosList();
    };
    
 // elementy na brd2
    var curve2 = brd2.create('curve', [[0], [0]], {strokeColor:'blue'}),
		punktbrd2 = brd2.create('point', [function() {return punkt.getPos();}, function() {return punkt.getVel();}], 
													{name:'', withLabel:false, color:'red', fixed:true});
    
    curve2.updateDataArray = function(){
    	this.dataX = punkt.getPosList();
    	this.dataY = punkt.getVelList();
    };
	
	// aniumuje obiekty
	animate = setInterval(function() {   
	    if (isMoving) {
			for (var i = 1 ; i <= 50 ; i++) {
				punkt.move();    
			}
	    	updateElements([punktbrd1, punktbrd2, curve1, curve2]);
	    }
	}, 40); 
   
}


function displayDynamicOutput(obj) {
	document.getElementById('x0').value = obj.getPos().toFixed(2); 
	document.getElementById('xdot0').value = obj.getVel().toFixed(2);
}


function updateElements(objects) {
	for (var i = 0 ; i < objects.length ; i++) {
		objects[i].prepareUpdate().update().updateRenderer(); 
	}
}


