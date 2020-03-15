//Run with node
let gameTitles = ['Halo3', 'Dark Souls', 'Sonic', 'Mario', 'Overwatch'];

for(let game of gameTitles) {
	console.log(game);
}


//We want to use our game.js else where
module.exports = gameTitles;
