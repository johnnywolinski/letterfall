document.addEventListener('DOMContentLoaded', () => {
const grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div'));
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let misses = 0;
let currentPos = 5;
let k = 100;
width = 9;
score = 0;
let randomLetter = letters[Math.floor(Math.random() * 26)]
console.log(randomLetter);

console.log(squares[currentPos])

function draw(){
  squares[currentPos].classList.add('letter' + randomLetter);
}
function undraw(){
  squares[currentPos].classList.remove('letter' + randomLetter);
}
function updateMisses(){
  misses++;
  document.getElementById('misses').innerHTML = "Misses: " + misses;
}
function updateScore(){
  score++;
  document.getElementById('score').innerHTML = "Score: " + score;
}
function moveDown(){
  undraw();
  console.log(currentPos)
  currentPos += 10;
  if(currentPos > 395){
    updateMisses();
     randomLetter = letters[Math.floor(Math.random() * 26)];
     currentPos = Math.floor(Math.random() * 10);
  }
  if(misses > 2){
    clearInterval(timerId)
    score = 0;
      misses = 0;
    startGame();

}else if(misses < 3){
  draw();
}

}

function newLetter(){
  randomLetter = letters[Math.floor(Math.random() * 26)]
  currentPos = Math.floor(Math.random() * 10);
   squares[currentPos].classList.add('letter' + randomLetter)

}
function changeLetter(){
  squares[currentPos].classList.remove('letter' + randomLetter);
}
function startGame(){
  document.getElementById('misses').innerHTML = "Misses " + misses;
document.getElementById('score').innerHTML = "Score: " + score;
document.addEventListener('keydown', startGame2);
}
function startGame2(){
document.removeEventListener('keydown', startGame2)
  timerId = setInterval(moveDown, k)
}


function control(event){
  let randomLetterLC = randomLetter.toLowerCase();
  if(event.key === randomLetterLC || event.key === randomLetter)
  {
    undraw();
    updateScore();
    newLetter();
}
  else if(!event.key === randomLetterLC ){
    misses++;
}
}
startGame();
document.addEventListener('keydown', control);
})
