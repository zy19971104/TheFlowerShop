// JavaScript Document
<!--导航-->
$(document).ready(function() {
    $(".ZYlogo_1 img").click(function(){
		location.href='index.html';
		})
	$(".ZYmain_first_a ul li a").hover(function(){
		$(this).css("background-color","#111");
		},function(){
			$(".ZYmain_first_a ul li a").css("background-color","#999");
			}
		
		)
});

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
<!--文字滚动-->
var max=0;
function textlist()  //自己的对象,存储字符串
{
  max=textlist.arguments.length;
  for (i=0; i<max; i++)
   this[i]=textlist.arguments[i];
}
tl=new textlist    
(
        "欢迎进入",
		"阳阳花店"
);
var x=0; pos=0;
var l=tl[0].length;
function ZYtextticker() 
{        
  document.form1.textfeld.value=tl[x].substring(0,pos)+"_";
  if(pos++==l)
        {
         pos=0;
         setTimeout("ZYtextticker()",1000); //控制两段话间的转换时间
         x++;
         if(x==max)
          x=0;
          l=tl[x].length;
        } else
  setTimeout("ZYtextticker()",800);  //控制文字间的显示时间
}
<!--轮播-->
$(document).ready(function(){
     var ZYtransform = $(".ZYmain_top_2");
     var ul = ZYtransform.find("ul");
     var oneWidth = ZYtransform.find("ul li").eq(1).width();
     var number = ZYtransform.find(".ZYmain_top_2_spanBox span");           
     var timer = null;
     var sw = 1;                    
     //每个span绑定click事件，完成切换颜色和动画，以及读取参数值
     number.on("click",function (){
     $(this).addClass("ZYmain_top_2_active").siblings("span").removeClass("ZYmain_top_2_active");
     sw=$(this).index();
     ul.animate({
            "right":oneWidth*sw,    //ul标签的动画为向左移动；
               });
     });
            
})
<!--滚动字幕-->
function autoScroll(obj){  
	$(obj).find("ul").animate({  
		marginTop : "-39px"  
	},500,function(){  
		$(this).css({marginTop : "0px"}).find("li:first").appendTo(this);  
	   })  
	}  
	$(function(){  
		setInterval('autoScroll(".ZYmain_top_3_b")',2000);
			  
}) 
<!---->
$(document).ready(function(e) {
    $(".ZYmain_top_3_c ul li a").toggle(function(){
		$(this).css("color","#fc0");
		},
		function(){
			$(this).css("color","#f00");
			},
			function(){
			$(this).css("color","#000");
			}
		)
});

$(document).ready(function() {
		$(".ZYwrap ul li").hover(function(){
			$(this).css({"background-color":"#c9a467","color":"white","border":"none"});
			},
			function(){
				$(this).css({"background-color":"#fff","color":"#000"});
				}
			)
})


$(document).ready(function() {
		$(".ZYtabs li").hover(function() {
			var i = $(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			$(".ZYtab-content").removeClass("show").eq(i).addClass("show");
		})
		$(".ZYcol-sm-3 .ZYtab-card").hover(function(){
			$(this).css({"background-color":"#c9a467","color":"#666"});
			},
			function(){
				$(this).css({"background-color":"#fff","color":"#000"});
				}
			)
})

$(document).ready(function(){
	$("#ZYleftsead a").hover(function(){
			$(this).children("img.ZYhides").show();
			$(this).children("img.ZYshows").hide();
			$(this).children("img.ZYhides").animate({marginRight:'0px'},'slow'); 
		
	},function(){ 
			$(this).children("img.ZYhides").animate({marginRight:'-143px'},'slow',function(){$(this).hide();$(this).next("img.ZYshows").show();});
	});

	$("#ZYtop_btn").click(function(){if(scroll=="off") return;$("html,body").animate({scrollTop: 0}, 600);});

})
	
$(document).ready(function() {
		$(".ZYcopyright a").hover(function() {
		$(this).css("color","#f00");	
		},
		function(){
			$(this).css("color","#000");
			}
		)
		
})
