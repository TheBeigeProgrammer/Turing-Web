<html>
	<head>
	</head>
	<body>
		<h1>Test</h1>
		<?php
			$my_file = 'output.txt';
			$handle = fopen($my_file, 'r') or die('Cannot open file:  '.$my_file); //open file for writing ('w','r','a')...
			echo fread($handle,filesize($my_file));
		?>
	</body>
</html>