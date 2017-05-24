<template>
	<div >
		<!-- 全局header -->
		<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>
		<section id="wrapper" class="sy_main">
			<span class="active">激活</span>
			<main class = "null">
				<div class="nnull">
					<i class="iconfont icon_cry"></i>
					<article>
						<p>很遗憾您还没有优惠券，赶紧去领吧！</p>
						<button>去领券中心看看</button>
					</article>
				</div>
			</main>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '我的优惠券',
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
	  src: url('https://at.alicdn.com/t/font_kc8775w79s51xlxr.eot');
	  src: url('https://at.alicdn.com/t/font_kc8775w79s51xlxr.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_kc8775w79s51xlxr.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_kc8775w79s51xlxr.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_kc8775w79s51xlxr.svg#jyzx-iconfont') format('svg');
	}
	section {
		background: #fff;
		.active{
			position: fixed;
			top:24px;
			right: 24px;
			font-size: 30px;
		}
		.null{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			.nnull{
				width: 90%;
				height: 40%;
				margin-top: 20%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-direction: column;
				.icon_cry::before{
					font-family: 'jyzx-iconfont';
					content: "\e624";
					font-size: 160px;
					color: #999;
				}
				article{
					width: 100%;
					font-size: 32px;
					text-align: center;
					button{
						width: 100%;
						margin-top: 38px;
						height: 80px;
						background: #84b83a;
						color: #fff;
						border: none;
						border-radius: 8px;
					}
				}
			}
		}
	}
</style>