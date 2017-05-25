webpackJsonp([70],{

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(400)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(401),
	  /* template */
	  __webpack_require__(402),
	  /* scopeId */
	  "data-v-4b1aa099",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\myhome\\children\\myYouhui\\guoqi.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] guoqi.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4b1aa099", Component.options)
	  } else {
	    hotAPI.reload("data-v-4b1aa099", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 400:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 401:
/***/ function(module, exports) {

	"use strict";

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

	exports.default = {
		data: function data() {
			return {
				headTit: {
					//						title: '我的关注',
					//						back: 'ok',
				}
			};
		},

		computed: {},
		methods: {},
		components: {}
	};

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('section', {
	    staticClass: "gq_main",
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_c('h1', [_vm._v("已过期")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4b1aa099", module.exports)
	  }
	}

/***/ }

});