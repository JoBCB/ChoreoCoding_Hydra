/*<meta content=" movement , scores , scripts, computer, programming, bodies" name="keywords">
<meta content="live coding web performance" name="description">
<meta name="author" content="Joana Chicau">
<title>  choreo-graphic-coding </title>*/

// HYDRA // 'cntr' + 'shift' + 'enter' — runs all the code


s0.initScreen()
src(s0)
// insert code here
.out()

// simple smooth
.scrollX(0, 0.01)
.kaleid(4)

// wild kaleid
.scale(5)
.rotate(0.1,1)
.kaleid(25)

// wilder
pattern = () => osc(900, 0).kaleid(100).scale(1, 0.4)

// simple shape trasition
.diff(shape(6,1.1,0.01))
.layer(shape(2).color(1,1,1,({time})=>Math.sin(time*2)))

//scrolling
.scrollX(1,0.1)
.scrollY(10,0.1)
.scrollY(0, ({time}) => Math.sin(time*0.05)*0.05 )

// shake it / lines
.modulate(noise(()=> a.fft[1]*10 +0.01).scale(5,0.1))
.add(shape(2).color(2,2,2).scale(0.006).rotate(0.000001))
.modulate(noise(()=> a.fft[1]*10 +0.01).scale(5,0.1))

// more lines
.add(shape(2).color(2,2,2).scale(0.006).rotate(0.000001))
.modulate(noise(()=> a.fft[1]*10 +0.01).scale(5,0.1))


// image inverted
.color(-1,-1,-1) 
// basic colour changing
solid([1,0,0],[0,1,0],[0,0,1],1)

// bouncing repeat
.repeat(1,5)
.repeatY( ({time})=>Math.sin(time/2)*50)
// add below around and around
.rotate(1,()=> a.fft[3]*1 +0.01)
.rotate(0.2,0.9) // second value is speed


// fast tempo
s0.initScreen()
src(s0)
  .scrollX(0, ({time}) => Math.sin(time*0.05)*0.05 )
  .scrollY(0, ({time}) => Math.sin(time*0.01)*-0.07 )
  .pixelate([5,2,10],[15,8])
  .scale(0.15)
  .modulate(noise(1,0.25))
.out()


// GOOGLE MAPS AND SEARCH
function breathe_in () {
	document.querySelector("#widget-zoom-in").click();
}
//setInterval("breathe_in ()",4000)

function breathe_out () {
	document.querySelector("#widget-zoom-out").click();
}
//setInterval("breathe_out ()",6000)

function matrix() {
document.querySelector(".widget-scene-canvas").style.transform="matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0)";
}

var delay="10"; //how many seconds
var count='0';
var Texts=new Array();
Texts[0]="Choreography";
Texts[1]="as a mobilising language,";
Texts[2]="words to define";
Texts[4]="space and  time";
Texts[5]="expand and contract";
Texts[6]="or remain as it seems to be.";
Texts[7]="as it seems to be.";

function Substitution (){
document.querySelector('#logo').innerHTML=Texts[count];
count++;
if(count==Texts.length){count='0';}
setTimeout("Substitution ()",delay*1000);

document.querySelector("#logocont").style.width="1000px"
document.querySelector("#logo").style.width="1000px"
document.querySelector("#logo").style.fontSize="24pt"
}
//Substitution ()

var textarray = [
"Ritualistic, repetitive",
"Simultaneously",
"A thing called a body.",
"Breathing until its enough.",
"Substitution.",
"A supermposition of rhythms",
"(variation)",
"Accumulation",
"No time for breathing." 
];

function Voices(n) {

var rannum= Math.floor(Math.random()*textarray.length);
// document.querySelector(".st").innerHTML=textarray2[rannum];
var r =document.querySelector(".g:nth-child("+n+")"),
  r = r.querySelector(".r");
r.innerHTML=textarray[rannum];
r.style.fontSize="24pt"
};

var xMax, yMax, xNeg=0, yNeg=1;

function Move() {
    window.scrollBy(5 * xNeg, 5 * yNeg);
    if(xMax == window.scrollX)xNeg = xNeg * 1;
    if(yMax == window.scrollY)yNeg = xNeg * -1;
    scrolldelay = setTimeout(Move,100);
    console.log(window.scrollY);
    xMax = window.scrollX;
    yMax = window.scrollY;
}
Move();
//clearTimeout(scrolldelay)

// - - - more

// rainbow
s0.initScreen()
src(s0)
  .mult(osc(10,0.25,1))
  .scrollY(1,0.25)
  .modulateRotate(src(o0).scale(0.5),0.125)
  .diff(src(o0).rotate([-0.05,0.05].fast(0.125)))
  .blend(s0)
.out()

// other
s0.initScreen()
src(s0)
  .modulateScale(osc(4,50,10).kaleid(100).scale(5),5,0)
  .blend(s0)
.out()

shape() // fractals
  .add(o0,0.9)
  .repeat (2.2)
