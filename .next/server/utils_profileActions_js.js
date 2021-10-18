exports.id = "utils_profileActions_js";
exports.ids = ["utils_profileActions_js"];
exports.modules = {

/***/ "./utils/profileActions.js":
/*!*********************************!*\
  !*** ./utils/profileActions.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "followUser": function() { return /* binding */ followUser; },
/* harmony export */   "unfollowUser": function() { return /* binding */ unfollowUser; },
/* harmony export */   "profileUpdate": function() { return /* binding */ profileUpdate; },
/* harmony export */   "passwordUpdate": function() { return /* binding */ passwordUpdate; },
/* harmony export */   "toggleMessagePopup": function() { return /* binding */ toggleMessagePopup; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/profile`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token")
  }
});
const followUser = async (userToFollowId, setUserFollowStats) => {
  try {
    await Axios.post(`/follow/${userToFollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: [...prev.following, {
        user: userToFollowId
      }]
    }));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const unfollowUser = async (userToUnfollowId, setUserFollowStats) => {
  try {
    await Axios.put(`/unfollow/${userToUnfollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: prev.following.filter(following => following.user !== userToUnfollowId)
    }));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const profileUpdate = async (profile, setLoading, setError, profilePicUrl) => {
  try {
    const {
      bio,
      facebook,
      youtube,
      twitter,
      instagram
    } = profile;
    await Axios.post(`/update`, {
      bio,
      facebook,
      youtube,
      twitter,
      instagram,
      profilePicUrl
    });
    setLoading(false);
    next_router__WEBPACK_IMPORTED_MODULE_4___default().reload();
  } catch (error) {
    setError((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
    setLoading(false);
  }
};
const passwordUpdate = async (setSuccess, userPasswords) => {
  const {
    currentPassword,
    newPassword
  } = userPasswords;

  try {
    await Axios.post(`/settings/password`, {
      currentPassword,
      newPassword
    });
    setSuccess(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const toggleMessagePopup = async (popupSetting, setPopupSetting, setSuccess) => {
  try {
    await Axios.post(`/settings/messagePopup`);
    setPopupSetting(!popupSetting);
    setSuccess(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9wcm9maWxlQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJBeGlvcyIsImF4aW9zIiwiYmFzZVVSTCIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImZvbGxvd1VzZXIiLCJ1c2VyVG9Gb2xsb3dJZCIsInNldFVzZXJGb2xsb3dTdGF0cyIsInBvc3QiLCJwcmV2IiwiZm9sbG93aW5nIiwidXNlciIsImVycm9yIiwiYWxlcnQiLCJjYXRjaEVycm9ycyIsInVuZm9sbG93VXNlciIsInVzZXJUb1VuZm9sbG93SWQiLCJwdXQiLCJmaWx0ZXIiLCJwcm9maWxlVXBkYXRlIiwicHJvZmlsZSIsInNldExvYWRpbmciLCJzZXRFcnJvciIsInByb2ZpbGVQaWNVcmwiLCJiaW8iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwiUm91dGVyIiwicGFzc3dvcmRVcGRhdGUiLCJzZXRTdWNjZXNzIiwidXNlclBhc3N3b3JkcyIsImN1cnJlbnRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwidG9nZ2xlTWVzc2FnZVBvcHVwIiwicG9wdXBTZXR0aW5nIiwic2V0UG9wdXBTZXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBR0MsbURBQUEsQ0FBYTtBQUN6QkMsU0FBTyxFQUFHLEdBQUVDLGlEQUFRLGNBREs7QUFFekJDLFNBQU8sRUFBRTtBQUFFQyxpQkFBYSxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBakI7QUFGZ0IsQ0FBYixDQUFkO0FBS08sTUFBTUMsVUFBVSxHQUFHLE9BQU9DLGNBQVAsRUFBdUJDLGtCQUF2QixLQUE4QztBQUN0RSxNQUFJO0FBQ0YsVUFBTVQsS0FBSyxDQUFDVSxJQUFOLENBQVksV0FBVUYsY0FBZSxFQUFyQyxDQUFOO0FBRUFDLHNCQUFrQixDQUFDRSxJQUFJLG9DQUNsQkEsSUFEa0I7QUFFckJDLGVBQVMsRUFBRSxDQUFDLEdBQUdELElBQUksQ0FBQ0MsU0FBVCxFQUFvQjtBQUFFQyxZQUFJLEVBQUVMO0FBQVIsT0FBcEI7QUFGVSxNQUFMLENBQWxCO0FBSUQsR0FQRCxDQU9FLE9BQU9NLEtBQVAsRUFBYztBQUNkQyxTQUFLLENBQUNDLHFEQUFXLENBQUNGLEtBQUQsQ0FBWixDQUFMO0FBQ0Q7QUFDRixDQVhNO0FBYUEsTUFBTUcsWUFBWSxHQUFHLE9BQU9DLGdCQUFQLEVBQXlCVCxrQkFBekIsS0FBZ0Q7QUFDMUUsTUFBSTtBQUNGLFVBQU1ULEtBQUssQ0FBQ21CLEdBQU4sQ0FBVyxhQUFZRCxnQkFBaUIsRUFBeEMsQ0FBTjtBQUVBVCxzQkFBa0IsQ0FBQ0UsSUFBSSxvQ0FDbEJBLElBRGtCO0FBRXJCQyxlQUFTLEVBQUVELElBQUksQ0FBQ0MsU0FBTCxDQUFlUSxNQUFmLENBQXNCUixTQUFTLElBQUlBLFNBQVMsQ0FBQ0MsSUFBVixLQUFtQkssZ0JBQXREO0FBRlUsTUFBTCxDQUFsQjtBQUlELEdBUEQsQ0FPRSxPQUFPSixLQUFQLEVBQWM7QUFDZEMsU0FBSyxDQUFDQyxxREFBVyxDQUFDRixLQUFELENBQVosQ0FBTDtBQUNEO0FBQ0YsQ0FYTTtBQWFBLE1BQU1PLGFBQWEsR0FBRyxPQUFPQyxPQUFQLEVBQWdCQyxVQUFoQixFQUE0QkMsUUFBNUIsRUFBc0NDLGFBQXRDLEtBQXdEO0FBQ25GLE1BQUk7QUFDRixVQUFNO0FBQUVDLFNBQUY7QUFBT0MsY0FBUDtBQUFpQkMsYUFBakI7QUFBMEJDLGFBQTFCO0FBQW1DQztBQUFuQyxRQUFpRFIsT0FBdkQ7QUFFQSxVQUFNdEIsS0FBSyxDQUFDVSxJQUFOLENBQVksU0FBWixFQUFzQjtBQUMxQmdCLFNBRDBCO0FBRTFCQyxjQUYwQjtBQUcxQkMsYUFIMEI7QUFJMUJDLGFBSjBCO0FBSzFCQyxlQUwwQjtBQU0xQkw7QUFOMEIsS0FBdEIsQ0FBTjtBQVNBRixjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FRLDZEQUFBO0FBQ0QsR0FkRCxDQWNFLE9BQU9qQixLQUFQLEVBQWM7QUFDZFUsWUFBUSxDQUFDUixxREFBVyxDQUFDRixLQUFELENBQVosQ0FBUjtBQUNBUyxjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0Q7QUFDRixDQW5CTTtBQXFCQSxNQUFNUyxjQUFjLEdBQUcsT0FBT0MsVUFBUCxFQUFtQkMsYUFBbkIsS0FBcUM7QUFDakUsUUFBTTtBQUFFQyxtQkFBRjtBQUFtQkM7QUFBbkIsTUFBbUNGLGFBQXpDOztBQUNBLE1BQUk7QUFDRixVQUFNbEMsS0FBSyxDQUFDVSxJQUFOLENBQVksb0JBQVosRUFBaUM7QUFBRXlCLHFCQUFGO0FBQW1CQztBQUFuQixLQUFqQyxDQUFOO0FBRUFILGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxHQUpELENBSUUsT0FBT25CLEtBQVAsRUFBYztBQUNkQyxTQUFLLENBQUNDLHFEQUFXLENBQUNGLEtBQUQsQ0FBWixDQUFMO0FBQ0Q7QUFDRixDQVRNO0FBV0EsTUFBTXVCLGtCQUFrQixHQUFHLE9BQU9DLFlBQVAsRUFBcUJDLGVBQXJCLEVBQXNDTixVQUF0QyxLQUFxRDtBQUNyRixNQUFJO0FBQ0YsVUFBTWpDLEtBQUssQ0FBQ1UsSUFBTixDQUFZLHdCQUFaLENBQU47QUFFQTZCLG1CQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFmO0FBQ0FMLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxHQUxELENBS0UsT0FBT25CLEtBQVAsRUFBYztBQUNkQyxTQUFLLENBQUNDLHFEQUFXLENBQUNGLEtBQUQsQ0FBWixDQUFMO0FBQ0Q7QUFDRixDQVRNLEMiLCJmaWxlIjoidXRpbHNfcHJvZmlsZUFjdGlvbnNfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlYCxcclxuICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSBhc3luYyAodXNlclRvRm9sbG93SWQsIHNldFVzZXJGb2xsb3dTdGF0cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvZm9sbG93LyR7dXNlclRvRm9sbG93SWR9YCk7XHJcblxyXG4gICAgc2V0VXNlckZvbGxvd1N0YXRzKHByZXYgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgZm9sbG93aW5nOiBbLi4ucHJldi5mb2xsb3dpbmcsIHsgdXNlcjogdXNlclRvRm9sbG93SWQgfV1cclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dVc2VyID0gYXN5bmMgKHVzZXJUb1VuZm9sbG93SWQsIHNldFVzZXJGb2xsb3dTdGF0cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wdXQoYC91bmZvbGxvdy8ke3VzZXJUb1VuZm9sbG93SWR9YCk7XHJcblxyXG4gICAgc2V0VXNlckZvbGxvd1N0YXRzKHByZXYgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgZm9sbG93aW5nOiBwcmV2LmZvbGxvd2luZy5maWx0ZXIoZm9sbG93aW5nID0+IGZvbGxvd2luZy51c2VyICE9PSB1c2VyVG9VbmZvbGxvd0lkKVxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlVXBkYXRlID0gYXN5bmMgKHByb2ZpbGUsIHNldExvYWRpbmcsIHNldEVycm9yLCBwcm9maWxlUGljVXJsKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgYmlvLCBmYWNlYm9vaywgeW91dHViZSwgdHdpdHRlciwgaW5zdGFncmFtIH0gPSBwcm9maWxlO1xyXG5cclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC91cGRhdGVgLCB7XHJcbiAgICAgIGJpbyxcclxuICAgICAgZmFjZWJvb2ssXHJcbiAgICAgIHlvdXR1YmUsXHJcbiAgICAgIHR3aXR0ZXIsXHJcbiAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgcHJvZmlsZVBpY1VybFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBSb3V0ZXIucmVsb2FkKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHNldEVycm9yKGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRVcGRhdGUgPSBhc3luYyAoc2V0U3VjY2VzcywgdXNlclBhc3N3b3JkcykgPT4ge1xyXG4gIGNvbnN0IHsgY3VycmVudFBhc3N3b3JkLCBuZXdQYXNzd29yZCB9ID0gdXNlclBhc3N3b3JkcztcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3NldHRpbmdzL3Bhc3N3b3JkYCwgeyBjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0pO1xyXG5cclxuICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZU1lc3NhZ2VQb3B1cCA9IGFzeW5jIChwb3B1cFNldHRpbmcsIHNldFBvcHVwU2V0dGluZywgc2V0U3VjY2VzcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvc2V0dGluZ3MvbWVzc2FnZVBvcHVwYCk7XHJcblxyXG4gICAgc2V0UG9wdXBTZXR0aW5nKCFwb3B1cFNldHRpbmcpO1xyXG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9