<template>
	<div>
		<!-- 全局header -->
		<!--<nv-head :page-name="headTit.title" :back-type="headTit.back"></nv-head>-->
		<section id="wrapper" class="sy_main" @click = "callback">
			<div id="st_banner" class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in data.lunbo"><img :src="item.lunbo_imgurl" alt="" /></div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<main id="st_main">
				<ul>
					<!--贵州好茶-->
					<li class="main_one">
						<article class="main_title">
							<div class="title_message">
								<p class="title_name">贵 | 州 | 好 | 茶</p>
							</div>
						</article>
						<article class="main_message">
							<div>
								<!--<img src="../../../assets/images/components/tu1@3x.jpg" alt="" />-->
							</div>
							<div>
								<!--<img src="../../../assets/images/components/tu2@3x.jpg" alt="" />-->
							</div>
							<div>
								<!--<img src="../../../assets/images/components/tu3@3x.jpg" alt="" />-->
							</div>
							<div>
								<h3 class="name">【贵州出好茶】</h3>
								<p class="message">冬无严寒、夏无酷暑，得天独厚的地理环境和气候，让贵州700万亩茶园，成为全国乃至世界最优秀的茶产区。</p>
							</div>
						</article>
					</li>

					<!--生态健康-->
					<li class="main_two">
						<article class="main_title">
							<div class="title_message">
								<p class="title_name">生 | 态 | 健 | 康</p>
							</div>
						</article>
						<article class="main_message">
							<div class="message_top">
								<div>—　生态自然　—</div>
								<div>
									<!--<img src="../../../assets/images/components/tu4@3x.jpg" alt="" />-->
								</div>
								<div>
									<!--<img src="../../../assets/images/components/tu5@3x.jpg" alt="" />-->
								</div>
							</div>
							<div class="message_bottom">
								<div class="left">
									<div class="left_img">
										<!--<img src="../../../assets/images/components/tu6@3x.jpg" alt="" />-->
									</div>
									<div class="left_message">
										<h3 class="name">【原生态大米】</h3>
										<p class="message">自然赋予作物的最本原的生活状态。</p>
									</div>
								</div>
								<div class="right">
									<!--<img src="../../../assets/images/components/tu7@3x.jpg" alt="" />-->
								</div>
							</div>
						</article>
					</li>

					<!-- 深山原味 -->
					<li class="main_three">
						<article class="main_title">
							<div class="title_message">
								<p class="title_name">深 | 山 | 原 | 味</p>
							</div>
						</article>
						<article class="main_message">
							<div class="message_top">
								<div class="left">
									<!--<img src="../../../assets/images/components/tu8@3x.jpg" alt="" />-->
								</div>
								<div class="right">
									<h3 class="name">【天然食材】</h3>
									<p class="message">没有经过人工加工，带着浓浓乡味的食材，口感好的同时更健康。</p>
								</div>
							</div>
							<div class="message_bottom">
								<div>
									<!--<img src="../../../assets/images/components/tu9@3x.jpg" alt="" />-->
								</div>
								<div>
									<!--<img src="../../../assets/images/components/tu10@3x.jpg" alt="" />-->
								</div>
								<div>
									<!--<img src="../../../assets/images/components/tu11@3x.jpg" alt="" />-->
								</div>
							</div>

						</article>
					</li>

					
					
					<!-- 精选好品 -->
					<li class="main_four">
						<article class="main_title">
							<div class="title_message">
								<p class="title_name">精 | 选 | 好 | 品</p>
							</div>
						</article>
						<article class="main_message">
							<ul>
								<li class="message_one" v-for="item in data[0].goods_detaill_arr" :ID="item.goods_id" :target="item.target">
									<img v-lazy="item.goods_thumb" alt="" :ID="item.goods_id" :target="item.target" />
									<div class="middle">
										<p :ID="item.goods_id" :target="item.target">{{ item.goods_name }}</p>
									</div>
									<div class="right">
										<h3>{{ item.goods_name }}</h3>
										<p class="price"><span>￥</span><br /><span :ID="item.goods_id" :target="item.target">{{ item.shop_price }}</span></p>
										<p class="buy" :ID="item.goods_id" :target="item.target">立即购买</p>
										<p class="xiexian"></p>
										<p class="shuxian"></p>
									</div>
								</li>
							</ul>
						</article>
					</li>

					<!-- 为你推荐 -->
					<li class="main_five">
						<article class="main_title">
							<div class="title_message">
								<p class="sales_name"><span class="mid_name1"></span>◆　为你推荐　◆<span class="mid_name2"></span></p>
							</div>
						</article>
						<article class="main_message">
							<ul>
								<li v-for="item in data[1].goods_detaill_arr" :ID="item.goods_id" :target="item.target">
									<div class="message_img">
										<img v-lazy="item.goods_thumb" alt="" :ID="item.goods_id" :target="item.target" />
									</div>
									<p class="name" :ID="item.goods_id" :target="item.target">{{ item.goods_name }}</p>
									<p class="price">￥
										<span class="shop_price" :ID="item.goods_id" :target="item.target">{{ item.shop_price }}</span>
										<span class="market_price" :ID="item.goods_id" :target="item.target">￥{{ item.market_price }}</span>
									</p>
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
					headTit: {
						title: '生态馆',
						back: 'ok',
					},
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
					if(nan !== 'NaN') {
						localStorage.setItem('key', value)
						window.location.href = value;
					}
				},
			},
			components: {
				"nvHead": require('../../../components/header.vue'),
			},
			mounted: function() {
				this.$http.jsonp('https://a1.t.jiayou9.com/channel/shengtaiguan?debug=1&format=jsonp').then(function(res) {
					this.data = res.body.data;
					console.log(res.body.data[0].goods_detaill_arr);
					// 轮播图
					var mySwiper = new Swiper('.swiper-container', {
						direction: 'horizontal',
						autoplay: 2000,
						loop: true,
						observer: true,
						// 分页器
						pagination: '.swiper-pagination',
					});

				})
			}
	}
