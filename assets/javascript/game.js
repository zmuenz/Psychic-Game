var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var userGuessesSoFar = [];

document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    userGuessesSoFar.push(userGuess);

    function makeid() {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 1; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    var computerGuess = makeid()

    if (computerGuess === userGuess) {
        wins++;
        userGuessesSoFar.length = 0;
        alert("Congratulations! You're clairvoyant!");
    } else {
        remainingGuesses--;
    }

    if (remainingGuesses === 0) {
        losses++;
        userGuessesSoFar.length = 0;
        remainingGuesses = 10;
        alert("Try again!");
    }

    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + remainingGuesses + "</p>" +
        "<p>Letters guessed: " + userGuessesSoFar + "</p>";

    document.querySelector("#game").innerHTML = html;

}
