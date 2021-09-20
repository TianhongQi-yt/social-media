(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./components/Common/CommonInputs.js":
/*!*******************************************!*\
  !*** ./components/Common/CommonInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Common\\CommonInputs.js";



function CommonInputs({
  user: {
    bio,
    facebook,
    instagram,
    youtube,
    twitter
  },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
      required: true,
      control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.TextArea,
      name: "bio",
      value: bio,
      onChange: handleChange,
      placeholder: "bio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
      content: "Add Social Links",
      color: "red",
      icon: "at",
      type: "button",
      onClick: () => setShowSocialLinks(!showSocialLinks)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), showSocialLinks && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
        icon: "facebook f",
        iconPosition: "left",
        name: "facebook",
        value: facebook,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
        icon: "twitter",
        iconPosition: "left",
        name: "twitter",
        value: twitter,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
        icon: "instagram",
        iconPosition: "left",
        name: "instagram",
        value: instagram,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
        icon: "youtube",
        iconPosition: "left",
        name: "youtube",
        value: youtube,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        icon: "attention",
        info: true,
        size: "small",
        header: "Social Media Links Are Optional!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, this)]
    }, void 0, true)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (CommonInputs);

/***/ }),

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Common\\ImageDropDiv.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
        placeholder: true,
        basic: true,
        secondary: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          style: {
            display: "none"
          },
          type: "file",
          accept: "image/*",
          onChange: handleChange,
          name: "media",
          ref: inputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onDragOver: e => {
            e.preventDefault();
            setHighlighted(true);
          },
          onDragLeave: e => {
            e.preventDefault();
            setHighlighted(false);
          },
          onDrop: e => {
            e.preventDefault();
            setHighlighted(true); // an iterable object to convert to an array

            const droppedFile = Array.from(e.dataTransfer.files);
            setMedia(droppedFile[0]);
            setMediaPreview(URL.createObjectURL(droppedFile[0]));
          },
          children: mediaPreview === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, _objectSpread(_objectSpread({}, highlighted && {
              color: "green"
            }), {}, {
              placeholder: true,
              basic: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
                icon: true,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                  name: "file image outline",
                  style: {
                    cursor: "pointer"
                  },
                  onClick: () => inputRef.current.click()
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 21
                }, this), "Drag and Drop or Click To Upload Image"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 19
              }, this)
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, this)
          }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
              color: "green",
              placeholder: true,
              basic: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                src: mediaPreview,
                size: "medium",
                centered: true,
                style: {
                  cursor: "pointer"
                },
                onClick: () => inputRef.current.click()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\pages\\signup.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
let cancel;

