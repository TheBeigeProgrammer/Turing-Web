let Im = document.getElementById('import');
let o = document.getElementById('ConsoleData');
let c = document.getElementById('CodeData');
let run = document.getElementById('run');
let save = document.getElementById('save');
let clear = document.getElementById('clear');
Im.onchange = function() {
	let file = Im.files[0];
	reader = new FileReader();
	reader.readAsText(file, "UTF-8");
	reader.onload = function() {
		c.value = reader.result;
	}
}
function saveTextAsFile(filename,data){
	var textToWrite = data;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = filename;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}
function passCodeToPy(Data){
	//give data as variable to python script
	return Data;
}

run.onclick = function(){
	// console.log("hey");
	o.value = c.value.split(" ").reverse().toString().replace(/,/g," ")
}
save.onclick = function(){
	console.log(c.vale);
	saveTextAsFile(window.prompt("file name"),c.value);
}
clear.onclick = function(){
	c.value = "";
}
