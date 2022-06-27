const inputArea = document.getElementById("user-text");
const letter = document.getElementById("letter");
const word = document.getElementById("word");
const sentence = document.getElementById("sentence");
const character = document.getElementById("character");
const checkBtn = document.getElementById("check");

let letters = 0;
let words = 0;
let sentences = 0;
let characters = 0;


function elementCounter(e) {
    characters = inputArea.value.length;
    character.innerText = `${characters}`;
    if (e.target.value === "") {
        letters = 0;
        words = 0;
        sentences = 0;
        letter.innerText = "0";
        word.innerText = "0";
        sentence.innerText = "0";
        character.innerText = "0";
        lastIdx = 0;
        return;
    } else {
        words = 1;
        word.innerText = `${words}`;
    }

    characters = inputArea.value.length;
    character.innerText = `${characters}`;

    if (
        e.keyCode <= 90 &&
        e.keyCode >= 65 &&
        !(e.getModifierState("Alt") || e.getModifierState("Control"))
    ) {
        letters += 1;
        letter.innerText = `${letters}`;
        lastKey = e.keyCode;
        return;
    } else {
        getDetails(e);
    }
}


function getDetails(e) {
    let textVal = inputArea.value.trim().replace(/,/g, " ");
    textVal = textVal.replace(/\s+/g, " ");
    if (textVal !== "") {
        words = 1;
        letters = 0;
        sentences = 0;
    }
    for (let i = 0; i < textVal.length; i++) {
        let char = textVal.charAt(i);
        if (char.match(/[a-z]/i)) {
            letters += 1;
        } else if (
            [".", "!", "?"].includes(char) &&
            i > 2 &&
            ![".", "!", "?"].includes(textVal.charAt[i - 1])
        ) {
            sentences += 1;
            words += 1;
        } else if ((char == " " || char == ",") && char !== ".") {
            words += 1;
        }
    }

    letter.innerText = `${letters}`;
    sentence.innerText = `${sentences}`;
    word.innerText = `${words}`;
    character.innerText = `${inputArea.value.length}`;

    return;
}

inputArea.addEventListener("keyup", elementCounter);
checkBtn.addEventListener("click", getDetails);
