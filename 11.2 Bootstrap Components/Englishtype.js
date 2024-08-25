let startTime;
        let elapsedTime = 0;
        let timerInterval;
        const timeElapsed = document.getElementById('timeElapsed');
        const startButton = document.getElementById('startButton');
        const stopButton = document.getElementById('stopButton');
        const resumeButton = document.getElementById('resumeButton');
        const resetButton = document.getElementById('resetButton');
        const typingArea = document.getElementById('typingArea');
        const charCount = document.getElementById('charCount');
        const wordCount = document.getElementById('wordCount');
        const charPerMinute = document.getElementById('charPerMinute');
        const wordPerMinute = document.getElementById('wordPerMinute');
        const inputField = document.getElementById('inputField');
        const inputCharCount = document.getElementById('inputCharCount');
        const inputWordCount = document.getElementById('inputWordCount');
        const inputCharPerMinute = document.getElementById('inputCharPerMinute');
        const inputWordPerMinute = document.getElementById('inputWordPerMinute');

        function startTimer() {
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(() => {
                elapsedTime = Date.now() - startTime;
                timeElapsed.textContent = Math.floor(elapsedTime / 1000);
                updateCounts();
            }, 1000);
        }

        function stopTimer() {
            clearInterval(timerInterval);
        }

        function resumeTimer() {
            startTimer();
        }

        function resetTimer() {
            clearInterval(timerInterval);
            elapsedTime = 0;
            timeElapsed.textContent = 0;
            updateCounts();
        }

        function updateCounts() {
            const timeInMinutes = elapsedTime / 60000;
            const text = typingArea.value;
            const inputText = inputField.value;

            charCount.textContent = text.length;
            wordCount.textContent = text.split(/\s+/).filter(word => word.length > 0).length;
            charPerMinute.textContent = (text.length / timeInMinutes).toFixed(2);
            wordPerMinute.textContent = (wordCount.textContent / timeInMinutes).toFixed(2);

            inputCharCount.textContent = inputText.length;
            inputWordCount.textContent = inputText.split(/\s+/).filter(word => word.length > 0).length;
            inputCharPerMinute.textContent = (inputText.length / timeInMinutes).toFixed(2);
            inputWordPerMinute.textContent = (inputWordCount.textContent / timeInMinutes).toFixed(2);
        }

        startButton.addEventListener('click', startTimer);
        stopButton.addEventListener('click', stopTimer);
        resumeButton.addEventListener('click', resumeTimer);
        resetButton.addEventListener('click', resetTimer);

        typingArea.addEventListener('input', updateCounts);
        inputField.addEventListener('input', updateCounts);

        // Generate random words for textarea
        const randomWords = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];
        typingArea.value = randomWords.join(' ');
        updateCounts();
   