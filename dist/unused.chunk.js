webpackJsonp([69],{

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(387)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(388),
	  /* template */
	  __webpack_require__(389),
	  /* scopeId */
	  "data-v-3b76fb06",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\myhome\\children\\myYouhui\\unused.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] unused.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3b76fb06", Component.options)
	  } else {
	    hotAPI.reload("data-v-3b76fb06", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 387:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 388:
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('section', {
	    staticClass: "wsy_main",
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_c('ul', [_c('li', [_c('div', {
	    staticClass: "main_img"
	  }, [_c('h1', [_vm._v("￥100元")]), _vm._v(" "), _c('p', [_vm._v("满100元可使用")])]), _vm._v(" "), _c('div', {
	    staticClass: "main_message"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_c('span', [_vm._v("折扣")]), _vm._v("仅可购买酒水使用\n\t\t\t\t\t")]), _vm._v(" "), _c('p', {
	    staticClass: "use"
	  }, [_vm._v("\n\t\t\t\t\t\t2016.11.11-2016.12.12\n\t\t\t\t\t\t"), _c('span', [_vm._v("立即购买")])]), _vm._v(" "), _c('p', {
	    staticClass: "message"
	  }, [_vm._v("\n\t\t\t\t\t\t详细信息\n\t\t\t\t\t\t"), _c('span')])])])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3b76fb06", module.exports)
	  }
	}

/***/ }

});