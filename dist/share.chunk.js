webpackJsonp([48],{

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(306)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(307),
	  /* template */
	  __webpack_require__(308),
	  /* scopeId */
	  "data-v-64c9fa12",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\team\\children\\share.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] share.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-64c9fa12", Component.options)
	  } else {
	    hotAPI.reload("data-v-64c9fa12", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 306:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 307:
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
				data: [],
				data2: []
			};
		},

		computed: {},
		methods: {},
		components: {
			//				"nvHead": require('../../components/header.vue'),
			//				"nvFooter": require('../../components/footer.vue')
		},
		mounted: function mounted() {
			var str = location.href; //取得整个地址栏

			var goods_id = str.split('goods_id=')[1];
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
			//				changeURLArg('https://a2.t.jiayou9.com/product/info?id=330&debug=1&data_format=1','id',id);

			this.$http.jsonp(changeURLArg('https://a2.t.jiayou9.com/product/info?id=330&debug=1&data_format=1', 'id', goods_id)).then(function (res) {
				this.data = res.body.data;
				//					console.log(res.body.data.goods_id);
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
			});
			this.$http.jsonp(changeURLArg('https://a1.t.jiayou9.com/product/description?id=410&debug=1&device_type=3&format=jsonp', 'id', goods_id)).then(function (res) {
				this.data2 = res.body.data;
				//					console.log(res.body.data.goods_id);
				//					console.log(res.body.data[8]);
			});
		}
	};

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('main', {
	    attrs: {
	      "id": "goods_main"
	    }
	  }, [_c('div', {
	    staticClass: "swiper-container",
	    attrs: {
	      "id": "jf_banner"
	    }
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, _vm._l((_vm.data.gallerys), function(i) {
	    return _c('div', {
	      staticClass: "swiper-slide"
	    }, [_c('img', {
	      attrs: {
	        "src": i.img_url,
	        "alt": ""
	      }
	    })])
	  }))]), _vm._v(" "), _c('article', {
	    staticClass: "ordertype"
	  }, [_c('p', {
	    staticClass: "orderName"
	  }, [_vm._v(_vm._s(_vm.data.goods_name))]), _vm._v(" "), _c('p', {
	    staticClass: "message"
	  }, [_vm._v(_vm._s(_vm.data.goods_brief))]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_c('span', {
	    staticClass: "newprice"
	  }, [_vm._v("￥"), _c('span', [_vm._v(_vm._s(_vm.data.shop_price))])]), _vm._v(" "), _c('span', {
	    staticClass: "oldprice"
	  }, [_vm._v("￥"), _c('span', [_vm._v(_vm._s(_vm.data.market_price))])])])]), _vm._v(" "), _c('article', {
	    staticClass: "upLoad"
	  }, [_vm._v("图文详情")]), _vm._v(" "), _c('article', {
	    staticClass: "goods_img",
	    domProps: {
	      "innerHTML": _vm._s(_vm.data2.goods_desc)
	    }
	  })]), _vm._v(" "), _vm._m(1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', {
	    staticClass: "number"
	  }, [_vm._v("数量："), _c('span', [_vm._v("1")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "download"
	  }, [_c('p', [_vm._v("下载app优惠更多哦！")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "https://m.t.jiayou9.com/#/download1"
	    }
	  }, [_vm._v("去下载")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-64c9fa12", module.exports)
	  }
	}

/***/ }

});