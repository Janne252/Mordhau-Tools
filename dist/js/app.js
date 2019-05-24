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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/partial/attribute-bars.vue?vue&type=style&index=0&id=17ec623e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-2!./node_modules/sass-loader/lib/loader.js??ref--2-3!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/partial/attribute-bars.vue?vue&type=style&index=0&id=17ec623e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var attribute_bars_vue_1 = __importDefault(__webpack_require__(/*! ./partial/attribute-bars.vue */ "./src/vue/partial/attribute-bars.vue"));
var data_1 = __importDefault(__webpack_require__(/*! ../ts/data */ "./src/ts/data/index.ts"));
var weapon_1 = __webpack_require__(/*! ../ts/model/weapon */ "./src/ts/model/weapon.ts");
var weapon_2 = __webpack_require__(/*! ../ts/view-model/weapon */ "./src/ts/view-model/weapon.ts");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isLoading = true;
        _this.uniqueWeaponsByNameCount = 0;
        _this.weapons = [];
        _this.displayWeapons = [];
        _this.filteredWeapons = [];
        _this.selectedWeaponCount = 0;
        _this.defaults = {
            search: '',
            showOneHandedWeapons: true,
            showTwoHandedWeapons: true,
            showAltModeWeapons: false,
            showStrikeWeapons: true,
            showThrustWeapons: false,
        };
        _this.search = null;
        _this.showOneHandedWeapons = null;
        _this.showTwoHandedWeapons = null;
        _this.showAltModeWeapons = null;
        _this.showStrikeWeapons = null;
        _this.showThrustWeapons = null;
        _this.highestWeaponComputedAverageDamage = 0;
        _this.highestWeaponComputedAttackSpeed = 0;
        _this.highestWeaponLength = 0;
        _this.dataProvider = null;
        return _this;
    }
    Object.defineProperty(App.prototype, "selectedWeapons", {
        get: function () {
            return this.displayWeapons.filter(function (o) { return o.isSelected; });
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
                        this.uniqueWeaponsByNameCount = new Set(this.weapons.map(function (o) { return o.name; })).size;
                        this.highestWeaponComputedAttackSpeed = Math.max.apply(Math, this.weapons.map(function (o) { return o.computedSpeed.attack; }));
                        this.highestWeaponLength = Math.max.apply(Math, this.weapons.map(function (o) { return o.length; }));
                        this.highestWeaponComputedAverageDamage = Math.max.apply(Math, this.weapons.map(function (o) { return o.computedDamage.averageDamage; }));
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
                        this.deserializeState();
                        this.applyWeaponFilters();
                        return [2 /*return*/];
                }
            });
        });
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
                ((this.showOneHandedWeapons && (weapon.handedness & weapon_1.WeaponHandedness.One)) ||
                    (this.showTwoHandedWeapons && (weapon.handedness & weapon_1.WeaponHandedness.Two))) &&
                (this.showAltModeWeapons || !weapon.altMode) &&
                ((this.showStrikeWeapons && weapon.attackType == weapon_1.AttackType.Strike) ||
                    (this.showThrustWeapons && weapon.attackType == weapon_1.AttackType.Thrust))) {
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
    App.prototype.serializeState = function () {
        this.$router.replace({
            query: __assign({}, this.$route.query, { search: this.search, oneHanded: JSON.stringify(this.showOneHandedWeapons), twoHanded: JSON.stringify(this.showTwoHandedWeapons), altMode: JSON.stringify(this.showAltModeWeapons), strike: JSON.stringify(this.showStrikeWeapons), thrust: JSON.stringify(this.showThrustWeapons), selected: this.selectedWeapons.map(function (o) { return o.id; }).join(',') })
        });
    };
    App.prototype.deserializeState = function () {
        this.search = this.$route.query.search || '';
        this.showOneHandedWeapons = JSON.parse(this.$route.query.oneHanded || JSON.stringify(this.defaults.showOneHandedWeapons));
        this.showTwoHandedWeapons = JSON.parse(this.$route.query.twoHanded || JSON.stringify(this.defaults.showTwoHandedWeapons));
        this.showAltModeWeapons = JSON.parse(this.$route.query.altMode || JSON.stringify(this.defaults.showAltModeWeapons));
        this.showStrikeWeapons = JSON.parse(this.$route.query.strike || JSON.stringify(this.defaults.showStrikeWeapons));
        this.showThrustWeapons = JSON.parse(this.$route.query.thrust || JSON.stringify(this.defaults.showThrustWeapons));
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
    };
    App.prototype.resetFilters = function () {
        for (var key in this.defaults) {
            this.$set(this, key, this.defaults[key]);
        }
        this.unSelectAll();
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
        vue_property_decorator_1.Watch('search'),
        vue_property_decorator_1.Watch('showOneHandedWeapons'),
        vue_property_decorator_1.Watch('showTwoHandedWeapons'),
        vue_property_decorator_1.Watch('displayWeapons'),
        vue_property_decorator_1.Watch('showAltModeWeapons'),
        vue_property_decorator_1.Watch('showStrikeWeapons'),
        vue_property_decorator_1.Watch('showThrustWeapons')
    ], App.prototype, "applyWeaponFilters", null);
    __decorate([
        vue_property_decorator_1.Watch('selectedWeapons')
    ], App.prototype, "onSelectedWeaponsChanged", null);
    App = __decorate([
        vue_property_decorator_1.Component({
            components: { WeaponLabel: weapon_label_vue_1.default, AttributeBars: attribute_bars_vue_1.default }
        })
    ], App);
    return App;
}(vue_1.default));
exports.default = App;


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
var AttributeBars = /** @class */ (function (_super) {
    __extends(AttributeBars, _super);
    function AttributeBars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AttributeBars.prototype.mounted = function () {
    };
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBars.prototype, "items", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBars.prototype, "formula", void 0);
    __decorate([
        vue_property_decorator_1.Prop({ type: Function, default: function (item) { return item.id; } })
    ], AttributeBars.prototype, "itemKey", void 0);
    __decorate([
        vue_property_decorator_1.Prop()
    ], AttributeBars.prototype, "displayValue", void 0);
    AttributeBars = __decorate([
        vue_property_decorator_1.Component
    ], AttributeBars);
    return AttributeBars;
}(vue_1.default));
exports.default = AttributeBars;


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
  return _c("div", { staticClass: "view" }, [
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
      ? _c("main", { staticClass: "view-content" }, [
          _c(
            "div",
            {
              staticClass:
                "columns has-no-offset is-disabled-on-mobile is-disabled-on-tablet"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "column weapons-column is-5-on-desktop is-5-on-widescreen is-4-on-fullhd"
                },
                [
                  _c("div", { staticClass: "view" }, [
                    _c("header", [
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
                          staticClass: "input",
                          attrs: {
                            type: "search",
                            placeholder: "Search by weapon name..."
                          },
                          domProps: { value: _vm.search },
                          on: {
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
                          [_vm._v("Reset")]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "group-box size-75 margin-top-30" },
                        [
                          _c("div", { staticClass: "group-box-header" }, [
                            _vm._v("Filters\n                            ")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "group-box-body" }, [
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
                                    _c(
                                      "div",
                                      { staticClass: "control-group" },
                                      [
                                        _c("label", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.showOneHandedWeapons,
                                                expression:
                                                  "showOneHandedWeapons"
                                              }
                                            ],
                                            staticClass: "input",
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              checked: Array.isArray(
                                                _vm.showOneHandedWeapons
                                              )
                                                ? _vm._i(
                                                    _vm.showOneHandedWeapons,
                                                    null
                                                  ) > -1
                                                : _vm.showOneHandedWeapons
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a =
                                                    _vm.showOneHandedWeapons,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
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
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        ))
                                                  }
                                                } else {
                                                  _vm.showOneHandedWeapons = $$c
                                                }
                                              }
                                            }
                                          }),
                                          _vm._v(" One-handed ")
                                        ]),
                                        _vm._v(" "),
                                        _c("label", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.showTwoHandedWeapons,
                                                expression:
                                                  "showTwoHandedWeapons"
                                              }
                                            ],
                                            staticClass: "input",
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              checked: Array.isArray(
                                                _vm.showTwoHandedWeapons
                                              )
                                                ? _vm._i(
                                                    _vm.showTwoHandedWeapons,
                                                    null
                                                  ) > -1
                                                : _vm.showTwoHandedWeapons
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a =
                                                    _vm.showTwoHandedWeapons,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
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
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        ))
                                                  }
                                                } else {
                                                  _vm.showTwoHandedWeapons = $$c
                                                }
                                              }
                                            }
                                          }),
                                          _vm._v(" Two-handed")
                                        ])
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "group-addon has-no-horizontal-borders"
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.showAltModeWeapons,
                                            expression: "showAltModeWeapons"
                                          }
                                        ],
                                        staticClass: "input",
                                        attrs: { type: "checkbox" },
                                        domProps: {
                                          checked: Array.isArray(
                                            _vm.showAltModeWeapons
                                          )
                                            ? _vm._i(
                                                _vm.showAltModeWeapons,
                                                null
                                              ) > -1
                                            : _vm.showAltModeWeapons
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.showAltModeWeapons,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = null,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  (_vm.showAltModeWeapons = $$a.concat(
                                                    [$$v]
                                                  ))
                                              } else {
                                                $$i > -1 &&
                                                  (_vm.showAltModeWeapons = $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1)))
                                              }
                                            } else {
                                              _vm.showAltModeWeapons = $$c
                                            }
                                          }
                                        }
                                      }),
                                      _vm._v(" Alt mode")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "group-addon has-no-border-right has-no-horizontal-borders"
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "control-group" },
                                      [
                                        _c("label", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.showStrikeWeapons,
                                                expression: "showStrikeWeapons"
                                              }
                                            ],
                                            staticClass: "input",
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              checked: Array.isArray(
                                                _vm.showStrikeWeapons
                                              )
                                                ? _vm._i(
                                                    _vm.showStrikeWeapons,
                                                    null
                                                  ) > -1
                                                : _vm.showStrikeWeapons
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = _vm.showStrikeWeapons,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      (_vm.showStrikeWeapons = $$a.concat(
                                                        [$$v]
                                                      ))
                                                  } else {
                                                    $$i > -1 &&
                                                      (_vm.showStrikeWeapons = $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        ))
                                                  }
                                                } else {
                                                  _vm.showStrikeWeapons = $$c
                                                }
                                              }
                                            }
                                          }),
                                          _vm._v(" Strike")
                                        ]),
                                        _vm._v(" "),
                                        _c("label", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.showThrustWeapons,
                                                expression: "showThrustWeapons"
                                              }
                                            ],
                                            staticClass: "input",
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              checked: Array.isArray(
                                                _vm.showThrustWeapons
                                              )
                                                ? _vm._i(
                                                    _vm.showThrustWeapons,
                                                    null
                                                  ) > -1
                                                : _vm.showThrustWeapons
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = _vm.showThrustWeapons,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      (_vm.showThrustWeapons = $$a.concat(
                                                        [$$v]
                                                      ))
                                                  } else {
                                                    $$i > -1 &&
                                                      (_vm.showThrustWeapons = $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        ))
                                                  }
                                                } else {
                                                  _vm.showThrustWeapons = $$c
                                                }
                                              }
                                            }
                                          }),
                                          _vm._v(" Thrust ")
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "filter-status has-text-align-center has-text-grey",
                          staticStyle: { "font-size": "0.75rem" }
                        },
                        [
                          _c("br"),
                          _vm._v(
                            "\n                            Displaying \n                            "
                          ),
                          _vm.filteredWeapons.length == _vm.weapons.length
                            ? [
                                _vm._v(
                                  "\n                                all " +
                                    _vm._s(_vm.weapons.length) +
                                    " " +
                                    _vm._s(
                                      _vm.weapons.length == 1
                                        ? "weapon"
                                        : "weapons"
                                    ) +
                                    "\n                            "
                                )
                              ]
                            : [
                                _vm._v(
                                  "\n                               " +
                                    _vm._s(_vm.filteredWeapons.length) +
                                    " of " +
                                    _vm._s(_vm.weapons.length) +
                                    " " +
                                    _vm._s(
                                      _vm.weapons.length == 1
                                        ? "variant"
                                        : "variants"
                                    ) +
                                    "\n                               (" +
                                    _vm._s(_vm.uniqueWeaponsByNameCount) +
                                    " " +
                                    _vm._s(
                                      _vm.uniqueWeaponsByNameCount == 1
                                        ? "unique weapon"
                                        : "unique weapons"
                                    ) +
                                    ")\n                            "
                                )
                              ]
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("main", { staticClass: "view-content weapon-list" }, [
                      _c(
                        "div",
                        { staticClass: "table is-fullwidth is-hoverable" },
                        [
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
                                      staticClass:
                                        "table-cell weapon-name-cell",
                                      class: {
                                        "has-text-info": weapon.isSelected
                                      }
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
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
                                            class: {
                                              "is-info": weapon.isSelected
                                            },
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              checked: Array.isArray(
                                                weapon.isSelected
                                              )
                                                ? _vm._i(
                                                    weapon.isSelected,
                                                    null
                                                  ) > -1
                                                : weapon.isSelected
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = weapon.isSelected,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
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
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    weapon,
                                                    "isSelected",
                                                    $$c
                                                  )
                                                }
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("WeaponLabel", {
                                            attrs: {
                                              weapon: weapon,
                                              "display-tags": true
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
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
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "column stats-column" }, [
                _c(
                  "div",
                  { staticClass: "view" },
                  [
                    _vm.selectedWeapons.length == 0
                      ? [_vm._m(1)]
                      : [
                          _c(
                            "header",
                            { staticClass: "selected-weapons-list-wrapper" },
                            [
                              _c(
                                "div",
                                { staticClass: "selected-weapons-list" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "items" },
                                    [
                                      _vm._l(_vm.selectedWeapons, function(
                                        weapon
                                      ) {
                                        return [
                                          _c(
                                            "div",
                                            {
                                              key: weapon.id,
                                              staticClass: "item"
                                            },
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
                                ]
                              )
                            ]
                          )
                        ],
                    _vm._v(" "),
                    _vm.selectedWeapons.length > 0
                      ? _c("div", { staticClass: "view-content" }, [
                          _c(
                            "div",
                            { staticClass: "attribute-bars" },
                            [
                              _c("div", { staticClass: "group-box-header" }, [
                                _vm._v("Average damage")
                              ]),
                              _vm._v(" "),
                              _c("AttributeBars", {
                                staticClass: "red",
                                attrs: {
                                  items: _vm.selectedWeapons,
                                  formula: function(weapon) {
                                    return (
                                      weapon.computedDamage.averageDamage /
                                      _vm.highestWeaponComputedAverageDamage
                                    )
                                  },
                                  "display-value": function(weapon) {
                                    return weapon.computedDamage.averageDamage
                                  }
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "label",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return _c(
                                          "span",
                                          {},
                                          [
                                            _c("WeaponLabel", {
                                              attrs: { weapon: item }
                                            })
                                          ],
                                          1
                                        )
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  117352228
                                )
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("div", { staticClass: "group-box-header" }, [
                                _vm._v("Average attack speed")
                              ]),
                              _vm._v(" "),
                              _c("AttributeBars", {
                                staticClass: "green",
                                attrs: {
                                  items: _vm.selectedWeapons,
                                  formula: function(weapon) {
                                    return (
                                      _vm.highestWeaponComputedAttackSpeed -
                                      weapon.computedSpeed.attack /
                                        _vm.highestWeaponComputedAttackSpeed
                                    )
                                  },
                                  "display-value": function(weapon) {
                                    return weapon.computedSpeed.attack.toFixed(
                                      2
                                    )
                                  }
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "label",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return _c(
                                          "span",
                                          {},
                                          [
                                            _c("WeaponLabel", {
                                              attrs: { weapon: item }
                                            })
                                          ],
                                          1
                                        )
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  117352228
                                )
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("div", { staticClass: "group-box-header" }, [
                                _vm._v("Reach")
                              ]),
                              _vm._v(" "),
                              _c("AttributeBars", {
                                staticClass: "blue",
                                attrs: {
                                  items: _vm.selectedWeapons,
                                  formula: function(weapon) {
                                    return (
                                      weapon.length / _vm.highestWeaponLength
                                    )
                                  },
                                  "display-value": function(weapon) {
                                    return weapon.length
                                  }
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "label",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return _c(
                                          "span",
                                          {},
                                          [
                                            _c("WeaponLabel", {
                                              attrs: { weapon: item }
                                            })
                                          ],
                                          1
                                        )
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  117352228
                                )
                              }),
                              _vm._v(" "),
                              _c("br")
                            ],
                            1
                          )
                        ])
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("footer", [
      _c("div", { staticClass: "data-copyright" }, [
        _vm._v(
          "\n            All weapon/item data displayed on this page is loaded from a Google Sheet: \n            "
        ),
        _c(
          "a",
          {
            attrs: {
              href:
                "https://docs.google.com/spreadsheets/d/1HXS_aF9CKeGKg6OecwCw3WobZWcTjDkp_4ipN1vnyVk"
            }
          },
          [
            _vm.dataProvider && _vm.dataProvider.spreadsheet
              ? [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.dataProvider.spreadsheet.properties.title) +
                      "\n                "
                  )
                ]
              : [_c("i", [_vm._v("Loading...")])]
          ],
          2
        )
      ])
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
          { attrs: { href: "https://steamcommunity.com/id/Janne252/" } },
          [_vm._v("Janne252")]
        )
      ])
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
          "\n                            Choose some weapons from the list to compare their attributes.\n                        "
        )
      ])
    ])
  }
]
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
    _vm._l(_vm.items, function(item) {
      return _c(
        "div",
        { key: _vm.itemKey(item), staticClass: "attribute-bar-wrapper" },
        [
          _c(
            "div",
            {
              staticClass: "attribute-bar",
              style: { width: _vm.formula(item) * 100 + "%" }
            },
            [
              _c("div", { staticClass: "title-wrapper" }, [
                _c("div", { staticClass: "title title-overflown" }, [
                  _c("div", { staticClass: "title-prefix" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.displayValue(item)) +
                        "\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "title-content" },
                    [_vm._t("label", null, { item: item })],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title title-primary" }, [
                  _c("div", { staticClass: "title-prefix" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.displayValue(item)) +
                        "\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "title-content" },
                    [_vm._t("label", null, { item: item })],
                    2
                  )
                ])
              ])
            ]
          )
        ]
      )
    }),
    0
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
    { staticClass: "weapon", class: { "is-hoverable": _vm.isHoverable } },
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
                  _c("span", { staticClass: "content" }, [_vm._v("Alt")]),
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
            ])
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
Object.defineProperty(exports, "__esModule", { value: true });
var weapon_1 = __webpack_require__(/*! ../model/weapon */ "./src/ts/model/weapon.ts");
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
            var data, result, headerRowCount, rowIndex, _i, _a, row;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getSheetData(this.spreadsheet.sheets[0].properties.title)];
                    case 1:
                        data = _b.sent();
                        result = [];
                        headerRowCount = 2;
                        rowIndex = -1;
                        for (_i = 0, _a = data.values; _i < _a.length; _i++) {
                            row = _a[_i];
                            rowIndex++;
                            if (rowIndex < headerRowCount) {
                                continue;
                            }
                            result.push(new weapon_1.Weapon(row));
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

Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __importDefault(__webpack_require__(/*! . */ "./src/ts/model/index.ts"));
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(data) {
        var _this = _super.call(this) || this;
        if (data == null) {
            return _this;
        }
        _this.name = data[0];
        _this.attackType = _this.resolveAttackType(data[1]);
        _this.altMode = data[2].toLowerCase() == 'on';
        _this.handedness = _this.resolveWeaponHandedness(data[3]);
        _this.stopOnHit = data[4].toLowerCase() == 'yes';
        _this.canCombo = data[5].toLowerCase() == 'yes';
        _this.canFlinch = data[6].toLowerCase() == 'yes';
        _this.pointCost = parseInt(data[7]);
        _this.loadoutPointCost = parseInt(data[8]);
        _this.damageNoArmor = {
            head: parseInt(data[9]),
            torso: parseInt(data[10]),
            legs: parseInt(data[11]),
        };
        _this.damageLightArmor = {
            head: parseInt(data[12]),
            torso: parseInt(data[13]),
            legs: parseInt(data[14]),
        };
        _this.damageMediumArmor = {
            head: parseInt(data[15]),
            torso: parseInt(data[16]),
            legs: parseInt(data[17]),
        };
        _this.damageHeavyArmor = {
            head: parseInt(data[18]),
            torso: parseInt(data[19]),
            legs: parseInt(data[20]),
        };
        _this.computedDamage = {
            averageDamage: parseInt(data[21]),
            dps: parseInt(data[22]),
            cDps: parseInt(data[23]),
            averageDps: parseInt(data[24]),
        };
        _this.staminaCost = {
            miss: parseInt(data[25]),
            feint: parseInt(data[26]),
            morph: parseInt(data[27]),
            drain: parseInt(data[28]),
            parryDrainNegation: parseInt(data[29]),
        };
        _this.speed = {
            windup: parseInt(data[30]),
            combo: parseInt(data[31]),
            release: parseInt(data[32]),
            recovery: parseInt(data[33]),
        };
        _this.computedSpeed = {
            attack: parseFloat(data[34]),
            combo: parseFloat(data[36]),
        };
        _this.length = parseInt(data[36]);
        _this.generateId();
        return _this;
    }
    Weapon.prototype.getSortKey = function () {
        return this.name + this.attackType + (this.altMode ? 'B' : 'A');
    };
    Weapon.prototype.resolveAttackType = function (value) {
        switch (value) {
            case 'Strike':
                return AttackType.Strike;
            case 'Thrust':
                return AttackType.Thrust;
        }
    };
    Weapon.prototype.resolveWeaponHandedness = function (value) {
        switch (value) {
            case 'One Handed':
                return WeaponHandedness.One;
            case 'Two Handed':
                return WeaponHandedness.Two;
            case 'One/Two Handed':
                return WeaponHandedness.One | WeaponHandedness.Two;
        }
    };
    Weapon.prototype.generateId = function () {
        var handednessStr = '';
        if (this.handedness & WeaponHandedness.One && this.handedness & WeaponHandedness.Two) {
            handednessStr = '3';
        }
        else if (this.handedness & WeaponHandedness.One) {
            handednessStr = '1';
        }
        else if (this.handedness & WeaponHandedness.Two) {
            handednessStr = '2';
        }
        this.id = this.name.replace(/ /g, '-') + "-" + this.attackType + "-" + (this.altMode ? '1' : '0') + handednessStr;
    };
    return Weapon;
}(_1.default));
exports.Weapon = Weapon;
var WeaponHandedness;
(function (WeaponHandedness) {
    WeaponHandedness[WeaponHandedness["One"] = 1] = "One";
    WeaponHandedness[WeaponHandedness["Two"] = 2] = "Two";
})(WeaponHandedness = exports.WeaponHandedness || (exports.WeaponHandedness = {}));
var AttackType;
(function (AttackType) {
    AttackType[AttackType["Strike"] = 1] = "Strike";
    AttackType[AttackType["Thrust"] = 2] = "Thrust";
})(AttackType = exports.AttackType || (exports.AttackType = {}));
var WeaponDamage = /** @class */ (function () {
    function WeaponDamage() {
    }
    return WeaponDamage;
}());
exports.WeaponDamage = WeaponDamage;


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
        var _this = _super.call(this) || this;
        _this.isSelected = false;
        Object.assign(_this, weapon);
        return _this;
    }
    Object.defineProperty(DisplayWeapon.prototype, "altModeTagClassName", {
        get: function () {
            return this.altMode ? 'is-warning' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayWeapon.prototype, "altModeTagColorClass", {
        get: function () {
            return this.altMode ? 'has-text-warning' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayWeapon.prototype, "attackTypeTagClassName", {
        get: function () {
            switch (this.attackType) {
                case weapon_1.AttackType.Strike:
                    return 'is-success';
                case weapon_1.AttackType.Thrust:
                    return 'is-primary';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayWeapon.prototype, "attackTypeLabel", {
        get: function () {
            switch (this.attackType) {
                case weapon_1.AttackType.Strike:
                    return 'Strike';
                case weapon_1.AttackType.Thrust:
                    return 'Thrust';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayWeapon.prototype, "attackTypeTagColorClass", {
        get: function () {
            switch (this.attackType) {
                case weapon_1.AttackType.Strike:
                    return 'has-text-success';
                case weapon_1.AttackType.Thrust:
                    return 'has-text-primary';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayWeapon.prototype, "handednessTagClassName", {
        get: function () {
            if (this.handedness & weapon_1.WeaponHandedness.One && this.handedness & weapon_1.WeaponHandedness.Two) {
                return 'is-black';
            }
            else if (this.handedness & weapon_1.WeaponHandedness.One) {
                return 'is-grey';
            }
            else if (this.handedness & weapon_1.WeaponHandedness.Two) {
                return 'is-dark';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayWeapon.prototype, "handednessTagColorClass", {
        get: function () {
            if (this.handedness & weapon_1.WeaponHandedness.One && this.handedness & weapon_1.WeaponHandedness.Two) {
                return 'has-text-black';
            }
            else if (this.handedness & weapon_1.WeaponHandedness.One) {
                return 'has-text-light';
            }
            else if (this.handedness & weapon_1.WeaponHandedness.Two) {
                return 'has-text-grey';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayWeapon.prototype, "handednessLabel", {
        get: function () {
            if (this.handedness & weapon_1.WeaponHandedness.One && this.handedness & weapon_1.WeaponHandedness.Two) {
                return '1/2-handed';
            }
            else if (this.handedness & weapon_1.WeaponHandedness.One) {
                return '1-handed';
            }
            else if (this.handedness & weapon_1.WeaponHandedness.Two) {
                return '2-handed';
            }
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