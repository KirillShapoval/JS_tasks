(function() {

    // !!! Тhe word you need to guess is in console of browser !!!
    
    const formInput = document.getElementById('form-input');
    const btnSubmit = document.getElementById('form');
    const jsReload = document.getElementById('reload');
    const endOfGame = document.getElementById('end-of-game');
    const wordVers = document.getElementById('wordvers');
    const playAgain = document.getElementById('playagain');
    
    btnSubmit.addEventListener('submit', handleSubmit);
    jsReload.addEventListener('click', playingNewGame);
    endOfGame.addEventListener('click', endOfTheGame); 

    function openingWordVersion() {
        wordVers.addEventListener('click', function() {
            const panel = this.nextElementSibling;
            
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    }
    openingWordVersion();
    
    function getRandomArrayValue(arr) {
        const randomIsogramWord = Math.floor(Math.random() * arr.length);
        return arr[randomIsogramWord];
    }

    const arrayOfIsograms = ['pie', 'bar', 'end', 'duty', 'dust', 'host', 'blast', 'store', 'layer', 'market', 'sailor', 'mosaic'];
    const x = getRandomArrayValue(arrayOfIsograms);

    console.log('Isogram (secret word) is ' + x);

    function countTheNumbersOfTries() {
        return Math.round(x.length*1.5);
    }

    let tries = countTheNumbersOfTries();
 
    function calculateBullsAndCows(isogram, attempt) {
        let guessBulls = 0;
        let guessCows = 0;
         
            for (let i = 0; i < x.length; i++) {
                if (isogram[i] === attempt[i]) {
                    guessBulls++;
                } else if (isogram.indexOf(attempt[i])>=0) {
                    guessCows++;
            }
        }
    
        return { guessBulls, guessCows };
    }

    const { guessBulls, guessCows } = calculateBullsAndCows(x, formInput.value);

    function insertElements(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    function creationOfElements() {
        const length = document.createElement('p');
        length.innerHTML = `Isogram (secret word) consists of <strong class='red'> ${x.length} </strong> letters`;
        insertElements(length, letsPlay);

        const info = document.createElement('p');
        info.innerHTML = `<strong id='input-info' class='red list'></strong>`;
        insertElements(info, btnSubmit);   

        const attempts = document.createElement('p');
        attempts.innerHTML = `You have <strong id='tries' class='red'> ${tries} </strong> attempts left from <strong class='red'> ${tries} </strong>`;
        insertElements(attempts, document.getElementById('input-info'));

        const guessing = document.createElement('p');
        guessing.innerHTML = `You guessed <strong id='bulls' class='red'> ${guessBulls} </strong> bulls and <strong id='cows' class='red'> ${guessCows} </strong> cows!`;
        insertElements(guessing, attempts);

        const historyTries = document.createElement('p');
        historyTries.innerHTML = `<strong id='history-tries' class='list'></strong>`;
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
    creationOfElements();

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
        let regex = /[a-z]/g;
        let found = value.match(regex);
       
        if (value.length !== x.length) {
            errors.push('Enter the word consisting of ' + x.length + ' letters' + '!');
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
        if (tries > 1) {
            return --tries;
        }
        return 0;
    }

    function renderArrayAndElement(elem, arr) {
        let newHTML = '';
        for (let i = 0; i < arr.length; i++) {
            const c = arr[i];
            newHTML += `<li>${c}</li>`;
        }
        elem.innerHTML = newHTML;
    }

    const validResults = [];

    function handleSubmit() {
        const inputValue = formInput.value;
        const errors = checkUserInput(inputValue);

        if (errors.length) {
            renderArrayAndElement(inputInfo, errors);
            return;
        }

        let decrease = decreaseOfAttempts();
        triesElem.innerHTML = decrease;
        const calculationOfBAndC = calculateBullsAndCows(x, inputValue);
        const result = `${inputValue} ${calculationOfBAndC.guessBulls}B${calculationOfBAndC.guessCows}C`;
        inputInfo.innerHTML = '';
        bulls.innerHTML = calculationOfBAndC.guessBulls;
        cows.innerHTML = calculationOfBAndC.guessCows;
        validResults.push(result);
        renderArrayAndElement(historyTries, validResults);
        showWinOrLose(x, inputValue, decrease);
        displayPlayAgain(x, inputValue, decrease);
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
