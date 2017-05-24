<template>
	<div >
		<!-- 全局header -->
		<!--<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>-->
		<section id="wrapper" class="sy_main" @click = "callback">
			<!--<header id="all_header">
        		<router-link to="/"><i class="iconfont icon_header"></i></router-link>
        		<p class="all_title">伴手礼</p>
        		<i></i>
        	</header>-->
			<div id="bsl_banner" class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in data.lunbo">
						<img src="../../../assets/images/components/banshou1.jpg" alt="" :ID="item.data" :target="item.target" />
						<img src="../../../assets/images/components/banshou2.jpg" alt="" :ID="item.data" :target="item.target" />
						<img src="../../../assets/images/components/banshou3.jpg" alt="" :ID="item.data" :target="item.target" />
						<img src="../../../assets/images/components/banshou4.jpg" alt="" :ID="item.data" :target="item.target" />
						<img src="../../../assets/images/components/banshou5.jpg" alt="" :ID="item.data" :target="item.target" />
						<!--<img :src="item.lunbo_imgurl" alt="" />-->
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>

			<main id="bsl_main">
				<ul>
					<li class="main_one">
						<article class="main_title">
							<ul>
								<router-link to="/3/11/banshouli_one"><li><span>100元以下</span></li></router-link>
								<router-link to="/3/11/banshouli_two"><li><span>100-200元</span></li></router-link>
								<router-link to="/3/11/banshouli_three"><li><span>200元以上</span></li></router-link>
							</ul>
						</article>
						<router-view></router-view>
					</li>

					<li class="main_two">
						<article class="main_title">
							<img v-lazy="data[0].banner" :ID="data[0].data" :target="data[0].target" />
						</article>

						<article class="main_message">
							<ul>

								<li class="message_three" v-for="item in data[0].goods_detaill_arr" :ID="item.goods_id" :target="item.target">
									<div class="content">
										<div class="left">
											<img v-lazy="item.goods_thumb" alt="" :ID="item.goods_id" :target="item.target" />
										</div>
										<div class="right">
											<h3 class="name" :ID="item.goods_id" :target="item.target">{{ item.goods_name }}</h3>
											<p class="message" :ID="item.goods_id" :target="item.target">　{{ item.goods_brief }}</p>
											<p class="bottom">
												￥<span class="shop_price" :ID="item.goods_id" :target="item.target">{{ item.shop_price }}</span>
												<span class="buy" :ID="item.goods_id" :target="item.target">立即购买</span>
											</p>
										</div>
										<p class="title" :ID="item.goods_id" :target="item.target">源自大自然的滋养珍品</p>

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
				headTit: {
					title: '伴手礼',
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
			this.$http.jsonp('https://a1.t.jiayou9.com/channel/banshouli?debug=1&format=jsonp').then(function(res) {
				this.data = res.body.data;
				console.log(res.body.data[0].goods_detaill_arr);
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
		background: #F1F1F1;
		h3 {
			font-weight: normal;
		}
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
	    	z-index: 100;
	    	.icon_header::before{
				font-family: 'jyzx-iconfont';
	    		content: "\e604";
	    		font-size: 36px;
	    	}
	    }
		background: #f1f1f1;
		#bsl_banner{
			/*margin-top: 88px;*/
			width: 100%;
			img{
				width: 100%;
				float: left;
			}
		}

		#bsl_main{
			ul{
				/*background: #fff;*/
				.main_one{
					.main_title{
						background: #fff;
						height: 88px;
						width: 100%;
						line-height: 88px;
						font-size: 30px;
						color: #333;
						ul{
							display: flex;
							background: #fff;
							a{
								flex: 1;

								li{
									text-align: center;
									span{
										display: inline-block;
										height: 100%;
									}
								}
							}
							a.router-link-active{
								span{
									color: #ff4b3a;
									border-bottom: 0.026rem solid #ff4b3a;
								}
							}
						}
					}
				}

				.main_two{
					margin-top: 24px;
					width: 100%;
					background: #fff;
					.main_title{
						height: 300px;
						margin-bottom: 40px;
						img{
							width: 100%;
						}
					}

					.main_message{
						li:nth-of-type(odd){
							height: 260px;
							width: 100%;
							overflow: hidden;
							margin: 48px 24px 0 24px;
							position: relative;
							.content{
								border: 0.013rem solid #ddd;
								height: 240px;
								width: 670px;
								margin-left: 30px;
								/*margin-right: 24px;*/
								margin-top: 12px;
								div{
									float: left;
									height: 200px;
									width: 360px;
									position: relative;
									img{
										width: 260px;
										height: 100%;
										position: absolute;
										top: -12px;
										left: -30px;
									}
									h3{
										font-size: 28px;
										color: #333;
										height: 35px;
										line-height: 35px;
										margin-bottom: 22px;
										margin-top: 37px;
										overflow: hidden;
										white-space: pre;
										text-overflow: ellipsis;
									}
									.message{
										width: 360px;
										font-size: 22px;
										color: #333;
										margin-top: 24px;
										overflow: hidden;
										white-space: pre;
										text-overflow: ellipsis;
									}
									.bottom{
										height: 40px;
										line-height: 40px;
										font-size: 24px;
										color: #ff4b3a;
										margin-right: 40px;
										overflow: hidden;
										width: 100%;
										.shop_price{
											font-size: 34px;
										}
										.buy{
											display: inline-block;
											float: right;
											width: 160px;
											height: 40px;
											line-height: 40px;
											text-align: center;
											color: #fff;
											background: #84b83a;
											border-radius: 20px;
											position: relative;
											right: 15px;
										}
									}
								}
								.title{
									width: 288px;
									font-size: 22px;
									height: 30px;
									line-height: 30px;
									color: #999;
									background: #fff;
									text-align: center;
									position: absolute;
									top: 0;
									right: 79px;
								}
								.left{
									width: 300px;
								}
							}
						}

						li:nth-of-type(even){
							height: 260px;
							width: 100%;
							overflow: hidden;
							margin: 48px 24px 0 0;
							position: relative;
							.content{
								border: 0.013rem solid #ddd;
								height: 240px;
								width: 670px;
								margin-left: 30px;
								margin-top: 12px;
								div{
									float: left;
									height: 200px;
									width: 330px;
									position: relative;
									img{
										width: 260px;
										height: 100%;
										position: absolute;
										top: -12px;
										right: -30px;
									}
									h3{
										font-size: 28px;
										color: #333;
										height: 35px;
										line-height: 35px;
										margin-bottom: 22px;
										margin-top: 37px;
										margin-left: 24px;
										overflow: hidden;
										white-space: pre;
										text-overflow: ellipsis;
									}
									.message{
										width: 100%;
										font-size: 22px;
										color: #333;
										margin-top: 24px;
										margin-left: 24px;
									}
									.bottom{
										height: 40px;
										line-height: 40px;
										font-size: 24px;
										color: #ff4b3a;
										overflow: hidden;
										width: 100%;
										margin-left: 24px;
										.shop_price{
											margin-right: 20px;
											font-size: 34px;
										}
										.buy{
											display: inline-block;
											float: right;
											width: 160px;
											height: 40px;
											line-height: 40px;
											text-align: center;
											color: #fff;
											background: #84b83a;
											border-radius: 20px;
										}
									}
								}
								.title{
									width: 288px;
									font-size: 22px;
									height: 30px;
									line-height: 30px;
									color: #999;
									background: #fff;
									text-align: center;
									position: absolute;
									top: 0;
									left: 79px;
								}
								.left{
									width: 300px;
									float: right;
								}
							}
						}
					}




				}

			}
		}




	}
</style>