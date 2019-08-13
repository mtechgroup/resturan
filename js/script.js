$(document).ready(function ()
{
    $('.content_top>ul>li').eq(0).css({"background":"#e5f3eb","color":"#2F82B9"});
    $(".content_bottom").eq(0).css({"background":"#e5f3eb"});
    $(".panel_menu1>ul>li:first-child").addClass("active");
    $(".panel_menu3>ul>li:first-child").addClass("active");

    $(".panel_menu1>ul>li>.tri").hide();
    $(".panel_menu3>ul>li>.tri").hide();
    $(".panel_menu1>ul>li>.tri").eq('0').show();
    $(".panel_menu3>ul>li>.tri").eq('0').show();

    /////////////////////////////////////////

    $(".content_bottom").hide();
    $(".content_bottom").eq(0).show();
    $(".content_top>ul>li").click(function () {
        var index =$(this).index();
        $(".content_bottom").hide();
        $(".content_bottom").eq(index).show();
        if (index=='0')
        {
            $(".content_bottom").eq(index).css("background","#e5f3eb");
            $('.content_top>ul>li').eq(1).css({"background":"#46AE60","color":"#ffffff"});
            $('.content_top>ul>li').eq(2).css({"background":"#E64C6E","color":"#ffffff"});
            $('.content_top>ul>li').eq(3).css({"background":"#FDD835","color":"#ffffff"});
            $('.content_top>ul>li').eq(0).css({"background":"#e5f3eb","color":"#2F82B9"});
        }
        else if (index=='1')
        {
            $('.content_top>ul>li').eq(2).css({"background":"#E64C6E","color":"#ffffff"});
            $('.content_top>ul>li').eq(3).css({"background":"#FDD835","color":"#ffffff"});
            $('.content_top>ul>li').eq(0).css({"background":"#2F82B9","color":"#ffffff"});
            $('.content_top>ul>li').eq(1).css({"background":"#F0F4C3","color":"#46AE60"});
            $(".content_bottom").eq(index).css({"background":"#F0F4C3"});
        }
        else if (index=='2')
        {
            $(".content_bottom").eq(index).css("background","#F2E8E8");

            $('.content_top>ul>li').eq(2).css({"background":"#F2E8E8","color":"#E64C6E"});
            $('.content_top>ul>li').eq(3).css({"background":"#FDD835","color":"#ffffff"});
            $('.content_top>ul>li').eq(0).css({"background":"#2F82B9","color":"#ffffff"});
            $('.content_top>ul>li').eq(1).css({"background":"#46AE60","color":"#ffffff"});
        }
        else if (index=='3')
        {
            $(".content_bottom").eq(index).css("background","#FFF9C4");

            $('.content_top>ul>li').eq(3).css({"background":"#FFF9C4","color":"#FBC02D"});
            $('.content_top>ul>li').eq(1).css({"background":"#46AE60","color":"#ffffff"});
            $('.content_top>ul>li').eq(2).css({"background":"#E64C6E","color":"#ffffff"});
            $('.content_top>ul>li').eq(0).css({"background":"#2F82B9","color":"#ffffff"});
        }
    });

    //////////////////////////////////////////
   /* $(".content_top>ul>li").click(function () {
        var index = $(this).index();
        $(".content_top>ul>li").css("background"," #e0e0e0");
        $(".content_top>ul>li").eq(index).css("background","#76ff02");
    });*/
    /////////////////////////////////////////////
    var state=0;
    $(".panel_menu_state").click(function () {
        if (state==0)
        {

            state =1;
            $(".panel_menu1").hide();
            $(".panel_menu2").css("width","100%");
            $(".panel_menu_state").css("background-image","url('../images/menu2.svg')");
        }
        else
        {

            state =0;
            $(".panel_menu1").show();
            $(".panel_menu2").css("width","84%");
            $(".panel_menu_state").css("background-image","url('../images/menu.svg')");

        }
    });
    /////////////////////////////////////////////
    var state2=0;
    $(".panel_menu_state").click(function () {
        if (state2==0)
        {

            state2 =1;
            $(".panel_menu3").hide();
            $(".panel_menu2").css("width","100%");
            $(".panel_menu_state").css("background-image","url('../images/menu2.svg')");
        }
        else
        {

            state2 =0;
            $(".panel_menu3").show();
            $(".panel_menu2").css("width","84%");
            $(".panel_menu_state").css("background-image","url('../images/menu.svg')");

        }
    });
        //////////////////////
    $(".panel_menu1>ul>li").click(function () {

        var index= $(this).index();
        $(".panel_menu1>ul>li").removeClass("active");
        $(".panel_menu1>ul>li").eq(index).addClass("active");
        $(".panel_menu1>ul>li>.tri").hide();
        $(".panel_menu1>ul>li>.tri").eq(index).show();



    });
    ////////////////////////////////////////////////
    $(".panel_menu3>ul>li").click(function () {

        var index= $(this).index();
        $(".panel_menu3>ul>li").removeClass("active");
        $(".panel_menu3>ul>li").eq(index).addClass("active");
        $(".panel_menu3>ul>li>.tri").hide();
        $(".panel_menu3>ul>li>.tri").eq(index).show();



    });
        ////////////////////////

    $(".ticket_btn").click(function () {

        if ($(".textarea").val()=="")
        {
            $(".textarea").css("background","pink");
            return false;
        }
    });


    //////////////////////////////////
    $(".account_input_btn").click(function ()
    {
        var fname=$("#fname").val();
        var lname=$("#lname").val();
        var mobile=$("#mobile").val();

        if (fname=="")
        {
            $("#fname").css({"background":"pink","border":"1px solid #9E9E9E"});
            $("#lname").css({"background":"#ffffff","border":"1px solid #9E9E9E"});
            $("#mobile").css({"background":"#ffffff","border":"1px solid #9E9E9E"});
            return false;
        }
        if (lname=="")
        {
            $("#lname").css({"background":"pink","border":"1px solid #9E9E9E"});
            $("#fname").css({"background":"#ffffff","border":"1px solid #9E9E9E"});
            $("#mobile").css({"background":"#ffffff","border":"1px solid #9E9E9E"});
            return false;
        }
        if (mobile=="")
        {

        }

        var number=mobile.length;
        if (number<11)
        {
            $("#mobile").css({"background":"pink","border":"1px solid #9E9E9E"});
            $("#fname").css({"background":"#ffffff","border":"1px solid #9E9E9E"});
            $("#lname").css({"background":"#ffffff","border":"1px solid #9E9E9E"});
            return false;
        }
        var two_num=mobile.substr(0,2);
        if (two_num!='09')
        {
            $("#mobile").css({"background":"pink","border":"1px solid #9E9E9E"});
            $("#fname").css({"background":"#ffffff","border":"1px solid #9E9E9E"});
            $("#lname").css({"background":"#ffffff","border":"1px solid #9E9E9E"});
            return false;
        }

    });
    //////////////////////////////////
    $(".ticket_del").click(function () {
        var msg=confirm("جهت حذف تیکت مطمئنید ؟");
        if (msg!=true)
        {
            return false;
        }

    });
    //////////////////////////////////
    $(".user_del").click(function () {
        var msg=confirm("جهت حذف کاربر مطمئنید ؟");
        if (msg!=true)
        {
            return false;
        }

    });
    ////////////////////////////////////////////////////


    $("#paye2").hide();
    $("#reshte").prop("disabled", true);
    $("#maghta").change(function () {
        var value = $(this).val();
        if (value == '1') {
            $("#paye1").show();
            $("#paye2").hide();
            $("#reshte").prop("disabled", true);
        }
        else {
            $("#paye2").show();
            $("#paye1").hide();
            $("#reshte").prop("disabled", false);
        }
    });


    //////////////////////////////////Slider1////////////////////////////////////////
    var nextPic = 1;
    slider();
    clearInterval(timer);
    var timer = setInterval(slider,5000)


    $(".slider_li ul li").click(function()
    {
        clearInterval(timer);
        var index = $(this).index();
        gotoslide(index);
    });

    function gotoslide(index)
    {
        nextPic = index+1;
        slider();
    }
    ///////////////////////
    function slider()
    {
        if(nextPic > $(".slider_img .item").length)
        {
            nextPic=1;
        }
        if(nextPic < 1 )
        {
            nextPic=$(".slider_img .item").length;
        }
        $(".slider_img").find(".item").hide();
        $(".slider .slider_li ul li").css("background","#4CAF50");
        $(".slider").find(".item").eq(nextPic - 1).fadeIn(500);
        $(".slider .slider_li ul li").eq(nextPic-1).css("background","#388E3C")
        nextPic++;
    }

    //////////////////////
});