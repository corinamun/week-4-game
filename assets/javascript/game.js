//JQuery Document Ready Function
$(document).ready(function() {

//Variable table of contents
var wins = 0;
var losses = 0;
var totalSum = 0;
var computerGuess = //Computer selects a random number between 19-120
  Math.floor(Math.random() * 120) + 19;
  // Computer assigns each crystal a number between 1 and 12
var pinkCrystal = Math.floor(Math.random() * 12) + 1
var blueCrystal = Math.floor(Math.random () * 12) + 1
var yellowCrystal = Math.floor (Math.random() * 12) + 1
var greenCrystal = Math.floor (Math.random() * 12) + 1

//When the user presses a crystal, the following will occur if the keycode is assigned to a letter: 
//1. The crystal will generate a random number between 1-12.
//2. The random number will be added to computerNumber 

$("#pinkCrystal").on("click", function() {
  Math.floor(Math.random() * 12) + 1
})

$("#blueCrystal").on("click",function() {
  Math.floor(Math.random() * 12) + 1
})

$("#yellowCrystal").on("click",function() {
  Math.floor(Math.random() * 12) + 1
})

$("#greenCrystal").on("click",function() {
  Math.floor(Math.random() * 12) + 1
})

console.log(computerGuess);

//This function resets the game (number of guesses and computer selected letter)
var reset = function(){
  guessesRemaining=10;
  computerRandom = alphabet[Math.floor(Math.random() * alphabet.length)];

  guessesMade = [];
}

//If a user's guess matches the computer guess, the value of wins is updated. The reset function is initiated (refer to above).
  if (userGuess === computerRandom){
    wins +=1;
    reset();

  }

//Similarly, if a user uses up the maximum number of guessses, the value of losses is updated. The reset function is initiated (refer to above).

if(guessesRemaining === 0) {
  losses +=1;
  reset();
}

//This ensures that the HTML display equals the values of the variables.

  document.getElementById("winCount").innerHTML = wins;

  document.getElementById("lossCount").innerHTML = losses;

  document.getElementById("triesRemaining").innerHTML = guessesRemaining;

  document.getElementById("triesGuessed").innerHTML = guessesMade.join(", ")
  