webpackJsonp([26],{

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
	  "data-v-269393c3",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishubu\\jiayou_h5\\src\\views\\home\\children2\\yaoqingli.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] yaoqingli.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-269393c3", Component.options)
	  } else {
	    hotAPI.reload("data-v-269393c3", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 193:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 194:
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

	exports.default = {
		data: function data() {
			return {};
		},

		computed: {},
		methods: {},
		components: {}
	};

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('section', {
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_c('header', {
	    attrs: {
	      "id": "all_header"
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "id": "back",
	      "to": "/"
	    }
	  }, [_c('i', {
	    staticClass: "iconfont icon_header"
	  })]), _vm._v(" "), _c('p', [_vm._v("邀请有礼")]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "id": "guize",
	      "to": "/yaoqingli_guize"
	    }
	  }, [_c('span', [_vm._v("奖励规则")])])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "menu"
	  }, [_vm._v("立刻邀请")]), _vm._v(" "), _c('p', {
	    attrs: {
	      "id": "footer"
	    }
	  }, [_vm._v("您已成功邀请"), _c('router-link', {
	    attrs: {
	      "id": "person",
	      "to": "/"
	    }
	  }, [_vm._v("12")]), _vm._v("人，累计获得"), _c('router-link', {
	    attrs: {
	      "id": "quan",
	      "to": "/"
	    }
	  }, [_vm._v("12")]), _vm._v("张券")], 1)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('main', {
	    staticClass: "main1"
	  }, [_c('div', {
	    staticClass: "box1"
	  }, [_c('p', {
	    staticClass: "title1"
	  }, [_c('span', [_vm._v("—")]), _vm._v(" 邀请新朋友各得 "), _c('span', [_vm._v("—")])]), _vm._v(" "), _c('p', {
	    staticClass: "title2"
	  }, [_vm._v("满99减80元券")])]), _vm._v(" "), _c('div', {
	    staticClass: "box2"
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-269393c3", module.exports)
	  }
	}

/***/ }

});