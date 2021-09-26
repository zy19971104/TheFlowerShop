$(document).ready(function() {
	$(".ZYtop_2").hover(function(){
		$(".ZYtop_2 a").css("color","#c00");
		},function(){
			$(".ZYtop_2 a").css("color","#999");
			}
		
		)
});

$(document).ready(function(){
    //提交表单进行证验
    $("#ZYmyform").submit(function(){
        var flag = true;
        if (!checkUser()) flag = false;
        if (!checkMobile()) flag = false;
        if (!checkPwd()) flag = false;
        if (!checkRepwd()) flag = false;
        return flag;
    })
    //绑定失去焦点事件
    $("#ZYuser").blur(checkUser);
    $("#ZYmobile").blur(checkMobile);
    $("#ZYpwd").blur(checkPwd);
    $("#ZYrepwd").blur(checkRepwd);
    /*用户名验证*/
    function checkUser(){
        var user=$("#ZYuser").val();
        var userId=$("#ZYuser_prompt");
        userId.html("");
        var reg=/^[a-zA-Z][\w_]{4,15}$/;
        if(reg.test(user)==false){
            userId.html("用户名不正确");
            return false;
        }
        return true;
    }   
    /*验证手机号码*/
    function checkMobile(){
        var mobile=$("#ZYmobile").val();
        var mobileId=$("#ZYmobile_prompt");
        mobileId.html("");
        var regMobile=/^1\d{10}$/;
        if(regMobile.test(mobile)==false){
            mobileId.html("手机号码不正确，请重新输入");
            return false;
        }
        mobileId.html("");
        return true;
    }
    /*密码验证*/
    function checkPwd(){
        var pwd=$("#ZYpwd").val();
        var pwdId=$("#ZYpwd_prompt");
        var reg=/^[a-zA-Z0-9]{4,10}$/;
        pwdId.html("");
        if(reg.test(pwd)==false){
            pwdId.html("密码不能含有非法字符，长度在4-10之间");
            return false;
        }
        return true;
    }
    //确认密码
    function checkRepwd(){
        var repwd=$("#ZYrepwd").val();
        var pwd=$("#ZYpwd").val();
        var repwdId=$("#ZYrepwd_prompt");
        repwdId.html("");
        if(pwd!=repwd){
            repwdId.html("两次输入的密码不一致");
            return false;
        }
        return true;
    }


})
$(document).ready(function(e) {
    $(".ZYcopyright a").hover(function(){
		$(this).css("color","#f00");
		},
		function(){
			$(this).css("color","#000");
			}
		)
});