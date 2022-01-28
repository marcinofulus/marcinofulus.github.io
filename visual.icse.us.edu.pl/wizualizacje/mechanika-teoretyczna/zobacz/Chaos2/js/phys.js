var isMoving = true,
	brd1, brd2, animate;
main();


function PunktModel(pos0, vel0, gamma, A, omega) {           
    var pos = pos0,
    	vel = vel0,
    	dt = 0.025,
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


function PunktView(board1, board2, model, colorName) {

	// elementy na board1
    var curve1 = board1.create('curve', [[0], [0]], {strokeColor:colorName}),
		punktbrd1 = board1.create('point', [function() {return model.getTime();}, function() {return model.getPos();}], 
												{name:'', withLabel:false, color:colorName, fixed:true});
    
    curve1.updateDataArray = function(){
    	this.dataX = model.getTimeList();
    	this.dataY = model.getPosList();
    };
    
    // elementy na board2
    var curve2 = board2.create('curve', [[0], [0]], {strokeColor:colorName}),
		punktbrd2 = board2.create('point', [function() {return model.getPos();}, function() {return model.getVel();}], 
													{name:'', withLabel:false, color:colorName, fixed:true});
    
    curve2.updateDataArray = function(){
    	this.dataX = model.getPosList();
    	this.dataY = model.getVelList();
    };

	function updateElements(objects) {
		for (var i = 0 ; i < objects.length ; i++) {
			objects[i].prepareUpdate().update().updateRenderer(); 
		}
	};
	
	function updateView() {
		updateElements([punktbrd1, punktbrd2, curve1, curve2]);
	};
	
    return{
    	updateView: updateView,   	
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
		pos1: 1*document.getElementById('x01').value,
		vel1: 1*document.getElementById('xdot01').value,
		gamma1: 1*document.getElementById('gamma1').value,
		A1: 1*document.getElementById('A1').value,
		omega1: 1*document.getElementById('omega1').value,
		
		pos2: 1*document.getElementById('x02').value,
		vel2: 1*document.getElementById('xdot02').value,
		gamma2: 1*document.getElementById('gamma2').value,
		A2: 1*document.getElementById('A2').value,
		omega2: 1*document.getElementById('omega2').value,
    };     
};


function main(){
	brd1 = JXG.JSXGraph.initBoard('box1', {boundingbox:[-2, 2, 100,-2], axis:true, grid:false, showCopyright:false});  
	brd2 = JXG.JSXGraph.initBoard('box2', {boundingbox:[-2, 2, 2,-2], axis:true, grid:true, showCopyright:false});  

	var init = new InitialValues(),
		punkt1 = new PunktModel(init.pos1, 
							    init.vel1, 
							    init.gamma1,
							    init.A1,
							    init.omega1);
	
	var init = new InitialValues(),
	    punkt2 = new PunktModel(init.pos2, 
						        init.vel2, 
						        init.gamma2,
						        init.A2,
						        init.omega2);

	var punktView1 = new PunktView(brd1, brd2, punkt1, "red"),
		punktView2 = new PunktView(brd1, brd2, punkt2, "green");
	
	// aniumuje obiekty
	animate = setInterval(function() {   
	    if (isMoving) {
	    	punkt1.move();    
	    	punkt2.move();  
	    	punktView1.updateView();
	    	punktView2.updateView();
	    }
	}, 15); 
   
}


function displayDynamicOutput(obj) {
	document.getElementById('x0').value = obj.getPos().toFixed(2); 
	document.getElementById('xdot0').value = obj.getVel().toFixed(2);
}





