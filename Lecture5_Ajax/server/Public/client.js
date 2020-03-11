console.log('client.js');
$(document).ready(onReady);

function onReady() {
	console.log('jquery running.');
	//GET will add things and post will send to server
	getGamesFromServer();
	getBooksFromServer();
}

//Use GET method and a promise to the browser
function getGamesFromServer(){
	$.ajax({
		method: 'GET',
		url: '/games'
	}).then(function(response){
		//This code runs when the server responds to our request successfully
		console.log('Got response', response);
		// Response is the list of games from server
		//Where to append
		appendGamesToDOM(response);
	}).catch(function(error) {
		console.log('Got an error', error);
	})
}

//Use GET method and a promise to the browser
function getBooksFromServer(){
	$.ajax({
		method: 'GET',
		url: '/books'
	}).then(function(response){
		//This code runs when the server responds to our request successfully
		console.log('Got response', response);
		// Response is the list of books from server
		// Where to append
		appendBooksToDOM(response);
	}).catch(function(error) {
		console.log('Got an error', error);
	})
}

//Append information to the DOM for games
function appendGamesToDOM(games) {
	for(let game of games) {
		$('#games').append(`<p>${game.name} has a rating of ${game.rating}</p>`)
	}
}

//Append information to the DOM for books
function appendBooksToDOM(books) {
	for(let book of books) {
		$('#books').append(`<p>${book}</p>`)
	}
}


