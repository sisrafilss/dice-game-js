var randomNumber1 = Math.floor((Math.random() * 6) + 1); // generates number between 1-6
var randomNumber2 = Math.floor((Math.random() * 6) + 1); // generates number between 1-6

var firstImageLocation = document.querySelector('.img1');
var secondImageLocation = document.querySelector('.img2');

firstImageLocation.setAttribute("src", "images/dice" + randomNumber1 + ".png");
secondImageLocation.setAttribute("src", "images/dice" + randomNumber2 + ".png");

var title = document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
    title.textContent = '🚩Player 1 Wins!';
}
else if (randomNumber2 > randomNumber1) {
    title.textContent = 'Player 2 Wins!🚩';
}
else {
    title.textContent = 'Drow!';
}