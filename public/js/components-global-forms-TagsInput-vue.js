(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-global-forms-TagsInput-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/forms/TagsInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/forms/TagsInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config.js */ "./resources/js/config.js");
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../event-bus.js */ "./resources/js/event-bus.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
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
  props: ['unique'],
  data: function data() {
    return {
      currentTag: '',
      tagsArray: [],
      tagSearchResults: [],
      duplicateFlag: false,
      searchSelectedIndex: -1,
      pauseSearch: false
    };
  },
  mounted: function mounted() {
    _event_bus_js__WEBPACK_IMPORTED_MODULE_1__["EventBus"].$on('clear-tags', function (unique) {
      this.currentTag = '';
      this.tagsArray = [];
      this.tagSearchResults = [];
      this.duplicateFlag = false;
      this.searchSelectedIndex = -1;
      this.pauseSearch = false;
    }.bind(this));
  },
  computed: {
    showAutocomplete: function showAutocomplete() {
      return this.tagSearchResults.length !== 0;
    }
  },
  methods: {
    // 从下拉列表选择自动提示标签
    selectTag: function selectTag(tag) {
      // 检查标签数组中是否已存在该标签
      if (!this.checkDuplicates(tag)) {
        tag = this.cleanTagName(tag);
        this.tagsArray.push(tag); // 在事件总线中广播标签值变动

        _event_bus_js__WEBPACK_IMPORTED_MODULE_1__["EventBus"].$emit('tags-edited', {
          unique: this.unique,
          tags: this.tagsArray
        }); // 重置标签输入框中的标签

        this.resetInputs();
      } else {
        this.duplicateFlag = true;
      }
    },
    // 新增标签
    addNewTag: function addNewTag() {
      // 判断输入标签是否已存在
      if (!this.checkDuplicates(this.currentTag)) {
        var newTagName = this.cleanTagName(this.currentTag);
        this.tagsArray.push(newTagName); // 在事件总线中广播标签值变动

        _event_bus_js__WEBPACK_IMPORTED_MODULE_1__["EventBus"].$emit('tags-edited', {
          unique: this.unique,
          tags: this.tagsArray
        });
        this.resetInputs();
      } else {
        this.duplicateFlag = true;
      }
    },
    // 删除标签
    removeTag: function removeTag(tagIndex) {
      // 从标签数组中删除当前标签
      this.tagsArray.splice(tagIndex, 1); // 在事件总线中广播标签值变动

      _event_bus_js__WEBPACK_IMPORTED_MODULE_1__["EventBus"].$emit('tags-edited', {
        unique: this.unique,
        tags: this.tagsArray
      });
    },
    // 从下拉列表中选择自动提示的标签
    changeIndex: function changeIndex(direction) {
      this.pauseSearch = true;

      if (direction === 'up' && this.searchSelectedIndex - 1 > -1) {
        this.searchSelectedIndex = this.searchSelectedIndex - 1;
        this.currentTag = this.tagSearchResults[this.searchSelectedIndex].tag;
      }

      if (direction === 'down' && this.searchSelectedIndex + 1 <= this.tagSearchResults.length - 1) {
        this.searchSelectedIndex = this.searchSelectedIndex + 1;
        this.currentTag = this.tagSearchResults[this.searchSelectedIndex].tag;
      }
    },
    // 根据搜索词查询后端自动提示 API 接口并将结果展示到下拉列表
    // searchTags() {
    //     if (this.currentTag.length > 2 && !this.pauseSearch) {
    //         this.searchSelectedIndex = -1;
    //         axios.get(ROAST_CONFIG.API_URL + '/tags', {
    //             params: {
    //                 search: this.currentTag
    //             }
    //         }).then(function (response) {
    //             console.log('tags is:',response);
    //             this.tagSearchResults = response.data;
    //         }.bind(this));
    //     }
    // },
    // 引入防抖动函数，在 300ms 后执行匿名函数内代码
    searchTags: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.debounce(function (e) {
      if (this.currentTag.length > 2 && !this.pauseSearch) {
        this.searchSelectedIndex = -1;
        axios.get(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/tags', {
          params: {
            search: this.currentTag
          }
        }).then(function (response) {
          this.tagSearchResults = response.data;
        }.bind(this));
      }
    }, 300),
    // 检查标签是否重复
    checkDuplicates: function checkDuplicates(tagName) {
      tagName = this.cleanTagName(tagName);
      return this.tagsArray.indexOf(tagName) > -1;
    },
    // 清理标签，移除不必要的空格和字符
    cleanTagName: function cleanTagName(tagName) {
      var cleanTag = tagName.trim();
      return cleanTag;
    },
    // 重置标签输入框
    resetInputs: function resetInputs() {
      this.currentTag = '';
      this.tagSearchResults = [];
      this.duplicateFlag = false;
      this.searchSelectedIndex = -1;
      this.pauseSearch = false;
    },
    // 将焦点移到标签输入框
    focusTagInput: function focusTagInput() {
      document.getElementById(this.unique).focus();
    },
    // 处理标签删除
    handleDelete: function handleDelete() {
      this.duplicateFlag = false;
      this.pauseSearch = false;
      this.searchSelectedIndex = -1; // 如果当前标签没有任何数据则移除最后一个标签

      if (this.currentTag.length === 0) {
        this.tagsArray.splice(this.tagsArray.length - 1, 1);
        _event_bus_js__WEBPACK_IMPORTED_MODULE_1__["EventBus"].$emit('tags-edited', {
          unique: this.unique,
          tags: this.tagsArray
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/forms/TagsInput.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/forms/TagsInput.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.tags-input-container {\n  position: relative;\n}\ndiv.tags-input-container div.tags-input {\n  display: table;\n  box-sizing: border-box;\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n  padding-top: 4px;\n  border: 1px solid #cacaca;\n  border-radius: 0;\n  background-color: #FFFFFF;\n  box-shadow: inset 0 1px 2px rgba(17, 17, 17, 0.1);\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #111111;\n}\ndiv.tags-input-container div.tags-input div.selected-tag {\n  border: 1px solid #7F5F2A;\n  background: #FFDBA0;\n  font-size: 18px;\n  color: #7F5F2A;\n  padding: 3px;\n  margin: 5px;\n  float: left;\n  border-radius: 3px;\n}\ndiv.tags-input-container div.tags-input div.selected-tag span.remove-tag {\n  margin: 0 0 0 5px;\n  padding: 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n  vertical-align: middle;\n  color: #7F5F2A;\n}\ndiv.tags-input-container div.tags-input input[type=text].new-tag-input {\n  border: 0px;\n  margin: 0px;\n  float: left;\n  width: auto;\n  min-width: 100px;\n  box-shadow: none;\n  margin: 5px;\n}\ndiv.tags-input-container div.tags-input input[type=text].new-tag-input.duplicate-warning {\n  color: red;\n}\ndiv.tags-input-container div.tags-input input[type=text].new-tag-input:focus {\n  box-shadow: none;\n}\ndiv.tags-input-container div.tag-autocomplete {\n  position: absolute;\n  background-color: white;\n  width: 100%;\n  padding: 5px 0;\n  z-index: 99999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\ndiv.tags-input-container div.tag-autocomplete div.tag-search-result {\n  padding: 5px 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #7F5F2A;\n  font-size: 14px;\n  background-color: white;\n}\ndiv.tags-input-container div.tag-autocomplete div.tag-search-result:hover {\n  background-color: #FFDBA0;\n}\ndiv.tags-input-container div.tag-autocomplete div.tag-search-result.selected-search-index {\n  background-color: #FFDBA0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/forms/TagsInput.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/forms/TagsInput.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsInput.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/forms/TagsInput.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/forms/TagsInput.vue?vue&type=template&id=1aefd850&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/forms/TagsInput.vue?vue&type=template&id=1aefd850& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "tags-input-container" }, [
    _c("label", [_vm._v("Tags")]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "tags-input",
        on: {
          click: function($event) {
            return _vm.focusTagInput()
          }
        }
      },
      [
        _vm._l(_vm.tagsArray, function(selectedTag, key) {
          return _c("div", { staticClass: "selected-tag" }, [
            _vm._v("\n            " + _vm._s(selectedTag) + "\n            "),
            _c(
              "span",
              {
                staticClass: "remove-tag",
                on: {
                  click: function($event) {
                    return _vm.removeTag(key)
                  }
                }
              },
              [_vm._v("×")]
            )
          ])
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.currentTag,
              expression: "currentTag"
            }
          ],
          staticClass: "new-tag-input",
          class: { "duplicate-warning": _vm.duplicateFlag },
          attrs: { type: "text", id: _vm.unique, placeholder: "Add a tag" },
          domProps: { value: _vm.currentTag },
          on: {
            keyup: [
              _vm.searchTags,
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.addNewTag($event)
              }
            ],
            keydown: [
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "up", 38, $event.key, [
                    "Up",
                    "ArrowUp"
                  ])
                ) {
                  return null
                }
                return _vm.changeIndex("up")
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                    "Backspace",
                    "Delete",
                    "Del"
                  ])
                ) {
                  return null
                }
                return _vm.handleDelete($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "down", 40, $event.key, [
                    "Down",
                    "ArrowDown"
                  ])
                ) {
                  return null
                }
                return _vm.changeIndex("down")
              }
            ],
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.currentTag = $event.target.value
            }
          }
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showAutocomplete,
            expression: "showAutocomplete"
          }
        ],
        staticClass: "tag-autocomplete"
      },
      _vm._l(_vm.tagSearchResults, function(tag, key) {
        return _c(
          "div",
          {
            staticClass: "tag-search-result",
            class: { "selected-search-index": _vm.searchSelectedIndex === key },
            on: {
              click: function($event) {
                return _vm.selectTag(tag.name)
              }
            }
          },
          [_vm._v(_vm._s(tag.name) + "\n        ")]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

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

/***/ "./resources/js/components/global/forms/TagsInput.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/global/forms/TagsInput.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagsInput_vue_vue_type_template_id_1aefd850___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagsInput.vue?vue&type=template&id=1aefd850& */ "./resources/js/components/global/forms/TagsInput.vue?vue&type=template&id=1aefd850&");
/* harmony import */ var _TagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagsInput.vue?vue&type=script&lang=js& */ "./resources/js/components/global/forms/TagsInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TagsInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagsInput.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/global/forms/TagsInput.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagsInput_vue_vue_type_template_id_1aefd850___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TagsInput_vue_vue_type_template_id_1aefd850___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/forms/TagsInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/forms/TagsInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/global/forms/TagsInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/forms/TagsInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/forms/TagsInput.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/global/forms/TagsInput.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsInput.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/forms/TagsInput.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/global/forms/TagsInput.vue?vue&type=template&id=1aefd850&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/global/forms/TagsInput.vue?vue&type=template&id=1aefd850& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_template_id_1aefd850___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsInput.vue?vue&type=template&id=1aefd850& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/forms/TagsInput.vue?vue&type=template&id=1aefd850&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_template_id_1aefd850___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_template_id_1aefd850___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);