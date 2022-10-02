// need access to the user divs
// get the specific div selected by user
// generate random data from 1-3 []
// compare generated and users data


const Score = document.querySelector('.score');
const shakeContainer = document.querySelector('.game_container');
//                user 
const user = document.querySelectorAll('.select')

//                 computer
const computer = document.querySelectorAll('.select')
const computerRock = document.querySelector('.computer_rock');
const computerPaper = document.querySelector('.computer_paper');
const computerScissors = document.querySelector('.computer_scissors');

const refresh = () => {
    Score.style.background = ''
    Score.innerText = "PLAY"
    computerScissors.setAttribute('data-computer-scissors', false)
    computerPaper.setAttribute('data-computer-paper', false)
    computerRock.setAttribute('data-computer-rock', false)
}

const array = ['🪨', '✂️', '📄']

function runit(click){
    click.addEventListener('click', (e)=> {
    const random = Math.floor(Math.random() * array.length )
    const comp  = array[random];
    const  userPick = click.innerText;
    if (userPick === comp) {
        Score.innerText = "IT'S A TIE"
        if (comp === '✂️'){
            computerScissors.setAttribute('data-computer-scissors', true)
            computerPaper.setAttribute('data-computer-paper', false)
            computerRock.setAttribute('data-computer-rock', false)
        } else if (comp === '🪨'){
            computerScissors.setAttribute('data-computer-scissors', false)
            computerPaper.setAttribute('data-computer-paper', false)
            computerRock.setAttribute('data-computer-rock', true)
        } else if (comp === '📄'){
            computerScissors.setAttribute('data-computer-scissors', false)
            computerPaper.setAttribute('data-computer-paper', true)
            computerRock.setAttribute('data-computer-rock', false)
        }
    } else if (userPick !== comp){
        if ( userPick === '📄' && comp === '✂️'  ){
           Score.innerText = "YOU LOOSE!"
           computerScissors.setAttribute('data-computer-scissors', true)
           computerPaper.setAttribute('data-computer-paper', false)
           computerRock.setAttribute('data-computer-rock', false)
        } else if( userPick === '✂️' && comp === '📄' ) {
            Score.innerText = "YOU WON!"
            computerPaper.setAttribute('data-computer-paper', true)
            computerScissors.setAttribute('data-computer-scissors', false)
            computerRock.setAttribute('data-computer-rock', false)
        } else if( userPick === '🪨' && comp === '📄' ) {
            Score.innerText = "YOU LOOSE!"
            computerPaper.setAttribute('data-computer-paper', true)
            computerScissors.setAttribute('data-computer-scissors', false)
            computerRock.setAttribute('data-computer-rock', false)
        } else if( userPick === '📄' && comp === '🪨' ) {
            Score.innerText = "YOU WON!"
            computerRock.setAttribute('data-computer-rock', true)
            computerPaper.setAttribute('data-computer-paper', false)
            computerScissors.setAttribute('data-computer-scissors', false)
        } else if( userPick === '✂️' && comp === '🪨' ) {
            Score.innerText = "YOU LOOSE!"
            computerRock.setAttribute('data-computer-rock', true)
            computerPaper.setAttribute('data-computer-paper', false)
            computerScissors.setAttribute('data-computer-scissors', false)
        } else if( userPick === '🪨' && comp === '✂️' ) {
            Score.innerText = "YOU WON!"
            computerScissors.setAttribute('data-computer-scissors', true)
            computerPaper.setAttribute('data-computer-paper', false)
            computerRock.setAttribute('data-computer-rock', false)
        }
    }
    if (Score.innerText === 'YOU WON!'){
        Score.style.background = 'green'
        removeShake()
    } else if (Score.innerText === 'YOU LOOSE!'){
        Score.style.background = 'red'
        shake();
    } else{
        Score.style.background = ''
        removeShake()
    }
     })
    const removeShake = () => {
        shakeContainer.setAttribute('data-animate', false)

     }
    const shake = () => {
        shakeContainer.setAttribute('data-animate', true)

     }
};
user.forEach(runit);


