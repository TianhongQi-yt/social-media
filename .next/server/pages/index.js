(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Layout/NoData.js":
/*!*************************************!*\
  !*** ./components/Layout/NoData.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoProfilePosts": function() { return /* binding */ NoProfilePosts; },
/* harmony export */   "NoFollowData": function() { return /* binding */ NoFollowData; },
/* harmony export */   "NoMessages": function() { return /* binding */ NoMessages; },
/* harmony export */   "NoPosts": function() { return /* binding */ NoPosts; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Layout\\NoData.js";

const NoProfilePosts = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    info: true,
    icon: "meh",
    header: "Sorry",
    content: "User has not posted anything yet!"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "long arrow alternate left",
    content: "Go Back",
    as: "a",
    href: "/"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)]
}, void 0, true);
const NoFollowData = ({
  profileName,
  followersComponent = true,
  followingComponent = true
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [followersComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "user outline",
    info: true,
    content: `${profileName.split(" ")[0] + " does not have followers"}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }, undefined), followingComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "user outline",
    info: true,
    content: `${profileName.split(" ")[0] + " does not follow any users"}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }, undefined)]
}, void 0, true);
const NoMessages = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "telegram plane",
  header: "Sorry",
  content: "You have not messaged anyone yet.Search above to message someone!"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 35,
  columnNumber: 3
}, undefined);
const NoPosts = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Posts. Make sure you have followed someone."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 44,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./components/Layout/PlaceHolderGroup.js":
/*!***********************************************!*\
  !*** ./components/Layout/PlaceHolderGroup.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceHolderPosts": function() { return /* binding */ PlaceHolderPosts; },
/* harmony export */   "PlaceHolderSuggestions": function() { return /* binding */ PlaceHolderSuggestions; },
/* harmony export */   "PlaceHolderNotifications": function() { return /* binding */ PlaceHolderNotifications; },
/* harmony export */   "EndMessage": function() { return /* binding */ EndMessage; },
/* harmony export */   "LikesPlaceHolder": function() { return /* binding */ LikesPlaceHolder; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Layout\\PlaceHolderGroup.js";



const PlaceHolderPosts = () => (0,lodash__WEBPACK_IMPORTED_MODULE_3__.range)(1, 3).map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    fluid: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Header, {
      image: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Paragraph, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined)]
  }, item, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
    hidden: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }, undefined)]
}, void 0, true));
const PlaceHolderSuggestions = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {
      color: "red",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Image, {
          square: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Header, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {
              length: "medium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
        extra: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          disabled: true,
          circular: true,
          size: "small",
          icon: "add user",
          content: "Follow",
          color: "twitter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined)
}, void 0, false);
const PlaceHolderNotifications = () => (0,lodash__WEBPACK_IMPORTED_MODULE_3__.range)(1, 10).map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Header, {
      image: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, undefined)
  }, item, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 7
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
    hidden: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 7
  }, undefined)]
}, void 0, true));
const EndMessage = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
  textAlign: "center",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    name: "refresh",
    size: "large"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
    hidden: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 76,
  columnNumber: 3
}, undefined);
const LikesPlaceHolder = () => (0,lodash__WEBPACK_IMPORTED_MODULE_3__.range)(1, 6).map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
  style: {
    minWidth: "200px"
  },
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Header, {
    image: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {
      length: "full"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 7
  }, undefined)
}, item, false, {
  fileName: _jsxFileName,
  lineNumber: 84,
  columnNumber: 5
}, undefined));

/***/ }),

/***/ "./components/Layout/Toastr.js":
/*!*************************************!*\
  !*** ./components/Layout/Toastr.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDeleteToastr": function() { return /* binding */ PostDeleteToastr; },
/* harmony export */   "ErrorToastr": function() { return /* binding */ ErrorToastr; },
/* harmony export */   "MsgSentToastr": function() { return /* binding */ MsgSentToastr; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Layout\\Toastr.js";

const PostDeleteToastr = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    children: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info("Deleted Successfully", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};
const ErrorToastr = ({
  error
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    children: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};
const MsgSentToastr = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: false,
  children: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Sent successfully", {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  })
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 54,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./components/Post/CardPost.js":
/*!*************************************!*\
  !*** ./components/Post/CardPost.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
/* harmony import */ var _ImageModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImageModal */ "./components/Post/ImageModal.js");
/* harmony import */ var _NoImageModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NoImageModal */ "./components/Post/NoImageModal.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Post\\CardPost.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function CardPost({
  post,
  user,
  setPosts,
  setShowToastr
}) {
  const {
    0: likes,
    1: setLikes
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.likes);
  const isLiked = likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;
  const {
    0: comments,
    1: setComments
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.comments);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const addPropsToModal = () => ({
    post,
    user,
    setLikes,
    likes,
    isLiked,
    comments,
    setComments
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      open: showModal,
      closeIcon: true,
      closeOnDimmerClick: true,
      onClose: () => setShowModal(false),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Content, {
        children: post.picUrl ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageModal__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({}, addPropsToModal()), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoImageModal__WEBPACK_IMPORTED_MODULE_10__.default, _objectSpread({}, addPropsToModal()), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
      basic: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {
        color: "teal",
        fluid: true,
        children: [post.picUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
          src: post.picUrl,
          style: {
            cursor: "pointer"
          },
          floated: "left",
          wrapped: true,
          ui: false,
          alt: "PostImage",
          onClick: () => setShowModal(true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            floated: "left",
            src: post.user.profilePicUrl,
            avatar: true,
            circular: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), (user.role === "root" || post.user._id === user._id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Popup, {
              on: "click",
              position: "top right",
              trigger: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                src: "/deleteIcon.svg",
                style: {
                  cursor: "pointer"
                },
                size: "mini",
                floated: "right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 21
              }, this),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
                as: "h4",
                content: "Are you sure?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "This action is irreversible!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                color: "red",
                icon: "trash",
                content: "Delete",
                onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_7__.deletePost)(post._id, setPosts, setShowToastr)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, this)
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: `/${post.user.username}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: post.user.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__.default)(post.createdAt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
            content: post.location
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 31
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {
            style: {
              fontSize: "17px",
              letterSpacing: "0.1px",
              wordSpacing: "0.35px"
            },
            children: post.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
          extra: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: isLiked ? "heart" : "heart outline",
            color: "red",
            style: {
              cursor: "pointer"
            },
            onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_7__.likePost)(post._id, user._id, setLikes, isLiked ? false : true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_8__.default, {
            postId: post._id,
            trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "spanLikesList",
              children: `${likes.length} ${likes.length === 1 ? "like" : "likes"}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "comment outline",
            style: {
              marginLeft: "7px"
            },
            color: "blue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this), comments.length > 0 && comments.map((comment, i) => i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_3__.default, {
            comment: comment,
            postId: post._id,
            user: user,
            setComments: setComments
          }, comment._id, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 21
          }, this)), comments.length > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            content: "View More",
            color: "teal",
            basic: true,
            circular: true,
            onClick: () => setShowModal(true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
            hidden: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_4__.default, {
            user: user,
            postId: post._id,
            setComments: setComments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
      hidden: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (CardPost);

/***/ }),

/***/ "./components/Post/CommentInputField.js":
/*!**********************************************!*\
  !*** ./components/Post/CommentInputField.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");

var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Post\\CommentInputField.js";




function CommentInputField({
  postId,
  user,
  setComments
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
    reply: true,
    onSubmit: async e => {
      e.preventDefault();
      setLoading(true);
      await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_3__.postComment)(postId, user, text, setComments, setText);
      setLoading(false);
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
      value: text,
      onChange: e => setText(e.target.value),
      placeholder: "Add Comment",
      action: {
        color: "blue",
        icon: "edit",
        loading: loading,
        disabled: text === "" || loading
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (CommentInputField);

/***/ }),

