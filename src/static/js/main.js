function getCaptcha() {
    
    var timestamp = new Date().getTime();
    var param = {
        login_site: 'E',
        module: 'login',
        rand: 'sjrand',
        // timestamp.tostring(): '',
        callback: "jQuery191033323255941152774_" + new Date().getTime(),
        _: new Date().getTime(),
    }
    param[timestamp] = '';
    $.ajax({
        url : "http://kyfw.12306.cn/passport/captcha/captcha-image64",
        type : "get",
        dataType : "text",
        data : param,
        success : function(result) {
            console.log(result);
            var a = result.indexOf('{');
            var b = result.lastIndexOf('}');
            console.log(a);
            var base64 = JSON.parse(result.substring(a, b + 1)).image;
            console.log(JSON.parse(result.substring(a, b + 1)));
            $("#captchaImage").attr("src", "data:image/jpg;base64," + base64);
        },
        error : function(msg) {
            console.log(msg);
        }
    });
}


var captchaBtn = document.getElementById("captchaBtn");
captchaBtn.onclick = getCaptcha;

var captchaImage = $("#captchaImage");