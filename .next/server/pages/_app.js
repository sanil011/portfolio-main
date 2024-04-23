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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=Moon,Sun!=!./node_modules/lucide-react/dist/esm/lucide-react.js":
/*!*************************************************************************************************!*\
  !*** __barrel_optimize__?names=Moon,Sun!=!./node_modules/lucide-react/dist/esm/lucide-react.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Moon: () => (/* reexport safe */ _icons_moon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Sun: () => (/* reexport safe */ _icons_sun_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _icons_moon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/moon.js */ \"./node_modules/lucide-react/dist/esm/icons/moon.js\");\n/* harmony import */ var _icons_sun_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/sun.js */ \"./node_modules/lucide-react/dist/esm/icons/sun.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Nb29uLFN1biE9IS4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9sdWNpZGUtcmVhY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cGRhdGUvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2x1Y2lkZS1yZWFjdC5qcz9kOWI5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb29uIH0gZnJvbSBcIi4vaWNvbnMvbW9vbi5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN1biB9IGZyb20gXCIuL2ljb25zL3N1bi5qc1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Moon,Sun!=!./node_modules/lucide-react/dist/esm/lucide-react.js\n");

/***/ }),

/***/ "./src/components/layout/navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/navbar.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_pathMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/util/pathMap */ \"./src/util/pathMap.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/util/helper */ \"./src/util/helper.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Moon,Sun!=!lucide-react */ \"__barrel_optimize__?names=Moon,Sun!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_helper__WEBPACK_IMPORTED_MODULE_4__]);\n_util_helper__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst Navbar = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    let pathName = router?.pathname;\n    const { setTheme, theme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme)();\n    console.log(theme);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar | mt-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"navbar-option-list | flex flex-row items-center justify-end gap-2\",\n                children: (0,_util_pathMap__WEBPACK_IMPORTED_MODULE_2__.getPathMap)()?.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: item?.link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            className: (0,_util_helper__WEBPACK_IMPORTED_MODULE_4__.cn)(\"navbar-option-item list-none text-base \", pathName == \"item.link\" && \"underline underline-offset-1\"),\n                            href: item?.link,\n                            children: item?.title\n                        }, void 0, false, {\n                            fileName: \"/Users/sanil/Desktop/untitled folder/portfolio-main/src/components/layout/navbar.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 29\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/sanil/Desktop/untitled folder/portfolio-main/src/components/layout/navbar.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/sanil/Desktop/untitled folder/portfolio-main/src/components/layout/navbar.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    theme == \"dark\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_7__.Sun, {\n                        onClick: ()=>setTheme(\"light\")\n                    }, void 0, false, {\n                        fileName: \"/Users/sanil/Desktop/untitled folder/portfolio-main/src/components/layout/navbar.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 37\n                    }, undefined),\n                    theme == \"light\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_7__.Moon, {\n                        onClick: ()=>setTheme(\"dark\"),\n                        className: \"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sanil/Desktop/untitled folder/portfolio-main/src/components/layout/navbar.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 38\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sanil/Desktop/untitled folder/portfolio-main/src/components/layout/navbar.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sanil/Desktop/untitled folder/portfolio-main/src/components/layout/navbar.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDRDtBQUNmO0FBQ007QUFDSztBQUNBO0FBQ0Y7QUFPdEMsTUFBTVEsU0FBa0M7SUFDcEMsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLElBQUlNLFdBQVdELFFBQVFFO0lBQ3ZCLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUUsR0FBR04scURBQVFBO0lBQ3BDTyxRQUFRQyxHQUFHLENBQUNGO0lBQ1oscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFDVGhCLHlEQUFVQSxJQUFJa0IsSUFBSSxDQUFDQyxNQUFvQkMsc0JBQ3BDLDhEQUFDQztrQ0FDSUYsTUFBTUcsc0JBQ0gsOERBQUNyQixrREFBSUE7NEJBQ0RlLFdBQVdkLGdEQUFFQSxDQUFDLDJDQUNWTyxZQUFZLGVBQWU7NEJBQy9CYyxNQUFNSixNQUFNRztzQ0FFWEgsTUFBTUs7Ozs7Ozt1QkFQVko7Ozs7Ozs7Ozs7MEJBWWpCLDhEQUFDSzs7b0JBQ0liLFNBQVMsd0JBQVUsOERBQUNQLDZFQUFHQTt3QkFBQ3FCLFNBQVMsSUFBTWYsU0FBUzs7Ozs7O29CQUNoREMsU0FBUyx5QkFBVyw4REFBQ1IsOEVBQUlBO3dCQUFDc0IsU0FBUyxJQUFNZixTQUFTO3dCQUFTSyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEY7QUFFQSxpRUFBZVQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VwZGF0ZS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9uYXZiYXIudHN4PzBkZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRQYXRoTWFwIH0gZnJvbSAnQC91dGlsL3BhdGhNYXAnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC91dGlsL2hlbHBlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBNb29uLCBTdW4gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCJcblxuaW50ZXJmYWNlIFBhdGhNYXBQcm9wcyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBsaW5rPzogc3RyaW5nO1xuICAgIGlzQXZhaWxhYmxlPzogYm9vbGVhblxufVxuY29uc3QgTmF2YmFyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBsZXQgcGF0aE5hbWUgPSByb3V0ZXI/LnBhdGhuYW1lO1xuICAgIGNvbnN0IHsgc2V0VGhlbWUsIHRoZW1lIH0gPSB1c2VUaGVtZSgpXG4gICAgY29uc29sZS5sb2codGhlbWUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdmJhciB8IG10LTYnPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2YmFyLW9wdGlvbi1saXN0IHwgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgZ2FwLTInPlxuICAgICAgICAgICAgICAgIHtnZXRQYXRoTWFwKCk/Lm1hcCgoaXRlbTogUGF0aE1hcFByb3BzLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtPy5saW5rICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2YmFyLW9wdGlvbi1pdGVtIGxpc3Qtbm9uZSB0ZXh0LWJhc2UgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhOYW1lID09ICdpdGVtLmxpbmsnICYmICd1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC0xJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0/Lmxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbT8udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPn1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0aGVtZSA9PSAnZGFyaycgJiYgPFN1biBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSgnbGlnaHQnKX0gLz59XG4gICAgICAgICAgICAgICAge3RoZW1lID09ICdsaWdodCcgJiYgPE1vb24gb25DbGljaz17KCkgPT4gc2V0VGhlbWUoJ2RhcmsnKX0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaC1bMS4ycmVtXSB3LVsxLjJyZW1dIHJvdGF0ZS05MCBzY2FsZS0wIHRyYW5zaXRpb24tYWxsIGRhcms6cm90YXRlLTAgZGFyazpzY2FsZS0xMDBcIiAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbmV4cG9ydCB0eXBlIHsgUGF0aE1hcFByb3BzIH07Il0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0UGF0aE1hcCIsIkxpbmsiLCJjbiIsInVzZVJvdXRlciIsIk1vb24iLCJTdW4iLCJ1c2VUaGVtZSIsIk5hdmJhciIsInJvdXRlciIsInBhdGhOYW1lIiwicGF0aG5hbWUiLCJzZXRUaGVtZSIsInRoZW1lIiwiY29uc29sZSIsImxvZyIsIm5hdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJsaW5rIiwiaHJlZiIsInRpdGxlIiwiZGl2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/navbar.tsx\n");

