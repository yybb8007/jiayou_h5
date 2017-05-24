<template>
	<section>
		<!--<header id="goods_header" name = "goods_header">
			<i class="jy_iconfont icon_close"></i>
			<i class="jy_iconfont icon_more"></i>
		</header>-->
		<main id="goods_main">
			
			<article class="evaluate">
				<div class="title">
					<p class="left">商品评价(<span>{{ data.count }}</span>)</p>
					<!--<p class="right">好评度<span>99<span>%</span></span>-->
					<router-link :to="'/qbpinglun?goods_id=' + data.goods_id">
						<p class="right">查看全部
							<i class="jy_iconfont icon_right"></i>
						</p>
					</router-link>
				</div>
				<ul>
					<li>
						<div class="top">
							<p class="adimeName">{{ data.items[0].username }}<br />
								<span class="yezi">
								</span>
							</p>
							<p>{{ data.items[0].datetime }}</p>
						</div>
						<div class="bottom">
							<p>{{ data.items[0].content }}</p>
						</div>
					</li>
				</ul>
			</article>
			
			<router-link to="'dingdan?goods_id=' + data.goods_id + '/xq'">
				<article class="upLoad">图文详情</article>
			</router-link>
			<router-view></router-view>
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
//				changeURLArg('https://a2.t.jiayou9.com/product/comment_text?debug=1&id=330&data_format=1','id',id);
				
				this.$http.jsonp(changeURLArg('https://a2.t.jiayou9.com/product/comment_text?debug=1&id=330&data_format=1','id',goods_id)).then(function(res){
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
	template{
		div{
			height: 100%;
		}
	}
	section {
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
