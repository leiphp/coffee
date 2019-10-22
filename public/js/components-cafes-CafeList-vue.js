(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-cafes-CafeList-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cafes/CafeList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cafes_CafeCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/cafes/CafeCard.vue */ "./resources/js/components/cafes/CafeCard.vue");
/* harmony import */ var _components_cafes_ListFilters_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/cafes/ListFilters.vue */ "./resources/js/components/cafes/ListFilters.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      shownCount: 1
    };
  },
  components: {
    CafeCard: _components_cafes_CafeCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ListFilters: _components_cafes_ListFilters_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    cafes: function cafes() {
      return this.$store.getters.getCafes;
    },
    cafesView: function cafesView() {
      return this.$store.getters.getCafesView;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeList.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cafes/CafeList.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#cafe-list-container {\n  position: absolute;\n  top: 75px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background-color: white;\n  overflow-y: scroll;\n}\ndiv#cafe-list-container div.cafe-grid-container {\n  max-width: 900px;\n  margin: auto;\n}\n\n/* Small only */\n@media screen and (max-width: 39.9375em) {\ndiv.cafe-grid-container {\n    height: inherit;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeList.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cafes/CafeList.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CafeList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeList.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeList.vue?vue&type=template&id=787bcc7f&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cafes/CafeList.vue?vue&type=template&id=787bcc7f& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "cafe-list-container" } }, [
    _c(
      "div",
      { staticClass: "grid-x grid-padding-x cafe-grid-container" },
      [_c("list-filters")],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "grid-x grid-padding-x cafe-grid-container",
        attrs: { id: "cafe-grid" }
      },
      [
        _vm._l(_vm.cafes, function(cafe) {
          return _c("cafe-card", { key: cafe.id, attrs: { cafe: cafe } })
        }),
        _vm._v(" "),
        _c("div", { staticClass: "large-12 medium-12 small-12 cell" }, [
          _vm.shownCount === 0
            ? _c("span", { staticClass: "no-results" }, [_vm._v("No Results")])
            : _vm._e()
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cafes/CafeList.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/cafes/CafeList.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CafeList_vue_vue_type_template_id_787bcc7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CafeList.vue?vue&type=template&id=787bcc7f& */ "./resources/js/components/cafes/CafeList.vue?vue&type=template&id=787bcc7f&");
/* harmony import */ var _CafeList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CafeList.vue?vue&type=script&lang=js& */ "./resources/js/components/cafes/CafeList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CafeList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CafeList.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/cafes/CafeList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CafeList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CafeList_vue_vue_type_template_id_787bcc7f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CafeList_vue_vue_type_template_id_787bcc7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cafes/CafeList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cafes/CafeList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/cafes/CafeList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CafeList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cafes/CafeList.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/cafes/CafeList.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CafeList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/cafes/CafeList.vue?vue&type=template&id=787bcc7f&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/cafes/CafeList.vue?vue&type=template&id=787bcc7f& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeList_vue_vue_type_template_id_787bcc7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CafeList.vue?vue&type=template&id=787bcc7f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeList.vue?vue&type=template&id=787bcc7f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeList_vue_vue_type_template_id_787bcc7f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeList_vue_vue_type_template_id_787bcc7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/filters/CafeBrewMethodsFilter.js":
/*!**************************************************************!*\
  !*** ./resources/js/mixins/filters/CafeBrewMethodsFilter.js ***!
  \**************************************************************/
/*! exports provided: CafeBrewMethodsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeBrewMethodsFilter", function() { return CafeBrewMethodsFilter; });
var CafeBrewMethodsFilter = {
  methods: {
    processCafeBrewMethodsFilter: function processCafeBrewMethodsFilter(cafe, brewMethods) {
      // 如果冲泡方法不为空，则进行处理
      if (brewMethods.length > 0) {
        var cafeBrewMethods = []; // 将咖啡店所有冲泡方法都推送到 cafeBrewMethods 数组

        for (var i = 0; i < cafe.brew_methods.length; i++) {
          cafeBrewMethods.push(cafe.brew_methods[i].method);
        } // 遍历所有待处理冲泡方法，如果在 cafeBrewMethods 数组中则返回 true


        for (var i = 0; i < brewMethods.length; i++) {
          if (cafeBrewMethods.indexOf(brewMethods[i]) > -1) {
            return true;
          }
        } // 如果都不在 cafeBrewMethods 数组中则返回 false


        return false;
      } else {
        return true;
      }
    }
  }
};

/***/ }),

/***/ "./resources/js/mixins/filters/CafeHasMatchaFilter.js":
/*!************************************************************!*\
  !*** ./resources/js/mixins/filters/CafeHasMatchaFilter.js ***!
  \************************************************************/
/*! exports provided: CafeHasMatchaFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeHasMatchaFilter", function() { return CafeHasMatchaFilter; });
var CafeHasMatchaFilter = {
  methods: {
    processCafeHasMatchaFilter: function processCafeHasMatchaFilter(cafe) {
      /*
        Checks to see if the cafe has matcha
      */
      if (cafe.matcha === 1) {
        return true;
      } else {
        return false;
      }
    }
  }
};

