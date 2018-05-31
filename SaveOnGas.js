$("#distKm").keypress(function(event) {
	if(event.which === 13) {
  	distKm = parseFloat($(this).val());
    $(this).val("");
  }
})

$("#litrePer100Km").keypress(function(event) {
	if(event.which === 13) {
  	litrePer100Km = parseFloat($(this).val());
    $(this).val("");
  }
})

$("#minsTravel").keypress(function(event) {
	if(event.which === 13) {
  	minsTravel = parseFloat($(this).val());
    $(this).val("");
  }
})

$("#cadPrice").keypress(function(event) {
	if(event.which === 13) {
  	cadPrice = parseFloat($(this).val());
    $(this).val("");
  }
})

$("#usdPrice").keypress(function(event) {
	if(event.which === 13) {
  	usdPrice = parseFloat($(this).val());
    $(this).val("");
  }
})

$("#litresFuel").keypress(function(event) {
	if(event.which === 13) {
  	litresFuel = parseFloat($(this).val());
    $(this).val("");
  }
})

$("#currencyCAD").keypress(function(event) {
	if(event.which === 13) {
  	currencyCAD = parseFloat($(this).val());
    $(this).val("");
  }
})

$("#enter").on("click", function() {
  $("#distKmDisplay").text("Your round trip took " + distKm + " kilometers round trip.");
  $("#litrePer100KmDisplay").text("Your average litres/100km is " + litrePer100Km + ".");
  $("#minsTravelDisplay").text("It took you " + minsTravel + " to travel to the border and back.");
  $("#cadPriceDisplay").text("Gas price around your neighbourhood is $" + cadPrice + " CDN.");
  $("#usdPriceDisplay").text("Gas price at the borer is $" + usdPrice + " USD.");
  $("#litresFuelDisplay").text("You used " + litresFuel + " litres of fuel.");
  $("#currencyCADDisplay").text("The currency at this time is " + currencyCAD + ".");
})
