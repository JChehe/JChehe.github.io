$(function(){

    $(".row-fluid").on("click","button",function(){
        $(".dialog").fadeIn(200);
    })


    $(".close-btn").click(function(event) {
        $(".dialog").fadeOut('100', function() {
            
        });
    });
})