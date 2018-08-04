// JavaScript Document
/**
 * display-slide
 * @authors Your Name (you@example.org)
 * @date    2018-07-18 08:26:12
 * @version $Id$
 */

//jquery包要放在js文件之前

//封装byId函数
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}
//声明全局变量
var index=0,
	timer=null,
	pics=$('#banner div'),
	len=pics.length,
	dots=$('#dots span'),
	prev=$("#prev"),
	next=$('#next');
//移入移出
function slideImg(){
	var main=byId('main');
	main.onmouseover=function(){
		//清除效果
		if(timer) clearInterval(timer);
	}
	main.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
			changeImg();
		},3000);
	}
	//自动调用轮播函数
	main.onmouseout();
	//遍历所有小圆点，点击小圆点
	for (var d = 0; d< len; d++) {
		dots[d].id=d;
		dots[d].onclick=function(){
			index=this.id;
			changeImg();
		}
	}
	//上一张
	prev.click(function(){
		index--;
		if (index<0) {
			index=len-1;
		}
		changeImg();
	})
	//下一张
	next.click(function(){
		index++;
		if (index>=len) {
			index=0;
		}
		changeImg();
	})
}

//改变图片显示情况
function changeImg(){
	for (var i = 0; i < len; i++) {
		pics[i].style.display="none";
		dots[i].className="";
	}
	pics[index].style.display="block";
	dots[index].className="dot-active";
}
//一进入页面就开始执行该函数
slideImg(); 