let timer = 60;
let score = 0;
let timerStarted = false;
let interval;
const wordsElement = document.getElementById('passage');
const typingArea = document.getElementById('typing-area');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const stopButton = document.getElementById('stop-button');
const resumeButton = document.getElementById('resume-button');

//const words = wordsElement.innerText.split(' ');

function startTimer() {
    if (!timerStarted) {
        timerStarted = true;
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
    }
}

typingArea.addEventListener('focus', startTimer);
stopButton.addEventListener('click', stopTimer);
resumeButton.addEventListener('click', resumeTimer);

typingArea.addEventListener('input', function() {
    const typedText = this.value.split(' ');
    score = 0;
/** 
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
    */

    scoreElement.innerText = score;
});
