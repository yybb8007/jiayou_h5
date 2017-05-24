<template>
	<div >
		<!-- 全局header -->
		<!--<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>-->
		<section id="wrapper" class="sy_main">
			<div class="allOrder">
            	<ul>
            		<li>
            			<article class="orderNum">
            				<p>
            					<i class="iconfont icon_dingdan"></i>
            					<span>订单编号：</span>
            					<span class="numNmae">878788999</span>
            				</p>
            				<span class="paymentStatua">交易成功</span>
            			</article>
            			<article class="orderDetails">
            				<div class="orderImg">
            					<img src="../../../../assets/images/components/shangpin@2x.png" alt="" />
            				</div>
            				<div class="orderName">
            						<p class="order_name">锦绣黔中纯手工蜡染双肩背包</p>
            						<p class="order_describe">原生态蜡染老鼠娶亲</p>
            				</div>
            			</article>
            			<article class="orderPrice">
            				<p>共<span class="jianNum">1</span>件商品    需支付:￥<span class="price">19.00</span></p>
            			</article>
            			<article class="orderActive">
            				<p class="logistics">去评价</p><p class="purchase">再次购买</p>
            			</article>
            		</li>
            		<li>
            			<article class="orderNum">
            				<p>
            					<i class="iconfont icon_dingdan"></i>
            					<span>订单编号：</span>
            					<span class="numNmae">878788999</span>
            				</p>
            				<span class="paymentStatua">交易成功</span>
            			</article>
            			<article class="orderDetails">
            				<div class="orderImg">
            					<img src="../../../../assets/images/components/wawa@2x.png" alt="" />
            				</div>
            				<div class="orderName">
            						<p class="order_name">仡佬族小英雄车内家居装饰品</p>
            						<p class="order_describe">创意小公仔陶瓷小摆件</p>
            				</div>
            			</article>
            			<article class="orderPrice">
            				<p>共<span class="jianNum">1</span>件商品    需支付:￥<span class="price">1900.00</span></p>
            			</article>
            			<article class="orderActive">
            				<p class="logistics">去评价</p><p class="purchase">再次购买</p>
            			</article>
            		</li>
            		
            		<li>
            			<article class="orderNum">
            				<p>
            				</p>
            				<span class="paymentStatua">已取消</span>
            			</article>
            			<article class="orderDetails ">
            				<div id="orderImg" class="orderImg allImg">
            					<div><img src="../../../../assets/images/components/cu@2x.png" alt="" /></div>
            					<div><img src="../../../../assets/images/components/cu@2x.png" alt="" /></div>
            					<div><img src="../../../../assets/images/components/cu@2x.png" alt="" /></div>
            					<div><img src="../../../../assets/images/components/cu@2x.png" alt="" /></div>
            				</div>
            				<!--<div class="orderName"></div>-->
            			</article>
            			<article class="orderPrice">
            				<p>共<span class="jianNum">4</span>件商品    需支付:￥<span class="price">1900.00</span></p>
            			</article>
            			<article class="orderActive">
            				<p>再次购买</p>
            			</article>
            		</li>
            		<li>
            			<article class="orderNum">
            				<p>
            				</p>
            				<span class="paymentStatua">已取消</span>
            			</article>
            			<article class="orderDetails ">
            				<div id="orderImg" class="orderImg allImg">
            					<div><img src="../../../../assets/images/components/cu@2x.png" alt="" /></div>
            					<div><img src="../../../../assets/images/components/cu@2x.png" alt="" /></div>
            					<div><img src="../../../../assets/images/components/cu@2x.png" alt="" /></div>
            					<div><img src="../../../../assets/images/components/cu@2x.png" alt="" /></div>
            				</div>
            				<!--<div class="orderName"></div>-->
            			</article>
            			<article class="orderPrice">
            				<p>共<span class="jianNum">4</span>件商品    需支付:￥<span class="price">1900.00</span></p>
            			</article>
            			<article class="orderActive">
            				<p>再次购买</p>
            			</article>
            		</li>
            	</ul>
            </div>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
//						title: '我的关注',
//						back: 'ok',
					},
				}
			},
			computed: {},
			methods: {},
			components: {

			},
	}
