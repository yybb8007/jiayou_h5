<template>
	<div >
		<!-- 全局header -->
		<!--<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>-->
		<section id="wrapper" class="jy_main">
			<!-- 顶部标题行 -->
			<header id="all_header">
        		<!--<router-link :to="'orderGoods/xq?goods_id=' + data.goods_id"><i class="jy_iconfont icon_header"></i></router-link>-->
        		<i class="jy_iconfont"></i>
        		<p class="all_title">填写订单</p>
        		<i class="iconfont"></i>
        		<!--<i class="iconfont icon_fenxiang"></i>-->
        	</header>
			<!-- 地址行 -->
			<div class="tjdizhi" @click="show">
				<i class="jy_iconfont icon_eatery"></i>　手动添加地址
			</div>
			
			<div class="dizhi">
				<p class="message">
					<span class="name">猴纸先森</span>
					<span class="telephone">130****9039</span>
				</p>
				<p class="address">
					<i class="jy_iconfont icon_address"></i>
					<span class="address1">北京</span>-
					<span class="address2">北京市</span>-
					<span class="address3">通州区</span>-
					<span class="address4">西华街道万达广场B座2701室</span>
				</p>
			</div>
			
			<!-- 产品信息行 -->
			<div class="main">
				<div class="main_img">
					<img :src="data.goods_thumb"/>
				</div>
				<div class="main_message">
					<h3>{{ data.goods_name }}</h3>
					<p>
						<span class="shop_price">￥<span v-for="i in data.pintuan">{{ i.tuan_price }}</span></span>
						<span class="market_price">￥<span>{{ data.shop_price }}</span></span>
						<span class="jinru">X 1</span>
					</p>
				</div>
			</div>
			
			<!-- 拼团玩法 -->
			<div class="zhifufangshi">
				<div class="title">支付方式
					<span>推荐使用微信支付~</span>
				</div>
				<div class="pt_main">
					<p class="img">
						<span class="weixin">
							<span class="xuanzhong"></span>
						</span>
					</p>
					<p class="wenzi">微信支付</p>
				</div>
			</div>
			
			<div class="peixong">
				<h3>配送</h3>
				<span>快递</span>
			</div>
			
			<div class="youfei">
				<h3>邮费</h3>
				<span>10.00</span>
			</div>
			<div class="bottom">
				<span class="bottom_left">实付款： ￥<span class="sfprice"></span></span>
				<!--<a href="http://m2.t.jiayou9.com/#/download" class="bottom_left"><i class="jy_iconfont main_pintuan"></i>更多拼团</a>-->
				<span class="bottom_right" @click="zhifu();show1()">立即支付</span>
			</div>
		</section>
		<div class="fuceng1">
			<form action="">
				<div class="container">
					<h3>支付前请填写收货地址</h3>
					<p class="content">姓名：<input id="name" type="text" value="" />电话：<input id="number" type="tel" value="" /></p>
					<!--<p class="address">地址：<input type="text" id="sheng" value="" />省(市)<input type="text" id="shi" value="" />市<input type="text" id="xian" value="" />县(区)</p>-->
					<p class="address">地址：<select id="sheng" @change="city">
						<option v-for="i in dataprovince" :value="i.region_id">{{ i.region_name }}</option>
					</select><select id="shi" @click="qu">
						<option v-for="i in listMe(datacity)" :title="i.parent_id" :value="i.region_id">{{ i.region_name }}</option>
					</select><select id="xian">
						<option v-for="i in listMe1(dataqu)" :title="i.parent_id" :value="i.region_id">{{ i.region_name }}</option>
					</select></p>
					
					<p class="xxaddress">详细住址：<input type="text" id="jtaddress" value="" /></p>
					<!--<input type="button" id="baocun" @click="address" value="保存" /></p>-->
					<p id="baocun" @click="address">保存</p>
				</div>
			</form>
		</div>
		<div class="fuceng2">
			<div class="container">
				<h3>请您确认订单金额</h3>
				<p id="zongjia">总金额为：</p>
				<p id="quxiao" @click="show2">取消</p>
				<p id="queren" @click="callpay">确认</p>
				<!--<p id="queren">确认</p>-->
			</div>
		</div>
	</div>
</template>
<script>
	var goods_id = localStorage.getItem("goods_id");
	var product_id = localStorage.getItem("product_id");
	var activity_id = localStorage.getItem("activity_id");
	var userId = localStorage.getItem("userId");
	var tuan_rule_id = localStorage.getItem("tuan_rule_id");
	var tuan_head_uid = localStorage.getItem("tuan_head_uid");
	var userOpenid = localStorage.getItem("userOpenid");

