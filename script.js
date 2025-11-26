// script.js
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start");
    const slovoInput = document.getElementById("slovo");
    const vvodInput = document.getElementById("vvod");
    const gameDiv = document.getElementById("game");
    const kartImg = document.getElementById("kart");
    const mainBtn = document.getElementById("main");

    let word = "";
    let mistakes = 0;
    const maxMistakes = 7; // теперь 7 картинок

    // Скрываем окна при старте
    document.getElementById("okn2").style.display = "none";
    document.getElementById("okn3").style.display = "none";

    // Переход от окна 1 к окну 2
    startBtn.addEventListener("click", () => {
        word = slovoInput.value.trim().toUpperCase();
        if (word) {
            document.getElementById("okn1").style.display = "none";
            document.getElementById("okn2").style.display = "block";
            document.getElementById("okn3").style.display = "none";
            createAlphabetButtons();
            vvodInput.value = "_".repeat(word.length); // пустые места для слова
        }
    });

    // Создание кнопок русского алфавита
    function createAlphabetButtons() {
        const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
        gameDiv.innerHTML = "";
        for (let letter of alphabet) {
            const btn = document.createElement("button");
            btn.textContent = letter;
            btn.addEventListener("click", () => handleGuess(letter, btn));
            gameDiv.appendChild(btn);
        }
    }

    // Проверка буквы
    function handleGuess(letter, btn) {
        btn.disabled = true;
        let current = vvodInput.value.split("");
        let correct = false;

        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                current[i] = letter;
                correct = true;
            }
        }

        if (correct) {
            vvodInput.value = current.join("");
            if (vvodInput.value === word) {
                endGame(true);
            }
        } else {
            mistakes++;
            kartImg.src = `kart${mistakes + 1}.jpg`; // картинка меняется
            if (mistakes >= maxMistakes) {
                endGame(false);
            }
        }
    }

    // Конец игры
    function endGame(win) {
        document.getElementById("okn2").style.display = "none";
        document.getElementById("okn3").style.display = "block";
        document.getElementById("end").textContent = win
            ? "Вы выиграли!"
            : "Игра проиграна!";
    }

    // Новая игра
    mainBtn.addEventListener("click", () => {
        mistakes = 0;
        kartImg.src = "kart1.jpg";
        slovoInput.value = "";
        vvodInput.value = "";
        document.getElementById("okn3").style.display = "none";
        document.getElementById("okn2").style.display = "none";
        document.getElementById("okn1").style.display = "block";
    });
});