</script>
<style lang="sass" scoped>
	section {
		/*background: rgb(255,255,255);*/
		#obligation{
			border-bottom: 2px solid #d1311b;
			p{
				color: #d1311b;
			}
		}
		.allOrder{
			background: #f2f2f2;
    	 	margin-top: 17px;
    	 	ul{
    	 		li{
    	 			border-top: 1px solid #e6e6e6;
	    	 		border-bottom: 1px solid #e6e6e6;
	    	 		margin-bottom: 14px;
	    	 		article{
		    	 		padding: 0 24px;
	    	 			background: #fff;
	    	 			display: flex;
	    	 			margin-bottom: 2px;
	    	 		}
	    	 		.orderNum{
	    	 			height: 87px;
	    	 			align-items: center;
	    	 			justify-content: space-between;
	    	 			.icon_dingdan{
	    	 				display: inline-block;
	    	 				width: 26px;
	    	 				height: 30px;
	    	 				background: url(../../../../assets/images/components/dingdan.png);
	    	 				background-size:26px ;
	    	 				margin-right: 24px;
	    	 			}
	    	 			.paymentStatua{
	    	 				color: #d1311b;
	    	 			}
	    	 		}
	    	 		.orderDetails{
	    	 			display: flex;
	    	 			min-height: 180px;
	    	 			align-items: center;
	    	 			/*padding: 0;*/
	    	 			#orderImg{
	    	 				margin-right: 0;
	    	 				
	    	 			}
	    	 			.orderImg{
	    	 				display: flex;
	    	 				justify-content: center;
	    	 				align-items: center;
	    	 				margin-right:40px ;
	    	 				div{
	    	 					width: 25%;
	    	 					text-align: center;
	    	 					img{
	    	 						width: 80%;
	    	 					}
	    	 				}
	    	 			}
	    	 			.allImg{
	    	 				width: 100%;
	    	 			}
	    	 			.orderName{
	    	 				min-height: 140px;
	    	 				.order_describe{
	    	 					color: #d1311b;
	    	 					margin-top: 8px;
	    	 				}
	    	 			}
	    	 		}
	    	 		.orderPrice{
	    	 			display: flex;
	    	 			justify-content: flex-end;
	    	 			height: 76px;
	    	 			color: #999;
	    	 			align-items: center;
	    	 		}
	    	 		.orderActive{
	    	 			height: 82px;
	    	 			display: flex;
	    	 			justify-content: flex-end;
	    	 			align-items: center;
	    	 			p{
                            height: 50px;
                            width: 180px;
                            line-height: 45px;
                            text-align: center;
                            border:1px solid #d1311b;
                            border-radius: 5px;
                            color: #d1311b;
                        }
                        .logistics{
                            border: 1px solid #797979;
                            color: #797979;
                            margin-right:32px ;
                        }
	    	 		}
    	 		}
    	 	}
		}
	}
	
</style>
<!--<style lang="sass" scoped>
	section {
		/*background: rgb(255,255,255);*/
		#obligation{
			border-bottom: 2px solid #d1311b;
			p{
				color: #d1311b;
			}
		}
		.allOrder{
			background: #f2f2f2;
    	 	margin-top: 17px;
    	 	ul{
    	 		li{
    	 			border-top: 1px solid #e6e6e6;
	    	 		border-bottom: 1px solid #e6e6e6;
	    	 		margin-bottom: 14px;
	    	 		article{
		    	 		padding: 0 24px;
	    	 			background: #fff;
	    	 			display: flex;
	    	 			margin-bottom: 2px;
	    	 		}
	    	 		.orderNum{
	    	 			height: 87px;
	    	 			align-items: center;
	    	 			justify-content: space-between;
	    	 			.icon_dingdan{
	    	 				display: inline-block;
	    	 				width: 26px;
	    	 				height: 30px;
	    	 				background: url(../../../../assets/images/components/dingdan.png);
	    	 				background-size:26px ;
	    	 				margin-right: 24px;
	    	 			}
	    	 			.paymentStatua{
	    	 				color: #d1311b;
	    	 			}
	    	 		}
	    	 		.orderDetails{
	    	 			display: flex;
	    	 			min-height: 140px;
	    	 			align-items: center;
	    	 			/*padding: 0;*/
	    	 			#orderImg{
	    	 				margin-right: 0;
	    	 				
	    	 			}
	    	 			.orderImg{
	    	 				display: flex;
	    	 				justify-content: center;
	    	 				align-items: center;
	    	 				margin-right:40px ;
	    	 				div{
	    	 					width: 25%;
	    	 					text-align: center;
	    	 					img{
	    	 						width: 80%;
	    	 					}
	    	 				}
	    	 			}
	    	 			.allImg{
	    	 				width: 100%;
	    	 			}
	    	 			.orderName{
	    	 				min-height: 140px;
	    	 				.order_describe{
	    	 					color: #d1311b;
	    	 					margin-top: 8px;
	    	 				}
	    	 			}
	    	 		}
	    	 		.orderPrice{
	    	 			display: flex;
	    	 			justify-content: flex-end;
	    	 			height: 76px;
	    	 			align-items: center;
	    	 		}
	    	 		.orderActive{
	    	 			height: 82px;
	    	 			display: flex;
	    	 			justify-content: flex-end;
	    	 			align-items: center;
	    	 			p{
	    	 				height: 50px;
	    	 				width: 180px;
	    	 				line-height: 45px;
	    	 				text-align: center;
	    	 				border:1px solid;
	    	 				border-radius: 5px;
	    	 			}
	    	 			.purchase{
	    	 				border: 1px solid #d1311b;
	    	 				color: #d1311b;
	    	 				margin-left:32px ;
	    	 			}
	    	 		}
    	 		}
    	 	}
		}
	}
	
</style>-->