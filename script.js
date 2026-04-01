/*
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const button = document.querySelector('.button');
const solutionDiv = document.querySelector('.solution');

function generateNumber() {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    const solution = Math.floor(Math.random() * (max - min + 1)) + min;
    solutionDiv.textContent = `Número sorteado: ${solution}`;
    console.log(`Número sorteado: ${solution}`);
}

button.addEventListener('click', generateNumber);
*/

const solutionDiv = document.querySelector('.solution');
function generateNumber() {
    
    const minInput = Math.ceil(document.getElementById('min').value);
    const maxInput = Math.floor(document.getElementById('max').value);
    const solution = Math.floor(Math.random() * (maxInput - minInput)) + minInput;
    solutionDiv.textContent = `Número sorteado: ${solution}`;
}