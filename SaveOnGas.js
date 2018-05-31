// Calculations

usCadPrice = ((1 / currencyCAD) * (1 / 3.78541)) * (usdPrice);

comparePrice = parseFloat(cadPrice - usCadPrice);

/* Used when Gallons option has been turned on
litresFuel = gallonsFuel * 3.78541;
*/

fuelSpent = parseFloat((litrePer100Km * distKm) / 100);

savings = parseFloat((comparePrice * litresFuel) - fuelSpent);

/* Used when Nexus Delay option has been turned on 
hourlyWage = savings * ((minsTravel + noNexusDelay) / 60);"
*/

hourlyWage = parseFloat(savings * (minsTravel / 60));





// Obtaining all numbers from inputs

$("#distKm").keypress(function(event) {
	if(event.which === 13) {
  	distKm = parseFloat($(this).val());
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})

$("#litrePer100Km").keypress(function(event) {
	if(event.which === 13) {
  	litrePer100Km = parseFloat($(this).val());
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})

$("#minsTravel").keypress(function(event) {
	if(event.which === 13) {
  	minsTravel = parseFloat($(this).val());
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})

$("#cadPrice").keypress(function(event) {
	if(event.which === 13) {
  	cadPrice = parseFloat($(this).val());
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})

$("#usdPrice").keypress(function(event) {
	if(event.which === 13) {
  	usdPrice = parseFloat($(this).val());
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})

$("#litresFuel").keypress(function(event) {
	if(event.which === 13) {
  	litresFuel = parseFloat($(this).val());
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})

$("#currencyCAD").keypress(function(event) {
	if(event.which === 13) {
  	currencyCAD = parseFloat($(this).val());
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})





// Enter key functions as print out.

$("#enter").on("click", function() {
	$("#fuelSpent").text("You spent a total of " + fuelSpent + " litres.");
	$("#totalSavings").text("You saved a total of $" + savings + ".");
	$("#hourlyWage").text("At this rate, you are making $" + hourlyWage + " per hour.");
  
  if (hourlyWage > 10.5) {
  	alert("Congrats, you make more than McDonald's starting hourly wage!");
  }
  else {
  	alert("You make less than McDonald's starting hourly wage!");
  }
})

/* 
In HTML before:
<h2>Result:</h2>
<div id="distKmDisplay"></div>
<div id="litrePer100KmDisplay"></div>
<!--
<div id="milesPerGallonDisplay"></div>
-->
<div id="minsTravelDisplay"></div>
<div id="cadPriceDisplay"></div>
<div id="usdPriceDisplay"></div>
<div id="litresFuelDisplay"></div>
<!--
<div id="gallonsFuelDisplay"></div>
-->
<div id="currencyCADDisplay"></div>
<br>



In JS before:
$("#enter").on("click", function() {
  $("#distKmDisplay").text("Your round trip took " + distKm + " kilometers round trip.");
  $("#litrePer100KmDisplay").text("Your vehicle averages " + litrePer100Km + " litres per  100km.");
  $("#minsTravelDisplay").text("It took you " + minsTravel + " minutes to travel to the border and back.");
  $("#cadPriceDisplay").text("Gas price around your neighbourhood is $" + cadPrice + " CAD per litre.");
  $("#usdPriceDisplay").text("Gas price at the borer is $" + usdPrice + " USD per gallon.");
  $("#litresFuelDisplay").text("You used " + litresFuel + " litres of fuel.");
  $("#currencyCADDisplay").text("The currency at this time is $" + currencyCAD + " CDN = $1.0 USD.");
})

*/

