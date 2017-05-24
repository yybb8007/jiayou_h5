<template>
	<div >
		<!-- 全局header -->
		<!--<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>-->
		<section id="wrapper" class="wsy_main">
			<ul>
				<li>
					<div class="main_img">
						<h1>￥100元</h1>
						<p>满100元可使用</p>
					</div>
					<div class="main_message">
						<p class="name">
							<span>折扣</span>仅可购买酒水使用
						</p>
						<p class="use">
							2016.11.11-2016.12.12
							<span>立即购买</span>
						</p>
						<p class="message">
							详细信息
							<span></span>
						</p>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
//						title: '我的关注',
//						back: 'ok',
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
		/*background: rgb(255,255,255);*/
		ul{
			margin: 0 34px;
			li{
				margin-top: 24px;
				background: #fff;
				height: 180px;
				border-radius: 5px;
				.main_img{
					width: 240px;
					height: 180px;
					background: url(../../../../assets/images/components/bg_hongseyouhuiquan.png) no-repeat;
					background-size: cover;
					color: #fff;
					text-align: center;
					float: left;
					h1{
						font-size: 48px;
						padding-top: 30px;
						margin-bottom: 25px;
					}
					p{
						font-size: 22px;
					}
				}
				.main_message{
					float: left;
					.name{
						margin-top: 14px;
						font-size: 24px;
						color: #333;
						span{
							display: inline-block;
							font-size: 18px;
							color: #ff4b3a;
							border: 1px solid #ff4b3a;
							padding: 7px 13px;
							border-radius: 4px;
							margin-left: 20px;
							margin-right: 30px;
						}
					}
					.use{
						font-size: 20px;
						color: #666;
						margin-left: 20px;
						margin-top: 14px;
						margin-bottom: 10px;
						span{
							display: inline-block;
							font-size: 22px;
							color: #ff4b3a;
							border: 1px solid #ff4b3a;
							padding: 3px 8px;
							border-radius: 20px;
							margin-left: 20px;
						}
						
					}
					.message{
						margin-left: 20px;
						height: 48px;
						line-height: 48px;
						border-top: 1px dashed #999;
					}
				}
			}
		}
    	
	}
	
</style>
