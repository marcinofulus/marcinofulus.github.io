var isMoving = true,
	brd1, brd2, brd3, animate;
main();


function WahadloModel(L, g, theta0, gamma, accuracyMode) { 
    var pos = theta0,
    	vel = 0,
    	time = 0,
    	dt = 0.01; 
    
    var posx = L*Math.sin(pos),
		posy = -L*Math.cos(pos);
    
    var timeList = [time],
		posList = [pos], 
		velList = [vel];

    function accel(x, v, t) {
    	if (accuracyMode) {
    		return -g/L*x - gamma*v;
    	} else {
    		return -g/L*Math.sin(x) - gamma*v;
    	}
    };
    
    function rk4Integration() {
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
    };
      
    function polarToCartesian() {
    	posx = L*Math.sin(pos);
    	posy = -L*Math.cos(pos);
    };
    
    function move() {
    	time = time + dt;
    	rk4Integration();
    	polarToCartesian();
    	
    	timeList.push(time);
        posList.push(pos);
        velList.push(vel); 
    };
    
    return {
    	L: L, 
    	g: g,
    	move: move,
    	getTime: function() {return time;},
    	getPos: function() {return pos;},
    	getVel: function() {return vel;},

       	getPosX: function() {return posx;},
    	getPosY: function() {return posy;},
    	
    	getTimeList: function() {return timeList;},
    	getPosList: function() {return posList;},
    	getVelList: function() {return velList;}, 
    };
} 


function WahadloView(board1, board2, board3, model, colorName) {

    var punkt = board1.create('point',[function() {return model.getPosX();}, 
    	                               function() {return model.getPosY();}], {name:'', withLabel:false, fixed:true, size:4, color:colorName}),
    	segment = board1.createElement('segment',[[0,0], punkt], {name:'', withLabel:false, fixed:true, strokeColor:'black'});

    var curvePos = board2.create('curve', [[0], [0]], {strokeColor:colorName}),
    	curveVel = board3.create('curve', [[0], [0]], {strokeColor:colorName});

    curvePos.updateDataArray = function(){
    	this.dataX = model.getTimeList();
    	this.dataY = model.getPosList();
    };

    curveVel.updateDataArray = function(){
    	this.dataX = model.getTimeList();
    	this.dataY = model.getVelList();
    };
    
	function updateElements(objects) {
		for (var i = 0 ; i < objects.length ; i++) {
			objects[i].prepareUpdate().update().updateRenderer(); 
		}
	};
	
	function updateView() {
		updateElements([punkt, segment, curvePos, curveVel]);
	};
	
    return{
    	updateView: updateView,   	
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
    JXG.JSXGraph.freeBoard(brd3);
    clearInterval(animate); 
	main();
}


function InitialValues() {
	return {
		L: 1*document.getElementById('L').value, 
	    g: 1*document.getElementById('g').value,
	    theta0: 1*document.getElementById('theta0').value,
	    gamma: 1*document.getElementById('gamma').value,
	};
}


function main(){
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-2, 1, 2,-3], axis:true,grid:true, showCopyright:false}); 
	brd2 = JXG.JSXGraph.initBoard('box2',{boundingbox:[-1, 1.5, 25,-1.5], axis:true,grid:false, showCopyright:false}); 
	brd3 = JXG.JSXGraph.initBoard('box3',{boundingbox:[-1, 1.5, 25,-1.5], axis:true,grid:false, showCopyright:false});
	
	var init = new InitialValues();

	var wahadloAccurate = new WahadloModel(init.L, init.g, init.theta0, init.gamma, true),
		wahadloSimple = new WahadloModel(init.L, init.g, init.theta0, init.gamma, false);
	
    var wahadlowView = new WahadloView(brd1, brd2, brd3, wahadloAccurate, 'red'),
		wahadlowSimpleView = new WahadloView(brd1, brd2, brd3, wahadloSimple, 'green');
    
    animate = setInterval(function() {
    	if(isMoving){
    		wahadloAccurate.move();
    		wahadloSimple.move();
    		
    		wahadlowView.updateView();
    		wahadlowSimpleView.updateView();
    	}
    }, 10); 
}




