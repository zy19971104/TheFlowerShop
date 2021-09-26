// JavaScript Document
	//鼠标悬浮显示介绍
$(document).ready(function(){
$(".ZYcase-list li").hover(function() {
		$(this).find('.ZYcase-show-img').hide();
		$(this).find('.ZYcase-show').stop().fadeIn();
	}, function() {
		$(".ZYcase-list li .ZYcase-show").hide();
		$(this).find('.ZYcase-show-img').stop().fadeIn();
});
});

$(document).ready(function(){
    $(".ZYcont dt").toggle(
       function(){$(this).siblings().slideDown("slow");},
      function(){$(this).siblings().slideUp("slow");}
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
	$(".ZYcontant_1_6_1 ul li").click(function(){
		$(this).addClass("ZYbg").siblings().removeClass("ZYbg");
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