<template>
	<div >
		<!-- 全局header -->
		<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>
		<section id="wrapper" class="jy_main">
			<!-- 顶部标题行 -->
			<header id="all_header">
        		<router-link to="/"><i class="jy_iconfont icon_header"></i></router-link>
        		<p class="all_title">拼拼</p>
        		<i class="iconfont icon_fenxiang"></i>
        	</header>
			<!-- 顶部下载行 -->
			<div class="download">
				<p>下载app优惠更多哦！</p>
				<a href="http://m2.t.jiayou9.com/#/download">去下载</a>
			</div>
			
			<!-- 产品信息行 -->
			<div class="main">
				<div class="main_img">
					<img src="../../../../dist/assets/juzi.jpg"/>
				</div>
				<div class="main_message">
					<h3>老锄头复合红稗羹礼盒精装纯天然保健品补钙补气血滋补养生品</h3>
					<p class="tuan">2人团</p>
					<p class="shop_price">￥<span>99.00</span></p>
					<p class="market_price"><span>￥199.00</span></p>
				</div>
				<img class="dengdaichengtuan" src="../../../../dist/assets/dengdaichengtuan.png"/>
			</div>
			
			<!-- 拼团玩法 -->
			<div class="pintuanwanfa">
				<div class="title">拼团玩法
					<span>查看详情　></span>
				</div>
				<div class="pt_main">
					<span class="span1">选择商品</span>>
					<span class="span2">支付开团</span>>
					<span class="span3">等待好友参团支付</span>>
					<span class="span4">达到人数参团成功</span>
				</div>
			</div>
			
			<div class="cantuan">
				<h3><span>2</span>人团</h3>
				<div class="touxiang">
					<div class="touxiang1">
						<img src="../../../../dist/assets/wawa@2x.png"/>
					</div>
					<div class="touxiang2">
						<!--<img src="../../../../dist/assets/wawa@2x.png"/>-->
					</div>
				</div>
				<div class="xinxi">
					还差<span>1</span>人，盼你如盼年底的年终奖~
				</div>
				<div class="time"><span class="left"></span>剩余<span class="hour">00</span> : <span class="minute">00</span> : <span class="second">00</span>结束<span class="right"></span></div>
				<div class="xiangqing" @click="show">
					查看全部参团详情<span class="sanjiao"></span>
				</div>
				<div class="xiangqingye xianshi">
					<ul>
						<li>
							<div class="touxiang1">
								<img src="../../../../dist/assets/wawa@2x.png"/>
							</div>
							<div class="name">猴纸先森</div>
							<div class="cttime">2017-1-10 16:56:06组团</div>
						</li>
						<li>
							<div class="touxiang2">
								<img src="../../../../dist/assets/wawa@2x.png"/>
							</div>
							<div class="name">猴纸先森</div>
							<div class="cttime">2017-1-10 16:56:06参团</div>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="bottom">
				<span class="bottom_left"><i class="jy_iconfont main_pintuan"></i>更多拼团</span>
				<!--<a href="http://m2.t.jiayou9.com/#/download" class="bottom_left"><i class="jy_iconfont main_pintuan"></i>更多拼团</a>-->
				<span class="bottom_right">我也要开个团</span>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '我的家有',
						back: 'ok',
					},
				}
			},
			computed: {},
			methods: {
				// 参团详情显示隐藏
				show:function(){
					if ($(".xiangqingye").css("display")=="none"){
						$(".xiangqingye").show();
						$(".sanjiao").css({
							"transform":"rotateZ(180deg)",
							"position":"relative",
							"top":"0"
						});
					} else {
						$(".xiangqingye").hide();
						$(".sanjiao").css({
							"transform":"rotateZ(0)",
							"position":"relative",
							"top":"4px"
						});
					}
				}
			},
			components: {
				"nvHead": require('../../../components/header.vue'),
			},
	}
	
	// 倒计时
	 var countdown = function (){
        var reg = /^\d{2}$/;
        // 当前时间
        var now = new Date;
        // 结束时间
        var ending = new Date("2017/5/10");
//      var ending = new Date(new Date().getTime() + 86400000);
        if (now >= ending) {
            clearTimeout(this.timeout);
            return;
        }
        var disc = ending - now;
        // 天数
        var day = parseInt (disc / 1000 / 60 / 60 / 24);
        // 小时数
//      var hour = parseInt (disc / 1000 / 60 / 60 % 24);
        var hour = parseInt (disc / 1000 / 60 / 60);
        hour = !reg.test(hour) ? "0" + hour : hour;
        // 分钟数
        var minute = parseInt (disc / 1000 / 60 % 60);
        minute = !reg.test(minute) ? "0" + minute : minute;
        // 秒数
		var second = parseInt (disc / 1000 % 60);
		second = !reg.test(second) ? "0" + second : second;
		// 获取到时、分、秒
		var hours = document.querySelector(".hour");
		var minutes = document.querySelector(".minute");
		var seconds = document.querySelector(".second");
		// 赋值给时、分、秒
		hours.innerHTML = hour;
		minutes.innerHTML = minute;
		seconds.innerHTML = second;
		this.timeout = setTimeout (countdown, 1000);
	}
    onload = countdown;
