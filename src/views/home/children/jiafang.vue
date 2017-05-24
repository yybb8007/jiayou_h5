<template>
	<div>
		<!-- 全局header -->
		<section id="wrapper" class="sy_main" @click="callback">
			<div id="jf_banner" class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in data.lunbo"><img :src="item.lunbo_imgurl" alt="" /></div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<main id="jf_main">
				<article class="main_title">
					<div class="title_message">
						<i class="jy_iconfont icon_main yinpin_icon  xinxing_title"></i>
						<p class="title_name">热  | 销  | 明  | 星</p>
					</div>
				</article>
				<article class="main_data">
					<ul>
						<li v-for="item in data[0].goods_detaill_arr" :ID="item.goods_id" :target="item.target">
							<div class="message_img">
								<img v-lazy="item.goods_thumb" alt="" :ID="item.goods_id" :target="item.target" />
							</div>
							<div class="data_message">
								<p class="name" :ID="item.goods_id" :target="item.target">{{ item.goods_name }}</p>
								<p class="message" :ID="item.goods_id" :target="item.target">{{ item.goods_brief }}</p>
								<!--<span class="flash">限时抢购</span>-->
								<p class="price">￥<span class="newPrice" :ID="item.goods_id" :target="item.target">{{ item.shop_price }}</span><span class="oldPrice">￥{{ item.market_price }}</span></p>
								<span class="shopping" @click = "addShop" :ID="item.goods_id" target = "222"><i class="jy_iconfont icon_shopping"></i></span>
							</div>
						</li>
					</ul>
				</article>
			</main>

		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {},
					data: []
				}
			},
			computed: {},
			methods: {
				/*全局点击*/
				callback: function(e) {
					var key = ($(e.target).attr("ID")) + "+" + ($(e.target).attr("target")),
						id = $(e.target).attr("ID"),
						target = $(e.target).attr("target"),
						nan = Number(id + target),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}');
					if(key.length < 9 && nan!==NaN) {
						localStorage.setItem('key', value)
						window.location.href = value;
						console.log(value)
					}
				},
//				所有购物车图标
				addShop: (e)=>{
					var id = ($(e.target).parent().attr("ID")),
						target = ($(e.target).parent().attr("target")),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}');
						console.log(value)
						window.location.href = value;
				}
			},
			components: {},
			mounted: function() {
				this.$http.jsonp('https://a1.t.jiayou9.com/channel/jiafang?debug=1&format=jsonp').then(function(res) {
					this.data = res.body.data;
					//					 console.log(res.body.data);
					// 轮播图
					var mySwiper = new Swiper('.swiper-container', {
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
		background: #f1f1f1;
		/*margin-top: 184px;*/
		#jf_banner {
			width: 100%;
			height: 350px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		#jf_main {
			/*padding-bottom: 98px;*/
			.main_title {
				.title_message {
					height: 98px;
					color: #333;
					font-size: 32px;
					background: #fff;
					text-align: center;
					overflow: hidden;
					position: relative;
					.title_name{
						height: 98px;
						line-height: 98px;
						display: inline-block;
					}
					i{
						display: inline-block;
						position: relative;
						top: 5px;
					}
				}
			}
			.main_data {
				ul {
					li {
						padding: 24px;
						border-bottom: 1px solid #eee;
						position: relative;
						background: #fff;
						height: 228px;
						.data_sale {
							width: 100px;
							height: 30px;
							position: absolute;
							top: 12px;
							left: 0;
							background: url('../../../assets/images/components/bq.png') no-repeat;
							background-size: 100px;
							padding: 0 .4rem;
							line-height: 30px;
							color: #e5eed9;
						}
						.data_tejia {
							background: url('../../../assets/images/components/bq1.png');
							background-size: 100px;
							font-size: 16px;
						}
						.message_img {
							width: 180px;
							height: 180px;
							margin-right: 60px;
							float: left;
							img {
								width: 100%;
								height: 100%;
							}
						}
						.data_message {
							width: 420px;
							padding-top: 10px ;
							float: left;
							line-height: 30px;
							.name {
								font-size: 30px;
								color: #333;
								height: 40px;
								line-height: 40px;
								width: 80%;
								overflow: hidden;
								white-space: pre;
								text-overflow: ellipsis;
							}
							.message {
								font-size: 26px;
								width: 80%;
								color: #999;
								margin: 20px 0 25px 0;
								overflow: hidden;
								white-space: pre;
								text-overflow: ellipsis;
							}
							.flash {
								color: #ff4b3a;
								border: 1px solid #ff4b3a;
								border-radius: 4px;
								font-size: 14px;
							}
							.price {
								color: #ff4b3a;
								font-size: 24px;
								.newPrice {
									font-size: 34px;
								}
								.oldPrice {
									color: #999;
									text-decoration: line-through;
									margin-left: 12px;
								}
							}
							.shopping {
								position: absolute;
								right: 24px;
								bottom: 24px;
								display: inline-block;
								width: 100px;
								height: 100px;
								border-radius: 50%;
								text-align: center;
								line-height: 100px;
								color: #84b83a;

							}
						}
					}
					li:last-of-type {
						border-bottom: none;
					}
				}
			}
		}
	}
</style>