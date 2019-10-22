(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-Admin-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminHeader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: {
    userLoadStatus: function userLoadStatus() {
      return this.$store.getters.getUserLoadStatus();
    },
    user: function user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    setShowPopOut: function setShowPopOut() {
      this.$store.dispatch('toggleShowPopOut', {
        showPopOut: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Navigation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Navigation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: {
    user: function user() {
      return this.$store.getters.getUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ErrorNotification.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ErrorNotification.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errorMessage: '',
      show: false
    };
  },
  mounted: function mounted() {
    _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["EventBus"].$on('show-error', function (data) {
      this.errorMessage = data.notification;
      this.show = true;
      setTimeout(function () {
        this.show = false;
      }.bind(this), 3000);
    }.bind(this));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SuccessNotification.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SuccessNotification.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      successMessage: '',
      show: false
    };
  },
  mounted: function mounted() {
    _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["EventBus"].$on('show-success', function (data) {
      this.successMessage = data.notification;
      this.show = true;
      setTimeout(function () {
        this.show = false;
      }.bind(this), 3000);
    }.bind(this));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Admin.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Admin.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_SuccessNotification_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/global/SuccessNotification.vue */ "./resources/js/components/global/SuccessNotification.vue");
/* harmony import */ var _components_global_ErrorNotification_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/ErrorNotification.vue */ "./resources/js/components/global/ErrorNotification.vue");
/* harmony import */ var _components_admin_AdminHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin/AdminHeader.vue */ "./resources/js/components/admin/AdminHeader.vue");
/* harmony import */ var _components_admin_Navigation_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/admin/Navigation.vue */ "./resources/js/components/admin/Navigation.vue");
/* harmony import */ var _components_global_PopOut_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/PopOut.vue */ "./resources/js/components/global/PopOut.vue");
/* harmony import */ var _modules_admin_actions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/admin/actions.js */ "./resources/js/modules/admin/actions.js");
/* harmony import */ var _modules_admin_companies_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/admin/companies.js */ "./resources/js/modules/admin/companies.js");
/* harmony import */ var _modules_admin_cafes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/admin/cafes.js */ "./resources/js/modules/admin/cafes.js");
/* harmony import */ var _modules_admin_users_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/admin/users.js */ "./resources/js/modules/admin/users.js");
/* harmony import */ var _modules_admin_brewMethods_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/admin/brewMethods.js */ "./resources/js/modules/admin/brewMethods.js");
/* harmony import */ var _modules_admin_cities_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/admin/cities.js */ "./resources/js/modules/admin/cities.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




 // Import admin Vuex modules







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SuccessNotification: _components_global_SuccessNotification_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ErrorNotification: _components_global_ErrorNotification_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AdminHeader: _components_admin_AdminHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Navigation: _components_admin_Navigation_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    PopOut: _components_global_PopOut_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  created: function created() {
    this.$store.dispatch("loadBrewMethods");

    if (!this.$store._modules.get(["admin"])) {
      this.$store.registerModule("admin", {});
    }

    if (!this.$store._modules.get(["admin", "actions"])) {
      this.$store.registerModule(["admin", "actions"], _modules_admin_actions_js__WEBPACK_IMPORTED_MODULE_5__["actions"]);
    }

    if (!this.$store._modules.get(['admin', 'companies'])) {
      this.$store.registerModule(['admin', 'companies'], _modules_admin_companies_js__WEBPACK_IMPORTED_MODULE_6__["companies"]);
    }

    if (!this.$store._modules.get(['admin', 'cafes'])) {
      this.$store.registerModule(['admin', 'cafes'], _modules_admin_cafes_js__WEBPACK_IMPORTED_MODULE_7__["cafes"]);
    }

    if (!this.$store._modules.get(['admin', 'users']) && this.user.permission >= 2) {
      this.$store.registerModule(['admin', 'users'], _modules_admin_users_js__WEBPACK_IMPORTED_MODULE_8__["users"]);
    }

    if (!this.$store._modules.get(['admin', 'brewMethods']) && this.user.permission === 3) {
      this.$store.registerModule(['admin', 'brewMethods'], _modules_admin_brewMethods_js__WEBPACK_IMPORTED_MODULE_9__["brewMethods"]);
    }

    if (!this.$store._modules.get(['admin', 'cities']) && this.user.permission === 3) {
      this.$store.registerModule(['admin', 'cities'], _modules_admin_cities_js__WEBPACK_IMPORTED_MODULE_10__["cities"]);
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.getUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminHeader.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminHeader.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  background-color: #FFFFFF;\n  height: 75px;\n  z-index: 9999;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\nheader img.logo {\n  margin: auto;\n  margin-top: 22.5px;\n  margin-bottom: 22.5px;\n  display: block;\n}\nheader img.hamburger {\n  float: right;\n  margin-right: 18px;\n  margin-top: 30px;\n  cursor: pointer;\n}\nheader img.avatar {\n  float: right;\n  margin-right: 20px;\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  margin-top: 18px;\n}\nheader:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Small only */\n@media screen and (max-width: 39.9375em) {\nnav.top-navigation span.login {\n    display: none;\n}\nnav.top-navigation img.hamburger {\n    margin-top: 26px;\n}\n}\n/* Medium only */\n/* Large only */", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Navigation.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Navigation.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav.admin-navigation div.admin-link {\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Lato\", sans-serif;\n  text-transform: uppercase;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\nnav.admin-navigation div.admin-link a {\n  color: black;\n}\nnav.admin-navigation div.admin-link a.router-link-active {\n  color: #FFBE54;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ErrorNotification.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ErrorNotification.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.error-notification-container {\n  position: fixed;\n  z-index: 999999;\n  left: 0;\n  right: 0;\n  top: 0;\n}\ndiv.error-notification-container div.error-notification {\n  background: #FFFFFF;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.24);\n  border-left: 5px solid #FF0000;\n  height: 50px;\n  line-height: 50px;\n  margin: auto;\n  width: 400px;\n  margin-top: 150px;\n  color: #242E38;\n  font-family: \"Lato\", sans-serif;\n  font-size: 16px;\n}\ndiv.error-notification-container div.error-notification img {\n  margin-right: 20px;\n  margin-left: 20px;\n  height: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SuccessNotification.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SuccessNotification.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.success-notification-container {\n  position: fixed;\n  z-index: 999999;\n  left: 0;\n  right: 0;\n  top: 0;\n}\ndiv.success-notification-container div.success-notification {\n  background: #FFFFFF;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.24);\n  border-left: 5px solid #00C853;\n  height: 50px;\n  line-height: 50px;\n  margin: auto;\n  width: 400px;\n  margin-top: 150px;\n  color: #242E38;\n  font-family: \"Lato\", sans-serif;\n  font-size: 16px;\n}\ndiv.success-notification-container div.success-notification img {\n  margin-right: 20px;\n  margin-left: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Admin.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Admin.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#admin-layout div#page-container {\n  margin-top: 75px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminHeader.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminHeader.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminHeader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminHeader.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Navigation.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Navigation.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Navigation.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ErrorNotification.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ErrorNotification.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorNotification.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ErrorNotification.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SuccessNotification.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SuccessNotification.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SuccessNotification.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SuccessNotification.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Admin.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Admin.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Admin.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminHeader.vue?vue&type=template&id=b828d9be&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminHeader.vue?vue&type=template&id=b828d9be& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("header", { staticClass: "admin-header" }, [
    _c("div", { staticClass: "grid-x" }, [
      _c("div", { staticClass: "large-4 medium-4 small-4 cell" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "large-4 medium-4 small-4 cell" },
        [
          _c("router-link", { attrs: { to: { name: "cafes" } } }, [
            _c("img", {
              staticClass: "logo",
              attrs: { src: "/storage/img/logo.svg" }
            })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "large-4 medium-4 small-4 cell" }, [
        _c("img", {
          staticClass: "hamburger",
          attrs: { src: "/storage/img/hamburger.svg" },
          on: {
            click: function($event) {
              return _vm.setShowPopOut()
            }
          }
        }),
        _vm._v(" "),
        _vm.user !== "" && _vm.userLoadStatus === 2
          ? _c("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.userLoadStatus === 2,
                  expression: "userLoadStatus === 2"
                }
              ],
              staticClass: "avatar",
              attrs: { src: _vm.user.avatar }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.user === ""
          ? _c(
              "span",
              {
                staticClass: "login",
                on: {
                  click: function($event) {
                    return _vm.login()
                  }
                }
              },
              [_vm._v("Sign In")]
            )
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Navigation.vue?vue&type=template&id=5268a13f&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Navigation.vue?vue&type=template&id=5268a13f& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("nav", { staticClass: "admin-navigation" }, [
    _c(
      "div",
      { staticClass: "admin-link" },
      [
        _c("router-link", { attrs: { to: { name: "admin-actions" } } }, [
          _vm._v("\n            审核列表\n        ")
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "admin-link" },
      [
        _c("router-link", { attrs: { to: { name: "admin-companies" } } }, [
          _vm._v("\n            公司列表\n        ")
        ])
      ],
      1
    ),
    _vm._v(" "),
    _vm.user.permission >= 2
      ? _c(
          "div",
          { staticClass: "admin-link" },
          [
            _c("router-link", { attrs: { to: { name: "admin-users" } } }, [
              _vm._v("\n            用户列表\n        ")
            ])
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.user.permission === 3
      ? _c(
          "div",
          { staticClass: "admin-link" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "admin-brew-methods" } } },
              [_vm._v("\n            冲泡方法\n        ")]
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.user.permission === 3
      ? _c(
          "div",
          { staticClass: "admin-link" },
          [
            _c("router-link", { attrs: { to: { name: "admin-cities" } } }, [
              _vm._v("\n            城市列表\n        ")
            ])
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ErrorNotification.vue?vue&type=template&id=b96ff15c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ErrorNotification.vue?vue&type=template&id=b96ff15c& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("transition", { attrs: { name: "slide-in-top" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show,
            expression: "show"
          }
        ],
        staticClass: "error-notification-container"
      },
      [
        _c("div", { staticClass: "error-notification" }, [
          _c("img", { attrs: { src: "/storage/img/error.svg" } }),
          _vm._v(" " + _vm._s(_vm.errorMessage) + "\n        ")
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SuccessNotification.vue?vue&type=template&id=7f4af18d&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SuccessNotification.vue?vue&type=template&id=7f4af18d& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("transition", { attrs: { name: "slide-in-top" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show,
            expression: "show"
          }
        ],
        staticClass: "success-notification-container"
      },
      [
        _c("div", { staticClass: "success-notification" }, [
          _c("img", { attrs: { src: "/storage/img/success.svg" } }),
          _vm._v(" " + _vm._s(_vm.successMessage) + "\n        ")
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Admin.vue?vue&type=template&id=c0c833ca&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Admin.vue?vue&type=template&id=c0c833ca& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { attrs: { id: "admin-layout" } },
    [
      _c("admin-header"),
      _vm._v(" "),
      _c("success-notification"),
      _vm._v(" "),
      _c("error-notification"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "grid-container", attrs: { id: "page-container" } },
        [
          _c("div", { staticClass: "grid-x grid-padding-x" }, [
            _c(
              "div",
              { staticClass: "large-3 medium-4 cell" },
              [_c("navigation")],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "large-9 medium-8 cell" },
              [_c("router-view")],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("pop-out")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/admin/actions.js":
/*!*******************************************!*\
  !*** ./resources/js/api/admin/actions.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
/*
  Imports the Roast API URL from the config.
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  /*
    GET   /api/v1/admin/actions
  */
  getActions: function getActions() {
    return axios.get(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/actions');
  },

  /*
    PUT   /api/v1/admin/actions/{action}/approve
  */
  putApproveAction: function putApproveAction(id) {
    return axios.put(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/actions/' + id + '/approve');
  },

  /*
    PUT   /api/v1/admin/actions/{action}/deny
  */
  putDenyAction: function putDenyAction(id) {
    return axios.put(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/actions/' + id + '/deny');
  }
});

/***/ }),

/***/ "./resources/js/api/admin/brewMethods.js":
/*!***********************************************!*\
  !*** ./resources/js/api/admin/brewMethods.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
/*
  Imports the Roast API URL from the config.
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  /*
    GET   /api/v1/admin/brew-methods
  */
  getBrewMethods: function getBrewMethods() {
    return axios.get(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/brew-methods');
  },

  /*
    GET   /api/v1/admin/brew-methods/{method}
  */
  getBrewMethod: function getBrewMethod(id) {
    return axios.get(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/brew-methods/' + id);
  },

  /*
    POST  /api/v1/admin/brew-methods
  */
  postAddBrewMethod: function postAddBrewMethod(method, icon) {
    return axios.post(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/brew-methods', {
      method: method,
      icon: icon
    });
  },

  /*
    PUT   /api/v1/admin/brew-methods/{method}
  */
  putUpdateBrewMethod: function putUpdateBrewMethod(id, method, icon) {
    return axios.put(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/brew-methods/' + id, {
      method: method,
      icon: icon
    });
  }
});

/***/ }),

/***/ "./resources/js/api/admin/cafes.js":
/*!*****************************************!*\
  !*** ./resources/js/api/admin/cafes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
/*
  Imports the Roast API URL from the config.
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  /*
    GET   /api/v1/admin/companies/{companyID}/cafes/{cafeID}
  */
  getCafe: function getCafe(companyID, cafeID) {
    return axios.get(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/companies/' + companyID + '/cafes/' + cafeID);
  },

  /*
      PUT 	/api/v1/admin/companies/{companyID/cafes/{cafeID}
    */
  putUpdateCafe: function putUpdateCafe(companyID, cafeID, cityID, locationName, address, city, state, zip, tea, matcha, brewMethods, deleted) {
    /*
        Initialize the form data
    */
    var formData = new FormData();
    /*
        Add the form data we need to submit
    */

    formData.append('company_id', companyID);
    formData.append('city_id', cityID);
    formData.append('location_name', locationName);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('zip', zip);
    formData.append('brew_methods', JSON.stringify(brewMethods));
    formData.append('matcha', matcha);
    formData.append('tea', tea);
    formData.append('deleted', deleted);
    formData.append('_method', 'PUT');
    return axios.post(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/companies/' + companyID + '/cafes/' + cafeID, formData);
  }
});

/***/ }),

/***/ "./resources/js/api/admin/cities.js":
/*!******************************************!*\
  !*** ./resources/js/api/admin/cities.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
/*
  Imports the Roast API URL from the config.
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  /*
    GET   /api/v1/admin/cities
  */
  getCities: function getCities() {
    return axios.get(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/cities');
  },

  /*
    GET   /api/v1/admin/cities/{id}
  */
  getCity: function getCity(id) {
    return axios.get(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/cities/' + id);
  },

  /*
    POST  /api/v1/admin/cities
  */
  postAddCity: function postAddCity(name, state, country, latitude, longitude) {
    return axios.post(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/cities', {
      name: name,
      state: state,
      country: country,
      latitude: latitude,
      longitude: longitude
    });
  },

  /*
    PUT   /api/v1/admin/cities/{id}
  */
  putUpdateCity: function putUpdateCity(id, name, state, country, latitude, longitude) {
    return axios.put(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/cities/' + id, {
      name: name,
      state: state,
      country: country,
      latitude: latitude,
      longitude: longitude
    });
  },

  /*
    DELETE /api/v1/admin/cities/{id}
  */
  deleteCity: function deleteCity(id) {
    return axios["delete"](_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/cities/' + id);
  }
});

/***/ }),

/***/ "./resources/js/api/admin/companies.js":
/*!*********************************************!*\
  !*** ./resources/js/api/admin/companies.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
/*
  Imports the Roast API URL from the config.
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  /*
    GET   /api/v1/admin/companies
  */
  getCompanies: function getCompanies() {
    return axios.get(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/companies');
  },

  /*
    GET   /api/v1/admin/companies/{id}
  */
  getCompany: function getCompany(id) {
    return axios.get(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/companies/' + id);
  },

  /*
    PUT   /api/v1/admin/companies/{id}
  */
  putUpdateCompany: function putUpdateCompany(id, name, type, website, instagramURL, facebookURL, twitterURL, subscription, owners, deleted) {
    return axios.put(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/companies/' + id, {
      name: name,
      type: type,
      website: website,
      instagram_url: instagramURL,
      facebook_url: facebookURL,
      twitter_url: twitterURL,
      subscription: subscription,
      owners: owners,
      deleted: deleted
    });
  }
});

/***/ }),

/***/ "./resources/js/api/admin/users.js":
/*!*****************************************!*\
  !*** ./resources/js/api/admin/users.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
/*
  Imports the Roast API URL from the config.
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  /*
    GET   /api/v1/admin/users
  */
  getUsers: function getUsers() {
    return axios.get(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/users');
  },

  /*
    GET   /api/v1/admin/users/{id}
  */
  getUser: function getUser(id) {
    return axios.get(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/users/' + id);
  },

  /*
    PUT   /api/v1/admin/users/{id}
  */
  putUpdateUser: function putUpdateUser(id, permission, companies) {
    return axios.put(_config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].API_URL + '/admin/users/' + id, {
      permission: permission,
      companies: companies
    });
  }
});

/***/ }),

/***/ "./resources/js/components/admin/AdminHeader.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/admin/AdminHeader.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminHeader_vue_vue_type_template_id_b828d9be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminHeader.vue?vue&type=template&id=b828d9be& */ "./resources/js/components/admin/AdminHeader.vue?vue&type=template&id=b828d9be&");
/* harmony import */ var _AdminHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdminHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminHeader.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/admin/AdminHeader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminHeader_vue_vue_type_template_id_b828d9be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminHeader_vue_vue_type_template_id_b828d9be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/admin/AdminHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminHeader.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminHeader.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminHeader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminHeader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/AdminHeader.vue?vue&type=template&id=b828d9be&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminHeader.vue?vue&type=template&id=b828d9be& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_template_id_b828d9be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminHeader.vue?vue&type=template&id=b828d9be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminHeader.vue?vue&type=template&id=b828d9be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_template_id_b828d9be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_template_id_b828d9be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/Navigation.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/Navigation.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation_vue_vue_type_template_id_5268a13f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=5268a13f& */ "./resources/js/components/admin/Navigation.vue?vue&type=template&id=5268a13f&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/admin/Navigation.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_5268a13f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navigation_vue_vue_type_template_id_5268a13f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Navigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Navigation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/Navigation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Navigation.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/Navigation.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Navigation.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/Navigation.vue?vue&type=template&id=5268a13f&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/Navigation.vue?vue&type=template&id=5268a13f& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_5268a13f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=template&id=5268a13f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Navigation.vue?vue&type=template&id=5268a13f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_5268a13f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_5268a13f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/global/ErrorNotification.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/global/ErrorNotification.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorNotification_vue_vue_type_template_id_b96ff15c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorNotification.vue?vue&type=template&id=b96ff15c& */ "./resources/js/components/global/ErrorNotification.vue?vue&type=template&id=b96ff15c&");
/* harmony import */ var _ErrorNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorNotification.vue?vue&type=script&lang=js& */ "./resources/js/components/global/ErrorNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ErrorNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorNotification.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/global/ErrorNotification.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ErrorNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ErrorNotification_vue_vue_type_template_id_b96ff15c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ErrorNotification_vue_vue_type_template_id_b96ff15c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/ErrorNotification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/ErrorNotification.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/global/ErrorNotification.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ErrorNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/ErrorNotification.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/global/ErrorNotification.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorNotification.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ErrorNotification.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/global/ErrorNotification.vue?vue&type=template&id=b96ff15c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/global/ErrorNotification.vue?vue&type=template&id=b96ff15c& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorNotification_vue_vue_type_template_id_b96ff15c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorNotification.vue?vue&type=template&id=b96ff15c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ErrorNotification.vue?vue&type=template&id=b96ff15c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorNotification_vue_vue_type_template_id_b96ff15c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorNotification_vue_vue_type_template_id_b96ff15c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/global/SuccessNotification.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/global/SuccessNotification.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SuccessNotification_vue_vue_type_template_id_7f4af18d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuccessNotification.vue?vue&type=template&id=7f4af18d& */ "./resources/js/components/global/SuccessNotification.vue?vue&type=template&id=7f4af18d&");
/* harmony import */ var _SuccessNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuccessNotification.vue?vue&type=script&lang=js& */ "./resources/js/components/global/SuccessNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SuccessNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuccessNotification.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/global/SuccessNotification.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SuccessNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SuccessNotification_vue_vue_type_template_id_7f4af18d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SuccessNotification_vue_vue_type_template_id_7f4af18d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/SuccessNotification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/SuccessNotification.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/global/SuccessNotification.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SuccessNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SuccessNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/SuccessNotification.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/global/SuccessNotification.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SuccessNotification.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SuccessNotification.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/global/SuccessNotification.vue?vue&type=template&id=7f4af18d&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/global/SuccessNotification.vue?vue&type=template&id=7f4af18d& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessNotification_vue_vue_type_template_id_7f4af18d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SuccessNotification.vue?vue&type=template&id=7f4af18d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SuccessNotification.vue?vue&type=template&id=7f4af18d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessNotification_vue_vue_type_template_id_7f4af18d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessNotification_vue_vue_type_template_id_7f4af18d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/Admin.vue":
/*!****************************************!*\
  !*** ./resources/js/layouts/Admin.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin_vue_vue_type_template_id_c0c833ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=c0c833ca& */ "./resources/js/layouts/Admin.vue?vue&type=template&id=c0c833ca&");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Admin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admin.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/layouts/Admin.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admin_vue_vue_type_template_id_c0c833ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admin_vue_vue_type_template_id_c0c833ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Admin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Admin.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/layouts/Admin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Admin.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************!*\
  !*** ./resources/js/layouts/Admin.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Admin.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/Admin.vue?vue&type=template&id=c0c833ca&":
/*!***********************************************************************!*\
  !*** ./resources/js/layouts/Admin.vue?vue&type=template&id=c0c833ca& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_c0c833ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=template&id=c0c833ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Admin.vue?vue&type=template&id=c0c833ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_c0c833ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_c0c833ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/admin/actions.js":
/*!***********************************************!*\
  !*** ./resources/js/modules/admin/actions.js ***!
  \***********************************************/
/*! exports provided: actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _api_admin_actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/admin/actions.js */ "./resources/js/api/admin/actions.js");
/*
|-------------------------------------------------------------------------------
| VUEX modules/admin/actions.js
|-------------------------------------------------------------------------------
| The Vuex data store for the admin actions
*/

var actions = {
  /*
    Defines the state being monitored for the module.
  */
  state: {
    actions: [],
    actionsLoadStatus: 0,
    actionApproveStatus: 0,
    actionDeniedStatus: 0
  },
  actions: {
    loadAdminActions: function loadAdminActions(_ref) {
      var commit = _ref.commit;
      commit('setActionsLoadStatus', 1);
      _api_admin_actions_js__WEBPACK_IMPORTED_MODULE_0__["default"].getActions().then(function (response) {
        commit('setActions', response.data);
        commit('setActionsLoadStatus', 2);
      })["catch"](function () {
        commit('setActions', []);
        commit('setActionsLoadStatus', 3);
      });
    },
    approveAction: function approveAction(_ref2, data) {
      var commit = _ref2.commit,
          state = _ref2.state,
          dispatch = _ref2.dispatch;
      commit('setActionApproveStatus', 1);
      _api_admin_actions_js__WEBPACK_IMPORTED_MODULE_0__["default"].putApproveAction(data.id).then(function (response) {
        commit('setActionApproveStatus', 2);
        dispatch('loadAdminActions');
      })["catch"](function () {
        commit('setActionApproveStatus', 3);
      });
    },
    denyAction: function denyAction(_ref3, data) {
      var commit = _ref3.commit,
          state = _ref3.state,
          dispatch = _ref3.dispatch;
      commit('setActionDeniedStatus', 1);
      _api_admin_actions_js__WEBPACK_IMPORTED_MODULE_0__["default"].putDenyAction(data.id).then(function (response) {
        commit('setActionDeniedStatus', 2);
        dispatch('loadAdminActions');
      })["catch"](function () {
        commit('setActionDeniedStatus', 3);
      });
    }
  },
  mutations: {
    setActionsLoadStatus: function setActionsLoadStatus(state, status) {
      state.actionsLoadStatus = status;
    },
    setActions: function setActions(state, actions) {
      state.actions = actions;
    },
    setActionApproveStatus: function setActionApproveStatus(state, status) {
      state.actionApproveStatus = status;
    },
    setActionDeniedStatus: function setActionDeniedStatus(state, status) {
      state.actionDeniedStatus = status;
    }
  },
  getters: {
    getActions: function getActions(state) {
      return state.actions;
    },
    getActionsLoadStatus: function getActionsLoadStatus(state) {
      return state.actionsLoadStatus;
    },
    getActionApproveStatus: function getActionApproveStatus(state) {
      return state.actionApproveStatus;
    },
    getActionDeniedStatus: function getActionDeniedStatus(state) {
      return state.actionDeniedStatus;
    }
  }
};

/***/ }),

/***/ "./resources/js/modules/admin/brewMethods.js":
/*!***************************************************!*\
  !*** ./resources/js/modules/admin/brewMethods.js ***!
  \***************************************************/
/*! exports provided: brewMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brewMethods", function() { return brewMethods; });
/* harmony import */ var _api_admin_brewMethods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/admin/brewMethods.js */ "./resources/js/api/admin/brewMethods.js");
/*
|-------------------------------------------------------------------------------
| VUEX modules/admin/brewMethods.js
|-------------------------------------------------------------------------------
| The Vuex data store for the admin brew methods
*/

var brewMethods = {
  /*
    Defines the state monitored for the module.
  */
  state: {
    brewMethods: [],
    brewMethodsLoadStatus: 0,
    brewMethod: {},
    brewMethodLoadStatus: 0,
    brewMethodAddStatus: 0,
    brewMethodUpdateStatus: 0
  },

  /*
    Defines the actions that can mutate the state.
  */
  actions: {
    /*
      Loads the brew methods.
    */
    loadAdminBrewMethods: function loadAdminBrewMethods(_ref) {
      var commit = _ref.commit;
      commit('setAdminBrewMethodsLoadStatus', 1);
      /*
        Calls the API to load the admin brew methods.
      */

      _api_admin_brewMethods_js__WEBPACK_IMPORTED_MODULE_0__["default"].getBrewMethods().then(function (response) {
        /*
          Commit a successful response with the brew methods.
        */
        commit('setAdminBrewMethods', response.data);
        commit('setAdminBrewMethodsLoadStatus', 2);
      })["catch"](function () {
        /*
          Commit a failed response and clear the data.
        */
        commit('setAdminBrewMethods', []);
        commit('setAdminBrewMethodsLoadStatus', 3);
      });
    },

    /*
      Loads a brew method.
    */
    loadAdminBrewMethod: function loadAdminBrewMethod(_ref2, data) {
      var commit = _ref2.commit;
      commit('setAdminBrewMethodLoadStatus', 1);
      /*
        Calls the API to load the brew method.
      */

      _api_admin_brewMethods_js__WEBPACK_IMPORTED_MODULE_0__["default"].getBrewMethod(data.id).then(function (response) {
        /*
          Commits a successful response with the brew method.
        */
        commit('setAdminBrewMethod', response.data);
        commit('setAdminBrewMethodLoadStatus', 2);
      })["catch"](function () {
        /*
          Commits a failed response and clear the data.
        */
        commit('setAdminBrewMethod', {});
        commit('setAdminBrewMethodLoadStatus', 3);
      });
    },

    /*
      Updates a brew method.
    */
    updateAdminBrewMethod: function updateAdminBrewMethod(_ref3, data) {
      var commit = _ref3.commit;
      commit('setAdminBrewMethodUpdateStatus', 1);
      /*
        Calls the API to update a brew method.
      */

      _api_admin_brewMethods_js__WEBPACK_IMPORTED_MODULE_0__["default"].putUpdateBrewMethod(data.id, data.method, data.icon).then(function (response) {
        /*
          Commits a successful response.
        */
        commit('setAdminBrewMethod', response.data);
        commit('setAdminBrewMethodUpdateStatus', 2);
      })["catch"](function () {
        /*
          Commits a failed response.
        */
        commit('setAdminBrewMethod', {});
        commit('setAdminBrewMethodUpdateStatus', 3);
      });
    },

    /*
      Adds a brew method.
    */
    addAdminBrewMethod: function addAdminBrewMethod(_ref4, data) {
      var commit = _ref4.commit,
          state = _ref4.state,
          dispatch = _ref4.dispatch;
      commit('setAdminBrewMethodAddedStatus', 1);
      /*
        Calls the API to add a brew method.
      */

      _api_admin_brewMethods_js__WEBPACK_IMPORTED_MODULE_0__["default"].postAddBrewMethod(data.method, data.icon).then(function (response) {
        commit('setAdminBrewMethodAddedStatus', 2);
        dispatch('loadAdminBrewMethods');
      })["catch"](function () {
        commit('setAdminBrewMethodAddedStatus', 3);
      });
    }
  },

  /*
    Defines the mutations used by the Vuex module.
  */
  mutations: {
    /*
      Sets the admin brew methods load status.
    */
    setAdminBrewMethodsLoadStatus: function setAdminBrewMethodsLoadStatus(state, status) {
      state.brewMethodsLoadStatus = status;
    },

    /*
      Sets the admin brew methods.
    */
    setAdminBrewMethods: function setAdminBrewMethods(state, methods) {
      state.brewMethods = methods;
    },

    /*
      Set the brew method load status.
    */
    setAdminBrewMethodLoadStatus: function setAdminBrewMethodLoadStatus(state, status) {
      state.brewMethodLoadStatus = status;
    },

    /*
      Sets the admin brew method.
    */
    setAdminBrewMethod: function setAdminBrewMethod(state, method) {
      state.brewMethod = method;
    },

    /*
      Sets the admin brew method update status.
    */
    setAdminBrewMethodUpdateStatus: function setAdminBrewMethodUpdateStatus(state, status) {
      state.brewMethodUpdateStatus = status;
    },

    /*
      Sets the admin brew method add status.
    */
    setAdminBrewMethodAddedStatus: function setAdminBrewMethodAddedStatus(state, status) {
      state.brewMethodAddStatus = status;
    }
  },

  /*
    Defines the getters used by the Vuex module.
  */
  getters: {
    /*
      Gets the admin brew method load status
    */
    getAdminBrewMethodLoadStatus: function getAdminBrewMethodLoadStatus(state) {
      return state.brewMethodLoadStatus;
    },

    /*
      Gets the admin brew method load status
    */
    getAdminBrewMethodsLoadStatus: function getAdminBrewMethodsLoadStatus(state) {
      return state.brewMethodsLoadStatus;
    },

    /*
      Gets the admin brew methods
    */
    getAdminBrewMethods: function getAdminBrewMethods(state) {
      return state.brewMethods;
    },

    /*
      Gets the admin brew method.
    */
    getAdminBrewMethod: function getAdminBrewMethod(state) {
      return state.brewMethod;
    },

    /*
      Gets the admin brew method update status.
    */
    getAdminBrewMethodUpdateStatus: function getAdminBrewMethodUpdateStatus(state) {
      return state.brewMethodUpdateStatus;
    },

    /*
      Gets the admin brew method added status.
    */
    getAdminBrewMethodAddedStatus: function getAdminBrewMethodAddedStatus(state) {
      return state.brewMethodAddStatus;
    }
  }
};

/***/ }),

/***/ "./resources/js/modules/admin/cafes.js":
/*!*********************************************!*\
  !*** ./resources/js/modules/admin/cafes.js ***!
  \*********************************************/
/*! exports provided: cafes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cafes", function() { return cafes; });
/* harmony import */ var _api_admin_cafes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/admin/cafes.js */ "./resources/js/api/admin/cafes.js");
/*
|-------------------------------------------------------------------------------
| VUEX modules/admin/cafes.js
|-------------------------------------------------------------------------------
| The Vuex data store for the admin companies
*/

