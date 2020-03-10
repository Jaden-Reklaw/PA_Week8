console.log('script.js');

//Global Variables
let count = 1;

$(document).ready(readyNow);

function readyNow() {
	console.log('readyNow');
	$('#generate').on('click',addDiv);
	$('section').on('click','.yellowbtn', changeYellow);
	$('section').on('click', '.delete', removeDiv)
}

//Click event on Generate to add a Div
function addDiv(event) {
	console.log('addDiv');

	//Append DIV with buttons
	$('section').append(`
		<div>
			<p class="count">${count}</p>
			<button class="yellowbtn">Yellow</button>
			<button class="delete">Delete</button>
		</div>`);

	//Update count
	count++;
}

//Click event on yellow button to make div yellow
function changeYellow(event) {
	$(this).parent().addClass('yellow');
}

//Click event on delete button to remove div
function removeDiv(event) {
	$(this).parent().remove();
}