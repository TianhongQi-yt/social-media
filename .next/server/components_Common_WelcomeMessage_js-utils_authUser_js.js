exports.id = "components_Common_WelcomeMessage_js-utils_authUser_js";
exports.ids = ["components_Common_WelcomeMessage_js-utils_authUser_js"];
exports.modules = {

/***/ "./components/Common/WelcomeMessage.js":
/*!*********************************************!*\
  !*** ./components/Common/WelcomeMessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMessage": function() { return /* binding */ HeaderMessage; },
/* harmony export */   "FooterMessage": function() { return /* binding */ FooterMessage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Common\\WelcomeMessage.js";



const HeaderMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    color: "teal",
    attached: true,
    header: signupRoute ? "Get Started" : "Welcome Back",
    icon: signupRoute ? "settings" : "privacy",
    content: signupRoute ? "Create New Account" : "Login with Email and Password"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};
const FooterMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: signupRoute ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
        attached: "bottom",
        warning: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          name: "help"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined), "Existing User? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/login",
          children: "Login Here Instead"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 28
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
        attached: "bottom",
        info: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          name: "lock"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/reset",
          children: "Forgot Password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
        attached: "bottom",
        warning: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          name: "help"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined), "New User? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/signup",
          children: "Signup Here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 23
        }, undefined), " Instead", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)
  }, void 0, false);
};

/***/ }),

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);