var cafes = {
  /*
    Defines the state monitored for the module.
  */
  state: {
    cafe: {},
    cafeLoadStatus: 0,
    cafeEditStatus: 0
  },

  /*
    Defines the actions that can mutate the state.
  */
  actions: {
    /*
      Loads the cafe from the admin side
    */
    loadAdminCafe: function loadAdminCafe(_ref, data) {
      var commit = _ref.commit;
      commit('setAdminCafeLoadStatus', 1);
      _api_admin_cafes_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCafe(data.company_id, data.cafe_id).then(function (response) {
        /*
          Commits a successful response with the cafe.
        */
        commit('setAdminCafe', response.data);
        commit('setAdminCafeLoadStatus', 2);
      })["catch"](function () {
        /*
          Commit a failed response and clear the data.
        */
        commit('setAdminCafe', {});
        commit('setAdminCafeLoadStatus', 3);
      });
    },

    /*
      Updates an admin cafe
    */
    updateAdminCafe: function updateAdminCafe(_ref2, data) {
      var commit = _ref2.commit;
      commit('setAdminCafeEditStatus', 1);
      /*
        Calls the API to update an admin cafe.
      */

      _api_admin_cafes_js__WEBPACK_IMPORTED_MODULE_0__["default"].putUpdateCafe(data.company_id, data.id, data.city_id, data.location_name, data.address, data.city, data.state, data.zip, data.tea, data.matcha, data.brew_methods, data.deleted).then(function (response) {
        commit('setAdminCafe', response.data);
        commit('setAdminCafeEditStatus', 2);
      })["catch"](function () {
        commit('setAdminCafeEditStatus', 3);
      });
    }
  },

  /*
    Defines the mutations used by the Vuex module.
  */
  mutations: {
    /*
      Sets the cafe load status.
    */
    setAdminCafeLoadStatus: function setAdminCafeLoadStatus(state, status) {
      state.cafeLoadStatus = status;
    },

    /*
      Sets the cafe.
    */
    setAdminCafe: function setAdminCafe(state, cafe) {
      state.cafe = cafe;
    },

    /*
      Sets the cafe edit status
    */
    setAdminCafeEditStatus: function setAdminCafeEditStatus(state, status) {
      state.cafeEditStatus = status;
    }
  },

  /*
    Defines the getters used by the Vuex module.
  */
  getters: {
    /*
      Returns the cafe load status.
    */
    getAdminCafeLoadStatus: function getAdminCafeLoadStatus(state) {
      return state.cafeLoadStatus;
    },

    /*
      Returns the cafe
    */
    getAdminCafe: function getAdminCafe(state) {
      return state.cafe;
    },

    /*
      Returns the edit status.
    */
    getAdminCafeEditStatus: function getAdminCafeEditStatus(state) {
      return state.cafeEditStatus;
    }
  }
};

