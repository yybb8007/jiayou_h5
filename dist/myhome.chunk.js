webpackJsonp([5],{

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
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\components\\footer.vue"
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

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(83)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(84),
	  /* template */
	  __webpack_require__(85),
	  /* scopeId */
	  "data-v-1ee78745",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\myhome\\myhome.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] myhome.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1ee78745", Component.options)
	  } else {
	    hotAPI.reload("data-v-1ee78745", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 83:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 84:
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
					title: '家有在线'
				}
			};
		},

		computed: {},
		methods: {},
		components: {
			"nvHead": __webpack_require__(69),
			"nvFooter": __webpack_require__(54)
		}
	};

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('section', {
	    staticClass: "sy_main",
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_c('div', {
	    staticClass: "myhomeTop"
	  }, [_c('div', {
	    staticClass: "setting"
	  }, [_c('router-link', {
	    attrs: {
	      "to": "/shezhi"
	    }
	  }, [_c('i', {
	    staticClass: "iconfont icon-shezhi"
	  })]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/xiaoxi"
	    }
	  }, [_c('i', {
	    staticClass: "iconfont icon-xiaoxi"
	  })])], 1), _vm._v(" "), _c('div', {
	    staticClass: "info"
	  }, [_c('div', {
	    staticClass: "photoImg"
	  }, [_vm._v("头像")]), _vm._v(" "), _c('p', [_c('router-link', {
	    attrs: {
	      "to": "/zhuce"
	    }
	  }, [_vm._v("登录/注册")])], 1)])]), _vm._v(" "), _c('div', {
	    staticClass: "mylayer"
	  }, [_c('div', {
	    staticClass: "layer1"
	  }, [_c('i', {
	    staticClass: "iconfont icon-dingdan dingdan"
	  }), _vm._v(" "), _c('h2', [_vm._v("我的订单")]), _vm._v(" "), _c('p', {
	    staticClass: "allorder"
	  }, [_c('router-link', {
	    attrs: {
	      "to": "/myOrder/allOrder"
	    }
	  }, [_vm._v("查看全部订单")])], 1), _vm._v(" "), _c('i', {
	    staticClass: "iconfont icon-xiangyou"
	  })]), _vm._v(" "), _c('ul', {
	    staticClass: "layer2"
	  }, [_c('router-link', {
	    attrs: {
	      "to": "/myOrder/obligation"
	    }
	  }, [_c('li', [_c('i', {
	    staticClass: "iconfont icon-icon1460188752552"
	  }), _vm._v(" "), _c('p', [_vm._v("待付款")])])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/myOrder/goods"
	    }
	  }, [_c('li', [_c('i', {
	    staticClass: "iconfont icon-yanshichuli"
	  }), _vm._v(" "), _c('p', [_vm._v("待收货")])])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/myOrder"
	    }
	  }, [_c('li', [_c('i', {
	    staticClass: "iconfont icon-daipingjia"
	  }), _vm._v(" "), _c('p', [_vm._v("待评价")])])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/myOrder"
	    }
	  }, [_c('li', [_c('i', {
	    staticClass: "iconfont icon-shouhou"
	  }), _vm._v(" "), _c('p', [_vm._v("售后/客服")])])])], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "mylayer mt16"
	  }, [_c('router-link', {
	    attrs: {
	      "to": "/myYouhui"
	    }
	  }, [_c('div', {
	    staticClass: "layer1"
	  }, [_c('i', {
	    staticClass: "iconfont icon-youhuiquan1 listIcon lightred"
	  }), _vm._v(" "), _c('h2', [_vm._v("我的优惠劵")]), _vm._v(" "), _c('p', {
	    staticClass: "numb"
	  }, [_vm._v("0")]), _vm._v(" "), _c('i', {
	    staticClass: "iconfont icon-xiangyou"
	  })])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/myGroup/allGroup"
	    }
	  }, [_c('div', {
	    staticClass: "layer1"
	  }, [_c('i', {
	    staticClass: "iconfont icon-fenzu listIcon lightblue"
	  }), _vm._v(" "), _c('h2', [_vm._v("我的团")]), _vm._v(" "), _c('p', {
	    staticClass: "numb"
	  }, [_vm._v("0")]), _vm._v(" "), _c('i', {
	    staticClass: "iconfont icon-xiangyou"
	  })])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/myGuanzhu"
	    }
	  }, [_c('div', {
	    staticClass: "layer1"
	  }, [_c('i', {
	    staticClass: "iconfont icon-daipingjia1 listIcon lightpurple"
	  }), _vm._v(" "), _c('h2', [_vm._v("我的关注")]), _vm._v(" "), _c('p', {
	    staticClass: "numb"
	  }, [_vm._v("0")]), _vm._v(" "), _c('i', {
	    staticClass: "iconfont icon-xiangyou"
	  })])])], 1), _vm._v(" "), _c('div', {
	    staticClass: "mylayer mt16"
	  }, [_c('router-link', {
	    attrs: {
	      "to": "/myKefu"
	    }
	  }, [_c('div', {
	    staticClass: "layer1"
	  }, [_c('i', {
	    staticClass: "iconfont icon-icon052 listIcon lightgren"
	  }), _vm._v(" "), _c('h2', [_vm._v("家的客服")]), _vm._v(" "), _c('i', {
	    staticClass: "iconfont icon-xiangyou"
	  })])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/myYijian"
	    }
	  }, [_c('div', {
	    staticClass: "layer1"
	  }, [_c('i', {
	    staticClass: "iconfont icon-yijianfankui listIcon lightpurple2"
	  }), _vm._v(" "), _c('h2', [_vm._v("意见反馈")]), _vm._v(" "), _c('i', {
	    staticClass: "iconfont icon-xiangyou"
	  })])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/myJiayou"
	    }
	  }, [_c('div', {
	    staticClass: "layer1"
	  }, [_c('i', {
	    staticClass: "iconfont icon-jia listIcon lightred"
	  }), _vm._v(" "), _c('h2', [_vm._v("关于家有")]), _vm._v(" "), _c('i', {
	    staticClass: "iconfont icon-xiangyou"
	  })])])], 1)]), _vm._v(" "), _c('nv-footer')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1ee78745", module.exports)
	  }
	}

/***/ }

});