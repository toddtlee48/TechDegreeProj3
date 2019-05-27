$("#name").focus();

const $title = $("#title");
const $otherTitle = $("#other-title");
const $shirtDesign = $("#design");
const $shirtColor = $("#colors-js-puns");


 $(document).ready(function() {
 	$title.change(function () {
 		if ($title.val() === "other") {
 		$otherTitle.show();
 	}
 	else {
 		$otherTitle.hide();
 	}

 	});
  $otherTitle.hide();
});
 	
$shirtColor.hide();

$shirtDesign.change(function() {
	if($('#design option:selected').text() === 'Select Theme'){
		$shirtColor.hide();
	
} else if ($('#design option:selected').text() === 'Theme - JS Puns') {
	$shirtColor.show();
	$("#color").val("cornflowerblue").show();
  	$("#color option[value = cornflowerblue]").show();
  	$("#color option[value = darkslategrey]").show();
  	$("#color option[value = gold]").show();
  	$("#color option[value = tomato]").hide();
  	$("#color option[value = steelblue]").hide();
  	$("#color option[value = dimgrey]").hide();
} else if ($('#design option:selected').text() === 'Theme - I ♥ JS') {
	$shirtColor.show();
	$("#color").val("tomato").show();
  	$("#color option[value = cornflowerblue]").hide();
  	$("#color option[value = darkslategrey]").hide();
  	$("#color option[value = gold]").hide();
  	$("#color option[value = tomato]").show();
  	$("#color option[value = steelblue]").show();
  	$("#color option[value = dimgrey]").show();

}
});



