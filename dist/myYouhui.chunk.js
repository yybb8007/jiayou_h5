webpackJsonp([57],{

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

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(334)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(335),
	  /* template */
	  __webpack_require__(336),
	  /* scopeId */
	  "data-v-08a45ae2",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\myhome\\children\\myYouhui.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] myYouhui.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-08a45ae2", Component.options)
	  } else {
	    hotAPI.reload("data-v-08a45ae2", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 334:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 335:
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

	exports.default = {
		data: function data() {
			return {
				headTit: {
					title: '我的优惠券',
					back: 'ok'
				}
			};
		},

		computed: {},
		methods: {},
		components: {
			"nvHead": __webpack_require__(69)
		}
	};

/***/ },

/***/ 336:
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
	    staticClass: "sy_main",
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_c('span', {
	    staticClass: "active"
	  }, [_vm._v("激活")]), _vm._v(" "), _c('main', {
	    staticClass: "null"
	  }, [_c('div', {
	    staticClass: "nnull"
	  }, [_c('i', {
	    staticClass: "iconfont icon_cry"
	  }), _vm._v(" "), _c('article', [_c('p', [_vm._v("很遗憾您还没有优惠券，赶紧去领吧！")]), _vm._v(" "), _c('button', [_vm._v("去领券中心看看")])])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-08a45ae2", module.exports)
	  }
	}

/***/ }

});