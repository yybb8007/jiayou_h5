<template>
	<div>
		<section id="xq">
			<!--<header id="goods_header" name = "goods_header">
				<i class="jy_iconfont icon_close"></i>
				<i class="jy_iconfont icon_more"></i>
			</header>-->
			<main id="goods_main">
				<div id="jf_banner" class="swiper-container">
					<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="i in data.gallerys"><img :src="i.img_url" alt="" /></div>
					</div>
					<!--<div class="swiper-pagination"></div>-->
				</div>
				<article class="ordertype">
					<p class="orderName">
						<!--<span>【分享团】</span>-->
						{{ data.goods_name }}
					</p>
					<p class="message">{{ data.goods_brief }}</p>
					<!--<p class="number">数量：<span>{{ data.goods_number }}</span>件</p>-->
					<p class="number">数量：<span>1</span></p>
					<p class="price">
						<span class="newprice">￥<span class="shop_price" v-for="i in data.pintuan">{{ i.tuan_price }}</span></span>
						<span class="oldprice">￥<span>{{ data.shop_price }}</span></span>
					</p>
				</article>
				<article class="evaluate">
					<div class="title">
						<p class="left">商品评价（<span id="pjnumber">{{ data1.count }}</span>）</p>
						<!--<p class="right">好评度<span>99<span>%</span></span>-->
						<router-link :to="'/qbpinglun?goods_id=' + data.goods_id">
							<p class="right">查看全部
								<i class="jy_iconfont icon_right"></i>
							</p>
						</router-link>
					</div>
					<ul v-show="data1.count!=0 && data1.count!=1 && data1.count!=2" v-for="item in data1">
						<li v-for="i in data1.items">
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
				
				<!--<router-link :to="'xq?goods_id=' + data.goods_id">-->
				<article class="upLoad">图文详情</article>
				<article class="goods_img" v-html="data2.goods_desc"></article>
			</main>
			<footer id="goods_footer">
				<!--<router-link :to="'/dingdan?goods_id=' + data.goods_id" id="want1">
					<button class="want">我要参团</button>
				</router-link>-->
				<a id="want" class="want" href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6ffe339870612437&redirect_uri=https%3A%2F%2Fm.t.jiayou9.com%2F%23%2ForderGoods1%3Fgoods_id%3D">我要参团</a>
				<!--<a id="want" class="want" href="https://m.t.jiayou9.com/#/download1">我要参团</a>-->
			</footer>
		</section>
		
	</div>
