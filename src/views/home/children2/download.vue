<template>
	<div >
		<!-- 全局header -->
		<!--<nv-head :page-name="headTit.title" :back-type="headTit.back" id = "down_header"></nv-head>-->
		<section id="wrapper" class="sy_main">
			<img src="../../../assets/images/components/download.jpg" alt="" />
			<article class="down_btn">
				<p class="btn_name" @click = "mask_show">点击下载家有在线APP</p>
			</article>
			<article class="down_data">
				<ul>
					<li>
						<img src="http://img.t.jiayou9.com/images/index/3/7816a5c0c536544f0d891544b58dbbdf.jpg" alt="" />
						<p>伴手礼</p>
					</li>
					<li>
						<img src="http://img.t.jiayou9.com/images/index/3/d79c53315f4abbee39269ead7ae60d94.jpg" alt="" />
						<p>生态馆</p>
					</li>
					<li>
						<img src="http://img.t.jiayou9.com/images/index/3/e592f662b4a1c776f1570daeb7614ad1.jpg" alt="" />
						<p>特产区</p>
					</li>
					<li>
						<img src="http://img.t.jiayou9.com/images/index/3/935d33bc6550ab3c4380b85c5c29bfd5.jpg" alt="" />
						<p>全球优品</p>
					</li>
				</ul>
			</article>
			<article class="down_mask" @click="mask_hide">
			</article>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '家有在线',
						back: 'ok',
					},
				}
			},
			computed: {},
			methods: {
				mask_show(){
					$('.down_mask').show()
				},
				mask_hide(){
					$('.down_mask').hide()
				}
			},
			components: {
//				"nvHead": require('../../../components/header.vue'),
			},
	}
</script>
<style lang="sass" scoped>
	* {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	
	input {
		-webkit-user-select: auto;
	}
	section {
		background: rgb(255,255,255);
		.down_btn{
			margin-top: 70px;
			text-align: center;
			p{
				display: inline-block;
				border-radius: 20px;
				background: #84b83a;
				width: 400px;
				height: 75px;
				-webkit-box-shadow: 0 5px #bcd792;
				color: #fff;
				line-height: 75px;
				font-size: 30px;
			}
		}
		.down_data{
			width: 100%;
			margin-top:95px;
			ul{
				width: 100%;
				padding: 0 24px;
				display: flex;
				-webkit-justify-content: space-around;
				color: #333;

				li{
					width: 25%;
					float: left;

					text-align: center;
					img{
						width: 60%;
						margin-bottom: 12px;
					}
				}
			}
		}
		.down_mask{
			background: url(http://m.t.jiayou9.com/dist/assets/tanchuang.png);
			background-size: 100% 100%;
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			display: none;
		}
	}
</style>