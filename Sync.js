let Im = document.getElementById('import');
let Ou = document.getElementById('o');
let Co = document.getElementById('c');
let CodeData = document.getElementById('CodeData');
let run = document.getElementById('run');

Im.onchange = function() {
	let file = Im.files[0];
	reader = new FileReader();
	reader.readAsText(file, "UTF-8");
	reader.onload = function() {
		c.innerText = reader.result;
	}
}

function passCodeToPy(){
	//give textarea data as variable to python script
}

run.onclick = function(){
	passCodeToPy();
}