/***/ }),

/***/ "./resources/js/mixins/filters/CafeHasTeaFilter.js":
/*!*********************************************************!*\
  !*** ./resources/js/mixins/filters/CafeHasTeaFilter.js ***!
  \*********************************************************/
/*! exports provided: CafeHasTeaFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeHasTeaFilter", function() { return CafeHasTeaFilter; });
var CafeHasTeaFilter = {
  methods: {
    processCafeHasTeaFilter: function processCafeHasTeaFilter(cafe) {
      /*
        Checks to see if the cafe has tea
      */
      if (cafe.tea === 1) {
        return true;
      } else {
        return false;
      }
    }
  }
};

/***/ }),

/***/ "./resources/js/mixins/filters/CafeInCityFilter.js":
/*!*********************************************************!*\
  !*** ./resources/js/mixins/filters/CafeInCityFilter.js ***!
  \*********************************************************/
/*! exports provided: CafeInCityFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeInCityFilter", function() { return CafeInCityFilter; });
var CafeInCityFilter = {
  methods: {
    processCafeInCityFilter: function processCafeInCityFilter(cafe, cityID) {
      /*
        Checks to see if the cafe has tea
      */
      if (cafe.city_id === cityID) {
        return true;
      } else {
        return false;
      }
    }
  }
};

/***/ }),

/***/ "./resources/js/mixins/filters/CafeSubscriptionFilter.js":
/*!***************************************************************!*\
  !*** ./resources/js/mixins/filters/CafeSubscriptionFilter.js ***!
  \***************************************************************/
/*! exports provided: CafeSubscriptionFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeSubscriptionFilter", function() { return CafeSubscriptionFilter; });
var CafeSubscriptionFilter = {
  methods: {
    /*
      Determines if the cafe has a subscription or not.
    */
    processCafeSubscriptionFilter: function processCafeSubscriptionFilter(cafe) {
      if (cafe.company.subscription === 1) {
        return true;
      } else {
        return false;
      }
    }
  }
};

/***/ }),

/***/ "./resources/js/mixins/filters/CafeTextFilter.js":
/*!*******************************************************!*\
  !*** ./resources/js/mixins/filters/CafeTextFilter.js ***!
  \*******************************************************/
/*! exports provided: CafeTextFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeTextFilter", function() { return CafeTextFilter; });
var CafeTextFilter = {
  methods: {
    processCafeTextFilter: function processCafeTextFilter(cafe, text) {
      // 文本不为空时才会处理
      if (text.length > 0) {
        // 如果咖啡店名称、位置、地址或城市与给定文本匹配，则返回 true，否则返回 false
        if (cafe.company.name.match('[^,]*' + text + '[,$]*') || cafe.location_name.match('[^,]*' + text + '[,$]*') || cafe.address.match('[^,]*' + text + '[,$]*') || cafe.city.match('[^,]*' + text + '[,$]*')) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  }
};

/***/ }),

/***/ "./resources/js/mixins/filters/CafeTypeFilter.js":
/*!*******************************************************!*\
  !*** ./resources/js/mixins/filters/CafeTypeFilter.js ***!
  \*******************************************************/
/*! exports provided: CafeTypeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeTypeFilter", function() { return CafeTypeFilter; });
var CafeTypeFilter = {
  methods: {
    processCafeTypeFilter: function processCafeTypeFilter(cafe, type) {
      switch (type) {
        case 'roasters':
          if (cafe.company.roaster === 1) {
            return true;
          } else {
            return false;
          }

          break;

        case 'cafes':
          if (cafe.company.roaster === 0) {
            return true;
          } else {
            return false;
          }

          break;

        case 'all':
          return true;
          break;
      }
    }
  }
};

/***/ }),

/***/ "./resources/js/mixins/filters/CafeUserLikeFilter.js":
/*!***********************************************************!*\
  !*** ./resources/js/mixins/filters/CafeUserLikeFilter.js ***!
  \***********************************************************/
/*! exports provided: CafeUserLikeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeUserLikeFilter", function() { return CafeUserLikeFilter; });
var CafeUserLikeFilter = {
  methods: {
    processCafeUserLikeFilter: function processCafeUserLikeFilter(cafe) {
      if (cafe.user_like_count === 1) {
        return true;
      } else {
        return false;
      }
    }
  }
};

/***/ })

}]);