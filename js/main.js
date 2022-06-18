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

// let keyboardNum = document.querySelectorAll('.keyboard-button');
// let screen = document.getElementById('screen');

// keyboardNum.addEventListener('click', () =>{
//     console.log(`${keyboardNum}`)
// })

