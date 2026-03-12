// ---------------------------- const set up

// General
const newStartMenu = document.querySelector('#new-start-menu');
const game = document.querySelector('#game');
const lightboxWrapper = document.querySelector('.lightbox-wrapper');

// Game section
const cells = document.querySelectorAll('.tic-btn');

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Column
    [0, 4, 8], [2, 4, 6]             // Digonals
];

let clickButton = '';
let board = ['', '', '', '', '', '', '', '', ''];

// New game section
const toggleX= document.querySelector('.toggle-x');
const pathX= document.querySelector('#path-x');
const toggleO = document.querySelector('.toggle-o');
const pathO = document.querySelector('#path-o');
const remember = document.querySelector('#remember');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

let firstMark = 'o';
let newGame = 'cpu';


// ---------------------------- Game section

function ties () {
    return
}


function checkWinner () {
    let xPosition = [];
    let oPosition = [];
    for (const [index, value] of board.entries()) {
        if (value === 'x') {xPosition.push(index)};
        if (value === 'o') {oPosition.push(index)};
        }
    for (const array of winningConditions) {
        if (array.every(i => xPosition.includes(i))) return console.log('x won');
        if (array.every(i => oPosition.includes(i))) return console.log('o won');
    }
}

function updateBoard () {
    for (const [index, value] of board.entries()) {
        if (value === 'x') {
            cells[index].innerHTML = `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD"/></svg>`;
        } else if (value === 'o') {
            cells[index].innerHTML = `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>`;
        } else {
            cells[index].textContent = '';
        }
    }
    checkWinner ();
}

function cupClick () {
    cpuIndex =  Math.floor(Math.random() * 9);
    if (board[cpuIndex] == '') {
        if (firstMark == 'x') {
            board[cpuIndex] = 'o';21
            
        }
        else {
            board[cpuIndex] = 'x';
        }
        updateBoard();
        checkWinner(board);
        } 
}

function playerClick (index) {

    if (board.every(i => i !== '')) {ties()}

    if (board[index] == '') {
        board[index] = firstMark;
        updateBoard();
        checkWinner(board);
        };
}

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => playerClick(index));
});


// ---------------------------- New game section

function startGame () {
    newStartMenu.style.display = 'none';
    newStartMenu.setAttribute('inert', '');
    newStartMenu.removeAttribute('aria-hidden');
    game.style.display = 'initial';
    game.removeAttribute('inert');
};

toggleX.addEventListener('click',(e) => {
    toggleX.style.backgroundColor = 'var(--slate300)';
    pathX.setAttribute('fill', 'var(--black)');
    toggleO.style.backgroundColor = 'var(--black)';
    pathO.setAttribute('fill', 'var(--slate300)');
    remember.textContent='REMEMBER : X GOES FIRST';  
    firstMark = 'x';
});

toggleO.addEventListener('click',(e) => {
    location.reload();
});

btn1.addEventListener('click',(e) => {
    newGame = 'cpu';
    startGame ();
});

btn2.addEventListener('click',(e) => {
    newGame = 'player';
    startGame ();
});
