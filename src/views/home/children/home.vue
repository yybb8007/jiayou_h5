<template>

	<div class="wrap-top">
		<section id="wrapper" class="sy_main" @click="callback">
			<div id="home_banner" class="swiper-container">
				<!-- 轮播图 -->
				<div class="swiper-wrapper" @click="eight">
					<div class="swiper-slide" v-for="item in data[2]"><img src="../../../assets/images/components/xiaoman.jpg" alt="" ID="https://m2.t.jiayou9.com/#/teaProject" :target="item.target" title="小满活动" /></div>
				</div>
			</div>

			<!-- 导航 -->
			<article id="home_eight">
				<!-- 八个频道页 -->
				<ul class="eight" @click="eight">
                    <li ID="http://m2.t.jiayou9.com/#/3/12" target='8' title="生态馆">
                        <img src="http://img.t.jiayou9.com/images/index/3/d79c53315f4abbee39269ead7ae60d94.jpg" alt="" ID="http://m2.t.jiayou9.com/#/3/12" target='8' title="生态馆" />
                        <p class="nav_name" ID="http://m2.t.jiayou9.com/#/3/12" target='8' title="生态馆">生态馆</p>
                    </li>
                    <li ID="111111" target='13' title="领券">
                        <img src="http://img.t.jiayou9.com/images/index/3/f51e8dad8ed028c8267140def0489405.jpg" alt="" ID="111111" target='13' title="领券" />
                        <p class="nav_name" ID="111111" target='13' title="领券">领券</p>
                    </li>
                    <li ID="111111" target='9' title="秒杀">
                        <img src="http://img.t.jiayou9.com/images/index/3/39881640c56634fb45b222ff5506b21d.jpg" alt="" ID="111111" target='9' title="秒杀" />
                        <p class="nav_name" ID="111111" target='9' title="秒杀">秒杀</p>
                    </li>
                    <li ID="http://m2.t.jiayou9.com/#/3/10" target='8' title="新品专区">
                        <img src="http://img.t.jiayou9.com/images/index/3/cd7c9792cb621eda6feaa74eed0d2231.jpg" alt="" ID="http://m2.t.jiayou9.com/#/3/10" target='8' title="新品专区" />
                        <p class="nav_name" ID="http://m2.t.jiayou9.com/#/3/10" target='8' title="新品专区">新品专区</p>
                    </li>
                    <li ID="http://m2.t.jiayou9.com/#/3/11/banshouli_one" target='8' title="伴手礼">
                        <img src="http://img.t.jiayou9.com/images/index/3/7816a5c0c536544f0d891544b58dbbdf.jpg" alt="" ID="http://m2.t.jiayou9.com/#/3/11/banshouli_one" target='8' title="伴手礼" />
                        <p class="nav_name" ID="http://m2.t.jiayou9.com/#/3/11/banshouli_one" target='8' title="伴手礼">伴手礼</p>
                    </li>
                    <li ID="http://m2.t.jiayou9.com/#/3/13" target='8' title="地区馆">
                        <img src="http://img.t.jiayou9.com/images/index/3/4cd6eabc084c311992f929646b454372.jpg" alt="" ID="http://m2.t.jiayou9.com/#/3/13" target='8' title="地区馆" />
                        <p class="nav_name" ID="http://m2.t.jiayou9.com/#/3/13" target='8' title="地区馆">地区馆</p>
                    </li>
                    <li ID="http://m2.t.jiayou9.com/#/gongyi1" target='8' title="工艺馆">
                        <img src="http://img.t.jiayou9.com/images/index/3/e592f662b4a1c776f1570daeb7614ad1.jpg" alt="" ID="http://m2.t.jiayou9.com/#/gongyi1" target='8' title="工艺馆" />
                        <p class="nav_name" ID="http://m2.t.jiayou9.com/#/gongyi1" target='8' title="工艺馆">工艺馆</p>
                    </li>
                    <li ID="http://m2.t.jiayou9.com/#/3/14" target='8' title="全球优品">
                        <img src="http://img.t.jiayou9.com/images/index/3/935d33bc6550ab3c4380b85c5c29bfd5.jpg" alt="" ID="http://m2.t.jiayou9.com/#/3/14" target='8' title="全球优品" />
                        <p class="nav_name" ID="http://m2.t.jiayou9.com/#/3/14" target='8' title="全球优品">全球优品</p>
                    </li>
                </ul>

				<!-- 家有头条滚动 -->
				<div class="nav_notice">
					<i class="jy_iconfont notice"></i>
					<p class="title">家有头条</p>
					<div class="swiper-container1">
						<ul class="gundong swiper-wrapper">
							<li class="swiper-slide swiper-no-swiping" v-for="item in data[4]">
								<p class="content" :ID="item.data" :target="item.target">{{ item.content }}</p>
							</li>
						</ul>
					</div>
				</div>
			</article>
			<article class="home_new" id="home_new" v-for="item in data[5]">
			</article>
			<main id="home_main">
				<ul>
					<!-- 生态馆 -->
					<li>
						<main id="shengtai_main">
							<article class="main_title">
								<div class="title_message">
									<i class="jy_iconfont icon_main main_shengtai"></i>
									<p class="title_name">生 | 态 | 馆</p>
									<!--<p class="title_massage title_st">源 于 自 然    纯 粹 健 康</p>-->
								</div>
								<div class="title_img" v-for="item in data[8]" @click="eight">
									<img src="../../../assets/images/components/shengtai-banner.jpg" alt="" ID="https://m2.t.jiayou9.com/#/3/12" :target="item.target" title="生态馆" @click="eight" />
								</div>
							</article>
							<article class="main_data">
								<ul v-for="item in data[8]">
									<li v-for="i in item.item" :ID="i.data" :target="i.target">
										<div class="message_ing">
											<img v-lazy="i.images" alt="" :ID="i.data" :target="i.target" />
										</div>
										<div class="data_message">
											<article class="msg_left">
												<p class="msg_name" :ID="i.data" :target="i.target">{{ i.goods_brief }}</p>
											</article>
											<article class="msg_right">
												<p class="msg_name" :ID="i.data" :target="i.target"> {{ i.goods_name }}</p>
												<div class="msg_price" :ID="i.data" :target="i.target">
													<p class="price_color">￥<span class="newPrice" :ID="i.data" :target="i.target">{{ i.shop_price }}</span></p>
													<p class="oldPrice">￥{{ i.market_price }}</p>
												</div>
											</article>
											<span class="shopping shopping_two" @click="addShop" :ID="i.data" target="222"><i class="jy_iconfont icon_shopping"></i></span>
										</div>

									</li>
								</ul>
							</article>
						</main>
					</li>

					<!-- 伴手礼 -->
					<li>
						<main id="banshou_main">
							<article class="main_title">
								<div class="title_message">
									<i class="jy_iconfont icon_main main_banshou"></i>
									<p class="title_name">伴 | 手 | 礼</p>
								</div>
							</article>
							<article class="main_data" v-for="item in data[7]">
								<div class="dataTop" v-for="i in item.item" :ID="i.data" :target="i.target">
									<img v-lazy="i.images" alt="" :ID="i.data" :target="i.target" />
									<div class="dataMain" :ID="i.data" :target="i.target">
										<p class="data_name" :ID="i.data" :target="i.target">
											<i class="jy_iconfont banshou_lashou"></i>{{ i.goods_name }}
										</p>
										<p class="data_message" :ID="i.data" :target="i.target">{{ i.goods_brief }}</p>
									</div>

								</div>
							</article>
						</main>
					</li>

					<!-- 地区馆 -->
					<li>
						<main id="diqu_main">
							<article class="main_title">
								<div class="title_message">
									<i class="jy_iconfont icon_main  main_diqu"></i>
									<p class="title_name">地 | 区 | 馆</p>
								</div>
								<div class="title_img" v-for="item in data[9]" @click="diquguan">
									<img v-lazy="item.logo" alt="" ID="http://m2.t.jiayou9.com/#/9/regionId=2" :target="item.target" title="地区馆" @click="diquguan" />
								</div>
							</article>
							<article class="main_data" v-for="item in data[9]">
								<img class="icon_img" src="../../../assets/images/components/gzfj@3x.png" alt="" />
								<div class="data_img">
									<div>
										<div class="diqu_img" v-for="i in item.item">
											<img v-lazy="i.images" alt="" :ID="i.data" :target="i.target" :title="i.goods_brief" @click="diquguan" />
										</div>
									</div>
								</div>
							</article>
						</main>
					</li>

					<!-- 精选美食 -->
					<li>
						<main id="meishi_main">
							<article class="main_title">
								<div class="title_message">
									<i class="jy_iconfont icon_main  main_meishi"></i>
									<p class="title_name">精 | 选 | 美 | 食</p>
								</div>
								<div class="title_img" v-for="item in data[10]" @click="eight">
									<img v-lazy="item.logo" alt="" ID="http://m2.t.jiayou9.com/#/meishi1" :target="item.target" title="精选美食" @click="eight" />
								</div>
							</article>
							<article class="main_data">
								<ul v-for="item in data[10]">
									<li v-for="i in item.item" :ID="i.data" :target="i.target">
										<img v-lazy="i.images" alt="" :ID="i.data" :target="i.target" />
										<div :ID="i.data" :target="i.target">
											<p class="name" :ID="i.data" :target="i.target">{{ i.goods_name }}</p>
											<p class="message" :ID="i.data" :target="i.target">{{ i.goods_brief }}</p>
											<p class="price" :ID="i.data" :target="i.target">￥<span class="newPrice" :ID="i.data" :target="i.target">{{ i.shop_price }}</span></p>
											<span class="shopping" @click="addShop" :ID="i.data" target="222"><i class="jy_iconfont icon_shopping"></i></span>
										</div>

									</li>
								</ul>

							</article>
						</main>
					</li>

					<!-- 茶酒饮品 -->
					<li>
						<main id="chajiu_main">
							<article class="main_title">
								<div class="title_message">
									<i class="jy_iconfont icon_main  main_chajiu"></i>
									<p class="title_name">茶 | 酒 | 饮 | 品</p>
								</div>
								<div class="title_img" v-for="item in data[11]" @click="eight">
									<img v-lazy="item.logo" alt="" ID="http://m2.t.jiayou9.com/#/yinpin1" :target="item.target" title="茶酒饮品" @click="eight" />
								</div>
							</article>
							<article class="main_data">
								<ul v-for="item in data[11]">
									<li v-for="i in item.item" :ID="i.data" :target="i.target">
										<img v-lazy="i.images" alt="" :ID="i.data" :target="i.target" />
										<div class="data_message" :ID="i.data" :target="i.target">
											<p class="name" :ID="i.data" :target="i.target">{{ i.goods_name }}</p>
											<p class="message" :ID="i.data" :target="i.target">{{ i.goods_brief }}</p>
											<p class="price" :ID="i.data" :target="i.target">￥<span class="newPrice" :ID="i.data" :target="i.target">{{ i.shop_price }}</span></p>
											<span class="shopping" @click="addShop" :ID="i.data" target="222"><i class="jy_iconfont icon_shopping"></i></span>
										</div>
									</li>
								</ul>
							</article>
						</main>
					</li>

					<!-- 水果生鲜 -->
					<li>
						<main id="shuiguo_main">
							<article class="main_title">
								<div class="title_message">
									<i class="jy_iconfont  icon_main main_shuiguo"></i>
									<p class="title_name">水 | 果 | 生 | 鲜</p>
								</div>
								<div class="title_img" v-for="item in data[12]" @click="eight">
									<img v-lazy="item.logo" alt="" ID="http://m2.t.jiayou9.com/#/shengxian1" :target="item.target" title="水果生鲜" @click="eight" />
								</div>
							</article>
							<article class="main_data">
								<ul v-for="item in data[12]">
									<li v-for="i in item.item" :ID="i.data" :target="i.target">
										<img v-lazy="i.images" alt="" :ID="i.data" :target="i.target" />
										<div class="data_message" :ID="i.data" :target="i.target">
											<p class="name" :ID="i.data" :target="i.target">{{ i.goods_name }}</p>
											<p class="message" :ID="i.data" :target="i.target">{{ i.goods_brief }}</p>
											<p class="price" :ID="i.data" :target="i.target">￥<span class="newPrice" :ID="i.data" :target="i.target">{{ i.shop_price }}</span><span class="oldPrice">￥{{ i.market_price }}</span></p>
											<span class="shopping" @click="addShop" :ID="i.data" target="222"><i class="jy_iconfont icon_shopping"></i></span>
										</div>
									</li>
								</ul>
							</article>
						</main>
					</li>

					<!-- 黔匠工艺 -->
					<li>
						<main id="gongyi_main">
							<article class="main_title">
								<div class="title_message">
									<i class="jy_iconfont  icon_main main_gongyi"></i>
									<p class="title_name">黔 | 匠 | 工 | 艺 </p>
								</div>
								<div class="title_img" v-for="item in data[13]" @click="eight">
									<img v-lazy="item.logo" alt="" ID="http://m2.t.jiayou9.com/#/gongyi1" :target="item.target" title="黔匠工艺" @click="eight" />
								</div>
							</article>
							<article class="main_data">
								<ul v-for="item in data[13]">
									<li v-for="i in item.item" :ID="i.data" :target="i.target">
										<img v-lazy="i.images" alt="" :ID="i.data" :target="i.target" />
										<div class="data_message" :ID="i.data" :target="i.target">
											<p class="name" :ID="i.data" :target="i.target">{{ i.goods_name }}</p>
											<p class="message" :ID="i.data" :target="i.target">{{ i.goods_brief }}</p>
											<p class="price" :ID="i.data" :target="i.target">￥<span class="newPrice" :ID="i.data" :target="i.target">{{ i.shop_price }}</span></p>
											<span class="shopping" @click="addShop" :ID="i.data" target="222"><i class="jy_iconfont icon_shopping"></i></span>
										</div>
									</li>
								</ul>
							</article>
						</main>
					</li>

					<!-- 美妆个护 -->
					<li>
						<main id="meizhuang_main">
							<article class="main_title">
								<div class="title_message">
									<i class="jy_iconfont icon_main  main_meizhuang"></i>
									<p class="title_name">美 | 妆 | 个 | 护 </p>
								</div>
								<div class="title_img" v-for="item in data[14]" @click="eight">
									<img v-lazy="item.logo" alt="" ID="http://m2.t.jiayou9.com/#/meizhuang1" :target="item.target" title="美妆个护" @click="eight" />
								</div>
							</article>
							<article class="main_data">
								<ul v-for="item in data[14]">
									<li v-for="i in item.item" :ID="i.data" :target="i.target">
										<img v-lazy="i.images" alt="" :ID="i.data" :target="i.target" />
										<div class="data_message" :ID="i.data" :target="i.target">
											<p class="name" :ID="i.data" :target="i.target">{{ i.goods_name }}</p>
											<p class="message" :ID="i.data" :target="i.target">{{ i.goods_brief }}</p>
											<p class="price" :ID="i.data" :target="i.target">￥<span class="newPrice" :ID="i.data" :target="i.target">{{ i.shop_price }}</span><span class="oldPrice">￥{{ i.market_price }}</span></p>
											<span class="shopping" @click="addShop" :ID="i.data" target="222"><i class="jy_iconfont icon_shopping"></i></span>
										</div>
									</li>
								</ul>
							</article>
						</main>
					</li>

					<!-- 母婴用品 -->
					<li>
						<main id="muying_main">
							<article class="main_title">
								<div class="title_message">
									<i class="jy_iconfont  icon_main main_muying"></i>
									<p class="title_name">母 | 婴 | 用 | 品 </p>
								</div>
								<div class="title_img" v-for="item in data[15]" @click="eight">
									<img v-lazy="item.logo" alt="" ID="http://m2.t.jiayou9.com/#/muying1" :target="item.target" title="母婴用品" @click="eight" />
								</div>
							</article>
							<article class="main_data">
								<ul v-for="item in data[15]">
									<li v-for="i in item.item" :ID="i.data" :target="i.target">
										<img v-lazy="i.images" alt="" :ID="i.data" :target="i.target" />
										<div :ID="i.data" :target="i.target">
											<p class="name" :ID="i.data" :target="i.target">{{ i.goods_name }}</p>
											<p class="message" :ID="i.data" :target="i.target">{{ i.goods_brief }}</p>
											<p class="price" :ID="i.data" :target="i.target">￥<span class="newPrice" :ID="i.data" :target="i.target">{{ i.shop_price }}</span></p>
											<span class="shopping" @click="addShop" :ID="i.data" target="222"><i class="jy_iconfont icon_shopping"></i></span>
										</div>
									</li>
								</ul>
							</article>
						</main>
					</li>

					<!-- 医疗保健 -->
					<li>
						<main id="baojian_main">
							<article class="main_title">
								<div class="title_message">
									<i class="jy_iconfont  icon_main main_yiliao"></i>
									<p class="title_name">医 | 疗 | 保 | 健 </p>
								</div>
								<div class="title_img" v-for="item in data[16]" @click="eight">
									<img v-lazy="item.logo" alt="" ID="http://m2.t.jiayou9.com/#/yiliao1" :target="item.target" title="医疗保健" @click="eight" />
								</div>
							</article>
							<article class="main_data">
								<ul v-for="item in data[16]">
									<li v-for="i in item.item" :ID="i.data" :target="i.target">
										<img v-lazy="i.images" alt="" :ID="i.data" :target="i.target" />
										<div class="data_message" :ID="i.data" :target="i.target">
											<p class="name" :ID="i.data" :target="i.target">{{ i.goods_name }}</p>
											<p class="message" :ID="i.data" :target="i.target">{{ i.goods_brief }}</p>
											<p class="price" :ID="i.data" :target="i.target">￥<span class="newPrice" :ID="i.data" :target="i.target">{{ i.shop_price }}</span></p>
											<span class="shopping" @click="addShop" :ID="i.data" target="222"><i class="jy_iconfont icon_shopping"></i></span>
										</div>
									</li>
								</ul>
							</article>
						</main>
					</li>

					<!-- 家居生活 -->
					<li>
						<main id="jiaju_main">
							<article class="main_title">
								<div class="title_message">
									<i class="jy_iconfont  icon_main main_jiaju"></i>
									<p class="title_name">家 | 居 | 生 | 活 </p>
								</div>
								<div class="title_img" v-for="item in data[17]" @click="eight">
									<img v-lazy="item.logo" alt="" ID="http://m2.t.jiayou9.com/#/jiafang1" :target="item.target" title="家居生活" @click="eight" />
								</div>
							</article>
							<article class="main_data">
								<ul v-for="item in data[17]">
									<li v-for="i in item.item">
										<img v-lazy="i.images" alt="" :ID="i.data" :target="i.target" />
										<div :ID="i.data" :target="i.target">
											<p class="name" :ID="i.data" :target="i.target">{{ i.goods_name }}</p>
											<p class="message" :ID="i.data" :target="i.target">{{ i.goods_brief }}</p>
											<p class="price" :ID="i.data" :target="i.target">￥<span class="newPrice" :ID="i.data" :target="i.target">{{ i.shop_price }}</span></p>
											<span class="shopping" @click="addShop" :ID="i.data" target="222"><i class="jy_iconfont icon_shopping"></i></span>
										</div>
									</li>
								</ul>
							</article>
						</main>
					</li>

				</ul>
			</main>


		</section>
	</div>
	<!--</loadmore>-->
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '首页',
						back: 'ok',
					},
					data: [],
					topStatus: ''
				}
			},
			computed: {
			},

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
				// 所有购物车图标
				addShop: (e) => {
					var id = ($(e.target).parent().attr("ID")),
						target = ($(e.target).parent().attr("target")),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}');
					console.log(value)
					window.location.href = value;
				},
				// 八个频道页
				eight(e) {
					var id = ($(e.target).attr("ID")),
						target = ($(e.target).attr("target")),
						title = ($(e.target).attr("title")),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '","title":"' + title + '","shopping":"' + 1 + '"}');
					if(title == '生态馆' || title == '伴手礼' || target == 6) {
						value = ('cmd:{"data":"' + id + '","target":"' + target + '","title":"' + title + '","shopping":"' + 0 + '"}');

						if(target !== null) {
							window.location.href = value;
							console.log(value)
						}
					} else {
						if(target !== null) {
							window.location.href = value;
							console.log(value)
						}
					}

				},
				// 地区馆
				diquguan(e) {
					var id = ($(e.target).attr("ID")),
						target = ($(e.target).attr("target")),
						title = ($(e.target).attr("title"));
					var value = ('cmd:{"data":"' + id + '","target":"' + target + '","title":"' + title + '","shopping":"' + 0 + '"}');
					if(target !== null) {
						window.location.href = value;
						console.log(value)
					}
				},
				
			},
			computed: {
//				 $("#wrapper").scroll(function(){
//				 	console.log("aa")
//				 })
			},
			components: {

			},
			mounted: function() {
				this.$http.jsonp('https://a1.t.jiayou9.com/page/index?debug=1&format=jsonp').then(function(res) {
					this.data = res.body.data;
//					console.log(JSON.parse(JSON.stringify(this.data)));
					// 轮播图
					var mySwiper = new Swiper('.swiper-container', {
						direction: 'horizontal',
						autoplay: 2000,
						loop: true,
						observer: true,
						// 点击后还可以滑动的效果
						autoplayDisableOnInteraction: false,
						// 分页器
						pagination: '.swiper-pagination',
					});

					// 家有头条滚动
					var mySwiper1 = new Swiper('.swiper-container1', {
						direction: 'vertical',
						autoplay: 3000,
						loop: true,
						observer: true,
						// 点击后还可以滑动的效果
						autoplayDisableOnInteraction: false,
					});
				});
				console.log($("#home_banner").offset().top);
				
			},


	};

	// 地区馆
	window.onload = function() {
		var mySwiper2 = new Swiper('.swiper-container2', {
			pagination: 'null',
			slidesPerView: 'auto',
			spaceBetween: 0,
			freeMode: true
		});
		
		var st = $('#home_eight').offset().top;
		$("#wrapper").scroll(function(event){
		})
	}

