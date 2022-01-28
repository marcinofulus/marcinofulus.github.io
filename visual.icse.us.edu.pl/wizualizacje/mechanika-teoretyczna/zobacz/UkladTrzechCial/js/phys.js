var isMoving = false,
	brd1, animate, simspeed = 8;
main();


function CelestialBodyModel(G, eps, M, r0, phi0, v0, alpha0) { 
	var eps2 = eps*eps,
		GM = G*M;
	
    var phiRad0 = Math.PI*phi0/180.0,
    	alphaRad0 = Math.PI*alpha0/180.0,
    	posx = r0*Math.cos(phiRad0),
    	posy = r0*Math.sin(phiRad0),
    	vel = v0,
    	velx = v0*Math.cos(alphaRad0),
    	vely = v0*Math.sin(alphaRad0);
    
    var interactingBodies = [];
    
    function setInteractingBodies(interactingArray) {
    	interactingBodies = interactingArray;
    };
    
    function accel(x, v) {
    	var ax = 0, 
    		ay = 0;
    	
    	for (var i = 0 ; i < interactingBodies.length ; i++) {
    		var body = interactingBodies[i],
    			dX = x[0] - body.getPosX(),
    			dY = x[1] - body.getPosY(),
    			rt = Math.sqrt(dX*dX + dY*dY + eps2),
    			commonPart = -body.GM/(rt*rt*rt);
  
    		ax = ax + commonPart*dX;
    		ay = ay + commonPart*dY;
    	}
    	
    	return [ax, ay]; 
    };
    
    function rk4Integration(dt) {
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

    function move(dt) {
    	rk4Integration(dt);  
    	vel = Math.sqrt(velx*velx + vely*vely); 
    };
    
    return {
    	move: move,
    	setInteractingBodies: setInteractingBodies,
    	GM: GM,
    	getVel: function() {return vel;},
    	getVelX: function() {return velx;},
    	getVelY: function() {return vely;},
    	getPosX: function() {return posx;},
    	getPosY: function() {return posy;},
    };
} 


function CelestialSystemModel(arrayOfBodies) {
	var arrayOfCelestialBodies = arrayOfBodies;
	var time = 0;
	var dt = 0.5;
	
	function setInteractions() {
		for (var i = 0 ; i < arrayOfCelestialBodies.length ; i++) {
			var interactingBodies = [];
			
			for (var j = 0 ; j < arrayOfCelestialBodies.length ; j++) {
				if ( i != j ) {
					interactingBodies.push(arrayOfCelestialBodies[j]);
				}
			}
			
			arrayOfCelestialBodies[i].setInteractingBodies(interactingBodies);
		}
	};
	
	function setDeltaTime(deltaT) {
		dt = deltaT;
	}
	
	function updateCelestialSystem() {
		time = time + dt;
		
		for (var i = 0 ; i < arrayOfCelestialBodies.length ; i++) {
			arrayOfCelestialBodies[i].move(dt);
		}
	};
	
	return {
		getTime: function() {return time;},
		setDeltaTime: setDeltaTime,
		arrayOfCelestialBodies: arrayOfCelestialBodies,
		setInteractions: setInteractions,
		updateCelestialSystem: updateCelestialSystem,
	};
}


function View(board1, model, colorArray, arrowScale) {
	var celestialBody = [model.arrayOfCelestialBodies[0], 
	                     model.arrayOfCelestialBodies[1],
	                     model.arrayOfCelestialBodies[2]];
	
	var posxList = [[], [], []],
		posyList = [[], [], []];

	var p1 = board1.create('point',[function() {return celestialBody[0].getPosX();}, 
	                                function() {return celestialBody[0].getPosY();}], 
	                                {name:'', withLabel:false, fixed:true, size:1, color:colorArray[0]}),
	    p2 = board1.create('point',[function() {return celestialBody[1].getPosX();}, 
	                                function() {return celestialBody[1].getPosY();}], 
	                                {name:'', withLabel:false, fixed:true, size:1, color:colorArray[1]}),
	    p3 = board1.create('point',[function() {return celestialBody[2].getPosX();}, 
	                                function() {return celestialBody[2].getPosY();}], 
	                       			{name:'', withLabel:false, fixed:true, size:1, color:colorArray[2]});

	
 	var tp1 = board1.create('point',[function() {return celestialBody[0].getPosX() + arrowScale*celestialBody[0].getVelX();}, 
 	                                 function() {return celestialBody[0].getPosY() + arrowScale*celestialBody[0].getVelY();}], 
 	                                 {name:'', withLabel:false, fixed:true, visible:false});
    board1.create('arrow', [p1, tp1], {name:'', withLabel:false, strokeColor:'black', strokeWidth:1});

 	var tp2 = board1.create('point',[function() {return celestialBody[1].getPosX() + arrowScale*celestialBody[1].getVelX();}, 
 	                                 function() {return celestialBody[1].getPosY() + arrowScale*celestialBody[1].getVelY();}], 
 	                                 {name:'', withLabel:false, fixed:true, visible:false});
 	board1.create('arrow', [p2, tp2], {name:'', withLabel:false, strokeColor:'black', strokeWidth:1});

 	var tp3 = board1.create('point',[function() {return celestialBody[2].getPosX() + arrowScale*celestialBody[2].getVelX();}, 
 	                                 function() {return celestialBody[2].getPosY() + arrowScale*celestialBody[2].getVelY();}], 
 	                                 {name:'', withLabel:false, fixed:true, visible:false});
 	board1.create('arrow', [p3, tp3], {name:'', withLabel:false, strokeColor:'black', strokeWidth:1});
 	
 	
	body1Curve = board1.create('curve', [[0], [0]], {strokeColor:colorArray[0], dash:1});	
	body1Curve.updateDataArray = function() {
		this.dataX = posxList[0];
		this.dataY = posyList[0];
	};
	
	body2Curve = board1.create('curve', [[0], [0]], {strokeColor:colorArray[1], dash:1});	
	body2Curve.updateDataArray = function() {
		this.dataX = posxList[1];
		this.dataY = posyList[1];
	};
	
	body3Curve = board1.create('curve', [[0], [0]], {strokeColor:colorArray[2], dash:1});	
	body3Curve.updateDataArray = function() {
		this.dataX = posxList[2];
		this.dataY = posyList[2];
	};

	
	function runAnimation(interval) {
		model.setDeltaTime(0.0001);
		
		animate = setInterval(function() {
			if(isMoving){
			    updateModel();
			    updatePosData();
    			board1.update();
    		}
		}, interval); 
	};
	
	function updateModel() {
		var step = simspeed*125;
	    for (var i = 1 ; i <= step ; i++) {
	    	model.updateCelestialSystem();
	    }	
	};
	
	function updatePosData() {
		for (var i = 0 ; i < celestialBody.length ; i++) { 
			posxList[i].push(celestialBody[i].getPosX());
			posyList[i].push(celestialBody[i].getPosY());
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


function resetAnimation() { 
    JXG.JSXGraph.freeBoard(brd1);
    clearInterval(animate); 
	main();
}


function GetSelectedRadioItem(obj) {
	
	switch(obj.id) {
		case "slower10x":
			simspeed = 1;
			break;
		case "slower5x":
			simspeed = 5;
			break;
		case "normal":
			simspeed = 10;
			break;
		case "faster5x":
			simspeed = 15;
			break;
		case "faster10x":
			simspeed = 20;
			break;
	}

}


function swapOpts(arrayName) {

	function insertValue(idString, val) {
		document.getElementById(idString).value = val;
	}
	
	function checkSpeed(idString) {
		document.getElementById(idString).checked = true;
		GetSelectedRadioItem(document.getElementById(idString));
	}
	
	switch(arrayName) {
		case "przyklad1":
			insertValue('G', 1);
			insertValue('eps', 0.001);
			insertValue('s', 10);
			
			insertValue('M1', 15);
			insertValue('M2', 15);
			insertValue('M3', 1);
			
			insertValue('r01', 10);
			insertValue('r02', 10);
			insertValue('r03', 5);		
			
			insertValue('phi01', 0);
			insertValue('phi02', 180);
			insertValue('phi03', 300);
			
			insertValue('v01', 0.5);
			insertValue('v02', 0.5);
			insertValue('v03', 1);	
			
			insertValue('alpha01', 90);
			insertValue('alpha02', 270);
			insertValue('alpha03', 1);				
			
			checkSpeed('normal');
			
			break;
		case "przyklad2":
			insertValue('G', 1);
			insertValue('eps', 0.001);
			insertValue('s', 1);
			
			insertValue('M1', 10000);
			insertValue('M2', 10000);
			insertValue('M3', 0.0001);
			
			insertValue('r01', -45);
			insertValue('r02', 45);
			insertValue('r03', 47);		
			
			insertValue('phi01', 0);
			insertValue('phi02', 0);
			insertValue('phi03', 0);
			
			insertValue('v01', 7.5);
			insertValue('v02', 7.5);
			insertValue('v03', 100);	
			
			insertValue('alpha01', 270);
			insertValue('alpha02', 90);
			insertValue('alpha03', 90);				
			
			checkSpeed('slower10x');
			
			break;

		case "przyklad3":
			insertValue('G', 1);
			insertValue('eps', 0.001);
			insertValue('s', 1);
			
			insertValue('M1', 10000);
			insertValue('M2', 1000);
			insertValue('M3', 0.0001);
			
			insertValue('r01', 0);
			insertValue('r02', 45);
			insertValue('r03', 47);		
			
			insertValue('phi01', 0);
			insertValue('phi02', 0);
			insertValue('phi03', 0);
			
			insertValue('v01', 0);
			insertValue('v02', 14.9071);
			insertValue('v03', 38);	
			
			insertValue('alpha01', 90);
			insertValue('alpha02', 90);
			insertValue('alpha03', 90);				
			
			checkSpeed('slower10x');
			
			break;		
			
		case "przyklad4":
			insertValue('G', 1);
			insertValue('eps', 0.001);
			insertValue('s', 1);
			
			insertValue('M1', 10000);
			insertValue('M2', 100);
			insertValue('M3', 0.0001);
			
			insertValue('r01', 0);
			insertValue('r02', 45);
			insertValue('r03', 47);		
			
			insertValue('phi01', 0);
			insertValue('phi02', 0);
			insertValue('phi03', 0);
			
			insertValue('v01', 0);
			insertValue('v02', 14.9071);
			insertValue('v03', 7);	
			
			insertValue('alpha01', 90);
			insertValue('alpha02', 90);
			insertValue('alpha03', 90);				
			
			checkSpeed('slower10x');
			
			break;		

		case "przyklad5":
			insertValue('G', 1);
			insertValue('eps', 0.001);
			insertValue('s', 1);
			
			insertValue('M1', 10000);
			insertValue('M2', 1000);
			insertValue('M3', 0.0001);
			
			insertValue('r01', 0);
			insertValue('r02', 45);
			insertValue('r03', 6);		
			
			insertValue('phi01', 0);
			insertValue('phi02', 0);
			insertValue('phi03', 250);
			
			insertValue('v01', 0);
			insertValue('v02', 14.9071);
			insertValue('v03', 54.5);	
			
			insertValue('alpha01', 90);
			insertValue('alpha02', 90);
			insertValue('alpha03', 350);				
			
			checkSpeed('slower10x');
			
			break;	

		case "przyklad6":
			insertValue('G', 1);
			insertValue('eps', 0.001);
			insertValue('s', 1);
			
			insertValue('M1', 100);
			insertValue('M2', 0.0001);
			insertValue('M3', 0.0001);
			
			insertValue('r01', 0);
			insertValue('r02', 3);
			insertValue('r03', 4);		
			
			insertValue('phi01', 0);
			insertValue('phi02', 0);
			insertValue('phi03', 0);
			
			insertValue('v01', 7);
			insertValue('v02', 2);
			insertValue('v03', 2);	
			
			insertValue('alpha01', 90);
			insertValue('alpha02', 90);
			insertValue('alpha03', 90);				
			
			checkSpeed('slower10x');
			
			break;			
	}

	resetAnimation();
}



function main() {
	JXG.Options.text.fontSize = 15; 
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-90, 50, 90, -50], axis:true,grid:false, showCopyright:false}); 
	
	var initCzastka1 = {
			M: 1*document.getElementById('M1').value,
			r0: 1*document.getElementById('r01').value,
			phi0: 1*document.getElementById('phi01').value,
			v0: 1*document.getElementById('v01').value,
			alpha0: 1*document.getElementById('alpha01').value,
		},
		initCzastka2 = {
			M: 1*document.getElementById('M2').value,
			r0: 1*document.getElementById('r02').value,
			phi0: 1*document.getElementById('phi02').value,
			v0: 1*document.getElementById('v02').value,
			alpha0: 1*document.getElementById('alpha02').value,
		},
		initCzastka3 = {
			M: 1*document.getElementById('M3').value,
			r0: 1*document.getElementById('r03').value,
			phi0: 1*document.getElementById('phi03').value,
			v0: 1*document.getElementById('v03').value,
			alpha0: 1*document.getElementById('alpha03').value,
		};
		constants = {
			G: 1*document.getElementById('G').value,
			eps: 1*document.getElementById('eps').value,
			s: 1*document.getElementById('s').value,
		};
	
	var	czastka1Model = new CelestialBodyModel(constants.G,
			                                   constants.eps,
											   initCzastka1.M, 
											   initCzastka1.r0, 
											   initCzastka1.phi0, 
											   initCzastka1.v0, 
											   initCzastka1.alpha0),
		czastka2Model = new CelestialBodyModel(constants.G,
                                               constants.eps,				
											   initCzastka2.M, 
											   initCzastka2.r0, 
											   initCzastka2.phi0, 
											   initCzastka2.v0, 
											   initCzastka2.alpha0),
		czastka3Model = new CelestialBodyModel(constants.G,
                                               constants.eps,
				                               initCzastka3.M, 
											   initCzastka3.r0, 
										       initCzastka3.phi0, 
											   initCzastka3.v0, 
											   initCzastka3.alpha0);

	var ukladTrzechCial = new CelestialSystemModel([czastka1Model, czastka2Model, czastka3Model]);
	ukladTrzechCial.setInteractions();
	
	var view = new View(brd1, ukladTrzechCial, ["red", "green", "blue"], constants.s);
	view.runAnimation(25);
	
}




