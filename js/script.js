{
        let wins = 0;
        let losses = 0;
        
        function playGame(playerInput) {
        clearMessages();
        clearResults();
        
        // Draw number between 1 - 3
        const randomNumber = Math.floor(Math.random() * 3 + 1)
        
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
        const computerMove = getMoveName(randomNumber);
        
        // Display 
        console.log('Komputer wylosował liczbę: ' + randomNumber);
        
        console.log('Gracz wylosował liczbę: ' + playerInput);
        
        // Display computer's and player's moves
        
        printMessage('Mój ruch to: ' + computerMove + '&nbsp')
        
        printMessage('Twój ruch to: ' + playerMove + '&nbsp')
        
        // Display the result
        
        printMessage('Wynik: ' + getResult(computerMove, playerMove));
        
        console.log('getResult = ' + getResult(computerMove, playerMove));

        const addPoints = function(argResult) {
            if(argResult == 'Wygrywasz!') {
                wins++;
            } else if (argResult == 'Przegrywasz!') {
                losses++;
            } else 
                return 0;
        
            console.log ('wins: ' + wins);
            console.log ('losses: ' + losses);
        }

        addPoints(getResult(computerMove, playerMove)); 

        printResults('X: ' + wins + ' Y: ' + losses);

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
}
