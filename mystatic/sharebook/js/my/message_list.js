$(function(){

    // 消息框切换
    var messageListLi = $(".message-header li"),
        messageContentDiv = $(".message-content>div");
    messageListLi.click(function(){
        messageListLi.removeClass('active').eq($(this).index()).addClass('active')
        messageContentDiv.hide().eq($(this).index()).show();
    });


    // 调整window大小，设置footer的position
    $(window).resize(function(){
        throttle(footerFixed);
    })

    // 判断footer是否为fixed，增加美观性
    function footerFixed(){
        var oMain = $("main"),
            oFooter = $("footer");
        if(oMain.outerHeight(true) < $(window).height()){
            oFooter.css('position', 'fixed');
        }else{
            oFooter.css('position', 'static');
        }
    }
});