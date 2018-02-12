var Animation = function(canvasID)
  {
  this.canvas = document.getElementById(canvasID);
  this.context = this.canvas.GetContext("2d");
  this.t = 0;
  this.timeInterval = 0;
  this.startTime = 0;
  this.lastTime = 0;
  this.frame = 0;
  this.animating = false;
    
  // provided by Paul Irish
window.requestAnimFrame = (function(callback)
  {
  return window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame})();
  };

Animation.prototype.GetCanvas = function () {return this.canvas;};
Animation.prototype.GetContext = function() {return this.context;};
Animation.prototype.Initialize = function (func) {this.stage = func;};
Animation.prototype.Clear = function() {this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);};
Animation.prototype.IsAnimating = function() {return this.animating;};
Animation.prototype.GetFrame = function() {return this.frame;};
Animation.prototype.Start = function()
  {
  var date = new Date();
  this.animating = true; 
  this.startTime = date.getTime();
  this.lastTime = this.startTime;

  if (this.stage !== undefined) {this.stage();}
  this.animationLoop();
  };

  Animation.prototype.Stop = function() {this.animating = false;};

