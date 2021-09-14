self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "redirectUser": function() { return /* binding */ redirectUser; }
/* harmony export */ });
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);







var registerUser = /*#__PURE__*/function () {
  var _ref = (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user, profilePicUrl, setError, setLoading) {
    var res, errorMsg;
    return C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default, "/api/signup"), {
              user: user,
              profilePicUrl: profilePicUrl
            });

          case 3:
            res = _context.sent;
            setToken(res.data);
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_4__.default)(_context.t0);
            setError(errorMsg);

          case 11:
            setLoading(false);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function registerUser(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
var loginUser = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(user, setError, setLoading) {
    var res, errorMsg;
    return C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setLoading(true);
            _context2.prev = 1;
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default, "/api/auth"), {
              user: user
            });

          case 4:
            res = _context2.sent;
            setToken(res.data);
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_4__.default)(_context2.t0);
            setError(errorMsg);

          case 12:
            setLoading(false);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function loginUser(_x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();
var redirectUser = function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_5___default().push(location);
  }
};

var setToken = function setToken(token) {
  js_cookie__WEBPACK_IMPORTED_MODULE_6___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/");
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXV0aFVzZXIuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJVc2VyIiwidXNlciIsInByb2ZpbGVQaWNVcmwiLCJzZXRFcnJvciIsInNldExvYWRpbmciLCJheGlvcyIsImJhc2VVcmwiLCJyZXMiLCJzZXRUb2tlbiIsImRhdGEiLCJlcnJvck1zZyIsImNhdGNoRXJyb3JzIiwibG9naW5Vc2VyIiwicmVkaXJlY3RVc2VyIiwiY3R4IiwibG9jYXRpb24iLCJyZXEiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsIlJvdXRlciIsInRva2VuIiwiY29va2llIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZO0FBQUEseVRBQUcsaUJBQU9DLElBQVAsRUFBYUMsYUFBYixFQUE0QkMsUUFBNUIsRUFBc0NDLFVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFTkMsaURBQUEsV0FBY0MsNkNBQWQsa0JBQW9DO0FBQUVMLGtCQUFJLEVBQUpBLElBQUY7QUFBUUMsMkJBQWEsRUFBYkE7QUFBUixhQUFwQyxDQUZNOztBQUFBO0FBRWxCSyxlQUZrQjtBQUl4QkMsb0JBQVEsQ0FBQ0QsR0FBRyxDQUFDRSxJQUFMLENBQVI7QUFKd0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNbEJDLG9CQU5rQixHQU1QQyxxREFBVyxhQU5KO0FBT3hCUixvQkFBUSxDQUFDTyxRQUFELENBQVI7O0FBUHdCO0FBUzFCTixzQkFBVSxDQUFDLEtBQUQsQ0FBVjs7QUFUMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWkosWUFBWTtBQUFBO0FBQUE7QUFBQSxHQUFsQjtBQVlBLElBQU1ZLFNBQVM7QUFBQSwwVEFBRyxrQkFBT1gsSUFBUCxFQUFhRSxRQUFiLEVBQXVCQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJBLHNCQUFVLENBQUMsSUFBRCxDQUFWO0FBRHVCO0FBQUE7QUFBQSxtQkFHSEMsaURBQUEsV0FBY0MsNkNBQWQsZ0JBQWtDO0FBQUVMLGtCQUFJLEVBQUpBO0FBQUYsYUFBbEMsQ0FIRzs7QUFBQTtBQUdmTSxlQUhlO0FBS3JCQyxvQkFBUSxDQUFDRCxHQUFHLENBQUNFLElBQUwsQ0FBUjtBQUxxQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9mQyxvQkFQZSxHQU9KQyxxREFBVyxjQVBQO0FBUXJCUixvQkFBUSxDQUFDTyxRQUFELENBQVI7O0FBUnFCO0FBVXZCTixzQkFBVSxDQUFDLEtBQUQsQ0FBVjs7QUFWdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVFEsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmO0FBYUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsR0FBRCxFQUFNQyxRQUFOLEVBQW1CO0FBQzdDLE1BQUlELEdBQUcsQ0FBQ0UsR0FBUixFQUFhO0FBQ1hGLE9BQUcsQ0FBQ1AsR0FBSixDQUFRVSxTQUFSLENBQWtCLEdBQWxCLEVBQXVCO0FBQUVDLGNBQVEsRUFBRUg7QUFBWixLQUF2QjtBQUNBRCxPQUFHLENBQUNQLEdBQUosQ0FBUVksR0FBUjtBQUNELEdBSEQsTUFHTztBQUNMQywyREFBQSxDQUFZTCxRQUFaO0FBQ0Q7QUFDRixDQVBNOztBQVNQLElBQU1QLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFhLEtBQUssRUFBSTtBQUN4QkMsc0RBQUEsQ0FBVyxPQUFYLEVBQW9CRCxLQUFwQjtBQUNBRCx5REFBQSxDQUFZLEdBQVo7QUFDRCxDQUhEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDE3Y2YzN2RkYzc0MWQyN2NmZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSBcIi4vY2F0Y2hFcnJvcnNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKHVzZXIsIHByb2ZpbGVQaWNVcmwsIHNldEVycm9yLCBzZXRMb2FkaW5nKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL3NpZ251cGAsIHsgdXNlciwgcHJvZmlsZVBpY1VybCB9KTtcclxuXHJcbiAgICBzZXRUb2tlbihyZXMuZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xyXG4gICAgc2V0RXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuICBzZXRMb2FkaW5nKGZhbHNlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAodXNlciwgc2V0RXJyb3IsIHNldExvYWRpbmcpID0+IHtcclxuICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCwgeyB1c2VyIH0pO1xyXG5cclxuICAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XHJcbiAgICBzZXRFcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHNldExvYWRpbmcoZmFsc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0VXNlciA9IChjdHgsIGxvY2F0aW9uKSA9PiB7XHJcbiAgaWYgKGN0eC5yZXEpIHtcclxuICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogbG9jYXRpb24gfSk7XHJcbiAgICBjdHgucmVzLmVuZCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBSb3V0ZXIucHVzaChsb2NhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2V0VG9rZW4gPSB0b2tlbiA9PiB7XHJcbiAgY29va2llLnNldChcInRva2VuXCIsIHRva2VuKTtcclxuICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=