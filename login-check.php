<?php
require_once "main.php";
$username = $_POST['username'];
$password = $_POST['password'];
$person= $_POST['person'];



if (isset($_POST['btn-login'])){

    $sql = "select * from `admin` WHERE `username` = ? AND `password` = ?";
    $result = $connect->prepare($sql);
    $result->bindValue(1,$username);
    $result->bindValue(2,$password);
    $result->execute();
    $tedad = $result->rowCount();
    if ($tedad > 0){
        header("location: admin/panel.php");
        exit;
    }
    else{
        header("location: index.php?error=1010");
        exit;
    }
}