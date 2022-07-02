//网页加载时运行
$(function () {

    navHeader();
    zhandian();

    $(window).scroll(function () {
        navHeader();
        zhandian();
    })

    function navHeader() {
        if ($(window).scrollTop() > 50) {
            $(".nav").addClass("light");
        } else {
            $(".nav").removeClass("light");
        }
    }

    function zhandian() {
        if ($(window).scrollTop() > 1000) {
            // $(".zhandian").css({"position":"fixed","index":"1","left":"150px","top":"10%"});
             $(".zhandian").addClass("zhandian_gd");
        } else {
            $(".zhandian").removeClass("zhandian_gd");
        }
    }

})


// search框

function search(){
    alert("等待开发");
}
