var rock = false; 
var paper = false;
var scissors = false;

$("#rock").click(function(){
	// alert("Clicked!");
	game("rock");
});

$("#paper").click(function(){
	// alert("Clicked!");
	game("paper");
});

$("#scissors").click(function(){
	// alert("Clicked!");
	game("scissors");
});






function game(choice){

	var computer = Math.random();

	if (computer <=0.33){

		if (choice == "rock"){
			$('#result').html("It's a tie! The computer chose rock also!");
		}

		else if (choice == "paper"){
			$('#result').html("You win! The computer chose rock!");
		}

		else {
			$('#result').html("You lose! The computer chose rock!");
		}
	}

	else if ( 0.34 >= computer <= 0.66){
		if (choice == "rock"){
				$('#result').html("You lose! The computer chose paper!");
			}

		else if (choice == "paper"){
				$('#result').html("It's a tie! The computer chose paper also!");
			}

		else {
				$('#result').html("You win! The computer chose paper!");
			}
		}

		else {
			if (choice == "rock"){
				$('#result').html("You win! The computer chose scissors!");
			}

			else if (choice == "paper"){
				$('#result').html("You lose! The computer chose scissors!");
			}

			else {
				$('#result').html("It's a tie! The computer also chose scissors!");
			}
		}
};

// Generator selects random number between 0-1, so I must use these parimeters.

// rock = 0 - .33
// paper = .34 - .66
// scissors = .67 - 1


