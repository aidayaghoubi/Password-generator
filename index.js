const upper = document.querySelector('.upper');
const lower = document.querySelector('.lower');
const num = document.querySelector('.number');
const symbol = document.querySelector('.symbol');
const length = document.querySelector('.Length');
const showPass = document.getElementById('pw');
const copy = document.getElementById('copy');
const generateBtn = document.getElementById('generate-btn');
const alert = document.getElementById('alert');
let password = '';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'w', 'x', 'z', 'h', 'r'
];
const symbols = ['!', '@', '&', '^', '%', '$', '#', '?']


generateBtn.addEventListener('click', e => {
    password = '';
    alert.classList.remove('show');
    e.preventDefault();
    let lengthnum = length.innerText;

    if (lengthnum < 8) {
        lengthnum = 8;
        alert.classList.add('show');
    }
    if (lengthnum == '') {
        lengthnum = 8;
        alert.classList.add('show');
    }
  

    for (let i = 0; i < lengthnum;) {
        if (upper.checked) {
            generateUppercase(lengthnum);
            i++;
        }
        if (lower.checked) {
            generateLowercase(lengthnum);
            i++;
        }
        if (num.checked) {
            generateNumber(lengthnum);
            i++;
        }
        if (symbol.checked) {
            generateSymbol(lengthnum);
            i++;
        }
        if (symbol.checked === false && num.checked === false &&  lower.checked === false && upper.checked === false) {
            generateLowercase(lengthnum);
            i++;
            alert.classList.add('show');
        }
    }

    showPass.innerText = password.slice(0, lengthnum);
    copy.classList.add('show');
});


function generateLowercase() {
    password += letters[Math.floor(Math.random(0, 1) * letters.length)].toLowerCase();
}
function generateUppercase() {
    password += letters[Math.floor(Math.random(0, 1) * letters.length)].toUpperCase();
}
function generateNumber() {
    password += numbers[Math.floor(Math.random(0, 1) * numbers.length)];
}
function generateSymbol() {
    password += symbols[Math.floor(Math.random(0, 1) * symbols.length)];
}

copy.addEventListener('click', e => {
    document.execCommand("copy");

});