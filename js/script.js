// Variables

let computerMove = `nieznany ruch`;
let playerMove = 'nieznany ruch';

// Draw number between 1 - 3
let randomNumber = Math.floor(Math.random() * 3 + 1)

// Ask a player to choose their move
let playerInput = prompt('Wybierz swój ruch: 1: kamień, 2: papier, 3: nożyce');

console.log('Wylosowana liczba to: ' + randomNumber);

console.log('Gracz wylosował liczbę: ' + playerInput)

if(randomNumber == 1) {
    computerMove = 'kamień'
} else if(randomNumber == 2) {
    computerMove = 'papier'
} else {
    computerMove = 'nożyce'
}

if(playerInput == 1) {
    playerMove = 'kamień'
} else if(playerInput == 2) {
    playerMove = 'papier'
} else {
    playerMove = 'nożyce'
}

printMessage('Mój ruch to: ' + computerMove)

printMessage('Twój ruch to: ' + playerMove)

// Display the result
if(playerMove == computerMove) {
    printMessage('Remis!')
} else if (playerMove > computerMove) {
    printMessage('Wygrałeś!')
} else {
    printMessage('Przegrałeś!')
} 