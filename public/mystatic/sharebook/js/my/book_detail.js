$(function(){
    var navLine = $(".nav-line"),
        bookDetail = $(".book-detail"),
        bookComment = $(".book-comment");
    navLine.height($(".book-detail").innerHeight());
    var detailAndDetail = bookDetail.add(bookComment);
    $(".book-detail-and-comment-header li").click(function(){
        detailAndDetail.hide().eq($(this).index()).show();
        if($(this).index() ===0){
            navLine.height(bookDetail.innerHeight());
        }else{
            navLine.height(bookComment.innerHeight());
        }
    })
});