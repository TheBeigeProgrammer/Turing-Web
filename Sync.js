let Up = $('#Upload')[0];
let Im = document.createElement("input");
Im.type = "file";
// let o = document.getElementById('ConsoleData');
let runForm = $("<form>")[0];
runForm.action = "Console.php";
runForm.target = "_blanc";
$("body").append(runForm);
let c = $('#CodeData')[0];
let run = $('#run')[0];
let save = $('#save')[0];
let clear = $('#clear')[0];
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
	localStorage.setItem("CodeValue",c.value.split("").reverse().toString().replace(/,/g,""));
	runForm.submit();
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