</script>
<style lang="sass" scoped>
	section {
		/*background: rgb(255,255,255);*/
		h3{
			font-weight: normal;
		}
		margin-bottom: 92px;
		/* 顶部标题行 */
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
	    	.icon_fenxiang::before{
	    		content: "\e648";
	    		font-size: 50px;
	    		color: #c3c3c3;
	    	}
	    }
		.download{
			height: 80px;
			line-height: 80px;
			position: relative;
			font-size: 26px;
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
		
		.main{
			height: 233px;
			width: 100%;
			background: #fff;
			padding: 24px;
			position: relative;
			.main_img{
				float: left;
				width: 180px;
				height: 180px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.main_message{
				float: left;
				width: 490px;
				margin-left: 30px;
				h3{
					width: 100%;
				}
				.tuan{
					width: 70px;
					height: 36px;
					border: 1px solid #88b737;
					font-size: 14px;
					line-height: 36px;
					text-align: center;
					border-radius: 3px;
					color: #88b737;
					margin: 12px 0;
				}
				.shop_price{
					font-size: 14px;
					color: #ff4b3c;
					span{
						font-size: 22px;
					}
				}
				.market_price{
					font-size: 14px;
					color: #9a9a9a;
					span{
						text-decoration: line-through;
					}
				}
			}
			.dengdaichengtuan{
				width: 150px;
				height: 150px;
				position: absolute;
				top: 42px;
				right: 30px;
			}
		}
		.pintuanwanfa{
			background: #fff;
			margin-top: 16px;
			padding: 30px 24px;
			.title{
				font-size: 26px;
				color: #424242;
				overflow: hidden;
				span{
					float: right;
					color: #979797;
					font-size: 22px;
				}
			}
			.pt_main{
				margin-top: 22px;
				font-size: 22px;
				color: #616161;
				.span4{
					color: #8cbd2d;
				}
			}
		}
		
		.cantuan{
			background: #fff;
			margin-top: 16px;
			padding-top: 40px;
			h3{
				font-size: 26px;
				color: #303030;
				text-align: center;
				span{
					color: #8cbd2d;
				}
			}
			.touxiang{
				overflow: hidden;
				text-align: center;
				div{
					width: 98px;
					height: 115px;
					text-align: center;
					position: relative;
					img{
						border-radius: 50%;
						width: 88px;
						height: 88px;
						border: 4px solid #bed68a;
						position: absolute;
						bottom: 0;
						left: 0;
					}
					display: inline-block;
					position: relative;
					margin: 50px;
				}
				.touxiang1{
					background: url(../../../../dist/assets/user_tuanzhang.png) no-repeat;
					background-size: 98px 115px;
				}
				.touxiang2{
					background: url(../../../../dist/assets/user_tuanyuan.png) no-repeat;
					background-size: 88px 88px;
					background-position: 0 22px;
				}
				
			}
			.xinxi{
				margin-top: 36px;
				font-size: 26px;
				color: #2e2e2e;
				text-align: center;
				span{
					color: #bed68a;
				}
			}
			.time{
				margin-top: 26px;
				font-size: 22px;
				color: #282828;
				text-align: center;
				position: relative;
				.hour, .minute, .second{
					display: inline-block;
					font-size: 18px;
					color: #fff;
					width: 30px;
					height: 30px;
					background: #ff423a;
				}
				.left{
					display: inline-block;
					width: 215px;
					height: 1px;
					border-top: 1px solid #e2e2e2;
					position: absolute;
					top: 15px;
					left: 40px;
				}
				.right{
					display: inline-block;
					width: 215px;
					height: 1px;
					border-top: 1px solid #e2e2e2;
					position: absolute;
					top: 15px;
					right: 40px;
				}
			}
			.xiangqing{
				margin-top: 26px;
				font-size: 22px;
				color: #6c6c6c;
				text-align: center;
				padding-bottom: 30px;
				span{
					display: inline-block;
					border: 10px solid transparent;
					border-top: 10px solid #646464;
					position: relative;
					left: 10px;
					top: 7px;
					transition: all .3s;
				}
			}
			.xiangqingye{
				background: #fff;
				display: none;
				ul{
					li{
						border-top: 1px solid #dedede;
						height: 121px;
						line-height: 121px;
						padding: 0 40px;
						div{
							display: inline-block;
						}
						.touxiang1, .touxiang2{
							width: 98px;
							height: 115px;
							text-align: center;
							position: relative;
							float: left;
							margin-right: 32px;
							img{
								border-radius: 50%;
								width: 88px;
								height: 88px;
								border: 4px solid #bed68a;
								position: absolute;
								bottom: 0;
								left: 0;
							}
						}
						.touxiang1{
							background: url(../../../../dist/assets/user_tuanzhang.png) no-repeat;
							background-size: 98px 115px;
						}
						.touxiang2{
							background: url(../../../../dist/assets/user_tuanyuan.png) no-repeat;
							background-size: 88px 88px;
							background-position: 0 22px;
						}
						.cttime{
							float: right;
						}
					}
				}
			}
		}
		
		.bottom{
			height: 92px;
			background: #fff;
			border-top: 1px solid #dddddd;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			span, a{
				display: inline-block;
				height: 50px;
				width: 240px;
				line-height: 50px;
				text-align: center;
				border-radius: 4px;
				font-size: 22px;
				margin-top: 22px;
			}
			.bottom_left {
				border: 1px solid #89b63f;
				color: #89b63f;
				float: left;
				margin-left: 100px;
				.main_pintuan{
					color: #89b63f;
					margin-right: 10px;
				}
			}
			.bottom_right{
				color: #fff;
				float: right;
				margin-right: 88px;
				background: #89b63f;
			}
		}
		
	}
</style>