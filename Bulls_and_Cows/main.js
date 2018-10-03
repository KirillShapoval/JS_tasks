(function() {

    // !!! Тhe word you need to guess is in console of browser !!!
    
    const ARRAY_OF_ISOGRAMS = ['pie', 'bar', 'end', 'duty', 'dust', 'host', 'blast', 'store', 'layer', 'market', 'sailor', 'mosaic'];

    const validResults = [];

    const wordVers = document.getElementById('wordvers');
    
    const isogramWord = getRandomArrayValue(ARRAY_OF_ISOGRAMS);
    let tries = countTheNumbersOfTries(isogramWord);

    console.log('Isogram (secret word) is ' + isogramWord);

    function createForm() {
        const form = document.createElement('form');
        const inputText = document.createElement('input');
        const inputSubmit = document.createElement('input');

        form.onsubmit = addEventListener('submit', function(e) {
            e.preventDefault()
            handleSubmit();
        });
        form.id = 'form';
        form.className = 'form';
        form.action = '';
        
        inputText.id = 'form-input';
        inputText.className = 'form-input';
        inputText.type = 'text';
        inputText.placeholder = 'Try it!';
        inputText.name = 'tryit';
        form.appendChild(inputText);
        
        // const submitWrapper = document.createElement('div');
        inputSubmit.className = 'submit';
        inputSubmit.id = 'btn-submit';
        inputSubmit.type = 'submit';
        inputSubmit.value = 'Submit';
        // submitWrapper.appendChild(inputSubmit);
        form.appendChild(inputSubmit);
        
        document.body.appendChild(form);
    }
    createForm();

    // const formInput = document.getElementById('form-input');
    // document.getElementById('form').addEventListener('submit', handleSubmit);
   
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

    const { guessBulls, guessCows } = calculateBullsAndCows(isogramWord, document.querySelector('.form-input').value); 

    function insertElements(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

//    (container) => {
//        const guessing = document.createElement('p');
//        guessing.innerHTML = `You guessed <strong id='bulls' class='red'> ${bulls} </strong> bulls and <strong id='cows' class='red'> ${cows} </strong> cows!`;
//        insertElements(guessing, attempts);
//    }
    
    function appendMultipleElements(el, arr) {
        arr.forEach((c) => {
            el.appendChild(c);
        });
        return el;
    }

    // function creationOfElements(isogram, tries, bulls, cows) {
        const letsPlay = document.createElement('div');
        const length = document.createElement('h3');
        const tryToGuess = document.createElement('p');
        const info = document.createElement('div');
        const attempts = document.createElement('p');
        const guessing = document.createElement('p');
        const validTries = document.createElement('p');
        const historyTries = document.createElement('div');
        const win = document.createElement('h2');
        const lose = document.createElement('h2');
        const playingAgain = document.createElement('h2');
        const newGame = document.createElement('button');
        const endOfGame = document.createElement('button');
        const thanks = document.createElement('h2');

        // letsPlay.className = 'playing';
        // attempts.className = 'playing';
        // guessing.className = 'playing';
        // validTries.className = 'playing';
        // win.className = 'playing';
        // validTries.className = 'playing';
        // lose.className = 'playing';
        // playingAgain.className = 'play-again';
        // playingAgain.id = 'play-again';
        // newGame.className = 'new-game';
        // newGame.id = 'reload';
        // endOfGame.className = 'end-of-game';
        // endOfGame.id = 'end-of-game';
        // thanks.className = 'playing';

        letsPlay.style.textAlign = 'center';
        // playingAgain.style.display = 'none';
        playingAgain.className = 'play-again';
        newGame.className = 'new-game';
        endOfGame.className = 'end-of-game';
        thanks.className = 'red';
        letsPlay.innerHTML = `<h2>Let's play!</h2>`;
        length.innerHTML = `Isogram (secret word) consists of <strong class='red'> ${isogramWord.length} </strong> letters`;
        tryToGuess.innerHTML = `<strong>Try to guess this word:</strong>`;
        info.innerHTML = `<ul class='input-info list'></ul>`;
        attempts.innerHTML = `You have <strong class='red'> ${tries} </strong> attempts left from <strong class='red'> ${tries} </strong>`;
        guessing.innerHTML = `You guessed <strong  class='red bulls'> ${guessBulls} </strong> bulls and <strong class='red cows'> ${guessCows} </strong> cows!`;
        validTries.innerHTML = `<strong>Your valid tries:</strong>`;
        historyTries.innerHTML = `<ul class='history-attempts list'></ul>`;
        // win.innerHTML = `<div class='red'></div>`;
        // lose.innerHTML = `<div class='red'></div>`;
        playingAgain.innerHTML = `Do you want to play again?`;
        newGame.innerHTML = 'Yes';
        endOfGame.innerHTML = 'No';
        // thanks.innerHTML = `<div class='red'></div>`;

        appendMultipleElements(letsPlay, [length, tryToGuess, form, info, attempts, guessing, validTries, historyTries,
        win, lose, playingAgain, newGame, endOfGame, thanks]);

        insertElements(letsPlay, document.getElementById('playing'));

        newGame.addEventListener('click', playingNewGame);
        endOfGame.addEventListener('click', endOfTheGame); 

    // creationOfElements(isogramWord, tries, guessBulls, guessCows);

    // function creationOfElements(isogram, tries, bulls, cows) {

    //     const letsPlay = document.createElement('div');
    //     letsPlay.className = 'playing';
    //     letsPlay.innerHTML = `<h2 id='letsPlay'>Let's play!</h2>`;
    //     insertElements(letsPlay, document.getElementById('playing'));

    //     const length = document.createElement('h3');
    //     length.innerHTML = `Isogram (secret word) consists of <strong class='red'> ${isogram.length} </strong> letters`;
    //     insertElements(length, document.getElementById('letsPlay'));

    //     const tryToGuess = document.createElement('p');
    //     tryToGuess.innerHTML = `<strong>Try to guess this word:</strong>`;
    //     insertElements(tryToGuess, length);

    //     const info = document.createElement('div');
    //     info.innerHTML = `<ul id='input-info' class='red list'></ul>`;
    //     insertElements(info, document.getElementById('form'));   

    //     const attempts = document.createElement('p');
    //     attempts.className = 'playing';
    //     attempts.innerHTML = `You have <strong id='tries' class='red'> ${tries} </strong> attempts left from <strong class='red'> ${tries} </strong>`;
    //     insertElements(attempts, document.getElementById('input-info'));

    //     const guessing = document.createElement('p');
    //     guessing.className = 'playing';
    //     guessing.innerHTML = `You guessed <strong id='bulls' class='red'> ${bulls} </strong> bulls and <strong id='cows' class='red'> ${cows} </strong> cows!`;
    //     insertElements(guessing, attempts);

    //     const validTries = document.createElement('p');
    //     validTries.className = 'playing';
    //     validTries.innerHTML = `<strong>Your valid tries:</strong>`;
    //     insertElements(validTries, guessing);

    //     const historyTries = document.createElement('div');
    //     historyTries.innerHTML = `<ul id='history-tries' class='list'></ul>`;
    //     insertElements(historyTries, validTries);

    //     const win = document.createElement('h2');
    //     win.className = 'playing';
    //     win.innerHTML = `<div id='win' class='red'></div>`;
    //     insertElements(win, historyTries);

    //     const lose = document.createElement('h2');
    //     lose.className = 'playing';
    //     lose.innerHTML = `<div id='lose' class='red'></div>`;
    //     insertElements(lose, historyTries);

    //     const playingAgain = document.createElement('h2');
    //     playingAgain.className = 'play-again';
    //     playingAgain.id = 'play-again';
    //     playingAgain.innerHTML = `Do you want to play again?`;
    //     insertElements(playingAgain, win);

    //     const newGame = document.createElement('button');
    //     newGame.className = 'new-game';
    //     newGame.id = 'reload';
    //     newGame.innerHTML = 'Yes';
    //     insertElements(newGame, playingAgain);

    //     const endOfGame = document.createElement('button');
    //     endOfGame.className = 'end-of-game';
    //     endOfGame.id = 'end-of-game';
    //     endOfGame.innerHTML = 'No';
    //     insertElements(endOfGame, newGame);

    //     const thanks = document.createElement('h2');
    //     thanks.className = 'playing';
    //     thanks.innerHTML = `<div id='thanks' class='red'></div>`;
    //     insertElements(thanks, document.getElementById('end-of-game')); 
    // }
    // creationOfElements(isogramWord, tries, guessBulls, guessCows);
      
    let triesElem = attempts.querySelectorAll('strong')[0];
    const bulls = document.querySelector('.bulls');
    const cows = document.querySelector('.cows');
    const inputInfo = document.querySelector('.input-info');
    const historyAttempts = document.querySelector('.history-attempts');
    // const win = document.getElementById('win');
    // const lose = document.getElementById('lose');
    // const thanks = document.getElementById('thanks');
         
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
        const inputValue = document.querySelector('.form-input').value;
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
        renderArrayAndElement(historyAttempts, validResults);
        showWinOrLose(isogramWord, inputValue, decrease);
        displayPlayAgain(isogramWord, inputValue, decrease);
    }

   
    // document.getElementById('reload').addEventListener('click', playingNewGame);
    // document.getElementById('end-of-game').addEventListener('click', endOfTheGame); 

    
    function showWinOrLose(isogram, attempt, decrease) {
        if (isogram === attempt) {
            win.className = "red";
            win.innerHTML = 'You win :)';
        } else if (decrease === 0) {
            lose.className = "red";
            lose.innerHTML = 'You lose! :(';
        }
    }
 
    function displayPlayAgain(isogram, attempt, decrease) {
   
        if (isogram === attempt || decrease === 0) {
            playingAgain.style.display = 'block';
            newGame.style.display = 'block';
            endOfGame.style.display = 'block';
        }
    }

    function playingNewGame() {
        return window.location.reload();
    }

    function endOfTheGame() {
        thanks.innerHTML = 'Thanks for the game!';
    }

}());
