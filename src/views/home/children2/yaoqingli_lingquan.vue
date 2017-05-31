<template>
	<div >
		<section id="wrapper">
			<!--<header id="all_header">
    			<router-link id="back" to="/"><i class="iconfont icon_header"></i></router-link>
    			<p>邀请有礼</p>
    			<router-link id="guize" to="/yaoqingli_guize"><span>奖励规则</span></router-link>
        	</header>-->
        	
        	<main class="main1">
        		<div class="box1">
        			<p class="title1"><span>—</span> 邀请新朋友各得 <span>—</span></p>
        			<p class="title2">满99减80元券</p>
        		</div>
        		<div class="box2">老用户可领取5折优惠券</div>
        	</main>
        	
        	<div class="menu">点击领取</div>
		</section>
		
		<div class="fuceng1">
			<div class="lingquan">
				<div class="fuceng1_top">
					<div class="left">
						<span>￥</span>100
					</div>
					<div class="right">
						<header>限量限时领取</header>
						<main>单笔订单满200 元使用</main>
					</div>
				</div>
				<div class="fuceng1_bottom">立即领取</div>
			</div>
		</div>
		
		<div class="fuceng2">
			<main>
				恭喜您获得价值<span>200</span>的优惠券
			</main>
		</div>
		
		<div class="fuceng3">
			<main>
				亲~您的礼包已经领过了，<br />赶紧去商城买买买！
			</main>
		</div>
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
		/*#all_header{
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
	    }*/
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
	.fuceng1{
		width: 100%;
		height: 1334px;
		background: rgba(0, 0, 0, 0.7);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 111;
		display: none;
		.lingquan{
			width: 622px;
			height: 315px;
			margin: 0 auto;
			margin-top: 515px;
			background: #93bf4e;
			.fuceng1_top{
				padding: 46px 75px 0 71px;
				height: 209px;
				.left{
					font-size: 100px;
					color: #fff;
					padding-left: 20px;
					line-height: 163px;
					width: 249px;
					position: relative;
					float:left;
					span{
						position: absolute;
						top: -25px;
						left: -19px;
						font-size: 51px;
					}
				}
				.right{
					width: 223px;
					height: 163px;
					float: right;
					header{
						height: 42px;
						line-height: 42px;
						width: 100%;
						background: #618f4e;
						text-align: center;
						color: #fff;
					}
					main{
						font-size: 42px;
						color: #fff;
						margin-top: 13px;
					}
				}
			}
			.fuceng1_bottom{
				margin: 0 75px 0 71px;
				height: 49px;
				text-align: center;
				font-size: 34px;
				color: #6ebb55;
				background: #fdfef9;
				margin-top: 18px;
				border-radius: 3px;
			}
		}
	}
	
	.fuceng2{
		width: 100%;
		height: 1334px;
		background: rgba(0, 0, 0, 0.7);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 111;
		display: none;
		main{
			margin: 531px 101px 0 89px;
			height: 301px;
			background: #f1f1f1;
			border-radius: 3px;
			font-size: 33px;
			color: #83ba3b;
			line-height: 301px;
			text-align: center;
			span{
				font-weight: bold;
			}
		}
	}
	
	.fuceng3{
		width: 100%;
		height: 1334px;
		background: rgba(0, 0, 0, 0.7);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 111;
		main{
			margin: 531px 101px 0 89px;
			height: 201px;
			background: #f1f1f1;
			border-radius: 3px;
			font-size: 33px;
			color: #83ba3b;
			line-height: 48px;
			text-align: center;
			padding-top: 100px;
		}
	}
</style>