<template>
	<section>
		<!-- 顶部标题行 -->
		<header id="all_header">
    		<!--<router-link :to="'orderGoods/xq?goods_id=' + data.goods_id"><i class="jy_iconfont icon_header"></i></router-link>-->
    		<i class="jy_iconfont"></i>
    		<p class="all_title">全部评论</p>
    		<i class="iconfont"></i>
    		<!--<i class="iconfont icon_fenxiang"></i>-->
    	</header>
		<main id="goods_main">
			
			<article class="evaluate">
				<div class="title">
					<p class="left">商品评价(<span>{{ data.count }}</span>)</p>
					<!--<p class="right">好评度<span>99<span>%</span></span>-->
				</div>
				<ul>
					<li v-for="i in data.items">
						<div class="top">
							<p class="adimeName">{{ i.username }}<br />
								<span class="yezi">
								</span>
							</p>
							<p>{{ i.datetime }}</p>
						</div>
						<div class="bottom">
							<p>{{ i.content }}</p>
						</div>
					</li>
				</ul>
			</article>
			
		</main>
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
			},
			components: {
//				"nvHead": require('../../components/header.vue'),
//				"nvFooter": require('../../components/footer.vue')
			},
			mounted: function(){
				
				var str = location.href; //取得整个地址栏
//				var str1 = str.split('?')[1];
//				var goods_id = str2.split('=')[1];

				var str1 = str.split('goods_id=')[1];
				var goods_id = str1.split('&')[0];
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
//				changeURLArg('https://a2.t.jiayou9.com/product/comment_text?debug=1&id=658&data_format=1','id',id);
				
				this.$http.jsonp(changeURLArg('https://a2.t.jiayou9.com/product/comment_text?debug=1&id=658&data_format=1','id',goods_id)).then(function(res){
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
	section {
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
	    	border-bottom: 1px solid #ededed;
	    	z-index: 100;
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
		#goods_main{
			-webkit-box-flex:1;
			-webkit-flex:1;
			-ms-flex:1;
			flex:1;
			width:100%;
			margin-bottom: 88px;
			
			.evaluate{
				margin-top: 20px;
				background: #fff;
				.title{
					display: -webkit-flex;
					height: 88px;
					line-height: 88px;
					-webkit-justify-content: space-between;
					padding: 0 24px;
					border-bottom: 1px solid #eee;
					font-size: 30px;
					.left{
						color: #333;
					}
					.right{
						font-size: 26px;
						color: #888;
						span{
							color: #a2c082;
							margin-left: 5px;
						}
						i{
							margin-left: 8px;
							font-size: 36px;
						}
					}
				}
				ul{
					li{
						border-top: 1px solid #eee;
						padding: 0 24px;
						font-size: 26px;
						.top{
							display: -webkit-flex;
							height: 98px;
							-webkit-justify-content: space-between;
							-webkit-align-items: center;
							background: #fff;
							border-bottom: 1px solid #eee;
							font-size: 26px;
							img{
								width: 150px;
							}
							.adimeName{
								position: relative;
								width: 450px;
								.yezi{
									position: absolute;
									left: 0;
									top: 44px;
									img{
										width: 23px;
										height: 18px;
										float: left;
										margin-right: 8.8px;
									}
								}
							}	
						}
						.bottom{
							line-height: 98px;
							min-height: 98px;
						}
					}
				}
				.lookMore{
					height: 100px;
					line-height: 100px;
					text-align: center;
					font-size: 32px;
					color: #888;
					border-top: 1px solid #eee;
					i{
						margin-left: 12px;
						font-size: 40px;
					}
				}
			}
			.upLoad{
				margin-top: 16px;
				height: 100px;
				text-align: center;
				line-height: 100px;
				font-size: 32px;
				color: #999;
				background: #fff;
			}
			
		}

	}
</style>
