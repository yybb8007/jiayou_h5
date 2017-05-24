<template>
	<section>
		<article class="goods_img" v-html="data.goods_desc"></article>
	</section>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
					},
					data: []
				}
			},
			computed: {},
			methods: {
				setId:function(){
					var str = location.href;
					localStorage.setItem('str', str);
					console.log(str);
				}
			},
			components: {
//				"nvHead": require('../../components/header.vue'),
//				"nvFooter": require('../../components/footer.vue')
			},
			mounted: function(){
				
				var str = location.href; //取得整个地址栏
				var goods_id = str.split('=')[1];
//
				console.log(goods_id);
				
				// 替换id
				function changeURLArg(url, arg, arg_val) {
					var pattern = arg + '=([^&]*)';
					var replaceText = arg + '=' + arg_val;
					if(url.match(pattern)) {
						var tmp = '/(' + arg + '=)([^&]*)/gi';
						tmp = url.replace(eval(tmp), replaceText);
						return tmp;
					} else {
						if(url.match('[\?]')) {
							return url + '&' + replaceText;
						} else {
							return url + '?' + replaceText;
						}
					}
					var URL = url + '\n' + arg + '\n' + arg_val;
					return URL;
				};
//				changeURLArg('https://a1.t.jiayou9.com/product/description?id=410&debug=1&device_type=3&format=jsonp','id',id);
				
				this.$http.jsonp(changeURLArg('https://a1.t.jiayou9.com/product/description?id=410&debug=1&device_type=3&format=jsonp','id',goods_id)).then(function(res){
					this.data=res.body.data;
					console.log(res.body.data.goods_id);
//					console.log(res.body.data[8]);
					// 轮播图
					var mySwiper = new Swiper ('.swiper-container', {
						direction: 'horizontal',
//						autoplay: 2000,
						loop: true,
						observer: true,
						// 分页器
						pagination: '.swiper-pagination'
					});
					var str = location.href;
					localStorage.setItem('1', 2);
				})
			},
	}
</script>
<style lang="sass" scoped>
	section{
		height: 100%;
		.goods_img{
			font-size: 0;
			img{
				width: 100%;
			}
		}
	}
		
</style>
