<template>
	<div>
		<section id="wrapper">
			<header id="all_header">
    			<!-- <router-link id="back" to="/"><i class="iconfont icon_header"></i></router-link> -->
    			<p>绑定手机</p>
    			<!-- <router-link id="guize" to="/yaoqingli_guize"><span>奖励规则</span></router-link> -->
        	</header>
        	
        	<main class="main1">
        		<header><img src="../../../../dist/assets/yql_phone_top.jpg"/>为了您的账号安全，请及时绑定手机号</header>
        		<form action="">
        			<ul>
        				<li class="phone">手机号
        					<input type="tel" placeholder="请填写绑定手机号" />
        					<span id="obtain" @click="settime(this)">获取验证码</span>
        				</li>
        				<li class="verification">验证码
        					<input type="text" placeholder="请填写验证码" />
        				</li>
        				 <li class="images">图片验证码
        				 	<input id="input" type="text" placeholder="(点击图片刷新)" />
        				 	<span id="code" @click="createCode"></span>
        				 </li> 
        			</ul>
        		</form>
        	</main>
        	
        	<div class="menu" @click="validate">立刻绑定</div>
        	
        	<p id="footer">收不到短信？请拨打<a href="tel:">客服</a></p>
		</section>
	</div>
</template>
<script>
	var countdown = 60;	// 全局定义倒计时时间
	var code ; //在全局定义验证码   
	export default {
		data() {
				return {
					
				}
			},
			computed: {},
			methods: {
				settime(val) { 
					var timer = setInterval(function() { 
						if (countdown == 0) { 
							$("#obtain")[0].innerHTML = "获取验证码"
							countdown = 60;
							alert("重新获取");
							// 清除定时器
							clearInterval(timer);
							console.log($("#obtain")[0].innerHTML);
						} else { 
							$("#obtain")[0].innerHTML = countdown + "秒后重新获取";
							countdown--;
							console.log(countdown);
							console.log($("#obtain")[0].innerHTML);
						};
					},1000);
				},
				//校验验证码  
				validate(){  
				    var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写        
				    if(inputCode.length <= 0) { //若输入的验证码长度为0  
				        alert("请输入验证码！"); //则弹出请输入验证码  
				    }         
				    else if(inputCode != code.toUpperCase() ) { //若输入的验证码与产生的验证码不一致时  
				        alert("验证码输入错误！@_@"); //则弹出验证码输入错误  
				        createCode();//刷新验证码  
				        document.getElementById("input").value = "";//清空文本框  
				    }         
				    else { //输入正确时  
				        alert("^-^"); //弹出^-^  
				    }
				    // 产生验证码
				    function createCode () {  
					    code = "";   
					    var codeLength = 4;//验证码的长度  
					    var checkCode = document.getElementById("code");   
					    var random = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'); // 随机数  
					    for(var i = 0; i < codeLength; i++) {//循环操作  
					        var index = Math.floor(Math.random() * 61);//取得随机数的索引（0~35）  
					        code += random[index];//根据索引取得随机数加到code上  
					    }
					    var r = parseInt(Math.random(0, 255) * 255);
					    var g = parseInt(Math.random(0, 255) * 255);
					    var b = parseInt(Math.random(0, 255) * 255);
					    checkCode.style.color = "rgb(" + r + "," + g + "," + b + ")";
					    checkCode.innerHTML = code;//把code值赋给验证码
					    checkCode.style.borderColor = "rgb(" + r + "," + g + "," + b + ")";
					    // 图片验证码位置
					    var rz = parseInt(Math.random(-45, 45) * 90 - 45);
					    checkCode.style.transform = "rotateZ(" + rz + "deg)";
					}
				},
				// 产生验证码
				createCode(){  
				    code = "";   
				    var codeLength = 4;//验证码的长度  
				    var checkCode = document.getElementById("code");   
				    var random = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'); // 随机数  
				    for(var i = 0; i < codeLength; i++) {//循环操作  
				        var index = Math.floor(Math.random() * 61);//取得随机数的索引（0~60）  
				        code += random[index];//根据索引取得随机数加到code上  
				    }
				    var r = parseInt(Math.random(0, 255) * 255);
				    var g = parseInt(Math.random(0, 255) * 255);
				    var b = parseInt(Math.random(0, 255) * 255);
				    checkCode.style.color = "rgb(" + r + "," + g + "," + b + ")";
				    checkCode.innerHTML = code;//把code值赋给验证码  
				    checkCode.style.borderColor = "rgb(" + r + "," + g + "," + b + ")";
				    // 图片验证码位置
				    var rz = parseInt(Math.random(-45, 45) * 90 - 45);
				    checkCode.style.transform = "rotateZ(" + rz + "deg)";
				}
			},
			components: {
			},
	}
	// 产生验证码
	window.onload = function createCode(){  
	    code = "";   
	    var codeLength = 4;//验证码的长度  
	    var checkCode = document.getElementById("code");   
	    var random = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//随机数  
	    for(var i = 0; i < codeLength; i++) {//循环操作  
	        var index = Math.floor(Math.random() * 61);//取得随机数的索引（0~60）  
	        code += random[index];//根据索引取得随机数加到code上  
	    }
	    var r = parseInt(Math.random(0, 255) * 255);
	    var g = parseInt(Math.random(0, 255) * 255);
	    var b = parseInt(Math.random(0, 255) * 255);
	    checkCode.style.color = "rgb(" + r + "," + g + "," + b + ")";
	    checkCode.innerHTML = code;//把code值赋给验证码  
	    checkCode.style.borderColor = "rgb(" + r + "," + g + "," + b + ")";
	    // 图片验证码位置
	    var rz = parseInt(Math.random(-45, 45) * 90 - 45);
	    checkCode.style.transform = "rotateZ(" + rz + "deg)";
	}
