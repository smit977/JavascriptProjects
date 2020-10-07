/*
GAME FUNCTION :

1. Player must guess anumber between a min and max
2. Player gets a certain amount of guesses
3. Notify players of guesses remaining
4. Notify the player of the correct ans if he lose
5. Let player choose to play again

*/

//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessLeft = 3;

// UI elements
const gameEl = document.querySelector('#game'),
      minNumEl = document.querySelector('.min-num'),
      maxNumEl = document.querySelector('.max-num'),
      guessBtnEl = document.querySelector('#guess-btn'),
      guessInputEl = document.querySelector('#guess-input'),
      messageEl = document.querySelector('.message');

//Assign mix max to ui
minNumEl.textContent = min;
maxNumEl.textContent = max;

// Play Again event listener
gameEl.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        guessInputEl.value = '';
        window.location.reload();
    }
});

//listen for guess
guessBtnEl.addEventListener('click' , function(){
    let guess = parseInt(guessInputEl.value);

    // Validate
    
    if (isNaN(guess) || guess < 1 || guess > 10 || guess == '') {
        setMessageEl(`Please enter a number between ${min} to ${max}.` , 'red');
    } else {

        //Check if won
        if(guess === winningNum){
            // Game over - won

            // Game over
            gameOver(true ,`${winningNum} is correct ! , YOU WIN !`);
        } else {
            // Game continues - answer wrong
            guessLeft -= 1;

            if(guessLeft === 0) {
                // Game over - lost

                // Game Over
                gameOver(false , `Game over , You lost ,The correct number was ${winningNum}`);
            } else {
                // Game continues - answer wrong

                //change border color
                guessInputEl.style.borderColor = 'red';

                // Clear input
                guessInputEl.value = '';

                // Tell user its wrong number
                setMessageEl(`${guess} is not correct , ${guessLeft} guesses left` , 'red');
            }

        }
    }
});

function setMessageEl(msg , color){
    messageEl.style.color = color;
    guessInputEl.style.borderColor = color;
    messageEl.textContent = msg;
}

// Game over
function gameOver(won,msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // input disabled
    guessInputEl.disabled = true;

    // // Button disable
    // guessBtnEl.disabled = true;

    //set message
    setMessageEl(msg , color);

    // Play again
    guessBtnEl.value = 'Play Again';
    guessBtnEl.className += 'play-again';
}

// Get Random Number
function getRandomNum(min , max){
    return Math.floor(Math.random() * (max-min+1) + min );
}