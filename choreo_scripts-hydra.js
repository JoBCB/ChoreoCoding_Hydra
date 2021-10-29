/*<meta content=" movement , scores , scripts, computer, programming, bodies" name="keywords">
<meta content="live coding web performance" name="description">
<meta name="author" content="Joana Chicau">
<title>  choreo-graphic-coding </title>*/

// HYDRA // 'cntr' + 'shift' + 'enter' — runs all the code
// CTRL-Enter: run a line of code
// ALT-Enter: run a block


//   __ _  ___   ___   __| |   _____   _____ _ __ (_)_ __   __ _ 
//  / _` |/ _ \ / _ \ / _` |  / _ \ \ / / _ \ '_ \| | '_ \ / _` |
// | (_| | (_) | (_) | (_| | |  __/\ V /  __/ | | | | | | | (_| |
//  \__, |\___/ \___/ \__,_|  \___| \_/ \___|_| |_|_|_| |_|\__, |
//  |___/                                                  |___/ 


// on hyper
// figlet -f acrobatic  "is"
// catwalk
// isometric2


src(o0)

// RGB line > to b&w waves

// shapes
// solid([1,0,0],[0,1,0],[0,0,1],1)
// shape(4,0.4).repeat(2,50) // trans squares
// shape()  // triangle
// shape(20,0.1,0.01) // circles
//   .scale(() => Math.sin(time)*5) // circles
//  .repeat(() => Math.sin(time)*3) // circles

// shake it lines
.add(shape(2).color(2,2,2).scale(0.006).rotate(0.000001)) // change values to waves or remove line
// .scale(1).rotate(0.1,1).scrollY(1, 0.1)
.modulate(noise(()=> a.fft[1]*10 +0.01).scale(5,0.1)) // change middle > wavy
//  .modulate(noise(2,0)) // with circles

// fractals
//  .add(o0,0.9)
//  .repeat (2.2)
//.scrollX(0, 0.01)

// smooth kaleid

// .rotate(0.1,1) // speeds up
// .scrollX(0, 0.01).kaleid(4)

// wilder kaleid
.scale(5).rotate(0.1,1).kaleid(25)

// wilder
pattern = () => osc(900, 0).kaleid(100).scale(1, 0.4)

.out()


// screenshare
// mask rgg

s0.initScreen()

src(s0)
  .scrollX(0, ({time}) => Math.sin(time*0.05)*0.05 )
  .layer(osc(30,0.1,2).mask(shape(4)))
.out()


// blend wavy
s0.initScreen()

src(s0)
.scale(0.5)
.modulateScale(osc(3,0.5),-0.6)
.blend(s0)
.out()

// blend wavy 

s0.initScreen()
src(s0)

.modulate(osc(150,0,15))
.out(o1)

src(o1)
.modulateKaleid(voronoi(() => Math.sin(time)*3,0.1,0.01),() => Math.sin(time)*2)
.scale(() => Math.sin(time)*3)
.out(o2)

render(o2)

.blend(o0)
out()



// pixelate fast tempo
s0.initScreen()
src(s0)
  .scrollX(0, ({time}) => Math.sin(time*0.05)*0.05 )
  .scrollY(0, ({time}) => Math.sin(time*0.01)*-0.07 )
  .pixelate([5,2,10],[15,8])
  .scale(0.15)
  .modulate(noise(1,0.25))
.out()



// next tab 
// BREATHING
function breathing() {
    var zooming = document.querySelector("body");
    currentScale = 1;
    currenttime = setInterval(function() {
    zooming.style.transform="scale(" + currentScale + ")";
    currentScale = Math.random() * 5
    }, 800); 
} 

// breathing()


function noBreathing() { 
    clearInterval(currenttime); 
} 


document.querySelector("").style.transform="matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0)";

document.querySelector("#stage02").style.filter="opacity(0.2)";


// dancingText()


function changeGrounds (){
  document.querySelector("body").classList.add('bodymove');
}

// changeGrounds ()


// back to hydra

// smooth ending
s0.initScreen()
src(s0)

voronoi(1,-0.1,10)
.add(osc(1,0,1)).kaleid(50)
.scale(1,1,2).out(o1)
src(o1).mult(src(s0).modulateRotate(o1,10), -0.5)
.out(o0)

.out()

// ENDING back to RGB

s0.initScreen()
src(s0)

.color(-1,-1,-1)

solid([1,0,0],[0,1,0],[0,0,1],1)
.blend(s0)

.out()





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


// simple shape trasition
shape()
.diff(shape(6,1.1,0.01))
.layer(shape(2).color(1,1,1,({time})=>Math.sin(time*2)))
.scrollY(0, ({time}) => Math.sin(time*0.05)*0.05 )

.out()

// bw shapes overlay
s0.initScreen()

src(s0)
shape(1,1)
  .mult(voronoi(10000,2) //micro or macro
  .blend(o0).luma())
  .add(shape(10,1,0.01)
       .rotate(1,1).mult(voronoi(1000,1).luma())
       .rotate(1.5)).scrollX([0.1,-0.0625,0.005,0.00001],0)
  .scrollY([0.1,-0.0625,0.005,0.0001],0)
.blend(s0)
.out()

// bouncing repeat
.repeat(1,5)
.repeatY( ({time})=>Math.sin(time/2)*50)
// add below around and around
.rotate(1,()=> a.fft[3]*1 +0.01)
.rotate(0.2,0.9) // second value is speed

// blend simple water

osc(5,.1).modulate(noise(1),.22).diff(o0)
    .modulateScrollY(osc(2).modulate(osc().rotate(),.11))
  .scale(1).color(0.9,1.014,1)
.blend(s0)
.out()


