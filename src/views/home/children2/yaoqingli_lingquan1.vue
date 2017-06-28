<template>
	<div >
		<section id="wrapper">
        	
        	<main class="main1">
        	</main>
        	
        	<a id="want" href="javascript:void(0);" class="menu" @click="show">点击领取</a>
		</section>
		
		<div class="fuceng3">
			<main>
				<img src="../../../../dist/assets/yqyl_yl.png"/>
			</main>
		</div>
	</div>
</template>
<script>
// 邀请人id
var yq_name = localStorage.getItem("yq_name");
	export default {
		data() {
				return {
					data: [],
					data1: [],
					data2: []
				}
			},
			computed: {},
			methods: {
				show(){
					var userdata1 = localStorage.getItem("userdata");
					var userOpenid1 = localStorage.getItem("userOpenid");
					var userName1 = localStorage.getItem("userName");
					var userImg1 = localStorage.getItem("userImg");
					var userSex1 = localStorage.getItem("userSex");
					var userCity1 = localStorage.getItem("userCity");
					var userUnionid1 = localStorage.getItem("userUnionid");
					// 请求登陆
					this.$http.jsonp('https://a2.t.jiayou9.com/home/invitationpolite/yqyldl?debug=1&device_type=3',
					{// 请求参数
				        params: {
				          name: userName1,
				          img: userImg1,
				          openids: userUnionid1,
				          tool: "6"
				        },
				        jsonp:'callback'
					}).then(function(res) {
						this.data1 = res.body;
						console.log(res.body);
						var data11 = res.body;
						var user_id = data11.data.user_id;
						console.log(user_id);
						localStorage.setItem("user_id", user_id);
						// 老用户
						if(data11.code == 0){
							// 领取优惠券
							this.$http.jsonp('https://a2.t.jiayou9.com/home/invitationpolite/lqyqyl?debug=1&device_type=3', 
							{// 请求参数
						        params: {
						          user_id: user_id, // 用户id
						          yq_name: yq_name, // 邀请人id
						          code: data11.code // 用户类型（新用户/老用户）
						        },
						        jsonp:'callback'
							}).then(function(res) {
								this.data2 = res.body;
								console.log(res.body);
								// code=0,领取成功
								// code=1,已领取过
								var data22 = res.body;
								console.log(data22)
								localStorage.setItem("act_type_ext", data22.data.act_type_ext);
								localStorage.setItem("zhanghao", data22.data.user_name);
								if (data22.code == 1) {
									$(".fuceng3").css("display","block");
									// 5s后弹层关闭（延时器）
									setTimeout(function(){
										$(".fuceng3").css("display","none");
									}, 5000);
								} else if (data22.code == 0) {
//									alert("老用户——领取成功")
									$(".fuceng3").css("display","none");
									var old1 = location.href;
									var old2 = old1.split("?code")[0];
									var old3 = old1.split("&state=STATE")[1];
									var old4 = old3.split("yaoqingli")[0];
									var old = old2 + old4 + "yaoqingli_download";
									window.location.href = old + "?v=" + (new Date().getTime());
								} else if (data22.code == 3) {
								}
							})
						// 新用户
						} else if (data11.code == 1) {
							this.$http.jsonp('https://a2.t.jiayou9.com/home/invitationpolite/lqyqyl?debug=1&device_type=3', 
							{// 请求参数
						        params: {
						          user_id: user_id, // 用户id
						          yq_name: yq_name, // 邀请人id
						          code: data11.code // 用户类型（新用户/老用户）
						        },
						        jsonp:'callback'
							}).then(function(res) {
								this.data2 = res.body;
								console.log(res.body);
								// code=0,领取成功
								// code=1,已领取过
								// code=3,请绑定手机号
								var data22 = res.body.data;
								console.log(data22)
								localStorage.setItem("act_type_ext", data22.data.act_type_ext);
								localStorage.setItem("zhanghao", data22.data.user_name);
								if (data22.code == 1) {
									$(".fuceng3").css("display","block");
									// 5s后弹层关闭（延时器）
									setTimeout(function(){
										$(".fuceng3").css("display","none");
									}, 5000);
								} else if (data22.code == 0) {
									$(".fuceng3").css("display","none");
									var old1 = location.href;
									var old2 = old1.split("?code")[0];
									var old3 = old1.split("&state=STATE")[1];
									var old4 = old3.split("yaoqingli")[0];
									var old = old2 + old4 + "yaoqingli_download";
									window.location.href = old + "?v=" + (new Date().getTime());
								} else if (data22.code == 3) {
									$(".fuceng3").css("display","none");
									var phone1 = location.href;
									var phone2 = phone1.split("?code")[0];
									var phone3 = phone1.split("&state=STATE")[1];
									var phone4 = phone3.split("yaoqingli")[0];
									var phone = phone2 + phone4 + "yaoqingli_phone";
									window.location.href = phone + "?v=" + (new Date().getTime());
								}
							})
						}
					})
				},
			},
			components: {
			},
			mounted: function(){
				var str = location.href; // 取得整个地址栏
//				var user_id = str.split('user_id=')[1];
				// code
				var str21 = str.split("?code")[1];
				var str22 = str21.split("&state=STATE")[0];
				var code = str22.split("=")[1];
				console.log(code);
				
				// code
				localStorage.setItem("code", code);
				
				// 用code获取用户信息
				this.$http.jsonp(this.baseUrl + '.t.jiayou9.com/group/wx_oauth?debug=1&format=jsonp', 
				{// 请求参数
			        params: {
			          "code": code
			        },
			        jsonp:'callback'
				}).then(function(res) {
					this.data = res.body;
					console.log(res.body);
					var userdata = res.body.data;
					var userOpenid = userdata.openid;
					var userName = userdata.nickname;
					var userImg = userdata.headimgurl;
					var userSex = userdata.sex;
					var userCity = userdata.city;
					var userUnionid = userdata.unionid;
					localStorage.setItem("userOpenid", userOpenid);
					localStorage.setItem("userName", userName);
					localStorage.setItem("userImg", userImg);
					localStorage.setItem("userSex", userSex);
					localStorage.setItem("userCity", userCity);
					localStorage.setItem("userUnionid", userUnionid);
				})
				
			}
	}
