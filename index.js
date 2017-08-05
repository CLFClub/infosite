

function displayItem(imgurl) {
    var el=$("#left");
    el.css("background-image","url('"+imgurl+"')");
    el.addClass("active");
    //检测是否已经报了名
    // $(".info-baoming>span").text("hello");
}
function undisplayItem() {
    $("#left").removeClass("active");
}
window.onload=function () {
    $("#tabs>a").click(function () {
        $("#tabs>a").removeClass("active");
        $(this).addClass("active");
    });

    var iscitem=false;
    $(".litem").click(function () {
        displayItem($(this).children(".lback").attr("src"));
        iscitem=true;
    })
    $("#right").click(function (e) {
        if(!iscitem)
            undisplayItem();
        iscitem=false;
    });
    //初始化检测
    var hash=window.location.hash;
    if(hash=="") window.location.hash="starting";
    hash=window.location.hash;
    //设置函数
    var setfunc=function (el) {
        $("#tabs>a").removeClass("active");
        $(el).addClass("active");
    }
    setfunc("#btn-"+hash.slice(1,hash.length));
    //报名监听

    $(".info-baoming").click(function () {
        //报名监听 并返回结果
        // $.toast("报名中，请稍后......");
        //检查是否已经报名
        $.toast({
            text:"报名中，请稍后......",
            showHideTransition : 'slide',
            hideAfter : 1000,
            bgColor:"rgba(240,192,203,0.7)",
            textColor:"black"
        });
    });
    $(".info-enterback").click(function () {
        window.location.href="http://www.baidu.com";
    })
}