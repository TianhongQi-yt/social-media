self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\pages\\signup.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
var cancel;

function Signup() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var name = user.name,
      email = user.email,
      password = user.password,
      bio = user.bio;

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value,
        files = _e$target.files;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, name, value));
    });
  }; // control icon for showing the password


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      showSocialLinks = _useState2[0],
      setShowSocialLinks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      showPassword = _useState3[0],
      setShowPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      errorMsg = _useState4[0],
      setErrorMsg = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      formLoading = _useState5[0],
      setFormLoading = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      submitDisabled = _useState6[0],
      setSubmitDisabled = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      username = _useState7[0],
      setUsername = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      usernameLoading = _useState8[0],
      setUsernameLoading = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      usernameAvailable = _useState9[0],
      setUsernameAvailable = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      media = _useState10[0],
      setMedia = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      mediaPreview = _useState11[0],
      setMediaPreview = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      highlighted = _useState12[0],
      setHighlighted = _useState12[1];

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var isUser = Object.values({
      name: name,
      email: email,
      password: password,
      bio: bio
    }).every(function (item) {
      return Boolean(item);
    });
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  var checkUsername = /*#__PURE__*/function () {
    var _ref = (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var CancelToken, res;
      return C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setUsernameLoading(true);
              _context.prev = 1;
              cancel && cancel();
              CancelToken = (axios__WEBPACK_IMPORTED_MODULE_8___default().CancelToken);
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().get("".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__.default, "/api/signup/").concat(username), {
                cancelToken: new CancelToken(function (canceler) {
                  cancel = canceler;
                })
              });

            case 6:
              res = _context.sent;
              if (errorMsg !== null) setErrorMsg(null);

              if (res.data === "Available") {
                setUsernameAvailable(true);
                setUser(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, {
                    username: username
                  });
                });
              }

              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              setErrorMsg("Username Not Available");
              setUsernameAvailable(false);

            case 15:
              setUsernameLoading(false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function checkUsername() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]); // submit the form

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {
      var profilePicUrl;
      return C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              setFormLoading(true);

              if (!(media !== null)) {
                _context2.next = 6;
                break;
              }

              _context2.next = 5;
              return (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_11__.default)(media);

            case 5:
              profilePicUrl = _context2.sent;

            case 6:
              if (!(media !== null && !profilePicUrl)) {
                _context2.next = 9;
                break;
              }

              setFormLoading(false);
              return _context2.abrupt("return", setErrorMsg("Error Uploading Image"));

            case 9:
              _context2.next = 11;
              return (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_10__.registerUser)(user, profilePicUrl, setErrorMsg, setFormLoading);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_7__.HeaderMessage, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Form, {
      loading: formLoading,
      error: errorMsg !== null,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Message, {
        error: true,
        header: "Oops!",
        content: errorMsg,
        onDismiss: function onDismiss() {
          return setErrorMsg(null);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Segment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_6__.default, {
          mediaPreview: mediaPreview,
          setMediaPreview: setMediaPreview,
          setMedia: setMedia,
          inputRef: inputRef,
          highlighted: highlighted,
          setHighlighted: setHighlighted,
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Form.Input, {
          required: true,
          label: "Name",
          placeholder: "Name",
          name: "name",
          value: name,
          onChange: handleChange,
          fluid: true,
          icon: "user",
          iconPosition: "left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Form.Input, {
          required: true,
          label: "Email",
          placeholder: "Email",
          name: "email",
          value: email,
          onChange: handleChange,
          fluid: true,
          icon: "envelope",
          iconPosition: "left",
          type: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Form.Input, {
          label: "Password",
          placeholder: "Password",
          name: "password",
          value: password,
          onChange: handleChange,
          fluid: true,
          icon: {
            name: "eye",
            circular: true,
            link: true,
            onClick: function onClick() {
              return setShowPassword(!showPassword);
            }
          },
          iconPosition: "left",
          type: showPassword ? "text" : "password",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Form.Input, {
          loading: usernameLoading,
          error: !usernameAvailable,
          required: true,
          label: "Username",
          placeholder: "Username",
          value: username,
          onChange: function onChange(e) {
            setUsername(e.target.value);

            if (regexUserName.test(e.target.value)) {
              setUsernameAvailable(true);
            } else {
              setUsernameAvailable(false);
            }
          },
          fluid: true,
          icon: usernameAvailable ? "check" : "close",
          iconPosition: "left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_5__.default, {
          user: user,
          showSocialLinks: showSocialLinks,
          setShowSocialLinks: setShowSocialLinks,
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Divider, {
          hidden: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
          icon: "signup",
          content: "Signup",
          type: "submit",
          color: "orange",
          disabled: submitDisabled || !usernameAvailable
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_7__.FooterMessage, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Signup, "xqnVRUgynKXTDD3QF8c3euok9UA=");

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInJlZ2V4VXNlck5hbWUiLCJjYW5jZWwiLCJTaWdudXAiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlvIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZXMiLCJzZXRNZWRpYSIsInNldE1lZGlhUHJldmlldyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInByZXYiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlsYWJsZSIsIm1lZGlhIiwibWVkaWFQcmV2aWV3IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImNoZWNrVXNlcm5hbWUiLCJDYW5jZWxUb2tlbiIsImF4aW9zIiwiYmFzZVVybCIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJyZXMiLCJkYXRhIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1cGxvYWRQaWMiLCJwcm9maWxlUGljVXJsIiwicmVnaXN0ZXJVc2VyIiwiY2lyY3VsYXIiLCJsaW5rIiwi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QXdDO0FBQ3RDc0Isa0NBQW9CLENBQUMsSUFBRCxDQUFwQjtBQUNELGFBRkQsTUFFTztBQUNMQSxrQ0FBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0Q7QUFDRixXQWRIO0FBZUUsZUFBSyxNQWZQO0FBZ0JFLGNBQUksRUFBRUQsaUJBQWlCLEdBQUcsT0FBSCxHQUFhLE9BaEJ0QztBQWlCRSxzQkFBWSxFQUFDO0FBakJmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckRGLGVBeUVFLDhEQUFDLG9FQUFEO0FBQ0UsY0FBSSxFQUFFMUIsSUFEUjtBQUVFLHlCQUFlLEVBQUVZLGVBRm5CO0FBR0UsNEJBQWtCLEVBQUVDLGtCQUh0QjtBQUlFLHNCQUFZLEVBQUVYO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekVGLGVBZ0ZFLDhEQUFDLHVEQUFEO0FBQVMsZ0JBQU07QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhGRixlQWlGRSw4REFBQyxzREFBRDtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsaUJBQU8sRUFBQyxRQUZWO0FBR0UsY0FBSSxFQUFDLFFBSFA7QUFJRSxlQUFLLEVBQUMsUUFKUjtBQUtFLGtCQUFRLEVBQUVrQixjQUFjLElBQUksQ0FBQ007QUFML0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFxR0UsOERBQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJHRjtBQUFBLGtCQURGO0FBeUdEOztHQXpNUXBDLE07O0tBQUFBLE07QUEyTVQsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjllNWFjNjk2ZTY1MWYzYzg5OTU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgU2VnbWVudCwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ29tbW9uSW5wdXRzIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHNcIjtcclxuaW1wb3J0IEltYWdlRHJvcERpdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2XCI7XHJcbmltcG9ydCB7IEhlYWRlck1lc3NhZ2UsIEZvb3Rlck1lc3NhZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclVzZXIgfSBmcm9tIFwiLi4vdXRpbHMvYXV0aFVzZXJcIjtcclxuaW1wb3J0IHVwbG9hZFBpYyBmcm9tIFwiLi4vdXRpbHMvdXBsb2FkUGljVG9DbG91ZGluYXJ5XCI7XHJcbmNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLztcclxubGV0IGNhbmNlbDtcclxuXHJcbmZ1bmN0aW9uIFNpZ251cCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGJpbzogXCJcIixcclxuICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgeW91dHViZTogXCJcIixcclxuICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICBpbnN0YWdyYW06IFwiXCJcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9ID0gdXNlcjtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYgKG5hbWUgPT09IFwibWVkaWFcIikge1xyXG4gICAgICBzZXRNZWRpYShmaWxlc1swXSk7XHJcbiAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlcihwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnRyb2wgaWNvbiBmb3Igc2hvd2luZyB0aGUgcGFzc3dvcmRcclxuICBjb25zdCBbc2hvd1NvY2lhbExpbmtzLCBzZXRTaG93U29jaWFsTGlua3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZm9ybUxvYWRpbmcsIHNldEZvcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3VibWl0RGlzYWJsZWQsIHNldFN1Ym1pdERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsIHNldFVzZXJuYW1lTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJuYW1lQXZhaWxhYmxlLCBzZXRVc2VybmFtZUF2YWlsYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpc1VzZXIgPSBPYmplY3QudmFsdWVzKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW8gfSkuZXZlcnkoaXRlbSA9PlxyXG4gICAgICBCb29sZWFuKGl0ZW0pXHJcbiAgICApO1xyXG4gICAgaXNVc2VyID8gc2V0U3VibWl0RGlzYWJsZWQoZmFsc2UpIDogc2V0U3VibWl0RGlzYWJsZWQodHJ1ZSk7XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgY2hlY2tVc2VybmFtZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFVzZXJuYW1lTG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNhbmNlbCAmJiBjYW5jZWwoKTtcclxuXHJcbiAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3NpZ251cC8ke3VzZXJuYW1lfWAsIHtcclxuICAgICAgICBjYW5jZWxUb2tlbjogbmV3IENhbmNlbFRva2VuKGNhbmNlbGVyID0+IHtcclxuICAgICAgICAgIGNhbmNlbCA9IGNhbmNlbGVyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9yTXNnICE9PSBudWxsKSBzZXRFcnJvck1zZyhudWxsKTtcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YSA9PT0gXCJBdmFpbGFibGVcIikge1xyXG4gICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKHRydWUpO1xyXG4gICAgICAgIHNldFVzZXIocHJldiA9PiAoeyAuLi5wcmV2LCB1c2VybmFtZSB9KSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yTXNnKFwiVXNlcm5hbWUgTm90IEF2YWlsYWJsZVwiKTtcclxuICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlcm5hbWVMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXNlcm5hbWUgPT09IFwiXCIgPyBzZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSkgOiBjaGVja1VzZXJuYW1lKCk7XHJcbiAgfSwgW3VzZXJuYW1lXSk7XHJcblxyXG4gIC8vIHN1Ym1pdCB0aGUgZm9ybVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0Rm9ybUxvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgbGV0IHByb2ZpbGVQaWNVcmw7XHJcbiAgICBpZiAobWVkaWEgIT09IG51bGwpIHtcclxuICAgICAgcHJvZmlsZVBpY1VybCA9IGF3YWl0IHVwbG9hZFBpYyhtZWRpYSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1lZGlhICE9PSBudWxsICYmICFwcm9maWxlUGljVXJsKSB7XHJcbiAgICAgIHNldEZvcm1Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgcmV0dXJuIHNldEVycm9yTXNnKFwiRXJyb3IgVXBsb2FkaW5nIEltYWdlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHJlZ2lzdGVyVXNlcih1c2VyLCBwcm9maWxlUGljVXJsLCBzZXRFcnJvck1zZywgc2V0Rm9ybUxvYWRpbmcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyTWVzc2FnZSAvPlxyXG4gICAgICA8Rm9ybSBsb2FkaW5nPXtmb3JtTG9hZGluZ30gZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2Vycm9yTXNnfVxyXG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvck1zZyhudWxsKX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgIDxJbWFnZURyb3BEaXZcclxuICAgICAgICAgICAgbWVkaWFQcmV2aWV3PXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgIHNldE1lZGlhUHJldmlldz17c2V0TWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICBzZXRNZWRpYT17c2V0TWVkaWF9XHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2hpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZD17c2V0SGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249XCJ1c2VyXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPVwiZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcImV5ZVwiLFxyXG4gICAgICAgICAgICAgIGNpcmN1bGFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgbG9hZGluZz17dXNlcm5hbWVMb2FkaW5nfVxyXG4gICAgICAgICAgICBlcnJvcj17IXVzZXJuYW1lQXZhaWxhYmxlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBpZiAocmVnZXhVc2VyTmFtZS50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3VzZXJuYW1lQXZhaWxhYmxlID8gXCJjaGVja1wiIDogXCJjbG9zZVwifVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPENvbW1vbklucHV0c1xyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICBzaG93U29jaWFsTGlua3M9e3Nob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgICAgc2V0U2hvd1NvY2lhbExpbmtzPXtzZXRTaG93U29jaWFsTGlua3N9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgaWNvbj1cInNpZ251cFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJTaWdudXBcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0RGlzYWJsZWQgfHwgIXVzZXJuYW1lQXZhaWxhYmxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgIDxGb290ZXJNZXNzYWdlIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=