export default {
	data() {
			return {
				headTit: {
					title: '我的家有',
					back: 'ok',
				},
				data: [],
				data5: [],
				data6: [],
				dataprovince: [],
				datacity: [],
				dataqu: [],
			}
		},
		computed: {},
		methods: {
			// 填写地址
			show: function() {
				$(".fuceng1").css("display", "block");
			},
			show1: function() {
				if($(".tjdizhi").css("display") == "none") {
					setTimeout(function(){
						$(".fuceng2").css("display", "block");
					},3000);
				}else{
					$(".fuceng2").css("display", "none");
				}
			},
			show2: function() {
				$(".fuceng2").css("display", "none");
			},
			// 省级选框改变，市级获取数据
			city: function() {
				this.$http.get("dist/datacity1.json").then(function(res) {
					this.datacity = res.body;
	//				console.log(res.body);
				});
			},
			// 市级点击事件，县级获取数据
			qu: function() {
				this.$http.get("dist/dataqu.json").then(function(res) {
					this.dataqu = res.body;
	//				console.log(res.body);
				});
			},
			// 保存地址
			address: function() {
				if($("#name")[0].value == "" || $("#number")[0].value == "" || $("#sheng")[0].value == "" || $("#shi")[0].value == "" || $("#xian")[0].value == "" || $("#jtaddress")[0].value == "") {
					$(".fuceng1").css("display", "none");
					$(".tjdizhi").css("display", "block");
					$(".dizhi").css("display", "none");
				} else {
					$(".dizhi .name")[0].innerHTML = $("#name")[0].value;
					$(".dizhi .telephone")[0].innerHTML = $("#number")[0].value;
					$(".dizhi .address1")[0].innerHTML = $('#sheng option:selected').text();
					$(".dizhi .address2")[0].innerHTML = $('#shi option:selected').text();
					$(".dizhi .address3")[0].innerHTML = $('#xian option:selected').text();
					$(".dizhi .address4")[0].innerHTML = $("#jtaddress")[0].value;
					$(".fuceng1").css("display", "none");
//					console.log($(".dizhi .name")[0].innerHTML);
					$(".tjdizhi").css("display", "none");
					$(".dizhi").css("display", "block");
//					$(".dizhi .address1").attr("value",$('#sheng option:selected').val());
					
					console.log($('#shi option:selected')[0].title);
					console.log($('#xian option:selected')[0].title);
					console.log($(".shop_price span")[0].innerHTML);
				}

			},
			// 市级地址筛选（过滤器）
			listMe:function(list){
                return list.filter(function(item){  
                    return item.parent_id == $("#sheng option:selected")[0].value;
                })
           	},
           	// 县级地址筛选（过滤器）
           	listMe1:function(list){
                return list.filter(function(item){  
                    return item.parent_id == $("#shi option:selected")[0].value;
                })  
           	},
			// 立即支付
			zhifu: function() {
				if($(".tjdizhi").css("display") == "none") {
					// 请求订单接口
					$.ajax({
						type: "get", //数据发送的方式（post 或者 get）
						url: "https://a2.t.jiayou9.com/home/orderinfo/orderinfo?debug=1&device_type=3", //要发送的后台地址
						data: {
							"user_id": userId,
							"goods_id": goods_id,
							"consignee": $(".dizhi .name")[0].innerHTML,
							"country": "1",
							"province": $('#sheng option:selected')[0].value,
							"city": $('#shi option:selected')[0].value,
							"district": $('#xian option:selected')[0].value,
							"address": $(".dizhi .address4")[0].innerHTML,
							"mobile": $(".dizhi .telephone")[0].innerHTML,
							"referer": "3",
							"shipping_name": "快递",
							"goods_amount": $(".shop_price span:eq(0)")[0].innerHTML,
							"product_id": product_id,
							"activity_id": activity_id,
							"tuan_rule_id": tuan_rule_id,
							"tuan_head_uid": tuan_head_uid
						}, //要发送的数据（参数）格式为{'val1':"1","val2":"2"}
						dataType: "jsonp", //后台处理后返回的数据格式
						success: function(data5) { //ajax请求成功后触发的方法
							alert(data5.data);
							// 请求微信支付接口
							$.ajax({
								type: "get",
								url: "https://wxp.t.jiayou9.com/WxpayAPI_php_v3/example/jsapi.php",
								data: {
									"order_sn": data5.data,
									"allprice": $(".sfprice")[0].innerHTML,
									"openid": userOpenid
//									"openid": "ozU7us3oFTOLOTYOXLpkh8sAF4R4"
								},
								dataType: "jsonp",
								success: function(data6) {
									var datazf = data6.data
									console.log(datazf.appid);
//									alert(datazf.noncestr);
//									alert(datazf.prepayid);
//									alert(datazf.sign);
//									alert(datazf.timestamp);
									var appId = datazf.appid;
									var paySign = datazf.noncestr;
									var pg = datazf.package;
									var partnerid = datazf.partnerid;
									var prepayid = datazf.prepayid;
									var paySign = datazf.sign;
									var timeStamp = datazf.timestamp;
									var prepay_id = "prepay_id=" + prepayid;
									localStorage.setItem("appId", appId);
									localStorage.setItem("paySign", paySign);
									localStorage.setItem("pg", pg);
									localStorage.setItem("partnerid", partnerid);
									localStorage.setItem("prepayid", prepayid);
									localStorage.setItem("paySign", paySign);
									localStorage.setItem("timeStamp", timeStamp);
									localStorage.setItem("prepay_id", prepay_id);
								},
								error: function(msg) { //ajax请求失败后触发的方法
									console.log(msg);
									alert(JSON.stringify(msg));
								}
							});
						},
						error: function(msg) { //ajax请求失败后触发的方法
							console.log(msg);
						}
					});
				} else {
					$(".fuceng1").css("display", "block");
				}

			},
			// 调用微信支付
		   	callpay: function(){
		        try {
	                if (typeof WeixinJSBridge == "undefined") {
	                    if (document.addEventListener) {
	                        document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
	                    } else if (document.attachEvent) {
	                        document.attachEvent('WeixinJSBridgeReady', jsApiCall);
	                        document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
	                    }
	                } else {
	                    jsApiCall();
	                }
	            } catch (e) {
	                alert(e + "aaaaa");
//					alert(JSON.stringify(e));
	            }
	            function jsApiCall(){
		        	var appId1 = localStorage.getItem("appId");
		        	var paySign1 = localStorage.getItem("paySign");
		        	var timeStamp1 = localStorage.getItem("timeStamp");
		        	var nonceStr1 = localStorage.getItem("nonceStr");
		        	var prepay_id1 = localStorage.getItem("prepay_id");
		        	alert("appId1="+appId1);
		        	alert("paySign1="+paySign1);
		        	alert("timeStamp1="+timeStamp1);
		        	alert("nonceStr1="+nonceStr1);
		        	alert("prepay_id1="+prepay_id1);
		            try {
			            WeixinJSBridge.invoke(
				            'getBrandWCPayRequest', {
				            	"appId": appId1,	// 公众号名称，由商户传入
				            	"timeStamp": timeStamp1,	// 时间戳，自1970年以来的秒数
				            	"nonceStr": nonceStr1,	// 随机串
				            	"package": prepay_id1,	// 预支付交易会话标识
				            	"signType": "MD5",	// 微信签名方式
				            	"paySign": paySign1,	// 微信签名
				            },
				            function(res){
//				                WeixinJSBridge.log(res.err_msg);
                        		alert(res.err_code + res.err_desc + res.err_msg);
									if(res.err_msg == "get_brand_wcpay_request:ok" ) {
								 		WeixinJSBridge.log(res.err_msg);
								 		alert('支付成功')
									}
								 // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
				            }
				        );
		            } catch (e) {
		                alert(e + "bbbbb");
//		                alert(JSON.stringify(e));
		            }
		        }
	        },
		    
		},
		components: {
			"nvHead": require('../../../components/header.vue'),
		},

		// 实付价
		mounted: function() {
			var str = location.href; //取得整个地址栏

			var str1 = str.split('goods_id=')[1];
			var goods_id = str1.split('&')[0];
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
			//				changeURLArg('https://a2.t.jiayou9.com/product/info?id=330&debug=1&data_format=1','id',goods_id);

			this.$http.jsonp(changeURLArg('https://a1.t.jiayou9.com/product/info?id=330&debug=1&device_type=3&data_format=1', 'id', goods_id)).then(function(res) {
				this.data = res.body.data;
//				console.log(res.body.data);
				
			});
			
			
			// 省市区数据请求（省）
			this.$http.get("dist/dataprovince.json").then(function(res) {
				this.dataprovince = res.body;
//				console.log(res.body);
			});
//			this.$http.get("dist/datacity1.json").then(function(res) {
//				this.datacity = res.body;
////				console.log(res.body);
//			});
//			this.$http.get("dist/dataqu.json").then(function(res) {
//				this.dataqu = res.body;
////				console.log(res.body);
//			});
			
//			$(".youfei span")[0].innerHTML = shipping_fee;
			var shop_price = localStorage.getItem("shop_price1");
			var allprice = $(".sfprice")[0].innerHTML = (parseFloat($(".youfei span")[0].innerHTML) + parseFloat(shop_price)).toFixed(2); // toFixed(2)---保留两位小数
//			console.log($(".shop_price span")[0].innerHTML);
			$("#zongjia")[0].innerHTML = "总金额为：" + allprice;
			console.log(shop_price);
			
			
			
			
		},
		
}
/*var appId1 = localStorage.getItem("appId");
var paySign1 = localStorage.getItem("paySign");
var timeStamp1 = localStorage.getItem("timeStamp");
var nonceStr1 = localStorage.getItem("nonceStr");
var prepay_id1 = localStorage.getItem("prepay_id");
wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: appId1, // 必填，公众号的唯一标识
            timestamp: timeStamp1, // 必填，生成签名的时间戳
            nonceStr: nonceStr1, // 必填，生成签名的随机串
            signature: paySign1,// 必填，签名
            jsApiList: ['checkJsApi',
            'chooseWXPay'] // 必填，需要使用的JS接口列表
        });
 
        //通过ready接口处理成功验证
        wx.ready(function () {
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后
 
            $('#queren').on("click",function () {
                wx.chooseWXPay({
                    timestamp: timeStamp1, // 支付签名时间戳 注意这里的s 文档新版大写 但是我的小写才好使
                    nonceStr: nonceStr1, // 支付签名随机串
                    package: prepay_id1, // 统一支付接口返回的package包
                    signType: "MD5", // 签名方式，'MD5'
                    paySign: paySign1, // 支付签名
                 success: function (res) {
                     if (res.err_msg == "get_brand_wcpay_request:ok") {
                         alert("支付成功");
                         // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。 
                     }
                     else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                         alert("cancel");
                         // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。 
                     }
                     else if (res.err_msg == "get_brand_wcpay_request:fail") {
                         alert("fail");
                         // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。 
                     }
                 },
                  cancel:function(res){
                  	alert(JSON.stringify(res));
                  },
                  fail: function(res){
                  	alert(JSON.stringify(res));
                  }
                });
            });
        });*/
