main();


/* Mnożenie liczb zespolonych. */
function multiplication(){
	var board = JXG.JSXGraph.initBoard('box1', {boundingbox: [-6, 6, 6,-6], axis:true,grid:true, showCopyright:false});
	
	var org = board.create('point', [0,0], {style:10,visible:false,fixed:true,name:' '}),
		z1 = board.create('point', [1,1], {style:4,fillColor:'blue',strokeColor:'red',name:'z1'}),
		z1x = board.create('point', [function(){return complexZmod(z1);},0],{visible:false,fixed:true}),
		z2 = board.create('point', [0.5,2], {style:4,fillColor:'blue',strokeColor:'red',name:'z2'}),
		z2x = board.create('point', [function(){return complexZmod(z2);},0],{visible:false,fixed:true});
	
	var z = board.create('point', 
		["X(z1)*X(z2)-Y(z1)*Y(z2)","X(z1)*Y(z2)+X(z2)*Y(z1)"], {style:7,fillColor:'red',strokeColor:'green',name:'z1*z2'});
		
	var zx = board.create('point', 
		[function(){return complexZmod(z);},0], {visible:false,fixed:true});	
	
	board.create('sector', [org, z1x, z1], {strokeColor:'red', color:'red'});
	board.create('sector', [org, z2x, z2], {strokeColor:'red', color:'red'});
	board.create('sector', [org, zx, z], {strokeColor:'green', color:'green'});

	board.create('text',[-5.5, 5.5, function(){return displComplex("z1 = ", z1);}], {fontSize:14});
	board.create('text',[-5.5, 5.2, function(){return displComplex("z2 = ", z2);}], {fontSize:14});
	board.create('text',[-5.5, 4.9, function(){return displComplex("z = z1 * z2 = ", z);}], {fontSize:14});
	board.create('text',[-5.5, 4.6, function(){return "fiz1 = " + (complexAngle(z1)*180/Math.PI).toFixed(2);}], {fontSize:14});
	board.create('text',[-5.5, 4.3, function(){return "fiz2 = " + (complexAngle(z2)*180/Math.PI).toFixed(2);}], {fontSize:14});
	board.create('text',[-5.5, 4.0, function(){return "fiz = " + (complexAngle(z)*180/Math.PI).toFixed(2);}], {fontSize:14});
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
	multiplication();
}
