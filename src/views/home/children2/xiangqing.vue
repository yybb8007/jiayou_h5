<template>
	<div id="xiangqingye">
		<header>
			<ul>
				<li class="left" @click="left">商品</li>
				<li class="right" @click="right">规格参数</li>
			</ul>
		</header>
		<section id="wrapper1">
			<div v-html="data.goods_desc"></div>
		</section>
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
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {},
					data: []
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
				}
			},
			components: {},
			mounted: function() {
				// 截取id
				function UrlSearch() {
					var name, value;
					var str = location.href; //取得整个地址栏
					var num = str.indexOf("?")
					str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

					var arr = str.split("&"); //各个参数放到数组里
					for(var i = 0; i < arr.length; i++) {
						num = arr[i].indexOf("=");
						if(num > 0) {
							name = arr[i].substring(0, num);
							value = arr[i].substr(num + 1);
							this[name] = value;
						}
					}
				}
				var Request = new UrlSearch(); //实例化
				console.log(Request.goods_id);
				
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
				changeURLArg('https://a1.t.jiayou9.com/product/description?id=378&debug=1&device_type=3&format=jsonp','id',Request.goods_id);
				
				
				
				// 获取数据
				this.$http.jsonp(changeURLArg('https://a1.t.jiayou9.com/product/description?id=378&debug=1&device_type=3&format=jsonp','id',Request.goods_id)).then(function(res) {
					this.data = res.body.data;
					
				})

			}
	}
	// 设置页面缩放
	document.getElementById('view').setAttribute('content','user-scalable=yes, width=device-width, minimum-scale=1, initial-scale=1, maximum-scale=5')
</script>
<style lang="sass" scoped>
	/** {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	
	input {
		-webkit-user-select: auto;
	}*/
	div{
		width: 750px;
		/*height: 100%;*/
		overflow: hidden;
		overflow-y: auto;
		font-size: 0;
		background: #fff;
		header{
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
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
					width: 50%;
					font-size: 28px;
					color: #333;
				}
				li:first-of-type{
					border-right: 1px solid #c3c3c3;
					color: #ff4b3a;
				}
			}
		}
		#wrapper1{
			overflow-y: auto;
			width: 100%;
			margin-top: 88px;
			div {
				overflow-y: auto;
				font-size: 0;
				width: 100%;
				p {
					width: 100%;
					span{
						display: none;
					}
					img {
						width: 100%;
					}
				}
			}
		}
		#wrapper2{
			width: 100%;
			margin-top: 88px;
			color: #666;
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
	
</style>