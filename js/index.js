//网页加载时运行
$(function () {

    navHeader();
    zhandian();
    $(".zd").addClass("light_li");
    $(".zuixin_article").css("display", "none");
    $(".gninfo").css("display", "none");
    // 滚动条
    $(window).scroll(function () {
        navHeader();
        zhandian();
    })

    // 导航栏
    function navHeader() {
        if ($(window).scrollTop() > 50) {
            $(".nav").addClass("light");
        } else {
            $(".nav").removeClass("light");
        }
    }

    // 到1000的位置固定住站点
    function zhandian() {
        if ($(window).scrollTop() > 1000) {
            // $(".zhandian").css({"position":"fixed","index":"1","left":"150px","top":"10%"});
            $(".zhandian").addClass("zhandian_gd");
        } else {
            $(".zhandian").removeClass("zhandian_gd");
        }
    }


    // 显示三角形
    var fenlei = document.getElementById("fenlei");
    fenlei.onmouseover = function () {
        $(".triangle").css("display", "block");
        document.getElementById("sort").style.display = 'block';
    }
    fenlei.onmouseout = function () {
        $(".triangle").css("display", "none");
        document.getElementById("sort").style.display = 'none';
    }

    var yemian = document.getElementById("yemian");
    yemian.onmouseover = function () {
        $(".triangle1").css("display", "block");
        document.getElementById("Some_pages").style.display = 'block';
    }
    yemian.onmouseout = function () {
        $(".triangle1").css("display", "none");
        document.getElementById("Some_pages").style.display = 'none';
    }


})

// search框
var i = 0;
function search() {
    // alert("等待开发");
    i++;
    if (i == 3) {
        i = 1;
    }

    if (i == 1) {
        $(".search_input").attr("type", "text");
        $(".music").css("display", "none");
    } else {
        $(".search_input").attr("type", "hidden");
        $(".music").css("display", "block");

    }



}



// inout 确认键盘监听
function a() {
    // 清空输入框的值
    document.getElementById("search_input").value = "";
    $(".search_input").attr("type", "hidden");
    $(".music").css("display", "block");

    alert("正在为你搜索......")

}
// inout 确认键盘监听
function EnterKey(event) {
    event = event || window.event;
    if (event.keyCode == 13) {
        a();
    }
}

// 站点预览
function zd() {
    $(".gn").removeClass("light_li");
    $(".zd").addClass("light_li");
    $(".gninfo").css("display", "none");
    $(".zdinfo").css("display", "block");
    $(".zuixin_article").css("display", "none");


}
// 功能
function gn() {
    $(".zd").removeClass("light_li");
    $(".gn").addClass("light_li");
    $(".zdinfo").css("display", "none");
    $(".gninfo").css("display", "block");
    $(".zuixin_article").css("display", "block");
}

var j = 0;
// 上一首歌曲
function shangyishou() {
    var player = document.getElementById("player");
    // alert("为你播放上一首歌曲");
    player.play(); /*播放*/
}

// 暂停or播放歌曲
function bofang() {
    var player = document.getElementById("player");

    j++;
    if (j == 3) {
        j = 1;
    }

    if (j == 1) { //播放音乐
        // alert("播放歌曲");
        //更换图标
        $(".bofan").attr("src", "images/播放.png");
        player.play(); /*播放*/
    } else { //暂停音乐
        // alert("暂停歌曲");
        //更换图标
        $(".bofan").attr("src", "images/暂停.png");
        player.pause();/*暂停*/


    }


}

// 下一首歌曲
function xiayisohu() {
    var player = document.getElementById("player");
    // alert("为你播放下一首歌曲");
    player.play(); /*播放*/
}

var k = 0;
// 换颜色
function huanse() {

    k++;
    if (k == 3) {
        k = 1;
    }
    if (k == 1) {
        $("html").addClass("html");
    } else {
        $("html").removeClass("html");
    }
}








