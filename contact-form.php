<?php

if (isset($_POST['submit-mail'])) {
   $name = $_POST['name'];
   $mailFrom = $_POST['email'];
   $message = $_POST['message'];

   $mailTo = "contact@joelsmithdev.com";
   $headers = "From: ".$mailFrom;
   $subject = "Portfolio inquiry from ".$name.
   $txt = "Portfolio inquiry from ".$name.".\n\n".$message;

   mail($mailTo, $subject, $txt, $headers);
   header("Location: contactme.html?mailsend");
}
 ?>
