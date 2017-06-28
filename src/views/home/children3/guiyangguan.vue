<template>
	<div>
		<!-- 全局header -->
		<!--<nv-head :page-name="headTit.title" :back-type="headTit.back"></nv-head>-->
		<section id="wrapper" class="as_main" @click = "callback">
			<!--<header id="all_header">
        		<router-link to="/"><i class="iconfont icon_header"></i></router-link>
        		<p class="all_title">贵阳馆</p>
        		<i></i>
        	</header>-->
			<div id="as_banner" class="swiper-container">
				<img v-lazy="data.logo" />
			</div>
			<main id="as_main">
				<ul>
					<!-- 特色推荐 -->
					<li class="main_one">
						<article class="main_title">
							<div class="title_message">
								<p class="sales_name"><span class="mid_name1"></span>◆　{{ data.plate[0].title }}　◆<span class="mid_name2"></span></p>
							</div>
						</article>
						<article class="main_message">
							<ul>
								<li class="message_one" v-for="i in data.plate[0].item" :ID="i.goods_id" :target="i.target">
									<div class="message_img" :ID="i.goods_id" :target="i.target">
										<img v-lazy="i.images" :ID="i.goods_id" :target="i.target" />
									</div>

									<div class="data_message" :ID="i.goods_id" :target="i.target">
										<h3 class="name" :ID="i.goods_id" :target="i.target">{{ i.goods_name }}</h3>
										<p class="message" :ID="i.goods_id" :target="i.target">{{ i.goods_brief }}</p>
										<p class="bottom">￥
											<span class="shop_price" :ID="i.goods_id" :target="i.target">{{ i.shop_price }}</span>
											<span class="buy" :ID="i.goods_id" :target="i.target">立即购买</span>
										</p>
									</div>
								</li>

							</ul>
						</article>
					</li>


					<!-- 地道好货 -->
					<li class="main_two">
						<article class="main_title">
							<div class="title_message">
								<p class="sales_name"><span class="mid_name1"></span>◆　{{ data.plate[1].title }}　◆<span class="mid_name2"></span></p>
							</div>
						</article>
						<article class="main_message">
							<div class="message_img">
								<img v-lazy="data.plate[1].logo"/>
							</div>

							<ul>
								<li v-for="i in data.plate[1].item" :ID="i.goods_id" :target="i.target">
									<div class="title_img">
										<img v-lazy="i.images" alt="" :ID="i.goods_id" :target="i.target" />
									</div>
									<h3 class="name" :ID="i.goods_id" :target="i.target">{{ i.goods_name | trim }}</h3>
									<p class="message" :ID="i.goods_id" :target="i.target">{{ i.goods_brief }}</p>
									<p class="bottom">￥
										<span class="shop_price" :ID="i.goods_id" :target="i.target">{{ i.shop_price }}</span>
										<span class="market_price" :ID="i.goods_id" :target="i.target">￥{{ i.market_price }}</span>
									</p>
								</li>
							</ul>
						</article>
					</li>

					<!-- 推荐景区 -->
					<li class="main_three">
						<article class="main_title">
							<div class="title_message">
								<p class="sales_name"><span class="mid_name1"></span>◆　{{ data.plate[2].title }}　◆<span class="mid_name2"></span></p>
							</div>
						</article>
						<article class="main_message">
							<div class="message_img" @click="threeCbk" v-for="i in data.plate[2].item" :ID="i.id" target="8">
								<!-- 路由到青岩古镇 -->
								<!--<router-link :to="'id='+i.id" :ID="i.id" target="8">-->
									<img v-lazy="i.images" alt="" :ID="i.id" target="8" :title = "i.title" />
								<!--</router-link>-->
							</div>
						</article>
					</li>

					<!-- 地方馆 -->
					<li class="main_four">
						<article class="main_title">
							<div class="title_message">
								<p class="sales_name"><span class="mid_name1"></span>◆　{{ data.plate[3].title }}　◆<span class="mid_name2"></span></p>
							</div>
						</article>
						<article class="main_message swiper-container2">
							<ul class="swiper-wrapper">
								<!--<router-link v-for="i in data.plate[3].item" :to="String(Number(i.id)+73)">-->
									<li @click = "eightCbk"  v-for="i in data.plate[3].item" :ID="i.goods_id" :target="i.target" class="swiper-slide">
										<div class="message_img">
											<img v-lazy="i.cat_logo" alt="" :ID="i.data" :target="i.target" :title="i.title"/>
										</div>
										<div class="message_data">
											<h3 class="name" :ID="i.data" :target="i.target" :title="i.title">{{ i.title }}</h3>
											<p class="message" :ID="i.data" :target="i.target" :title="i.title">{{ i.content }}</p>
										</div>
									</li>
								<!--</router-link>-->

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
						title: '贵阳馆',
						back: 'ok',
					},
					data: []
				}
			},
			computed: {},
			methods: {
				/* 全局点击 */
				callback: function(e) {
					var key = ($(e.target).attr("ID")) + "+" + ($(e.target).attr("target")),
						id = $(e.target).attr("ID"),
						target = $(e.target).attr("target"),
						nan = Number(id + target),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}');
					var id_length = id.length;
					if(nan !== 'NaN' && id_length < 20 && target !== '8') {
						localStorage.setItem('key', value)
						window.location.href = value;
						console.log(value);
					}
				},
