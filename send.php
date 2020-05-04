<?php

if (isset($_POST['submit'])){

$name = $_POST['name'];

$emailFrom = $_POST['mail'];

$message = $_POST['message'];


$emailTo = "chokri.01.h@gmail.com";
$headers = "Form: ".$emailFrom;
$txt = " you have received an e-mail form ".$name.".\n\n".$message;

mail($emailTo, $txt, $headers );
header("location: index.html?mailsend");
}
