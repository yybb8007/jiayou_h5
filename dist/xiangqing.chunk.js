webpackJsonp([21],{

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(161)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(162),
	  /* template */
	  __webpack_require__(163),
	  /* scopeId */
	  "data-v-1f1780b0",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\home\\children2\\xiangqing.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] xiangqing.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1f1780b0", Component.options)
	  } else {
	    hotAPI.reload("data-v-1f1780b0", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 161:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 162:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		data: function data() {
			return {
				headTit: {},
				data: []
			};
		},

		computed: {},
		methods: {},
		components: {},
		mounted: function mounted() {
			// 截取id
			function UrlSearch() {
				var name, value;
				var str = location.href; //取得整个地址栏
				var num = str.indexOf("?");
				str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

				var arr = str.split("&"); //各个参数放到数组里
				for (var i = 0; i < arr.length; i++) {
					num = arr[i].indexOf("=");
					if (num > 0) {
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
				if (url.match(pattern)) {
					var tmp = '/(' + arg + '=)([^&]*)/gi';
					tmp = url.replace(eval(tmp), replaceText);
					return tmp;
				} else {
					if (url.match('[\?]')) {
						return url + '&' + replaceText;
					} else {
						return url + '?' + replaceText;
					}
				}
				var URL = url + '\n' + arg + '\n' + arg_val;
				return URL;
			};
			changeURLArg('https://a1.t.jiayou9.com/product/description?id=378&debug=1&device_type=3&format=jsonp', 'id', Request.goods_id);

			// 获取数据
			this.$http.jsonp(changeURLArg('https://a1.t.jiayou9.com/product/description?id=378&debug=1&device_type=3&format=jsonp', 'id', Request.goods_id)).then(function (res) {
				this.data = res.body.data;
			});
		}
	};
	// 设置页面缩放

	document.getElementById('view').setAttribute('content', 'user-scalable=yes, width=device-width, minimum-scale=1, initial-scale=1, maximum-scale=5');

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "xiangqingye"
	    }
	  }, [_c('section', {
	    staticClass: "sy_main",
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_c('div', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.data.goods_desc)
	    }
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1f1780b0", module.exports)
	  }
	}

/***/ }

});