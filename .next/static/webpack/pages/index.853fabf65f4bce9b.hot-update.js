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

/***/ "./src/pages/home.jsx":
/*!****************************!*\
  !*** ./src/pages/home.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar/navbar */ \"./src/components/Navbar/navbar.jsx\");\n/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Dark */ \"./src/layouts/Dark.jsx\");\n/* harmony import */ var _layouts_Light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/Light */ \"./src/layouts/Light.jsx\");\n/* harmony import */ var _layouts_Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/Theme */ \"./src/layouts/Theme.jsx\");\n/* harmony import */ var _components_Intro4_intro4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Intro4/intro4 */ \"./src/components/Intro4/intro4.jsx\");\n/* harmony import */ var _components_About_us3_about_us3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/About-us3/about-us3 */ \"./src/components/About-us3/about-us3.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n// import FullTestimonials from \"../../components/Full-testimonials/full-testimonials\";\n// import CallToAction from \"../../components/Call-to-action/call-to-action\";\n// import Footer from \"../../components/Footer/footer\";\n// import Team from \"../../components/Team/team\";\n\n\n\n// import Works3 from \"../../components/Works3/works3\";\n// import Blogs4 from \"../../components/blogs/Blogs4/blogs4\";\n\n\n// import Services3 from \"../../components/Services3/services3\";\n// import MinimalArea2 from \"../../components/Minimal-Area2/minimal-area2\";\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Homepage = function() {\n    _s();\n    var navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var navbar = navbarRef.current;\n        if (window.pageYOffset > 300) {\n            navbar.classList.add(\"nav-scroll\");\n        } else {\n            navbar.classList.remove(\"nav-scroll\");\n        }\n        window.addEventListener(\"scroll\", function() {\n            if (window.pageYOffset > 300) {\n                navbar.classList.add(\"nav-scroll\");\n            } else {\n                navbar.classList.remove(\"nav-scroll\");\n            }\n        });\n    }, [\n        navbarRef\n    ]);\n    var selectedTheme = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function(state) {\n        return state.theme;\n    }).value;\n    var finalTheme = selectedTheme && selectedTheme.theme;\n    console.log('##finalTheme', finalTheme);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            __source: {\n                fileName: \"/Users/avish/Desktop/ReinHire/ReinHireWebsite/src/pages/home.jsx\",\n                lineNumber: 44,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    nr: navbarRef,\n                    lr: logoRef,\n                    theme: finalTheme,\n                    __source: {\n                        fileName: \"/Users/avish/Desktop/ReinHire/ReinHireWebsite/src/pages/home.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Intro4_intro4__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/avish/Desktop/ReinHire/ReinHireWebsite/src/pages/home.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_About_us3_about_us3__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/avish/Desktop/ReinHire/ReinHireWebsite/src/pages/home.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                })\n            ]\n        })\n    }));\n};\n_s(Homepage, \"NJv/rvX5fPwWhnPtkwq0tuwt7xI=\");\n_c = Homepage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDdUI7QUFDaEQsRUFBdUY7QUFDdkYsRUFBNkU7QUFDN0UsRUFBdUQ7QUFDdkQsRUFBaUQ7QUFDVjtBQUNFO0FBQ0w7QUFDcEMsRUFBdUQ7QUFDdkQsRUFBNkQ7QUFDYjtBQUNPO0FBQ3ZELEVBQWdFO0FBQ2hFLEVBQTJFO0FBRWxDOzs7QUFFekMsR0FBSyxDQUFDUSxRQUFRLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQ3RCLEdBQUssQ0FBQ0MsU0FBUyxHQUFHVCxtREFBWSxDQUFDLElBQUk7SUFDbkMsR0FBSyxDQUFDVyxPQUFPLEdBQUdYLG1EQUFZLENBQUMsSUFBSTtJQUVqQ0Esc0RBQWUsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNyQixHQUFHLENBQUNhLE1BQU0sR0FBR0osU0FBUyxDQUFDSyxPQUFPO1FBQzlCLEVBQUUsRUFBRUMsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDN0JILE1BQU0sQ0FBQ0ksU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBWTtRQUNuQyxDQUFDLE1BQU0sQ0FBQztZQUNOTCxNQUFNLENBQUNJLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQVk7UUFDdEMsQ0FBQztRQUNESixNQUFNLENBQUNLLGdCQUFnQixDQUFDLENBQVEsU0FBRSxRQUFRLEdBQUYsQ0FBQztZQUN2QyxFQUFFLEVBQUVMLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUM3QkgsTUFBTSxDQUFDSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxDQUFZO1lBQ25DLENBQUMsTUFBTSxDQUFDO2dCQUNOTCxNQUFNLENBQUNJLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQVk7WUFDdEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ1Y7UUFBQUEsU0FBUztJQUFBLENBQUM7SUFFZCxHQUFLLENBQUNZLGFBQWEsR0FBR2Qsd0RBQVcsQ0FBQyxRQUFRLENBQVBlLEtBQUs7UUFBS0EsTUFBTUMsQ0FBTkQsS0FBSyxDQUFDQyxLQUFLO09BQUVDLEtBQUs7SUFDL0QsR0FBSyxDQUFDQyxVQUFVLEdBQUdKLGFBQWEsSUFBSUEsYUFBYSxDQUFDRSxLQUFLO0lBQ3pERyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFjLGVBQUVGLFVBQVU7SUFDcEMsTUFBTTt3RkFFSHJCLHNEQUFLOzs7Ozs7OztxRkFhSEgsaUVBQU07b0JBQUMyQixFQUFFLEVBQUVuQixTQUFTO29CQUFFb0IsRUFBRSxFQUFFbEIsT0FBTztvQkFBRVksS0FBSyxFQUFFRSxVQUFVOzs7Ozs7OztxRkFDcERwQixpRUFBTTs7Ozs7Ozs7cUZBQ05DLHVFQUFPOzs7Ozs7Ozs7OztBQU1kLENBQUM7R0E5Q0tFLFFBQVE7S0FBUkEsUUFBUTtBQWdEZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lLmpzeD8yZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyXCI7XHJcbi8vIGltcG9ydCBGdWxsVGVzdGltb25pYWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Z1bGwtdGVzdGltb25pYWxzL2Z1bGwtdGVzdGltb25pYWxzXCI7XHJcbi8vIGltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FsbC10by1hY3Rpb24vY2FsbC10by1hY3Rpb25cIjtcclxuLy8gaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyXCI7XHJcbi8vIGltcG9ydCBUZWFtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RlYW0vdGVhbVwiO1xyXG5pbXBvcnQgRGFya1RoZW1lIGZyb20gXCIuLi9sYXlvdXRzL0RhcmtcIjtcclxuaW1wb3J0IExpZ2h0VGhlbWUgZnJvbSBcIi4uL2xheW91dHMvTGlnaHRcIjtcclxuaW1wb3J0IFRoZW1lIGZyb20gXCIuLi9sYXlvdXRzL1RoZW1lXCI7XHJcbi8vIGltcG9ydCBXb3JrczMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV29ya3MzL3dvcmtzM1wiO1xyXG4vLyBpbXBvcnQgQmxvZ3M0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jsb2dzL0Jsb2dzNC9ibG9nczRcIjtcclxuaW1wb3J0IEludHJvNCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnRybzQvaW50cm80XCI7XHJcbmltcG9ydCBBYm91dFVzIGZyb20gXCIuLi9jb21wb25lbnRzL0Fib3V0LXVzMy9hYm91dC11czNcIjtcclxuLy8gaW1wb3J0IFNlcnZpY2VzMyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZXJ2aWNlczMvc2VydmljZXMzXCI7XHJcbi8vIGltcG9ydCBNaW5pbWFsQXJlYTIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWluaW1hbC1BcmVhMi9taW5pbWFsLWFyZWEyXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY29uc3QgSG9tZXBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2YmFyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGxvZ29SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgbmF2YmFyID0gbmF2YmFyUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1zY3JvbGxcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtuYXZiYXJSZWZdKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRUaGVtZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudGhlbWUpLnZhbHVlXHJcbiAgY29uc3QgZmluYWxUaGVtZSA9IHNlbGVjdGVkVGhlbWUgJiYgc2VsZWN0ZWRUaGVtZS50aGVtZVxyXG5jb25zb2xlLmxvZygnIyNmaW5hbFRoZW1lJywgZmluYWxUaGVtZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8VGhlbWU+XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgey8qIDxBYm91dFVzMyAvPlxyXG4gICAgICA8V29ya3MzIC8+XHJcbiAgICAgIDxTZXJ2aWNlczMgLz5cclxuICAgICAgPE1pbmltYWxBcmVhMiAvPlxyXG4gICAgICA8RnVsbFRlc3RpbW9uaWFscyBjbGFzc1RleHQ9XCJwYi0wXCIgLz5cclxuICAgICAgPFRlYW0gLz5cclxuICAgICAgPEJsb2dzNCAvPlxyXG4gICAgICA8Q2FsbFRvQWN0aW9uIC8+XHJcbiAgICAgIDxGb290ZXIgLz4gKi99XHJcbiAgXHJcbiAgICAgIDxOYXZiYXIgbnI9e25hdmJhclJlZn0gbHI9e2xvZ29SZWZ9IHRoZW1lPXtmaW5hbFRoZW1lfS8+XHJcbiAgICAgIDxJbnRybzQgLz5cclxuICAgICAgPEFib3V0VXMgLz5cclxuICAgXHJcbiAgPC9UaGVtZT5cclxuICAgIFxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOYXZiYXIiLCJEYXJrVGhlbWUiLCJMaWdodFRoZW1lIiwiVGhlbWUiLCJJbnRybzQiLCJBYm91dFVzIiwidXNlU2VsZWN0b3IiLCJIb21lcGFnZSIsIm5hdmJhclJlZiIsInVzZVJlZiIsImxvZ29SZWYiLCJ1c2VFZmZlY3QiLCJuYXZiYXIiLCJjdXJyZW50Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0ZWRUaGVtZSIsInN0YXRlIiwidGhlbWUiLCJ2YWx1ZSIsImZpbmFsVGhlbWUiLCJjb25zb2xlIiwibG9nIiwibnIiLCJsciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.jsx\n");

/***/ })

});