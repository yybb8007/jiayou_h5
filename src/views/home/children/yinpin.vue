<template>
	<div>
		<!-- 全局header -->
		<section id="wrapper" class="sy_main" @click="callback">
			<div id="yp_banner" class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in data.lunbo"><img :src="item.lunbo_imgurl" alt="" /></div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<main id="yp_main">
				<!-- 每日推荐 -->
				<article class="main_title">
					<div class="title_message">
						<p class="i_icon"><i class="jy_iconfont icon_main yinpin_icon  xinxing_title"></i></p>
						<p class="title_name">热  | 销  | 明  | 星</p>
					</div>
					<div class="title_img"><img v-lazy="data[0].banner" alt="" /></div>
				</article>
				<ul>
					<li class="data_noe">
						<div class="data_message">
							<ul>
								<li v-for="item in data[0].goods_detaill_arr">
									<img v-lazy="item.goods_thumb" alt="" :ID="item.goods_id" :target="item.target" />
									<p class="message_name" :ID="item.goods_id" :target="item.target">{{ item.goods_name }}</p>
									<p class="message_price">￥<span class="newPrice" :ID="item.goods_id" :target="item.target">{{ item.shop_price }}</span><span class="oldPrice">￥{{ item.market_price }}</span></p>
								</li>
							</ul>
						</div>
					</li>
					<li class="data_two">
						<img :src="data[2].banner" alt="" />
					</li>
					<li class="data_three data_noe">
						<div class="data_message">
							<ul>
								<li v-for="item in data[2].goods_detaill_arr">
									<img v-lazy="item.goods_thumb" alt="" :ID="item.goods_id" :target="item.target" />
									<p class="message_name" :ID="item.goods_id" :target="item.target">{{ item.goods_name }}</p>
									<p class="message_price">￥<span class="newPrice" :ID="item.goods_id" :target="item.target">{{ item.shop_price }}</span><span class="oldPrice">￥{{ item.market_price }}</span></p>
								</li>
							</ul>
						</div>
					</li>
					<li class="data_four">
						<div class="four_title">
							<span class="left"></span>
							<p class="four_title_name">超 值 精 选</p>
							<span class="right"></span>
						</div>
						<article class="four_message">
							<ul>
								<li v-for="item in data[1].goods_detaill_arr" :ID="item.goods_id" :target="item.target">
									<img v-lazy="item.goods_thumb" alt="" :ID="item.goods_id" :target="item.target" />
									<div class="data_message" :ID="item.goods_id" :target="item.target">
										<p class="name" :ID="item.goods_id" :target="item.target">{{ item.goods_name }}</p>
										<p class="message" :ID="item.goods_id" :target="item.target">{{ item.goods_brief }}</p>
										<!--<span class="flash">限时抢购</span>-->
										<p class="price">￥<span class="newPrice" :ID="item.goods_id" :target="item.target">{{ item.shop_price }}</span><span class="oldPrice">￥{{ item.market_price }}</span></p>
										<span class="shopping" @click = "addShop" :ID="item.goods_id" target = "222"><i class="jy_iconfont icon_shopping" @click = "addShop"></i></span>
									</div>
								</li>
							</ul>
						</article>
					</li>
				</ul>
			</main>
		</section>
	</div>
</template>
<script>
//	window.history.go(0);
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
					console.log($(e.target).attr("ID"))
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
				this.$http.jsonp(this.baseUrl + '.t.jiayou9.com/channel/tea?debug=1&format=jsonp').then(function(res) {
					this.data = res.body.data;
					    					console.log(JSON.parse(JSON.stringify(res.body.data)))
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
		background: #F1F1F1;
		/*margin-top: 184px;*/
		#yp_banner {
			width: 100%;
			height: 350px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		#yp_main {
			/*padding-bottom: 98px;*/
			background: #fff;
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
					.i_icon{
						display: inline-block;
						position: relative;
						top: 5px;
					}
				}
				.title_img {
					height: 300px;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}

			/* 热销明星 */ 
			.data_noe {
				.data_message {
					margin: 34px 0;
					width: 100%;
					overflow: auto;
					overflow-y: hidden;
					background: #fff;
					ul {
						padding: 0 24px;
						width: 1000%;
						height: 100%;
						/*overflow: hidden;*/
						li {
							width: 240px;
							line-height: 30px;
							margin-right: 60px;
							float: left;
							height: 100%;
							text-align: center;
							/*background: red;*/
							img {
								width: 180px;
								height: 180px;
								margin-bottom: 8px;
							}
							.message_name {
								font-size: 30px;
								height: 34px;
								line-height: 34px;
								text-align: left;
								margin-bottom: 12px;
							}
							.message_price {
								color: #FF4B3A;
								font-size: 24px;
								line-height: 34px;
								text-align: left;
								.newPrice {
									font-size: 34px;
								}
								.oldPrice {
									text-decoration: line-through;
									font-size: 22px;
									color: #999;
									margin-left: 12px;
								}
							}
							.message_name {
								width: 100%;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
						}
						li:last-of-type{
							margin-right: 0;
						}
					}
				}
			}
			.data_two {
				img {
					width: 100%;
					height: 300px;
				}
			}
			.data_two {
				img {
					width: 100%;
					height: 300px;
				}
			}

			/* 限免 */
			.data_four {
				.four_title {
					height: 98px;
					padding: 0 24px;
					background: #fff;
					line-height: 98px;
					text-align: center;
					position: relative;
					span {
						display: inline-block;
						width: 240px;
						border-bottom: 2px solid #E5E5E5;
						position: absolute;
					}
					.left{
						left: 24px;
						top: 47px;
					}
					.right{
						right: 24px;
						top: 47px;
					}
					p {
						height: 98px;
						line-height: 98px;
						font-size: 32px;
						color: #333;
						padding: 0 40px;
					}
				}
				.four_message {
					ul {
						li {
							padding: 24px;
							overflow: hidden;
							border-bottom: 1px solid #eee;
							position: relative;
							background: #fff;
							line-height: 34px;
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
							img {
								width: 180px;
								height: 180px;
								margin-right: 60px;
								float: left;
							}
							.data_message {
								padding-top: 10px ;
								width: 420px;
								float: left;
								line-height: 30px;
								.name {
									font-size: 30px;
									height: 40px;
									line-height: 40px;
									color: #333;
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
									border: 0.013rem solid #ff4b3a;
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
	}
</style>