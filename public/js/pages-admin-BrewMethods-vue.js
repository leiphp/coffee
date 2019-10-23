(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-BrewMethods-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/BrewMethods.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/BrewMethods.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-bus.js */ "./resources/js/event-bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      showNewMethodModal: false,
      method: '',
      icon: '',
      validations: {
        method: true,
        icon: true
      }
    };
  },
  created: function created() {
    this.$store.dispatch('loadAdminBrewMethods');
  },
  computed: {
    brewMethods: function brewMethods() {
      return this.$store.getters.getAdminBrewMethods;
    },
    brewMethodAddedStatus: function brewMethodAddedStatus() {
      return this.$store.getters.getAdminBrewMethodAddedStatus;
    }
  },
  watch: {
    'brewMethodAddedStatus': function brewMethodAddedStatus() {
      if (this.brewMethodAddedStatus === 2) {
        _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["EventBus"].$emit('show-success', {
          notification: '冲泡方法添加成功!'
        });
      }
    }
  },
  methods: {
    hideNewMethodModal: function hideNewMethodModal() {
      this.method = '';
      this.icon = '';
      this.validations.method = true;
      this.validations.icon = true;
      this.showNewMethodModal = false;
    },
    selectIcon: function selectIcon(icon) {
      this.icon = icon;
    },
    addBrewMethod: function addBrewMethod() {
      if (this.validateNewBrewMethod()) {
        this.$store.dispatch('addAdminBrewMethod', {
          method: this.method,
          icon: this.icon
        });
        this.hideNewMethodModal();
      }
    },
    validateNewBrewMethod: function validateNewBrewMethod() {
      var validBrewMethod = true;

      if (this.method === '') {
        this.validations.method = false;
        validBrewMethod = false;
      } else {
        this.validations.method = true;
      }

      if (this.icon === '') {
        this.validations.icon = false;
        validBrewMethod = false;
      } else {
        this.validations.icon = true;
      }

      return validBrewMethod;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/BrewMethods.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/BrewMethods.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#admin-brew-methods a.add-brew-method {\n  display: block;\n  width: 150px;\n  color: white;\n  background-color: #CCC;\n  text-align: center;\n  border-radius: 5px;\n  float: right;\n  height: 45px;\n  line-height: 45px;\n}\ndiv#admin-brew-methods div.new-brew-method-modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 99999;\n}\ndiv#admin-brew-methods div.new-brew-method-modal div.modal-box {\n  width: 100%;\n  max-width: 530px;\n  min-width: 320px;\n  padding: 20px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 3px rgba(50, 50, 50, 0.08);\n  border-radius: 4px;\n  font-size: 16px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  max-height: 500px;\n  overflow-y: auto;\n}\ndiv#admin-brew-methods div.new-brew-method-modal div.modal-box label {\n  font-weight: bold;\n}\ndiv#admin-brew-methods div.new-brew-method-modal div.modal-box div.icon-selection-container {\n  margin-top: 10px;\n}\ndiv#admin-brew-methods div.new-brew-method-modal div.modal-box div.new-icon-container {\n  text-align: center;\n  cursor: pointer;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  padding: 5px;\n}\ndiv#admin-brew-methods div.new-brew-method-modal div.modal-box div.new-icon-container.active {\n  background-color: #FFBE54;\n  color: white;\n}\ndiv#admin-brew-methods div.new-brew-method-modal div.modal-box div.new-icon-container img.new-icon {\n  display: block;\n  margin: auto;\n  margin-bottom: 10px;\n  height: 30px;\n}\ndiv#admin-brew-methods div.new-brew-method-modal a.add-method-button {\n  display: block;\n  width: 150px;\n  color: white;\n  background-color: #CCC;\n  text-align: center;\n  border-radius: 5px;\n  margin-top: 20px;\n  height: 45px;\n  line-height: 45px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/BrewMethods.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/BrewMethods.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./BrewMethods.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/BrewMethods.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/BrewMethods.vue?vue&type=template&id=437fd952&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/BrewMethods.vue?vue&type=template&id=437fd952& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "admin-brew-methods" } }, [
    _c("div", { staticClass: "grid-container" }, [
      _c("div", { staticClass: "grid-x" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "large-4 medium-4 cell" }, [
          _c(
            "a",
            {
              staticClass: "add-brew-method",
              on: {
                click: function($event) {
                  _vm.showNewMethodModal = true
                }
              }
            },
            [_vm._v("添加冲泡方法")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "grid-container" },
        [
          _vm._m(1),
          _vm._v(" "),
          _vm._l(_vm.brewMethods, function(method) {
            return _c("div", { staticClass: "grid-x listing" }, [
              _c("div", { staticClass: "large-1 medium-1 cell" }, [
                _c("img", { staticClass: "icon", attrs: { src: method.icon } })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "large-6 medium-6 cell" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(method.method) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "large-3 medium-3 cell" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "admin-brew-method",
                          params: { id: method.id }
                        }
                      }
                    },
                    [_vm._v("更多信息\n                    ")]
                  )
                ],
                1
              )
            ])
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showNewMethodModal,
            expression: "showNewMethodModal"
          }
        ],
        staticClass: "new-brew-method-modal",
        on: {
          click: function($event) {
            return _vm.hideNewMethodModal()
          }
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-box",
            on: {
              click: function($event) {
                $event.stopPropagation()
              }
            }
          },
          [
            _c("div", { staticClass: "grix-x" }, [
              _c("div", { staticClass: "large-12 medium-12 cell" }, [
                _c("label", [_vm._v("方法名")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.method,
                      expression: "method"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.method },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.method = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.validations.method,
                        expression: "!validations.method"
                      }
                    ],
                    staticClass: "validation"
                  },
                  [_vm._v("请输入冲泡方法名称!")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "grid-x icon-selection-container" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/aeropress.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/aeropress.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/aeropress.svg" }
                  }),
                  _vm._v("\n                    Aeropress\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/biscuit.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/biscuit.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/biscuit.svg" }
                  }),
                  _vm._v("\n                    Biscuit\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/bottle-of-water.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/bottle-of-water.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/bottle-of-water.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Bottle of Water\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/chemex.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/chemex.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/chemex.svg" }
                  }),
                  _vm._v("\n                    Chemex\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/chocolate.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/chocolate.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/chocolate.svg" }
                  }),
                  _vm._v("\n                    Chocolate\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/cinnamon.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/cinnamon.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/cinnamon.svg" }
                  }),
                  _vm._v("\n                    Cinnamon\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/clover.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/clover.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/clover.svg" }
                  }),
                  _vm._v("\n                    Clover\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffee-app.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-app.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffee-app.svg" }
                  }),
                  _vm._v("\n                    Coffee App\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffee-beans.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-beans.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffee-beans.svg" }
                  }),
                  _vm._v("\n                    Coffee Beans\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/coffee-capsules.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-capsules.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/coffee-capsules.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Coffee Capsules\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/coffee-coctail.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-coctail.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/coffee-cocktail.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Coffee Cocktail\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffee-cup.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-cup.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffee-cup.svg" }
                  }),
                  _vm._v("\n                    Coffee Cup\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/coffee-is-love.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-is-love.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/coffee-is-love.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Coffee Is Love\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffee-mill.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-mill.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffee-mill.svg" }
                  }),
                  _vm._v("\n                    Coffee Mill\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffee-pack.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-pack.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffee-pack.svg" }
                  }),
                  _vm._v("\n                    Coffee Pack\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffee-pods.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-pods.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffee-pods.svg" }
                  }),
                  _vm._v("\n                    Coffee Pods\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffee-pot.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-pot.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffee-pot.svg" }
                  }),
                  _vm._v("\n                    Coffee Pot\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffee-scoop.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-scoop.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffee-scoop.svg" }
                  }),
                  _vm._v("\n                    Coffee Scoop\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffee-shake.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-shake.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffee-shake.svg" }
                  }),
                  _vm._v("\n                    Coffee Shake\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/coffee-shop-sign.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-shop-sign.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/coffee-shop-sign.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Coffee Shop Sign\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffee-shop.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-shop.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffee-shop.svg" }
                  }),
                  _vm._v("\n                    Coffee Shop\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffee-to-go.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-to-go.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffee-to-go.svg" }
                  }),
                  _vm._v("\n                    Coffee To Go\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffee-tree.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-tree.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffee-tree.svg" }
                  }),
                  _vm._v("\n                    Coffee Tree\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/coffee-with-cream.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-with-cream.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/coffee-with-cream.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Coffee With Cream\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/coffee-with-ice-cream.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffee-with-ice-cream.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/coffee-with-ice-cream.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Coffee With Ice Cream\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/coffeemaker.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/coffeemaker.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/coffeemaker.svg" }
                  }),
                  _vm._v("\n                    Coffee Maker\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/cold-brew.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/cold-brew.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/cold-brew.svg" }
                  }),
                  _vm._v("\n                    Cold Brew\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/croissant.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/croissant.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/croissant.svg" }
                  }),
                  _vm._v("\n                    Croissant\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/cupcake.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/cupcake.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/cupcake.svg" }
                  }),
                  _vm._v("\n                    Cupcake\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/donut.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/donut.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/donut.svg" }
                  }),
                  _vm._v("\n                    Donut\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/drip-brew.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/drip-brew.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/drip-brew.svg" }
                  }),
                  _vm._v("\n                    Drip Brew\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/drip-kettle.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/drip-kettle.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/drip-kettle.svg" }
                  }),
                  _vm._v("\n                    Drip Kettle\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/electric-kettle.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/electric-kettle.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/electric-kettle.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Electric Kettle\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/espresso-cup.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/espresso-cup.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/espresso-cup.svg" }
                  }),
                  _vm._v("\n                    Espresso Cup\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/espresso-tamper.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/espresso-tamper.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/espresso-tamper.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Espresso Tamper\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/espresso.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/espresso.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/espresso.svg" }
                  }),
                  _vm._v("\n                    Espresso\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/eva-solo.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/eva-solo.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/eva-solo.svg" }
                  }),
                  _vm._v("\n                    Eva Solo\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/fizzy-water.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/fizzy-water.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/fizzy-water.svg" }
                  }),
                  _vm._v("\n                    Fizzy Water\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/frappe.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/frappe.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/frappe.svg" }
                  }),
                  _vm._v("\n                    Frappe\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/french-press.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/french-press.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/french-press.svg" }
                  }),
                  _vm._v("\n                    French Press\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/frozen-frappe.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/frozen-frappe.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/frozen-frappe.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Frozen Frappe\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/green-tea.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/green-tea.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/green-tea.svg" }
                  }),
                  _vm._v("\n                    Green Tea\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/hario.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/hario.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/hario.svg" }
                  }),
                  _vm._v("\n                    Hario\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/hot-chocolate.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/hot-chocolate.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/hot-chocolate.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Hot Chocolate\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/i-love-coffee.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/i-love-coffee.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/i-love-coffee.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    I Love Coffee\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/iced-coffee_2.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/iced-coffee_2.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/iced-coffee_2.svg"
                    }
                  }),
                  _vm._v("\n                    Iced Coffee\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/iced-tea.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/iced-tea.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/iced-tea.svg" }
                  }),
                  _vm._v("\n                    Iced Tea\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/instant-coffee.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/instant-coffee.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/instant-coffee.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Instant Coffee\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/kalita-wave.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/kalita-wave.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/kalita-wave.svg" }
                  }),
                  _vm._v("\n                    Kalita Wave\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/kettle.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/kettle.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/kettle.svg" }
                  }),
                  _vm._v("\n                    Kettle\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/latte_2.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/latte_2.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/latte_2.svg" }
                  }),
                  _vm._v("\n                    Latte\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/latte.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/latte.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/latte.svg" }
                  }),
                  _vm._v("\n                    Latte\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/matcha-latte.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/matcha-latte.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/matcha-latte.svg" }
                  }),
                  _vm._v("\n                    Matcha Latte\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/milk-pitcher.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/milk-pitcher.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/milk-pitcher.svg" }
                  }),
                  _vm._v("\n                    Milk Pitcher\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/milk-product.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/milk-product.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/milk-product.svg" }
                  }),
                  _vm._v("\n                    Milk Product\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/moka-pot.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/moka-pot.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/moka-pot.svg" }
                  }),
                  _vm._v("\n                    Moka Pot\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/nitrous.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/nitrous.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/nitrous.svg" }
                  }),
                  _vm._v("\n                    Nitrous\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/percolator.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/percolator.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/percolator.svg" }
                  }),
                  _vm._v("\n                    Percolator\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/porcelain-teapot.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/porcelain-teapot.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/porcelain-teapot.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Porcelain Teapot\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/portafilter.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/portafilter.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/portafilter.svg" }
                  }),
                  _vm._v("\n                    Portafilter\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/sack-of-coffee-beans.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/sack-of-coffee-beans.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/sack-of-coffee-beans.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Sack of Coffee Beans\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/sugar-and-milk.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/sugar-and-milk.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/sugar-and-milk.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Sugar and Milk\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/sugar.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/sugar.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/sugar.svg" }
                  }),
                  _vm._v("\n                    Sugar\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/syphon.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/syphon.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/syphon.svg" }
                  }),
                  _vm._v("\n                    Syphon\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/take-away.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/take-away.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/take-away.svg" }
                  }),
                  _vm._v("\n                    Take Away\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/tea-bag-cup.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/tea-bag-cup.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/tea-bag-cup.svg" }
                  }),
                  _vm._v("\n                    Tea Bag Cup\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/tea-bag.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/tea-bag.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/tea-bag.svg" }
                  }),
                  _vm._v("\n                    Tea Bag\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/tea-ceremony.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/tea-ceremony.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/tea-ceremony.svg" }
                  }),
                  _vm._v("\n                    Tea Ceremony\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/turkish-gezve.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/turkish-gezve.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/turkish-gezve.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Turkish Gezve\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon === "/storage/img/brew_methods/vacuum-pot.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/vacuum-pot.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/vacuum-pot.svg" }
                  }),
                  _vm._v("\n                    Vacuum Pot\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/vending-machine.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/vending-machine.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/vending-machine.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Vending Machine\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/vietnamese-hot.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/vietnamese-hot.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/vietnamese-hot.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Vietnamese Hot\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active:
                      _vm.icon ===
                      "/storage/img/brew_methods/vintage-coffee-pot.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/vintage-coffee-pot.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: {
                      src: "/storage/img/brew_methods/vintage-coffee-pot.svg"
                    }
                  }),
                  _vm._v(
                    "\n                    Vintage Coffee Pot\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "large-3 medium-3 new-icon-container cell",
                  class: {
                    active: _vm.icon === "/storage/img/brew_methods/wifi.svg"
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectIcon(
                        "/storage/img/brew_methods/wifi.svg"
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "new-icon",
                    attrs: { src: "/storage/img/brew_methods/wifi.svg" }
                  }),
                  _vm._v("\n                    Wifi\n                ")
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "large-12 medium-12 cell" }, [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.validations.icon,
                        expression: "!validations.icon"
                      }
                    ],
                    staticClass: "validation"
                  },
                  [_vm._v("请选择冲泡方法图标!")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "grid-x" }, [
              _c("div", { staticClass: "large-12 medium-12 cell" }, [
                _c(
                  "a",
                  {
                    staticClass: "add-method-button",
                    on: {
                      click: function($event) {
                        return _vm.addBrewMethod()
                      }
                    }
                  },
                  [_vm._v("提交")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "large-8 medium-8 cell" }, [
      _c("h3", { staticClass: "page-header" }, [_vm._v("所有冲泡方法")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "grid-x list-header" }, [
      _c("div", { staticClass: "large-1 medium-1 cell" }),
      _vm._v(" "),
      _c("div", { staticClass: "large-6 medium-6 cell" }, [
        _vm._v("\n                    名称\n                ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "large-3 medium-3 cell" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "large-12 medium-12 cell" }, [
      _c("label", [_vm._v("图标")])
    ])
  }
]
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

/***/ "./resources/js/pages/admin/BrewMethods.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/admin/BrewMethods.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrewMethods_vue_vue_type_template_id_437fd952___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrewMethods.vue?vue&type=template&id=437fd952& */ "./resources/js/pages/admin/BrewMethods.vue?vue&type=template&id=437fd952&");
/* harmony import */ var _BrewMethods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrewMethods.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/BrewMethods.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BrewMethods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrewMethods.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/admin/BrewMethods.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BrewMethods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BrewMethods_vue_vue_type_template_id_437fd952___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BrewMethods_vue_vue_type_template_id_437fd952___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/BrewMethods.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/BrewMethods.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/admin/BrewMethods.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrewMethods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BrewMethods.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/BrewMethods.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrewMethods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/BrewMethods.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/admin/BrewMethods.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrewMethods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./BrewMethods.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/BrewMethods.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrewMethods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrewMethods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrewMethods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrewMethods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrewMethods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/admin/BrewMethods.vue?vue&type=template&id=437fd952&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/admin/BrewMethods.vue?vue&type=template&id=437fd952& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrewMethods_vue_vue_type_template_id_437fd952___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BrewMethods.vue?vue&type=template&id=437fd952& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/BrewMethods.vue?vue&type=template&id=437fd952&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrewMethods_vue_vue_type_template_id_437fd952___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrewMethods_vue_vue_type_template_id_437fd952___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);