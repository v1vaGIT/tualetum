<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->addAddress('tualetum@gmail.com')

    $mail->Subject = 'Новая заявка на сайте Туалетум!'

    $body = '<h1>Необходимо перезвонить на номер: '.$_POST['phone'].'</h1>'

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Ошибка'
    } else {
        $message = 'Данные отправлены'
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>