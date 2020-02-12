<?php

if (isset($_POST['submit-mail'])) {
   $name = $_POST['name'];
   $mailFrom = $_POST['email'];
   $message = $_POST['message'];

   $mailTo = "admin@joelsmith2226.github.io";
   $headers = "From: ".$mailFrom;
   $subject = "Portfolio inquiry from ".$name.
   $txt = "Portfolio inquiry from ".$name.".\n\n".$message;

   mail($mailTo, $subject, $txt, $headers);
   header("Location: contaxtme.php?mailsend");
}
 ?>
