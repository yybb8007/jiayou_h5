webpackJsonp([49],{

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(287)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(288),
	  /* template */
	  __webpack_require__(289),
	  /* scopeId */
	  "data-v-2f2b288d",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\team\\children\\children2\\xq.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] xq.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2f2b288d", Component.options)
	  } else {
	    hotAPI.reload("data-v-2f2b288d", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 287:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 288:
/***/ function(module, exports) {

	'use strict';

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
	//
	//
	//
	//
	//
	//
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
		methods: {
			setId: function setId() {
				var str = location.href;
				localStorage.setItem('str', str);
				console.log(str);
			}
		},
		components: {
			//				"nvHead": require('../../components/header.vue'),
			//				"nvFooter": require('../../components/footer.vue')
		},
		mounted: function mounted() {

			var str = location.href; //取得整个地址栏
			var goods_id = str.split('=')[1];
			//
			console.log(goods_id);

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
			//				changeURLArg('https://a1.t.jiayou9.com/product/description?id=410&debug=1&device_type=3&format=jsonp','id',id);

			this.$http.jsonp(changeURLArg('https://a1.t.jiayou9.com/product/description?id=410&debug=1&device_type=3&format=jsonp', 'id', goods_id)).then(function (res) {
				this.data = res.body.data;
				console.log(res.body.data.goods_id);
				//					console.log(res.body.data[8]);
				// 轮播图
				var mySwiper = new Swiper('.swiper-container', {
					direction: 'horizontal',
					//						autoplay: 2000,
					loop: true,
					observer: true,
					// 分页器
					pagination: '.swiper-pagination'
				});
				var str = location.href;
				localStorage.setItem('1', 2);
			});
		}
	};

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('article', {
	    staticClass: "evaluate"
	  }, [_c('router-link', {
	    attrs: {
	      "to": '/orderGoods/pinglun?goods_id=' + _vm.data.goods_id
	    }
	  }, [_c('div', {
	    staticClass: "title"
	  }, [_c('p', {
	    staticClass: "left"
	  }, [_vm._v("商品评价")]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": '/qbpinglun?goods_id=' + _vm.data.goods_id
	    }
	  }, [_c('p', {
	    staticClass: "right"
	  }, [_vm._v("查看全部\n\t\t\t\t\t\t"), _c('i', {
	    staticClass: "jy_iconfont icon_right"
	  })])])], 1)]), _vm._v(" "), _c('router-view')], 1), _vm._v(" "), _c('article', {
	    staticClass: "upLoad"
	  }, [_vm._v("图文详情")]), _vm._v(" "), _c('article', {
	    staticClass: "goods_img",
	    domProps: {
	      "innerHTML": _vm._s(_vm.data.goods_desc)
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2f2b288d", module.exports)
	  }
	}

/***/ }

});