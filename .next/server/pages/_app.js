module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./chakra/components/heading/index.ts":
/*!********************************************!*\
  !*** ./chakra/components/heading/index.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseStyle = {
  layerStyle: 'heading',
  color: "gray.700",
  '.chakra-ui-dark &': {
    color: 'currentColor'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle
});

/***/ }),

/***/ "./chakra/components/index.ts":
/*!************************************!*\
  !*** ./chakra/components/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading */ "./chakra/components/heading/index.ts");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./chakra/components/text/index.ts");
// https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src/components
// import Avatar from './avatar';
// import Button from './button';
// import IconButton from './icon-button';
// import Input from './input';
// import Link from './link';
// import Select from './select';
// import Switch from './switch';
// import TextArea from './textarea';
// import FormLabel from './form-control/form-label';
// import Accordion from './accordion';
// import Box from './box';
// import Menu from './menu';

 // import Modal from './modal';
// import Popover from './popover';
// import Drawer from './drawer';
// import CheckBox from './checkbox';
// import Divider from './divider';

const components = {
  //   Avatar,
  //   Button,
  //   IconButton,
  //   Input,
  //   Link,
  //   Select,
  //   Switch,
  //   TextArea,
  //   FormLabel,
  //   Accordion,
  //   Box,
  //   Menu,
  Text: _text__WEBPACK_IMPORTED_MODULE_1__["default"],
  Heading: _heading__WEBPACK_IMPORTED_MODULE_0__["default"] //   Modal,
  //   Popover,
  //   Drawer,
  //   CheckBox,
  //   Divider,

};
/* harmony default export */ __webpack_exports__["default"] = (components);

/***/ }),

/***/ "./chakra/components/text/index.ts":
/*!*****************************************!*\
  !*** ./chakra/components/text/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseStyle = {
  layerStyle: 'text',
  color: "gray.800",
  '.chakra-ui-dark &': {
    color: 'currentColor'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle
});

/***/ }),

/***/ "./chakra/foundations/index.ts":
/*!*************************************!*\
  !*** ./chakra/foundations/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typography */ "./chakra/foundations/typography.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import breakpoints from './breakpoints';
// import colors from './colors';
// import radii from './radius';
// import shadows from './shadows';
// import sizes, { baseSizes } from './sizes';
 // import zIndices from './z-index';
// import borders from './borders';
//const space = baseSizes;

const foundations = _objectSpread({}, _typography__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (foundations);

/***/ }),

/***/ "./chakra/foundations/typography.ts":
/*!******************************************!*\
  !*** ./chakra/foundations/typography.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const typography = {
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2'
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  // fonts: {
  //   body: 'Roboto, sans-serif',
  //   heading: 'Roboto, sans-serif',
  //   mono: 'Menlo, monospace',
  // },
  //textColor: "green.500",
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (typography);

/***/ }),

/***/ "./chakra/index.ts":
/*!*************************!*\
  !*** ./chakra/index.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _override__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./override */ "./chakra/override.ts");


const theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["extendTheme"])(_override__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./chakra/layerStyles/index.ts":
/*!*************************************!*\
  !*** ./chakra/layerStyles/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./chakra/layerStyles/text/index.ts");
// dark mode - https://github.com/chakra-ui/chakra-ui/issues/2231
// import card from './card';
// import chat from './chat';
// import background from './background';
// import menu from './menu';
// import control from './control';
 // import nav from './nav';

const layerStyles = {
  //   control,
  //   card,
  //   chat,
  //   background,
  //   menu,
  //   nav,
  text: _text__WEBPACK_IMPORTED_MODULE_0__["default"],
  square: {
    w: 150,
    h: 150
  },
  buttonIcon: {
    boxSize: '6'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (layerStyles);

/***/ }),

/***/ "./chakra/layerStyles/text/index.ts":
/*!******************************************!*\
  !*** ./chakra/layerStyles/text/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const text = {
  bg: 'transparent',
  // color: 'green',
  '.chakra-ui-dark &': {
    color: 'currentColor'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (text);

/***/ }),

/***/ "./chakra/override.ts":
/*!****************************!*\
  !*** ./chakra/override.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _foundations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundations */ "./chakra/foundations/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./chakra/styles/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./chakra/components/index.ts");
/* harmony import */ var _layerStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layerStyles */ "./chakra/layerStyles/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// https://github.com/chakra-ui/chakra-ui





/**
 * Color mode config
 */
const colorMode = 'light';
const config = {
  useSystemColorMode: true,
  initialColorMode: colorMode
};

const themeOverride = _objectSpread(_objectSpread({}, _foundations__WEBPACK_IMPORTED_MODULE_0__["default"]), {}, {
  config,
  styles: _styles__WEBPACK_IMPORTED_MODULE_1__["default"],
  layerStyles: _layerStyles__WEBPACK_IMPORTED_MODULE_3__["default"],
  components: _components__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/* harmony default export */ __webpack_exports__["default"] = (themeOverride);

/***/ }),

/***/ "./chakra/styles/index.ts":
/*!********************************!*\
  !*** ./chakra/styles/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  global: {
    fontFamily: 'body',
    color: 'lightTextColor',
    bg: 'lightBgColor',
    '.chakra-ui-dark &': {
      color: 'darkTextColor',
      bg: 'darkControlColor'
    },
    '*::placeholder': {
      color: 'gray.600',
      '.chakra-ui-dark &': {
        color: 'whiteAlpha.700'
      }
    },
    '*, *::before, &::after': {
      borderColor: 'gray.200',
      wordWrap: 'break-word',
      '.chakra-ui-dark &': {
        borderColor: 'whiteAlpha.300'
      }
    },
    fontFeatureSettings: `"pnum"`,
    fontVariantNumeric: 'proportional-nums'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/common/Pages.tsx":
/*!*************************************!*\
  !*** ./components/common/Pages.tsx ***!
  \*************************************/
/*! exports provided: Page, PageHead, PageContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHead", function() { return PageHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContent", function() { return PageContent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\ChrisLifts\\Desktop\\ImFeelingBullish-Next\\components\\common\\Pages.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Page = (_ref) => {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], _objectSpread(_objectSpread({
    mt: 2,
    position: "relative",
    height: "85vh",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    overflowY: "scroll",
    p: 1,
    w: "100%",
    css: {
      scrollSnapType: 'x mandatory',
      '::-webkit-scrollbar': {
        width: 0
      },
      '-msOverflowStyle': 'none',
      scrollbarWidth: 'none'
    }
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};
const PageHead = ({
  title,
  description,
  keywords
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: [title, " | ", "ImFeelingBullish"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "keywords",
      content: keywords
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      href: "/icons/favicon.ico"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};
const PageContent = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./components/common/Texts.tsx":
/*!*************************************!*\
  !*** ./components/common/Texts.tsx ***!
  \*************************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ChrisLifts\\Desktop\\ImFeelingBullish-Next\\components\\common\\Texts.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Banner = (_ref) => {
  let rest = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], _objectSpread({
      textAlign: "center",
      fontSize: ['md', 'xl', 'xl', '2xl'],
      fontWeight: "extrabold"
    }, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      mt: 1,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "\uD83D\uDC02"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/layout/DarkModeButton.tsx":
/*!**********************************************!*\
  !*** ./components/layout/DarkModeButton.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/button */ "@chakra-ui/button");
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/color-mode */ "@chakra-ui/color-mode");
/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\ChrisLifts\\Desktop\\ImFeelingBullish-Next\\components\\layout\\DarkModeButton.tsx";




const DarkModeButton = () => {
  const {
    colorMode,
    toggleColorMode
  } = Object(_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__["useColorMode"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: toggleColorMode,
    fontSize: "15px",
    variant: "ghost",
    icon: colorMode == 'dark' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaSun"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 35
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaMoon"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 47
    }, undefined),
    "aria-label": "Change Colour Mode"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DarkModeButton);

/***/ }),

/***/ "./components/layout/Footer.tsx":
/*!**************************************!*\
  !*** ./components/layout/Footer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ChrisLifts\\Desktop\\ImFeelingBullish-Next\\components\\layout\\Footer.tsx";



const Logo = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: "/icons/favicon.png",
    alt: "ImFeelingBullish",
    width: 50,
    height: 50
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, undefined);
};

const ListHeader = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: '500',
    fontSize: 'lg',
    mb: 2,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])('gray.50', 'gray.900'),
    color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])('gray.700', 'gray.200'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      py: 10,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        align: 'center',
        _before: {
          content: '""',
          borderBottom: '2px solid',
          borderColor: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])('gray.400', 'gray.700'),
          flexGrow: 1,
          mr: 8
        },
        _after: {
          content: '""',
          borderBottom: '2px solid',
          borderColor: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])('gray.400', 'gray.700'),
          flexGrow: 1,
          ml: 8
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Logo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        pt: 6,
        fontSize: 'sm',
        textAlign: 'center',
        children: "\xA9 2021 ImFeelingBullish. All rights reserved."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"],
      maxW: '6xl',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        mb: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          textAlign: "center",
          children: "Disclaimer: None of the content here is financial advice"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Pages */ "./components/common/Pages.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/layout/Footer.tsx");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBar */ "./components/layout/NavBar.tsx");

var _jsxFileName = "C:\\Users\\ChrisLifts\\Desktop\\ImFeelingBullish-Next\\components\\layout\\Layout.tsx";






const Layout = ({
  children
}) => {
  const {
    colorMode
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorMode"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: "column",
    m: "0 auto",
    mx: 2,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      flexDir: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Pages__WEBPACK_IMPORTED_MODULE_3__["Page"], {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/layout/NavBar.tsx":
/*!**************************************!*\
  !*** ./components/layout/NavBar.tsx ***!
  \**************************************/
/*! exports provided: LeftNavItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavItem", function() { return LeftNavItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Texts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Texts */ "./components/common/Texts.tsx");
/* harmony import */ var _DarkModeButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DarkModeButton */ "./components/layout/DarkModeButton.tsx");

var _jsxFileName = "C:\\Users\\ChrisLifts\\Desktop\\ImFeelingBullish-Next\\components\\layout\\NavBar.tsx";





const NavBar = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    as: "nav",
    w: "100%",
    justifyContent: "flex",
    alignItems: "space-between",
    minH: "6vh",
    position: "relative",
    top: 0,
    borderBottom: "1px",
    borderColor: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])('gray.400', 'gray.700'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      isInline: true,
      w: "100%",
      justify: "space-between",
      align: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Texts__WEBPACK_IMPORTED_MODULE_3__["Banner"], {
        mx: 2,
        mt: 1,
        textAlign: "center",
        color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])('red.500', 'red.800'),
        children: "ImFeelingBullish.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DarkModeButton__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