</script>
<style lang="sass" scoped>
	section {
		background: #fff;
	    /* 主体 */
	    .main1{
		   	width: 100%;
		   	height: 381px;
		   	background: url(http://m2.t.jiayou9.com/dist/assets/yqyl_lq.jpg) no-repeat;
		   	background-size: cover;
		   	padding-top: 613px;
		   	.box1{
		   		width: 624px;
		   		height: 205px;
		   		border-radius: 15px;
		   		border-top-left-radius: 2px;
		   		border-top-right-radius: 2px;
		   		background: #fff;
		   		margin: 0 auto;
		   		text-align: center;
		   		padding-top: 29px;
		   		.title1{
		    		font-size: 37px;
		    		color: #717370;
		    		span{
		    			color: #d2d2d2;
		    		}
		    	}
		    	.title2{
		    		font-size: 58px;
		    		color: #92cb40;
		    		font-weight: bolder;
		    	}
		   	}
		   	.box2{
		   		margin-top: 41px;
		   		font-size: 31px;
		   		color: #fff;
		   		text-decoration: underline;
		   		text-align: center;
		   		letter-spacing: 9px;
		   		font-weight: bold;
		   	}
	    }
	   /* 立刻邀请按钮 */
		.menu{
			display: block;
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
	}
	
	.fuceng3{
		width: 100%;
		height: 1334px;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 111;
		display: none;
		main{
			margin: 0 auto;
			margin-top: 370px;
			width: 620px;
			height: 310px;
			/*background: url(https://m2.t.jiayou9.com/dist/assets/yqyl_bj.png) no-repeat;
		   	background-size: cover;*/
			border-radius: 3px;
			font-size: 33px;
			color: #83ba3b;
			line-height: 48px;
			text-align: center;
			padding-top: 100px;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>