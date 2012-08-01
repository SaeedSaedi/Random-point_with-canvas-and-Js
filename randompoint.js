window.onload = function(){
	var canvas=document.getElementById('box');
	var ctx=canvas.getContext('2d');

	function rnd(a,b){
		return Math.floor(Math.random()*(b-a+1))+a;	
	}
	function rndColor(){
		var c="#"
		for(i=0;i<6;i++){
			c += rnd(0,15).toString(16);
		}
		return c;
	}

	var run = function(){
		var x=rnd(0,1000);
		var y=rnd(0,750);
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x-1,y+1);
		ctx.strokeStyle=rndColor();
		ctx.fillStyle=rndColor();
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
	setInterval(run,100);
}