/***/ }),

/***/ "./src/components/theme-provider.tsx":
/*!*******************************************!*\
  !*** ./src/components/theme-provider.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ \n\n\nfunction ThemeProvider({ children, ...props }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/sanil/Desktop/untitled folder/portfolio-main/src/components/theme-provider.tsx\",\n        lineNumber: 7,\n        columnNumber: 12\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90aGVtZS1wcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDOEI7QUFDbUM7QUFHMUQsU0FBU0MsY0FBYyxFQUFFRSxRQUFRLEVBQUUsR0FBR0MsT0FBMkI7SUFDcEUscUJBQU8sOERBQUNGLHNEQUFrQkE7UUFBRSxHQUFHRSxLQUFLO2tCQUFHRDs7Ozs7O0FBQzNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXBkYXRlLy4vc3JjL2NvbXBvbmVudHMvdGhlbWUtcHJvdmlkZXIudHN4P2I2OTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIGFzIE5leHRUaGVtZXNQcm92aWRlciB9IGZyb20gXCJuZXh0LXRoZW1lc1wiXG5pbXBvcnQgeyB0eXBlIFRoZW1lUHJvdmlkZXJQcm9wcyB9IGZyb20gXCJuZXh0LXRoZW1lcy9kaXN0L3R5cGVzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfTogVGhlbWVQcm92aWRlclByb3BzKSB7XG4gICAgcmV0dXJuIDxOZXh0VGhlbWVzUHJvdmlkZXIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9OZXh0VGhlbWVzUHJvdmlkZXI+XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUaGVtZVByb3ZpZGVyIiwiTmV4dFRoZW1lc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/theme-provider.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fontsource_variable_inter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource-variable/inter */ \"./node_modules/@fontsource-variable/inter/index.css\");\n/* harmony import */ var _fontsource_variable_inter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_variable_inter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout/navbar */ \"./src/components/layout/navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_theme_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/theme-provider */ \"./src/components/theme-provider.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_navbar__WEBPACK_IMPORTED_MODULE_3__]);\n_components_layout_navbar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_theme_provider__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n            attribute: \"class\",\n            defaultTheme: \"system\",\n            enableSystem: true,\n            disableTransitionOnChange: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/sanil/Desktop/untitled folder/portfolio-main/src/pages/_app.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/sanil/Desktop/untitled folder/portfolio-main/src/pages/_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sanil/Desktop/untitled folder/portfolio-main/src/pages/_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sanil/Desktop/untitled folder/portfolio-main/src/pages/_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRU07QUFDWTtBQUN0QjtBQUNrQztBQUM3QyxTQUFTRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSix1REFBYztrQkFDYiw0RUFBQ0MscUVBQWFBO1lBQ1pLLFdBQVU7WUFDVkMsY0FBYTtZQUNiQyxZQUFZO1lBQ1pDLHlCQUF5Qjs7OEJBRTNCLDhEQUFDVixpRUFBTUE7Ozs7OzhCQUNQLDhEQUFDSTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3VwZGF0ZS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgJ0Bmb250c291cmNlLXZhcmlhYmxlL2ludGVyJztcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdGhlbWUtcHJvdmlkZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFRoZW1lUHJvdmlkZXJcbiAgICAgICAgYXR0cmlidXRlPVwiY2xhc3NcIlxuICAgICAgICBkZWZhdWx0VGhlbWU9XCJzeXN0ZW1cIlxuICAgICAgICBlbmFibGVTeXN0ZW1cbiAgICAgICAgZGlzYWJsZVRyYW5zaXRpb25PbkNoYW5nZVxuICAgICAgPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJSZWFjdCIsIlRoZW1lUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJGcmFnbWVudCIsImF0dHJpYnV0ZSIsImRlZmF1bHRUaGVtZSIsImVuYWJsZVN5c3RlbSIsImRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/util/helper.ts":