</script>
<style lang="sass" scoped>
	* {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	input {
		-webkit-user-select: auto;
	}
	section {
		/*background: rgb(255, 255, 255);*/
		background: #f1f1f1;
		h3 {
			font-weight: normal;
		}
		#st_banner {
			width: 100%;
			height: 540px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.sales_name {
			position: relative;
			span {
				width: 90px;
				display: inline-block;
				height: 0;
				border: 0.013rem solid #439a45;
				position: absolute;
			}
			.mid_name1 {
				top: 49px;
				left: 150px;
			}
			.mid_name2 {
				top: 49px;
				right: 150px;
			}
		}
		#st_main {
			ul {
				/*贵州好茶*/
				.main_one {
					background: #fff;
					height: 544px;
					.main_title {
						height: 118px;
						line-height: 118px;
						font-size: 32px;
						color: #439a45;
						text-align: center;
					}
					.main_message {
						div {
							float: left;
							width: 306px;
							height: 190px;
							overflow: hidden;
							h3 {
								font-size: 24px;
								color: #333;
								margin-bottom: 12px;
							}
							.message {
								height: 78%;
								font-size: 20px;
								color: #666;
								line-height: 30px;
								overflow: hidden;
								text-overflow: ellipsis;
								display: -webkit-box;
								-webkit-line-clamp: 4;
								-webkit-box-orient: vertical;
								padding-left: 10px;
								text-align: justify;
							}
							img {
								width: 100%;
								/*height: 100%;*/
							}
						}
						div:first-of-type{
							margin-left: 62px;
							margin-right: 14px;
							margin-bottom: 14px;
							background: url(https://m2.t.jiayou9.com/dist/assets/tu1@3x.jpg);
							background-size: cover;
						}
						div:nth-of-type(2) {
							margin-bottom: 14px;
							background: url(https://m2.t.jiayou9.com/dist/assets/tu2@3x.jpg);
							background-size: cover;
						}
						div:nth-of-type(3) {
							margin-left: 62px;
							margin-right: 14px;
							height: 160px;
							background: url(https://m2.t.jiayou9.com/dist/assets/tu3@3x.jpg);
							background-size: cover;
						}
						div:nth-of-type(4) {
							height: 160px;
						}
					}
				}
				/*生态健康*/
				.main_two {
					margin-top: 16px;
					height: 554px;
					background: #fff;
					font-size: 0;
					.main_title {
						height: 118px;
						line-height: 118px;
						font-size: 32px;
						color: #439a45;
						text-align: center;
					}
					.main_message {
						padding: 0 62px;
						.message_top {
							height: 130px;
							div {
								width: 189px;
								height: 100%;
								font-size: 26px;
								float: left;
								margin-left: 14px;
								img {
									width: 100%;
								}
							}
							div:first-of-type {
								width: 220px;
								line-height: 130px;
								text-align: center;
								margin-left: 0;
							}
							div:nth-of-type(2){
								background: url(https://m2.t.jiayou9.com/dist/assets/tu4@3x.jpg);
								background-size: cover;
							}
							div:nth-of-type(3){
								background: url(https://m2.t.jiayou9.com/dist/assets/tu5@3x.jpg);
								background-size: cover;
							}
						}
						.message_bottom {
							height: 230px;
							margin-top: 14px;
							div {
								float: left;
							}
							.left {
								height: 100%;
								width: 220px;
								margin-right: 14px;
								overflow: hidden;
								h3 {
									font-size: 24px;
									color: #333;
									margin-bottom: 10px;
								}
								.message {
									height: 60px;
									font-size: 20px;
									color: #666;
									line-height: 30px;
									overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-line-clamp: 2;
									-webkit-box-orient: vertical;
									padding-left: 10px;
									text-align: justify;
								}
								.left_img {
									width: 220px;
									height: 130px;
									background: url(https://m2.t.jiayou9.com/dist/assets/tu6@3x.jpg);
									background-size: cover;
									img{
										width: 100%;
									}
								}
								.left_message {
									width: 100%;
								}
							}
							.right {
								width: 392px;
								height: 100%;
								background: url(https://m2.t.jiayou9.com/dist/assets/tu7@3x.jpg);
								background-size: cover;
								img {
									width: 100%;
								}
							}
						}
					}
				}
				/*深山原味*/
				.main_three {
					margin-top: 16px;
					height: 554px;
					background: #fff;
					;
					.main_title {
						height: 118px;
						line-height: 118px;
						font-size: 32px;
						color: #439a45;
						text-align: center;
					}
					.main_message {
						padding: 0 62px;
						.message_top {
							height: 230px;
							div {
								height: 100%;
								float: left;
							}
							.left {
								width: 392px;
								margin-right: 14px;
								background: url(https://m2.t.jiayou9.com/dist/assets/tu8@3x.jpg);
								background-size: cover;
								img {
									width: 100%;
								}
							}
							.right {
								height: 100%;
								width: 220px;
								overflow: hidden;
								h3 {
									font-size: 24px;
									color: #333;
									margin-bottom: 12px;
								}
								.message {
									height: 86px;
									font-size: 20px;
									color: #666;
									line-height: 30px;
									overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-line-clamp: 3;
									-webkit-box-orient: vertical;
									padding-left: 10px;
									text-align: justify;
								}
							}
						}
						.message_bottom {
							height: 130px;
							margin-top: 14px;
							font-size: 0;
							div {
								width: 189px;
								margin-left: 14px;
								height: 100%;
								float: left;
								img {
									width: 100%;
								}
							}
							div:first-of-type {
								margin-left: 0;
								background: url(https://m2.t.jiayou9.com/dist/assets/tu9@3x.jpg);
								background-size: cover;
							}
							div:nth-of-type(2) {
								background: url(https://m2.t.jiayou9.com/dist/assets/tu10@3x.jpg);
								background-size: cover;
							}
							div:nth-of-type(3) {
								background: url(https://m2.t.jiayou9.com/dist/assets/tu11@3x.jpg);
								background-size: cover;
							}
						}
					}
				}
				/*精选好品*/
				.main_four {
					margin-top: 16px;
					height: 1050px;
					background: #fff;
					;
					.main_title {
						height: 118px;
						line-height: 118px;
						font-size: 32px;
						color: #439a45;
						text-align: center;
					}
					.main_message {
						padding: 0 86px;
						li {
							height: 210px;
							margin-top: 120px;
							img {
								width: 240px;
								height: 210px;
								border: 0.013rem solid #439a45;
								float: left;
							}
							.moddle_img{
								position: relative;
								left: 25px;
							}
							.middle {
								float: left;
								margin-left: 52px;
								margin-right: 50px;
								p {
									float: left;
									font-size: 24px;
									color: #999;
									width: 24px;
									height: 210px;
									line-height: 26px;
									-moz-column-count: 2; /* Firefox */
									-webkit-column-count: 2; /* Safari 和 Chrome */
									column-count: 2;
									-moz-column-gap: 50px;		/* Firefox */
									-webkit-column-gap: 50px;	/* Safari 和 Chrome */
									column-gap: 50px;
									column-span: all;
									margin-right: 20px;
									/*overflow: hidden;*/
								}
							}
							.right {
								float: left;
								position: relative;
								width: 190px;
								height: 210px;
								h3 {
									width: 30px;
									color: #439a45;
									height: 182px;
									overflow: hidden;
									font-weight: 500;
									line-height: 31px;
									span {
										display: inline-block;
										transform: rotateZ(90deg);
									}
								}
								.price {
									width: 74px;
									height: 74px;
									padding-top: 6px;
									line-height: 26px;
									text-align: center;
									border-radius: 50%;
									background: #439a45;
									font-size: 22px;
									color: #fff;
									position: absolute;
									bottom: 54px;
									right: 20px;
								}
								.buy {
									font-size: 24px;
									width: 124px;
									height: 40px;
									border: 0.013rem solid #439a45;
									color: #439a45;
									border-radius: 4px;
									text-align: center;
									line-height: 40px;
									position: absolute;
									right: 0;
									bottom: 0;
								}
								.xiexian {
									position: absolute;
									left: 15px;
									bottom: 0;
									height: 200px;
									width: 2px;
									border-left: 0.026rem solid #439a45;
									transform: rotateZ(30deg) translateX(50px) translateY(-15px);
								}
								.shuxian {
									height: 120px;
									width: 1px;
									border-left: 0.013rem solid #439a45;
									position: absolute;
									right: 62px;
									bottom: -120px;
								}
							}
						}
						
						/*偶数商品样式*/
						li:nth-of-type(even) {
							.right{
								float: left;
							}
							img{
								float: right;
							}
							.middle{
								float: right;
								margin-right: 0;
								padding-right: 20px;
							}
							h3 {
								float: right;
							}
							.price {
								position: absolute;
								left: 20px;
							}
							.buy {
								position: absolute;
								left: 0;
							}
							.xiexian {
								position: absolute;
								right: 15px;
								transform: rotateZ(-30deg) translateX(85px) translateY(60px);
							}
							.shuxian {
								left: 62px;
							}
							.middle {
								margin-right: 52px;
								margin-left: 24px;
							}
						}
						/*第一个商品去掉点顶部距离*/
						li:first-of-type{
							margin-top: 0;
						}
						/*最后一个商品去掉竖线*/
						li:last-of-type{
							.shuxian {
								display: none;
							}
						}
					}
				}
				/*为你推荐*/
				.main_five {
					margin-top: 16px;
					.main_title {
						height: 98px;
						line-height: 98px;
						font-size: 32px;
						color: #439a45;
						text-align: center;
						background: #fff;
					}
					.main_message {
						ul {
							/* 清浮动 */
							overflow: hidden;
							li {
								height: 460px;
								width: 340px;
								background: #fff;
								float: left;
								margin-left: 24px;
								margin-top: 24px;
								.message_img {
									width: 292px;
									height: 300px;
									margin: 24px;
									img {
										width: 100%;
									}
								}
								.name {
									height: 40px;
									line-height: 40px;
									font-size: 30px;
									color: #333;
									text-align: center;
									overflow: hidden;
									white-space: pre;
									text-overflow: ellipsis;
								}
								.price {
									margin-top: 20px;
									margin-bottom: 24px;
									text-align: center;
									height: 40px;
									line-height: 40px;
									color: #ff4b3a;
									.shop_price {
										font-size: 34px;
										display: inline-block;
										margin-right: 14px;
									}
									.market_price {
										color: #999;
										font-size: 22px;
										text-decoration: line-through;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>