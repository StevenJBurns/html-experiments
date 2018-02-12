var canvas, context, liCount;

window.onload = Initialize;
window.requestNextAnimationFrame = function(){return window.requestAnimationFrame || window.webkitRequestAnimationFrame  || window.msRequestAnimationFrame;}();

var MaxParticleCount = 512;
var particles = [MaxParticleCount];

function Initialize()
  {
  canvas = document.getElementById('demoCanvas');
  context = canvas.getContext('2d');

  while (particles.length < MaxParticleCount)
    {
    var p = { x: Math.floor(Math.random() * 1500), y: Math.floor(Math.random() * 900), opacity: Math.random() };
    particles.push(p);
    }

  Animate();
  };

function updateParticles()  
  {
  for (p=0; p < particles.length; p++)
    {
      particles[p].y += (particles[p].opacity * 5);
      //particles[p].y += 1;

    if (particles[p].opacity >= 0)
      {particles[p].opacity -= 0.001;}
    else
      {
      var i = particles.indexOf(particles[p]);
      particles.splice(i,1);

      var newParticle = { x: Math.floor(Math.random() * 1600), y: Math.floor(Math.random() * 900), r: Math.floor(Math.random() * 2) + 1, opacity: Math.random() };
      particles.push(newParticle);
      }
    };
  }

function drawParticles()
  {
  for (p=0; p < particles.length; p++)
    {
    context.beginPath();
    context.arc(particles[p].x, particles[p].y, particles[p].r, 0, 2*Math.PI, false);
    context.fillStyle = "rgba(255,255,255," + particles[p].opacity + ")";
    context.fill();
    context.closePath();
    };
  }

function Animate()
  {
  context.clearRect(0, 0, canvas.width, canvas.height);  //wipe the canvas clean

  updateParticles();
  drawParticles();

  window.requestNextAnimationFrame(Animate);
  }
