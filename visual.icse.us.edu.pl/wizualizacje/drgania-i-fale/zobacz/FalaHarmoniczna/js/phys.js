var brd1;
main();

function resetBoard() { 
    JXG.JSXGraph.freeBoard(brd1);
	main();
}


function main() {
	brd1 = JXG.JSXGraph.initBoard('box1', {axis:true, boundingbox: [-10, 5, 10, -5], showCopyright:false});

	var A = 1*document.getElementById('A').value,
		lambda = 1*document.getElementById('lambda').value,
		omega = 1*document.getElementById('omega').value,
		delta = 1*document.getElementById('delta').value;

	brd1.suspendUpdate();
	var t = brd1.create('slider',[[1,4],[8,4],[0,0,15]],{name:'t'}); 

	brd1.create('curve',[function(x) {return x;},
	                     function(x) {return A * Math.sin(2*Math.PI/lambda*x - omega*t.Value() + delta);}, -100, 100], {strokeColor:'red', strokeWidth:2});
	brd1.unsuspendUpdate();

}








