// JavaScript Document
/*$(document).ready(function() {
    $(".ZYcontant_1_1_3_a img").click(function(){
		location.href='thirdPage7.html';
		})
	$(".ZYcontant_1_1_3_a img:eq(1)").click(function(){
		location.href='thirdPage7_1.html';
		})
	$(".ZYcontant_1_1_3_a img:eq(2)").click(function(){
		location.href='thirdPage7_2.html';
		})
});*/
$(document).ready(function(e) {
    $(".ZYcontant_1_1_3_b a span").css({"color":"#000","font-weight":"bold"});
	 $(".ZYcontant_3_2_1").css({"color":"#00f"});
	  $(".ZYcontant_4_2_1").css({"color":"#00f"});
	$(".ZYcontant_2_2 ul li,.ZYcontant_2_3 ul li").hover(function(){
		$(this).css({"background-color":"#666","color":"#fff"});
		},
		function(){
			$(this).css({"background-color":"#FFFAF0","color":"#333"});
			}
		)
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
/*增加颜色*/
$(document).ready(function(e) {
	$(".ZYcontant_1_3_1 ul li").click(function(){
		$(this).addClass("ZYbg").siblings().removeClass("ZYbg");
		}
		)
});
/**/
$(document).ready(function(e) {
    $(".ZYcontant_1_1_3_a img,.ZYcontant_1_2_1 img").hover(function(){
		$(this).css({"-webkit-transform":"scale(1.1, 1.1)","-moz-transform":"scale(1.1, 1.1)","-o-transform":"scale(1.1, 1.1)","-ms-transform":"scale(1.1, 1.1)","transform":"scale(1.1, 1.1)"});
		},
		function(){
			$(this).css({"-webkit-transform":"scale(1, 1)","-moz-transform":"scale(1, 1)","-o-transform":"scale(1, 1)","-ms-transform":"scale(1, 1)","transform":"scale(1, 1)"});
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
