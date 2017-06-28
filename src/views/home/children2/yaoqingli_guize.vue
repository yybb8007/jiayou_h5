<template>
	<div >
		<section id="wrapper">
			<!--<header id="all_header">
        		<i class="jy_iconfont"></i>
        		<p class="all_title">奖励规则</p>
        		<i class="iconfont"></i>
        	</header>-->
        		<!--<i class="jy_iconfont icon_header"></i>-->
        		<!--<i class="iconfont icon_fenxiang"></i>-->
        	
        	<main>
        		<p class="title1">邀请新朋友各得</p>
        		<p class="title2">满99减80元券</p>
        		<!--<p class="title3">分享还有机会得iPhone7 plus</p>-->
        		<p class="img"><img src="../../../../dist/assets/yqyl_gz_x.png"/></p>
        		<h3>奖励规则</h3>
        		<ul>
        			<li>1.被邀请人需使用邀请人分享的优惠券下单并签收且7日内未退货，方可认定邀请成功；</li>
        			<li>2.同一登入账号、同一手机号、同一终端设备号、同一支付宝账号、同一收货地址、同一IP或其他合理显示同一用户的情形，均视为同一用户。</li>
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
		background: url(https://m2.t.jiayou9.com/dist/assets/yqyl_gz.jpg) no-repeat;
		background-size: cover;
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
	    	height: 751px;
	    	background: rgba(255,255,255,0.9);
	    	border-radius: 18px;
	    	margin: 158px auto;
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
	    	.img{
	    		width: 370px;
	    		margin: 0 auto;
	    		margin-top: 12px;
	    		img{
	    			width: 100%;
	    		}
	    	}
	    	h3{
	    		text-align: center;
	    		font-size: 33px;
	    		color: #424441;
	    		font-weight: bolder;
	    		margin-top: 51px;
	    	}
	    	ul{
	    		margin: 40px 50px;
	    		font-size: 22px;
	    		color: #979797;
	    		line-height: 36px;
	    		li:first-of-type{
	    			margin-bottom: 51px;
	    		}
	    	}
	    }
	    
	    
	}
</style>