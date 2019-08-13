<html>
<head>
    <title> سیستم مدیریت رستوران</title>
    <link rel="stylesheet" href="../../css/style.css" type="text/css">
    <script src="../../js/jquery.js"></script>
    <script src="../../js/script.js"></script>
</head>
<?php
require_once "../../main.php";


$sql = "select * from `foods`";
$result = $connect->query($sql);
$data = $result->fetchAll(PDO::FETCH_ASSOC);
$tedad = $result->rowCount();
?>
<body>
<div class="all-main-foods">
        <?php
                foreach ($data as $item){ ?>
                        <div class="sandwich"><?=$item['name']?></div>
                <?php
                }
        ?>
</div>


<?php
require_once "computing.php";
?>


</body>
</html>