</script>
<style lang="sass" scoped>section {
	/*background: rgb(255,255,255);*/
	h3 {
		font-weight: normal;
	}
	/* margin-bottom: 92px; */
	/* 顶部标题行 */
	#all_header {
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
		border-bottom: 1px solid #ededed;
		z-index: 100;
		.icon_header::before {
			font-family: 'jyzx-iconfont';
			content: "\e604";
			font-size: 36px;
		}
		.icon_fenxiang::before {
			content: "\e648";
			font-size: 50px;
			color: #c3c3c3;
		}
	}
	.tjdizhi {
		margin-top: 88px;
		margin-bottom: 16px;
		height: 66px;
		line-height: 66px;
		padding-left: 31px;
		background: #fff;
		color: #f00;
		font-size: 26px;
		font-weight: bold;
	}
	.dizhi {
		height: 120px;
		position: relative;
		font-size: 26px;
		margin-top: 88px;
		padding-left: 31px;
		background: #fff;
		margin-bottom: 16px;
		line-height: 40px;
		padding-top: 20px;
		border-top: 5px solid #cee8f5;
		border-bottom: 5px solid #cee8f5;
		display: none;
		p {
			padding-left: 42px;
			color: #696969;
			font-size: 22px;
			color: #333333;
			position: relative;
			.icon_address {
				position: absolute;
				top: 0;
				left: 0;
				font-size: 24px;
				color: #888888;
			}
		}
	}
	.main {
		height: 233px;
		width: 100%;
		background: #fff;
		padding: 24px;
		position: relative;
		.main_img {
			float: left;
			width: 180px;
			height: 180px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.main_message {
			float: left;
			width: 490px;
			margin-left: 30px;
			h3 {
				width: 100%;
			}
			p {
				margin-top: 30px;
				.shop_price {
					font-size: 14px;
					color: #ff4b3c;
					span {
						font-size: 26px;
					}
					span:nth-of-type(2){
						display: none;
					}
				}
				.market_price {
					font-size: 17px;
					color: #9a9a9a;
					span {
						text-decoration: line-through;
					}
				}
				.jinru {
					color: #9a9a9a;
					float: right;
				}
			}
		}
		.dengdaichengtuan {
			width: 150px;
			height: 150px;
			position: absolute;
			top: 42px;
			right: 30px;
		}
	}
	.zhifufangshi {
		background: #fff;
		margin-top: 16px;
		.title {
			padding: 0 25px;
			border-bottom: 1px solid #ebebeb;
			font-size: 26px;
			color: #424242;
			overflow: hidden;
			height: 82px;
			line-height: 82px;
			span {
				float: right;
				color: #979797;
				font-size: 22px;
			}
		}
		.pt_main {
			padding: 53px 25px;
			p {
				text-align: center;
			}
			.img {
				.weixin {
					display: inline-block;
					width: 120px;
					height: 120px;
					border-radius: 50%;
					border: 1px solid #d3d3d3;
					background: url(../../../../dist/assets/weixin.png);
					background-size: cover;
					position: relative;
					.xuanzhong {
						display: inline-block;
						width: 30px;
						height: 30px;
						border-radius: 50%;
						background: url(../../../../dist/assets/quedingzhifu.png);
						background-size: cover;
						position: absolute;
						top: 0;
						right: 0;
					}
				}
				.wenzi {
					font-size: 22px;
					color: #2a2a2a;
					margin-top: 14px;
				}
			}
		}
	}
	.peixong {
		background: #fff;
		height: 80px;
		line-height: 80px;
		padding: 0 25px;
		margin: 16px 0;
		font-size: 26px;
		color: #353535;
		h3 {
			float: left;
		}
		span {
			float: right;
		}
	}
	.youfei {
		background: #fff;
		height: 80px;
		line-height: 80px;
		padding: 0 25px;
		margin: 16px 0;
		font-size: 26px;
		color: #353535;
		h3 {
			float: left;
		}
		span {
			float: right;
		}
	}
	.jiage {
		background: #fff;
		ul {
			padding: 12px 25px 50px 25px;
			li {
				height: 50px;
				line-height: 50px;
				font-size: 22px;
				color: #292929;
				.name {
					float: left;
				}
				.price {
					float: right;
					color: #ff392c;
				}
			}
		}
	}
	.bottom {
		height: 92px;
		background: #fff;
		border-top: 1px solid #dddddd;
		padding: 0 25px;
		text-align: right;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		span,
		a {
			display: inline-block;
			height: 50px;
			line-height: 50px;
			text-align: center;
			border-radius: 4px;
			font-size: 22px;
		}
		.bottom_left {
			color: #ff392c;
			height: 92px;
			line-height: 92px;
			font-size: 26px;
			.main_pintuan {
				color: #89b63f;
				margin-right: 10px;
			}
		}
		.bottom_right {
			width: 160px;
			margin-top: 22px;
			color: #fff;
			float: right;
			background: #89b63f;
			margin-left: 23px;
		}
	}
}



