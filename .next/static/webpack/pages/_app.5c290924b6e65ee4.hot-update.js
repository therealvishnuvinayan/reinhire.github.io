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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeTheme\": function() { return /* binding */ changeTheme; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar initialState = {\n    theme: 'light',\n    isLight: true\n};\nvar changeThemeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'changeTheme',\n    initialState: initialState,\n    reducers: {\n        changeTheme: function(state, action) {\n            state.value = action.payload;\n            console.log('##state', state);\n        }\n    }\n});\nvar changeTheme = changeThemeSlice.actions.changeTheme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (changeThemeSlice.reducer);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxHQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ2xCQyxLQUFLLEVBQUUsQ0FBTztJQUNkQyxPQUFPLEVBQUUsSUFBSTtBQUNqQixDQUFDO0FBRUQsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR0osNkRBQVcsQ0FBQyxDQUFDO0lBQ2xDSyxJQUFJLEVBQUUsQ0FBYTtJQUNuQkosWUFBWSxFQUFaQSxZQUFZO0lBQ1pLLFFBQVEsRUFBRSxDQUFDO1FBQ1BDLFdBQVcsRUFBRSxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELE1BQU0sRUFBSyxDQUFDO1lBQzdCQyxLQUFLLENBQUNDLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxPQUFPO1lBQzVCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTLFVBQUVKLEtBQUs7UUFDaEMsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO0FBRU0sR0FBSyxDQUFHRixXQUFXLEdBQUtILGdCQUFnQixDQUFDVSxPQUFPLENBQXhDUCxXQUFXO0FBQzFCLCtEQUFlSCxnQkFBZ0IsQ0FBQ1csT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zbGljZXMvdGhlbWUuanM/MGI1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdGhlbWU6ICdsaWdodCcsXG4gICAgaXNMaWdodDogdHJ1ZVxufVxuXG5jb25zdCBjaGFuZ2VUaGVtZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdjaGFuZ2VUaGVtZScsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIGNoYW5nZVRoZW1lOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjI3N0YXRlJywgc3RhdGUpXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBjaGFuZ2VUaGVtZSB9ID0gY2hhbmdlVGhlbWVTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgY2hhbmdlVGhlbWVTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidGhlbWUiLCJpc0xpZ2h0IiwiY2hhbmdlVGhlbWVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImNoYW5nZVRoZW1lIiwiYWN0aW9uIiwic3RhdGUiLCJ2YWx1ZSIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/slices/theme.js\n");

/***/ })

});