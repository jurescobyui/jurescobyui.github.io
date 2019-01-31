<?php
if(isset($_POST['submit'])){
    //get recipient email
   if(isset($_POST['emailto'])){
    $to="<".$_POST['emailto'].">";
   }else{
       $to="juresco@gmail.com";
   }
   // get subject
   if(isset($_POST['subject'])){
       $subject=htmlspecialchars($_POST['subject']);
   }else{
       $subject="No Subject";
   }
   // get message
   if(isset($_POST['message'])){
       $txt=htmlspecialchars($_POST['message']);
   }else{
       $txt="No Message entered...";
   }
    
   /// mail
        //$to = "<glenesco@gmail.com>";
        //$subject = "test 9 email from localhost";
        //$txt = "This is is a content of simple mailer in local host using xampp";
    $headers = "From: <juresco@pytchit.com>" . "\r\n" . "CC: <juresco@pytchit.com>";
    if(mail($to,$subject,$txt,$headers)){
       echo "<script>alert('Sent mail!'); </script>";
    }else{
        echo "Mail not sent... pls check mail settings";
    }
}



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP Mailer</title>
    <style>
    #container{
        max-width:950px;
        margin: 0 auto;
    }
    </style>
</head>
<body>
    <div id="container">

   
    <header>

    </header>
    <main>
    <form action="http://techdb.win/send-email.php" method="POST">
        <label for="to">To:</label>
        <br>
        <input type="email" id="emailto" name="emailto" placeholder="email@domain.com" required autofocus>
        <br>
        <label for="subject">Subject</label>
        <br>
        <input type="text" id="subject" name="subject">
        <br>
        <label for="message">Type message</label>
        <br>
        <textarea name="message" id="message" cols="30" rows="10">

        </textarea>
        <br>
        <input type="submit" id="submit" name="submit" value="Send Email" >
    </form>
    </main>
    
    <footer>

    </footer>
    </div>
</body>
</html>