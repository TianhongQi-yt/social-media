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
  }, [showToastr]);
  if (posts.length === 0 || errorLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_10__.NoPosts, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 50
  }, this); // 可以直接用get请求对应资源，也可以增加 params

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
      lineNumber: 53,
      columnNumber: 22
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.Segment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_7__.default, {
        user: user,
        setPosts: setPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), posts.length === 0 || errorLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_10__.NoPosts, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, this) :
      /*#__PURE__*/
      // 无限下拉滚动条
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_12__.default, {
        hasMore: hasMore,
        next: fetchDataOnScroll,
        loader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__.PlaceHolderPosts, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this),
        endMessage: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__.EndMessage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
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
            lineNumber: 68,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VyIiwicG9zdHNEYXRhIiwiZXJyb3JMb2FkaW5nIiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwic2hvd1RvYXN0ciIsInNldFNob3dUb2FzdHIiLCJoYXNNb3JlIiwic2V0SGFzTW9yZSIsInBhZ2VOdW1iZXIiLCJzZXRQYWdlTnVtYmVyIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJ0aXRsZSIsIm5hbWUiLCJzcGxpdCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJmZXRjaERhdGFPblNjcm9sbCIsImF4aW9zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29va2llIiwicGFyYW1zIiwicmVzIiwiZGF0YSIsInByZXYiLCJhbGVydCIsIm1hcCIsInBvc3QiLCJfaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYXJzZUNvb2tpZXMiLCJ0b2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBLFNBQVNBLEtBQVQsT0FBa0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUFqQ0MsSUFBaUMsUUFBakNBLElBQWlDO0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQUEsa0JBQ3RCQywrQ0FBUSxDQUFDRixTQUFELENBRGM7QUFBQSxNQUN6Q0csS0FEeUM7QUFBQSxNQUNsQ0MsUUFEa0M7O0FBQUEsbUJBRVpGLCtDQUFRLENBQUMsS0FBRCxDQUZJO0FBQUEsTUFFekNHLFVBRnlDO0FBQUEsTUFFN0JDLGFBRjZCOztBQUFBLG1CQUdsQkosK0NBQVEsQ0FBQyxJQUFELENBSFU7QUFBQSxNQUd6Q0ssT0FIeUM7QUFBQSxNQUdoQ0MsVUFIZ0M7O0FBQUEsbUJBS1pOLCtDQUFRLENBQUMsQ0FBRCxDQUxJO0FBQUEsTUFLekNPLFVBTHlDO0FBQUEsTUFLN0JDLGFBTDZCOztBQU9oREMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsS0FBVCxzQkFBNkJkLElBQUksQ0FBQ2UsSUFBTCxDQUFVQyxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBQTdCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBSixrREFBUyxDQUFDLFlBQU07QUFDZE4sY0FBVSxJQUFJVyxVQUFVLENBQUM7QUFBQSxhQUFNVixhQUFhLENBQUMsS0FBRCxDQUFuQjtBQUFBLEtBQUQsRUFBNkIsSUFBN0IsQ0FBeEI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0QsVUFBRCxDQUZNLENBQVQ7QUFJQSxNQUFJRixLQUFLLENBQUNjLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0JoQixZQUExQixFQUF3QyxvQkFBTyw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVAsQ0FmUSxDQWlCaEQ7O0FBQ0EsTUFBTWlCLGlCQUFpQjtBQUFBLDRUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFSkMsZ0RBQUEsV0FBYUMsbURBQWIsaUJBQWtDO0FBQ2xEQyx1QkFBTyxFQUFFO0FBQUVDLCtCQUFhLEVBQUVDLHFEQUFBLENBQVcsT0FBWDtBQUFqQixpQkFEeUM7QUFFbERDLHNCQUFNLEVBQUU7QUFBRWYsNEJBQVUsRUFBVkE7QUFBRjtBQUYwQyxlQUFsQyxDQUZJOztBQUFBO0FBRWhCZ0IsaUJBRmdCO0FBT3RCLGtCQUFJQSxHQUFHLENBQUNDLElBQUosQ0FBU1QsTUFBVCxLQUFvQixDQUF4QixFQUEyQlQsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUUzQkosc0JBQVEsQ0FBQyxVQUFDdUIsSUFBRDtBQUFBLHdMQUFjQSxJQUFkLDBKQUF1QkYsR0FBRyxDQUFDQyxJQUEzQjtBQUFBLGVBQUQsQ0FBUjtBQUNBaEIsMkJBQWEsQ0FBQyxVQUFDaUIsSUFBRDtBQUFBLHVCQUFVQSxJQUFJLEdBQUcsQ0FBakI7QUFBQSxlQUFELENBQWI7QUFWc0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZdEJDLG1CQUFLLENBQUMsc0JBQUQsQ0FBTDs7QUFac0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBakJWLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxLQUF2Qjs7QUFnQkEsc0JBQ0U7QUFBQSxlQUNHYixVQUFVLGlCQUFJLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEakIsZUFFRSw4REFBQyx1REFBRDtBQUFBLDhCQUNFLDhEQUFDLGdFQUFEO0FBQVksWUFBSSxFQUFFTixJQUFsQjtBQUF3QixnQkFBUSxFQUFFSztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR0QsS0FBSyxDQUFDYyxNQUFOLEtBQWlCLENBQWpCLElBQXNCaEIsWUFBdEIsZ0JBQ0MsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBQUE7QUFHQztBQUNBLG9FQUFDLHFFQUFEO0FBQ0UsZUFBTyxFQUFFTSxPQURYO0FBRUUsWUFBSSxFQUFFVyxpQkFGUjtBQUdFLGNBQU0sZUFBRSw4REFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhWO0FBSUUsa0JBQVUsZUFBRSw4REFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpkO0FBS0Usa0JBQVUsRUFBRWYsS0FBSyxDQUFDYyxNQUxwQjtBQUFBLGtCQU9HZCxLQUFLLENBQUMwQixHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDhCQUNULDhEQUFDLDhEQUFEO0FBRUUsZ0JBQUksRUFBRUEsSUFGUjtBQUdFLGdCQUFJLEVBQUUvQixJQUhSO0FBSUUsb0JBQVEsRUFBRUssUUFKWjtBQUtFLHlCQUFhLEVBQUVFO0FBTGpCLGFBQ093QixJQUFJLENBQUNDLEdBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVY7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQThCRDs7R0FoRVFqQyxLOztLQUFBQSxLOztBQWtFVEEsS0FBSyxDQUFDa0MsZUFBTjtBQUFBLDBUQUF3QixrQkFBT0MsR0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFFRkMscURBQVksQ0FBQ0QsR0FBRCxDQUZWLEVBRVpFLEtBRlksaUJBRVpBLEtBRlk7QUFBQTtBQUFBLG1CQUlGaEIsZ0RBQUEsV0FBYUMsbURBQWIsaUJBQWtDO0FBQ2xEQyxxQkFBTyxFQUFFO0FBQUVDLDZCQUFhLEVBQUVhO0FBQWpCLGVBRHlDO0FBRWxEWCxvQkFBTSxFQUFFO0FBQUVmLDBCQUFVLEVBQUU7QUFBZDtBQUYwQyxhQUFsQyxDQUpFOztBQUFBO0FBSWRnQixlQUpjO0FBQUEsOENBU2I7QUFBRXpCLHVCQUFTLEVBQUV5QixHQUFHLENBQUNDO0FBQWpCLGFBVGE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBV2I7QUFBRXpCLDBCQUFZLEVBQUU7QUFBaEIsYUFYYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjQSwrREFBZUgsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MTc1NGYxMDUzM2EwZjEzNzUzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgQ3JlYXRlUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3RcIjtcclxuaW1wb3J0IENhcmRQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3RcIjtcclxuaW1wb3J0IHsgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyBOb1Bvc3RzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQgeyBQb3N0RGVsZXRlVG9hc3RyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0clwiO1xyXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtcclxuICBQbGFjZUhvbGRlclBvc3RzLFxyXG4gIEVuZE1lc3NhZ2UsXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXBcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHVzZXIsIHBvc3RzRGF0YSwgZXJyb3JMb2FkaW5nIH0pIHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzRGF0YSk7XHJcbiAgY29uc3QgW3Nob3dUb2FzdHIsIHNldFNob3dUb2FzdHJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoYXNNb3JlLCBzZXRIYXNNb3JlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gYFdlbGNvbWUsICR7dXNlci5uYW1lLnNwbGl0KFwiIFwiKVswXX1gO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNob3dUb2FzdHIgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VG9hc3RyKGZhbHNlKSwgMzAwMCk7XHJcbiAgfSwgW3Nob3dUb2FzdHJdKTtcclxuXHJcbiAgaWYgKHBvc3RzLmxlbmd0aCA9PT0gMCB8fCBlcnJvckxvYWRpbmcpIHJldHVybiA8Tm9Qb3N0cyAvPjtcclxuXHJcbiAgLy8g5Y+v5Lul55u05o6l55SoZ2V06K+35rGC5a+55bqU6LWE5rqQ77yM5Lmf5Y+v5Lul5aKe5YqgIHBhcmFtc1xyXG4gIGNvbnN0IGZldGNoRGF0YU9uU2Nyb2xsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxyXG4gICAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkgc2V0SGFzTW9yZShmYWxzZSk7XHJcblxyXG4gICAgICBzZXRQb3N0cygocHJldikgPT4gWy4uLnByZXYsIC4uLnJlcy5kYXRhXSk7XHJcbiAgICAgIHNldFBhZ2VOdW1iZXIoKHByZXYpID0+IHByZXYgKyAxKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KFwiRXJyb3IgZmV0Y2hpbmcgUG9zdHNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93VG9hc3RyICYmIDxQb3N0RGVsZXRlVG9hc3RyIC8+fVxyXG4gICAgICA8U2VnbWVudD5cclxuICAgICAgICA8Q3JlYXRlUG9zdCB1c2VyPXt1c2VyfSBzZXRQb3N0cz17c2V0UG9zdHN9IC8+XHJcbiAgICAgICAge3Bvc3RzLmxlbmd0aCA9PT0gMCB8fCBlcnJvckxvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8Tm9Qb3N0cyAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAvLyDml6DpmZDkuIvmi4nmu5rliqjmnaFcclxuICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxyXG4gICAgICAgICAgICBoYXNNb3JlPXtoYXNNb3JlfVxyXG4gICAgICAgICAgICBuZXh0PXtmZXRjaERhdGFPblNjcm9sbH1cclxuICAgICAgICAgICAgbG9hZGVyPXs8UGxhY2VIb2xkZXJQb3N0cyAvPn1cclxuICAgICAgICAgICAgZW5kTWVzc2FnZT17PEVuZE1lc3NhZ2UgLz59XHJcbiAgICAgICAgICAgIGRhdGFMZW5ndGg9e3Bvc3RzLmxlbmd0aH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxDYXJkUG9zdFxyXG4gICAgICAgICAgICAgICAga2V5PXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XHJcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgc2V0UG9zdHM9e3NldFBvc3RzfVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd1RvYXN0cj17c2V0U2hvd1RvYXN0cn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCwge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXHJcbiAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyOiAxIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBwb3N0c0RhdGE6IHJlcy5kYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=