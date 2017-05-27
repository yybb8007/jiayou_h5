<template>
	<div >
		<section id="wrapper">
			<header id="all_header">
        		<!--<i class="jy_iconfont icon_header"></i>-->
        		<i class="jy_iconfont"></i>
        		<p class="all_title">奖励规则</p>
        		<!--<i class="iconfont icon_fenxiang"></i>-->
        		<i class="iconfont"></i>
        	</header>
        	
        	<main>
        		<p class="title1">邀请新朋友各得</p>
        		<p class="title2">满99减80元券</p>
        		<p class="title3">分享还有机会得iPhone7 plus</p>
        		<p class="img"></p>
        		<h3>奖励规则-活动规则</h3>
        		<ul>
        			<li>1.活动时间：2017.1.17至2017.1.18；</li>
        			<li>2.活动期间，邀请新朋友下单各得满99减80元券，邀请新朋友下单且成功签收最多的用户，可获得IPHONE7PLUS手机；</li>
        			<li>3.被邀请人需使用邀请人分享的优惠券下单并签收，方可认定邀请成功；</li>
        			<li>4.同一登入账号、同一手机号、同一终端设备号、同一支付宝账号、同一收货地址、同一IP或其他合理显示同一用户的情形，均视为同一用户。</li>
        		</ul>
        	</main>
        	
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '邀请有礼',
						back: 'ok',
					},
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
		background: rgb(0,0,0);
		/* 顶部标题行 */
		#all_header{
	    	width: 100%;
	    	height: 88px;
	    	display: flex;
	    	justify-content: space-between;
	    	padding: 0 24px;
	    	align-items: center;
	    	font-size: 36px;
	    	/*position: fixed;
	    	top: 0;
	    	left: 0;*/
	    	background: #fff;
	    	z-index: 100;
	    	border-bottom: 1px solid #ededed;
	    	.icon_header::before{
				font-family: 'jyzx-iconfont';
	    		content: "\e604";
	    		font-size: 36px;
	    	}
	    	.icon_fenxiang::before{
	    		content: "\e648";
	    		font-size: 50px;
	    		color: #c3c3c3;
	    	}
	    }
	    /* 主体 */
	    main {
	    	width: 637px;
	    	height: 950px;
	    	background: #fff;
	    	border-radius: 18px;
	    	margin: 118px auto;
	    	padding-top: 50px;
	    	.title1, .title2, .title3{
	    		text-align: center;
	    	}
	    	.title1{
	    		font-size: 37px;
	    		color: #717370;
	    	}
	    	.title2{
	    		font-size: 58px;
	    		color: #92cb40;
	    		font-weight: bolder;
	    	}
	    	.title3{
	    		font-size: 28px;
	    		color: #a4d361;
	    	}
	    	h3{
	    		text-align: center;
	    		font-size: 33px;
	    		color: #424441;
	    		font-weight: bolder;
	    	}
	    	ul{
	    		margin: 40px 50px;
	    		font-size: 22px;
	    		color: #979797;
	    		line-height: 36px;
	    		li{
	    			margin-bottom: 20px;
	    		}
	    	}
	    }
	    
	    
	}
</style>