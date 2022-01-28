var brd1, brd2, brd3;
main();

function resetBoard() { 
    JXG.JSXGraph.freeBoard(brd1);
    JXG.JSXGraph.freeBoard(brd2);
    JXG.JSXGraph.freeBoard(brd3);
	main();
}

function main() {
	brd1 = JXG.JSXGraph.initBoard('box1', {axis:true, boundingbox: [-10, 5, 10, -5], showCopyright:false});
	brd2 = JXG.JSXGraph.initBoard('box2', {axis:true, boundingbox: [-10, 5, 10, -5], showCopyright:false});
	brd3 = JXG.JSXGraph.initBoard('box3', {axis:true, boundingbox: [-20, 5, 20, -5], showCopyright:false});

	var A1 = 1*document.getElementById('A1').value,
		omega1 = 1*document.getElementById('omega1').value,
		delta1 = 1*document.getElementById('delta1').value;
	
	var A2 = 1*document.getElementById('A2').value,
		omega2 = 1*document.getElementById('omega2').value,
		delta2 = 1*document.getElementById('delta2').value;;
	
	brd1.create('curve',[function(t) {return t;},
	                     function(t) {return A1 * Math.cos(omega1 * t + delta1);}, -100, 100], {strokeColor:'red', strokeWidth:2});
	
	brd2.create('curve',[function(t) {return t;},
	                     function(t) {return A2 * Math.cos(omega2 * t + delta2);}, -100, 100], {strokeColor:'blue', strokeWidth:2});
	
	brd3.create('curve',[function(t) {return t;},
	                     function(t) {return A1 * Math.cos(omega1 * t + delta1) + A2 * Math.cos(omega2 * t + delta2);}, -100, 100], {strokeColor:'brown', strokeWidth:2});
}