/***/ }),

/***/ "./resources/js/modules/admin/cities.js":
/*!**********************************************!*\
  !*** ./resources/js/modules/admin/cities.js ***!
  \**********************************************/
/*! exports provided: cities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cities", function() { return cities; });
/* harmony import */ var _api_admin_cities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/admin/cities.js */ "./resources/js/api/admin/cities.js");
/*
|-------------------------------------------------------------------------------
| VUEX modules/admin/cities.js
|-------------------------------------------------------------------------------
| The Vuex data store for the admin cities
*/

var cities = {
  /*
    Defines the state monitored for the module.
  */
  state: {
    cities: [],
    citiesLoadStatus: 0,
    city: {},
    cityLoadStatus: 0,
    cityEditStatus: 0,
    cityAddStatus: 0,
    cityDeleteStatus: 0
  },

  /*
    Defines the actions that can mutate the state.
  */
  actions: {
    /*
      Loads all of the cities.
    */
    loadAdminCities: function loadAdminCities(_ref) {
      var commit = _ref.commit;
      commit('setAdminCitiesLoadStatus', 1);
      /*
        Call the admin cities API route.
      */

      _api_admin_cities_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCities().then(function (response) {
        /*
          Commits a successful response with the cities.
        */
        commit('setAdminCities', response.data);
        commit('setAdminCitiesLoadStatus', 2);
      })["catch"](function () {
        /*
          Commits a failed response and clear the data.
        */
        commit('setAdminCities', []);
        commit('setAdminCitiesLoadStatus', 3);
      });
    },

    /*
      Load an individual city.
    */
    loadAdminCity: function loadAdminCity(_ref2, data) {
      var commit = _ref2.commit;
      commit('setAdminCityLoadStatus', 1);
      /*
        Calls the API to load an individual city.
      */

      _api_admin_cities_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCity(data.id).then(function (response) {
        commit('setAdminCity', response.data);
        commit('setAdminCityLoadStatus', 2);
      })["catch"](function () {
        commit('setAdminCity', {});
        commit('setAdminCityLoadStatus', 3);
      });
    },

    /*
      Submits a request to add a city.
    */
    addAdminCity: function addAdminCity(_ref3, data) {
      var commit = _ref3.commit,
          state = _ref3.state,
          dispatch = _ref3.dispatch;
      commit('setAdminCityAddStatus', 1);
      /*
        Calls the API to add a city.
      */

      _api_admin_cities_js__WEBPACK_IMPORTED_MODULE_0__["default"].postAddCity(data.name, data.state, data.country, data.latitude, data.longitude).then(function (response) {
        commit('setAdminCityAddStatus', 2);
        dispatch('loadAdminCities');
      })["catch"](function (response) {
        commit('setAdminCityAddStatus', 3);
      });
    },

    /*
      Update an individual admin city.
    */
    updateAdminCity: function updateAdminCity(_ref4, data) {
      var commit = _ref4.commit,
          state = _ref4.state,
          dispatch = _ref4.dispatch;
      commit('setAdminCityEditStatus', 1);
      /*
        Calls the API to update an individual city.
      */

      _api_admin_cities_js__WEBPACK_IMPORTED_MODULE_0__["default"].putUpdateCity(data.id, data.name, data.state, data.country, data.latitude, data.longitude).then(function (response) {
        commit('setAdminCityEditStatus', 2);
      })["catch"](function (response) {
        commit('setAdminCityEditStatus', 3);
      });
    },

    /*
      Deletes a city.
    */
    deleteAdminCity: function deleteAdminCity(_ref5, data) {
      var commit = _ref5.commit,
          state = _ref5.state,
          dispatch = _ref5.dispatch;
      commit('setAdminCityDeleteStatus', 1);
      _api_admin_cities_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteCity(data.id).then(function (response) {
        commit('setAdminCityDeleteStatus', 2);
      })["catch"](function (response) {
        commit('setAdminCityDeleteStatus', 3);
      });
    }
  },

  /*
    Defines the mutations used by the Vuex module.
  */
  mutations: {
    /*
      Set the admin cities load status.
    */
    setAdminCitiesLoadStatus: function setAdminCitiesLoadStatus(state, status) {
      state.citiesLoadStatus = status;
    },

    /*
      Sets the admin cities.
    */
    setAdminCities: function setAdminCities(state, cities) {
      state.cities = cities;
    },

    /*
      Set the admin city load status.
    */
    setAdminCityLoadStatus: function setAdminCityLoadStatus(state, status) {
      state.cityLoadStatus = status;
    },

    /*
      Sets the admin city.
    */
    setAdminCity: function setAdminCity(state, city) {
      state.city = city;
    },

    /*
      Sets the admin city add status.
    */
    setAdminCityAddStatus: function setAdminCityAddStatus(state, status) {
      state.cityAddStatus = status;
    },

    /*
      Sets the admin city edit status.
    */
    setAdminCityEditStatus: function setAdminCityEditStatus(state, status) {
      state.cityEditStatus = status;
    },

    /*
      Sets the admin city delete status.
    */
    setAdminCityDeleteStatus: function setAdminCityDeleteStatus(state, status) {
      state.cityDeleteStatus = status;
    }
  },

  /*
    Defines the getters used by the Vuex module.
  */
  getters: {
    /*
      Get all admin cities.
    */
    getAdminCities: function getAdminCities(state) {
      return state.cities;
    },

    /*
      Gets the admin cities load status.
    */
    getAdminCitiesLoadStatus: function getAdminCitiesLoadStatus(state) {
      return state.citiesLoadStatus;
    },

    /*
      Gets the admin city.
    */
    getAdminCity: function getAdminCity(state) {
      return state.city;
    },

    /*
      Gets the admin city load status.
    */
    getAdminCityLoadStatus: function getAdminCityLoadStatus(state) {
      return state.cityLoadStatus;
    },

    /*
      Gets the admin city edit status.
    */
    getAdminCityEditStatus: function getAdminCityEditStatus(state) {
      return state.cityEditStatus;
    },

    /*
      Gets the admin city add status.
    */
    getAdminCityAddStatus: function getAdminCityAddStatus(state) {
      return state.cityAddStatus;
    },

    /*
      Gets the admin city delete status.
    */
    getAdminCityDeleteStatus: function getAdminCityDeleteStatus(state) {
      return state.cityDeleteStatus;
    }
  }
};

