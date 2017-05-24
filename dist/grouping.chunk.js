webpackJsonp([2],{

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

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(62)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(63),
	  /* template */
	  __webpack_require__(64),
	  /* scopeId */
	  "data-v-76b45466",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\group\\grouping.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] grouping.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-76b45466", Component.options)
	  } else {
	    hotAPI.reload("data-v-76b45466", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 62:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 63:
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

	exports.default = {
		data: function data() {
			return {
				headTit: {
					title: '家有在线'
				}
			};
		},

		computed: {},
		methods: {
			callback: function callback(e) {
				//					$(".checked ").css("border-bottom","2px solid transparent")
				//					$(".checked").css("color","#333")
				//					$(e.target).css("color","#d1311b")
				//					$(e.target).css('border-bottom',"2px solid #d1311b")
			}
		},
		components: {
			//"nvHead": require('../../components/header.vue'),
			"nvFooter": __webpack_require__(54)
		}
	};

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('section', {
	    staticClass: "group_main",
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_c('header', [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "contentBox"
	  }, [_c('div', {
	    staticClass: "tabs",
	    on: {
	      "click": _vm.callback
	    }
	  }, [_c('p', [_c('router-link', {
	    staticClass: "checked classify_name",
	    attrs: {
	      "to": "/grouping/classify"
	    }
	  }, [_vm._v("分类")])], 1), _vm._v(" "), _c('p', [_c('router-link', {
	    staticClass: "checked",
	    attrs: {
	      "to": "/grouping/region"
	    }
	  }, [_vm._v("地区")])], 1)])])]), _vm._v(" "), _c('router-view')], 1), _vm._v(" "), _c('nv-footer')], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "searchBox"
	  }, [_c('div', {
	    staticClass: "inputbox"
	  }, [_c('input', {
	    attrs: {
	      "type": "text",
	      "placeholder": "搜索你想要的商品"
	    }
	  }), _vm._v(" "), _c('i', {
	    staticClass: "iconfont icon-search"
	  }), _vm._v(" "), _c('img', {
	    staticClass: "yezi",
	    attrs: {
	      "src": __webpack_require__(65),
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('i', {
	    staticClass: "iconfont icon-xiaoxi xiaoxi"
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-76b45466", module.exports)
	  }
	}

/***/ },

/***/ 65:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MjJCNUEwMTA0NzUxMUU3OTBDOUVDMTA2NjZBRDk1RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MjJCNUEwMjA0NzUxMUU3OTBDOUVDMTA2NjZBRDk1RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyMkI1OUZGMDQ3NTExRTc5MEM5RUMxMDY2NkFEOTVGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgyMkI1QTAwMDQ3NTExRTc5MEM5RUMxMDY2NkFEOTVGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uk31YwAAAaNJREFUeNrMlE0oBFEcwHfGLiXJR3tx2FJKko+DlK+UxCqRgw03nORg71zUli0ODk5qb25Csr4ObhubmziizU0pxZbyld+rR9O0M96bkH/95j9vev/3e2/mzTN8ROygNZ/UBdVgwAOcw8Vc+PjJpxGM5ScNQgTaoQKysAZRgw4hbo6gKkf9M+xDHHFaQTZEWoaQQ5e4yWXBQSYiX872hMESUOQii5E2XWQixoSwT/FtTUCKgYM5ZJOkWYUxQkJYqvGJGiCJoMAiKyMtKdbfm3KD6EQzzFvaUShRrN0Sm+aQmx5N6QvUwDVkvvluX6uDRrHCVZ9+BGAGahVldxBmp9+YXDZo7HmQjkCbQr8UtOA5FQ1TPhyFtKYwKOuc4grGoRPZ5edDw7LbCkkrspPOtwxY2u8g9kQCthG92guMHP9UL2kR6jTESbEDYRfJrVtHw+HUEK+6H6agG/wuY+wgGVCdmaFwPpaThuUEOqDY1iWCcP3HhDZ5HqlenjhNMC3+LYRnvyK0ycVB/giVCDOqdaZXIZKslzrPQhlvfy3M/vsVfggwAO0nbQifCz4qAAAAAElFTkSuQmCC"

/***/ }

});