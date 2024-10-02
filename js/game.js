// const values
const range = document.getElementById("range");
const lives = document.getElementById("lives");
const round = document.getElementById("round");
const result = document.getElementById("makeBig");
const inputField = document.getElementById("inputField");
const submit = document.getElementById("submit");

// other values 
let totalLives = 10;
let roundCount = 1;
let currentRange = 100;
let currentNum = 0;

// dry functions
function newRound(){
    totalLives = 10;
    currentRange += 100;
    roundCount += 1;

    range.innerHTML = `Number Range: 0/${currentRange}`;
    lives.innerHTML = `Remaining Lives: ${totalLives}`;
    round.innerHTML = `Round Number: ${roundCount}`;
    result.innerHTML = "You won! Next round starting."

    currentNum = Math.floor(Math.random() * currentRange);
    console.log(currentNum);
}

function wrongAnswer(stateMsg){
    totalLives -= 1;
    lives.innerHTML = `Remaining Lives: ${totalLives}`;
    result.innerHTML = stateMsg;
}

function reset(){
    totalLives = 10;
    roundCount = 1;
    currentRange = 100;
    currentNum = Math.floor(Math.random()*currentRange);

    range.innerHTML = `Number Range: 0/${currentRange}`;
    lives.innerHTML = `Remaining Lives: ${totalLives}`;
    round.innerHTML = `Round Number: ${roundCount}`;
    result.innerHTML = "You lost. Let's try again!"
    console.log(currentNum)
}



// start lol
window.onload = function(){
    currentNum = Math.floor(Math.random() * currentRange);
    console.log(currentNum)
}

// Gameplays
submit.onclick = function(){
    if(inputField.value <= currentRange){ // if the value is less than or equal to the range
        
        if(totalLives > 0){ // if lives is more than 0 
            
            if(inputField.value > currentNum){ // Less than 
                wrongAnswer("You Guessed Too High");
            }
            else if(inputField.value < currentNum){
                wrongAnswer("You Guessed Too Low");
            }
            else{
                newRound();
            }
        } 
        else{
            reset();
        }
    }
    else{
        result.innerHTML = "Number out of range"
    }
}
