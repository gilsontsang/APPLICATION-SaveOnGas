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
  savings = (comparePrice * litresFuel) - (fuelSpent * usdPrice);  
  // Calculates hourlywage
	hourlyWage = savings / (minsTravel / 60);
  /* Add AFTER noNexusDelay has implemented Calculates hourlyWage
	hourlyWage = savings * ((minsTravel + noNexusDelay) / 60);
  */
	// Enter key outputs
  $("#result").text("Result:");
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
<!-- VARIABLE DATABASE -->
<h2>Variables:</h2>
  <div>distKm (round trip distance in km)</div>
  <div>litrePer100Km = (litres / 100km)</div>
  <!--
  <div>milesPerGallon = (miles per US gallon)</div>
  -->
  <div>minsTravel (time used in travel)</div>
  <div>cadPrice (price in Canada)</div>
  <div>usdPrice (price in USA)</div>
  <div>litresFuel (fuel in litres)</div>
  <!--
  <div>gallonsFuel (fuel in us gallons)</div>
  -->
  <div>currencyCAD = (currency * CAD = 1 USD)</div>
<br>
<!-- USER INPUT DATABASE -->
<h2>User input => Variable</h2>
  <div>What was the roundtrip distance? => distKm</div>
  <div>What is your average litres/100km? => litrePer100Km</div>
  <!--
  <div>What is your average miles per gallon? => milesPerGallon </div>
  -->
  <div>How long did it take you to travel to the border and back? (minutes) => minsTravel</div>
  <div>What is the average fuel price in your city? (for 139.9, enter "1.399") => cadPrice</div>
  <div>What is the fuel price at the border? (for 3.339, enter "3.339") => usdPrice</div>
  <div>How many litres of fuel did you get? => litresFuel</div>
  <!--
  <div>How many gallons of fuel did you get? => gallonsFuel</div>
  -->
  <div>Enter today's currency (if $0.80 Canadian Dollar  = $1.00 US Dollar, enter "0.80") => currencyCAD</div>
<br>
<!-- PRINT DISPLAY DATABASE -->
<h2>Print displays</h2>
  <div>"You spent a total of " + fuelSpent + " litres."</div>
  <div>"You saved a total of $ " + savings + "."</div>
  <div>"At this rate, you are making $ " + hourlyWage + " // hour."</div>
<br>
<!-- FUNCTIONS / ALGORITHMS -->
<h2>Functions/Algorithms</h2>
  <div>usCadPrice = ((1 / currencyCAD) * (1 / 3.78541)) * (usdPrice)</div>
  <div>comparePrice = cadPrice - usCadPrice</div>
  <div>litresFuel = gallonsFuel * 3.78541</div>
  <div>fuelSpent = (litrePer100Km * distKm) / 100 </div>
  <div>savings = (comparePrice * litresFuel) - fuelSpent</div>
  <div>hourlyWage = savings * ((minsTravel + noNexusDelay) / 60)</div>
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
