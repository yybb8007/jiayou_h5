<template>
	<div >
		<!-- 全局header -->
		<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>
		<section id="wrapper" class="yh_main">
			<div class="main_title">
				<ul>
					<router-link to="/myGuanzhu/unused">
						<li>未使用(3)</li>
					</router-link>
					<router-link to="/myGuanzhu/used">
						<li>已使用(3)</li>
					</router-link>
					<router-link to="/myGuanzhu/guoqi">
						<li>已过期(3)</li>
					</router-link>
				</ul>
			</div>
			<router-view></router-view>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '我的关注',
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
	section {
		/*background: rgb(255,255,255);*/
		
		.main_title{
			height: 90px;
			line-height: 90px;
			font-size: 30px;
			color: #333;
			background: #fff;
			width: 100%;
			padding: 0 54px;
			ul{
				a{
					display: inline-block;
				}
				a:nth-of-type(3n+2){
					margin: 0 120px;
				}
			}
		}
		a.router-link-active{
			color: #ff4b3a;
			border-bottom: 2px solid #ff4b3a;
		}
		
	}
</style>