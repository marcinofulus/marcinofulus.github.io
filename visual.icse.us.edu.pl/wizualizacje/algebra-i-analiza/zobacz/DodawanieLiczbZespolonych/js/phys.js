main();


function addition(){
	var board = JXG.JSXGraph.initBoard('box1', {boundingbox: [-6, 6, 6,-6], axis:true,grid:true, showCopyright:false});
	
	// variables
	var org = board.create('point', [0,0], {style:10,visible:true,fixed:true,name:' '}),
	    z1 = board.create('point', [3,1], {style:5,fillColor:'blue',name:'z1'}),
	    z2 = board.create('point', [1,2], {style:5,fillColor:'blue',name:'z2'}),
	    z = board.create('point', ["X(z1)+X(z2)","Y(z1)+Y(z2)"], {style:7,fillColor:'blue',name:'z1+z2'});

	// arrows
	board.create('arrow', [org,z1], {strokeColor:'blue'});
	board.create('arrow', [org,z2], {strokeColor:'blue'});
	board.create('arrow', [org,z], {strokeColor:'red'});
	board.create('arrow', [z1,z], {strokeColor:'blue',strokeWidth:1,dash:1});
	board.create('arrow', [z2,z], {strokeColor:'blue',strokeWidth:1,dash:1});

	board.create('text',[-5.5, 5.5, function(){return displComplex('z_1 = ', z1);}], {fontSize:14});
	board.create('text',[-5.5, 5.2, function(){return displComplex('z_2 = ', z2);}], {fontSize:14});
	board.create('text',[-5.5, 4.9, function(){return displComplex('z = z1 + z2 = ', z);}], {fontSize:14});
}		


function displComplex(str, z){
	var reZ = z.X().toFixed(2),
	    imZ = z.Y().toFixed(2),
	    sign = "+";
	
	if(imZ<0){sign = "";}
		
	return str + reZ + sign + imZ + " i";
}


/* Main function. */
function main(){
	JXG.Options.text.useMathJax = true;
	addition();
}