/***/ }),

/***/ "./resources/js/modules/admin/companies.js":
/*!*************************************************!*\
  !*** ./resources/js/modules/admin/companies.js ***!
  \*************************************************/
/*! exports provided: companies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companies", function() { return companies; });
/* harmony import */ var _api_admin_companies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/admin/companies.js */ "./resources/js/api/admin/companies.js");
/*
|-------------------------------------------------------------------------------
| VUEX modules/admin/companies.js
|-------------------------------------------------------------------------------
| The Vuex data store for the admin companies
*/

var companies = {
  state: {
    companies: [],
    companiesLoadStatus: 0,
    company: {},
    companyLoadStatus: 0,
    companyEditStatus: 0
  },
  actions: {
    loadAdminCompanies: function loadAdminCompanies(_ref) {
      var commit = _ref.commit;
      commit('setCompaniesLoadStatus', 1);
      _api_admin_companies_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCompanies().then(function (response) {
        commit('setCompanies', response.data);
        commit('setCompaniesLoadStatus', 2);
      })["catch"](function () {
        commit('setCompanies', []);
        commit('setCompaniesLoadStatus', 3);
      });
    },
    loadAdminCompany: function loadAdminCompany(_ref2, data) {
      var commit = _ref2.commit;
      commit('setCompanyLoadStatus', 1);
      _api_admin_companies_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCompany(data.id).then(function (response) {
        commit('setCompany', response.data);
        commit('setCompanyLoadStatus', 2);
      })["catch"](function () {
        commit('setCompany', {});
        commit('setCompanyLoadStatus', 3);
      });
    },
    updateAdminCompany: function updateAdminCompany(_ref3, data) {
      var commit = _ref3.commit;
      commit('setCompanyEditStatus', 1);
      _api_admin_companies_js__WEBPACK_IMPORTED_MODULE_0__["default"].putUpdateCompany(data.id, data.name, data.type, data.website, data.instagram_url, data.facebook_url, data.twitter_url, data.subscription, data.owners, data.deleted).then(function (response) {
        commit('setCompany', response.data);
        commit('setCompanyEditStatus', 2);
      })["catch"](function () {
        commit('setCompanyEditStatus', 3);
      });
    }
  },
  mutations: {
    setCompaniesLoadStatus: function setCompaniesLoadStatus(state, status) {
      state.companiesLoadStatus = status;
    },
    setCompanies: function setCompanies(state, companies) {
      state.companies = companies;
    },
    setCompanyLoadStatus: function setCompanyLoadStatus(state, status) {
      state.companyLoadStatus = status;
    },
    setCompany: function setCompany(state, company) {
      state.company = company;
    },
    setCompanyEditStatus: function setCompanyEditStatus(state, status) {
      state.companyEditStatus = status;
    }
  },
  getters: {
    getCompanies: function getCompanies(state) {
      return state.companies;
    },
    getCompaniesLoadStatus: function getCompaniesLoadStatus(state) {
      return state.companiesLoadStatus;
    },
    getCompany: function getCompany(state) {
      return state.company;
    },
    getCompanyLoadStatus: function getCompanyLoadStatus(state) {
      return state.companyLoadStatus;
    },
    getCompanyEditStatus: function getCompanyEditStatus(state) {
      return state.companyEditStatus;
    }
  }
};

