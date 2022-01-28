main();


/* Potęgowanie liczb zespolonych. */
function exponentiation(){
	var board = JXG.JSXGraph.initBoard('box1', {boundingbox: [-6, 6, 6,-6], axis:true, grid:true, showCopyright:false});

	var z = board.create('point', [1, 1], {style:4,fillColor:'blue',strokeColor:'red',name:'z'});
	var slider = board.create('slider',[[-5.5,-4],[-1.5,-4],[0,2,12]], {name:'n'});
	
	function power(n){
		var a = Math.pow(complexZmod(z), n)*Math.cos(n*complexAngle(z));
		var b = Math.pow(complexZmod(z), n)*Math.sin(n*complexAngle(z));

		return [a, b];
	};
	
        
    var c = board.create('curve',[
          function(n){return Math.pow(complexZmod(z), n)*Math.cos(n*complexAngle(z));},
          function(n){return Math.pow(complexZmod(z), n)*Math.sin(n*complexAngle(z));},
          0, 12],{strokeColor:'green',strokeWidth:1, dash:1});    

	var zn = board.create('point', [function(){ return power(slider.Value());}], 
									{style:7,fillColor:'red',strokeColor:'green',name:'z^n'});
	
	board.create('text',[-5.5, 5.5, function(){return displComplex("z = ", z);}], {fontSize:14});
	board.create('text',[-5.5, 5.2, function(){return displComplex("z^n = ", zn);}], {fontSize:14});
	board.create('text',[-5.5, 4.9, function(){return "|z| = " + complexZmod(z).toFixed(4);}], {fontSize:14});
	board.create('text',[-5.5, 4.6, function(){return "fi = " + (complexAngle(z)*180/Math.PI).toFixed(2);}], {fontSize:14});
}		


/* Moduł liczby zespolonej. */
function complexZmod(_z){
	return Math.sqrt(_z.X()*_z.X() + _z.Y()*_z.Y());
}


/* Kąt. */
function complexAngle(_z){
	angle = Math.atan2(_z.Y(), _z.X());
	
	if (angle < 0 ) {
		angle = 2*Math.PI - Math.abs(angle); 
	}
	
	return angle;
}


function displComplex(str, z){
	var reZ = z.X().toFixed(2);
	var imZ = z.Y().toFixed(2);
	var sign = "+";
	if(imZ<0){sign = "";}
		
	return str + reZ + sign + imZ + " i";
}


/* Main function. */
function main(){
	exponentiation();
}
