let Im = document.getElementById('import');
let Ou = document.getElementById('o');
let Co = document.getElementById('c');
let CodeData = document.getElementById('CodeData');
let run = document.getElementById('run');

Im.onchange = function() {
	let file = Im.files[0];
	reader = new FileReader();
	reader.readAsText(file, "UTF-8");
	console.log(reader);
	c.innerText = reader.result;
}

run.onclick = function(){
}
