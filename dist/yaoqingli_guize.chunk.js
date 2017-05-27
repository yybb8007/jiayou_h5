webpackJsonp([26],{

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

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(193)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(194),
	  /* template */
	  __webpack_require__(195),
	  /* scopeId */
	  "data-v-319a86ac",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\home\\children2\\yaoqingli_guize.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] yaoqingli_guize.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-319a86ac", Component.options)
	  } else {
	    hotAPI.reload("data-v-319a86ac", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 193:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 194:
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

	exports.default = {
		data: function data() {
			return {
				headTit: {
					title: '邀请有礼',
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

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('section', {
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_c('header', {
	    attrs: {
	      "id": "all_header"
	    }
	  }, [_c('i', {
	    staticClass: "jy_iconfont"
	  }), _vm._v(" "), _c('p', {
	    staticClass: "all_title"
	  }, [_vm._v("奖励规则")]), _vm._v(" "), _c('i', {
	    staticClass: "iconfont"
	  })]), _vm._v(" "), _c('main', [_c('p', {
	    staticClass: "title1"
	  }, [_vm._v("邀请新朋友各得")]), _vm._v(" "), _c('p', {
	    staticClass: "title2"
	  }, [_vm._v("满99减80元券")]), _vm._v(" "), _c('p', {
	    staticClass: "title3"
	  }, [_vm._v("分享还有机会得iPhone7 plus")]), _vm._v(" "), _c('p', {
	    staticClass: "img"
	  }), _vm._v(" "), _c('h3', [_vm._v("奖励规则-活动规则")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("1.活动时间：2017.1.17至2017.1.18；")]), _vm._v(" "), _c('li', [_vm._v("2.活动期间，邀请新朋友下单各得满99减80元券，邀请新朋友下单且成功签收最多的用户，可获得IPHONE7PLUS手机；")]), _vm._v(" "), _c('li', [_vm._v("3.被邀请人需使用邀请人分享的优惠券下单并签收，方可认定邀请成功；")]), _vm._v(" "), _c('li', [_vm._v("4.同一登入账号、同一手机号、同一终端设备号、同一支付宝账号、同一收货地址、同一IP或其他合理显示同一用户的情形，均视为同一用户。")])])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-319a86ac", module.exports)
	  }
	}

/***/ }

});