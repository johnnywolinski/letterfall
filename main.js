document.addEventListener('DOMContentLoaded', () => {
const grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div'));
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let currentPos = 5;
let k = 250;
width = 9;
let randomLetter = letters[Math.floor(Math.random() * 26)]
console.log(randomLetter);

console.log(squares[currentPos])


function draw(){
  squares[currentPos].classList.add('letter' + randomLetter);
}
function undraw(){
  squares[currentPos].classList.remove('letter' + randomLetter);
}
function moveDown(){
  undraw();
  console.log(currentPos)
  currentPos += 10;
  if(currentPos > 195){
     randomLetter = letters[Math.floor(Math.random() * 26)];
     currentPos = Math.floor(Math.random() * 10);
  }

draw();
}

function newLetter(){
  randomLetter = letters[Math.floor(Math.random() * 26)]
  currentPos = Math.floor(Math.random() * 10);
   squares[currentPos].classList.add('letter' + randomLetter)
     console.log(squares[currentPos]);
     k -= 50;
     console.log(k);
}
function changeLetter(){
  squares[currentPos].classList.remove('letter' + randomLetter);


}

timerId = setInterval(moveDown, k)
function control(event){
  if(event.key === randomLetter)
  {
    undraw();
    newLetter();
}

}
document.addEventListener('keydown', control);





})
