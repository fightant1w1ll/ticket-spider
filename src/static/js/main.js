Vue.use(VueResource);
new Vue({
    el: "#app",
    data: function() {
        return {
            userInfo: {
                username: "",
                password: "",
                startDate: "",
                startPlace: "",
                arrivePlace: "",
                seatType: "",
                answer: ""
            },
            seatTypeOptions: [
                {
                    value: "0",
                    label: "商务座/特等座"
                },
                {
                    value: "1",
                    label: "一等座"
                },
                {
                    value: "2",
                    label: "二等座"
                },
                {
                    value: "3",
                    label: "软卧"
                },
                {
                    value: "4",
                    label: "硬卧"
                },
                {
                    value: "5",
                    label: "软座"
                },
                {
                    value: "6",
                    label: "硬座"
                },
                {
                    value: "7",
                    label: "无座"
                }
            ],
            labelPosition: "right",
            captchaSrc: ""
        }
    },
    computed: {
        // captchaSrc: vm => vm.a * 2
    },
    methods: {
        submit(){
            console.log(this.userInfo);
        },
        getCaptcha(){
            console.log("inside getCaptcha")
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
            this.$http.get("http://kyfw.12306.cn/passport/captcha/captcha-image64", param)
                .then(res => {
                    console.log(res);
                    let bodyJson = JSON.parse(res.bodyText);
                    let base64 = bodyJson.image;
                    // $("#captchaImage").attr("src", "data:image/jpg;base64," + base64);
                    this.captchaSrc = "data:image/jpg;base64," + base64;
                });
        }
    }
})

// function getCaptcha() {
//     var timestamp = new Date().getTime();
//     var param = {
//         login_site: 'E',
//         module: 'login',
//         rand: 'sjrand',
//         // timestamp.tostring(): '',
//         callback: "jQuery191033323255941152774_" + new Date().getTime(),
//         _: new Date().getTime(),
//     }
//     param[timestamp] = '';
//     $.ajax({
//         url : "http://kyfw.12306.cn/passport/captcha/captcha-image64",
//         type : "get",
//         dataType : "text",
//         data : param,
//         success : function(result) {
//             console.log(result);
//             var a = result.indexOf('{');
//             var b = result.lastIndexOf('}');
//             console.log(a);
//             var base64 = JSON.parse(result.substring(a, b + 1)).image;
//             console.log(JSON.parse(result.substring(a, b + 1)));
//             $("#captchaImage").attr("src", "data:image/jpg;base64," + base64);
//         },
//         error : function(msg) {
//             console.log(msg);
//         }
//     });
// }


// var captchaBtn = document.getElementById("captchaBtn");
// captchaBtn.onclick = getCaptcha;

// var captchaImage = $("#captchaImage");