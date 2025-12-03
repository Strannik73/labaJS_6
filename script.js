document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start");
    const slovoInput = document.getElementById("slovo");
    const vvodInput = document.getElementById("vvod");
    const gameDiv = document.getElementById("game");
    const kartImg = document.getElementById("kart");
    const mainBtn = document.getElementById("main");

    let word = "";
    let mistakes = 0;
    const maxMistakes = 7; 

    const images = ["k.png", "k1.png", "k2.png", "k3.png", "k4.png", "k5.png", "k6.png", "k7.png"];
    const winImage = "kW.png";

    document.getElementById("okn2").style.display = "none";
    document.getElementById("okn3").style.display = "none";

    startBtn.addEventListener("click", () => {
        word = slovoInput.value.trim().toUpperCase();
        if (word) {
            document.getElementById("okn1").style.display = "none";
            document.getElementById("okn2").style.display = "block";
            document.getElementById("okn3").style.display = "none";
            klava();
            vvodInput.value = "_".repeat(word.length);
            kartImg.src = images[0];
        }
    });

    function klava() {
        const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
        gameDiv.innerHTML = "";
        for (let letter of alphabet) {
            const btn = document.createElement("button");
            btn.textContent = letter;
            btn.addEventListener("click", () => kart(letter, btn));
            gameDiv.appendChild(btn);
        }
    }

    function kart(letter, btn) {
        btn.disabled = true;
        const current = vvodInput.value.split("");
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
                kartImg.src = winImage;
                game(true);
            }
        } else {
            mistakes++;
            if (mistakes < maxMistakes) {
                kartImg.src = images[mistakes];
            }
            if (mistakes >= maxMistakes) {
                kartImg.src = images[maxMistakes];
                game(false);
            }
        }
    }

    function game(win) {
        const endImg = document.querySelector("#okn3 img");
        endImg.src = win ? winImage : images[maxMistakes];

        document.getElementById("okn2").style.display = "none";
        document.getElementById("okn3").style.display = "block";
        document.getElementById("end").textContent = win
            ? "Вы выиграли!"
            : "Игра проиграна!";
    }

    mainBtn.addEventListener("click", () => {
        mistakes = 0;
        kartImg.src = images[0];
        slovoInput.value = "";
        vvodInput.value = "";
        document.getElementById("okn3").style.display = "none";
        document.getElementById("okn2").style.display = "none";
        document.getElementById("okn1").style.display = "block";
    });
});
