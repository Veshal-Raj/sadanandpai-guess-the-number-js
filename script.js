let count = 0;
let firstNum = true;
let realNum = Math.floor(Math.random() * 100);
let guessNumbers = "Your guesses: ";

const numberInput = document.querySelector('#num-input');
const startBtn = document.querySelector('#start-btn');
const submitBtn = document.querySelector('#submit');
const resultTxt = document.querySelector('#result-text');
const guessTxt = document.querySelector('#guess-text');

submitBtn.addEventListener('click', checkGuessNumber);
startBtn.addEventListener('click', reset)

function checkGuessNumber() {
    let enteredNum = numberInput.value;

    if (enteredNum === realNum) {
        resultTxt.textContent = "You got it! Congrats";
        if (firstNum) {
            guessNumbers += `Your guesses: ${enteredNum}`;
            firstNum = false;
        } else {
            guessNumbers += `, ${enteredNum}`;
        }
        guessTxt.textContent = guessNumbers;
        checkCount()
        submitBtn.disabled = true;
        startBtn.disabled = false;
    } else if (enteredNum < realNum) {
        resultTxt.textContent = "Too Low!";
        if (firstNum) {
            guessNumbers += `Your guesses: ${enteredNum}`;
            firstNum = false;
        } else {
            guessNumbers += `, ${enteredNum}`;
        }
        guessTxt.textContent = guessNumbers;
        checkCount()
    } else if (enteredNum > realNum) {
        resultTxt.textContent = "Too High!";
        if (firstNum) {
            guessNumbers += `Your guesses: ${enteredNum}`;
            firstNum = false;
        } else {
            guessNumbers += `, ${enteredNum}`;
        }
        guessTxt.textContent = guessNumbers;
        checkCount()
    }
}

function checkCount() {
    ++count;
    if (count === 10) {
        resultTxt.textContent = `You Lost it! The number was ${realNum}`;
        submitBtn.disabled = true;
        startBtn.disabled = false;
    }
}

function reset() {
    submitBtn.disabled = false;
    startBtn.disabled = true;
    guessTxt.textContent = "";
    resultTxt.textContent = "";
    guessNumbers = "";
    firstNum = true;
    count = 0;
}