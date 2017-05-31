<template>
	<div>
		<section id="wrapper">
			<header id="all_header">
    			<!-- <router-link id="back" to="/"><i class="iconfont icon_header"></i></router-link> -->
    			<p>绑定手机</p>
    			<!-- <router-link id="guize" to="/yaoqingli_guize"><span>奖励规则</span></router-link> -->
        	</header>
        	
        	<main class="main1">
        		<header><i></i>为了您的账号安全，请及时绑定手机号</header>
        		<form action="">
        			<ul>
        				<li class="phone">手机号
        					<input type="tel" placeholder="请填写绑定手机号" />
        					<span id="obtain" @click="settime(this)">获取验证码</span>
        				</li>
        				<li class="verification">验证码
        					<input type="text" placeholder="请填写验证码" />
        				</li>
        				<!-- <li></li> -->
        			</ul>
        		</form>
        	</main>
        	
        	<div class="menu">立刻绑定</div>
        	
        	<p id="footer">收不到短信？请拨打<span>客服</span></p>
		</section>
	</div>
</template>
<script>
	var countdown = 90; 
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
//							val.innerHTML = "获取验证码"
							countdown = 90;
							// 清除定时器
							clearInterval(timer);
							console.log($("#obtain")[0].innerHTML);
						} else { 
								$("#obtain")[0].innerHTML = countdown + "秒后重新获取"; 
//							val.innerHTML = countdown + "秒后重新获取"; 
							countdown--; 
							console.log(countdown);
							console.log($("#obtain")[0].innerHTML);
							
						};
					},1000);
				} 
			},
			components: {
			},
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
					}
				}
			}
	    }
	   /* 立刻绑定按钮 */
		.menu{
		  	height: 80px;
		  	width: 640px;
		  	margin-top: 28px;
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
		 	span{
		 		color: #ff4b3a;
		 	}
		}
	}
</style>