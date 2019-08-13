<html>
<head>
    <title>
      سیستم مدیریت رستوران
    </title>
    <link rel="stylesheet" href="../../css/style.css" type="text/css">
</head>
<?php
require_once "../../main.php";

if (isset($_GET['sabtok'])){
    echo "غذا با موفقیت ثبت شد";
}
if (isset($_GET["error"])){
    echo "خطا در ثبت غذا";
}
?>
<body>

<div class="all-input">
    <form action="add-check.php" method="post">
    <input class="input" type="text" name="name" placeholder="نام ...">
    <input class="input" type="number" name="code" placeholder="کد ...">
         <div><select class="input" name="daste">
            <option value="" selected disabled hidden >دسته مربوطه</option>
            <option value="1">ساندویچ</option>
            <option value="2">پیتزا</option>
            <option value="3">خوراک</option>
            <option value="4">نوشیدنی</option>
            <option value="5">برنج و ...</option>
        </select></div>
    <input class="input" type="number" name="buy" placeholder="قیمت تمام شده ...">
    <input class="input" type="number" name="price" placeholder="قیمت فروش ...">
    <input class="input btn" type="submit" value="ثبت" name="btn">
    </form>
</div>


</body>
</html>