const LeftNavItem = ({
  Icon,
  link,
  tooltip,
  memberStatusId,
  userMemberStatusId
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    ml: 2,
    children: userMemberStatusId >= memberStatusId && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      spacing: 1,
      isInline: true,
      w: "80%",
      py: "0.5em",
      justify: "space-between",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        href: link,
        isExternal: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          Icon: Icon,
          size: "sm",
          label: tooltip,
          color: "gray.100",
          onClick: () => undefined,
          "aria-label": ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.tsx");
/* harmony import */ var _chakra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chakra */ "./chakra/index.ts");

var _jsxFileName = "C:\\Users\\ChrisLifts\\Desktop\\ImFeelingBullish-Next\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MyApp = ({
  Component,
  pageProps,
  appProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ChakraProvider"], {
    resetCSS: true,
    theme: _chakra__WEBPACK_IMPORTED_MODULE_3__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

MyApp.getInitialProps = async () => {
  return {
    appProps: {
      /* ...someAppProps */
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@chakra-ui/button":
/*!************************************!*\
  !*** external "@chakra-ui/button" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/button");

/***/ }),

/***/ "@chakra-ui/color-mode":
/*!****************************************!*\
  !*** external "@chakra-ui/color-mode" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/color-mode");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jaGFrcmEvY29tcG9uZW50cy9oZWFkaW5nL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NoYWtyYS9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NoYWtyYS9jb21wb25lbnRzL3RleHQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2hha3JhL2ZvdW5kYXRpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NoYWtyYS9mb3VuZGF0aW9ucy90eXBvZ3JhcGh5LnRzIiwid2VicGFjazovLy8uL2NoYWtyYS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jaGFrcmEvbGF5ZXJTdHlsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2hha3JhL2xheWVyU3R5bGVzL3RleHQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2hha3JhL292ZXJyaWRlLnRzIiwid2VicGFjazovLy8uL2NoYWtyYS9zdHlsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vUGFnZXMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1RleHRzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9EYXJrTW9kZUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L05hdkJhci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9jb2xvci1tb2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJiYXNlU3R5bGUiLCJsYXllclN0eWxlIiwiY29sb3IiLCJjb21wb25lbnRzIiwiVGV4dCIsIkhlYWRpbmciLCJmb3VuZGF0aW9ucyIsInR5cG9ncmFwaHkiLCJsZXR0ZXJTcGFjaW5ncyIsInRpZ2h0ZXIiLCJ0aWdodCIsIm5vcm1hbCIsIndpZGUiLCJ3aWRlciIsIndpZGVzdCIsImxpbmVIZWlnaHRzIiwibm9uZSIsInNob3J0ZXIiLCJzaG9ydCIsImJhc2UiLCJ0YWxsIiwidGFsbGVyIiwiZm9udFdlaWdodHMiLCJoYWlybGluZSIsInRoaW4iLCJsaWdodCIsIm1lZGl1bSIsInNlbWlib2xkIiwiYm9sZCIsImV4dHJhYm9sZCIsImJsYWNrIiwiZm9udFNpemVzIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInRoZW1lIiwiZXh0ZW5kVGhlbWUiLCJ0aGVtZU92ZXJyaWRlIiwibGF5ZXJTdHlsZXMiLCJ0ZXh0Iiwic3F1YXJlIiwidyIsImgiLCJidXR0b25JY29uIiwiYm94U2l6ZSIsImJnIiwiY29sb3JNb2RlIiwiY29uZmlnIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwiaW5pdGlhbENvbG9yTW9kZSIsInN0eWxlcyIsImdsb2JhbCIsImZvbnRGYW1pbHkiLCJib3JkZXJDb2xvciIsIndvcmRXcmFwIiwiZm9udEZlYXR1cmVTZXR0aW5ncyIsImZvbnRWYXJpYW50TnVtZXJpYyIsIlBhZ2UiLCJjaGlsZHJlbiIsInJlc3QiLCJzY3JvbGxTbmFwVHlwZSIsIndpZHRoIiwic2Nyb2xsYmFyV2lkdGgiLCJQYWdlSGVhZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInByb2Nlc3MiLCJQYWdlQ29udGVudCIsIkJhbm5lciIsIkRhcmtNb2RlQnV0dG9uIiwidG9nZ2xlQ29sb3JNb2RlIiwidXNlQ29sb3JNb2RlIiwiTG9nbyIsInByb3BzIiwiTGlzdEhlYWRlciIsIkZvb3RlciIsInVzZUNvbG9yTW9kZVZhbHVlIiwiY29udGVudCIsImJvcmRlckJvdHRvbSIsImZsZXhHcm93IiwibXIiLCJtbCIsIlN0YWNrIiwiTGF5b3V0IiwiTmF2QmFyIiwiTGVmdE5hdkl0ZW0iLCJJY29uIiwibGluayIsInRvb2x0aXAiLCJtZW1iZXJTdGF0dXNJZCIsInVzZXJNZW1iZXJTdGF0dXNJZCIsInVuZGVmaW5lZCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwic2l6ZXMiLCJsYXlvdXQiLCJwZXJjZW50U2l6ZXMiLCJtIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIndpZHRocyIsInMiLCJraW5kIiwicCIsInNyY1NldCIsImdldFdpZHRocyIsImxhc3QiLCJpIiwic3JjIiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiY29uZmlnTG9hZGVyIiwidW5vcHRpbWl6ZWQiLCJwcmlvcml0eSIsImFsbCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImxvYWRpbmciLCJpc0xhenkiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcHBQcm9wcyIsImN1c3RvbVRoZW1lIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEsTUFBTUEsU0FBUyxHQUFHO0FBQ2RDLFlBQVUsRUFBRSxTQURFO0FBRWRDLE9BQUssRUFBRSxVQUZPO0FBR2QsdUJBQXFCO0FBQUVBLFNBQUssRUFBRTtBQUFUO0FBSFAsQ0FBbEI7QUFNaUI7QUFBRUY7QUFBRixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ05GO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQU1HLFVBQTJCLEdBQUc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VDLHFEQWJrQztBQWNsQ0MsMkRBZGtDLENBZXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbkJvQyxDQUFwQztBQXNCZUYseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUEsTUFBTUgsU0FBUyxHQUFHO0FBQ2RDLFlBQVUsRUFBRSxNQURFO0FBRWRDLE9BQUssRUFBRSxVQUZPO0FBR2QsdUJBQXFCO0FBQUVBLFNBQUssRUFBRTtBQUFUO0FBSFAsQ0FBbEI7QUFNaUI7QUFBRUY7QUFBRixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNTSxXQUFXLHFCQUtaQyxtREFMWSxDQUFqQjs7QUFjZUQsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUEsTUFBTUMsVUFBVSxHQUFHO0FBQ2ZDLGdCQUFjLEVBQUU7QUFDZEMsV0FBTyxFQUFFLFNBREs7QUFFZEMsU0FBSyxFQUFFLFVBRk87QUFHZEMsVUFBTSxFQUFFLEdBSE07QUFJZEMsUUFBSSxFQUFFLFNBSlE7QUFLZEMsU0FBSyxFQUFFLFFBTE87QUFNZEMsVUFBTSxFQUFFO0FBTk0sR0FERDtBQVVmQyxhQUFXLEVBQUU7QUFDWEosVUFBTSxFQUFFLFFBREc7QUFFWEssUUFBSSxFQUFFLEdBRks7QUFHWEMsV0FBTyxFQUFFLE1BSEU7QUFJWEMsU0FBSyxFQUFFLE9BSkk7QUFLWEMsUUFBSSxFQUFFLEtBTEs7QUFNWEMsUUFBSSxFQUFFLE9BTks7QUFPWEMsVUFBTSxFQUFFO0FBUEcsR0FWRTtBQW9CZkMsYUFBVyxFQUFFO0FBQ1hDLFlBQVEsRUFBRSxHQURDO0FBRVhDLFFBQUksRUFBRSxHQUZLO0FBR1hDLFNBQUssRUFBRSxHQUhJO0FBSVhkLFVBQU0sRUFBRSxHQUpHO0FBS1hlLFVBQU0sRUFBRSxHQUxHO0FBTVhDLFlBQVEsRUFBRSxHQU5DO0FBT1hDLFFBQUksRUFBRSxHQVBLO0FBUVhDLGFBQVMsRUFBRSxHQVJBO0FBU1hDLFNBQUssRUFBRTtBQVRJLEdBcEJFO0FBZ0NmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxXQUFTLEVBQUU7QUFDVEMsTUFBRSxFQUFFLFNBREs7QUFFVEMsTUFBRSxFQUFFLFVBRks7QUFHVEMsTUFBRSxFQUFFLE1BSEs7QUFJVEMsTUFBRSxFQUFFLFVBSks7QUFLVEMsTUFBRSxFQUFFLFNBTEs7QUFNVCxXQUFPLFFBTkU7QUFPVCxXQUFPLFVBUEU7QUFRVCxXQUFPLFNBUkU7QUFTVCxXQUFPLE1BVEU7QUFVVCxXQUFPO0FBVkU7QUF2Q0ksQ0FBbkI7QUF1RGlCN0IseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU04QixLQUFZLEdBQUdDLG9FQUFXLENBQUNDLGlEQUFELENBQWhDO0FBRWVGLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxNQUFNRyxXQUFXLEdBQUc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VDLHFEQVBrQjtBQVFsQkMsUUFBTSxFQUFFO0FBQ05DLEtBQUMsRUFBRSxHQURHO0FBRU5DLEtBQUMsRUFBRTtBQUZHLEdBUlU7QUFZbEJDLFlBQVUsRUFBRTtBQUNWQyxXQUFPLEVBQUU7QUFEQztBQVpNLENBQXBCO0FBaUJlTiwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQSxNQUFNQyxJQUFJLEdBQUc7QUFDVE0sSUFBRSxFQUFFLGFBREs7QUFFVDtBQUNBLHVCQUFxQjtBQUFFN0MsU0FBSyxFQUFFO0FBQVQ7QUFIWixDQUFiO0FBTWlCdUMsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU1PLFNBQW9CLEdBQUcsT0FBN0I7QUFFQSxNQUFNQyxNQUFtQixHQUFHO0FBQzFCQyxvQkFBa0IsRUFBRSxJQURNO0FBRTFCQyxrQkFBZ0IsRUFBRUg7QUFGUSxDQUE1Qjs7QUFLQSxNQUFNVCxhQUE0QixtQ0FDNUJqQyxvREFENEI7QUFFaEMyQyxRQUZnQztBQUdoQ0cseURBSGdDO0FBSWxDWixtRUFKa0M7QUFLL0JyQyxpRUFBVUE7QUFMcUIsRUFBbEM7O0FBUWVvQyw0RUFBZixFOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQSxNQUFNYSxNQUFjLEdBQUc7QUFDckJDLFFBQU0sRUFBRTtBQUNOQyxjQUFVLEVBQUUsTUFETjtBQUVOcEQsU0FBSyxFQUFFLGdCQUZEO0FBR042QyxNQUFFLEVBQUUsY0FIRTtBQUlOLHlCQUFxQjtBQUFFN0MsV0FBSyxFQUFFLGVBQVQ7QUFBMEI2QyxRQUFFLEVBQUU7QUFBOUIsS0FKZjtBQUtOLHNCQUFrQjtBQUNoQjdDLFdBQUssRUFBRSxVQURTO0FBRWhCLDJCQUFxQjtBQUFFQSxhQUFLLEVBQUU7QUFBVDtBQUZMLEtBTFo7QUFTTiw4QkFBMEI7QUFDeEJxRCxpQkFBVyxFQUFFLFVBRFc7QUFFeEJDLGNBQVEsRUFBRSxZQUZjO0FBR3hCLDJCQUFxQjtBQUFFRCxtQkFBVyxFQUFFO0FBQWY7QUFIRyxLQVRwQjtBQWNORSx1QkFBbUIsRUFBRyxRQWRoQjtBQWVOQyxzQkFBa0IsRUFBRTtBQWZkO0FBRGEsQ0FBdkI7QUFvQmVOLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBRU8sTUFBTU8sSUFBYyxHQUFHLFVBQTJCO0FBQUEsTUFBMUI7QUFBRUM7QUFBRixHQUEwQjtBQUFBLE1BQVhDLElBQVc7O0FBQ3ZELHNCQUNFLHFFQUFDLG9EQUFEO0FBQ0UsTUFBRSxFQUFFLENBRE47QUFFRSxZQUFRLEVBQUMsVUFGWDtBQUdFLFVBQU0sRUFBQyxNQUhUO0FBSUUsZ0JBQVksRUFBQyxRQUpmO0FBS0Usa0JBQWMsRUFBQyxRQUxqQjtBQU1FLGNBQVUsRUFBQyxRQU5iO0FBT0UsYUFBUyxFQUFDLFFBUFo7QUFRRSxLQUFDLEVBQUUsQ0FSTDtBQVNFLEtBQUMsRUFBQyxNQVRKO0FBVUUsT0FBRyxFQUFFO0FBQ0hDLG9CQUFjLEVBQUUsYUFEYjtBQUVILDZCQUF1QjtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUZwQjtBQUdILDBCQUFvQixNQUhqQjtBQUlIQyxvQkFBYyxFQUFFO0FBSmI7QUFWUCxLQWdCTUgsSUFoQk47QUFBQSxjQWlCR0Q7QUFqQkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBcUJELENBdEJNO0FBOEJBLE1BQU1LLFFBQW9DLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLGFBQVQ7QUFBc0JDO0FBQXRCLENBQUQsS0FBc0M7QUFDeEYsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw0QkFDRTtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBRUQ7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsaUJBQ0dELEtBREgsU0FDYUcsa0JBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0U7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUVEO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFNLFNBQUcsRUFBQyxNQUFWO0FBQWlCLFVBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsQ0FYTTtBQWlCQSxNQUFNRSxXQUF3QyxHQUFHLENBQUM7QUFBRVY7QUFBRixDQUFELEtBQWtCO0FBQ3hFLHNCQUFPO0FBQUEsY0FBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRQO0FBQ0E7QUFFTyxNQUFNVyxNQUEwQixHQUFHLFVBQWlCO0FBQUEsTUFBWFYsSUFBVztBQUN6RCxzQkFDRSxxRUFBQyxxREFBRDtBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQVMsZUFBUyxFQUFDLFFBQW5CO0FBQTRCLGNBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixLQUFuQixDQUF0QztBQUFpRSxnQkFBVSxFQUFDO0FBQTVFLE9BQTRGQSxJQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsb0RBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUNBO0FBQ0E7O0FBRUEsTUFBTVcsY0FBYyxHQUFHLE1BQU07QUFDM0IsUUFBTTtBQUFFeEIsYUFBRjtBQUFheUI7QUFBYixNQUFpQ0MsMEVBQVksRUFBbkQ7QUFDQSxzQkFDRSxxRUFBQyw0REFBRDtBQUNFLFdBQU8sRUFBRUQsZUFEWDtBQUVFLFlBQVEsRUFBQyxNQUZYO0FBR0UsV0FBTyxFQUFDLE9BSFY7QUFJRSxRQUFJLEVBQUV6QixTQUFTLElBQUksTUFBYixnQkFBc0IscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBdEIsZ0JBQWtDLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSjFDO0FBS0Usa0JBQVc7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFTRCxDQVhEOztBQWFld0IsNkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7O0FBR0EsTUFBTUcsSUFBSSxHQUFJQyxLQUFELElBQWdCO0FBQzNCLHNCQUFPLHFFQUFDLGlEQUFEO0FBQU8sT0FBRyxFQUFDLG9CQUFYO0FBQWdDLE9BQUcsRUFBQyxrQkFBcEM7QUFBdUQsU0FBSyxFQUFFLEVBQTlEO0FBQWtFLFVBQU0sRUFBRTtBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUlBLE1BQU1DLFVBQVUsR0FBRyxDQUFDO0FBQUVqQjtBQUFGLENBQUQsS0FBMkM7QUFDNUQsc0JBQ0UscUVBQUMscURBQUQ7QUFBTSxjQUFVLEVBQUUsS0FBbEI7QUFBeUIsWUFBUSxFQUFFLElBQW5DO0FBQXlDLE1BQUUsRUFBRSxDQUE3QztBQUFBLGNBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FORDs7QUFRQSxNQUFNa0IsTUFBTSxHQUFHLE1BQU07QUFDbkIsc0JBQ0UscUVBQUMsb0RBQUQ7QUFBSyxNQUFFLEVBQUVDLDBFQUFpQixDQUFDLFNBQUQsRUFBWSxVQUFaLENBQTFCO0FBQW1ELFNBQUssRUFBRUEsMEVBQWlCLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FBM0U7QUFBQSw0QkFDRSxxRUFBQyxvREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQUEsOEJBQ0UscUVBQUMscURBQUQ7QUFDRSxhQUFLLEVBQUUsUUFEVDtBQUVFLGVBQU8sRUFBRTtBQUNQQyxpQkFBTyxFQUFFLElBREY7QUFFUEMsc0JBQVksRUFBRSxXQUZQO0FBR1AxQixxQkFBVyxFQUFFd0IsMEVBQWlCLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FIdkI7QUFJUEcsa0JBQVEsRUFBRSxDQUpIO0FBS1BDLFlBQUUsRUFBRTtBQUxHLFNBRlg7QUFTRSxjQUFNLEVBQUU7QUFDTkgsaUJBQU8sRUFBRSxJQURIO0FBRU5DLHNCQUFZLEVBQUUsV0FGUjtBQUdOMUIscUJBQVcsRUFBRXdCLDBFQUFpQixDQUFDLFVBQUQsRUFBYSxVQUFiLENBSHhCO0FBSU5HLGtCQUFRLEVBQUUsQ0FKSjtBQUtORSxZQUFFLEVBQUU7QUFMRSxTQVRWO0FBQUEsK0JBZ0JFLHFFQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBbUJFLHFFQUFDLHFEQUFEO0FBQU0sVUFBRSxFQUFFLENBQVY7QUFBYSxnQkFBUSxFQUFFLElBQXZCO0FBQTZCLGlCQUFTLEVBQUUsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQXdCRSxxRUFBQywwREFBRDtBQUFXLFFBQUUsRUFBRUMsc0RBQWY7QUFBc0IsVUFBSSxFQUFFLEtBQTVCO0FBQUEsNkJBQ0UscUVBQUMsb0RBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFBLCtCQUNFLHFFQUFDLHFEQUFEO0FBQU0sbUJBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXVFRCxDQXhFRDs7QUEwRWVQLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1RLE1BQU0sR0FBRyxDQUFDO0FBQUUxQjtBQUFGLENBQUQsS0FBdUI7QUFDcEMsUUFBTTtBQUFFWjtBQUFGLE1BQWdCMEIscUVBQVksRUFBbEM7QUFFQSxzQkFDRSxxRUFBQyxxREFBRDtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixLQUFDLEVBQUMsUUFBM0I7QUFBb0MsTUFBRSxFQUFFLENBQXhDO0FBQUEsNEJBQ0UscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLHFEQUFEO0FBQU0sYUFBTyxFQUFDLEtBQWQ7QUFBQSw2QkFDRSxxRUFBQyxrREFBRDtBQUFBLGtCQUFPZDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0UscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBWkQ7O0FBY2UwQixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDbkIsc0JBQ0UscUVBQUMscURBQUQ7QUFDRSxNQUFFLEVBQUMsS0FETDtBQUVFLEtBQUMsRUFBQyxNQUZKO0FBR0Usa0JBQWMsRUFBQyxNQUhqQjtBQUlFLGNBQVUsRUFBQyxlQUpiO0FBS0UsUUFBSSxFQUFDLEtBTFA7QUFNRSxZQUFRLEVBQUMsVUFOWDtBQU9FLE9BQUcsRUFBRSxDQVBQO0FBUUUsZ0JBQVksRUFBQyxLQVJmO0FBU0UsZUFBVyxFQUFFUiwwRUFBaUIsQ0FBQyxVQUFELEVBQWEsVUFBYixDQVRoQztBQUFBLDJCQVVFLHFFQUFDLHNEQUFEO0FBQU8sY0FBUSxNQUFmO0FBQWdCLE9BQUMsRUFBQyxNQUFsQjtBQUF5QixhQUFPLEVBQUMsZUFBakM7QUFBaUQsV0FBSyxFQUFDLFFBQXZEO0FBQUEsOEJBYUUscUVBQUMsb0RBQUQ7QUFBUSxVQUFFLEVBQUUsQ0FBWjtBQUFlLFVBQUUsRUFBRSxDQUFuQjtBQUFzQixpQkFBUyxFQUFDLFFBQWhDO0FBQXlDLGFBQUssRUFBRUEsMEVBQWlCLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkYsZUFnQkUscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBK0JELENBaENEOztBQThDTyxNQUFNUyxXQUFvQyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxNQUFSO0FBQWNDLFNBQWQ7QUFBdUJDLGdCQUF2QjtBQUF1Q0M7QUFBdkMsQ0FBRCxLQUFpRTtBQUNuSCxzQkFDRSxxRUFBQyxvREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUEsY0FDR0Esa0JBQWtCLElBQUlELGNBQXRCLGlCQUNDLHFFQUFDLHNEQUFEO0FBQU8sYUFBTyxFQUFFLENBQWhCO0FBQW1CLGNBQVEsTUFBM0I7QUFBNEIsT0FBQyxFQUFDLEtBQTlCO0FBQW9DLFFBQUUsRUFBQyxPQUF2QztBQUErQyxhQUFPLEVBQUMsZUFBdkQ7QUFBQSw2QkFDRSxxRUFBQyxxREFBRDtBQUFNLFlBQUksRUFBRUYsSUFBWjtBQUFrQixrQkFBVSxNQUE1QjtBQUFBLCtCQUNFLHFFQUFDLDJEQUFEO0FBQVksY0FBSSxFQUFFRCxJQUFsQjtBQUF3QixjQUFJLEVBQUMsSUFBN0I7QUFBa0MsZUFBSyxFQUFFRSxPQUF6QztBQUFrRCxlQUFLLEVBQUMsVUFBeEQ7QUFBbUUsaUJBQU8sRUFBRSxNQUFNRyxTQUFsRjtBQUE2Rix3QkFBVztBQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQVpNO0FBY1FQLHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUNBOztBQUNBOztBQUNBOztBQU1BOztBQUVBLFVBQW1DO0FBQ2pDO0FBQUVsQyxRQUFELHNCQUFDQSxHQUFELElBQUNBO0FBR0o7O0FBQUEsTUFBTTBDLG9CQUFvQixHQUFHLGtCQUE3QixTQUE2QixDQUE3QjtBQWFBLE1BQU1DLE9BQU8sR0FBRyxRQUdkLENBQ0EsVUFEQSxXQUNBLENBREEsRUFFQSxlQUZBLGdCQUVBLENBRkEsRUFHQSxXQUhBLFlBR0EsQ0FIQSxFQUlBLFlBUEYsYUFPRSxDQUpBLENBSGMsQ0FBaEI7QUFVQSxNQUFNQyxtQkFBbUIsR0FBRyw2Q0FBNUIsU0FBNEIsQ0FBNUI7QUFzQ0EsTUFBTTtBQUNKQyxhQUFXLEVBRFA7QUFFSkMsWUFBVSxFQUZOO0FBR0pDLFFBQU0sRUFIRjtBQUlKQyxNQUFJLEVBSkE7QUFLSkMsU0FBTyxFQUxIO0FBQUEsSUFPRmpDLDBKQUF5RGtDLGFBUDdELG1CLENBUUE7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUMsR0FBRCxtQkFBdUIsR0FBeEMsZ0JBQWlCLENBQWpCO0FBQ0FDLGlCQUFpQixDQUFqQkEsS0FBdUIsVUFBVUMsQ0FBQyxHQUFsQ0Q7QUFDQUQsUUFBUSxDQUFSQSxLQUFjLFVBQVVFLENBQUMsR0FBekJGOztBQUVBLHlDQUl5QztBQUN2QyxNQUFJRyxLQUFLLEtBQUtDLE1BQU0sS0FBTkEsVUFBcUJBLE1BQU0sS0FBekMsWUFBUyxDQUFULEVBQTZEO0FBQzNEO0FBQ0EsVUFBTUMsWUFBWSxHQUFHLENBQUMsR0FBR0YsS0FBSyxDQUFMQSxTQUFKLG9CQUFJQSxDQUFKLE1BQStDRyxDQUFELElBQ2pFQyxRQUFRLENBQUNELENBQUMsQ0FEWixDQUNZLENBQUYsQ0FEVyxDQUFyQjs7QUFHQSxRQUFJRCxZQUFZLENBQWhCLFFBQXlCO0FBQ3ZCLFlBQU1HLGFBQWEsR0FBR0MsSUFBSSxDQUFKQSxJQUFTLEdBQVRBLGdCQUF0QjtBQUNBLGFBQU87QUFDTEMsY0FBTSxFQUFFVixRQUFRLENBQVJBLE9BQ0xXLENBQUQsSUFBT0EsQ0FBQyxJQUFJVixpQkFBaUIsQ0FBakJBLENBQWlCLENBQWpCQSxHQUZULGFBQ0dELENBREg7QUFJTFksWUFBSSxFQUpOO0FBQU8sT0FBUDtBQU9GOztBQUFBLFdBQU87QUFBRUYsWUFBTSxFQUFSO0FBQW9CRSxVQUFJLEVBQS9CO0FBQU8sS0FBUDtBQUVGOztBQUFBLE1BQ0UsNkJBQ0FSLE1BQU0sS0FETixVQUVBQSxNQUFNLEtBSFIsY0FJRTtBQUNBLFdBQU87QUFBRU0sWUFBTSxFQUFSO0FBQTZCRSxVQUFJLEVBQXhDO0FBQU8sS0FBUDtBQUdGOztBQUFBLFFBQU1GLE1BQU0sR0FBRyxDQUNiLEdBQUcsU0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUW5ELEtBQUssR0FBRztBQUFoQjtBQUFBLFFBQ0dwQixDQUFELElBQU82RCxRQUFRLENBQVJBLEtBQWVhLENBQUQsSUFBT0EsQ0FBQyxJQUF0QmIsTUFBZ0NBLFFBQVEsQ0FBQ0EsUUFBUSxDQUFSQSxTQVh0RCxDQVdxRCxDQURqRCxDQVRDLENBRFUsQ0FBZjtBQWVBLFNBQU87QUFBQTtBQUFVWSxRQUFJLEVBQXJCO0FBQU8sR0FBUDtBQW1CRjs7QUFBQSwwQkFBMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUI7QUFBMEIsQ0FBMUIsRUFRdUM7QUFDckMsbUJBQWlCO0FBQ2YsV0FBTztBQUFBO0FBQU9FLFlBQU0sRUFBYjtBQUEwQlgsV0FBSyxFQUF0QztBQUFPLEtBQVA7QUFHRjs7QUFBQSxRQUFNO0FBQUE7QUFBQTtBQUFBLE1BQW1CWSxTQUFTLGdCQUFsQyxLQUFrQyxDQUFsQztBQUNBLFFBQU1DLElBQUksR0FBR04sTUFBTSxDQUFOQSxTQUFiO0FBRUEsU0FBTztBQUNMUCxTQUFLLEVBQUUsVUFBVVMsSUFBSSxLQUFkLGdCQURGO0FBRUxFLFVBQU0sRUFBRUosTUFBTSxDQUFOQSxJQUVKLFVBQ0csR0FBRWQsTUFBTSxDQUFDO0FBQUE7QUFBQTtBQUFnQnJDLFdBQUssRUFBdEI7QUFBQyxLQUFELENBQTZCLElBQ3BDcUQsSUFBSSxLQUFKQSxVQUFtQkssQ0FBQyxHQUFHLENBQ3hCLEdBQUVMLElBTERGLFNBRkgsSUFFR0EsQ0FGSDtBQVdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBUSxPQUFHLEVBQUV0QixNQUFNLENBQUM7QUFBQTtBQUFBO0FBQWdCckMsV0FBSyxFQUFFbUQsTUFBTSxDQWpCM0MsSUFpQjJDO0FBQTdCLEtBQUQ7QUFqQk4sR0FBUDtBQXFCRjs7QUFBQSxtQkFBZ0Q7QUFDOUMsTUFBSSxhQUFKLFVBQTJCO0FBQ3pCO0FBRUY7O0FBQUEsTUFBSSxhQUFKLFVBQTJCO0FBQ3pCLFdBQU9ILFFBQVEsSUFBZixFQUFlLENBQWY7QUFFRjs7QUFBQTtBQUdGOztBQUFBLHlDQUEyRDtBQUN6RCxRQUFNWSxJQUFJLEdBQUczQixPQUFPLENBQVBBLElBQWIsWUFBYUEsQ0FBYjs7QUFDQSxZQUFVO0FBQ1IsV0FBTzJCLElBQUk7QUFBR0MsVUFBSSxFQUFQO0FBQUEsT0FBWCxXQUFXLEVBQVg7QUFFRjs7QUFBQSxRQUFNLFVBQ0gseURBQXdEQyxxQ0FFdkQsZUFBY0MsWUFIbEIsRUFBTSxDQUFOO0FBT2E7O0FBQUEscUJBY0E7QUFBQSxNQWRlO0FBQUE7QUFBQTtBQUc1QkMsZUFBVyxHQUhpQjtBQUk1QkMsWUFBUSxHQUpvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWTVCNUIsVUFBTSxHQVpzQjtBQUFBLE1BY2Y7QUFBQSxNQURWNkIsR0FDVTtBQUNiLE1BQUlwRSxJQUF5QixHQUE3QjtBQUNBLE1BQUkrQyxNQUFnQyxHQUFHRCxLQUFLLGtCQUE1QztBQUNBLE1BQUl1QixPQUFPLEdBQVg7O0FBQ0EsTUFBSSxhQUFKLE1BQXVCO0FBQ3JCQSxXQUFPLEdBQUdDLE9BQU8sQ0FBQ3RFLElBQUksQ0FBdEJxRSxPQUFpQixDQUFqQkEsQ0FEcUIsQ0FFckI7O0FBQ0EsV0FBT3JFLElBQUksQ0FBWCxTQUFXLENBQVg7QUFIRixTQUlPLElBQUksWUFBSixNQUFzQjtBQUMzQjtBQUNBLFFBQUlBLElBQUksQ0FBUixRQUFpQitDLE1BQU0sR0FBRy9DLElBQUksQ0FBYitDLE9BRlUsQ0FJM0I7O0FBQ0EsV0FBTy9DLElBQUksQ0FBWCxRQUFXLENBQVg7QUFHRjs7QUFBQSxZQUEyQztBQUN6QyxRQUFJLENBQUosS0FBVTtBQUNSLFlBQU0sVUFDSCwwSEFBeUh1RSxJQUFJLENBQUpBLFVBQ3hIO0FBQUE7QUFBQTtBQUR3SEE7QUFDeEgsT0FEd0hBLENBRDVILEVBQU0sQ0FBTjtBQU1GOztBQUFBLFFBQUksQ0FBQ25DLG1CQUFtQixDQUFuQkEsU0FBTCxNQUFLQSxDQUFMLEVBQTJDO0FBQ3pDLFlBQU0sVUFDSCxtQkFBa0J5QixHQUFJLDhDQUE2Q2QsTUFBTyxzQkFBcUJYLG1CQUFtQixDQUFuQkEscUJBRGxHLEdBQU0sQ0FBTjtBQU1GOztBQUFBLFFBQUksQ0FBQ0Ysb0JBQW9CLENBQXBCQSxTQUFMLE9BQUtBLENBQUwsRUFBNkM7QUFDM0MsWUFBTSxVQUNILG1CQUFrQjJCLEdBQUksK0NBQThDVyxPQUFRLHNCQUFxQnRDLG9CQUFvQixDQUFwQkEscUJBRHBHLEdBQU0sQ0FBTjtBQU1GOztBQUFBLFFBQUlpQyxRQUFRLElBQUlLLE9BQU8sS0FBdkIsUUFBb0M7QUFDbEMsWUFBTSxVQUNILG1CQUFrQlgsR0FEckIsaUZBQU0sQ0FBTjtBQUlGOztBQUFBLGlCQUFhO0FBQ1gsWUFBTSxVQUNILG1CQUFrQkEsR0FEckIsaUdBQU0sQ0FBTjtBQUlIO0FBRUQ7O0FBQUEsTUFBSVksTUFBTSxHQUNSLGNBQWNELE9BQU8sS0FBUEEsVUFBc0IsbUJBRHRDLFdBQ0UsQ0FERjs7QUFFQSxNQUFJWCxHQUFHLElBQUlBLEdBQUcsQ0FBSEEsV0FBWCxPQUFXQSxDQUFYLEVBQW9DO0FBQ2xDO0FBQ0FLLGVBQVcsR0FBWEE7QUFDQU8sVUFBTSxHQUFOQTtBQUdGOztBQUFBLFFBQU0sMEJBQTBCLHNDQUFrQztBQUNoRUMsY0FBVSxFQURzRDtBQUVoRUMsWUFBUSxFQUFFLENBRlo7QUFBa0UsR0FBbEMsQ0FBaEM7QUFJQSxRQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBdkIsS0FBdUIsQ0FBdkI7QUFDQSxRQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBeEIsTUFBd0IsQ0FBeEI7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLE1BQU0sQ0FBekIsT0FBeUIsQ0FBekI7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFJRyxRQUFxQyxHQUFHO0FBQzFDQyxZQUFRLEVBRGtDO0FBRTFDQyxPQUFHLEVBRnVDO0FBRzFDQyxRQUFJLEVBSHNDO0FBSTFDQyxVQUFNLEVBSm9DO0FBSzFDQyxTQUFLLEVBTHFDO0FBTzFDQyxhQUFTLEVBUGlDO0FBUTFDQyxXQUFPLEVBUm1DO0FBUzFDQyxVQUFNLEVBVG9DO0FBVTFDQyxVQUFNLEVBVm9DO0FBWTFDQyxXQUFPLEVBWm1DO0FBYTFDekYsU0FBSyxFQWJxQztBQWMxQzBGLFVBQU0sRUFkb0M7QUFlMUNDLFlBQVEsRUFma0M7QUFnQjFDQyxZQUFRLEVBaEJrQztBQWlCMUNDLGFBQVMsRUFqQmlDO0FBa0IxQ0MsYUFBUyxFQWxCaUM7QUFBQTtBQUE1QztBQUE0QyxHQUE1Qzs7QUF1QkEsTUFDRSxtQ0FDQSxxQkFEQSxlQUVBakQsTUFBTSxLQUhSLFFBSUU7QUFDQTtBQUNBLFVBQU1rRCxRQUFRLEdBQUdsQixTQUFTLEdBQTFCO0FBQ0EsVUFBTW1CLFVBQVUsR0FBR0MsS0FBSyxDQUFMQSxRQUFLLENBQUxBLFlBQTRCLEdBQUVGLFFBQVEsR0FBRyxHQUE1RDs7QUFDQSxRQUFJbEQsTUFBTSxLQUFWLGNBQTZCO0FBQzNCO0FBQ0FxRCxrQkFBWSxHQUFHO0FBQ2JULGVBQU8sRUFETTtBQUViVSxnQkFBUSxFQUZLO0FBR2JuQixnQkFBUSxFQUhLO0FBS2JLLGlCQUFTLEVBTEk7QUFNYkcsY0FBTSxFQU5SVTtBQUFlLE9BQWZBO0FBUUFFLGdCQUFVLEdBQUc7QUFBRVgsZUFBTyxFQUFUO0FBQW9CSixpQkFBUyxFQUE3QjtBQUFiZTtBQUFhLE9BQWJBO0FBVkYsV0FXTyxJQUFJdkQsTUFBTSxLQUFWLGFBQTRCO0FBQ2pDO0FBQ0FxRCxrQkFBWSxHQUFHO0FBQ2JULGVBQU8sRUFETTtBQUViRyxnQkFBUSxFQUZLO0FBR2JPLGdCQUFRLEVBSEs7QUFJYm5CLGdCQUFRLEVBSks7QUFLYkssaUJBQVMsRUFMSTtBQU1iRyxjQUFNLEVBTlJVO0FBQWUsT0FBZkE7QUFRQUUsZ0JBQVUsR0FBRztBQUNYZixpQkFBUyxFQURFO0FBRVhJLGVBQU8sRUFGSTtBQUdYRyxnQkFBUSxFQUhWUTtBQUFhLE9BQWJBO0FBS0FDLGNBQVEsR0FBSSxlQUFjMUIsUUFBUyxhQUFZRSxTQUEvQ3dCO0FBZkssV0FnQkEsSUFBSXhELE1BQU0sS0FBVixTQUF3QjtBQUM3QjtBQUNBcUQsa0JBQVksR0FBRztBQUNiQyxnQkFBUSxFQURLO0FBRWJkLGlCQUFTLEVBRkk7QUFHYkksZUFBTyxFQUhNO0FBSWJULGdCQUFRLEVBSks7QUFLYmhGLGFBQUssRUFMUTtBQU1iMEYsY0FBTSxFQU5SUTtBQUFlLE9BQWZBO0FBU0g7QUE5Q0QsU0E4Q08sSUFDTCxtQ0FDQSxxQkFEQSxlQUVBckQsTUFBTSxLQUhELFFBSUw7QUFDQTtBQUNBcUQsZ0JBQVksR0FBRztBQUNiVCxhQUFPLEVBRE07QUFFYlUsY0FBUSxFQUZLO0FBSWJuQixjQUFRLEVBSks7QUFLYkMsU0FBRyxFQUxVO0FBTWJDLFVBQUksRUFOUztBQU9iQyxZQUFNLEVBUE87QUFRYkMsV0FBSyxFQVJRO0FBVWJDLGVBQVMsRUFWSTtBQVdiRyxZQUFNLEVBWFJVO0FBQWUsS0FBZkE7QUFOSyxTQW1CQTtBQUNMO0FBQ0EsY0FBMkM7QUFDekMsWUFBTSxVQUNILG1CQUFrQnZDLEdBRHJCLHlFQUFNLENBQU47QUFJSDtBQUVEOztBQUFBLE1BQUkyQyxhQUFnQyxHQUFHO0FBQ3JDM0MsT0FBRyxFQURrQztBQUdyQ0osVUFBTSxFQUgrQjtBQUlyQ1gsU0FBSyxFQUpQO0FBQXVDLEdBQXZDOztBQU9BLGlCQUFlO0FBQ2IwRCxpQkFBYSxHQUFHQyxnQkFBZ0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUkvQnZHLFdBQUssRUFKMEI7QUFLL0J3RyxhQUFPLEVBTHdCO0FBQUE7QUFBakNGO0FBQWlDLEtBQUQsQ0FBaENBO0FBV0Y7O0FBQUEsZUFBYTtBQUNYSixnQkFBWSxHQUFaQTtBQUNBRSxjQUFVLEdBQVZBO0FBQ0FyQixZQUFRLEdBQVJBO0FBRUY7O0FBQUEsc0JBQ0U7QUFBSyxTQUFLLEVBQVY7QUFBQSxLQUNHcUIsVUFBVSxnQkFDVDtBQUFLLFNBQUssRUFBVjtBQUFBLEtBQ0dDLFFBQVEsZ0JBQ1A7QUFDRSxTQUFLLEVBQUU7QUFDTFQsY0FBUSxFQURIO0FBRUxILGFBQU8sRUFGRjtBQUdMRCxZQUFNLEVBSEQ7QUFJTEQsWUFBTSxFQUpEO0FBS0xELGFBQU8sRUFOWDtBQUNTLEtBRFQ7QUFRRSxPQUFHLEVBUkw7QUFTRSxtQkFURjtBQVVFLFFBQUksRUFWTjtBQVdFLE9BQUcsRUFBRyw2QkFBNEIsK0JBWjdCO0FBQ1AsSUFETyxHQUZGLElBQ1QsQ0FEUyxHQURiLE1Bb0JHLDJCQUNDLDREQUNFLDREQUVNaUIsZ0JBQWdCLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFJbkJ2RyxTQUFLLEVBSmM7QUFLbkJ3RyxXQUFPLEVBTFk7QUFBQTtBQUZ2QjtBQUV1QixHQUFELENBRnRCO0FBV0UsT0FBRyxFQVhMO0FBWUUsWUFBUSxFQVpWO0FBYUUsU0FBSyxFQWJQO0FBY0UsU0FBSyxFQWRQO0FBZUUsYUFBUyxFQXJDakI7QUFzQk0sS0FERixDQXJCSixlQXlDRTtBQUdFLFlBQVEsRUFIVjtBQUlFLGFBQVMsRUFKWDtBQUtFLE9BQUcsRUFMTDtBQU1FLFNBQUssRUEvQ1Q7QUF5Q0UsS0F6Q0YsRUFpREd2QyxRQUFRO0FBQUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQUMsTUFBRCw0QkFDRTtBQUNFLE9BQUcsRUFDRCxZQUNBcUMsYUFBYSxDQURiLE1BRUFBLGFBQWEsQ0FGYixTQUdBQSxhQUFhLENBTGpCO0FBT0UsT0FBRyxFQVBMO0FBUUUsTUFBRSxFQVJKO0FBU0UsUUFBSSxFQUFFQSxhQUFhLENBQWJBLHFCQUFtQ0EsYUFBYSxDQUFDM0MsR0FUekQsQ0FVRTtBQVZGO0FBV0UsZUFBVyxFQUFFMkMsYUFBYSxDQUFDL0MsTUFYN0IsQ0FZRTtBQVpGO0FBYUUsY0FBVSxFQUFFK0MsYUFBYSxDQXBCdEI7QUFPTCxJQURGLENBTk8sR0FsRGIsSUFDRSxDQURGO0FBOEVGLEMsQ0FBQTs7O0FBRUEsMkJBQTJDO0FBQ3pDLFNBQU8zQyxHQUFHLENBQUhBLENBQUcsQ0FBSEEsV0FBaUJBLEdBQUcsQ0FBSEEsTUFBakJBLENBQWlCQSxDQUFqQkEsR0FBUDtBQUdGOztBQUFBLHFCQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFxQixDQUFyQixFQUtvQztBQUNsQztBQUNBLFFBQU04QyxNQUFNLEdBQUcsMkJBQTJCLE9BQTFDLEtBQWUsQ0FBZjtBQUNBLE1BQUlDLFlBQVksR0FBaEI7O0FBQ0EsZUFBYTtBQUNYRCxVQUFNLENBQU5BLEtBQVksT0FBWkE7QUFHRjs7QUFBQSxNQUFJQSxNQUFNLENBQVYsUUFBbUI7QUFDakJDLGdCQUFZLEdBQUcsTUFBTUQsTUFBTSxDQUFOQSxLQUFyQkMsR0FBcUJELENBQXJCQztBQUVGOztBQUFBLFNBQVEsR0FBRTdDLElBQUssR0FBRThDLFlBQVksS0FBTSxHQUFFRCxZQUFyQztBQUdGOztBQUFBLHNCQUFzQjtBQUFBO0FBQUE7QUFBdEI7QUFBc0IsQ0FBdEIsRUFBNkU7QUFDM0UsU0FBUSxHQUFFN0MsSUFBSyxHQUFFOEMsWUFBWSxLQUFNLFlBQVczRyxLQUE5QztBQUdGOztBQUFBLDBCQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUEwQixDQUExQixFQUtvQztBQUNsQztBQUNBLFFBQU15RyxNQUFNLEdBQUcsc0JBQXNCLE9BQXRCLE9BQW9DLFFBQVFELE9BQU8sSUFBbEUsTUFBbUQsQ0FBcEMsQ0FBZjtBQUNBLE1BQUlFLFlBQVksR0FBR0QsTUFBTSxDQUFOQSxZQUFuQjtBQUNBLFNBQVEsR0FBRTVDLElBQUssR0FBRTZDLFlBQWEsR0FBRUMsWUFBWSxLQUE1QztBQUdGOztBQUFBLHVCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUF1QixDQUF2QixFQUtvQztBQUNsQyxZQUEyQztBQUN6QyxVQUFNQyxhQUFhLEdBQW5CLEdBRHlDLENBR3pDOztBQUNBLFFBQUksQ0FBSixLQUFVQSxhQUFhLENBQWJBO0FBQ1YsUUFBSSxDQUFKLE9BQVlBLGFBQWEsQ0FBYkE7O0FBRVosUUFBSUEsYUFBYSxDQUFiQSxTQUFKLEdBQThCO0FBQzVCLFlBQU0sVUFDSCxvQ0FBbUNBLGFBQWEsQ0FBYkEsVUFFbEMsZ0dBQStGdkMsSUFBSSxDQUFKQSxVQUMvRjtBQUFBO0FBQUE7QUFEK0ZBO0FBQy9GLE9BRCtGQSxDQUhuRyxFQUFNLENBQU47QUFTRjs7QUFBQSxRQUFJVixHQUFHLENBQUhBLFdBQUosSUFBSUEsQ0FBSixFQUEwQjtBQUN4QixZQUFNLFVBQ0gsd0JBQXVCQSxHQUQxQiwwR0FBTSxDQUFOO0FBS0Y7O0FBQUEsUUFBSSxDQUFDQSxHQUFHLENBQUhBLFdBQUQsR0FBQ0EsQ0FBRCxJQUFKLGVBQTJDO0FBQ3pDOztBQUNBLFVBQUk7QUFDRmtELGlCQUFTLEdBQUcsUUFBWkEsR0FBWSxDQUFaQTtBQUNBLE9BRkYsQ0FFRSxZQUFZO0FBQ1pDLGVBQU8sQ0FBUEE7QUFDQSxjQUFNLFVBQ0gsd0JBQXVCbkQsR0FEMUIsaUlBQU0sQ0FBTjtBQUtGOztBQUFBLFVBQUksQ0FBQ29ELGFBQWEsQ0FBYkEsU0FBdUJGLFNBQVMsQ0FBckMsUUFBS0UsQ0FBTCxFQUFpRDtBQUMvQyxjQUFNLFVBQ0gscUJBQW9CcEQsR0FBSSxrQ0FBaUNrRCxTQUFTLENBQUNHLFFBQXBFLCtEQUFDLEdBREgsOEVBQU0sQ0FBTjtBQUtIO0FBQ0Y7QUFFRDs7QUFBQSxTQUFRLEdBQUVuRCxJQUFLLFFBQU9vRCxrQkFBa0IsS0FBTSxNQUFLakgsS0FBTSxNQUFLd0csT0FBTyxJQUFJLEVBQXpFO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2akJNLE1BQU1VLG1CQUFtQixHQUM3QiwrQkFBK0JDLElBQUksQ0FBcEMsbUJBQUMsSUFDRCxjQUVrQjtBQUNoQixNQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBaEIsR0FBWUEsRUFBWjtBQUNBLFNBQU9DLFVBQVUsQ0FBQyxZQUFZO0FBQzVCQyxNQUFFLENBQUM7QUFDREMsZ0JBQVUsRUFEVDtBQUVEQyxtQkFBYSxFQUFFLFlBQVk7QUFDekIsZUFBT3ZFLElBQUksQ0FBSkEsT0FBWSxNQUFNbUUsSUFBSSxDQUFKQSxRQUF6QixLQUFtQixDQUFabkUsQ0FBUDtBQUhKcUU7QUFBRyxLQUFELENBQUZBO0FBRGUsS0FBakIsQ0FBaUIsQ0FBakI7QUFORzs7OztBQWdCQSxNQUFNRyxrQkFBa0IsR0FDNUIsK0JBQStCUCxJQUFJLENBQXBDLGtCQUFDLElBQ0QsY0FBeUM7QUFDdkMsU0FBT1EsWUFBWSxDQUFuQixFQUFtQixDQUFuQjtBQUhHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNQOztBQUNBOztBQWNBLE1BQU1DLHVCQUF1QixHQUFHLGdDQUFoQzs7QUFFTyx5QkFBNEM7QUFBQTtBQUE1QztBQUE0QyxDQUE1QyxFQUdxRDtBQUMxRCxRQUFNQyxVQUFtQixHQUFHcEQsUUFBUSxJQUFJLENBQXhDO0FBRUEsUUFBTXFELFNBQVMsR0FBRyxXQUFsQixNQUFrQixHQUFsQjtBQUNBLFFBQU0sd0JBQXdCLHFCQUE5QixLQUE4QixDQUE5QjtBQUVBLFFBQU1DLE1BQU0sR0FBRyx3QkFDWkMsRUFBRCxJQUFrQjtBQUNoQixRQUFJRixTQUFTLENBQWIsU0FBdUI7QUFDckJBLGVBQVMsQ0FBVEE7QUFDQUEsZUFBUyxDQUFUQTtBQUdGOztBQUFBLFFBQUlELFVBQVUsSUFBZCxTQUEyQjs7QUFFM0IsUUFBSUcsRUFBRSxJQUFJQSxFQUFFLENBQVosU0FBc0I7QUFDcEJGLGVBQVMsQ0FBVEEsVUFBb0JHLE9BQU8sS0FFeEJ2RCxTQUFELElBQWVBLFNBQVMsSUFBSXdELFVBQVUsQ0FGYixTQUVhLENBRmIsRUFHekI7QUFIRko7QUFHRSxPQUh5QixDQUEzQkE7QUFNSDtBQWhCWSxLQWlCYix5QkFqQkYsT0FpQkUsQ0FqQmEsQ0FBZjtBQW9CQSx3QkFBVSxNQUFNO0FBQ2QsUUFBSSxDQUFKLHlCQUE4QjtBQUM1QixVQUFJLENBQUosU0FBYztBQUNaLGNBQU1LLFlBQVksR0FBRyw4Q0FBb0IsTUFBTUQsVUFBVSxDQUF6RCxJQUF5RCxDQUFwQyxDQUFyQjtBQUNBLGVBQU8sTUFBTSw2Q0FBYixZQUFhLENBQWI7QUFFSDtBQUNGO0FBUEQsS0FPRyxDQVBILE9BT0csQ0FQSDtBQVNBLFNBQU8sU0FBUCxPQUFPLENBQVA7QUFHRjs7QUFBQSw2Q0FJYztBQUNaLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE2QkUsY0FBYyxDQUFqRCxPQUFpRCxDQUFqRDtBQUNBQyxVQUFRLENBQVJBO0FBRUFDLFVBQVEsQ0FBUkE7QUFDQSxTQUFPLHFCQUEyQjtBQUNoQ0QsWUFBUSxDQUFSQTtBQUNBQyxZQUFRLENBQVJBLG1CQUZnQyxDQUloQzs7QUFDQSxRQUFJRCxRQUFRLENBQVJBLFNBQUosR0FBeUI7QUFDdkJDLGNBQVEsQ0FBUkE7QUFDQUMsZUFBUyxDQUFUQTtBQUVIO0FBVEQ7QUFZRjs7QUFBQSxNQUFNQSxTQUFTLEdBQUcsSUFBbEIsR0FBa0IsRUFBbEI7O0FBQ0EsaUNBQXdFO0FBQ3RFLFFBQU1DLEVBQUUsR0FBR0MsT0FBTyxDQUFQQSxjQUFYO0FBQ0EsTUFBSUMsUUFBUSxHQUFHSCxTQUFTLENBQVRBLElBQWYsRUFBZUEsQ0FBZjs7QUFDQSxnQkFBYztBQUNaO0FBR0Y7O0FBQUEsUUFBTUYsUUFBUSxHQUFHLElBQWpCLEdBQWlCLEVBQWpCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLHlCQUEwQkssT0FBRCxJQUFhO0FBQ3JEQSxXQUFPLENBQVBBLFFBQWlCQyxLQUFELElBQVc7QUFDekIsWUFBTUMsUUFBUSxHQUFHUixRQUFRLENBQVJBLElBQWFPLEtBQUssQ0FBbkMsTUFBaUJQLENBQWpCO0FBQ0EsWUFBTTNELFNBQVMsR0FBR2tFLEtBQUssQ0FBTEEsa0JBQXdCQSxLQUFLLENBQUxBLG9CQUExQzs7QUFDQSxVQUFJQyxRQUFRLElBQVosV0FBMkI7QUFDekJBLGdCQUFRLENBQVJBLFNBQVEsQ0FBUkE7QUFFSDtBQU5ERjtBQURlLEtBQWpCLE9BQWlCLENBQWpCO0FBVUFKLFdBQVMsQ0FBVEEsUUFFR0csUUFBUSxHQUFHO0FBQUE7QUFBQTtBQUZkSDtBQUVjLEdBRmRBO0FBUUE7QUFDRCxDOzs7Ozs7Ozs7OztBQzNHRCxpQkFBaUIsbUJBQU8sQ0FBQyxxRUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRTlDO0FBQ0E7QUFDQTs7QUFRQSxNQUFNTyxLQUErRSxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQyxXQUFiO0FBQXdCQztBQUF4QixDQUFELEtBQXdDO0FBQzlILHNCQUNFLHFFQUFDLCtEQUFEO0FBQWdCLFlBQVEsTUFBeEI7QUFBeUIsU0FBSyxFQUFFQywrQ0FBaEM7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFBLDZCQUNFLHFFQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQVJEOztBQVVBRixLQUFLLENBQUNLLGVBQU4sR0FBd0IsWUFBWTtBQUNsQyxTQUFPO0FBQ0xGLFlBQVEsRUFBRTtBQUNSO0FBRFE7QUFETCxHQUFQO0FBS0QsQ0FORDs7QUFRZUgsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiY29uc3QgYmFzZVN0eWxlID0ge1xyXG4gICAgbGF5ZXJTdHlsZTogJ2hlYWRpbmcnLFxyXG4gICAgY29sb3I6IFwiZ3JheS43MDBcIixcclxuICAgICcuY2hha3JhLXVpLWRhcmsgJic6IHsgY29sb3I6ICdjdXJyZW50Q29sb3InIH0sXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCB7IGJhc2VTdHlsZSB9O1xyXG4gICIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFrcmEtdWkvY2hha3JhLXVpL3RyZWUvbWFpbi9wYWNrYWdlcy90aGVtZS9zcmMvY29tcG9uZW50c1xyXG4vLyBpbXBvcnQgQXZhdGFyIGZyb20gJy4vYXZhdGFyJztcclxuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XHJcbi8vIGltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4vaWNvbi1idXR0b24nO1xyXG4vLyBpbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJy4vbGluayc7XHJcbi8vIGltcG9ydCBTZWxlY3QgZnJvbSAnLi9zZWxlY3QnO1xyXG4vLyBpbXBvcnQgU3dpdGNoIGZyb20gJy4vc3dpdGNoJztcclxuLy8gaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vdGV4dGFyZWEnO1xyXG4vLyBpbXBvcnQgRm9ybUxhYmVsIGZyb20gJy4vZm9ybS1jb250cm9sL2Zvcm0tbGFiZWwnO1xyXG4vLyBpbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcclxuLy8gaW1wb3J0IEJveCBmcm9tICcuL2JveCc7XHJcbi8vIGltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBIZWFkaW5nIGZyb20gJy4vaGVhZGluZyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XHJcbi8vIGltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcclxuLy8gaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi9wb3BvdmVyJztcclxuLy8gaW1wb3J0IERyYXdlciBmcm9tICcuL2RyYXdlcic7XHJcbi8vIGltcG9ydCBDaGVja0JveCBmcm9tICcuL2NoZWNrYm94JztcclxuLy8gaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9kaXZpZGVyJztcclxuaW1wb3J0IHsgVGhlbWVDb21wb25lbnRzIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZSc7XHJcblxyXG5jb25zdCBjb21wb25lbnRzOiBUaGVtZUNvbXBvbmVudHMgPSB7XHJcbi8vICAgQXZhdGFyLFxyXG4vLyAgIEJ1dHRvbixcclxuLy8gICBJY29uQnV0dG9uLFxyXG4vLyAgIElucHV0LFxyXG4vLyAgIExpbmssXHJcbi8vICAgU2VsZWN0LFxyXG4vLyAgIFN3aXRjaCxcclxuLy8gICBUZXh0QXJlYSxcclxuLy8gICBGb3JtTGFiZWwsXHJcbi8vICAgQWNjb3JkaW9uLFxyXG4vLyAgIEJveCxcclxuLy8gICBNZW51LFxyXG4gIFRleHQsXHJcbiAgSGVhZGluZyxcclxuLy8gICBNb2RhbCxcclxuLy8gICBQb3BvdmVyLFxyXG4vLyAgIERyYXdlcixcclxuLy8gICBDaGVja0JveCxcclxuLy8gICBEaXZpZGVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50cztcclxuIiwiY29uc3QgYmFzZVN0eWxlID0ge1xyXG4gICAgbGF5ZXJTdHlsZTogJ3RleHQnLFxyXG4gICAgY29sb3I6IFwiZ3JheS44MDBcIixcclxuICAgICcuY2hha3JhLXVpLWRhcmsgJic6IHsgY29sb3I6ICdjdXJyZW50Q29sb3InIH0sXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCB7IGJhc2VTdHlsZSB9O1xyXG4gICIsIi8vIGltcG9ydCBicmVha3BvaW50cyBmcm9tICcuL2JyZWFrcG9pbnRzJztcclxuLy8gaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XHJcbi8vIGltcG9ydCByYWRpaSBmcm9tICcuL3JhZGl1cyc7XHJcbi8vIGltcG9ydCBzaGFkb3dzIGZyb20gJy4vc2hhZG93cyc7XHJcbi8vIGltcG9ydCBzaXplcywgeyBiYXNlU2l6ZXMgfSBmcm9tICcuL3NpemVzJztcclxuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnLi90eXBvZ3JhcGh5JztcclxuLy8gaW1wb3J0IHpJbmRpY2VzIGZyb20gJy4vei1pbmRleCc7XHJcbi8vIGltcG9ydCBib3JkZXJzIGZyb20gJy4vYm9yZGVycyc7XHJcblxyXG4vL2NvbnN0IHNwYWNlID0gYmFzZVNpemVzO1xyXG5cclxuY29uc3QgZm91bmRhdGlvbnMgPSB7XHJcbiAvLyBicmVha3BvaW50cyxcclxuIC8vIHpJbmRpY2VzLFxyXG4gLy9yYWRpaSxcclxuIC8vIGNvbG9ycyxcclxuICAuLi50eXBvZ3JhcGh5LFxyXG4gLy8gc2l6ZXMsXHJcbiAvLyBzaGFkb3dzLFxyXG4gLy8gc3BhY2UsXHJcbi8vICAgYm9yZGVycyxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEZvdW5kYXRpb25zID0gdHlwZW9mIGZvdW5kYXRpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm91bmRhdGlvbnM7IiwiY29uc3QgdHlwb2dyYXBoeSA9IHtcclxuICAgIGxldHRlclNwYWNpbmdzOiB7XHJcbiAgICAgIHRpZ2h0ZXI6ICctMC4wNWVtJyxcclxuICAgICAgdGlnaHQ6ICctMC4wMjVlbScsXHJcbiAgICAgIG5vcm1hbDogJzAnLFxyXG4gICAgICB3aWRlOiAnMC4wMjVlbScsXHJcbiAgICAgIHdpZGVyOiAnMC4wNWVtJyxcclxuICAgICAgd2lkZXN0OiAnMC4xZW0nLFxyXG4gICAgfSxcclxuICBcclxuICAgIGxpbmVIZWlnaHRzOiB7XHJcbiAgICAgIG5vcm1hbDogJ25vcm1hbCcsXHJcbiAgICAgIG5vbmU6ICcxJyxcclxuICAgICAgc2hvcnRlcjogJzEuMjUnLFxyXG4gICAgICBzaG9ydDogJzEuMzc1JyxcclxuICAgICAgYmFzZTogJzEuNScsXHJcbiAgICAgIHRhbGw6ICcxLjYyNScsXHJcbiAgICAgIHRhbGxlcjogJzInLFxyXG4gICAgfSxcclxuICBcclxuICAgIGZvbnRXZWlnaHRzOiB7XHJcbiAgICAgIGhhaXJsaW5lOiAxMDAsXHJcbiAgICAgIHRoaW46IDIwMCxcclxuICAgICAgbGlnaHQ6IDMwMCxcclxuICAgICAgbm9ybWFsOiA0MDAsXHJcbiAgICAgIG1lZGl1bTogNTAwLFxyXG4gICAgICBzZW1pYm9sZDogNjAwLFxyXG4gICAgICBib2xkOiA3MDAsXHJcbiAgICAgIGV4dHJhYm9sZDogODAwLFxyXG4gICAgICBibGFjazogOTAwLFxyXG4gICAgfSxcclxuICBcclxuICAgIC8vIGZvbnRzOiB7XHJcbiAgICAvLyAgIGJvZHk6ICdSb2JvdG8sIHNhbnMtc2VyaWYnLFxyXG4gICAgLy8gICBoZWFkaW5nOiAnUm9ib3RvLCBzYW5zLXNlcmlmJyxcclxuICAgIC8vICAgbW9ubzogJ01lbmxvLCBtb25vc3BhY2UnLFxyXG4gICAgLy8gfSxcclxuICAgIC8vdGV4dENvbG9yOiBcImdyZWVuLjUwMFwiLFxyXG4gIFxyXG4gICAgZm9udFNpemVzOiB7XHJcbiAgICAgIHhzOiAnMC43NXJlbScsXHJcbiAgICAgIHNtOiAnMC44NzVyZW0nLFxyXG4gICAgICBtZDogJzFyZW0nLFxyXG4gICAgICBsZzogJzEuMTI1cmVtJyxcclxuICAgICAgeGw6ICcxLjI1cmVtJyxcclxuICAgICAgJzJ4bCc6ICcxLjVyZW0nLFxyXG4gICAgICAnM3hsJzogJzEuODc1cmVtJyxcclxuICAgICAgJzR4bCc6ICcyLjI1cmVtJyxcclxuICAgICAgJzV4bCc6ICczcmVtJyxcclxuICAgICAgJzZ4bCc6ICc0cmVtJyxcclxuICAgIH0sXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgdHlwZSBUeXBvZ3JhcGh5ID0gdHlwZW9mIHR5cG9ncmFwaHk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgdHlwb2dyYXBoeTsiLCJpbXBvcnQgeyBleHRlbmRUaGVtZSwgVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHRoZW1lT3ZlcnJpZGUgZnJvbSAnLi9vdmVycmlkZSc7XHJcblxyXG5jb25zdCB0aGVtZTogVGhlbWUgPSBleHRlbmRUaGVtZSh0aGVtZU92ZXJyaWRlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lOyIsIi8vIGRhcmsgbW9kZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFrcmEtdWkvY2hha3JhLXVpL2lzc3Vlcy8yMjMxXHJcbi8vIGltcG9ydCBjYXJkIGZyb20gJy4vY2FyZCc7XHJcbi8vIGltcG9ydCBjaGF0IGZyb20gJy4vY2hhdCc7XHJcbi8vIGltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4vYmFja2dyb3VuZCc7XHJcbi8vIGltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XHJcbi8vIGltcG9ydCBjb250cm9sIGZyb20gJy4vY29udHJvbCc7XHJcbmltcG9ydCB0ZXh0IGZyb20gJy4vdGV4dCc7XHJcbi8vIGltcG9ydCBuYXYgZnJvbSAnLi9uYXYnO1xyXG5cclxuY29uc3QgbGF5ZXJTdHlsZXMgPSB7XHJcbi8vICAgY29udHJvbCxcclxuLy8gICBjYXJkLFxyXG4vLyAgIGNoYXQsXHJcbi8vICAgYmFja2dyb3VuZCxcclxuLy8gICBtZW51LFxyXG4vLyAgIG5hdixcclxuICB0ZXh0LFxyXG4gIHNxdWFyZToge1xyXG4gICAgdzogMTUwLFxyXG4gICAgaDogMTUwLFxyXG4gIH0sXHJcbiAgYnV0dG9uSWNvbjoge1xyXG4gICAgYm94U2l6ZTogJzYnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsYXllclN0eWxlczsiLCJjb25zdCB0ZXh0ID0ge1xyXG4gICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAvLyBjb2xvcjogJ2dyZWVuJyxcclxuICAgICcuY2hha3JhLXVpLWRhcmsgJic6IHsgY29sb3I6ICdjdXJyZW50Q29sb3InIH0sXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCB0ZXh0OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFrcmEtdWkvY2hha3JhLXVpXHJcbmltcG9ydCBmb3VuZGF0aW9ucyBmcm9tICcuL2ZvdW5kYXRpb25zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBjb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cyc7XHJcbmltcG9ydCBsYXllclN0eWxlcyBmcm9tICcuL2xheWVyU3R5bGVzJztcclxuaW1wb3J0IHsgVGhlbWVDb25maWcsIENvbG9yTW9kZSwgVGhlbWVPdmVycmlkZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG4vKipcclxuICogQ29sb3IgbW9kZSBjb25maWdcclxuICovXHJcbmNvbnN0IGNvbG9yTW9kZTogQ29sb3JNb2RlID0gJ2xpZ2h0JztcclxuXHJcbmNvbnN0IGNvbmZpZzogVGhlbWVDb25maWcgPSB7XHJcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlLFxyXG4gIGluaXRpYWxDb2xvck1vZGU6IGNvbG9yTW9kZSxcclxufTtcclxuXHJcbmNvbnN0IHRoZW1lT3ZlcnJpZGU6IFRoZW1lT3ZlcnJpZGUgPSB7XHJcbiAgIC4uLmZvdW5kYXRpb25zLFxyXG4gIGNvbmZpZyxcclxuICBzdHlsZXMsXHJcbmxheWVyU3R5bGVzLFxyXG4gICBjb21wb25lbnRzLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWVPdmVycmlkZTtcclxuIiwiaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIjtcclxuXHJcbmNvbnN0IHN0eWxlczogU3R5bGVzID0ge1xyXG4gIGdsb2JhbDoge1xyXG4gICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgY29sb3I6ICdsaWdodFRleHRDb2xvcicsXHJcbiAgICBiZzogJ2xpZ2h0QmdDb2xvcicsXHJcbiAgICAnLmNoYWtyYS11aS1kYXJrICYnOiB7IGNvbG9yOiAnZGFya1RleHRDb2xvcicsIGJnOiAnZGFya0NvbnRyb2xDb2xvcicgfSxcclxuICAgICcqOjpwbGFjZWhvbGRlcic6IHtcclxuICAgICAgY29sb3I6ICdncmF5LjYwMCcsXHJcbiAgICAgICcuY2hha3JhLXVpLWRhcmsgJic6IHsgY29sb3I6ICd3aGl0ZUFscGhhLjcwMCcgfSxcclxuICAgIH0sXHJcbiAgICAnKiwgKjo6YmVmb3JlLCAmOjphZnRlcic6IHtcclxuICAgICAgYm9yZGVyQ29sb3I6ICdncmF5LjIwMCcsXHJcbiAgICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXHJcbiAgICAgICcuY2hha3JhLXVpLWRhcmsgJic6IHsgYm9yZGVyQ29sb3I6ICd3aGl0ZUFscGhhLjMwMCcgfSxcclxuICAgIH0sXHJcbiAgICBmb250RmVhdHVyZVNldHRpbmdzOiBgXCJwbnVtXCJgLFxyXG4gICAgZm9udFZhcmlhbnROdW1lcmljOiAncHJvcG9ydGlvbmFsLW51bXMnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7IiwiaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZTogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgbXQ9ezJ9XHJcbiAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICBoZWlnaHQ9XCI4NXZoXCJcclxuICAgICAgYWxpZ25Db250ZW50PVwiY2VudGVyXCJcclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgb3ZlcmZsb3dZPVwic2Nyb2xsXCJcclxuICAgICAgcD17MX1cclxuICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICBjc3M9e3tcclxuICAgICAgICBzY3JvbGxTbmFwVHlwZTogJ3ggbWFuZGF0b3J5JyxcclxuICAgICAgICAnOjotd2Via2l0LXNjcm9sbGJhcic6IHsgd2lkdGg6IDAgfSxcclxuICAgICAgICAnLW1zT3ZlcmZsb3dTdHlsZSc6ICdub25lJyxcclxuICAgICAgICBzY3JvbGxiYXJXaWR0aDogJ25vbmUnLFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucmVzdH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgSVBhZ2VIZWFkZXJQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGtleXdvcmRzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlSGVhZDogUmVhY3QuRkM8SVBhZ2VIZWFkZXJQcm9wcz4gPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGtleXdvcmRzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8dGl0bGU+XHJcbiAgICAgICAge3RpdGxlfSB8IHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX05BTUV9XHJcbiAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2tleXdvcmRzfSAvPlxyXG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pY29ucy9mYXZpY29uLmljb1wiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmludGVyZmFjZSBJUGFnZUNvbnRlbnRQcm9wcyB7XHJcbiAgY2hpbGRyZW46IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VDb250ZW50OiBSZWFjdC5GQzxJUGFnZUNvbnRlbnRQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIDxtYWluPntjaGlsZHJlbn08L21haW4+O1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUZXh0LCBIZWFkaW5nLCB1c2VDb2xvck1vZGUsIHVzZUNvbG9yTW9kZVZhbHVlIGFzIG1vZGUsIEJveFByb3BzLCBCb3gsIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBCYW5uZXI6IFJlYWN0LkZDPEJveFByb3BzPiA9ICh7IC4uLnJlc3QgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleD5cclxuICAgICAgPEhlYWRpbmcgdGV4dEFsaWduPVwiY2VudGVyXCIgZm9udFNpemU9e1snbWQnLCAneGwnLCAneGwnLCAnMnhsJ119IGZvbnRXZWlnaHQ9XCJleHRyYWJvbGRcIiB7Li4ucmVzdH0+PC9IZWFkaW5nPlxyXG4gICAgICA8Qm94IG10PXsxfT5cclxuICAgICAgICA8c3Bhbj7wn5CCPC9zcGFuPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9idXR0b24nO1xyXG5pbXBvcnQgeyB1c2VDb2xvck1vZGUgfSBmcm9tICdAY2hha3JhLXVpL2NvbG9yLW1vZGUnO1xyXG5pbXBvcnQgeyBGYVN1biwgRmFNb29uIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuY29uc3QgRGFya01vZGVCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJY29uQnV0dG9uXHJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cclxuICAgICAgZm9udFNpemU9XCIxNXB4XCJcclxuICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgaWNvbj17Y29sb3JNb2RlID09ICdkYXJrJyA/IDxGYVN1biAvPiA6IDxGYU1vb24gLz59XHJcbiAgICAgIGFyaWEtbGFiZWw9XCJDaGFuZ2UgQ29sb3VyIE1vZGVcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFya01vZGVCdXR0b247XHJcbiIsImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBMaW5rLCBTaW1wbGVHcmlkLCBTdGFjaywgVGV4dCwgRmxleCwgVGFnLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvZ28gPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIHJldHVybiA8SW1hZ2Ugc3JjPVwiL2ljb25zL2Zhdmljb24ucG5nXCIgYWx0PVwiSW1GZWVsaW5nQnVsbGlzaFwiIHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gLz47XHJcbn07XHJcblxyXG5jb25zdCBMaXN0SGVhZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRleHQgZm9udFdlaWdodD17JzUwMCd9IGZvbnRTaXplPXsnbGcnfSBtYj17Mn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVGV4dD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS41MCcsICdncmF5LjkwMCcpfSBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuNzAwJywgJ2dyYXkuMjAwJyl9PlxyXG4gICAgICA8Qm94IHB5PXsxMH0+XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGFsaWduPXsnY2VudGVyJ31cclxuICAgICAgICAgIF9iZWZvcmU9e3tcclxuICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcycHggc29saWQnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuNDAwJywgJ2dyYXkuNzAwJyksXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICBtcjogOCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBfYWZ0ZXI9e3tcclxuICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcycHggc29saWQnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuNDAwJywgJ2dyYXkuNzAwJyksXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICBtbDogOCxcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPFRleHQgcHQ9ezZ9IGZvbnRTaXplPXsnc20nfSB0ZXh0QWxpZ249eydjZW50ZXInfT5cclxuICAgICAgICAgIMKpIDIwMjEgSW1GZWVsaW5nQnVsbGlzaC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Q29udGFpbmVyIGFzPXtTdGFja30gbWF4Vz17JzZ4bCd9PlxyXG4gICAgICAgIDxCb3ggbWI9ezN9PlxyXG4gICAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCI+RGlzY2xhaW1lcjogTm9uZSBvZiB0aGUgY29udGVudCBoZXJlIGlzIGZpbmFuY2lhbCBhZHZpY2U8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgey8qIDxTaW1wbGVHcmlkIGNvbHVtbnM9e3sgYmFzZTogMSwgc206IDIsIG1kOiA0IH19IHNwYWNpbmc9ezh9PlxyXG4gICAgICAgICAgPFN0YWNrIGFsaWduPXsnZmxleC1zdGFydCd9PlxyXG4gICAgICAgICAgICA8TGlzdEhlYWRlcj5Qcm9kdWN0PC9MaXN0SGVhZGVyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnIyd9Pk92ZXJ2aWV3PC9MaW5rPlxyXG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXsncm93J30gYWxpZ249eydjZW50ZXInfSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnIyd9PkZlYXR1cmVzPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxUYWcgc2l6ZT17J3NtJ30gYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmVlbi4zMDAnLCAnZ3JlZW4uODAwJyl9IG1sPXsyfSBjb2xvcj17J3doaXRlJ30+XHJcbiAgICAgICAgICAgICAgICBOZXdcclxuICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17JyMnfT5UdXRvcmlhbHM8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+UHJpY2luZzwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17JyMnfT5SZWxlYXNlczwvTGluaz5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8U3RhY2sgYWxpZ249eydmbGV4LXN0YXJ0J30+XHJcbiAgICAgICAgICAgIDxMaXN0SGVhZGVyPkNvbXBhbnk8L0xpc3RIZWFkZXI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+QWJvdXQgVXM8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+UHJlc3M8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+Q2FyZWVyczwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17JyMnfT5Db250YWN0IFVzPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnIyd9PlBhcnRuZXJzPC9MaW5rPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgIDxTdGFjayBhbGlnbj17J2ZsZXgtc3RhcnQnfT5cclxuICAgICAgICAgICAgPExpc3RIZWFkZXI+TGVnYWw8L0xpc3RIZWFkZXI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+Q29va2llcyBQb2xpY3k8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+UHJpdmFjeSBQb2xpY3k8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+VGVybXMgb2YgU2VydmljZTwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17JyMnfT5MYXcgRW5mb3JjZW1lbnQ8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+U3RhdHVzPC9MaW5rPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgIDxTdGFjayBhbGlnbj17J2ZsZXgtc3RhcnQnfT5cclxuICAgICAgICAgICAgPExpc3RIZWFkZXI+Rm9sbG93IFVzPC9MaXN0SGVhZGVyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnIyd9PkZhY2Vib29rPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnIyd9PlR3aXR0ZXI8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+RHJpYmJibGU8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+SW5zdGFncmFtPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnIyd9PkxpbmtlZEluPC9MaW5rPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L1NpbXBsZUdyaWQ+ICovfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCB7IHVzZUNvbG9yTW9kZSwgdGhlbWUsIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vY29tbW9uL1BhZ2VzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXInO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiB7XHJcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgbT1cIjAgYXV0b1wiIG14PXsyfT5cclxuICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8RmxleCBmbGV4RGlyPVwicm93XCI+XHJcbiAgICAgICAgPFBhZ2U+e2NoaWxkcmVufTwvUGFnZT5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ29sb3JNb2RlLCBGbGV4LCBCb3gsIEljb25CdXR0b24sIExpbmssIFN0YWNrLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBCYW5uZXIgfSBmcm9tICcuLi9jb21tb24vVGV4dHMnO1xyXG5pbXBvcnQgeyBJY29uVHlwZSB9IGZyb20gJ3JlYWN0LWljb25zJztcclxuaW1wb3J0IERhcmtNb2RlQnV0dG9uIGZyb20gJy4vRGFya01vZGVCdXR0b24nO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBhcz1cIm5hdlwiXHJcbiAgICAgIHc9XCIxMDAlXCJcclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4XCJcclxuICAgICAgYWxpZ25JdGVtcz1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICBtaW5IPVwiNnZoXCJcclxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgIHRvcD17MH1cclxuICAgICAgYm9yZGVyQm90dG9tPVwiMXB4XCJcclxuICAgICAgYm9yZGVyQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjQwMCcsICdncmF5LjcwMCcpfT5cclxuICAgICAgPFN0YWNrIGlzSW5saW5lIHc9XCIxMDAlXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIHsvKiA8Qm94IG10PXsxfT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGljb249ezxNZE1lbnUgLz59XHJcbiAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1cmdlck1lbnVQcmVzc31cclxuICAgICAgICAgICAgY29sb3I9e3RoZW1lLmNvbG9ycy5pY29uQ29sb3JbY29sb3JNb2RlXX1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlwiXHJcbiAgICAgICAgICAgIGlzUm91bmRtb2RcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxLjI1ZW1cIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD4gKi99XHJcbiAgICAgICAgPEJhbm5lciBteD17Mn0gbXQ9ezF9IHRleHRBbGlnbj1cImNlbnRlclwiIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgncmVkLjUwMCcsICdyZWQuODAwJyl9PlxyXG4gICAgICAgICAgSW1GZWVsaW5nQnVsbGlzaC5jb21cclxuICAgICAgICA8L0Jhbm5lcj5cclxuICAgICAgICA8RGFya01vZGVCdXR0b24gLz5cclxuICAgICAgPC9TdGFjaz5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIElOYXZJdGVtUHJvcHMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBJY29uOiBJY29uVHlwZTtcclxuICBsaW5rOiBzdHJpbmc7XHJcbiAgdG9vbHRpcDogc3RyaW5nO1xyXG4gIG1lbWJlclN0YXR1c0lkOiBudW1iZXI7XHJcbiAgdXNlck1lbWJlclN0YXR1c0lkOiBudW1iZXI7XHJcbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XHJcbiAgaXNPcGVuOiBib29sZWFuO1xyXG4gIGlkeDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGVmdE5hdkl0ZW06IFJlYWN0LkZDPElOYXZJdGVtUHJvcHM+ID0gKHsgSWNvbiwgbGluaywgdG9vbHRpcCwgbWVtYmVyU3RhdHVzSWQsIHVzZXJNZW1iZXJTdGF0dXNJZCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggbWw9ezJ9PlxyXG4gICAgICB7dXNlck1lbWJlclN0YXR1c0lkID49IG1lbWJlclN0YXR1c0lkICYmIChcclxuICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0gaXNJbmxpbmUgdz1cIjgwJVwiIHB5PVwiMC41ZW1cIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17bGlua30gaXNFeHRlcm5hbD5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gSWNvbj17SWNvbn0gc2l6ZT1cInNtXCIgbGFiZWw9e3Rvb2x0aXB9IGNvbG9yPVwiZ3JheS4xMDBcIiBvbkNsaWNrPXsoKSA9PiB1bmRlZmluZWR9IGFyaWEtbGFiZWw9XCJcIiAvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3QgcGVyY2VudFNpemVzID0gWy4uLnNpemVzLm1hdGNoQWxsKC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nKV0ubWFwKChtKSA9PlxuICAgICAgcGFyc2VJbnQobVsyXSlcbiAgICApXG4gICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoXG4gICAgICAgICAgKHMpID0+IHMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICksXG4gICAgICAgIGtpbmQ6ICd3JyxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBhbGxTaXplcywga2luZDogJ3cnIH1cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuXG4gICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7IWlzVmlzaWJsZSAmJiAoXG4gICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHsuLi5nZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgICBsb2FkZXIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgICAgICBzaXplcz17c2l6ZXN9XG4gICAgICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgKX1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJpbXBvcnQgeyBBcHBDb250ZXh0LCBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgY3VzdG9tVGhlbWUgZnJvbSAnLi4vY2hha3JhJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9kaWZpZWRBcHBJbml0aWFsUHJvcHM8QSA9IHsgW2tleSBpbiBzdHJpbmddOiBzdHJpbmcgfT4ge1xyXG4gIGFwcFByb3BzOiBBO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVuZGVkQXBwUHJvcHM8UCA9IHsgW2tleSBpbiBzdHJpbmddOiBzdHJpbmcgfSwgQSA9IHsgW2tleSBpbiBzdHJpbmddOiBzdHJpbmcgfT4gZXh0ZW5kcyBBcHBQcm9wczxQPiwgTW9kaWZpZWRBcHBJbml0aWFsUHJvcHM8QT4ge31cclxuXHJcbmNvbnN0IE15QXBwOiBOZXh0Q29tcG9uZW50VHlwZTxBcHBDb250ZXh0LCBNb2RpZmllZEFwcEluaXRpYWxQcm9wcywgRXh0ZW5kZWRBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBwUHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hha3JhUHJvdmlkZXIgcmVzZXRDU1MgdGhlbWU9e2N1c3RvbVRoZW1lfT5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBhcHBQcm9wczoge1xyXG4gICAgICAvKiAuLi5zb21lQXBwUHJvcHMgKi9cclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2NvbG9yLW1vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=