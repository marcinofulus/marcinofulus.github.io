var isMoving = false;
var brd1, animate;
start();

// model fizyczny koralika poruszającego się po pierścieniu. Pierścień się obraca.
function PunktModel(m, pos0, U, Uprim){           
    var vel0 = 0;
    var pos = pos0;
    var vel = vel0;
    var dt = 0.01;
    var time = 0;
        
    // energia potencjalna
    var Ep = new Function("x", "var f = " + U + "; return f");
        
    
    // energia całkowita początkowa (Ek=0)
    function Ec(){
    	return Ep(pos0);
    };
    
    // przyśpieszenie
    var accel = new Function("x, v", "var f = -" + Uprim + "; return f");

    // całkowanie równań ruchu metodą RK4.
    function rk4Integration(){
    	time = time + dt;
    	
    	var x = pos;
    	var v = vel;
    	
    	var x1 = x;
    	var v1 = v;
    	var a1 = accel(x1, v1);
    	
    	var x2 = x + 0.5*v1*dt;
    	var v2 = v + 0.5*a1*dt;
    	var a2 = accel(x2, v2);

    	var x3 = x + 0.5*v2*dt;
    	var v3 = v + 0.5*a2*dt;
    	var a3 = accel(x3, v3);
    	
    	var x4 = x + v3*dt;
    	var v4 = v + a3*dt;
    	var a4 = accel(x4, v4);

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
    clearInterval(animate); 
	start();
}



function radioCheck(option) {
	var selection = "";
	
	if(option == "U1"){
		selection = document.form.U1;
	} else if(option == "U2"){
		selection = document.form.U2;
	}

	for (var i=0; i<selection.length; i++){
		if (selection[i].checked == true) {
	  		return selection[i].value;
  		}
	}
}



function selectPotential(selectedU){
	var arrayOfU = new Array();
	
	if(selectedU == "x0") {
		arrayOfU[0] = JXG.GeonextParser.geonext2JS("abs(x)");
		arrayOfU[1] = JXG.GeonextParser.geonext2JS("x/abs(x)");
	} else if(selectedU == "x2") {
		arrayOfU[0] = JXG.GeonextParser.geonext2JS("x^2");
		arrayOfU[1] = JXG.GeonextParser.geonext2JS("2*x");
	} else if(selectedU == "x3") {
		arrayOfU[0] = JXG.GeonextParser.geonext2JS("abs(x)^3");
		arrayOfU[1] = JXG.GeonextParser.geonext2JS("3*x*abs(x)");
	} else if(selectedU == "x4") {
		arrayOfU[0] = JXG.GeonextParser.geonext2JS("x^4");
		arrayOfU[1] = JXG.GeonextParser.geonext2JS("4*x^3");
	} else if(selectedU == "x5") {
		arrayOfU[0] = JXG.GeonextParser.geonext2JS("abs(x)^5");
		arrayOfU[1] = JXG.GeonextParser.geonext2JS("5*x^3*abs(x)");	
	} else if(selectedU == "x6") {
		arrayOfU[0] = JXG.GeonextParser.geonext2JS("x^6");
		arrayOfU[1] = JXG.GeonextParser.geonext2JS("6*x^5");
	} else if(selectedU == "x7") {
		arrayOfU[0] = JXG.GeonextParser.geonext2JS("abs(x)^7");
		arrayOfU[1] = JXG.GeonextParser.geonext2JS("7*x*abs(x)^5");	
	} else if(selectedU == "x32") {
		arrayOfU[0] = JXG.GeonextParser.geonext2JS("Math.pow(abs(x),0.5)^3");
		arrayOfU[1] = JXG.GeonextParser.geonext2JS("3/2*x/Math.pow(abs(x), 0.5)");		
	}
	
	return arrayOfU;
}


/* Wartości początkowe. */
function InitialValues() {
        return {
        	pos01: 1*document.getElementById('pos01').value,
        	pos02: 1*document.getElementById('pos02').value,
        	potencjal1: selectPotential(radioCheck("U1")),
        	potencjal2: selectPotential(radioCheck("U2")),
        };
};



function start(){
	JXG.JSXGraph.licenseText = "";	
	brd1 = JXG.JSXGraph.initBoard('box1', {boundingbox:[-2,2,2,-0.5], axis:true,grid:true});  
	
	init = new InitialValues();

    punkt1 = new PunktModel(1, 
    						init.pos01, 
    						init.potencjal1[0], 
    						init.potencjal1[1]);
    
	punkt2 = new PunktModel(1, 
							init.pos02, 
							init.potencjal2[0], 
							init.potencjal2[1]);
  
	// Wykresy potencjałów
    var wykresEp1 = brd1.create('functiongraph', [function(x){ return punkt1.Ep(x);}, -5, 5], {strokeColor:'red'});
    var wykresEp2 = brd1.create('functiongraph', [function(x){ return punkt2.Ep(x);}, -5, 5], {strokeColor:'green'});
    
    // Wykresy energii całkowitej
    brd1.create('functiongraph', [function(x){ return punkt1.Ec();}, -5, 5], {strokeColor:'red', strokeWidth:2, dash:1});
    brd1.create('functiongraph', [function(x){ return punkt2.Ec();}, -5, 5], {strokeColor:'green', strokeWidth:2, dash:1});
    
    // symulowane punkty
    var punkt1Brd1 = brd1.create('glider', [function(){ return punkt1.getPos();}, 0, wykresEp1], {name:'', withLabel:false, fixed:true, color:'red'});
    var punkt2Brd1 = brd1.create('glider', [function(){ return punkt2.getPos();}, 0, wykresEp2], {name:'', withLabel:false, fixed:true, color:'green'});   
  
    displayStaticOutput([punkt1, punkt2]);
    
    function updateElements(objects) {
		for (var i = 0 ; i < objects.length ; i++) {
			objects[i].prepareUpdate().update().updateRenderer(); 
		}
	};
    
    animate = setInterval(function(){
    	
    	if(isMoving){
			for (var i = 1 ; i <= 5 ; i++) {
				punkt1.rk4Integration();
				punkt2.rk4Integration();
			}
        	
        	displayDynamicOutput([punkt1, punkt2]);
        	
        	updateElements([punkt1Brd1, punkt2Brd1]);
    	}
    	
    }, 33); 
   
}

function displayStaticOutput(obj) {
    document.getElementById('E01').value = obj[0].Ep(obj[0].getPos()).toFixed(4);
	document.getElementById('E02').value = obj[1].Ep(obj[1].getPos()).toFixed(4);
}

function displayDynamicOutput(obj) {
	document.getElementById('pos01out').value = obj[0].getPos().toFixed(4);
	document.getElementById('pos02out').value = obj[1].getPos().toFixed(4);
	document.getElementById('vel01out').value = obj[0].getVel().toFixed(4);
	document.getElementById('vel02out').value = obj[1].getVel().toFixed(4);
	document.getElementById('time').value = obj[0].getTime().toFixed(2);
} 


