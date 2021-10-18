(function() {
var exports = {};
exports.id = "pages/[username]";
exports.ids = ["pages/[username]"];
exports.modules = {

/***/ "./components/Layout/Spinner.js":
/*!**************************************!*\
  !*** ./components/Layout/Spinner.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Layout\\Spinner.js";


const Spinner = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "mySpinner"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 23
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./components/Profile/Followers.js":
/*!*****************************************!*\
  !*** ./components/Profile/Followers.js ***!
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
/* harmony import */ var _Layout_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/Spinner */ "./components/Layout/Spinner.js");
/* harmony import */ var _Layout_NoData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Profile\\Followers.js";









const Followers = ({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  profileUserId
}) => {
  const {
    0: followers,
    1: setFollowers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: followLoading,
    1: setFollowLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getFollowers = async () => {
      setLoading(true);

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7___default())}/api/profile/followers/${profileUserId}`, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_8___default().get("token")
          }
        });
        setFollowers(res.data);
      } catch (error) {
        alert("Error Loading Followers");
      }

      setLoading(false);
    };

    getFollowers();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Spinner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined) : followers.length > 0 ? followers.map(profileFollower => {
      const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profileFollower.user._id).length > 0;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
        divided: true,
        verticalAlign: "middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            floated: "right",
            children: profileFollower.user._id !== user._id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
              color: isFollowing ? "instagram" : "twitter",
              icon: isFollowing ? "check" : "add user",
              content: isFollowing ? "Following" : "Follow",
              disabled: followLoading,
              onClick: async () => {
                setFollowLoading(true);
                isFollowing ? await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_5__.unfollowUser)(profileFollower.user._id, setUserFollowStats) : await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_5__.followUser)(profileFollower.user._id, setUserFollowStats);
                setFollowLoading(false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            avatar: true,
            src: profileFollower.user.profilePicUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            as: "a",
            href: `/${profileFollower.user.username}`,
            children: profileFollower.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }, undefined)
      }, profileFollower.user._id, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, undefined);
    }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_NoData__WEBPACK_IMPORTED_MODULE_4__.NoFollowData, {
      followersComponent: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Followers);

/***/ }),

/***/ "./components/Profile/Following.js":
/*!*****************************************!*\
  !*** ./components/Profile/Following.js ***!
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
/* harmony import */ var _Layout_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/Spinner */ "./components/Layout/Spinner.js");
/* harmony import */ var _Layout_NoData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Profile\\Following.js";









const Following = ({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  profileUserId
}) => {
  const {
    0: following,
    1: setFollowing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: followLoading,
    1: setFollowLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getFollowing = async () => {
      setLoading(true);

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7___default())}/api/profile/following/${profileUserId}`, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_8___default().get("token")
          }
        });
        setFollowing(res.data);
      } catch (error) {
        alert("Error Loading Followers");
      }

      setLoading(false);
    };

    getFollowing();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Spinner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined) : following.length > 0 ? following.map(profileFollowing => {
      const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profileFollowing.user._id).length > 0;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
        divided: true,
        verticalAlign: "middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            floated: "right",
            children: profileFollowing.user._id !== user._id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
              color: isFollowing ? "instagram" : "twitter",
              icon: isFollowing ? "check" : "add user",
              content: isFollowing ? "Following" : "Follow",
              disabled: followLoading,
              onClick: async () => {
                setFollowLoading(true);
                isFollowing ? await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_5__.unfollowUser)(profileFollowing.user._id, setUserFollowStats) : await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_5__.followUser)(profileFollowing.user._id, setUserFollowStats);
                setFollowLoading(false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            avatar: true,
            src: profileFollowing.user.profilePicUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            as: "a",
            href: `/${profileFollowing.user.username}`,
            children: profileFollowing.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }, undefined)
      }, profileFollowing.user._id, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, undefined);
    }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_NoData__WEBPACK_IMPORTED_MODULE_4__.NoFollowData, {
      followingComponent: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Following);

/***/ }),

/***/ "./components/Profile/ProfileHeader.js":
/*!*********************************************!*\
  !*** ./components/Profile/ProfileHeader.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Profile\\ProfileHeader.js";




function ProfileHeader({
  profile,
  ownAccount,
  loggedUserFollowStats,
  setUserFollowStats
}) {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profile.user._id).length > 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        stackable: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
          width: 11,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
              as: "h2",
              content: profile.user.name,
              style: {
                marginBottom: "5px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
            stretched: true,
            children: [profile.bio, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
              hidden: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
            children: profile.social ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
                  name: "mail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
                  content: profile.user.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 19
              }, this), profile.social.facebook && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
                  name: "facebook",
                  color: "blue"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
                  style: {
                    color: "blue"
                  },
                  content: profile.social.facebook
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 21
              }, this), profile.social.instagram && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
                  name: "instagram",
                  color: "red"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
                  style: {
                    color: "blue"
                  },
                  content: profile.social.instagram
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 21
              }, this), profile.social.youtube && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
                  name: "youtube",
                  color: "red"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
                  style: {
                    color: "blue"
                  },
                  content: profile.social.youtube
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 21
              }, this), profile.social.twitter && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
                  name: "twitter",
                  color: "blue"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
                  style: {
                    color: "blue"
                  },
                  content: profile.social.twitter
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: "No Social Media Links "
            }, void 0, false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
          width: 5,
          stretched: true,
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
              size: "large",
              avatar: true,
              src: profile.user.profilePicUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this), !ownAccount && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            compact: true,
            loading: loading,
            disabled: loading,
            content: isFollowing ? "Following" : "Follow",
            icon: isFollowing ? "check circle" : "add user",
            color: isFollowing ? "instagram" : "twitter",
            onClick: async () => {
              setLoading(true);
              isFollowing ? await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_3__.unfollowUser)(profile.user._id, setUserFollowStats) : await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_3__.followUser)(profile.user._id, setUserFollowStats);
              setLoading(false);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileHeader);

/***/ }),