/***/ "./components/Post/CreatePost.js":
/*!***************************************!*\
  !*** ./components/Post/CreatePost.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Post\\CreatePost.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CreatePost({
  user,
  setPosts
}) {
  const {
    0: newPost,
    1: setNewPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    text: "",
    location: ""
  });
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

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

    setNewPost(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const addStyles = () => ({
    textAlign: "center",
    height: "150px",
    width: "150px",
    border: "dotted",
    paddingTop: media === null && "60px",
    cursor: "pointer",
    borderColor: highlighted ? "green" : "black"
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    let picUrl;

    if (media !== null) {
      picUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_3__.default)(media);

      if (!picUrl) {
        setLoading(false);
        return setError("Error Uploading Image");
      }
    }

    await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_4__.submitNewPost)(newPost.text, newPost.location, picUrl, setPosts, setNewPost, setError);
    setMedia(null);
    setMediaPreview(null);
    setLoading(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      error: error !== null,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        error: true,
        onDismiss: () => setError(null),
        content: error,
        header: "Oops!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
          src: user.profilePicUrl,
          circular: true,
          avatar: true,
          inline: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.TextArea, {
          placeholder: "Whats Happening",
          name: "text",
          value: newPost.text,
          onChange: handleChange,
          rows: 4,
          width: 14
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
          value: newPost.location,
          name: "location",
          onChange: handleChange,
          label: "Add Location",
          icon: "map marker alternate",
          placeholder: "Want to add Location?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: inputRef,
          onChange: handleChange,
          name: "media",
          style: {
            display: "none"
          },
          type: "file",
          accept: "image/*"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => inputRef.current.click(),
        style: addStyles(),
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
          setHighlighted(true);
          const droppedFile = Array.from(e.dataTransfer.files);
          setMedia(droppedFile[0]);
          setMediaPreview(URL.createObjectURL(droppedFile[0]));
        },
        children: media === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "plus",
          size: "big"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            style: {
              height: "150px",
              width: "150px"
            },
            src: mediaPreview,
            alt: "PostImage",
            centered: true,
            size: "medium"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        circular: true,
        disabled: newPost.text === "" || loading,
        content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 20
        }, this),
        style: {
          backgroundColor: "#1DA1F2",
          color: "white"
        },
        icon: "send",
        loading: loading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (CreatePost);

/***/ }),

/***/ "./components/Post/ImageModal.js":
/*!***************************************!*\
  !*** ./components/Post/ImageModal.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Post\\ImageModal.js";









function ImageModal({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      columns: 2,
      stackable: true,
      relaxed: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Content, {
          image: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            wrapped: true,
            size: "large",
            src: post.picUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {
          fluid: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
              floated: "left",
              avatar: true,
              src: post.user.profilePicUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                href: `/${post.user.username}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: post.user.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
              children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__.default)(post.createdAt)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
              content: post.location
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {
              style: {
                fontSize: "17px",
                letterSpacing: "0.1px",
                wordSpacing: "0.35px"
              },
              children: post.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
            extra: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: isLiked ? "heart" : "heart outline",
              color: "red",
              style: {
                cursor: "pointer"
              },
              onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_7__.likePost)(post._id, user._id, setLikes, isLiked ? false : true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_8__.default, {
              postId: post._id,
              trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "spanLikesList",
                children: `${likes.length} ${likes.length === 1 ? "like" : "likes"}`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
              hidden: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                overflow: "auto",
                height: comments.length > 2 ? "200px" : "60px",
                marginBottom: "8px"
              },
              children: comments.length > 0 && comments.map(comment => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_3__.default, {
                comment: comment,
                postId: post._id,
                user: user,
                setComments: setComments
              }, comment._id, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 21
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_4__.default, {
              postId: post._id,
              user: user,
              setComments: setComments
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (ImageModal);

/***/ }),

/***/ "./components/Post/LikesList.js":
/*!**************************************!*\
  !*** ./components/Post/LikesList.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Post\\LikesList.js";









function LikesList({
  postId,
  trigger
}) {
  const {
    0: likesList,
    1: setLikesList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const getLikesList = async () => {
    setLoading(true);

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__.default}/api/posts/like/${postId}`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_6___default().get("token")
        }
      });
      setLikesList(res.data);
    } catch (error) {
      alert((0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_5__.default)(error));
    }

    setLoading(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Popup, {
    on: "click",
    onClose: () => setLikesList([]),
    onOpen: getLikesList,
    popperDependencies: [likesList],
    trigger: trigger,
    wide: true,
    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_8__.LikesPlaceHolder, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: likesList.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          overflow: "auto",
          maxHeight: "15rem",
          height: "15rem",
          minWidth: "210px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
          selection: true,
          size: "large",
          children: likesList.map(like => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
              avatar: true,
              src: like.user.profilePicUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
                onClick: () => next_router__WEBPACK_IMPORTED_MODULE_7___default().push(`/${like.user.username}`),
                as: "a",
                content: like.user.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 21
            }, this)]
          }, like._id, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 19
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, this)
    }, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LikesList);

/***/ }),

/***/ "./components/Post/NoImageModal.js":
/*!*****************************************!*\
  !*** ./components/Post/NoImageModal.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");

var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Post\\NoImageModal.js";









function NoImageModal({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {
    fluid: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
        floated: "left",
        avatar: true,
        src: post.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: `/${post.user.username}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: post.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
        children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__.default)(post.createdAt)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
        content: post.location
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 27
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {
        style: {
          fontSize: "17px",
          letterSpacing: "0.1px",
          wordSpacing: "0.35px"
        },
        children: post.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
      extra: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: isLiked ? "heart" : "heart outline",
        color: "red",
        style: {
          cursor: "pointer"
        },
        onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_7__.likePost)(post._id, user._id, setLikes, isLiked ? false : true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_8__.default, {
        postId: post._id,
        trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "spanLikesList",
          children: `${likes.length} ${likes.length === 1 ? "like" : "likes"}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          overflow: "auto",
          height: comments.length > 2 ? "200px" : "60px",
          marginBottom: "8px"
        },
        children: comments.length > 0 && comments.map(comment => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_3__.default, {
          comment: comment,
          postId: post._id,
          user: user,
          setComments: setComments
        }, comment._id, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_4__.default, {
        postId: post._id,
        user: user,
        setComments: setComments
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (NoImageModal);

/***/ }),

/***/ "./components/Post/PostComments.js":
/*!*****************************************!*\
  !*** ./components/Post/PostComments.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Post\\PostComments.js";





function PostComments({
  comment,
  user,
  setComments,
  postId
}) {
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Group, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Avatar, {
          src: comment.user.profilePicUrl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Content, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Author, {
            as: "a",
            href: `/${comment.user.username}`,
            children: comment.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Metadata, {
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(comment.date)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Text, {
            children: comment.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Actions, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Action, {
              children: (user.role === "root" || comment.user._id === user._id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                disabled: disabled,
                color: "red",
                name: "trash",
                onClick: async () => {
                  setDisabled(true);
                  await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_4__.deleteComment)(postId, comment._id, setComments);
                  setDisabled(false);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (PostComments);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Post/CreatePost */ "./components/Post/CreatePost.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-infinite-scroll-component */ "react-infinite-scroll-component");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\pages\\index.js";













