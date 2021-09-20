self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout/Search.js":
/*!*************************************!*\
  !*** ./components/Layout/Search.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Layout\\Search.js",
    _s = $RefreshSig$(),
    _this = undefined;







var cancel;

function SearchComponent() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      text = _useState[0],
      setText = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      results = _useState3[0],
      setResults = _useState3[1];

  var handleChange = /*#__PURE__*/function () {
    var _ref = (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var value, CancelToken, token, res;
      return C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = e.target.value;

              if (!(value.length === 0)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", setText(value));

            case 3:
              setText(value);
              setLoading(true);
              _context.prev = 5;
              cancel && cancel();
              CancelToken = (axios__WEBPACK_IMPORTED_MODULE_4___default().CancelToken);
              token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default().get("token");
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().get("".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__.default, "/api/search/").concat(value), {
                headers: {
                  Authorization: token
                },
                cancelToken: new CancelToken(function (canceler) {
                  cancel = canceler;
                })
              });

            case 11:
              res = _context.sent;

              if (!(res.data.length === 0)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", setLoading(false));

            case 14:
              setResults(res.data);
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](5);
              console.log("Error Searching");

            case 20:
              setLoading(false);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 17]]);
    }));

    return function handleChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (text.length === 0 && loading) setLoading(false);
  }, [text]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Search, {
    onBlur: function onBlur() {
      results.length > 0 && setResults([]);
      loading && setLoading(false);
      setText("");
    },
    loading: loading,
    value: text,
    resultRenderer: ResultRenderer,
    results: results,
    onSearchChange: handleChange,
    minCharacters: 1,
    onResultSelect: function onResultSelect(e, data) {
      return next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/".concat(data.result.username));
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(SearchComponent, "jxYTcNY/bFk9AOcmydm6GjYxU4I=");

_c = SearchComponent;

var ResultRenderer = function ResultRenderer(_ref2) {
  var _id = _ref2._id,
      profilePicUrl = _ref2.profilePicUrl,
      name = _ref2.name;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.List, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.List.Item, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Image, {
        src: profilePicUrl,
        alt: "ProfilePic",
        avatar: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.List.Content, {
        header: name,
        as: "a"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this)
  }, _id, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, _this);
};

_c2 = ResultRenderer;
/* harmony default export */ __webpack_exports__["default"] = (SearchComponent);

var _c, _c2;

$RefreshReg$(_c, "SearchComponent");
$RefreshReg$(_c2, "ResultRenderer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvU2VhcmNoLmpzIl0sIm5hbWVzIjpbImNhbmNlbCIsIlNlYXJjaENvbXBvbmVudCIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwibGVuZ3RoIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInRva2VuIiwiY29va2llIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY2FuY2VsVG9rZW4iLCJjYW5jZWxlciIsInJlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiUmVzdWx0UmVuZGVyZXIiLCJSb3V0ZXIiLCJyZXN1bHQiLCJ1c2VybmFtZSIsIl9pZCIsInByb2ZpbGVQaWNVcmwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsTUFBSjs7QUFFQSxTQUFTQyxlQUFULEdBQTJCO0FBQUE7O0FBQUEsa0JBQ0RDLCtDQUFRLENBQUMsRUFBRCxDQURQO0FBQUEsTUFDbEJDLElBRGtCO0FBQUEsTUFDWkMsT0FEWTs7QUFBQSxtQkFFS0YsK0NBQVEsQ0FBQyxLQUFELENBRmI7QUFBQSxNQUVsQkcsT0FGa0I7QUFBQSxNQUVUQyxVQUZTOztBQUFBLG1CQUdLSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIYjtBQUFBLE1BR2xCSyxPQUhrQjtBQUFBLE1BR1RDLFVBSFM7O0FBS3pCLE1BQU1DLFlBQVk7QUFBQSwyVEFBRyxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEMsbUJBRFcsR0FDREQsQ0FBQyxDQUFDRSxNQURELENBQ1hELEtBRFc7O0FBQUEsb0JBRWhCQSxLQUFLLENB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QUFBQTtBQURGLEtBQVdGLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FURDs7TUFBTUosYztBQVdOLCtEQUFlM0IsZUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmFlNmZlNDViNDliMGI2MGEzZDgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0LCBJbWFnZSwgU2VhcmNoIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmxldCBjYW5jZWw7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hDb21wb25lbnQoKSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgZSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHNldFRleHQodmFsdWUpXHJcblxyXG4gICAgc2V0VGV4dCh2YWx1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNhbmNlbCAmJiBjYW5jZWwoKTtcclxuICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcclxuICAgICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFwidG9rZW5cIik7XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3NlYXJjaC8ke3ZhbHVlfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXHJcbiAgICAgICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbihjYW5jZWxlciA9PiB7XHJcbiAgICAgICAgICBjYW5jZWwgPSBjYW5jZWxlcjtcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHJldHVybiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgIHNldFJlc3VsdHMocmVzLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBTZWFyY2hpbmdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHRleHQubGVuZ3RoID09PSAwICYmIGxvYWRpbmcpIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH0sIFt0ZXh0XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hcclxuICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgcmVzdWx0cy5sZW5ndGggPiAwICYmIHNldFJlc3VsdHMoW10pO1xyXG4gICAgICAgIGxvYWRpbmcgJiYgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0VGV4dChcIlwiKTtcclxuICAgICAgfX1cclxuICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgIHJlc3VsdFJlbmRlcmVyPXtSZXN1bHRSZW5kZXJlcn1cclxuICAgICAgcmVzdWx0cz17cmVzdWx0c31cclxuICAgICAgb25TZWFyY2hDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgbWluQ2hhcmFjdGVycz17MX1cclxuICAgICAgb25SZXN1bHRTZWxlY3Q9eyhlLCBkYXRhKSA9PiBSb3V0ZXIucHVzaChgLyR7ZGF0YS5yZXN1bHQudXNlcm5hbWV9YCl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFJlc3VsdFJlbmRlcmVyID0gKHsgX2lkLCBwcm9maWxlUGljVXJsLCBuYW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpc3Qga2V5PXtfaWR9PlxyXG4gICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e3Byb2ZpbGVQaWNVcmx9IGFsdD1cIlByb2ZpbGVQaWNcIiBhdmF0YXIgLz5cclxuICAgICAgICA8TGlzdC5Db250ZW50IGhlYWRlcj17bmFtZX0gYXM9XCJhXCIgLz5cclxuICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICA8L0xpc3Q+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaENvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==