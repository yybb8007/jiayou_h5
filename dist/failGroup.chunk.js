webpackJsonp([73],{

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(413)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(414),
	  /* template */
	  __webpack_require__(415),
	  /* scopeId */
	  "data-v-62c0b7cf",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishu\\jiayou_h5\\src\\views\\myhome\\children\\myGroup\\failGroup.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] failGroup.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-62c0b7cf", Component.options)
	  } else {
	    hotAPI.reload("data-v-62c0b7cf", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 413:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 414:
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

	exports.default = {
		data: function data() {
			return {
				headTit: {}
			};
		},

		computed: {},
		methods: {},
		components: {}
	};

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('section', {
	    staticClass: "sy_main",
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_c('h1', [_vm._v("失败团")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-62c0b7cf", module.exports)
	  }
	}

/***/ }

});