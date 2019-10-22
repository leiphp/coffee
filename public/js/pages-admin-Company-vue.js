(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-Company-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/companies/Cafe.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/companies/Cafe.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['cafe']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Company.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Company.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_admin_companies_Cafe_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/admin/companies/Cafe.vue */ "./resources/js/components/admin/companies/Cafe.vue");
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../event-bus.js */ "./resources/js/event-bus.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tab: 'information',
      newOwner: '',
      newOwnerResults: [],
      showAutocomplete: true,
      name: '',
      type: '',
      subscription: 0,
      website: '',
      instagram_url: '',
      facebook_url: '',
      twitter_url: '',
      owners: [],
      deleted: 0,
      validations: {
        name: true,
        type: true,
        website: true,
        owners: true
      }
    };
  },
  components: {
    Cafe: _components_admin_companies_Cafe_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    this.$store.dispatch('loadAdminCompany', {
      id: this.$route.params.id
    });
  },
  computed: {
    user: function user() {
      return this.$store.getters.getUser;
    },
    company: function company() {
      return this.$store.getters.getCompany;
    },
    companyLoadStatus: function companyLoadStatus() {
      return this.$store.getters.getCompanyLoadStatus;
    },
    companyEditStatus: function companyEditStatus() {
      return this.$store.getters.getCompanyEditStatus;
    }
  },
  watch: {
    'companyLoadStatus': function companyLoadStatus() {
      if (this.companyLoadStatus === 2) {
        this.syncCompanyToModel();
      }
    },
    'companyEditStatus': function companyEditStatus() {
      if (this.companyEditStatus === 2) {
        this.syncCompanyToModel();
        _event_bus_js__WEBPACK_IMPORTED_MODULE_1__["EventBus"].$emit('show-success', {
          notification: '更新公司信息成功!'
        });
      }
    }
  },
  methods: {
    setCompanyType: function setCompanyType(type) {
      this.type = type;
    },
    removeOwner: function removeOwner(index) {
      this.owners.splice(index, 1);
    },
    saveEdits: function saveEdits() {
      if (this.validateEditCompany()) {
        this.$store.dispatch('updateAdminCompany', {
          id: this.company.id,
          name: this.name,
          type: this.type,
          website: this.website,
          instagram_url: this.instagram_url,
          facebook_url: this.facebook_url,
          twitter_url: this.twitter_url,
          subscription: this.subscription,
          owners: this.owners,
          deleted: this.deleted
        });
      }
    },
    validateEditCompany: function validateEditCompany() {
      var validCompanyForm = true;

      if (this.name.trim() === '') {
        validCompanyForm = false;
        this.validations.name = false;
      } else {
        this.validations.name = true;
      }

      if (this.website.trim !== '' && !this.website.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/)) {
        validNewCafeForm = false;
        this.validations.website = false;
      } else {
        this.validations.website = true;
      }

      return validCompanyForm;
    },
    syncCompanyToModel: function syncCompanyToModel() {
      this.name = this.company.name;
      this.type = this.company.roaster === 1 ? 'roaster' : 'cafe';
      this.subscription = this.company.subscription;
      this.website = this.company.website;
      this.instagram_url = this.company.instagram_url;
      this.facebook_url = this.company.facebook_url;
      this.twitter_url = this.company.twitter_url;
      this.owners = this.company.owned_by;
      this.deleted = this.company.deleted;
    },
    searchUsers: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.debounce(function (e) {
      if (this.newOwner.length > 1) {
        this.showAutocomplete = true;
        axios.get(_config_js__WEBPACK_IMPORTED_MODULE_3__["ROAST_CONFIG"].API_URL + '/admin/users', {
          params: {
            search: this.newOwner
          }
        }).then(function (response) {
          this.newOwnerResults = response.data;
        }.bind(this));
      }
    }, 300),
    selectUser: function selectUser(user) {
      this.owners.push(user);
      this.newOwner = '';
      this.showAutocomplete = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/companies/Cafe.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/companies/Cafe.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.cafe-listing {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Company.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Company.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#admin-company label {\n  font-weight: bold;\n  color: black;\n  font-size: 16px;\n  margin-top: 15px;\n}\ndiv#admin-company div.cafes-header {\n  font-family: \"Lato\", sans-serif;\n  border-bottom: 1px solid black;\n  font-weight: bold;\n  padding-bottom: 10px;\n}\ndiv#admin-company div.user-selection-container {\n  position: relative;\n  margin-top: 20px;\n}\ndiv#admin-company div.user-selection-container div.user-autocomplete-container {\n  border-radius: 3px;\n  border: 1px solid #BABABA;\n  background-color: white;\n  margin-top: -17px;\n  width: 80%;\n  position: absolute;\n  z-index: 9999;\n}\ndiv#admin-company div.user-selection-container div.user-autocomplete-container div.user-autocomplete {\n  cursor: pointer;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\ndiv#admin-company div.user-selection-container div.user-autocomplete-container div.user-autocomplete span.user-name {\n  display: block;\n  color: #0D223F;\n  font-size: 16px;\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold;\n}\ndiv#admin-company div.user-selection-container div.user-autocomplete-container div.user-autocomplete:hover {\n  background-color: #F2F2F2;\n}\ndiv#admin-company div.location-type {\n  display: inline-block;\n  margin-right: 10px;\n  cursor: pointer;\n  background-color: #CCC;\n}\ndiv#admin-company div.location-type.active {\n  color: white;\n  background-color: #FFBE54;\n}\ndiv#admin-company div.owner {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid black;\n}\ndiv#admin-company div.owner a.remove-owner {\n  text-decoration: underline;\n  color: red;\n  float: right;\n}\ndiv#admin-company a.save-edits {\n  display: block;\n  width: 150px;\n  color: white;\n  background-color: #CCC;\n  text-align: center;\n  border-radius: 5px;\n  margin-top: 20px;\n  height: 45px;\n  line-height: 45px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/companies/Cafe.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/companies/Cafe.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cafe.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/companies/Cafe.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Company.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Company.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Company.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/companies/Cafe.vue?vue&type=template&id=616ab07c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/companies/Cafe.vue?vue&type=template&id=616ab07c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "grid-x cafe-listing" }, [
    _c("div", { staticClass: "large-3 medium-3 cell" }, [
      _vm._v("\n        " + _vm._s(_vm.cafe.location_name) + "\n    ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "large-6 medium-6 cell" }, [
      _vm._v(
        "\n        " +
          _vm._s(_vm.cafe.address) +
          " " +
          _vm._s(_vm.cafe.city) +
          ", " +
          _vm._s(_vm.cafe.state) +
          "\n    "
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
                name: "admin-cafe",
                params: { id: _vm.cafe.company_id, cafeID: _vm.cafe.id }
              }
            }
          },
          [_vm._v("\n            更多信息\n        ")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Company.vue?vue&type=template&id=17c5a884&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Company.vue?vue&type=template&id=17c5a884& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "admin-company" } }, [
    _c("div", { staticClass: "grid-container" }, [
      _c("div", { staticClass: "grid-x" }, [
        _c("div", { staticClass: "large-12 medium-12 cell" }, [
          _c(
            "h3",
            { staticClass: "page-header" },
            [
              _c(
                "router-link",
                { attrs: { to: { name: "admin-companies" } } },
                [_vm._v("所有公司")]
              ),
              _vm._v(
                "\n                    > " +
                  _vm._s(_vm.company.name) +
                  "\n                "
              )
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "grid-container" }, [
      _c("div", { staticClass: "grid-x admin-tabs" }, [
        _c(
          "div",
          {
            staticClass: "tab",
            class: { "active-tab": _vm.tab === "information" },
            on: {
              click: function($event) {
                _vm.tab = "information"
              }
            }
          },
          [_vm._v("\n                信息\n            ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab",
            class: { "active-tab": _vm.tab === "cafes" },
            on: {
              click: function($event) {
                _vm.tab = "cafes"
              }
            }
          },
          [_vm._v("\n                咖啡店\n            ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab",
            class: { "active-tab": _vm.tab === "history" },
            on: {
              click: function($event) {
                _vm.tab = "history"
              }
            }
          },
          [_vm._v("\n                历史\n            ")]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.tab === "information",
            expression: "tab === 'information'"
          }
        ],
        staticClass: "grid-container"
      },
      [
        _c("div", { staticClass: "grid-x" }, [
          _c("div", { staticClass: "large-8 medium-12 cell" }, [
            _c("label", [_vm._v("公司名称")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }
              ],
              attrs: { type: "text" },
              domProps: { value: _vm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
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
                    value: !_vm.validations.name,
                    expression: "!validations.name"
                  }
                ],
                staticClass: "validation"
              },
              [_vm._v("请输入公司名称")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "grid-x" }, [
          _c("div", { staticClass: "large-8 medium-12 cell" }, [
            _c("label", [_vm._v("类型")]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "location-type roaster",
                class: { active: _vm.type === "roaster" },
                on: {
                  click: function($event) {
                    return _vm.setCompanyType("roaster")
                  }
                }
              },
              [_vm._v("\n                    烘焙店\n                ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "location-type cafe",
                class: { active: _vm.type === "cafe" },
                on: {
                  click: function($event) {
                    return _vm.setCompanyType("cafe")
                  }
                }
              },
              [_vm._v("\n                    专卖店\n                ")]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.type === "roaster",
                expression: "type === 'roaster'"
              }
            ],
            staticClass: "grid-x grid-padding-x"
          },
          [_vm._m(0)]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.type === "roaster",
                expression: "type === 'roaster'"
              }
            ],
            staticClass: "grid-x grid-padding-x"
          },
          [
            _c(
              "div",
              { staticClass: "large-8 medium-9 small-12 cell centered" },
              [
                _c(
                  "div",
                  {
                    staticClass: "subscription-option option",
                    class: { active: _vm.subscription === 1 },
                    on: {
                      click: function($event) {
                        _vm.subscription === 0
                          ? (_vm.subscription = 1)
                          : (_vm.subscription = 0)
                      }
                    }
                  },
                  [_vm._m(1)]
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "grid-x" }, [
          _c("div", { staticClass: "large-8 medium-12 cell" }, [
            _c("label", [_vm._v("网站")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.website,
                  expression: "website"
                }
              ],
              attrs: { type: "text" },
              domProps: { value: _vm.website },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.website = $event.target.value
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
                    value: !_vm.validations.website,
                    expression: "!validations.website"
                  }
                ],
                staticClass: "validation"
              },
              [_vm._v("请输入有效的网站地址")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "grid-x" }, [
          _c(
            "div",
            { staticClass: "large-8 medium-12 cell" },
            [
              _c("label", [_vm._v("所有人")]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.owners.length === 0,
                      expression: "owners.length === 0"
                    }
                  ],
                  staticClass: "no-owners"
                },
                [_vm._v("N/A")]
              ),
              _vm._v(" "),
              _vm._l(_vm.owners, function(owner, key) {
                return _c(
                  "div",
                  { staticClass: "owner" },
                  [
                    _vm.user.permission > 1
                      ? _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "admin-user",
                                params: { id: owner.id }
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(owner.name) +
                                "\n                    "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.permission === 1
                      ? _c("span", [_vm._v(_vm._s(owner.name))])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.permission > 1
                      ? _c(
                          "a",
                          {
                            staticClass: "remove-owner",
                            on: {
                              click: function($event) {
                                return _vm.removeOwner(key)
                              }
                            }
                          },
                          [_vm._v("移除")]
                        )
                      : _vm._e()
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _vm.user.permission > 1
                ? _c("div", { staticClass: "user-selection-container" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newOwner,
                          expression: "newOwner"
                        }
                      ],
                      staticClass: "new-owner",
                      attrs: { type: "text", placeholder: "添加所有人" },
                      domProps: { value: _vm.newOwner },
                      on: {
                        keyup: function($event) {
                          return _vm.searchUsers()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.newOwner = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.newOwner.length > 0 && _vm.showAutocomplete,
                            expression:
                              "newOwner.length > 0 && showAutocomplete"
                          }
                        ],
                        staticClass: "user-autocomplete-container"
                      },
                      _vm._l(_vm.newOwnerResults, function(user) {
                        return _c(
                          "div",
                          {
                            staticClass: "user-autocomplete",
                            on: {
                              click: function($event) {
                                return _vm.selectUser(user)
                              }
                            }
                          },
                          [
                            _c("span", { staticClass: "user-name" }, [
                              _vm._v(_vm._s(user.name))
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e()
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "grid-x" }, [
          _c("div", { staticClass: "large-8 medium-12 cell" }, [
            _c("label", [_vm._v("状态")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.deleted,
                    expression: "deleted"
                  }
                ],
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.deleted = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "0" } }, [_vm._v("有效")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("删除")])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "grid-x" }, [
          _c("div", { staticClass: "large-12 medium-12 cell" }, [
            _c(
              "a",
              {
                staticClass: "save-edits",
                on: {
                  click: function($event) {
                    return _vm.saveEdits()
                  }
                }
              },
              [_vm._v("更新")]
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.tab === "cafes",
            expression: "tab === 'cafes'"
          }
        ],
        staticClass: "grid-container"
      },
      [
        _vm._m(2),
        _vm._v(" "),
        _vm._l(_vm.company.cafes, function(cafe) {
          return _c("cafe", { key: cafe.id, attrs: { cafe: cafe } })
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "large-8 medium-9 small-12 cell centered" },
      [_c("label", [_vm._v("烘焙店提供订购服务吗?")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "option-container" }, [
      _c("img", {
        staticClass: "option-icon",
        attrs: { src: "/storage/img/coffee-pack.svg" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "option-name" }, [_vm._v("咖啡订购")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "grid-x cafes-header" }, [
      _c("div", { staticClass: "large-3 medium-3 cell" }, [
        _vm._v("\n                位置名称\n            ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "large-6 medium-6 cell" }, [
        _vm._v("\n                地址\n            ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "large-3 medium-3 cell" })
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

/***/ "./resources/js/components/admin/companies/Cafe.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/companies/Cafe.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cafe_vue_vue_type_template_id_616ab07c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cafe.vue?vue&type=template&id=616ab07c& */ "./resources/js/components/admin/companies/Cafe.vue?vue&type=template&id=616ab07c&");
/* harmony import */ var _Cafe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cafe.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/companies/Cafe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Cafe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cafe.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/admin/companies/Cafe.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Cafe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cafe_vue_vue_type_template_id_616ab07c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cafe_vue_vue_type_template_id_616ab07c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/companies/Cafe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/companies/Cafe.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/companies/Cafe.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cafe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cafe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/companies/Cafe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cafe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/companies/Cafe.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/companies/Cafe.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Cafe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cafe.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/companies/Cafe.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Cafe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Cafe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Cafe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Cafe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Cafe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/companies/Cafe.vue?vue&type=template&id=616ab07c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/companies/Cafe.vue?vue&type=template&id=616ab07c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cafe_vue_vue_type_template_id_616ab07c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cafe.vue?vue&type=template&id=616ab07c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/companies/Cafe.vue?vue&type=template&id=616ab07c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cafe_vue_vue_type_template_id_616ab07c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cafe_vue_vue_type_template_id_616ab07c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/pages/admin/Company.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/admin/Company.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Company_vue_vue_type_template_id_17c5a884___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Company.vue?vue&type=template&id=17c5a884& */ "./resources/js/pages/admin/Company.vue?vue&type=template&id=17c5a884&");
/* harmony import */ var _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Company.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/Company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Company_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Company.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/admin/Company.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Company_vue_vue_type_template_id_17c5a884___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Company_vue_vue_type_template_id_17c5a884___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/Company.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/Company.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/admin/Company.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/Company.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/admin/Company.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Company.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/admin/Company.vue?vue&type=template&id=17c5a884&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/admin/Company.vue?vue&type=template&id=17c5a884& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_17c5a884___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=template&id=17c5a884& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Company.vue?vue&type=template&id=17c5a884&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_17c5a884___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_17c5a884___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);