function Index({
  user,
  postsData,
  errorLoading
}) {
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(postsData);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: pageNumber,
    1: setPageNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    document.title = `Welcome, ${user.name.split(" ")[0]}`;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]); // 可以直接用get请求对应资源，也可以增加 params

  const fetchDataOnScroll = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/posts`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_12___default().get("token")
        },
        params: {
          pageNumber
        }
      });
      if (res.data.length === 0) setHasMore(false);
      setPosts(prev => [...prev, ...res.data]);
      setPageNumber(prev => prev + 1);
    } catch (error) {
      alert("Error fetching Posts");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showToastr && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_9__.PostDeleteToastr, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 22
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__.default, {
        user: user,
        setPosts: setPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), posts.length === 0 || errorLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__.NoPosts, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, this) :
      /*#__PURE__*/
      // 无限下拉滚动条
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {
        hasMore: hasMore,
        next: fetchDataOnScroll,
        loader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.PlaceHolderPosts, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this),
        endMessage: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.EndMessage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }, this),
        dataLength: posts.length,
        children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_5__.default, {
          post: post,
          user: user,
          setPosts: setPosts,
          setShowToastr: setShowToastr
        }, post._id, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

Index.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_7__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/posts`, {
      headers: {
        Authorization: token
      },
      params: {
        pageNumber: 1
      }
    });
    return {
      postsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/calculateTime.js":
/*!********************************!*\
  !*** ./utils/calculateTime.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\utils\\calculateTime.js";



const calculateTime = createdAt => {
  const today = moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now());
  const postDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(createdAt);
  const diffInHours = today.diff(postDate, "hours");

  if (diffInHours < 24) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["Today ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
        format: "hh:mm A",
        children: createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }, undefined)]
    }, void 0, true);
  } else if (diffInHours > 24 && diffInHours < 36) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["Yesterday ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
        format: "hh:mm A",
        children: createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }, undefined)]
    }, void 0, true);
  } else if (diffInHours > 36) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
      format: "DD/MM/YYYY hh:mm A",
      children: createdAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculateTime);

/***/ }),

/***/ "./utils/postActions.js":
/*!******************************!*\
  !*** ./utils/postActions.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitNewPost": function() { return /* binding */ submitNewPost; },
