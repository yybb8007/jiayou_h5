<template>
	<div >
		<!-- 全局header -->
		<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>
		<section id="wrapper" class="sy_main">
			<!-- 轮播图 -->
			<div id="jf_banner" class="swiper-container">
					<div class="swiper-wrapper">
							<div class="swiper-slide"><img src="../../assets/images/components/jiafang.jpg" alt="" /></div>
							<div class="swiper-slide"><img src="../../assets/images/components/lunbo2.jpg" alt="" /></div>
							<div class="swiper-slide"><img src="../../assets/images/components/lunbo3.jpg" alt="" /></div>
							<div class="swiper-slide"><img src="../../assets/images/components/lunbo4.jpg" alt="" /></div>
					</div>
					<!--<div class="swiper-pagination"></div>-->
			</div>

			<!-- 导航 -->
			 <ul class="tm_nav">
				<!--<li><router-link :to="/teaming"><p>推荐</p></router-link></li>
				<li><router-link :to="/teaming"><p>贵酒贵茶</p></router-link></li>
				<li><router-link :to="/teaming"><p>居家</p></router-link></li>
				<li><router-link :to="/teaming"><p>母婴</p></router-link></li>
				<li><router-link :to="/teaming"><p>酒水</p></router-link></li>
				<li><router-link :to="/teaming"><p>美妆</p></router-link></li>
				<li><router-link :to="/teaming"><p>美妆个护</p></router-link></li>-->
				<li><router-link to="/teaming/pinpin">推荐</router-link></li>
				<li><router-link to="/teaming/pinpin">饮品</router-link></li>
				<li><router-link to="/teaming/pinpin">生鲜</router-link></li>
				<li><router-link to="/teaming/pinpin">美妆</router-link></li>
				<li><router-link to="/teaming/pinpin">家纺</router-link></li>
				<li><router-link to="/teaming/pinpin">工艺</router-link></li>
				<li><router-link to="/teaming/pinpin">母婴</router-link></li>
				<li><router-link to="/teaming/pinpin">医疗</router-link></li>
				<li><router-link to="/teaming/pinpin">美食</router-link></li>
			</ul> 
			<router-view></router-view>	
		</section>
		<nv-footer></nv-footer>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '拼拼',
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
			mounted: function(){
				this.$http.jsonp('https://a1.t.jiayou9.com/page/index?debug=1&format=jsonp').then(function(res){
					this.data=res.body.data;
					console.log(res.body.data);
					console.log(res.body.data[8]);
					// 轮播图
					var mySwiper = new Swiper ('.swiper-container', {
						direction: 'horizontal',
						autoplay: 2000,
						loop: true,
						observer: true,
						// 分页器
						pagination: '.swiper-pagination'
					});
				})
			}
	}
</script>
<style lang="sass" scoped>
	section {
		/*background: rgb(255,255,255);*/
		#jf_banner{
			overflow: hidden;
			height: 350px;
		}
		.tm_nav{
			overflow-x: auto;
			width: 100%;
			white-space: nowrap;
			background: red;
			overflow-y: hidden;
			height: 98px;
			line-height: 98px;
			font-size:30px;
			li{
				float: left;
				margin-right: 70px;
				padding-left: 24px;
			}
		}


	}
</style>