/*!****************************!*\
  !*** ./src/util/helper.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cn: () => (/* binding */ cn)\n/* harmony export */ });\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ \"tailwind-merge\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_0__, tailwind_merge__WEBPACK_IMPORTED_MODULE_1__]);\n([clsx__WEBPACK_IMPORTED_MODULE_0__, tailwind_merge__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nfunction cn(...inputs) {\n    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9oZWxwZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ0M7QUFHbEMsU0FBU0UsR0FBRyxHQUFHQyxNQUFtQjtJQUNyQyxPQUFPRix1REFBT0EsQ0FBQ0QsMENBQUlBLENBQUNHO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXBkYXRlLy4vc3JjL3V0aWwvaGVscGVyLnRzP2Y0MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xhc3NWYWx1ZSwgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSBcInRhaWx3aW5kLW1lcmdlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNuKC4uLmlucHV0czpDbGFzc1ZhbHVlW10pIHtcbiAgICByZXR1cm4gdHdNZXJnZShjbHN4KGlucHV0cykpO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJ0d01lcmdlIiwiY24iLCJpbnB1dHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util/helper.ts\n");

/***/ }),

/***/ "./src/util/pathMap.ts":
/*!*****************************!*\
  !*** ./src/util/pathMap.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPathMap: () => (/* binding */ getPathMap)\n/* harmony export */ });\nconst getPathMap = function() {\n    return [\n        {\n            title: \"Home\",\n            link: \"/\",\n            isAvailable: true\n        },\n        {\n            title: \"Project\",\n            link: \"#project\",\n            isAvailable: true\n        },\n        {\n            title: \"Experience\",\n            link: \"experience\",\n            isAvailable: true\n        }\n    ];\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9wYXRoTWFwLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNQSxhQUFhO0lBQ3hCLE9BQU87UUFDTDtZQUNFQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsYUFBYTtRQUNmO1FBQ0E7WUFDRUYsT0FBTztZQUNQQyxNQUFNO1lBQ05DLGFBQWE7UUFDZjtRQUNBO1lBQ0VGLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxhQUFhO1FBQ2Y7S0FDRDtBQUNILEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cGRhdGUvLi9zcmMvdXRpbC9wYXRoTWFwLnRzPzA4MGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aE1hcFByb3BzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRQYXRoTWFwID0gZnVuY3Rpb24gKCk6IFBhdGhNYXBQcm9wc1tdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgICBsaW5rOiAnLycsXG4gICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlByb2plY3RcIixcbiAgICAgIGxpbms6ICcjcHJvamVjdCcsXG4gICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkV4cGVyaWVuY2VcIixcbiAgICAgIGxpbms6ICdleHBlcmllbmNlJyxcbiAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgIH0sXG4gIF07XG59O1xuIl0sIm5hbWVzIjpbImdldFBhdGhNYXAiLCJ0aXRsZSIsImxpbmsiLCJpc0F2YWlsYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util/pathMap.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ }),

/***/ "tailwind-merge":
/*!*********************************!*\
  !*** external "tailwind-merge" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("tailwind-merge");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/lucide-react","vendor-chunks/@fontsource-variable"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();