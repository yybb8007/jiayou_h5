<template>
    <div >
        <!-- 全局header -->
        <!--<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>-->
        <section id="wrapper" class="myorder_main">
        	<header id="all_header">
        		<router-link to="/myhome"><i class="iconfont icon_header"></i></router-link>
        		<p class="all_title">我的订单</p>
        		<i></i>
        	</header>
            <div class="mo_nav">
            	<ul>
            		<li id="allOrder" class="order_li">
            			<router-link to="/myOrder/allOrder">
	            			<p>全部订单</p>
            			</router-link>
            		</li>
        			<li id="obligation" class="order_li">
            			<router-link to="/myOrder/obligation">
	            			<p>待付款</p>
            			</router-link>
            		</li>
        			<li id="goods" class="order_li">
            			<router-link to="/myOrder/goods">
	            			<p>待收货</p>
            			</router-link>
            		</li>
        			<li id="complete" class="order_li">
            			<router-link to="/myOrder/complete">
            				<p>已完成订单</p>
            			</router-link>
            		</li>
            	</ul>
            </div>
    		<router-view></router-view>

        </section>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                headTit: {
                    title: '我的订单',
                    back: 'ok',
                }
            }
        },
        computed: {},
        methods: {
//      	callback:function(e){
//					$(".order_li").css("border-bottom","2px solid transparent")
//					$(".order_li p").css("color","#333")
//					$(e.target).css("color","#d1311b")
//					$(e.target).parents("li").css('border-bottom',"2px solid #d1311b")
//				}
        },
        components: {
//          "nvHead": require('../../../components/header.vue'),
        },
    }

</script>
<style lang="sass" scoped>

	@font-face {
	  font-family: 'jyzx-iconfont';  /* project id 210635 */
	  src: url('https://at.alicdn.com/t/font_kc8775w79s51xlxr.eot');
	  src: url('https://at.alicdn.com/t/font_kc8775w79s51xlxr.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_kc8775w79s51xlxr.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_kc8775w79s51xlxr.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_kc8775w79s51xlxr.svg#jyzx-iconfont') format('svg');
	}
	.iconfont{
		font-family: 'jyzx-iconfont';
	}
    section {
        background: #f1f1f1;
        font-size: 27px;
    }
    #all_header{
    	width: 100%;
    	height: 88px;
    	display: flex;
    	justify-content: space-between;
    	padding: 0 24px;
    	align-items: center;
    	font-size: 36px;
    	.icon_header::before{
			font-family: 'jyzx-iconfont';
    		content: "\e604";
    		font-size: 36px;
    	}
    }
    .mo_nav{
    	background: #fff;
    	height: 88px;
    	border-top: 1px solid #dcdcdc;
    	padding: 0 24px;
    	ul{
    		display: flex;
    		justify-content: space-between;
    		align-content: center;
			height: 100%;

    		li{
    			display: flex;
    			align-items: center;
    			a{
    				border-bottom: 2px solid transparent;
    			}
    			a.router-link-active{
    				line-height: 88px;
    				height: 88px;
					color: #d1311b;
					border-bottom:2px solid #d1311b;
				}
    		}
			/*#allOrder{
				border-bottom: 2px solid #d1311b;
				p{
					color: #d1311b;
				}
			}*/
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
    	 			.icon_dingdan::before{
    	 				content: "\e62f";
    	 				font-size: 30px;
    	 				margin-right:25px;
    	 			}
    	 			.paymentStatua{
    	 				color: #d1311b;
    	 			}
    	 		}
    	 		.orderDetails{
    	 			display: flex;
    	 			height: 180px;
    	 			align-items: center;
    	 			.orderImg{
    	 				display: flex;
    	 				justify-content: center;
    	 				align-items: center;
    	 				margin-right:40px ;
    	 				padding:24px;
    	 				img{
    	 					width: 140px;
    	 				}
    	 			}
    	 			.orderName{
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
    	 				border: 1px solid #d1311b;
    	 				color: #d1311b;
    	 				border-radius: 5px;
    	 			}
    	 		}
    	 	}
    	 }
    }
</style>