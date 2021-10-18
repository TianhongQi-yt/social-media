(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Home/MessageNotificationModal.js":
/*!*****************************************************!*\
  !*** ./components/Home/MessageNotificationModal.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Home\\MessageNotificationModal.js";





function MessageNotificationModal({
  socket,
  showNewMessageModal,
  newMessageModal,
  newMessageReceived,
  user
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onModalClose = () => showNewMessageModal(false);

  const formSubmit = e => {
    e.preventDefault();

    if (socket.current) {
      socket.current.emit("sendMsgFromNotification", {
        userId: user._id,
        msgSendToUserId: newMessageReceived.sender,
        msg: text
      });
      socket.current.on("msgSentFromNotification", () => {
        showNewMessageModal(false);
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      size: "small",
      open: newMessageModal,
      onClose: onModalClose,
      closeIcon: true,
      closeOnDimmerClick: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
        content: `New Message from ${newMessageReceived.senderName}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Content, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "bubbleWrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inlineContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "inlineIcon",
              src: newMessageReceived.senderProfilePic
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "otherBubble other",
            children: newMessageReceived.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "other",
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(newMessageReceived.date)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            position: "sticky",
            bottom: "0px"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
            secondary: true,
            color: "teal",
            attached: "bottom",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
              reply: true,
              onSubmit: formSubmit,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
                size: "large",
                placeholder: "Send New Message",
                value: text,
                onChange: e => setText(e.target.value),
                action: {
                  color: "blue",
                  icon: "telegram plane",
                  disabled: text === "",
                  loading: loading
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            marginTop: "5px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: `/messages?message=${newMessageReceived.sender}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "View All Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Instructions, {
            username: user.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

const Instructions = ({
  username
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "help"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
        children: "If you do not like this popup to appear when you receive a new message:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "hand point right"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
      children: ["You can disable it by going to", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: `/${username}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: " Account "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined), "Page and clicking on Settings Tab."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "hand point right"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, undefined), "Inside the menu,there is an setting named: Show New Message Popup?"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "hand point right"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined), "Just toggle the setting to disable/enable the Message Popup to appear."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 91,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (MessageNotificationModal);

/***/ }),

/***/ "./components/Home/NotificationPortal.js":
/*!***********************************************!*\
  !*** ./components/Home/NotificationPortal.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");

var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Home\\NotificationPortal.js";





function NotificationPortal({
  newNotification,
  notificationPopup,
  showNotificationPopup
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    name,
    profilePicUrl,
    username,
    postId
  } = newNotification;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TransitionablePortal, {
    transition: {
      animation: "fade left",
      duration: "500"
    },
    onClose: () => notificationPopup && showNotificationPopup(false),
    onOpen: _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_2__.default,
    open: notificationPopup,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
      style: {
        right: "5%",
        position: "fixed",
        top: "10%",
        zIndex: 1000
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        name: "close",
        size: "large",
        style: {
          float: "right",
          cursor: "pointer"
        },
        onClick: () => showNotificationPopup(false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Event, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Label, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: profilePicUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Summary, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.User, {
                onClick: () => router.push(`/${username}`),
                children: [name, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, this), " ", "liked your ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                onClick: () => router.push(`/post/${postId}`),
                children: " post"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 28
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Date, {
                children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(Date.now())
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (NotificationPortal);

/***/ }),

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
/* harmony export */   "NoPosts": function() { return /* binding */ NoPosts; },
/* harmony export */   "NoProfile": function() { return /* binding */ NoProfile; },
/* harmony export */   "NoNotifications": function() { return /* binding */ NoNotifications; },
/* harmony export */   "NoPostFound": function() { return /* binding */ NoPostFound; }
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
  followersComponent,
  followingComponent
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [followersComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "user outline",
    info: true,
    content: `User does not have followers`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, undefined), followingComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "user outline",
    info: true,
    content: `User does not follow any users`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
  lineNumber: 23,
  columnNumber: 3
}, undefined);
const NoPosts = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Posts. Make sure you have followed someone."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 32,
  columnNumber: 3
}, undefined);
const NoProfile = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Profile Found."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 41,
  columnNumber: 3
}, undefined);
const NoNotifications = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  content: "No Notifications",
  icon: "smile",
  info: true
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 45,
  columnNumber: 3
}, undefined);
const NoPostFound = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Post Found."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 49,
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
  setShowToastr,
  socket
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
          lineNumber: 53,
          columnNumber: 15
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoImageModal__WEBPACK_IMPORTED_MODULE_10__.default, _objectSpread({}, addPropsToModal()), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
          lineNumber: 64,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            floated: "left",
            src: post.user.profilePicUrl,
            avatar: true,
            circular: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
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
                lineNumber: 84,
                columnNumber: 21
              }, this),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
                as: "h4",
                content: "Are you sure?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "This action is irreversible!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                color: "red",
                icon: "trash",
                content: "Delete",
                onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_7__.deletePost)(post._id, setPosts, setShowToastr)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, this)
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: `/${post.user.username}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: post.user.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__.default)(post.createdAt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
            content: post.location
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
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
            lineNumber: 115,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
          extra: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: isLiked ? "heart" : "heart outline",
            color: "red",
            style: {
              cursor: "pointer"
            },
            onClick: () => {
              if (socket.current) {
                socket.current.emit("likePost", {
                  postId: post._id,
                  userId: user._id,
                  like: isLiked ? false : true
                });
                socket.current.on("postLiked", () => {
                  if (isLiked) {
                    setLikes(prev => prev.filter(like => like.user !== user._id));
                  } else {
                    setLikes(prev => [...prev, {
                      user: user._id
                    }]);
                  }
                });
              } else {
                (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_7__.likePost)(post._id, user._id, setLikes, isLiked ? false : true);
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_8__.default, {
            postId: post._id,
            trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "spanLikesList",
              children: `${likes.length} ${likes.length === 1 ? "like" : "likes"}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "comment outline",
            style: {
              marginLeft: "7px"
            },
            color: "blue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), comments.length > 0 && comments.map((comment, i) => i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_3__.default, {
            comment: comment,
            postId: post._id,
            user: user,
            setComments: setComments
          }, comment._id, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 21
          }, this)), comments.length > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            content: "View More",
            color: "teal",
            basic: true,
            circular: true,
            onClick: () => setShowModal(true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
            hidden: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_4__.default, {
            user: user,
            postId: post._id,
            setComments: setComments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
      hidden: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
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
/* harmony import */ var _CropImageModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CropImageModal */ "./components/Post/CropImageModal.js");


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
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

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
    mediaPreview && URL.revokeObjectURL(mediaPreview);
    setTimeout(() => setMediaPreview(null), 3000);
    setLoading(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CropImageModal__WEBPACK_IMPORTED_MODULE_5__.default, {
      mediaPreview: mediaPreview,
      setMedia: setMedia,
      showModal: showModal,
      setShowModal: setShowModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      error: error !== null,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        error: true,
        onDismiss: () => setError(null),
        content: error,
        header: "Oops!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
          src: user.profilePicUrl,
          circular: true,
          avatar: true,
          inline: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
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
          lineNumber: 90,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
          lineNumber: 101,
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
          lineNumber: 110,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
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
          lineNumber: 142,
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
            lineNumber: 145,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this), mediaPreview !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
          hidden: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          content: "Crop Image",
          type: "button",
          primary: true,
          circular: true,
          onClick: () => setShowModal(true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, this)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        circular: true,
        disabled: newPost.text === "" || loading,
        content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
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
        lineNumber: 172,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (CreatePost);

/***/ }),

/***/ "./components/Post/CropImageModal.js":
/*!*******************************************!*\
  !*** ./components/Post/CropImageModal.js ***!
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
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cropper */ "react-cropper");
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cropper__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Post\\CropImageModal.js";




