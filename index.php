<html>
<?php
    require_once "main.php";
?>
<head>
    <title>
        manage resturan
    </title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="js/sweetalert2.js"></script>
</head>

<body style="background: #41719c;">


<?php
if (isset($_GET["error"]))
{
    ?>
    <script>
        Swal.fire({
            type: 'error',
            title: 'خطلا در اتصال',
            text: 'کاربری با این مشخصات یافت نشد!'
        })
    </script>
    <?php
}
?>

<div id="logo-login">
    <img src="img/logo-login.jpg" alt="logo">
</div>
<div class="login-box">
    <div id="logo-person">
        <img src="img/logo-person.png" alt="logo">
    </div>
    <h1>ورود به پنل کاربری</h1>
    <form action="login-check.php" method="post">
        <div class="inputbox">
            <input type="text" name="username" required autocomplete="off">
            <label>نام کاربری </label>
        </div>
        <div class="inputbox">
            <input type="password" name="password" required>
            <label>گذر واژه</label>
        </div>
        <div class="inputbox">
            <select name="person">
                <option value="1">مدیر</option>
                <option value="2">فروشنده</option>
                <option value="2">آشپز</option>

            </select>
        </div>
        <div class="btn">
            <input type="submit" name="btn-login" value="ورود">
        </div>


    </form>

</div>

</body>


</html>