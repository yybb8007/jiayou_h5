webpackJsonp([28],{

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(209)

	var Component = __webpack_require__(42)(
	  /* script */
	  __webpack_require__(210),
	  /* template */
	  __webpack_require__(211),
	  /* scopeId */
	  "data-v-1f84c673",
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\jishu\\jiayou_h5\\src\\views\\home\\children2\\yaoqingli_lingquan.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] yaoqingli_lingquan.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1f84c673", Component.options)
	  } else {
	    hotAPI.reload("data-v-1f84c673", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 209:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 210:
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

	exports.default = {
		data: function data() {
			return {};
		},

		computed: {},
		methods: {},
		components: {},
		mounted: function mounted() {
			var str = location.href; // 取得整个地址栏
			var yq_name = str.split('user_id=')[1];
			console.log(yq_name);
			localStorage.setItem("yq_name", yq_name);
			//				var h = document.getElementById("want").getAttribute("href") + yq_name + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
			//					$("#want").attr("href",h);
			//					console.log(h)
		}
	};

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('section', {
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_c('main', {
	    staticClass: "main1"
	  }), _vm._v(" "), _c('a', {
	    staticClass: "menu",
	    attrs: {
	      "id": "want",
	      "href": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6ffe339870612437&redirect_uri=http%3A%2F%2Fm.t.jiayou9.com%2F%23%2Fyaoqingli_lingquan1&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
	    }
	  }, [_vm._v("点击领取")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1f84c673", module.exports)
	  }
	}

/***/ }

});