let yr;
let mth;
let dt;

let hr;
let min;
let sec;

function printTime(){
  
    yr = year();
    mth = month();
    dt = day();
    hr = hour();
    min = minute();
    sec = second();
  
  textFont(font);
  textAlign(RIGHT, CENTER);
  textSize(24);
  fill(255, 215);
  text(formatDate(yr, mth, dt), width-width/15, 200); 
  text(formatTime(hr, min, sec), width-width/15, 230);  
  
  fill(255,215);
  // ellipse(width-width/7, 200, 60);
   drawCircles();
}

function drawCircles(){

  translate(width-width/15-60, 100);
  
  // Circle A (hour hand)
  fill(255);
  ellipse(0, 0, 120);

  // Circle B (minute hand)
  // let angleA = map(now.getHours() % 12, 0, 12, 0, TWO_PI);
  // let xA = 100 * cos(angleA);
  // let yA = 100 * sin(angleA);
  // print(minutes,seconds);

  let angleB = map(min, 0, 60, 0, TWO_PI)-PI/2;

  let xB =  30 * cos(angleB);
  let yB =  30 * sin(angleB);
  fill(0);
  stroke(255);
  strokeWeight(1);
  ellipse(xB, yB, 60);

  // Circle C (second hand)
  // let angleC = 0;
  let angleC = map(sec, 0, 60, 0, TWO_PI)+PI/2;

  let xC = xB - 15 * cos(angleC);
  let yC = yB - 15 * sin(angleC);
  fill(255);
  stroke(0);
  ellipse(xC, yC, 30);
  
  resetMatrix();
}

function formatDate(a, b, c) {

    a = a.toString(); 
    b = b.toString();
    c = c.toString();
  

    if (a.length == 1) {
        a = "0" + a
    }    
    if (b.length == 1) {
        b = "0" + b
    }    
    if (c.length == 1) {
        c = "0" + c
    }

    return a + "/" + b + "/" + c;
}

function formatTime(d, e, f) {

    d = d.toString(); 
    e = e.toString();
    f = f.toString();
  

    if (d.length == 1) {
        d = "0" + d
    }    
    if (e.length == 1) {
        e = "0" + e
    }    
    if (f.length == 1) {
        f = "0" + f
    }

    return d + ":" + e + ":" + f;
}
