const $buttonStonePlayer1 = document.querySelector ('.button-move-stone-1')
const $buttonPaperPlayer1 = document.querySelector('.button-move-paper-1')
const $buttonScissorsPlayer1 = document.querySelector('.button-move-scissors-1')

const $buttonStonePlayer2 = document.querySelector ('.button-move-stone-2')
const $buttonPaperPlayer2 = document.querySelector('.button-move-paper-2')
const $buttonScissorsPlayer2 = document.querySelector('.button-move-scissors-2')

const $movebox1 = document.querySelector('#move-box-1')
const $movebox2 = document.querySelector('#move-box-2')

function handleStone1Move(){
    $movebox1.innerHTML = '<img src="/Images/stone.png">'
}

function handlePaper1Move(){
    $movebox1.innerHTML = '<img src="/Images/paper.png">'
}

function handleScissors1Move(){
    $movebox1.innerHTML = '<img src="/Images/scissors.png">'
}

function handleStone2Move(){
    $movebox2.innerHTML = '<img src="/Images/stone.png">'
}

function handlePaper2Move(){
    $movebox2.innerHTML = '<img src="/Images/paper.png">'
}

function handleScissors2Move(){
    $movebox2.innerHTML = '<img src="/Images/scissors.png">'
}

$buttonStonePlayer1.addEventListener('click', handleStone1Move)
$buttonPaperPlayer1.addEventListener('click', handlePaper1Move)
$buttonScissorsPlayer1.addEventListener('click', handleScissors1Move)

$buttonStonePlayer2.addEventListener('click', handleStone2Move)
$buttonPaperPlayer2.addEventListener('click', handlePaper2Move)
$buttonScissorsPlayer2.addEventListener('click', handleScissors2Move)