function CropImageModal({
  mediaPreview,
  setMedia,
  showModal,
  setShowModal
}) {
  const {
    0: cropper,
    1: setCropper
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  const getCropData = () => {
    if (cropper) {
      setMedia(cropper.getCroppedCanvas().toDataURL());
      cropper.destroy();
    }

    setShowModal(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.addEventListener("keydown", ({
      key
    }) => {
      if (cropper) {
        if (key === "m") cropper.setDragMode("move");
        if (key === "c") cropper.setDragMode("crop");
        if (key === "r") cropper.reset();
      }
    });
  }, [cropper]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      closeOnDimmerClick: false,
      size: "large",
      onClose: () => setShowModal(false),
      open: showModal,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
        content: "Crop image before upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        columns: 2,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Content, {
            image: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_cropper__WEBPACK_IMPORTED_MODULE_3___default()), {
              style: {
                height: "400px",
                width: "100%"
              },
              cropBoxResizable: true,
              zoomable: true,
              highlight: true,
              responsive: true,
              guides: true,
              dragMode: "move",
              initialAspectRatio: 1,
              preview: ".img-preview",
              src: mediaPreview,
              viewMode: 1,
              minCropBoxHeight: 10,
              minContainerWidth: 10,
              background: false,
              autoCropArea: 1,
              checkOrientation: false,
              onInitialized: cropper => setCropper(cropper)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Content, {
            image: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
                as: "h2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                  name: "file image outline"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header.Content, {
                  content: "Final"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    width: "100%",
                    height: "300px",
                    display: "inline-block",
                    padding: "10px",
                    overflow: "hidden",
                    boxSizing: "border-box"
                  },
                  className: "img-preview"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Actions, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          title: "Reset (R)",
          icon: "redo",
          circular: true,
          onClick: () => cropper && cropper.reset()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          title: "Move Canvas (M)",
          icon: "move",
          circular: true,
          onClick: () => cropper && cropper.setDragMode("move")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          title: "New Cropbox (C)",
          icon: "crop",
          circular: true,
          onClick: () => cropper && cropper.setDragMode("crop")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          negative: true,
          content: "Cancel",
          icon: "cancel",
          onClick: () => setShowModal(false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          content: "Crop Image",
          icon: "checkmark",
          positive: true,
          onClick: getCropData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (CropImageModal);

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
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__);
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
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default())}/api/posts/like/${postId}`, {
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
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post/CreatePost */ "./components/Post/CreatePost.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-infinite-scroll-component */ "react-infinite-scroll-component");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_getUserInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/getUserInfo */ "./utils/getUserInfo.js");
/* harmony import */ var _components_Home_MessageNotificationModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Home/MessageNotificationModal */ "./components/Home/MessageNotificationModal.js");
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var _components_Home_NotificationPortal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Home/NotificationPortal */ "./components/Home/NotificationPortal.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function Index({
  user,
  postsData,
  errorLoading
}) {
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(postsData || []);
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
  const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    0: newMessageReceived,
    1: setNewMessageReceived
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: newMessageModal,
    1: showNewMessageModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: newNotification,
    1: setNewNotification
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: notificationPopup,
    1: showNotificationPopup
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!socket.current) {
      socket.current = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()((_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default()));
    }

    if (socket.current) {
      socket.current.emit("join", {
        userId: user._id
      });
      socket.current.on("newMsgReceived", async ({
        newMsg
      }) => {
        const {
          name,
          profilePicUrl
        } = await (0,_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_14__.default)(newMsg.sender);

        if (user.newMessagePopup) {
          setNewMessageReceived(_objectSpread(_objectSpread({}, newMsg), {}, {
            senderName: name,
            senderProfilePic: profilePicUrl
          }));
          showNewMessageModal(true);
        }

        (0,_utils_newMsgSound__WEBPACK_IMPORTED_MODULE_16__.default)(name);
      });
    }

    document.title = `Welcome, ${user.name.split(" ")[0]}`;
    return () => {
      if (socket.current) {
        socket.current.emit("disconnect");
        socket.current.off();
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]);

  const fetchDataOnScroll = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default())}/api/posts`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_13___default().get("token")
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

  if (posts.length === 0 || errorLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_9__.NoPosts, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 50
  }, this);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (socket.current) {
      socket.current.on("newNotificationReceived", ({
        name,
        profilePicUrl,
        username,
        postId
      }) => {
        setNewNotification({
          name,
          profilePicUrl,
          username,
          postId
        });
        showNotificationPopup(true);
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [notificationPopup && newNotification !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_NotificationPortal__WEBPACK_IMPORTED_MODULE_17__.default, {
      newNotification: newNotification,
      notificationPopup: notificationPopup,
      showNotificationPopup: showNotificationPopup
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, this), showToastr && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_10__.PostDeleteToastr, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 22
    }, this), newMessageModal && newMessageReceived !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_MessageNotificationModal__WEBPACK_IMPORTED_MODULE_15__.default, {
      socket: socket,
      showNewMessageModal: showNewMessageModal,
      newMessageModal: newMessageModal,
      newMessageReceived: newMessageReceived,
      user: user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_5__.default, {
        user: user,
        setPosts: setPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11___default()), {
        hasMore: hasMore,
        next: fetchDataOnScroll,
        loader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_12__.PlaceHolderPosts, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 19
        }, this),
        endMessage: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_12__.EndMessage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 23
        }, this),
        dataLength: posts.length,
        children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_6__.default, {
          socket: socket,
          post: post,
          user: user,
          setPosts: setPosts,
          setShowToastr: setShowToastr
        }, post._id, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

Index.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_8__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default())}/api/posts`, {
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

/***/ "./utils/getUserInfo.js":
/*!******************************!*\
  !*** ./utils/getUserInfo.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);




const getUserInfo = async userToFindId => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/chats/user/${userToFindId}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("token")
      }
    });
    return {
      name: res.data.name,
      profilePicUrl: res.data.profilePicUrl
    };
  } catch (error) {
    console.error(error);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getUserInfo);

/***/ }),

/***/ "./utils/newMsgSound.js":
/*!******************************!*\
  !*** ./utils/newMsgSound.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const newMsgSound = senderName => {
  const sound = new Audio("/light.mp3");
  sound && sound.play();

  if (senderName) {
    document.title = `New message from ${senderName}`;

    if (document.visibilityState === "visible") {
      setTimeout(() => {
        document.title = "Messages";
      }, 5000);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (newMsgSound);

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
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/posts`,
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

