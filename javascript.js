<script>
var randomNumber = Math.floor(Math.random() * 51);
var message, replay;

function gameLoop() {
  var number1, number2, number3, number4, number5, finalNumber;

  number1 = prompt("Pick a solid number");

  while (isNaN(number1)) {
    number1 = prompt("That is not a number! Enter a number!");
  }

  number2 = prompt("You picked " + number1 + "! " + "Now multiply
    that number by 2. Please enter the result.");
  number3 = prompt("Great! You entered " + number2 + ". " + "Add "
    + randomNumber + " to that. Once again, please enter the result
    .");
  number4 = prompt("You are telling me that would be " + number3 +
    "! " + "Now, divide that number in half. You guessed it, enter
    the result.");
  number5 = prompt("According to your calculations, your number is
    currently " + number4 + "! " + "Okay, so remember the number
    you started with? (Hint hint, it was " + number1 + ").
    Subtract that number from the current number. Just like
    before, enter the result.");
  finalNumber = prompt("Hmmm let me think.... is your number " +
    randomNumber/2 + "? YES or NO?").toUpperCase();

  if (finalNumber === "YES") {
    message = "WoOoOoOoOoOo magic!";
  }
  else {
    message = "A computer wrong? Ha..ha..ha.. Sure. ;-). Check
      your math: " + number1 + " multiplied by 2, then add " +
      randomNumber + ", divide that by 2. Finally subtract " +
      number1 + ". If done correctly, your number will equal " +
      randomNumber/2 + ".";
  }
}

gameLoop();
alert(message);

replay = prompt("Play again? YES or NO").toUpperCase();

while (replay === "YES") {
  randomNumber = Math.floor(Math.random() * 51 )
  gameLoop();
  alert(message);
  replay = prompt("Play again? YES or NO").toUpperCase();
}

alert("Thank you for playing!");
</script>
