"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/slices/theme.js":
/*!*****************************!*\
  !*** ./src/slices/theme.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeTheme\": function() { return /* binding */ changeTheme; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar initialState = {\n    theme: 'light',\n    isLig: isLig\n};\nvar changeThemeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'changeTheme',\n    initialState: initialState,\n    reducers: {\n        changeTheme: function(state, action) {\n            console.log('##state', state);\n            console.log('##action', action);\n            state.value = action.payload;\n            console.log('##state', state);\n        }\n    }\n});\nvar changeTheme = changeThemeSlice.actions.changeTheme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (changeThemeSlice.reducer);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxHQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ2xCQyxLQUFLLEVBQUUsQ0FBTztJQUNkQyxLQUFLLEVBQUxBLEtBQUs7QUFDVCxDQUFDO0FBRUQsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR0osNkRBQVcsQ0FBQyxDQUFDO0lBQ2xDSyxJQUFJLEVBQUUsQ0FBYTtJQUNuQkosWUFBWSxFQUFaQSxZQUFZO0lBQ1pLLFFBQVEsRUFBRSxDQUFDO1FBQ1BDLFdBQVcsRUFBRSxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELE1BQU0sRUFBSyxDQUFDO1lBQzdCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTLFVBQUVGLEtBQUs7WUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVUsV0FBRUgsTUFBTTtZQUM5QkMsS0FBSyxDQUFDRyxLQUFLLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBTztZQUM1QkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUyxVQUFFRixLQUFLO1FBQ2hDLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVNLEdBQUssQ0FBR0YsV0FBVyxHQUFLSCxnQkFBZ0IsQ0FBQ1UsT0FBTyxDQUF4Q1AsV0FBVztBQUMxQiwrREFBZUgsZ0JBQWdCLENBQUNXLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2xpY2VzL3RoZW1lLmpzPzBiNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHRoZW1lOiAnbGlnaHQnLFxuICAgIGlzTGlnXG59XG5cbmNvbnN0IGNoYW5nZVRoZW1lU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2NoYW5nZVRoZW1lJyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgY2hhbmdlVGhlbWU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnIyNzdGF0ZScsIHN0YXRlKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJyMjYWN0aW9uJywgYWN0aW9uKVxuICAgICAgICAgICAgc3RhdGUudmFsdWUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjI3N0YXRlJywgc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgY2hhbmdlVGhlbWUgfSA9IGNoYW5nZVRoZW1lU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IGNoYW5nZVRoZW1lU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInRoZW1lIiwiaXNMaWciLCJjaGFuZ2VUaGVtZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiY2hhbmdlVGhlbWUiLCJhY3Rpb24iLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/slices/theme.js\n");

/***/ })

});