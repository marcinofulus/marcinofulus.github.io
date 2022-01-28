/*--------------------------------------------*/
/* Układ zachowawczy o jednym stopniu swobody        ver 16.10.2011        */
/*--------------------------------------------*/

var isMoving = false,
	brd1, animate;
start();

/* Model fizyczny układu zachowawczego o jednym stopniu swobody */
function PunktModel(m, pos0, U, Uprim, gamma, A, omega){           
    var vel0 = 0;
    var pos = pos0;
    var vel = vel0;
    var dt = 0.05;
    var time = 0;
        
    // energia potencjalna
    var Ep = new Function("x", "var f = " + U + "; return f");
        
    // energia kinetyczna
    function Ek(x){
    	return x*x/2;  // m = 1 
    }
    
    // energia całkowita 
    function Ec(){
    	return Ep(pos) + Ek(vel);
    };
    
    // przyśpieszenie
    var accel = new Function("x, v, t", "var f = -(" + Uprim + ") - " + gamma + "*v + (" + A + "*Math.cos(t*" + omega + ")); return f");
    
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

        pos = x + (dt/6.0)*(v1 + 2*v2 + 2*v3 + v4);
        vel = v + (dt/6.0)*(a1 + 2*a2 + 2*a3 + a4);
    }
      
    return{
    	Ep: Ep,
    	Ec: Ec,
    	rk4Integration: rk4Integration,
    	getTime: function(){ return time; },
    	getPos: function(){ return pos; },
    	getVel: function(){ return vel; }
    };
}   

// zatrzymuje i wznawia animację.
function startStopAnimation(){
	if(isMoving){
		isMoving = false;
	} else {
		isMoving = true;	
	}
}

// resetuje animację.
function resetAnimation(){ 
    JXG.JSXGraph.freeBoard(brd1);
    JXG.JSXGraph.freeBoard(brd2);
    clearInterval(animate); 
	start();
}



function potencialCheck(option) {
	var params = new Array();
	
	if(option == "U1"){
		selection = document.form.U1;
		params[1] = 1*document.getElementById('a1').value;
	} else if(option == "U2"){
		selection = document.form.U2;
		params[1] = 1*document.getElementById('a2').value;
	}

	for (var i=0; i<selection.length; i++){
		if (selection[i].checked == true) {
	  		params[0] = selection[i].value;
  		}
	}
	
	return params;
}



function selectPotential(params){
	var arrayOfU = new Array();
	
	selectedU = params[0];
	aValue = params[1];
	
	if(selectedU == "x1") {
		arrayOfU[0] = JXG.GeonextParser.geonext2JS("0.5*x^2");
		arrayOfU[1] = JXG.GeonextParser.geonext2JS("(x)");
	} else if(selectedU == "x2") {
		arrayOfU[0] = JXG.GeonextParser.geonext2JS("(0.25*x^4 - (" + aValue + ")*0.5*x^2)");
		arrayOfU[1] = JXG.GeonextParser.geonext2JS("(x^3 - (" + aValue + ")*x)");
	} else if(selectedU == "x3") {
		arrayOfU[0] = JXG.GeonextParser.geonext2JS("cos(x)");
		arrayOfU[1] = JXG.GeonextParser.geonext2JS("(-1)*sin(x)");
	} else if(selectedU == "x4") {
		arrayOfU[0] = JXG.GeonextParser.geonext2JS("(-x^3 + x)");
		arrayOfU[1] = JXG.GeonextParser.geonext2JS("(-3*x^2 + 1)");
	} 
	
	return arrayOfU;
}

