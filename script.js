const alphabet = [
'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К',
'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц',
'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', ' ', 

];

const keyboardDiv = document.getElementById('game');
const buttonsPerRow = 9; 

let currentRow = null;

for (let i = 0; i < alphabet.length; i++) {
if (i % buttonsPerRow === 0) {
    currentRow = document.createElement('div');
    currentRow.className = 'keyboard-row';
    keyboardDiv.appendChild(currentRow);
}

const button = document.createElement('button');

button.textContent = alphabet[i];


currentRow.appendChild(button);
}

 
