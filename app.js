let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const drawGame = ()=>{
    msg.innerText = "Game was Draw, Play Again." 
    msg.style.backgroundColor = "#090809";
};

const generateCompChoice = ()=>{
    const comp = ["rock","paper","scisscors"];
    let randInd = Math.floor(Math.random()*3);
    return comp[randInd];
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
  }
}

const gamePlay = (userChoice)=>{
    const compChoice = generateCompChoice();

    if(compChoice === userChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock") userWin = compChoice === "paper" ? false : true;
        else if(userChoice === "paper") userWin = compChoice === "scisscors" ? false : true;
        else userWin = compChoice==="rock" ? false : true;
        
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach(choice =>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        gamePlay(userChoice);
    })
   
});