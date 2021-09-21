exports.id = "utils_authUser_js";
exports.ids = ["utils_authUser_js"];
exports.modules = {

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "redirectUser": function() { return /* binding */ redirectUser; },
/* harmony export */   "logoutUser": function() { return /* binding */ logoutUser; }
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
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(location);
  }
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
};

const logoutUser = email => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("userEmail", email);
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("token");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/login");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().reload();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9hdXRoVXNlci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9pZ25vcmVkfEM6XFxVc2Vyc1xceXRxaXRcXERlc2t0b3BcXHNvY2lhbC1tZWRpYVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbInJlZ2lzdGVyVXNlciIsInVzZXIiLCJwcm9maWxlUGljVXJsIiwic2V0RXJyb3IiLCJzZXRMb2FkaW5nIiwicmVzIiwiYXhpb3MiLCJiYXNlVXJsIiwic2V0VG9rZW4iLCJkYXRhIiwiZXJyb3IiLCJlcnJvck1zZyIsImNhdGNoRXJyb3JzIiwibG9naW5Vc2VyIiwicmVkaXJlY3RVc2VyIiwiY3R4IiwibG9jYXRpb24iLCJyZXEiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsIlJvdXRlciIsInRva2VuIiwiY29va2llIiwibG9nb3V0VXNlciIsImVtYWlsIiwicmVzcG9uc2UiLCJjb25zb2xlIiwicmVxdWVzdCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFlBQVksR0FBRyxPQUFPQyxJQUFQLEVBQWFDLGFBQWIsRUFBNEJDLFFBQTVCLEVBQXNDQyxVQUF0QyxLQUFxRDtBQUMvRSxNQUFJO0FBQ0YsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLGlEQUFBLENBQVksR0FBRUMsNkNBQVEsYUFBdEIsRUFBb0M7QUFBRU4sVUFBRjtBQUFRQztBQUFSLEtBQXBDLENBQWxCO0FBRUFNLFlBQVEsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFMLENBQVI7QUFDRCxHQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsVUFBTUMsUUFBUSxHQUFHQyxxREFBVyxDQUFDRixLQUFELENBQTVCO0FBQ0FQLFlBQVEsQ0FBQ1EsUUFBRCxDQUFSO0FBQ0Q7O0FBQ0RQLFlBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxDQVZNO0FBWUEsTUFBTVMsU0FBUyxHQUFHLE9BQU9aLElBQVAsRUFBYUUsUUFBYixFQUF1QkMsVUFBdkIsS0FBc0M7QUFDN0RBLFlBQVUsQ0FBQyxJQUFELENBQVY7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLEdBQUcsR0FBRyxNQUFNQyxpREFBQSxDQUFZLEdBQUVDLDZDQUFRLFdBQXRCLEVBQWtDO0FBQUVOO0FBQUYsS0FBbEMsQ0FBbEI7QUFFQU8sWUFBUSxDQUFDSCxHQUFHLENBQUNJLElBQUwsQ0FBUjtBQUNELEdBSkQsQ0FJRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxVQUFNQyxRQUFRLEdBQUdDLHFEQUFXLENBQUNGLEtBQUQsQ0FBNUI7QUFDQVAsWUFBUSxDQUFDUSxRQUFELENBQVI7QUFDRDs7QUFDRFAsWUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELENBWE07QUFhQSxNQUFNVSxZQUFZLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxRQUFOLEtBQW1CO0FBQzdDLE1BQUlELEdBQUcsQ0FBQ0UsR0FBUixFQUFhO0FBQ1hGLE9BQUcsQ0FBQ1YsR0FBSixDQUFRYSxTQUFSLENBQWtCLEdBQWxCLEVBQXVCO0FBQUVDLGNBQVEsRUFBRUg7QUFBWixLQUF2QjtBQUNBRCxPQUFHLENBQUNWLEdBQUosQ0FBUWUsR0FBUjtBQUNELEdBSEQsTUFHTztBQUNMQywyREFBQSxDQUFZTCxRQUFaO0FBQ0Q7QUFDRixDQVBNOztBQVNQLE1BQU1SLFFBQVEsR0FBR2MsS0FBSyxJQUFJO0FBQ3hCQyxzREFBQSxDQUFXLE9BQVgsRUFBb0JELEtBQXBCO0FBQ0FELHlEQUFBLENBQVksR0FBWjtBQUNELENBSEQ7O0FBS08sTUFBTUcsVUFBVSxHQUFHQyxLQUFLLElBQUk7QUFDakNGLHNEQUFBLENBQVcsV0FBWCxFQUF3QkUsS0FBeEI7QUFDQUYseURBQUEsQ0FBYyxPQUFkO0FBQ0FGLHlEQUFBLENBQVksUUFBWjtBQUNBQSwyREFBQTtBQUNELENBTE0sQzs7Ozs7Ozs7Ozs7O0FDN0NQLE1BQU1kLE9BQU8sR0FBRSx1QkFBZjtBQUVBLCtEQUFlQSxPQUFmLEU7Ozs7Ozs7Ozs7OztBQ0ZBLE1BQU1LLFdBQVcsR0FBR0YsS0FBSyxJQUFJO0FBQzNCLE1BQUlDLFFBQUo7O0FBRUEsTUFBSUQsS0FBSyxDQUFDZ0IsUUFBVixFQUFvQjtBQUNsQjtBQUVBZixZQUFRLEdBQUdELEtBQUssQ0FBQ2dCLFFBQU4sQ0FBZWpCLElBQTFCO0FBRUFrQixXQUFPLENBQUNqQixLQUFSLENBQWNDLFFBQWQ7QUFDRCxHQU5ELE1BTU8sSUFBSUQsS0FBSyxDQUFDa0IsT0FBVixFQUFtQjtBQUN4QjtBQUNBakIsWUFBUSxHQUFHRCxLQUFLLENBQUNrQixPQUFqQjtBQUVBRCxXQUFPLENBQUNqQixLQUFSLENBQWNDLFFBQWQ7QUFDRCxHQUxNLE1BS0E7QUFDTDtBQUNBQSxZQUFRLEdBQUdELEtBQUssQ0FBQ21CLE9BQWpCO0FBRUFGLFdBQU8sQ0FBQ2pCLEtBQVIsQ0FBY0MsUUFBZDtBQUNEOztBQUNELFNBQU9BLFFBQVA7QUFDRCxDQXJCRDs7QUF1QkEsK0RBQWVDLFdBQWYsRTs7Ozs7Ozs7OztBQ3ZCQSxlIiwiZmlsZSI6InV0aWxzX2F1dGhVc2VyX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAodXNlciwgcHJvZmlsZVBpY1VybCwgc2V0RXJyb3IsIHNldExvYWRpbmcpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwYCwgeyB1c2VyLCBwcm9maWxlUGljVXJsIH0pO1xyXG5cclxuICAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XHJcbiAgICBzZXRFcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHNldExvYWRpbmcoZmFsc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jICh1c2VyLCBzZXRFcnJvciwgc2V0TG9hZGluZykgPT4ge1xyXG4gIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL2F1dGhgLCB7IHVzZXIgfSk7XHJcblxyXG4gICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcclxuICAgIHNldEVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RVc2VyID0gKGN0eCwgbG9jYXRpb24pID0+IHtcclxuICBpZiAoY3R4LnJlcSkge1xyXG4gICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBsb2NhdGlvbiB9KTtcclxuICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIFJvdXRlci5wdXNoKGxvY2F0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzZXRUb2tlbiA9IHRva2VuID0+IHtcclxuICBjb29raWUuc2V0KFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gIFJvdXRlci5wdXNoKFwiL1wiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gZW1haWwgPT4ge1xyXG4gIGNvb2tpZS5zZXQoXCJ1c2VyRW1haWxcIiwgZW1haWwpO1xyXG4gIGNvb2tpZS5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICBSb3V0ZXIucmVsb2FkKCk7XHJcbn07XHJcbiIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IGVycm9yID0+IHtcclxuICBsZXQgZXJyb3JNc2c7XHJcblxyXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxyXG5cclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgc29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgbWFraW5nIHRoZSByZXF1ZXN0XHJcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9