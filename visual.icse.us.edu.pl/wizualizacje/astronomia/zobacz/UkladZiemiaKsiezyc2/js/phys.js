var isMoving = false,
	brd1, animate, simspeed = 8;
main();


function TwoBodyProblem(body1, body2, orbit1) {
	var theta = Math.PI*orbit1.theta0/180.0,
		a = orbit1.a,
		e = orbit1.e,
		L = Math.sqrt(a*(1 - e*e) * (body1.GM + body2.GM)),
		M1divM2 = -body1.M/body2.M;
	
	body1.orbitData = calculateOrbitData(1);
	body2.orbitData = calculateOrbitData(M1divM2);
		
	move(1);
		
	function calculateOrbitData(massFract) {
		var dataX = [],
			dataY = [];
		
		for (var i = 0 ; i <= 157 ; i++) {
			var x = 4.002*i/100,
				rt = r(x);
			
			dataX.push(massFract * rt * Math.cos(x));
			dataY.push(massFract * rt * Math.sin(x));
		}
		
		return [dataX, dataY];
	};

	function r(theta) {
		var massTerm = (body1.M + body2.M)*(body1.M + body2.M)/(body2.M*body2.M);
		
		return massTerm * a*(1 - e*e)/(1 + e*Math.cos(theta));
	};
	
	function move(dt) {
		var rt = r(theta),
			thetaDot = L/(rt*rt);
		
		theta = theta + thetaDot*dt;
		
		body1.posX = rt * Math.cos(theta);
		body1.posY = rt * Math.sin(theta);
		
		body2.posX = M1divM2 * rt * Math.cos(theta);
		body2.posY = M1divM2 * rt * Math.sin(theta);
	};
	 
	return {
		move: move,
		getBody1: function() {return body1;},
		getBody2: function() {return body2;},
	};
}


