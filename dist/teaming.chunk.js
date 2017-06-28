webpackJsonp([3],{

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(55)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(56),
	  /* template */
	  __webpack_require__(59),
	  /* scopeId */
	  "data-v-33ad5bea",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishu\\jiayou_h5\\src\\components\\footer.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] footer.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-33ad5bea", Component.options)
	  } else {
	    hotAPI.reload("data-v-33ad5bea", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 55:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _utils = __webpack_require__(57);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//加载公用函数
	exports.default = {
		//	props: ['footerType'],
		data: function data() {
			return {
				items: [{
					name: '首页',
					link: '/home',
					iconclass: ' icon-liwu1',
					show: ''
				}, {
					name: '分类',
					link: '/grouping/classify',
					iconclass: ' icon-fenlei1',
					show: ''
				}, {
					name: '拼拼',
					link: '/teaming',
					iconclass: ' icon-fenzu',
					show: ''
				}, {
					name: '购物车',
					link: '/shopping',
					iconclass: ' icon-tubiao4',
					show: ''
				}, {
					name: '我的家',
					link: '/myhome',
					iconclass: ' icon-gerenzhongxin',
					show: ''
				}]
			};
		}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _env = __webpack_require__(58);

	var _env2 = _interopRequireDefault(_env);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getCheck = {
		checkEmail: function checkEmail(val) {
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (filter.test(val)) {
				return true;
			} else {
				return false;
			}
		},
		checkPhone: function checkPhone(val) {
			var filter = /^[1][34578][0-9]{9}$/;

			if (filter.test(val)) {
				return true;
			} else {
				return false;
			}
		},
		checkPassword: function checkPassword(val) {
			var filter = /^[0-9A-Za-z]{6,20}$/;

			if (filter.test(val)) {
				return true;
			} else {
				return false;
			}
		},
		checkIOS: function checkIOS() {
			//判断是否IOS或者安卓
			var u = navigator.userAgent;
			//var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
			if (isiOS) {
				return true;
			} else {
				return false;
			}
		},
		checkWechat: function checkWechat() {
			var ua = window.navigator.userAgent.toLowerCase();
			return ua.match(/MicroMessenger/i) == 'micromessenger';
		}
	};
	exports.getCheck = getCheck;

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('footer')
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-33ad5bea", module.exports)
	  }
	}

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(67)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(68),
	  /* template */
	  __webpack_require__(73),
	  /* scopeId */
	  "data-v-553e2e6d",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishu\\jiayou_h5\\src\\views\\team\\teaming.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] teaming.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-553e2e6d", Component.options)
	  } else {
	    hotAPI.reload("data-v-553e2e6d", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 67:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 68:
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
	//

	exports.default = {
		data: function data() {
			return {
				headTit: {
					title: '拼拼'
				}
			};
		},

		computed: {},
		methods: {},
		components: {
			"nvHead": __webpack_require__(69),
			"nvFooter": __webpack_require__(54)
		},
		mounted: function mounted() {
			this.$http.jsonp('https://a1.t.jiayou9.com/page/index?debug=1&format=jsonp').then(function (res) {
				this.data = res.body.data;
				console.log(res.body.data);
				console.log(res.body.data[8]);
				// 轮播图
				var mySwiper = new Swiper('.swiper-container', {
					direction: 'horizontal',
					autoplay: 2000,
					loop: true,
					observer: true,
					// 分页器
					pagination: '.swiper-pagination'
				});
			});
		}
	};

/***/ },

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
	Component.options.__file = "C:\\jishu\\jiayou_h5\\src\\components\\header.vue"
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

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('nv-head', {
	    attrs: {
	      "page-name": _vm.headTit.title,
	      "back-type": _vm.headTit.back
	    }
	  }), _vm._v(" "), _c('section', {
	    staticClass: "sy_main",
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_vm._m(0), _vm._v(" "), _c('ul', {
	    staticClass: "tm_nav"
	  }, [_c('li', [_c('router-link', {
	    attrs: {
	      "to": "/teaming/pinpin"
	    }
	  }, [_vm._v("推荐")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/teaming/pinpin"
	    }
	  }, [_vm._v("饮品")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/teaming/pinpin"
	    }
	  }, [_vm._v("生鲜")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/teaming/pinpin"
	    }
	  }, [_vm._v("美妆")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/teaming/pinpin"
	    }
	  }, [_vm._v("家纺")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/teaming/pinpin"
	    }
	  }, [_vm._v("工艺")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/teaming/pinpin"
	    }
	  }, [_vm._v("母婴")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/teaming/pinpin"
	    }
	  }, [_vm._v("医疗")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/teaming/pinpin"
	    }
	  }, [_vm._v("美食")])], 1)]), _vm._v(" "), _c('router-view')], 1), _vm._v(" "), _c('nv-footer')], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "swiper-container",
	    attrs: {
	      "id": "jf_banner"
	    }
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, [_c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(74),
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(75),
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(76),
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(77),
	      "alt": ""
	    }
	  })])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-553e2e6d", module.exports)
	  }
	}

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/jiafang.jpg?v=b2217c7c";

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/lunbo2.jpg?v=151beda8";

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/lunbo3.jpg?v=27277db9";

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/lunbo4.jpg?v=8b249a10";

/***/ }

});