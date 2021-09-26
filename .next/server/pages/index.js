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
  }, [showToastr]);
  if (posts.length === 0 || errorLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__.NoPosts, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 50
  }, this); // 可以直接用get请求对应资源，也可以增加 params

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
      lineNumber: 53,
      columnNumber: 22
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__.default, {
        user: user,
        setPosts: setPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), posts.length === 0 || errorLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__.NoPosts, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, this) :
      /*#__PURE__*/
      // 无限下拉滚动条
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {
        hasMore: hasMore,
        next: fetchDataOnScroll,
        loader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.PlaceHolderPosts, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this),
        endMessage: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.EndMessage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
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
          lineNumber: 68,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGEuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvUGxhY2VIb2xkZXJHcm91cC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9Ub2FzdHIuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9Db21tZW50SW5wdXRGaWVsZC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvQ3JlYXRlUG9zdC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvSW1hZ2VNb2RhbC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvTGlrZXNMaXN0LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9Ob0ltYWdlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3RDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9jYWxjdWxhdGVUaW1lLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3Bvc3RBY3Rpb25zLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiTm9Qcm9maWxlUG9zdHMiLCJOb0ZvbGxvd0RhdGEiLCJwcm9maWxlTmFtZSIsImZvbGxvd2Vyc0NvbXBvbmVudCIsImZvbGxvd2luZ0NvbXBvbmVudCIsInNwbGl0IiwiTm9NZXNzYWdlcyIsIk5vUG9zdHMiLCJQbGFjZUhvbGRlclBvc3RzIiwicmFuZ2UiLCJtYXAiLCJpdGVtIiwiUGxhY2VIb2xkZXJTdWdnZXN0aW9ucyIsIlBsYWNlSG9sZGVyTm90aWZpY2F0aW9ucyIsIkVuZE1lc3NhZ2UiLCJMaWtlc1BsYWNlSG9sZGVyIiwibWluV2lkdGgiLCJQb3N0RGVsZXRlVG9hc3RyIiwidG9hc3QiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiRXJyb3JUb2FzdHIiLCJlcnJvciIsIk1zZ1NlbnRUb2FzdHIiLCJDYXJkUG9zdCIsInBvc3QiLCJ1c2VyIiwic2V0UG9zdHMiLCJzZXRTaG93VG9hc3RyIiwibGlrZXMiLCJzZXRMaWtlcyIsInVzZVN0YXRlIiwiaXNMaWtlZCIsImxlbmd0aCIsImZpbHRlciIsImxpa2UiLCJfaWQiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwic2V0RXJyb3IiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJhZGRQcm9wc1RvTW9kYWwiLCJwaWNVcmwiLCJjdXJzb3IiLCJwcm9maWxlUGljVXJsIiwicm9sZSIsImRlbGV0ZVBvc3QiLCJ1c2VybmFtZSIsIm5hbWUiLCJjYWxjdWxhdGVUaW1lIiwiY3JlYXRlZEF0IiwibG9jYXRpb24iLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJ3b3JkU3BhY2luZyIsInRleHQiLCJsaWtlUG9zdCIsIm1hcmdpbkxlZnQiLCJjb21tZW50IiwiaSIsIkNvbW1lbnRJbnB1dEZpZWxkIiwicG9zdElkIiwic2V0VGV4dCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdENvbW1lbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yIiwiaWNvbiIsImRpc2FibGVkIiwiQ3JlYXRlUG9zdCIsIm5ld1Bvc3QiLCJzZXROZXdQb3N0IiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwibWVkaWEiLCJzZXRNZWRpYSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsImhhbmRsZUNoYW5nZSIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicHJldiIsImFkZFN0eWxlcyIsInRleHRBbGlnbiIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsImJvcmRlckNvbG9yIiwiaGFuZGxlU3VibWl0IiwidXBsb2FkUGljIiwic3VibWl0TmV3UG9zdCIsImRpc3BsYXkiLCJjdXJyZW50IiwiY2xpY2siLCJkcm9wcGVkRmlsZSIsIkFycmF5IiwiZnJvbSIsImRhdGFUcmFuc2ZlciIsImJhY2tncm91bmRDb2xvciIsIkltYWdlTW9kYWwiLCJvdmVyZmxvdyIsIm1hcmdpbkJvdHRvbSIsIkxpa2VzTGlzdCIsInRyaWdnZXIiLCJsaWtlc0xpc3QiLCJzZXRMaWtlc0xpc3QiLCJnZXRMaWtlc0xpc3QiLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImRhdGEiLCJhbGVydCIsImNhdGNoRXJyb3JzIiwibWF4SGVpZ2h0IiwiUm91dGVyIiwiTm9JbWFnZU1vZGFsIiwiUG9zdENvbW1lbnRzIiwic2V0RGlzYWJsZWQiLCJkYXRlIiwiZGVsZXRlQ29tbWVudCIsIkluZGV4IiwicG9zdHNEYXRhIiwiZXJyb3JMb2FkaW5nIiwicG9zdHMiLCJzaG93VG9hc3RyIiwiaGFzTW9yZSIsInNldEhhc01vcmUiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwidGl0bGUiLCJzZXRUaW1lb3V0IiwiZmV0Y2hEYXRhT25TY3JvbGwiLCJwYXJhbXMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ0b2tlbiIsInBhcnNlQ29va2llcyIsInRvZGF5IiwibW9tZW50IiwiRGF0ZSIsIm5vdyIsInBvc3REYXRlIiwiZGlmZkluSG91cnMiLCJkaWZmIiwiQXhpb3MiLCJiYXNlVVJMIiwiZXJyb3JNc2ciLCJkZWxldGUiLCJ1c2VySWQiLCJwdXQiLCJuZXdDb21tZW50IiwiY29tbWVudElkIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJvY2VzcyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxjQUFjLEdBQUcsbUJBQzVCO0FBQUEsMEJBQ0UsOERBQUMsc0RBQUQ7QUFBUyxRQUFJLE1BQWI7QUFBYyxRQUFJLEVBQUMsS0FBbkI7QUFBeUIsVUFBTSxFQUFDLE9BQWhDO0FBQXdDLFdBQU8sRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxxREFBRDtBQUFRLFFBQUksRUFBQywyQkFBYjtBQUF5QyxXQUFPLEVBQUMsU0FBakQ7QUFBMkQsTUFBRSxFQUFDLEdBQTlEO0FBQWtFLFFBQUksRUFBQztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxnQkFESztBQU9BLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQzNCQyxhQUQyQjtBQUUzQkMsb0JBQWtCLEdBQUcsSUFGTTtBQUczQkMsb0JBQWtCLEdBQUc7QUFITSxDQUFELGtCQUsxQjtBQUFBLGFBQ0dELGtCQUFrQixpQkFDakIsOERBQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUMsY0FEUDtBQUVFLFFBQUksTUFGTjtBQUdFLFdBQU8sRUFBRyxHQUFFRCxXQUFXLENBQUNHLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsSUFBNEIsMEJBQTJCO0FBSHJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQVNHRCxrQkFBa0IsaUJBQ2pCLDhEQUFDLHNEQUFEO0FBQ0UsUUFBSSxFQUFDLGNBRFA7QUFFRSxRQUFJLE1BRk47QUFHRSxXQUFPLEVBQUcsR0FBRUYsV0FBVyxDQUFDRyxLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLElBQTRCLDRCQUE2QjtBQUh2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVko7QUFBQSxnQkFMSztBQXdCQSxNQUFNQyxVQUFVLEdBQUcsbUJBQ3hCLDhEQUFDLHNEQUFEO0FBQ0UsTUFBSSxNQUROO0FBRUUsTUFBSSxFQUFDLGdCQUZQO0FBR0UsUUFBTSxFQUFDLE9BSFQ7QUFJRSxTQUFPLEVBQUM7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREs7QUFTQSxNQUFNQyxPQUFPLEdBQUcsbUJBQ3JCLDhEQUFDLHNEQUFEO0FBQ0UsTUFBSSxNQUROO0FBRUUsTUFBSSxFQUFDLEtBRlA7QUFHRSxRQUFNLEVBQUMsTUFIVDtBQUlFLFNBQU8sRUFBQztBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ1A7QUFDQTtBQVNBO0FBRU8sTUFBTUMsZ0JBQWdCLEdBQUcsTUFDOUJDLDZDQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBTCxDQUFZQyxHQUFaLENBQWdCQyxJQUFJLGlCQUNsQjtBQUFBLDBCQUNFLDhEQUFDLDBEQUFEO0FBQXdCLFNBQUssTUFBN0I7QUFBQSw0QkFDRSw4REFBQyxpRUFBRDtBQUFvQixXQUFLLE1BQXpCO0FBQUEsOEJBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0UsOERBQUMsb0VBQUQ7QUFBQSw4QkFDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLEtBQWtCQSxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFhRSw4REFBQyxzREFBRDtBQUFTLFVBQU07QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQSxnQkFERixDQURLO0FBbUJBLE1BQU1DLHNCQUFzQixHQUFHLG1CQUNwQztBQUFBLHlCQUNFLDhEQUFDLHdEQUFEO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQ7QUFBTSxXQUFLLEVBQUMsS0FBWjtBQUFBLDhCQUNFLDhEQUFDLDBEQUFEO0FBQUEsK0JBQ0UsOERBQUMsZ0VBQUQ7QUFBbUIsZ0JBQU07QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSw4REFBQywyREFBRDtBQUFBLCtCQUNFLDhEQUFDLDBEQUFEO0FBQUEsaUNBQ0UsOERBQUMsaUVBQUQ7QUFBQSxtQ0FDRSw4REFBQywrREFBRDtBQUFrQixvQkFBTSxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFZRSw4REFBQywyREFBRDtBQUFjLGFBQUssTUFBbkI7QUFBQSwrQkFDRSw4REFBQyxxREFBRDtBQUNFLGtCQUFRLE1BRFY7QUFFRSxrQkFBUSxNQUZWO0FBR0UsY0FBSSxFQUFDLE9BSFA7QUFJRSxjQUFJLEVBQUMsVUFKUDtBQUtFLGlCQUFPLEVBQUMsUUFMVjtBQU1FLGVBQUssRUFBQztBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFESztBQThCQSxNQUFNQyx3QkFBd0IsR0FBRyxNQUN0Q0osNkNBQUssQ0FBQyxDQUFELEVBQUksRUFBSixDQUFMLENBQWFDLEdBQWIsQ0FBaUJDLElBQUksaUJBQ25CO0FBQUEsMEJBQ0UsOERBQUMsMERBQUQ7QUFBQSwyQkFDRSw4REFBQyxpRUFBRDtBQUFvQixXQUFLLE1BQXpCO0FBQUEsOEJBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsS0FBa0JBLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FLDhEQUFDLHNEQUFEO0FBQVMsVUFBTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBLGdCQURGLENBREs7QUFhQSxNQUFNRyxVQUFVLEdBQUcsbUJBQ3hCLDhEQUFDLHdEQUFEO0FBQVcsV0FBUyxFQUFDLFFBQXJCO0FBQUEsMEJBQ0UsOERBQUMsbURBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFxQixRQUFJLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsc0RBQUQ7QUFBUyxVQUFNO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLO0FBT0EsTUFBTUMsZ0JBQWdCLEdBQUcsTUFDOUJOLDZDQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBTCxDQUFZQyxHQUFaLENBQWdCQyxJQUFJLGlCQUNsQiw4REFBQywwREFBRDtBQUF3QixPQUFLLEVBQUU7QUFBRUssWUFBUSxFQUFFO0FBQVosR0FBL0I7QUFBQSx5QkFDRSw4REFBQyxpRUFBRDtBQUFvQixTQUFLLE1BQXpCO0FBQUEsMkJBQ0UsOERBQUMsK0RBQUQ7QUFBa0IsWUFBTSxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsR0FBa0JMLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQURLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZQO0FBRU8sTUFBTU0sZ0JBQWdCLEdBQUcsTUFBTTtBQUNwQyxzQkFDRSw4REFBQywwREFBRDtBQUNFLFlBQVEsRUFBQyxlQURYO0FBRUUsYUFBUyxFQUFFLElBRmI7QUFHRSxtQkFBZSxFQUFFLEtBSG5CO0FBSUUsZUFBVyxFQUFFLEtBSmY7QUFLRSxnQkFBWSxNQUxkO0FBTUUsT0FBRyxFQUFFLEtBTlA7QUFPRSxvQkFBZ0IsTUFQbEI7QUFRRSxhQUFTLE1BUlg7QUFTRSxnQkFBWSxFQUFFLEtBVGhCO0FBQUEsY0FVR0Msc0RBQUEsQ0FBVyxzQkFBWCxFQUFtQztBQUNsQ0MsY0FBUSxFQUFFLGVBRHdCO0FBRWxDQyxlQUFTLEVBQUUsSUFGdUI7QUFHbENDLHFCQUFlLEVBQUUsS0FIaUI7QUFJbENDLGtCQUFZLEVBQUUsSUFKb0I7QUFLbENDLGtCQUFZLEVBQUUsS0FMb0I7QUFNbENDLGVBQVMsRUFBRSxJQU51QjtBQU9sQ0MsY0FBUSxFQUFFQztBQVB3QixLQUFuQztBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXNCRCxDQXZCTTtBQXlCQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZTtBQUN4QyxzQkFDRSw4REFBQywwREFBRDtBQUNFLFlBQVEsRUFBQyxlQURYO0FBRUUsYUFBUyxFQUFFLElBRmI7QUFHRSxtQkFBZSxFQUFFLEtBSG5CO0FBSUUsZUFBVyxFQUFFLEtBSmY7QUFLRSxnQkFBWSxNQUxkO0FBTUUsT0FBRyxFQUFFLEtBTlA7QUFPRSxvQkFBZ0IsTUFQbEI7QUFRRSxhQUFTLE1BUlg7QUFTRSxnQkFBWSxFQUFFLEtBVGhCO0FBQUEsY0FVR1YsdURBQUEsQ0FBWVUsS0FBWixFQUFtQjtBQUNsQlQsY0FBUSxFQUFFLGVBRFE7QUFFbEJDLGVBQVMsRUFBRSxJQUZPO0FBR2xCQyxxQkFBZSxFQUFFLEtBSEM7QUFJbEJDLGtCQUFZLEVBQUUsSUFKSTtBQUtsQkMsa0JBQVksRUFBRSxLQUxJO0FBTWxCQyxlQUFTLEVBQUUsSUFOTztBQU9sQkMsY0FBUSxFQUFFQztBQVBRLEtBQW5CO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBc0JELENBdkJNO0FBeUJBLE1BQU1HLGFBQWEsR0FBRyxtQkFDM0IsOERBQUMsMERBQUQ7QUFDRSxVQUFRLEVBQUMsZUFEWDtBQUVFLFdBQVMsRUFBRSxJQUZiO0FBR0UsaUJBQWUsRUFBRSxLQUhuQjtBQUlFLGFBQVcsRUFBRSxLQUpmO0FBS0UsY0FBWSxNQUxkO0FBTUUsS0FBRyxFQUFFLEtBTlA7QUFPRSxrQkFBZ0IsTUFQbEI7QUFRRSxXQUFTLE1BUlg7QUFTRSxjQUFZLEVBQUUsS0FUaEI7QUFBQSxZQVVHWCx5REFBQSxDQUFjLG1CQUFkLEVBQW1DO0FBQ2xDQyxZQUFRLEVBQUUsZUFEd0I7QUFFbENDLGFBQVMsRUFBRSxJQUZ1QjtBQUdsQ0MsbUJBQWUsRUFBRSxLQUhpQjtBQUlsQ0MsZ0JBQVksRUFBRSxJQUpvQjtBQUtsQ0MsZ0JBQVksRUFBRSxLQUxvQjtBQU1sQ0MsYUFBUyxFQUFFLElBTnVCO0FBT2xDQyxZQUFRLEVBQUVDO0FBUHdCLEdBQW5DO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRFA7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ksUUFBVCxDQUFrQjtBQUFFQyxNQUFGO0FBQVFDLE1BQVI7QUFBY0MsVUFBZDtBQUF3QkM7QUFBeEIsQ0FBbEIsRUFBMkQ7QUFDekQsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDTixJQUFJLENBQUNJLEtBQU4sQ0FBbEM7QUFFQSxRQUFNRyxPQUFPLEdBQ1hILEtBQUssQ0FBQ0ksTUFBTixHQUFlLENBQWYsSUFDQUosS0FBSyxDQUFDSyxNQUFOLENBQWNDLElBQUQsSUFBVUEsSUFBSSxDQUFDVCxJQUFMLEtBQWNBLElBQUksQ0FBQ1UsR0FBMUMsRUFBK0NILE1BQS9DLEdBQXdELENBRjFEO0FBSUEsUUFBTTtBQUFBLE9BQUNJLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCUCwrQ0FBUSxDQUFDTixJQUFJLENBQUNZLFFBQU4sQ0FBeEM7QUFFQSxRQUFNO0FBQUEsT0FBQ2YsS0FBRDtBQUFBLE9BQVFpQjtBQUFSLE1BQW9CUiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFFQSxRQUFNO0FBQUEsT0FBQ1MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJWLCtDQUFRLENBQUMsS0FBRCxDQUExQzs7QUFFQSxRQUFNVyxlQUFlLEdBQUcsT0FBTztBQUM3QmpCLFFBRDZCO0FBRTdCQyxRQUY2QjtBQUc3QkksWUFINkI7QUFJN0JELFNBSjZCO0FBSzdCRyxXQUw2QjtBQU03QkssWUFONkI7QUFPN0JDO0FBUDZCLEdBQVAsQ0FBeEI7O0FBVUEsc0JBQ0U7QUFBQSxlQUNHRSxTQUFTLGlCQUNSLDhEQUFDLG9EQUFEO0FBQ0UsVUFBSSxFQUFFQSxTQURSO0FBRUUsZUFBUyxNQUZYO0FBR0Usd0JBQWtCLE1BSHBCO0FBSUUsYUFBTyxFQUFFLE1BQU1DLFlBQVksQ0FBQyxLQUFELENBSjdCO0FBQUEsNkJBTUUsOERBQUMsNERBQUQ7QUFBQSxrQkFDR2hCLElBQUksQ0FBQ2tCLE1BQUwsZ0JBQ0MsOERBQUMsZ0RBQUQsb0JBQWdCRCxlQUFlLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZ0JBR0MsOERBQUMsbURBQUQsb0JBQWtCQSxlQUFlLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBa0JFLDhEQUFDLHNEQUFEO0FBQVMsV0FBSyxNQUFkO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFBTSxhQUFLLEVBQUMsTUFBWjtBQUFtQixhQUFLLE1BQXhCO0FBQUEsbUJBQ0dqQixJQUFJLENBQUNrQixNQUFMLGlCQUNDLDhEQUFDLG9EQUFEO0FBQ0UsYUFBRyxFQUFFbEIsSUFBSSxDQUFDa0IsTUFEWjtBQUVFLGVBQUssRUFBRTtBQUFFQyxrQkFBTSxFQUFFO0FBQVYsV0FGVDtBQUdFLGlCQUFPLEVBQUMsTUFIVjtBQUlFLGlCQUFPLE1BSlQ7QUFLRSxZQUFFLEVBQUUsS0FMTjtBQU1FLGFBQUcsRUFBQyxXQU5OO0FBT0UsaUJBQU8sRUFBRSxNQUFNSCxZQUFZLENBQUMsSUFBRDtBQVA3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBYUUsOERBQUMsMkRBQUQ7QUFBQSxrQ0FDRSw4REFBQyxvREFBRDtBQUNFLG1CQUFPLEVBQUMsTUFEVjtBQUVFLGVBQUcsRUFBRWhCLElBQUksQ0FBQ0MsSUFBTCxDQUFVbUIsYUFGakI7QUFHRSxrQkFBTSxNQUhSO0FBSUUsb0JBQVE7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBUUcsQ0FBQ25CLElBQUksQ0FBQ29CLElBQUwsS0FBYyxNQUFkLElBQXdCckIsSUFBSSxDQUFDQyxJQUFMLENBQVVVLEdBQVYsS0FBa0JWLElBQUksQ0FBQ1UsR0FBaEQsa0JBQ0M7QUFBQSxtQ0FDRSw4REFBQyxvREFBRDtBQUNFLGdCQUFFLEVBQUMsT0FETDtBQUVFLHNCQUFRLEVBQUMsV0FGWDtBQUdFLHFCQUFPLGVBQ0wsOERBQUMsb0RBQUQ7QUFDRSxtQkFBRyxFQUFDLGlCQUROO0FBRUUscUJBQUssRUFBRTtBQUFFUSx3QkFBTSxFQUFFO0FBQVYsaUJBRlQ7QUFHRSxvQkFBSSxFQUFDLE1BSFA7QUFJRSx1QkFBTyxFQUFDO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKSjtBQUFBLHNDQVlFLDhEQUFDLHFEQUFEO0FBQVEsa0JBQUUsRUFBQyxJQUFYO0FBQWdCLHVCQUFPLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFaRixlQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWJGLGVBZUUsOERBQUMscURBQUQ7QUFDRSxxQkFBSyxFQUFDLEtBRFI7QUFFRSxvQkFBSSxFQUFDLE9BRlA7QUFHRSx1QkFBTyxFQUFDLFFBSFY7QUFJRSx1QkFBTyxFQUFFLE1BQ1BHLDhEQUFVLENBQUN0QixJQUFJLENBQUNXLEdBQU4sRUFBV1QsUUFBWCxFQUFxQkMsYUFBckI7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLDJCQVRKLGVBcUNFLDhEQUFDLDBEQUFEO0FBQUEsbUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFHLElBQUdILElBQUksQ0FBQ0MsSUFBTCxDQUFVc0IsUUFBUyxFQUFuQztBQUFBLHFDQUNFO0FBQUEsMEJBQUl2QixJQUFJLENBQUNDLElBQUwsQ0FBVXVCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJDRixlQTJDRSw4REFBQyx3REFBRDtBQUFBLHNCQUFZQyw2REFBYSxDQUFDekIsSUFBSSxDQUFDMEIsU0FBTjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNDRixFQTZDRzFCLElBQUksQ0FBQzJCLFFBQUwsaUJBQWlCLDhEQUFDLHdEQUFEO0FBQVcsbUJBQU8sRUFBRTNCLElBQUksQ0FBQzJCO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBN0NwQixlQStDRSw4REFBQywrREFBRDtBQUNFLGlCQUFLLEVBQUU7QUFDTEMsc0JBQVEsRUFBRSxNQURMO0FBRUxDLDJCQUFhLEVBQUUsT0FGVjtBQUdMQyx5QkFBVyxFQUFFO0FBSFIsYUFEVDtBQUFBLHNCQU9HOUIsSUFBSSxDQUFDK0I7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQS9DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsZUF1RUUsOERBQUMsMkRBQUQ7QUFBYyxlQUFLLE1BQW5CO0FBQUEsa0NBQ0UsOERBQUMsbURBQUQ7QUFDRSxnQkFBSSxFQUFFeEIsT0FBTyxHQUFHLE9BQUgsR0FBYSxlQUQ1QjtBQUVFLGlCQUFLLEVBQUMsS0FGUjtBQUdFLGlCQUFLLEVBQUU7QUFBRVksb0JBQU0sRUFBRTtBQUFWLGFBSFQ7QUFJRSxtQkFBTyxFQUFFLE1BQ1BhLDREQUFRLENBQUNoQyxJQUFJLENBQUNXLEdBQU4sRUFBV1YsSUFBSSxDQUFDVSxHQUFoQixFQUFxQk4sUUFBckIsRUFBK0JFLE9BQU8sR0FBRyxLQUFILEdBQVcsSUFBakQ7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBVUUsOERBQUMsK0NBQUQ7QUFDRSxrQkFBTSxFQUFFUCxJQUFJLENBQUNXLEdBRGY7QUFFRSxtQkFBTyxFQUNMUCxLQUFLLENBQUNJLE1BQU4sR0FBZSxDQUFmLGlCQUNFO0FBQU0sdUJBQVMsRUFBQyxlQUFoQjtBQUFBLHdCQUNJLEdBQUVKLEtBQUssQ0FBQ0ksTUFBTyxJQUFHSixLQUFLLENBQUNJLE1BQU4sS0FBaUIsQ0FBakIsR0FBcUIsTUFBckIsR0FBOEIsT0FBUTtBQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRixlQXFCRSw4REFBQyxtREFBRDtBQUNFLGdCQUFJLEVBQUMsaUJBRFA7QUFFRSxpQkFBSyxFQUFFO0FBQUV5Qix3QkFBVSxFQUFFO0FBQWQsYUFGVDtBQUdFLGlCQUFLLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJCRixFQTJCR3JCLFFBQVEsQ0FBQ0osTUFBVCxHQUFrQixDQUFsQixJQUNDSSxRQUFRLENBQUNqQyxHQUFULENBQ0UsQ0FBQ3VELE9BQUQsRUFBVUMsQ0FBVixLQUNFQSxDQUFDLEdBQUcsQ0FBSixpQkFDRSw4REFBQyxrREFBRDtBQUVFLG1CQUFPLEVBQUVELE9BRlg7QUFHRSxrQkFBTSxFQUFFbEMsSUFBSSxDQUFDVyxHQUhmO0FBSUUsZ0JBQUksRUFBRVYsSUFKUjtBQUtFLHVCQUFXLEVBQUVZO0FBTGYsYUFDT3FCLE9BQU8sQ0FBQ3ZCLEdBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFITixDQTVCSixFQXlDR0MsUUFBUSxDQUFDSixNQUFULEdBQWtCLENBQWxCLGlCQUNDLDhEQUFDLHFEQUFEO0FBQ0UsbUJBQU8sRUFBQyxXQURWO0FBRUUsaUJBQUssRUFBQyxNQUZSO0FBR0UsaUJBQUssTUFIUDtBQUlFLG9CQUFRLE1BSlY7QUFLRSxtQkFBTyxFQUFFLE1BQU1RLFlBQVksQ0FBQyxJQUFEO0FBTDdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBMUNKLGVBbURFLDhEQUFDLHNEQUFEO0FBQVMsa0JBQU07QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQW5ERixlQXFERSw4REFBQyx1REFBRDtBQUNFLGdCQUFJLEVBQUVmLElBRFI7QUFFRSxrQkFBTSxFQUFFRCxJQUFJLENBQUNXLEdBRmY7QUFHRSx1QkFBVyxFQUFFRTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRixlQXVKRSw4REFBQyxzREFBRDtBQUFTLFlBQU07QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkpGO0FBQUEsa0JBREY7QUEySkQ7O0FBRUQsK0RBQWVkLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDek1BO0FBQ0E7QUFDQTs7QUFFQSxTQUFTcUMsaUJBQVQsQ0FBMkI7QUFBRUMsUUFBRjtBQUFVcEMsTUFBVjtBQUFnQlk7QUFBaEIsQ0FBM0IsRUFBMEQ7QUFDeEQsUUFBTTtBQUFBLE9BQUNrQixJQUFEO0FBQUEsT0FBT087QUFBUCxNQUFrQmhDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDaUMsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JsQywrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFFQSxzQkFDRSw4REFBQyxtREFBRDtBQUNFLFNBQUssTUFEUDtBQUVFLFlBQVEsRUFBRSxNQUFPbUMsQ0FBUCxJQUFhO0FBQ3JCQSxPQUFDLENBQUNDLGNBQUY7QUFDQUYsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxZQUFNRywrREFBVyxDQUFDTixNQUFELEVBQVNwQyxJQUFULEVBQWU4QixJQUFmLEVBQXFCbEIsV0FBckIsRUFBa0N5QixPQUFsQyxDQUFqQjtBQUVBRSxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBUkg7QUFBQSwyQkFVRSw4REFBQyx5REFBRDtBQUNFLFdBQUssRUFBRVQsSUFEVDtBQUVFLGNBQVEsRUFBR1UsQ0FBRCxJQUFPSCxPQUFPLENBQUNHLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBRjFCO0FBR0UsaUJBQVcsRUFBQyxhQUhkO0FBSUUsWUFBTSxFQUFFO0FBQ05DLGFBQUssRUFBRSxNQUREO0FBRU5DLFlBQUksRUFBRSxNQUZBO0FBR05SLGVBQU8sRUFBRUEsT0FISDtBQUlOUyxnQkFBUSxFQUFFakIsSUFBSSxLQUFLLEVBQVQsSUFBZVE7QUFKbkI7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztBQUVELCtEQUFlSCxpQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU2EsVUFBVCxDQUFvQjtBQUFFaEQsTUFBRjtBQUFRQztBQUFSLENBQXBCLEVBQXdDO0FBQ3RDLFFBQU07QUFBQSxPQUFDZ0QsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0I3QywrQ0FBUSxDQUFDO0FBQUV5QixRQUFJLEVBQUUsRUFBUjtBQUFZSixZQUFRLEVBQUU7QUFBdEIsR0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDWSxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmxDLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU04QyxRQUFRLEdBQUdDLDZDQUFNLEVBQXZCO0FBRUEsUUFBTTtBQUFBLE9BQUN4RCxLQUFEO0FBQUEsT0FBUWlCO0FBQVIsTUFBb0JSLCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDZ0QsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NqRCwrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7QUFFQSxRQUFNO0FBQUEsT0FBQ2tELEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CbkQsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNvRCxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ3JELCtDQUFRLENBQUMsSUFBRCxDQUFoRDs7QUFFQSxRQUFNc0QsWUFBWSxHQUFHbkIsQ0FBQyxJQUFJO0FBQ3hCLFVBQU07QUFBRWpCLFVBQUY7QUFBUXFCLFdBQVI7QUFBZWdCO0FBQWYsUUFBeUJwQixDQUFDLENBQUNHLE1BQWpDOztBQUVBLFFBQUlwQixJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQmlDLGNBQVEsQ0FBQ0ksS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFSO0FBQ0FGLHFCQUFlLENBQUNHLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQkYsS0FBSyxDQUFDLENBQUQsQ0FBekIsQ0FBRCxDQUFmO0FBQ0Q7O0FBRURWLGNBQVUsQ0FBQ2EsSUFBSSxvQ0FBVUEsSUFBVjtBQUFnQixPQUFDeEMsSUFBRCxHQUFRcUI7QUFBeEIsTUFBTCxDQUFWO0FBQ0QsR0FURDs7QUFXQSxRQUFNb0IsU0FBUyxHQUFHLE9BQU87QUFDdkJDLGFBQVMsRUFBRSxRQURZO0FBRXZCQyxVQUFNLEVBQUUsT0FGZTtBQUd2QkMsU0FBSyxFQUFFLE9BSGdCO0FBSXZCQyxVQUFNLEVBQUUsUUFKZTtBQUt2QkMsY0FBVSxFQUFFZCxLQUFLLEtBQUssSUFBVixJQUFrQixNQUxQO0FBTXZCckMsVUFBTSxFQUFFLFNBTmU7QUFPdkJvRCxlQUFXLEVBQUVqQixXQUFXLEdBQUcsT0FBSCxHQUFhO0FBUGQsR0FBUCxDQUFsQjs7QUFVQSxRQUFNa0IsWUFBWSxHQUFHLE1BQU0vQixDQUFOLElBQVc7QUFDOUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBRixjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0EsUUFBSXRCLE1BQUo7O0FBRUEsUUFBSXNDLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCdEMsWUFBTSxHQUFHLE1BQU11RCxxRUFBUyxDQUFDakIsS0FBRCxDQUF4Qjs7QUFDQSxVQUFJLENBQUN0QyxNQUFMLEVBQWE7QUFDWHNCLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0EsZUFBTzFCLFFBQVEsQ0FBQyx1QkFBRCxDQUFmO0FBQ0Q7QUFDRjs7QUFFRCxVQUFNNEQsaUVBQWEsQ0FDakJ4QixPQUFPLENBQUNuQixJQURTLEVBRWpCbUIsT0FBTyxDQUFDdkIsUUFGUyxFQUdqQlQsTUFIaUIsRUFJakJoQixRQUppQixFQUtqQmlELFVBTGlCLEVBTWpCckMsUUFOaUIsQ0FBbkI7QUFTQTJDLFlBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUUsbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQW5CLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxHQXpCRDs7QUEyQkEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUFNLFdBQUssRUFBRTNDLEtBQUssS0FBSyxJQUF2QjtBQUE2QixjQUFRLEVBQUUyRSxZQUF2QztBQUFBLDhCQUNFLDhEQUFDLHNEQUFEO0FBQ0UsYUFBSyxNQURQO0FBRUUsaUJBQVMsRUFBRSxNQUFNMUQsUUFBUSxDQUFDLElBQUQsQ0FGM0I7QUFHRSxlQUFPLEVBQUVqQixLQUhYO0FBSUUsY0FBTSxFQUFDO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUUsOERBQUMseURBQUQ7QUFBQSxnQ0FDRSw4REFBQyxvREFBRDtBQUFPLGFBQUcsRUFBRUksSUFBSSxDQUFDbUIsYUFBakI7QUFBZ0Msa0JBQVEsTUFBeEM7QUFBeUMsZ0JBQU0sTUFBL0M7QUFBZ0QsZ0JBQU07QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLDREQUFEO0FBQ0UscUJBQVcsRUFBQyxpQkFEZDtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UsZUFBSyxFQUFFOEIsT0FBTyxDQUFDbkIsSUFIakI7QUFJRSxrQkFBUSxFQUFFNkIsWUFKWjtBQUtFLGNBQUksRUFBRSxDQUxSO0FBTUUsZUFBSyxFQUFFO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQW9CRSw4REFBQyx5REFBRDtBQUFBLGdDQUNFLDhEQUFDLHlEQUFEO0FBQ0UsZUFBSyxFQUFFVixPQUFPLENBQUN2QixRQURqQjtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0Usa0JBQVEsRUFBRWlDLFlBSFo7QUFJRSxlQUFLLEVBQUMsY0FKUjtBQUtFLGNBQUksRUFBQyxzQkFMUDtBQU1FLHFCQUFXLEVBQUM7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUU7QUFDRSxhQUFHLEVBQUVSLFFBRFA7QUFFRSxrQkFBUSxFQUFFUSxZQUZaO0FBR0UsY0FBSSxFQUFDLE9BSFA7QUFJRSxlQUFLLEVBQUU7QUFBRWUsbUJBQU8sRUFBRTtBQUFYLFdBSlQ7QUFLRSxjQUFJLEVBQUMsTUFMUDtBQU1FLGdCQUFNLEVBQUM7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRixlQXdDRTtBQUNFLGVBQU8sRUFBRSxNQUFNdkIsUUFBUSxDQUFDd0IsT0FBVCxDQUFpQkMsS0FBakIsRUFEakI7QUFFRSxhQUFLLEVBQUVaLFNBQVMsRUFGbEI7QUFHRSxrQkFBVSxFQUFFeEIsQ0FBQyxJQUFJO0FBQ2ZBLFdBQUMsQ0FBQ0MsY0FBRjtBQUNBYSx3QkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELFNBTkg7QUFPRSxtQkFBVyxFQUFFZCxDQUFDLElBQUk7QUFDaEJBLFdBQUMsQ0FBQ0MsY0FBRjtBQUNBYSx3QkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELFNBVkg7QUFXRSxjQUFNLEVBQUVkLENBQUMsSUFBSTtBQUNYQSxXQUFDLENBQUNDLGNBQUY7QUFDQWEsd0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFFQSxnQkFBTXVCLFdBQVcsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVd2QyxDQUFDLENBQUN3QyxZQUFGLENBQWVwQixLQUExQixDQUFwQjtBQUVBSixrQkFBUSxDQUFDcUIsV0FBVyxDQUFDLENBQUQsQ0FBWixDQUFSO0FBQ0FuQix5QkFBZSxDQUFDRyxHQUFHLENBQUNDLGVBQUosQ0FBb0JlLFdBQVcsQ0FBQyxDQUFELENBQS9CLENBQUQsQ0FBZjtBQUNELFNBbkJIO0FBQUEsa0JBb0JHdEIsS0FBSyxLQUFLLElBQVYsZ0JBQ0MsOERBQUMsbURBQUQ7QUFBTSxjQUFJLEVBQUMsTUFBWDtBQUFrQixjQUFJLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxnQkFHQztBQUFBLGlDQUNFLDhEQUFDLG9EQUFEO0FBQ0UsaUJBQUssRUFBRTtBQUFFVyxvQkFBTSxFQUFFLE9BQVY7QUFBbUJDLG1CQUFLLEVBQUU7QUFBMUIsYUFEVDtBQUVFLGVBQUcsRUFBRVYsWUFGUDtBQUdFLGVBQUcsRUFBQyxXQUhOO0FBSUUsb0JBQVEsTUFKVjtBQUtFLGdCQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhDRixlQTBFRSw4REFBQyxzREFBRDtBQUFTLGNBQU07QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUVGLGVBNEVFLDhEQUFDLHFEQUFEO0FBQ0UsZ0JBQVEsTUFEVjtBQUVFLGdCQUFRLEVBQUVSLE9BQU8sQ0FBQ25CLElBQVIsS0FBaUIsRUFBakIsSUFBdUJRLE9BRm5DO0FBR0UsZUFBTyxlQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhYO0FBSUUsYUFBSyxFQUFFO0FBQUUyQyx5QkFBZSxFQUFFLFNBQW5CO0FBQThCcEMsZUFBSyxFQUFFO0FBQXJDLFNBSlQ7QUFLRSxZQUFJLEVBQUMsTUFMUDtBQU1FLGVBQU8sRUFBRVA7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBc0ZFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0RkY7QUFBQSxrQkFERjtBQTBGRDs7QUFFRCwrREFBZVUsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU2tDLFVBQVQsQ0FBb0I7QUFDbEJuRixNQURrQjtBQUVsQkMsTUFGa0I7QUFHbEJJLFVBSGtCO0FBSWxCRCxPQUprQjtBQUtsQkcsU0FMa0I7QUFNbEJLLFVBTmtCO0FBT2xCQztBQVBrQixDQUFwQixFQVFHO0FBQ0Qsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxtREFBRDtBQUFNLGFBQU8sRUFBRSxDQUFmO0FBQWtCLGVBQVMsTUFBM0I7QUFBNEIsYUFBTyxNQUFuQztBQUFBLDhCQUNFLDhEQUFDLDBEQUFEO0FBQUEsK0JBQ0UsOERBQUMsNERBQUQ7QUFBZSxlQUFLLE1BQXBCO0FBQUEsaUNBQ0UsOERBQUMsb0RBQUQ7QUFBTyxtQkFBTyxNQUFkO0FBQWUsZ0JBQUksRUFBQyxPQUFwQjtBQUE0QixlQUFHLEVBQUViLElBQUksQ0FBQ2tCO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UsOERBQUMsMERBQUQ7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUFNLGVBQUssTUFBWDtBQUFBLGtDQUNFLDhEQUFDLDJEQUFEO0FBQUEsb0NBQ0UsOERBQUMsb0RBQUQ7QUFBTyxxQkFBTyxFQUFDLE1BQWY7QUFBc0Isb0JBQU0sTUFBNUI7QUFBNkIsaUJBQUcsRUFBRWxCLElBQUksQ0FBQ0MsSUFBTCxDQUFVbUI7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUdFLDhEQUFDLDBEQUFEO0FBQUEscUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFHLElBQUdwQixJQUFJLENBQUNDLElBQUwsQ0FBVXNCLFFBQVMsRUFBbkM7QUFBQSx1Q0FDRTtBQUFBLDRCQUFJdkIsSUFBSSxDQUFDQyxJQUFMLENBQVV1QjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRixlQVNFLDhEQUFDLHdEQUFEO0FBQUEsd0JBQVlDLDZEQUFhLENBQUN6QixJQUFJLENBQUMwQixTQUFOO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEYsRUFXRzFCLElBQUksQ0FBQzJCLFFBQUwsaUJBQWlCLDhEQUFDLHdEQUFEO0FBQVcscUJBQU8sRUFBRTNCLElBQUksQ0FBQzJCO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWHBCLGVBYUUsOERBQUMsK0RBQUQ7QUFDRSxtQkFBSyxFQUFFO0FBQ0xDLHdCQUFRLEVBQUUsTUFETDtBQUVMQyw2QkFBYSxFQUFFLE9BRlY7QUFHTEMsMkJBQVcsRUFBRTtBQUhSLGVBRFQ7QUFBQSx3QkFNRzlCLElBQUksQ0FBQytCO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUF3QkUsOERBQUMsMkRBQUQ7QUFBYyxpQkFBSyxNQUFuQjtBQUFBLG9DQUNFLDhEQUFDLG1EQUFEO0FBQ0Usa0JBQUksRUFBRXhCLE9BQU8sR0FBRyxPQUFILEdBQWEsZUFENUI7QUFFRSxtQkFBSyxFQUFDLEtBRlI7QUFHRSxtQkFBSyxFQUFFO0FBQUVZLHNCQUFNLEVBQUU7QUFBVixlQUhUO0FBSUUscUJBQU8sRUFBRSxNQUNQYSw0REFBUSxDQUFDaEMsSUFBSSxDQUFDVyxHQUFOLEVBQVdWLElBQUksQ0FBQ1UsR0FBaEIsRUFBcUJOLFFBQXJCLEVBQStCRSxPQUFPLEdBQUcsS0FBSCxHQUFXLElBQWpEO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQVVFLDhEQUFDLCtDQUFEO0FBQ0Usb0JBQU0sRUFBRVAsSUFBSSxDQUFDVyxHQURmO0FBRUUscUJBQU8sRUFDTFAsS0FBSyxDQUFDSSxNQUFOLEdBQWUsQ0FBZixpQkFDRTtBQUFNLHlCQUFTLEVBQUMsZUFBaEI7QUFBQSwwQkFDSSxHQUFFSixLQUFLLENBQUNJLE1BQU8sSUFBR0osS0FBSyxDQUFDSSxNQUFOLEtBQWlCLENBQWpCLEdBQXFCLE1BQXJCLEdBQThCLE9BQVE7QUFENUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkYsZUFxQkUsOERBQUMsc0RBQUQ7QUFBUyxvQkFBTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBckJGLGVBdUJFO0FBQ0UsbUJBQUssRUFBRTtBQUNMNEUsd0JBQVEsRUFBRSxNQURMO0FBRUxqQixzQkFBTSxFQUFFdkQsUUFBUSxDQUFDSixNQUFULEdBQWtCLENBQWxCLEdBQXNCLE9BQXRCLEdBQWdDLE1BRm5DO0FBR0w2RSw0QkFBWSxFQUFFO0FBSFQsZUFEVDtBQUFBLHdCQU1HekUsUUFBUSxDQUFDSixNQUFULEdBQWtCLENBQWxCLElBQ0NJLFFBQVEsQ0FBQ2pDLEdBQVQsQ0FBYXVELE9BQU8saUJBQ2xCLDhEQUFDLGtEQUFEO0FBRUUsdUJBQU8sRUFBRUEsT0FGWDtBQUdFLHNCQUFNLEVBQUVsQyxJQUFJLENBQUNXLEdBSGY7QUFJRSxvQkFBSSxFQUFFVixJQUpSO0FBS0UsMkJBQVcsRUFBRVk7QUFMZixpQkFDT3FCLE9BQU8sQ0FBQ3ZCLEdBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERjtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdkJGLGVBeUNFLDhEQUFDLHVEQUFEO0FBQ0Usb0JBQU0sRUFBRVgsSUFBSSxDQUFDVyxHQURmO0FBRUUsa0JBQUksRUFBRVYsSUFGUjtBQUdFLHlCQUFXLEVBQUVZO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFzRkQ7O0FBRUQsK0RBQWVzRSxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNHLFNBQVQsQ0FBbUI7QUFBRWpELFFBQUY7QUFBVWtEO0FBQVYsQ0FBbkIsRUFBd0M7QUFDdEMsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCbkYsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNpQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmxDLCtDQUFRLENBQUMsS0FBRCxDQUF0Qzs7QUFFQSxRQUFNb0YsWUFBWSxHQUFHLFlBQVk7QUFDL0JsRCxjQUFVLENBQUMsSUFBRCxDQUFWOztBQUNBLFFBQUk7QUFDRixZQUFNbUQsR0FBRyxHQUFHLE1BQU1DLGdEQUFBLENBQVcsR0FBRUMsbURBQVEsbUJBQWtCeEQsTUFBTyxFQUE5QyxFQUFpRDtBQUNqRXlELGVBQU8sRUFBRTtBQUFFQyx1QkFBYSxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBakI7QUFEd0QsT0FBakQsQ0FBbEI7QUFHQVAsa0JBQVksQ0FBQ0UsR0FBRyxDQUFDTSxJQUFMLENBQVo7QUFDRCxLQUxELENBS0UsT0FBT3BHLEtBQVAsRUFBYztBQUNkcUcsV0FBSyxDQUFDQywyREFBVyxDQUFDdEcsS0FBRCxDQUFaLENBQUw7QUFDRDs7QUFDRDJDLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxHQVhEOztBQWFBLHNCQUNFLDhEQUFDLG9EQUFEO0FBQ0UsTUFBRSxFQUFDLE9BREw7QUFFRSxXQUFPLEVBQUUsTUFBTWlELFlBQVksQ0FBQyxFQUFELENBRjdCO0FBR0UsVUFBTSxFQUFFQyxZQUhWO0FBSUUsc0JBQWtCLEVBQUUsQ0FBQ0YsU0FBRCxDQUp0QjtBQUtFLFdBQU8sRUFBRUQsT0FMWDtBQU1FLFFBQUksTUFOTjtBQUFBLGNBUUdoRCxPQUFPLGdCQUNOLDhEQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxnQkFHTjtBQUFBLGdCQUNHaUQsU0FBUyxDQUFDaEYsTUFBVixHQUFtQixDQUFuQixpQkFDQztBQUNFLGFBQUssRUFBRTtBQUNMNEUsa0JBQVEsRUFBRSxNQURMO0FBRUxnQixtQkFBUyxFQUFFLE9BRk47QUFHTGpDLGdCQUFNLEVBQUUsT0FISDtBQUlMbEYsa0JBQVEsRUFBRTtBQUpMLFNBRFQ7QUFBQSwrQkFRRSw4REFBQyxtREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBZ0IsY0FBSSxFQUFDLE9BQXJCO0FBQUEsb0JBQ0d1RyxTQUFTLENBQUM3RyxHQUFWLENBQWUrQixJQUFELGlCQUNiLDhEQUFDLHdEQUFEO0FBQUEsb0NBQ0UsOERBQUMsb0RBQUQ7QUFBTyxvQkFBTSxNQUFiO0FBQWMsaUJBQUcsRUFBRUEsSUFBSSxDQUFDVCxJQUFMLENBQVVtQjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBR0UsOERBQUMsMkRBQUQ7QUFBQSxxQ0FDRSw4REFBQywwREFBRDtBQUNFLHVCQUFPLEVBQUUsTUFBTWlGLHVEQUFBLENBQWEsSUFBRzNGLElBQUksQ0FBQ1QsSUFBTCxDQUFVc0IsUUFBUyxFQUFuQyxDQURqQjtBQUVFLGtCQUFFLEVBQUMsR0FGTDtBQUdFLHVCQUFPLEVBQUViLElBQUksQ0FBQ1QsSUFBTCxDQUFVdUI7QUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEY7QUFBQSxhQUFnQmQsSUFBSSxDQUFDQyxHQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJDRDs7QUFFRCwrREFBZTJFLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU2dCLFlBQVQsQ0FBc0I7QUFDcEJ0RyxNQURvQjtBQUVwQkMsTUFGb0I7QUFHcEJJLFVBSG9CO0FBSXBCRCxPQUpvQjtBQUtwQkcsU0FMb0I7QUFNcEJLLFVBTm9CO0FBT3BCQztBQVBvQixDQUF0QixFQVFHO0FBQ0Qsc0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxTQUFLLE1BQVg7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUFBLDhCQUNFLDhEQUFDLG9EQUFEO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBc0IsY0FBTSxNQUE1QjtBQUE2QixXQUFHLEVBQUViLElBQUksQ0FBQ0MsSUFBTCxDQUFVbUI7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0UsOERBQUMsMERBQUQ7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBRyxJQUFHcEIsSUFBSSxDQUFDQyxJQUFMLENBQVVzQixRQUFTLEVBQW5DO0FBQUEsaUNBQ0U7QUFBQSxzQkFBSXZCLElBQUksQ0FBQ0MsSUFBTCxDQUFVdUI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQVNFLDhEQUFDLHdEQUFEO0FBQUEsa0JBQVlDLDZEQUFhLENBQUN6QixJQUFJLENBQUMwQixTQUFOO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixFQVdHMUIsSUFBSSxDQUFDMkIsUUFBTCxpQkFBaUIsOERBQUMsd0RBQUQ7QUFBVyxlQUFPLEVBQUUzQixJQUFJLENBQUMyQjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWHBCLGVBYUUsOERBQUMsK0RBQUQ7QUFDRSxhQUFLLEVBQUU7QUFDTEMsa0JBQVEsRUFBRSxNQURMO0FBRUxDLHVCQUFhLEVBQUUsT0FGVjtBQUdMQyxxQkFBVyxFQUFFO0FBSFIsU0FEVDtBQUFBLGtCQU1HOUIsSUFBSSxDQUFDK0I7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUF3QkUsOERBQUMsMkRBQUQ7QUFBYyxXQUFLLE1BQW5CO0FBQUEsOEJBQ0UsOERBQUMsbURBQUQ7QUFDRSxZQUFJLEVBQUV4QixPQUFPLEdBQUcsT0FBSCxHQUFhLGVBRDVCO0FBRUUsYUFBSyxFQUFDLEtBRlI7QUFHRSxhQUFLLEVBQUU7QUFBRVksZ0JBQU0sRUFBRTtBQUFWLFNBSFQ7QUFJRSxlQUFPLEVBQUUsTUFDUGEsNERBQVEsQ0FBQ2hDLElBQUksQ0FBQ1csR0FBTixFQUFXVixJQUFJLENBQUNVLEdBQWhCLEVBQXFCTixRQUFyQixFQUErQkUsT0FBTyxHQUFHLEtBQUgsR0FBVyxJQUFqRDtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVVFLDhEQUFDLCtDQUFEO0FBQ0UsY0FBTSxFQUFFUCxJQUFJLENBQUNXLEdBRGY7QUFFRSxlQUFPLEVBQ0xQLEtBQUssQ0FBQ0ksTUFBTixHQUFlLENBQWYsaUJBQ0U7QUFBTSxtQkFBUyxFQUFDLGVBQWhCO0FBQUEsb0JBQ0ksR0FBRUosS0FBSyxDQUFDSSxNQUFPLElBQUdKLEtBQUssQ0FBQ0ksTUFBTixLQUFpQixDQUFqQixHQUFxQixNQUFyQixHQUE4QixPQUFRO0FBRDVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFxQkUsOERBQUMsc0RBQUQ7QUFBUyxjQUFNO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRixlQXVCRTtBQUNFLGFBQUssRUFBRTtBQUNMNEUsa0JBQVEsRUFBRSxNQURMO0FBRUxqQixnQkFBTSxFQUFFdkQsUUFBUSxDQUFDSixNQUFULEdBQWtCLENBQWxCLEdBQXNCLE9BQXRCLEdBQWdDLE1BRm5DO0FBR0w2RSxzQkFBWSxFQUFFO0FBSFQsU0FEVDtBQUFBLGtCQU1HekUsUUFBUSxDQUFDSixNQUFULEdBQWtCLENBQWxCLElBQ0NJLFFBQVEsQ0FBQ2pDLEdBQVQsQ0FBYXVELE9BQU8saUJBQ2xCLDhEQUFDLGtEQUFEO0FBRUUsaUJBQU8sRUFBRUEsT0FGWDtBQUdFLGdCQUFNLEVBQUVsQyxJQUFJLENBQUNXLEdBSGY7QUFJRSxjQUFJLEVBQUVWLElBSlI7QUFLRSxxQkFBVyxFQUFFWTtBQUxmLFdBQ09xQixPQUFPLENBQUN2QixHQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJGLGVBeUNFLDhEQUFDLHVEQUFEO0FBQW1CLGNBQU0sRUFBRVgsSUFBSSxDQUFDVyxHQUFoQztBQUFxQyxZQUFJLEVBQUVWLElBQTNDO0FBQWlELG1CQUFXLEVBQUVZO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0VEOztBQUVELCtEQUFleUYsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxZQUFULENBQXNCO0FBQUVyRSxTQUFGO0FBQVdqQyxNQUFYO0FBQWlCWSxhQUFqQjtBQUE4QndCO0FBQTlCLENBQXRCLEVBQThEO0FBQzVELFFBQU07QUFBQSxPQUFDVyxRQUFEO0FBQUEsT0FBV3dEO0FBQVgsTUFBMEJsRywrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDREQUFEO0FBQUEsNkJBQ0UsOERBQUMsc0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyw2REFBRDtBQUFnQixhQUFHLEVBQUU0QixPQUFPLENBQUNqQyxJQUFSLENBQWFtQjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBQSxrQ0FDRSw4REFBQyw2REFBRDtBQUFnQixjQUFFLEVBQUMsR0FBbkI7QUFBdUIsZ0JBQUksRUFBRyxJQUFHYyxPQUFPLENBQUNqQyxJQUFSLENBQWFzQixRQUFTLEVBQXZEO0FBQUEsc0JBQ0dXLE9BQU8sQ0FBQ2pDLElBQVIsQ0FBYXVCO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSw4REFBQywrREFBRDtBQUFBLHNCQUFtQkMsNkRBQWEsQ0FBQ1MsT0FBTyxDQUFDdUUsSUFBVDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBTUUsOERBQUMsMkRBQUQ7QUFBQSxzQkFBZXZFLE9BQU8sQ0FBQ0g7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQVFFLDhEQUFDLDhEQUFEO0FBQUEsbUNBQ0UsOERBQUMsNkRBQUQ7QUFBQSx3QkFDRyxDQUFDOUIsSUFBSSxDQUFDb0IsSUFBTCxLQUFjLE1BQWQsSUFBd0JhLE9BQU8sQ0FBQ2pDLElBQVIsQ0FBYVUsR0FBYixLQUFxQlYsSUFBSSxDQUFDVSxHQUFuRCxrQkFDQyw4REFBQyxtREFBRDtBQUNFLHdCQUFRLEVBQUVxQyxRQURaO0FBRUUscUJBQUssRUFBQyxLQUZSO0FBR0Usb0JBQUksRUFBQyxPQUhQO0FBSUUsdUJBQU8sRUFBRSxZQUFZO0FBQ25Cd0QsNkJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQSx3QkFBTUUsaUVBQWEsQ0FBQ3JFLE1BQUQsRUFBU0gsT0FBTyxDQUFDdkIsR0FBakIsRUFBc0JFLFdBQXRCLENBQW5CO0FBQ0EyRiw2QkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNEO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFrQ0Q7O0FBRUQsK0RBQWVELFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBLFNBQVNJLEtBQVQsQ0FBZTtBQUFFMUcsTUFBRjtBQUFRMkcsV0FBUjtBQUFtQkM7QUFBbkIsQ0FBZixFQUFrRDtBQUNoRCxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVE1RztBQUFSLE1BQW9CSSwrQ0FBUSxDQUFDc0csU0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxVQUFEO0FBQUEsT0FBYTVHO0FBQWIsTUFBOEJHLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDMEcsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0IzRywrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7QUFFQSxRQUFNO0FBQUEsT0FBQzRHLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCN0csK0NBQVEsQ0FBQyxDQUFELENBQTVDO0FBRUE4RyxrREFBUyxDQUFDLE1BQU07QUFDZEMsWUFBUSxDQUFDQyxLQUFULEdBQWtCLFlBQVdySCxJQUFJLENBQUN1QixJQUFMLENBQVVsRCxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBQXdCLEVBQXJEO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBOEksa0RBQVMsQ0FBQyxNQUFNO0FBQ2RMLGNBQVUsSUFBSVEsVUFBVSxDQUFDLE1BQU1wSCxhQUFhLENBQUMsS0FBRCxDQUFwQixFQUE2QixJQUE3QixDQUF4QjtBQUNELEdBRlEsRUFFTixDQUFDNEcsVUFBRCxDQUZNLENBQVQ7QUFJQSxNQUFJRCxLQUFLLENBQUN0RyxNQUFOLEtBQWlCLENBQWpCLElBQXNCcUcsWUFBMUIsRUFBd0Msb0JBQU8sOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQLENBZlEsQ0FpQmhEOztBQUNBLFFBQU1XLGlCQUFpQixHQUFHLFlBQVk7QUFDcEMsUUFBSTtBQUNGLFlBQU03QixHQUFHLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVyxHQUFFQyxtREFBUSxZQUFyQixFQUFrQztBQUNsREMsZUFBTyxFQUFFO0FBQUVDLHVCQUFhLEVBQUVDLHFEQUFBLENBQVcsT0FBWDtBQUFqQixTQUR5QztBQUVsRHlCLGNBQU0sRUFBRTtBQUFFUDtBQUFGO0FBRjBDLE9BQWxDLENBQWxCO0FBS0EsVUFBSXZCLEdBQUcsQ0FBQ00sSUFBSixDQUFTekYsTUFBVCxLQUFvQixDQUF4QixFQUEyQnlHLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFFM0IvRyxjQUFRLENBQUU4RCxJQUFELElBQVUsQ0FBQyxHQUFHQSxJQUFKLEVBQVUsR0FBRzJCLEdBQUcsQ0FBQ00sSUFBakIsQ0FBWCxDQUFSO0FBQ0FrQixtQkFBYSxDQUFFbkQsSUFBRCxJQUFVQSxJQUFJLEdBQUcsQ0FBbEIsQ0FBYjtBQUNELEtBVkQsQ0FVRSxPQUFPbkUsS0FBUCxFQUFjO0FBQ2RxRyxXQUFLLENBQUMsc0JBQUQsQ0FBTDtBQUNEO0FBQ0YsR0FkRDs7QUFnQkEsc0JBQ0U7QUFBQSxlQUNHYSxVQUFVLGlCQUFJLDhEQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEakIsZUFFRSw4REFBQyxzREFBRDtBQUFBLDhCQUNFLDhEQUFDLGdFQUFEO0FBQVksWUFBSSxFQUFFOUcsSUFBbEI7QUFBd0IsZ0JBQVEsRUFBRUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUc0RyxLQUFLLENBQUN0RyxNQUFOLEtBQWlCLENBQWpCLElBQXNCcUcsWUFBdEIsZ0JBQ0MsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBQUE7QUFHQztBQUNBLG9FQUFDLHlFQUFEO0FBQ0UsZUFBTyxFQUFFRyxPQURYO0FBRUUsWUFBSSxFQUFFUSxpQkFGUjtBQUdFLGNBQU0sZUFBRSw4REFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhWO0FBSUUsa0JBQVUsZUFBRSw4REFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpkO0FBS0Usa0JBQVUsRUFBRVYsS0FBSyxDQUFDdEcsTUFMcEI7QUFBQSxrQkFPR3NHLEtBQUssQ0FBQ25JLEdBQU4sQ0FBV3FCLElBQUQsaUJBQ1QsOERBQUMsOERBQUQ7QUFFRSxjQUFJLEVBQUVBLElBRlI7QUFHRSxjQUFJLEVBQUVDLElBSFI7QUFJRSxrQkFBUSxFQUFFQyxRQUpaO0FBS0UsdUJBQWEsRUFBRUM7QUFMakIsV0FDT0gsSUFBSSxDQUFDVyxHQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQ7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQThCRDs7QUFFRGdHLEtBQUssQ0FBQ2UsZUFBTixHQUF3QixNQUFPQyxHQUFQLElBQWU7QUFDckMsTUFBSTtBQUNGLFVBQU07QUFBRUM7QUFBRixRQUFZQyxxREFBWSxDQUFDRixHQUFELENBQTlCO0FBRUEsVUFBTWhDLEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFXLEdBQUVDLG1EQUFRLFlBQXJCLEVBQWtDO0FBQ2xEQyxhQUFPLEVBQUU7QUFBRUMscUJBQWEsRUFBRTZCO0FBQWpCLE9BRHlDO0FBRWxESCxZQUFNLEVBQUU7QUFBRVAsa0JBQVUsRUFBRTtBQUFkO0FBRjBDLEtBQWxDLENBQWxCO0FBS0EsV0FBTztBQUFFTixlQUFTLEVBQUVqQixHQUFHLENBQUNNO0FBQWpCLEtBQVA7QUFDRCxHQVRELENBU0UsT0FBT3BHLEtBQVAsRUFBYztBQUNkLFdBQU87QUFBRWdILGtCQUFZLEVBQUU7QUFBaEIsS0FBUDtBQUNEO0FBQ0YsQ0FiRDs7QUFjQSwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFDQTs7QUFFQSxNQUFNbEYsYUFBYSxHQUFHQyxTQUFTLElBQUk7QUFDakMsUUFBTW9HLEtBQUssR0FBR0MsNkNBQU0sQ0FBQ0MsSUFBSSxDQUFDQyxHQUFMLEVBQUQsQ0FBcEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdILDZDQUFNLENBQUNyRyxTQUFELENBQXZCO0FBQ0EsUUFBTXlHLFdBQVcsR0FBR0wsS0FBSyxDQUFDTSxJQUFOLENBQVdGLFFBQVgsRUFBcUIsT0FBckIsQ0FBcEI7O0FBRUEsTUFBSUMsV0FBVyxHQUFHLEVBQWxCLEVBQXNCO0FBQ3BCLHdCQUNFO0FBQUEsd0NBQ1EsOERBQUMscURBQUQ7QUFBUSxjQUFNLEVBQUMsU0FBZjtBQUFBLGtCQUEwQnpHO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFI7QUFBQSxvQkFERjtBQUtELEdBTkQsTUFNTyxJQUFJeUcsV0FBVyxHQUFHLEVBQWQsSUFBb0JBLFdBQVcsR0FBRyxFQUF0QyxFQUEwQztBQUMvQyx3QkFDRTtBQUFBLDRDQUNZLDhEQUFDLHFEQUFEO0FBQVEsY0FBTSxFQUFDLFNBQWY7QUFBQSxrQkFBMEJ6RztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURaO0FBQUEsb0JBREY7QUFLRCxHQU5NLE1BTUEsSUFBSXlHLFdBQVcsR0FBRyxFQUFsQixFQUFzQjtBQUMzQix3QkFBTyw4REFBQyxxREFBRDtBQUFRLFlBQU0sRUFBQyxvQkFBZjtBQUFBLGdCQUFxQ3pHO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDtBQUNGLENBcEJEOztBQXNCQSwrREFBZUQsYUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTRHLEtBQUssR0FBR3pDLG1EQUFBLENBQWE7QUFDekIwQyxTQUFPLEVBQUcsR0FBRXpDLDZDQUFRLFlBREs7QUFFekJDLFNBQU8sRUFBRTtBQUFFQyxpQkFBYSxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBakI7QUFGZ0IsQ0FBYixDQUFkO0FBS08sTUFBTXRCLGFBQWEsR0FBRyxPQUMzQjNDLElBRDJCLEVBRTNCSixRQUYyQixFQUczQlQsTUFIMkIsRUFJM0JoQixRQUoyQixFQUszQmlELFVBTDJCLEVBTTNCckMsUUFOMkIsS0FPeEI7QUFDSCxNQUFJO0FBQ0YsVUFBTTZFLEdBQUcsR0FBRyxNQUFNMEMsS0FBSyxDQUFDckksSUFBTixDQUFXLEdBQVgsRUFBZ0I7QUFBRStCLFVBQUY7QUFBUUosY0FBUjtBQUFrQlQ7QUFBbEIsS0FBaEIsQ0FBbEI7QUFFQWhCLFlBQVEsQ0FBQzhELElBQUksSUFBSSxDQUFDMkIsR0FBRyxDQUFDTSxJQUFMLEVBQVcsR0FBR2pDLElBQWQsQ0FBVCxDQUFSO0FBQ0FiLGNBQVUsQ0FBQztBQUFFcEIsVUFBSSxFQUFFLEVBQVI7QUFBWUosY0FBUSxFQUFFO0FBQXRCLEtBQUQsQ0FBVjtBQUNELEdBTEQsQ0FLRSxPQUFPOUIsS0FBUCxFQUFjO0FBQ2QsVUFBTTBJLFFBQVEsR0FBR3BDLHFEQUFXLENBQUN0RyxLQUFELENBQTVCO0FBQ0FpQixZQUFRLENBQUN5SCxRQUFELENBQVI7QUFDRDtBQUNGLENBakJNO0FBbUJBLE1BQU1qSCxVQUFVLEdBQUcsT0FBT2UsTUFBUCxFQUFlbkMsUUFBZixFQUF5QkMsYUFBekIsS0FBMkM7QUFDbkUsTUFBSTtBQUNGLFVBQU1rSSxLQUFLLENBQUNHLE1BQU4sQ0FBYyxJQUFHbkcsTUFBTyxFQUF4QixDQUFOO0FBQ0FuQyxZQUFRLENBQUM4RCxJQUFJLElBQUlBLElBQUksQ0FBQ3ZELE1BQUwsQ0FBWVQsSUFBSSxJQUFJQSxJQUFJLENBQUNXLEdBQUwsS0FBYTBCLE1BQWpDLENBQVQsQ0FBUjtBQUNBbEMsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUpELENBSUUsT0FBT04sS0FBUCxFQUFjO0FBQ2RxRyxTQUFLLENBQUNDLHFEQUFXLENBQUN0RyxLQUFELENBQVosQ0FBTDtBQUNEO0FBQ0YsQ0FSTTtBQVVBLE1BQU1tQyxRQUFRLEdBQUcsT0FBT0ssTUFBUCxFQUFlb0csTUFBZixFQUF1QnBJLFFBQXZCLEVBQWlDSyxJQUFJLEdBQUcsSUFBeEMsS0FBaUQ7QUFDdkUsTUFBSTtBQUNGLFFBQUlBLElBQUosRUFBVTtBQUNSLFlBQU0ySCxLQUFLLENBQUNySSxJQUFOLENBQVksU0FBUXFDLE1BQU8sRUFBM0IsQ0FBTjtBQUNBaEMsY0FBUSxDQUFDMkQsSUFBSSxJQUFJLENBQUMsR0FBR0EsSUFBSixFQUFVO0FBQUUvRCxZQUFJLEVBQUV3STtBQUFSLE9BQVYsQ0FBVCxDQUFSO0FBQ0QsS0FIRCxNQUlLLElBQUksQ0FBQy9ILElBQUwsRUFBVztBQUNkLFlBQU0ySCxLQUFLLENBQUNLLEdBQU4sQ0FBVyxXQUFVckcsTUFBTyxFQUE1QixDQUFOO0FBQ0FoQyxjQUFRLENBQUMyRCxJQUFJLElBQUlBLElBQUksQ0FBQ3ZELE1BQUwsQ0FBWUMsSUFBSSxJQUFJQSxJQUFJLENBQUNULElBQUwsS0FBY3dJLE1BQWxDLENBQVQsQ0FBUjtBQUNEO0FBQ0YsR0FURCxDQVNFLE9BQU81SSxLQUFQLEVBQWM7QUFDZHFHLFNBQUssQ0FBQ0MscURBQVcsQ0FBQ3RHLEtBQUQsQ0FBWixDQUFMO0FBQ0Q7QUFDRixDQWJNO0FBZUEsTUFBTThDLFdBQVcsR0FBRyxPQUFPTixNQUFQLEVBQWVwQyxJQUFmLEVBQXFCOEIsSUFBckIsRUFBMkJsQixXQUEzQixFQUF3Q3lCLE9BQXhDLEtBQW9EO0FBQzdFLE1BQUk7QUFDRixVQUFNcUQsR0FBRyxHQUFHLE1BQU0wQyxLQUFLLENBQUNySSxJQUFOLENBQVksWUFBV3FDLE1BQU8sRUFBOUIsRUFBaUM7QUFBRU47QUFBRixLQUFqQyxDQUFsQjtBQUVBLFVBQU00RyxVQUFVLEdBQUc7QUFDakJoSSxTQUFHLEVBQUVnRixHQUFHLENBQUNNLElBRFE7QUFFakJoRyxVQUZpQjtBQUdqQjhCLFVBSGlCO0FBSWpCMEUsVUFBSSxFQUFFdUIsSUFBSSxDQUFDQyxHQUFMO0FBSlcsS0FBbkI7QUFPQXBILGVBQVcsQ0FBQ21ELElBQUksSUFBSSxDQUFDMkUsVUFBRCxFQUFhLEdBQUczRSxJQUFoQixDQUFULENBQVg7QUFDQTFCLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDRCxHQVpELENBWUUsT0FBT3pDLEtBQVAsRUFBYztBQUNkcUcsU0FBSyxDQUFDQyxxREFBVyxDQUFDdEcsS0FBRCxDQUFaLENBQUw7QUFDRDtBQUNGLENBaEJNO0FBa0JBLE1BQU02RyxhQUFhLEdBQUcsT0FBT3JFLE1BQVAsRUFBZXVHLFNBQWYsRUFBMEIvSCxXQUExQixLQUEwQztBQUNyRSxNQUFJO0FBQ0YsVUFBTXdILEtBQUssQ0FBQ0csTUFBTixDQUFjLElBQUduRyxNQUFPLElBQUd1RyxTQUFVLEVBQXJDLENBQU47QUFDQS9ILGVBQVcsQ0FBQ21ELElBQUksSUFBSUEsSUFBSSxDQUFDdkQsTUFBTCxDQUFZeUIsT0FBTyxJQUFJQSxPQUFPLENBQUN2QixHQUFSLEtBQWdCaUksU0FBdkMsQ0FBVCxDQUFYO0FBQ0QsR0FIRCxDQUdFLE9BQU8vSSxLQUFQLEVBQWM7QUFDZHFHLFNBQUssQ0FBQ0MscURBQVcsQ0FBQ3RHLEtBQUQsQ0FBWixDQUFMO0FBQ0Q7QUFDRixDQVBNLEM7Ozs7Ozs7Ozs7Ozs7O0FDeEVQOztBQUVBLE1BQU00RSxTQUFTLEdBQUcsTUFBTWpCLEtBQU4sSUFBZTtBQUMvQixNQUFJO0FBQ0YsVUFBTXFGLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsUUFBSSxDQUFDRSxNQUFMLENBQVksTUFBWixFQUFvQnZGLEtBQXBCO0FBQ0FxRixRQUFJLENBQUNFLE1BQUwsQ0FBWSxlQUFaLEVBQTZCLGNBQTdCO0FBQ0FGLFFBQUksQ0FBQ0UsTUFBTCxDQUFZLFlBQVosRUFBMEIsV0FBMUI7QUFFQSxVQUFNcEQsR0FBRyxHQUFHLE1BQU1DLGlEQUFBLENBQVdvRCx3REFBWCxFQUF1Q0gsSUFBdkMsQ0FBbEI7QUFDQSxXQUFPbEQsR0FBRyxDQUFDTSxJQUFKLENBQVNnRCxHQUFoQjtBQUNELEdBUkQsQ0FRRSxPQUFPcEosS0FBUCxFQUFjO0FBQ2Q7QUFDRDtBQUNGLENBWkQ7O0FBY0EsK0RBQWU0RSxTQUFmLEU7Ozs7Ozs7Ozs7O0FDaEJBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlUG9zdHMgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIlNvcnJ5XCIgY29udGVudD1cIlVzZXIgaGFzIG5vdCBwb3N0ZWQgYW55dGhpbmcgeWV0IVwiIC8+XHJcbiAgICA8QnV0dG9uIGljb249XCJsb25nIGFycm93IGFsdGVybmF0ZSBsZWZ0XCIgY29udGVudD1cIkdvIEJhY2tcIiBhcz1cImFcIiBocmVmPVwiL1wiIC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Gb2xsb3dEYXRhID0gKHtcclxuICBwcm9maWxlTmFtZSxcclxuICBmb2xsb3dlcnNDb21wb25lbnQgPSB0cnVlLFxyXG4gIGZvbGxvd2luZ0NvbXBvbmVudCA9IHRydWVcclxufSkgPT4gKFxyXG4gIDw+XHJcbiAgICB7Zm9sbG93ZXJzQ29tcG9uZW50ICYmIChcclxuICAgICAgPE1lc3NhZ2VcclxuICAgICAgICBpY29uPVwidXNlciBvdXRsaW5lXCJcclxuICAgICAgICBpbmZvXHJcbiAgICAgICAgY29udGVudD17YCR7cHJvZmlsZU5hbWUuc3BsaXQoXCIgXCIpWzBdICsgXCIgZG9lcyBub3QgaGF2ZSBmb2xsb3dlcnNcIn1gfVxyXG4gICAgICAvPlxyXG4gICAgKX1cclxuXHJcbiAgICB7Zm9sbG93aW5nQ29tcG9uZW50ICYmIChcclxuICAgICAgPE1lc3NhZ2VcclxuICAgICAgICBpY29uPVwidXNlciBvdXRsaW5lXCJcclxuICAgICAgICBpbmZvXHJcbiAgICAgICAgY29udGVudD17YCR7cHJvZmlsZU5hbWUuc3BsaXQoXCIgXCIpWzBdICsgXCIgZG9lcyBub3QgZm9sbG93IGFueSB1c2Vyc1wifWB9XHJcbiAgICAgIC8+XHJcbiAgICApfVxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vTWVzc2FnZXMgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2VcclxuICAgIGluZm9cclxuICAgIGljb249XCJ0ZWxlZ3JhbSBwbGFuZVwiXHJcbiAgICBoZWFkZXI9XCJTb3JyeVwiXHJcbiAgICBjb250ZW50PVwiWW91IGhhdmUgbm90IG1lc3NhZ2VkIGFueW9uZSB5ZXQuU2VhcmNoIGFib3ZlIHRvIG1lc3NhZ2Ugc29tZW9uZSFcIlxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qb3N0cyA9ICgpID0+IChcclxuICA8TWVzc2FnZVxyXG4gICAgaW5mb1xyXG4gICAgaWNvbj1cIm1laFwiXHJcbiAgICBoZWFkZXI9XCJIZXkhXCJcclxuICAgIGNvbnRlbnQ9XCJObyBQb3N0cy4gTWFrZSBzdXJlIHlvdSBoYXZlIGZvbGxvd2VkIHNvbWVvbmUuXCJcclxuICAvPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgUGxhY2Vob2xkZXIsXHJcbiAgRGl2aWRlcixcclxuICBMaXN0LFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIENvbnRhaW5lcixcclxuICBJY29uXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYWNlSG9sZGVyUG9zdHMgPSAoKSA9PlxyXG4gIHJhbmdlKDEsIDMpLm1hcChpdGVtID0+IChcclxuICAgIDw+XHJcbiAgICAgIDxQbGFjZWhvbGRlciBrZXk9e2l0ZW19IGZsdWlkPlxyXG4gICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXIgaW1hZ2U+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cclxuICAgICAgICA8UGxhY2Vob2xkZXIuUGFyYWdyYXBoPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICA8L1BsYWNlaG9sZGVyLlBhcmFncmFwaD5cclxuICAgICAgPC9QbGFjZWhvbGRlcj5cclxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICA8Lz5cclxuICApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGFjZUhvbGRlclN1Z2dlc3Rpb25zID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8TGlzdC5JdGVtPlxyXG4gICAgICA8Q2FyZCBjb2xvcj1cInJlZFwiPlxyXG4gICAgICAgIDxQbGFjZWhvbGRlcj5cclxuICAgICAgICAgIDxQbGFjZWhvbGRlci5JbWFnZSBzcXVhcmUgLz5cclxuICAgICAgICA8L1BsYWNlaG9sZGVyPlxyXG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXI+XHJcbiAgICAgICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwibWVkaXVtXCIgLz5cclxuICAgICAgICAgICAgPC9QbGFjZWhvbGRlci5IZWFkZXI+XHJcbiAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxyXG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG5cclxuICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBpY29uPVwiYWRkIHVzZXJcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiRm9sbG93XCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0d2l0dGVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvTGlzdC5JdGVtPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYWNlSG9sZGVyTm90aWZpY2F0aW9ucyA9ICgpID0+XHJcbiAgcmFuZ2UoMSwgMTApLm1hcChpdGVtID0+IChcclxuICAgIDw+XHJcbiAgICAgIDxQbGFjZWhvbGRlciBrZXk9e2l0ZW19PlxyXG4gICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXIgaW1hZ2U+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxyXG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cclxuICAgICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cclxuICAgICAgPC9QbGFjZWhvbGRlcj5cclxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICA8Lz5cclxuICApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBFbmRNZXNzYWdlID0gKCkgPT4gKFxyXG4gIDxDb250YWluZXIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICA8SWNvbiBuYW1lPVwicmVmcmVzaFwiIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMaWtlc1BsYWNlSG9sZGVyID0gKCkgPT5cclxuICByYW5nZSgxLCA2KS5tYXAoaXRlbSA9PiAoXHJcbiAgICA8UGxhY2Vob2xkZXIga2V5PXtpdGVtfSBzdHlsZT17eyBtaW5XaWR0aDogXCIyMDBweFwiIH19PlxyXG4gICAgICA8UGxhY2Vob2xkZXIuSGVhZGVyIGltYWdlPlxyXG4gICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIGxlbmd0aD1cImZ1bGxcIiAvPlxyXG4gICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cclxuICAgIDwvUGxhY2Vob2xkZXI+XHJcbiAgKSk7XHJcbiIsImltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3REZWxldGVUb2FzdHIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2FzdENvbnRhaW5lclxyXG4gICAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxyXG4gICAgICBhdXRvQ2xvc2U9ezMwMDB9XHJcbiAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcbiAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuICAgICAgY2xvc2VPbkNsaWNrXHJcbiAgICAgIHJ0bD17ZmFsc2V9XHJcbiAgICAgIHBhdXNlT25Gb2N1c0xvc3NcclxuICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgIHBhdXNlT25Ib3Zlcj17ZmFsc2V9PlxyXG4gICAgICB7dG9hc3QuaW5mbyhcIkRlbGV0ZWQgU3VjY2Vzc2Z1bGx5XCIsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcclxuICAgICAgfSl9XHJcbiAgICA8L1RvYXN0Q29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JUb2FzdHIgPSAoeyBlcnJvciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2FzdENvbnRhaW5lclxyXG4gICAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxyXG4gICAgICBhdXRvQ2xvc2U9ezMwMDB9XHJcbiAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcbiAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuICAgICAgY2xvc2VPbkNsaWNrXHJcbiAgICAgIHJ0bD17ZmFsc2V9XHJcbiAgICAgIHBhdXNlT25Gb2N1c0xvc3NcclxuICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgIHBhdXNlT25Ib3Zlcj17ZmFsc2V9PlxyXG4gICAgICB7dG9hc3QuZXJyb3IoZXJyb3IsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcclxuICAgICAgfSl9XHJcbiAgICA8L1RvYXN0Q29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTXNnU2VudFRvYXN0ciA9ICgpID0+IChcclxuICA8VG9hc3RDb250YWluZXJcclxuICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXHJcbiAgICBhdXRvQ2xvc2U9ezMwMDB9XHJcbiAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxyXG4gICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxyXG4gICAgY2xvc2VPbkNsaWNrXHJcbiAgICBydGw9e2ZhbHNlfVxyXG4gICAgcGF1c2VPbkZvY3VzTG9zc1xyXG4gICAgZHJhZ2dhYmxlXHJcbiAgICBwYXVzZU9uSG92ZXI9e2ZhbHNlfT5cclxuICAgIHt0b2FzdC5zdWNjZXNzKFwiU2VudCBzdWNjZXNzZnVsbHlcIiwge1xyXG4gICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcclxuICAgIH0pfVxyXG4gIDwvVG9hc3RDb250YWluZXI+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgSWNvbixcclxuICBJbWFnZSxcclxuICBEaXZpZGVyLFxyXG4gIFNlZ21lbnQsXHJcbiAgQnV0dG9uLFxyXG4gIFBvcHVwLFxyXG4gIEhlYWRlcixcclxuICBNb2RhbCxcclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tIFwiLi9Qb3N0Q29tbWVudHNcIjtcclxuaW1wb3J0IENvbW1lbnRJbnB1dEZpZWxkIGZyb20gXCIuL0NvbW1lbnRJbnB1dEZpZWxkXCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZGVsZXRlUG9zdCwgbGlrZVBvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcclxuaW1wb3J0IExpa2VzTGlzdCBmcm9tIFwiLi9MaWtlc0xpc3RcIjtcclxuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSBcIi4vSW1hZ2VNb2RhbFwiO1xyXG5pbXBvcnQgTm9JbWFnZU1vZGFsIGZyb20gXCIuL05vSW1hZ2VNb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gQ2FyZFBvc3QoeyBwb3N0LCB1c2VyLCBzZXRQb3N0cywgc2V0U2hvd1RvYXN0ciB9KSB7XHJcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZShwb3N0Lmxpa2VzKTtcclxuXHJcbiAgY29uc3QgaXNMaWtlZCA9XHJcbiAgICBsaWtlcy5sZW5ndGggPiAwICYmXHJcbiAgICBsaWtlcy5maWx0ZXIoKGxpa2UpID0+IGxpa2UudXNlciA9PT0gdXNlci5faWQpLmxlbmd0aCA+IDA7XHJcblxyXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUocG9zdC5jb21tZW50cyk7XHJcblxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGFkZFByb3BzVG9Nb2RhbCA9ICgpID0+ICh7XHJcbiAgICBwb3N0LFxyXG4gICAgdXNlcixcclxuICAgIHNldExpa2VzLFxyXG4gICAgbGlrZXMsXHJcbiAgICBpc0xpa2VkLFxyXG4gICAgY29tbWVudHMsXHJcbiAgICBzZXRDb21tZW50cyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93TW9kYWwgJiYgKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgb3Blbj17c2hvd01vZGFsfVxyXG4gICAgICAgICAgY2xvc2VJY29uXHJcbiAgICAgICAgICBjbG9zZU9uRGltbWVyQ2xpY2tcclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIHtwb3N0LnBpY1VybCA/IChcclxuICAgICAgICAgICAgICA8SW1hZ2VNb2RhbCB7Li4uYWRkUHJvcHNUb01vZGFsKCl9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPE5vSW1hZ2VNb2RhbCB7Li4uYWRkUHJvcHNUb01vZGFsKCl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxTZWdtZW50IGJhc2ljPlxyXG4gICAgICAgIDxDYXJkIGNvbG9yPVwidGVhbFwiIGZsdWlkPlxyXG4gICAgICAgICAge3Bvc3QucGljVXJsICYmIChcclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtwb3N0LnBpY1VybH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgZmxvYXRlZD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIHdyYXBwZWRcclxuICAgICAgICAgICAgICB1aT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgYWx0PVwiUG9zdEltYWdlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIGZsb2F0ZWQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICBzcmM9e3Bvc3QudXNlci5wcm9maWxlUGljVXJsfVxyXG4gICAgICAgICAgICAgIGF2YXRhclxyXG4gICAgICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7KHVzZXIucm9sZSA9PT0gXCJyb290XCIgfHwgcG9zdC51c2VyLl9pZCA9PT0gdXNlci5faWQpICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgICAgICAgIG9uPVwiY2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInRvcCByaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2RlbGV0ZUljb24uc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtaW5pXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDRcIiBjb250ZW50PVwiQXJlIHlvdSBzdXJlP1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZSE8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVBvc3QocG9zdC5faWQsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxhPntwb3N0LnVzZXIubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPENhcmQuTWV0YT57Y2FsY3VsYXRlVGltZShwb3N0LmNyZWF0ZWRBdCl9PC9DYXJkLk1ldGE+XHJcblxyXG4gICAgICAgICAgICB7cG9zdC5sb2NhdGlvbiAmJiA8Q2FyZC5NZXRhIGNvbnRlbnQ9e3Bvc3QubG9jYXRpb259IC8+fVxyXG5cclxuICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxyXG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjFweFwiLFxyXG4gICAgICAgICAgICAgICAgd29yZFNwYWNpbmc6IFwiMC4zNXB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwb3N0LnRleHR9XHJcbiAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG5cclxuICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgbmFtZT17aXNMaWtlZCA/IFwiaGVhcnRcIiA6IFwiaGVhcnQgb3V0bGluZVwifVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgIGxpa2VQb3N0KHBvc3QuX2lkLCB1c2VyLl9pZCwgc2V0TGlrZXMsIGlzTGlrZWQgPyBmYWxzZSA6IHRydWUpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPExpa2VzTGlzdFxyXG4gICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgdHJpZ2dlcj17XHJcbiAgICAgICAgICAgICAgICBsaWtlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbkxpa2VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtsaWtlcy5sZW5ndGh9ICR7bGlrZXMubGVuZ3RoID09PSAxID8gXCJsaWtlXCIgOiBcImxpa2VzXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnQgb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI3cHhcIiB9fVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgIGNvbW1lbnRzLm1hcChcclxuICAgICAgICAgICAgICAgIChjb21tZW50LCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICBpIDwgMyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RDb21tZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjb21tZW50Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAzICYmIChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiVmlldyBNb3JlXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgICAgICAgICBiYXNpY1xyXG4gICAgICAgICAgICAgICAgY2lyY3VsYXJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcblxyXG4gICAgICAgICAgICA8Q29tbWVudElucHV0RmllbGRcclxuICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFBvc3Q7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHBvc3RDb21tZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50SW5wdXRGaWVsZCh7IHBvc3RJZCwgdXNlciwgc2V0Q29tbWVudHMgfSkge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIHJlcGx5XHJcbiAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGF3YWl0IHBvc3RDb21tZW50KHBvc3RJZCwgdXNlciwgdGV4dCwgc2V0Q29tbWVudHMsIHNldFRleHQpO1xyXG5cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIENvbW1lbnRcIlxyXG4gICAgICAgIGFjdGlvbj17e1xyXG4gICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgaWNvbjogXCJlZGl0XCIsXHJcbiAgICAgICAgICBsb2FkaW5nOiBsb2FkaW5nLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHRleHQgPT09IFwiXCIgfHwgbG9hZGluZyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRJbnB1dEZpZWxkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIEltYWdlLCBEaXZpZGVyLCBNZXNzYWdlLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB1cGxvYWRQaWMgZnJvbSBcIi4uLy4uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeVwiO1xyXG5pbXBvcnQgeyBzdWJtaXROZXdQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVQb3N0KHsgdXNlciwgc2V0UG9zdHMgfSkge1xyXG4gIGNvbnN0IFtuZXdQb3N0LCBzZXROZXdQb3N0XSA9IHVzZVN0YXRlKHsgdGV4dDogXCJcIiwgbG9jYXRpb246IFwiXCIgfSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIGZpbGVzIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBpZiAobmFtZSA9PT0gXCJtZWRpYVwiKSB7XHJcbiAgICAgIHNldE1lZGlhKGZpbGVzWzBdKTtcclxuICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROZXdQb3N0KHByZXYgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkU3R5bGVzID0gKCkgPT4gKHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGhlaWdodDogXCIxNTBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTUwcHhcIixcclxuICAgIGJvcmRlcjogXCJkb3R0ZWRcIixcclxuICAgIHBhZGRpbmdUb3A6IG1lZGlhID09PSBudWxsICYmIFwiNjBweFwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIGJvcmRlckNvbG9yOiBoaWdobGlnaHRlZCA/IFwiZ3JlZW5cIiA6IFwiYmxhY2tcIlxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBsZXQgcGljVXJsO1xyXG5cclxuICAgIGlmIChtZWRpYSAhPT0gbnVsbCkge1xyXG4gICAgICBwaWNVcmwgPSBhd2FpdCB1cGxvYWRQaWMobWVkaWEpO1xyXG4gICAgICBpZiAoIXBpY1VybCkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBzZXRFcnJvcihcIkVycm9yIFVwbG9hZGluZyBJbWFnZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHN1Ym1pdE5ld1Bvc3QoXHJcbiAgICAgIG5ld1Bvc3QudGV4dCxcclxuICAgICAgbmV3UG9zdC5sb2NhdGlvbixcclxuICAgICAgcGljVXJsLFxyXG4gICAgICBzZXRQb3N0cyxcclxuICAgICAgc2V0TmV3UG9zdCxcclxuICAgICAgc2V0RXJyb3JcclxuICAgICk7XHJcblxyXG4gICAgc2V0TWVkaWEobnVsbCk7XHJcbiAgICBzZXRNZWRpYVByZXZpZXcobnVsbCk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0gZXJyb3I9e2Vycm9yICE9PSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3IobnVsbCl9XHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvcn1cclxuICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3VzZXIucHJvZmlsZVBpY1VybH0gY2lyY3VsYXIgYXZhdGFyIGlubGluZSAvPlxyXG4gICAgICAgICAgPEZvcm0uVGV4dEFyZWFcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0cyBIYXBwZW5pbmdcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LnRleHR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgIHdpZHRoPXsxNH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LmxvY2F0aW9ufVxyXG4gICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkFkZCBMb2NhdGlvblwiXHJcbiAgICAgICAgICAgIGljb249XCJtYXAgbWFya2VyIGFsdGVybmF0ZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2FudCB0byBhZGQgTG9jYXRpb24/XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG5hbWU9XCJtZWRpYVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgc3R5bGU9e2FkZFN0eWxlcygpfVxyXG4gICAgICAgICAgb25EcmFnT3Zlcj17ZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25EcmFnTGVhdmU9e2UgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyb3A9e2UgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuXHJcbiAgICAgICAgICAgIHNldE1lZGlhKGRyb3BwZWRGaWxlWzBdKTtcclxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAge21lZGlhID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIHNpemU9XCJiaWdcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxNTBweFwiLCB3aWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e21lZGlhUHJldmlld31cclxuICAgICAgICAgICAgICAgIGFsdD1cIlBvc3RJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgZGlzYWJsZWQ9e25ld1Bvc3QudGV4dCA9PT0gXCJcIiB8fCBsb2FkaW5nfVxyXG4gICAgICAgICAgY29udGVudD17PHN0cm9uZz5Qb3N0PC9zdHJvbmc+fVxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxREExRjJcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgaWNvbj1cInNlbmRcIlxyXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQb3N0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsLCBHcmlkLCBJbWFnZSwgQ2FyZCwgSWNvbiwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gXCIuL1Bvc3RDb21tZW50c1wiO1xyXG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSBcIi4vQ29tbWVudElucHV0RmllbGRcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBsaWtlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VNb2RhbCh7XHJcbiAgcG9zdCxcclxuICB1c2VyLFxyXG4gIHNldExpa2VzLFxyXG4gIGxpa2VzLFxyXG4gIGlzTGlrZWQsXHJcbiAgY29tbWVudHMsXHJcbiAgc2V0Q29tbWVudHNcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R3JpZCBjb2x1bW5zPXsyfSBzdGFja2FibGUgcmVsYXhlZD5cclxuICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8TW9kYWwuQ29udGVudCBpbWFnZT5cclxuICAgICAgICAgICAgPEltYWdlIHdyYXBwZWQgc2l6ZT1cImxhcmdlXCIgc3JjPXtwb3N0LnBpY1VybH0gLz5cclxuICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8Q2FyZCBmbHVpZD5cclxuICAgICAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICA8SW1hZ2UgZmxvYXRlZD1cImxlZnRcIiBhdmF0YXIgc3JjPXtwb3N0LnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+e3Bvc3QudXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICA8Q2FyZC5NZXRhPntjYWxjdWxhdGVUaW1lKHBvc3QuY3JlYXRlZEF0KX08L0NhcmQuTWV0YT5cclxuXHJcbiAgICAgICAgICAgICAge3Bvc3QubG9jYXRpb24gJiYgPENhcmQuTWV0YSBjb250ZW50PXtwb3N0LmxvY2F0aW9ufSAvPn1cclxuXHJcbiAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcclxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjFweFwiLFxyXG4gICAgICAgICAgICAgICAgICB3b3JkU3BhY2luZzogXCIwLjM1cHhcIlxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxyXG4gICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtpc0xpa2VkID8gXCJoZWFydFwiIDogXCJoZWFydCBvdXRsaW5lXCJ9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBsaWtlUG9zdChwb3N0Ll9pZCwgdXNlci5faWQsIHNldExpa2VzLCBpc0xpa2VkID8gZmFsc2UgOiB0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxMaWtlc0xpc3RcclxuICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgICAgICAgbGlrZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbkxpa2VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Ake2xpa2VzLmxlbmd0aH0gJHtsaWtlcy5sZW5ndGggPT09IDEgPyBcImxpa2VcIiA6IFwibGlrZXNcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogY29tbWVudHMubGVuZ3RoID4gMiA/IFwiMjAwcHhcIiA6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCJcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgY29tbWVudHMubWFwKGNvbW1lbnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0Q29tbWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtjb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxDb21tZW50SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VNb2RhbDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpc3QsIFBvcHVwLCBJbWFnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi4vLi4vdXRpbHMvY2F0Y2hFcnJvcnNcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IExpa2VzUGxhY2VIb2xkZXIgfSBmcm9tIFwiLi4vTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXBcIjtcclxuXHJcbmZ1bmN0aW9uIExpa2VzTGlzdCh7IHBvc3RJZCwgdHJpZ2dlciB9KSB7XHJcbiAgY29uc3QgW2xpa2VzTGlzdCwgc2V0TGlrZXNMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGdldExpa2VzTGlzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzL2xpa2UvJHtwb3N0SWR9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRMaWtlc0xpc3QocmVzLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UG9wdXBcclxuICAgICAgb249XCJjbGlja1wiXHJcbiAgICAgIG9uQ2xvc2U9eygpID0+IHNldExpa2VzTGlzdChbXSl9XHJcbiAgICAgIG9uT3Blbj17Z2V0TGlrZXNMaXN0fVxyXG4gICAgICBwb3BwZXJEZXBlbmRlbmNpZXM9e1tsaWtlc0xpc3RdfVxyXG4gICAgICB0cmlnZ2VyPXt0cmlnZ2VyfVxyXG4gICAgICB3aWRlXHJcbiAgICA+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxMaWtlc1BsYWNlSG9sZGVyIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtsaWtlc0xpc3QubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjE1cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTVyZW1cIixcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0IHNlbGVjdGlvbiBzaXplPVwibGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgIHtsaWtlc0xpc3QubWFwKChsaWtlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtsaWtlLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGF2YXRhciBzcmM9e2xpa2UudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvJHtsaWtlLnVzZXIudXNlcm5hbWV9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xpa2UudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvUG9wdXA+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlrZXNMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsLCBJbWFnZSwgQ2FyZCwgSWNvbiwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gXCIuL1Bvc3RDb21tZW50c1wiO1xyXG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSBcIi4vQ29tbWVudElucHV0RmllbGRcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBsaWtlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xyXG5cclxuZnVuY3Rpb24gTm9JbWFnZU1vZGFsKHtcclxuICBwb3N0LFxyXG4gIHVzZXIsXHJcbiAgc2V0TGlrZXMsXHJcbiAgbGlrZXMsXHJcbiAgaXNMaWtlZCxcclxuICBjb21tZW50cyxcclxuICBzZXRDb21tZW50c1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGZsdWlkPlxyXG4gICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgIDxJbWFnZSBmbG9hdGVkPVwibGVmdFwiIGF2YXRhciBzcmM9e3Bvc3QudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG5cclxuICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcblxyXG4gICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxyXG5cclxuICAgICAgICB7cG9zdC5sb2NhdGlvbiAmJiA8Q2FyZC5NZXRhIGNvbnRlbnQ9e3Bvc3QubG9jYXRpb259IC8+fVxyXG5cclxuICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxyXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMXB4XCIsXHJcbiAgICAgICAgICAgIHdvcmRTcGFjaW5nOiBcIjAuMzVweFwiXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHtwb3N0LnRleHR9XHJcbiAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICA8L0NhcmQuQ29udGVudD5cclxuXHJcbiAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIG5hbWU9e2lzTGlrZWQgPyBcImhlYXJ0XCIgOiBcImhlYXJ0IG91dGxpbmVcIn1cclxuICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIGxpa2VQb3N0KHBvc3QuX2lkLCB1c2VyLl9pZCwgc2V0TGlrZXMsIGlzTGlrZWQgPyBmYWxzZSA6IHRydWUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPExpa2VzTGlzdFxyXG4gICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICBsaWtlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTGlrZXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7YCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aCA9PT0gMSA/IFwibGlrZVwiIDogXCJsaWtlc1wifWB9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBjb21tZW50cy5sZW5ndGggPiAyID8gXCIyMDBweFwiIDogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIlxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICBjb21tZW50cy5tYXAoY29tbWVudCA9PiAoXHJcbiAgICAgICAgICAgICAgPFBvc3RDb21tZW50c1xyXG4gICAgICAgICAgICAgICAga2V5PXtjb21tZW50Ll9pZH1cclxuICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkIHBvc3RJZD17cG9zdC5faWR9IHVzZXI9e3VzZXJ9IHNldENvbW1lbnRzPXtzZXRDb21tZW50c30gLz5cclxuICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm9JbWFnZU1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29tbWVudCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5pbXBvcnQgeyBkZWxldGVDb21tZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0Q29tbWVudHMoeyBjb21tZW50LCB1c2VyLCBzZXRDb21tZW50cywgcG9zdElkIH0pIHtcclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb21tZW50Lkdyb3VwPlxyXG4gICAgICAgIDxDb21tZW50PlxyXG4gICAgICAgICAgPENvbW1lbnQuQXZhdGFyIHNyYz17Y29tbWVudC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICA8Q29tbWVudC5Db250ZW50PlxyXG4gICAgICAgICAgICA8Q29tbWVudC5BdXRob3IgYXM9XCJhXCIgaHJlZj17YC8ke2NvbW1lbnQudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICB7Y29tbWVudC51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgIDwvQ29tbWVudC5BdXRob3I+XHJcbiAgICAgICAgICAgIDxDb21tZW50Lk1ldGFkYXRhPntjYWxjdWxhdGVUaW1lKGNvbW1lbnQuZGF0ZSl9PC9Db21tZW50Lk1ldGFkYXRhPlxyXG5cclxuICAgICAgICAgICAgPENvbW1lbnQuVGV4dD57Y29tbWVudC50ZXh0fTwvQ29tbWVudC5UZXh0PlxyXG5cclxuICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9ucz5cclxuICAgICAgICAgICAgICA8Q29tbWVudC5BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICB7KHVzZXIucm9sZSA9PT0gXCJyb290XCIgfHwgY29tbWVudC51c2VyLl9pZCA9PT0gdXNlci5faWQpICYmIChcclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxldGVDb21tZW50KHBvc3RJZCwgY29tbWVudC5faWQsIHNldENvbW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9uPlxyXG4gICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9ucz5cclxuICAgICAgICAgIDwvQ29tbWVudC5Db250ZW50PlxyXG4gICAgICAgIDwvQ29tbWVudD5cclxuICAgICAgPC9Db21tZW50Lkdyb3VwPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENvbW1lbnRzOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IENyZWF0ZVBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdC9DcmVhdGVQb3N0XCI7XHJcbmltcG9ydCBDYXJkUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0XCI7XHJcbmltcG9ydCB7IFNlZ21lbnQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgTm9Qb3N0cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IHsgUG9zdERlbGV0ZVRvYXN0ciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ub2FzdHJcIjtcclxuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgUGxhY2VIb2xkZXJQb3N0cyxcclxuICBFbmRNZXNzYWdlLFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9QbGFjZUhvbGRlckdyb3VwXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoeyB1c2VyLCBwb3N0c0RhdGEsIGVycm9yTG9hZGluZyB9KSB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShwb3N0c0RhdGEpO1xyXG4gIGNvbnN0IFtzaG93VG9hc3RyLCBzZXRTaG93VG9hc3RyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGFzTW9yZSwgc2V0SGFzTW9yZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgW3BhZ2VOdW1iZXIsIHNldFBhZ2VOdW1iZXJdID0gdXNlU3RhdGUoMik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGBXZWxjb21lLCAke3VzZXIubmFtZS5zcGxpdChcIiBcIilbMF19YDtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzaG93VG9hc3RyICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1RvYXN0cihmYWxzZSksIDMwMDApO1xyXG4gIH0sIFtzaG93VG9hc3RyXSk7XHJcblxyXG4gIGlmIChwb3N0cy5sZW5ndGggPT09IDAgfHwgZXJyb3JMb2FkaW5nKSByZXR1cm4gPE5vUG9zdHMgLz47XHJcblxyXG4gIC8vIOWPr+S7peebtOaOpeeUqGdldOivt+axguWvueW6lOi1hOa6kO+8jOS5n+WPr+S7peWinuWKoCBwYXJhbXNcclxuICBjb25zdCBmZXRjaERhdGFPblNjcm9sbCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcG9zdHNgLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfSxcclxuICAgICAgICBwYXJhbXM6IHsgcGFnZU51bWJlciB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHNldEhhc01vcmUoZmFsc2UpO1xyXG5cclxuICAgICAgc2V0UG9zdHMoKHByZXYpID0+IFsuLi5wcmV2LCAuLi5yZXMuZGF0YV0pO1xyXG4gICAgICBzZXRQYWdlTnVtYmVyKChwcmV2KSA9PiBwcmV2ICsgMSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChcIkVycm9yIGZldGNoaW5nIFBvc3RzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2hvd1RvYXN0ciAmJiA8UG9zdERlbGV0ZVRvYXN0ciAvPn1cclxuICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgPENyZWF0ZVBvc3QgdXNlcj17dXNlcn0gc2V0UG9zdHM9e3NldFBvc3RzfSAvPlxyXG4gICAgICAgIHtwb3N0cy5sZW5ndGggPT09IDAgfHwgZXJyb3JMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPE5vUG9zdHMgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgLy8g5peg6ZmQ5LiL5ouJ5rua5Yqo5p2hXHJcbiAgICAgICAgICA8SW5maW5pdGVTY3JvbGxcclxuICAgICAgICAgICAgaGFzTW9yZT17aGFzTW9yZX1cclxuICAgICAgICAgICAgbmV4dD17ZmV0Y2hEYXRhT25TY3JvbGx9XHJcbiAgICAgICAgICAgIGxvYWRlcj17PFBsYWNlSG9sZGVyUG9zdHMgLz59XHJcbiAgICAgICAgICAgIGVuZE1lc3NhZ2U9ezxFbmRNZXNzYWdlIC8+fVxyXG4gICAgICAgICAgICBkYXRhTGVuZ3RoPXtwb3N0cy5sZW5ndGh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICA8Q2FyZFBvc3RcclxuICAgICAgICAgICAgICAgIGtleT17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICBwb3N0PXtwb3N0fVxyXG4gICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgICAgICAgIHNldFNob3dUb2FzdHI9e3NldFNob3dUb2FzdHJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICBwYXJhbXM6IHsgcGFnZU51bWJlcjogMSB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgcG9zdHNEYXRhOiByZXMuZGF0YSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XHJcblxyXG5jb25zdCBjYWxjdWxhdGVUaW1lID0gY3JlYXRlZEF0ID0+IHtcclxuICBjb25zdCB0b2RheSA9IG1vbWVudChEYXRlLm5vdygpKTtcclxuICBjb25zdCBwb3N0RGF0ZSA9IG1vbWVudChjcmVhdGVkQXQpO1xyXG4gIGNvbnN0IGRpZmZJbkhvdXJzID0gdG9kYXkuZGlmZihwb3N0RGF0ZSwgXCJob3Vyc1wiKTtcclxuXHJcbiAgaWYgKGRpZmZJbkhvdXJzIDwgMjQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgVG9kYXkgPE1vbWVudCBmb3JtYXQ9XCJoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZGlmZkluSG91cnMgPiAyNCAmJiBkaWZmSW5Ib3VycyA8IDM2KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIFllc3RlcmRheSA8TW9tZW50IGZvcm1hdD1cImhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChkaWZmSW5Ib3VycyA+IDM2KSB7XHJcbiAgICByZXR1cm4gPE1vbWVudCBmb3JtYXQ9XCJERC9NTS9ZWVlZIGhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdGVUaW1lOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSBcIi4vY2F0Y2hFcnJvcnNcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCxcclxuICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Ym1pdE5ld1Bvc3QgPSBhc3luYyAoXHJcbiAgdGV4dCxcclxuICBsb2NhdGlvbixcclxuICBwaWNVcmwsXHJcbiAgc2V0UG9zdHMsXHJcbiAgc2V0TmV3UG9zdCxcclxuICBzZXRFcnJvclxyXG4pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MucG9zdChcIi9cIiwgeyB0ZXh0LCBsb2NhdGlvbiwgcGljVXJsIH0pO1xyXG5cclxuICAgIHNldFBvc3RzKHByZXYgPT4gW3Jlcy5kYXRhLCAuLi5wcmV2XSk7XHJcbiAgICBzZXROZXdQb3N0KHsgdGV4dDogXCJcIiwgbG9jYXRpb246IFwiXCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xyXG4gICAgc2V0RXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQb3N0ID0gYXN5bmMgKHBvc3RJZCwgc2V0UG9zdHMsIHNldFNob3dUb2FzdHIpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MuZGVsZXRlKGAvJHtwb3N0SWR9YCk7XHJcbiAgICBzZXRQb3N0cyhwcmV2ID0+IHByZXYuZmlsdGVyKHBvc3QgPT4gcG9zdC5faWQgIT09IHBvc3RJZCkpO1xyXG4gICAgc2V0U2hvd1RvYXN0cih0cnVlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlrZVBvc3QgPSBhc3luYyAocG9zdElkLCB1c2VySWQsIHNldExpa2VzLCBsaWtlID0gdHJ1ZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAobGlrZSkge1xyXG4gICAgICBhd2FpdCBBeGlvcy5wb3N0KGAvbGlrZS8ke3Bvc3RJZH1gKTtcclxuICAgICAgc2V0TGlrZXMocHJldiA9PiBbLi4ucHJldiwgeyB1c2VyOiB1c2VySWQgfV0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWxpa2UpIHtcclxuICAgICAgYXdhaXQgQXhpb3MucHV0KGAvdW5saWtlLyR7cG9zdElkfWApO1xyXG4gICAgICBzZXRMaWtlcyhwcmV2ID0+IHByZXYuZmlsdGVyKGxpa2UgPT4gbGlrZS51c2VyICE9PSB1c2VySWQpKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAocG9zdElkLCB1c2VyLCB0ZXh0LCBzZXRDb21tZW50cywgc2V0VGV4dCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBBeGlvcy5wb3N0KGAvY29tbWVudC8ke3Bvc3RJZH1gLCB7IHRleHQgfSk7XHJcblxyXG4gICAgY29uc3QgbmV3Q29tbWVudCA9IHtcclxuICAgICAgX2lkOiByZXMuZGF0YSxcclxuICAgICAgdXNlcixcclxuICAgICAgdGV4dCxcclxuICAgICAgZGF0ZTogRGF0ZS5ub3coKVxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRDb21tZW50cyhwcmV2ID0+IFtuZXdDb21tZW50LCAuLi5wcmV2XSk7XHJcbiAgICBzZXRUZXh0KFwiXCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDb21tZW50ID0gYXN5bmMgKHBvc3RJZCwgY29tbWVudElkLCBzZXRDb21tZW50cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5kZWxldGUoYC8ke3Bvc3RJZH0vJHtjb21tZW50SWR9YCk7XHJcbiAgICBzZXRDb21tZW50cyhwcmV2ID0+IHByZXYuZmlsdGVyKGNvbW1lbnQgPT4gY29tbWVudC5faWQgIT09IGNvbW1lbnRJZCkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgdXBsb2FkUGljID0gYXN5bmMgbWVkaWEgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtLmFwcGVuZChcImZpbGVcIiwgbWVkaWEpO1xyXG4gICAgZm9ybS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwic29jaWFsX21lZGlhXCIpO1xyXG4gICAgZm9ybS5hcHBlbmQoXCJjbG91ZF9uYW1lXCIsIFwieXRxdGgwOTIxXCIpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9VUkwsIGZvcm0pO1xyXG4gICAgcmV0dXJuIHJlcy5kYXRhLnVybDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwbG9hZFBpYztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=