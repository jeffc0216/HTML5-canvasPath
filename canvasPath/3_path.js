function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext("2d");
	canvas.strokeStyle = 'red'; //線的顏色
	//canvas.fillStyle = 'blue'; //填滿的顏色

	canvas.moveTo(50,50);
	canvas.lineTo(150,200);
	canvas.lineTo(250,100);
	canvas.lineTo(300,180);
	canvas.closePath();

	canvas.stroke(); //畫線
	//canvas.fill(); //填滿

}


window.addEventListener('load', doFirst, false);