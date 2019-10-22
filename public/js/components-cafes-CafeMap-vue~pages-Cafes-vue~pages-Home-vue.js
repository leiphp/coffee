(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-cafes-CafeMap-vue~pages-Cafes-vue~pages-Home-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeMap.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cafes/CafeMap.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../event-bus.js */ "./resources/js/event-bus.js");
/* harmony import */ var _mixins_filters_CafeTypeFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/filters/CafeTypeFilter.js */ "./resources/js/mixins/filters/CafeTypeFilter.js");
/* harmony import */ var _mixins_filters_CafeBrewMethodsFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/filters/CafeBrewMethodsFilter.js */ "./resources/js/mixins/filters/CafeBrewMethodsFilter.js");
/* harmony import */ var _mixins_filters_CafeTagsFilter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/filters/CafeTagsFilter.js */ "./resources/js/mixins/filters/CafeTagsFilter.js");
/* harmony import */ var _mixins_filters_CafeTextFilter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/filters/CafeTextFilter.js */ "./resources/js/mixins/filters/CafeTextFilter.js");
/* harmony import */ var _mixins_filters_CafeUserLikeFilter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/filters/CafeUserLikeFilter.js */ "./resources/js/mixins/filters/CafeUserLikeFilter.js");
/* harmony import */ var _mixins_filters_CafeHasMatchaFilter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/filters/CafeHasMatchaFilter.js */ "./resources/js/mixins/filters/CafeHasMatchaFilter.js");
/* harmony import */ var _mixins_filters_CafeHasTeaFilter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/filters/CafeHasTeaFilter.js */ "./resources/js/mixins/filters/CafeHasTeaFilter.js");
/* harmony import */ var _mixins_filters_CafeSubscriptionFilter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/filters/CafeSubscriptionFilter.js */ "./resources/js/mixins/filters/CafeSubscriptionFilter.js");
/* harmony import */ var _mixins_filters_CafeInCityFilter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../mixins/filters/CafeInCityFilter.js */ "./resources/js/mixins/filters/CafeInCityFilter.js");
/* harmony import */ var _api_cafe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../api/cafe */ "./resources/js/api/cafe.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_filters_CafeTypeFilter_js__WEBPACK_IMPORTED_MODULE_2__["CafeTypeFilter"], _mixins_filters_CafeBrewMethodsFilter_js__WEBPACK_IMPORTED_MODULE_3__["CafeBrewMethodsFilter"], _mixins_filters_CafeTagsFilter_js__WEBPACK_IMPORTED_MODULE_4__["CafeTagsFilter"], _mixins_filters_CafeTextFilter_js__WEBPACK_IMPORTED_MODULE_5__["CafeTextFilter"], _mixins_filters_CafeUserLikeFilter_js__WEBPACK_IMPORTED_MODULE_6__["CafeUserLikeFilter"], _mixins_filters_CafeHasMatchaFilter_js__WEBPACK_IMPORTED_MODULE_7__["CafeHasMatchaFilter"], _mixins_filters_CafeHasTeaFilter_js__WEBPACK_IMPORTED_MODULE_8__["CafeHasTeaFilter"], _mixins_filters_CafeSubscriptionFilter_js__WEBPACK_IMPORTED_MODULE_9__["CafeSubscriptionFilter"], _mixins_filters_CafeInCityFilter_js__WEBPACK_IMPORTED_MODULE_10__["CafeInCityFilter"]],
  props: {
    'latitude': {
      type: Number,
      "default": function _default() {
        return 30.29;
      }
    },
    'longitude': {
      type: Number,
      "default": function _default() {
        return 120.21;
      }
    },
    'zoom': {
      type: Number,
      "default": function _default() {
        return 5;
      }
    }
  },
  data: function data() {
    return {
      markers: [],
      infoWindows: []
    };
  },
  mounted: function mounted() {
    this.markers = [];
    this.map = new AMap.Map('cafe-map', {
      center: [this.longitude, this.latitude],
      zoom: this.zoom
    });
    this.clearMarkers();
    this.buildMarkers(); // 监听位置选择事件

    _event_bus_js__WEBPACK_IMPORTED_MODULE_1__["EventBus"].$on('location-selected', function (cafe) {
      var latLng = new AMap.LngLat(cafe.lng, cafe.lat);
      this.map.setZoom(17);
      this.map.panTo(latLng);
    }.bind(this)); // 监听城市选择事件

    _event_bus_js__WEBPACK_IMPORTED_MODULE_1__["EventBus"].$on('city-selected', function (city) {
      var latLng = new AMap.LngLat(city.lng, city.lat);
      this.map.setZoom(11);
      this.map.panTo(latLng);
    }.bind(this));
  },
  computed: {
    cafes: function cafes() {
      console.log('cafes is:', this.$store.getters.getCafes);
      return this.$store.getters.getCafes;
    },
    city: function city() {
      return this.$store.getters.getCity;
    },
    cityFilter: function cityFilter() {
      return this.$store.getters.getCityFilter;
    },
    textSearch: function textSearch() {
      return this.$store.getters.getTextSearch;
    },
    activeLocationFilter: function activeLocationFilter() {
      return this.$store.getters.getActiveLocationFilter;
    },
    onlyLiked: function onlyLiked() {
      return this.$store.getters.getOnlyLiked;
    },
    brewMethodsFilter: function brewMethodsFilter() {
      return this.$store.getters.getBrewMethodsFilter;
    },
    hasMatcha: function hasMatcha() {
      return this.$store.getters.getHasMatcha;
    },
    hasTea: function hasTea() {
      return this.$store.getters.getHasTea;
    },
    hasSubscription: function hasSubscription() {
      return this.$store.getters.getHasSubscription;
    },
    previousLat: function previousLat() {
      return this.$store.getters.getLat;
    },
    previousLng: function previousLng() {
      return this.$store.getters.getLng;
    },
    previousZoom: function previousZoom() {
      return this.$store.getters.getZoomLevel;
    }
  },
  methods: {
    // 为所有咖啡店创建点标记
    buildMarkers: function buildMarkers() {
      // 初始化点标记数组
      this.markers = []; // 自定义点标记

      /*var image = ROAST_CONFIG.APP_URL + '/storage/img/coffee-marker.png';
      var icon = new AMap.Icon({
          image: image,  // Icon的图像
          imageSize: new AMap.Size(19, 33)
      });*/
      // 遍历所有咖啡店创建点标记
      // var infoWindow = new AMap.InfoWindow();

      for (var i = 0; i < this.cafes.length; i++) {
        console.log('遍历数据看下', this.cafes[i].company);

        if (this.cafes[i].company.roaster === 1) {
          var image = _config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].APP_URL + '/storage/img/roaster-marker.svg';
        } else {
          var image = _config_js__WEBPACK_IMPORTED_MODULE_0__["ROAST_CONFIG"].APP_URL + '/storage/img/cafe-marker.svg';
        }

        var icon = new AMap.Icon({
          image: image,
          // Icon的图像
          imageSize: new AMap.Size(19, 33)
        }); // 为每个咖啡店创建点标记并设置经纬度

        var marker = new AMap.Marker({
          position: new AMap.LngLat(parseFloat(this.cafes[i].longitude), parseFloat(this.cafes[i].latitude)),
          title: this.cafes[i].location_name,
          icon: icon,
          extData: {
            'cafe': this.cafes[i]
          }
        }); // 自定义信息窗体

        /*var contentString = '<div class="cafe-info-window">' +
            '<div class="cafe-name">' + this.cafes[i].name + this.cafes[i].location_name + '</div>' +
            '<div class="cafe-address">' +
            '<span class="street">' + this.cafes[i].address + '</span>' +
            '<span class="city">' + this.cafes[i].city + '</span> ' +
            '<span class="state">' + this.cafes[i].state + '</span>' +
            '<span class="zip">' + this.cafes[i].zip + '</span>' +
            '<a href="/#/cafes/' + this.cafes[i].id + '">Visit</a>' +
            '</div>' +
            '</div>';
        marker.content = contentString;*/

        marker.cafeId = this.cafes[i].id; // 绑定点击事件到点标记对象，点击跳转到咖啡店详情页

        marker.on('click', mapClick); // 将点标记放到数组中

        this.markers.push(marker);
      }

      var store = this.$store;
      var router = this.$router;

      function mapClick(mapEvent) {
        // infoWindow.setContent(mapEvent.target.content);
        // infoWindow.open(this.getMap(), this.getPosition());
        var center = mapEvent.target.getMap().getCenter();
        store.dispatch('applyZoomLevel', mapEvent.target.getMap().getZoom());
        store.dispatch('applyLat', center.getLat());
        store.dispatch('applyLng', center.getLng());
        router.push({
          name: 'cafe',
          params: {
            id: mapEvent.target.cafeId
          }
        });
      } // 将所有点标记显示到地图上


      this.map.add(this.markers);
    },
    // 从地图上清理点标记
    clearMarkers: function clearMarkers() {
      // 遍历所有点标记并将其设置为 null 从而从地图上将其清除
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
    },
    processFilters: function processFilters(filters) {
      for (var i = 0; i < this.markers.length; i++) {
        if (this.textSearch === '' && this.activeLocationFilter === 'all' && this.brewMethodsFilter.length === 0 && !this.onlyLiked && !this.hasMatcha && !this.hasTea && !this.hasSubscription && this.cityFilter === '') {
          this.markers[i].setMap(this.map);
        } else {
          // 初始化过滤器标识
          var textPassed = false;
          var brewMethodsPassed = false;
          var typePassed = false;
          var likedPassed = false;
          var matchaPassed = false;
          var teaPassed = false;
          var subscriptionPassed = false;
          var cityPassed = false;

          if (this.processCafeTypeFilter(this.markers[i].getExtData().cafe, this.activeLocationFilter)) {
            typePassed = true;
          }

          if (this.textSearch !== '' && this.processCafeTextFilter(this.markers[i].getExtData().cafe, this.textSearch)) {
            textPassed = true;
          } else if (this.textSearch === '') {
            textPassed = true;
          }

          if (this.brewMethodsFilter.length !== 0 && this.processCafeBrewMethodsFilter(this.markers[i].getExtData().cafe, this.brewMethodsFilter)) {
            brewMethodsPassed = true;
          } else if (this.brewMethodsFilter.length === 0) {
            brewMethodsPassed = true;
          }

          if (this.onlyLiked && this.processCafeUserLikeFilter(this.markers[i].getExtData().cafe)) {
            likedPassed = true;
          } else if (!this.onlyLiked) {
            likedPassed = true;
          }

          if (this.hasMatcha && this.processCafeHasMatchaFilter(this.markers[i].getExtData().cafe)) {
            matchaPassed = true;
          } else if (!this.hasMatcha) {
            matchaPassed = true;
          }

          if (this.hasTea && this.processCafeHasTeaFilter(this.markers[i].getExtData().cafe)) {
            teaPassed = true;
          } else if (!this.hasTea) {
            teaPassed = true;
          }

          if (this.hasSubscription && this.processCafeSubscriptionFilter(this.markers[i].getExtData().cafe)) {
            subscriptionPassed = true;
          } else if (!this.hasSubscription) {
            subscriptionPassed = true;
          }

          if (this.cityFilter !== '' && this.processCafeInCityFilter(this.markers[i].getExtData().cafe, this.cityFilter)) {
            cityPassed = true;
          } else if (this.cityFilter === '') {
            cityPassed = true;
          }

          if (typePassed && textPassed && brewMethodsPassed && likedPassed && matchaPassed && teaPassed && subscriptionPassed && cityPassed) {
            this.markers[i].setMap(this.map);
          } else {
            this.markers[i].setMap(null);
          }
        }
      }
    }
  },
  watch: {
    // 一旦 cafes 有更新立即重构地图点标记
    cafes: function cafes() {
      this.clearMarkers();
      this.buildMarkers();
      this.processFilters();
    },
    // 如果路由从咖啡店详情页切换到咖啡店列表，检查之前的经纬度是否设置，
    // 如果设置的话将其作为新绘制地图的定位点
    '$route': function $route(to, from) {
      if (to.name === 'cafes' && from.name === 'cafe') {
        if (this.previousLat !== 0.0 && this.previousLng !== 0.0 && this.previousZoom !== '') {
          var latLng = new AMap.LngLat(this.previousLng, this.previousLat);
          this.map.setZoom(this.previousZoom);
          this.map.panTo(latLng);
        }
      }
    },
    cityFilter: function cityFilter() {
      this.processFilters();
    },
    textSearch: function textSearch() {
      this.processFilters();
    },
    activeLocationFilter: function activeLocationFilter() {
      this.processFilters();
    },
    onlyLiked: function onlyLiked() {
      this.processFilters();
    },
    brewMethodsFilter: function brewMethodsFilter() {
      this.processFilters();
    },
    hasMatcha: function hasMatcha() {
      this.processFilters();
    },
    hasTea: function hasTea() {
      this.processFilters();
    },
    hasSubscription: function hasSubscription() {
      this.processFilters();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeMap.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cafes/CafeMap.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#cafe-map-container {\n  position: absolute;\n  top: 75px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\ndiv#cafe-map-container div#cafe-map {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\ndiv#cafe-map-container div.cafe-info-window div.cafe-name {\n  display: block;\n  text-align: center;\n  color: #7F5F2A;\n  font-family: \"Josefin Sans\", sans-serif;\n}\ndiv#cafe-map-container div.cafe-info-window div.cafe-address {\n  display: block;\n  text-align: center;\n  margin-top: 5px;\n  color: #A0A0A0;\n  font-family: \"Lato\", sans-serif;\n}\ndiv#cafe-map-container div.cafe-info-window div.cafe-address span.street {\n  font-size: 14px;\n  display: block;\n}\ndiv#cafe-map-container div.cafe-info-window div.cafe-address span.city {\n  font-size: 12px;\n}\ndiv#cafe-map-container div.cafe-info-window div.cafe-address span.state {\n  font-size: 12px;\n}\ndiv#cafe-map-container div.cafe-info-window div.cafe-address span.zip {\n  font-size: 12px;\n  display: block;\n}\ndiv#cafe-map-container div.cafe-info-window div.cafe-address a {\n  color: #FFBE54;\n  font-weight: bold;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeMap.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cafes/CafeMap.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CafeMap.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeMap.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeMap.vue?vue&type=template&id=5423b48b&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cafes/CafeMap.vue?vue&type=template&id=5423b48b& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "cafe-map-container" } }, [
      _c("div", { attrs: { id: "cafe-map" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cafes/CafeMap.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/cafes/CafeMap.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CafeMap_vue_vue_type_template_id_5423b48b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CafeMap.vue?vue&type=template&id=5423b48b& */ "./resources/js/components/cafes/CafeMap.vue?vue&type=template&id=5423b48b&");
/* harmony import */ var _CafeMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CafeMap.vue?vue&type=script&lang=js& */ "./resources/js/components/cafes/CafeMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CafeMap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CafeMap.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/cafes/CafeMap.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CafeMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CafeMap_vue_vue_type_template_id_5423b48b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CafeMap_vue_vue_type_template_id_5423b48b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cafes/CafeMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cafes/CafeMap.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/cafes/CafeMap.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CafeMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cafes/CafeMap.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/cafes/CafeMap.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeMap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CafeMap.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeMap.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeMap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeMap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeMap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeMap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeMap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/cafes/CafeMap.vue?vue&type=template&id=5423b48b&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/cafes/CafeMap.vue?vue&type=template&id=5423b48b& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeMap_vue_vue_type_template_id_5423b48b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CafeMap.vue?vue&type=template&id=5423b48b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cafes/CafeMap.vue?vue&type=template&id=5423b48b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeMap_vue_vue_type_template_id_5423b48b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CafeMap_vue_vue_type_template_id_5423b48b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/mixins/filters/CafeTagsFilter.js":
/*!*******************************************************!*\
  !*** ./resources/js/mixins/filters/CafeTagsFilter.js ***!
  \*******************************************************/
/*! exports provided: CafeTagsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeTagsFilter", function() { return CafeTagsFilter; });
var CafeTagsFilter = {
  methods: {
    processCafeTagsFilter: function processCafeTagsFilter(cafe, tags) {
      // 如果标签不为空则进行处理
      if (tags.length > 0) {
        var cafeTags = []; // 将咖啡店所有标签推送到 cafeTags 数组中

        for (var i = 0; i < cafe.tags.length; i++) {
          cafeTags.push(cafe.tags[i].tag);
        } // 遍历所有待处理标签，如果标签在 cafeTags 数组中返回 true


        for (var i = 0; i < tags.length; i++) {
          if (cafeTags.indexOf(tags[i]) > -1) {
            return true;
          }
        } // 如果所有待处理标签都不在 cafeTags 数组中则返回 false


        return false;
      } else {
        return true;
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