<html>
<head>
	<title>Console</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<?php
	try {
		$code = $_GET["CodeData"];

		$my_file = 'code.txt';
		$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file); //open file for writing ('w','r','a')...
		fwrite($handle, $code);
	}
	catch (Exception $e){
		echo $e->getMessage();
	}
	$my_file = 'output.txt';
	$handle = fopen($my_file, 'r') or die('Cannot open file:  '.$my_file); //open file for writing ('w','r','a')...
	$result = fread($handle,filesize($my_file));
	//echo "<textarea>".$result."</textarea>";
	?>
	
	<div class="Console">
		<textarea readonly id="ConsoleData" rows="8" cols="80" class="TXT"><?php echo htmlspecialchars($result); ?></textarea>
	</div>
</body>
</html>