/***/ }),

/***/ "./resources/js/modules/admin/users.js":
/*!*********************************************!*\
  !*** ./resources/js/modules/admin/users.js ***!
  \*********************************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony import */ var _api_admin_users_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/admin/users.js */ "./resources/js/api/admin/users.js");
/*
|-------------------------------------------------------------------------------
| VUEX modules/admin/users.js
|-------------------------------------------------------------------------------
| The Vuex data store for the admin users
*/

var users = {
  /*
    Defines the state monitored for the module.
  */
  state: {
    users: [],
    usersLoadStatus: 0,
    user: {},
    userLoadStatus: 0,
    userUpdateStatus: 0
  },

  /*
    Define the actions that can mutate the state.
  */
  actions: {
    /*
      Loads the users.
    */
    loadAdminUsers: function loadAdminUsers(_ref) {
      var commit = _ref.commit;
      commit('setAdminUsersLoadStatus', 1);
      /*
        Calls the API to load the admin users.
      */

      _api_admin_users_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUsers().then(function (response) {
        /*
          Commit a successful response with the users.
        */
        commit('setAdminUsers', response.data);
        commit('setAdminUsersLoadStatus', 2);
      })["catch"](function () {
        /*
          Commit a failed response and clear the data.
        */
        commit('setAdminUsers', []);
        commit('setAdminUsersLoadStatus', 3);
      });
    },

    /*
      Loads a user.
    */
    loadAdminUser: function loadAdminUser(_ref2, data) {
      var commit = _ref2.commit;
      commit('setAdminUserLoadStatus', 1);
      /*
        Calls the API to load the admin user.
      */

      _api_admin_users_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUser(data.id).then(function (response) {
        /*
          Commits a successful response with the user.
        */
        commit('setAdminUser', response.data);
        commit('setAdminUserLoadStatus', 2);
      })["catch"](function () {
        /*
          Commit a failed response and clear the data.
        */
        commit('setAdminUser', {});
        commit('setAdminUserLoadStatus', 3);
      });
    },

    /*
      Updates a user.
    */
    updateAdminUser: function updateAdminUser(_ref3, data) {
      var commit = _ref3.commit;
      commit('setAdminUserUpdateStatus', 1);
      /*
        Calls the API to update the admin user.
      */

      _api_admin_users_js__WEBPACK_IMPORTED_MODULE_0__["default"].putUpdateUser(data.id, data.permission, data.companies).then(function (response) {
        commit('setAdminUser', response.data);
        commit('setAdminUserUpdateStatus', 2);
      })["catch"](function () {
        /*
          Commit a failed response.
        */
        commit('setAdminUserUpdateStatus', 3);
      });
    }
  },

  /*
    Defines the mutations used by the Vuex module.
  */
  mutations: {
    /*
      Sets the users load status.
    */
    setAdminUsersLoadStatus: function setAdminUsersLoadStatus(state, status) {
      state.usersLoadStatus = status;
    },

    /*
      Sets the users
    */
    setAdminUsers: function setAdminUsers(state, users) {
      state.users = users;
    },

    /*
      Sets the user load status.
    */
    setAdminUserLoadStatus: function setAdminUserLoadStatus(state, status) {
      state.userLoadStatus = status;
    },

    /*
      Sets the user.
    */
    setAdminUser: function setAdminUser(state, user) {
      state.user = user;
    },

    /*
      Sets the admin user update status.
    */
    setAdminUserUpdateStatus: function setAdminUserUpdateStatus(state, status) {
      state.userUpdateStatus = status;
    }
  },

  /*
    Defines the getters used by the Vuex module.
  */
  getters: {
    /*
      Returns the users.
    */
    getAdminUsers: function getAdminUsers(state) {
      return state.users;
    },

    /*
      Return the users load status.
    */
    getAdminUsersLoadStatus: function getAdminUsersLoadStatus(state) {
      return state.usersLoadStatus;
    },

    /*
      Return the user.
    */
    getAdminUser: function getAdminUser(state) {
      return state.user;
    },

    /*
      Return the user load status.
    */
    getAdminUserLoadStatus: function getAdminUserLoadStatus(state) {
      return state.userLoadStatus;
    },

    /*
      Return the user update status.
    */
    getAdminUserUpdateStatus: function getAdminUserUpdateStatus(state) {
      return state.userUpdateStatus;
    }
  }
};

/***/ })

}]);