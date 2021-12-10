<?php
session_start();

if (!isset($_SESSION['username'])) {
    header('Location: index.php');

}

$user = $_SESSION['username'];


$city = 'Novi Sad';
$api_id = 'cb3926f6f747eb0cdacefbca523d45f5';

$api = 'https://api.openweathermap.org/data/2.5/weather?q=' . $city . '&appid=' . $api_id;

$weather = json_decode(file_get_contents($api), true);

$current_temp = $weather['main']['temp'];

$current_temp_celsius = $current_temp - 273.15;
$current_weather = $weather['weather'][0]['main'];

$current_weather_icon = $weather['weather'][0]['icon'];

$current_weather_img = "<img src='http://openweathermap.org/img/wn/".$current_weather_icon."@2x.png'>";
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="./img/favicon.ico" type="image/x-icon">
    <title>Document</title>
</head>
<body>

<div class="container">
    <p class="temp">Trenutna temperatura u <br> <strong><?php echo $city ?></strong></p>
    <p class="temp"><strong class="color-b"><?php echo $current_temp_celsius ?></strong> celzijusa</p>
    <p class="temp">Trenutno vreme</p>
    <p><strong class="color-b"><?php echo $current_weather ?></p>
    <?php echo $current_weather_img  ?>

</div>


<button onclick="window.open('destroySession.php', '_self')" class="logout">LOGOUT</button>

</body>
</html>
