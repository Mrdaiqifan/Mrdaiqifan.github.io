window.onload=function(){
		var imgs =document.getElementsByClassName("ami1");
		var niu = document.getElementById("niu");
		var namer = document.getElementById("mingzi");
		var tels = document.getElementById("tel");
		var play = document.getElementById("play");
		var video = document.getElementById("video");
		var page = document.getElementsByClassName("page");
		var audios=document.getElementById("audio");
		//用户名和手机号
		var namevalue = "";
		var telvalue = "";
		var index = 0;
		var bgl=document.getElementsByClassName("bgl");
		var bool=true;
		for(var i = 0; i < imgs.length; i++) {					
			imgs[i].className=imgs[i].getAttribute("_class");
		}
		for(var i = 0; i < page.length; i++) {
			page[i].index = i;
			page[i].bool=true;
			page[i].addEventListener("touchstart", function() {
				if(this.index != 2) {
					video.pause();
					play.style.display = "block";
				}
				if(this.index==1||this.index==3||this.index==5){			
					if(this.bool==true){
					audios.play();
					}
					this.bool=false;
				}
			})
		}
//		for(var i = 0; i < bgl.length; i++) {
//			bgl[i].addEventListener("touchmove",function(){
//				audios.play();
//			})
//		}
		play.addEventListener("touchstart", function() {
			play.style.display = "none";
			video.play();
		});
	
			niu.addEventListener("touchstart", function() {
			niu.style.width = 45 + "%";
			niu.style.left = 30 + "%";
			niu.style.top = 23 + "%";
			namevalue = namer.value;
			telvalue = tels.value;

		})
		niu.addEventListener("touchend", function() {
				niu.style.width = 50 + "%";
				niu.style.left = 28 + "%";
				niu.style.top = 22 + "%";
				checkUserName(namevalue);
				checkTelephone(telvalue);
		})
				//判断姓名
function checkUserName(username){
	if (username.length < 5 || username.length > 16) {
		alert("用户名长度不对，应该在5到16个字符。");
		return false;
	}else{
		var regStr = /^[a-zA-Z][a-zA-Z0-9_]+$/;
		var reg = new RegExp(regStr);
		if (reg.test(username)) {
			return true;
		}else{
			alert("用户名不规范，应包括数字、字母、下划线，以字母开头。");
			return false;
		}
	}
}

function checkTelephone(tels){
	var regStr = /^1[3578][0-9]{9}$/;
	var reg = new RegExp(regStr);
	if (reg.test(tel)) {
		return true;
	}else{
		alert("手机号不正确，请输入正确的手机号");
		return false;
	}
}
	var ado =document.getElementById("ado");
document.addEventListener("touchstart",function(){
	ado.play();
},false)
}

