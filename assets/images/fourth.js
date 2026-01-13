let timer;
let score = 0;
let timerStarted = false;
let interval;
const wordsElement = document.getElementById('words');
const typingArea = document.getElementById('typing-area');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resumeButton = document.getElementById('resume-button');
const timeSelect = document.getElementById('time-select');

const words = wordsElement.innerText.split(' ');

function startTimer() {
    if (!timerStarted) {
        timerStarted = true;
        timer = parseInt(timeSelect.value);
        typingArea.disabled = false;
        typingArea.focus();
        interval = setInterval(() => {
            if (timer > 0) {
                timer--;
                timerElement.innerText = timer;
            } else {
                clearInterval(interval);
                typingArea.disabled = true;
                alert(`Time's up! Your score is ${score}`);
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(interval);
    resumeButton.disabled = false;
}

function resumeTimer() {
    if (timer > 0) {
        interval = setInterval(() => {
            if (timer > 0) {
                timer--;
                timerElement.innerText = timer;
            } else {
                clearInterval(interval);
                typingArea.disabled = true;
                alert(`Time's up! Your score is ${score}`);
            }
        }, 1000);
        resumeButton.disabled = true;
    }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resumeButton.addEventListener('click', resumeTimer);

typingArea.addEventListener('input', function() {
    const typedText = this.value.split(' ');
    score = 0;

    wordsElement.innerHTML = words.map((word, index) => {
        if (typedText[index] === word) {
            score++;
            return `<span class="correct">${word}</span>`;
        } else if (typedText[index]) {
            return `<span class="incorrect">${word}</span>`;
        } else {
            return word;
        }
    }).join(' ');

    scoreElement.innerText = score;
});
