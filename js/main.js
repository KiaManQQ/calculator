'use strict'

// Change theme

let changeTheme = document.getElementById('turnOff');
let changeThemeText = document.getElementById('turnOffText');
let changeThemeImage = document.getElementById('turnOffImg')

changeTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    if(changeThemeImage.src.includes('sun.svg')){
        changeThemeText.textContent='Dark Mode';
        changeThemeImage.src='assets/icons/moon.svg';
    } else{
        changeThemeImage.src='assets/icons/sun.svg';
        changeThemeText.textContent='Light Mode';
    }
});

// calculator
const keyboardErase = document.getElementById('erase');
const display = document.getElementById('screen');
const displayRecord = document.getElementById('record');
const eraseDisplay = document.getElementById('ac');
const equal = document.getElementById('equal');
const keyboardNumber = document.querySelectorAll('.keyboard-button--number');
const keyboardSign = document.querySelectorAll('.keyboard-button--operand');
let calculator = ''
let otherCalculator=''
function updateDisplay(){
    display.textContent=calculator
    displayRecord.textContent= otherCalculator
};
function clearDisplay(){
    calculator = ''
};

keyboardSign.forEach(button =>{
    button.addEventListener('click', ()=>{
        otherCalculator += button.value
        clearDisplay()
        updateDisplay()
    })
});
keyboardNumber.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator += button.value
        otherCalculator += button.value
        updateDisplay()
    })
});
eraseDisplay.addEventListener('click', ()=>{
    otherCalculator = ''
    clearDisplay()
    updateDisplay()
});
keyboardErase.addEventListener('click', ()=>{
    otherCalculator = otherCalculator.slice(0, -1)
    calculator = calculator.slice(0, -1)
    updateDisplay()
});
equal.addEventListener('click', ()=>{
    otherCalculator = eval(otherCalculator)
    calculator = otherCalculator
    updateDisplay()
});