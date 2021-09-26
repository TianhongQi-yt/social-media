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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9hdXRoVXNlci5qcyJdLCJuYW1lcyI6WyJyZWdpc3RlclVzZXIiLCJ1c2VyIiwicHJvZmlsZVBpY1VybCIsInNldEVycm9yIiwic2V0TG9hZGluZyIsInJlcyIsImF4aW9zIiwiYmFzZVVybCIsInNldFRva2VuIiwiZGF0YSIsImVycm9yIiwiZXJyb3JNc2ciLCJjYXRjaEVycm9ycyIsImxvZ2luVXNlciIsInJlZGlyZWN0VXNlciIsImN0eCIsImxvY2F0aW9uIiwicmVxIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJSb3V0ZXIiLCJ0b2tlbiIsImNvb2tpZSIsImxvZ291dFVzZXIiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsWUFBWSxHQUFHLE9BQU9DLElBQVAsRUFBYUMsYUFBYixFQUE0QkMsUUFBNUIsRUFBc0NDLFVBQXRDLEtBQXFEO0FBQy9FLE1BQUk7QUFDRixVQUFNQyxHQUFHLEdBQUcsTUFBTUMsaURBQUEsQ0FBWSxHQUFFQyw2Q0FBUSxhQUF0QixFQUFvQztBQUFFTixVQUFGO0FBQVFDO0FBQVIsS0FBcEMsQ0FBbEI7QUFFQU0sWUFBUSxDQUFDSCxHQUFHLENBQUNJLElBQUwsQ0FBUjtBQUNELEdBSkQsQ0FJRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxVQUFNQyxRQUFRLEdBQUdDLHFEQUFXLENBQUNGLEtBQUQsQ0FBNUI7QUFDQVAsWUFBUSxDQUFDUSxRQUFELENBQVI7QUFDRDs7QUFDRFAsWUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELENBVk07QUFZQSxNQUFNUyxTQUFTLEdBQUcsT0FBT1osSUFBUCxFQUFhRSxRQUFiLEVBQXVCQyxVQUF2QixLQUFzQztBQUM3REEsWUFBVSxDQUFDLElBQUQsQ0FBVjs7QUFDQSxNQUFJO0FBQ0YsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLGlEQUFBLENBQVksR0FBRUMsNkNBQVEsV0FBdEIsRUFBa0M7QUFBRU47QUFBRixLQUFsQyxDQUFsQjtBQUVBTyxZQUFRLENBQUNILEdBQUcsQ0FBQ0ksSUFBTCxDQUFSO0FBQ0QsR0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztBQUNkLFVBQU1DLFFBQVEsR0FBR0MscURBQVcsQ0FBQ0YsS0FBRCxDQUE1QjtBQUNBUCxZQUFRLENBQUNRLFFBQUQsQ0FBUjtBQUNEOztBQUNEUCxZQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsQ0FYTTtBQWFBLE1BQU1VLFlBQVksR0FBRyxDQUFDQyxHQUFELEVBQU1DLFFBQU4sS0FBbUI7QUFDN0MsTUFBSUQsR0FBRyxDQUFDRSxHQUFSLEVBQWE7QUFDWEYsT0FBRyxDQUFDVixHQUFKLENBQVFhLFNBQVIsQ0FBa0IsR0FBbEIsRUFBdUI7QUFBRUMsY0FBUSxFQUFFSDtBQUFaLEtBQXZCO0FBQ0FELE9BQUcsQ0FBQ1YsR0FBSixDQUFRZSxHQUFSO0FBQ0QsR0FIRCxNQUdPO0FBQ0xDLDJEQUFBLENBQVlMLFFBQVo7QUFDRDtBQUNGLENBUE07O0FBU1AsTUFBTVIsUUFBUSxHQUFHYyxLQUFLLElBQUk7QUFDeEJDLHNEQUFBLENBQVcsT0FBWCxFQUFvQkQsS0FBcEI7QUFDQUQseURBQUEsQ0FBWSxHQUFaO0FBQ0QsQ0FIRDs7QUFLTyxNQUFNRyxVQUFVLEdBQUdDLEtBQUssSUFBSTtBQUNqQ0Ysc0RBQUEsQ0FBVyxXQUFYLEVBQXdCRSxLQUF4QjtBQUNBRix5REFBQSxDQUFjLE9BQWQ7QUFDQUYseURBQUEsQ0FBWSxRQUFaO0FBQ0FBLDJEQUFBO0FBQ0QsQ0FMTSxDIiwiZmlsZSI6InV0aWxzX2F1dGhVc2VyX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAodXNlciwgcHJvZmlsZVBpY1VybCwgc2V0RXJyb3IsIHNldExvYWRpbmcpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwYCwgeyB1c2VyLCBwcm9maWxlUGljVXJsIH0pO1xyXG5cclxuICAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XHJcbiAgICBzZXRFcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHNldExvYWRpbmcoZmFsc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jICh1c2VyLCBzZXRFcnJvciwgc2V0TG9hZGluZykgPT4ge1xyXG4gIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL2F1dGhgLCB7IHVzZXIgfSk7XHJcblxyXG4gICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcclxuICAgIHNldEVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RVc2VyID0gKGN0eCwgbG9jYXRpb24pID0+IHtcclxuICBpZiAoY3R4LnJlcSkge1xyXG4gICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBsb2NhdGlvbiB9KTtcclxuICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIFJvdXRlci5wdXNoKGxvY2F0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzZXRUb2tlbiA9IHRva2VuID0+IHtcclxuICBjb29raWUuc2V0KFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gIFJvdXRlci5wdXNoKFwiL1wiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gZW1haWwgPT4ge1xyXG4gIGNvb2tpZS5zZXQoXCJ1c2VyRW1haWxcIiwgZW1haWwpO1xyXG4gIGNvb2tpZS5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICBSb3V0ZXIucmVsb2FkKCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=