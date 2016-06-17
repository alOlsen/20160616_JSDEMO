console.log( "ready!" );

var userResponse;
var playAgain;
var prize1 			= "CAR";
var prize2 			= "CAT";
var prize3 			= "BALOON";
var doors 	= [ prize1, prize2, prize3 ];

function askUser(){
	console.log( "askUser() initiated.... ");
	userResponse = prompt("Enter a number between 1 and 3...");
	processResponse();
}

function askAgain(){
	console.log( "askAgain() initiated...")
	playAgain = confirm("Do you want to play again?")
	if( playAgain ){
		askUser();
	}else{
		alert("Thanks for playing!");
		console.log("Game over!")
	}
}

function processResponse(){
	console.log( "processResponse() initiated...")
	//Test that the userResponse
	//console.log( userResponse );
	//Get the datatype - before parseInt()
	//console.log( typeof(userResponse) );
	//Convert String into Number
	userResponse = parseInt( userResponse );
	//Get the datatype - after parseInt()
	//console.log( typeof(userResponse) );
	//Ensure that the userResponse is 1, 2 or 3 only
	if( userResponse === 1 || userResponse === 2 || userResponse === 3 ){
		//we're good
		//Remove 1 to the userResponse before alert
		userResponse = userResponse - 1;
		//userResponse is either 1, 2, 3
		alert( doors[userResponse] );
		//invoke function
		askAgain();
	}else{
		//ask again
		alert("Sorry, that door doesn't exist")
		askAgain();
	}	
}
//START GAME - Invoke

(function startGame(){
	console.log( "startGame() initiated...")
	askUser();
}());

