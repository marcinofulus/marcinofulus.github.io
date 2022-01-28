var isMoving = false, animate;
main();


function WahadloPodwojneModel(L1, L2, m1, m2, g, theta10, theta20){
    var thetaDot10 = 0,
    	thetaDot20 = 0,
    	theta1 = theta10,
    	theta2 = theta20,
    	thetaDot1 = thetaDot10,
    	thetaDot2 = thetaDot20,
    	time = 0,
    	dt = 0.001;
    
    var posx1 = L1*Math.sin(theta1),
		posy1 = -L1*Math.cos(theta1),
		posx2 = posx1 + L2*Math.sin(theta2),
		posy2 = posy1 - L2*Math.cos(theta2);

    function accel(x, v) {
    	var dTheta = x[1] - x[0];
    	
    	var num1 = m2*L1*v[0]*v[0] * Math.sin(dTheta)*Math.cos(dTheta) + m2*g*Math.sin(x[1])*Math.cos(dTheta) +
    			   m2*L2*v[1]*v[1] * Math.sin(dTheta) - (m1 + m2)*g*Math.sin(x[0]),
    	    den1 = (m1 + m2)*L1 - m2*L1*Math.cos(dTheta)*Math.cos(dTheta);
    	
    	var num2 =-m2*L2*v[1]*v[1] * Math.sin(dTheta)*Math.cos(dTheta) + (m1 + m2)*
    			  (g*Math.sin(x[0])*Math.cos(dTheta) - L2*v[0]*v[0]*Math.sin(dTheta) - g*Math.sin(x[1])),
    	    den2 = (m1 + m2)*L2 - m2*L2*Math.cos(dTheta)*Math.cos(dTheta);
	
    	return [num1/den1, num2/den2]; 
    };

    function rk4Integration() {
    	var x1 = [], x2 = [], x3 = [], x4 = [], 
    		v1 = [], v2 = [], v3 = [], v4 = [], 
    		a1 = [], a2 = [], a3 = [], a4 = [];
	
    	x1[0] = theta1;
    	v1[0] = thetaDot1;
    	x1[1] = theta2;
    	v1[1] = thetaDot2;
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
    	
    	theta1 = x1[0] +  (dt/6.0) * (v1[0] + 2*v2[0] + 2*v3[0] + v4[0]);
    	thetaDot1 = v1[0] + (dt/6.0) * (a1[0] + 2*a2[0] + 2*a3[0] + a4[0]);
    	
    	theta2 = x1[1] +  (dt/6.0) * (v1[1] + 2*v2[1] + 2*v3[1] + v4[1]);
    	thetaDot2 = v1[1] + (dt/6.0) * (a1[1] + 2*a2[1] + 2*a3[1] + a4[1]);
    };  
    
    function polarToCartesian() {
    	posx1 = L1*Math.sin(theta1);
    	posy1 = -L1*Math.cos(theta1);
    	posx2 = posx1 + L2*Math.sin(theta2);
    	posy2 = posy1 - L2*Math.cos(theta2);
    };
    
    function move() {
    	time = time + dt;
    	rk4Integration();
    	polarToCartesian();
    };
    
    return {
    	L1: L1, 
    	L2: L2,
    	g: g,
    	move: move,
    	rk4Integration: rk4Integration,
    	getTheta1: function() {return theta1;},
    	getTheta2: function() {return theta2;},
    	getThetaDot1: function() {return thetaDot1;},
    	getThetaDot2: function() {return thetaDot2;},
    	
    	getTime: function() {return time;},
    	
       	getPosX1: function() {return posx1;},
    	getPosY1: function() {return posy1;},
       	getPosX2: function() {return posx2;},
    	getPosY2: function() {return posy2;},
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
    JXG.JSXGraph.freeBoard(brd1);
    JXG.JSXGraph.freeBoard(brd2);
    JXG.JSXGraph.freeBoard(brd3);
    JXG.JSXGraph.freeBoard(brd4);
    clearInterval(animate); 
	main();
}

/* Wartości początkowe. */
function InitialValues() {
	return {
		L1: 1*document.getElementById('L1').value,
		L2: 1*document.getElementById('L2').value, 
	    m1: 1*document.getElementById('m1').value, 
	    m2: 1*document.getElementById('m2').value, 
	    g: 1*document.getElementById('g').value,
	    theta10: 1*document.getElementById('theta10').value, 
	    theta20: 1*document.getElementById('theta20').value, 
	};
};

function main() {	
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-3, 2, 3,-4], axis:true,grid:true, showCopyright:false}); 
	brd2 = JXG.JSXGraph.initBoard('box2',{boundingbox:[-3, 3, 3,-3], axis:true, grid:false, showCopyright:false}); 
	brd3 = JXG.JSXGraph.initBoard('box3',{boundingbox:[-1, 2, 50,-2], axis:true,grid:false, showCopyright:false}); 
	brd4 = JXG.JSXGraph.initBoard('box4',{boundingbox:[-1, 2, 50,-2], axis:true, grid:false, showCopyright:false}); 	
	
	init = new InitialValues();
	wahadlo = new WahadloPodwojneModel(
				init.L1, 
				init.L2, 
				init.m1, 
				init.m2, 
				init.g, 
				init.theta10, 
				init.theta20);
	
    var x1 = brd1.create('point',[function() {return wahadlo.getPosX1();}, 
    	                          function() {return wahadlo.getPosY1();}],{name:'', withLabel:false, fixed:true, size:4}),
    	segment1 = brd1.createElement('segment',[[0,0],x1],{name:'', withLabel:false, fixed:true, strokeColor:'black'});
    
    var x2 = brd1.create('point',[function() {return wahadlo.getPosX2();}, 
    	                          function() {return wahadlo.getPosY2();}],{name:'', withLabel:false, fixed:true, size:4}),   
        segment2 = brd1.createElement('segment',[x1,x2],{name:'', withLabel:false, fixed:true, strokeColor:'black'});
    
	var theta1List = [],
		theta2List = [],
		timeList = [],
		posx2List = [], 
		posy2List = [];
	
	var pathBrd1 = brd1.create('curve', [posx2List, posy2List], {strokeColor:'blue'}),
	    pathBrd2 = brd2.create('curve', [theta1List, theta2List], {strokeColor:'blue'}),
	    pathBrd3 = brd3.create('curve', [timeList, theta1List], {strokeColor:'blue'}),
	    pathBrd4 = brd4.create('curve', [timeList, theta2List], {strokeColor:'blue'});
    
    animate = setInterval(function() {
    	if (isMoving) {
			
			for (var i = 1 ; i <= 50 ; i++) {
				wahadlo.move();
			}
    		
    		theta1List.push(wahadlo.getTheta1());
    		theta2List.push(wahadlo.getTheta2());
    		timeList.push(wahadlo.getTime());
    		posx2List.push(wahadlo.getPosX2());
    		posy2List.push(wahadlo.getPosY2());
    		
        	updateElements([x1, x2, 
        	                segment1, segment2, 
        	                pathBrd1, pathBrd2, pathBrd3, pathBrd4]);
    	}
    }, 33); 
    
}

function updateElements(objects) {
	for (var i = 0 ; i < objects.length ; i++) {
		objects[i].prepareUpdate().update().updateRenderer(); 
	}
}