.fuceng1 {
	width: 100%;
	height: 1334px;
	background: rgba(0, 0, 0, 0.7);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 111;
	display: none;
	.container {
		width: 540px;
		height: 340px;
		background: #fff;
		margin: 50px auto;
		border-radius: 12px;
		position: relative;
		h3 {
			text-align: center;
			font-weight: bold;
			font-size: 29px;
			padding-top: 36px;
			margin-bottom: 26px;
		}
		p {
			height: 50px;
			line-height: 50px;
		}
		.content {
			margin: 0 20px;
			font-size: 22px;
			/*color: #a0a0a0;*/
			input {
				width: 170px;
				border: 1px solid #ddd;
			}
		}
		.address {
			margin: 0 20px;
			select {
				width: 135px;
				border: 1px solid #ddd;
			}
		}
		.xxaddress {
			margin: 0 20px;
			input {
				width: 340px;
				border: 1px solid #ddd;
			}
		}
		#baocun {
			margin: 0 5%;
			height: 50px;
			width: 90%;
			line-height: 50px;
			text-align: center;
			margin-top: 20px;
			border-radius: 5px;
			background: #F86757;
			color: #fff;
		}
	}
}
.fuceng2 {
	width: 100%;
	height: 1334px;
	background: rgba(0, 0, 0, 0.7);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 111;
	display: none;
	.container {
		width: 540px;
		height: 240px;
		background: #fff;
		margin: 50px auto;
		border-radius: 12px;
		position: relative;
		h3 {
			text-align: center;
			font-weight: bold;
			font-size: 29px;
			padding-top: 36px;
			margin-bottom: 26px;
		}
		p {
			height: 50px;
			line-height: 50px;
			text-align: center;
		}
		#quxiao,#queren{
			margin: 0 5%;
			height: 50px;
			width: 40%;
			line-height: 50px;
			text-align: center;
			margin-top: 20px;
			border-radius: 5px;
			background: #F86757;
			color: #fff;
			float: left;
		}
		#quxiao{
			background: #666;
			color: #fff;
		}
		
	}
}
</style>