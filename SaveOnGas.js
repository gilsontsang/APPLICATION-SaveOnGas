// Obtaining all numbers from inputs
$("#distKm").keypress(function(event) {
	if(event.which === 13) {
  	distKm = $(this).val();
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})

$("#litrePer100Km").keypress(function(event) {
	if(event.which === 13) {
  	litrePer100Km = $(this).val();
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})

$("#minsTravel").keypress(function(event) {
	if(event.which === 13) {
  	minsTravel = $(this).val();
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})

$("#cadPrice").keypress(function(event) {
	if(event.which === 13) {
  	cadPrice = $(this).val();
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})

$("#usdPrice").keypress(function(event) {
	if(event.which === 13) {
  	usdPrice = $(this).val();
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})

$("#litresFuel").keypress(function(event) {
	if(event.which === 13) {
  	litresFuel = $(this).val();
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})

$("#currencyCAD").keypress(function(event) {
	if(event.which === 13) {
  	currencyCAD = $(this).val();
    $(this).removeAttr("placeholder");
    $(this).val("");
  }
})


// Enter key functions as print out.
$("#enter").on("click", function() {
  // Converts US gas prices to Canadian dollars with currency
  usCadPrice = ((1 / currencyCAD) * (1 / 3.78541)) * (usdPrice);
	// Compares Canadian gas prices vs US gas prices
  comparePrice = cadPrice - usCadPrice;
  /* Used when Nexus Delay option has been turned on 
  hourlyWage = savings * ((minsTravel + noNexusDelay) / 60);"
  */
	// Calculates fuel spent
  fuelSpent = (litrePer100Km * distKm) / 100;
  // Calculates savings
  savings = (comparePrice * litresFuel) - fuelSpent;  
  // Calculates hourlywage
	hourlyWage = savings * (minsTravel / 60);
  /* Add AFTER noNexusDelay has implemented Calculates hourlyWage
	hourlyWage = savings * ((minsTravel + noNexusDelay) / 60);
  */
	// Enter key outputs
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
