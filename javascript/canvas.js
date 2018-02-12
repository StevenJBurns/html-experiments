"use strict";

let requestNextAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let timeLast = 0;
let timeDiff = 0;

function DrawScreen()
  {
  //document.getElementById("element").innerText =  "";

  let dateNow = new Date();
  let timeNow = dateNow.getTime();
  timeDiff = timeNow - timeLast;

  let FPS = (timeDiff > 0 ? 1000 / timeDiff : 0);

  document.getElementById("element").innerText =  "Frames Per Second: " + FPS.toFixed(2);
  window.requestNextAnimationFrame(DrawScreen);

  timeLast = timeNow;
  console.log(timeLast);
  }

window.requestNextAnimationFrame(DrawScreen);
