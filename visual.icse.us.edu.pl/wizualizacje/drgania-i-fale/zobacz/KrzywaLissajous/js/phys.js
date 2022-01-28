var brd1;
main();

function resetBoard() { 
    JXG.JSXGraph.freeBoard(brd1);
	main();
}

function main() {
	brd1 = JXG.JSXGraph.initBoard('box1', {axis:true, boundingbox: [-12.5, 10, 12.5, -10]});

	var a = 1*document.getElementById('as').value,
		b = 1*document.getElementById('bs').value,
		A = 1*document.getElementById('Ab').value,
		B = 1*document.getElementById('Bb').value,
		delta = 1*document.getElementById('delta').value;
	
	brd1.create('curve',[
	                   function(t) {return A * Math.sin(a * t + delta);},
	                   function(t) {return B * Math.sin(b * t);}, 0, 2*Math.PI], {strokeColor:'red', strokeWidth:2});
}