//				推荐景区的跳转
				threeCbk(e){
					var id = $(e.target).attr("ID"),
						target = $(e.target).attr("target"),
						title = $(e.target).attr("title"),
//						value = "https://m2.t.jiayou9.com/#/9/id=" + id;
						value = ('cmd:{"data":"https://m2.t.jiayou9.com/#/9/id=' + id + '","target":"' + target + '","title":"' + title + '","shopping":"' + 0 + '"}');
						window.location.href = value;
						console.log(value)
					
				},
				// 点击最下面的8个地区进行页面跳转
				eightCbk(e){
					var id = ($(e.target).attr("ID")),
						target = ($(e.target).attr("target")),
						title = ($(e.target).attr("title"));
//					var	str=id.slice (0,id.length-4);
					var value = ('cmd:{"data":"' + id + '","target":"' + target + '","title":"' + title +  '","shopping":"' + 0 + '"}');
						if(target !== null){
							window.location.href = value;
 							console.log(value)
						}
				}
			},
			components: {
				"nvHead": require('../../../components/header.vue'),
			},
			mounted: function() {
				
				// 本地路由
				var str = location.href; //取得整个地址栏
//				var reg = str.split('=')[1];
//				var regionId = reg-(reg-2);
				// 在线路由
				var regionId = str.split('=')[1];

				console.log(regionId);

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
				changeURLArg(this.baseUrl + '.t.jiayou9.com/region/pavilionDetail?debug=1&regionId=5&format=jsonp','regionId',regionId);

				this.$http.jsonp(changeURLArg(this.baseUrl + '.t.jiayou9.com/region/pavilionDetail?debug=1&regionId=5&format=jsonp','regionId',regionId)).then(function(res) {
					this.data = res.body.data;
					console.log(JSON.parse(JSON.stringify(this.data)));
					
				})
			},
			
			// 自定义过滤器---去掉前后空格（商品标题）
			filters: {
		        trim: function(value) {
		            return value.trim();
		        }
		    }
	}
	
	// 地区馆
	window.onload = function (){
		var mySwiper2 = new Swiper('.swiper-container2', {
			pagination: 'null',
	        slidesPerView: 'auto',
	        spaceBetween: 0,
	        freeMode: true,
	        freeModeMomentum: false
		});
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
		background: #f1f1f1;;
		#as_banner {
			width: 100%;
			/*height: 730px;*/
			/*margin-top: 88px;*/
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
				height: 0px;
				border-bottom: 3px solid #84b83a;
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


		#as_main {
			ul {

				/*特色推荐*/
				.main_one{
					.main_title{
						background: #fff;
						font-size: 30px;
						color: #86b83b;
						height: 98px;
						line-height: 98px;
						text-align: center;
					}

					.main_message{
						/*background: #fff;*/
						/*width: 100%;*/
						ul{
							background: #fff;
							margin: 24px;
							margin-right: 24px;
							height: 100%;
							width: 702px;
							border-radius: 20px;
							overflow: hidden;
							.message_one{
								height: 260px;
								.message_img{
									width: 255px;
									height: 234px;
									float: left;
									margin-top: 17px;
									margin-left: 27px;
									img{
										width: 100%;
										height: 100%;
										border: 0.026rem dashed #999;
										border-radius: 110px 105px 110px 105px/105px 95px 95px 105px;
										padding: 2px;
									}
								}
								.data_message{
									float: left;
									width: 360px;
									margin-left: 24px;
									margin-top: 46px;
									h3{
										font-size: 28px;
										color: #333;
										/*height: 28px;*/
										margin-bottom: 22px;
										overflow: hidden;
										white-space: pre;
										text-overflow: ellipsis;
									}
									.message{
										width: 360px;
										font-size: 22px;
										color: #333;
										margin-bottom: 22px;
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
										}
									}
								}
							}
							li:nth-of-type(even){
								.message_img{
									float: right;
									margin-right: 24px;
								}
								.data_message{
									float: left;
									margin-left: 24px;
								}
							}
						}
					}
				}

				/*地道好货*/
				.main_two{
					.main_title{
						background: #fff;
						font-size: 30px;
						color: #86b83b;
						height: 98px;
						line-height: 98px;
						text-align: center;
					}

					.main_message{
						/*background: #fff;*/
						/*width: 100%;*/
						.message_img{
							width: 100%;
							height: 300px;
							img{
								height: 100%;
								width: 100%;
							}
						}

						ul{
							margin: 24px;
							margin-bottom: 0;
							overflow: hidden;
							li{
								width: 224px;
								height: 360px;
								float: left;
								background: #fff;
								margin-bottom: 24px;
								.title_img{
									width: 224px;
									height: 210px;
									img{
										width: 100%;
										height: 100%;
									}
								}
								h3{
									text-align: center;
									font-size: 26px;
									margin-top: 14px;
									width: 80%;
									margin-left: 10%;
									/*height: 26px;*/
									overflow: hidden;
									white-space: pre;
									text-overflow: ellipsis;
								}
								.message{
									font-size: 22px;
									color: #999;
									margin-top: 12px;
									/*height: 22px;*/
									text-align: center;
									overflow: hidden;
									white-space: pre;
									text-overflow: ellipsis;
								}
								.bottom{
									font-size: 24px;
									color: #ff4b3a;
									text-align: center;
									margin-top: 10px;
									.shop_price{
										font-size: 30px;
									}
									.market_price{
										font-size: 18px;
										color: #999;
										text-decoration: line-through;
									}
								}
							}
							li:nth-of-type(3n+2){
								margin: 0 15px;
							}
						}

					}
				}

				/*推荐景区*/
				.main_three{
					.main_title{
						background: #fff;
						font-size: 30px;
						color: #86b83b;
						height: 98px;
						line-height: 98px;
						text-align: center;
						/*margin-bottom: 24px;*/
					}
					.main_message {
						margin: 24px;
						font-size: 0;
						margin-bottom: 0;
						.message_img{
							width: 100%;
							height: 300px;
							margin-bottom: 24px;
							a {
								img {
									width: 100%;
									height: 300px;
								}
							}
						}
					}
				}

				/*地方馆*/
				.main_four{
					.main_title{
						background: #fff;
						font-size: 30px;
						color: #86b83b;
						height: 98px;
						line-height: 98px;
						text-align: center;
						/*margin-bottom: 24px;*/
					}
					.swiper-container2{
						overflow: hidden;
						overflow-x: auto;
						.swiper-wrapper{
							.swiper-slide{
								width: 600px;
								height: 220px;
								background: #fff;
								margin: 24px;
								margin-right: 0;
								/*float: left;*/
								.message_img{
									width: 300px;
									height: 200px;
									float: left;
									margin: 10px 24px 10px 10px;
									img {
										width: 100%;
										height: 100%;
									}
								}
								.message_data{
									float: left;
									width: 266px;
									height: 220px;
									h3{
										font-size: 28px;
										color: #333;
										height: 28px;
										line-height: 28px;
										margin-top: 30px;
									}
									p{
										font-size: 20px;
										color: #999;
										line-height: 32px;
										margin-top: 14px;
										margin-right: 24px;
										overflow: hidden;
										text-overflow: ellipsis;
										display: -webkit-box;
										-webkit-line-clamp: 4;
										-webkit-box-orient: vertical;
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