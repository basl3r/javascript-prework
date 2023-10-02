function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	console.log('Messages cleared');
}

function getMoveName(argMoveId){

	console.log('MoveId ' + argMoveId);

	if(argMoveId == 1){
		return 'kamień';
	} else if(argMoveId == 2){
		return 'papier';
	} else {
		return 'nożyce';
	}

	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){

	console.log('moves Comp - Player:', argComputerMove,' - ', argPlayerMove);

	if(argComputerMove == argPlayerMove){
		return 'Remis!';
	}else if(argComputerMove > argPlayerMove){
		return 'Przegrywasz!';
	}else {
		return 'Wygrywasz!';
	}
}

function printResults(res) {
	let div = document.createElement('div');
	div.innerHTML = res;
	document.getElementById('results').appendChild(div);
}

function clearResults(){
	document.getElementById('results').innerHTML = '';
	console.log('Results cleared');
}

function addPoints (argResult) {
	if(argResult == 'Wygrywasz!') {
		wins++;
	} else if (argResult == 'Przegrywasz!') {
		losses++;
	} else 
		return 0;

	console.log ('wins: ' + wins);
    console.log ('losses: ' + losses);
}

