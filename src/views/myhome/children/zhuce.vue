<template>
	<div >
		<!-- 全局header -->
		<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>
		<section id="wrapper" class="sy_main">
			<p id="fast">快速登录</p>
			<nav class="jiayouLogo">
				<img src="../../../assets/images/components/jiayoulogo.png" alt="" />
			</nav>
			<div class="zc_form">
				<i class="iconfont icon-phone"></i>
				<input type="text" placeholder="手机号/用户名/邮箱"/>
			</div>
			<div class="zc_form">
				<i class="iconfont icon-password"></i>
				<input type="password" placeholder="登录密码"/>
				<i class="iconfont icon-juchi"></i>
			</div>
			<button class="denglu">登录</button>
			<div class="zhuce">
				<p class="newName">新用户注册</p>
				<p class="forgrt">忘记密码？</p>
			</div>

			<article class="thrid_party">
				<div class="thrid">
					<span></span>
					<p>第三方登录</p>
					<span></span>
				</div>
				<ul>
					<li><i class="iconfont icon_QQ"></i><span>QQ 登录</span></li>
					<li><i class="iconfont icon_WX"></i><span>微信登录</span></li>
					<li><i class="iconfont icon_more"></i><span>更多方式</span></li>
				</ul>
			</article>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '登录',
						back: 'ok',
					},
				}
			},
			computed: {},
			methods: {},
			components: {
				"nvHead": require('../../../components/header.vue'),
			},
	}
</script>
<style lang="sass" scoped>
	@font-face {
	  font-family: 'jyzx-iconfont';  /* project id 210635 */
	  src: url('https://at.alicdn.com/t/font_ujjhzhscz8e61or.eot');
	  src: url('https://at.alicdn.com/t/font_ujjhzhscz8e61or.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_ujjhzhscz8e61or.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_ujjhzhscz8e61or.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_ujjhzhscz8e61or.svg#jyzx-iconfont') format('svg');
	}
	.iconfont{
		font-family: 'jyzx-iconfont';
		font-size: 26px;
		margin-right: 24px;
		color: #999;
	}
	section {
		background: rgb(255,255,255);
		#fast{
			position: fixed;
			top:24px;
			right: 24px;
			font-size: 30px;
			color: #333;
		}
		.jiayouLogo{
			width: 100%;
			margin-top: 126px;
			text-align: center;
			margin-bottom: 100px;
			img{
				width: 282px;
			}

		}
		.zc_form{
			margin: 0 54px;
			height: 88px;
			line-height: 90px;
			font-size: 28px;
			border-bottom: 1px solid #c5cbcb;
			.icon-phone::before{
				font-family: 'jyzx-iconfont';
				content: "\e60f";
			}
			.icon-password::before{
				font-family: 'jyzx-iconfont';
				content: "\e66b";
			}
			.icon-juchi::before{
				font-family: 'jyzx-iconfont';
				content: "\e6b5";
				float: right;
				font-size: 36px;
			}

		}
		.denglu{
			width: 640px;
			margin: 64px 54px 18px 54px;
			background: #84b83a;
			height: 76px;
			font-size: 30px;
			color: #fff;
			letter-spacing:10px;
		}
		.zhuce{
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding: 0 54px;
			font-size: 28px;
			color: #999;
		}
		.thrid_party{
			margin-top: 140px;
			padding: 0 32px;
			.thrid{
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				span{
					flex: 1;
					border:1px solid #ccc;
				}
				p{
					width: 200px;
					text-align: center;
					font-size: 28px;
					color: #333;
				}
			}
			ul{
				display: flex;
				width: 100%;
				padding: 0 64px;
				justify-content: space-between;
				li{
					display:flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					text-align: center;
					margin-top: 100px;
					.icon_QQ{
						background: url(../../../assets/images/components/qq.png) no-repeat center;
						background-size:75px;
					}
					.icon_WX{
						background: url(../../../assets/images/components/wx.png) no-repeat center;
						background-size:85px;
					}
					.iconfont{
						display: inline-block;
						width: 85px;
						height: 100px;
						margin-right: 0;
					}
					.icon_more::before{
						line-height: 100px;
						font-family: 'jyzx-iconfont';
						content: "\e609";
						font-size: 60px;
					}
					span{
						font-size: 28px;
						color: #333;
						margin-top: 26px;
					}
				}
			}
		}
	}
</style>