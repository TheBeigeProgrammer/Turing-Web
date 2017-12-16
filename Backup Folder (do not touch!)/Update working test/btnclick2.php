<html>
	<head>
	</head>
	<body>
		<h1>Test</h1>
		<?php
			$sMy_File = 'output.txt'; #Create variable for path to file to open
			$handle = fopen($sMy_File, 'r') or die('Cannot open file:  '.$sMy_File); #Open file for reading 
			echo fread($handle,filesize($sMy_File));

		?>
	</body>
</html>