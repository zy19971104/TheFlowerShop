// JavaScript Document
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

window.onload = function demo() {
	oCheckBoxAll = document.getElementById("checkAll");
	oCheck = document.getElementsByClassName("checkCss");
	var totalCount = 0;
	var totalMoney = 0;
	var priceTotal = document.getElementById("priceTotal");
	var countTotal = document.getElementById("countTotal");
	var oInputCount = document.getElementsByClassName("inputCountCss");
	var otab = document.getElementById("gwcTable");
	var otr = document.getElementsByTagName("tr");
	var oBtn_jian = document.getElementsByClassName("reduceCss");
	var oBtn_jia = document.getElementsByClassName("addCss");
	var oDel = document.getElementsByClassName("a");
	var orderBtn = document.getElementById("btnOrder");
	var flag = 0; 
	function Fcheck() {
		if(oCheckBoxAll.checked == true) {
			for(i = 0; i < oCheck.length; i++) {
				if(!oCheck[i].checked) { 
					oCheck[i].checked = true;
					flag+=1;
					totalCount += parseInt(oInputCount[i].value);
					totalMoney += parseInt(otr[i + 1].cells[4].innerText);
				}
			}
		} else {
			for(i = 0; i < oCheck.length; i++) {
				oCheck[i].checked = false;
				flag = 0;
			}
			totalCount = 0;
			totalMoney = 0;
		}
		Spantotal();
	}
	//显示总金额和总件数函数
	function Spantotal() {
		countTotal.innerHTML = totalCount;
		priceTotal.innerHTML = totalMoney;
	}
	//单选按钮函数
	function check() {
		for(i = 0; i < oCheck.length; i++) {
			if(this == oCheck[i]) {
				index = i;
				break;
			}
		}
		if(oCheck[index].checked) {
			totalCount += parseInt(oInputCount[index].value);
			totalMoney += parseInt(oInputCount[index].value) * parseInt(otr[index + 1].cells[2].innerText);
			flag+= 1;
		} else {
			totalCount -= parseInt(oInputCount[index].value);
			totalMoney -= parseInt(oInputCount[index].value) * parseInt(otr[index + 1].cells[2].innerText);
			flag-= 1;
		}
		if(flag==oCheck.length){
			oCheckBoxAll.checked=true;
		}
		else{
			oCheckBoxAll.checked=false;
		}
		Spantotal();
	}
	//删除函数
	function shanChu() {
		for(i = 0; i < oDel.length; i++) {
			if(this == oDel[i]) {
				index = i;
				break;
			}
		}
		if(oCheck[index].checked == true) { 
			totalCount -= parseInt(oInputCount[index].value);
			totalMoney -= parseInt(otr[index + 1].cells[4].innerText);
		}
		Spantotal();
		demo();
		otr[index + 1].remove();
	}
	//减按钮功能函数
	function jian() {
		for(i = 0; i < oBtn_jian.length; i++) {
			if(this == oBtn_jian[i]){
				index = i;
				break;
			}
		}
		if(oInputCount[index].value != 0) {
			oInputCount[index].value = oInputCount[index].value - 1;
			otr[index+1].cells[4].innerText = parseInt(oInputCount[index].value) * parseInt(otr[index+1].cells[2].innerText);
			if(oCheck[index].checked && oInputCount[index].value != 0) {
				totalCount -= 1;
				totalMoney -= parseInt(otr[index+1].cells[2].innerText);
				Spantotal();
			}
		}
	}
	//加按钮功能函数
	function jia() {
		for(i = 0; i < oBtn_jian.length; i++) {
			if(this == oBtn_jia[i]){
				index = i;
				break;
			}
		}
		oInputCount[index].value = +(oInputCount[index].value) + 1;
		otr[index+1].cells[4].innerText = parseInt(oInputCount[index].value) * parseInt(otr[index+1].cells[2].innerText);
		if(oCheck[index].checked) {
			totalCount += 1;
			totalMoney += parseInt(otr[index+1].cells[2].innerText);
			Spantotal();
		}
	}
	
	oCheckBoxAll.onclick = Fcheck;			
	for(i = 0; i < oCheck.length; i++)
		oCheck.item(i).onclick = check; 	
	for(i = 0; i < oDel.length; i++)	
	oDel.item(i).onclick = shanChu;			
	for(i = 0; i < oBtn_jian.length; i++)	
		oBtn_jian.item(i).onclick = jian;
	for(i = 0; i < oBtn_jia.length; i++)	
		oBtn_jia.item(i).onclick = jia;
					
}