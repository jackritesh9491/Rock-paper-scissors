let userScore = 0;
let computerScore = 0;
let drawscore = 0;

let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg');
let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');
let drawScorePara = document.querySelector('#draw-score');



const drawGame = () => {
    console.log("Game Draw!");
    msg.innerHTML = "Game Draw! Play Again";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
    drawscore++;
    drawScorePara.innerHTML = drawscore;
    drawScorePara.style.backgroundColor = "yellow";
    drawScorePara.style.borderRadius = "10px";

};

const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        userScorePara.style.backgroundColor = "green";
        userScorePara.style.borderRadius = "10px";
        console.log("User Win!");
        msg.innerHTML = `User Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }else{
        console.log("Computer Win!");
        computerScore++;
        compScorePara.innerHTML = computerScore;
        compScorePara.style.backgroundColor = "red";
        compScorePara.style.borderRadius = "10px";
        msg.innerHTML = `Computer Win! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice,) => {
    console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);

    if(userChoice === compChoice){
        drawGame();
        
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;

        }else if(userChoice === 'paper'){
            userWin = compChoice === 'scisors' ? false : true;

        }else{
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin ,userChoice, compChoice);

        }
    };



const genCompChoice = () => {
    const options = ['rock', 'paper', 'scisors'];
    const compChoice = Math.floor(Math.random() * 3);
    return options[compChoice];


};


choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        
        playGame(userChoice);
        


    });


});


