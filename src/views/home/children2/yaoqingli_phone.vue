<template>
	<div>
		<section id="wrapper">
			<!-- <header id="all_header"> -->
    			<!-- <router-link id="back" to="/"><i class="iconfont icon_header"></i></router-link> -->
    			<!-- <p>绑定手机</p> -->
    			<!-- <router-link id="guize" to="/yaoqingli_guize"><span>奖励规则</span></router-link> -->
        	<!-- </header> -->
        	
        	<main class="main1">
        		<header><img src="../../../../dist/assets/yql_phone_top.jpg"/>为了您的账号安全，请及时绑定手机号</header>
        		<form action="">
        			<ul>
        				<li class="phone">手机号
        					<input type="tel" id="phone" placeholder="请填写绑定手机号" />
        					<span id="obtain" @click="settime(this);getsms()">获取验证码</span>
        				</li>
        				<li class="verification">验证码
        					<input type="text" id="verification" placeholder="请填写验证码" />
        				</li>
        				<p id="prompt"></p>
        			</ul>
        		</form>
        	</main>
        	
        	<div id="want" class="menu" @click="binding">立刻绑定</div>
        	
        	<!--<p id="footer">收不到短信？请拨打<a href="tel:">客服</a></p>-->
		</section>
	</div>
</template>
<script>
	var countdown = 60;	// 全局定义倒计时时间
	var code ; // 在全局定义验证码   
	var yq_name = localStorage.getItem("yq_name");
	var user_id = localStorage.getItem("user_id");
	export default {
		data() {
				return {
					data: [],
					data1: []
				}
			},
			computed: {},
			methods: {
				settime(val) { 
					var phone_num = $("#phone")[0].value;
					var sms1 = $("#verification")[0].value;
					localStorage.setItem("jy_userName", phone_num);
					localStorage.setItem("sms", sms1);
					var timer = setInterval(function() {
						if (countdown == 0) { 
							$("#obtain")[0].innerHTML = "获取验证码"
							countdown = 60;
							// 清除定时器
							clearInterval(timer);
//							console.log($("#obtain")[0].innerHTML);
						} else { 
							$("#obtain")[0].innerHTML = countdown + "秒后重新获取";
							countdown--;
//							console.log(countdown);
//							console.log($("#obtain")[0].innerHTML);
						};
					},1000);
				},
				// 短信验证码
				getsms(){
					var jy_userName = localStorage.getItem("jy_userName");
					this.$http.jsonp('https://a2.t.jiayou9.com/home/sms/index?debug=1&device_type=3',
					{// 请求参数
				        params: {
				        	// 手机号
				        	jy_userName: jy_userName
				        },
				        jsonp:'callback'
					}).then(function(res) {
						this.data = res.body;
						console.log(res.body);
					})
				},
				// 绑定手机号
				binding(){
					var jy_userName = localStorage.getItem("jy_userName");
					var sms1 = $("#verification")[0].value;
//					localStorage.setItem("sms", sms1);
//					var sms = localStorage.getItem("sms");
					this.$http.jsonp('https://a2.t.jiayou9.com/home/invitationpolite/lyhlqyhq?debug=1&device_type=3',
					{// 请求参数
				        params: {
				        	user_id: user_id,	// 用户ID
				        	yq_name: yq_name,	// 邀请人ID
				        	mobile_phone: jy_userName,	// 手机号
				        	sms: sms1	// 短信验证码
				        },
				        jsonp:'callback'
					}).then(function(res) {
						this.data1 = res.body;
						var data11 = res.body;
						localStorage.setItem("act_type_ext", data11.data.act_type_ext);
						localStorage.setItem("zhanghao", data11.data.user_name);
						console.log(data11);
						console.log(sms1);
						console.log(jy_userName);
						if (data11.code == 1) {
							$("#prompt")[0].innerHTML = "验证码错误！";
						} else if (data11.code == 0) {
							var old1 = location.href;
							var old2 = old1.split("yaoqingli_phone")[0];
							var old = old2 + "yaoqingli_download";
							window.location.href = old + "?v=" + (new Date().getTime());
//							$("#want").attr("href","https://m2.t.jiayou9.com/#/yaoqingli_download");
//							var h = document.getElementById("want").getAttribute("href") + old;
//							$("#want").attr("href",old);
						}
					})
				}
			},
			components: {
			},
	}
</script>
<style lang="sass" scoped>
	section {
		background: #fff;
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
					p{
						text-align: center;
						color: red;
						width: 100%;
						height: 40px;
						line-height: 40px;
						background: #f1f1f1;
					}
				}
			}
	    }
	   /* 立刻绑定按钮 */
		.menu{
			display: block;
		  	height: 80px;
		  	width: 640px;
		  	margin-top: 24px;
		  	margin-left: 55px;
		  	line-height: 80px;
		  	text-align: center;
		  	border-radius: 5px;
		  	background: #84b83a;
		  	font-size: 33px;
		  	color: #fff;
		}
		#want2{
			display: none;
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