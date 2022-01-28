main();


/* Pierwiastkowanie liczb zespolonych. */
function nthroot(){
	var board = JXG.JSXGraph.initBoard('box1', {boundingbox: [-6, 6, 6,-6], axis:true,grid:true, showCopyright:false}),
		slider = board.create('slider',[[-5.5,-4],[-1.5,-4],[1,3,12]], {name:'n', snapWidth:1}),
		org = board.create('point', [0,0], {visible:false,fixed:true}),
		z = board.create('point', [1.2,2.1], {style:4,fillColor:'blue',strokeColor:'red',name:'z'}),
		solution =  new Solution(board);
	
	n_old = 0;
	setInterval(function(){
		n_new = slider.Value();
		
		if(n_old != n_new){
			solution.cleanAll();
			solution.update(z, slider.Value());
			board.create('circle',[org, solution.updateCircle()], {strokeWidth:1, dash:2});
			n_old = n_new;
		} 
	}, 1000);

	board.create('text',[-5.5, 5.5, function(){return displComplex("z = ", z);}], {fontSize:14}); 
}		


function Solution(_board){
	var root = new Array();
	var n_val = 0;
	
	function update(z, n){
		for(var i=0 ; i<n ; i++){
			root[i] = new ComplexRoot(z, i, n, _board);
			root[i].addPoint();
			n_val = n;
		}
	}	
	
	function cleanAll(){
		if(n_val != 0){
			for(var i=0 ; i<n_val ; i++){
				root[i].delSol(_board);	
			}
		}	
	}	
	
	function updateCircle(){
		if(n_val != 0){
			return root[0].getPoint();	
		}	
	}	

	return{
		update: update,
		updateCircle: updateCircle,
		cleanAll: cleanAll,
	};	
}	


function ComplexRoot(z, k, n, _board){
	var a = function(){return Math.pow(complexZmod(z), 1/n)*Math.cos((complexAngle(z) + 2*k*Math.PI)/n);};
	var b = function(){return Math.pow(complexZmod(z), 1/n)*Math.sin((complexAngle(z) + 2*k*Math.PI)/n);};
	var zn;
	var linezn;
	var org = _board.create('point', [0,0], {visible:false,fixed:true});	
	
	function addPoint(){
		zn = _board.create('point', 
			[a, b], {style:7,fillColor:'red',strokeColor:'green',name:'z_' + k });
		linezn = _board.create('segment', [zn,org], {strokeColor:'green',strokeWidth:1, dash:1});	
	}	
	
	function getPoint(){
		return zn;	
	};	
	
	function delSol(_board){
		_board.removeObject(zn);	
		_board.removeObject(linezn);
		_board.removeObject(org);
	};	
	
	return{
		getPoint: getPoint,
		addPoint: addPoint,
		delSol: delSol,
	};	
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
	nthroot();
}