/* harmony export */   "deletePost": function() { return /* binding */ deletePost; },
/* harmony export */   "likePost": function() { return /* binding */ likePost; },
/* harmony export */   "postComment": function() { return /* binding */ postComment; },
/* harmony export */   "deleteComment": function() { return /* binding */ deleteComment; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/posts`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token")
  }
});
const submitNewPost = async (text, location, picUrl, setPosts, setNewPost, setError) => {
  try {
    const res = await Axios.post("/", {
      text,
      location,
      picUrl
    });
    setPosts(prev => [res.data, ...prev]);
    setNewPost({
      text: "",
      location: ""
    });
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }
};
const deletePost = async (postId, setPosts, setShowToastr) => {
  try {
    await Axios.delete(`/${postId}`);
    setPosts(prev => prev.filter(post => post._id !== postId));
    setShowToastr(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const likePost = async (postId, userId, setLikes, like = true) => {
  try {
    if (like) {
      await Axios.post(`/like/${postId}`);
      setLikes(prev => [...prev, {
        user: userId
      }]);
    } else if (!like) {
      await Axios.put(`/unlike/${postId}`);
      setLikes(prev => prev.filter(like => like.user !== userId));
    }
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const postComment = async (postId, user, text, setComments, setText) => {
  try {
    const res = await Axios.post(`/comment/${postId}`, {
      text
    });
    const newComment = {
      _id: res.data,
      user,
      text,
      date: Date.now()
    };
    setComments(prev => [newComment, ...prev]);
    setText("");
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const deleteComment = async (postId, commentId, setComments) => {
  try {
    await Axios.delete(`/${postId}/${commentId}`);
    setComments(prev => prev.filter(comment => comment._id !== commentId));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};

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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

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

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-infinite-scroll-component");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGEuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvUGxhY2VIb2xkZXJHcm91cC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9Ub2FzdHIuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9Db21tZW50SW5wdXRGaWVsZC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvQ3JlYXRlUG9zdC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvSW1hZ2VNb2RhbC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvTGlrZXNMaXN0LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9Ob0ltYWdlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3RDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9jYWxjdWxhdGVUaW1lLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3Bvc3RBY3Rpb25zLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiTm9Qcm9maWxlUG9zdHMiLCJOb0ZvbGxvd0RhdGEiLCJwcm9maWxlTmFtZSIsImZvbGxvd2Vyc0NvbXBvbmVudCIsImZvbGxvd2luZ0NvbXBvbmVudCIsInNwbGl0IiwiTm9NZXNzYWdlcyIsIk5vUG9zdHMiLCJQbGFjZUhvbGRlclBvc3RzIiwicmFuZ2UiLCJtYXAiLCJpdGVtIiwiUGxhY2VIb2xkZXJTdWdnZXN0aW9ucyIsIlBsYWNlSG9sZGVyTm90aWZpY2F0aW9ucyIsIkVuZE1lc3NhZ2UiLCJMaWtlc1BsYWNlSG9sZGVyIiwibWluV2lkdGgiLCJQb3N0RGVsZXRlVG9hc3RyIiwidG9hc3QiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiRXJyb3JUb2FzdHIiLCJlcnJvciIsIk1zZ1NlbnRUb2FzdHIiLCJDYXJkUG9zdCIsInBvc3QiLCJ1c2VyIiwic2V0UG9zdHMiLCJzZXRTaG93VG9hc3RyIiwibGlrZXMiLCJzZXRMaWtlcyIsInVzZVN0YXRlIiwiaXNMaWtlZCIsImxlbmd0aCIsImZpbHRlciIsImxpa2UiLCJfaWQiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwic2V0RXJyb3IiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJhZGRQcm9wc1RvTW9kYWwiLCJwaWNVcmwiLCJjdXJzb3IiLCJwcm9maWxlUGljVXJsIiwicm9sZSIsImRlbGV0ZVBvc3QiLCJ1c2VybmFtZSIsIm5hbWUiLCJjYWxjdWxhdGVUaW1lIiwiY3JlYXRlZEF0IiwibG9jYXRpb24iLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJ3b3JkU3BhY2luZyIsInRleHQiLCJsaWtlUG9zdCIsIm1hcmdpbkxlZnQiLCJjb21tZW50IiwiaSIsIkNvbW1lbnRJbnB1dEZpZWxkIiwicG9zdElkIiwic2V0VGV4dCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdENvbW1lbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yIiwiaWNvbiIsImRpc2FibGVkIiwiQ3JlYXRlUG9zdCIsIm5ld1Bvc3QiLCJzZXROZXdQb3N0IiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwibWVkaWEiLCJzZXRNZWRpYSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsImhhbmRsZUNoYW5nZSIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicHJldiIsImFkZFN0eWxlcyIsInRleHRBbGlnbiIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsImJvcmRlckNvbG9yIiwiaGFuZGxlU3VibWl0IiwidXBsb2FkUGljIiwic3VibWl0TmV3UG9zdCIsImRpc3BsYXkiLCJjdXJyZW50IiwiY2xpY2siLCJkcm9wcGVkRmlsZSIsIkFycmF5IiwiZnJvbSIsImRhdGFUcmFuc2ZlciIsImJhY2tncm91bmRDb2xvciIsIkltYWdlTW9kYWwiLCJvdmVyZmxvdyIsIm1hcmdpbkJvdHRvbSIsIkxpa2VzTGlzdCIsInRyaWdnZXIiLCJsaWtlc0xpc3QiLCJzZXRMaWtlc0xpc3QiLCJnZXRMaWtlc0xpc3QiLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImRhdGEiLCJhbGVydCIsImNhdGNoRXJyb3JzIiwibWF4SGVpZ2h0IiwiUm91dGVyIiwiTm9JbWFnZU1vZGFsIiwiUG9zdENvbW1lbnRzIiwic2V0RGlzYWJsZWQiLCJkYXRlIiwiZGVsZXRlQ29tbWVudCIsIkluZGV4IiwicG9zdHNEYXRhIiwiZXJyb3JMb2FkaW5nIiwicG9zdHMiLCJzaG93VG9hc3RyIiwiaGFzTW9yZSIsInNldEhhc01vcmUiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwidGl0bGUiLCJzZXRUaW1lb3V0IiwiZmV0Y2hEYXRhT25TY3JvbGwiLCJwYXJhbXMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ0b2tlbiIsInBhcnNlQ29va2llcyIsInRvZGF5IiwibW9tZW50IiwiRGF0ZSIsIm5vdyIsInBvc3REYXRlIiwiZGlmZkluSG91cnMiLCJkaWZmIiwiQXhpb3MiLCJiYXNlVVJMIiwiZXJyb3JNc2ciLCJkZWxldGUiLCJ1c2VySWQiLCJwdXQiLCJuZXdDb21tZW50IiwiY29tbWVudElkIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJvY2VzcyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxjQUFjLEdBQUcsbUJBQzVCO0FBQUEsMEJBQ0UsOERBQUMsc0RBQUQ7QUFBUyxRQUFJLE1BQWI7QUFBYyxRQUFJLEVBQUMsS0FBbkI7QUFBeUIsVUFBTSxFQUFDLE9BQWhDO0FBQXdDLFdBQU8sRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxxREFBRDtBQUFRLFFBQUksRUFBQywyQkFBYjtBQUF5QyxXQUFPLEVBQUMsU0FBakQ7QUFBMkQsTUFBRSxFQUFDLEdBQTlEO0FBQWtFLFFBQUksRUFBQztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxnQkFESztBQU9BLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQzNCQyxhQUQyQjtBQUUzQkMsb0JBQWtCLEdBQUcsSUFGTTtBQUczQkMsb0JBQWtCLEdBQUc7QUFITSxDQUFELGtCQUsxQjtBQUFBLGFBQ0dELGtCQUFrQixpQkFDakIsOERBQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUMsY0FEUDtBQUVFLFFBQUksTUFGTjtBQUdFLFdBQU8sRUFBRyxHQUFFRCxXQUFXLENBQUNHLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsSUFBNEIsMEJBQTJCO0FBSHJFO0FBQUE7QUFBQTtBQUFB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O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IE5vUHJvZmlsZVBvc3RzID0gKCkgPT4gKFxuICA8PlxuICAgIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIlNvcnJ5XCIgY29udGVudD1cIlVzZXIgaGFzIG5vdCBwb3N0ZWQgYW55dGhpbmcgeWV0IVwiIC8+XG4gICAgPEJ1dHRvbiBpY29uPVwibG9uZyBhcnJvdyBhbHRlcm5hdGUgbGVmdFwiIGNvbnRlbnQ9XCJHbyBCYWNrXCIgYXM9XCJhXCIgaHJlZj1cIi9cIiAvPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBjb25zdCBOb0ZvbGxvd0RhdGEgPSAoe1xuICBwcm9maWxlTmFtZSxcbiAgZm9sbG93ZXJzQ29tcG9uZW50ID0gdHJ1ZSxcbiAgZm9sbG93aW5nQ29tcG9uZW50ID0gdHJ1ZVxufSkgPT4gKFxuICA8PlxuICAgIHtmb2xsb3dlcnNDb21wb25lbnQgJiYgKFxuICAgICAgPE1lc3NhZ2VcbiAgICAgICAgaWNvbj1cInVzZXIgb3V0bGluZVwiXG4gICAgICAgIGluZm9cbiAgICAgICAgY29udGVudD17YCR7cHJvZmlsZU5hbWUuc3BsaXQoXCIgXCIpWzBdICsgXCIgZG9lcyBub3QgaGF2ZSBmb2xsb3dlcnNcIn1gfVxuICAgICAgLz5cbiAgICApfVxuXG4gICAge2ZvbGxvd2luZ0NvbXBvbmVudCAmJiAoXG4gICAgICA8TWVzc2FnZVxuICAgICAgICBpY29uPVwidXNlciBvdXRsaW5lXCJcbiAgICAgICAgaW5mb1xuICAgICAgICBjb250ZW50PXtgJHtwcm9maWxlTmFtZS5zcGxpdChcIiBcIilbMF0gKyBcIiBkb2VzIG5vdCBmb2xsb3cgYW55IHVzZXJzXCJ9YH1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTm9NZXNzYWdlcyA9ICgpID0+IChcbiAgPE1lc3NhZ2VcbiAgICBpbmZvXG4gICAgaWNvbj1cInRlbGVncmFtIHBsYW5lXCJcbiAgICBoZWFkZXI9XCJTb3JyeVwiXG4gICAgY29udGVudD1cIllvdSBoYXZlIG5vdCBtZXNzYWdlZCBhbnlvbmUgeWV0LlNlYXJjaCBhYm92ZSB0byBtZXNzYWdlIHNvbWVvbmUhXCJcbiAgLz5cbik7XG5cbmV4cG9ydCBjb25zdCBOb1Bvc3RzID0gKCkgPT4gKFxuICA8TWVzc2FnZVxuICAgIGluZm9cbiAgICBpY29uPVwibWVoXCJcbiAgICBoZWFkZXI9XCJIZXkhXCJcbiAgICBjb250ZW50PVwiTm8gUG9zdHMuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBmb2xsb3dlZCBzb21lb25lLlwiXG4gIC8+XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgUGxhY2Vob2xkZXIsXG4gIERpdmlkZXIsXG4gIExpc3QsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ29udGFpbmVyLFxuICBJY29uXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBjb25zdCBQbGFjZUhvbGRlclBvc3RzID0gKCkgPT5cbiAgcmFuZ2UoMSwgMykubWFwKGl0ZW0gPT4gKFxuICAgIDw+XG4gICAgICA8UGxhY2Vob2xkZXIga2V5PXtpdGVtfSBmbHVpZD5cbiAgICAgICAgPFBsYWNlaG9sZGVyLkhlYWRlciBpbWFnZT5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgIDwvUGxhY2Vob2xkZXIuSGVhZGVyPlxuICAgICAgICA8UGxhY2Vob2xkZXIuUGFyYWdyYXBoPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgIDwvUGxhY2Vob2xkZXIuUGFyYWdyYXBoPlxuICAgICAgPC9QbGFjZWhvbGRlcj5cbiAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgIDwvPlxuICApKTtcblxuZXhwb3J0IGNvbnN0IFBsYWNlSG9sZGVyU3VnZ2VzdGlvbnMgPSAoKSA9PiAoXG4gIDw+XG4gICAgPExpc3QuSXRlbT5cbiAgICAgIDxDYXJkIGNvbG9yPVwicmVkXCI+XG4gICAgICAgIDxQbGFjZWhvbGRlcj5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIuSW1hZ2Ugc3F1YXJlIC8+XG4gICAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyPlxuICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkhlYWRlcj5cbiAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwibWVkaXVtXCIgLz5cbiAgICAgICAgICAgIDwvUGxhY2Vob2xkZXIuSGVhZGVyPlxuICAgICAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxuXG4gICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNpcmN1bGFyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgaWNvbj1cImFkZCB1c2VyXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJGb2xsb3dcIlxuICAgICAgICAgICAgY29sb3I9XCJ0d2l0dGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0xpc3QuSXRlbT5cbiAgPC8+XG4pO1xuXG5leHBvcnQgY29uc3QgUGxhY2VIb2xkZXJOb3RpZmljYXRpb25zID0gKCkgPT5cbiAgcmFuZ2UoMSwgMTApLm1hcChpdGVtID0+IChcbiAgICA8PlxuICAgICAgPFBsYWNlaG9sZGVyIGtleT17aXRlbX0+XG4gICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXIgaW1hZ2U+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxuICAgICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cbiAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICA8RGl2aWRlciBoaWRkZW4gLz5cbiAgICA8Lz5cbiAgKSk7XG5cbmV4cG9ydCBjb25zdCBFbmRNZXNzYWdlID0gKCkgPT4gKFxuICA8Q29udGFpbmVyIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgIDxJY29uIG5hbWU9XCJyZWZyZXNoXCIgc2l6ZT1cImxhcmdlXCIgLz5cbiAgICA8RGl2aWRlciBoaWRkZW4gLz5cbiAgPC9Db250YWluZXI+XG4pO1xuXG5leHBvcnQgY29uc3QgTGlrZXNQbGFjZUhvbGRlciA9ICgpID0+XG4gIHJhbmdlKDEsIDYpLm1hcChpdGVtID0+IChcbiAgICA8UGxhY2Vob2xkZXIga2V5PXtpdGVtfSBzdHlsZT17eyBtaW5XaWR0aDogXCIyMDBweFwiIH19PlxuICAgICAgPFBsYWNlaG9sZGVyLkhlYWRlciBpbWFnZT5cbiAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwiZnVsbFwiIC8+XG4gICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cbiAgICA8L1BsYWNlaG9sZGVyPlxuICApKTtcbiIsImltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5leHBvcnQgY29uc3QgUG9zdERlbGV0ZVRvYXN0ciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VG9hc3RDb250YWluZXJcbiAgICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXG4gICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICBydGw9e2ZhbHNlfVxuICAgICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgICAgZHJhZ2dhYmxlXG4gICAgICBwYXVzZU9uSG92ZXI9e2ZhbHNlfT5cbiAgICAgIHt0b2FzdC5pbmZvKFwiRGVsZXRlZCBTdWNjZXNzZnVsbHlcIiwge1xuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXG4gICAgICAgIGF1dG9DbG9zZTogMzAwMCxcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcbiAgICAgIH0pfVxuICAgIDwvVG9hc3RDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgRXJyb3JUb2FzdHIgPSAoeyBlcnJvciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxuICAgICAgYXV0b0Nsb3NlPXszMDAwfVxuICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cbiAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cbiAgICAgIGNsb3NlT25DbGlja1xuICAgICAgcnRsPXtmYWxzZX1cbiAgICAgIHBhdXNlT25Gb2N1c0xvc3NcbiAgICAgIGRyYWdnYWJsZVxuICAgICAgcGF1c2VPbkhvdmVyPXtmYWxzZX0+XG4gICAgICB7dG9hc3QuZXJyb3IoZXJyb3IsIHtcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWNlbnRlclwiLFxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkXG4gICAgICB9KX1cbiAgICA8L1RvYXN0Q29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IE1zZ1NlbnRUb2FzdHIgPSAoKSA9PiAoXG4gIDxUb2FzdENvbnRhaW5lclxuICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXG4gICAgYXV0b0Nsb3NlPXszMDAwfVxuICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XG4gICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgIGNsb3NlT25DbGlja1xuICAgIHJ0bD17ZmFsc2V9XG4gICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgIGRyYWdnYWJsZVxuICAgIHBhdXNlT25Ib3Zlcj17ZmFsc2V9PlxuICAgIHt0b2FzdC5zdWNjZXNzKFwiU2VudCBzdWNjZXNzZnVsbHlcIiwge1xuICAgICAgcG9zaXRpb246IFwiYm90dG9tLWNlbnRlclwiLFxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkXG4gICAgfSl9XG4gIDwvVG9hc3RDb250YWluZXI+XG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBJY29uLFxuICBJbWFnZSxcbiAgRGl2aWRlcixcbiAgU2VnbWVudCxcbiAgQnV0dG9uLFxuICBQb3B1cCxcbiAgSGVhZGVyLFxuICBNb2RhbCxcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gXCIuL1Bvc3RDb21tZW50c1wiO1xuaW1wb3J0IENvbW1lbnRJbnB1dEZpZWxkIGZyb20gXCIuL0NvbW1lbnRJbnB1dEZpZWxkXCI7XG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZGVsZXRlUG9zdCwgbGlrZVBvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcbmltcG9ydCBMaWtlc0xpc3QgZnJvbSBcIi4vTGlrZXNMaXN0XCI7XG5pbXBvcnQgSW1hZ2VNb2RhbCBmcm9tIFwiLi9JbWFnZU1vZGFsXCI7XG5pbXBvcnQgTm9JbWFnZU1vZGFsIGZyb20gXCIuL05vSW1hZ2VNb2RhbFwiO1xuXG5mdW5jdGlvbiBDYXJkUG9zdCh7IHBvc3QsIHVzZXIsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyIH0pIHtcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZShwb3N0Lmxpa2VzKTtcblxuICBjb25zdCBpc0xpa2VkID1cbiAgICBsaWtlcy5sZW5ndGggPiAwICYmXG4gICAgbGlrZXMuZmlsdGVyKChsaWtlKSA9PiBsaWtlLnVzZXIgPT09IHVzZXIuX2lkKS5sZW5ndGggPiAwO1xuXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUocG9zdC5jb21tZW50cyk7XG5cbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGFkZFByb3BzVG9Nb2RhbCA9ICgpID0+ICh7XG4gICAgcG9zdCxcbiAgICB1c2VyLFxuICAgIHNldExpa2VzLFxuICAgIGxpa2VzLFxuICAgIGlzTGlrZWQsXG4gICAgY29tbWVudHMsXG4gICAgc2V0Q29tbWVudHMsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93TW9kYWwgJiYgKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBvcGVuPXtzaG93TW9kYWx9XG4gICAgICAgICAgY2xvc2VJY29uXG4gICAgICAgICAgY2xvc2VPbkRpbW1lckNsaWNrXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxuICAgICAgICAgICAge3Bvc3QucGljVXJsID8gKFxuICAgICAgICAgICAgICA8SW1hZ2VNb2RhbCB7Li4uYWRkUHJvcHNUb01vZGFsKCl9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8Tm9JbWFnZU1vZGFsIHsuLi5hZGRQcm9wc1RvTW9kYWwoKX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxuICAgICAgICA8L01vZGFsPlxuICAgICAgKX1cblxuICAgICAgPFNlZ21lbnQgYmFzaWM+XG4gICAgICAgIDxDYXJkIGNvbG9yPVwidGVhbFwiIGZsdWlkPlxuICAgICAgICAgIHtwb3N0LnBpY1VybCAmJiAoXG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtwb3N0LnBpY1VybH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICBmbG9hdGVkPVwibGVmdFwiXG4gICAgICAgICAgICAgIHdyYXBwZWRcbiAgICAgICAgICAgICAgdWk9e2ZhbHNlfVxuICAgICAgICAgICAgICBhbHQ9XCJQb3N0SW1hZ2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGZsb2F0ZWQ9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgc3JjPXtwb3N0LnVzZXIucHJvZmlsZVBpY1VybH1cbiAgICAgICAgICAgICAgYXZhdGFyXG4gICAgICAgICAgICAgIGNpcmN1bGFyXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7KHVzZXIucm9sZSA9PT0gXCJyb290XCIgfHwgcG9zdC51c2VyLl9pZCA9PT0gdXNlci5faWQpICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgICAgIG9uPVwiY2xpY2tcIlxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AgcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9kZWxldGVJY29uLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtaW5pXCJcbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoNFwiIGNvbnRlbnQ9XCJBcmUgeW91IHN1cmU/XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxwPlRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZSE8L3A+XG5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2hcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiRGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGVQb3N0KHBvc3QuX2lkLCBzZXRQb3N0cywgc2V0U2hvd1RvYXN0cilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QudXNlci51c2VybmFtZX1gfT5cbiAgICAgICAgICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuXG4gICAgICAgICAgICA8Q2FyZC5NZXRhPntjYWxjdWxhdGVUaW1lKHBvc3QuY3JlYXRlZEF0KX08L0NhcmQuTWV0YT5cblxuICAgICAgICAgICAge3Bvc3QubG9jYXRpb24gJiYgPENhcmQuTWV0YSBjb250ZW50PXtwb3N0LmxvY2F0aW9ufSAvPn1cblxuICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxN3B4XCIsXG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjFweFwiLFxuICAgICAgICAgICAgICAgIHdvcmRTcGFjaW5nOiBcIjAuMzVweFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cG9zdC50ZXh0fVxuICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuXG4gICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIG5hbWU9e2lzTGlrZWQgPyBcImhlYXJ0XCIgOiBcImhlYXJ0IG91dGxpbmVcIn1cbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgbGlrZVBvc3QocG9zdC5faWQsIHVzZXIuX2lkLCBzZXRMaWtlcywgaXNMaWtlZCA/IGZhbHNlIDogdHJ1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPExpa2VzTGlzdFxuICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICBsaWtlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5MaWtlc0xpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge2Ake2xpa2VzLmxlbmd0aH0gJHtsaWtlcy5sZW5ndGggPT09IDEgPyBcImxpa2VcIiA6IFwibGlrZXNcIn1gfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnQgb3V0bGluZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiN3B4XCIgfX1cbiAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgIGNvbW1lbnRzLm1hcChcbiAgICAgICAgICAgICAgICAoY29tbWVudCwgaSkgPT5cbiAgICAgICAgICAgICAgICAgIGkgPCAzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RDb21tZW50c1xuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMyAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb250ZW50PVwiVmlldyBNb3JlXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxuICAgICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cblxuICAgICAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkXG4gICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XG4gICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvU2VnbWVudD5cbiAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkUG9zdDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgcG9zdENvbW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcblxuZnVuY3Rpb24gQ29tbWVudElucHV0RmllbGQoeyBwb3N0SWQsIHVzZXIsIHNldENvbW1lbnRzIH0pIHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICByZXBseVxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgYXdhaXQgcG9zdENvbW1lbnQocG9zdElkLCB1c2VyLCB0ZXh0LCBzZXRDb21tZW50cywgc2V0VGV4dCk7XG5cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGb3JtLklucHV0XG4gICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBDb21tZW50XCJcbiAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgICAgICAgIGljb246IFwiZWRpdFwiLFxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRleHQgPT09IFwiXCIgfHwgbG9hZGluZyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50SW5wdXRGaWVsZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIEltYWdlLCBEaXZpZGVyLCBNZXNzYWdlLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgdXBsb2FkUGljIGZyb20gXCIuLi8uLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnlcIjtcbmltcG9ydCB7IHN1Ym1pdE5ld1Bvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcblxuZnVuY3Rpb24gQ3JlYXRlUG9zdCh7IHVzZXIsIHNldFBvc3RzIH0pIHtcbiAgY29uc3QgW25ld1Bvc3QsIHNldE5ld1Bvc3RdID0gdXNlU3RhdGUoeyB0ZXh0OiBcIlwiLCBsb2NhdGlvbjogXCJcIiB9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFttZWRpYVByZXZpZXcsIHNldE1lZGlhUHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXQ7XG5cbiAgICBpZiAobmFtZSA9PT0gXCJtZWRpYVwiKSB7XG4gICAgICBzZXRNZWRpYShmaWxlc1swXSk7XG4gICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xuICAgIH1cblxuICAgIHNldE5ld1Bvc3QocHJldiA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcbiAgfTtcblxuICBjb25zdCBhZGRTdHlsZXMgPSAoKSA9PiAoe1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBoZWlnaHQ6IFwiMTUwcHhcIixcbiAgICB3aWR0aDogXCIxNTBweFwiLFxuICAgIGJvcmRlcjogXCJkb3R0ZWRcIixcbiAgICBwYWRkaW5nVG9wOiBtZWRpYSA9PT0gbnVsbCAmJiBcIjYwcHhcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGJvcmRlckNvbG9yOiBoaWdobGlnaHRlZCA/IFwiZ3JlZW5cIiA6IFwiYmxhY2tcIlxuICB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBsZXQgcGljVXJsO1xuXG4gICAgaWYgKG1lZGlhICE9PSBudWxsKSB7XG4gICAgICBwaWNVcmwgPSBhd2FpdCB1cGxvYWRQaWMobWVkaWEpO1xuICAgICAgaWYgKCFwaWNVcmwpIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybiBzZXRFcnJvcihcIkVycm9yIFVwbG9hZGluZyBJbWFnZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCBzdWJtaXROZXdQb3N0KFxuICAgICAgbmV3UG9zdC50ZXh0LFxuICAgICAgbmV3UG9zdC5sb2NhdGlvbixcbiAgICAgIHBpY1VybCxcbiAgICAgIHNldFBvc3RzLFxuICAgICAgc2V0TmV3UG9zdCxcbiAgICAgIHNldEVycm9yXG4gICAgKTtcblxuICAgIHNldE1lZGlhKG51bGwpO1xuICAgIHNldE1lZGlhUHJldmlldyhudWxsKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybSBlcnJvcj17ZXJyb3IgIT09IG51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgIGVycm9yXG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvcihudWxsKX1cbiAgICAgICAgICBjb250ZW50PXtlcnJvcn1cbiAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICAgICAgPEltYWdlIHNyYz17dXNlci5wcm9maWxlUGljVXJsfSBjaXJjdWxhciBhdmF0YXIgaW5saW5lIC8+XG4gICAgICAgICAgPEZvcm0uVGV4dEFyZWFcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdHMgSGFwcGVuaW5nXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LnRleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcm93cz17NH1cbiAgICAgICAgICAgIHdpZHRoPXsxNH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG5cbiAgICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LmxvY2F0aW9ufVxuICAgICAgICAgICAgbmFtZT1cImxvY2F0aW9uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBsYWJlbD1cIkFkZCBMb2NhdGlvblwiXG4gICAgICAgICAgICBpY29uPVwibWFwIG1hcmtlciBhbHRlcm5hdGVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXYW50IHRvIGFkZCBMb2NhdGlvbj9cIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cbiAgICAgICAgICBzdHlsZT17YWRkU3R5bGVzKCl9XG4gICAgICAgICAgb25EcmFnT3Zlcj17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRHJhZ0xlYXZlPXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRHJvcD17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcblxuICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7bWVkaWEgPT09IG51bGwgPyAoXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIHNpemU9XCJiaWdcIiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTUwcHhcIiwgd2lkdGg6IFwiMTUwcHhcIiB9fVxuICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxuICAgICAgICAgICAgICAgIGFsdD1cIlBvc3RJbWFnZVwiXG4gICAgICAgICAgICAgICAgY2VudGVyZWRcbiAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICBkaXNhYmxlZD17bmV3UG9zdC50ZXh0ID09PSBcIlwiIHx8IGxvYWRpbmd9XG4gICAgICAgICAgY29udGVudD17PHN0cm9uZz5Qb3N0PC9zdHJvbmc+fVxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMURBMUYyXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICBpY29uPVwic2VuZFwiXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBvc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCwgR3JpZCwgSW1hZ2UsIENhcmQsIEljb24sIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBQb3N0Q29tbWVudHMgZnJvbSBcIi4vUG9zdENvbW1lbnRzXCI7XG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSBcIi4vQ29tbWVudElucHV0RmllbGRcIjtcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBsaWtlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xuaW1wb3J0IExpa2VzTGlzdCBmcm9tIFwiLi9MaWtlc0xpc3RcIjtcblxuZnVuY3Rpb24gSW1hZ2VNb2RhbCh7XG4gIHBvc3QsXG4gIHVzZXIsXG4gIHNldExpa2VzLFxuICBsaWtlcyxcbiAgaXNMaWtlZCxcbiAgY29tbWVudHMsXG4gIHNldENvbW1lbnRzXG59KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHcmlkIGNvbHVtbnM9ezJ9IHN0YWNrYWJsZSByZWxheGVkPlxuICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQgaW1hZ2U+XG4gICAgICAgICAgICA8SW1hZ2Ugd3JhcHBlZCBzaXplPVwibGFyZ2VcIiBzcmM9e3Bvc3QucGljVXJsfSAvPlxuICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgPENhcmQgZmx1aWQ+XG4gICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICA8SW1hZ2UgZmxvYXRlZD1cImxlZnRcIiBhdmF0YXIgc3JjPXtwb3N0LnVzZXIucHJvZmlsZVBpY1VybH0gLz5cblxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QudXNlci51c2VybmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnVzZXIubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuXG4gICAgICAgICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxuXG4gICAgICAgICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XG5cbiAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjFweFwiLFxuICAgICAgICAgICAgICAgICAgd29yZFNwYWNpbmc6IFwiMC4zNXB4XCJcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7cG9zdC50ZXh0fVxuICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cblxuICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBuYW1lPXtpc0xpa2VkID8gXCJoZWFydFwiIDogXCJoZWFydCBvdXRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgbGlrZVBvc3QocG9zdC5faWQsIHVzZXIuX2lkLCBzZXRMaWtlcywgaXNMaWtlZCA/IGZhbHNlIDogdHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPExpa2VzTGlzdFxuICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XG4gICAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgICBsaWtlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbkxpa2VzTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtgJHtsaWtlcy5sZW5ndGh9ICR7bGlrZXMubGVuZ3RoID09PSAxID8gXCJsaWtlXCIgOiBcImxpa2VzXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cblxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogY29tbWVudHMubGVuZ3RoID4gMiA/IFwiMjAwcHhcIiA6IFwiNjBweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLm1hcChjb21tZW50ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RDb21tZW50c1xuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxDb21tZW50SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XG4gICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICA8L0dyaWQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpc3QsIFBvcHVwLCBJbWFnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi4vLi4vdXRpbHMvY2F0Y2hFcnJvcnNcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExpa2VzUGxhY2VIb2xkZXIgfSBmcm9tIFwiLi4vTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXBcIjtcblxuZnVuY3Rpb24gTGlrZXNMaXN0KHsgcG9zdElkLCB0cmlnZ2VyIH0pIHtcbiAgY29uc3QgW2xpa2VzTGlzdCwgc2V0TGlrZXNMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldExpa2VzTGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzL2xpa2UvJHtwb3N0SWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxuICAgICAgfSk7XG4gICAgICBzZXRMaWtlc0xpc3QocmVzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQb3B1cFxuICAgICAgb249XCJjbGlja1wiXG4gICAgICBvbkNsb3NlPXsoKSA9PiBzZXRMaWtlc0xpc3QoW10pfVxuICAgICAgb25PcGVuPXtnZXRMaWtlc0xpc3R9XG4gICAgICBwb3BwZXJEZXBlbmRlbmNpZXM9e1tsaWtlc0xpc3RdfVxuICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cbiAgICAgIHdpZGVcbiAgICA+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPExpa2VzUGxhY2VIb2xkZXIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2xpa2VzTGlzdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjE1cmVtXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cmVtXCIsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMjEwcHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpc3Qgc2VsZWN0aW9uIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgICAgIHtsaWtlc0xpc3QubWFwKChsaWtlKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17bGlrZS5faWR9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYXZhdGFyIHNyYz17bGlrZS51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvJHtsaWtlLnVzZXIudXNlcm5hbWV9YCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bGlrZS51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvUG9wdXA+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpa2VzTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsLCBJbWFnZSwgQ2FyZCwgSWNvbiwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tIFwiLi9Qb3N0Q29tbWVudHNcIjtcbmltcG9ydCBDb21tZW50SW5wdXRGaWVsZCBmcm9tIFwiLi9Db21tZW50SW5wdXRGaWVsZFwiO1xuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGxpa2VQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xuXG5mdW5jdGlvbiBOb0ltYWdlTW9kYWwoe1xuICBwb3N0LFxuICB1c2VyLFxuICBzZXRMaWtlcyxcbiAgbGlrZXMsXG4gIGlzTGlrZWQsXG4gIGNvbW1lbnRzLFxuICBzZXRDb21tZW50c1xufSkge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIGZsdWlkPlxuICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgPEltYWdlIGZsb2F0ZWQ9XCJsZWZ0XCIgYXZhdGFyIHNyYz17cG9zdC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XG5cbiAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9DYXJkLkhlYWRlcj5cblxuICAgICAgICA8Q2FyZC5NZXRhPntjYWxjdWxhdGVUaW1lKHBvc3QuY3JlYXRlZEF0KX08L0NhcmQuTWV0YT5cblxuICAgICAgICB7cG9zdC5sb2NhdGlvbiAmJiA8Q2FyZC5NZXRhIGNvbnRlbnQ9e3Bvc3QubG9jYXRpb259IC8+fVxuXG4gICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xcHhcIixcbiAgICAgICAgICAgIHdvcmRTcGFjaW5nOiBcIjAuMzVweFwiXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3Bvc3QudGV4dH1cbiAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgPC9DYXJkLkNvbnRlbnQ+XG5cbiAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgbmFtZT17aXNMaWtlZCA/IFwiaGVhcnRcIiA6IFwiaGVhcnQgb3V0bGluZVwifVxuICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgIGxpa2VQb3N0KHBvc3QuX2lkLCB1c2VyLl9pZCwgc2V0TGlrZXMsIGlzTGlrZWQgPyBmYWxzZSA6IHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxMaWtlc0xpc3RcbiAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgbGlrZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5MaWtlc0xpc3RcIj5cbiAgICAgICAgICAgICAgICB7YCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aCA9PT0gMSA/IFwibGlrZVwiIDogXCJsaWtlc1wifWB9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IGNvbW1lbnRzLmxlbmd0aCA+IDIgPyBcIjIwMHB4XCIgOiBcIjYwcHhcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIlxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBjb21tZW50cy5tYXAoY29tbWVudCA9PiAoXG4gICAgICAgICAgICAgIDxQb3N0Q29tbWVudHNcbiAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxuICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XG4gICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Q29tbWVudElucHV0RmllbGQgcG9zdElkPXtwb3N0Ll9pZH0gdXNlcj17dXNlcn0gc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfSAvPlxuICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb0ltYWdlTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbW1lbnQsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XG5pbXBvcnQgeyBkZWxldGVDb21tZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIFBvc3RDb21tZW50cyh7IGNvbW1lbnQsIHVzZXIsIHNldENvbW1lbnRzLCBwb3N0SWQgfSkge1xuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29tbWVudC5Hcm91cD5cbiAgICAgICAgPENvbW1lbnQ+XG4gICAgICAgICAgPENvbW1lbnQuQXZhdGFyIHNyYz17Y29tbWVudC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XG4gICAgICAgICAgPENvbW1lbnQuQ29udGVudD5cbiAgICAgICAgICAgIDxDb21tZW50LkF1dGhvciBhcz1cImFcIiBocmVmPXtgLyR7Y29tbWVudC51c2VyLnVzZXJuYW1lfWB9PlxuICAgICAgICAgICAgICB7Y29tbWVudC51c2VyLm5hbWV9XG4gICAgICAgICAgICA8L0NvbW1lbnQuQXV0aG9yPlxuICAgICAgICAgICAgPENvbW1lbnQuTWV0YWRhdGE+e2NhbGN1bGF0ZVRpbWUoY29tbWVudC5kYXRlKX08L0NvbW1lbnQuTWV0YWRhdGE+XG5cbiAgICAgICAgICAgIDxDb21tZW50LlRleHQ+e2NvbW1lbnQudGV4dH08L0NvbW1lbnQuVGV4dD5cblxuICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9ucz5cbiAgICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9uPlxuICAgICAgICAgICAgICAgIHsodXNlci5yb2xlID09PSBcInJvb3RcIiB8fCBjb21tZW50LnVzZXIuX2lkID09PSB1c2VyLl9pZCkgJiYgKFxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxldGVDb21tZW50KHBvc3RJZCwgY29tbWVudC5faWQsIHNldENvbW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29tbWVudC5BY3Rpb24+XG4gICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9ucz5cbiAgICAgICAgICA8L0NvbW1lbnQuQ29udGVudD5cbiAgICAgICAgPC9Db21tZW50PlxuICAgICAgPC9Db21tZW50Lkdyb3VwPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29tbWVudHM7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XG5pbXBvcnQgQ3JlYXRlUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3RcIjtcbmltcG9ydCBDYXJkUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0XCI7XG5pbXBvcnQgeyBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IHsgTm9Qb3N0cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcbmltcG9ydCB7IFBvc3REZWxldGVUb2FzdHIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyXCI7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gIFBsYWNlSG9sZGVyUG9zdHMsXG4gIEVuZE1lc3NhZ2UsXG59IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9QbGFjZUhvbGRlckdyb3VwXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcblxuZnVuY3Rpb24gSW5kZXgoeyB1c2VyLCBwb3N0c0RhdGEsIGVycm9yTG9hZGluZyB9KSB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUocG9zdHNEYXRhKTtcbiAgY29uc3QgW3Nob3dUb2FzdHIsIHNldFNob3dUb2FzdHJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFzTW9yZSwgc2V0SGFzTW9yZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LnRpdGxlID0gYFdlbGNvbWUsICR7dXNlci5uYW1lLnNwbGl0KFwiIFwiKVswXX1gO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzaG93VG9hc3RyICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1RvYXN0cihmYWxzZSksIDMwMDApO1xuICB9LCBbc2hvd1RvYXN0cl0pO1xuXG4gIC8vIOWPr+S7peebtOaOpeeUqGdldOivt+axguWvueW6lOi1hOa6kO+8jOS5n+WPr+S7peWinuWKoCBwYXJhbXNcbiAgY29uc3QgZmV0Y2hEYXRhT25TY3JvbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcG9zdHNgLCB7XG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH0sXG4gICAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkgc2V0SGFzTW9yZShmYWxzZSk7XG5cbiAgICAgIHNldFBvc3RzKChwcmV2KSA9PiBbLi4ucHJldiwgLi4ucmVzLmRhdGFdKTtcbiAgICAgIHNldFBhZ2VOdW1iZXIoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoXCJFcnJvciBmZXRjaGluZyBQb3N0c1wiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dUb2FzdHIgJiYgPFBvc3REZWxldGVUb2FzdHIgLz59XG4gICAgICA8U2VnbWVudD5cbiAgICAgICAgPENyZWF0ZVBvc3QgdXNlcj17dXNlcn0gc2V0UG9zdHM9e3NldFBvc3RzfSAvPlxuICAgICAgICB7cG9zdHMubGVuZ3RoID09PSAwIHx8IGVycm9yTG9hZGluZyA/IChcbiAgICAgICAgICA8Tm9Qb3N0cyAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIC8vIOaXoOmZkOS4i+aLiea7muWKqOadoVxuICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgaGFzTW9yZT17aGFzTW9yZX1cbiAgICAgICAgICAgIG5leHQ9e2ZldGNoRGF0YU9uU2Nyb2xsfVxuICAgICAgICAgICAgbG9hZGVyPXs8UGxhY2VIb2xkZXJQb3N0cyAvPn1cbiAgICAgICAgICAgIGVuZE1lc3NhZ2U9ezxFbmRNZXNzYWdlIC8+fVxuICAgICAgICAgICAgZGF0YUxlbmd0aD17cG9zdHMubGVuZ3RofVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgPENhcmRQb3N0XG4gICAgICAgICAgICAgICAga2V5PXtwb3N0Ll9pZH1cbiAgICAgICAgICAgICAgICBwb3N0PXtwb3N0fVxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICAgICAgc2V0UG9zdHM9e3NldFBvc3RzfVxuICAgICAgICAgICAgICAgIHNldFNob3dUb2FzdHI9e3NldFNob3dUb2FzdHJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuICAgICAgICApfVxuICAgICAgPC9TZWdtZW50PlxuICAgIDwvPlxuICApO1xufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCwge1xuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxuICAgICAgcGFyYW1zOiB7IHBhZ2VOdW1iZXI6IDEgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHBvc3RzRGF0YTogcmVzLmRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcblxuY29uc3QgY2FsY3VsYXRlVGltZSA9IGNyZWF0ZWRBdCA9PiB7XG4gIGNvbnN0IHRvZGF5ID0gbW9tZW50KERhdGUubm93KCkpO1xuICBjb25zdCBwb3N0RGF0ZSA9IG1vbWVudChjcmVhdGVkQXQpO1xuICBjb25zdCBkaWZmSW5Ib3VycyA9IHRvZGF5LmRpZmYocG9zdERhdGUsIFwiaG91cnNcIik7XG5cbiAgaWYgKGRpZmZJbkhvdXJzIDwgMjQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgVG9kYXkgPE1vbWVudCBmb3JtYXQ9XCJoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZGlmZkluSG91cnMgPiAyNCAmJiBkaWZmSW5Ib3VycyA8IDM2KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIFllc3RlcmRheSA8TW9tZW50IGZvcm1hdD1cImhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChkaWZmSW5Ib3VycyA+IDM2KSB7XG4gICAgcmV0dXJuIDxNb21lbnQgZm9ybWF0PVwiREQvTU0vWVlZWSBoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD47XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZVRpbWU7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuL2NhdGNoRXJyb3JzXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcblxuY29uc3QgQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBgJHtiYXNlVXJsfS9hcGkvcG9zdHNgLFxuICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1pdE5ld1Bvc3QgPSBhc3luYyAoXG4gIHRleHQsXG4gIGxvY2F0aW9uLFxuICBwaWNVcmwsXG4gIHNldFBvc3RzLFxuICBzZXROZXdQb3N0LFxuICBzZXRFcnJvclxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MucG9zdChcIi9cIiwgeyB0ZXh0LCBsb2NhdGlvbiwgcGljVXJsIH0pO1xuXG4gICAgc2V0UG9zdHMocHJldiA9PiBbcmVzLmRhdGEsIC4uLnByZXZdKTtcbiAgICBzZXROZXdQb3N0KHsgdGV4dDogXCJcIiwgbG9jYXRpb246IFwiXCIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XG4gICAgc2V0RXJyb3IoZXJyb3JNc2cpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUG9zdCA9IGFzeW5jIChwb3N0SWQsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgQXhpb3MuZGVsZXRlKGAvJHtwb3N0SWR9YCk7XG4gICAgc2V0UG9zdHMocHJldiA9PiBwcmV2LmZpbHRlcihwb3N0ID0+IHBvc3QuX2lkICE9PSBwb3N0SWQpKTtcbiAgICBzZXRTaG93VG9hc3RyKHRydWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsaWtlUG9zdCA9IGFzeW5jIChwb3N0SWQsIHVzZXJJZCwgc2V0TGlrZXMsIGxpa2UgPSB0cnVlKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKGxpa2UpIHtcbiAgICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9saWtlLyR7cG9zdElkfWApO1xuICAgICAgc2V0TGlrZXMocHJldiA9PiBbLi4ucHJldiwgeyB1c2VyOiB1c2VySWQgfV0pO1xuICAgIH1cbiAgICBlbHNlIGlmICghbGlrZSkge1xuICAgICAgYXdhaXQgQXhpb3MucHV0KGAvdW5saWtlLyR7cG9zdElkfWApO1xuICAgICAgc2V0TGlrZXMocHJldiA9PiBwcmV2LmZpbHRlcihsaWtlID0+IGxpa2UudXNlciAhPT0gdXNlcklkKSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChwb3N0SWQsIHVzZXIsIHRleHQsIHNldENvbW1lbnRzLCBzZXRUZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MucG9zdChgL2NvbW1lbnQvJHtwb3N0SWR9YCwgeyB0ZXh0IH0pO1xuXG4gICAgY29uc3QgbmV3Q29tbWVudCA9IHtcbiAgICAgIF9pZDogcmVzLmRhdGEsXG4gICAgICB1c2VyLFxuICAgICAgdGV4dCxcbiAgICAgIGRhdGU6IERhdGUubm93KClcbiAgICB9O1xuXG4gICAgc2V0Q29tbWVudHMocHJldiA9PiBbbmV3Q29tbWVudCwgLi4ucHJldl0pO1xuICAgIHNldFRleHQoXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSBhc3luYyAocG9zdElkLCBjb21tZW50SWQsIHNldENvbW1lbnRzKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgQXhpb3MuZGVsZXRlKGAvJHtwb3N0SWR9LyR7Y29tbWVudElkfWApO1xuICAgIHNldENvbW1lbnRzKHByZXYgPT4gcHJldi5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50Ll9pZCAhPT0gY29tbWVudElkKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcbiAgfVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgdXBsb2FkUGljID0gYXN5bmMgbWVkaWEgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtLmFwcGVuZChcImZpbGVcIiwgbWVkaWEpO1xuICAgIGZvcm0uYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBcInNvY2lhbF9tZWRpYVwiKTtcbiAgICBmb3JtLmFwcGVuZChcImNsb3VkX25hbWVcIiwgXCJ5dHF0aDA5MjFcIik7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkNMT1VESU5BUllfVVJMLCBmb3JtKTtcbiAgICByZXR1cm4gcmVzLmRhdGEudXJsO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkUGljO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=