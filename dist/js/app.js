(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"), require("VueRouter"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue", "VueRouter"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("Vue"), require("VueRouter")) : factory(root["Vue"], root["VueRouter"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_vue__, __WEBPACK_EXTERNAL_MODULE_vue_router__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/app.vue?vue&type=style&index=0&id=0a6dfb62&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-2!./node_modules/sass-loader/lib/loader.js??ref--2-3!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/app.vue?vue&type=style&index=0&id=0a6dfb62&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bar.vue?vue&type=style&index=0&id=c733bafc&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-2!./node_modules/sass-loader/lib/loader.js??ref--2-3!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/attribute-bar.vue?vue&type=style&index=0&id=c733bafc&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bars.vue?vue&type=style&index=0&id=17ec623e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-2!./node_modules/sass-loader/lib/loader.js??ref--2-3!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/attribute-bars.vue?vue&type=style&index=0&id=17ec623e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/weapon-inventory-cost.vue?vue&type=style&index=0&id=da12ffe2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-2!./node_modules/sass-loader/lib/loader.js??ref--2-3!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/weapon-inventory-cost.vue?vue&type=style&index=0&id=da12ffe2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/weapon-label.vue?vue&type=style&index=0&id=3b78b493&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-2!./node_modules/sass-loader/lib/loader.js??ref--2-3!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/weapon-label.vue?vue&type=style&index=0&id=3b78b493&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/Shell.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/Shell.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
var vue_property_decorator_1 = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var app_vue_1 = __importDefault(__webpack_require__(/*! ./app.vue */ "./src/vue/app.vue"));
var Shell = /** @class */ (function (_super) {
    __extends(Shell, _super);
    function Shell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shell = __decorate([
        vue_property_decorator_1.Component({
            components: { App: app_vue_1.default }
        })
    ], Shell);
    return Shell;
}(vue_1.default));
exports.default = Shell;


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/app.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/app.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
var vue_property_decorator_1 = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var weapon_label_vue_1 = __importDefault(__webpack_require__(/*! ./partial/weapon-label.vue */ "./src/vue/partial/weapon-label.vue"));
var weapon_inventory_cost_vue_1 = __importDefault(__webpack_require__(/*! ./partial/weapon-inventory-cost.vue */ "./src/vue/partial/weapon-inventory-cost.vue"));
var attribute_bars_vue_1 = __importDefault(__webpack_require__(/*! ./partial/attribute-bars.vue */ "./src/vue/partial/attribute-bars.vue"));
var attribute_bar_container_vue_1 = __importDefault(__webpack_require__(/*! ./partial/attribute-bar-container.vue */ "./src/vue/partial/attribute-bar-container.vue"));
var data_1 = __importDefault(__webpack_require__(/*! ../ts/data */ "./src/ts/data/index.ts"));
var weapon_1 = __webpack_require__(/*! ../ts/model/weapon */ "./src/ts/model/weapon.ts");
var weapon_2 = __webpack_require__(/*! ../ts/view-model/weapon */ "./src/ts/view-model/weapon.ts");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isLoading = true;
        _this.showCopyright = false;
        _this.weapons = [];
        _this.displayWeapons = [];
        _this.filteredWeapons = [];
        _this.displayDamage = {
            average: true,
            none: false,
            light: false,
            medium: false,
            heavy: false
        };
        _this.displaySpeed = {
            average: true,
            detail: false,
        };
        _this.defaults = {
            search: '',
            showOneHandedWeapons: true,
            showTwoHandedWeapons: true,
            showAltModeWeapons: false,
            showStrikeWeapons: true,
            showThrustWeapons: false,
            showProjectiles: true,
            sortValues: false,
            sortDamage: false,
            sortAttackSpeed: false,
            sortReach: false,
            globalCompare: true,
            attributesLayout: 'grid',
            attributesCollapsed: false,
            weaponsListCollapsed: false,
        };
        _this.search = null;
        _this.showOneHandedWeapons = null;
        _this.showTwoHandedWeapons = null;
        _this.showAltModeWeapons = null;
        _this.showStrikeWeapons = null;
        _this.showThrustWeapons = null;
        _this.showProjectiles = null;
        _this.sortValues = null;
        _this.sortDamage = null;
        _this.sortAttackSpeed = null;
        _this.sortReach = null;
        _this.globalCompare = null;
        _this.attributesLayout = null;
        _this.attributesCollapsed = null;
        _this.weaponsListCollapsed = null;
        _this.highestWeaponComputedAverageDamage = 0;
        _this.highestWeaponComputedAttackSpeed = 0;
        _this.highestWeaponLength = 0;
        _this.dataProvider = null;
        return _this;
    }
    Object.defineProperty(App.prototype, "selectedWeapons", {
        get: function () {
            var result = [];
            for (var i = 0; i < this.displayWeapons.length; i++) {
                if (this.displayWeapons[i].isSelected) {
                    result.push(this.displayWeapons[i]);
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    App.prototype.loadSpreadsheetData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.dataProvider.getWeapons()];
                    case 1:
                        _a.weapons = _b.sent();
                        this.displayWeapons = this.weapons.map(function (o) { return new weapon_2.DisplayWeapon(o); });
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.mounted = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.resetFilters();
                        this.dataProvider = new data_1.default(this.googleApiKey);
                        return [4 /*yield*/, this.dataProvider.init()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadSpreadsheetData()];
                    case 2:
                        _a.sent();
                        this.isLoading = false;
                        this.showCopyright = true;
                        this.deserializeState();
                        this.applyWeaponFilters();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.searchKeyUp = function () {
        console.log('keyup!');
        if (this.search != this.$refs.searchInput.value) {
            this.search = this.$refs.searchInput.value;
        }
    };
    App.prototype.onSortValuesChanged = function () {
        this.sortDamage = this.sortValues;
        this.sortAttackSpeed = this.sortValues;
        this.sortReach = this.sortValues;
    };
    App.prototype.applyWeaponFilters = function () {
        if (this.isLoading) {
            return;
        }
        this.serializeState();
        var search = this.search.toLowerCase();
        var result = [];
        for (var i = 0; i < this.displayWeapons.length; i++) {
            var weapon = this.displayWeapons[i];
            if ((search.length == 0 || weapon.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1) &&
                ((this.showOneHandedWeapons && (weapon.handedness & weapon_1.Handedness.One)) ||
                    (this.showTwoHandedWeapons && (weapon.handedness & weapon_1.Handedness.Two)))
                &&
                    ((this.showProjectiles || weapon.attackType != weapon_1.AttackType.Projectile))) {
                result.push(weapon);
            }
        }
        this.filteredWeapons = result;
    };
    App.prototype.onSelectedWeaponsChanged = function () {
        if (this.isLoading) {
            return;
        }
        this.serializeState();
    };
    // All the properties that are saved in state
    App.prototype.stateChanged = function () {
        if (this.isLoading) {
            return;
        }
        this.serializeState();
    };
    App.prototype.serializeState = function () {
        this.$router.replace({
            query: __assign({}, this.$route.query, { search: this.search, oneHanded: JSON.stringify(this.showOneHandedWeapons), twoHanded: JSON.stringify(this.showTwoHandedWeapons), altMode: JSON.stringify(this.showAltModeWeapons), strike: JSON.stringify(this.showStrikeWeapons), thrust: JSON.stringify(this.showThrustWeapons), sortValues: JSON.stringify(this.sortValues), layout: this.attributesLayout, selected: this.selectedWeapons.map(function (o) { return o.id; }).join(',') })
        });
    };
    App.prototype.deserializeState = function () {
        this.search = this.$route.query.search || '';
        this.showOneHandedWeapons = JSON.parse(this.$route.query.oneHanded || JSON.stringify(this.defaults.showOneHandedWeapons));
        this.showTwoHandedWeapons = JSON.parse(this.$route.query.twoHanded || JSON.stringify(this.defaults.showTwoHandedWeapons));
        this.showAltModeWeapons = JSON.parse(this.$route.query.altMode || JSON.stringify(this.defaults.showAltModeWeapons));
        this.showStrikeWeapons = JSON.parse(this.$route.query.strike || JSON.stringify(this.defaults.showStrikeWeapons));
        this.showThrustWeapons = JSON.parse(this.$route.query.thrust || JSON.stringify(this.defaults.showThrustWeapons));
        this.sortValues = JSON.parse(this.$route.query.sortValues || JSON.stringify(this.defaults.sortValues));
        this.attributesLayout = this.$route.query.layout || this.defaults.attributesLayout;
        var selectedIds = (this.$route.query.selected || '').split(',');
        for (var _i = 0, _a = this.displayWeapons; _i < _a.length; _i++) {
            var weapon = _a[_i];
            weapon.isSelected = selectedIds.indexOf(weapon.id) !== -1;
        }
    };
    App.prototype.selectAll = function () {
        for (var _i = 0, _a = this.displayWeapons; _i < _a.length; _i++) {
            var weapon = _a[_i];
            weapon.isSelected = true;
        }
    };
    App.prototype.unSelectAll = function () {
        for (var _i = 0, _a = this.displayWeapons; _i < _a.length; _i++) {
            var weapon = _a[_i];
            weapon.isSelected = false;
        }
        this.weaponsListCollapsed = false;
    };
    App.prototype.resetFilters = function () {
        for (var key in this.defaults) {
            this.$set(this, key, this.defaults[key]);
        }
    };
    App.prototype.reload = function () {
    };
    Object.defineProperty(App.prototype, "canSelectAll", {
        get: function () {
            for (var i = 0; i < this.displayWeapons.length; i++) {
                if (!this.displayWeapons[i].isSelected) {
                    return true;
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "canUnselectAll", {
        get: function () {
            for (var i = 0; i < this.displayWeapons.length; i++) {
                if (this.displayWeapons[i].isSelected) {
                    return true;
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        vue_property_decorator_1.Prop()
    ], App.prototype, "googleApiKey", void 0);
    __decorate([
        vue_property_decorator_1.Watch('sortValues')
    ], App.prototype, "onSortValuesChanged", null);
    __decorate([
        vue_property_decorator_1.Watch('search'),
        vue_property_decorator_1.Watch('showOneHandedWeapons'),
        vue_property_decorator_1.Watch('showTwoHandedWeapons'),
        vue_property_decorator_1.Watch('displayWeapons'),
        vue_property_decorator_1.Watch('showAltModeWeapons'),
        vue_property_decorator_1.Watch('showStrikeWeapons'),
        vue_property_decorator_1.Watch('showThrustWeapons'),
        vue_property_decorator_1.Watch('showProjectiles')
    ], App.prototype, "applyWeaponFilters", null);
    __decorate([
        vue_property_decorator_1.Watch('selectedWeapons')
    ], App.prototype, "onSelectedWeaponsChanged", null);
    __decorate([
        vue_property_decorator_1.Watch('search'),
        vue_property_decorator_1.Watch('showOneHandedWeapons'),
        vue_property_decorator_1.Watch('showTwoHandedWeapons'),
        vue_property_decorator_1.Watch('displayWeapons'),
        vue_property_decorator_1.Watch('showAltModeWeapons'),
        vue_property_decorator_1.Watch('showStrikeWeapons'),
        vue_property_decorator_1.Watch('showThrustWeapons'),
        vue_property_decorator_1.Watch('showProjectiles'),
        vue_property_decorator_1.Watch('sortValues'),
        vue_property_decorator_1.Watch('globalCompare'),
        vue_property_decorator_1.Watch('attributesLayout')
    ], App.prototype, "stateChanged", null);
    App = __decorate([
        vue_property_decorator_1.Component({
            components: { WeaponLabel: weapon_label_vue_1.default, AttributeBars: attribute_bars_vue_1.default, AttributeBarContainer: attribute_bar_container_vue_1.default, WeaponInventoryCost: weapon_inventory_cost_vue_1.default }
        })
    ], App);
    return App;
}(vue_1.default));
exports.default = App;


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bar-container.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/attribute-bar-container.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
var vue_property_decorator_1 = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var attribute_bars_vue_1 = __importDefault(__webpack_require__(/*! ./attribute-bars.vue */ "./src/vue/partial/attribute-bars.vue"));
var weapon_inventory_cost_vue_1 = __importDefault(__webpack_require__(/*! ./weapon-inventory-cost.vue */ "./src/vue/partial/weapon-inventory-cost.vue"));
var weapon_label_vue_1 = __importDefault(__webpack_require__(/*! ./weapon-label.vue */ "./src/vue/partial/weapon-label.vue"));
var AttributeBarContainer = /** @class */ (function (_super) {
    __extends(AttributeBarContainer, _super);
    function AttributeBarContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sortValues = false;
        return _this;
    }
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBarContainer.prototype, "title", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBarContainer.prototype, "iconClass", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBarContainer.prototype, "variant", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBarContainer.prototype, "sort", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBarContainer.prototype, "globalCompare", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBarContainer.prototype, "weapon", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBarContainer.prototype, "allWeapons", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBarContainer.prototype, "weapons", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBarContainer.prototype, "displayValue", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBarContainer.prototype, "prefixStyle", void 0);
    AttributeBarContainer = __decorate([
        vue_property_decorator_1.Component({ components: { AttributeBars: attribute_bars_vue_1.default, WeaponLabel: weapon_label_vue_1.default, WeaponInventoryCost: weapon_inventory_cost_vue_1.default } })
    ], AttributeBarContainer);
    return AttributeBarContainer;
}(vue_1.default));
exports.default = AttributeBarContainer;


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bar.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/attribute-bar.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
var vue_property_decorator_1 = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var AttributeBar = /** @class */ (function (_super) {
    __extends(AttributeBar, _super);
    function AttributeBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBar.prototype, "value", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBar.prototype, "displayValue", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBar.prototype, "isEnabled", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBar.prototype, "prefixStyle", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBar.prototype, "item", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBar.prototype, "variant", void 0);
    AttributeBar = __decorate([
        vue_property_decorator_1.Component
    ], AttributeBar);
    return AttributeBar;
}(vue_1.default));
exports.default = AttributeBar;


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bars.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/attribute-bars.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
var vue_property_decorator_1 = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var sort_1 = __webpack_require__(/*! ../../ts/utils/sort */ "./src/ts/utils/sort.ts");
var attribute_bar_vue_1 = __importDefault(__webpack_require__(/*! ./attribute-bar.vue */ "./src/vue/partial/attribute-bar.vue"));
var AttributeBars = /** @class */ (function (_super) {
    __extends(AttributeBars, _super);
    function AttributeBars() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.max = 0;
        _this.displayItems = [];
        return _this;
    }
    AttributeBars.prototype.mounted = function () {
        this.itemsChanged();
    };
    AttributeBars.prototype.itemsChanged = function () {
        var func = this.invert ? Math.min : Math.max;
        this.max = func.apply(void 0, (this.global ? this.allItems : this.items)
            .map(this.displayValue).filter(function (o) { return o != null && !isNaN(o); }));
        this.displayItems = this.sort ? sort_1.sortBy(this.items, this.displayValue, this.invert) : this.items.slice();
    };
    AttributeBars.prototype.formula = function (item) {
        var value = this.displayValue(item);
        return this.invert ? this.max / value : value / this.max;
    };
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBars.prototype, "items", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBars.prototype, "allItems", void 0);
    __decorate([
        vue_property_decorator_1.Prop({ type: Function, default: function (item) { return item.id; } })
    ], AttributeBars.prototype, "itemKey", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBars.prototype, "displayValue", void 0);
    __decorate([
        vue_property_decorator_1.Prop({ type: Function, default: function () { return true; } })
    ], AttributeBars.prototype, "isEnabled", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBars.prototype, "invert", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBars.prototype, "sort", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBars.prototype, "global", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBars.prototype, "prefixStyle", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBars.prototype, "variant", void 0);
    __decorate([
        vue_property_decorator_1.Watch('items'),
        vue_property_decorator_1.Watch('sort'),
        vue_property_decorator_1.Watch('global')
    ], AttributeBars.prototype, "itemsChanged", null);
    AttributeBars = __decorate([
        vue_property_decorator_1.Component({ components: { AttributeBar: attribute_bar_vue_1.default } })
    ], AttributeBars);
    return AttributeBars;
}(vue_1.default));
exports.default = AttributeBars;


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/weapon-inventory-cost.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/weapon-inventory-cost.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
var vue_property_decorator_1 = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var WeaponInventoryCost = /** @class */ (function (_super) {
    __extends(WeaponInventoryCost, _super);
    function WeaponInventoryCost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        vue_property_decorator_1.Prop()
    ], WeaponInventoryCost.prototype, "weapon", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], WeaponInventoryCost.prototype, "isTransparent", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], WeaponInventoryCost.prototype, "isSelectable", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], WeaponInventoryCost.prototype, "variant", void 0);
    WeaponInventoryCost = __decorate([
        vue_property_decorator_1.Component
    ], WeaponInventoryCost);
    return WeaponInventoryCost;
}(vue_1.default));
exports.default = WeaponInventoryCost;


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/weapon-label.vue?vue&type=script&lang=ts&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/weapon-label.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
var vue_property_decorator_1 = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var WeaponLabel = /** @class */ (function (_super) {
    __extends(WeaponLabel, _super);
    function WeaponLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        vue_property_decorator_1.Prop()
    ], WeaponLabel.prototype, "weapon", void 0);
    __decorate([
        vue_property_decorator_1.Prop({ default: false })
    ], WeaponLabel.prototype, "isHoverable", void 0);
    __decorate([
        vue_property_decorator_1.Prop({ default: false })
    ], WeaponLabel.prototype, "displayTags", void 0);
    __decorate([
        vue_property_decorator_1.Prop({ default: false })
    ], WeaponLabel.prototype, "coloredTags", void 0);
    __decorate([
        vue_property_decorator_1.Prop({ default: false })
    ], WeaponLabel.prototype, "wrapLabel", void 0);
    WeaponLabel = __decorate([
        vue_property_decorator_1.Component
    ], WeaponLabel);
    return WeaponLabel;
}(vue_1.default));
exports.default = WeaponLabel;


