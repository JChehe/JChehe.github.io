
$(document).ready(function(){

    // 点击“编辑”按钮的处理事件
    $(".edit-btn").click(function(event){
        event.preventDefault();
        var index = $(".edit-btn").index($(event.target));
        var curEdit = $(".edit").eq(index);
        if(curEdit.is(":hidden")){ //这里要添加异步提交，提交成功后才执行
            curEdit.show().prev().hide();

        }else{
            curEdit.hide().prev().show();
        }
        if($(this).val() == "编辑"){
            $(this).val("保存");
        }else{
            $(this).val("编辑");
        }

        // console.log(curEdit.prev().children('div').find("p").length)
        curEdit.prev().children('div').find("p").each(function(index){
            // 针对纯文本框，判断有无"马上填写"这个span，如有，则文本框为空，否则文本框为对应的字符串
            if(!curEdit.children('div').eq(index).hasClass("default-contact") &&curEdit.children('div').eq(index).find("input").attr('type') == 'text'){
                if(curEdit.prev().children('div').eq(index).find("p span").length>0){
                    curEdit.children('div').eq(index).find("input").val('');
                }else{
                    curEdit.children('div').eq(index).find("input").val($(this).text());
                }
            // 这里针对 性别 选择的单选框
            }else if(curEdit.children('div').eq(index).find("input").attr('type') == 'radio'){
                if($(this).text() == '男'){
                    curEdit.children('div').eq(index).find("input").eq(0).attr("checked","checked");
                }else{
                    curEdit.children('div').eq(index).find("input").eq(1).attr("checked","checked");
                }

            // 用来判断 生日、年级专业等这些下拉选择，用'-'作为分隔符将原来的字符串分隔为数组，然后将数组与option的文本(注意不是value值)比较。
            }else if(curEdit.children('div').eq(index).find("select").length > 0){ 
                var aCompare = curEdit.prev().children('div').eq(index).find("p").text().split("-");

                curEdit.children('div').eq(index).find("select").each(function(indexSelect){
                    $(this).find('option').each(function(indexOption){
                        if($(this).text() == aCompare[indexSelect]){
                            $(this).attr("selected", "selected");
                        }
                    })
                });
                // 针对默认的联系方式
                if(curEdit.children('div').eq(index).hasClass("default-contact")){
                    curEdit.children('div').eq(index).find("input").val(aCompare[1]);

                }
            }
        })

    });
    

    // 点击“马上填写”按钮，触发“编辑”按钮的click事件
    $(".user-info-detail").on('click', '.fill-in', function(){
        if($(this).parents('.base-info-content').length > 0){
            $(".edit-btn").eq(0).trigger('click')
        }else if($(this).parents('.contact-info-content').length > 0){
            $(".edit-btn").eq(1).trigger('click')
        }else{
            $(".edit-btn").eq(2).trigger('click')
        }
    });


    // 调用birthday.js插件，初始化
    $.ms_DatePicker({ 
            YearSelector: ".sel_year", 
            MonthSelector: ".sel_month", 
            DaySelector: ".sel_day" 
    }); 


    // 对email、qq、phone、duanhao进行验证
    validation($(".edit.contact-info-content .email"),{"email":true});
    validation($(".edit.contact-info-content .qq"),{"digits":true});
    validation($(".edit.contact-info-content .phone"),{"minLength":11,"maxLength":11,"digits":true});
    validation($(".edit.contact-info-content .duanhao"),{"digits":true});

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