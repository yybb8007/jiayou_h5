<template>
	<div>
		<section id="wrapper">
			<!--<header id="all_header">
    			<router-link id="back" to="/"><i class="iconfont icon_header"></i></router-link>
    			<p>邀请有礼</p>
    			<router-link id="guize" to="/yaoqingli_guize"><span>奖励规则</span></router-link>
        	</header>-->
        	
        	<main class="main1">
        	</main>
        	
        	<div class="menu" @click="callback" target="777777">立刻邀请</div>
        	
        	<p id="footer">您已成功邀请<span @click="callback" id="person" target="888888"> {{ data.yqrs }} </span>人，累计获得<span @click="callback" id="quan" target="999999"> {{ data.yhq }} </span>张券</p>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					data: [],
					data1: []
				}
			},
			computed: {},
			methods: {
				// 全局点击
				callback: function(e) {
					var id = $(e.target).attr("id"),
						target = $(e.target).attr("target"),
						value = ('cmd:{"data":"' + target + '","target":"' + target + '"}');
					window.location.href = value;
//					if (id !== undefined || target !== undefined) {
//						window.location.href = value;
//						console.log(value)
//					}
				},
			},
			components: {
			},
			mounted: function(){
				var str = location.href; //取得整个地址栏
				var user_id = str.split('user_id=')[1];
				console.log(user_id);
				// 邀请人数、优惠券个数
				this.$http.jsonp('https://a2.t.jiayou9.com/home/invitationpolite/yqrs?debug=1&device_type=3', 
				{// 请求参数
			        params: {
			          user_id: user_id
			        },
			        jsonp:'callback'
				}).then(function(res) {
					this.data = res.body.data;
					console.log(res.body);
					// 请求数据失败，邀请人数和领券数均为0
					if (res.body.code == 1) {
						$("#person")[0].innerHTML = " 0 ";
						$("#quan")[0].innerHTML = " 0 ";
//						$("#footer span:eq(0)")[0].innerHTML = " 0 ";
//						$("#footer span:eq(1)")[0].innerHTML = " 0 ";
						console.log($("#person"));
					}
				})
			}
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
		   	height: 356px;
		   	background: url(http://m2.t.jiayou9.com/dist/assets/yqyl_yq.jpg) no-repeat;
		   	background-size: cover;
		   	padding-top: 638px;
	    }
	   /* 立刻邀请按钮 */
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
		 	font-size: 28px;
		 	color: #979795;
		 	margin-top: 20px;
		 	padding-bottom: 50px;
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