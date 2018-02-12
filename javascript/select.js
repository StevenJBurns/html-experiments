$(document).ready(function ()
{
  $("li").click(function ()
  {
    var clicked = $(this);
    var previous = $("li.SelectedPlanet");
    var pType = $(this).data('type');

    if ($(this).hasClass("SelectedPlanet")) { return; }

    if (clicked !== previous) {previous.removeClass("SelectedPlanet"); }

    clicked.addClass("SelectedPlanet");

    localStorage.PlanetType = pType;
  })
});

function nextSelectPage()
  {window.location="population.html";}
