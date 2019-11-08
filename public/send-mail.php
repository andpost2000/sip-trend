<meta charset="utf-8">
<?php

$emailTheme = "Тема письма";
//Отключение предупреждений и нотайсов (warning и notice) на сайте
// error_reporting( E_ERROR );
// создание переменных из полей формы		
if (isset($_POST['name'])) {
  $name      = $_POST['name'];
  if ($name == '') {
    unset($name);
  }
}
if (isset($_POST['email'])) {
  $email    = $_POST['email'];
  if ($email == '') {
    unset($email);
  }
}
if (isset($_POST['text'])) {
  $text      = $_POST['text'];
  if ($text == '') {
    unset($text);
  }
}
// if (isset($_POST['sab']))			{$sab			= $_POST['sab'];		if ($sab == '')		{unset($sab);}}
//стирание треугольных скобок из полей формы
if (isset($name)) {
  $name = stripslashes($name);
  $name = htmlspecialchars($name);
}
if (isset($email)) {
  $email = stripslashes($email);
  $email = htmlspecialchars($email);
}
if (isset($text)) {
  $text = stripslashes($text);
  $text = htmlspecialchars($text);
}
// адрес почты куда придет письмо
$address = "mandpost2000@gmail.com";
// текст письма 
$note_text = "Тема : $emailTheme \r\nИмя : $name \r\n Email : $email \r\n Дополнительная информация : $text";

if (isset($name)) {
  mail($address, $emailTheme, $note_text);
  // сообщение после отправки формы
  echo "Уважаемый(ая) <b>$name</b> ваш запрос принят!";
}

?>