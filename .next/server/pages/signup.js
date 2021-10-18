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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


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
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const signupRoute = router.pathname === "/signup";

  const checkForSignupPage = () => signupRoute ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
      icon: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "file image outline",
        style: {
          cursor: "pointer"
        },
        onClick: () => inputRef.current.click(),
        size: "huge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), "Drag and Drop or Click to upload image"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    style: {
      textAlign: "center"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
      src: profilePicUrl,
      alt: "Profile pic",
      style: {
        cursor: "pointer"
      },
      onClick: () => inputRef.current.click(),
      size: "huge",
      centered: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), "Drag and Drop or Click to upload image"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);

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
          lineNumber: 49,
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
                  lineNumber: 80,
                  columnNumber: 21
                }, this), "Drag and Drop or Click To Upload Image"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, this)
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
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
                lineNumber: 92,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__);
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
      const res = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7___default())}/api/signup/${username}`, {
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js","utils_authUser_js","components_Common_WelcomeMessage_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnkuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiQ29tbW9uSW5wdXRzIiwidXNlciIsImJpbyIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwieW91dHViZSIsInR3aXR0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJUZXh0QXJlYSIsIkltYWdlRHJvcERpdiIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwicm91dGVyIiwidXNlUm91dGVyIiwic2lnbnVwUm91dGUiLCJwYXRobmFtZSIsImNoZWNrRm9yU2lnbnVwUGFnZSIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayIsInRleHRBbGlnbiIsInByb2ZpbGVQaWNVcmwiLCJkaXNwbGF5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZHJvcHBlZEZpbGUiLCJBcnJheSIsImZyb20iLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNvbG9yIiwicmVnZXhVc2VyTmFtZSIsImNhbmNlbCIsIlNpZ251cCIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2Iiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsImZvcm1Mb2FkaW5nIiwic2V0Rm9ybUxvYWRpbmciLCJzdWJtaXREaXNhYmxlZCIsInNldFN1Ym1pdERpc2FibGVkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJuYW1lTG9hZGluZyIsInNldFVzZXJuYW1lTG9hZGluZyIsInVzZXJuYW1lQXZhaWxhYmxlIiwic2V0VXNlcm5hbWVBdmFpbGFibGUiLCJtZWRpYSIsInVzZVJlZiIsInVzZUVmZmVjdCIsImlzVXNlciIsIk9iamVjdCIsInZhbHVlcyIsImV2ZXJ5IiwiaXRlbSIsIkJvb2xlYW4iLCJjaGVja1VzZXJuYW1lIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInJlcyIsImJhc2VVcmwiLCJjYW5jZWxUb2tlbiIsImNhbmNlbGVyIiwiZGF0YSIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwidXBsb2FkUGljIiwicmVnaXN0ZXJVc2VyIiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayIsInRlc3QiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwcm9jZXNzIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQjtBQUNwQkMsTUFBSSxFQUFFO0FBQUVDLE9BQUY7QUFBT0MsWUFBUDtBQUFpQkMsYUFBakI7QUFBNEJDLFdBQTVCO0FBQXFDQztBQUFyQyxHQURjO0FBRXBCQyxjQUZvQjtBQUdwQkMsaUJBSG9CO0FBSXBCQztBQUpvQixDQUF0QixFQUtHO0FBQ0Qsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyx5REFBRDtBQUNFLGNBQVEsTUFEVjtBQUVFLGFBQU8sRUFBRUMsdURBRlg7QUFHRSxVQUFJLEVBQUMsS0FIUDtBQUlFLFdBQUssRUFBRVIsR0FKVDtBQUtFLGNBQVEsRUFBRUssWUFMWjtBQU1FLGlCQUFXLEVBQUM7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFVRSw4REFBQyxxREFBRDtBQUNFLGFBQU8sRUFBQyxrQkFEVjtBQUVFLFdBQUssRUFBQyxLQUZSO0FBR0UsVUFBSSxFQUFDLElBSFA7QUFJRSxVQUFJLEVBQUMsUUFKUDtBQUtFLGFBQU8sRUFBRSxNQUFNRSxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFGO0FBTG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixFQWtCR0EsZUFBZSxpQkFDZDtBQUFBLDhCQUNFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLHlEQUFEO0FBQ0UsWUFBSSxFQUFDLFlBRFA7QUFFRSxvQkFBWSxFQUFDLE1BRmY7QUFHRSxZQUFJLEVBQUMsVUFIUDtBQUlFLGFBQUssRUFBRUwsUUFKVDtB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QUFPYixHQUFHLENBQUNJLElBQUosQ0FBU2EsR0FBaEI7QUFDRCxHQVJELENBUUUsT0FBT1osS0FBUCxFQUFjO0FBQ2Q7QUFDRDtBQUNGLENBWkQ7O0FBY0EsK0RBQWVFLFNBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBUZXh0QXJlYSwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5mdW5jdGlvbiBDb21tb25JbnB1dHMoe1xuICB1c2VyOiB7IGJpbywgZmFjZWJvb2ssIGluc3RhZ3JhbSwgeW91dHViZSwgdHdpdHRlciB9LFxuICBoYW5kbGVDaGFuZ2UsXG4gIHNob3dTb2NpYWxMaW5rcyxcbiAgc2V0U2hvd1NvY2lhbExpbmtzXG59KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxuICAgICAgICBuYW1lPVwiYmlvXCJcbiAgICAgICAgdmFsdWU9e2Jpb31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJiaW9cIlxuICAgICAgLz5cblxuICAgICAgPEJ1dHRvblxuICAgICAgICBjb250ZW50PVwiQWRkIFNvY2lhbCBMaW5rc1wiXG4gICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgaWNvbj1cImF0XCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTb2NpYWxMaW5rcyghc2hvd1NvY2lhbExpbmtzKX1cbiAgICAgIC8+XG5cbiAgICAgIHtzaG93U29jaWFsTGlua3MgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgIGljb249XCJmYWNlYm9vayBmXCJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgbmFtZT1cImZhY2Vib29rXCJcbiAgICAgICAgICAgIHZhbHVlPXtmYWNlYm9va31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICBpY29uPVwidHdpdHRlclwiXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyXCJcbiAgICAgICAgICAgIHZhbHVlPXt0d2l0dGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgIGljb249XCJpbnN0YWdyYW1cIlxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnN0YWdyYW19XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgaWNvbj1cInlvdXR1YmVcIlxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICBuYW1lPVwieW91dHViZVwiXG4gICAgICAgICAgICB2YWx1ZT17eW91dHViZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgICBpY29uPVwiYXR0ZW50aW9uXCJcbiAgICAgICAgICAgIGluZm9cbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBoZWFkZXI9XCJTb2NpYWwgTWVkaWEgTGlua3MgQXJlIE9wdGlvbmFsIVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tb25JbnB1dHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBTZWdtZW50LCBJbWFnZSwgSWNvbiwgSGVhZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIEltYWdlRHJvcERpdih7XG4gIGhpZ2hsaWdodGVkLFxuICBzZXRIaWdobGlnaHRlZCxcbiAgaW5wdXRSZWYsXG4gIGhhbmRsZUNoYW5nZSxcbiAgbWVkaWFQcmV2aWV3LFxuICBzZXRNZWRpYVByZXZpZXcsXG4gIHNldE1lZGlhXG59KSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxuICBjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvc2lnbnVwXCI7XG5cbiAgY29uc3QgY2hlY2tGb3JTaWdudXBQYWdlID0gKCkgPT5cbiAgc2lnbnVwUm91dGUgPyAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgaWNvbj5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBuYW1lPVwiZmlsZSBpbWFnZSBvdXRsaW5lXCJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxuICAgICAgICAgIHNpemU9XCJodWdlXCJcbiAgICAgICAgLz5cbiAgICAgICAgRHJhZyBhbmQgRHJvcCBvciBDbGljayB0byB1cGxvYWQgaW1hZ2VcbiAgICAgIDwvSGVhZGVyPlxuICAgIDwvPlxuICApIDogKFxuICAgIDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e3Byb2ZpbGVQaWNVcmx9XG4gICAgICAgIGFsdD1cIlByb2ZpbGUgcGljXCJcbiAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XG4gICAgICAgIHNpemU9XCJodWdlXCJcbiAgICAgICAgY2VudGVyZWRcbiAgICAgIC8+XG4gICAgICBEcmFnIGFuZCBEcm9wIG9yIENsaWNrIHRvIHVwbG9hZCBpbWFnZVxuICAgIDwvc3Bhbj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgPFNlZ21lbnQgcGxhY2Vob2xkZXIgYmFzaWMgc2Vjb25kYXJ5PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG5hbWU9XCJtZWRpYVwiXG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIEhUTUwgZHJhZyBhbmQgZHJvcCBhcGkgKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25EcmFnT3Zlcj17ZSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25EcmFnTGVhdmU9e2UgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkRyb3A9e2UgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gYW4gaXRlcmFibGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gYW4gYXJyYXlcbiAgICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xuICAgICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChkcm9wcGVkRmlsZVswXSkpO1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICB7bWVkaWFQcmV2aWV3ID09PSBudWxsID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHsuLi4oaGlnaGxpZ2h0ZWQgJiYge2NvbG9yOlwiZ3JlZW5cIn0pfSAgcGxhY2Vob2xkZXIgYmFzaWM+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGljb24+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGUgaW1hZ2Ugb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgRHJhZyBhbmQgRHJvcCBvciBDbGljayBUbyBVcGxvYWQgSW1hZ2VcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwiZ3JlZW5cIiBwbGFjZWhvbGRlciBiYXNpYz5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e21lZGlhUHJldmlld31cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TZWdtZW50PlxuICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZURyb3BEaXY7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIFNlZ21lbnQsIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBDb21tb25JbnB1dHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0c1wiO1xuaW1wb3J0IEltYWdlRHJvcERpdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2XCI7XG5pbXBvcnQgeyBIZWFkZXJNZXNzYWdlLCBGb290ZXJNZXNzYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJVc2VyIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhVc2VyXCI7XG5pbXBvcnQgdXBsb2FkUGljIGZyb20gXCIuLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnlcIjtcbmNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLztcbmxldCBjYW5jZWw7XG5cbmZ1bmN0aW9uIFNpZ251cCgpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgYmlvOiBcIlwiLFxuICAgIGZhY2Vib29rOiBcIlwiLFxuICAgIHlvdXR1YmU6IFwiXCIsXG4gICAgdHdpdHRlcjogXCJcIixcbiAgICBpbnN0YWdyYW06IFwiXCJcbiAgfSk7XG5cbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9ID0gdXNlcjtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXQ7XG5cbiAgICBpZiAobmFtZSA9PT0gXCJtZWRpYVwiKSB7XG4gICAgICBzZXRNZWRpYShmaWxlc1swXSk7XG4gICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xuICAgIH1cblxuICAgIHNldFVzZXIocHJldiA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcbiAgfTtcblxuICAvLyBjb250cm9sIGljb24gZm9yIHNob3dpbmcgdGhlIHBhc3N3b3JkXG4gIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmb3JtTG9hZGluZywgc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3VibWl0RGlzYWJsZWQsIHNldFN1Ym1pdERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsIHNldFVzZXJuYW1lTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VybmFtZUF2YWlsYWJsZSwgc2V0VXNlcm5hbWVBdmFpbGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFttZWRpYVByZXZpZXcsIHNldE1lZGlhUHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgLy8g5YmN56uv55So5oi35qCh6aqMXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaXNVc2VyID0gT2JqZWN0LnZhbHVlcyh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgYmlvIH0pLmV2ZXJ5KGl0ZW0gPT5cbiAgICAgIEJvb2xlYW4oaXRlbSlcbiAgICApO1xuICAgIGlzVXNlciA/IHNldFN1Ym1pdERpc2FibGVkKGZhbHNlKSA6IHNldFN1Ym1pdERpc2FibGVkKHRydWUpO1xuICB9LCBbdXNlcl0pO1xuXG4gIGNvbnN0IGNoZWNrVXNlcm5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0VXNlcm5hbWVMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjYW5jZWwgJiYgY2FuY2VsKCk7XG5cbiAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwLyR7dXNlcm5hbWV9YCwge1xuICAgICAgICBjYW5jZWxUb2tlbjogbmV3IENhbmNlbFRva2VuKGNhbmNlbGVyID0+IHtcbiAgICAgICAgICBjYW5jZWwgPSBjYW5jZWxlcjtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZXJyb3JNc2cgIT09IG51bGwpIHNldEVycm9yTXNnKG51bGwpO1xuXG4gICAgICBpZiAocmVzLmRhdGEgPT09IFwiQXZhaWxhYmxlXCIpIHtcbiAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUodHJ1ZSk7XG4gICAgICAgIHNldFVzZXIocHJldiA9PiAoeyAuLi5wcmV2LCB1c2VybmFtZSB9KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yTXNnKFwiVXNlcm5hbWUgTm90IEF2YWlsYWJsZVwiKTtcbiAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKGZhbHNlKTtcbiAgICB9XG4gICAgc2V0VXNlcm5hbWVMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVzZXJuYW1lID09PSBcIlwiID8gc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpIDogY2hlY2tVc2VybmFtZSgpO1xuICB9LCBbdXNlcm5hbWVdKTtcblxuICAvLyDmj5DkuqTooajljZVcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldEZvcm1Mb2FkaW5nKHRydWUpO1xuXG4gICAgbGV0IHByb2ZpbGVQaWNVcmw7XG4gICAgaWYgKG1lZGlhICE9PSBudWxsKSB7XG4gICAgICBwcm9maWxlUGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKTtcbiAgICB9XG5cbiAgICBpZiAobWVkaWEgIT09IG51bGwgJiYgIXByb2ZpbGVQaWNVcmwpIHtcbiAgICAgIHNldEZvcm1Mb2FkaW5nKGZhbHNlKTtcbiAgICAgIHJldHVybiBzZXRFcnJvck1zZyhcIkVycm9yIFVwbG9hZGluZyBJbWFnZVwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCByZWdpc3RlclVzZXIodXNlciwgcHJvZmlsZVBpY1VybCwgc2V0RXJyb3JNc2csIHNldEZvcm1Mb2FkaW5nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyTWVzc2FnZSAvPlxuICAgICAgPEZvcm0gbG9hZGluZz17Zm9ybUxvYWRpbmd9IGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgZXJyb3JcbiAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXG4gICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvck1zZyhudWxsKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICA8SW1hZ2VEcm9wRGl2XG4gICAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld31cbiAgICAgICAgICAgIHNldE1lZGlhUHJldmlldz17c2V0TWVkaWFQcmV2aWV3fVxuICAgICAgICAgICAgc2V0TWVkaWE9e3NldE1lZGlhfVxuICAgICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2hpZ2hsaWdodGVkfVxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQ9e3NldEhpZ2hsaWdodGVkfVxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogbmFtZSAqL31cbiAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgIGljb249XCJ1c2VyXCJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIGVtYWlsICovfVxuICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgIGljb249XCJlbnZlbG9wZVwiXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogcGFzc3dvcmQgKi99XG4gICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICBpY29uPXt7XG4gICAgICAgICAgICAgIG5hbWU6IFwiZXllXCIsXG4gICAgICAgICAgICAgIGNpcmN1bGFyOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiB1c2VybmFtZSAqL31cbiAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgbG9hZGluZz17dXNlcm5hbWVMb2FkaW5nfVxuICAgICAgICAgICAgZXJyb3I9eyF1c2VybmFtZUF2YWlsYWJsZX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIGlmIChyZWdleFVzZXJOYW1lLnRlc3QoZS50YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUodHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgIGljb249e3VzZXJuYW1lQXZhaWxhYmxlID8gXCJjaGVja1wiIDogXCJjbG9zZVwifVxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxDb21tb25JbnB1dHNcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICBzaG93U29jaWFsTGlua3M9e3Nob3dTb2NpYWxMaW5rc31cbiAgICAgICAgICAgIHNldFNob3dTb2NpYWxMaW5rcz17c2V0U2hvd1NvY2lhbExpbmtzfVxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGljb249XCJzaWdudXBcIlxuICAgICAgICAgICAgY29udGVudD1cIlNpZ251cFwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZCB8fCAhdXNlcm5hbWVBdmFpbGFibGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZWdtZW50PlxuICAgICAgPC9Gb3JtPlxuXG4gICAgICA8Rm9vdGVyTWVzc2FnZSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHVwbG9hZFBpYyA9IGFzeW5jIG1lZGlhID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybS5hcHBlbmQoXCJmaWxlXCIsIG1lZGlhKTtcbiAgICBmb3JtLmFwcGVuZChcInVwbG9hZF9wcmVzZXRcIiwgXCJzb2NpYWxfbWVkaWFcIik7XG4gICAgZm9ybS5hcHBlbmQoXCJjbG91ZF9uYW1lXCIsIFwieXRxdGgwOTIxXCIpO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5DTE9VRElOQVJZX1VSTCwgZm9ybSk7XG4gICAgcmV0dXJuIHJlcy5kYXRhLnVybDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwbG9hZFBpYztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=