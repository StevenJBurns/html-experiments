var gameTimeInterval;

var gameTime = new Date();
var gameDay, gameMonth, gameYear;
var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

var planetTypes = new Array("Random","Temperate","Barren","Oceanic","Volcanic","Frozen");
var earthDemands = new Object();

var colony = new Object();
var population = new Object();

var naturalEvents = new Array("Solar Flare","Comet","Asteroid","Gamma Ray Burst","Supernova","Disease","Zombie Attack");
var arrEventsFrozen = new Array("Glacial Rift", "Geyser Eruption", "Avalanche", "Sustained Blizzard");
var arrEventsTemperate = new Array("Earthquake","Sustained Hurricane", "Wild Fire");
var arrEventsVolcanic = new Array("Eruption", "Magma Flow", "Pyroclastic Flow");
var arrEventsBarren = new Array("Sustained Dust Storm");

var socialEvents = new Array("Riots", "Unrest", "Serial Killer");


$(document).ready(function ()
{
  checkForLocalStorage();

  window.addEventListener('resize', resizePage, false);
  window.addEventListener('orientationchange', resizePage, false);

  population.limit = 2500;
  population.men = 500;
  population.women = 500;
  population.birthrate = 25;
  population.deathrate = 18;
  population.total = population.men + population.women;

  colony.shelterLimit = 2500;
  colony.water = 1000;
  colony.food = 1000;
  colony.fuel = 1000;
  colony.pollution = 0.05;
  colony.structures = new Array();

  gameTimeInterval = setInterval(gameTimeChange, 50);
});

function checkForLocalStorage()
  {
  if (!window.localStorage)
    {alert('This browser DOES NOT supports localStorage');}

    alert(localStorage.PlanetType);
  }

function resizePage()
{
  
}

function gameTimeChange()
  {
  if (population.total < 1)
    {
    clearInterval(gameTimeInterval);
    $("#popTotal").css("color", "red");
    }

  gameTime.setDate(gameTime.getDate() + 1);

  gameDay = gameTime.getDate();
  gameMonth = gameTime.getMonth();
  gameYear = gameTime.getFullYear();

  $('#gameTime').text(gameDay + "-" + m_names[gameMonth] + "-" + gameYear);

  var randomEventChanceA = Math.floor(Math.random()*100);
  var randomEventChanceB = Math.floor(Math.random()*100);

  if (randomEventChanceA == randomEventChanceB)
    {
    var randomEvent = Math.floor(Math.random()*naturalEvents.length);
    $("#ulEvents").append('<li>'+naturalEvents[randomEvent]+'</li>');
    population.total -= (population.total * 0.25); 
    }

  population.total += (population.total * 0.00685);
  population.total -= (population.total * 0.00493);

  $("#popTotal").text(Math.floor(population.total));
  }

function gameEndInterval() {$("#popTotal").css("color", "red");}