/***/ "./components/Profile/ProfileMenuTabs.js":
/*!***********************************************!*\
  !*** ./components/Profile/ProfileMenuTabs.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Profile\\ProfileMenuTabs.js";



function ProfileMenuTabs({
  activeItem,
  handleItemClick,
  followersLength,
  followingLength,
  ownAccount,
  loggedUserFollowStats
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
      pointing: true,
      secondary: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
        name: "profile",
        active: activeItem === "profile",
        onClick: () => handleItemClick("profile")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
        name: `${followersLength} followers`,
        active: activeItem === "followers",
        onClick: () => handleItemClick("followers")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), ownAccount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          name: `${loggedUserFollowStats.following.length > 0 ? loggedUserFollowStats.following.length : 0} following`,
          active: activeItem === "following",
          onClick: () => handleItemClick("following")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          name: "Update Profile",
          active: activeItem === "updateProfile",
          onClick: () => handleItemClick("updateProfile")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          name: "settings",
          active: activeItem === "settings",
          onClick: () => handleItemClick("settings")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
        name: `${followingLength} following`,
        active: activeItem === "following",
        onClick: () => handleItemClick("following")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileMenuTabs);

/***/ }),

/***/ "./components/Profile/Settings.js":
/*!****************************************!*\
  !*** ./components/Profile/Settings.js ***!
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
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Profile\\Settings.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Settings({
  newMessagePopup
}) {
  const {
    0: showUpdatePassword,
    1: setShowUpdatePassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: success,
    1: setSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showMessageSettings,
    1: setShowMessageSettings
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: popupSetting,
    1: setPopupSetting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(newMessagePopup);
  const isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    success && setTimeout(() => setSuccess(false), 3000);
  }, [success]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
  }, [popupSetting]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [success && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        success: true,
        icon: "check circle",
        header: "Updated Successfully"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
      size: "huge",
      animated: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
          name: "user secret",
          size: "large",
          verticalAlign: "middle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
            onClick: () => setShowUpdatePassword(!showUpdatePassword),
            as: "a",
            content: "Update Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), showUpdatePassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UpdatePassword, {
          setSuccess: setSuccess,
          setShowUpdatePassword: setShowUpdatePassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
          name: "paper plane outline",
          size: "large",
          verticalAlign: "middle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
            onClick: () => setShowMessageSettings(!showMessageSettings),
            as: "a",
            content: "Show New Message Popup?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), showMessageSettings && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            marginTop: "10px"
          },
          children: ["Control whether a Popup should appear when there is a New Message or not.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
            checked: popupSetting,
            toggle: true,
            onChange: () => (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_3__.toggleMessagePopup)(popupSetting, setPopupSetting, setSuccess)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

const UpdatePassword = ({
  setSuccess,
  setShowUpdatePassword
}) => {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: userPasswords,
    1: setUserPasswords
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    currentPassword: "",
    newPassword: ""
  });
  const {
    0: showTypedPassword,
    1: setShowTypedPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    field1: false,
    field2: false
  });
  const {
    field1,
    field2
  } = showTypedPassword;
  const {
    currentPassword,
    newPassword
  } = userPasswords;

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setUserPasswords(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    errorMsg && setTimeout(() => setErrorMsg(null), 5000);
  }, [errorMsg]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      error: errorMsg !== null,
      loading: loading,
      onSubmit: async e => {
        e.preventDefault();
        setLoading(true);
        await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_3__.passwordUpdate)(setSuccess, userPasswords);
        setLoading(false);
        setShowUpdatePassword(false);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.List, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
            fluid: true,
            icon: {
              name: "eye",
              circular: true,
              link: true,
              onClick: () => setShowTypedPassword(prev => _objectSpread(_objectSpread({}, prev), {}, {
                field1: !field1
              }))
            },
            type: field1 ? "text" : "password",
            iconPosition: "left",
            label: "Current Password",
            placeholder: "Enter current Password",
            name: "currentPassword",
            onChange: handleChange,
            value: currentPassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
            fluid: true,
            icon: {
              name: "eye",
              circular: true,
              link: true,
              onClick: () => setShowTypedPassword(prev => _objectSpread(_objectSpread({}, prev), {}, {
                field2: !field2
              }))
            },
            type: field2 ? "text" : "password",
            iconPosition: "left",
            label: "New Password",
            placeholder: "Enter New Password",
            name: "newPassword",
            onChange: handleChange,
            value: newPassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            disabled: loading || currentPassword === "" || newPassword === "",
            compact: true,
            icon: "configure",
            type: "submit",
            color: "teal",
            content: "Confirm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            disabled: loading,
            compact: true,
            icon: "cancel",
            type: "button",
            content: "Cancel",
            onClick: () => setShowUpdatePassword(false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
            icon: "meh",
            error: true,
            header: "Oops!",
            content: errorMsg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
      hidden: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./components/Profile/UpdateProfile.js":
/*!*********************************************!*\
  !*** ./components/Profile/UpdateProfile.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _Common_CommonInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Profile\\UpdateProfile.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function UpdateProfile({
  Profile
}) {
  const {
    0: profile,
    1: setProfile
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    profilePicUrl: Profile.user.profilePicUrl,
    bio: Profile.bio || "",
    facebook: Profile.social && Profile.social.facebook || "",
    youtube: Profile.social && Profile.social.youtube || "",
    instagram: Profile.social && Profile.social.instagram || "",
    twitter: Profile.social && Profile.social.twitter || ""
  });
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

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

    setProfile(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      error: errorMsg !== null,
      loading: loading,
      onSubmit: async e => {
        e.preventDefault();
        setLoading(true);
        let profilePicUrl;

        if (media !== null) {
          profilePicUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_5__.default)(media);
        }

        if (media !== null && !profilePicUrl) {
          setLoading(false);
          return setErrorMsg("Error Uploading Image");
        }

        await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_6__.profileUpdate)(profile, setLoading, setErrorMsg, profilePicUrl);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        onDismiss: () => setErrorMsg(false),
        error: true,
        content: errorMsg,
        attached: true,
        header: "Oops!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__.default, {
        inputRef: inputRef,
        highlighted: highlighted,
        setHighlighted: setHighlighted,
        handleChange: handleChange,
        mediaPreview: mediaPreview,
        setMediaPreview: setMediaPreview,
        setMedia: setMedia,
        profilePicUrl: profile.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_4__.default, {
        user: profile,
        handleChange: handleChange,
        showSocialLinks: showSocialLinks,
        setShowSocialLinks: setShowSocialLinks
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        color: "blue",
        icon: "pencil alternate",
        disabled: profile.bio === "" || loading,
        content: "Submit",
        type: "submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (UpdateProfile);

/***/ }),

