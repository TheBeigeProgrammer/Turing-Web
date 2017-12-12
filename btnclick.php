<html>
<head>
</head>
<body>
	<h1>Test</h1>
	<?php
	try {
		$code = $_GET["CodeData"];
		echo $code;

		$my_file = 'code.txt';
		$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file); //open file for writing ('w','r','a')...
		fwrite($handle, $code);

		$error = `C:\Python27\python C:\Turing-Web\split.py`;
		if ($error != ""){
			echo "<pre>".$error2."</pre>";
		}
	}
	catch (Exception $e){
		echo $e->getMessage();
	}

	?>
</body>
</html>
