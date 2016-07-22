/* 
* @Author: anchen
* @Date:   2015-03-29 10:06:39
* @Last Modified by:   anchen
* @Last Modified time: 2015-03-29 15:27:10
*/

$(document).ready(function(){
    // 当屏幕小于992px时，navbar-toggle按钮就会出现，点击它 显示/隐藏 导航条
    $(".navbar-toggle").click(function(){
        if($(".header-center-wrap").hasClass('in')){
            $(".header-center-wrap").removeClass('in');
        }else{
            $(".header-center-wrap").addClass('in');
        }
    });
});
    
    /*
     * 表单验证函数
     * digits:true              值必须由且仅由数字组成，可以用手机、QQ
     * digitsAndLetter:true     值必须是由数字和字母组成
     * email:true               值必须是一个有效的邮箱地址
     * maxLength:length         值的长度必须小于等于length个字符
     * minLength:length         值的长度必须有length个字符
     * range:[minVal, maxVal]   值必须是数字，大于等于minVal， 并且小于等于maxVal
     * required：true           必须填写，即禁止为空
     * concatStr:string         带连接字符串
     * forbiddenCharacter:true  禁止的字符，针对昵称
    */
    function validation(ele,obj){
                    
        // 用$包装多一次，防止是DOM对象
        var ele = $(ele);

        var allowSubmit = false;
        ele.parents("form").submit(function(event){
            event.preventDefault();
            return false;
        })
        ele.blur(function(){
            var that = $(this)
            var tbcStr = that.val(); //待确认字符串
            if(obj.concatStr == undefined) obj.concatStr = "";
            
            if(obj.digits && tbcStr.length >0 && tbcStr.search(/\D/) !== -1){
                console.log(tbcStr.length)
                that.next().height('auto').text("*"+obj.concatStr+"存在非数字字符")
            }else if(obj.digitsAndLetter && tbcStr.search(/\W/) !== -1){
                that.next().height('auto').text("*"+obj.concatStr+"存在非数字或非字母字符")
            }else if(obj.required && tbcStr.length === 0){
                that.next().height('auto').text("*"+obj.concatStr+"不能为空");
            }else if((obj.minLength!=null || obj.minLength!=null) && tbcStr.length >0 && (tbcStr.length <obj.minLength || tbcStr.length >obj.maxLength)){
                var errText = "";
                if(obj.minLength!=null && obj.maxLength == null){
                    errText = "*"+obj.concatStr+"长度最短为"+obj.minLength+"位";
                }else if(obj.minLength==null && obj.maxLength != null){
                    errText = "*"+obj.concatStr+"长度最常为"+obj.minLength+"位";
                }
                else if(obj.minLength !== obj.maxLength){
                    errText = "*"+obj.concatStr+"长度小于"+obj.minLength+"位或大于"+obj.maxLength+"位";
                }else{
                    errText = "*"+obj.concatStr+"长度只能为"+obj.minLength+"位";
                }
                that.next().height('auto').text(errText);
            }else if(obj.forbiddenCharacter && tbcStr.search(/[\s\`\$\!\+\-\*\/\/\\\(\)\[\]\{\}\=\^#@&]/) !== -1 ){
                that.next().height('auto').text("*"+obj.concatStr+"含有空白符或非法字符");
            }else if(obj.email){
                // 输入的数据必须包含 @ 符号和点号(.)。同时，@ 不可以是邮件地址的首字符，并且 @ 之后需有至少一个点号
                apos=tbcStr.indexOf("@")
                dotpos=tbcStr.lastIndexOf(".")
                if (apos<1||dotpos-apos<2){
                    that.next().height('auto').text("*"+obj.concatStr+"不是合法邮箱地址");
                    return false;
                }
                else {
                    return true;
                }
            }else{
                // console.log("该字符串合法")
                that.next().height(0).text("");
                that.parents("form").unbind('submit');
                // 服务器返回数值，数值代表特定的错误
                $.post("http://wwww.baidu.com",that.val(),function(data,status){

                });
            }
        })
    }


    // 主要针对IE浏览器，其他高级浏览器自动会有优化
    function throttle(method, context){
        clearTimeout(method.tId);
        method.tId = setTimeout(function(){
            method.call(context);
        }, 100);
    }