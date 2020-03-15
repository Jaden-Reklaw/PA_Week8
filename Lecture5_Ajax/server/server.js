/*
	Express is like a module that acts like a web server
	JSON is javaScript object notation

	How to install npm packages
	npm install [name of module]

	This will put the package in your dependencies
	in package.json

	package-lock.json manages the versions

	You can delete node_modules and package-lock.json
	Then run npm install and it will recreate everything

	Don't forget the . in the .gitignore

	killall node
	This will end all node processes
*/
let gameList = [{name:'Civ VI', rating: 4}, {name: 'Halo 3', rating: 5}, {name:'Half-Life', rating: 3}];
const books = require('./modules/books');

//This will be the stuff that kicks off our Express web server
//Bring in express
const express = require('express');

//Middleware
const bodyParser =require('body-parser');

//Run funciton an returns the web server it created
const app = express();

//Good port to use
const port = 5000;

//Configure body parser so that our req.body is not undefined
app.use(bodyParser.urlencoded({extended:true}));

//Tells the server to allow the public to see these things
// Static file are HTML, CSS, JS, Images, etc
app.use(express.static('server/Public'));

//Tells the server that the public can "get" games
//the funciton will tell it what to send back
//Always use req and res and it stand for req and the other response
app.get('/games', (req, res) => {
	console.log('Getting some games');
	res.send(gameList);
})

//Posting
app.post('/games',(req,res) => {
	console.log('Got game on server', req.body);
	gameList.push(req.body);
	res.sendStatus(200);
})

//This sends information over the wire as json
app.get('/books', (req, res) => {
	console.log('Getting some books');
	res.send(books);
})

app.listen( port, () => {
	console.log( 'listening on port', port);
})