</script>
<style lang="sass" scoped>
	section {
		background: #f1f1f1;
		/*position: relative;*/
		
		/* 轮播图 */
		#home_banner {
			/*margin-top: 184px;*/
			position:relative;
			.swiper-wrapper {
				width: 100%;
				height: 350px;
				.swiper-slide {
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
			.swiper-pagination {
				.swiper-pagination-bullet {
					color: #fff;
					background: red;
				}
				.swiper-pagination-bullet-active {
					background: red;
				}
				span {
					background: red;
				}
			}
		}
		/* 轮播图下面的八个小频道 */
		#home_eight {
			background: #fff;
			padding-top: 12px;
			.eight {
				padding: 0 10px;
				overflow: hidden;
				li {
					float: left;
					width: 25%;
					text-align: center;
					margin-top: 36px;
					.nav_name {
						font-size: 28px;
						color: #333333;
					}
					img {
						width: 40%;
						margin-bottom: 12px;
					}
				}
			}
			.nav_notice {
				margin-top: 5px;
				font-size: 24px;
				height: 88px;
				line-height: 88px;
				align-items: center;
				padding: 0 36px;
				.notice {
					float: left;
					display: inline-block;
				}
				.title {
					color: #84b83a;
					float: left;
				}
				div {
					float: left;
					display: inline-block;
					margin-top: 20px;
					position: relative;
					width: 76%;
					height: 48px;
					overflow: hidden;
					ul {
						position: absolute;
						li {
							font-size: 24px;
							line-height: 48px;
							.content {
								color: #333;
								font-size: 24px;
								line-height: 48px;
								float: left;
								margin-left: 24px;
							}
						}
					}
				}
			}
		}
		/* 主体部分 */
		#home_main {
			background: #f1f1f1;
			margin-top: -16px;
			ul {
				li {
					background: #fff;
					margin-bottom: 15px;
					.main_title {
						.title_message {
							height: 98px;
							color: #333;
							font-size: 32px;
							line-height: 98px;
							text-align: center;
							i {
								display: inline-block;
							}
							.title_name {
								display: inline-block;
							}
							.title_massage {
								font-size: 26px;
								white-space: pre;
								margin-top: 15px;
							}
						}
						.title_img {
							overflow: hidden;
							img {
								float: left;
								width: 100%;
							}
						}
					}
					.main_data{
						min-height: 300px;
					}
					.shopping {
						position: absolute;
						right: 24px;
						bottom: 24px;
						display: inline-block;
						width: 100px;
						height: 100px;
						border-radius: 50%;
						text-align: right;
						line-height: 150px;
						color: #84b83a;
					}
					/* 伴手礼样式 */
					#banshou_main {
						.main_data {
							.dataTop {
								font-size: 0;
								width: 100%;
								// height: 450px;
								position: relative;
								img {
									max-height: 350px;
									width: 100%;
								}
								.dataMain {
									height: 100px;
									p {
										overflow: hidden;
										white-space: nowrap;
										text-overflow: ellipsis;
										font-size: 24px;
										color: #999;
										margin-left: 80px;
									}
									.data_name {
										height: 35px;
										line-height: 35px;
										margin-top: 30px;
										width: 80%;
										font-size: 30px;
										color: #333;
									}
									.data_message {
										height: 30px;
										line-height: 30px;
										margin-top: 12px;
										margin-bottom: 30px;
										font-size: 26px;
										color: #999;
									}
									.banshou_lashou {
										position: absolute;
										left: 24px;
										color: #999;
									}
								}
							}
						}
					}
					/* 生态 样式 */
					#shengtai_main {
						.main_data {
							ul {
								padding: 0 30px;
								justify-content: space-between;
								overflow: hidden;
								display: flex;
								-webkit-justify-content: space-between;
								li {
									width: 32%;
									float: left;
									margin: 30px 0;
									border: 0.013rem solid #e5e5e5;
									text-align: center;
									padding: 20px;
									min-height: 376px;
									font-size: 22px;
									color: #999;
									position: relative;
									.shopping_two {
										right: 10px;
									}
									.message_ing {
										display: inline-block;
										width: 140px;
										margin-bottom: 30px;
										height: 140px;
										img {
											width: 100%;
											height: 100%;
										}
									}
									.data_message {
										display: inline-block;
										width: 120px;
										text-align: center;
										.msg_left {
											text-align: center;
											height: 210px;
											overflow: hidden;
											width: 40px;
											float: right;
											display: inline-block;
											.msg_name {
												width: 30px;
												font-size: 22px;
												line-height: 26px;
											}
										}
										.msg_right {
											display: inline-block;
											width: 80px;
											float: left;
											text-align: center;
											position: relative;
											left: -10px;
											.msg_name {
												display: inline-block;
												width: 45px;
												font-size: 26px;
												text-align: center;
												line-height: 43px;
												height: 210px;
												overflow: hidden;
												color: #333;
												background: url('../../../assets/images/components/sm@2x.png') no-repeat;
												background-size: 45px;
												padding-top: 3px;
											}
											.msg_price {
												margin-bottom: -3px;
												.price_color {
													font-size: 18px;
													color: #ff4b3a;
													margin: 8px 0 0px 0;
													.newPrice {
														font-size: 26px;
													}
												}
												.oldPrice {
													text-decoration: line-through;
													color: #999;
												}
											}
										}
									}
								}
							}
						}
					}
					/* 地区样式 */
					#diqu_main {
						.main_data {
							background: #fff;
							padding: 0 40px 20px 40px;
							.icon_img {
								width: 200px;
								margin: 12px 0;
							}
							.data_img {
								padding:15px 0;
								width: 100%;
								border-bottom: 0.013rem solid #E5E5E5;
								border-top: 0.013rem solid #E5E5E5;
								overflow: hidden;
								overflow-x: scroll;
								div {
									width: 10000%;
									.diqu_img{
										width: 300px;
										height: 150px;
										margin-right: 16px;
										display: inline-block;
										float: left;
										img {
											width: 100%;
											height: 100%;
										}
									}
								}
							}
						}
					}
					/* 美食 样式/茶酒/医疗/工艺 */
					#meishi_main,
					#chajiu_main,
					#baojian_main,
					#gongyi_main,
					#muying_main,
					#jiaju_main {
						.main_data {
							ul {
								overflow: hidden;
								justify-content: space-between;
								background: #eee;
								li {
									width: 49.6%;
									float: left;
									margin: 0 0 5px 0;
									height: 464px;
									background: #fff;
									position: relative;
									text-align: center;
									img {
										width: 250px;
										height: 206px;
										margin-top: 30px;
										margin-bottom: 30px;
									}
									div {
										text-align: left;
										width: 70%;
										margin: 0 auto;
										.name {
											font-size: 30px;
											color: #333;
											overflow: hidden;
											white-space: nowrap;
											text-overflow: ellipsis;
										}
										.message {
											width: 100%;
											font-size: 26px;
											color: #999;
											margin-top: 12px;
											overflow: hidden;
											overflow: hidden;
											white-space: nowrap;
											text-overflow: ellipsis;
										}
										.price {
											font-size: 24px;
											color: #ff4b3a;
											margin-top: 20px;
											.newPrice {
												font-size: 34px;
											}
										}
									}
								}
								li:nth-child(even) {
									float: right;
								}
								li:last-of-type,
								li:nth-last-child(2) {
									margin-bottom: 0;
								}
							}
						}
					}
					/* 水果/样式/ 美妆 */
					#shuiguo_main,
					#meizhuang_main {
						.main_data {
							ul {
								li {
									padding: 24px 24px 24px 60px;
									overflow: hidden;
									border-bottom: 1px solid #eee;
									position: relative;
									background: #fff;
									img {
										width: 180px;
										height: 180px;
										margin-right: 60px;
										float: left;
									}
									.data_message {
										float: left;
										width: 420px;
										.name {
											font-size: 30px;
											color: #333;
											margin-bottom: 10px;
											width: 80%;
											overflow: hidden;
											white-space: pre;
											text-overflow: ellipsis;
										}
										.message {
											font-size: 26px;
											color: #999;
											margin-bottom: 8px;
											width: 80%;
											overflow: hidden;
											white-space: pre;
											text-overflow: ellipsis;
										}
										.price {
											margin-top: 20px;
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
		}
	}
</style>