/***/ "react-cropper":
/*!********************************!*\
  !*** external "react-cropper" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-cropper");;

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

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("socket.io-client");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0hvbWUvTWVzc2FnZU5vdGlmaWNhdGlvbk1vZGFsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvSG9tZS9Ob3RpZmljYXRpb25Qb3J0YWwuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXAuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9DYXJkUG9zdC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvQ29tbWVudElucHV0RmllbGQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3QuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L0Nyb3BJbWFnZU1vZGFsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9JbWFnZU1vZGFsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9MaWtlc0xpc3QuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L05vSW1hZ2VNb2RhbC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvUG9zdENvbW1lbnRzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhbGN1bGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvZ2V0VXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvbmV3TXNnU291bmQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvcG9zdEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvdXBsb2FkUGljVG9DbG91ZGluYXJ5LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWNyb3BwZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIl0sIm5hbWVzIjpbIk1lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbCIsInNvY2tldCIsInNob3dOZXdNZXNzYWdlTW9kYWwiLCJuZXdNZXNzYWdlTW9kYWwiLCJuZXdNZXNzYWdlUmVjZWl2ZWQiLCJ1c2VyIiwidGV4dCIsInNldFRleHQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25Nb2RhbENsb3NlIiwiZm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJlbWl0IiwidXNlcklkIiwiX2lkIiwibXNnU2VuZFRvVXNlcklkIiwic2VuZGVyIiwibXNnIiwib24iLCJzZW5kZXJOYW1lIiwic2VuZGVyUHJvZmlsZVBpYyIsImNhbGN1bGF0ZVRpbWUiLCJkYXRlIiwicG9zaXRpb24iLCJib3R0b20iLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yIiwiaWNvbiIsImRpc2FibGVkIiwibWFyZ2luVG9wIiwidXNlcm5hbWUiLCJJbnN0cnVjdGlvbnMiLCJOb3RpZmljYXRpb25Qb3J0YWwiLCJuZXdOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25Qb3B1cCIsInNob3dOb3RpZmljYXRpb25Qb3B1cCIsInJvdXRlciIsInVzZVJvdXRlciIsIm5hbWUiLCJwcm9maWxlUGljVXJsIiwicG9zdElkIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJuZXdNc2dTb3VuZCIsInJpZ2h0IiwidG9wIiwiekluZGV4IiwiZmxvYXQiLCJjdXJzb3IiLCJwdXNoIiwiRGF0ZSIsIm5vdyIsIk5vUHJvZmlsZVBvc3RzIiwiTm9Gb2xsb3dEYXRhIiwiZm9sbG93ZXJzQ29tcG9uZW50IiwiZm9sbG93aW5nQ29tcG9uZW50IiwiTm9NZXNzYWdlcyIsIk5vUG9zdHMiLCJOb1Byb2ZpbGUiLCJOb05vdGlmaWNhdGlvbnMiLCJOb1Bvc3RGb3VuZCIsIlBsYWNlSG9sZGVyUG9zdHMiLCJyYW5nZSIsIm1hcCIsIml0ZW0iLCJQbGFjZUhvbGRlclN1Z2dlc3Rpb25zIiwiUGxhY2VIb2xkZXJOb3RpZmljYXRpb25zIiwiRW5kTWVzc2FnZSIsIkxpa2VzUGxhY2VIb2xkZXIiLCJtaW5XaWR0aCIsIlBvc3REZWxldGVUb2FzdHIiLCJ0b2FzdCIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiRXJyb3JUb2FzdHIiLCJlcnJvciIsIk1zZ1NlbnRUb2FzdHIiLCJDYXJkUG9zdCIsInBvc3QiLCJzZXRQb3N0cyIsInNldFNob3dUb2FzdHIiLCJsaWtlcyIsInNldExpa2VzIiwiaXNMaWtlZCIsImxlbmd0aCIsImZpbHRlciIsImxpa2UiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYWRkUHJvcHNUb01vZGFsIiwicGljVXJsIiwicm9sZSIsImRlbGV0ZVBvc3QiLCJjcmVhdGVkQXQiLCJsb2NhdGlvbiIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsIndvcmRTcGFjaW5nIiwicHJldiIsImxpa2VQb3N0IiwibWFyZ2luTGVmdCIsImNvbW1lbnQiLCJpIiwiQ29tbWVudElucHV0RmllbGQiLCJwb3N0Q29tbWVudCIsIkNyZWF0ZVBvc3QiLCJuZXdQb3N0Iiwic2V0TmV3UG9zdCIsImlucHV0UmVmIiwidXNlUmVmIiwic2V0RXJyb3IiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwibWVkaWEiLCJzZXRNZWRpYSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsImhhbmRsZUNoYW5nZSIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWRkU3R5bGVzIiwidGV4dEFsaWduIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXIiLCJwYWRkaW5nVG9wIiwiYm9yZGVyQ29sb3IiLCJoYW5kbGVTdWJtaXQiLCJ1cGxvYWRQaWMiLCJzdWJtaXROZXdQb3N0IiwicmV2b2tlT2JqZWN0VVJMIiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJjbGljayIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiYmFja2dyb3VuZENvbG9yIiwiQ3JvcEltYWdlTW9kYWwiLCJjcm9wcGVyIiwic2V0Q3JvcHBlciIsImdldENyb3BEYXRhIiwiZ2V0Q3JvcHBlZENhbnZhcyIsInRvRGF0YVVSTCIsImRlc3Ryb3kiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Iiwic2V0RHJhZ01vZGUiLCJyZXNldCIsInBhZGRpbmciLCJvdmVyZmxvdyIsImJveFNpemluZyIsIkltYWdlTW9kYWwiLCJtYXJnaW5Cb3R0b20iLCJMaWtlc0xpc3QiLCJ0cmlnZ2VyIiwibGlrZXNMaXN0Iiwic2V0TGlrZXNMaXN0IiwiZ2V0TGlrZXNMaXN0IiwicmVzIiwiYXhpb3MiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJkYXRhIiwiYWxlcnQiLCJjYXRjaEVycm9ycyIsIm1heEhlaWdodCIsIlJvdXRlciIsIk5vSW1hZ2VNb2RhbCIsIlBvc3RDb21tZW50cyIsInNldERpc2FibGVkIiwiZGVsZXRlQ29tbWVudCIsIkluZGV4IiwicG9zdHNEYXRhIiwiZXJyb3JMb2FkaW5nIiwicG9zdHMiLCJzaG93VG9hc3RyIiwiaGFzTW9yZSIsInNldEhhc01vcmUiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInNldE5ld01lc3NhZ2VSZWNlaXZlZCIsInNldE5ld05vdGlmaWNhdGlvbiIsImlvIiwibmV3TXNnIiwiZ2V0VXNlckluZm8iLCJuZXdNZXNzYWdlUG9wdXAiLCJkb2N1bWVudCIsInRpdGxlIiwic3BsaXQiLCJvZmYiLCJmZXRjaERhdGFPblNjcm9sbCIsInBhcmFtcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInRva2VuIiwicGFyc2VDb29raWVzIiwidG9kYXkiLCJtb21lbnQiLCJwb3N0RGF0ZSIsImRpZmZJbkhvdXJzIiwiZGlmZiIsInVzZXJUb0ZpbmRJZCIsImNvbnNvbGUiLCJzb3VuZCIsIkF1ZGlvIiwicGxheSIsInZpc2liaWxpdHlTdGF0ZSIsIkF4aW9zIiwiYmFzZVVSTCIsImVycm9yTXNnIiwiZGVsZXRlIiwicHV0IiwibmV3Q29tbWVudCIsImNvbW1lbnRJZCIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInByb2Nlc3MiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esd0JBQVQsQ0FBa0M7QUFDaENDLFFBRGdDO0FBRWhDQyxxQkFGZ0M7QUFHaENDLGlCQUhnQztBQUloQ0Msb0JBSmdDO0FBS2hDQztBQUxnQyxDQUFsQyxFQU1HO0FBQ0QsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFB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QUFlO0FBQy9CLE1BQUk7QUFDRixVQUFNNEcsSUFBSSxHQUFHLElBQUlDLFFBQUosRUFBYjtBQUNBRCxRQUFJLENBQUNFLE1BQUwsQ0FBWSxNQUFaLEVBQW9COUcsS0FBcEI7QUFDQTRHLFFBQUksQ0FBQ0UsTUFBTCxDQUFZLGVBQVosRUFBNkIsY0FBN0I7QUFDQUYsUUFBSSxDQUFDRSxNQUFMLENBQVksWUFBWixFQUEwQixXQUExQjtBQUVBLFVBQU01RCxHQUFHLEdBQUcsTUFBTUMsaURBQUEsQ0FBVzRELHdEQUFYLEVBQXVDSCxJQUF2QyxDQUFsQjtBQUNBLFdBQU8xRCxHQUFHLENBQUNNLElBQUosQ0FBU3dELEdBQWhCO0FBQ0QsR0FSRCxDQVFFLE9BQU94SixLQUFQLEVBQWM7QUFDZDtBQUNEO0FBQ0YsQ0FaRDs7QUFjQSwrREFBZXdELFNBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgTW9kYWwsIFNlZ21lbnQsIExpc3QsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZU5vdGlmaWNhdGlvbk1vZGFsKHtcclxuICBzb2NrZXQsXHJcbiAgc2hvd05ld01lc3NhZ2VNb2RhbCxcclxuICBuZXdNZXNzYWdlTW9kYWwsXHJcbiAgbmV3TWVzc2FnZVJlY2VpdmVkLFxyXG4gIHVzZXJcclxufSkge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25Nb2RhbENsb3NlID0gKCkgPT4gc2hvd05ld01lc3NhZ2VNb2RhbChmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGZvcm1TdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcInNlbmRNc2dGcm9tTm90aWZpY2F0aW9uXCIsIHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgIG1zZ1NlbmRUb1VzZXJJZDogbmV3TWVzc2FnZVJlY2VpdmVkLnNlbmRlcixcclxuICAgICAgICBtc2c6IHRleHRcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcIm1zZ1NlbnRGcm9tTm90aWZpY2F0aW9uXCIsICgpID0+IHtcclxuICAgICAgICBzaG93TmV3TWVzc2FnZU1vZGFsKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgb3Blbj17bmV3TWVzc2FnZU1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICBjbG9zZUljb25cclxuICAgICAgICBjbG9zZU9uRGltbWVyQ2xpY2tcclxuICAgICAgPlxyXG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY29udGVudD17YE5ldyBNZXNzYWdlIGZyb20gJHtuZXdNZXNzYWdlUmVjZWl2ZWQuc2VuZGVyTmFtZX1gfSAvPlxyXG5cclxuICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlV3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5saW5lSWNvblwiIHNyYz17bmV3TWVzc2FnZVJlY2VpdmVkLnNlbmRlclByb2ZpbGVQaWN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlckJ1YmJsZSBvdGhlclwiPntuZXdNZXNzYWdlUmVjZWl2ZWQubXNnfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3RoZXJcIj57Y2FsY3VsYXRlVGltZShuZXdNZXNzYWdlUmVjZWl2ZWQuZGF0ZSl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJzdGlja3lcIiwgYm90dG9tOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICA8U2VnbWVudCBzZWNvbmRhcnkgY29sb3I9XCJ0ZWFsXCIgYXR0YWNoZWQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICA8Rm9ybSByZXBseSBvblN1Ym1pdD17Zm9ybVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmQgTmV3IE1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcInRlbGVncmFtIHBsYW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRleHQgPT09IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL21lc3NhZ2VzP21lc3NhZ2U9JHtuZXdNZXNzYWdlUmVjZWl2ZWQuc2VuZGVyfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlZpZXcgQWxsIE1lc3NhZ2VzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxJbnN0cnVjdGlvbnMgdXNlcm5hbWU9e3VzZXIudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBJbnN0cnVjdGlvbnMgPSAoeyB1c2VybmFtZSB9KSA9PiAoXHJcbiAgPExpc3Q+XHJcbiAgICA8TGlzdC5JdGVtPlxyXG4gICAgICA8SWNvbiBuYW1lPVwiaGVscFwiIC8+XHJcbiAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgPExpc3QuSGVhZGVyPlxyXG4gICAgICAgICAgSWYgeW91IGRvIG5vdCBsaWtlIHRoaXMgcG9wdXAgdG8gYXBwZWFyIHdoZW4geW91IHJlY2VpdmUgYSBuZXcgbWVzc2FnZTpcclxuICAgICAgICA8L0xpc3QuSGVhZGVyPlxyXG4gICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgIDwvTGlzdC5JdGVtPlxyXG5cclxuICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgIDxJY29uIG5hbWU9XCJoYW5kIHBvaW50IHJpZ2h0XCIgLz5cclxuICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICBZb3UgY2FuIGRpc2FibGUgaXQgYnkgZ29pbmcgdG9cclxuICAgICAgICA8TGluayBocmVmPXtgLyR7dXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICA8YT4gQWNjb3VudCA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIFBhZ2UgYW5kIGNsaWNraW5nIG9uIFNldHRpbmdzIFRhYi5cclxuICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICA8TGlzdC5JdGVtPlxyXG4gICAgICA8SWNvbiBuYW1lPVwiaGFuZCBwb2ludCByaWdodFwiIC8+XHJcbiAgICAgIEluc2lkZSB0aGUgbWVudSx0aGVyZSBpcyBhbiBzZXR0aW5nIG5hbWVkOiBTaG93IE5ldyBNZXNzYWdlIFBvcHVwP1xyXG4gICAgPC9MaXN0Lkl0ZW0+XHJcblxyXG4gICAgPExpc3QuSXRlbT5cclxuICAgICAgPEljb24gbmFtZT1cImhhbmQgcG9pbnQgcmlnaHRcIiAvPlxyXG4gICAgICBKdXN0IHRvZ2dsZSB0aGUgc2V0dGluZyB0byBkaXNhYmxlL2VuYWJsZSB0aGUgTWVzc2FnZSBQb3B1cCB0byBhcHBlYXIuXHJcbiAgICA8L0xpc3QuSXRlbT5cclxuICA8L0xpc3Q+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWw7IiwiaW1wb3J0IHsgU2VnbWVudCwgVHJhbnNpdGlvbmFibGVQb3J0YWwsIEljb24sIEZlZWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IG5ld01zZ1NvdW5kIGZyb20gXCIuLi8uLi91dGlscy9uZXdNc2dTb3VuZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuXHJcbmZ1bmN0aW9uIE5vdGlmaWNhdGlvblBvcnRhbCh7XHJcbiAgbmV3Tm90aWZpY2F0aW9uLFxyXG4gIG5vdGlmaWNhdGlvblBvcHVwLFxyXG4gIHNob3dOb3RpZmljYXRpb25Qb3B1cFxyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCwgdXNlcm5hbWUsIHBvc3RJZCB9ID0gbmV3Tm90aWZpY2F0aW9uO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRyYW5zaXRpb25hYmxlUG9ydGFsXHJcbiAgICAgIHRyYW5zaXRpb249e3sgYW5pbWF0aW9uOiBcImZhZGUgbGVmdFwiLCBkdXJhdGlvbjogXCI1MDBcIiB9fVxyXG4gICAgICBvbkNsb3NlPXsoKSA9PiBub3RpZmljYXRpb25Qb3B1cCAmJiBzaG93Tm90aWZpY2F0aW9uUG9wdXAoZmFsc2UpfVxyXG4gICAgICBvbk9wZW49e25ld01zZ1NvdW5kfVxyXG4gICAgICBvcGVuPXtub3RpZmljYXRpb25Qb3B1cH1cclxuICAgID5cclxuICAgICAgPFNlZ21lbnQgc3R5bGU9e3sgcmlnaHQ6IFwiNSVcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgdG9wOiBcIjEwJVwiLCB6SW5kZXg6IDEwMDAgfX0+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd05vdGlmaWNhdGlvblBvcHVwKGZhbHNlKX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8RmVlZD5cclxuICAgICAgICAgIDxGZWVkLkV2ZW50PlxyXG4gICAgICAgICAgICA8RmVlZC5MYWJlbD5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICAgICAgPC9GZWVkLkxhYmVsPlxyXG4gICAgICAgICAgICA8RmVlZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICA8RmVlZC5Vc2VyIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvJHt1c2VybmFtZX1gKX0+e25hbWV9IDwvRmVlZC5Vc2VyPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIGxpa2VkIHlvdXIgPGEgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wb3N0LyR7cG9zdElkfWApfT4gcG9zdDwvYT5cclxuICAgICAgICAgICAgICAgIDxGZWVkLkRhdGU+e2NhbGN1bGF0ZVRpbWUoRGF0ZS5ub3coKSl9PC9GZWVkLkRhdGU+XHJcbiAgICAgICAgICAgICAgPC9GZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgIDwvRmVlZC5Db250ZW50PlxyXG4gICAgICAgICAgPC9GZWVkLkV2ZW50PlxyXG4gICAgICAgIDwvRmVlZD5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC9UcmFuc2l0aW9uYWJsZVBvcnRhbD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25Qb3J0YWw7XHJcbiIsImltcG9ydCB7IE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlUG9zdHMgPSAoKSA9PiAoXG4gIDw+XG4gICAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiU29ycnlcIiBjb250ZW50PVwiVXNlciBoYXMgbm90IHBvc3RlZCBhbnl0aGluZyB5ZXQhXCIgLz5cbiAgICA8QnV0dG9uIGljb249XCJsb25nIGFycm93IGFsdGVybmF0ZSBsZWZ0XCIgY29udGVudD1cIkdvIEJhY2tcIiBhcz1cImFcIiBocmVmPVwiL1wiIC8+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5vRm9sbG93RGF0YSA9ICh7IGZvbGxvd2Vyc0NvbXBvbmVudCwgZm9sbG93aW5nQ29tcG9uZW50IH0pID0+IChcbiAgPD5cbiAgICB7Zm9sbG93ZXJzQ29tcG9uZW50ICYmIChcbiAgICAgIDxNZXNzYWdlIGljb249XCJ1c2VyIG91dGxpbmVcIiBpbmZvIGNvbnRlbnQ9e2BVc2VyIGRvZXMgbm90IGhhdmUgZm9sbG93ZXJzYH0gLz5cbiAgICApfVxuXG4gICAge2ZvbGxvd2luZ0NvbXBvbmVudCAmJiAoXG4gICAgICA8TWVzc2FnZSBpY29uPVwidXNlciBvdXRsaW5lXCIgaW5mbyBjb250ZW50PXtgVXNlciBkb2VzIG5vdCBmb2xsb3cgYW55IHVzZXJzYH0gLz5cbiAgICApfVxuICA8Lz5cbik7XG5cbmV4cG9ydCBjb25zdCBOb01lc3NhZ2VzID0gKCkgPT4gKFxuICA8TWVzc2FnZVxuICAgIGluZm9cbiAgICBpY29uPVwidGVsZWdyYW0gcGxhbmVcIlxuICAgIGhlYWRlcj1cIlNvcnJ5XCJcbiAgICBjb250ZW50PVwiWW91IGhhdmUgbm90IG1lc3NhZ2VkIGFueW9uZSB5ZXQuU2VhcmNoIGFib3ZlIHRvIG1lc3NhZ2Ugc29tZW9uZSFcIlxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5vUG9zdHMgPSAoKSA9PiAoXG4gIDxNZXNzYWdlXG4gICAgaW5mb1xuICAgIGljb249XCJtZWhcIlxuICAgIGhlYWRlcj1cIkhleSFcIlxuICAgIGNvbnRlbnQ9XCJObyBQb3N0cy4gTWFrZSBzdXJlIHlvdSBoYXZlIGZvbGxvd2VkIHNvbWVvbmUuXCJcbiAgLz5cbik7XG5cbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGUgPSAoKSA9PiAoXG4gIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIkhleSFcIiBjb250ZW50PVwiTm8gUHJvZmlsZSBGb3VuZC5cIiAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5vTm90aWZpY2F0aW9ucyA9ICgpID0+IChcbiAgPE1lc3NhZ2UgY29udGVudD1cIk5vIE5vdGlmaWNhdGlvbnNcIiBpY29uPVwic21pbGVcIiBpbmZvIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTm9Qb3N0Rm91bmQgPSAoKSA9PiAoXG4gIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIkhleSFcIiBjb250ZW50PVwiTm8gUG9zdCBGb3VuZC5cIiAvPlxuKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBQbGFjZWhvbGRlcixcbiAgRGl2aWRlcixcbiAgTGlzdCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIEljb25cbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyByYW5nZSB9IGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGNvbnN0IFBsYWNlSG9sZGVyUG9zdHMgPSAoKSA9PlxuICByYW5nZSgxLCAzKS5tYXAoaXRlbSA9PiAoXG4gICAgPD5cbiAgICAgIDxQbGFjZWhvbGRlciBrZXk9e2l0ZW19IGZsdWlkPlxuICAgICAgICA8UGxhY2Vob2xkZXIuSGVhZGVyIGltYWdlPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cbiAgICAgICAgPC9QbGFjZWhvbGRlci5IZWFkZXI+XG4gICAgICAgIDxQbGFjZWhvbGRlci5QYXJhZ3JhcGg+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cbiAgICAgICAgPC9QbGFjZWhvbGRlci5QYXJhZ3JhcGg+XG4gICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG4gICAgPC8+XG4gICkpO1xuXG5leHBvcnQgY29uc3QgUGxhY2VIb2xkZXJTdWdnZXN0aW9ucyA9ICgpID0+IChcbiAgPD5cbiAgICA8TGlzdC5JdGVtPlxuICAgICAgPENhcmQgY29sb3I9XCJyZWRcIj5cbiAgICAgICAgPFBsYWNlaG9sZGVyPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5JbWFnZSBzcXVhcmUgLz5cbiAgICAgICAgPC9QbGFjZWhvbGRlcj5cbiAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICA8UGxhY2Vob2xkZXI+XG4gICAgICAgICAgICA8UGxhY2Vob2xkZXIuSGVhZGVyPlxuICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9XCJtZWRpdW1cIiAvPlxuICAgICAgICAgICAgPC9QbGFjZWhvbGRlci5IZWFkZXI+XG4gICAgICAgICAgPC9QbGFjZWhvbGRlcj5cbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG5cbiAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBpY29uPVwiYWRkIHVzZXJcIlxuICAgICAgICAgICAgY29udGVudD1cIkZvbGxvd1wiXG4gICAgICAgICAgICBjb2xvcj1cInR3aXR0ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvTGlzdC5JdGVtPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBjb25zdCBQbGFjZUhvbGRlck5vdGlmaWNhdGlvbnMgPSAoKSA9PlxuICByYW5nZSgxLCAxMCkubWFwKGl0ZW0gPT4gKFxuICAgIDw+XG4gICAgICA8UGxhY2Vob2xkZXIga2V5PXtpdGVtfT5cbiAgICAgICAgPFBsYWNlaG9sZGVyLkhlYWRlciBpbWFnZT5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgIDwvUGxhY2Vob2xkZXIuSGVhZGVyPlxuICAgICAgPC9QbGFjZWhvbGRlcj5cbiAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgIDwvPlxuICApKTtcblxuZXhwb3J0IGNvbnN0IEVuZE1lc3NhZ2UgPSAoKSA9PiAoXG4gIDxDb250YWluZXIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgPEljb24gbmFtZT1cInJlZnJlc2hcIiBzaXplPVwibGFyZ2VcIiAvPlxuICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBjb25zdCBMaWtlc1BsYWNlSG9sZGVyID0gKCkgPT5cbiAgcmFuZ2UoMSwgNikubWFwKGl0ZW0gPT4gKFxuICAgIDxQbGFjZWhvbGRlciBrZXk9e2l0ZW19IHN0eWxlPXt7IG1pbldpZHRoOiBcIjIwMHB4XCIgfX0+XG4gICAgICA8UGxhY2Vob2xkZXIuSGVhZGVyIGltYWdlPlxuICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9XCJmdWxsXCIgLz5cbiAgICAgIDwvUGxhY2Vob2xkZXIuSGVhZGVyPlxuICAgIDwvUGxhY2Vob2xkZXI+XG4gICkpO1xuIiwiaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cbmV4cG9ydCBjb25zdCBQb3N0RGVsZXRlVG9hc3RyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgcG9zaXRpb249XCJib3R0b20tY2VudGVyXCJcbiAgICAgIGF1dG9DbG9zZT17MzAwMH1cbiAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XG4gICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XG4gICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgIHJ0bD17ZmFsc2V9XG4gICAgICBwYXVzZU9uRm9jdXNMb3NzXG4gICAgICBkcmFnZ2FibGVcbiAgICAgIHBhdXNlT25Ib3Zlcj17ZmFsc2V9PlxuICAgICAge3RvYXN0LmluZm8oXCJEZWxldGVkIFN1Y2Nlc3NmdWxseVwiLCB7XG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1jZW50ZXJcIixcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZFxuICAgICAgfSl9XG4gICAgPC9Ub2FzdENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBFcnJvclRvYXN0ciA9ICh7IGVycm9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VG9hc3RDb250YWluZXJcbiAgICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXG4gICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICBydGw9e2ZhbHNlfVxuICAgICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgICAgZHJhZ2dhYmxlXG4gICAgICBwYXVzZU9uSG92ZXI9e2ZhbHNlfT5cbiAgICAgIHt0b2FzdC5lcnJvcihlcnJvciwge1xuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXG4gICAgICAgIGF1dG9DbG9zZTogMzAwMCxcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcbiAgICAgIH0pfVxuICAgIDwvVG9hc3RDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgTXNnU2VudFRvYXN0ciA9ICgpID0+IChcbiAgPFRvYXN0Q29udGFpbmVyXG4gICAgcG9zaXRpb249XCJib3R0b20tY2VudGVyXCJcbiAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cbiAgICBuZXdlc3RPblRvcD17ZmFsc2V9XG4gICAgY2xvc2VPbkNsaWNrXG4gICAgcnRsPXtmYWxzZX1cbiAgICBwYXVzZU9uRm9jdXNMb3NzXG4gICAgZHJhZ2dhYmxlXG4gICAgcGF1c2VPbkhvdmVyPXtmYWxzZX0+XG4gICAge3RvYXN0LnN1Y2Nlc3MoXCJTZW50IHN1Y2Nlc3NmdWxseVwiLCB7XG4gICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXG4gICAgICBhdXRvQ2xvc2U6IDMwMDAsXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcbiAgICB9KX1cbiAgPC9Ub2FzdENvbnRhaW5lcj5cbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIEljb24sXG4gIEltYWdlLFxuICBEaXZpZGVyLFxuICBTZWdtZW50LFxuICBCdXR0b24sXG4gIFBvcHVwLFxuICBIZWFkZXIsXG4gIE1vZGFsXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tIFwiLi9Qb3N0Q29tbWVudHNcIjtcbmltcG9ydCBDb21tZW50SW5wdXRGaWVsZCBmcm9tIFwiLi9Db21tZW50SW5wdXRGaWVsZFwiO1xuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGRlbGV0ZVBvc3QsIGxpa2VQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSBcIi4vSW1hZ2VNb2RhbFwiO1xuaW1wb3J0IE5vSW1hZ2VNb2RhbCBmcm9tIFwiLi9Ob0ltYWdlTW9kYWxcIjtcblxuZnVuY3Rpb24gQ2FyZFBvc3QoeyBwb3N0LCB1c2VyLCBzZXRQb3N0cywgc2V0U2hvd1RvYXN0ciwgc29ja2V0IH0pIHtcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZShwb3N0Lmxpa2VzKTtcblxuICBjb25zdCBpc0xpa2VkID1cbiAgICBsaWtlcy5sZW5ndGggPiAwICYmIGxpa2VzLmZpbHRlcihsaWtlID0+IGxpa2UudXNlciA9PT0gdXNlci5faWQpLmxlbmd0aCA+IDA7XG5cbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShwb3N0LmNvbW1lbnRzKTtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGFkZFByb3BzVG9Nb2RhbCA9ICgpID0+ICh7XG4gICAgcG9zdCxcbiAgICB1c2VyLFxuICAgIHNldExpa2VzLFxuICAgIGxpa2VzLFxuICAgIGlzTGlrZWQsXG4gICAgY29tbWVudHMsXG4gICAgc2V0Q29tbWVudHNcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dNb2RhbCAmJiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIG9wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgICBjbG9zZUljb25cbiAgICAgICAgICBjbG9zZU9uRGltbWVyQ2xpY2tcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgICB7cG9zdC5waWNVcmwgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZU1vZGFsIHsuLi5hZGRQcm9wc1RvTW9kYWwoKX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxOb0ltYWdlTW9kYWwgey4uLmFkZFByb3BzVG9Nb2RhbCgpfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICApfVxuXG4gICAgICA8U2VnbWVudCBiYXNpYz5cbiAgICAgICAgPENhcmQgY29sb3I9XCJ0ZWFsXCIgZmx1aWQ+XG4gICAgICAgICAge3Bvc3QucGljVXJsICYmIChcbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3Bvc3QucGljVXJsfVxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgIGZsb2F0ZWQ9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgd3JhcHBlZFxuICAgICAgICAgICAgICB1aT17ZmFsc2V9XG4gICAgICAgICAgICAgIGFsdD1cIlBvc3RJbWFnZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8SW1hZ2UgZmxvYXRlZD1cImxlZnRcIiBzcmM9e3Bvc3QudXNlci5wcm9maWxlUGljVXJsfSBhdmF0YXIgY2lyY3VsYXIgLz5cblxuICAgICAgICAgICAgeyh1c2VyLnJvbGUgPT09IFwicm9vdFwiIHx8IHBvc3QudXNlci5faWQgPT09IHVzZXIuX2lkKSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwidG9wIHJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZGVsZXRlSWNvbi5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWluaVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDRcIiBjb250ZW50PVwiQXJlIHlvdSBzdXJlP1wiIC8+XG4gICAgICAgICAgICAgICAgICA8cD5UaGlzIGFjdGlvbiBpcyBpcnJldmVyc2libGUhPC9wPlxuXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVBvc3QocG9zdC5faWQsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgPGE+e3Bvc3QudXNlci5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cblxuICAgICAgICAgICAgPENhcmQuTWV0YT57Y2FsY3VsYXRlVGltZShwb3N0LmNyZWF0ZWRBdCl9PC9DYXJkLk1ldGE+XG5cbiAgICAgICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XG5cbiAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xcHhcIixcbiAgICAgICAgICAgICAgICB3b3JkU3BhY2luZzogXCIwLjM1cHhcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cG9zdC50ZXh0fVxuICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuXG4gICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIG5hbWU9e2lzTGlrZWQgPyBcImhlYXJ0XCIgOiBcImhlYXJ0IG91dGxpbmVcIn1cbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJsaWtlUG9zdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RJZDogcG9zdC5faWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlci5faWQsXG4gICAgICAgICAgICAgICAgICAgIGxpa2U6IGlzTGlrZWQgPyBmYWxzZSA6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBzb2NrZXQuY3VycmVudC5vbihcInBvc3RMaWtlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0xpa2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TGlrZXMocHJldiA9PiBwcmV2LmZpbHRlcihsaWtlID0+IGxpa2UudXNlciAhPT0gdXNlci5faWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRMaWtlcyhwcmV2ID0+IFsuLi5wcmV2LCB7IHVzZXI6IHVzZXIuX2lkIH1dKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxpa2VQb3N0KHBvc3QuX2lkLCB1c2VyLl9pZCwgc2V0TGlrZXMsIGlzTGlrZWQgPyBmYWxzZSA6IHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxMaWtlc0xpc3RcbiAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgbGlrZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTGlrZXNMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtgJHtsaWtlcy5sZW5ndGh9ICR7bGlrZXMubGVuZ3RoID09PSAxID8gXCJsaWtlXCIgOiBcImxpa2VzXCJ9YH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjb21tZW50IG91dGxpbmVcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjdweFwiIH19IGNvbG9yPVwiYmx1ZVwiIC8+XG5cbiAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgIGNvbW1lbnRzLm1hcChcbiAgICAgICAgICAgICAgICAoY29tbWVudCwgaSkgPT5cbiAgICAgICAgICAgICAgICAgIGkgPCAzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RDb21tZW50c1xuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMyAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb250ZW50PVwiVmlldyBNb3JlXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxuICAgICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cblxuICAgICAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkIHVzZXI9e3VzZXJ9IHBvc3RJZD17cG9zdC5faWR9IHNldENvbW1lbnRzPXtzZXRDb21tZW50c30gLz5cbiAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9TZWdtZW50PlxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRQb3N0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgcG9zdENvbW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcblxuZnVuY3Rpb24gQ29tbWVudElucHV0RmllbGQoeyBwb3N0SWQsIHVzZXIsIHNldENvbW1lbnRzIH0pIHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICByZXBseVxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgYXdhaXQgcG9zdENvbW1lbnQocG9zdElkLCB1c2VyLCB0ZXh0LCBzZXRDb21tZW50cywgc2V0VGV4dCk7XG5cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGb3JtLklucHV0XG4gICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBDb21tZW50XCJcbiAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgICAgICAgIGljb246IFwiZWRpdFwiLFxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRleHQgPT09IFwiXCIgfHwgbG9hZGluZyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50SW5wdXRGaWVsZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIEltYWdlLCBEaXZpZGVyLCBNZXNzYWdlLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgdXBsb2FkUGljIGZyb20gXCIuLi8uLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnlcIjtcbmltcG9ydCB7IHN1Ym1pdE5ld1Bvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcbmltcG9ydCBDcm9wSW1hZ2VNb2RhbCBmcm9tIFwiLi9Dcm9wSW1hZ2VNb2RhbFwiO1xuXG5mdW5jdGlvbiBDcmVhdGVQb3N0KHsgdXNlciwgc2V0UG9zdHMgfSkge1xuICBjb25zdCBbbmV3UG9zdCwgc2V0TmV3UG9zdF0gPSB1c2VTdGF0ZSh7IHRleHQ6IFwiXCIsIGxvY2F0aW9uOiBcIlwiIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xuXG4gICAgaWYgKG5hbWUgPT09IFwibWVkaWFcIikge1xuICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pO1xuICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pKTtcbiAgICB9XG5cbiAgICBzZXROZXdQb3N0KHByZXYgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XG4gIH07XG5cbiAgY29uc3QgYWRkU3R5bGVzID0gKCkgPT4gKHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgaGVpZ2h0OiBcIjE1MHB4XCIsXG4gICAgd2lkdGg6IFwiMTUwcHhcIixcbiAgICBib3JkZXI6IFwiZG90dGVkXCIsXG4gICAgcGFkZGluZ1RvcDogbWVkaWEgPT09IG51bGwgJiYgXCI2MHB4XCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBib3JkZXJDb2xvcjogaGlnaGxpZ2h0ZWQgPyBcImdyZWVuXCIgOiBcImJsYWNrXCJcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgbGV0IHBpY1VybDtcblxuICAgIGlmIChtZWRpYSAhPT0gbnVsbCkge1xuICAgICAgcGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKTtcbiAgICAgIGlmICghcGljVXJsKSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm4gc2V0RXJyb3IoXCJFcnJvciBVcGxvYWRpbmcgSW1hZ2VcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgc3VibWl0TmV3UG9zdChcbiAgICAgIG5ld1Bvc3QudGV4dCxcbiAgICAgIG5ld1Bvc3QubG9jYXRpb24sXG4gICAgICBwaWNVcmwsXG4gICAgICBzZXRQb3N0cyxcbiAgICAgIHNldE5ld1Bvc3QsXG4gICAgICBzZXRFcnJvclxuICAgICk7XG5cbiAgICBzZXRNZWRpYShudWxsKTtcbiAgICBtZWRpYVByZXZpZXcgJiYgVVJMLnJldm9rZU9iamVjdFVSTChtZWRpYVByZXZpZXcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TWVkaWFQcmV2aWV3KG51bGwpLCAzMDAwKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgPENyb3BJbWFnZU1vZGFsXG4gICAgICAgICAgbWVkaWFQcmV2aWV3PXttZWRpYVByZXZpZXd9XG4gICAgICAgICAgc2V0TWVkaWE9e3NldE1lZGlhfVxuICAgICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAgPEZvcm0gZXJyb3I9e2Vycm9yICE9PSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPE1lc3NhZ2VcbiAgICAgICAgICBlcnJvclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3IobnVsbCl9XG4gICAgICAgICAgY29udGVudD17ZXJyb3J9XG4gICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e3VzZXIucHJvZmlsZVBpY1VybH0gY2lyY3VsYXIgYXZhdGFyIGlubGluZSAvPlxuICAgICAgICAgIDxGb3JtLlRleHRBcmVhXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXRzIEhhcHBlbmluZ1wiXG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17bmV3UG9zdC50ZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICB3aWR0aD17MTR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuXG4gICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICB2YWx1ZT17bmV3UG9zdC5sb2NhdGlvbn1cbiAgICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgbGFiZWw9XCJBZGQgTG9jYXRpb25cIlxuICAgICAgICAgICAgaWNvbj1cIm1hcCBtYXJrZXIgYWx0ZXJuYXRlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2FudCB0byBhZGQgTG9jYXRpb24/XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG5hbWU9XCJtZWRpYVwiXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuXG4gICAgICAgIHsvKiBkcmFnIGFuZCBkcm9wICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxuICAgICAgICAgIHN0eWxlPXthZGRTdHlsZXMoKX1cbiAgICAgICAgICBvbkRyYWdPdmVyPXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25EcmFnTGVhdmU9e2UgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Ecm9wPXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xuXG4gICAgICAgICAgICBjb25zdCBkcm9wcGVkRmlsZSA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuXG4gICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChkcm9wcGVkRmlsZVswXSkpO1xuICAgICAgICAgIH19PlxuICAgICAgICAgIHttZWRpYSA9PT0gbnVsbCA/IChcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgc2l6ZT1cImJpZ1wiIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxNTBweFwiLCB3aWR0aDogXCIxNTBweFwiIH19XG4gICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XG4gICAgICAgICAgICAgICAgYWx0PVwiUG9zdEltYWdlXCJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge21lZGlhUHJldmlldyAhPT0gbnVsbCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcm9wIEltYWdlXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICBkaXNhYmxlZD17bmV3UG9zdC50ZXh0ID09PSBcIlwiIHx8IGxvYWRpbmd9XG4gICAgICAgICAgY29udGVudD17PHN0cm9uZz5Qb3N0PC9zdHJvbmc+fVxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMURBMUYyXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICBpY29uPVwic2VuZFwiXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBvc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgSGVhZGVyLCBCdXR0b24sIEdyaWQsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IENyb3BwZXIgZnJvbSBcInJlYWN0LWNyb3BwZXJcIjtcclxuXHJcbmZ1bmN0aW9uIENyb3BJbWFnZU1vZGFsKHsgbWVkaWFQcmV2aWV3LCBzZXRNZWRpYSwgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgfSkge1xyXG4gIGNvbnN0IFtjcm9wcGVyLCBzZXRDcm9wcGVyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGdldENyb3BEYXRhID0gKCkgPT4ge1xyXG4gICAgaWYgKGNyb3BwZXIpIHtcclxuICAgICAgc2V0TWVkaWEoY3JvcHBlci5nZXRDcm9wcGVkQ2FudmFzKCkudG9EYXRhVVJMKCkpO1xyXG4gICAgICBjcm9wcGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKHsga2V5IH0pID0+IHtcclxuICAgICAgaWYgKGNyb3BwZXIpIHtcclxuICAgICAgICBpZiAoa2V5ID09PSBcIm1cIikgY3JvcHBlci5zZXREcmFnTW9kZShcIm1vdmVcIik7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJjXCIpIGNyb3BwZXIuc2V0RHJhZ01vZGUoXCJjcm9wXCIpO1xyXG4gICAgICAgIGlmIChrZXkgPT09IFwiclwiKSBjcm9wcGVyLnJlc2V0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtjcm9wcGVyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBjbG9zZU9uRGltbWVyQ2xpY2s9e2ZhbHNlfVxyXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICBvcGVuPXtzaG93TW9kYWx9XHJcbiAgICAgID5cclxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNvbnRlbnQ9XCJDcm9wIGltYWdlIGJlZm9yZSB1cGxvYWRcIiAvPlxyXG5cclxuICAgICAgICA8R3JpZCBjb2x1bW5zPXsyfT5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQgaW1hZ2U+XHJcbiAgICAgICAgICAgICAgPENyb3BwZXJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0MDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgIGNyb3BCb3hSZXNpemFibGVcclxuICAgICAgICAgICAgICAgIHpvb21hYmxlXHJcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVcclxuICAgICAgICAgICAgICAgIGd1aWRlc1xyXG4gICAgICAgICAgICAgICAgZHJhZ01vZGU9XCJtb3ZlXCJcclxuICAgICAgICAgICAgICAgIGluaXRpYWxBc3BlY3RSYXRpbz17MX1cclxuICAgICAgICAgICAgICAgIHByZXZpZXc9XCIuaW1nLXByZXZpZXdcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICB2aWV3TW9kZT17MX1cclxuICAgICAgICAgICAgICAgIG1pbkNyb3BCb3hIZWlnaHQ9ezEwfVxyXG4gICAgICAgICAgICAgICAgbWluQ29udGFpbmVyV2lkdGg9ezEwfVxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBhdXRvQ3JvcEFyZWE9ezF9XHJcbiAgICAgICAgICAgICAgICBjaGVja09yaWVudGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIG9uSW5pdGlhbGl6ZWQ9e2Nyb3BwZXIgPT4gc2V0Q3JvcHBlcihjcm9wcGVyKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQgaW1hZ2U+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZmlsZSBpbWFnZSBvdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlci5Db250ZW50IGNvbnRlbnQ9XCJGaW5hbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcHJldmlld1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDxNb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0aXRsZT1cIlJlc2V0IChSKVwiXHJcbiAgICAgICAgICAgIGljb249XCJyZWRvXCJcclxuICAgICAgICAgICAgY2lyY3VsYXJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY3JvcHBlciAmJiBjcm9wcGVyLnJlc2V0KCl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdGl0bGU9XCJNb3ZlIENhbnZhcyAoTSlcIlxyXG4gICAgICAgICAgICBpY29uPVwibW92ZVwiXHJcbiAgICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNyb3BwZXIgJiYgY3JvcHBlci5zZXREcmFnTW9kZShcIm1vdmVcIil9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdGl0bGU9XCJOZXcgQ3JvcGJveCAoQylcIlxyXG4gICAgICAgICAgICBpY29uPVwiY3JvcFwiXHJcbiAgICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNyb3BwZXIgJiYgY3JvcHBlci5zZXREcmFnTW9kZShcImNyb3BcIil9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgbmVnYXRpdmVcclxuICAgICAgICAgICAgY29udGVudD1cIkNhbmNlbFwiXHJcbiAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJDcm9wIEltYWdlXCIgaWNvbj1cImNoZWNrbWFya1wiIHBvc2l0aXZlIG9uQ2xpY2s9e2dldENyb3BEYXRhfSAvPlxyXG4gICAgICAgIDwvTW9kYWwuQWN0aW9ucz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3BJbWFnZU1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCwgR3JpZCwgSW1hZ2UsIENhcmQsIEljb24sIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBQb3N0Q29tbWVudHMgZnJvbSBcIi4vUG9zdENvbW1lbnRzXCI7XG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSBcIi4vQ29tbWVudElucHV0RmllbGRcIjtcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBsaWtlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xuaW1wb3J0IExpa2VzTGlzdCBmcm9tIFwiLi9MaWtlc0xpc3RcIjtcblxuZnVuY3Rpb24gSW1hZ2VNb2RhbCh7XG4gIHBvc3QsXG4gIHVzZXIsXG4gIHNldExpa2VzLFxuICBsaWtlcyxcbiAgaXNMaWtlZCxcbiAgY29tbWVudHMsXG4gIHNldENvbW1lbnRzXG59KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHcmlkIGNvbHVtbnM9ezJ9IHN0YWNrYWJsZSByZWxheGVkPlxuICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQgaW1hZ2U+XG4gICAgICAgICAgICA8SW1hZ2Ugd3JhcHBlZCBzaXplPVwibGFyZ2VcIiBzcmM9e3Bvc3QucGljVXJsfSAvPlxuICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgPENhcmQgZmx1aWQ+XG4gICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICA8SW1hZ2UgZmxvYXRlZD1cImxlZnRcIiBhdmF0YXIgc3JjPXtwb3N0LnVzZXIucHJvZmlsZVBpY1VybH0gLz5cblxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QudXNlci51c2VybmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnVzZXIubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuXG4gICAgICAgICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxuXG4gICAgICAgICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XG5cbiAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjFweFwiLFxuICAgICAgICAgICAgICAgICAgd29yZFNwYWNpbmc6IFwiMC4zNXB4XCJcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7cG9zdC50ZXh0fVxuICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cblxuICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBuYW1lPXtpc0xpa2VkID8gXCJoZWFydFwiIDogXCJoZWFydCBvdXRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgbGlrZVBvc3QocG9zdC5faWQsIHVzZXIuX2lkLCBzZXRMaWtlcywgaXNMaWtlZCA/IGZhbHNlIDogdHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPExpa2VzTGlzdFxuICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XG4gICAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgICBsaWtlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbkxpa2VzTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtgJHtsaWtlcy5sZW5ndGh9ICR7bGlrZXMubGVuZ3RoID09PSAxID8gXCJsaWtlXCIgOiBcImxpa2VzXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cblxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogY29tbWVudHMubGVuZ3RoID4gMiA/IFwiMjAwcHhcIiA6IFwiNjBweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLm1hcChjb21tZW50ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RDb21tZW50c1xuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxDb21tZW50SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XG4gICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICA8L0dyaWQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpc3QsIFBvcHVwLCBJbWFnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi4vLi4vdXRpbHMvY2F0Y2hFcnJvcnNcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExpa2VzUGxhY2VIb2xkZXIgfSBmcm9tIFwiLi4vTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXBcIjtcblxuZnVuY3Rpb24gTGlrZXNMaXN0KHsgcG9zdElkLCB0cmlnZ2VyIH0pIHtcbiAgY29uc3QgW2xpa2VzTGlzdCwgc2V0TGlrZXNMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldExpa2VzTGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzL2xpa2UvJHtwb3N0SWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxuICAgICAgfSk7XG4gICAgICBzZXRMaWtlc0xpc3QocmVzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQb3B1cFxuICAgICAgb249XCJjbGlja1wiXG4gICAgICBvbkNsb3NlPXsoKSA9PiBzZXRMaWtlc0xpc3QoW10pfVxuICAgICAgb25PcGVuPXtnZXRMaWtlc0xpc3R9XG4gICAgICBwb3BwZXJEZXBlbmRlbmNpZXM9e1tsaWtlc0xpc3RdfVxuICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cbiAgICAgIHdpZGVcbiAgICA+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPExpa2VzUGxhY2VIb2xkZXIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2xpa2VzTGlzdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjE1cmVtXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cmVtXCIsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMjEwcHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpc3Qgc2VsZWN0aW9uIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgICAgIHtsaWtlc0xpc3QubWFwKChsaWtlKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17bGlrZS5faWR9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYXZhdGFyIHNyYz17bGlrZS51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvJHtsaWtlLnVzZXIudXNlcm5hbWV9YCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bGlrZS51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvUG9wdXA+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpa2VzTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsLCBJbWFnZSwgQ2FyZCwgSWNvbiwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tIFwiLi9Qb3N0Q29tbWVudHNcIjtcbmltcG9ydCBDb21tZW50SW5wdXRGaWVsZCBmcm9tIFwiLi9Db21tZW50SW5wdXRGaWVsZFwiO1xuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGxpa2VQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xuXG5mdW5jdGlvbiBOb0ltYWdlTW9kYWwoe1xuICBwb3N0LFxuICB1c2VyLFxuICBzZXRMaWtlcyxcbiAgbGlrZXMsXG4gIGlzTGlrZWQsXG4gIGNvbW1lbnRzLFxuICBzZXRDb21tZW50c1xufSkge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIGZsdWlkPlxuICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgPEltYWdlIGZsb2F0ZWQ9XCJsZWZ0XCIgYXZhdGFyIHNyYz17cG9zdC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XG5cbiAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9DYXJkLkhlYWRlcj5cblxuICAgICAgICA8Q2FyZC5NZXRhPntjYWxjdWxhdGVUaW1lKHBvc3QuY3JlYXRlZEF0KX08L0NhcmQuTWV0YT5cblxuICAgICAgICB7cG9zdC5sb2NhdGlvbiAmJiA8Q2FyZC5NZXRhIGNvbnRlbnQ9e3Bvc3QubG9jYXRpb259IC8+fVxuXG4gICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xcHhcIixcbiAgICAgICAgICAgIHdvcmRTcGFjaW5nOiBcIjAuMzVweFwiXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3Bvc3QudGV4dH1cbiAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgPC9DYXJkLkNvbnRlbnQ+XG5cbiAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgbmFtZT17aXNMaWtlZCA/IFwiaGVhcnRcIiA6IFwiaGVhcnQgb3V0bGluZVwifVxuICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgIGxpa2VQb3N0KHBvc3QuX2lkLCB1c2VyLl9pZCwgc2V0TGlrZXMsIGlzTGlrZWQgPyBmYWxzZSA6IHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxMaWtlc0xpc3RcbiAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgbGlrZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5MaWtlc0xpc3RcIj5cbiAgICAgICAgICAgICAgICB7YCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aCA9PT0gMSA/IFwibGlrZVwiIDogXCJsaWtlc1wifWB9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IGNvbW1lbnRzLmxlbmd0aCA+IDIgPyBcIjIwMHB4XCIgOiBcIjYwcHhcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIlxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBjb21tZW50cy5tYXAoY29tbWVudCA9PiAoXG4gICAgICAgICAgICAgIDxQb3N0Q29tbWVudHNcbiAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxuICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XG4gICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Q29tbWVudElucHV0RmllbGQgcG9zdElkPXtwb3N0Ll9pZH0gdXNlcj17dXNlcn0gc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfSAvPlxuICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb0ltYWdlTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbW1lbnQsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XG5pbXBvcnQgeyBkZWxldGVDb21tZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIFBvc3RDb21tZW50cyh7IGNvbW1lbnQsIHVzZXIsIHNldENvbW1lbnRzLCBwb3N0SWQgfSkge1xuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29tbWVudC5Hcm91cD5cbiAgICAgICAgPENvbW1lbnQ+XG4gICAgICAgICAgPENvbW1lbnQuQXZhdGFyIHNyYz17Y29tbWVudC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XG4gICAgICAgICAgPENvbW1lbnQuQ29udGVudD5cbiAgICAgICAgICAgIDxDb21tZW50LkF1dGhvciBhcz1cImFcIiBocmVmPXtgLyR7Y29tbWVudC51c2VyLnVzZXJuYW1lfWB9PlxuICAgICAgICAgICAgICB7Y29tbWVudC51c2VyLm5hbWV9XG4gICAgICAgICAgICA8L0NvbW1lbnQuQXV0aG9yPlxuICAgICAgICAgICAgPENvbW1lbnQuTWV0YWRhdGE+e2NhbGN1bGF0ZVRpbWUoY29tbWVudC5kYXRlKX08L0NvbW1lbnQuTWV0YWRhdGE+XG5cbiAgICAgICAgICAgIDxDb21tZW50LlRleHQ+e2NvbW1lbnQudGV4dH08L0NvbW1lbnQuVGV4dD5cblxuICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9ucz5cbiAgICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9uPlxuICAgICAgICAgICAgICAgIHsodXNlci5yb2xlID09PSBcInJvb3RcIiB8fCBjb21tZW50LnVzZXIuX2lkID09PSB1c2VyLl9pZCkgJiYgKFxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxldGVDb21tZW50KHBvc3RJZCwgY29tbWVudC5faWQsIHNldENvbW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29tbWVudC5BY3Rpb24+XG4gICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9ucz5cbiAgICAgICAgICA8L0NvbW1lbnQuQ29udGVudD5cbiAgICAgICAgPC9Db21tZW50PlxuICAgICAgPC9Db21tZW50Lkdyb3VwPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29tbWVudHM7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xuaW1wb3J0IENyZWF0ZVBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdC9DcmVhdGVQb3N0XCI7XG5pbXBvcnQgQ2FyZFBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdC9DYXJkUG9zdFwiO1xuaW1wb3J0IHsgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcbmltcG9ydCB7IE5vUG9zdHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhXCI7XG5pbXBvcnQgeyBQb3N0RGVsZXRlVG9hc3RyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0clwiO1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQbGFjZUhvbGRlclBvc3RzLCBFbmRNZXNzYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXBcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IGdldFVzZXJJbmZvIGZyb20gXCIuLi91dGlscy9nZXRVc2VySW5mb1wiO1xuaW1wb3J0IE1lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL01lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbFwiO1xuaW1wb3J0IG5ld01zZ1NvdW5kIGZyb20gXCIuLi91dGlscy9uZXdNc2dTb3VuZFwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvblBvcnRhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL05vdGlmaWNhdGlvblBvcnRhbFwiO1xuXG5mdW5jdGlvbiBJbmRleCh7IHVzZXIsIHBvc3RzRGF0YSwgZXJyb3JMb2FkaW5nIH0pIHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShwb3N0c0RhdGEgfHwgW10pO1xuICBjb25zdCBbc2hvd1RvYXN0ciwgc2V0U2hvd1RvYXN0cl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoYXNNb3JlLCBzZXRIYXNNb3JlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDIpO1xuXG4gIGNvbnN0IHNvY2tldCA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IFtuZXdNZXNzYWdlUmVjZWl2ZWQsIHNldE5ld01lc3NhZ2VSZWNlaXZlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW25ld01lc3NhZ2VNb2RhbCwgc2hvd05ld01lc3NhZ2VNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW25ld05vdGlmaWNhdGlvbiwgc2V0TmV3Tm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbm90aWZpY2F0aW9uUG9wdXAsIHNob3dOb3RpZmljYXRpb25Qb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNvY2tldC5jdXJyZW50KSB7XG4gICAgICBzb2NrZXQuY3VycmVudCA9IGlvKGJhc2VVcmwpO1xuICAgIH1cblxuICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImpvaW5cIiwgeyB1c2VySWQ6IHVzZXIuX2lkIH0pO1xuXG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcIm5ld01zZ1JlY2VpdmVkXCIsIGFzeW5jICh7IG5ld01zZyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCB9ID0gYXdhaXQgZ2V0VXNlckluZm8obmV3TXNnLnNlbmRlcik7XG5cbiAgICAgICAgaWYgKHVzZXIubmV3TWVzc2FnZVBvcHVwKSB7XG4gICAgICAgICAgc2V0TmV3TWVzc2FnZVJlY2VpdmVkKHtcbiAgICAgICAgICAgIC4uLm5ld01zZyxcbiAgICAgICAgICAgIHNlbmRlck5hbWU6IG5hbWUsXG4gICAgICAgICAgICBzZW5kZXJQcm9maWxlUGljOiBwcm9maWxlUGljVXJsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2hvd05ld01lc3NhZ2VNb2RhbCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdNc2dTb3VuZChuYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnRpdGxlID0gYFdlbGNvbWUsICR7dXNlci5uYW1lLnNwbGl0KFwiIFwiKVswXX1gO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xuICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiZGlzY29ubmVjdFwiKTtcbiAgICAgICAgc29ja2V0LmN1cnJlbnQub2ZmKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2hvd1RvYXN0ciAmJiBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dUb2FzdHIoZmFsc2UpLCAzMDAwKTtcbiAgfSwgW3Nob3dUb2FzdHJdKTtcblxuICBjb25zdCBmZXRjaERhdGFPblNjcm9sbCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfSxcbiAgICAgICAgcGFyYW1zOiB7IHBhZ2VOdW1iZXIgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHNldEhhc01vcmUoZmFsc2UpO1xuXG4gICAgICBzZXRQb3N0cyhwcmV2ID0+IFsuLi5wcmV2LCAuLi5yZXMuZGF0YV0pO1xuICAgICAgc2V0UGFnZU51bWJlcihwcmV2ID0+IHByZXYgKyAxKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoXCJFcnJvciBmZXRjaGluZyBQb3N0c1wiKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBvc3RzLmxlbmd0aCA9PT0gMCB8fCBlcnJvckxvYWRpbmcpIHJldHVybiA8Tm9Qb3N0cyAvPjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xuICAgICAgc29ja2V0LmN1cnJlbnQub24oXG4gICAgICAgIFwibmV3Tm90aWZpY2F0aW9uUmVjZWl2ZWRcIixcbiAgICAgICAgKHsgbmFtZSwgcHJvZmlsZVBpY1VybCwgdXNlcm5hbWUsIHBvc3RJZCB9KSA9PiB7XG4gICAgICAgICAgc2V0TmV3Tm90aWZpY2F0aW9uKHsgbmFtZSwgcHJvZmlsZVBpY1VybCwgdXNlcm5hbWUsIHBvc3RJZCB9KTtcblxuICAgICAgICAgIHNob3dOb3RpZmljYXRpb25Qb3B1cCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bm90aWZpY2F0aW9uUG9wdXAgJiYgbmV3Tm90aWZpY2F0aW9uICE9PSBudWxsICYmIChcbiAgICAgICAgPE5vdGlmaWNhdGlvblBvcnRhbFxuICAgICAgICAgIG5ld05vdGlmaWNhdGlvbj17bmV3Tm90aWZpY2F0aW9ufVxuICAgICAgICAgIG5vdGlmaWNhdGlvblBvcHVwPXtub3RpZmljYXRpb25Qb3B1cH1cbiAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uUG9wdXA9e3Nob3dOb3RpZmljYXRpb25Qb3B1cH1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHtzaG93VG9hc3RyICYmIDxQb3N0RGVsZXRlVG9hc3RyIC8+fVxuXG4gICAgICB7bmV3TWVzc2FnZU1vZGFsICYmIG5ld01lc3NhZ2VSZWNlaXZlZCAhPT0gbnVsbCAmJiAoXG4gICAgICAgIDxNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWxcbiAgICAgICAgICBzb2NrZXQ9e3NvY2tldH1cbiAgICAgICAgICBzaG93TmV3TWVzc2FnZU1vZGFsPXtzaG93TmV3TWVzc2FnZU1vZGFsfVxuICAgICAgICAgIG5ld01lc3NhZ2VNb2RhbD17bmV3TWVzc2FnZU1vZGFsfVxuICAgICAgICAgIG5ld01lc3NhZ2VSZWNlaXZlZD17bmV3TWVzc2FnZVJlY2VpdmVkfVxuICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8U2VnbWVudD5cbiAgICAgICAgPENyZWF0ZVBvc3QgdXNlcj17dXNlcn0gc2V0UG9zdHM9e3NldFBvc3RzfSAvPlxuXG4gICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgIGhhc01vcmU9e2hhc01vcmV9XG4gICAgICAgICAgbmV4dD17ZmV0Y2hEYXRhT25TY3JvbGx9XG4gICAgICAgICAgbG9hZGVyPXs8UGxhY2VIb2xkZXJQb3N0cyAvPn1cbiAgICAgICAgICBlbmRNZXNzYWdlPXs8RW5kTWVzc2FnZSAvPn1cbiAgICAgICAgICBkYXRhTGVuZ3RoPXtwb3N0cy5sZW5ndGh9XG4gICAgICAgID5cbiAgICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgPENhcmRQb3N0XG4gICAgICAgICAgICAgIHNvY2tldD17c29ja2V0fVxuICAgICAgICAgICAgICBrZXk9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICBwb3N0PXtwb3N0fVxuICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgICBzZXRQb3N0cz17c2V0UG9zdHN9XG4gICAgICAgICAgICAgIHNldFNob3dUb2FzdHI9e3NldFNob3dUb2FzdHJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuICAgICAgPC9TZWdtZW50PlxuICAgIDwvPlxuICApO1xufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSxcbiAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyOiAxIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7IHBvc3RzRGF0YTogcmVzLmRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xuXG5jb25zdCBjYWxjdWxhdGVUaW1lID0gY3JlYXRlZEF0ID0+IHtcbiAgY29uc3QgdG9kYXkgPSBtb21lbnQoRGF0ZS5ub3coKSk7XG4gIGNvbnN0IHBvc3REYXRlID0gbW9tZW50KGNyZWF0ZWRBdCk7XG4gIGNvbnN0IGRpZmZJbkhvdXJzID0gdG9kYXkuZGlmZihwb3N0RGF0ZSwgXCJob3Vyc1wiKTtcblxuICBpZiAoZGlmZkluSG91cnMgPCAyNCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICBUb2RheSA8TW9tZW50IGZvcm1hdD1cImhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChkaWZmSW5Ib3VycyA+IDI0ICYmIGRpZmZJbkhvdXJzIDwgMzYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgWWVzdGVyZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMzYpIHtcbiAgICByZXR1cm4gPE1vbWVudCBmb3JtYXQ9XCJERC9NTS9ZWVlZIGhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRlVGltZTsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBnZXRVc2VySW5mbyA9IGFzeW5jICh1c2VyVG9GaW5kSWQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9jaGF0cy91c2VyLyR7dXNlclRvRmluZElkfWAsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IG5hbWU6IHJlcy5kYXRhLm5hbWUsIHByb2ZpbGVQaWNVcmw6IHJlcy5kYXRhLnByb2ZpbGVQaWNVcmwgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VXNlckluZm87XHJcbiIsImNvbnN0IG5ld01zZ1NvdW5kID0gc2VuZGVyTmFtZSA9PiB7XHJcbiAgICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbyhcIi9saWdodC5tcDNcIik7XHJcbiAgXHJcbiAgICBzb3VuZCAmJiBzb3VuZC5wbGF5KCk7XHJcbiAgXHJcbiAgICBpZiAoc2VuZGVyTmFtZSkge1xyXG4gICAgICBkb2N1bWVudC50aXRsZSA9IGBOZXcgbWVzc2FnZSBmcm9tICR7c2VuZGVyTmFtZX1gO1xyXG4gIFxyXG4gICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk1lc3NhZ2VzXCI7XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IG5ld01zZ1NvdW5kOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5cbmNvbnN0IEF4aW9zID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCxcbiAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBzdWJtaXROZXdQb3N0ID0gYXN5bmMgKFxuICB0ZXh0LFxuICBsb2NhdGlvbixcbiAgcGljVXJsLFxuICBzZXRQb3N0cyxcbiAgc2V0TmV3UG9zdCxcbiAgc2V0RXJyb3JcbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zLnBvc3QoXCIvXCIsIHsgdGV4dCwgbG9jYXRpb24sIHBpY1VybCB9KTtcblxuICAgIHNldFBvc3RzKHByZXYgPT4gW3Jlcy5kYXRhLCAuLi5wcmV2XSk7XG4gICAgc2V0TmV3UG9zdCh7IHRleHQ6IFwiXCIsIGxvY2F0aW9uOiBcIlwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xuICAgIHNldEVycm9yKGVycm9yTXNnKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3QgPSBhc3luYyAocG9zdElkLCBzZXRQb3N0cywgc2V0U2hvd1RvYXN0cikgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IEF4aW9zLmRlbGV0ZShgLyR7cG9zdElkfWApO1xuICAgIHNldFBvc3RzKHByZXYgPT4gcHJldi5maWx0ZXIocG9zdCA9PiBwb3N0Ll9pZCAhPT0gcG9zdElkKSk7XG4gICAgc2V0U2hvd1RvYXN0cih0cnVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbGlrZVBvc3QgPSBhc3luYyAocG9zdElkLCB1c2VySWQsIHNldExpa2VzLCBsaWtlID0gdHJ1ZSkgPT4ge1xuICB0cnkge1xuICAgIGlmIChsaWtlKSB7XG4gICAgICBhd2FpdCBBeGlvcy5wb3N0KGAvbGlrZS8ke3Bvc3RJZH1gKTtcbiAgICAgIHNldExpa2VzKHByZXYgPT4gWy4uLnByZXYsIHsgdXNlcjogdXNlcklkIH1dKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWxpa2UpIHtcbiAgICAgIGF3YWl0IEF4aW9zLnB1dChgL3VubGlrZS8ke3Bvc3RJZH1gKTtcbiAgICAgIHNldExpa2VzKHByZXYgPT4gcHJldi5maWx0ZXIobGlrZSA9PiBsaWtlLnVzZXIgIT09IHVzZXJJZCkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAocG9zdElkLCB1c2VyLCB0ZXh0LCBzZXRDb21tZW50cywgc2V0VGV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zLnBvc3QoYC9jb21tZW50LyR7cG9zdElkfWAsIHsgdGV4dCB9KTtcblxuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XG4gICAgICBfaWQ6IHJlcy5kYXRhLFxuICAgICAgdXNlcixcbiAgICAgIHRleHQsXG4gICAgICBkYXRlOiBEYXRlLm5vdygpXG4gICAgfTtcblxuICAgIHNldENvbW1lbnRzKHByZXYgPT4gW25ld0NvbW1lbnQsIC4uLnByZXZdKTtcbiAgICBzZXRUZXh0KFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb21tZW50ID0gYXN5bmMgKHBvc3RJZCwgY29tbWVudElkLCBzZXRDb21tZW50cykgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IEF4aW9zLmRlbGV0ZShgLyR7cG9zdElkfS8ke2NvbW1lbnRJZH1gKTtcbiAgICBzZXRDb21tZW50cyhwcmV2ID0+IHByZXYuZmlsdGVyKGNvbW1lbnQgPT4gY29tbWVudC5faWQgIT09IGNvbW1lbnRJZCkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHVwbG9hZFBpYyA9IGFzeW5jIG1lZGlhID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybS5hcHBlbmQoXCJmaWxlXCIsIG1lZGlhKTtcbiAgICBmb3JtLmFwcGVuZChcInVwbG9hZF9wcmVzZXRcIiwgXCJzb2NpYWxfbWVkaWFcIik7XG4gICAgZm9ybS5hcHBlbmQoXCJjbG91ZF9uYW1lXCIsIFwieXRxdGgwOTIxXCIpO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5DTE9VRElOQVJZX1VSTCwgZm9ybSk7XG4gICAgcmV0dXJuIHJlcy5kYXRhLnVybDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwbG9hZFBpYztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNyb3BwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9