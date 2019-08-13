<?php
require_once "../../main.php";

$name = $_POST["name"];
$code = $_POST["code"];
$daste = $_POST["daste"];
$buy = $_POST["buy"];
$price = $_POST["price"];

if (isset($_POST["btn"])){

    $sql = "insert into `foods` (`id` , `name` , `code` , `daste` , `buy` , `price`) VALUES (NULL , ? , ? , ? , ? , ?);";
    $result = $connect->prepare($sql);
    $result->bindValue(1,$name);
    $result->bindValue(2,$code);
    $result->bindValue(3,$daste);
    $result->bindValue(4,$buy);
    $result->bindValue(5,$price);
    if ($result->execute())
        header("location: add.php?sabtok=1010");
    exit;
}
else{
    header("location: add.php?error=1111");
    exit;
}