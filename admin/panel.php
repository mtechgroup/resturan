<html>
<head>
    <?php
        require_once "../main.php";
    ?>
    <link rel="stylesheet" href="../css/style.css" type="text/css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>سیستم مدیریت رستوران</title>
    <link rel="stylesheet" href="../css/font-awesome.min.css">
    <link rel="stylesheet" href="../css/jquery-ui.css">
</head>

<body>
<div class="top-menu">
    <span>سیستم مدیریت رستوران</span>
</div>

<aside class="sidebar">
    <div id="leftside-navigation" class="nano">
        <ul class="nano-content">
            <li>
                <a href="dashboard.php" target="frame"><i class="fa fa-dashboard"></i><span>داشبورد</span></a>
            </li>
            <li class="sub-menu">
                <a href="javascript:void(0);" target="frame"><i class="fa fa-hamburger"></i><span>غذاها و نوشیدنی</span><i class="arrow fa fa-angle-left pull-left"></i></a>
                <ul>
                    <li><a href="foods/add.php" target="frame">ثبت غذا و نوشیدنی</a></li>
                    <li><a href="foods/see.php" target="frame">مشاهده غذاها</a></li>
                </ul>
            </li>
            <li class="sub-menu">
                <a href="javascript:void(0);"><i class="fa fa-cogs"></i><span>منو</span><i class="arrow fa fa-angle-left pull-left"></i></a>
                <ul>
                    <li><a href="#">زیر منو</a></li>
                    <li><a href="#">زیر منو</a></li>
                    <li><a href="#">زیر منو</a></li>
                    <li><a href="#">زیر منو</a></li>
                    <li><a href="#">زیر منو</a></li>
                </ul>
            </li>
            <li class="sub-menu">
                <a href="javascript:void(0);"><i class="fa fa-cogs"></i><span>منو</span><i class="arrow fa fa-angle-left pull-left"></i></a>
                <ul>
                    <li><a href="#">زیر منو</a></li>
                    <li><a href="#">زیر منو</a></li>
                    <li><a href="#">زیر منو</a></li>
                    <li><a href="#">زیر منو</a></li>
                </ul>
            </li>
            <li class="sub-menu">
                <a href="javascript:void(0);"><i class="fa fa-cogs"></i><span>منو</span><i class="arrow fa fa-angle-left pull-left"></i></a>
                <ul>
                    <li class="active"><a href="#">زیر منو</a></li>
                    <li><a href="#">زیر منو</a></li>
                    <li><a href="#">زیر منو</a></li>
                </ul>
            </li>
            <li class="sub-menu">
                <a href="#"><i class="fa fa-address-card"></i><span>درباره ما</span></a>
            </li>
            <li class="sub-menu">
                <a href="../index.php"><i class="fa fa-times-circle"></i><span>خروج</span></a>
            </li>
        </ul>
    </div>
</aside>
<div class="left">
    <div class="body-left-panel">
        <iframe class="frame" name="frame" src="dashboard.php"></iframe>
    </div>
</div>
<script src="../js/jquery-3.1.1.min.js"></script>
<script src="../js/jquery-ui.min.js"></script>
<script  src="../js/scripts.js"></script>


</body>

</html>

