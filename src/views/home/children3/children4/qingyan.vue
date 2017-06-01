<template>
	<div >
		<!-- 全局header -->
		<!--<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>-->
		<section id="wrapper" class="qy_main">
			<div id="qy_banner" class="swiper-container">
				<img v-lazy="data.dot_ss.dot_imgs" />
				<img v-lazy="data.dot_ss.ss_imgs" :ID="data.dot_ss.data" :target="data.dot_ss.target" />
			</div>
			<main id="qy_main">
				<ul>
					<!--<li class="introduce">
						<p><i class="jy_iconfont icon_address"></i>地理位置：贵州省贵阳市花溪区青岩镇</p>
						<p><i class="jy_iconfont icon-zhumingjingdian"></i>著名景点：九寺、八庙、五阁、二祠、青岩书院、万寿宫、水星楼、明清牌坊</p>
						<p><i class="jy_iconfont icon-jingdianjibie"></i>景点级别：AAAAA级</p>
						<p><i class="jy_iconfont icon-naozhong"></i>开放时间：全天开放</p>
						<p>门票价格：10元　联票（含小景点）：80元</p>
						<p>建议游玩时长：3—4小时</p>
						<p>适宜游玩季节：3—10月份最佳</p>
						<p>特产：玫瑰糖、状元蹄、鸡辣角、苗王酒</p>
					</li>-->
					<!-- 特色美食 -->
					<li class="main_one">
						<!-- 标题 -->
						<article class="main_title">
							<div class="title_message">
								<p class="sales_name"><span class="mid_name1"></span>◆　特色美食　◆<span class="mid_name2"></span></p>
							</div>
						</article>
						<!-- 主体 -->
						<article class="main_message">
							<ul>
								<li v-for="item in data.tsaf" :ID="item.data" :target="item.target">
									<div class="top">
										<!-- 左侧图片 -->
										<div class="message_img" :ID="item.data" :target="item.target">
											<img v-lazy="item.tsaf_imgs" :ID="item.data" :target="item.target" />
										</div>
										<!-- 右侧文字信息 -->
										<div class="message_main" :ID="item.data" :target="item.target">
											<!-- 名字 -->
											<h3 class="name" :ID="item.data" :target="item.target">【{{ item.tsaf_name }}】</h3>
											<!-- 介绍 -->
											<p class="message" :ID="item.data" :target="item.target"> {{ item.tsaf_ss }} </p>
										</div>
									</div>
									<!-- 底部---推荐餐馆及地址 -->
									<div class="bottom">
										<!-- 推荐餐馆 -->
										<p class="eatery" :ID="item.data" :target="item.target"><i class="jy_iconfont icon_eatery"></i>推荐餐馆：{{ item.restaurant }}</p>
										<!-- 地址 -->
										<p class="address" :ID="item.data" :target="item.target"><i class="jy_iconfont icon_address"></i>地址：{{ item.address }}</p>
									</div>
								</li>
								
							</ul>
						</article>
					</li>
					
					<!-- 旅客点评 -->
					<li class="main_two">
						<!-- 标题 -->
						<article class="main_title">
							<div class="title_message">
								<!--<p class="sales_name"><i class="jy_iconfont icon_header"></i>大家说</p>-->
								<p class="sales_name">大家说</p>
							</div>
						</article>
						<!-- 主体 -->
						<article class="main_message">
							<ul>
								<li v-for="item in data.eot_ss" :ID="item.data" :target="item.target">
									<p><span>{{ item.eot_ss_name }}</span>：<span>{{ item.eot_ss }}</span></p>
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
//						title: '地区馆',
//						back: 'ok',
					},
					data: []
				}
			},
			computed: {},
			methods: {
				// 全局点击
				callback: function(e) {
					var key = ($(e.target).attr("ID")) + "+" + ($(e.target).attr("target")),
						id = $(e.target).attr("id"),
						target = $(e.target).attr("target"),
						num = Number(id) + Number(target),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}'),
						oid = $(e.target).attr("id");
					if(key.length < 9 && num !== NaN) {
						localStorage.setItem('key', oid);
						window.location.href = value;
						console.log(value)
					}
				},
			},
			components: {
				"nvHead": require('../../../../components/header.vue'),
			},
			mounted: function() {

				var str = location.href; //取得整个地址栏
//				var reg = str.split('=')[1];
//				var id = reg-(reg-2);
				var id = str.split('=')[1];

				console.log(id);

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
				changeURLArg('https://a1.t.jiayou9.com/scenicspot/index?id=189&debug=1&device_type=3&format=jsonp','id',id);

				this.$http.jsonp(changeURLArg('https://a1.t.jiayou9.com/scenicspot/index?id=189&debug=1&device_type=3&format=jsonp','id',id)).then(function(res) {
					this.data = res.body.data;
					console.log(res.body.data);
					
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
		
		/*设置整体字体大小为0,去掉图片之间的缝隙*/
		font-size: 0;
		#qy_banner {
			width: 100%;
			img {
				width: 100%;
			}
			img:first-of-type {
				height: 350px;
			}
		}
		
		/* 特色美食标题---两条线 */
		.sales_name {
			position: relative;
			span {
				width: 90px;
				display: inline-block;
				height: 0px;
				border-bottom: 4px solid #84b83a;
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
		
		/* 主体 */
		#qy_main {
			background: #f1f1f1;
			padding-top: 16px;
			margin-top: 16px;
			ul {
				/*顶部介绍*/
				/*.introduce {
					background: #fff;
					margin-bottom: 16px;
					padding: 30px;
					color: #333;
					font-size: 25px;
					line-height: 50px;
					p {
						padding-left: 40px;
						position: relative;
						.jy_iconfont {
							display: inline-block;
							width: 28px;
							height: 28px;
							position: absolute;
							top: 0;
							left: 0;
							font-size: 28px;
							color: #82b83c;
						}

					}*/
					/* 著名景点---悬挂缩进 */
					/*p:nth-of-type(2) {
						margin-left: 5em;
						text-indent: -5em;
					}
				}*/
				
				
				/* 特色美食 */
				.main_one{
					margin-bottom: 16px;
					/* 标题 */
					.main_title{
						background: #fff;
						font-size: 30px;
						color: #86b83b;
						height: 98px;
						line-height: 98px;
						text-align: center;
					}
					/* 主体 */
					ul {
						background: #fff;
						li {
							height: 360px;
							border-top: 3px solid #e5e5e5;
							/* 顶部图片/名字/介绍 */
							.top{
								overflow: hidden;
								padding-top: 30px;
								/* 左侧图片 */
								.message_img{
									width: 260px;
									height: 200px;
									margin: 0 30px;
									float: left;
									img{
										width: 100%;
										height: 100%;
									}
								}
								/* 右侧文字信息 */
								.message_main{
									float: left;
									width: 380px;
									height: 200px;
									/* 名字 */
									h3{
										margin-bottom: 20px;
										font-size: 28px;
										color: #333;
										overflow: hidden;
										white-space: pre;
										text-overflow: ellipsis;
										font-weight: normal;
										margin-left: -12px;
									}
									/* 介绍 */
									p{
										font-size: 24px;
										color: #666;
										word-break:break-all;
										display:-webkit-box;
										-webkit-line-clamp:4;
										-webkit-box-orient:vertical;
										overflow:hidden;
									}
								}
							}
							/* 底部---推荐餐馆及地址 */
							.bottom{
								margin: 30px;
								margin-top: 20px;
								font-size: 24px;
								color: #666;
								/* 推荐餐馆 */
								.eatery{
									margin-bottom: 12px;
									.icon_eatery::before{
							    		font-size: 29px;
							    		display: inline-block;
							    		width: 29px;
							    		height: 29px;
							    		color: #82b83c;
							    		margin-right: 18px;
							    	}
								}
								/* 地址 */
								.address{
									padding-right: 24px;
									padding-bottom: 20px;
									overflow: hidden;
									white-space: nowrap;
									text-overflow: ellipsis;
									.icon_address::before{
							    		font-size: 29px;
							    		display: inline-block;
							    		width: 29px;
							    		height: 29px;
							    		color: #82b83c;
							    		margin-right: 18px;
							    		
							    	}
								}
							}
						}
					}	
				}
				/* 旅客点评 */
				.main_two{
					background: #fff;
					/* 标题 */
					.main_title{
						font-size: 30px;
						color: #333;
						text-align: left;
						height: 88px;
						line-height: 88px;
						padding-left: 24px;
						.icon_header{
				    		font-size: 38px;
				    		display: inline-block;
				    		width: 38px;
				    		height: 38px;
				    		color: #82b83c;
				    		margin-right: 20px;
				    	}
					}
					/* 评价主体 */
					.main_message{
						ul{
							li{
								border-top: 3px solid #e5e5e5;
								font-size: 24px;
								color: #666;
								line-height: 40px;
								padding: 30px 24px;
							}
						}
					}
				}
			}
			
		}
	}
</style>