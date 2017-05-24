webpackJsonp([47],{

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(279)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(280),
	  /* template */
	  __webpack_require__(281),
	  /* scopeId */
	  "data-v-86072f22",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\team\\children\\children2\\pinglun.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] pinglun.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-86072f22", Component.options)
	  } else {
	    hotAPI.reload("data-v-86072f22", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 279:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 280:
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
		methods: {},
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
			//				changeURLArg('https://a2.t.jiayou9.com/product/comment_text?debug=1&id=330&data_format=1','id',id);

			this.$http.jsonp(changeURLArg('https://a2.t.jiayou9.com/product/comment_text?debug=1&id=330&data_format=1', 'id', goods_id)).then(function (res) {
				this.data = res.body.data;
				console.log(res.body.data.count);
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

				var content = document.querySelectorAll(".bottom p");
				for (var i = 0; i < content.length; i++) {
					if (res.body.data.items[i].content == "") {
						res.body.data.items.content == "该用户暂无评论！";
						console.log(res.body.data.items[i].content);
					}
				}
			});
		}
	};

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('main', {
	    attrs: {
	      "id": "goods_main"
	    }
	  }, [_c('article', {
	    staticClass: "evaluate"
	  }, [_c('ul', [_c('li', [_c('div', {
	    staticClass: "top"
	  }, [_c('p', {
	    staticClass: "adimeName"
	  }, [_vm._v(_vm._s(_vm.data.items[0].username)), _c('br'), _vm._v(" "), _c('span', {
	    staticClass: "yezi"
	  })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.data.items[0].datetime))])]), _vm._v(" "), _c('div', {
	    staticClass: "bottom"
	  }, [_c('p', [_vm._v(_vm._s(_vm.data.items[0].content))])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "top"
	  }, [_c('p', {
	    staticClass: "adimeName"
	  }, [_vm._v(_vm._s(_vm.data.items[1].username)), _c('br'), _vm._v(" "), _c('span', {
	    staticClass: "yezi"
	  })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.data.items[1].datetime))])]), _vm._v(" "), _c('div', {
	    staticClass: "bottom"
	  }, [_c('p', [_vm._v(_vm._s(_vm.data.items[1].content))])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "top"
	  }, [_c('p', {
	    staticClass: "adimeName"
	  }, [_vm._v(_vm._s(_vm.data.items[2].username)), _c('br'), _vm._v(" "), _c('span', {
	    staticClass: "yezi"
	  })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.data.items[2].datetime))])]), _vm._v(" "), _c('div', {
	    staticClass: "bottom"
	  }, [_c('p', [_vm._v(_vm._s(_vm.data.items[2].content))])])])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-86072f22", module.exports)
	  }
	}

/***/ }

});