function CelestialBodyModel(GM, R, pos0, vel0) { 
    var posx = pos0[0],
    	posy = pos0[1],
    	velx = vel0[0],
    	vely = vel0[1];
    
    var interactingBodies = [];
    
    function setInteractingBodies(interactingArray) {
    	interactingBodies = interactingArray;
    };
    
    function accel(x, v) {
    	var ax = 0, 
    		ay = 0;
    	
    	for (var i = 0 ; i < interactingBodies.length ; i++) {
    		var body = interactingBodies[i],
    			dX = x[0] - body.posX,
    			dY = x[1] - body.posY,
    			rt = Math.sqrt(dX*dX + dY*dY),
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
    	getR: function() {return R;},
    	getGM: function() {return GM;},
    	getVel: function() {return vel;},
    	getVelX: function() {return velx;},
    	getVelY: function() {return vely;},
    	getPosX: function() {return posx;},
    	getPosY: function() {return posy;},
    };
} 


function CelestialSystemModel(arrayOfCelestialBodies) {
	var time = 0,
		dt = 0.5,
		distances = {};
	
	var earthmoon = arrayOfCelestialBodies[0],
		moon = earthmoon.getBody1(),
		earth = earthmoon.getBody2(),
		apollo = arrayOfCelestialBodies[1];
	
	function setInteractions() {
		apollo.setInteractingBodies([earth, moon]);
	};
	
	function setDeltaTime(deltaT) {
		dt = deltaT;
	};
	
	function updateCelestialSystem() {
		time = time + dt;
		
		earthmoon.move(dt);
		apollo.move(dt);
		
		distances = {
			earthapollo: calculateDistance(earth.posX, earth.posY, apollo.getPosX(), apollo.getPosY()),
			earthmoon: calculateDistance(earth.posX, earth.posY, moon.posX, moon.posY),
			moonapollo: calculateDistance(moon.posX, moon.posY, apollo.getPosX(), apollo.getPosY()),
		};
	};
	
	function calculateDistance(x1, y1, x2, y2) {
		return Math.sqrt( (x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2) );
	};
	
	return {
		getTime: function() {return time;},
		getDistances: function() {return distances;},
		setDeltaTime: setDeltaTime,
		setInteractions: setInteractions,
		updateCelestialSystem: updateCelestialSystem,
		moon: moon,
		earth: earth,
		apollo: apollo,
	};
}


function View(board1, model, init) {
	var arrowScale = init.s,
		pathNumberOfPoints = init.ds;
	
	board1.createElement('circle',[[function() {return model.earth.posX;}, 
	                                function() {return model.earth.posY;}], model.earth.R], 
					               {strokeColor:'blue', fillColor:'blue', strokeWidth:2, fillOpacity:0.5, fixed:true}); 
	
	board1.createElement('circle',[[function() {return model.moon.posX;}, 
	                                function() {return model.moon.posY;}], model.moon.R], 
					               {strokeColor:'gray', fillColor:'gray', strokeWidth:2, fillOpacity:0.5, fixed:true});

	board1.create('curve', [model.earth.orbitData[0], model.earth.orbitData[1]], {strokeColor:"gray", dash:0});
	board1.create('curve', [model.moon.orbitData[0], model.moon.orbitData[1]], {strokeColor:"gray", dash:0});
	
	var punkt = board1.create('point',[function() {return model.apollo.getPosX();}, 
	                                   function() {return model.apollo.getPosY();}], 
					                  {name:'', withLabel:false, fixed:true, size:0.1, color:'red'}),
		tempPunkt = board1.create('point',[function() {return model.apollo.getPosX() + arrowScale*model.apollo.getVelX();}, 
                                           function() {return model.apollo.getPosY() + arrowScale*model.apollo.getVelY();}], 
                                          {name:'', withLabel:false, fixed:true, visible:false});
    
    board1.create('arrow', [punkt,tempPunkt], {name:'', withLabel:false, strokeColor:'black', strokeWidth:1});

    var apolloPathDataList = [[model.apollo.getPosX()], [model.apollo.getPosY()]];
	board1.create('curve', [apolloPathDataList[0], apolloPathDataList[1]], {strokeColor:'blue', dash:1});
	
	function runAnimation(interval) {
		model.setDeltaTime(0.25);
		
		animate = setInterval(function() {
			if(isMoving){
			    updateModel();
			    updatePosData();
    			displayDynamicOutput();
    			
    			board1.update();
    		}
		}, interval); 
	};
    
	function updateModel() {
		var step = simspeed*650;
	    for (var i = 1 ; i <= step ; i++) {
	    	model.updateCelestialSystem();
			if ( (model.getDistances().earthapollo < model.earth.R) || (model.getDistances().moonapollo < model.moon.R) ) {
				isMoving = false;
			}
	    }	
	};
	
	function updatePosData() {
		addToRestrictedArray(apolloPathDataList[0], model.apollo.getPosX());
		addToRestrictedArray(apolloPathDataList[1], model.apollo.getPosY());
	};
	
	function addToRestrictedArray(arrayOfPoints, number) {
		var arrLength = arrayOfPoints.length;
		
		if (arrLength == pathNumberOfPoints) {
			for (var i = 0 ; i < (arrLength - 1) ; i++) {
				arrayOfPoints[i] = arrayOfPoints[i+1];
			}
			arrayOfPoints.pop();
		}
		
		arrayOfPoints.push(number);
	};
	
	function displayDynamicOutput() {
		document.getElementById('t').value = Math.round(model.getTime());
		document.getElementById('tdni').value = (model.getTime()/60.0/60.0/24.0).toFixed(2);
		document.getElementById('v').value = model.apollo.getVel().toFixed(4);
		document.getElementById('r1').value = Math.round(model.getDistances().earthmoon);
		document.getElementById('r2').value = Math.round(model.getDistances().earthapollo);
		document.getElementById('r3').value = Math.round(model.getDistances().moonapollo);
	};
	
    return {
    	runAnimation: runAnimation,   	
    };
}


function startStopAnimation() {
	if(isMoving){
		isMoving = false;
	} else {
		isMoving = true;	
	}
}


function GetSelectedRadioItem(obj) {
	if (obj.value == "slower") {
		simspeed = 1;
	} else if (obj.value == "normal") {
		simspeed = 8;
	} else if (obj.value == "faster") {
		simspeed = 16;
	}	
}


function resetAnimation() { 
    JXG.JSXGraph.freeBoard(brd1);
    clearInterval(animate); 
	main();
}


function main() {
	JXG.Options.text.fontSize = 10; 
	JXG.Options.axis.strokeColor = '#949494'; 
	JXG.Options.text.strokeColor = '#949494'; 
	JXG.Options.zoom.wheel = true;
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-150000, 50000, 590000, -320000], axis:true,grid:false, showCopyright:false}); 
	
	var init = {
		theta0: 1*document.getElementById('theta0').value,
		alpha0: 1*document.getElementById('alpha0').value,
		phi0: 1*document.getElementById('phi0').value,
		h0: 1*document.getElementById('h0').value,
		v0: 1*document.getElementById('v0').value,
		s: 1*document.getElementById('s').value,
		ds: 1*document.getElementById('ds').value,
	};

	var earth = {
		GM: 0.3986e6,
		M: 5.9736e24,
		R: 6371,
		posX: 0,
		posY: 0,
		orbitData: [],
	};

	var moon = {
		GM: 0.0049e6,
		M: 0.07349e24,
		R: 1737,
		posX: 0,
		posY: 0,
		orbitData: [],
	};
	
	var moonOrbit = {
		a: 384400,
		e: 0.0549,
		theta0: 1*document.getElementById('theta0').value,	
	};
	
	var	earthMoonModel = new TwoBodyProblem(moon, earth, moonOrbit);		
	
	var phiRad0 = Math.PI*init.phi0/180.0,
		x = (earth.R + init.h0)*Math.cos(phiRad0) + earthMoonModel.getBody2().posX,
		y = (earth.R + init.h0)*Math.sin(phiRad0) + earthMoonModel.getBody2().posY;
	
	var beta = init.alpha0 + 90 - init.phi0,
		betaRad = Math.PI*beta/180.0,
		velx = -init.v0*Math.cos(betaRad),
		vely = init.v0*Math.sin(betaRad);
	
	var apolloModel = new CelestialBodyModel(0, 0, [x, y], [velx, vely]);
	
	var ukladTrzechCial = new CelestialSystemModel([earthMoonModel, apolloModel]);
	ukladTrzechCial.setInteractions();
	
	var view = new View(brd1, ukladTrzechCial, init);
	view.runAnimation(25);
	
}




