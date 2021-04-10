webpackHotUpdate_N_E("pages/token/[id]",{

/***/ "./components/coinGecko/single/DeveloperDataStats.tsx":
/*!************************************************************!*\
  !*** ./components/coinGecko/single/DeveloperDataStats.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-social-icons */ "./node_modules/react-social-icons/build/react-social-icons.js");
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_social_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");


var _jsxFileName = "C:\\Users\\ChrisLifts\\Desktop\\ImFeelingBullish-Next\\components\\coinGecko\\single\\DeveloperDataStats.tsx",
    _this = undefined;






var DeveloperDataStats = function DeveloperDataStats(_ref) {
  var developerData = _ref.developerData;
  console.log(developerData);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    p: 4,
    justify: "center",
    flexDir: "column",
    align: "center",
    children: (developerData === null || developerData === void 0 ? void 0 : developerData.forks) != 0 && (developerData === null || developerData === void 0 ? void 0 : developerData.commit_count_4_weeks) != 0 && (developerData === null || developerData === void 0 ? void 0 : developerData.stars) != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_social_icons__WEBPACK_IMPORTED_MODULE_3__["SocialIcon"], {
        url: "https://github.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        mt: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
          flexDir: "row",
          p: 1,
          justify: "space-between",
          isInline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            textAlign: "center",
            children: [developerData === null || developerData === void 0 ? void 0 : developerData.forks, " Forks"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            as: react_icons_go__WEBPACK_IMPORTED_MODULE_4__["GoRepoForked"],
            size: "20px",
            "aria-label": "github fork",
            mt: 2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 76
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
          flexDir: "row",
          p: 1,
          justify: "space-between",
          isInline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            textAlign: "center",
            children: [developerData === null || developerData === void 0 ? void 0 : developerData.commit_count_4_weeks, " Commits (4W)"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, _this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            as: react_icons_go__WEBPACK_IMPORTED_MODULE_4__["GoGitCommit"],
            size: "20px",
            "aria-label": "github commit",
            mt: 2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, _this), ' ']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
          flexDir: "row",
          p: 1,
          justify: "space-between",
          isInline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            textAlign: "center",
            children: [developerData === null || developerData === void 0 ? void 0 : developerData.stars, " Stars"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            as: react_icons_go__WEBPACK_IMPORTED_MODULE_4__["GoStar"],
            size: "20px",
            "aria-label": "github commit",
            mt: 2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 76
          }, _this), ' ']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_c = DeveloperDataStats;
/* harmony default export */ __webpack_exports__["default"] = (DeveloperDataStats);

var _c;

$RefreshReg$(_c, "DeveloperDataStats");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb2luR2Vja28vc2luZ2xlL0RldmVsb3BlckRhdGFTdGF0cy50c3giXSwibmFtZXMiOlsiRGV2ZWxvcGVyRGF0YVN0YXRzIiwiZGV2ZWxvcGVyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmb3JrcyIsImNvbW1pdF9jb3VudF80X3dlZWtzIiwic3RhcnMiLCJHb1JlcG9Gb3JrZWQiLCJHb0dpdENvbW1pdCIsIkdvU3RhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBTUEsSUFBTUEsa0JBQWlELEdBQUcsU0FBcERBLGtCQUFvRCxPQUF1QjtBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7QUFDL0VDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixhQUFaO0FBRUEsc0JBQ0UscUVBQUMscURBQUQ7QUFBTSxLQUFDLEVBQUUsQ0FBVDtBQUFZLFdBQU8sRUFBQyxRQUFwQjtBQUE2QixXQUFPLEVBQUMsUUFBckM7QUFBOEMsU0FBSyxFQUFDLFFBQXBEO0FBQUEsY0FDRyxDQUFBQSxhQUFhLFNBQWIsSUFBQUEsYUFBYSxXQUFiLFlBQUFBLGFBQWEsQ0FBRUcsS0FBZixLQUF3QixDQUF4QixJQUE2QixDQUFBSCxhQUFhLFNBQWIsSUFBQUEsYUFBYSxXQUFiLFlBQUFBLGFBQWEsQ0FBRUksb0JBQWYsS0FBdUMsQ0FBcEUsSUFBeUUsQ0FBQUosYUFBYSxTQUFiLElBQUFBLGFBQWEsV0FBYixZQUFBQSxhQUFhLENBQUVLLEtBQWYsS0FBd0IsQ0FBakcsaUJBQ0MscUVBQUMsb0RBQUQ7QUFBQSw4QkFDRSxxRUFBQyw2REFBRDtBQUFZLFdBQUcsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxvREFBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQUEsZ0NBQ0UscUVBQUMsc0RBQUQ7QUFBTyxpQkFBTyxFQUFDLEtBQWY7QUFBcUIsV0FBQyxFQUFFLENBQXhCO0FBQTJCLGlCQUFPLEVBQUMsZUFBbkM7QUFBbUQsa0JBQVEsTUFBM0Q7QUFBQSxrQ0FDRSxxRUFBQyxxREFBRDtBQUFNLHFCQUFTLEVBQUMsUUFBaEI7QUFBQSx1QkFBMEJMLGFBQTFCLGFBQTBCQSxhQUExQix1QkFBMEJBLGFBQWEsQ0FBRUcsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLG9CQUMrRCxxRUFBQyxvREFBRDtBQUFLLGNBQUUsRUFBRUcsMkRBQVQ7QUFBdUIsZ0JBQUksRUFBQyxNQUE1QjtBQUFtQywwQkFBVyxhQUE5QztBQUE0RCxjQUFFLEVBQUU7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUscUVBQUMsc0RBQUQ7QUFBTyxpQkFBTyxFQUFDLEtBQWY7QUFBcUIsV0FBQyxFQUFFLENBQXhCO0FBQTJCLGlCQUFPLEVBQUMsZUFBbkM7QUFBbUQsa0JBQVEsTUFBM0Q7QUFBQSxrQ0FDRSxxRUFBQyxxREFBRDtBQUFNLHFCQUFTLEVBQUMsUUFBaEI7QUFBQSx1QkFBMEJOLGFBQTFCLGFBQTBCQSxhQUExQix1QkFBMEJBLGFBQWEsQ0FBRUksb0JBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUNxRixHQURyRixlQUVFLHFFQUFDLG9EQUFEO0FBQUssY0FBRSxFQUFFRywwREFBVDtBQUFzQixnQkFBSSxFQUFDLE1BQTNCO0FBQWtDLDBCQUFXLGVBQTdDO0FBQTZELGNBQUUsRUFBRTtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLEVBRXlFLEdBRnpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVFFLHFFQUFDLHNEQUFEO0FBQU8saUJBQU8sRUFBQyxLQUFmO0FBQXFCLFdBQUMsRUFBRSxDQUF4QjtBQUEyQixpQkFBTyxFQUFDLGVBQW5DO0FBQW1ELGtCQUFRLE1BQTNEO0FBQUEsa0NBQ0UscUVBQUMscURBQUQ7QUFBTSxxQkFBUyxFQUFDLFFBQWhCO0FBQUEsdUJBQTBCUCxhQUExQixhQUEwQkEsYUFBMUIsdUJBQTBCQSxhQUFhLENBQUVLLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixvQkFDK0QscUVBQUMsb0RBQUQ7QUFBSyxjQUFFLEVBQUVHLHFEQUFUO0FBQWlCLGdCQUFJLEVBQUMsTUFBdEI7QUFBNkIsMEJBQVcsZUFBeEM7QUFBd0QsY0FBRSxFQUFFO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRC9ELEVBQ2lJLEdBRGpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0F4QkQ7O0tBQU1ULGtCO0FBMEJTQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90b2tlbi9baWRdLmEwNDNjZjE3NzlmYWExM2Q4NzlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIEljb24sIFRleHQsIFN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERldmVsb3BlckRhdGEgfSBmcm9tICcuLi9UeXBlcyc7XHJcbmltcG9ydCB7IFNvY2lhbEljb24gfSBmcm9tICdyZWFjdC1zb2NpYWwtaWNvbnMnO1xyXG5pbXBvcnQgeyBHb0dpdENvbW1pdCwgR29SZXBvRm9ya2VkLCBHb1N0YXIgfSBmcm9tICdyZWFjdC1pY29ucy9nbyc7XHJcblxyXG5pbnRlcmZhY2UgSURldmVsb3BlckRhdGFQcm9wcyB7XHJcbiAgZGV2ZWxvcGVyRGF0YTogRGV2ZWxvcGVyRGF0YTtcclxufVxyXG5cclxuY29uc3QgRGV2ZWxvcGVyRGF0YVN0YXRzOiBSZWFjdC5GQzxJRGV2ZWxvcGVyRGF0YVByb3BzPiA9ICh7IGRldmVsb3BlckRhdGEgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRldmVsb3BlckRhdGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggcD17NH0ganVzdGlmeT1cImNlbnRlclwiIGZsZXhEaXI9XCJjb2x1bW5cIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICB7ZGV2ZWxvcGVyRGF0YT8uZm9ya3MgIT0gMCAmJiBkZXZlbG9wZXJEYXRhPy5jb21taXRfY291bnRfNF93ZWVrcyAhPSAwICYmIGRldmVsb3BlckRhdGE/LnN0YXJzICE9IDAgJiYgKFxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICA8U29jaWFsSWNvbiB1cmw9XCJodHRwczovL2dpdGh1Yi5jb21cIiAvPlxyXG4gICAgICAgICAgPEJveCBtdD17Mn0+XHJcbiAgICAgICAgICAgIDxTdGFjayBmbGV4RGlyPVwicm93XCIgcD17MX0ganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBpc0lubGluZT5cclxuICAgICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57ZGV2ZWxvcGVyRGF0YT8uZm9ya3N9IEZvcmtzPC9UZXh0PiA8Qm94IGFzPXtHb1JlcG9Gb3JrZWR9IHNpemU9XCIyMHB4XCIgYXJpYS1sYWJlbD1cImdpdGh1YiBmb3JrXCIgbXQ9ezJ9IC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDxTdGFjayBmbGV4RGlyPVwicm93XCIgcD17MX0ganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBpc0lubGluZT5cclxuICAgICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57ZGV2ZWxvcGVyRGF0YT8uY29tbWl0X2NvdW50XzRfd2Vla3N9IENvbW1pdHMgKDRXKTwvVGV4dD57JyAnfVxyXG4gICAgICAgICAgICAgIDxCb3ggYXM9e0dvR2l0Q29tbWl0fSBzaXplPVwiMjBweFwiIGFyaWEtbGFiZWw9XCJnaXRodWIgY29tbWl0XCIgbXQ9ezJ9IC8+eycgJ31cclxuICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgPFN0YWNrIGZsZXhEaXI9XCJyb3dcIiBwPXsxfSBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGlzSW5saW5lPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiPntkZXZlbG9wZXJEYXRhPy5zdGFyc30gU3RhcnM8L1RleHQ+IDxCb3ggYXM9e0dvU3Rhcn0gc2l6ZT1cIjIwcHhcIiBhcmlhLWxhYmVsPVwiZ2l0aHViIGNvbW1pdFwiIG10PXsyfSAvPnsnICd9XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV2ZWxvcGVyRGF0YVN0YXRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9