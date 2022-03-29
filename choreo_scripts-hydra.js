/*<meta content=" movement , scores , scripts, computer, programming, bodies" name="keywords">
<meta content="live coding web performance" name="description">
<meta name="author" content="Joana Chicau">
<title>  choreo-graphic-coding </title>*/

// HYDRA // 'cntr' + 'shift' + 'enter' — runs all the code
// CTRL-Enter: run a line of code
// ALT-Enter: run a block


+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+
|o|l|a| |p|e|q|u|e|n|o| |m|u|n|d|o|!|
+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+


//search youtube — webcam live stream online
// Hastings Pier Webcam and English Channel LIVE HD?

function newHTMLskin () {
    var divs = document.querySelectorAll('div'), i;
      for (i = 0; i < divs.length; ++i) {
      divs[i].style.background = "linear-gradient(" + Math.floor(Math.random() * 1000) + "deg, Aquamarine, MistyRose, Blue, Plum, Red)";
      }
}
newHTMLskin()

function breathing() {
  var zooming = document.querySelectorAll('.badge-style-type-live-now'), i;
  currentScale = 1;
  currenttime = setInterval(function() {
        for (i = 0; i < zooming.length; ++i) {
          zooming[i].style.transform="scale(" + currentScale + ")";
          zooming[i].style.background="blue";
          currentScale = Math.random() * 10;
        }
    }, 800);
}
breathing()

function noBreathing() {
    clearInterval(currenttime);
}

// const newtext = document.createElement('div');
// newtext.classList.add('showtext');
// document.getElementById('content').append(newtext);

// #gs_lc50

    var delay="0";
    var count='0';
    var Texts=new Array();
      Texts[0]="nova coreografia";
      Texts[1]="set the movement";
      Texts[2]="words to define space - time";
      Texts[3]="(  expand  ノ) )contract(()";
      Texts[4]="the space of the body";
      Texts[5]="the body in space";
      Texts[6]="o movimento to corpo";
      Texts[7]="";
      Texts[8]="refuse the movement";
      Texts[9]="anular o moviment";
      Texts[10]="";
      Texts[11]="movement undefined";
      Texts[12]="o movimento sem definição";
      Texts[13]="";
      Texts[14]="choreography is the organization of tensions";
      Texts[15]="and counter -  tensions ";
      Texts[16]="counter - choreographies";
      Texts[17]="BREATHE";
      Texts[18]="continua a respirar"

    function dancingText(){
      document.querySelector('body').innerHTML = Texts[count];
      count++;
      if(count==Texts.length){count='0';}
      setTimeout("dancingText()",10000);
    }

// dancingText()



// dancingVideo()
// dance.push('https://www.youtube.com/embed/BCQnrwkTY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1');


// screenshare & mask rgb
s0.initScreen()
a.setBins(2);
a.show();
src(s0)
// .scrollX(0, ({time}) => Math.sin(time*0.02)*0.05 )
// .layer(osc(1,1,6).mask(shape(3)))
// FLUID
//.modulateKaleid(osc(12,0.05,0),1)
// .luma (0.94)
//.rotate(4, 0.1,0)
// FLUID noise
//.modulate(noise(6),.22)
//  	.modulateScrollY(osc(2).modulate(osc().rotate(),.11))
//	.scale(.2)
// wavy screens
// .modulateRepeat(osc(2),1, 2, 4, 3)
//.blend(s0)
// screen kaleid
//.modulateKaleid(voronoi(() => Math.sin(time)*1,1,1),() => Math.sin(time)*1)
//.scale(() => Math.sin(time)*2)
// voronoi(1,-1,10)
  //.add(osc(1,0,1)).kaleid(50)
  //.scale(20,10,2)
// intensify
  //.repeat(()  => a.fft[0]*2)
  //.scale(()=> a.fft[1]*1)
// crazyKALEID
// .scale(0.5).rotate(1,1).kaleid(50)
// FLUID blobs
//.mask( noise(0.2,0.5).colorama(2).luma(0.25).thresh(0.5))
.out()

// .☆.*･*.♪｡･ﾟ･｡.☆.* ﾉ”ｇｏｏｄ ｎｉｇｈｔ♪ ☆.｡.:*･ﾟ ☆ ҉ ◢▅◣Ξ◥▅◤Ξ◢▅◣Ξ◥▅◤ ҉ ★ ミ☆☆ keep on dancing!☆☆彡
