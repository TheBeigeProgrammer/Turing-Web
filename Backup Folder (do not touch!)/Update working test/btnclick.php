<html>
<head>
</head>
<body>
	<h1>Test</h1>
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
		}
		
		$error = shell_exec('C:\Turing-Web\package\turing.exe -run "C:\Turing-Web\TuringRunCode1.t"'); #Run the Turing Turing program that runs th code
		
		#Echo any errors that might occur from running the shell command
		if ($error != ""){
			echo $error;
		}
		
	}
	catch (Exception $e){
		#Echo the error
		echo $e->getMessage();
	}
	
	?>
</body>
</html>
