 $(function(){
    
    // 最热门、最新分享、最推荐
    var index = 1;
    var tabTimer = null;
    $(".tab-nav").on("mouseover","li",function(event){
        event.stopPropagation();
        clearInterval(tabTimer);
        index = $(this).index();
        if(!$(".tab-panel").eq($(this).index()).hasClass('active')){
            $(".tab-nav li").removeClass('active');
            $(this).addClass("active");

            $(".tab-panel").removeClass('active')
                       .eq($(this).index()).addClass('active');
        }
    });

    tabTimer = setInterval(function(){
        if(index>2) index=0; // index = index>2?0:index;
        $(".tab-nav li").removeClass('active').eq(index).addClass("active");
        $(".tab-panel").removeClass('active').eq(index++).addClass('active');
    }, 3000);

    $(".hot-new-recomment").mouseover(function(event){
        event.stopPropagation();
        clearInterval(tabTimer);
    }).mouseout(function(event) {
        event.stopPropagation();
        tabTimer = setInterval(function(){
            if(index>2) index=0; // index = index>2?0:index;
            $(".tab-nav li").removeClass('active').eq(index).addClass("active");
            $(".tab-panel").removeClass('active').eq(index++).addClass('active');
        }, 3000);
    });


    // book-category 下拉
    $(".dropdown-btn").click(function(){
        if($(this).hasClass('down')){
            $(".book-category ul").height(255);
            $(this).removeClass("down").addClass("up");
        }else{
            $(".book-category ul").height(68);
            $(this).removeClass("up").addClass("down");
        }
    });

    // $(window).resize(function(){
    //     console.log(document.documentElement.offsetWidth)
    //     throttle( adjustBookCategoryHeight );
    // })
    // var bookCategoryUl = $(".book-category ul"),
    //     $window = $(window);
    // function adjustBookCategoryHeight(){
    //     var windowWidth = $window.width();
    //     if(windowWidth >= 960 && windowWidth< 1200){
    //         // console.log(windowWidth+"大于960")
    //         bookCategoryUl.height(337);
    //     }else if(windowWidth >= 1200){
    //         // console.log(windowWidth+"大于1200")

    //         bookCategoryUl.height(395);
    //     }
    // }
});