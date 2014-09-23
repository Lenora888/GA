function  flipASwitch(selectButton, setColor){

	var myFirstButton = document.getElementById("redlight");
	var mySecondButton = document.getElementById("yellowlight");
	var myThirdButton = document.getElementById("greenlight");

	myFirstButton.style.backgroundColor = "black";
	mySecondButton.style.backgroundColor = "black";
	myThirdButton.style.backgroundColor = "black";

	var turnOn= document.getElementById(selectButton);
	turnOn.style.backgroundColor=setColor;

}	