/* Wartośc początkowe dla punktów p1 i p2 */
function InitialValues(){
	return {
		p1: {
			pos: 1*document.getElementById('pos01').value,
			potencjal: selectPotential(potencialCheck("U1")),
			gamma: 1*document.getElementById('gamma1').value,    
			A: 1*document.getElementById('bigA1').value,    
			omega: 1*document.getElementById('omega1').value,
		},
		p2: {
			pos: 1*document.getElementById('pos02').value,
			potencjal: selectPotential(potencialCheck("U2")),
			gamma: 1*document.getElementById('gamma2').value,    
			A: 1*document.getElementById('bigA2').value,    
			omega: 1*document.getElementById('omega2').value,			
		},
    };     
};


function start(){
	JXG.JSXGraph.licenseText = "";	
	brd1 = JXG.JSXGraph.initBoard('box1', {boundingbox:[-2,2,2,-0.5], axis:true,grid:true});  
	brd2 = JXG.JSXGraph.initBoard('box2', {boundingbox:[-1.5,1.5,1.5,-1.5], axis:true,grid:true});  
	
	var init = new InitialValues();

    var punkt1 = new PunktModel(1, 
    		init.p1.pos, 
    		init.p1.potencjal[0], 
    		init.p1.potencjal[1], 
    		init.p1.gamma, 
    		init.p1.A, 
    		init.p1.omega);   
    
    var punkt2 = new PunktModel(1, 
    		init.p2.pos, 
    		init.p2.potencjal[0], 
    		init.p2.potencjal[1], 
    		init.p2.gamma, 
    		init.p2.A, 
    		init.p2.omega); 
  
    // wykres potencjału
    var wykresEp1 = brd1.create('functiongraph', [function(x){return punkt1.Ep(x);}, -10, 10], {strokeColor:'red'});
    var wykresEp2 = brd1.create('functiongraph', [function(x){return punkt2.Ep(x);}, -10, 10], {strokeColor:'green'});
    
    // pozioma linia - energia całkowita
    brd1.create('functiongraph', [function(x){return punkt1.Ec();}, -10, 10], {strokeColor:'red', strokeWidth:2, dash:1});
    brd1.create('functiongraph', [function(x){return punkt2.Ec();}, -10, 10], {strokeColor:'green', strokeWidth:2, dash:1});
    
    // dwa punkty (czerwony i zielony) na 'brd1'
    brd1.create('glider', [function(){return punkt1.getPos();}, 0, wykresEp1], {name:'Punkt 1', color:'red', fixed:true});
    brd1.create('glider', [function(){return punkt2.getPos();}, 0, wykresEp2], {name:'Punkt 2', color:'green', fixed:true});   

	var posList1 = new Array();
    var velList1 = new Array();
    brd2.create('curve', [posList1, velList1], {strokeColor:'red'});
    brd2.create('point',[function(){return punkt1.getPos();}, function(){return punkt1.getVel();}], {name:'', color:'red', fixed:true});
    
    var posList2 = new Array();
    var velList2 = new Array();
    brd2.create('curve', [posList2, velList2], {strokeColor:'green'});
    brd2.create('point',[function(){return punkt2.getPos();}, function(){return punkt2.getVel();}], {name:'', color:'green', fixed:true});

	
    animate = setInterval(function(){   	
    	if(isMoving){
    		punkt1.rk4Integration();
    		punkt2.rk4Integration();
    	
        	posList1.push(punkt1.getPos());
            velList1.push(punkt1.getVel());

            posList2.push(punkt2.getPos());
            velList2.push(punkt2.getVel());         
            
            brd1.update();
            brd2.update();
        	
            displayOutputParameters([punkt1, punkt2]);
    	}
    },25);   
}

function displayOutputParameters(obj){
    document.getElementById('E1').value = obj[0].Ec().toFixed(4);
	document.getElementById('E2').value = obj[1].Ec().toFixed(4);
    
 	document.getElementById('pos1out').value = obj[0].getPos().toFixed(4);
	document.getElementById('pos2out').value = obj[1].getPos().toFixed(4);
	
	document.getElementById('vel1out').value = obj[0].getVel().toFixed(4);
	document.getElementById('vel2out').value = obj[1].getVel().toFixed(4);  
}


