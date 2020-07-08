<?php
    header('Access-Control-Allow-Origin: *');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require 'vendor/autoload.php';
    
    
    $sender = $_GET["sender"];
    $receiver = $_GET["receiver"];
    $subject = $_GET["subject"];
    $content = $_GET["content"];
    
    $mail= new PHPMailer(true);
    
    try{
        $mail->IsSMTP();
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = "ssl";
        $mail->Host = "smtp.gmail.com";
        $mail->Port = 465;
        $mail->CharSet = "utf-8";
        
        $mail->Username = "*****@gmail.com";
        $mail->Password = "*****";
        
        $mail->From = $sender;
        $mail->FromName = "aggiepass-no-reply";
        
        $mail->Subject = $subject;
        
        $mail->Body = $content;
        
        $mail->IsHTML(true);
        
        $mail->addAddress($receiver);
        
        if(!$mail->Send()){
            echo "Error: " . $mail->ErrorInfo;
        }else{
            echo "Success sending";
        }
    }
    catch (Exception $e){
        echo 'Message could not be sent.';
        echo $e . '\n';
        echo ' Mailer Error: ' . $mail->ErrorInfo;
    }
    
    
?>
