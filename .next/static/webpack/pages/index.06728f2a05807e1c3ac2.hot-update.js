self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Post/CreatePost */ "./components/Post/CreatePost.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_14__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\pages\\index.js",
    _s = $RefreshSig$();














function Index(_ref) {
  _s();

  var _this = this;

  var user = _ref.user,
      postsData = _ref.postsData,
      errorLoading = _ref.errorLoading;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(postsData),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      showToastr = _useState2[0],
      setShowToastr = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      hasMore = _useState3[0],
      setHasMore = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(2),
      pageNumber = _useState4[0],
      setPageNumber = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    document.title = "Welcome, ".concat(user.name.split(" ")[0]);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    showToastr && setTimeout(function () {
      return setShowToastr(false);
    }, 3000);
  }, [showToastr]); // 可以直接用get请求对应资源，也可以增加 params

  var fetchDataOnScroll = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var res;
      return C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().get("".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default, "/api/posts"), {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_14___default().get("token")
                },
                params: {
                  pageNumber: pageNumber
                }
              });

            case 3:
              res = _context.sent;
              if (res.data.length === 0) setHasMore(false);
              setPosts(function (prev) {
                return [].concat((0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prev), (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(res.data));
              });
              setPageNumber(function (prev) {
                return prev + 1;
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              alert("Error fetching Posts");

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function fetchDataOnScroll() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showToastr && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_11__.PostDeleteToastr, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 22
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.Segment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_7__.default, {
        user: user,
        setPosts: setPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), posts.length === 0 || errorLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_10__.NoPosts, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, this) :
      /*#__PURE__*/
      // 无限下拉滚动条
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_12__.default, {
        hasMore: hasMore,
        next: fetchDataOnScroll,
        loader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__.PlaceHolderPosts, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this),
        endMessage: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__.EndMessage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }, this),
        dataLength: posts.length,
        children: posts.map(function (post) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_8__.default, {
            post: post,
            user: user,
            setPosts: setPosts,
            setShowToastr: setShowToastr
          }, post._id, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "Lo35E5Bip3XK1rIzj+IFUBpxfbY=");

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(ctx) {
    var _parseCookies, token, res;

    return C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _parseCookies = (0,nookies__WEBPACK_IMPORTED_MODULE_9__.parseCookies)(ctx), token = _parseCookies.token;
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_5___default().get("".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default, "/api/posts"), {
              headers: {
                Authorization: token
              },
              params: {
                pageNumber: 1
              }
            });

          case 4:
            res = _context2.sent;
            return _context2.abrupt("return", {
              postsData: res.data
            });

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", {
              errorLoading: true
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VyIiwicG9zdHNEYXRhIiwiZXJyb3JMb2FkaW5nIiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwic2hvd1RvYXN0ciIsInNldFNob3dUb2FzdHIiLCJoYXNNb3JlIiwic2V0SGFzTW9yZSIsInBhZ2VOdW1iZXIiLCJzZXRQYWdlTnVtYmVyIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJ0aXRsZSIsIm5hbWUiLCJzcGxpdCIsInNldFRpbWVvdXQiLCJmZXRjaERhdGFPblNjcm9sbCIsImF4aW9zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29va2llIiwicGFyYW1zIiwicmVzIiwiZGF0YSIsImxlbmd0aCIsInByZXYiLCJhbGVydCIsIm1hcCIsInBvc3QiLCJfaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYXJzZUNvb2tpZXMiLCJ0b2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBLFNBQVNBLEtBQVQsT0FBa0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUFqQ0MsSUFBaUMsUUFBakNBLElBQWlDO0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQUEsa0JBQ3RCQywrQ0FBUSxDQUFDRixTQUFELENBRGM7QUFBQSxNQUN6Q0csS0FEeUM7QUFBQSxNQUNsQ0MsUUFEa0M7O0FBQUEsbUJBRVpGLCtDQUFRLENBQUMsS0FBRCxDQUZJO0FBQUEsTUFFekNHLFVBRnlDO0FBQUEsTUFFN0JDLGFBRjZCOztBQUFBLG1CQUdsQkosK0NBQVEsQ0FBQyxJQUFELENBSFU7QUFBQSxNQUd6Q0ssT0FI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Szs7S0FBQUEsSzs7QUFnRVRBLEtBQUssQ0FBQ2tDLGVBQU47QUFBQSwwVEFBd0Isa0JBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRUZDLHFEQUFZLENBQUNELEdBQUQsQ0FGVixFQUVaRSxLQUZZLGlCQUVaQSxLQUZZO0FBQUE7QUFBQSxtQkFJRmpCLGdEQUFBLFdBQWFDLG1EQUFiLGlCQUFrQztBQUNsREMscUJBQU8sRUFBRTtBQUFFQyw2QkFBYSxFQUFFYztBQUFqQixlQUR5QztBQUVsRFosb0JBQU0sRUFBRTtBQUFFZCwwQkFBVSxFQUFFO0FBQWQ7QUFGMEMsYUFBbEMsQ0FKRTs7QUFBQTtBQUlkZSxlQUpjO0FBQUEsOENBU2I7QUFBRXhCLHVCQUFTLEVBQUV3QixHQUFHLENBQUNDO0FBQWpCLGFBVGE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBV2I7QUFBRXhCLDBCQUFZLEVBQUU7QUFBaEIsYUFYYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjQSwrREFBZUgsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNjcyOGYyYTA1ODA3ZTFjM2FjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XG5pbXBvcnQgQ3JlYXRlUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3RcIjtcbmltcG9ydCBDYXJkUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0XCI7XG5pbXBvcnQgeyBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IHsgTm9Qb3N0cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcbmltcG9ydCB7IFBvc3REZWxldGVUb2FzdHIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyXCI7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gIFBsYWNlSG9sZGVyUG9zdHMsXG4gIEVuZE1lc3NhZ2UsXG59IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9QbGFjZUhvbGRlckdyb3VwXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcblxuZnVuY3Rpb24gSW5kZXgoeyB1c2VyLCBwb3N0c0RhdGEsIGVycm9yTG9hZGluZyB9KSB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUocG9zdHNEYXRhKTtcbiAgY29uc3QgW3Nob3dUb2FzdHIsIHNldFNob3dUb2FzdHJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFzTW9yZSwgc2V0SGFzTW9yZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LnRpdGxlID0gYFdlbGNvbWUsICR7dXNlci5uYW1lLnNwbGl0KFwiIFwiKVswXX1gO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzaG93VG9hc3RyICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1RvYXN0cihmYWxzZSksIDMwMDApO1xuICB9LCBbc2hvd1RvYXN0cl0pO1xuXG4gIC8vIOWPr+S7peebtOaOpeeUqGdldOivt+axguWvueW6lOi1hOa6kO+8jOS5n+WPr+S7peWinuWKoCBwYXJhbXNcbiAgY29uc3QgZmV0Y2hEYXRhT25TY3JvbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcG9zdHNgLCB7XG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH0sXG4gICAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkgc2V0SGFzTW9yZShmYWxzZSk7XG5cbiAgICAgIHNldFBvc3RzKChwcmV2KSA9PiBbLi4ucHJldiwgLi4ucmVzLmRhdGFdKTtcbiAgICAgIHNldFBhZ2VOdW1iZXIoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoXCJFcnJvciBmZXRjaGluZyBQb3N0c1wiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dUb2FzdHIgJiYgPFBvc3REZWxldGVUb2FzdHIgLz59XG4gICAgICA8U2VnbWVudD5cbiAgICAgICAgPENyZWF0ZVBvc3QgdXNlcj17dXNlcn0gc2V0UG9zdHM9e3NldFBvc3RzfSAvPlxuICAgICAgICB7cG9zdHMubGVuZ3RoID09PSAwIHx8IGVycm9yTG9hZGluZyA/IChcbiAgICAgICAgICA8Tm9Qb3N0cyAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIC8vIOaXoOmZkOS4i+aLiea7muWKqOadoVxuICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgaGFzTW9yZT17aGFzTW9yZX1cbiAgICAgICAgICAgIG5leHQ9e2ZldGNoRGF0YU9uU2Nyb2xsfVxuICAgICAgICAgICAgbG9hZGVyPXs8UGxhY2VIb2xkZXJQb3N0cyAvPn1cbiAgICAgICAgICAgIGVuZE1lc3NhZ2U9ezxFbmRNZXNzYWdlIC8+fVxuICAgICAgICAgICAgZGF0YUxlbmd0aD17cG9zdHMubGVuZ3RofVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgPENhcmRQb3N0XG4gICAgICAgICAgICAgICAga2V5PXtwb3N0Ll9pZH1cbiAgICAgICAgICAgICAgICBwb3N0PXtwb3N0fVxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICAgICAgc2V0UG9zdHM9e3NldFBvc3RzfVxuICAgICAgICAgICAgICAgIHNldFNob3dUb2FzdHI9e3NldFNob3dUb2FzdHJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuICAgICAgICApfVxuICAgICAgPC9TZWdtZW50PlxuICAgIDwvPlxuICApO1xufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCwge1xuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxuICAgICAgcGFyYW1zOiB7IHBhZ2VOdW1iZXI6IDEgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHBvc3RzRGF0YTogcmVzLmRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==