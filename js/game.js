

 var canvas=document.getElementById('canvas');
 var ctx=canvas.getContext('2d'); 
 var cursorX=0;
 var cursorY=0;  
 
 var DrawTimer=setInterval(draw,10);
 
document.addEventListener("mousemove",mouseMoveHandler,false);


function mouseMoveHandler(e){
	cursorX= e.clientX- canvas.offsetLeft;
	 cursorY=e.clientY- canvas.offsetTop;
	//var relativeX = e.clientX - canvas.offsetLeft;
	//console.log(e.clientY);

};

function DrawEyes(x,y,eyeSize,lineSize,eyeBallSize,pupilSize,eyeBallColor,pupilColor){

ctx.beginPath();
ctx.arc(x,y,eyeSize*2,0,Math.PI*2,false);
ctx.strokeStyle="rgb(50,50,50)";
ctx.lineWidth=lineSize;
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();
ctx.save();
ctx.clip();
ctx.closePath();

var eyeballOffsetX=((cursorX-x)/x)*eyeSize/2;
var eyeballOffsetY=((cursorY-y)/y)*eyeSize/2;  

if (cursorX>x) {
	eyeballOffsetX=((cursorX-x)/(canvas.width-x))*eyeSize/2;
}
if (cursorY>y) {
	eyeballOffsetY=((cursorY-y)/(canvas.height-y))*eyeSize/2;  
}

ctx.beginPath();
ctx.arc(x+eyeballOffsetX,y+eyeballOffsetY,eyeBallSize,0,Math.PI*2);
ctx.fillStyle=eyeBallColor;
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(x+eyeBallSize/2+eyeballOffsetX,y-eyeBallSize/2+eyeballOffsetY,pupilSize,0,Math.PI*2);
ctx.fillStyle=pupilColor;
ctx.fill();
ctx.closePath();
ctx.restore();

}
 function draw() {
 	// body...
 	ctx.clearRect(0,0,canvas.width,canvas.height);

 	 
 	DrawEyes(180,200,8,3,10,2,"black","white");
 	DrawEyes(295,200,8,3,10,2,"black","white");

 	DrawEyes(225,110,3,2,3,1,"black","white");
 	DrawEyes(245,110,3,2,3,1,"black","white");

 	DrawEyes(225,380,3,2,3,1,"black","white");
 	DrawEyes(250,381,3,2,3,1,"black","white");
 

 }


