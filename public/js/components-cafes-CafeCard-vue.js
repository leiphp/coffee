(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-cafes-CafeCard-vue"],{

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/event-bus.js":
/*!***********************************!*\
  !*** ./resources/js/event-bus.js ***!
  \***********************************/
/*! exports provided: EventBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBus", function() { return EventBus; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var EventBus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();

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