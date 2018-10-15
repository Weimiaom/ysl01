



/****************          轮播图                **********************/
//boxDomObj,width,height,imgs,doudouSize,doudouColor,doudouHighColor,isCircle,direction,timeSpace

let s1 = new Slider(
	$("#box1")[0],
	"100%",
	400,
	["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg","img/ban04.jpg"],
	8,
	"#919191",
	"#000",
	true,
	-1,
	2000);





/****************明星产品左右按钮goods-btn-left******************/

$(".goods-btn-left").click(function(){
	$(".goods-block").animate({
		right:"770px"
	})
	$(".goods-none").animate({
		right:"-20px"
	})
})	
$(".goods-btn-right").click(function(){
	$(".goods-block").animate({
		right:"-20px"
	})
	$(".goods-none").animate({
		right:"-770px"
	})
})

/*********************明星产品tab选项卡切换**********************/
$(function(){
	$(".favorites-aside-nav li").click(function(){
		var index = $(this).index();//获得当前点击标题的下标
		$(this).addClass("is-active-one").siblings().removeClass("is-active-one");//给当前选项添加选中，其他移除选中
		$(".favorites-aside-content .goods-tab").eq(index).show().siblings().hide();//对应下标的内容框显示，其他隐藏
	})
})

/*************移入显示购买及详情***************/

//$(function(){
//	$(".swiper-slide .img-box").mouseover(function(){
//		let n = $(this).index();
//		$(this).css({opacity:0.5});
//		$(".img-box .btn-box").eq(n).show();
//	})
//	$(".img-box").mouseout(function(){
//		let n = $(this).index();
//		$(this).css({opacity:1});
//		$(".swiper-slide .img-box .btn-box").eq(n).hide();
//	})
//})

$(function(){
	$(".img-box").mouseover(function(){
		$(this).find("img").css({opacity:0.5});
		$(this).find(".btn-box").show();
	})
	$(".img-box").mouseout(function(){
		$(this).find("img").css({opacity:1});
		$(this).find(".btn-box").hide();
	})
	$(".btn-icon").mouseover(function(){
		$(this).css({"background-color":"white","color":"black"});
		$(this).find(".icon-btn-shopping").css({"background-position":"-17px -337px"});
	})
	$(".btn-icon").mouseout(function(){
		$(this).css({"background-color":"black","color":"white"});
		$(this).find(".icon-btn-shopping").css({"background-position":"0 -337px"});
	})
	$(".btn-see").mouseover(function(){
		$(this).css({"background-color":"black","color":"white"});
	})
	$(".btn-see").mouseout(function(){
		$(this).css({"background-color":"white","color":"black"});
	})
})


//	
//  $(".img-box").onmouseenter = function () {
//      $(".btn-box").style.display = "block";
//  }
//  $(".img-box").onmouseout = function () {
//      $(".btn-box").style.display = "none";
//  }


    
/******************点击口红变色goods-color********************/

$(function(){
	$(".goods-color-btn-right").click(function(){
		$(".goods-color-ul").animate({left:"-=30px"});
		$(".goods-color-btn-left").show();
	})
	$(".goods-color-btn-left").click(function(){
		$(".goods-color-ul").animate({left:"+=30px"});
	})
})




