self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\pages\\_app.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__.default, _objectSpread(_objectSpread({}, pageProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {
    var Component, ctx, _parseCookies, token, pageProps, path, protectedRoutes, res, _res$data, user, userFollowStats;

    return C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref2.Component, ctx = _ref2.ctx;
            _parseCookies = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(ctx), token = _parseCookies.token;
            pageProps = {};
            path = ctx.pathname;
            protectedRoutes = path === "/" || path === "/[username]" || path === "/notifications" || path === "/post/[postId]" || path === "/messages" || path === "/search"; // 用户未登录重定向

            if (token) {
              _context.next = 9;
              break;
            }

            protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_7__.redirectUser)(ctx, "/login");
            _context.next = 27;
            break;

          case 9:
            if (!Component.getInitialProps) {
              _context.next = 13;
              break;
            }

            _context.next = 12;
            return Component.getInitialProps(ctx);

          case 12:
            pageProps = _context.sent;

          case 13:
            _context.prev = 13;
            _context.next = 16;
            return axios__WEBPACK_IMPORTED_MODULE_4___default().get("".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default, "/api/auth"), {
              headers: {
                Authorization: token
              }
            });

          case 16:
            res = _context.sent;
            _res$data = res.data, user = _res$data.user, userFollowStats = _res$data.userFollowStats;
            if (user) !protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_7__.redirectUser)(ctx, "/");
            pageProps.user = user;
            pageProps.userFollowStats = userFollowStats;
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](13);
            (0,nookies__WEBPACK_IMPORTED_MODULE_5__.destroyCookie)(ctx, "token");
            (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_7__.redirectUser)(ctx, "/login");

          case 27:
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[13, 23]]);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInBhcnNlQ29va2llcyIsInRva2VuIiwicGF0aCIsInBhdGhuYW1lIiwicHJvdGVjdGVkUm91dGVzIiwicmVkaXJlY3RVc2VyIiwiYXhpb3MiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXMiLCJkYXRhIiwidXNlciIsInVzZXJGb2xsb3dTdGF0cyIsImRlc3Ryb3lDb29raWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQThCO0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDMUMsc0JBQ0UsOERBQUMsOERBQUQsa0NBQVlBLFNBQVo7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztLQUFNRixLOztBQVFOQSxLQUFLLENBQUNHLGVBQU47QUFBQSwwVEFBd0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTRixxQkFBVCxTQUFTQSxTQUFULEVBQW9CRyxHQUFwQixTQUFvQkEsR0FBcEI7QUFBQSw0QkFDSkMscURBQVksQ0FBQ0QsR0FBRCxDQURSLEVBQ2RFLEtBRGMsaUJBQ2RBLEtBRGM7QUFFbEJKLHFCQUZrQixHQUVOLEVBRk07QUFHaEJLLGdCQUhnQixHQUdUSCxHQUFHLENBQUNJLFFBSEs7QUFLaEJDLDJCQUxnQixHQU1wQkYsSUFBSSxLQUFLLEdBQVQsSUFDQUEsSUFBSSxLQUFLLGFBRFQsSUFFQUEsSUFBSSxLQUFLLGdCQUZULElBR0FBLElBQUksS0FBSyxnQkFIVCxJQUlBQSxJQUFJLEtBQUssV0FKVCxJQUtBQSxJQUFJLEtBQUssU0FYVyxFQWF0Qjs7QUFic0IsZ0JBY2pCRCxLQWRpQjtBQUFBO0FBQUE7QUFBQTs7QUFlcEJHLDJCQUFlLElBQUlDLDZEQUFZLENBQUNOLEdBQUQsRUFBTSxRQUFOLENBQS9CO0FBZm9CO0FBQUE7O0FBQUE7QUFBQSxpQkFpQmhCSCxTQUFTLENBQUNFLGVBakJNO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBa0JBRixTQUFTLENBQUNFLGVBQVYsQ0FBMEJDLEdBQTFCLENBbEJBOztBQUFBO0FBa0JsQkYscUJBbEJrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFzQkFTLGdEQUFBLFdBQWFDLG1EQUFiLGdCQUFpQztBQUNqREMscUJBQU8sRUFBRTtBQUFFQyw2QkFBYSxFQUFFUjtBQUFqQjtBQUR3QyxhQUFqQyxDQXRCQTs7QUFBQTtBQXNCWlMsZUF0Qlk7QUFBQSx3QkEwQmdCQSxHQUFHLENBQUNDLElBMUJwQixFQTBCVkMsSUExQlUsYUEwQlZBLElBMUJVLEVBMEJKQyxlQTFCSSxhQTBCSkEsZUExQkk7QUE0QmxCLGdCQUFJRCxJQUFKLEVBQVUsQ0FBQ1IsZUFBRCxJQUFvQkMsNkRBQVksQ0FBQ04sR0FBRCxFQUFNLEdBQU4sQ0FBaEM7QUFFVkYscUJBQVMsQ0FBQ2UsSUFBVixHQUFpQkEsSUFBakI7QUFDQWYscUJBQVMsQ0FBQ2dCLGVBQVYsR0FBNEJBLGVBQTVCO0FBL0JrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWlDbEJDLGtFQUFhLENBQUNmLEdBQUQsRUFBTSxPQUFOLENBQWI7QUFDQU0seUVBQVksQ0FBQ04sR0FBRCxFQUFNLFFBQU4sQ0FBWjs7QUFsQ2tCO0FBQUEsNkNBc0NmO0FBQUVGLHVCQUFTLEVBQVRBO0FBQUYsYUF0Q2U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBeUNBLCtEQUFlRixLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjE5MDc5MTJiYmU0NDVlZmNjNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3RVc2VyIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgey4uLnBhZ2VQcm9wc30+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XHJcbiAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gIGNvbnN0IHBhdGggPSBjdHgucGF0aG5hbWU7XHJcblxyXG4gIGNvbnN0IHByb3RlY3RlZFJvdXRlcyA9XHJcbiAgICBwYXRoID09PSBcIi9cIiB8fFxyXG4gICAgcGF0aCA9PT0gXCIvW3VzZXJuYW1lXVwiIHx8XHJcbiAgICBwYXRoID09PSBcIi9ub3RpZmljYXRpb25zXCIgfHxcclxuICAgIHBhdGggPT09IFwiL3Bvc3QvW3Bvc3RJZF1cIiB8fFxyXG4gICAgcGF0aCA9PT0gXCIvbWVzc2FnZXNcIiB8fFxyXG4gICAgcGF0aCA9PT0gXCIvc2VhcmNoXCI7XHJcblxyXG4gIC8vIOeUqOaIt+acqueZu+W9lemHjeWumuWQkVxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIHByb3RlY3RlZFJvdXRlcyAmJiByZWRpcmVjdFVzZXIoY3R4LCBcIi9sb2dpblwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvYXV0aGAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyB1c2VyLCB1c2VyRm9sbG93U3RhdHMgfSA9IHJlcy5kYXRhO1xyXG5cclxuICAgICAgaWYgKHVzZXIpICFwcm90ZWN0ZWRSb3V0ZXMgJiYgcmVkaXJlY3RVc2VyKGN0eCwgXCIvXCIpO1xyXG5cclxuICAgICAgcGFnZVByb3BzLnVzZXIgPSB1c2VyO1xyXG4gICAgICBwYWdlUHJvcHMudXNlckZvbGxvd1N0YXRzID0gdXNlckZvbGxvd1N0YXRzO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGVzdHJveUNvb2tpZShjdHgsIFwidG9rZW5cIik7XHJcbiAgICAgIHJlZGlyZWN0VXNlcihjdHgsIFwiL2xvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==