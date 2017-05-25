<template>
	<div id="xiangqingye">
		<section id="wrapper" class="sy_main">
			<div v-html="data.goods_desc"></div>
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
			methods: {},
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
		section{
			overflow-y: auto;
			width: 100%;
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
	}
	
</style>