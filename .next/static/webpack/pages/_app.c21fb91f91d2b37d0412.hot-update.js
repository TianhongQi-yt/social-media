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
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

_s(SearchComponent, "alery0ZH/XwoV7SoVE8spJgO4Ck=");

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
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.List.Content, {
        header: name,
        as: "a"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)
  }, _id, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvU2VhcmNoLmpzIl0sIm5hbWVzIjpbImNhbmNlbCIsIlNlYXJjaENvbXBvbmVudCIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwibGVuZ3RoIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInRva2VuIiwiY29va2llIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY2FuY2VsVG9rZW4iLCJjYW5jZWxlciIsInJlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiUmVzdWx0UmVuZGVyZXIiLCJSb3V0ZXIiLCJyZXN1bHQiLCJ1c2VybmFtZSIsIl9pZCIsInByb2ZpbGVQaWNVcmwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsTUFBSjs7QUFFQSxTQUFTQyxlQUFULEdBQTJCO0FBQUE7O0FBQUEsa0JBQ0RDLCtDQUFRLENBQUMsRUFBRCxDQURQO0FBQUEsTUFDbEJDLElBRGtCO0FBQUEsTUFDWkMsT0FEWTs7QUFBQSxtQkFFS0YsK0NBQVEsQ0FBQyxLQUFELENBRmI7QUFBQSxNQUVsQkcsT0FGa0I7QUFBQSxNQUVUQyxVQUZTOztBQUFBLG1CQUdLSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIYjtBQUFBLE1BR2xCSyxPQUhrQjtBQUFBLE1BR1RDLFVBSFM7O0FBS3pCLE1BQU1DLFlBQVk7QUFBQSwyVEFBRyxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEMsbUJBRFcsR0FDREQsQ0FBQyxDQUFDRSxNQURELENBQ1hELEtBRFc7O0FBQUEsb0JBRWhCQSxLQUFLLENBQUNFLE1BQU4sS0FB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpc3QsIEltYWdlLCBTZWFyY2ggfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcclxubGV0IGNhbmNlbDtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaENvbXBvbmVudCgpIHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyBlID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgaWYodmFsdWUubGVuZ3RoID09PSAwKSByZXR1cm4gc2V0VGV4dCh2YWx1ZSlcclxuXHJcbiAgICBzZXRUZXh0KHZhbHVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY2FuY2VsICYmIGNhbmNlbCgpO1xyXG4gICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoXCJ0b2tlblwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2VhcmNoLyR7dmFsdWV9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSxcclxuICAgICAgICBjYW5jZWxUb2tlbjogbmV3IENhbmNlbFRva2VuKGNhbmNlbGVyID0+IHtcclxuICAgICAgICAgIGNhbmNlbCA9IGNhbmNlbGVyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgc2V0UmVzdWx0cyhyZXMuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIFNlYXJjaGluZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFxyXG4gICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICByZXN1bHRzLmxlbmd0aCA+IDAgJiYgc2V0UmVzdWx0cyhbXSk7XHJcbiAgICAgICAgbG9hZGluZyAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRUZXh0KFwiXCIpO1xyXG4gICAgICB9fVxyXG4gICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgcmVzdWx0UmVuZGVyZXI9e1Jlc3VsdFJlbmRlcmVyfVxyXG4gICAgICByZXN1bHRzPXtyZXN1bHRzfVxyXG4gICAgICBvblNlYXJjaENoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICBtaW5DaGFyYWN0ZXJzPXsxfVxyXG4gICAgICBvblJlc3VsdFNlbGVjdD17KGUsIGRhdGEpID0+IFJvdXRlci5wdXNoKGAvJHtkYXRhLnJlc3VsdC51c2VybmFtZX1gKX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmVzdWx0UmVuZGVyZXIgPSAoeyBfaWQsIHByb2ZpbGVQaWNVcmwsIG5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdCBrZXk9e19pZH0+XHJcbiAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY1VybH0gYWx0PVwiUHJvZmlsZVBpY1wiIGF2YXRhciAvPlxyXG4gICAgICAgIDxMaXN0LkNvbnRlbnQgaGVhZGVyPXtuYW1lfSBhcz1cImFcIiAvPlxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9