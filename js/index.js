
/**************滑过顶部显示登录注册*****************/
$(function(){
	$(".center-left li").mouseover(function(){
		let index = $(this).index();
		$(".center-left .header-sub-menu").eq(index).show();
	})
	$(".center-left li").mouseout(function(){
		let index = $(this).index();
		$(".center-left .header-sub-menu").eq(index).hide();
	})
	$(".center-right li").mouseover(function(){
		let index = $(this).index();
		$(".center-right .header-sub-menu").eq(index).show();
	})
	$(".center-right li").mouseout(function(){
		let index = $(this).index();
		$(".center-right .header-sub-menu").eq(index).hide();
	})
})

/*************             二级菜单             ******************/

//	$(".nav-left ul li a").mouseover(function(){
//		$(this).css({color: "#cb9864"});
//	})
//	
//	$(".nav-left ul li a").mouseout(function(){
//		$(this).css({color: "#000"});
//	})
////	彩妆
//	$(".caizhuang").mouseover(function(){
//		$(".sub-menu-caizhuang").show();
//		$(".look-one").show();
//	});
//	$(".caizhuang").mouseout(function(){
//		$(".sub-menu-caizhuang").hide();
//		$(".look-one").hide();
//	});
//	$(".sub-menu-caizhuang").mouseover(function(){
//		$(".sub-menu-caizhuang").show();
//		$(".look-one").show();
//		$(".caizhuang a").css({color: "#cb9864"});
//	});
//	$(".sub-menu-caizhuang").mouseout(function(){
//		$(".sub-menu-caizhuang").hide();
//		$(".look-one").hide();
//		$(".caizhuang a").css({color: "#000"});
//	})
////	护肤
//	$(".hufu").mouseover(function(){
//		$(".sub-menu-hufu").show();
//		$(".look-two").show();
//	});
//	$(".hufu").mouseout(function(){
//		$(".sub-menu-hufu").hide();
//		$(".look-two").hide();
//	});
//	$(".sub-menu-hufu").mouseover(function(){
//		$(this).show();
//		$(".look-two").show();
//		$(".hufu a").css({color: "#cb9864"});
//	})
//	$(".sub-menu-hufu").mouseout(function(){
//		$(this).hide();
//		$(".look-two").hide();
//		$(".hufu a").css({color: "#000"});
//	})
////	香水
//	$(".xiangshui").mouseover(function(){
//		$(".sub-menu-xiangshui").show();
//		$(".look-three").show();
//	});
//	$(".xiangshui").mouseout(function(){
//		$(".sub-menu-xiangshui").hide();
//		$(".look-three").hide();
//	});
//	$(".sub-menu-xiangshui").mouseover(function(){
//		$(".sub-menu-xiangshui").show();
//		$(".look-three").show();
//		$(".xiangshui a").css({color: "#cb9864"});
//	});
//	$(".sub-menu-xiangshui").mouseout(function(){
//		$(".sub-menu-xiangshui").hide();
//		$(".look-three").hide();
//		$(".xiangshui a").css({color: "#000"});
//	})

$(function(){
	$(".nav-left li").mouseover(function(){
		let index = $(this).index();
		$(".nav-left li a:first-child").eq(index).css({color: "#cb9864"});
		$(".nav .sub-menu-2").eq(index).show();
	})
	$(".nav-left li").mouseout(function(){
		let index = $(this).index();
		$(".nav-left li a:first-child").eq(index).css({color: "#000"});
		$(".nav .sub-menu-2").eq(index).hide();
	})
	$(".nav .sub-menu-2").mouseover(function(){
		$(this).show();
		let index = $(this).index();
		$(".nav-left li a:first-child").eq(index-1).css({color: "#cb9864"});
		
	})
	$(".nav .sub-menu-2").mouseout(function(){
		$(this).hide();
		let index = $(this).index();
		$(".nav-left li a:first-child").eq(index-1).css({color: "#000"});
	})
})


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


/***********            返回顶部                  ****************/

/*当滚动条的垂直位置大于500时，回到顶部按钮就显示 */
/*
$(window).on("scroll",function(){
	if($(window).scrollTop()>660){
		$(".back-box").fadeIn();
	}else{
		$(".back-box").fadeOut();
	}
});
*/
/*
function backToTop(){
	$("html.body").animate({
		scrollTop:0
	},600);
}
$(".back-top").on("click",backToTop);
*/
$(window).scroll(function(){
	if($(window).scrollTop()>660){   //当滚动条的垂直位置大于500时，回到顶部按钮就显示
		$(".back-box").fadeIn();
	}else{
		$(".back-box").fadeOut();
	}
	if($(window).scrollTop()>160){    //当滚动条的垂直位置大于160时，导航栏固定
		$(".header-bottom").css({
			"position":"fixed",
			"left":0,
			"top":0
		})
	}else{
		$(".header-bottom").css({
			"position":"static"
		})
	}
});

$(".back-top").click(function(){
	$("html.body").animate({
		scrollTop:0
	},600);
});

//触发滚动事件，避免刷新的时候显示回到顶部按钮
$(window).trigger("scroll");


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
		$(".goods-color-ul").animate({left:"-30px"});
		$(".goods-color-btn-left").show();
	})
})