/***/ }),

/***/ "./node_modules/vue-class-component/dist/vue-class-component.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue-class-component/dist/vue-class-component.esm.js ***!
  \**************************************************************************/
/*! exports provided: default, createDecorator, mixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDecorator", function() { return createDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return mixins; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/**
  * vue-class-component v7.1.0
  * (c) 2015-present Evan You
  * @license MIT
  */


// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
function copyReflectionMetadata(to, from) {
    forwardMetadata(to, from);
    Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
    });
    Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
    });
}
function forwardMetadata(to, from, propertyKey) {
    var metaKeys = propertyKey
        ? Reflect.getOwnMetadataKeys(from, propertyKey)
        : Reflect.getOwnMetadataKeys(from);
    metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        }
        else {
            Reflect.defineMetadata(metaKey, metadata, to);
        }
    });
}

var fakeArray = { __proto__: [] };
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== 'object' && type !== 'function');
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (true) {
        if (!(Component.prototype instanceof vue__WEBPACK_IMPORTED_MODULE_0___default.a) && Object.keys(plainData).length > 0) {
            warn('Component class must inherit Vue or its descendant class ' +
                'when class property is used.');
        }
    }
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured',
    'serverPrefetch' // 2.6
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            }
            else {
                // typescript decorated data
                (options.mixins || (options.mixins = [])).push({
                    data: function () {
                        var _a;
                        return _a = {}, _a[key] = descriptor.value, _a;
                    }
                });
            }
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof vue__WEBPACK_IMPORTED_MODULE_0___default.a
        ? superProto.constructor
        : vue__WEBPACK_IMPORTED_MODULE_0___default.a;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
    }
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
var shouldIgnore = {
    prototype: true,
    arguments: true,
    callee: true,
    caller: true
};
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // Skip the properties that should not be overwritten
        if (shouldIgnore[key]) {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value) &&
                superDescriptor &&
                superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if ( true &&
            reservedPropertyNames.indexOf(key) >= 0) {
            warn("Static property name '" + key + "' declared on class '" + Original.name + "' " +
                'conflicts with reserved property name of Vue internal. ' +
                'It may cause unexpected behavior of the component. Consider renaming the property.');
        }
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};

