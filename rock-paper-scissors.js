let playerScore = 0, computerScore = 0;

function playRound(playerSelection, computerSelection) {
	let text;
	playerSelection = playerSelection.trim().toLowerCase();
	if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
			computerScore++;
			text = `Wait, ${playerSelection}? You can't use that!`;
			console.log(text);
			return text;
		}
	document.getElementById("game").style.visibility = "visible";
	document.getElementById("player_weapon").src = `./images/${playerSelection}.png`;
	document.getElementById("computer_weapon").src = `./images/${computerSelection.toLowerCase()}.png`;
	playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

	if (playerSelection === computerSelection) {
		text = "It's a tie!";
	} else if (playerSelection === "Rock" && computerSelection === "Scissors" || 
		playerSelection === "Scissors" && computerSelection === "Paper" ||
		playerSelection === "Paper" && computerSelection === "Rock") {
		playerScore++;
		text = `You Win! ${playerSelection} beats ${computerSelection}!`;
	} else {
		computerScore++;
		text = `You Lose! ${computerSelection} beats ${playerSelection}!`;		
	}
	document.getElementById("winner").innerHTML = (playerScore > computerScore) ? "You!" : (playerScore < computerScore) ? "Computer!" : "It's a tie!";
	document.getElementById("score").innerHTML = `${playerScore} - ${computerScore}`;
	console.log(text);
	return text;
}

function computerPlay() {
	switch (Math.floor(Math.random() * 3)) {
		case 0:
		return "Rock";
		break;
		case 1:
		return "Paper";
		break;
		case 2:
		return "Scissors";
	}
}

function game() {
	playerScore = 0;
	computerScore = 0;
	let text;
	for (let i = 1; i < 6; i++) {
		playRound(window.prompt(`Round ${i} of 5: Rock, Paper or Scissors?`), computerPlay());	
	}
	if (playerScore > computerScore) {
		text = "You Win!";
	} else if (computerScore > playerScore) {
		text = "Computer Wins!";
	} else {
		text = "Game tied!";
	}
	console.log(`You scored: ${playerScore}\nComputer scored: ${computerScore}\n${text}`);
}