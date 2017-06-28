<template>
	<div>
		<!-- 全局header -->
		<section id="wrapper" class="sy_main" @click="callback">
			<div id="mz_banner" class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in data.lunbo"><img :src="item.lunbo_imgurl" alt="" /></div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<main id="mz_main">
				<ul>
					<li>
						<article class="main_title">
							<div class="title_message">
								<i class="jy_iconfont icon_main  xinxing_title"></i>
								<p class="title_name">热  | 销  | 明  | 星</p>
							</div>
							<div class="title_img title_imgTop">
								<div class="sales salesTop">
									<p class="sales_name"><span class="mid_name1"></span>水果季 | 超值购<span class="mid_name2"></span></p>
									<!--<p class="message">3.12—3.16全场水果满300减40</p>-->
								</div>
							</div>
						</article>
						<article class="main_data">
							<ul>
								<li v-for="item in data[0].goods_detaill_arr" :ID="item.goods_id" :target="item.target">
									<img v-lazy="item.goods_thumb" alt="" :ID="item.goods_id" :target="item.target" />
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
					</li>
					<li class="main_two">
						<article class="main_title">
							<div class="title_message">
								<i class="jy_iconfont icon_main  xinxing_title"></i>
								<p class="title_name">超 | 值 | 精 | 选</p>
							</div>
							<div class="title_img title_imgBtm">
								<div class="sales salesBtm">
									<p class="sales_name"><span class="mid_name1" id="mid_name3"></span>每日鲜 | 超值购<span class="mid_name2" id="mid_name3"></span></p>
									<!--<p class="message">3.12—3.16全场水果满300减40</p>-->
								</div>
							</div>
						</article>
						<article class="main_data">
							<ul>
								<li v-for="item in data[1].goods_detaill_arr" :ID="item.goods_id" :target="item.target">
									<img v-lazy="item.goods_thumb" alt="" :ID="item.goods_id" :target="item.target" />
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
					</li>
				</ul>
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
					console.log($(e.target))
					var id = ($(e.target).parent().attr("ID")),
						target = ($(e.target).parent().attr("target")),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}');
						console.log(value)
						window.location.href = value;
				}
			},
			components: {},
			mounted: function() {
				this.$http.jsonp(this.baseUrl + '.t.jiayou9.com/channel/fruit?debug=1&format=jsonp').then(function(res) {
					this.data = res.body.data;
					//              console.log(res.body.data);
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
		#mz_banner {
			width: 100%;
			height: 350px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		#mz_main {
			background: #f1f1f1;
			/*padding-bottom: 98px;*/
			ul {
				li {
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
						.title_imgTop {
							background: url(http://m.t.jiayou9.com/dist/assets/bg_greenfruit.png) no-repeat;
							background-size: 100%;
							background-color: #fff;
						}
						.title_imgBtm {
							background: url(http://m.t.jiayou9.com/dist/assets/bg_bluefruit@2x.png) no-repeat;
							background-size: 100%;
							background-color: #fff;
						}
						.title_img {
							height: 180px;
							padding: 0 60px;
							.sales {
								text-align: center;
								color: #84b83a;
								font-size: 22px;
								.sales_name {
									font-size: 32px;
									height: 85px;
									padding-top: 55px;
									position: relative;
									top: 15px;
									span {
										min-width: 25%;
										display: inline-block;
										height: 0;
										border-bottom: 4px solid #84b83a;
										position: absolute;
									}
									.mid_name1 {
										top: 75px;
										left: 5px;
									}
									.mid_name2 {
										top: 75px;
										right: 5px;
									}
								}
								.message {
									height: 22px;
									margin-top: 20px;
									line-height: 22px;
								}
							}
							.salesBtm {
								color: #40c0c9;
								#salesColor {
									min-width: 20%;
									height: 10px;
									background: red;
									border: 0.013rem solid #40c0c9;
								}
							}
						}
					}
					.main_data {
						ul {
							li {
								padding: 24px;
								/*display: flex;*/
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
								img {
									width: 180px;
									height: 180px;
									margin-right: 60px;
									float: left;
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
				.main_two{
					margin-top: 16px;
					#mid_name3{
						border-bottom: 4px solid #40c0c9;
					}
				}
			}
		}
	}
</style>