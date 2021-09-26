// JavaScript Document
/*移入收藏*/
function selects(){
    var flag=confirm("移入收藏后，将不再购物车显示，是否继续操作?");
    if(flag==true){
        alert("移入收藏成功!");
    }
}
/*减少函数*/
function mis(num){
    var prices=document.getElementsByName("price")[num].value;
    var count=parseInt(document.getElementsByName("amount")[num].value)-1;
    if(count<1){
        alert("不能再减了，再减就没有啦！");
    }
    else{
        document.getElementsByName("amount")[num].value=count;
    }
}
/*增加函数*/
function plus(num){
    var prices=document.getElementsByName("price")[num].value;
    var count=parseInt(document.getElementsByName("amount")[num].value)+1;
    document.getElementsByName("amount")[num].value=count;
}
$(document).ready(function(){
    $(".intro").css("color","#666");
    /*价格设置字体加大加粗红色*/
    $("#jdPrice>span").css({"font-size":"24px","font-weight":"bold","color":"red"});
    $("#jdPrice p").css({"color":"#cccccc"});//字体灰色
    $("#jdPrice p span").css({"text-decoration":"line-through"});

    $("dl").css("color","#ff0000");  //dl中字体颜色为红色
    $("dl span,#ticket span").css({"background":"#ff0000","color":"#ffffff","padding":"1px 5px","margin-right":"5px"});

    $("dt").hover(function(){   //获取<dt>标签并为其添加click事件函数
        $("dd").css("display","block"); //获取<dd>标签设置显示
    });
})

$(document).ready(function(e) {
    $(".contant_end").click(function(){
		$(".yincang").show();
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

$(document).ready(function() {
		$(".ZYcopyright a").hover(function() {
		$(this).css("color","#f00");	
		},
		function(){
			$(this).css("color","#000");
			}
		)
	})
