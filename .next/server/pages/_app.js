(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/HeadTags.js":
/*!***************************************!*\
  !*** ./components/Layout/HeadTags.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Layout\\HeadTags.js";


const HeadTags = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      charSet: "UTF-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "icon",
      href: "/favicon.png",
      sizes: "16*16",
      type: "image/png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/listMessages.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/styles.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/nprogress.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "Mini Social Media"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false);

/* harmony default export */ __webpack_exports__["default"] = (HeadTags);

/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeadTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadTags */ "./components/Layout/HeadTags.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SideMenu */ "./components/Layout/SideMenu.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Search */ "./components/Layout/Search.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Layout\\Layout.js";









function Layout({
  children,
  user
}) {
  const contextRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();

  (next_router__WEBPACK_IMPORTED_MODULE_6___default().onRouteChangeStart) = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default().start();

  (next_router__WEBPACK_IMPORTED_MODULE_6___default().onRouteChangeComplete) = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();

  (next_router__WEBPACK_IMPORTED_MODULE_6___default().onRouteChangeError) = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeadTags__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        marginLeft: "1rem",
        marginRight: "1rem"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Ref, {
        innerRef: contextRef,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
            floated: "left",
            width: 2,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Sticky, {
              context: contextRef,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideMenu__WEBPACK_IMPORTED_MODULE_7__.default, {
                user: user
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
            width: 10,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Visibility, {
              context: contextRef,
              children: children
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
            floated: "left",
            width: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Sticky, {
              context: contextRef,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Segment, {
                basic: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {
        text: true,
        style: {
          paddingTop: "1rem"
        },
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, this)]
    }, void 0, true)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Layout\\Navbar.js";





function Navbar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const isActive = route => router.pathname === route;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
    fluid: true,
    borderless: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
      text: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          header: true,
          active: isActive("/login"),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            size: "large",
            name: "sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this), "Login"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/signup",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          header: true,
          active: isActive("/signup"),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            size: "large",
            name: "signup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), "Signup"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/Search.js":
/*!*************************************!*\
  !*** ./components/Layout/Search.js ***!
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");

var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Layout\\Search.js";






let cancel;

function SearchComponent() {
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
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default}/api/search/${value}`, {
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
    onResultSelect: (e, data) => next_router__WEBPACK_IMPORTED_MODULE_5___default().push(`/${data.result.username}`)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
        header: name,
        as: "a"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined)
  }, _id, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchComponent);

/***/ }),

/***/ "./components/Layout/SideMenu.js":
/*!***************************************!*\
  !*** ./components/Layout/SideMenu.js ***!
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/authUser */ "./utils/authUser.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Layout\\SideMenu.js";






function SideMenu({
  user: {
    unreadNotification,
    email,
    unreadMessage,
    username
  }
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  const isActive = route => router.pathname === route;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
      style: {
        paddingTop: "1rem"
      },
      size: "big",
      verticalAlign: "middle",
      selection: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          active: isActive("/"),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "home",
            size: "large",
            color: isActive("/") && "teal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
              content: "Home"
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
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/messages",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          active: isActive("/messages"),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: unreadMessage ? "hand point right" : "mail outline",
            size: "large",
            color: isActive("/messages") && "teal" || unreadMessage && "orange"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
              content: "Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/notifications",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          active: isActive("/notifications"),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: unreadNotification ? "hand point right" : "bell outline",
            size: "large",
            color: isActive("/notifications") && "teal" || unreadNotification && "orange"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
              content: "Notifications"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: `/${username}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          active: router.query.username === username,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "user",
            size: "large",
            color: router.query.username === username && "teal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
              content: "Account"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
        onClick: () => (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.logoutUser)(email),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "log out",
          size: "large"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
            content: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, pageProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  const {
    token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)(ctx);
  let pageProps = {};
  const path = ctx.pathname;
  const protectedRoutes = path === "/" || path === "/[username]" || path === "/notifications" || path === "/post/[postId]" || path === "/messages" || path === "/search"; // 用户未登录重定向

  if (!token) {
    protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_4__.redirectUser)(ctx, "/login");
  } else {
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/auth`, {
        headers: {
          Authorization: token
        }
      });
      const {
        user,
        userFollowStats
      } = res.data;
      if (user) !protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_4__.redirectUser)(ctx, "/");
      pageProps.user = user;
      pageProps.userFollowStats = userFollowStats;
    } catch (error) {
      (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(ctx, "token");
      (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_4__.redirectUser)(ctx, "/login");
    }
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

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

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

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

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_semantic-ui-css_semantic_min_css-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9IZWFkVGFncy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L1NlYXJjaC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9TaWRlTWVudS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2F1dGhVc2VyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9pZ25vcmVkfEM6XFxVc2Vyc1xceXRxaXRcXERlc2t0b3BcXHNvY2lhbC1tZWRpYVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkhlYWRUYWdzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VyIiwiY29udGV4dFJlZiIsImNyZWF0ZVJlZiIsIlJvdXRlciIsIm5wcm9ncmVzcyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdUb3AiLCJOYXZiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0FjdGl2ZSIsInJvdXRlIiwicGF0aG5hbWUiLCJjYW5jZWwiLCJTZWFyY2hDb21wb25lbnQiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJ0b2tlbiIsImNvb2tpZSIsInJlcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJkYXRhIiwibGVuZ3RoIiwiZXJyb3IiLCJhbGVydCIsIlJlc3VsdFJlbmRlcmVyIiwicmVzdWx0IiwidXNlcm5hbWUiLCJfaWQiLCJwcm9maWxlUGljVXJsIiwibmFtZSIsIlNpZGVNZW51IiwidW5yZWFkTm90aWZpY2F0aW9uIiwiZW1haWwiLCJ1bnJlYWRNZXNzYWdlIiwicXVlcnkiLCJsb2dvdXRVc2VyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYXJzZUNvb2tpZXMiLCJwYXRoIiwicHJvdGVjdGVkUm91dGVzIiwicmVkaXJlY3RVc2VyIiwidXNlckZvbGxvd1N0YXRzIiwiZGVzdHJveUNvb2tpZSIsInJlZ2lzdGVyVXNlciIsInNldEVycm9yIiwic2V0VG9rZW4iLCJlcnJvck1zZyIsImNhdGNoRXJyb3JzIiwibG9naW5Vc2VyIiwibG9jYXRpb24iLCJyZXEiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInJlc3BvbnNlIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsbUJBQ2Y7QUFBQSx5QkFDRSw4REFBQyxrREFBRDtBQUFBLDRCQUNFO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBc0IsYUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLGFBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFNLFNBQUcsRUFBQyxNQUFWO0FBQWlCLFVBQUksRUFBQyxjQUF0QjtBQUFxQyxXQUFLLEVBQUMsT0FBM0M7QUFBbUQsVUFBSSxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFL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K0RBQWVBLE9BQWYsRTs7Ozs7Ozs7Ozs7O0FDRkEsTUFBTW9DLFdBQVcsR0FBRzdCLEtBQUssSUFBSTtBQUMzQixNQUFJNEIsUUFBSjs7QUFFQSxNQUFJNUIsS0FBSyxDQUFDb0MsUUFBVixFQUFvQjtBQUNsQjtBQUVBUixZQUFRLEdBQUc1QixLQUFLLENBQUNvQyxRQUFOLENBQWV0QyxJQUExQjtBQUVBdUMsV0FBTyxDQUFDckMsS0FBUixDQUFjNEIsUUFBZDtBQUNELEdBTkQsTUFNTyxJQUFJNUIsS0FBSyxDQUFDc0MsT0FBVixFQUFtQjtBQUN4QjtBQUNBVixZQUFRLEdBQUc1QixLQUFLLENBQUNzQyxPQUFqQjtBQUVBRCxXQUFPLENBQUNyQyxLQUFSLENBQWM0QixRQUFkO0FBQ0QsR0FMTSxNQUtBO0FBQ0w7QUFDQUEsWUFBUSxHQUFHNUIsS0FBSyxDQUFDdUMsT0FBakI7QUFFQUYsV0FBTyxDQUFDckMsS0FBUixDQUFjNEIsUUFBZDtBQUNEOztBQUNELFNBQU9BLFFBQVA7QUFDRCxDQXJCRDs7QUF1QkEsK0RBQWVDLFdBQWYsRTs7Ozs7Ozs7Ozs7QUN2QkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBIZWFkVGFncyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiBzaXplcz1cIjE2KjE2XCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcblxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9saXN0TWVzc2FnZXMuY3NzXCIgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0eWxlcy5jc3NcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9ucHJvZ3Jlc3MuY3NzXCIgLz5cclxuXHJcbiAgICAgIDx0aXRsZT5NaW5pIFNvY2lhbCBNZWRpYTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgPC8+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRUYWdzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGFncyBmcm9tIFwiLi9IZWFkVGFnc1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBWaXNpYmlsaXR5LFxyXG4gIEdyaWQsXHJcbiAgU3RpY2t5LFxyXG4gIFJlZixcclxuICBEaXZpZGVyLFxyXG4gIFNlZ21lbnRcclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IG5wcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTaWRlTWVudSBmcm9tIFwiLi9TaWRlTWVudVwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL1NlYXJjaFwiO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIHVzZXIgfSkge1xyXG4gIGNvbnN0IGNvbnRleHRSZWYgPSBjcmVhdGVSZWYoKTtcclxuXHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IG5wcm9ncmVzcy5zdGFydCgpO1xyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBucHJvZ3Jlc3MuZG9uZSgpO1xyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBucHJvZ3Jlc3MuZG9uZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRUYWdzIC8+XHJcbiAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxcmVtXCIsIG1hcmdpblJpZ2h0OiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgIDxSZWYgaW5uZXJSZWY9e2NvbnRleHRSZWZ9PlxyXG4gICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8U3RpY2t5IGNvbnRleHQ9e2NvbnRleHRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICA8U2lkZU1lbnUgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvU3RpY2t5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PlxyXG4gICAgICAgICAgICAgICAgPFZpc2liaWxpdHkgY29udGV4dD17Y29udGV4dFJlZn0+e2NoaWxkcmVufTwvVmlzaWJpbGl0eT5cclxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17NH0+XHJcbiAgICAgICAgICAgICAgICA8U3RpY2t5IGNvbnRleHQ9e2NvbnRleHRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICA8U2VnbWVudCBiYXNpYz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgIDwvU3RpY2t5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvUmVmPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIHRleHQgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUsIENvbnRhaW5lciwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBpc0FjdGl2ZSA9IHJvdXRlID0+IHJvdXRlci5wYXRobmFtZSA9PT0gcm91dGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudSBmbHVpZCBib3JkZXJsZXNzPlxyXG4gICAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBoZWFkZXIgYWN0aXZlPXtpc0FjdGl2ZShcIi9sb2dpblwiKX0+XHJcbiAgICAgICAgICAgIDxJY29uIHNpemU9XCJsYXJnZVwiIG5hbWU9XCJzaWduIGluXCIgLz5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyIGFjdGl2ZT17aXNBY3RpdmUoXCIvc2lnbnVwXCIpfT5cclxuICAgICAgICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ251cFwiIC8+XHJcbiAgICAgICAgICAgIFNpZ251cFxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0LCBJbWFnZSwgU2VhcmNoIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmxldCBjYW5jZWw7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hDb21wb25lbnQoKSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgZSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldFRleHQodmFsdWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjYW5jZWwgJiYgY2FuY2VsKCk7XHJcbiAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcbiAgICAgIGNvbnN0IHRva2VuID0gY29va2llLmdldChcInRva2VuXCIpO1xyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9zZWFyY2gvJHt2YWx1ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oY2FuY2VsZXIgPT4ge1xyXG4gICAgICAgICAgY2FuY2VsID0gY2FuY2VsZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICBzZXRSZXN1bHRzKHJlcy5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KFwiRXJyb3IgU2VhcmNoaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VhcmNoXHJcbiAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgIHJlc3VsdHMubGVuZ3RoID4gMCAmJiBzZXRSZXN1bHRzKFtdKTtcclxuICAgICAgICBsb2FkaW5nICYmIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFRleHQoXCJcIik7XHJcbiAgICAgIH19XHJcbiAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICByZXN1bHRSZW5kZXJlcj17UmVzdWx0UmVuZGVyZXJ9XHJcbiAgICAgIHJlc3VsdHM9e3Jlc3VsdHN9XHJcbiAgICAgIG9uU2VhcmNoQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIG1pbkNoYXJhY3RlcnM9ezF9XHJcbiAgICAgIG9uUmVzdWx0U2VsZWN0PXsoZSwgZGF0YSkgPT4gUm91dGVyLnB1c2goYC8ke2RhdGEucmVzdWx0LnVzZXJuYW1lfWApfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBSZXN1bHRSZW5kZXJlciA9ICh7IF9pZCwgcHJvZmlsZVBpY1VybCwgbmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IGtleT17X2lkfT5cclxuICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljVXJsfSBhbHQ9XCJQcm9maWxlUGljXCIgYXZhdGFyIC8+XHJcbiAgICAgICAgPExpc3QuQ29udGVudCBoZWFkZXI9e25hbWV9IGFzPVwiYVwiIC8+XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hDb21wb25lbnQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGlzdCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBsb2dvdXRVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcblxyXG5mdW5jdGlvbiBTaWRlTWVudSh7IHVzZXI6IHsgdW5yZWFkTm90aWZpY2F0aW9uLCBlbWFpbCwgdW5yZWFkTWVzc2FnZSwgdXNlcm5hbWUgfSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGlzQWN0aXZlID0gcm91dGUgPT4gcm91dGVyLnBhdGhuYW1lID09PSByb3V0ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxcmVtXCIgfX1cclxuICAgICAgICBzaXplPVwiYmlnXCJcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICBzZWxlY3Rpb24+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9cIil9PlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiaG9tZVwiIHNpemU9XCJsYXJnZVwiIGNvbG9yPXtpc0FjdGl2ZShcIi9cIikgJiYgXCJ0ZWFsXCJ9IC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJIb21lXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbWVzc2FnZXNcIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9tZXNzYWdlc1wiKX0+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgbmFtZT17dW5yZWFkTWVzc2FnZSA/IFwiaGFuZCBwb2ludCByaWdodFwiIDogXCJtYWlsIG91dGxpbmVcIn1cclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgICAgICAgIChpc0FjdGl2ZShcIi9tZXNzYWdlc1wiKSAmJiBcInRlYWxcIikgfHwgKHVucmVhZE1lc3NhZ2UgJiYgXCJvcmFuZ2VcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJNZXNzYWdlc1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9ub3RpZmljYXRpb25zXCIpfT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPXt1bnJlYWROb3RpZmljYXRpb24gPyBcImhhbmQgcG9pbnQgcmlnaHRcIiA6IFwiYmVsbCBvdXRsaW5lXCJ9XHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAoaXNBY3RpdmUoXCIvbm90aWZpY2F0aW9uc1wiKSAmJiBcInRlYWxcIikgfHxcclxuICAgICAgICAgICAgICAgICh1bnJlYWROb3RpZmljYXRpb24gJiYgXCJvcmFuZ2VcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJOb3RpZmljYXRpb25zXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHt1c2VybmFtZX1gfT5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtyb3V0ZXIucXVlcnkudXNlcm5hbWUgPT09IHVzZXJuYW1lfT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBjb2xvcj17cm91dGVyLnF1ZXJ5LnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiBcInRlYWxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkFjY291bnRcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPExpc3QuSXRlbSBvbkNsaWNrPXsoKSA9PiBsb2dvdXRVc2VyKGVtYWlsKX0+XHJcbiAgICAgICAgICA8SWNvbiBuYW1lPVwibG9nIG91dFwiIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkxvZ291dFwiIC8+XHJcbiAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3RVc2VyIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgey4uLnBhZ2VQcm9wc30+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XHJcbiAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gIGNvbnN0IHBhdGggPSBjdHgucGF0aG5hbWU7XHJcblxyXG4gIGNvbnN0IHByb3RlY3RlZFJvdXRlcyA9XHJcbiAgICBwYXRoID09PSBcIi9cIiB8fFxyXG4gICAgcGF0aCA9PT0gXCIvW3VzZXJuYW1lXVwiIHx8XHJcbiAgICBwYXRoID09PSBcIi9ub3RpZmljYXRpb25zXCIgfHxcclxuICAgIHBhdGggPT09IFwiL3Bvc3QvW3Bvc3RJZF1cIiB8fFxyXG4gICAgcGF0aCA9PT0gXCIvbWVzc2FnZXNcIiB8fFxyXG4gICAgcGF0aCA9PT0gXCIvc2VhcmNoXCI7XHJcblxyXG4gIC8vIOeUqOaIt+acqueZu+W9lemHjeWumuWQkVxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIHByb3RlY3RlZFJvdXRlcyAmJiByZWRpcmVjdFVzZXIoY3R4LCBcIi9sb2dpblwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvYXV0aGAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyB1c2VyLCB1c2VyRm9sbG93U3RhdHMgfSA9IHJlcy5kYXRhO1xyXG5cclxuICAgICAgaWYgKHVzZXIpICFwcm90ZWN0ZWRSb3V0ZXMgJiYgcmVkaXJlY3RVc2VyKGN0eCwgXCIvXCIpO1xyXG5cclxuICAgICAgcGFnZVByb3BzLnVzZXIgPSB1c2VyO1xyXG4gICAgICBwYWdlUHJvcHMudXNlckZvbGxvd1N0YXRzID0gdXNlckZvbGxvd1N0YXRzO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGVzdHJveUNvb2tpZShjdHgsIFwidG9rZW5cIik7XHJcbiAgICAgIHJlZGlyZWN0VXNlcihjdHgsIFwiL2xvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAodXNlciwgcHJvZmlsZVBpY1VybCwgc2V0RXJyb3IsIHNldExvYWRpbmcpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwYCwgeyB1c2VyLCBwcm9maWxlUGljVXJsIH0pO1xyXG5cclxuICAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XHJcbiAgICBzZXRFcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHNldExvYWRpbmcoZmFsc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jICh1c2VyLCBzZXRFcnJvciwgc2V0TG9hZGluZykgPT4ge1xyXG4gIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL2F1dGhgLCB7IHVzZXIgfSk7XHJcblxyXG4gICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcclxuICAgIHNldEVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RVc2VyID0gKGN0eCwgbG9jYXRpb24pID0+IHtcclxuICBpZiAoY3R4LnJlcSkge1xyXG4gICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBsb2NhdGlvbiB9KTtcclxuICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIFJvdXRlci5wdXNoKGxvY2F0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzZXRUb2tlbiA9IHRva2VuID0+IHtcclxuICBjb29raWUuc2V0KFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gIFJvdXRlci5wdXNoKFwiL1wiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gZW1haWwgPT4ge1xyXG4gIGNvb2tpZS5zZXQoXCJ1c2VyRW1haWxcIiwgZW1haWwpO1xyXG4gIGNvb2tpZS5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICBSb3V0ZXIucmVsb2FkKCk7XHJcbn07XHJcbiIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IGVycm9yID0+IHtcclxuICBsZXQgZXJyb3JNc2c7XHJcblxyXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxyXG5cclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgc29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgbWFraW5nIHRoZSByZXF1ZXN0XHJcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==