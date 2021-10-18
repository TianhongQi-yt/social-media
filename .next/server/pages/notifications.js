(function() {
var exports = {};
exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ notifications; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(4953);
var baseUrl_default = /*#__PURE__*/__webpack_require__.n(baseUrl);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(5998);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./components/Layout/NoData.js
var NoData = __webpack_require__(6048);
// EXTERNAL MODULE: ./utils/calculateTime.js
var calculateTime = __webpack_require__(1715);
;// CONCATENATED MODULE: ./components/Notifications/LikeNotification.js







function LikeNotification({
  notification
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Feed.Event, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Label, {
        image: notification.user.profilePicUrl
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Feed.Content, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Summary, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.User, {
              as: "a",
              href: `/${notification.user.username}`,
              children: notification.user.name
            }), " ", "liked your ", /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `/post/${notification.post._id}`,
              children: "post."
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Date, {
              children: (0,calculateTime/* default */.Z)(notification.date)
            })]
          })
        }), notification.post.picUrl && /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Extra, {
          images: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: `/post/${notification.post._id}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: notification.post.picUrl
            })
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {})]
  });
}

/* harmony default export */ var Notifications_LikeNotification = (LikeNotification);
;// CONCATENATED MODULE: ./components/Notifications/CommentNotification.js







function CommentNotification({
  notification
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Feed.Event, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Label, {
        image: notification.user.profilePicUrl
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Feed.Content, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Summary, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.User, {
              as: "a",
              href: `/${notification.user.username}`,
              children: notification.user.name
            }), " ", "commented on your ", /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `/post/${notification.post._id}`,
              children: "post."
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Date, {
              children: (0,calculateTime/* default */.Z)(notification.date)
            })]
          })
        }), notification.post.picUrl && /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Extra, {
          images: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: `/post/${notification.post._id}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: notification.post.picUrl
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Extra, {
          text: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: notification.text
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {})]
  });
}

/* harmony default export */ var Notifications_CommentNotification = (CommentNotification);
// EXTERNAL MODULE: ./utils/profileActions.js
var profileActions = __webpack_require__(8145);
;// CONCATENATED MODULE: ./components/Notifications/FollowerNotification.js








function FollowerNotification({
  notification,
  loggedUserFollowStats,
  setUserFollowStats
}) {
  const {
    0: disabled,
    1: setDisabled
  } = (0,external_react_.useState)(false);
  const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === notification.user._id).length > 0;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Feed.Event, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Label, {
        image: notification.user.profilePicUrl
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Feed.Content, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Summary, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.User, {
              as: "a",
              href: `/${notification.user.username}`,
              children: notification.user.name
            }), " ", "started following you.", /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Date, {
              children: (0,calculateTime/* default */.Z)(notification.date)
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            position: "absolute",
            right: "5px"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
            size: "small",
            compact: true,
            icon: isFollowing ? "check circle" : "add user",
            color: isFollowing ? "instagram" : "twitter",
            disabled: disabled,
            onClick: async () => {
              setDisabled(true);
              isFollowing ? await (0,profileActions/* unfollowUser */.F6)(notification.user._id, setUserFollowStats) : await (0,profileActions/* followUser */.P_)(notification.user._id, setUserFollowStats);
              setDisabled(false);
            }
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {})]
  });
}

/* harmony default export */ var Notifications_FollowerNotification = (FollowerNotification);
;// CONCATENATED MODULE: ./pages/notifications.js














function Notifications({
  notifications,
  errorLoading,
  user,
  userFollowStats
}) {
  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = (0,external_react_.useState)(userFollowStats);
  (0,external_react_.useEffect)(() => {
    const notificationRead = async () => {
      try {
        await external_axios_default().post(`${(baseUrl_default())}/api/notifications`, {}, {
          headers: {
            Authorization: external_js_cookie_default().get("token")
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    notificationRead();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
      style: {
        marginTop: "1.5rem"
      },
      children: [notifications.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Segment, {
        color: "teal",
        raised: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            maxHeight: "40rem",
            overflow: "auto",
            height: "40rem",
            position: "relative",
            width: "100%"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed, {
            size: "small",
            children: notifications.map(notification => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [notification.type === "newLike" && notification.post !== null && /*#__PURE__*/jsx_runtime_.jsx(Notifications_LikeNotification, {
                notification: notification
              }, notification._id), notification.type === "newComment" && notification.post !== null && /*#__PURE__*/jsx_runtime_.jsx(Notifications_CommentNotification, {
                notification: notification
              }, notification._id), notification.type === "newFollower" && /*#__PURE__*/jsx_runtime_.jsx(Notifications_FollowerNotification, {
                notification: notification,
                loggedUserFollowStats: loggedUserFollowStats,
                setUserFollowStats: setUserFollowStats
              }, notification._id)]
            }))
          })
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx(NoData/* NoNotifications */.nq, {}), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {
        hidden: true
      })]
    })
  });
}

Notifications.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,external_nookies_.parseCookies)(ctx);
    const res = await external_axios_default().get(`${(baseUrl_default())}/api/notifications`, {
      headers: {
        Authorization: token
      }
    });
    return {
      notifications: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ var notifications = (Notifications);

/***/ }),

/***/ 4953:
/***/ (function(module) {

const baseUrl =  false ? 0 : "https://inslike-socialmedia.herokuapp.com/";
module.exports = baseUrl;

/***/ }),

/***/ 3844:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["Z"] = (catchErrors);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 5998:
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 3818:
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 1347:
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
var __webpack_exports__ = __webpack_require__.X(0, [585,145], function() { return __webpack_exec__(438); });
module.exports = __webpack_exports__;

})();