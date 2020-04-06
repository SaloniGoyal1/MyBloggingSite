<?php

	if(isset($_POST['submit'])){
		$to = "salonig169@gmail.com";
		$subject = "My Subject";
		$txt = "Hello World";
		$headers = "From: {$email}"."\r\n"."CC: salonigoyal192@gmail.com";

		mail($to, $subject, $txt, $headers);

		header("Location contact.html")
	}

?>