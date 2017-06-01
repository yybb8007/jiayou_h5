webpackJsonp([56],{

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

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(331)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(332),
	  /* template */
	  __webpack_require__(333),
	  /* scopeId */
	  "data-v-8ece315a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\myhome\\children\\zhuce.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] zhuce.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8ece315a", Component.options)
	  } else {
	    hotAPI.reload("data-v-8ece315a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 331:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 332:
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
	//
	//
	//
	//

	exports.default = {
		data: function data() {
			return {
				headTit: {
					title: '登录',
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

/***/ 333:
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
	  }, [_c('p', {
	    attrs: {
	      "id": "fast"
	    }
	  }, [_vm._v("快速登录")]), _vm._v(" "), _c('nav', {
	    staticClass: "jiayouLogo"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(334),
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "zc_form"
	  }, [_c('i', {
	    staticClass: "iconfont icon-phone"
	  }), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "text",
	      "placeholder": "手机号/用户名/邮箱"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "zc_form"
	  }, [_c('i', {
	    staticClass: "iconfont icon-password"
	  }), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "password",
	      "placeholder": "登录密码"
	    }
	  }), _vm._v(" "), _c('i', {
	    staticClass: "iconfont icon-juchi"
	  })]), _vm._v(" "), _c('button', {
	    staticClass: "denglu"
	  }, [_vm._v("登录")]), _vm._v(" "), _c('div', {
	    staticClass: "zhuce"
	  }, [_c('p', {
	    staticClass: "newName"
	  }, [_vm._v("新用户注册")]), _vm._v(" "), _c('p', {
	    staticClass: "forgrt"
	  }, [_vm._v("忘记密码？")])]), _vm._v(" "), _c('article', {
	    staticClass: "thrid_party"
	  }, [_c('div', {
	    staticClass: "thrid"
	  }, [_c('span'), _vm._v(" "), _c('p', [_vm._v("第三方登录")]), _vm._v(" "), _c('span')]), _vm._v(" "), _c('ul', [_c('li', [_c('i', {
	    staticClass: "iconfont icon_QQ"
	  }), _c('span', [_vm._v("QQ 登录")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "iconfont icon_WX"
	  }), _c('span', [_vm._v("微信登录")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "iconfont icon_more"
	  }), _c('span', [_vm._v("更多方式")])])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-8ece315a", module.exports)
	  }
	}

/***/ },

/***/ 334:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAlCAMAAACu5lFQAAAAilBMVEUAAADRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRvRMRs3fzBLAAAALXRSTlMA7g8tZsRLWjK7q5feQ6X79tIIAuS0iFU8E3jw6ndvHNrARsomkHRhgCAEnzW4oe9hAAADsklEQVRYw82X63aqMBBGB0UL3gBBKsf7rVrb7/1f7ziTQCAGXe1apz37B6SQhM1kMlhi0g+0MJjSD3LAA7b0Y0R4DN3jvAr0yMEAcHRdmyF5nhOT2SHYWRdi0kzhYEmaV2BDDngCiwIw7uVbde8DsLSuvJBi7g5YAhc9ao9vIqf1agWM+IDVak8xmiREM1gYEZ+aJF8WMSuzQI2h7h4dycnbcxErbSxegDNZTAAah6FLZEFtNNPV9eKKvFzB52md8mM9RFZ+g7k+Fuk8FenY9cdErLCFFtwEfJdIy44IjIj1ShiTpuM2rBZmaEcm58EXgIIgAJJAsSlFAjgY0d4hcgYQ6nZf5peMfzWUT93wotsi7mQeliJdOIh2uBPxa+VjyK2yFN0nRnE799tE0i+IxBIoI9JZq4195nXcU1jWGO/WFfANPKOesj93rFkqIXXnyNG95X0jomde7DnkHHMgCvQM/sQxFq0iUaOyysduWorQcFBxgLBh9bpI4X9Kpc/UGGBOTHzr6RQZ/LGWxmyloLx6uB1v3U7aO6cmvAQXUbdzJL3whZ2I6K3zwTXKkSMbcotMzO4GYtlaWZU7b8461ENNxCzfIZX7xt8tQm6RLnQ+6asXIGpUAK8iJxqa2mLlSPipggveszURi8cigkrznvYgOJBwmSFWHZkmqtM7sP2GyHuo4bZEgL4jUgxNpwHgfW1pbHaV832yFm0i5u9eoec98XJ/W6RIoJgbEaqxfSjS81O6pZEesylrpxF5GQx2dZGRAoBqVDtgwo0/skERz3yyN03n4dIY94iEILZEcitHYFEXkR8O19CU+Oc58q9J6T8RKeN8JMOvilCN7DdFtuOK1e9E5Ks5Iv+PnNQ+XcrpyqeMSJWV0ZQbXnE7jN7lS13fkcdFWVjegGWhdhaP99ZtIuvGt4YaIsOZfoOpnOMzvYlTlhB9IuVbXT7MVUv2tzBHQddEKmrG5V1MWK0PaJE9WXg6DONWkSNWB/1T+orqHk1mTRGifFYNfq9aEpWMpBtu/VH+3rT4RP2bGLlEvD6h/DG9V2bKvCnS7+BsBjdaBVQzzhZ8oaPqWp1NCGGu62TXJYLDAav6A1I5rRK+EJQi6WxXe3zaENnzCwYeTTGluEsU4glbcohMehIDoTyt+bDhz9WOWyqFIl/eng8fHj9ZwvnBdziQpxPJrZyH4SFefcEWPFbS4MqHjjIwiYXXshbpFcHFSNJQpis7yJ2liNFY3naNB+T0k+zDpedi90o/xV+4t1F9Cx+HxwAAAABJRU5ErkJggg=="

/***/ }

});