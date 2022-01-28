var isMoving = false,
	brd1, brd2, animate;
main();


function Model(theta0, v0, h, R) { 
    var posx = 0,
    	posy = h,
    	vel = v0,
    	thetaRad = Math.PI*theta0/180.0,
    	dt = 0.001; 
    
    function VF(p) {
    	return [p[1] - Math.cos(p[0])/p[1], -Math.sin(p[0]) - R*p[1]*p[1]];
    };
    
    function rk4Integration() {
    	var p = [thetaRad, vel],
    		k1, k2, k3, k4;

    	k1 = VF(p);
    	k2 = VF([p[0] + dt*0.5/2*k1[0], p[1] + dt*0.5/2*k1[1]]);
    	k3 = VF([p[0] + dt*0.5/2*k2[0], p[1] + dt*0.5/2*k2[1]]);
    	k4 = VF([p[0] + dt*k3[0], p[1] + dt*k3[1]]);    	
    	
    	thetaRad = thetaRad + (dt/6.0) * (k1[0] + 2*k2[0] + 2*k3[0] + k4[0]);
    	vel = vel + (dt/6.0) * (k1[1] + 2*k2[1] + 2*k3[1] + k4[1]);
    	
    	posx  = posx + vel*Math.cos(thetaRad)*dt;
        posy  = posy + vel*Math.sin(thetaRad)*dt;
    };
    
    function move() {
    	if (posy >= 0) {
    		rk4Integration();
    	} 
    };
    
    return {
    	move: move,
    	getTheta: function() {return thetaRad;},
    	getVel: function() {return vel;},
    	getPosX: function() {return posx;},
    	getPosY: function() {return posy;}, 
    };
} 


function View(board1, board2, model) {
	var urlImg = "http://visual.icse.us.edu.pl/wizualizacje/mechanika-teoretyczna/zobacz/Phugoid/img/aeroplane2.png",
		paperPlaneSize = 0.75,
		deltaShift = paperPlaneSize/2;
		
	var posList = [[model.getPosX()], [model.getPosY()]],
		phaseSpaceList = [[model.getTheta()], [model.getVel()]];
    
	var	paperPlane = board1.create('image',[urlImg, [function() {return model.getPosX() - deltaShift;}, 
	   	                                             function() {return model.getPosY() - deltaShift;}], 
	                                                [paperPlaneSize, paperPlaneSize]]);
	
    var punktBoard1 = board1.create('point',[function() {return model.getPosX();}, 
                                             function() {return model.getPosY();}], 
                                             {name:'', withLabel:false, fixed:true, visible: false}), 
        punktBoard2 = board2.create('point',[function() {return model.getTheta();}, 
                                             function() {return model.getVel();}], 
                                             {name:'', withLabel:false, fixed:true, size:4, color: "red"}),    		                          
    	curvePosBoard1 = board1.create('curve', posList, {strokeColor: "blue", dash: 1}),
    	curvePosBoard2 = board2.create('curve', phaseSpaceList, {strokeColor: "blue", dash: 1});

    var rotation = board1.create('transform', [function() {return model.getTheta();}, punktBoard1], {type:'rotate'});
    rotation.bindTo(paperPlane);    
    
    curvePosBoard1.updateDataArray = function() {
    	posList[0].push(model.getPosX());
    	posList[1].push(model.getPosY());
    	
    	this.dataX = posList[0];
    	this.dataY = posList[1];
    };
	
    curvePosBoard2.updateDataArray = function() {
    	phaseSpaceList[0].push(model.getTheta());
    	phaseSpaceList[1].push(model.getVel());
    	
    	this.dataX = phaseSpaceList[0];
    	this.dataY = phaseSpaceList[1];
    };
    
	function runAnimation(interval) {
		animate = setInterval(function() {
			if(isMoving){				
				for (var i = 1 ; i <= 50 ; i++) {
					model.move();    			
				}
				
    			updateView();
    			
    			if (model.getPosY() <= 0) {isMoving = false;}
    		}
		}, interval); 
	};
	
	function updateView() {
		updateElements([paperPlane, punktBoard1, punktBoard2, curvePosBoard1, curvePosBoard2]);
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
    JXG.JSXGraph.freeBoard(brd2);
    clearInterval(animate); 
	main();
}


function InitialValues() {
	return {
		theta: 1*document.getElementById('theta').value, 
	    v0: 1*document.getElementById('v0').value,
	    h: 1*document.getElementById('h').value,
	    R: 1*document.getElementById('R').value,
	};
}


function main() {
	brd1 = JXG.JSXGraph.initBoard('box1',{boundingbox:[-1, 8, 8,-1], axis:true,grid:false, showCopyright:false});
	brd2 = JXG.JSXGraph.initBoard('box2',{boundingbox:[-11, 11, 11,-11], axis:true,grid:false, showCopyright:false}); 
	
	var init = new InitialValues(),
		model = new Model(init.theta, 
						  init.v0, 
						  init.h,
						  init.R),
		view = new View(brd1, brd2, model);
	
	view.runAnimation(25);
}




