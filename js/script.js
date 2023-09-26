function playGame(playerInput) {
    clearMessages();

    // Draw number between 1 - 3
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    
    // Ask a player to choose their move
    // let playerInput = prompt('Wybierz swój ruch: 1: kamień, 2: papier, 3: nożyce');
    
    // Assign player's move 
    let playerMove = 'nieznany ruch';
    
    if(playerInput == 1) {
        playerMove = 'kamień'
    } else if(playerInput == 2) {
        playerMove = 'papier'
    } else {
        playerMove = 'nożyce'
    } 
    
    // Assign computer move
    let computerMove = getMoveName(randomNumber);
    
    /* if(randomNumber == 1) {
        computerMove = 'kamień'
    } else if(randomNumber == 2) {
        computerMove = 'papier'
    } else {
        computerMove = 'nożyce'
    } */
    
    // Display 
    console.log('Komputer wylosował liczbę: ' + randomNumber);
    
    console.log('Gracz wylosował liczbę: ' + playerInput);
    
    // Display computer's and player's moves
    
    printMessage('Mój ruch to: ' + computerMove)
    
    printMessage('Twój ruch to: ' + playerMove)
    
    // Display the result
    
    printMessage('Wynik: ' + displayResult(computerMove, playerMove));
    
    /* if(playerMove == computerMove) {
        printMessage('Remis!')
    } else if (playerMove > computerMove) {
        printMessage('Wygrałeś!')
    } else {
        printMessage('Przegrałeś!')
    } */
    
    }

document.getElementById('rock').addEventListener('click', function() {
    playGame(1)
});

document.getElementById('paper').addEventListener('click', function() {
    playGame(2)
});

document.getElementById('scissors').addEventListener('click', function() {
    playGame(3)
});