</script>
<style lang="sass" scoped>
	section {
		/*background: rgb(255,255,255);*/
		#all_header{
	    	width: 100%;
	    	height: 88px;
	    	line-height: 88px;
	    	padding: 0 24px;
	    	font-size: 36px;
	    	background: #fff;
	    	text-align: center;
	    	z-index: 100;
	    	border-bottom: 1px solid #ededed;
	    	over-flow: hidden;
	    	position: relative;
	    	.icon_header::before{
				font-family: 'jyzx-iconfont';
	    		content: "\e604";
	    		font-size: 36px;
	    	}
	    }
	    /* 主体 */
	    .main1{
			header{
			   	height: 90px;
			   	line-height: 90px;
			   	text-align: center;
			   	font-size: 24px;
			   	color: #999;
			   	img{
			   		height: 44px;
			   		width: 44px;
			   		margin-right: 24px;
			   		vertical-align: middle;
			   	}
			}
			form{
				ul{
					background: #fff;
					li{
						height: 80px;
						line-height: 80px;
						padding: 0 24px;
						font-size: 28px;
						color: #333;
						overflow: hidden;
						border-bottom: 1px solid #f1f1f1;
						span{
							display: inline-block;
							height: 50px;
							padding: 0 24px;
							line-height: 50px;
							font-size: 24px;
							color: #fff;
							background: #84b83a;
							float: right;
							margin-top: 15px;
						}
						input{
							height: 30px;
							line-height: 30px;
							font-size: 22px;
							color: #999;
						}
						#code{
							background: #fff;
							border: 1px solid #000;
							color: #000;
						}
					}
					li:last-of-type{
						border: none;
					}
				}
			}
	    }
	   /* 立刻绑定按钮 */
		.menu{
		  	height: 80px;
		  	width: 640px;
		  	margin-top: 64px;
		  	margin-left: 55px;
		  	line-height: 80px;
		  	text-align: center;
		  	border-radius: 5px;
		  	background: #84b83a;
		  	font-size: 33px;
		  	color: #fff;
		}
		
		/* 底部信息 */
		#footer{
		 	text-align: center;
		 	font-size: 24px;
		 	color: #979795;
		 	margin-top: 20px;
		 	margin-left: 55px;
		 	text-align: left;
		 	a{
		 		color: #ff4b3a;
		 	}
		}
	}
</style>