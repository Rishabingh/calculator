let displayCalcEle = document.querySelector('.displayCalc')
let input = localStorage.getItem('input') || '';
if(input === '') {
    
    displayCalcEle.innerHTML= '0';
} else {
    displayCalcEle.innerHTML= input;
}
function updateCalculation(input1) {
input +=input1 ; displayCalcEle.innerHTML= input;
localStorage.setItem('input', input);
}