const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const loginUser = async (user, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
};

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9hdXRoVXNlci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9pZ25vcmVkfEM6XFxVc2Vyc1xceXRxaXRcXERlc2t0b3BcXHNvY2lhbC1tZWRpYVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkhlYWRlck1lc3NhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaWdudXBSb3V0ZSIsInBhdGhuYW1lIiwiRm9vdGVyTWVzc2FnZSIsInJlZ2lzdGVyVXNlciIsInVzZXIiLCJwcm9maWxlUGljVXJsIiwic2V0RXJyb3IiLCJzZXRMb2FkaW5nIiwicmVzIiwiYXhpb3MiLCJiYXNlVXJsIiwic2V0VG9rZW4iLCJkYXRhIiwiZXJyb3IiLCJlcnJvck1zZyIsImNhdGNoRXJyb3JzIiwibG9naW5Vc2VyIiwidG9rZW4iLCJjb29raWUiLCJSb3V0ZXIiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJyZXF1ZXN0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsYUFBYSxHQUFHLE1BQU07QUFDakMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0YsTUFBTSxDQUFDRyxRQUFQLEtBQW9CLFNBQXhDO0FBRUEsc0JBQ0UsOERBQUMsc0RBQUQ7QUFD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Q0QsR0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztBQUNkLFVBQU1DLFFBQVEsR0FBR0MscURBQVcsQ0FBQ0YsS0FBRCxDQUE1QjtBQUNBUCxZQUFRLENBQUNRLFFBQUQsQ0FBUjtBQUNEOztBQUNEUCxZQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsQ0FYTTs7QUFhUCxNQUFNSSxRQUFRLEdBQUdNLEtBQUssSUFBSTtBQUN4QkMsc0RBQUEsQ0FBVyxPQUFYLEVBQW9CRCxLQUFwQjtBQUNBRSx5REFBQSxDQUFZLEdBQVo7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7OztBQy9CQSxNQUFNVCxPQUFPLEdBQUUsdUJBQWY7QUFFQSwrREFBZUEsT0FBZixFOzs7Ozs7Ozs7Ozs7QUNGQSxNQUFNSyxXQUFXLEdBQUdGLEtBQUssSUFBSTtBQUMzQixNQUFJQyxRQUFKOztBQUVBLE1BQUlELEtBQUssQ0FBQ08sUUFBVixFQUFvQjtBQUNsQjtBQUVBTixZQUFRLEdBQUdELEtBQUssQ0FBQ08sUUFBTixDQUFlUixJQUExQjtBQUVBUyxXQUFPLENBQUNSLEtBQVIsQ0FBY0MsUUFBZDtBQUNELEdBTkQsTUFNTyxJQUFJRCxLQUFLLENBQUNTLE9BQVYsRUFBbUI7QUFDeEI7QUFDQVIsWUFBUSxHQUFHRCxLQUFLLENBQUNTLE9BQWpCO0FBRUFELFdBQU8sQ0FBQ1IsS0FBUixDQUFjQyxRQUFkO0FBQ0QsR0FMTSxNQUtBO0FBQ0w7QUFDQUEsWUFBUSxHQUFHRCxLQUFLLENBQUNVLE9BQWpCO0FBRUFGLFdBQU8sQ0FBQ1IsS0FBUixDQUFjQyxRQUFkO0FBQ0Q7O0FBQ0QsU0FBT0EsUUFBUDtBQUNELENBckJEOztBQXVCQSwrREFBZUMsV0FBZixFOzs7Ozs7Ozs7O0FDdkJBLGUiLCJmaWxlIjoiY29tcG9uZW50c19Db21tb25fV2VsY29tZU1lc3NhZ2VfanMtdXRpbHNfYXV0aFVzZXJfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uLCBNZXNzYWdlLCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyTWVzc2FnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvc2lnbnVwXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVzc2FnZVxyXG4gICAgICBjb2xvcj1cInRlYWxcIlxyXG4gICAgICBhdHRhY2hlZFxyXG4gICAgICBoZWFkZXI9e3NpZ251cFJvdXRlID8gXCJHZXQgU3RhcnRlZFwiIDogXCJXZWxjb21lIEJhY2tcIn1cclxuICAgICAgaWNvbj17c2lnbnVwUm91dGUgPyBcInNldHRpbmdzXCIgOiBcInByaXZhY3lcIn1cclxuICAgICAgY29udGVudD17c2lnbnVwUm91dGUgPyBcIkNyZWF0ZSBOZXcgQWNjb3VudFwiIDogXCJMb2dpbiB3aXRoIEVtYWlsIGFuZCBQYXNzd29yZFwifVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3Rlck1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgc2lnbnVwUm91dGUgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3NpZ251cFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NpZ251cFJvdXRlID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIHdhcm5pbmc+XHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIgLz5cclxuICAgICAgICAgICAgRXhpc3RpbmcgVXNlcj8gPExpbmsgaHJlZj1cIi9sb2dpblwiPkxvZ2luIEhlcmUgSW5zdGVhZDwvTGluaz5cclxuICAgICAgICAgIDwvTWVzc2FnZT5cclxuICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIGluZm8+XHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJsb2NrXCIgLz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNldFwiPkZvcmdvdCBQYXNzd29yZD88L0xpbms+XHJcbiAgICAgICAgICA8L01lc3NhZ2U+XHJcblxyXG4gICAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQ9XCJib3R0b21cIiB3YXJuaW5nPlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVscFwiIC8+XHJcbiAgICAgICAgICAgIE5ldyBVc2VyPyA8TGluayBocmVmPVwiL3NpZ251cFwiPlNpZ251cCBIZXJlPC9MaW5rPiBJbnN0ZWFke1wiIFwifVxyXG4gICAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAodXNlciwgcHJvZmlsZVBpY1VybCwgc2V0RXJyb3IsIHNldExvYWRpbmcpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwYCwgeyB1c2VyLCBwcm9maWxlUGljVXJsIH0pO1xyXG5cclxuICAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XHJcbiAgICBzZXRFcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHNldExvYWRpbmcoZmFsc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jICh1c2VyLCBzZXRFcnJvciwgc2V0TG9hZGluZykgPT4ge1xyXG4gIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL2F1dGhgLCB7IHVzZXIgfSk7XHJcblxyXG4gICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcclxuICAgIHNldEVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbn07XHJcblxyXG5jb25zdCBzZXRUb2tlbiA9IHRva2VuID0+IHtcclxuICBjb29raWUuc2V0KFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gIFJvdXRlci5wdXNoKFwiL1wiKTtcclxufTtcclxuIiwiY29uc3QgYmFzZVVybCA9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7XHJcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gZXJyb3IgPT4ge1xyXG4gIGxldCBlcnJvck1zZztcclxuXHJcbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciBub3QgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZSBpbiB0aGUgcmFuZ2Ugb2YgMnh4XHJcblxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIG5vIHJlc3BvbnNlIHdhcyByZWNldmllZCBmcm9tIHNlcnZlclxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgIGVycm9yTXNnID0gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yTXNnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=