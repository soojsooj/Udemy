'use strict';

/*
//print 
console.log(document.querySelector('.message').textContent);

//change value
document.querySelector('.message').textContent = 'Correct Number!😃'

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;


//set the value. manipulate the element.
document.querySelector('.guess').value = 23;

//value property: get the actual value in the input field. 
console.log(document.querySelector('.guess').value);
*/

//define the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Score
let score = 20;// can't be const.
//store high score
let highscore = 0;


//Check btn & messages
document.querySelector('.check').addEventListener('click', function() {
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess, typeof guess);

   if(!guess) {
       document.querySelector('.message').textContent = 'No number! 😮'
    //when you won the game.
   } else if(guess === secretNumber) {
       document.querySelector('.message').textContent = "Correct Number!🥳"
       document.querySelector('.number').textContent = secretNumber;
       document.querySelector('body').style.backgroundColor = '#60b347';
       document.querySelector('.number').style.width = '30rem';
    //highscore
       if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
       }
    //when guess is too high.
   } else if(guess > secretNumber) {
       if(score > 1 ) {
        document.querySelector('.message').textContent = "Too high!🤪";
        score--; // score = score - 1;
    //Display the score
        document.querySelector('.score').textContent = score; 
        } else { 
            document.querySelector('.message').textContent = 'You lost!😞';
            document.querySelector('.score').textContent = 0;
        }
    //when guess is too low.
   } else if(guess < secretNumber) {
       if(score > 1 ) {
        document.querySelector('.message').textContent = "Too low!🤪"
        score--;
        document.querySelector('.score').textContent = score;
       } else{
        document.querySelector('.message').textContent = 'You lost!😞';
        document.querySelector('.score').textContent = 0;
       }   
   } 
});//should tell EventListner what to do in the second value as an argument. 
//JS calls the fucntion only when Event happens.

//again!
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}) 



