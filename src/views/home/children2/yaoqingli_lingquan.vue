<template>
	<div >
		<section id="wrapper">
			<header id="all_header">
    			<router-link id="back" to="/"><i class="iconfont icon_header"></i></router-link>
    			<p>邀请有礼</p>
    			<router-link id="guize" to="/yaoqingli_guize"><span>奖励规则</span></router-link>
        	</header>
        	
        	<main class="main1">
        		<div class="box1">
        			<p class="title1"><span>—</span> 邀请新朋友各得 <span>—</span></p>
        			<p class="title2">满99减80元券</p>
        		</div>
        		<div class="box2">老用户可领取5折优惠券</div>
        	</main>
        	
        	<div class="menu">点击领取</div>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					
				}
			},
			computed: {},
			methods: {},
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
		   	height: 381px;
		   	background: skyblue;
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
</style>