"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Component() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    if (session) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \"Signed in as \",\n                session.user.email,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                    __source: {\n                        fileName: \"/home/bugxploit/Desktop/did/src/pages/login.js\",\n                        lineNumber: 7,\n                        columnNumber: 43\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)()\n                    ,\n                    __source: {\n                        fileName: \"/home/bugxploit/Desktop/did/src/pages/login.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Sign out\"\n                })\n            ]\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"Not signed in \",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"/home/bugxploit/Desktop/did/src/pages/login.js\",\n                    lineNumber: 14,\n                    columnNumber: 21\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)()\n                ,\n                __source: {\n                    fileName: \"/home/bugxploit/Desktop/did/src/pages/login.js\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Sign in\"\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZEO0FBQzlDLFFBQVEsQ0FBQ0csU0FBUyxHQUFHLENBQUM7SUFDbkMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQUMsQ0FBQyxHQUFHTCwyREFBVTtJQUNwQyxFQUFFLEVBQUVLLE9BQU8sRUFBRSxDQUFDO1FBQ1osTUFBTTs7Z0JBQ0YsQ0FDYTtnQkFBQ0EsT0FBTyxDQUFDQyxJQUFJLENBQUNDLEtBQUs7Z0JBQUMsQ0FBQztxRkFBQ0MsQ0FBRTs7Ozs7Ozs7cUZBQ3BDQyxDQUFNO29CQUFDQyxPQUFPLE1BQVFSLHdEQUFPOzs7Ozs7Ozs4QkFBSSxDQUFROzs7O0lBR2hELENBQUM7SUFDRCxNQUFNOztZQUNGLENBQ2M7aUZBQUNNLENBQUU7Ozs7Ozs7O2lGQUNoQkMsQ0FBTTtnQkFBQ0MsT0FBTyxNQUFRVCx1REFBTTs7Ozs7Ozs7MEJBQUksQ0FBTzs7OztBQUc5QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZXN0YXRpb24tcG9ydGZvbGlvLy4vc3JjL3BhZ2VzL2xvZ2luLmpzP2U1YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnQoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG4gIGlmIChzZXNzaW9uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIFNpZ25lZCBpbiBhcyB7c2Vzc2lvbi51c2VyLmVtYWlsfSA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgTm90IHNpZ25lZCBpbiA8YnIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKCl9PlNpZ24gaW48L2J1dHRvbj5cbiAgICA8Lz5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIkNvbXBvbmVudCIsImRhdGEiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/login.js"));
module.exports = __webpack_exports__;

})();