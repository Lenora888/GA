var myredlight = $('#redlight');
var myyellowlight = $('#yellowlight');
var mygreenlight = $('#greenlight');

var RPC_UR = $('#RPC_UR');

var RPC_CR = $('#RPC_CR');
var RPC_UP = $('#RPC_UP');
var RPC_CP = $('#RPC_CP');
var RPC_US = $('#RPC_US');
var RPC_CS = $('#RPC_CS');


var selectComputer = "";
var selectUser = "";
var myRandomNum = "";
var outcome = "";

myredlight.css('background-color', 'black');
myyellowlight.css('background-color', 'black');
mygreenlight.css('background-color', 'black');
var greenlighton = false;



function StartGame() {
	//Turn on the RPC graphics if they are not already.
	 RPC_UR.css('visibility', 'visible');
	 RPC_CR.css('visibility', 'visible');
	 RPC_UP.css('visibility', 'visible');
	 RPC_CP.css('visibility', 'visible');
	 RPC_US.css('visibility', 'visible');
	 RPC_CS.css('visibility', 'visible');
 
	//Make Computer Selection by selecting randon number between 1 and 3.

	/*function myRandomNum() {
    var myRandomNum = Math.floor((Math.random() * 3) + 1);
    document.getElementById("demo").innerHTML = myRandomNum;
	}
	*/




	var computerChoice=	Math.floor(Math.random() * 3) + 1			
	switch(computerChoice){				
		case 1:  				
			selectComputer = "RPC_CR";		
		break;				
		case 2:				
			selectComputer = "RPC_CP";			
		break;
		case 3:
			selectComputer = "RPC_CS";	
		break;				
		default:			
			alert("Something went wrong!");			
		};				

	//Turn Red Light on.
	myredlight.css('background-color', 'red');

	//Turn Yellow Light on for One Second.
	setTimeout(turnOnyellowlight, 1000);

	//Turn On Green Light.
	setTimeout(turnOngreenlight, 1000 * 2);
}

function userSelection(theSelection) {
	//This should only work when Green Light is on.
	if(greenlighton===true){
		//Turn off lights.
		myredlight.css('background-color', 'black');
		myyellowlight.css('background-color', 'black');
		mygreenlight.css('background-color', 'black');
		greenlighton = false;
	//TASK: Turn off Not Selected RPCs.	
	switch(theSelection){
		case "RPC_UR":
			RPC_UP.css('visibility','hidden');
			RPC_US.css('visibility','hidden');
		break;
		case "RPC_UP":
			RPC_UR.css('visibility','hidden');
			RPC_US.css('visibility','hidden');
		break;
		case "RPC_US":
			RPC_UR.css('visibility','hidden');
			RPC_UP.css('visibility','hidden');
		break;
		default:
			alert("Something Screwed Up Happened!!");
	};
	//is function selectionComputer(theSelection){ supposed to be here and 
	//switch(theSelection) is this correct? So it follows above?
	switch(selectComputer){
		case "RPC_CR":
			RPC_CP.css('visibility','hidden');
			RPC_CS.css('visibility','hidden');
		break;
		case "RPC_CP":
			RPC_CR.css('visibility','hidden');
			RPC_CS.css('visibility','hidden');
		break;
		case "RPC_CS":
			RPC_CR.css('visibility','hidden');
			RPC_CP.css('visibility','hidden');
		break;
		default:
			alert("Something Screwed Up Happened!!");
	};

	//Decide who wins and hide non-selected RPCs.
	 
	switch(theSelection){
		case "RPC_UR":
			switch(selectComputer){
				case "RPC_CR":
					outcome = "Tie";
				break;
				case "RPC_CP":
					outcome = "Computer Wins";
				break;
				case "RPC_CS":
					outcome = "User Wins";
				break;
				default:
					alert("Something Screwed Up Happened!!");
			};
		break;
		case "RPC_UP":
			switch(selectComputer){
				case "RPC_CP":
					outcome = "Tie";
				break;
				case "RPC_CR":
					outcome = "User Wins";
				break;
				case "RPC_CS":
					outcome = "Computer Wins";
				break;
				default:
					alert("Something Screwed Up Happened!!");
			};
		break;
		case "RPC_US":
			switch(selectComputer){
				case "RPC_CS":
					outcome = "Tie";
				break;
				case "RPC_CR":
					outcome = "Computer Wins";
				break;
				case "RPC_CP":
					outcome = "User Wins";
				break;
				default:
					alert("Something Screwed Up Happened!!");
			};
		break;			
		default:
			alert("Something Screwed Up Happened!!");
	};

	$('p').text(outcome);


	//Keep Total of games played.
	// gamesPlayed ++;


	//If it's 5th Game Say Who is Grand Total outcome.
    // for (i = 0; i < 5; i++) {
	   //  text += "This is game number " + i + "<br>";
	   //  alert("outcome is " + outcome);
    // }
	


	//If not show totals on side.
	//switch(displayscores){
		//case "myScore1"
		//total = " ";
		//break;
		//case "myScore2"
		//total = " ";
		//break;
		//case "myScore3"
		//total = " ";
		//break;
		//case "myScore4"
		//total = " ";
		//break;
		//default:
		//alert("The outcome is " + outcome);
	//}

	//  myScore1.css('visibility', 'visible');
	//	myScore2.css('visibility', 'visible');
	//  myScore3.css('visibility', 'visible');
	//  myScore4.css('visibility', 'visible');
    //  myScore5.css('visibility', 'visible');

	};
}


function turnOnyellowlight(){
	myyellowlight.css('background-color', 'yellow');
}
function turnOngreenlight(){
	mygreenlight.css('background-color', 'green');
	greenlighton = true;
}
//function outcome(){
		//alert(" " + " is the outcome!")
	//}

