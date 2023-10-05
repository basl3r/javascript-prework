const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
	console.log('Messages cleared');
}

const getMoveName = function (argMoveId){

	console.log('MoveId ' + argMoveId);

	if(argMoveId == 1){
		return 'kamień';
	} else if(argMoveId == 2){
		return 'papier';
	} else {
		return 'nożyce';
	}

}

const getResult = function(argComputerMove, argPlayerMove){

	console.log('moves Comp - Player:', argComputerMove,' - ', argPlayerMove);

	if(argComputerMove == argPlayerMove){
		return 'Remis!';
	}else if(argComputerMove > argPlayerMove){
		return 'Przegrywasz!';
	}else {
		return 'Wygrywasz!';
	}
}

const printResults = function(res) {
	let div = document.createElement('div');
	div.innerHTML = res;
	document.getElementById('results').appendChild(div);
}

const clearResults = function (){
	document.getElementById('results').innerHTML = '';
	console.log('Results cleared');
}