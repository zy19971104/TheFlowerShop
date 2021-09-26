// JavaScript Document
$(document).ready(function() {
    $(".ZYcontant_b_c span:eq(0)").click(function(){
		location.href='thirdPage8.html';
		})
});

/*搜索获取失去焦点*/
$(document).ready(function(e) {
    $("#ZYsearch").focus(function(){
		var text_value=$(this).val();
		if(text_value="搜索"){
			$(this).val("");
			}
		});
		$("#ZYsearch").blur(function(){
		var text_value=$(this).val();
		if(text_value=" "){
			$(this).val("搜索");
			}
		})
});

<!--下拉列表-->
$(document).ready(function(){
     $(".ZYmain_first_a .ZYstr").hover(function(){
			$(".ZYtopDown").show("slow");
		},
		function(){
			$(".ZYtopDown").hide("slow");
		}
	);
	$(".ZYmain_first_a .ZYstr1").hover(function(){
			$(".ZYtopDown1").show("slow");
		},
		function(){
			$(".ZYtopDown1").hide("slow");
		}
	);
	$(".ZYmain_first_a .ZYstr2").hover(function(){
			$(".ZYtopDown2").show("slow");
		},
		function(){
			$(".ZYtopDown2").hide("slow");
		}
	);
	$(".ZYmain_first_a .ZYstr3").hover(function(){
			$(".ZYtopDown3").show("slow");
		},
		function(){
			$(".ZYtopDown3").hide("slow");
		}
	);
	$(".ZYmain_first_a .ZYstr4").hover(function(){
			$(".ZYtopDown4").show("slow");
		},
		function(){
			$(".ZYtopDown4").hide("slow");
		}
	);

});
/*导航*/
$(document).ready(function(e) {
    $(".ZYmain_first_a ul li a").hover(function(){
		$(this).css("background-color","#111");
		},function(){
			$(".ZYmain_first_a ul li a").css("background-color","#999");
			}
		
		)
});
/*评论*/
$(document).ready(function(){
    var headImg=new Array("head01.jpg","head02.jpg","head03.jpg");
    var uName=new Array("大大","小小","圆圆");
    $("#ZYsend").click(function(){
        if($(".ZYchatText").val().length>0){  //判断当前输入框中是否有内容
            var str=$(".ZYchatBody").html();     
            var iNum=Math.floor(Math.random()*3);  
            var headStr="<div><img src=images/"+headImg[iNum]+"></div>";  
            var userName="<p>"+uName[iNum]+"</p>";                        
            var chatStr="<div>"+$(".chatText").val()+"</div>";    
            var currentStr="<section>"+headStr+userName+chatStr+"</section>"; 
            $(".ZYchatBody").html(str+currentStr);
            $(".ZYchatBody section div:last").addClass("ZYchatContent");
            $(".ZYchatText").val("");
        }
    });
})

/*增加颜色*/
$(document).ready(function(e) {
	$(".ZYcontant_1_6_1 ul li,.ZYcontant_1_1_1 ul li,.ZYcontant_1_3 ul li").click(function(){
		$(this).addClass("ZYbg").siblings().removeClass("ZYbg");
		}
		)
});
$(document).ready(function(e) {
    $(".ZYcontant_a img").hover(function(){
		$(this).css({"-webkit-transform":"scale(1.1, 1.1)","-moz-transform":"scale(1.1, 1.1)","-o-transform":"scale(1.1, 1.1)","-ms-transform":"scale(1.1, 1.1)","transform":"scale(1.1, 1.1)"});
		},
		function(){
			$(this).css({"-webkit-transform":"scale(1, 1)","-moz-transform":"scale(1, 1)","-o-transform":"scale(1, 1)","-ms-transform":"scale(1, 1)","transform":"scale(1, 1)"});
			}
		)
});
$(document).ready(function(e) {
    $(".ZYcontant_3_1").hover(function(){
		$(this).css({"box-shadow":" 0 1px 10px 0 #000"});
		},
		function(){
			$(this).css({"box-shadow":" 0 0 0 0 "});
			}
		)
});
$(document).ready(function() {
		$(".ZYcopyright a").hover(function() {
		$(this).css("color","#f00");	
		},
		function(){
			$(this).css("color","#000");
			}
		)
	})
