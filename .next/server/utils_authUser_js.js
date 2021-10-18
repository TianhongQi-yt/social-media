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
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);





const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/signup`, {
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
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/auth`, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9hdXRoVXNlci5qcyJdLCJuYW1lcyI6WyJyZWdpc3RlclVzZXIiLCJ1c2VyIiwicHJvZmlsZVBpY1VybCIsInNldEVycm9yIiwic2V0TG9hZGluZyIsInJlcyIsImF4aW9zIiwiYmFzZVVybCIsInNldFRva2VuIiwiZGF0YSIsImVycm9yIiwiZXJyb3JNc2ciLCJjYXRjaEVycm9ycyIsImxvZ2luVXNlciIsInJlZGlyZWN0VXNlciIsImN0eCIsImxvY2F0aW9uIiwicmVxIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJSb3V0ZXIiLCJ0b2tlbiIsImNvb2tpZSIsImxvZ291dFVzZXIiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFlBQVksR0FBRyxPQUFPQyxJQUFQLEVBQWFDLGFBQWIsRUFBNEJDLFFBQTVCLEVBQXNDQyxVQUF0QyxLQUFxRDtBQUMvRSxNQUFJO0FBQ0YsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLGlEQUFBLENBQVksR0FBRUMsaURBQVEsYUFBdEIsRUFBb0M7QUFBRU4sVUFBRjtBQUFRQztBQUFSLEtBQXBDLENBQWxCO0FBRUFNLFlBQVEsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFMLENBQVI7QUFDRCxHQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsVUFBTUMsUUFBUSxHQUFHQyxxREFBVyxDQUFDRixLQUFELENBQTVCO0FBQ0FQLFlBQVEsQ0FBQ1EsUUFBRCxDQUFSO0FBQ0Q7O0FBQ0RQLFlBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxDQVZNO0FBWUEsTUFBTVMsU0FBUyxHQUFHLE9BQU9aLElBQVAsRUFBYUUsUUFBYixFQUF1QkMsVUFBdkIsS0FBc0M7QUFDN0RBLFlBQVUsQ0FBQyxJQUFELENBQVY7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLEdBQUcsR0FBRyxNQUFNQyxpREFBQSxDQUFZLEdBQUVDLGlEQUFRLFdBQXRCLEVBQWtDO0FBQUVOO0FBQUYsS0FBbEMsQ0FBbEI7QUFFQU8sWUFBUSxDQUFDSCxHQUFHLENBQUNJLElBQUwsQ0FBUjtBQUNELEdBSkQsQ0FJRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxVQUFNQyxRQUFRLEdBQUdDLHFEQUFXLENBQUNGLEtBQUQsQ0FBNUI7QUFDQVAsWUFBUSxDQUFDUSxRQUFELENBQVI7QUFDRDs7QUFDRFAsWUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELENBWE07QUFhQSxNQUFNVSxZQUFZLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxRQUFOLEtBQW1CO0FBQzdDLE1BQUlELEdBQUcsQ0FBQ0UsR0FBUixFQUFhO0FBQ1hGLE9BQUcsQ0FBQ1YsR0FBSixDQUFRYSxTQUFSLENBQWtCLEdBQWxCLEVBQXVCO0FBQUVDLGNBQVEsRUFBRUg7QUFBWixLQUF2QjtBQUNBRCxPQUFHLENBQUNWLEdBQUosQ0FBUWUsR0FBUjtBQUNELEdBSEQsTUFHTztBQUNMQywyREFBQSxDQUFZTCxRQUFaO0FBQ0Q7QUFDRixDQVBNOztBQVNQLE1BQU1SLFFBQVEsR0FBR2MsS0FBSyxJQUFJO0FBQ3hCQyxzREFBQSxDQUFXLE9BQVgsRUFBb0JELEtBQXBCO0FBQ0FELHlEQUFBLENBQVksR0FBWjtBQUNELENBSEQ7O0FBS08sTUFBTUcsVUFBVSxHQUFHQyxLQUFLLElBQUk7QUFDakNGLHNEQUFBLENBQVcsV0FBWCxFQUF3QkUsS0FBeEI7QUFDQUYseURBQUEsQ0FBYyxPQUFkO0FBQ0FGLHlEQUFBLENBQVksUUFBWjtBQUNBQSwyREFBQTtBQUNELENBTE0sQyIsImZpbGUiOiJ1dGlsc19hdXRoVXNlcl9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKHVzZXIsIHByb2ZpbGVQaWNVcmwsIHNldEVycm9yLCBzZXRMb2FkaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwYCwgeyB1c2VyLCBwcm9maWxlUGljVXJsIH0pO1xuXG4gICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xuICAgIHNldEVycm9yKGVycm9yTXNnKTtcbiAgfVxuICBzZXRMb2FkaW5nKGZhbHNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAodXNlciwgc2V0RXJyb3IsIHNldExvYWRpbmcpID0+IHtcbiAgc2V0TG9hZGluZyh0cnVlKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCwgeyB1c2VyIH0pO1xuXG4gICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xuICAgIHNldEVycm9yKGVycm9yTXNnKTtcbiAgfVxuICBzZXRMb2FkaW5nKGZhbHNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWRpcmVjdFVzZXIgPSAoY3R4LCBsb2NhdGlvbikgPT4ge1xuICBpZiAoY3R4LnJlcSkge1xuICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgY3R4LnJlcy5lbmQoKTtcbiAgfSBlbHNlIHtcbiAgICBSb3V0ZXIucHVzaChsb2NhdGlvbik7XG4gIH1cbn07XG5cbmNvbnN0IHNldFRva2VuID0gdG9rZW4gPT4ge1xuICBjb29raWUuc2V0KFwidG9rZW5cIiwgdG9rZW4pO1xuICBSb3V0ZXIucHVzaChcIi9cIik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9IGVtYWlsID0+IHtcbiAgY29va2llLnNldChcInVzZXJFbWFpbFwiLCBlbWFpbCk7XG4gIGNvb2tpZS5yZW1vdmUoXCJ0b2tlblwiKTtcbiAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gIFJvdXRlci5yZWxvYWQoKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9