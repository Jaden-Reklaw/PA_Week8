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
*/

//This will be the stuff that kicks off our Express web server
//Bring in express
const express = require('express');

const app = express();
//Good port to use
const port = 5000;

//Tells the server to allow the public to see these things
// Static file are HTML, CSS, JS, Images, etc
app.use(express.static('server/Public'));

app.listen( port, () => {
	console.log( 'listening on port', port);
})







