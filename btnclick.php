<html>
<head>
</head>
<body>
	<h1>Test</h1>
	<?php	
	$error = shell_exec('C:\Turing-Web\package\turing.exe -run "C:\Turing-Web\put_function.t"');
	/*
	try {
		
		code = $_GET["CodeData"];
		#echo $code;
		
		$my_file = "C:\Turing-Web\code.txt";

		$handle = fopen($my_file, "w") or die('Cannot open file:  '.$my_file); //open file for writing ('w','r','a')...
		fwrite($handle, $code);

		#$error = shell_exec('C:\Python27\python C:\Turing-Web\split.py');
		$error = `C:\Python27\python C:\Turing-Web\split.py`;
		if ($error != ""){
			echo $error;
		}
		#$error = shell_exec('C:\Turing-Web\package\turing.exe -run "C:\Turing-Web\put_function.t"');
		$error = `C:\Turing-Web\run.bat`;
		if ($error != ""){
			echo $error;
		}
		
	}
	catch (Exception $e){
		echo $e->getMessage();
	}
	*/
	?>
</body>
</html>