/* harmony default export */ __webpack_exports__["default"] = (Component);



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/app.vue?vue&type=template&id=0a6dfb62&scoped=true&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/app.vue?vue&type=template&id=0a6dfb62&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "view is-fullheight" }, [
    _c("header", { staticClass: "app-header" }, [
      _c("div", { staticClass: "mordhau-logo", on: { click: _vm.reload } }, [
        _c("img", { attrs: { src: "image/mordhau-logo.x256.png" } }),
        _vm._v(" "),
        _c("div", { staticClass: "subtitle" }, [
          _vm._v("Unofficial tools and resources")
        ])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", { staticClass: "loading-message" }, [
            _c("i", {
              staticClass: "fas fa-spinner fa-spin",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(
              "\n            Loading data from the spreadsheet...\n        "
            )
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    !_vm.isLoading
      ? _c(
          "main",
          {
            staticClass: "view-content no-overflow primary-panels",
            class: {
              "no-weapons-selected": _vm.selectedWeapons.length == 0,
              "collapse-attributes-panel": _vm.attributesCollapsed,
              "collapse-weapons-list": _vm.weaponsListCollapsed
            }
          },
          [
            _c("div", { staticClass: "view panel panel-weapons" }, [
              _c("header", [
                _c("div", { staticClass: "weapon-filters" }, [
                  _c("div", { staticClass: "control-group is-gapless" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search,
                          expression: "search"
                        }
                      ],
                      ref: "searchInput",
                      staticClass: "input",
                      attrs: {
                        type: "search",
                        placeholder: "Search by weapon name..."
                      },
                      domProps: { value: _vm.search },
                      on: {
                        keyup: _vm.searchKeyUp,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.search = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "button is-danger is-border-text",
                        attrs: { type: "button", title: "Reset filters" },
                        on: { click: _vm.resetFilters }
                      },
                      [_c("span", [_vm._v("Reset filters")])]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "size-75 margin-top-30" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "control-group is-gapless is-wrapping no-adjacent-margin no-wrapping-margin"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "group-addon has-no-border-left has-no-horizontal-borders"
                          },
                          [
                            _c("div", { staticClass: "control-group" }, [
                              _c("label", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.showOneHandedWeapons,
                                      expression: "showOneHandedWeapons"
                                    }
                                  ],
                                  staticClass: "input",
                                  attrs: { type: "checkbox" },
                                  domProps: {
                                    checked: Array.isArray(
                                      _vm.showOneHandedWeapons
                                    )
                                      ? _vm._i(_vm.showOneHandedWeapons, null) >
                                        -1
                                      : _vm.showOneHandedWeapons
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.showOneHandedWeapons,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.showOneHandedWeapons = $$a.concat(
                                              [$$v]
                                            ))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.showOneHandedWeapons = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.showOneHandedWeapons = $$c
                                      }
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                                        1-handed\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("label", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.showTwoHandedWeapons,
                                      expression: "showTwoHandedWeapons"
                                    }
                                  ],
                                  staticClass: "input",
                                  attrs: { type: "checkbox" },
                                  domProps: {
                                    checked: Array.isArray(
                                      _vm.showTwoHandedWeapons
                                    )
                                      ? _vm._i(_vm.showTwoHandedWeapons, null) >
                                        -1
                                      : _vm.showTwoHandedWeapons
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.showTwoHandedWeapons,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.showTwoHandedWeapons = $$a.concat(
                                              [$$v]
                                            ))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.showTwoHandedWeapons = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.showTwoHandedWeapons = $$c
                                      }
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                                        2-handed\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("label", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.showProjectiles,
                                      expression: "showProjectiles"
                                    }
                                  ],
                                  staticClass: "input",
                                  attrs: { type: "checkbox" },
                                  domProps: {
                                    checked: Array.isArray(_vm.showProjectiles)
                                      ? _vm._i(_vm.showProjectiles, null) > -1
                                      : _vm.showProjectiles
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.showProjectiles,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.showProjectiles = $$a.concat([
                                              $$v
                                            ]))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.showProjectiles = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.showProjectiles = $$c
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" Projectile")
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(1)
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "control-group is-gapless" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "group-addon desktop-control is-borderless has-text-grey"
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.selectedWeapons.length) +
                          " " +
                          _vm._s(
                            _vm.selectedWeapons.length == 1
                              ? "weapon"
                              : "weapons"
                          ) +
                          " selected\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "button is-borderless is-content-aligned-left mobile-control",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.weaponsListCollapsed = !_vm.weaponsListCollapsed
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "icon",
                        class: {
                          "fas fa-chevron-up": !_vm.weaponsListCollapsed,
                          "fas fa-chevron-down": _vm.weaponsListCollapsed
                        },
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.selectedWeapons.length) +
                            " " +
                            _vm._s(
                              _vm.selectedWeapons.length == 1
                                ? "weapon"
                                : "weapons"
                            ) +
                            " selected\n                        "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "group-addon is-borderless is-expanded"
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "button is-danger is-text size-80 margin-top-40",
                      attrs: {
                        type: "button",
                        disabled:
                          _vm.weaponsListCollapsed ||
                          _vm.selectedWeapons.length == 0
                      },
                      on: { click: _vm.unSelectAll }
                    },
                    [
                      _vm._v(
                        "\n                        Unselect all\n                    "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("main", { staticClass: "view-content weapon-table-wrapper" }, [
                _c(
                  "div",
                  {
                    staticClass: "table weapon-table is-fullwidth is-hoverable"
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "table-body" },
                      _vm._l(_vm.filteredWeapons, function(weapon) {
                        return _c(
                          "div",
                          {
                            key: weapon.id,
                            staticClass: "table-row",
                            class: { "is-selected": weapon.isSelected },
                            on: {
                              click: function($event) {
                                weapon.isSelected = !weapon.isSelected
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "table-cell weapon-name-cell",
                                class: { "has-text-info": weapon.isSelected }
                              },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "weapon-list-label",
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                      }
                                    }
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: weapon.isSelected,
                                          expression: "weapon.isSelected"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: { "is-info": weapon.isSelected },
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          weapon.isSelected
                                        )
                                          ? _vm._i(weapon.isSelected, null) > -1
                                          : weapon.isSelected
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = weapon.isSelected,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  weapon,
                                                  "isSelected",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  weapon,
                                                  "isSelected",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(weapon, "isSelected", $$c)
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("WeaponLabel", {
                                      attrs: {
                                        weapon: weapon,
                                        "display-tags": true,
                                        "colored-tags": true,
                                        "wrap-label": true
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "table-cell has-text-align-right"
                              },
                              [
                                _c("WeaponInventoryCost", {
                                  attrs: {
                                    weapon: weapon,
                                    "is-selectable": true
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            false
                              ? undefined
                              : _vm._e()
                          ],
                          2
                        )
                      }),
                      0
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("footer", [
                _c(
                  "div",
                  {
                    staticClass: "filter-status",
                    staticStyle: { "font-size": "0.75rem" }
                  },
                  [
                    _vm._v(
                      "\n                    Displaying \n                    "
                    ),
                    _vm.filteredWeapons.length == _vm.displayWeapons.length
                      ? [
                          _vm._v(
                            "\n                        all " +
                              _vm._s(_vm.displayWeapons.length) +
                              " " +
                              _vm._s(
                                _vm.displayWeapons.length == 1
                                  ? "weapon variant"
                                  : "weapon variants"
                              ) +
                              "\n                    "
                          )
                        ]
                      : [
                          _vm._v(
                            "\n                       " +
                              _vm._s(_vm.filteredWeapons.length) +
                              " of " +
                              _vm._s(_vm.displayWeapons.length) +
                              " " +
                              _vm._s(
                                _vm.displayWeapons.length == 1
                                  ? "variant"
                                  : "variants"
                              ) +
                              "\n                       (" +
                              _vm._s(_vm.displayWeapons.length) +
                              " " +
                              _vm._s(
                                _vm.displayWeapons.length == 1
                                  ? "unique weapon"
                                  : "unique weapons"
                              ) +
                              ")\n                    "
                          )
                        ]
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "view panel panel-attributes" },
              [
                _vm.selectedWeapons.length == 0
                  ? [_vm._m(3)]
                  : [
                      _c(
                        "header",
                        {
                          staticClass:
                            "selected-weapons-list-wrapper desktop-control"
                        },
                        [
                          _c("div", { staticClass: "selected-weapons-list" }, [
                            _c(
                              "div",
                              { staticClass: "items" },
                              [
                                _vm._l(_vm.selectedWeapons, function(weapon) {
                                  return [
                                    _c(
                                      "div",
                                      { key: weapon.id, staticClass: "item" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "unselect icon fas fa-times-circle",
                                          on: {
                                            click: function($event) {
                                              weapon.isSelected = false
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("WeaponLabel", {
                                          key: weapon.id,
                                          attrs: {
                                            weapon: weapon,
                                            "display-tags": true
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                })
                              ],
                              2
                            )
                          ])
                        ]
                      )
                    ],
                _vm._v(" "),
                _vm.selectedWeapons.length > 0
                  ? _c("div", { staticClass: "view-content" }, [
                      _c("div", { staticClass: "view" }, [
                        _c("header", [
                          _c(
                            "div",
                            {
                              staticClass:
                                "control-group is-vertically-centered margin-left-50 margin-right-50 margin-top-20 margin-bottom-20"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "group-addon is-borderless is-paddingless"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "control-group is-gapless mobile-control"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "button is-borderless",
                                          attrs: {
                                            type: "button",
                                            title: "Collapse"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.attributesCollapsed = !_vm.attributesCollapsed
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "icon",
                                            class: {
                                              "fas fa-chevron-down":
                                                _vm.attributesCollapsed,
                                              "fas fa-chevron-up": !_vm.attributesCollapsed
                                            },
                                            attrs: { "aria-hidden": "true" }
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Statistics")])
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "control-group is-gapless desktop-control"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "button is-icon",
                                          attrs: {
                                            type: "button",
                                            disabled:
                                              _vm.attributesLayout == "grid",
                                            title: "Grid layout"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.attributesLayout = "grid"
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "icon fas fa-th-large",
                                            attrs: { "aria-hidden": "true" }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "button is-icon",
                                          attrs: {
                                            type: "button",
                                            disabled:
                                              _vm.attributesLayout == "list",
                                            title: "List layout"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.attributesLayout = "list"
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "icon fas fa-th-list",
                                            attrs: { "aria-hidden": "true" }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", {
                                staticClass:
                                  "group-addon is-borderless is-expanded mobile-control"
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "group-addon control-group is-borderless has-no-padding-right size-75 padding-top-50",
                                  style: {
                                    opacity: _vm.attributesCollapsed ? 0.5 : 1
                                  }
                                },
                                [
                                  _c("label", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.sortValues,
                                          expression: "sortValues"
                                        }
                                      ],
                                      staticClass: "input",
                                      attrs: {
                                        type: "checkbox",
                                        disabled: _vm.attributesCollapsed
                                      },
                                      domProps: {
                                        checked: Array.isArray(_vm.sortValues)
                                          ? _vm._i(_vm.sortValues, null) > -1
                                          : _vm.sortValues
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.sortValues,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                (_vm.sortValues = $$a.concat([
                                                  $$v
                                                ]))
                                            } else {
                                              $$i > -1 &&
                                                (_vm.sortValues = $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1)))
                                            }
                                          } else {
                                            _vm.sortValues = $$c
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" Sort")
                                  ]),
                                  _vm._v(" "),
                                  _c("label", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.globalCompare,
                                          expression: "globalCompare"
                                        }
                                      ],
                                      staticClass: "input",
                                      attrs: {
                                        type: "checkbox",
                                        disabled: _vm.attributesCollapsed
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.globalCompare
                                        )
                                          ? _vm._i(_vm.globalCompare, null) > -1
                                          : _vm.globalCompare
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.globalCompare,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                (_vm.globalCompare = $$a.concat(
                                                  [$$v]
                                                ))
                                            } else {
                                              $$i > -1 &&
                                                (_vm.globalCompare = $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1)))
                                            }
                                          } else {
                                            _vm.globalCompare = $$c
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" Compare to all")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "group-addon has-no-border-left has-no-border-right control-group is-gapless is-paddingless size-75",
                                  style: {
                                    opacity: _vm.attributesCollapsed ? 0.5 : 1
                                  }
                                },
                                [
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _c("label", { staticClass: "group-addon" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.displayDamage.average,
                                          expression: "displayDamage.average"
                                        }
                                      ],
                                      staticClass: "input",
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.displayDamage.average
                                        )
                                          ? _vm._i(
                                              _vm.displayDamage.average,
                                              null
                                            ) > -1
                                          : _vm.displayDamage.average
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.displayDamage.average,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.displayDamage,
                                                  "average",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.displayDamage,
                                                  "average",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.displayDamage,
                                              "average",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Average")])
                                  ]),
                                  _vm._v(" "),
                                  _c("label", { staticClass: "group-addon" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.displayDamage.none,
                                          expression: "displayDamage.none"
                                        }
                                      ],
                                      staticClass: "input",
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.displayDamage.none
                                        )
                                          ? _vm._i(
                                              _vm.displayDamage.none,
                                              null
                                            ) > -1
                                          : _vm.displayDamage.none
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.displayDamage.none,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.displayDamage,
                                                  "none",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.displayDamage,
                                                  "none",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.displayDamage,
                                              "none",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm._m(5)
                                  ]),
                                  _vm._v(" "),
                                  _c("label", { staticClass: "group-addon" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.displayDamage.light,
                                          expression: "displayDamage.light"
                                        }
                                      ],
                                      staticClass: "input",
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.displayDamage.light
                                        )
                                          ? _vm._i(
                                              _vm.displayDamage.light,
                                              null
                                            ) > -1
                                          : _vm.displayDamage.light
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.displayDamage.light,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.displayDamage,
                                                  "light",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.displayDamage,
                                                  "light",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.displayDamage,
                                              "light",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("1")])
                                  ]),
                                  _vm._v(" "),
                                  _c("label", { staticClass: "group-addon" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.displayDamage.medium,
                                          expression: "displayDamage.medium"
                                        }
                                      ],
                                      staticClass: "input",
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.displayDamage.medium
                                        )
                                          ? _vm._i(
                                              _vm.displayDamage.medium,
                                              null
                                            ) > -1
                                          : _vm.displayDamage.medium
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.displayDamage.medium,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.displayDamage,
                                                  "medium",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.displayDamage,
                                                  "medium",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.displayDamage,
                                              "medium",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("2")])
                                  ]),
                                  _vm._v(" "),
                                  _c("label", { staticClass: "group-addon" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.displayDamage.heavy,
                                          expression: "displayDamage.heavy"
                                        }
                                      ],
                                      staticClass: "input",
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.displayDamage.heavy
                                        )
                                          ? _vm._i(
                                              _vm.displayDamage.heavy,
                                              null
                                            ) > -1
                                          : _vm.displayDamage.heavy
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.displayDamage.heavy,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.displayDamage,
                                                  "heavy",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.displayDamage,
                                                  "heavy",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.displayDamage,
                                              "heavy",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("3")])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "group-addon has-no-border-left has-no-border-right control-group is-gapless is-paddingless size-75 has-no-margin-top",
                                  style: {
                                    opacity: _vm.attributesCollapsed ? 0.5 : 1
                                  }
                                },
                                [
                                  _vm._m(6),
                                  _vm._v(" "),
                                  _c("label", { staticClass: "group-addon" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.displaySpeed.average,
                                          expression: "displaySpeed.average"
                                        }
                                      ],
                                      staticClass: "input",
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.displaySpeed.average
                                        )
                                          ? _vm._i(
                                              _vm.displaySpeed.average,
                                              null
                                            ) > -1
                                          : _vm.displaySpeed.average
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.displaySpeed.average,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.displaySpeed,
                                                  "average",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.displaySpeed,
                                                  "average",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.displaySpeed,
                                              "average",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Average")])
                                  ]),
                                  _vm._v(" "),
                                  _c("label", { staticClass: "group-addon" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.displaySpeed.detail,
                                          expression: "displaySpeed.detail"
                                        }
                                      ],
                                      staticClass: "input",
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.displaySpeed.detail
                                        )
                                          ? _vm._i(
                                              _vm.displaySpeed.detail,
                                              null
                                            ) > -1
                                          : _vm.displaySpeed.detail
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.displaySpeed.detail,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.displaySpeed,
                                                  "detail",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.displaySpeed,
                                                  "detail",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.displaySpeed,
                                              "detail",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Full")])
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "view-content" }, [
                          !_vm.attributesCollapsed
                            ? _c(
                                "div",
                                {
                                  staticClass: "attribute-bars",
                                  class: ["layout-" + _vm.attributesLayout]
                                },
                                [
                                  _vm.displayDamage.average
                                    ? _c("AttributeBarContainer", {
                                        attrs: {
                                          "all-weapons": _vm.displayWeapons,
                                          weapons: _vm.selectedWeapons,
                                          "global-compare": _vm.globalCompare,
                                          sort: _vm.sortValues,
                                          title: "Average damage",
                                          variant: "red",
                                          "icon-class": "fas fa-balance-scale",
                                          "display-value": function(weapon) {
                                            return weapon.computedDamage.averageDamage.toFixed(
                                              2
                                            )
                                          }
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("AttributeBarContainer", {
                                    attrs: {
                                      "all-weapons": _vm.displayWeapons,
                                      weapons: _vm.selectedWeapons,
                                      "global-compare": _vm.globalCompare,
                                      sort: _vm.sortValues,
                                      title: "Attack speed",
                                      variant: "green",
                                      "icon-class": "fas fa-stopwatch",
                                      "display-value": function(weapon) {
                                        return weapon.computedSpeed.attack
                                          ? weapon.computedSpeed.attack.toFixed(
                                              2
                                            )
                                          : null
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("AttributeBarContainer", {
                                    attrs: {
                                      "all-weapons": _vm.displayWeapons,
                                      weapons: _vm.selectedWeapons,
                                      "global-compare": _vm.globalCompare,
                                      sort: _vm.sortValues,
                                      title: "Reach",
                                      variant: "blue",
                                      "icon-class": "fas fa-arrows-alt-h",
                                      "display-value": function(weapon) {
                                        return weapon.length
                                      },
                                      "prefix-style": { "min-width": "1.75rem" }
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        ])
                      ])
                    ])
                  : _vm._e()
              ],
              2
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("footer", [
      _vm.showCopyright
        ? _c("div", { staticClass: "data-copyright" }, [
            _c("div", { staticClass: "copyright-title" }, [
              _vm._v(
                "\n                All weapon/item data displayed on this page is loaded from a Google Sheet: \n                "
              ),
              _c(
                "a",
                {
                  attrs: {
                    href:
                      "https://docs.google.com/spreadsheets/d/1HXS_aF9CKeGKg6OecwCw3WobZWcTjDkp_4ipN1vnyVk",
                    target: "_blank"
                  }
                },
                [
                  _vm.dataProvider && _vm.dataProvider.spreadsheet
                    ? [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm.dataProvider.spreadsheet.properties.title
                            ) +
                            "\n                    "
                        )
                      ]
                    : [_c("i", [_vm._v("Loading...")])]
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "copyright-dismiss button is-icon is-transparent is-danger is-square is-inverted",
                attrs: { type: "button", title: "Dismiss" },
                on: {
                  click: function($event) {
                    _vm.showCopyright = false
                  }
                }
              },
              [
                _c("i", {
                  staticClass: "icon fas fa-times",
                  attrs: { "aria-hidden": "true" }
                })
              ]
            )
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author" }, [
      _c("span", [
        _vm._v("Created and maintained by "),
        _c(
          "a",
          {
            attrs: {
              href: "https://steamcommunity.com/id/Janne252/",
              target: "_blank"
            }
          },
          [_vm._v("Janne252")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "group-addon is-borderless" }, [
      _c("div", { staticClass: "control-group" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-header" }, [
      _c("div", { staticClass: "table-row" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "message is-info" }, [
      _c("div", { staticClass: "message-content" }, [
        _c("i", {
          staticClass: "fas fa-info-circle",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(
          "\n                        Choose some weapons from the list to compare their attributes.\n                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "group-addon has-background-light" }, [
      _c("i", {
        staticClass: "fas fa-shield-alt",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-text-danger" }, [
      _c("i", { staticClass: "fas fa-times", attrs: { "aria-hidden": "true" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "group-addon has-background-light" }, [
      _c("i", {
        staticClass: "fas fa-stopwatch",
        attrs: { "aria-hidden": "true" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bar-container.vue?vue&type=template&id=31445af6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/attribute-bar-container.vue?vue&type=template&id=31445af6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    [
      _c("div", { staticClass: "control-group size-80" }, [
        _c(
          "span",
          { staticClass: "group-addon is-borderless has-no-padding-left" },
          [
            _c("i", {
              class: [_vm.iconClass],
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v("  " + _vm._s(_vm.title) + "\n        ")
          ]
        ),
        _vm._v(" "),
        _c("span", {
          staticClass: "control-group is-borderless is-expanded mobile-control"
        }),
        _vm._v(" "),
        _c("label", { staticClass: "margin-top-40" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.sortValues,
                expression: "sortValues"
              }
            ],
            staticClass: "input",
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.sortValues)
                ? _vm._i(_vm.sortValues, null) > -1
                : _vm.sortValues
            },
            on: {
              change: function($event) {
                var $$a = _vm.sortValues,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.sortValues = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.sortValues = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.sortValues = $$c
                }
              }
            }
          }),
          _vm._v(" Sort\n        ")
        ])
      ]),
      _vm._v(" "),
      _c("AttributeBars", {
        attrs: {
          variant: [_vm.variant],
          "all-items": _vm.allWeapons,
          items: _vm.weapons,
          "display-value": _vm.displayValue,
          global: _vm.globalCompare,
          sort: _vm.sortValues || (_vm.sort && _vm.sortValues),
          "prefix-style": _vm.prefixStyle
        },
        scopedSlots: _vm._u([
          {
            key: "label",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("WeaponInventoryCost", {
                  attrs: { weapon: item, variant: "attribute-bar" }
                }),
                _vm._v(" "),
                _c("WeaponLabel", {
                  attrs: { weapon: item, "display-tags": true }
                })
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bar.vue?vue&type=template&id=c733bafc&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/attribute-bar.vue?vue&type=template&id=c733bafc&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "attribute-bar-wrapper", class: [_vm.variant] },
    [
      _c(
        "div",
        {
          staticClass: "attribute-bar",
          style: { width: _vm.isEnabled ? _vm.value * 100 + "%" : "0%" }
        },
        [
          _c("div", { staticClass: "title-wrapper" }, [
            _c("div", { staticClass: "title title-overflown" }, [
              _c(
                "div",
                { staticClass: "title-prefix", style: _vm.prefixStyle },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.isEnabled ? _vm.displayValue : "N/A") +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "title-content" },
                [_vm._t("label", null, { item: _vm.item })],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "title title-primary" }, [
              _c(
                "div",
                { staticClass: "title-prefix", style: _vm.prefixStyle },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.displayValue) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "title-content" },
                [_vm._t("label", null, { item: _vm.item })],
                2
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bars.vue?vue&type=template&id=17ec623e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/attribute-bars.vue?vue&type=template&id=17ec623e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "attribute-bar-container" },
    _vm._l(_vm.displayItems, function(item) {
      return _c("AttributeBar", {
        key: _vm.itemKey(item),
        attrs: {
          value: _vm.formula(item),
          "display-value": _vm.displayValue(item),
          "is-enabled": _vm.isEnabled(item),
          "prefix-style": _vm.prefixStyle,
          item: item,
          variant: _vm.variant
        },
        scopedSlots: _vm._u(
          [
            {
              key: "label",
              fn: function(ref) {
                var item = ref.item
                return _vm._t("label", null, { item: item })
              }
            }
          ],
          null,
          true
        )
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/weapon-inventory-cost.vue?vue&type=template&id=da12ffe2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/weapon-inventory-cost.vue?vue&type=template&id=da12ffe2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "inventory-cost",
      class: [
        "is-variant-" + _vm.variant,
        {
          "is-selected": _vm.weapon.isSelected,
          "is-selectable": _vm.isSelectable
        }
      ]
    },
    [
      _c("span", { staticClass: "value" }, [
        _vm._v(
          "\n        " +
            _vm._s(
              _vm.weapon.pointCost - (_vm.weapon.isPeasantWeapon ? 8 : 0)
            ) +
            "\n    "
        )
      ]),
      _vm._v(" "),
      _vm.weapon.isPeasantWeapon
        ? _c(
            "span",
            {
              staticClass: "adjusted-value",
              attrs: { title: "Peasant perk included" }
            },
            [
              _vm._v(
                "\n        (" +
                  _vm._s(_vm.weapon.pointCost) +
                  ")                                                \n    "
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/weapon-label.vue?vue&type=template&id=3b78b493&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/weapon-label.vue?vue&type=template&id=3b78b493&scoped=true& ***!
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
  return _c(
    "div",
    {
      staticClass: "weapon",
      class: { "is-hoverable": _vm.isHoverable, "is-wrapping": _vm.wrapLabel }
    },
    [
      _vm.isHoverable
        ? _c("div", { staticClass: "hover-unselect-icon" }, [
            _c("i", {
              staticClass: "fas fa-times",
              attrs: { "aria-hidden": "true" },
              on: {
                click: function($event) {
                  _vm.weapon.isSelected = false
                }
              }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm._t("before"),
      _vm._v(" "),
      _c(
        "span",
        { style: { "font-weight": _vm.displayTags ? "bold" : "normal" } },
        [_vm._v(_vm._s(_vm.weapon.name) + " ")]
      ),
      _vm._v(" "),
      _vm.displayTags
        ? [
            _c("span", { staticClass: "weapon-tag" }, [
              _c("span", { staticClass: "bar" }, [_vm._v("[")]),
              _vm._v(" "),
              _c("span", { staticClass: "content" }, [
                _vm._v(_vm._s(_vm.weapon.attackTypeLabel))
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "bar" }, [_vm._v("]")])
            ]),
            _vm._v(" "),
            _vm.weapon.altMode
              ? _c("span", { staticClass: "weapon-tag" }, [
                  _c("span", { staticClass: "bar" }, [_vm._v("[")]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "content",
                      class: { "tag-alt-mode": _vm.coloredTags }
                    },
                    [_vm._v("Alt")]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "bar" }, [_vm._v("]")])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("span", { staticClass: "weapon-tag" }, [
              _c("span", { staticClass: "bar" }, [_vm._v("[")]),
              _vm._v(" "),
              _c("span", { staticClass: "content" }, [
                _vm._v(_vm._s(_vm.weapon.handednessLabel))
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "bar" }, [_vm._v("]")])
            ]),
            _vm._v(" "),
            _vm.weapon.isPeasantWeapon
              ? _c("span", { staticClass: "weapon-tag" }, [
                  _c("span", { staticClass: "bar" }, [_vm._v("[")]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "content",
                      class: { "tag-peasant": _vm.coloredTags }
                    },
                    [_vm._v(_vm._s(_vm.weapon.peasantLabel))]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "bar" }, [_vm._v("]")])
                ])
              : _vm._e()
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm._t("after")
    ],
    2
  )
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

/***/ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/vue-property-decorator.js ***!
  \***************************************************************************/
/*! exports provided: Component, Vue, Mixins, Inject, Provide, Model, Prop, Watch, Emit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inject", function() { return Inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provide", function() { return Provide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return Prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return Watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emit", function() { return Emit; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return vue__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mixins", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1__["mixins"]; });

/** vue-property-decorator verson 8.1.1 MIT LICENSE copyright 2018 kaorun343 */
/// <reference types='reflect-metadata'/>




/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) && typeof options !== 'function' && typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                if (returnValue !== undefined)
                    args.unshift(returnValue);
                _this.$emit.apply(_this, [event || key].concat(args));
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}


/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ts/data/index.ts":
/*!******************************!*\
  !*** ./src/ts/data/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var weapon_1 = __webpack_require__(/*! ../model/weapon */ "./src/ts/model/weapon.ts");
var projectile_1 = __importDefault(__webpack_require__(/*! ../model/projectile */ "./src/ts/model/projectile.ts"));
var SPRADSHEET_ID = '1HXS_aF9CKeGKg6OecwCw3WobZWcTjDkp_4ipN1vnyVk';
var DataProvider = /** @class */ (function () {
    function DataProvider(googleApiKey, cachingDurationSeconds) {
        if (cachingDurationSeconds === void 0) { cachingDurationSeconds = 60 * 60; }
        this.googleApiKey = googleApiKey;
        this.cachingDurationSeconds = cachingDurationSeconds;
    }
    DataProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getSpreadsheet()];
                    case 1:
                        _a.spreadsheet = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataProvider.prototype.buildUrl = function (method, params) {
        if (params === void 0) { params = ''; }
        var apiMethodPath = '';
        switch (method) {
            case SheetsApiMethod.Get:
                apiMethodPath = '';
                break;
            case SheetsApiMethod.Values:
                apiMethodPath = '/values/';
                break;
            default:
                throw new Error("Unsupported API method " + method);
        }
        var url = "https://sheets.googleapis.com/v4/spreadsheets/" + SPRADSHEET_ID + apiMethodPath + params + "?key=" + this.googleApiKey;
        return url;
    };
    DataProvider.prototype.requestCached = function (key, url) {
        return __awaiter(this, void 0, void 0, function () {
            var cached, request, data, _a, _b, expiresAt;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        cached = JSON.parse(localStorage.getItem(key) || 'null');
                        if (cached && new Date(cached.expiresAt).getTime() >= new Date().getTime()) {
                            return [2 /*return*/, cached.data];
                        }
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        request = _c.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, request.text()];
                    case 2:
                        data = _b.apply(_a, [_c.sent()]);
                        if (data.error == null) {
                            expiresAt = new Date;
                            expiresAt.setSeconds(expiresAt.getSeconds() + this.cachingDurationSeconds);
                            localStorage.setItem(key, JSON.stringify({
                                data: data,
                                expiresAt: expiresAt
                            }));
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    DataProvider.prototype.getSpreadsheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestCached('meta-data', this.buildUrl(SheetsApiMethod.Get))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataProvider.prototype.getSheetData = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestCached("sheet-data-" + name, this.buildUrl(SheetsApiMethod.Values, name))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataProvider.prototype.getWeapons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, meleeWeaponsData, projectileWeaponData, result, weapons, meleeHeaderRows, projectileHeaderRows, parseWeapons, name_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.getSheetData(this.spreadsheet.sheets[0].properties.title),
                            this.getSheetData(this.spreadsheet.sheets[3].properties.title)
                        ])];
                    case 1:
                        _a = _b.sent(), meleeWeaponsData = _a[0], projectileWeaponData = _a[1];
                        result = [];
                        weapons = {};
                        meleeHeaderRows = [meleeWeaponsData.values[0], meleeWeaponsData.values[1]];
                        projectileHeaderRows = [projectileWeaponData.values[0], projectileWeaponData.values[1]];
                        weapon_1.MeleeWeapon.Schema.generate(meleeHeaderRows);
                        projectile_1.default.Schema.generate(projectileHeaderRows);
                        parseWeapons = function (rows, varaintClass, headerRows, data) {
                            var rowIndex = -1;
                            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                                var row = rows_1[_i];
                                rowIndex++;
                                if (rowIndex < headerRows.length) {
                                    continue;
                                }
                                var variant = new varaintClass(row);
                                if (!(variant.name in weapons)) {
                                    weapons[variant.name] = new weapon_1.Weapon(variant.name);
                                }
                                weapons[variant.name].variants.push(variant);
                            }
                        };
                        parseWeapons(meleeWeaponsData.values, weapon_1.MeleeWeapon, meleeHeaderRows, meleeWeaponsData);
                        parseWeapons(projectileWeaponData.values, projectile_1.default, projectileHeaderRows, projectileWeaponData);
                        for (name_1 in weapons) {
                            weapons[name_1].variants.sort(weapon_1.MeleeWeapon.sorter);
                            result.push(weapons[name_1]);
                        }
                        result.sort(weapon_1.Weapon.sorter);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return DataProvider;
}());
exports.default = DataProvider;
var SheetsApiMethod;
(function (SheetsApiMethod) {
    SheetsApiMethod["Get"] = "get";
    SheetsApiMethod["Values"] = "values";
})(SheetsApiMethod || (SheetsApiMethod = {}));


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../sass/index.scss */ "./src/sass/index.scss");
var vue_router_1 = __importDefault(__webpack_require__(/*! vue-router */ "vue-router"));
var Shell_vue_1 = __importDefault(__webpack_require__(/*! ../vue/Shell.vue */ "./src/vue/Shell.vue"));
var router = new vue_router_1.default({
    mode: 'hash',
});
var vue = new Shell_vue_1.default({
    el: '#app',
    router: router,
});


/***/ }),

/***/ "./src/ts/model/index.ts":
/*!*******************************!*\
  !*** ./src/ts/model/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel = /** @class */ (function () {
    function BaseModel(data) {
        if (data) {
            this.constructor.Schema.populate(this, data);
        }
    }
    BaseModel.sorter = function (a, b) {
        var _a = a.getSortKey();
        var _b = b.getSortKey();
        if (_a < _b)
            return -1;
        if (_a > _b)
            return 1;
        return 0;
    };
    return BaseModel;
}());
exports.default = BaseModel;
var Schema = /** @class */ (function () {
    function Schema(fields) {
        this.fields = [];
        this.fields = fields;
    }
    Schema.prototype.resolveColumnIndex = function (headerRows, field) {
        var isObject = false;
        var result = {};
        var startIndex = 0;
        for (var i = 0; i < headerRows.length; i++) {
            var headerRow = headerRows[i];
            var map = field.mapping[i];
            if (map != null) {
                if (typeof map == 'string') {
                    startIndex = headerRow.indexOf(map, startIndex);
                }
                else {
                    isObject = true;
                    for (var key in map) {
                        result[field.name + "." + key] = headerRow.indexOf(map[key], startIndex);
                    }
                }
            }
        }
        if (!isObject) {
            result[field.name] = startIndex;
        }
        return result;
    };
    Schema.prototype.generate = function (headerRows) {
        for (var _i = 0, _c = this.fields; _i < _c.length; _i++) {
            var field = _c[_i];
            field.columnIndex = this.resolveColumnIndex(headerRows, field);
        }
    };
    Schema.prototype.add = function (field) {
        this.fields.push(field);
    };
    Schema.prototype.populate = function (instance, data) {
        for (var _i = 0, _c = this.fields; _i < _c.length; _i++) {
            var field = _c[_i];
            for (var path in field.columnIndex) {
                var value = data[field.columnIndex[path]];
                var pathParts = path.split('.');
                var targetObject = instance;
                for (var i = 0; i < pathParts.length; i++) {
                    var part = pathParts[i];
                    if (i < pathParts.length - 1 && pathParts.length > 1) {
                        if (targetObject[part] == null) {
                            targetObject[part] = {};
                        }
                        targetObject = targetObject[part];
                    }
                    else {
                        targetObject[part] = value;
                    }
                }
                if (field.converter) {
                    var fullValue = instance[pathParts[0]];
                    instance[pathParts[0]] = field.converter(fullValue);
                }
            }
        }
    };
    return Schema;
}());
exports.Schema = Schema;
var __schemaMappingTempStore = [];
function Map(mapping, converter) {
    if (converter === void 0) { converter = null; }
    return function (target, propertyName) {
        var model = target;
        __schemaMappingTempStore.push({
            prototype: target,
            field: {
                mapping: mapping,
                model: model,
                name: propertyName,
                converter: converter,
            }
        });
    };
}
exports.Map = Map;
function Model(constructor) {
    var _c;
    var schemaFields = [];
    for (var i = __schemaMappingTempStore.length - 1; i >= 0; i--) {
        var field = __schemaMappingTempStore[i];
        if (field.prototype == constructor.prototype) {
            schemaFields.push(field.field);
            __schemaMappingTempStore.splice(i, 1);
        }
    }
    return _c = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return class_1;
        }(constructor)),
        _c.Schema = new Schema(schemaFields),
        _c;
}
exports.Model = Model;
function propertyCollection(func) {
    return function (data) {
        for (var key in data) {
            data[key] = func(data[key]);
        }
        return data;
    };
}
exports.propertyCollection = propertyCollection;


/***/ }),

/***/ "./src/ts/model/projectile.ts":
/*!************************************!*\
  !*** ./src/ts/model/projectile.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var weapon_1 = __webpack_require__(/*! ./weapon */ "./src/ts/model/weapon.ts");
var _1 = __importStar(__webpack_require__(/*! . */ "./src/ts/model/index.ts"));
var Projectile = /** @class */ (function (_super) {
    __extends(Projectile, _super);
    function Projectile(data) {
        var _this = _super.call(this, data) || this;
        if (data == null) {
            return _this;
        }
        _this.attackType = weapon_1.AttackType.Projectile;
        _this.handedness = weapon_1.resolveHandedness(_this.type);
        _this.generateId();
        return _this;
    }
    Projectile.prototype.getSortKey = function () {
        return this.name + 'projectile' + (this.canFlinch ? '1' : '0');
    };
    Projectile.prototype.generateId = function () {
        var handednessStr = '';
        if (this.handedness & weapon_1.Handedness.One && this.handedness & weapon_1.Handedness.Two) {
            handednessStr = '3';
        }
        else if (this.handedness & weapon_1.Handedness.One) {
            handednessStr = '1';
        }
        else if (this.handedness & weapon_1.Handedness.Two) {
            handednessStr = '2';
        }
        this.id = this.name.replace(/ /g, '-') + "-projectile-" + (this.canFlinch ? '1' : '0') + handednessStr;
    };
    __decorate([
        _1.Map([null, 'Name'])
    ], Projectile.prototype, "name", void 0);
    __decorate([
        _1.Map([null, 'Type'])
    ], Projectile.prototype, "type", void 0);
    __decorate([
        _1.Map([null, 'Is Melee Weapon'], function (o) { return o.toLowerCase() == 'yes'; })
    ], Projectile.prototype, "isMeleeWeapon", void 0);
    __decorate([
        _1.Map([null, 'Can Flinch'], function (o) { return o.toLowerCase() == 'yes'; })
    ], Projectile.prototype, "canFlinch", void 0);
    __decorate([
        _1.Map([null, 'Point Cost'], parseInt)
    ], Projectile.prototype, "pointCost", void 0);
    __decorate([
        _1.Map([null, 'Value'], parseFloat)
    ], Projectile.prototype, "value", void 0);
    __decorate([
        _1.Map(['Damage [No Armor]', { head: 'Head', torso: 'Torso', legs: 'Legs' }], _1.propertyCollection(parseFloat))
    ], Projectile.prototype, "damageNoArmor", void 0);
    __decorate([
        _1.Map(['Damage [Light Armor]', { head: 'Head', torso: 'Torso', legs: 'Legs' }], _1.propertyCollection(parseFloat))
    ], Projectile.prototype, "damageLightArmor", void 0);
    __decorate([
        _1.Map(['Damage [Medium Armor]', { head: 'Head', torso: 'Torso', legs: 'Legs' }], _1.propertyCollection(parseFloat))
    ], Projectile.prototype, "damageMediumArmor", void 0);
    __decorate([
        _1.Map(['Damage [Heavy Armor]', { head: 'Head', torso: 'Torso', legs: 'Legs' }], _1.propertyCollection(parseFloat))
    ], Projectile.prototype, "damageHeavyArmor", void 0);
    __decorate([
        _1.Map([null, { averageDamage: 'Avg. Damage', dps: 'DPS' }], _1.propertyCollection(parseFloat))
    ], Projectile.prototype, "computedDamage", void 0);
    __decorate([
        _1.Map(['Speed', { draw: 'Draw', combo: 'Reload' }], _1.propertyCollection(parseFloat))
    ], Projectile.prototype, "speed", void 0);
    __decorate([
        _1.Map(['Speed', { computedSpeed: 'Attack Speed' }], _1.propertyCollection(parseFloat))
    ], Projectile.prototype, "computedSpeed", void 0);
    __decorate([
        _1.Map([null, 'Max Ammo'], parseFloat)
    ], Projectile.prototype, "maxAmmo", void 0);
    __decorate([
        _1.Map([null, 'Projectile Speed'], parseFloat)
    ], Projectile.prototype, "projectileSpeed", void 0);
    __decorate([
        _1.Map([null, 'Gravity Scale'], parseFloat)
    ], Projectile.prototype, "gravityScale", void 0);
    __decorate([
        _1.Map(['Miscellaneous', 'Wood Damage'], parseFloat)
    ], Projectile.prototype, "woodDamage", void 0);
    __decorate([
        _1.Map(['Miscellaneous', 'Stone Damage'], parseFloat)
    ], Projectile.prototype, "stoneDamage", void 0);
    __decorate([
        _1.Map(['Miscellaneous', 'Peasant Perk'], function (o) { return o != null && o.toLowerCase() == 'yes'; })
    ], Projectile.prototype, "isPeasantWeapon", void 0);
    Projectile = __decorate([
        _1.Model
    ], Projectile);
    return Projectile;
}(_1.default));
exports.default = Projectile;


/***/ }),

/***/ "./src/ts/model/weapon.ts":
/*!********************************!*\
  !*** ./src/ts/model/weapon.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __importStar(__webpack_require__(/*! . */ "./src/ts/model/index.ts"));
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name) {
        var _this = _super.call(this) || this;
        _this.variants = [];
        _this.name = name;
        _this.id = name ? name.toLowerCase().replace(/\s/g, '-') : null;
        return _this;
    }
    Weapon.prototype.getSortKey = function () {
        return this.name;
    };
    return Weapon;
}(_1.default));
exports.Weapon = Weapon;
var MeleeWeapon = /** @class */ (function (_super) {
    __extends(MeleeWeapon, _super);
    function MeleeWeapon(data) {
        var _this = _super.call(this, data) || this;
        if (data == null) {
            return _this;
        }
        _this.attackType = _this.resolveAttackType(_this.attack);
        _this.handedness = resolveHandedness(_this.type);
        return _this;
    }
    MeleeWeapon.prototype.getSortKey = function () {
        return this.name + this.attack + (this.altMode ? 'B' : 'A');
    };
    MeleeWeapon.prototype.resolveAttackType = function (value) {
        switch (value) {
            case 'Strike':
                return AttackType.Strike;
            case 'Thrust':
                return AttackType.Thrust;
        }
    };
    __decorate([
        _1.Map([null, 'Name'])
    ], MeleeWeapon.prototype, "name", void 0);
    __decorate([
        _1.Map([null, 'Attack'])
    ], MeleeWeapon.prototype, "attack", void 0);
    __decorate([
        _1.Map([null, 'Alt Mode'], function (o) { return o.toLowerCase() == 'on'; })
    ], MeleeWeapon.prototype, "altMode", void 0);
    __decorate([
        _1.Map([null, 'Type'])
    ], MeleeWeapon.prototype, "type", void 0);
    __decorate([
        _1.Map([null, 'Stop On Hit'], function (o) { return o.toLowerCase() == 'yes'; })
    ], MeleeWeapon.prototype, "stopOnHit", void 0);
    __decorate([
        _1.Map([null, 'Can Combo'], function (o) { return o.toLowerCase() == 'yes'; })
    ], MeleeWeapon.prototype, "canCombo", void 0);
    __decorate([
        _1.Map([null, 'Can Flinch'], function (o) { return o.toLowerCase() == 'yes'; })
    ], MeleeWeapon.prototype, "canFlinch", void 0);
    __decorate([
        _1.Map([null, 'Point Cost'], parseInt)
    ], MeleeWeapon.prototype, "pointCost", void 0);
    __decorate([
        _1.Map([null, 'Value'], parseFloat)
    ], MeleeWeapon.prototype, "value", void 0);
    __decorate([
        _1.Map(['Damage [No Armor]', { head: 'Head', torso: 'Torso', legs: 'Legs' }], _1.propertyCollection(parseFloat))
    ], MeleeWeapon.prototype, "damageNoArmor", void 0);
    __decorate([
        _1.Map(['Damage [Light Armor]', { head: 'Head', torso: 'Torso', legs: 'Legs' }], _1.propertyCollection(parseFloat))
    ], MeleeWeapon.prototype, "damageLightArmor", void 0);
    __decorate([
        _1.Map(['Damage [Medium Armor]', { head: 'Head', torso: 'Torso', legs: 'Legs' }], _1.propertyCollection(parseFloat))
    ], MeleeWeapon.prototype, "damageMediumArmor", void 0);
    __decorate([
        _1.Map(['Damage [Heavy Armor]', { head: 'Head', torso: 'Torso', legs: 'Legs' }], _1.propertyCollection(parseFloat))
    ], MeleeWeapon.prototype, "damageHeavyArmor", void 0);
    __decorate([
        _1.Map([null, { averageDamage: 'Avg. Damage', dps: 'DPS', cdps: 'CDPS', averageDps: 'Avg. DPS' }], _1.propertyCollection(parseFloat))
    ], MeleeWeapon.prototype, "computedDamage", void 0);
    __decorate([
        _1.Map(['Stamina', { miss: 'Miss Cost', feint: 'Feint Cost', morph: 'Morph Cost', drain: 'Stamina Drain', parryDrainNegation: 'Parry Drain Negation' }], _1.propertyCollection(parseFloat))
    ], MeleeWeapon.prototype, "stamina", void 0);
    __decorate([
        _1.Map(['Speed', { windup: 'Windup', combo: 'Combo', release: 'Release', recovery: 'Recovery' }], _1.propertyCollection(parseFloat))
    ], MeleeWeapon.prototype, "speed", void 0);
    __decorate([
        _1.Map(['Speed', { attack: 'Attack Speed', combo: 'Combo Speed' }], _1.propertyCollection(parseFloat))
    ], MeleeWeapon.prototype, "computedSpeed", void 0);
    __decorate([
        _1.Map([null, 'Length'], parseFloat)
    ], MeleeWeapon.prototype, "length", void 0);
    __decorate([
        _1.Map([null, 'Peasant Perk'], function (o) { return o != null && o.toLowerCase() == 'yes'; })
    ], MeleeWeapon.prototype, "isPeasantWeapon", void 0);
    MeleeWeapon = __decorate([
        _1.Model
    ], MeleeWeapon);
    return MeleeWeapon;
}(_1.default));
exports.MeleeWeapon = MeleeWeapon;
var WeaponDamage = /** @class */ (function () {
    function WeaponDamage() {
    }
    return WeaponDamage;
}());
exports.WeaponDamage = WeaponDamage;
var Handedness;
(function (Handedness) {
    Handedness[Handedness["One"] = 1] = "One";
    Handedness[Handedness["Two"] = 2] = "Two";
})(Handedness = exports.Handedness || (exports.Handedness = {}));
var AttackType;
(function (AttackType) {
    AttackType[AttackType["Strike"] = 1] = "Strike";
    AttackType[AttackType["Thrust"] = 2] = "Thrust";
    AttackType[AttackType["Projectile"] = 4] = "Projectile";
})(AttackType = exports.AttackType || (exports.AttackType = {}));
function resolveHandedness(value) {
    switch (value) {
        case 'One Handed':
            return Handedness.One;
        case 'Two Handed':
            return Handedness.Two;
        case 'One/Two Handed':
            return Handedness.One | Handedness.Two;
    }
}
exports.resolveHandedness = resolveHandedness;


/***/ }),

/***/ "./src/ts/utils/sort.ts":
/*!******************************!*\
  !*** ./src/ts/utils/sort.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function sortBy(items, selector, invert) {
    if (invert === void 0) { invert = false; }
    var result = items.slice();
    var desc = function (a, b) { return a > b ? -1 : a < b ? 1 : 0; };
    var asc = function (a, b) { return a < b ? -1 : a > b ? 1 : 0; };
    var func = !invert ? desc : asc;
    result.sort(function (a, b) { return func(selector(a), selector(b)); });
    return result;
}
exports.sortBy = sortBy;


/***/ }),

/***/ "./src/ts/view-model/weapon.ts":
/*!*************************************!*\
  !*** ./src/ts/view-model/weapon.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var weapon_1 = __webpack_require__(/*! ../model/weapon */ "./src/ts/model/weapon.ts");
var DisplayWeapon = /** @class */ (function (_super) {
    __extends(DisplayWeapon, _super);
    function DisplayWeapon(weapon) {
        var _this = _super.call(this, weapon.name) || this;
        _this.isSelected = false;
        _this.isPeasantWeapon = null;
        _this.pointCost = null;
        _this.length = null;
        _this.handedness = null;
        _this.attackType = null;
        Object.assign(_this, weapon);
        var primaryVariant = _this.variants[0];
        _this.isPeasantWeapon = primaryVariant.isPeasantWeapon;
        _this.pointCost = primaryVariant.pointCost;
        _this.length = primaryVariant instanceof weapon_1.MeleeWeapon ? primaryVariant.length : null;
        _this.handedness = primaryVariant.handedness;
        _this.attackType = primaryVariant.attackType;
        // TODO remove
        _this.computedSpeed = primaryVariant.computedSpeed;
        _this.computedDamage = primaryVariant.computedDamage;
        return _this;
    }
    Object.defineProperty(DisplayWeapon.prototype, "attackTypeLabel", {
        get: function () {
            return '';
            // switch (this.attackType) {
            //     case AttackType.Strike:
            //         return 'Strike';
            //     case AttackType.Thrust:
            //         return 'Thrust';          
            //     case AttackType.Projectile:
            //         return 'Projectile';                
            // }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayWeapon.prototype, "attackTypeTagColorClass", {
        get: function () {
            return '';
            //switch (this.attackType) {
            //    case AttackType.Strike:
            //        return 'has-text-success';
            //    case AttackType.Thrust:
            //        return 'has-text-primary';                
            //}
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayWeapon.prototype, "handednessTagClassName", {
        get: function () {
            return '';
            //if (this.handedness & Handedness.One && this.handedness & Handedness.Two) {
            //    return 'is-black';
            //} else if (this.handedness & Handedness.One) {
            //    return 'is-grey';
            //} else if (this.handedness & Handedness.Two) {
            //    return 'is-dark';
            //}
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayWeapon.prototype, "handednessTagColorClass", {
        get: function () {
            return '';
            //if (this.handedness & Handedness.One && this.handedness & Handedness.Two) {
            //    return 'has-text-black';
            //} else if (this.handedness & Handedness.One) {
            //    return 'has-text-light';
            //} else if (this.handedness & Handedness.Two) {
            //    return 'has-text-grey';
            //}
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayWeapon.prototype, "handednessLabel", {
        get: function () {
            return '';
            //if (this.handedness & Handedness.One && this.handedness & Handedness.Two) {
            //    return '1/2-handed';
            //} else if (this.handedness & Handedness.One) {
            //    return '1-handed';
            //} else if (this.handedness & Handedness.Two) {
            //    return '2-handed';
            //}
        },
        enumerable: true,
        configurable: true
    });
    return DisplayWeapon;
}(weapon_1.Weapon));
exports.DisplayWeapon = DisplayWeapon;


/***/ }),

/***/ "./src/vue/Shell.vue":
/*!***************************!*\
  !*** ./src/vue/Shell.vue ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shell_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shell.vue?vue&type=script&lang=ts& */ "./src/vue/Shell.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Shell_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Shell_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Shell_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  "3505393e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/Shell.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/Shell.vue?vue&type=script&lang=ts&":
/*!****************************************************!*\
  !*** ./src/vue/Shell.vue?vue&type=script&lang=ts& ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shell_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./Shell.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/Shell.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shell_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shell_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shell_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shell_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shell_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/app.vue":
/*!*************************!*\
  !*** ./src/vue/app.vue ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_0a6dfb62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=0a6dfb62&scoped=true& */ "./src/vue/app.vue?vue&type=template&id=0a6dfb62&scoped=true&");
/* harmony import */ var _app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=ts& */ "./src/vue/app.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _app_vue_vue_type_style_index_0_id_0a6dfb62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&id=0a6dfb62&lang=scss&scoped=true& */ "./src/vue/app.vue?vue&type=style&index=0&id=0a6dfb62&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_0a6dfb62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_0a6dfb62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a6dfb62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/app.vue?vue&type=script&lang=ts&":
/*!**************************************************!*\
  !*** ./src/vue/app.vue?vue&type=script&lang=ts& ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/app.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/app.vue?vue&type=style&index=0&id=0a6dfb62&lang=scss&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./src/vue/app.vue?vue&type=style&index=0&id=0a6dfb62&lang=scss&scoped=true& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_0a6dfb62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--2-2!../../node_modules/sass-loader/lib/loader.js??ref--2-3!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&id=0a6dfb62&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/app.vue?vue&type=style&index=0&id=0a6dfb62&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_0a6dfb62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_0a6dfb62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_0a6dfb62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_0a6dfb62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_0a6dfb62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/app.vue?vue&type=template&id=0a6dfb62&scoped=true&":
/*!********************************************************************!*\
  !*** ./src/vue/app.vue?vue&type=template&id=0a6dfb62&scoped=true& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_0a6dfb62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=0a6dfb62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/app.vue?vue&type=template&id=0a6dfb62&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_0a6dfb62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_0a6dfb62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/partial/attribute-bar-container.vue":
/*!*****************************************************!*\
  !*** ./src/vue/partial/attribute-bar-container.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attribute_bar_container_vue_vue_type_template_id_31445af6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute-bar-container.vue?vue&type=template&id=31445af6&scoped=true& */ "./src/vue/partial/attribute-bar-container.vue?vue&type=template&id=31445af6&scoped=true&");
/* harmony import */ var _attribute_bar_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attribute-bar-container.vue?vue&type=script&lang=ts& */ "./src/vue/partial/attribute-bar-container.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _attribute_bar_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _attribute_bar_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _attribute_bar_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attribute_bar_container_vue_vue_type_template_id_31445af6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attribute_bar_container_vue_vue_type_template_id_31445af6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31445af6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/partial/attribute-bar-container.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/partial/attribute-bar-container.vue?vue&type=script&lang=ts&":
/*!******************************************************************************!*\
  !*** ./src/vue/partial/attribute-bar-container.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./attribute-bar-container.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bar-container.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/partial/attribute-bar-container.vue?vue&type=template&id=31445af6&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/vue/partial/attribute-bar-container.vue?vue&type=template&id=31445af6&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_container_vue_vue_type_template_id_31445af6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./attribute-bar-container.vue?vue&type=template&id=31445af6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bar-container.vue?vue&type=template&id=31445af6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_container_vue_vue_type_template_id_31445af6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_container_vue_vue_type_template_id_31445af6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/partial/attribute-bar.vue":
/*!*******************************************!*\
  !*** ./src/vue/partial/attribute-bar.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attribute_bar_vue_vue_type_template_id_c733bafc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute-bar.vue?vue&type=template&id=c733bafc&scoped=true& */ "./src/vue/partial/attribute-bar.vue?vue&type=template&id=c733bafc&scoped=true&");
/* harmony import */ var _attribute_bar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attribute-bar.vue?vue&type=script&lang=ts& */ "./src/vue/partial/attribute-bar.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _attribute_bar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _attribute_bar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _attribute_bar_vue_vue_type_style_index_0_id_c733bafc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attribute-bar.vue?vue&type=style&index=0&id=c733bafc&lang=scss&scoped=true& */ "./src/vue/partial/attribute-bar.vue?vue&type=style&index=0&id=c733bafc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _attribute_bar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attribute_bar_vue_vue_type_template_id_c733bafc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attribute_bar_vue_vue_type_template_id_c733bafc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c733bafc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/partial/attribute-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/partial/attribute-bar.vue?vue&type=script&lang=ts&":
/*!********************************************************************!*\
  !*** ./src/vue/partial/attribute-bar.vue?vue&type=script&lang=ts& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./attribute-bar.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bar.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/partial/attribute-bar.vue?vue&type=style&index=0&id=c733bafc&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/vue/partial/attribute-bar.vue?vue&type=style&index=0&id=c733bafc&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_style_index_0_id_c733bafc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--2-2!../../../node_modules/sass-loader/lib/loader.js??ref--2-3!../../../node_modules/vue-loader/lib??vue-loader-options!./attribute-bar.vue?vue&type=style&index=0&id=c733bafc&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bar.vue?vue&type=style&index=0&id=c733bafc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_style_index_0_id_c733bafc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_style_index_0_id_c733bafc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_style_index_0_id_c733bafc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_style_index_0_id_c733bafc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_style_index_0_id_c733bafc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/partial/attribute-bar.vue?vue&type=template&id=c733bafc&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./src/vue/partial/attribute-bar.vue?vue&type=template&id=c733bafc&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_template_id_c733bafc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./attribute-bar.vue?vue&type=template&id=c733bafc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bar.vue?vue&type=template&id=c733bafc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_template_id_c733bafc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bar_vue_vue_type_template_id_c733bafc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/partial/attribute-bars.vue":
/*!********************************************!*\
  !*** ./src/vue/partial/attribute-bars.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attribute_bars_vue_vue_type_template_id_17ec623e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute-bars.vue?vue&type=template&id=17ec623e&scoped=true& */ "./src/vue/partial/attribute-bars.vue?vue&type=template&id=17ec623e&scoped=true&");
/* harmony import */ var _attribute_bars_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attribute-bars.vue?vue&type=script&lang=ts& */ "./src/vue/partial/attribute-bars.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _attribute_bars_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _attribute_bars_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _attribute_bars_vue_vue_type_style_index_0_id_17ec623e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attribute-bars.vue?vue&type=style&index=0&id=17ec623e&lang=scss&scoped=true& */ "./src/vue/partial/attribute-bars.vue?vue&type=style&index=0&id=17ec623e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _attribute_bars_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attribute_bars_vue_vue_type_template_id_17ec623e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attribute_bars_vue_vue_type_template_id_17ec623e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "17ec623e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/partial/attribute-bars.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/partial/attribute-bars.vue?vue&type=script&lang=ts&":
/*!*********************************************************************!*\
  !*** ./src/vue/partial/attribute-bars.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./attribute-bars.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bars.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/partial/attribute-bars.vue?vue&type=style&index=0&id=17ec623e&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/vue/partial/attribute-bars.vue?vue&type=style&index=0&id=17ec623e&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_style_index_0_id_17ec623e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--2-2!../../../node_modules/sass-loader/lib/loader.js??ref--2-3!../../../node_modules/vue-loader/lib??vue-loader-options!./attribute-bars.vue?vue&type=style&index=0&id=17ec623e&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bars.vue?vue&type=style&index=0&id=17ec623e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_style_index_0_id_17ec623e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_style_index_0_id_17ec623e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_style_index_0_id_17ec623e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_style_index_0_id_17ec623e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_style_index_0_id_17ec623e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/partial/attribute-bars.vue?vue&type=template&id=17ec623e&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/vue/partial/attribute-bars.vue?vue&type=template&id=17ec623e&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_template_id_17ec623e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./attribute-bars.vue?vue&type=template&id=17ec623e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bars.vue?vue&type=template&id=17ec623e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_template_id_17ec623e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_bars_vue_vue_type_template_id_17ec623e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/partial/weapon-inventory-cost.vue":
/*!***************************************************!*\
  !*** ./src/vue/partial/weapon-inventory-cost.vue ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weapon_inventory_cost_vue_vue_type_template_id_da12ffe2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapon-inventory-cost.vue?vue&type=template&id=da12ffe2&scoped=true& */ "./src/vue/partial/weapon-inventory-cost.vue?vue&type=template&id=da12ffe2&scoped=true&");
/* harmony import */ var _weapon_inventory_cost_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weapon-inventory-cost.vue?vue&type=script&lang=ts& */ "./src/vue/partial/weapon-inventory-cost.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _weapon_inventory_cost_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _weapon_inventory_cost_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _weapon_inventory_cost_vue_vue_type_style_index_0_id_da12ffe2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weapon-inventory-cost.vue?vue&type=style&index=0&id=da12ffe2&lang=scss&scoped=true& */ "./src/vue/partial/weapon-inventory-cost.vue?vue&type=style&index=0&id=da12ffe2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _weapon_inventory_cost_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _weapon_inventory_cost_vue_vue_type_template_id_da12ffe2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _weapon_inventory_cost_vue_vue_type_template_id_da12ffe2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "da12ffe2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/partial/weapon-inventory-cost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/partial/weapon-inventory-cost.vue?vue&type=script&lang=ts&":
/*!****************************************************************************!*\
  !*** ./src/vue/partial/weapon-inventory-cost.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./weapon-inventory-cost.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/weapon-inventory-cost.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/partial/weapon-inventory-cost.vue?vue&type=style&index=0&id=da12ffe2&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/vue/partial/weapon-inventory-cost.vue?vue&type=style&index=0&id=da12ffe2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_style_index_0_id_da12ffe2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--2-2!../../../node_modules/sass-loader/lib/loader.js??ref--2-3!../../../node_modules/vue-loader/lib??vue-loader-options!./weapon-inventory-cost.vue?vue&type=style&index=0&id=da12ffe2&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/weapon-inventory-cost.vue?vue&type=style&index=0&id=da12ffe2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_style_index_0_id_da12ffe2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_style_index_0_id_da12ffe2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_style_index_0_id_da12ffe2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_style_index_0_id_da12ffe2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_style_index_0_id_da12ffe2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/partial/weapon-inventory-cost.vue?vue&type=template&id=da12ffe2&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/vue/partial/weapon-inventory-cost.vue?vue&type=template&id=da12ffe2&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_template_id_da12ffe2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./weapon-inventory-cost.vue?vue&type=template&id=da12ffe2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/weapon-inventory-cost.vue?vue&type=template&id=da12ffe2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_template_id_da12ffe2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_inventory_cost_vue_vue_type_template_id_da12ffe2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/partial/weapon-label.vue":
/*!******************************************!*\
  !*** ./src/vue/partial/weapon-label.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weapon_label_vue_vue_type_template_id_3b78b493_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapon-label.vue?vue&type=template&id=3b78b493&scoped=true& */ "./src/vue/partial/weapon-label.vue?vue&type=template&id=3b78b493&scoped=true&");
/* harmony import */ var _weapon_label_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weapon-label.vue?vue&type=script&lang=ts& */ "./src/vue/partial/weapon-label.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _weapon_label_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _weapon_label_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _weapon_label_vue_vue_type_style_index_0_id_3b78b493_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weapon-label.vue?vue&type=style&index=0&id=3b78b493&lang=scss&scoped=true& */ "./src/vue/partial/weapon-label.vue?vue&type=style&index=0&id=3b78b493&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _weapon_label_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _weapon_label_vue_vue_type_template_id_3b78b493_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _weapon_label_vue_vue_type_template_id_3b78b493_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b78b493",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/partial/weapon-label.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/partial/weapon-label.vue?vue&type=script&lang=ts&":
/*!*******************************************************************!*\
  !*** ./src/vue/partial/weapon-label.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./weapon-label.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/weapon-label.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/partial/weapon-label.vue?vue&type=style&index=0&id=3b78b493&lang=scss&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/vue/partial/weapon-label.vue?vue&type=style&index=0&id=3b78b493&lang=scss&scoped=true& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_style_index_0_id_3b78b493_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--2-2!../../../node_modules/sass-loader/lib/loader.js??ref--2-3!../../../node_modules/vue-loader/lib??vue-loader-options!./weapon-label.vue?vue&type=style&index=0&id=3b78b493&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/weapon-label.vue?vue&type=style&index=0&id=3b78b493&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_style_index_0_id_3b78b493_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_style_index_0_id_3b78b493_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_style_index_0_id_3b78b493_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_style_index_0_id_3b78b493_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_sass_loader_lib_loader_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_style_index_0_id_3b78b493_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/partial/weapon-label.vue?vue&type=template&id=3b78b493&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/vue/partial/weapon-label.vue?vue&type=template&id=3b78b493&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_template_id_3b78b493_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./weapon-label.vue?vue&type=template&id=3b78b493&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/weapon-label.vue?vue&type=template&id=3b78b493&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_template_id_3b78b493_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weapon_label_vue_vue_type_template_id_3b78b493_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ }),

/***/ "vue-router":
/*!****************************!*\
  !*** external "VueRouter" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue_router__;

/***/ })

/******/ });
});
//# sourceMappingURL=app.js.map