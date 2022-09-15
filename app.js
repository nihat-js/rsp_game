const DEFAULT_CHOICE = 'ROCK';

let computerScore;
let playerScore;

if ( JSON.parse  ( localStorage.getItem('data')  )  ){
   let obj = JSON.parse  ( localStorage.getItem('data')  );
   computerScore = obj.computerScore;
   playerScore = obj.computerScore ; 
}else{
   computerScore = 0;
   playerScore = 0;
}

const runGame = function () {
   let playerChoice = document.forms[0].selection.value;
   let computerChoice = getComputerChoice();
   
   document.getElementById('player-choice').innerText = playerChoice
   document.getElementById('computer-choice').innerText = computerChoice 


   if (playerChoice == computerChoice){
      document.getElementById('winner').innerText = 'Draw';
   }else if (playerChoice == 'rock' & computerChoice =='scissor' || 
      playerChoice == 'scissor' & computerChoice == 'paper' ||
      playerChoice ==  'paper' & computerChoice == 'rock' ){
         document.getElementById('winner').innerText = 'Player';
         playerScore++;
         
   }else{
      computerScore++;
      document.getElementById('winner').innerText = 'Computer';
   }
   save();
   refresh();
   
   
}



const getComputerChoice = function () {
   let rand =  Math.floor( Math.random()  * 5 ) + 1;
   if (rand < 3) {
      return 'rock';
   }else if (rand < 5){
      return 'paper';
   }else {
      return 'scissor';
   }
}

const save = function (){
   let obj = {
      playerScore : playerScore,
      computerScore : computerScore ,
   }
   localStorage.setItem('data',JSON.stringify(obj));
}
const refresh = function (){
   document.getElementById('player-score').innerText = playerScore ;
   document.getElementById('computer-score').innerText = computerScore;
}
const reset = function () {
   computerScore = 0; playerScore = 0;
   localStorage.clear('data');
   refresh();
}

refresh();
document.getElementById('go-btn').addEventListener('click',runGame);



