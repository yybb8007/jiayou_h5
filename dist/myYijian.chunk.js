webpackJsonp([61],{

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(70)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(71),
	  /* template */
	  __webpack_require__(72),
	  /* scopeId */
	  "data-v-075bb5fd",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\components\\header.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-075bb5fd", Component.options)
	  } else {
	    hotAPI.reload("data-v-075bb5fd", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 70:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 71:
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

	exports.default = {
		props: ['pageName', 'backAction', "backType", "goback", "clickBtn", "clickAction", "opa"],
		computed: {
			getBackClass: function getBackClass() {
				var back = {
					back: true,
					backWhite: false
				};
				if (this.opa == false) {
					back['back'] = false;
					back['backWhite'] = true;
				}
				return back;
			},
			getHeader: function getHeader() {
				if (localStorage.android == "true") {
					return false;
				} else if (localStorage.ios == "true") {
					return false;
				} else {
					return true;
				}
			}
		},
		methods: {
			aBtn: function aBtn() {
				if (this.backAction != undefined) {
					this.backAction();
				} else {
					var _back = this.$route.query.backUrl;
					console.log(_back);
					if (_back) {
						this.$route.router.go({
							path: _back
						});
					} else {
						history.go(-1);
					}
				}
			}
		}

	};

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.getHeader) ? _c('header', {
	    class: _vm.opa == false ? {
	      white: true
	    } : {
	      black: true
	    }
	  }, [(_vm.backType) ? _c('a', {
	    class: _vm.getBackClass,
	    on: {
	      "click": function($event) {
	        _vm.aBtn()
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), _c('span', {
	    domProps: {
	      "textContent": _vm._s(_vm.pageName)
	    }
	  }), _vm._v(" "), (_vm.clickBtn) ? _c('a', {
	    staticClass: "rightButton",
	    domProps: {
	      "innerHTML": _vm._s(_vm.clickBtn)
	    },
	    on: {
	      "click": _vm.clickAction
	    }
	  }) : _vm._e()]) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-075bb5fd", module.exports)
	  }
	}

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(350)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(351),
	  /* template */
	  __webpack_require__(352),
	  /* scopeId */
	  "data-v-1e720f4e",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\myhome\\children\\myYijian.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] myYijian.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1e720f4e", Component.options)
	  } else {
	    hotAPI.reload("data-v-1e720f4e", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 350:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

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

	exports.default = {
		data: function data() {
			return {
				headTit: {
					title: '我的意见',
					back: 'ok'
				},
				data: []
			};
		},

		computed: {},
		methods: {},
		components: {
			"nvHead": __webpack_require__(69)
		},
		mounted: function mounted() {
			this.$http.jsonp('https://a1.t.jiayou9.com/region/pavilionDetail?debug=1&regionId=3&format=jsonp').then(function (res) {
				this.data = res.body.data;
				console.log(res.body.data);
			});
		}
	};

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('nv-head', {
	    attrs: {
	      "page-name": _vm.headTit.title,
	      "back-type": _vm.headTit.back
	    }
	  }), _vm._v(" "), _vm._m(0)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', {
	    staticClass: "as_main",
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_c('form', [_c('div', {
	    staticClass: "yj_message"
	  }, [_c('textarea', {
	    attrs: {
	      "rows": "5",
	      "cols": "55",
	      "maxlength": "330",
	      "wrap": "wrap",
	      "placeholder": "请简单描述您的问题和意见，上传截图更快解决哦",
	      "value": ""
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "yj_img"
	  }, [_c('h1', {
	    staticClass: "title"
	  }, [_vm._v("添加照片："), _c('span', [_vm._v("（选填，提供问题截图，最多三张）")])]), _vm._v(" "), _c('p', {
	    staticClass: "upload"
	  }, [_c('i', {
	    staticClass: "jy_iconfont icon_shopping"
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "uploadImg"
	  }, [_c('div', {
	    staticClass: "img"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(353)
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("-")])]), _vm._v(" "), _c('div', {
	    staticClass: "img"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(353)
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("-")])]), _vm._v(" "), _c('div', {
	    staticClass: "img"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(353)
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("-")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "submit"
	  }, [_c('input', {
	    attrs: {
	      "type": "submit",
	      "value": "提交"
	    }
	  })])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1e720f4e", module.exports)
	  }
	}

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/pintuan.jpg?v=60ff1d72";

/***/ }

});