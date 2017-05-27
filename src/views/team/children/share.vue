<template>
	<section id="box" @scroll="onscroll_fixed">
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
				<p class="orderName">{{ data.goods_name }}</p>
				<p class="message">{{ data.goods_brief }}</p>
				<p class="number">数量：<span>1</span></p>
				<p class="price">
					<span class="newprice">￥<span>{{ data.shop_price }}</span></span>
					<span class="oldprice">￥<span>{{ data.market_price }}</span></span>
				</p>
			</article>
			
			<article class="upLoad">图文详情</article>
			<header>
				<ul id="fixedtop">
					<li class="left" @click="left">商品</li>
					<li class="right" @click="right">规格参数</li>
				</ul>
			</header>
			<article id="wrapper1" class="goods_img" v-html="data2.goods_desc"></article>
			<section id="wrapper2">
				<table border="1" cellspacing="0" cellpadding="0">
					<tr>
						<th>主体</th>
						<td>贵州特产万康乐苦荞茶五行黑茶</td>
					</tr>
					<tr>
						<th>品牌</th>
						<td>万康乐</td>
					</tr>
					<tr>
						<th>规格</th>
						<td>120g/盒</td>
					</tr>
					<tr>
						<th>储存方法</th>
						<td>干燥阴凉环境下保存</td>
					</tr>
					<tr>
						<th>适用人群</th>
						<td>全部人群</td>
					</tr>
				</table>
			</section>
				
		</main>
		<div class="download">
			<p>下载app优惠更多哦！</p>
			<a href="https://m.t.jiayou9.com/#/download1">去下载</a>
		</div>
	</section>
</template>
<script>
	export default {
		data() {
				return {
					data: [],
					data2: []
				}
			},
			computed: {},
			methods: {
				left: function(){
					$(".left").css("color","#ff4b3a");
					$(".right").css("color","#333333");
					$("#wrapper1").css("display","block");
					$("#wrapper2").css("display","none");
				},
				right: function(){
					$(".left").css("color","#333333");
					$(".right").css("color","#ff4b3a");
					$("#wrapper1").css("display","none");
					$("#wrapper2").css("display","block");
				},
				onscroll_fixed: function(){
					var top = $("#box").scrollTop();
					console.log(top)
					if (top >= 629) {
						$("#fixedtop").css({
							"position":"fixed",
							"top": "0",
							"left": "0",
							"right": "0",
							"background": "#fff"
						});
						$("#wrapper1").css("margin-top",$("#fixedtop").height() + "px");
						$("#wrapper2").css("margin-top",$("#fixedtop").height() + "px");
//						console.log($("#fixedtop").height())
					} else if (top < 629) {
						$("#fixedtop").css({
							"position":"static",
							"background": "#fff"
						});
						$("#wrapper1").css("margin-top", 0);
						$("#wrapper2").css("margin-top", 0);
					}
				},
				onScroll(){
					console.log("aa")
								},
			},
			components: {
//				"nvHead": require('../../components/header.vue'),
//				"nvFooter": require('../../components/footer.vue')
			},
			mounted: function(){
				
				
				var str = location.href; //取得整个地址栏

				var goods_id = str.split('goods_id=')[1];
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
//				changeURLArg('https://a2.t.jiayou9.com/product/info?id=330&debug=1&data_format=1','id',id);
				
				this.$http.jsonp(changeURLArg('https://a2.t.jiayou9.com/product/info?id=330&debug=1&data_format=1','id',goods_id)).then(function(res){
					this.data=res.body.data;
//					console.log(res.body.data.goods_id);
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
				});
				this.$http.jsonp(changeURLArg('https://a1.t.jiayou9.com/product/description?id=410&debug=1&device_type=3&format=jsonp','id',goods_id)).then(function(res){
					this.data2=res.body.data;
//					console.log(res.body.data.goods_id);
//					console.log(res.body.data[8]);
					
				});
//				setInterval(function(){
//					var top = $("#goods_main").offset().top;
////					console.log(top)
//					if (top <= (-626)) {
//						$("#fixedtop").css({
//							"position":"fixed",
//							"top": "0",
//							"left": "0",
//							"right": "0",
//							"background": "#fff"
//						});
//						$("#wrapper1").css("margin-top",$("#fixedtop").height() + "px");
//						$("#wrapper2").css("margin-top",$("#fixedtop").height() + "px");
////						console.log($("#fixedtop").height())
//					} else if (top > (-626)) {
//						$("#fixedtop").css({
//							"position":"static",
//							"background": "#fff"
//						});
//						$("#wrapper1").css("margin-top", 0);
//						$("#wrapper2").css("margin-top", 0);
//					}
//				},1)
			}
	}
</script>
<style lang="sass" scoped>
	template{
		div{
			height: 100%;
		}
	}
	section {
		/*background: rgb(255,255,255);*/
		display: -webkit-flex;
		/*-webkit-flex-direction: column;
		-webkit-justify-content: space-between;*/
		display:-webkit-box;
		display:-webkit-flex;
		display:-ms-flexbox;
		display:flex;
		-webkit-box-orient:vertical;
		-webkit-flex-direction:column;
		-ms-flex-direction:column;
		flex-direction:column;
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
					/*margin-left: -10px;*/
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
					background: #fff;
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
			header{
				/*position: fixed;
				top: 0;
				left: 0;
				right: 0;*/
				z-index: 100;
				background: #fff;
				ul{
					height: 88px;
					li{
						margin: 22px 0;
						display: inline-block;
						height: 44px;
						line-height: 44px;
						text-align: center;
						width: 49%;
						font-size: 28px;
						color: #333;
					}
					li:first-of-type{
						border-right: 1px solid #c3c3c3;
						color: #ff4b3a;
						width: 49%;
					}
				}
			}
			.goods_img{
				background: #fff;
				img{
					width: 100%;
				}
			}
			.upLoad{
				height: 100px;
				text-align: center;
				line-height: 100px;
				font-size: 32px;
				color: #999;
				background: #fff;
				margin-top: 24px;
				border-bottom: 1px solid #ededed;
			}
			#wrapper2{
				width: 100%;
				color: #666;
				height: 1160px;
				background: #fff;
				font-size: 24px;
				display: none;
				table{
					height: 440px;
					width: 700px;
					margin-left: 24px;
					tr{
						td{
							border: 1px solid #e6e6e6;
							vertical-align: middle;
							padding-left: 50px;
						}
						th{
							border: 1px solid #e6e6e6;
							vertical-align: middle;
							padding-left: 50px;
							color: #333;
						}
					}
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
				background: #84b83a;
				color: #fff;
			}
		}
		/* 底部页脚--去下载 */
		.download{
			background: #fff;
			height: 80px;
			line-height: 80px;
			position: relative;
			font-size: 26px;
			margin-top: 88px;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			p{
				margin-left: 74px;
				color: #696969;
			}
			a{
				display: inline-block;
				width: 140px;
				height: 44px;
				line-height: 44px;
				text-align: center;
				border: 1px solid #9bb97b;
				border-radius: 5px;
				color: #fff;
				background: #95c74c;
				position: absolute;
				top: 18px;
				right: 25px;
			}
		}

	}
</style>
