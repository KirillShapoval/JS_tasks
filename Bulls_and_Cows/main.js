(function() {

    // !!! Тhe word you need to guess is in console of browser !!!
    
    const arrayOfIsograms = ['pie', 'bar', 'end', 'duty', 'dust', 'host', 'blast', 'store', 'layer', 'market', 'sailor', 'mosaic'];

    const validResults = [];

    const formInput = document.getElementById('form-input');
    const wordVers = document.getElementById('wordvers');
    const playAgain = document.getElementById('playagain');

    const isogramWord = getRandomArrayValue(arrayOfIsograms);
    let tries = countTheNumbersOfTries(isogramWord);

    console.log('Isogram (secret word) is ' + isogramWord);
    
    document.getElementById('form').addEventListener('submit', handleSubmit);
    document.getElementById('reload').addEventListener('click', playingNewGame);
    document.getElementById('end-of-game').addEventListener('click', endOfTheGame); 

    function openingWordVersion() {
        wordVers.addEventListener('click', function() {
            const panel = this.nextElementSibling;
            
            (panel.style.display === 'block') ? panel.style.display = 'none' : panel.style.display = 'block';
        });
    }
    openingWordVersion();
    
    function getRandomArrayValue(arr) {
        const randomIsogramWord = Math.floor(Math.random() * arr.length);
        return arr[randomIsogramWord];
    }

    function countTheNumbersOfTries(isogram) {
        return Math.round(isogram.length*1.5);
    }

    function calculateBullsAndCows(isogram, attempt) {
        let guessBulls = 0;
        let guessCows = 0;
         
            for (let i = 0; i < isogram.length; i++) {
                if (isogram[i] === attempt[i]) {
                    guessBulls++;
                } else if (isogram.indexOf(attempt[i])>=0) {
                    guessCows++;
            }
        }
    
        return { guessBulls, guessCows };
    }

    const { guessBulls, guessCows } = calculateBullsAndCows(isogramWord, formInput.value);

    function insertElements(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    function creationOfElements(isogram, tries, bulls, cows) {
        const length = document.createElement('p');
        length.innerHTML = `Isogram (secret word) consists of <strong class='red'> ${isogram.length} </strong> letters`;
        insertElements(length, document.getElementById('letsPlay'));

        const info = document.createElement('div');
        info.innerHTML = `<ul id='input-info' class='red list'></ul >`;
        insertElements(info, document.getElementById('form'));   

        const attempts = document.createElement('p');
        attempts.innerHTML = `You have <strong id='tries' class='red'> ${tries} </strong> attempts left from <strong class='red'> ${tries} </strong>`;
        insertElements(attempts, document.getElementById('input-info'));

        const guessing = document.createElement('p');
        guessing.innerHTML = `You guessed <strong id='bulls' class='red'> ${bulls} </strong> bulls and <strong id='cows' class='red'> ${cows} </strong> cows!`;
        insertElements(guessing, attempts);

        const historyTries = document.createElement('div');
        historyTries.innerHTML = `<ul id='history-tries' class='list'></ul>`;
        insertElements(historyTries, validTries);

        const win = document.createElement('h2');
        win.innerHTML = `<div id='win' class='red'></div>`;
        insertElements(win, historyTries);

        const lose = document.createElement('h2');
        lose.innerHTML = `<div id='lose' class='red'></div>`;
        insertElements(lose, historyTries);

        const thanks = document.createElement('h2');
        thanks.innerHTML = `<div id='thanks' class='red'></div>`;
        insertElements(thanks, document.getElementById('end-of-game')); 
    }
    creationOfElements(isogramWord, tries, guessBulls, guessCows);

    let triesElem = document.getElementById('tries');
    const bulls = document.getElementById('bulls');
    const cows = document.getElementById('cows');
    const inputInfo = document.getElementById('input-info');
    const historyTries = document.getElementById('history-tries');
    const win = document.getElementById('win');
    const lose = document.getElementById('lose');
    const thanks = document.getElementById('thanks');
     
    function charCheck(str) {
        for (let i = 0; i < str.length; i++) {
            if (str.split(str[i]).length-1 > 1) {
                return false;
            }  
        }
        return true;
    } 

    function checkUserInput(value) {
        const errors = [];
        const regex = /[a-z]/g;
        let found = value.match(regex);
       
        if (value.length !== isogramWord.length) {
            errors.push('Enter the word consisting of ' + isogramWord.length + ' letters' + '!');
        }
        if (!charCheck(value)) {
            errors.push('Enter the isogram word!');
        }
        if (value !== found.join('')) {
            errors.push('Enter the word consisting only of small English letters!');
        }
        return errors;
    }
    
    function decreaseOfAttempts() {
        return (tries > 0) ? --tries : 0
    }

    function renderArrayAndElement(elem, arr) {
        let newHTML = '';
        for (let i = 0; i < arr.length; i++) {
            newHTML += `<li><strong>${arr[i]}</strong></li>`;
        }
        elem.innerHTML = newHTML;
    }

    function handleSubmit() {
        const inputValue = formInput.value;
        const errors = checkUserInput(inputValue);

        if (errors.length) {
            renderArrayAndElement(inputInfo, errors);
            return;
        }

        let decrease = decreaseOfAttempts();
        triesElem.innerHTML = decrease;
        const calculationOfBAndC = calculateBullsAndCows(isogramWord, inputValue);
        const result = `${inputValue} ${calculationOfBAndC.guessBulls}B${calculationOfBAndC.guessCows}C`;
        inputInfo.innerHTML = '';
        bulls.innerHTML = calculationOfBAndC.guessBulls;
        cows.innerHTML = calculationOfBAndC.guessCows;
        validResults.push(result);
        renderArrayAndElement(historyTries, validResults);
        showWinOrLose(isogramWord, inputValue, decrease);
        displayPlayAgain(isogramWord, inputValue, decrease);
    }
    
    function showWinOrLose(isogram, attempt, decrease) {
        if (isogram === attempt) {
            win.innerHTML = 'You win :)';
        } else if (decrease === 0) {
            lose.innerHTML = 'You lose! :(';
        }
    }

    function displayPlayAgain(isogram, attempt, decrease) {
        if (isogram === attempt || decrease === 0) {
            playAgain.style.display = 'block';
        }
    }

    function playingNewGame() {
        return window.location.reload();
    }

    function endOfTheGame() {
        thanks.innerHTML = 'Thanks for the game!';
    }

}());
