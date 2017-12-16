<html>
	<head>
	</head>
	<body>
		<h1>Test</h1>
		<?php
			#echo `dir`;
			$error = shell_exec('C:\Turing-Web\package\turing.exe -run "C:\Turing-Web\put_function.t"');
			echo $error
		?>
	</body>
</html>