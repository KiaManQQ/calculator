'use strict'
let ac = document.getElementById('AC');
let erase = document.getElementById('delete');
let per = document.getElementById('per');
let bet = document.getElementById('bet');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let forop = document.getElementById('for');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let plus = document.getElementById('plus');
let zero = document.getElementById('0');
let dot = document.getElementById('dot');
let equal = document.getElementById('equal');
let screen = document.getElementById('screen');
// este codigo debe ser actualizado xd

function register(btn){
    btn.addEventListener('click', ()=>{
        screen.textContent+=btn.id
    })
}

ac.addEventListener('click', () =>{
    screen.textContent=""
})

erase.addEventListener('click', () =>{
    screen.textContent--
})

register(one)
register(two)
register(three)
register(four)
register(five)
register(six)
register(seven)
register(eight)
register(nine)
register(zero)