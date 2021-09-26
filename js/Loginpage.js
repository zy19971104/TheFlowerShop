// JavaScript Document
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
        if (!checkPwd()) flag = false;
        return flag;
    })
    //绑定失去焦点事件
    $("#ZYuser").blur(checkUser);
    $("#ZYpwd").blur(checkPwd);
    //绑定获得焦点事件
    $("#ZYuser").focus(showUser);
    $("#ZYpwd").focus(showPwd);
    /*账号验证*/
    function checkUser(){
        var user=$("#ZYuser").val();
        var userId=$("#ZYuser_prompt");
        userId.html("");
        var reg=/^user1$/;
        if(reg.test(user)==false){
            userId.html("账号不正确");
            return false;
        }
        return true;
    }

    /*密码验证*/
    function checkPwd(){
        var pwd=$("#ZYpwd").val();
        var pwdId=$("#ZYpwd_prompt");
        pwdId.html("");
        var reg=/^123456$/;
        if(reg.test(pwd)==false){
            pwdId.html("密码填写不正确");
            return false;
        }
        return true;
    }
    //账号输入提示
    function showUser(){
        var userId=$("#ZYuser_prompt");
        userId.html("请输入账号");
    }
    //密码输入提示
    function showPwd(){
        var pwdId=$("#ZYpwd_prompt");
        pwdId.html("请输入密码");
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
