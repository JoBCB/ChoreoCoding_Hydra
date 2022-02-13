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


//search youtube — webcam live stream online 
function breathing () {
    var divs = document.querySelectorAll('div'), i;
    currenttime = setInterval(function() {
      for (i = 0; i < divs.length; ++i) {
      divs[i].style.background = "linear-gradient(" + Math.floor(Math.random() * 1000) + "deg, Aquamarine, MistyRose, Blue, Plum, Red)";
      divs[i].style.transform = "skewX " + Math.floor(Math.random() * 360) + "deg"; 
      }
    }, 800); 
}
breathing()

// const newtext = document.createElement('div');
// newtext.classList.add('showtext');
// document.getElementById('primary').append(newtext);

    var delay="0";
    var count='0';
    var Texts=new Array();
      Texts[0]="new choreography";
      Texts[1]="set the movement";
      Texts[2]="words to define space - time";
      Texts[3]="( — expand - )  ) contract (　ヽ(　　　)ノ";
      Texts[4]="the space of the body";
      Texts[5]="the body in space";
      Texts[6]="";
      Texts[7]="moving you";
      Texts[8]="refuse the movement";
      Texts[9]="BREATHE";
      Texts[10]="";
      Texts[11]="movement undefined";
      Texts[12]="breathing in and out...";
      Texts[13]="respirar ... e ocupar o espaço"; //"respirar ... e ocupar o espaço";
      Texts[14]="choreography is the organization of tensions";
      Texts[15]="and counter -  tensions ";
      Texts[16]="counter - choreographies";
      Texts[17]="";
      Texts[18]="continue b r e a t h i n g";

    function dancingText(){
      document.querySelector('#stage02').innerHTML = Texts[count];
      count++;
      if(count==Texts.length){count='0';}
      setTimeout("dancingText()",20000); // should take 4min;

      console.log('status: dancing text   \n  \n ');
    }

// dancingText()

// dance.push('https://www.youtube.com/embed/i-BCQnrwkTY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1');


// screenshare & mask rgb
s0.initScreen()
src(s0)
  //.scrollX(0, ({time}) => Math.sin(time*0.02)*0.05 )
  //.layer(osc(30,0.1,2).mask(shape(3)))
// wavy screens
  //.scale(0.5)
  //.modulateScale(osc(2,0.5),-2)
  //.blend(s0)
// screen kaleid
  //.modulateKaleid(voronoi(() => Math.sin(time)*3,0.1,0.1),() => Math.sin(time)*5)
  //.scale(() => Math.sin(time)*3)
.out()



a.setBins(4);
a.show();
//osc(() => a.fft[0]*2000).kaleid(100)
shape([3,4,50,6])
  //.scale(() => a.fft[2]*3).kaleid(2)
  //.repeat(()  => a.fft[0]*6)
// new function below;
//lfo = () => osc(Math.PI*1,1,0).pixelate(20,10)
  //shape(2).color(1,1,1).mult(lfo())
  //.modulate(noise(()=> a.fft[3]*10 +0.01).scale(1,0.01))
  //.rotate(()=> a.fft[1]*10 +0.01).scale(5,0.1)
  //.repeat (2.2)
  //.scale(5).rotate(0.1,1).kaleid(50)
//smooth ending
// voronoi(1,-0.1,10)
  //.add(osc(1,0,1)).kaleid(50)
  //.scale(1,1,2)
.out( o0 );


// .☆.*･*.♪｡･ﾟ･｡.☆.* ﾉ”ｇｏｏｄ ｎｉｇｈｔ♪ ☆.｡.:*･ﾟ ☆ ҉ ◢▅◣Ξ◥▅◤Ξ◢▅◣Ξ◥▅◤ ҉ ★ ミ☆☆ keep on dancing!☆☆彡
