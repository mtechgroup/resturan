<?php
require_once "db.php";
$connect = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USERNAME,DB_PASSWORD);
$connect->exec("set names utf8");
?>