</template>
<script>
	$(function(){
		if($("#pjnumber").innerHTML == 0){
			$(".evaluate ul").css("display","none");
		}
	})
	export default {
		data() {
				return {
					data: [],
					data1: [],
					data2: []
				}
			},
			computed: {},
			methods: {
			},
			components: {
			},
			mounted: function(){
				
				var str = location.href; //取得整个地址栏
//				var str1 = str.split('?')[1];
//				var goods_id = str2.split('=')[1];
				
				// goods_id
				var str1 = str.split('goods_id=')[1];
				var goods_id = str1.split('&activity_id')[0];
				console.log(goods_id);
				
				// activity_id
				var str15 = str1.split("activity_id")[1];
				var str16 = str15.split("&product_id")[0];
				var activity_id = str16.split("=")[1];
				console.log(activity_id);
				
				
				// product_id
				var str17 = str1.split("product_id")[1];
				var str18 = str17.split("&tuan_head_uid")[0];
				var product_id = str18.split("=")[1];
				console.log(product_id);
				
				
				// tuan_head_uid
				var str3 = str1.split("tuan_head_uid")[1];
				var tuan_head_uid = str3.split("=")[1];
				console.log(tuan_head_uid);
				
//				// product_id
//				var str3 = str1.split("product_id")[1];
//				var product_id = str3.split("=")[1];
//				console.log(product_id);
				
				// 商品id
				localStorage.setItem("goods_id", goods_id);
				// 商品类型
				localStorage.setItem("product_id", product_id);
				// 拼拼活动id
				localStorage.setItem("activity_id", activity_id);
				// 团长id
				localStorage.setItem("tuan_head_uid", tuan_head_uid);
				
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
//				changeURLArg('https://a2.t.jiayou9.com/product/info?id=330&debug=1&data_format=1','id',id);
				
				this.$http.jsonp(changeURLArg('https://a1.t.jiayou9.com/product/info?id=330&debug=1&device_type=3&data_format=1','id',goods_id)).then(function(res){
					this.data=res.body.data;
					console.log(res.body.data)
//					console.log(res.body.data.goods_id);
//					console.log(res.body.data[8]);
					localStorage.setItem("shop_price1",res.body.data.pintuan[0].tuan_price);
					localStorage.setItem("tuan_rule_id",res.body.data.pintuan[0].tuan_rule_id);
					
					var h = document.getElementById("want").getAttribute("href") + goods_id + "%26activity_id%3D" + activity_id + "%26product_id%3D" + product_id + "%26tuan_head_uid%3D" + tuan_head_uid + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
					$("#want").attr("href",h);
					console.log(h)
					
					// 轮播图
					var mySwiper = new Swiper ('.swiper-container', {
						direction: 'horizontal',
//						autoplay: 2000,
						loop: true,
						observer: true,
						// 分页器
						pagination: '.swiper-pagination'
					});
				});
				this.$http.jsonp(changeURLArg('https://a1.t.jiayou9.com/product/comment_text?debug=1&id=658&data_format=1','id',goods_id)).then(function(res){
					this.data1=res.body.data;
					console.log(res.body.data);
//					console.log(res.body.data[8]);
					
				})
				this.$http.jsonp(changeURLArg('https://a1.t.jiayou9.com/product/description?id=410&debug=1&device_type=3&format=jsonp','id',goods_id)).then(function(res){
					this.data2=res.body.data;
					console.log(res.body.data);
//					console.log(res.body.data[8]);
					
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
	#xq {
		width:100%;
		height:100%;
		background: #F1F1F1;
		#goods_header{
			height: 88px;
			line-height: 88px;
			display: -webkit-flex;
			-webkit-justify-content: space-between;
			padding: 0 24px;
			color: #999;
			background: #fff;
			position: fixed;top:0;
			width:100%;
			border-bottom: 1px solid #ccc;
			z-index:10;
			i{
				font-size: 50px;
			}
		}
		#goods_main{
			-webkit-box-flex:1;
			-webkit-flex:1;
			-ms-flex:1;
			flex:1;
			width:100%;
			margin-bottom: 88px;
			.ordertype{
				background: #fff;
				padding: 30px 24px;
				line-height: 40px;
				font-size: 24px;
				color: #888;
				margin-top: -5px;
				.orderName{
					height: 40px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 32px;
					color: #333;
					margin-left: -10px;
					span{
						color: #ed3736 ;
					}
				}
				.message{
					font-size: 26px;
					margin: 12px 0;
				}
				.price{
					height: 50px;
					line-height: 50px;
					margin-top: 12px;
					.newprice{
						color: #ed3736;
						span{
							font-size: 36px;
						}
						span:nth-of-type(2){
							display: none;
						}
					}
					.oldprice{
						color: #999;
						text-decoration: line-through;
						margin-left: 12px;
					}
				}
			}
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
					display: none;
				}
				ul:first-of-type{
					display: block;
					height: 594px;
					overflow: hidden;
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
			.goods_img{
				font-size: 0;
				img{
					width: 100%;
				}
			}
			#maodian{
				position: fixed;
				right: 24px;
				bottom: 110px;
				span{
					display: block;
					height: 60px;
					width: 60px;
					border: 1px solid #84b83a;
					border-radius: 50%;
					line-height: 55px;
					text-align: center;
					color: #84B83A;
				}
			}
			
		}
		#goods_footer{
			height: 98px;
			display: -webkit-flex;
			-webkit-align-items: center;
			-webkit-justify-content: space-around;
			background: #fff;
			border-top: 1px solid #eee;
			padding: 0 24px;
			position: fixed;
			bottom:0;
			width:100%;
			button{
				width: 250px;
				height: 66px;
				line-height: 66px;
				text-align: center;	
				font-size: 30px;
				border-radius: 8px;
			}
			.moreorder{
				border: 1px solid #84b83a;
				color: #84b83a;
				background: #fff;
				i{
					color: #84b83a;
				}
			}
			
			.want{
				display: inline-block;
				height: 66px;
				width: 250px;
				font-size: 30px;
				background: #84b83a;
				color: #fff;
				line-height: 66px;
				text-align: center;
				border-radius: 5px;
			}
		}

	}
</style>
