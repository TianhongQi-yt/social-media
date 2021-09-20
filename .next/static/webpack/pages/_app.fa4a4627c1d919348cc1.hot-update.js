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

              if (!(value.trim().length === 0)) {
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
                _context.next = 15;
                break;
              }

              results.length > 0 && setResults([]);
              return _context.abrupt("return", setLoading(false));

            case 15:
              setResults(res.data);
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](5);
              console.log("Error Searching");

            case 21:
              setLoading(false);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 18]]);
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
    lineNumber: 52,
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
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.List.Content, {
        header: name,
        as: "a"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this)
  }, _id, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvU2VhcmNoLmpzIl0sIm5hbWVzIjpbImNhbmNlbCIsIlNlYXJjaENvbXBvbmVudCIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidHJpbSIsImxlbmd0aCIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJ0b2tlbiIsImNvb2tpZSIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIlJlc3VsdFJlbmRlcmVyIiwiUm91dGVyIiwicmVzdWx0IiwidXNlcm5hbWUiLCJfaWQiLCJwcm9maWxlUGljVXJsIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE1BQUo7O0FBRUEsU0FBU0MsZUFBVCxHQUEyQjtBQUFBOztBQUFBLGtCQUNEQywrQ0FBUSxDQUFDLEVBQUQsQ0FEUDtBQUFBLE1BQ2xCQyxJQURrQjtBQUFBLE1BQ1pDLE9BRFk7O0FBQUEsbUJBRUtGLCtDQUFRLENBQUMsS0FBRCxDQUZiO0FBQUEsTUFFbEJHLE9BRmtCO0FBQUEsTUFFVEMsVUFGUzs7QUFBQSxtQkFHS0osK0NBQVEsQ0FBQyxFQUFELENBSGI7QUFBQSxNQUdsQkssT0FIa0I7QUFBQSxNQUdUQyxVQUhTOztBQUt6QixNQUFNQyxZQUFZO0FBQUEsMlRBQUcsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hDLG1CQURXLEdBQ0RELENBQUMsQ0FBQ0UsTUFERCxDQUNYRCxLQURXOztBQUFBLG9CQUVoQkEs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QUFNLEVBQUVDLElBQXRCO0FBQTRCLFVBQUUsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsS0FBV0YsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVREOztNQUFNSixjO0FBV04sK0RBQWU1QixlQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmE0YTQ2MjdjMWQ5MTkzNDhjYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpc3QsIEltYWdlLCBTZWFyY2ggfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcclxubGV0IGNhbmNlbDtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaENvbXBvbmVudCgpIHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyBlID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgaWYodmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHNldFRleHQodmFsdWUpXHJcblxyXG4gICAgc2V0VGV4dCh2YWx1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNhbmNlbCAmJiBjYW5jZWwoKTtcclxuICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcclxuICAgICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFwidG9rZW5cIik7XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3NlYXJjaC8ke3ZhbHVlfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXHJcbiAgICAgICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbihjYW5jZWxlciA9PiB7XHJcbiAgICAgICAgICBjYW5jZWwgPSBjYW5jZWxlcjtcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIHJlc3VsdHMubGVuZ3RoID4gMCAmJiBzZXRSZXN1bHRzKFtdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9IFxyXG5cclxuICAgICAgc2V0UmVzdWx0cyhyZXMuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIFNlYXJjaGluZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYodGV4dC5sZW5ndGggPT09IDAgJiYgbG9hZGluZykgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfSwgW3RleHRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFxyXG4gICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICByZXN1bHRzLmxlbmd0aCA+IDAgJiYgc2V0UmVzdWx0cyhbXSk7XHJcbiAgICAgICAgbG9hZGluZyAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRUZXh0KFwiXCIpO1xyXG4gICAgICB9fVxyXG4gICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgcmVzdWx0UmVuZGVyZXI9e1Jlc3VsdFJlbmRlcmVyfVxyXG4gICAgICByZXN1bHRzPXtyZXN1bHRzfVxyXG4gICAgICBvblNlYXJjaENoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICBtaW5DaGFyYWN0ZXJzPXsxfVxyXG4gICAgICBvblJlc3VsdFNlbGVjdD17KGUsIGRhdGEpID0+IFJvdXRlci5wdXNoKGAvJHtkYXRhLnJlc3VsdC51c2VybmFtZX1gKX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmVzdWx0UmVuZGVyZXIgPSAoeyBfaWQsIHByb2ZpbGVQaWNVcmwsIG5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdCBrZXk9e19pZH0+XHJcbiAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY1VybH0gYWx0PVwiUHJvZmlsZVBpY1wiIGF2YXRhciAvPlxyXG4gICAgICAgIDxMaXN0LkNvbnRlbnQgaGVhZGVyPXtuYW1lfSBhcz1cImFcIiAvPlxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9