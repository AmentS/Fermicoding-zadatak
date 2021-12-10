<?php

session_start();

if(isset($_SESSION['username'])){
    header('Location: login.php');
}

$error = '';
if(isset($_POST['submit'])){

    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == 'test' && $password == 'test'){
        $_SESSION['username'] = $username;
            header('Location: login.php');

    }else{
        $error = 'Unesite tačan username i password';
    }

}


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
    <title>Zadatak tri</title>
</head>
<body>

<div class="container">
    <h1>Login</h1>

    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="POST">
        <input type="text" placeholder="Username" name="username">
        <input type="password" placeholder="Password" name="password">
        <input type="submit" value="Login" name="submit">
        <p class="errorMsg"><?php echo $error?></p>
    </form>




</div>

</body>
</html>
