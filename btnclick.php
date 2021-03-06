<html>
<head>
	<style type="text/css">
	html{
		height: 100%
	}
	#console{
		width: 100%;
		height: 55%
	}
	#errors{
		height: 25%;
		resize: none;
		width: 100%;
	}
	</style>
</head>
<body>
	<h1>Console</h1>
	<?php	
	
	#Try running the code, but if there is an error echo the problem
	try {
		
		$sCode = $_GET["CodeData"]; #Get the text in the "textarea" where code is inputed
		
		#echo $code; #Debugging
		
		$sMy_File = "C:\Turing-Web\code.txt"; #Create a variable with the path of the file to be created

		$handle = fopen($sMy_File, "w") or die('Cannot open file:  '.$sMy_File); #Open the file for writing and if  it fails echo to the screen "Cannot open file:  code.txt"
		
		fwrite($handle, $sCode); #Write the coded to the file

		$error = shell_exec('C:\Python27\python C:\Turing-Web\writeRenameFunc.py'); #Run the python function renaming program
		
		#Echo any errors that might occur from running the shell command
		if ($error != ""){
			echo $error;
			echo "python";
		}
		
		$error = shell_exec('turing -run "C:\Turing-Web\TuringRunCode1.t"'); #Run the Turing Turing program that runs th code
		
		#Echo any errors that might occur from running the shell command
		if ($error != ""){
			echo "<p>Errors:</p>";
			echo "<textarea readonly id = 'errors'>".$error."</textarea>";
		}
		
		$sMy_File = 'output.txt'; #Create variable for path to file to open
		$handle = fopen($sMy_File, 'r') or die('Cannot open file:  '.$sMy_File); #Open file for reading		
	}
	catch (Exception $error){
		#Echo the error
		echo $error->getMessage();
	}
	
	?>
	<br>
	<p>Run:</p>
	<textarea readonly style="resize: none" id="console"><?php echo fread($handle,filesize($sMy_File)) ?></textarea>
</body>
</html>
