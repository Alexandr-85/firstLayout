let modal_window = document.querySelector('.modal-window'),
btnToggle = document.getElementById('callButton'),
btnClose = document.querySelector('.cross');


btnToggle.onclick = function() {
	console.log();

	modal_window.style.display = 'block';
}

btnClose.onclick = function() {
	modal_window.style.display = 'none';
}




