<template>
	<div >
		<section id="wrapper" class="jy_main">
			<!-- 顶部标题行 -->
			<header id="all_header">
        		<!--<i class="jy_iconfont icon_header"></i>-->
        		<i class="jy_iconfont"></i>
        		<p class="all_title">拼拼</p>
        		<!--<i class="iconfont icon_fenxiang"></i>-->
        		<i class="iconfont"></i>
        	</header>
			
			<main class="liucheng">
				<header>如何参加拼团？</header>
				<main>
					<div class="first">
						<span><img src="../../../../dist/assets/pt_01.jpg" /></span>
						<p>团长发起拼团</p>
						<img class="right" src="../../../../dist/assets/pt_07.gif" />
					</div>
					<div class="second">
						<span><img src="../../../../dist/assets/pt_02.jpg" /></span>
						<p>购买支付</p>
						<img class="right" src="../../../../dist/assets/pt_07.gif" />
					</div>
					<div class="third">
						<span><img src="../../../../dist/assets/pt_03.jpg" /></span>
						<p>分享好友参团</p>
						<img class="down" src="../../../../dist/assets/pt_08.gif" />
					</div>
					<div class="fourth">
						<span><img src="../../../../dist/assets/pt_04.jpg" /></span>
						<p>等待收货</p>
						<img class="left" src="../../../../dist/assets/pt_09.gif" />
					</div>
					<div class="fifth">
						<span><img src="../../../../dist/assets/pt_05.jpg" /></span>
						<p>拼团成功</p>
						<img class="left" src="../../../../dist/assets/pt_09.gif" />
					</div>
					<div class="sixth">
						<span><img src="../../../../dist/assets/pt_06.jpg" /></span>
						<p>达到成团人数</p>
					</div>
				</main>
			</main>
			
			<main class="instructions">
				<header>拼团规则说明:</header>
				<main>
					<h3>1、拼团有效期</h3>
					<p>拼团有效期是自开团时刻起的24小时内，如果距离商品失效时间小于24小时，则以商品的结束时间为准，下单即刻起2小时内未支付的开团失败。</p>
					<h3>2、拼团限制</h3>
					<p>同一款商品，同一账户、手机号、手机只能参与拼团购买一件。</p>
					<h3>3、拼团失败</h3>
					<p>超过成团有效期24小时， 未达成相应参团人数的团 ， 则该团失败。在团有效期24小时内，商品已提前售罄，若还未拼团成功，则该团失败。高峰期间，同时支付的人过多，团人数有限制，以接收支付信息时间先后为准，超出该团人数限制的部分用户则会拼团失败。拼团成功后，团里出现大量取消订单/退款情况，该团视为拼团失败。拼团失败的订单，系统会在1-2个工作日内处理退款，系统处理后1-10个工作日内原路退回至原支付账户中。</p>
					<h3>4、可以退换货吗？</h3>
					<p>拼团商品，由于商品特殊性，不支持7天无理由退换货。</p>
					<h3>5、收到商品损坏怎么办？</h3>
					<p>如遇到商品有质量问题，可联系客服帮您补发或退款。</p>
				</main>
			</main>
			
			
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
			methods: {
			},
			components: {
			},
	}
	
</script>
<style lang="sass" scoped>
	section {
		background: rgb(255,255,255);
		padding-bottom: 24px;
		h3{
			font-weight: normal;
		}
		/* 顶部标题行 */
		#all_header{
	    	width: 100%;
	    	height: 88px;
	    	display: flex;
	    	justify-content: space-between;
	    	padding: 0 24px;
	    	align-items: center;
	    	font-size: 36px;
	    	position: fixed;
	    	top: 0;
	    	left: 0;
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
		/* 拼团流程 */
		.liucheng{
			background: #fff;
			margin-top: 88px;
			header{
				width: 100%;
				height: 145px;
				font-size: 26px;
				color: #333;
				text-align: center;
				line-height: 145px;
			}
			main{
				width: 100%;
				background: #fff;
				div {
					display: inline-block;
					text-align: center;
					margin: 0 45px 86px 45px;
					position: relative;
					font-size: 22px;
					color: #343434;
					span{
						width: 150px;
						height: 150px;
						border-radius: 50%;
						background: #f1f1f1;
						display: inline-block;
						margin-bottom: 20px;
						img{
							width: 100%;
							height: 100%;
						}
					}
					img{
						/*position: absolute;*/
					}
					.left,.right{
						width: 48px;
						height: 14px;
						position: absolute;
						top: 68px;
						right: -70px;
					}
					.down{
						height: 48px;
						width: 14px;
						position: absolute;
						right: 68px;
						bottom: -60px;
					}
				}
			}
		}
		.instructions{
			padding: 0 24px;
			font-size: 20px;
			color: #989898;
			header{
				height: 70px;
				line-height: 70px;
				font-size: 24px;
				color: #333333;
			}
			main{
				border: 1px solid #e9e9e9;
				border-radius: 5px;
				padding: 15px;
				h3{
					font-size: 21px;
					color: #333333;
					/*font-weight: bold;*/
					height: 43px;
					line-height: 43px;
				}
				p{
					line-height: 39px;
				}
			}
		}
		
	}
</style>