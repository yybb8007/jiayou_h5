<template>
	<div >
		<!-- 全局header -->
		<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>
		<section id="wrapper" class="sy_main">
			<h1>购物车</h1>
		</section>
		<nv-footer></nv-footer>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '家有在线',
						//back: 'ok',
					},
				}
			},
			computed: {},
			methods: {},
			components: {
				"nvHead": require('../../components/header.vue'),
				"nvFooter": require('../../components/footer.vue')
			},
	}
</script>
<style lang="sass" scoped>
	section {
		/*background: rgb(255,255,255);*/
	}
</style>