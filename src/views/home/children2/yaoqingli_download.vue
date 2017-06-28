<template>
	<div >
		<section id="wrapper">
			 <!-- <header id="all_header"> -->
    			<!-- <router-link id="back" to="/"><i class="iconfont icon_header"></i></router-link> 
    			<!-- <p>邀请有礼</p> -->
    			<!-- <router-link id="guize" to="/yaoqingli_guize"><span>奖励规则</span></router-link> -->
        	<!-- </header> -->
        	
        	<main class="main1">
        		<div class="box1">优惠券已放入账号<span id="account">131267267</span></div>
        		<div class="box2">新用户领取满99减80元券，老用户领取立减5元券</div>
        		<div id="box4" class="box3">100</div>
        	</main>
        	<!-- 应用宝下载链接 -->
        	<a class="menu" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.jiayou9.jiayouzaixian9">点击下载家有在线APP</a>
		</section>
	</div>
</template>
<script>
var user_id = localStorage.getItem("user_id");
var act_type_ext = localStorage.getItem("act_type_ext");
var zhanghao = localStorage.getItem("zhanghao");
	export default {
		data() {
				return {
					data: []
				}
			},
			computed: {},
			methods: {
			},
			components: {
			},
			mounted: function(){
//				// 优惠券领取成功，返回优惠券金额、用户账号
//				this.$http.jsonp(this.baseUrl + '.t.jiayou9.com/home/invitationpolite/yqrs?debug=1&device_type=3',
//				{ // 请求参数
//			        params: {
//			          user_id: user_id
//			        },
//			        jsonp:'callback'
//				}).then(function(res) {
//					this.data = res.body.data;
//					console.log(res.body.data);
//				})
				$("#account")[0].innerHTML = zhanghao;
				$("#box4")[0].innerHTML = act_type_ext;
//				console.log($("#account")[0].innerHTML)
			}
	}
</script>
<style lang="sass" scoped>
	section {
		background: rgb(255,255,255);
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
	    	#back{
	    		float: left;
	    	}
	    	#guize{
	    		float: right;
	    		font-size: 28px;
	    		color: #333333;
	    		position: absolute;
	    		right: 24px;
	    		top: 5px;
	    	}
	    }
	    /* 主体 */
	    .main1{
		   	width: 100%;
		   	height: 351px;
	   		background: url(http://m2.t.jiayou9.com/dist/assets/yqyl_xz.jpg) no-repeat;
		   	background-size: cover;
		   	padding-top: 616px;
		   	position: relative;
		   	.box1{
		   		width: 357px;
		   		height: 42px;
		   		line-height: 42px;
		   		border-radius: 17px;
		   		background: #fff;
		   		margin: 0 auto;
		   		text-align: center;
		   		font-size: 22px;
		   		color: #84b83c;
		   		/* padding-top: 29px; */
		   	}
		   	.box2{
		   		width: 450px;
		   		line-height: 40px;
		   		margin-top: 5px;
		   		font-size: 26px;
		   		color: #fff;
		   		margin-top: 50px;
		   		margin-left: 114px;
		   	}
		   	.box3{
		   		font-size: 120px;
		   		color: #fff;
		   		display: inline-block;
		   		position: absolute;
		   		top: 380px;
		   		right: 200px;
		   		font-family: "宋体";
		   		width: 170px;
		   		overflow: hidden;
		   		/*display: none;*/
		   	}
	    }
	   /* 立刻邀请按钮 */
		.menu{
			display: block;
		  	height: 72px;
		  	width: 400px;
		  	margin: 0 auto;
		  	margin-top: 63px;
		  	line-height: 72px;
		  	text-align: center;
		  	border-radius: 28px;
		  	background: #84b83a;
		  	font-size: 33px;
		  	color: #fff;
		}
	  	/* 底部信息 */
		#footer{
		 	text-align: center;
		 	font-size: 28px;
		 	color: #979795;
		 	margin-top: 20px;
		 	a{
		 		font-size: 24px;
		 		font-weight: bolder;
		 		color: #85b93a;
		 	}
		 	span{
		 		font-size: 24px;
		 		font-weight: bolder;
		 		color: #85b93a;
		 	}
		}
	}
</style>