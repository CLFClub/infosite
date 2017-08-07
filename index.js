

function displayItem(infoobj) {
    var el=$("#left");
    //设置显示的信息
    el.css("background-image","url('"+infoobj.imgsrc+"')");
    $(".info-title").text(infoobj.title);
    $(".info-text").text(infoobj.content);
    //将ID放在标签属性上
    el.attr("data-cid",infoobj.id);
    el.attr("data-already",infoobj.isalready);
    el.addClass("active");
    //检测是否已经报了名
    // $(".info-baoming>span").text("hello");
}
function undisplayItem() {
    $("#left").removeClass("active");
}
$(function () {
    //页面选择事件
    $("#tabs>a").click(function () {
        $("#tabs>a").removeClass("active");
        $(this).addClass("active");
    });

    //表项点击事件
    var iscitem = false;
    $(".litem").click(function () {
        //构造显示信息对象
        var infoobj = {
            id: $(this).attr("data-cid"),
            imgsrc: $(this).children(".lback").attr("src"),
            title: $(this).children().children(".ltitle").text(),
            content: $(this).children().children(".ldesc").text(),
            isalready: $(this).attr("data-already")
        };
        displayItem(infoobj);
        iscitem = true;
    })
    $("#right").click(function (e) {
        if (!iscitem)
            undisplayItem();
        iscitem = false;
    });
    //初始化检测
    var hash = window.location.hash;
    if (hash == "") window.location.hash = "starting";
    hash = window.location.hash;
    //设置函数
    var setfunc = function (el) {
        $("#tabs>a").removeClass("active");
        $(el).addClass("active");
    }
    setfunc("#btn-" + hash.slice(1, hash.length));


    //报名监听
    //报名时取出left标签上的data-cid属性
    $(".info-baoming").click(function () {
        //报名监听 并返回结果
        // $.toast("报名中，请稍后......");
        //检查是否已经报名
        var leftel = $("#left");
        var id = leftel.attr("data-cid");
        var already = leftel.attr("data-already");
        if (already == 'true') $.toast({
            text: "已报名，请勿重复报名!",
            showHideTransition: 'slide',
            hideAfter: 3000,
            bgColor: "rgba(240,192,203,0.7)",
            textColor: "black"
        })
        else {
            $.toast({
                text: "报名中，请稍后......",
                showHideTransition: 'slide',
                hideAfter: 1000,
                bgColor: "rgba(240,192,203,0.7)",
                textColor: "black"
            });
            //进行报名
            //地址先留空
            $.post("#", {id: id}, function () {
                alert("success!");
            }, "text");
        }

    });
    $(".info-enterback").click(function () {
        window.location.href = "http://www.baidu.com";
    })
});