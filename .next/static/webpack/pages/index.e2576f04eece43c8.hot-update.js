"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/Theme.jsx":
/*!*******************************!*\
  !*** ./src/layouts/Theme.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-css-tags */ \n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Theme = function(param) {\n    var children = param.children, useSkin = param.useSkin, mobileappstyle = param.mobileappstyle;\n    _s();\n    console.log('##useSkin', useSkin);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('dark'), theme = ref[0], setTheme = ref[1];\n    var selectedTheme = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.theme;\n    }).value;\n    var finalTheme = selectedTheme && selectedTheme.theme;\n    console.log('##selectedTheme', selectedTheme);\n    //\n    //\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTheme(finalTheme);\n        // const finalTheme = selectedTheme || theme\n        console.log('##todo local selected Theme', selectedTheme);\n        window.theme = finalTheme;\n    }, [\n        finalTheme\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/avish/Desktop/ReinHire/ReinHireWebsite/src/layouts/Theme.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    theme === 'dark' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"/css/dark.css\",\n                        __source: {\n                            fileName: \"/Users/avish/Desktop/ReinHire/ReinHireWebsite/src/layouts/Theme.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"/css/light.css\",\n                        __source: {\n                            fileName: \"/Users/avish/Desktop/ReinHire/ReinHireWebsite/src/layouts/Theme.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    useSkin ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"/css/arch-skin-dark.css\",\n                        __source: {\n                            fileName: \"/Users/avish/Desktop/ReinHire/ReinHireWebsite/src/layouts/Theme.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 20\n                        },\n                        __self: _this\n                    }) : '',\n                    mobileappstyle ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        href: \"/css/mobile-app-dark.css\",\n                        rel: \"stylesheet\",\n                        __source: {\n                            fileName: \"/Users/avish/Desktop/ReinHire/ReinHireWebsite/src/layouts/Theme.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 27\n                        },\n                        __self: _this\n                    }) : ''\n                ]\n            }),\n            children\n        ]\n    }));\n};\n_s(Theme, \"9RGeGBSotEy8UtzfVDSKLb40ujU=\");\n_c = Theme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Theme);\nvar _c;\n$RefreshReg$(_c, \"Theme\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9UaGVtZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEVBQTJDLDBDQUNPO0FBQ3RCO0FBQ2E7OztBQUV6QyxHQUFLLENBQUNLLEtBQUssR0FBRyxRQUFRLFFBQW1DLENBQUM7UUFBekNDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsY0FBYyxTQUFkQSxjQUFjOztJQUNoREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVyxZQUFFSCxPQUFPO0lBQ2hDLEdBQUssQ0FBcUJOLEdBQWdCLEdBQWhCQSwrQ0FBUSxDQUFDLENBQU0sUUFBbENVLEtBQUssR0FBY1YsR0FBZ0IsS0FBNUJXLFFBQVEsR0FBSVgsR0FBZ0I7SUFDMUMsR0FBSyxDQUFDWSxhQUFhLEdBQUdULHdEQUFXLENBQUMsUUFBUSxDQUFQVSxLQUFLO1FBQUtBLE1BQU1ILENBQU5HLEtBQUssQ0FBQ0gsS0FBSztPQUFFSSxLQUFLO0lBQy9ELEdBQUssQ0FBQ0MsVUFBVSxHQUFHSCxhQUFhLElBQUlBLGFBQWEsQ0FBQ0YsS0FBSztJQUV2REYsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBaUIsa0JBQUVHLGFBQWE7SUFFNUMsRUFBRTtJQUNGLEVBQUU7SUFFRlgsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZlUsUUFBUSxDQUFDSSxVQUFVO1FBQ25CLEVBQTRDO1FBQzVDUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE2Qiw4QkFBRUcsYUFBYTtRQUN4REksTUFBTSxDQUFDTixLQUFLLEdBQUdLLFVBQVU7SUFDM0IsQ0FBQyxFQUFFLENBQUNBO1FBQUFBLFVBQVU7SUFBQSxDQUFDO0lBQ2YsTUFBTTs7a0ZBRURiLGtEQUFJOzs7Ozs7OztvQkFDRlEsS0FBSyxLQUFLLENBQU0sNkVBQ2RPLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFZO3dCQUFDQyxJQUFJLEVBQUMsQ0FBZTs7Ozs7Ozs4RkFFMUNGLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFZO3dCQUFDQyxJQUFJLEVBQUMsQ0FBZ0I7Ozs7Ozs7O29CQUc3Q2IsT0FBTyx3RUFBSVcsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQVk7d0JBQUNDLElBQUksRUFBQyxDQUF5Qjs7Ozs7Ozt5QkFBTSxDQUFFO29CQUN2RVosY0FBYyx3RUFBSVUsQ0FBSTt3QkFBQ0UsSUFBSSxFQUFDLENBQTBCO3dCQUFDRCxHQUFHLEVBQUMsQ0FBWTs7Ozs7Ozt5QkFBTSxDQUFFOzs7WUFFakZiLFFBQVE7OztBQUdmLENBQUM7R0FoQ0tELEtBQUs7S0FBTEEsS0FBSztBQWtDWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0cy9UaGVtZS5qc3g/MWRhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWNzcy10YWdzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgVGhlbWUgPSAoeyBjaGlsZHJlbiwgdXNlU2tpbiwgbW9iaWxlYXBwc3R5bGUgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnIyN1c2VTa2luJywgdXNlU2tpbilcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnZGFyaycpXG4gIGNvbnN0IHNlbGVjdGVkVGhlbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRoZW1lKS52YWx1ZVxuICBjb25zdCBmaW5hbFRoZW1lID0gc2VsZWN0ZWRUaGVtZSAmJiBzZWxlY3RlZFRoZW1lLnRoZW1lXG4gIFxuICBjb25zb2xlLmxvZygnIyNzZWxlY3RlZFRoZW1lJywgc2VsZWN0ZWRUaGVtZSlcblxuICAvL1xuICAvL1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGhlbWUoZmluYWxUaGVtZSlcbiAgICAvLyBjb25zdCBmaW5hbFRoZW1lID0gc2VsZWN0ZWRUaGVtZSB8fCB0aGVtZVxuICAgIGNvbnNvbGUubG9nKCcjI3RvZG8gbG9jYWwgc2VsZWN0ZWQgVGhlbWUnLCBzZWxlY3RlZFRoZW1lKVxuICAgIHdpbmRvdy50aGVtZSA9IGZpbmFsVGhlbWVcbiAgfSwgW2ZpbmFsVGhlbWVdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAge3RoZW1lID09PSAnZGFyaycgPyAoXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2RhcmsuY3NzXCIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvbGlnaHQuY3NzXCIgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7dXNlU2tpbiA/IDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9hcmNoLXNraW4tZGFyay5jc3NcIiAvPiA6ICcnfVxuICAgICAgICB7bW9iaWxlYXBwc3R5bGUgPyA8bGluayBocmVmPVwiL2Nzcy9tb2JpbGUtYXBwLWRhcmsuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+IDogJyd9XG4gICAgICA8L0hlYWQ+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsInVzZVNlbGVjdG9yIiwiVGhlbWUiLCJjaGlsZHJlbiIsInVzZVNraW4iLCJtb2JpbGVhcHBzdHlsZSIsImNvbnNvbGUiLCJsb2ciLCJ0aGVtZSIsInNldFRoZW1lIiwic2VsZWN0ZWRUaGVtZSIsInN0YXRlIiwidmFsdWUiLCJmaW5hbFRoZW1lIiwid2luZG93IiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/Theme.jsx\n");

/***/ })

});