/***/ "./pages/[username].js":
/*!*****************************!*\
  !*** ./pages/[username].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var _components_Profile_ProfileMenuTabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Profile/ProfileMenuTabs */ "./components/Profile/ProfileMenuTabs.js");
/* harmony import */ var _components_Profile_ProfileHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Profile/ProfileHeader */ "./components/Profile/ProfileHeader.js");
/* harmony import */ var _components_Profile_Followers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Profile/Followers */ "./components/Profile/Followers.js");
/* harmony import */ var _components_Profile_Following__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Profile/Following */ "./components/Profile/Following.js");
/* harmony import */ var _components_Profile_UpdateProfile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Profile/UpdateProfile */ "./components/Profile/UpdateProfile.js");
/* harmony import */ var _components_Profile_Settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Profile/Settings */ "./components/Profile/Settings.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");


var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\pages\\[username].js";


















function ProfilePage({
  errorLoading,
  profile,
  followersLength,
  followingLength,
  user,
  userFollowStats
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("profile");

  const handleItemClick = clickedTab => setActiveItem(clickedTab);

  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userFollowStats);
  const ownAccount = profile.user._id === user._id; // 检查账户是否为自己

  if (errorLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__.NoProfile, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 28
  }, this);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getPosts = async () => {
      setLoading(true);

      try {
        const {
          username
        } = router.query;
        const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default())}/api/profile/posts/${username}`, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_9___default().get("token")
          }
        });
        setPosts(res.data);
      } catch (error) {
        alert("Error Loading Posts");
      }

      setLoading(false);
    };

    getPosts();
  }, [router.query.username]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 4000);
  }, [showToastr]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showToastr && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_17__.PostDeleteToastr, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 22
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      stackable: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Row, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_ProfileMenuTabs__WEBPACK_IMPORTED_MODULE_11__.default, {
            activeItem: activeItem,
            handleItemClick: handleItemClick,
            followersLength: followersLength,
            followingLength: followingLength,
            ownAccount: ownAccount,
            loggedUserFollowStats: loggedUserFollowStats
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Row, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {
          children: [activeItem === "profile" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_ProfileHeader__WEBPACK_IMPORTED_MODULE_12__.default, {
              profile: profile,
              ownAccount: ownAccount,
              loggedUserFollowStats: loggedUserFollowStats,
              setUserFollowStats: setUserFollowStats
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_10__.PlaceHolderPosts, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 19
            }, this) : posts.length > 0 ? posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_8__.default, {
              post: post,
              user: user,
              setPosts: setPosts,
              setShowToastr: setShowToastr
            }, post._id, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 21
            }, this)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__.NoProfilePosts, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 19
            }, this)]
          }, void 0, true), activeItem === "followers" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_Followers__WEBPACK_IMPORTED_MODULE_13__.default, {
            user: user,
            loggedUserFollowStats: loggedUserFollowStats,
            setUserFollowStats: setUserFollowStats,
            profileUserId: profile.user._id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, this), activeItem === "following" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_Following__WEBPACK_IMPORTED_MODULE_14__.default, {
            user: user,
            loggedUserFollowStats: loggedUserFollowStats,
            setUserFollowStats: setUserFollowStats,
            profileUserId: profile.user._id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this), activeItem === "updateProfile" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_UpdateProfile__WEBPACK_IMPORTED_MODULE_15__.default, {
            Profile: profile
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, this), activeItem === "settings" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_Settings__WEBPACK_IMPORTED_MODULE_16__.default, {
            newMessagePopup: user.newMessagePopup
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

ProfilePage.getInitialProps = async ctx => {
  try {
    const {
      username
    } = ctx.query;
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default())}/api/profile/${username}`, {
      headers: {
        Authorization: token
      }
    });
    const {
      profile,
      followersLength,
      followingLength
    } = res.data;
    return {
      profile,
      followersLength,
      followingLength
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);