function Signup() {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  });
  const {
    name,
    email,
    password,
    bio
  } = user;

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  }; // control icon for showing the password


  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: formLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: usernameLoading,
    1: setUsernameLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: usernameAvailable,
    1: setUsernameAvailable
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // 前端用户校验

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const isUser = Object.values({
      name,
      email,
      password,
      bio
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const checkUsername = async () => {
    setUsernameLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_6___default().CancelToken);
      const res = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__.default}/api/signup/${username}`, {
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });
      if (errorMsg !== null) setErrorMsg(null);

      if (res.data === "Available") {
        setUsernameAvailable(true);
        setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
          username
        }));
      }
    } catch (error) {
      setErrorMsg("Username Not Available");
      setUsernameAvailable(false);
    }

    setUsernameLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]); // 提交表单

  const handleSubmit = async e => {
    e.preventDefault();
    setFormLoading(true);
    let profilePicUrl;

    if (media !== null) {
      profilePicUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_9__.default)(media);
    }

    if (media !== null && !profilePicUrl) {
      setFormLoading(false);
      return setErrorMsg("Error Uploading Image");
    }

    await (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_8__.registerUser)(user, profilePicUrl, setErrorMsg, setFormLoading);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_5__.HeaderMessage, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      loading: formLoading,
      error: errorMsg !== null,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        error: true,
        header: "Oops!",
        content: errorMsg,
        onDismiss: () => setErrorMsg(null)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_4__.default, {
          mediaPreview: mediaPreview,
          setMediaPreview: setMediaPreview,
          setMedia: setMedia,
          inputRef: inputRef,
          highlighted: highlighted,
          setHighlighted: setHighlighted,
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
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
          lineNumber: 132,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
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
          lineNumber: 144,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
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
            onClick: () => setShowPassword(!showPassword)
          },
          iconPosition: "left",
          type: showPassword ? "text" : "password",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
          loading: usernameLoading,
          error: !usernameAvailable,
          required: true,
          label: "Username",
          placeholder: "Username",
          value: username,
          onChange: e => {
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
          lineNumber: 175,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_3__.default, {
          user: user,
          showSocialLinks: showSocialLinks,
          setShowSocialLinks: setShowSocialLinks,
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
          hidden: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          icon: "signup",
          content: "Signup",
          type: "submit",
          color: "orange",
          disabled: submitDisabled || !usernameAvailable
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_5__.FooterMessage, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "social_media");
    form.append("cloud_name", "ytqth0921");
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://api.cloudinary.com/v1_1/ytqth0921/image/upload", form);
    return res.data.url;
  } catch (error) {
    return;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (uploadPic);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_authUser_js","components_Common_WelcomeMessage_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnkuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiQ29tbW9uSW5wdXRzIiwidXNlciIsImJpbyIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwieW91dHViZSIsInR3aXR0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJUZXh0QXJlYSIsIkltYWdlRHJvcERpdiIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb2xvciIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayIsInJlZ2V4VXNlck5hbWUiLCJjYW5jZWwiLCJTaWdudXAiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmb3JtTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwic3VibWl0RGlzYWJsZWQiLCJzZXRTdWJtaXREaXNhYmxlZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXRVc2VybmFtZUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWxhYmxlIiwibWVkaWEiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJpc1VzZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsIml0ZW0iLCJCb29sZWFuIiwiY2hlY2tVc2VybmFtZSIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJyZXMiLCJiYXNlVXJsIiwiY2FuY2VsVG9rZW4iLCJjYW5jZWxlciIsImRhdGEiLCJlcnJvciIsImhhbmRsZVN1Ym1pdCIsInByb2ZpbGVQaWNVcmwiLCJ1cGxvYWRQaWMiLCJyZWdpc3RlclVzZXIiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwidGVzdCIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInByb2Nlc3MiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCO0FBQ3BCQyxNQUFJLEVBQUU7QUFBRUMsT0FBRjtBQUFPQyxZQUFQO0FBQWlCQyxhQUFqQjtBQUE0QkMsV0FBNUI7QUFBcUNDO0FBQXJDLEdBRGM7QUFFcEJDLGNBRm9CO0FBR3BCQyxpQkFIb0I7QUFJcEJDO0FBSm9CLENBQXRCLEVBS0c7QUFDRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLHlEQUFEO0FBQ0UsY0FBUSxNQURWO0FBRUUsYUFBTyxFQUFFQyx1REFGWDtBQUdFLFVBQUksRUFBQyxLQUhQO0FBSUUsV0FBSyxFQUFFUixHQUpUO0FBS0UsY0FBUSxFQUFFSyxZQUxaO0FBTUUsaUJBQVcsRUFBQztBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVFLDhEQUFDLHFEQUFEO0FBQ0UsYUFBTyxFQUFDLGtCQURWO0FBRUUsV0FBSyxFQUFDLEtBRlI7QUFHRSxVQUFJLEVBQUMsSUFIUDtBQUlFLFVBQUksRUFBQyxRQUpQO0FBS0UsYUFBTyxFQUFFLE1BQU1FLGtCQUFrQixDQUFDLENBQUNELGVBQUY7QUFMbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLEVBa0JHQSxlQUFlLGlCQUNkO0FBQUEsOEJBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMseURBQUQ7QUFDRSxZQUFJLEVBQUMsWUFEUDtBQUVFLG9CQUFZLEVBQUMsTUFGZjtBQUdFLFlBQUksRUFBQyxVQUhQO0FBSUUsYUFBSyxFQUFFTCxRQUpUO0FBS0UsZ0JBQVEsRUFBRUk7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFVRSw4REFBQyx5REFBRDtBQUNFLFlBQUksRUFBQyxTQURQO0FBRUUsb0JBQVksRUFBQyxNQUZmO0FBR0UsWUFBSSxFQUFDLFNBSFA7QUFJRSxhQUFLLEVBQUVELE9BSlQ7QUFLRSxnQkFBUSxFQUFFQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQWtCRSw4REFBQyx5REFBRDtBQUNFLFlBQUksRUFBQyxXQURQO0FBRUUsb0JBQVksRUFBQyxNQUZmO0FBR0UsWUFBSSxFQUFDLFdBSFA7QUFJRSxhQUFLLEVBQUVILFNBSlQ7QUFLRSxnQkFBUSxFQUFFRztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkYsZUEwQkUsOERBQUMseURBQUQ7QUFDRSxZQUFJLEVBQUMsU0FEUDtBQUVFLG9CQUFZLEVBQUMsTUFGZjtBQUdFLFlBQUksRUFBQyxTQUhQO0FBSUUsYUFBSyxFQUFFRixPQUpUO0FBS0UsZ0JBQVEsRUFBRUU7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJGLGVBa0NFLDhEQUFDLHNEQUFEO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxZQUFJLE1BRk47QUFHRSxZQUFJLEVBQUMsT0FIUDtBQUlFLGNBQU0sRUFBQztBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQSxvQkFuQko7QUFBQSxrQkFERjtBQWdFRDs7QUFFRCwrREFBZVAsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7O0FBRUEsU0FBU1csWUFBVCxDQUFzQjtBQUNwQkMsYUFEb0I7QUFFcEJDLGdCQUZvQjtBQUdwQkMsVUFIb0I7QUFJcEJQLGNBSm9CO0FBS3BCUSxjQUxvQjtBQU1wQkMsaUJBTm9CO0FBT3BCQztBQVBvQixDQUF0QixFQVFHO0FBQ0Qsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx5REFBRDtBQUFBLDZCQUNFLDhEQUFDLHNEQUFEO0FBQVMsbUJBQVcsTUFBcEI7QUFBcUIsYUFBSyxNQUExQjtBQUEyQixpQkFBUyxNQUFwQztBQUFBLGdDQUNFO0FBQ0UsZUFBSyxFQUFFO0FBQUVDLG1CQUFPLEVBQUU7QUFBWCxXQURUO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxnQkFBTSxFQUFDLFNBSFQ7QUFJRSxrQkFBUSxFQUFFWCxZQUpaO0FBS0UsY0FBSSxFQUFDLE9BTFA7QUFNRSxhQUFHLEVBQUVPO0FBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVVFO0FBQ0Usb0JBQVUsRUFBRUssQ0FBQyxJQUFJO0FBQ2ZBLGFBQUMsQ0FBQ0MsY0FBRjtBQUNBUCwwQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELFdBSkg7QUFLRSxxQkFBVyxFQUFFTSxDQUFDLElBQUk7QUFDaEJBLGFBQUMsQ0FBQ0MsY0FBRjtBQUNBUCwwQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELFdBUkg7QUFTRSxnQkFBTSxFQUFFTSxDQUFDLElBQUk7QUFDWEEsYUFBQyxDQUFDQyxjQUFGO0FBQ0FQLDBCQUFjLENBQUMsSUFBRCxDQUFkLENBRlcsQ0FJWDs7QUFDQSxrQkFBTVEsV0FBVyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0osQ0FBQyxDQUFDSyxZQUFGLENBQWVDLEtBQTFCLENBQXBCO0FBQ0FSLG9CQUFRLENBQUNJLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBUjtBQUNBTCwyQkFBZSxDQUFDVSxHQUFHLENBQUNDLGVBQUosQ0FBb0JOLFdBQVcsQ0FBQyxDQUFELENBQS9CLENBQUQsQ0FBZjtBQUNELFdBakJIO0FBQUEsb0JBa0JHTixZQUFZLEtBQUssSUFBakIsZ0JBQ0M7QUFBQSxtQ0FDRSw4REFBQyxzREFBRCxrQ0FBY0gsV0FBVyxJQUFJO0FBQUNnQixtQkFBSyxFQUFDO0FBQVAsYUFBN0I7QUFBZ0QseUJBQVcsTUFBM0Q7QUFBNEQsbUJBQUssTUFBakU7QUFBQSxxQ0FDRSw4REFBQyxxREFBRDtBQUFRLG9CQUFJLE1BQVo7QUFBQSx3Q0FDRSw4REFBQyxtREFBRDtBQUNFLHNCQUFJLEVBQUMsb0JBRFA7QUFFRSx1QkFBSyxFQUFFO0FBQUVDLDBCQUFNLEVBQUU7QUFBVixtQkFGVDtBQUdFLHlCQUFPLEVBQUUsTUFBTWYsUUFBUSxDQUFDZ0IsT0FBVCxDQUFpQkMsS0FBakI7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsMkJBREQsZ0JBY0M7QUFBQSxtQ0FDRSw4REFBQyxzREFBRDtBQUFTLG1CQUFLLEVBQUMsT0FBZjtBQUF1Qix5QkFBVyxNQUFsQztBQUFtQyxtQkFBSyxNQUF4QztBQUFBLHFDQUNFLDhEQUFDLG9EQUFEO0FBQ0UsbUJBQUcsRUFBRWhCLFlBRFA7QUFFRSxvQkFBSSxFQUFDLFFBRlA7QUFHRSx3QkFBUSxNQUhWO0FBSUUscUJBQUssRUFBRTtBQUFFYyx3QkFBTSxFQUFFO0FBQVYsaUJBSlQ7QUFLRSx1QkFBTyxFQUFFLE1BQU1mLFFBQVEsQ0FBQ2dCLE9BQVQsQ0FBaUJDLEtBQWpCO0FBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFoQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE4REQ7O0FBRUQsK0RBQWVwQixZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNcUIsYUFBYSxHQUFHLHVDQUF0QjtBQUNBLElBQUlDLE1BQUo7O0FBRUEsU0FBU0MsTUFBVCxHQUFrQjtBQUNoQixRQUFNO0FBQUEsT0FBQ2pDLElBQUQ7QUFBQSxPQUFPa0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFLEVBRHlCO0FBRS9CQyxTQUFLLEVBQUUsRUFGd0I7QUFHL0JDLFlBQVEsRUFBRSxFQUhxQjtBQUkvQnJDLE9BQUcsRUFBRSxFQUowQjtBQUsvQkMsWUFBUSxFQUFFLEVBTHFCO0FBTS9CRSxXQUFPLEVBQUUsRUFOc0I7QUFPL0JDLFdBQU8sRUFBRSxFQVBzQjtBQVEvQkYsYUFBUyxFQUFFO0FBUm9CLEdBQUQsQ0FBaEM7QUFXQSxRQUFNO0FBQUVpQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUMsWUFBZjtBQUF5QnJDO0FBQXpCLE1BQWlDRCxJQUF2Qzs7QUFFQSxRQUFNTSxZQUFZLEdBQUdZLENBQUMsSUFBSTtBQUN4QixVQUFNO0FBQUVrQixVQUFGO0FBQVFHLFdBQVI7QUFBZWY7QUFBZixRQUF5Qk4sQ0FBQyxDQUFDc0IsTUFBakM7O0FBRUEsUUFBSUosSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDcEJwQixjQUFRLENBQUNRLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBUjtBQUNBVCxxQkFBZSxDQUFDVSxHQUFHLENBQUNDLGVBQUosQ0FBb0JGLEtBQUssQ0FBQyxDQUFELENBQXpCLENBQUQsQ0FBZjtBQUNEOztBQUVEVSxXQUFPLENBQUNPLElBQUksb0NBQVVBLElBQVY7QUFBZ0IsT0FBQ0wsSUFBRCxHQUFRRztBQUF4QixNQUFMLENBQVA7QUFDRCxHQVRELENBZGdCLENBeUJoQjs7O0FBQ0EsUUFBTTtBQUFBLE9BQUNoQyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDMkIsK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDUiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJWLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDVyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ1osK0NBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NkLCtDQUFRLENBQUMsSUFBRCxDQUFwRDtBQUVBLFFBQU07QUFBQSxPQUFDZSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQmhCLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDaUIsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q2xCLCtDQUFRLENBQUMsS0FBRCxDQUF0RDtBQUNBLFFBQU07QUFBQSxPQUFDbUIsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNENwQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUQ7QUFFQSxRQUFNO0FBQUEsT0FBQ3FCLEtBQUQ7QUFBQSxPQUFReEM7QUFBUixNQUFvQm1CLCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDckIsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NvQiwrQ0FBUSxDQUFDLElBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3hCLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDdUIsK0NBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0EsUUFBTXRCLFFBQVEsR0FBRzRDLDZDQUFNLEVBQXZCLENBdkNnQixDQXlDaEI7O0FBQ0FDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBRXpCLFVBQUY7QUFBUUMsV0FBUjtBQUFlQyxjQUFmO0FBQXlCckM7QUFBekIsS0FBZCxFQUE4QzZELEtBQTlDLENBQW9EQyxJQUFJLElBQ3JFQyxPQUFPLENBQUNELElBQUQsQ0FETSxDQUFmO0FBR0FKLFVBQU0sR0FBR1YsaUJBQWlCLENBQUMsS0FBRCxDQUFwQixHQUE4QkEsaUJBQWlCLENBQUMsSUFBRCxDQUFyRDtBQUNELEdBTFEsRUFLTixDQUFDakQsSUFBRCxDQUxNLENBQVQ7O0FBT0EsUUFBTWlFLGFBQWEsR0FBRyxZQUFZO0FBQ2hDWixzQkFBa0IsQ0FBQyxJQUFELENBQWxCOztBQUNBLFFBQUk7QUFDRnJCLFlBQU0sSUFBSUEsTUFBTSxFQUFoQjtBQUVBLFlBQU1rQyxXQUFXLEdBQUdDLDBEQUFwQjtBQUVBLFlBQU1DLEdBQUcsR0FBRyxNQUFNRCxnREFBQSxDQUFXLEdBQUVFLG1EQUFRLGVBQWNuQixRQUFTLEVBQTVDLEVBQStDO0FBQy9Eb0IsbUJBQVcsRUFBRSxJQUFJSixXQUFKLENBQWdCSyxRQUFRLElBQUk7QUFDdkN2QyxnQkFBTSxHQUFHdUMsUUFBVDtBQUNELFNBRlk7QUFEa0QsT0FBL0MsQ0FBbEI7QUFNQSxVQUFJM0IsUUFBUSxLQUFLLElBQWpCLEVBQXVCQyxXQUFXLENBQUMsSUFBRCxDQUFYOztBQUV2QixVQUFJdUIsR0FBRyxDQUFDSSxJQUFKLEtBQWEsV0FBakIsRUFBOEI7QUFDNUJqQiw0QkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0FyQixlQUFPLENBQUNPLElBQUksb0NBQVVBLElBQVY7QUFBZ0JTO0FBQWhCLFVBQUwsQ0FBUDtBQUNEO0FBQ0YsS0FqQkQsQ0FpQkUsT0FBT3VCLEtBQVAsRUFBYztBQUNkNUIsaUJBQVcsQ0FBQyx3QkFBRCxDQUFYO0FBQ0FVLDBCQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDRDs7QUFDREYsc0JBQWtCLENBQUMsS0FBRCxDQUFsQjtBQUNELEdBeEJEOztBQTBCQUssa0RBQVMsQ0FBQyxNQUFNO0FBQ2RSLFlBQVEsS0FBSyxFQUFiLEdBQWtCSyxvQkFBb0IsQ0FBQyxLQUFELENBQXRDLEdBQWdEVSxhQUFhLEVBQTdEO0FBQ0QsR0FGUSxFQUVOLENBQUNmLFFBQUQsQ0FGTSxDQUFULENBM0VnQixDQStFaEI7O0FBQ0EsUUFBTXdCLFlBQVksR0FBRyxNQUFNeEQsQ0FBTixJQUFXO0FBQzlCQSxLQUFDLENBQUNDLGNBQUY7QUFDQTRCLGtCQUFjLENBQUMsSUFBRCxDQUFkO0FBRUEsUUFBSTRCLGFBQUo7O0FBQ0EsUUFBSW5CLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCbUIsbUJBQWEsR0FBRyxNQUFNQyxxRUFBUyxDQUFDcEIsS0FBRCxDQUEvQjtBQUNEOztBQUVELFFBQUlBLEtBQUssS0FBSyxJQUFWLElBQWtCLENBQUNtQixhQUF2QixFQUFzQztBQUNwQzVCLG9CQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0EsYUFBT0YsV0FBVyxDQUFDLHVCQUFELENBQWxCO0FBQ0Q7O0FBRUQsVUFBTWdDLDZEQUFZLENBQUM3RSxJQUFELEVBQU8yRSxhQUFQLEVBQXNCOUIsV0FBdEIsRUFBbUNFLGNBQW5DLENBQWxCO0FBQ0QsR0FmRDs7QUFpQkEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxtREFBRDtBQUFNLGFBQU8sRUFBRUQsV0FBZjtBQUE0QixXQUFLLEVBQUVGLFFBQVEsS0FBSyxJQUFoRDtBQUFzRCxjQUFRLEVBQUU4QixZQUFoRTtBQUFBLDhCQUNFLDhEQUFDLHNEQUFEO0FBQ0UsYUFBSyxNQURQO0FBRUUsY0FBTSxFQUFDLE9BRlQ7QUFHRSxlQUFPLEVBQUU5QixRQUhYO0FBSUUsaUJBQVMsRUFBRSxNQUFNQyxXQUFXLENBQUMsSUFBRDtBQUo5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRSw4REFBQyxzREFBRDtBQUFBLGdDQUNFLDhEQUFDLG9FQUFEO0FBQ0Usc0JBQVksRUFBRS9CLFlBRGhCO0FBRUUseUJBQWUsRUFBRUMsZUFGbkI7QUFHRSxrQkFBUSxFQUFFQyxRQUhaO0FBSUUsa0JBQVEsRUFBRUgsUUFKWjtBQUtFLHFCQUFXLEVBQUVGLFdBTGY7QUFNRSx3QkFBYyxFQUFFQyxjQU5sQjtBQU9FLHNCQUFZLEVBQUVOO0FBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFXRSw4REFBQyx5REFBRDtBQUNFLGtCQUFRLE1BRFY7QUFFRSxlQUFLLEVBQUMsTUFGUjtBQUdFLHFCQUFXLEVBQUMsTUFIZDtBQUlFLGNBQUksRUFBQyxNQUpQO0FBS0UsZUFBSyxFQUFFOEIsSUFMVDtBQU1FLGtCQUFRLEVBQUU5QixZQU5aO0FBT0UsZUFBSyxNQVBQO0FBUUUsY0FBSSxFQUFDLE1BUlA7QUFTRSxzQkFBWSxFQUFDO0FBVGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixlQXVCRSw4REFBQyx5REFBRDtBQUNFLGtCQUFRLE1BRFY7QUFFRSxlQUFLLEVBQUMsT0FGUjtBQUdFLHFCQUFXLEVBQUMsT0FIZDtBQUlFLGNBQUksRUFBQyxPQUpQO0FBS0UsZUFBSyxFQUFFK0IsS0FMVDtBQU1FLGtCQUFRLEVBQUUvQixZQU5aO0FBT0UsZUFBSyxNQVBQO0FBUUUsY0FBSSxFQUFDLFVBUlA7QUFTRSxzQkFBWSxFQUFDLE1BVGY7QUFVRSxjQUFJLEVBQUM7QUFWUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRixlQW9DRSw4REFBQyx5REFBRDtBQUNFLGVBQUssRUFBQyxVQURSO0FBRUUscUJBQVcsRUFBQyxVQUZkO0FBR0UsY0FBSSxFQUFDLFVBSFA7QUFJRSxlQUFLLEVBQUVnQyxRQUpUO0FBS0Usa0JBQVEsRUFBRWhDLFlBTFo7QUFNRSxlQUFLLE1BTlA7QUFPRSxjQUFJLEVBQUU7QUFDSjhCLGdCQUFJLEVBQUUsS0FERjtBQUVKMEMsb0JBQVEsRUFBRSxJQUZOO0FBR0pDLGdCQUFJLEVBQUUsSUFIRjtBQUlKQyxtQkFBTyxFQUFFLE1BQU1yQyxlQUFlLENBQUMsQ0FBQ0QsWUFBRjtBQUoxQixXQVBSO0FBYUUsc0JBQVksRUFBQyxNQWJmO0FBY0UsY0FBSSxFQUFFQSxZQUFZLEdBQUcsTUFBSCxHQUFZLFVBZGhDO0FBZUUsa0JBQVE7QUFmVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBDRixlQXNERSw4REFBQyx5REFBRDtBQUNFLGlCQUFPLEVBQUVVLGVBRFg7QUFFRSxlQUFLLEVBQUUsQ0FBQ0UsaUJBRlY7QUFHRSxrQkFBUSxNQUhWO0FBSUUsZUFBSyxFQUFDLFVBSlI7QUFLRSxxQkFBVyxFQUFDLFVBTGQ7QUFNRSxlQUFLLEVBQUVKLFFBTlQ7QUFPRSxrQkFBUSxFQUFFaEMsQ0FBQyxJQUFJO0FBQ2JpQyx1QkFBVyxDQUFDakMsQ0FBQyxDQUFDc0IsTUFBRixDQUFTRCxLQUFWLENBQVg7O0FBQ0EsZ0JBQUlSLGFBQWEsQ0FBQ2tELElBQWQsQ0FBbUIvRCxDQUFDLENBQUNzQixNQUFGLENBQVNELEtBQTVCLENBQUosRUFBd0M7QUFDdENnQixrQ0FBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0QsYUFGRCxNQUVPO0FBQ0xBLGtDQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDRDtBQUNGLFdBZEg7QUFlRSxlQUFLLE1BZlA7QUFnQkUsY0FBSSxFQUFFRCxpQkFBaUIsR0FBRyxPQUFILEdBQWEsT0FoQnRDO0FBaUJFLHNCQUFZLEVBQUM7QUFqQmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0REYsZUEwRUUsOERBQUMsb0VBQUQ7QUFDRSxjQUFJLEVBQUV0RCxJQURSO0FBRUUseUJBQWUsRUFBRU8sZUFGbkI7QUFHRSw0QkFBa0IsRUFBRUMsa0JBSHRCO0FBSUUsc0JBQVksRUFBRUY7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExRUYsZUFpRkUsOERBQUMsc0RBQUQ7QUFBUyxnQkFBTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakZGLGVBa0ZFLDhEQUFDLHFEQUFEO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxpQkFBTyxFQUFDLFFBRlY7QUFHRSxjQUFJLEVBQUMsUUFIUDtBQUlFLGVBQUssRUFBQyxRQUpSO0FBS0Usa0JBQVEsRUFBRTBDLGNBQWMsSUFBSSxDQUFDTTtBQUwvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQXNHRSw4REFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEdGO0FBQUEsa0JBREY7QUEwR0Q7O0FBRUQsK0RBQWVyQixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDek5BOztBQUVBLE1BQU0yQyxTQUFTLEdBQUcsTUFBTXBCLEtBQU4sSUFBZTtBQUMvQixNQUFJO0FBQ0YsVUFBTTBCLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsUUFBSSxDQUFDRSxNQUFMLENBQVksTUFBWixFQUFvQjVCLEtBQXBCO0FBQ0EwQixRQUFJLENBQUNFLE1BQUwsQ0FBWSxlQUFaLEVBQTZCLGNBQTdCO0FBQ0FGLFFBQUksQ0FBQ0UsTUFBTCxDQUFZLFlBQVosRUFBMEIsV0FBMUI7QUFFQSxVQUFNaEIsR0FBRyxHQUFHLE1BQU1ELGlEQUFBLENBQVdrQix3REFBWCxFQUF1Q0gsSUFBdkMsQ0FBbEI7QUFDQSxXQUFPZCxHQUFHLENBQUNJLElBQUosQ0FBU2MsR0FBaEI7QUFDRCxHQVJELENBUUUsT0FBT2IsS0FBUCxFQUFjO0FBQ2Q7QUFDRDtBQUNGLENBWkQ7O0FBY0EsK0RBQWVHLFNBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIFRleHRBcmVhLCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBDb21tb25JbnB1dHMoe1xyXG4gIHVzZXI6IHsgYmlvLCBmYWNlYm9vaywgaW5zdGFncmFtLCB5b3V0dWJlLCB0d2l0dGVyIH0sXHJcbiAgaGFuZGxlQ2hhbmdlLFxyXG4gIHNob3dTb2NpYWxMaW5rcyxcclxuICBzZXRTaG93U29jaWFsTGlua3NcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgY29udHJvbD17VGV4dEFyZWF9XHJcbiAgICAgICAgbmFtZT1cImJpb1wiXHJcbiAgICAgICAgdmFsdWU9e2Jpb31cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiYmlvXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb250ZW50PVwiQWRkIFNvY2lhbCBMaW5rc1wiXHJcbiAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgIGljb249XCJhdFwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1NvY2lhbExpbmtzKCFzaG93U29jaWFsTGlua3MpfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAge3Nob3dTb2NpYWxMaW5rcyAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwiZmFjZWJvb2sgZlwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZmFjZWJvb2tcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZmFjZWJvb2t9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGljb249XCJ0d2l0dGVyXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e3R3aXR0ZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGljb249XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgbmFtZT1cImluc3RhZ3JhbVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnN0YWdyYW19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGljb249XCJ5b3V0dWJlXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ5b3V0dWJlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3lvdXR1YmV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgIGljb249XCJhdHRlbnRpb25cIlxyXG4gICAgICAgICAgICBpbmZvXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGhlYWRlcj1cIlNvY2lhbCBNZWRpYSBMaW5rcyBBcmUgT3B0aW9uYWwhXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tb25JbnB1dHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgU2VnbWVudCwgSW1hZ2UsIEljb24sIEhlYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VEcm9wRGl2KHtcclxuICBoaWdobGlnaHRlZCxcclxuICBzZXRIaWdobGlnaHRlZCxcclxuICBpbnB1dFJlZixcclxuICBoYW5kbGVDaGFuZ2UsXHJcbiAgbWVkaWFQcmV2aWV3LFxyXG4gIHNldE1lZGlhUHJldmlldyxcclxuICBzZXRNZWRpYVxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgIDxTZWdtZW50IHBsYWNlaG9sZGVyIGJhc2ljIHNlY29uZGFyeT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBuYW1lPVwibWVkaWFcIlxyXG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiBIVE1MIGRyYWcgYW5kIGRyb3AgYXBpICovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXtlID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXtlID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkRyb3A9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBhbiBpdGVyYWJsZSBvYmplY3QgdG8gY29udmVydCB0byBhbiBhcnJheVxyXG4gICAgICAgICAgICAgIGNvbnN0IGRyb3BwZWRGaWxlID0gQXJyYXkuZnJvbShlLmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xyXG4gICAgICAgICAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGRyb3BwZWRGaWxlWzBdKSk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7bWVkaWFQcmV2aWV3ID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8U2VnbWVudCB7Li4uKGhpZ2hsaWdodGVkICYmIHtjb2xvcjpcImdyZWVuXCJ9KX0gIHBsYWNlaG9sZGVyIGJhc2ljPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlIGltYWdlIG91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRHJhZyBhbmQgRHJvcCBvciBDbGljayBUbyBVcGxvYWQgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwiZ3JlZW5cIiBwbGFjZWhvbGRlciBiYXNpYz5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZURyb3BEaXY7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBTZWdtZW50LCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBDb21tb25JbnB1dHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0c1wiO1xyXG5pbXBvcnQgSW1hZ2VEcm9wRGl2IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9JbWFnZURyb3BEaXZcIjtcclxuaW1wb3J0IHsgSGVhZGVyTWVzc2FnZSwgRm9vdGVyTWVzc2FnZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyVXNlciB9IGZyb20gXCIuLi91dGlscy9hdXRoVXNlclwiO1xyXG5pbXBvcnQgdXBsb2FkUGljIGZyb20gXCIuLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnlcIjtcclxuY29uc3QgcmVnZXhVc2VyTmFtZSA9IC9eKD8hLipcXC5cXC4pKD8hLipcXC4kKVteXFxXXVtcXHcuXXswLDI5fSQvO1xyXG5sZXQgY2FuY2VsO1xyXG5cclxuZnVuY3Rpb24gU2lnbnVwKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgYmlvOiBcIlwiLFxyXG4gICAgZmFjZWJvb2s6IFwiXCIsXHJcbiAgICB5b3V0dWJlOiBcIlwiLFxyXG4gICAgdHdpdHRlcjogXCJcIixcclxuICAgIGluc3RhZ3JhbTogXCJcIlxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgYmlvIH0gPSB1c2VyO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIGZpbGVzIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBpZiAobmFtZSA9PT0gXCJtZWRpYVwiKSB7XHJcbiAgICAgIHNldE1lZGlhKGZpbGVzWzBdKTtcclxuICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyKHByZXYgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29udHJvbCBpY29uIGZvciBzaG93aW5nIHRoZSBwYXNzd29yZFxyXG4gIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmb3JtTG9hZGluZywgc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdWJtaXREaXNhYmxlZCwgc2V0U3VibWl0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJuYW1lTG9hZGluZywgc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsIHNldFVzZXJuYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8g5YmN56uv55So5oi35qCh6aqMXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzVXNlciA9IE9iamVjdC52YWx1ZXMoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9KS5ldmVyeShpdGVtID0+XHJcbiAgICAgIEJvb2xlYW4oaXRlbSlcclxuICAgICk7XHJcbiAgICBpc1VzZXIgPyBzZXRTdWJtaXREaXNhYmxlZChmYWxzZSkgOiBzZXRTdWJtaXREaXNhYmxlZCh0cnVlKTtcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICBjb25zdCBjaGVja1VzZXJuYW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0VXNlcm5hbWVMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY2FuY2VsICYmIGNhbmNlbCgpO1xyXG5cclxuICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwLyR7dXNlcm5hbWV9YCwge1xyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oY2FuY2VsZXIgPT4ge1xyXG4gICAgICAgICAgY2FuY2VsID0gY2FuY2VsZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZXJyb3JNc2cgIT09IG51bGwpIHNldEVycm9yTXNnKG51bGwpO1xyXG5cclxuICAgICAgaWYgKHJlcy5kYXRhID09PSBcIkF2YWlsYWJsZVwiKSB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUodHJ1ZSk7XHJcbiAgICAgICAgc2V0VXNlcihwcmV2ID0+ICh7IC4uLnByZXYsIHVzZXJuYW1lIH0pKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3JNc2coXCJVc2VybmFtZSBOb3QgQXZhaWxhYmxlXCIpO1xyXG4gICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBzZXRVc2VybmFtZUxvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1c2VybmFtZSA9PT0gXCJcIiA/IHNldFVzZXJuYW1lQXZhaWxhYmxlKGZhbHNlKSA6IGNoZWNrVXNlcm5hbWUoKTtcclxuICB9LCBbdXNlcm5hbWVdKTtcclxuXHJcbiAgLy8g5o+Q5Lqk6KGo5Y2VXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRGb3JtTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBsZXQgcHJvZmlsZVBpY1VybDtcclxuICAgIGlmIChtZWRpYSAhPT0gbnVsbCkge1xyXG4gICAgICBwcm9maWxlUGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWVkaWEgIT09IG51bGwgJiYgIXByb2ZpbGVQaWNVcmwpIHtcclxuICAgICAgc2V0Rm9ybUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICByZXR1cm4gc2V0RXJyb3JNc2coXCJFcnJvciBVcGxvYWRpbmcgSW1hZ2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgcmVnaXN0ZXJVc2VyKHVzZXIsIHByb2ZpbGVQaWNVcmwsIHNldEVycm9yTXNnLCBzZXRGb3JtTG9hZGluZyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXJNZXNzYWdlIC8+XHJcbiAgICAgIDxGb3JtIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfSBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxyXG4gICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yTXNnKG51bGwpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgPEltYWdlRHJvcERpdlxyXG4gICAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld31cclxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3PXtzZXRNZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgIHNldE1lZGlhPXtzZXRNZWRpYX1cclxuICAgICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkPXtzZXRIaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIG5hbWUgKi99XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPVwidXNlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiBlbWFpbCAqL31cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPVwiZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7LyogcGFzc3dvcmQgKi99XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiZXllXCIsXHJcbiAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgbGluazogdHJ1ZSxcclxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiB1c2VybmFtZSAqL31cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGxvYWRpbmc9e3VzZXJuYW1lTG9hZGluZ31cclxuICAgICAgICAgICAgZXJyb3I9eyF1c2VybmFtZUF2YWlsYWJsZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlZ2V4VXNlck5hbWUudGVzdChlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt1c2VybmFtZUF2YWlsYWJsZSA/IFwiY2hlY2tcIiA6IFwiY2xvc2VcIn1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxDb21tb25JbnB1dHNcclxuICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgc2hvd1NvY2lhbExpbmtzPXtzaG93U29jaWFsTGlua3N9XHJcbiAgICAgICAgICAgIHNldFNob3dTb2NpYWxMaW5rcz17c2V0U2hvd1NvY2lhbExpbmtzfVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGljb249XCJzaWdudXBcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiU2lnbnVwXCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdERpc2FibGVkIHx8ICF1c2VybmFtZUF2YWlsYWJsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8Rm9vdGVyTWVzc2FnZSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCB1cGxvYWRQaWMgPSBhc3luYyBtZWRpYSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm0uYXBwZW5kKFwiZmlsZVwiLCBtZWRpYSk7XHJcbiAgICBmb3JtLmFwcGVuZChcInVwbG9hZF9wcmVzZXRcIiwgXCJzb2NpYWxfbWVkaWFcIik7XHJcbiAgICBmb3JtLmFwcGVuZChcImNsb3VkX25hbWVcIiwgXCJ5dHF0aDA5MjFcIik7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5DTE9VRElOQVJZX1VSTCwgZm9ybSk7XHJcbiAgICByZXR1cm4gcmVzLmRhdGEudXJsO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkUGljO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9