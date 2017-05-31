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
        		<div class="box2">
        			<header>活动时间：2017.1.18至2017.1.18</header>
        			<main>
        				<div class="left">
        					<img src="../../../../dist/assets/iphone7.jpg"/>
        				</div>
        				<div class="right">
        					<p class="first">分享达20人</p>
        					<p class="second">可赢得价值</p>
        					<p class="third"><span>￥</span>7199</p>
        					<p class="fourth">iphone 7 plus</p>
        				</div>
        			</main>
        		</div>
        		
        	</main>
        	
        	<div class="menu">立刻邀请</div>
        	
        	<p id="footer">您已成功邀请<router-link id="person" to="/">12</router-link>人，累计获得<router-link id="quan" to="/">12</router-link>张券</p>
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
		   	height: 704px;
		   	background: skyblue;
		   	padding-top: 290px;
		   	.box1{
		   		width: 624px;
		   		height: 172px;
		   		border-radius: 15px;
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
		   		width: 624px;
		   		height: 525px;
		   		border-radius: 15px;
		   		background: #fff;
		   		margin: 0 auto;
		   		text-align: center;
		   		margin-top: 5px;
		   		header{
		   			height: 87px;
		   			text-align: center;
		   			font-size: 28px;
		   			color: #939393;
		   			line-height: 87px;
		   		}
		   		main{
		   			.left{
		   				height: 435px;
		   				width: 297px;
		   				background: aquamarine;
		   				float: left;
		   				margin-left: 57px;
		   				img{
		   					width: 100%;
		   					height: 100%;
		   				}
		   			}
		   			.right{
		   				float: right;
		   				height: 435px;
		   				width: 230px;
		   				margin-right: 38px;
		   				text-align: right;
		   				.first{
		   					font-size: 23px;
		   					color: #6f6f6f;
		   					margin-top: 65px;
		   				}
		   				.second{
		   					font-size: 36px;
		   					color: #737572;
		   					font-weight: bold;
		   				}
		   				.third{
		   					font-size: 53px;
		   					color: #85b93a;
		   					font-weight: bolder;
		   					span{
		   						font-size: 36px;
		   					}
		   				}
		   				.fourth{
		   					font-size: 27px;
		   					color: #6e706f;
		   				}
		   			}
		   		}
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
		}
	}
</style>