/***/ }),

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js","components_Layout_NoData_js-components_Layout_Toastr_js-components_Post_CardPost_js-utils_upl-d2318b","components_Common_CommonInputs_js-components_Common_ImageDropDiv_js"], function() { return __webpack_exec__("./pages/[username].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9TcGlubmVyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUHJvZmlsZS9Gb2xsb3dlcnMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qcm9maWxlL0ZvbGxvd2luZy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZUhlYWRlci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZU1lbnVUYWJzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUHJvZmlsZS9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Byb2ZpbGUvVXBkYXRlUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9bdXNlcm5hbWVdLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIlNwaW5uZXIiLCJGb2xsb3dlcnMiLCJ1c2VyIiwibG9nZ2VkVXNlckZvbGxvd1N0YXRzIiwic2V0VXNlckZvbGxvd1N0YXRzIiwicHJvZmlsZVVzZXJJZCIsImZvbGxvd2VycyIsInNldEZvbGxvd2VycyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmb2xsb3dMb2FkaW5nIiwic2V0Rm9sbG93TG9hZGluZyIsInVzZUVmZmVjdCIsImdldEZvbGxvd2VycyIsInJlcyIsImF4aW9zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29va2llIiwiZGF0YSIsImVycm9yIiwiYWxlcnQiLCJsZW5ndGgiLCJtYXAiLCJwcm9maWxlRm9sbG93ZXIiLCJpc0ZvbGxvd2luZyIsImZvbGxvd2luZyIsImZpbHRlciIsIl9pZCIsInVuZm9sbG93VXNlciIsImZvbGxvd1VzZXIiLCJwcm9maWxlUGljVXJsIiwidXNlcm5hbWUiLCJuYW1lIiwiRm9sbG93aW5nIiwic2V0Rm9sbG93aW5nIiwiZ2V0Rm9sbG93aW5nIiwicHJvZmlsZUZvbGxvd2luZyIsIlByb2ZpbGVIZWFkZXIiLCJwcm9maWxlIiwib3duQWNjb3VudCIsIm1hcmdpbkJvdHRvbSIsImJpbyIsInNvY2lhbCIsImVtYWlsIiwiZmFjZWJvb2siLCJjb2xvciIsImluc3RhZ3JhbSIsInlvdXR1YmUiLCJ0d2l0dGVyIiwidGV4dEFsaWduIiwiUHJvZmlsZU1lbnVUYWJzIiwiYWN0aXZlSXRlbSIsImhhbmRsZUl0ZW1DbGljayIsImZvbGxvd2Vyc0xlbmd0aCIsImZvbGxvd2luZ0xlbmd0aCIsIlNldHRpbmdzIiwibmV3TWVzc2FnZVBvcHVwIiwic2hvd1VwZGF0ZVBhc3N3b3JkIiwic2V0U2hvd1VwZGF0ZVBhc3N3b3JkIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJzaG93TWVzc2FnZVNldHRpbmdzIiwic2V0U2hvd01lc3NhZ2VTZXR0aW5ncyIsInBvcHVwU2V0dGluZyIsInNldFBvcHVwU2V0dGluZyIsImlzRmlyc3RSdW4iLCJ1c2VSZWYiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsIm1hcmdpblRvcCIsInRvZ2dsZU1lc3NhZ2VQb3B1cCIsIlVwZGF0ZVBhc3N3b3JkIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsInVzZXJQYXNzd29yZHMiLCJzZXRVc2VyUGFzc3dvcmRzIiwiY3VycmVudFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJzaG93VHlwZWRQYXNzd29yZCIsInNldFNob3dUeXBlZFBhc3N3b3JkIiwiZmllbGQxIiwiZmllbGQyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsInByZXZlbnREZWZhdWx0IiwicGFzc3dvcmRVcGRhdGUiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwiVXBkYXRlUHJvZmlsZSIsIlByb2ZpbGUiLCJzZXRQcm9maWxlIiwibWVkaWEiLCJzZXRNZWRpYSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidXBsb2FkUGljIiwicHJvZmlsZVVwZGF0ZSIsIlByb2ZpbGVQYWdlIiwiZXJyb3JMb2FkaW5nIiwidXNlckZvbGxvd1N0YXRzIiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdHMiLCJzZXRQb3N0cyIsInNob3dUb2FzdHIiLCJzZXRTaG93VG9hc3RyIiwic2V0QWN0aXZlSXRlbSIsImNsaWNrZWRUYWIiLCJnZXRQb3N0cyIsInF1ZXJ5IiwicG9zdCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInRva2VuIiwicGFyc2VDb29raWVzIiwiQXhpb3MiLCJiYXNlVVJMIiwidXNlclRvRm9sbG93SWQiLCJjYXRjaEVycm9ycyIsInVzZXJUb1VuZm9sbG93SWQiLCJwdXQiLCJzZXRFcnJvciIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxNQUFNQSxPQUFPLEdBQUcsbUJBQU07QUFBSyxXQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXRCOztBQUNBLCtEQUFlQSxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLENBQUM7QUFDakJDLE1BRGlCO0FBRWpCQyx1QkFGaUI7QUFHakJDLG9CQUhpQjtBQUlqQkM7QUFKaUIsQ0FBRCxLQUtaO0FBQ0osUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRC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LEVBQWM7QUFDZEMsU0FBSyxDQUFDOEcscURBQVcsQ0FBQy9HLEtBQUQsQ0FBWixDQUFMO0FBQ0Q7QUFDRixDQVRNLEM7Ozs7Ozs7Ozs7O0FDckVQLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL1t1c2VybmFtZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTcGlubmVyID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJteVNwaW5uZXJcIiAvPjtcbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEltYWdlLCBMaXN0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9MYXlvdXQvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBOb0ZvbGxvd0RhdGEgfSBmcm9tIFwiLi4vTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQgeyBmb2xsb3dVc2VyLCB1bmZvbGxvd1VzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IEZvbGxvd2VycyA9ICh7XHJcbiAgdXNlcixcclxuICBsb2dnZWRVc2VyRm9sbG93U3RhdHMsXHJcbiAgc2V0VXNlckZvbGxvd1N0YXRzLFxyXG4gIHByb2ZpbGVVc2VySWQsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZm9sbG93ZXJzLCBzZXRGb2xsb3dlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZm9sbG93TG9hZGluZywgc2V0Rm9sbG93TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRGb2xsb3dlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGUvZm9sbG93ZXJzLyR7cHJvZmlsZVVzZXJJZH1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNldEZvbGxvd2VycyhyZXMuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJvciBMb2FkaW5nIEZvbGxvd2Vyc1wiKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0Rm9sbG93ZXJzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgKSA6IGZvbGxvd2Vycy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIGZvbGxvd2Vycy5tYXAoKHByb2ZpbGVGb2xsb3dlcikgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IGlzRm9sbG93aW5nID1cclxuICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIChmb2xsb3dpbmcpID0+IGZvbGxvd2luZy51c2VyID09PSBwcm9maWxlRm9sbG93ZXIudXNlci5faWRcclxuICAgICAgICAgICAgKS5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaXN0IGtleT17cHJvZmlsZUZvbGxvd2VyLnVzZXIuX2lkfSBkaXZpZGVkIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBmbG9hdGVkPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGVGb2xsb3dlci51c2VyLl9pZCAhPT0gdXNlci5faWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc0ZvbGxvd2luZyA/IFwiaW5zdGFncmFtXCIgOiBcInR3aXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGljb249e2lzRm9sbG93aW5nID8gXCJjaGVja1wiIDogXCJhZGQgdXNlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXNGb2xsb3dpbmcgPyBcIkZvbGxvd2luZ1wiIDogXCJGb2xsb3dcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmb2xsb3dMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2xsb3dMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGF3YWl0IHVuZm9sbG93VXNlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUZvbGxvd2VyLnVzZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRm9sbG93U3RhdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGF3YWl0IGZvbGxvd1VzZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVGb2xsb3dlci51c2VyLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlckZvbGxvd1N0YXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9sbG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBhdmF0YXIgc3JjPXtwcm9maWxlRm9sbG93ZXIudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBhcz1cImFcIiBocmVmPXtgLyR7cHJvZmlsZUZvbGxvd2VyLnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlRm9sbG93ZXIudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKSA6IChcclxuICAgICAgICA8Tm9Gb2xsb3dEYXRhIGZvbGxvd2Vyc0NvbXBvbmVudD17dHJ1ZX0gLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dlcnM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW1hZ2UsIExpc3QgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL0xheW91dC9TcGlubmVyXCI7XHJcbmltcG9ydCB7IE5vRm9sbG93RGF0YSB9IGZyb20gXCIuLi9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCB7IGZvbGxvd1VzZXIsIHVuZm9sbG93VXNlciB9IGZyb20gXCIuLi8uLi91dGlscy9wcm9maWxlQWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgRm9sbG93aW5nID0gKHtcclxuICB1c2VyLFxyXG4gIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cyxcclxuICBzZXRVc2VyRm9sbG93U3RhdHMsXHJcbiAgcHJvZmlsZVVzZXJJZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtmb2xsb3dpbmcsIHNldEZvbGxvd2luZ10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmb2xsb3dMb2FkaW5nLCBzZXRGb2xsb3dMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldEZvbGxvd2luZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICBgJHtiYXNlVXJsfS9hcGkvcHJvZmlsZS9mb2xsb3dpbmcvJHtwcm9maWxlVXNlcklkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0Rm9sbG93aW5nKHJlcy5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChcIkVycm9yIExvYWRpbmcgRm9sbG93ZXJzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRGb2xsb3dpbmcoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICApIDogZm9sbG93aW5nLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgZm9sbG93aW5nLm1hcCgocHJvZmlsZUZvbGxvd2luZykgPT4ge1xyXG5cclxuICAgICAgICAgIGNvbnN0IGlzRm9sbG93aW5nID1cclxuICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIChmb2xsb3dpbmcpID0+IGZvbGxvd2luZy51c2VyID09PSBwcm9maWxlRm9sbG93aW5nLnVzZXIuX2lkXHJcbiAgICAgICAgICAgICkubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgIGtleT17cHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZH1cclxuICAgICAgICAgICAgICBkaXZpZGVkXHJcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBmbG9hdGVkPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGVGb2xsb3dpbmcudXNlci5faWQgIT09IHVzZXIuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aXNGb2xsb3dpbmcgPyBcImluc3RhZ3JhbVwiIDogXCJ0d2l0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpc0ZvbGxvd2luZyA/IFwiY2hlY2tcIiA6IFwiYWRkIHVzZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2lzRm9sbG93aW5nID8gXCJGb2xsb3dpbmdcIiA6IFwiRm9sbG93XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Zm9sbG93TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9sbG93TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhd2FpdCB1bmZvbGxvd1VzZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVGb2xsb3dpbmcudXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogYXdhaXQgZm9sbG93VXNlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlckZvbGxvd1N0YXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9sbG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBhdmF0YXIgc3JjPXtwcm9maWxlRm9sbG93aW5nLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke3Byb2ZpbGVGb2xsb3dpbmcudXNlci51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZUZvbGxvd2luZy51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxOb0ZvbGxvd0RhdGEgZm9sbG93aW5nQ29tcG9uZW50PXt0cnVlfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2luZztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlZ21lbnQsIEltYWdlLCBHcmlkLCBEaXZpZGVyLCBIZWFkZXIsIEJ1dHRvbiwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBmb2xsb3dVc2VyLCB1bmZvbGxvd1VzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGVIZWFkZXIoe1xyXG4gIHByb2ZpbGUsXHJcbiAgb3duQWNjb3VudCxcclxuICBsb2dnZWRVc2VyRm9sbG93U3RhdHMsXHJcbiAgc2V0VXNlckZvbGxvd1N0YXRzXHJcbn0pIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGlzRm9sbG93aW5nID1cclxuICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoID4gMCAmJlxyXG4gICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5maWx0ZXIoXHJcbiAgICAgIGZvbGxvd2luZyA9PiBmb2xsb3dpbmcudXNlciA9PT0gcHJvZmlsZS51c2VyLl9pZFxyXG4gICAgKS5sZW5ndGggPiAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgPEdyaWQgc3RhY2thYmxlPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMX0+XHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICBhcz1cImgyXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkLlJvdyBzdHJldGNoZWQ+XHJcbiAgICAgICAgICAgICAge3Byb2ZpbGUuYmlvfVxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbCA/IChcclxuICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cIm1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgY29udGVudD17cHJvZmlsZS51c2VyLmVtYWlsfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbC5mYWNlYm9vayAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cImZhY2Vib29rXCIgY29sb3I9XCJibHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUuc29jaWFsLmZhY2Vib29rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbC5pbnN0YWdyYW0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJpbnN0YWdyYW1cIiBjb2xvcj1cInJlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLnNvY2lhbC5pbnN0YWdyYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuc29jaWFsLnlvdXR1YmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJ5b3V0dWJlXCIgY29sb3I9XCJyZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvZmlsZS5zb2NpYWwueW91dHViZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZS5zb2NpYWwudHdpdHRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cInR3aXR0ZXJcIiBjb2xvcj1cImJsdWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvZmlsZS5zb2NpYWwudHdpdHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+Tm8gU29jaWFsIE1lZGlhIExpbmtzIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NX0gc3RyZXRjaGVkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzaXplPVwibGFyZ2VcIiBhdmF0YXIgc3JjPXtwcm9maWxlLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICB7IW93bkFjY291bnQgJiYgKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2lzRm9sbG93aW5nID8gXCJGb2xsb3dpbmdcIiA6IFwiRm9sbG93XCJ9XHJcbiAgICAgICAgICAgICAgICBpY29uPXtpc0ZvbGxvd2luZyA/IFwiY2hlY2sgY2lyY2xlXCIgOiBcImFkZCB1c2VyXCJ9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17aXNGb2xsb3dpbmcgPyBcImluc3RhZ3JhbVwiIDogXCJ0d2l0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhd2FpdCB1bmZvbGxvd1VzZXIocHJvZmlsZS51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKVxyXG4gICAgICAgICAgICAgICAgICAgIDogYXdhaXQgZm9sbG93VXNlcihwcm9maWxlLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZU1lbnVUYWJzKHtcclxuICBhY3RpdmVJdGVtLFxyXG4gIGhhbmRsZUl0ZW1DbGljayxcclxuICBmb2xsb3dlcnNMZW5ndGgsXHJcbiAgZm9sbG93aW5nTGVuZ3RoLFxyXG4gIG93bkFjY291bnQsXHJcbiAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1lbnUgcG9pbnRpbmcgc2Vjb25kYXJ5PlxyXG4gICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgIG5hbWU9XCJwcm9maWxlXCJcclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJwcm9maWxlXCJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJwcm9maWxlXCIpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgIG5hbWU9e2Ake2ZvbGxvd2Vyc0xlbmd0aH0gZm9sbG93ZXJzYH1cclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJmb2xsb3dlcnNcIn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcImZvbGxvd2Vyc1wiKX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICB7b3duQWNjb3VudCA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICA/IGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgIDogMFxyXG4gICAgICAgICAgICAgIH0gZm9sbG93aW5nYH1cclxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93aW5nXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwiZm9sbG93aW5nXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJVcGRhdGUgUHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcInVwZGF0ZVByb2ZpbGVcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJ1cGRhdGVQcm9maWxlXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcInNldHRpbmdzXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwic2V0dGluZ3NcIil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICBuYW1lPXtgJHtmb2xsb3dpbmdMZW5ndGh9IGZvbGxvd2luZ2B9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJmb2xsb3dpbmdcIn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwiZm9sbG93aW5nXCIpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlTWVudVRhYnM7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIExpc3QsXHJcbiAgRGl2aWRlcixcclxuICBNZXNzYWdlLFxyXG4gIENoZWNrYm94LFxyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBwYXNzd29yZFVwZGF0ZSwgdG9nZ2xlTWVzc2FnZVBvcHVwIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBTZXR0aW5ncyh7IG5ld01lc3NhZ2VQb3B1cCB9KSB7XHJcbiAgY29uc3QgW3Nob3dVcGRhdGVQYXNzd29yZCwgc2V0U2hvd1VwZGF0ZVBhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtzaG93TWVzc2FnZVNldHRpbmdzLCBzZXRTaG93TWVzc2FnZVNldHRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcG9wdXBTZXR0aW5nLCBzZXRQb3B1cFNldHRpbmddID0gdXNlU3RhdGUobmV3TWVzc2FnZVBvcHVwKTtcclxuXHJcbiAgY29uc3QgaXNGaXJzdFJ1biA9IHVzZVJlZih0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN1Y2Nlc3MgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRTdWNjZXNzKGZhbHNlKSwgMzAwMCk7XHJcbiAgfSwgW3N1Y2Nlc3NdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0ZpcnN0UnVuLmN1cnJlbnQpIHtcclxuICAgICAgaXNGaXJzdFJ1bi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9LCBbcG9wdXBTZXR0aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c3VjY2VzcyAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaWNvbj1cImNoZWNrIGNpcmNsZVwiIGhlYWRlcj1cIlVwZGF0ZWQgU3VjY2Vzc2Z1bGx5XCIgLz5cclxuICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPExpc3Qgc2l6ZT1cImh1Z2VcIiBhbmltYXRlZD5cclxuICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwidXNlciBzZWNyZXRcIiBzaXplPVwibGFyZ2VcIiB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCIgLz5cclxuICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxMaXN0LkhlYWRlclxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dVcGRhdGVQYXNzd29yZCghc2hvd1VwZGF0ZVBhc3N3b3JkKX1cclxuICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJVcGRhdGUgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAge3Nob3dVcGRhdGVQYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICAgIDxVcGRhdGVQYXNzd29yZFxyXG4gICAgICAgICAgICAgIHNldFN1Y2Nlc3M9e3NldFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgc2V0U2hvd1VwZGF0ZVBhc3N3b3JkPXtzZXRTaG93VXBkYXRlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICA8TGlzdC5JY29uXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXBlciBwbGFuZSBvdXRsaW5lXCJcclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxMaXN0LkhlYWRlclxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNZXNzYWdlU2V0dGluZ3MoIXNob3dNZXNzYWdlU2V0dGluZ3MpfVxyXG4gICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIlNob3cgTmV3IE1lc3NhZ2UgUG9wdXA/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG5cclxuICAgICAgICAgIHtzaG93TWVzc2FnZVNldHRpbmdzICYmIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIENvbnRyb2wgd2hldGhlciBhIFBvcHVwIHNob3VsZCBhcHBlYXIgd2hlbiB0aGVyZSBpcyBhIE5ldyBNZXNzYWdlXHJcbiAgICAgICAgICAgICAgb3Igbm90LlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17cG9wdXBTZXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlTWVzc2FnZVBvcHVwKHBvcHVwU2V0dGluZywgc2V0UG9wdXBTZXR0aW5nLCBzZXRTdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgVXBkYXRlUGFzc3dvcmQgPSAoeyBzZXRTdWNjZXNzLCBzZXRTaG93VXBkYXRlUGFzc3dvcmQgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBbdXNlclBhc3N3b3Jkcywgc2V0VXNlclBhc3N3b3Jkc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyZW50UGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBuZXdQYXNzd29yZDogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbc2hvd1R5cGVkUGFzc3dvcmQsIHNldFNob3dUeXBlZFBhc3N3b3JkXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpZWxkMTogZmFsc2UsXHJcbiAgICBmaWVsZDI6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IGZpZWxkMSwgZmllbGQyIH0gPSBzaG93VHlwZWRQYXNzd29yZDtcclxuICBjb25zdCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSA9IHVzZXJQYXNzd29yZHM7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldFVzZXJQYXNzd29yZHMoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBlcnJvck1zZyAmJiBzZXRUaW1lb3V0KCgpID0+IHNldEVycm9yTXNnKG51bGwpLCA1MDAwKTtcclxuICB9LCBbZXJyb3JNc2ddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfVxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgIGF3YWl0IHBhc3N3b3JkVXBkYXRlKHNldFN1Y2Nlc3MsIHVzZXJQYXNzd29yZHMpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgICAgc2V0U2hvd1VwZGF0ZVBhc3N3b3JkKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3QuTGlzdD5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImV5ZVwiLFxyXG4gICAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgc2V0U2hvd1R5cGVkUGFzc3dvcmQoKHByZXYpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDE6ICFmaWVsZDEsXHJcbiAgICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHR5cGU9e2ZpZWxkMSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ3VycmVudCBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBjdXJyZW50IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY3VycmVudFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50UGFzc3dvcmR9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcclxuICAgICAgICAgICAgICAgIGNpcmN1bGFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgIHNldFNob3dUeXBlZFBhc3N3b3JkKChwcmV2KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQyOiAhZmllbGQyLFxyXG4gICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB0eXBlPXtmaWVsZDIgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk5ldyBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBOZXcgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3UGFzc3dvcmR9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgY3VycmVudFBhc3N3b3JkID09PSBcIlwiIHx8IG5ld1Bhc3N3b3JkID09PSBcIlwifVxyXG4gICAgICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgICAgICBpY29uPVwiY29uZmlndXJlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJDb25maXJtXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIkNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1VwZGF0ZVBhc3N3b3JkKGZhbHNlKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxNZXNzYWdlIGljb249XCJtZWhcIiBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e2Vycm9yTXNnfSAvPlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaXN0Lkxpc3Q+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VEcm9wRGl2IGZyb20gXCIuLi9Db21tb24vSW1hZ2VEcm9wRGl2XCI7XHJcbmltcG9ydCBDb21tb25JbnB1dHMgZnJvbSBcIi4uL0NvbW1vbi9Db21tb25JbnB1dHNcIjtcclxuaW1wb3J0IHVwbG9hZFBpYyBmcm9tIFwiLi4vLi4vdXRpbHMvdXBsb2FkUGljVG9DbG91ZGluYXJ5XCI7XHJcbmltcG9ydCB7IHByb2ZpbGVVcGRhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIFVwZGF0ZVByb2ZpbGUoeyBQcm9maWxlIH0pIHtcclxuICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBwcm9maWxlUGljVXJsOiBQcm9maWxlLnVzZXIucHJvZmlsZVBpY1VybCxcclxuICAgIGJpbzogUHJvZmlsZS5iaW8gfHwgXCJcIixcclxuICAgIGZhY2Vib29rOiAoUHJvZmlsZS5zb2NpYWwgJiYgUHJvZmlsZS5zb2NpYWwuZmFjZWJvb2spIHx8IFwiXCIsXHJcbiAgICB5b3V0dWJlOiAoUHJvZmlsZS5zb2NpYWwgJiYgUHJvZmlsZS5zb2NpYWwueW91dHViZSkgfHwgXCJcIixcclxuICAgIGluc3RhZ3JhbTogKFByb2ZpbGUuc29jaWFsICYmIFByb2ZpbGUuc29jaWFsLmluc3RhZ3JhbSkgfHwgXCJcIixcclxuICAgIHR3aXR0ZXI6IChQcm9maWxlLnNvY2lhbCAmJiBQcm9maWxlLnNvY2lhbC50d2l0dGVyKSB8fCBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbbWVkaWEsIHNldE1lZGlhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttZWRpYVByZXZpZXcsIHNldE1lZGlhUHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcywgc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGlnaGxpZ2h0ZWQsIHNldEhpZ2hsaWdodGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmIChuYW1lID09PSBcIm1lZGlhXCIpIHtcclxuICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pO1xyXG4gICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xyXG4gICAgfVxyXG4gICAgc2V0UHJvZmlsZSgocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfVxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgIGxldCBwcm9maWxlUGljVXJsO1xyXG5cclxuICAgICAgICAgIGlmIChtZWRpYSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwcm9maWxlUGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAobWVkaWEgIT09IG51bGwgJiYgIXByb2ZpbGVQaWNVcmwpIHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRFcnJvck1zZyhcIkVycm9yIFVwbG9hZGluZyBJbWFnZVwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhd2FpdCBwcm9maWxlVXBkYXRlKHByb2ZpbGUsIHNldExvYWRpbmcsIHNldEVycm9yTXNnLCBwcm9maWxlUGljVXJsKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3JNc2coZmFsc2UpfVxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICAgIGNvbnRlbnQ9e2Vycm9yTXNnfVxyXG4gICAgICAgICAgYXR0YWNoZWRcclxuICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8SW1hZ2VEcm9wRGl2XHJcbiAgICAgICAgICBpbnB1dFJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICBzZXRIaWdobGlnaHRlZD17c2V0SGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIG1lZGlhUHJldmlldz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgc2V0TWVkaWFQcmV2aWV3PXtzZXRNZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICBzZXRNZWRpYT17c2V0TWVkaWF9XHJcbiAgICAgICAgICBwcm9maWxlUGljVXJsPXtwcm9maWxlLnByb2ZpbGVQaWNVcmx9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPENvbW1vbklucHV0c1xyXG4gICAgICAgICAgdXNlcj17cHJvZmlsZX1cclxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgc2hvd1NvY2lhbExpbmtzPXtzaG93U29jaWFsTGlua3N9XHJcbiAgICAgICAgICBzZXRTaG93U29jaWFsTGlua3M9e3NldFNob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcclxuICAgICAgICAgIGljb249XCJwZW5jaWwgYWx0ZXJuYXRlXCJcclxuICAgICAgICAgIGRpc2FibGVkPXtwcm9maWxlLmJpbyA9PT0gXCJcIiB8fCBsb2FkaW5nfVxyXG4gICAgICAgICAgY29udGVudD1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVQcm9maWxlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IE5vUHJvZmlsZVBvc3RzLCBOb1Byb2ZpbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCBDYXJkUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0XCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBQbGFjZUhvbGRlclBvc3RzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXBcIjtcclxuaW1wb3J0IFByb2ZpbGVNZW51VGFicyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVNZW51VGFic1wiO1xyXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVIZWFkZXJcIjtcclxuaW1wb3J0IEZvbGxvd2VycyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL0ZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgRm9sbG93aW5nIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvRm9sbG93aW5nXCI7XHJcbmltcG9ydCBVcGRhdGVQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvVXBkYXRlUHJvZmlsZVwiO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBQb3N0RGVsZXRlVG9hc3RyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0clwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZVBhZ2Uoe1xyXG4gIGVycm9yTG9hZGluZyxcclxuICBwcm9maWxlLFxyXG4gIGZvbGxvd2Vyc0xlbmd0aCxcclxuICBmb2xsb3dpbmdMZW5ndGgsXHJcbiAgdXNlcixcclxuICB1c2VyRm9sbG93U3RhdHMsXHJcbn0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93VG9hc3RyLCBzZXRTaG93VG9hc3RyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZShcInByb2ZpbGVcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUl0ZW1DbGljayA9IChjbGlja2VkVGFiKSA9PiBzZXRBY3RpdmVJdGVtKGNsaWNrZWRUYWIpO1xyXG5cclxuICBjb25zdCBbbG9nZ2VkVXNlckZvbGxvd1N0YXRzLCBzZXRVc2VyRm9sbG93U3RhdHNdID0gdXNlU3RhdGUodXNlckZvbGxvd1N0YXRzKTtcclxuXHJcbiAgY29uc3Qgb3duQWNjb3VudCA9IHByb2ZpbGUudXNlci5faWQgPT09IHVzZXIuX2lkOyAvLyDmo4Dmn6XotKbmiLfmmK/lkKbkuLroh6rlt7FcclxuXHJcbiAgaWYgKGVycm9yTG9hZGluZykgcmV0dXJuIDxOb1Byb2ZpbGUgLz47XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGUvcG9zdHMvJHt1c2VybmFtZX1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNldFBvc3RzKHJlcy5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChcIkVycm9yIExvYWRpbmcgUG9zdHNcIik7XHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0UG9zdHMoKTtcclxuICB9LCBbcm91dGVyLnF1ZXJ5LnVzZXJuYW1lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzaG93VG9hc3RyICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1RvYXN0cihmYWxzZSksIDQwMDApO1xyXG4gIH0sIFtzaG93VG9hc3RyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2hvd1RvYXN0ciAmJiA8UG9zdERlbGV0ZVRvYXN0ciAvPn1cclxuICAgICAgPEdyaWQgc3RhY2thYmxlPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPFByb2ZpbGVNZW51VGFic1xyXG4gICAgICAgICAgICAgIGFjdGl2ZUl0ZW09e2FjdGl2ZUl0ZW19XHJcbiAgICAgICAgICAgICAgaGFuZGxlSXRlbUNsaWNrPXtoYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgZm9sbG93ZXJzTGVuZ3RoPXtmb2xsb3dlcnNMZW5ndGh9XHJcbiAgICAgICAgICAgICAgZm9sbG93aW5nTGVuZ3RoPXtmb2xsb3dpbmdMZW5ndGh9XHJcbiAgICAgICAgICAgICAgb3duQWNjb3VudD17b3duQWNjb3VudH1cclxuICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICB7YWN0aXZlSXRlbSA9PT0gXCJwcm9maWxlXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgICBwcm9maWxlPXtwcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICBvd25BY2NvdW50PXtvd25BY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgICAgc2V0VXNlckZvbGxvd1N0YXRzPXtzZXRVc2VyRm9sbG93U3RhdHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICA8UGxhY2VIb2xkZXJQb3N0cyAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IHBvc3RzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkUG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHM9e3NldFBvc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvYXN0cj17c2V0U2hvd1RvYXN0cn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPE5vUHJvZmlsZVBvc3RzIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0cz17c2V0VXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZVVzZXJJZD17cHJvZmlsZS51c2VyLl9pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93aW5nXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0cz17c2V0VXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZVVzZXJJZD17cHJvZmlsZS51c2VyLl9pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwidXBkYXRlUHJvZmlsZVwiICYmIChcclxuICAgICAgICAgICAgICA8VXBkYXRlUHJvZmlsZSBQcm9maWxlPXtwcm9maWxlfSAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwic2V0dGluZ3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPFNldHRpbmdzIG5ld01lc3NhZ2VQb3B1cD17dXNlci5uZXdNZXNzYWdlUG9wdXB9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblByb2ZpbGVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlLyR7dXNlcm5hbWV9YCwge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IHByb2ZpbGUsIGZvbGxvd2Vyc0xlbmd0aCwgZm9sbG93aW5nTGVuZ3RoIH0gPSByZXMuZGF0YTtcclxuXHJcbiAgICByZXR1cm4geyBwcm9maWxlLCBmb2xsb3dlcnNMZW5ndGgsIGZvbGxvd2luZ0xlbmd0aCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEF4aW9zID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBgJHtiYXNlVXJsfS9hcGkvcHJvZmlsZWAsXHJcbiAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dVc2VyID0gYXN5bmMgKHVzZXJUb0ZvbGxvd0lkLCBzZXRVc2VyRm9sbG93U3RhdHMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL2ZvbGxvdy8ke3VzZXJUb0ZvbGxvd0lkfWApO1xyXG5cclxuICAgIHNldFVzZXJGb2xsb3dTdGF0cyhwcmV2ID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIGZvbGxvd2luZzogWy4uLnByZXYuZm9sbG93aW5nLCB7IHVzZXI6IHVzZXJUb0ZvbGxvd0lkIH1dXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93VXNlciA9IGFzeW5jICh1c2VyVG9VbmZvbGxvd0lkLCBzZXRVc2VyRm9sbG93U3RhdHMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucHV0KGAvdW5mb2xsb3cvJHt1c2VyVG9VbmZvbGxvd0lkfWApO1xyXG5cclxuICAgIHNldFVzZXJGb2xsb3dTdGF0cyhwcmV2ID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIGZvbGxvd2luZzogcHJldi5mb2xsb3dpbmcuZmlsdGVyKGZvbGxvd2luZyA9PiBmb2xsb3dpbmcudXNlciAhPT0gdXNlclRvVW5mb2xsb3dJZClcclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZVVwZGF0ZSA9IGFzeW5jIChwcm9maWxlLCBzZXRMb2FkaW5nLCBzZXRFcnJvciwgcHJvZmlsZVBpY1VybCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGJpbywgZmFjZWJvb2ssIHlvdXR1YmUsIHR3aXR0ZXIsIGluc3RhZ3JhbSB9ID0gcHJvZmlsZTtcclxuXHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvdXBkYXRlYCwge1xyXG4gICAgICBiaW8sXHJcbiAgICAgIGZhY2Vib29rLFxyXG4gICAgICB5b3V0dWJlLFxyXG4gICAgICB0d2l0dGVyLFxyXG4gICAgICBpbnN0YWdyYW0sXHJcbiAgICAgIHByb2ZpbGVQaWNVcmxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgUm91dGVyLnJlbG9hZCgpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBzZXRFcnJvcihjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkVXBkYXRlID0gYXN5bmMgKHNldFN1Y2Nlc3MsIHVzZXJQYXNzd29yZHMpID0+IHtcclxuICBjb25zdCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSA9IHVzZXJQYXNzd29yZHM7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9zZXR0aW5ncy9wYXNzd29yZGAsIHsgY3VycmVudFBhc3N3b3JkLCBuZXdQYXNzd29yZCB9KTtcclxuXHJcbiAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVNZXNzYWdlUG9wdXAgPSBhc3luYyAocG9wdXBTZXR0aW5nLCBzZXRQb3B1cFNldHRpbmcsIHNldFN1Y2Nlc3MpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3NldHRpbmdzL21lc3NhZ2VQb3B1cGApO1xyXG5cclxuICAgIHNldFBvcHVwU2V0dGluZyghcG9wdXBTZXR0aW5nKTtcclxuICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=