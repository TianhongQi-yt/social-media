(function() {
var exports = {};
exports.id = "pages/messages";
exports.ids = ["pages/messages"];
exports.modules = {

/***/ "./components/Chats/Chat.js":
/*!**********************************!*\
  !*** ./components/Chats/Chat.js ***!
  \**********************************/
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
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Chats\\Chat.js";





function Chat({
  chat,
  connectedUsers,
  deleteChat
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const isOnline = connectedUsers.length > 0 && connectedUsers.filter(user => user.userId === chat.messagesWith).length > 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
      selection: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
        active: router.query.message === chat.messagesWith,
        onClick: () => router.push(`/messages?message=${chat.messagesWith}`, undefined, {
          shallow: true
        }),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Avatar, {
            src: chat.profilePicUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Content, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Author, {
              as: "a",
              children: [chat.name, isOnline && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                name: "circle",
                size: "small",
                color: "green"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Metadata, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(chat.date)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  position: "absolute",
                  right: "10px",
                  cursor: "pointer"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                  name: "trash alternate",
                  color: "red",
                  onClick: () => deleteChat(chat.messagesWith)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Text, {
              children: chat.lastMessage.length > 20 ? `${chat.lastMessage.substring(0, 20)} ...` : chat.lastMessage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./components/Chats/ChatListSearch.js":
/*!********************************************!*\
  !*** ./components/Chats/ChatListSearch.js ***!
  \********************************************/
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Chats\\ChatListSearch.js";






let cancel;

function ChatListSearch({
  chats,
  setChats
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: results,
    1: setResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  const handleChange = async e => {
    const {
      value
    } = e.target;
    setText(value);
    setLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_3___default().CancelToken);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get("token");
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default())}/api/search/${value}`, {
        headers: {
          Authorization: token
        },
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });
      if (res.data.length === 0) return setLoading(false);
      setResults(res.data);
    } catch (error) {
      alert("Error Searching");
    }

    setLoading(false);
  };

  const addChat = result => {
    const alreadyInChat = chats.length > 0 && chats.filter(chat => chat.messagesWith === result._id).length > 0; // 是否有聊天窗口，若没有，创建新的聊天窗

    if (alreadyInChat) {
      return router.push(`/messages?message=${result._id}`);
    } else {
      const newChat = {
        messagesWith: result._id,
        name: result.name,
        profilePicUrl: result.profilePicUrl,
        lastMessage: "",
        date: Date.now()
      };
      setChats(prev => [newChat, ...prev]);
      return router.push(`/messages?message=${result._id}`);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Search, {
    onBlur: () => {
      results.length > 0 && setResults([]);
      loading && setLoading(false);
      setText("");
    },
    loading: loading,
    value: text,
    resultRenderer: ResultRenderer,
    results: results,
    onSearchChange: handleChange,
    minCharacters: 1,
    onResultSelect: (e, data) => addChat(data.result)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

const ResultRenderer = ({
  _id,
  profilePicUrl,
  name
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
        src: profilePicUrl,
        alt: "ProfilePic",
        avatar: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
        header: name,
        as: "a"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined)
  }, _id, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ChatListSearch);

/***/ }),

/***/ "./components/Messages/Banner.js":
/*!***************************************!*\
  !*** ./components/Messages/Banner.js ***!
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

var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Messages\\Banner.js";



function Banner({
  bannerData
}) {
  const {
    name,
    profilePicUrl
  } = bannerData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    color: "teal",
    attached: "top",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
        floated: "left",
        width: 14,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            avatar: true,
            src: profilePicUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, this), name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Messages/Message.js":
/*!****************************************!*\
  !*** ./components/Messages/Message.js ***!
  \****************************************/
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

var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Messages\\Message.js";




function Message({
  message,
  user,
  deleteMsg,
  bannerProfilePic,
  divRef
}) {
  const {
    0: deleteIcon,
    1: showDeleteIcon
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const ifYouSender = message.sender === user._id;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bubbleWrapper",
    ref: divRef,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: ifYouSender ? "inlineContainer own" : "inlineContainer",
      onClick: () => ifYouSender && showDeleteIcon(!deleteIcon),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "inlineIcon",
        src: ifYouSender ? user.profilePicUrl : bannerProfilePic
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: ifYouSender ? "ownBubble own" : "otherBubble other",
        children: message.msg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), deleteIcon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Popup, {
        trigger: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "trash",
          color: "red",
          style: {
            cursor: "pointer"
          },
          onClick: () => deleteMsg(message._id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }, this),
        content: "This will only delete the message from your inbox!",
        position: "top right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: ifYouSender ? "own" : "other",
      children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(message.date)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./components/Messages/MessageInputField.js":
/*!**************************************************!*\
  !*** ./components/Messages/MessageInputField.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Messages\\MessageInputField.js";



function MessageInputField({
  sendMsg
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      position: "sticky",
      bottom: "0"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
      secondary: true,
      color: "teal",
      attached: "bottom",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
        reply: true,
        onSubmit: e => {
          e.preventDefault();
          sendMsg(text);
          setText("");
        },
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
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MessageInputField);

/***/ }),

/***/ "./pages/messages.js":
/*!***************************!*\
  !*** ./pages/messages.js ***!
  \***************************/
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
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Chats_Chat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Chats/Chat */ "./components/Chats/Chat.js");
/* harmony import */ var _components_Chats_ChatListSearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Chats/ChatListSearch */ "./components/Chats/ChatListSearch.js");
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Messages_Banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Messages/Banner */ "./components/Messages/Banner.js");
/* harmony import */ var _components_Messages_MessageInputField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Messages/MessageInputField */ "./components/Messages/MessageInputField.js");
/* harmony import */ var _components_Messages_Message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Messages/Message */ "./components/Messages/Message.js");
/* harmony import */ var _utils_getUserInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/getUserInfo */ "./utils/getUserInfo.js");
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_16__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\pages\\messages.js";

















const scrollDivToBottom = divRef => divRef.current !== null && divRef.current.scrollIntoView({
  behaviour: "smooth"
});

function Messages({
  chatsData,
  user
}) {
  const {
    0: chats,
    1: setChats
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(chatsData);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    0: connectedUsers,
    1: setConnectedUsers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: messages,
    1: setMessages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: bannerData,
    1: setBannerData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: "",
    profilePicUrl: ""
  });
  const divRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // This ref is for persisting the state of query string in url throughout re-renders. This ref is the value of query string inside url

  const openChatId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""); //CONNECTION useEffect

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!socket.current) {
      socket.current = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()((_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default()));
    }

    if (socket.current) {
      socket.current.emit("join", {
        userId: user._id
      });
      socket.current.on("connectedUsers", ({
        users
      }) => {
        users.length > 0 && setConnectedUsers(users);
      });

      if (chats.length > 0 && !router.query.message) {
        router.push(`/messages?message=${chats[0].messagesWith}`, undefined, {
          shallow: true
        });
      }
    }

    return () => {
      if (socket.current) {
        socket.current.emit("disconnect");
        socket.current.off();
      }
    };
  }, []); // LOAD MESSAGES useEffect

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const loadMessages = () => {
      socket.current.emit("loadMessages", {
        userId: user._id,
        messagesWith: router.query.message
      });
      socket.current.on("messagesLoaded", async ({
        chat
      }) => {
        setMessages(chat.messages);
        setBannerData({
          name: chat.messagesWith.name,
          profilePicUrl: chat.messagesWith.profilePicUrl
        });
        openChatId.current = chat.messagesWith._id;
        divRef.current && scrollDivToBottom(divRef);
      });
      socket.current.on("noChatFound", async () => {
        const {
          name,
          profilePicUrl
        } = await (0,_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_14__.default)(router.query.message);
        setBannerData({
          name,
          profilePicUrl
        });
        setMessages([]);
        openChatId.current = router.query.message;
      });
    };

    if (socket.current && router.query.message) loadMessages();
  }, [router.query.message]);

  const sendMsg = msg => {
    if (socket.current) {
      socket.current.emit("sendNewMsg", {
        userId: user._id,
        msgSendToUserId: openChatId.current,
        msg
      });
    }
  }; // Confirming msg is sent and receving the messages useEffect


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (socket.current) {
      socket.current.on("msgSent", ({
        newMsg
      }) => {
        if (newMsg.receiver === openChatId.current) {
          setMessages(prev => [...prev, newMsg]);
          setChats(prev => {
            const previousChat = prev.find(chat => chat.messagesWith === newMsg.receiver);
            previousChat.lastMessage = newMsg.msg;
            previousChat.date = newMsg.date;
            return [...prev];
          });
        }
      });
      socket.current.on("newMsgReceived", async ({
        newMsg
      }) => {
        let senderName; // WHEN CHAT WITH SENDER IS CURRENTLY OPENED INSIDE YOUR BROWSER

        if (newMsg.sender === openChatId.current) {
          setMessages(prev => [...prev, newMsg]);
          setChats(prev => {
            const previousChat = prev.find(chat => chat.messagesWith === newMsg.sender);
            previousChat.lastMessage = newMsg.msg;
            previousChat.date = newMsg.date;
            senderName = previousChat.name;
            return [...prev];
          });
        } //
        else {
            const ifPreviouslyMessaged = chats.filter(chat => chat.messagesWith === newMsg.sender).length > 0;

            if (ifPreviouslyMessaged) {
              setChats(prev => {
                const previousChat = prev.find(chat => chat.messagesWith === newMsg.sender);
                previousChat.lastMessage = newMsg.msg;
                previousChat.date = newMsg.date;
                senderName = previousChat.name;
                return [previousChat, ...prev.filter(chat => chat.messagesWith !== newMsg.sender)];
              });
            } //IF NO PREVIOUS CHAT WITH THE SENDER
            else {
                const {
                  name,
                  profilePicUrl
                } = await (0,_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_14__.default)(newMsg.sender);
                senderName = name;
                const newChat = {
                  messagesWith: newMsg.sender,
                  name,
                  profilePicUrl,
                  lastMessage: newMsg.msg,
                  date: newMsg.date
                };
                setChats(prev => [newChat, ...prev]);
              }
          }

        (0,_utils_newMsgSound__WEBPACK_IMPORTED_MODULE_15__.default)(senderName);
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    messages.length > 0 && scrollDivToBottom(divRef);
  }, [messages]);

  const deleteMsg = messageId => {
    if (socket.current) {
      socket.current.emit("deleteMsg", {
        userId: user._id,
        messagesWith: openChatId.current,
        messageId
      });
      socket.current.on("msgDeleted", () => {
        setMessages(prev => prev.filter(message => message._id !== messageId));
      });
    }
  };

  const deleteChat = async messagesWith => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_3___default().delete(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default())}/api/chats/${messagesWith}`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_16___default().get("token")
        }
      });
      setChats(prev => prev.filter(chat => chat.messagesWith !== messagesWith));
      router.push("/messages", undefined, {
        shallow: true
      });
    } catch (error) {
      alert("Error deleting chat");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment, {
      padded: true,
      basic: true,
      size: "large",
      style: {
        marginTop: "5px"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Header, {
        icon: "home",
        content: "Go Back!",
        onClick: () => router.push("/"),
        style: {
          cursor: "pointer"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          marginBottom: "10px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chats_ChatListSearch__WEBPACK_IMPORTED_MODULE_9__.default, {
          chats: chats,
          setChats: setChats
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, this), chats.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {
          stackable: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {
            width: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Comment.Group, {
              size: "big",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment, {
                raised: true,
                style: {
                  overflow: "auto",
                  maxHeight: "32rem"
                },
                children: chats.map((chat, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chats_Chat__WEBPACK_IMPORTED_MODULE_8__.default, {
                  chat: chat,
                  connectedUsers: connectedUsers,
                  deleteChat: deleteChat
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 23
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {
            width: 12,
            children: router.query.message && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  overflow: "auto",
                  overflowX: "hidden",
                  maxHeight: "35rem",
                  height: "35rem",
                  backgroundColor: "whitesmoke"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    position: "sticky",
                    top: "0"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Messages_Banner__WEBPACK_IMPORTED_MODULE_11__.default, {
                    bannerData: bannerData
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 258,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 23
                }, this), messages.length > 0 && messages.map((message, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Messages_Message__WEBPACK_IMPORTED_MODULE_13__.default, {
                  divRef: divRef,
                  bannerProfilePic: bannerData.profilePicUrl,
                  message: message,
                  user: user,
                  deleteMsg: deleteMsg
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 27
                }, this))]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Messages_MessageInputField__WEBPACK_IMPORTED_MODULE_12__.default, {
                sendMsg: sendMsg
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 21
              }, this)]
            }, void 0, true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 13
        }, this)
      }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_10__.NoMessages, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

Messages.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default())}/api/chats`, {
      headers: {
        Authorization: token
      }
    });
    return {
      chatsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Messages);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(module) {

const baseUrl =  true ? "http://localhost:3000" : 0;
module.exports = baseUrl;

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

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

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_NoData_js-utils_calculateTime_js-utils_getUserInfo_js-utils_newMsgSound_js"], function() { return __webpack_exec__("./pages/messages.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NoYXRzL0NoYXQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9DaGF0cy9DaGF0TGlzdFNlYXJjaC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL01lc3NhZ2VzL0Jhbm5lci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlSW5wdXRGaWVsZC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIiJdLCJuYW1lcyI6WyJDaGF0IiwiY2hhdCIsImNvbm5lY3RlZFVzZXJzIiwiZGVsZXRlQ2hhdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlzT25saW5lIiwibGVuZ3RoIiwiZmlsdGVyIiwidXNlciIsInVzZXJJZCIsIm1lc3NhZ2VzV2l0aCIsInF1ZXJ5IiwibWVzc2FnZSIsInB1c2giLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwicHJvZmlsZVBpY1VybCIsIm5hbWUiLCJjYWxjdWxhdGVUaW1lIiwiZGF0ZSIsInBvc2l0aW9uIiwicmlnaHQiLCJjdXJzb3IiLCJsYXN0TWVzc2FnZSIsInN1YnN0cmluZyIsImNhbmNlbCIsIkNoYXRMaXN0U2VhcmNoIiwiY2hhdHMiLCJzZXRDaGF0cyIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInRva2VuIiwiY29va2llIiwicmVzIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY2FuY2VsVG9rZW4iLCJjYW5jZWxlciIsImRhdGEiLCJlcnJvciIsImFsZXJ0IiwiYWRkQ2hhdCIsInJlc3VsdCIsImFscmVhZHlJbkNoYXQiLCJfaWQiLCJuZXdDaGF0IiwiRGF0ZSIsIm5vdyIsInByZXYiLCJSZXN1bHRSZW5kZXJlciIsIkJhbm5lciIsImJhbm5lckRhdGEiLCJNZXNzYWdlIiwiZGVsZXRlTXNnIiwiYmFubmVyUHJvZmlsZVBpYyIsImRpdlJlZiIsImRlbGV0ZUljb24iLCJzaG93RGVsZXRlSWNvbiIsImlmWW91U2VuZGVyIiwic2VuZGVyIiwibXNnIiwiTWVzc2FnZUlucHV0RmllbGQiLCJzZW5kTXNnIiwiYm90dG9tIiwicHJldmVudERlZmF1bHQiLCJjb2xvciIsImljb24iLCJkaXNhYmxlZCIsInNjcm9sbERpdlRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3VyIiwiTWVzc2FnZXMiLCJjaGF0c0RhdGEiLCJzb2NrZXQiLCJ1c2VSZWYiLCJzZXRDb25uZWN0ZWRVc2VycyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJzZXRCYW5uZXJEYXRhIiwib3BlbkNoYXRJZCIsInVzZUVmZmVjdCIsImlvIiwiZW1pdCIsIm9uIiwidXNlcnMiLCJvZmYiLCJsb2FkTWVzc2FnZXMiLCJnZXRVc2VySW5mbyIsIm1zZ1NlbmRUb1VzZXJJZCIsIm5ld01zZyIsInJlY2VpdmVyIiwicHJldmlvdXNDaGF0IiwiZmluZCIsInNlbmRlck5hbWUiLCJpZlByZXZpb3VzbHlNZXNzYWdlZCIsIm5ld01zZ1NvdW5kIiwibWVzc2FnZUlkIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwib3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJtYXAiLCJpIiwib3ZlcmZsb3dYIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwidG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicGFyc2VDb29raWVzIiwiZXJyb3JMb2FkaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULENBQWM7QUFBRUMsTUFBRjtBQUFRQyxnQkFBUjtBQUF3QkM7QUFBeEIsQ0FBZCxFQUFvRDtBQUNsRCxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsUUFBTUMsUUFBUSxHQUNaSixjQUFjLENBQUNLLE1BQWYsR0FBd0IsQ0FBeEIsSUFDQUwsY0FBYyxDQUFDTSxNQUFmLENBQXNCQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsTUFBTCxLQUFnQlQs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Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9tZXNzYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlciwgQ29tbWVudCwgSWNvbiwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuXHJcbmZ1bmN0aW9uIENoYXQoeyBjaGF0LCBjb25uZWN0ZWRVc2VycywgZGVsZXRlQ2hhdCB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGlzT25saW5lID1cclxuICAgIGNvbm5lY3RlZFVzZXJzLmxlbmd0aCA+IDAgJiZcclxuICAgIGNvbm5lY3RlZFVzZXJzLmZpbHRlcih1c2VyID0+IHVzZXIudXNlcklkID09PSBjaGF0Lm1lc3NhZ2VzV2l0aCkubGVuZ3RoID4gMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0IHNlbGVjdGlvbj5cclxuICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICBhY3RpdmU9e3JvdXRlci5xdWVyeS5tZXNzYWdlID09PSBjaGF0Lm1lc3NhZ2VzV2l0aH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvbWVzc2FnZXM/bWVzc2FnZT0ke2NoYXQubWVzc2FnZXNXaXRofWAsIHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgIHNoYWxsb3c6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q29tbWVudD5cclxuICAgICAgICAgICAgPENvbW1lbnQuQXZhdGFyIHNyYz17Y2hhdC5wcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgICAgICA8Q29tbWVudC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxDb21tZW50LkF1dGhvciBhcz1cImFcIj5cclxuICAgICAgICAgICAgICAgIHtjaGF0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICB7aXNPbmxpbmUgJiYgPEljb24gbmFtZT1cImNpcmNsZVwiIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZ3JlZW5cIiAvPn1cclxuICAgICAgICAgICAgICA8L0NvbW1lbnQuQXV0aG9yPlxyXG5cclxuICAgICAgICAgICAgICA8Q29tbWVudC5NZXRhZGF0YT5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2NhbGN1bGF0ZVRpbWUoY2hhdC5kYXRlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IFwiMTBweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaCBhbHRlcm5hdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVDaGF0KGNoYXQubWVzc2FnZXNXaXRoKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29tbWVudC5NZXRhZGF0YT5cclxuXHJcbiAgICAgICAgICAgICAgPENvbW1lbnQuVGV4dD5cclxuICAgICAgICAgICAgICAgIHtjaGF0Lmxhc3RNZXNzYWdlLmxlbmd0aCA+IDIwXHJcbiAgICAgICAgICAgICAgICAgID8gYCR7Y2hhdC5sYXN0TWVzc2FnZS5zdWJzdHJpbmcoMCwgMjApfSAuLi5gXHJcbiAgICAgICAgICAgICAgICAgIDogY2hhdC5sYXN0TWVzc2FnZX1cclxuICAgICAgICAgICAgICA8L0NvbW1lbnQuVGV4dD5cclxuICAgICAgICAgICAgPC9Db21tZW50LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NvbW1lbnQ+XHJcbiAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpc3QsIEltYWdlLCBTZWFyY2ggfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmxldCBjYW5jZWw7XHJcblxyXG5mdW5jdGlvbiBDaGF0TGlzdFNlYXJjaCh7IGNoYXRzLCBzZXRDaGF0cyB9KSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0VGV4dCh2YWx1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNhbmNlbCAmJiBjYW5jZWwoKTtcclxuICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcclxuICAgICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFwidG9rZW5cIik7XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3NlYXJjaC8ke3ZhbHVlfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXHJcbiAgICAgICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbigoY2FuY2VsZXIpID0+IHtcclxuICAgICAgICAgIGNhbmNlbCA9IGNhbmNlbGVyO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHJldHVybiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgIHNldFJlc3VsdHMocmVzLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoXCJFcnJvciBTZWFyY2hpbmdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkQ2hhdCA9IChyZXN1bHQpID0+IHtcclxuICAgIGNvbnN0IGFscmVhZHlJbkNoYXQgPVxyXG4gICAgICBjaGF0cy5sZW5ndGggPiAwICYmXHJcbiAgICAgIGNoYXRzLmZpbHRlcigoY2hhdCkgPT4gY2hhdC5tZXNzYWdlc1dpdGggPT09IHJlc3VsdC5faWQpLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgLy8g5piv5ZCm5pyJ6IGK5aSp56qX5Y+j77yM6Iul5rKh5pyJ77yM5Yib5bu65paw55qE6IGK5aSp56qXXHJcbiAgICBpZiAoYWxyZWFkeUluQ2hhdCkge1xyXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goYC9tZXNzYWdlcz9tZXNzYWdlPSR7cmVzdWx0Ll9pZH1gKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXdDaGF0ID0ge1xyXG4gICAgICAgIG1lc3NhZ2VzV2l0aDogcmVzdWx0Ll9pZCxcclxuICAgICAgICBuYW1lOiByZXN1bHQubmFtZSxcclxuICAgICAgICBwcm9maWxlUGljVXJsOiByZXN1bHQucHJvZmlsZVBpY1VybCxcclxuICAgICAgICBsYXN0TWVzc2FnZTogXCJcIixcclxuICAgICAgICBkYXRlOiBEYXRlLm5vdygpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgc2V0Q2hhdHMoKHByZXYpID0+IFtuZXdDaGF0LCAuLi5wcmV2XSk7XHJcblxyXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goYC9tZXNzYWdlcz9tZXNzYWdlPSR7cmVzdWx0Ll9pZH1gKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFxyXG4gICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICByZXN1bHRzLmxlbmd0aCA+IDAgJiYgc2V0UmVzdWx0cyhbXSk7XHJcbiAgICAgICAgbG9hZGluZyAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRUZXh0KFwiXCIpO1xyXG4gICAgICB9fVxyXG4gICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgcmVzdWx0UmVuZGVyZXI9e1Jlc3VsdFJlbmRlcmVyfVxyXG4gICAgICByZXN1bHRzPXtyZXN1bHRzfVxyXG4gICAgICBvblNlYXJjaENoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICBtaW5DaGFyYWN0ZXJzPXsxfVxyXG4gICAgICBvblJlc3VsdFNlbGVjdD17KGUsIGRhdGEpID0+IGFkZENoYXQoZGF0YS5yZXN1bHQpfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBSZXN1bHRSZW5kZXJlciA9ICh7IF9pZCwgcHJvZmlsZVBpY1VybCwgbmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IGtleT17X2lkfT5cclxuICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljVXJsfSBhbHQ9XCJQcm9maWxlUGljXCIgYXZhdGFyIC8+XHJcbiAgICAgICAgPExpc3QuQ29udGVudCBoZWFkZXI9e25hbWV9IGFzPVwiYVwiIC8+XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0TGlzdFNlYXJjaDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWdtZW50LCBHcmlkLCBJbWFnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQmFubmVyKHsgYmFubmVyRGF0YSB9KSB7XHJcbiAgY29uc3QgeyBuYW1lLCBwcm9maWxlUGljVXJsIH0gPSBiYW5uZXJEYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlZ21lbnQgY29sb3I9XCJ0ZWFsXCIgYXR0YWNoZWQ9XCJ0b3BcIj5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJsZWZ0XCIgd2lkdGg9ezE0fT5cclxuICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgPEltYWdlIGF2YXRhciBzcmM9e3Byb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L1NlZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJY29uLCBQb3B1cCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZSh7IG1lc3NhZ2UsIHVzZXIsIGRlbGV0ZU1zZywgYmFubmVyUHJvZmlsZVBpYywgZGl2UmVmIH0pIHtcclxuICBjb25zdCBbZGVsZXRlSWNvbiwgc2hvd0RlbGV0ZUljb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpZllvdVNlbmRlciA9IG1lc3NhZ2Uuc2VuZGVyID09PSB1c2VyLl9pZDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlV3JhcHBlclwiIHJlZj17ZGl2UmVmfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17aWZZb3VTZW5kZXIgPyBcImlubGluZUNvbnRhaW5lciBvd25cIiA6IFwiaW5saW5lQ29udGFpbmVyXCJ9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaWZZb3VTZW5kZXIgJiYgc2hvd0RlbGV0ZUljb24oIWRlbGV0ZUljb24pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lSWNvblwiXHJcbiAgICAgICAgICBzcmM9e2lmWW91U2VuZGVyID8gdXNlci5wcm9maWxlUGljVXJsIDogYmFubmVyUHJvZmlsZVBpY31cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aWZZb3VTZW5kZXIgPyBcIm93bkJ1YmJsZSBvd25cIiA6IFwib3RoZXJCdWJibGUgb3RoZXJcIn0+XHJcbiAgICAgICAgICB7bWVzc2FnZS5tc2d9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtkZWxldGVJY29uICYmIChcclxuICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU1zZyhtZXNzYWdlLl9pZCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZW50PVwiVGhpcyB3aWxsIG9ubHkgZGVsZXRlIHRoZSBtZXNzYWdlIGZyb20geW91ciBpbmJveCFcIlxyXG4gICAgICAgICAgICBwb3NpdGlvbj1cInRvcCByaWdodFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpZllvdVNlbmRlciA/IFwib3duXCIgOiBcIm90aGVyXCJ9PntjYWxjdWxhdGVUaW1lKG1lc3NhZ2UuZGF0ZSl9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIFNlZ21lbnQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VJbnB1dEZpZWxkKHsgc2VuZE1zZyB9KSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJzdGlja3lcIiwgYm90dG9tOiBcIjBcIiB9fT5cclxuICAgICAgPFNlZ21lbnQgc2Vjb25kYXJ5IGNvbG9yPVwidGVhbFwiIGF0dGFjaGVkPVwiYm90dG9tXCI+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIHJlcGx5XHJcbiAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2VuZE1zZyh0ZXh0KTtcclxuICAgICAgICAgICAgc2V0VGV4dChcIlwiKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZW5kIE5ldyBNZXNzYWdlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgICAgaWNvbjogXCJ0ZWxlZ3JhbSBwbGFuZVwiLFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkOiB0ZXh0ID09PSBcIlwiLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmdcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlSW5wdXRGaWVsZDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTZWdtZW50LCBIZWFkZXIsIERpdmlkZXIsIENvbW1lbnQsIEdyaWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhdHMvQ2hhdFwiO1xyXG5pbXBvcnQgQ2hhdExpc3RTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhdHMvQ2hhdExpc3RTZWFyY2hcIjtcclxuaW1wb3J0IHsgTm9NZXNzYWdlcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXNzYWdlcy9CYW5uZXJcIjtcclxuaW1wb3J0IE1lc3NhZ2VJbnB1dEZpZWxkIGZyb20gXCIuLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2VJbnB1dEZpZWxkXCI7XHJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2VcIjtcclxuaW1wb3J0IGdldFVzZXJJbmZvIGZyb20gXCIuLi91dGlscy9nZXRVc2VySW5mb1wiO1xyXG5pbXBvcnQgbmV3TXNnU291bmQgZnJvbSBcIi4uL3V0aWxzL25ld01zZ1NvdW5kXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3Qgc2Nyb2xsRGl2VG9Cb3R0b20gPSBkaXZSZWYgPT5cclxuICBkaXZSZWYuY3VycmVudCAhPT0gbnVsbCAmJiBkaXZSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW91cjogXCJzbW9vdGhcIiB9KTtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VzKHsgY2hhdHNEYXRhLCB1c2VyIH0pIHtcclxuICBjb25zdCBbY2hhdHMsIHNldENoYXRzXSA9IHVzZVN0YXRlKGNoYXRzRGF0YSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHNvY2tldCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFtjb25uZWN0ZWRVc2Vycywgc2V0Q29ubmVjdGVkVXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYmFubmVyRGF0YSwgc2V0QmFubmVyRGF0YV0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiXCIsIHByb2ZpbGVQaWNVcmw6IFwiXCIgfSk7XHJcblxyXG4gIGNvbnN0IGRpdlJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBUaGlzIHJlZiBpcyBmb3IgcGVyc2lzdGluZyB0aGUgc3RhdGUgb2YgcXVlcnkgc3RyaW5nIGluIHVybCB0aHJvdWdob3V0IHJlLXJlbmRlcnMuIFRoaXMgcmVmIGlzIHRoZSB2YWx1ZSBvZiBxdWVyeSBzdHJpbmcgaW5zaWRlIHVybFxyXG4gIGNvbnN0IG9wZW5DaGF0SWQgPSB1c2VSZWYoXCJcIik7XHJcblxyXG4gIC8vQ09OTkVDVElPTiB1c2VFZmZlY3RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICBzb2NrZXQuY3VycmVudCA9IGlvKGJhc2VVcmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiam9pblwiLCB7IHVzZXJJZDogdXNlci5faWQgfSk7XHJcblxyXG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcImNvbm5lY3RlZFVzZXJzXCIsICh7IHVzZXJzIH0pID0+IHtcclxuICAgICAgICB1c2Vycy5sZW5ndGggPiAwICYmIHNldENvbm5lY3RlZFVzZXJzKHVzZXJzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoY2hhdHMubGVuZ3RoID4gMCAmJiAhcm91dGVyLnF1ZXJ5Lm1lc3NhZ2UpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChgL21lc3NhZ2VzP21lc3NhZ2U9JHtjaGF0c1swXS5tZXNzYWdlc1dpdGh9YCwgdW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICBzaGFsbG93OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiZGlzY29ubmVjdFwiKTtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5vZmYoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIExPQUQgTUVTU0FHRVMgdXNlRWZmZWN0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRNZXNzYWdlcyA9ICgpID0+IHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImxvYWRNZXNzYWdlc1wiLCB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLl9pZCxcclxuICAgICAgICBtZXNzYWdlc1dpdGg6IHJvdXRlci5xdWVyeS5tZXNzYWdlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJtZXNzYWdlc0xvYWRlZFwiLCBhc3luYyAoeyBjaGF0IH0pID0+IHtcclxuICAgICAgICBzZXRNZXNzYWdlcyhjaGF0Lm1lc3NhZ2VzKTtcclxuICAgICAgICBzZXRCYW5uZXJEYXRhKHtcclxuICAgICAgICAgIG5hbWU6IGNoYXQubWVzc2FnZXNXaXRoLm5hbWUsXHJcbiAgICAgICAgICBwcm9maWxlUGljVXJsOiBjaGF0Lm1lc3NhZ2VzV2l0aC5wcm9maWxlUGljVXJsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9wZW5DaGF0SWQuY3VycmVudCA9IGNoYXQubWVzc2FnZXNXaXRoLl9pZDtcclxuICAgICAgICBkaXZSZWYuY3VycmVudCAmJiBzY3JvbGxEaXZUb0JvdHRvbShkaXZSZWYpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibm9DaGF0Rm91bmRcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCB9ID0gYXdhaXQgZ2V0VXNlckluZm8ocm91dGVyLnF1ZXJ5Lm1lc3NhZ2UpO1xyXG5cclxuICAgICAgICBzZXRCYW5uZXJEYXRhKHsgbmFtZSwgcHJvZmlsZVBpY1VybCB9KTtcclxuICAgICAgICBzZXRNZXNzYWdlcyhbXSk7XHJcblxyXG4gICAgICAgIG9wZW5DaGF0SWQuY3VycmVudCA9IHJvdXRlci5xdWVyeS5tZXNzYWdlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHNvY2tldC5jdXJyZW50ICYmIHJvdXRlci5xdWVyeS5tZXNzYWdlKSBsb2FkTWVzc2FnZXMoKTtcclxuICB9LCBbcm91dGVyLnF1ZXJ5Lm1lc3NhZ2VdKTtcclxuXHJcbiAgY29uc3Qgc2VuZE1zZyA9IG1zZyA9PiB7XHJcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcInNlbmROZXdNc2dcIiwge1xyXG4gICAgICAgIHVzZXJJZDogdXNlci5faWQsXHJcbiAgICAgICAgbXNnU2VuZFRvVXNlcklkOiBvcGVuQ2hhdElkLmN1cnJlbnQsXHJcbiAgICAgICAgbXNnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIENvbmZpcm1pbmcgbXNnIGlzIHNlbnQgYW5kIHJlY2V2aW5nIHRoZSBtZXNzYWdlcyB1c2VFZmZlY3RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnU2VudFwiLCAoeyBuZXdNc2cgfSkgPT4ge1xyXG4gICAgICAgIGlmIChuZXdNc2cucmVjZWl2ZXIgPT09IG9wZW5DaGF0SWQuY3VycmVudCkge1xyXG4gICAgICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiBbLi4ucHJldiwgbmV3TXNnXSk7XHJcblxyXG4gICAgICAgICAgc2V0Q2hhdHMocHJldiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQ2hhdCA9IHByZXYuZmluZChjaGF0ID0+IGNoYXQubWVzc2FnZXNXaXRoID09PSBuZXdNc2cucmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICBwcmV2aW91c0NoYXQubGFzdE1lc3NhZ2UgPSBuZXdNc2cubXNnO1xyXG4gICAgICAgICAgICBwcmV2aW91c0NoYXQuZGF0ZSA9IG5ld01zZy5kYXRlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcIm5ld01zZ1JlY2VpdmVkXCIsIGFzeW5jICh7IG5ld01zZyB9KSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbmRlck5hbWU7XHJcblxyXG4gICAgICAgIC8vIFdIRU4gQ0hBVCBXSVRIIFNFTkRFUiBJUyBDVVJSRU5UTFkgT1BFTkVEIElOU0lERSBZT1VSIEJST1dTRVJcclxuICAgICAgICBpZiAobmV3TXNnLnNlbmRlciA9PT0gb3BlbkNoYXRJZC5jdXJyZW50KSB7XHJcbiAgICAgICAgICBzZXRNZXNzYWdlcyhwcmV2ID0+IFsuLi5wcmV2LCBuZXdNc2ddKTtcclxuXHJcbiAgICAgICAgICBzZXRDaGF0cyhwcmV2ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDaGF0ID0gcHJldi5maW5kKGNoYXQgPT4gY2hhdC5tZXNzYWdlc1dpdGggPT09IG5ld01zZy5zZW5kZXIpO1xyXG4gICAgICAgICAgICBwcmV2aW91c0NoYXQubGFzdE1lc3NhZ2UgPSBuZXdNc2cubXNnO1xyXG4gICAgICAgICAgICBwcmV2aW91c0NoYXQuZGF0ZSA9IG5ld01zZy5kYXRlO1xyXG5cclxuICAgICAgICAgICAgc2VuZGVyTmFtZSA9IHByZXZpb3VzQ2hhdC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgaWZQcmV2aW91c2x5TWVzc2FnZWQgPVxyXG4gICAgICAgICAgICBjaGF0cy5maWx0ZXIoY2hhdCA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCA9PT0gbmV3TXNnLnNlbmRlcikubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICBpZiAoaWZQcmV2aW91c2x5TWVzc2FnZWQpIHtcclxuICAgICAgICAgICAgc2V0Q2hhdHMocHJldiA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDaGF0ID0gcHJldi5maW5kKGNoYXQgPT4gY2hhdC5tZXNzYWdlc1dpdGggPT09IG5ld01zZy5zZW5kZXIpO1xyXG4gICAgICAgICAgICAgIHByZXZpb3VzQ2hhdC5sYXN0TWVzc2FnZSA9IG5ld01zZy5tc2c7XHJcbiAgICAgICAgICAgICAgcHJldmlvdXNDaGF0LmRhdGUgPSBuZXdNc2cuZGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgc2VuZGVyTmFtZSA9IHByZXZpb3VzQ2hhdC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNDaGF0LFxyXG4gICAgICAgICAgICAgICAgLi4ucHJldi5maWx0ZXIoY2hhdCA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCAhPT0gbmV3TXNnLnNlbmRlcilcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL0lGIE5PIFBSRVZJT1VTIENIQVQgV0lUSCBUSEUgU0VOREVSXHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCBwcm9maWxlUGljVXJsIH0gPSBhd2FpdCBnZXRVc2VySW5mbyhuZXdNc2cuc2VuZGVyKTtcclxuICAgICAgICAgICAgc2VuZGVyTmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdDaGF0ID0ge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2VzV2l0aDogbmV3TXNnLnNlbmRlcixcclxuICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgIHByb2ZpbGVQaWNVcmwsXHJcbiAgICAgICAgICAgICAgbGFzdE1lc3NhZ2U6IG5ld01zZy5tc2csXHJcbiAgICAgICAgICAgICAgZGF0ZTogbmV3TXNnLmRhdGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2V0Q2hhdHMocHJldiA9PiBbbmV3Q2hhdCwgLi4ucHJldl0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3TXNnU291bmQoc2VuZGVyTmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgc2Nyb2xsRGl2VG9Cb3R0b20oZGl2UmVmKTtcclxuICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlTXNnID0gbWVzc2FnZUlkID0+IHtcclxuICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiZGVsZXRlTXNnXCIsIHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgIG1lc3NhZ2VzV2l0aDogb3BlbkNoYXRJZC5jdXJyZW50LFxyXG4gICAgICAgIG1lc3NhZ2VJZFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnRGVsZXRlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiBwcmV2LmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UuX2lkICE9PSBtZXNzYWdlSWQpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ2hhdCA9IGFzeW5jIG1lc3NhZ2VzV2l0aCA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7YmFzZVVybH0vYXBpL2NoYXRzLyR7bWVzc2FnZXNXaXRofWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0Q2hhdHMocHJldiA9PiBwcmV2LmZpbHRlcihjaGF0ID0+IGNoYXQubWVzc2FnZXNXaXRoICE9PSBtZXNzYWdlc1dpdGgpKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbWVzc2FnZXNcIiwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChcIkVycm9yIGRlbGV0aW5nIGNoYXRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTZWdtZW50IHBhZGRlZCBiYXNpYyBzaXplPVwibGFyZ2VcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgaWNvbj1cImhvbWVcIlxyXG4gICAgICAgICAgY29udGVudD1cIkdvIEJhY2shXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8Q2hhdExpc3RTZWFyY2ggY2hhdHM9e2NoYXRzfSBzZXRDaGF0cz17c2V0Q2hhdHN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtjaGF0cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEdyaWQgc3RhY2thYmxlPlxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudC5Hcm91cCBzaXplPVwiYmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHJhaXNlZCBzdHlsZT17eyBvdmVyZmxvdzogXCJhdXRvXCIsIG1heEhlaWdodDogXCIzMnJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGF0cy5tYXAoKGNoYXQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhdD17Y2hhdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkVXNlcnM9e2Nvbm5lY3RlZFVzZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDaGF0PXtkZWxldGVDaGF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Db21tZW50Lkdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTJ9PlxyXG4gICAgICAgICAgICAgICAge3JvdXRlci5xdWVyeS5tZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjM1cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVzbW9rZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwic3RpY2t5XCIsIHRvcDogXCIwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXIgYmFubmVyRGF0YT17YmFubmVyRGF0YX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZSZWY9e2RpdlJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lclByb2ZpbGVQaWM9e2Jhbm5lckRhdGEucHJvZmlsZVBpY1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTXNnPXtkZWxldGVNc2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlSW5wdXRGaWVsZCBzZW5kTXNnPXtzZW5kTXNnfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxOb01lc3NhZ2VzIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuTWVzc2FnZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9jaGF0c2AsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBjaGF0c0RhdGE6IHJlcy5kYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzOyIsImNvbnN0IGJhc2VVcmwgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCJcbiAgICA/IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcbiAgICA6IFwiaHR0cHM6Ly9pbmRlci1zb2NpYWwtbWVkaWEyLmhlcm9rdWFwcC5jb21cIjtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVXJsO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==