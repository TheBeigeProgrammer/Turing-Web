let Up = document.getElementById('Upload');
let Im = document.createElement("input");
Im.type = "file";
let clear = document.getElementById('clear');
let c = document.getElementById('CodeData');
let save = document.getElementById('save');
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
Im.onchange = function() {
	let file = Im.files[0];
	reader = new FileReader();
	reader.readAsText(file, "UTF-8");
	reader.onload = function() {
		c.value = reader.result;
	}
}
Up.onclick = function(){
	Im.click();
}
save.onclick = function(){
	console.log(c.vale);
	var _filename = window.prompt("File name");
	if(_filename){
	saveTextAsFile(_filename,c.value);
}
}
clear.onclick = function(){
	if(confirm("Are you sure?")){
		c.value = ""
	}
}
clear.onmouseover = function(){
	c.style.animationName = "clearo";
	c.style.animationDuration = "3s";
	c.style.animationName = "clearl";
	c.style.animationDuration = "3s";
}
clear.onmouseleave = function(){
	c.style.animationName = "";
	c.style.animationDuration = "";
}
