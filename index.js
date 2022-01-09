// random coding project idea generator

// TODO:
// - create array full of ideas
// - create function to randomly select an idea
// - create function to display the idea
// - display the idea via HTML

const ideas = [
    "Color Flipper",
    "Tic-Tac-Toe",
    "Simon Says",
    "Memory Game",
    "Pong",
    "Tetris",
    "2048",
    "Chess",
    "Pictionary",
    "Hangman",
    "Minesweeper",
    "Battleship",
    "Quiz app",
    "Calculator",
    "Poker",
    "Checkers",
    "Dice",
    "Blackjack",
    "Card game",
    "Puzzle",
    "Puzzle game",
    "Puzzle solver",
    "Puzzle solver app",
    "Javascript Clock",
    "Javascript Stopwatch",
    "Javascript Timer",
    "Javascript Pomodoro",
    "Tip calculator",
    "Bank app",
    "Interest calculator",
    "Javascript drawing",
    "Javascript drawing app",
    "Todo list",
    "Maze game",
    "Javascript Minesweeper",
    "Javascript Minesweeper app",
    "Javascript Minesweeper solver",
    "Javascript Minesweeper solver app",
    "hex change background",
    "chat app",
    "random quote app",
    "pass the message app",
    "password generator",
    "counter app",
    "modal app",
    "grocery cart app",
]

function getRandomIdea(){
    return ideas[Math.floor(Math.random() * ideas.length)];
}

function displayIdea(){
    let idea = getRandomIdea();
    document.getElementById("ideaDisplay").innerHTML = idea;
}

displayIdea();
