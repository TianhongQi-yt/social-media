(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2195:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__(7069);
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(4953);
var baseUrl_default = /*#__PURE__*/__webpack_require__.n(baseUrl);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
// EXTERNAL MODULE: ./utils/uploadPicToCloudinary.js
var uploadPicToCloudinary = __webpack_require__(7412);
// EXTERNAL MODULE: ./utils/postActions.js
var postActions = __webpack_require__(7037);
;// CONCATENATED MODULE: external "react-cropper"
var external_react_cropper_namespaceObject = require("react-cropper");;
var external_react_cropper_default = /*#__PURE__*/__webpack_require__.n(external_react_cropper_namespaceObject);
;// CONCATENATED MODULE: ./components/Post/CropImageModal.js







function CropImageModal({
  mediaPreview,
  setMedia,
  showModal,
  setShowModal
}) {
  const {
    0: cropper,
    1: setCropper
  } = (0,external_react_.useState)();

  const getCropData = () => {
    if (cropper) {
      setMedia(cropper.getCroppedCanvas().toDataURL());
      cropper.destroy();
    }

    setShowModal(false);
  };

  (0,external_react_.useEffect)(() => {
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
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Modal, {
      closeOnDimmerClick: false,
      size: "large",
      onClose: () => setShowModal(false),
      open: showModal,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Modal.Header, {
        content: "Crop image before upload"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid, {
        columns: 2,
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Modal.Content, {
            image: true,
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_cropper_default()), {
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
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Modal.Content, {
            image: true,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Header, {
                as: "h2",
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                  name: "file image outline"
                }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Header.Content, {
                  content: "Final"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  style: {
                    width: "100%",
                    height: "300px",
                    display: "inline-block",
                    padding: "10px",
                    overflow: "hidden",
                    boxSizing: "border-box"
                  },
                  className: "img-preview"
                })
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Modal.Actions, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
          title: "Reset (R)",
          icon: "redo",
          circular: true,
          onClick: () => cropper && cropper.reset()
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
          title: "Move Canvas (M)",
          icon: "move",
          circular: true,
          onClick: () => cropper && cropper.setDragMode("move")
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
          title: "New Cropbox (C)",
          icon: "crop",
          circular: true,
          onClick: () => cropper && cropper.setDragMode("crop")
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
          negative: true,
          content: "Cancel",
          icon: "cancel",
          onClick: () => setShowModal(false)
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
          content: "Crop Image",
          icon: "checkmark",
          positive: true,
          onClick: getCropData
        })]
      })]
    })
  });
}

/* harmony default export */ var Post_CropImageModal = (CropImageModal);
;// CONCATENATED MODULE: ./components/Post/CreatePost.js




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
  } = (0,external_react_.useState)({
    text: "",
    location: ""
  });
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const inputRef = (0,external_react_.useRef)();
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,external_react_.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,external_react_.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,external_react_.useState)(null);
  const {
    0: showModal,
    1: setShowModal
  } = (0,external_react_.useState)(false);

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
      picUrl = await (0,uploadPicToCloudinary/* default */.Z)(media);

      if (!picUrl) {
        setLoading(false);
        return setError("Error Uploading Image");
      }
    }

    await (0,postActions/* submitNewPost */.hD)(newPost.text, newPost.location, picUrl, setPosts, setNewPost, setError);
    setMedia(null);
    mediaPreview && URL.revokeObjectURL(mediaPreview);
    setTimeout(() => setMediaPreview(null), 3000);
    setLoading(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [showModal && /*#__PURE__*/jsx_runtime_.jsx(Post_CropImageModal, {
      mediaPreview: mediaPreview,
      setMedia: setMedia,
      showModal: showModal,
      setShowModal: setShowModal
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
      error: error !== null,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Message, {
        error: true,
        onDismiss: () => setError(null),
        content: error,
        header: "Oops!"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Group, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
          src: user.profilePicUrl,
          circular: true,
          avatar: true,
          inline: true
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Form.TextArea, {
          placeholder: "Whats Happening",
          name: "text",
          value: newPost.text,
          onChange: handleChange,
          rows: 4,
          width: 14
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Group, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
          value: newPost.location,
          name: "location",
          onChange: handleChange,
          label: "Add Location",
          icon: "map marker alternate",
          placeholder: "Want to add Location?"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          ref: inputRef,
          onChange: handleChange,
          name: "media",
          style: {
            display: "none"
          },
          type: "file",
          accept: "image/*"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
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
        children: media === null ? /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
          name: "plus",
          size: "big"
        }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
            style: {
              height: "150px",
              width: "150px"
            },
            src: mediaPreview,
            alt: "PostImage",
            centered: true,
            size: "medium"
          })
        })
      }), mediaPreview !== null && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {
          hidden: true
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
          content: "Crop Image",
          type: "button",
          primary: true,
          circular: true,
          onClick: () => setShowModal(true)
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {
        hidden: true
      }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
        circular: true,
        disabled: newPost.text === "" || loading,
        content: /*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: "Post"
        }),
        style: {
          backgroundColor: "#1DA1F2",
          color: "white"
        },
        icon: "send",
        loading: loading
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {})]
  });
}

/* harmony default export */ var Post_CreatePost = (CreatePost);
// EXTERNAL MODULE: ./components/Post/CardPost.js + 2 modules
var CardPost = __webpack_require__(705);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(5998);
// EXTERNAL MODULE: ./components/Layout/NoData.js
var NoData = __webpack_require__(6048);
// EXTERNAL MODULE: ./components/Layout/Toastr.js
var Toastr = __webpack_require__(9748);
;// CONCATENATED MODULE: external "react-infinite-scroll-component"
var external_react_infinite_scroll_component_namespaceObject = require("react-infinite-scroll-component");;
var external_react_infinite_scroll_component_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroll_component_namespaceObject);
// EXTERNAL MODULE: ./components/Layout/PlaceHolderGroup.js
var PlaceHolderGroup = __webpack_require__(899);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./utils/getUserInfo.js
var getUserInfo = __webpack_require__(7354);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/calculateTime.js
var calculateTime = __webpack_require__(1715);
;// CONCATENATED MODULE: ./components/Home/MessageNotificationModal.js








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
  } = (0,external_react_.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);

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

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Modal, {
      size: "small",
      open: newMessageModal,
      onClose: onModalClose,
      closeIcon: true,
      closeOnDimmerClick: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Modal.Header, {
        content: `New Message from ${newMessageReceived.senderName}`
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Modal.Content, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "bubbleWrapper",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "inlineContainer",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "inlineIcon",
              src: newMessageReceived.senderProfilePic
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "otherBubble other",
            children: newMessageReceived.msg
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "other",
            children: (0,calculateTime/* default */.Z)(newMessageReceived.date)
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            position: "sticky",
            bottom: "0px"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Segment, {
            secondary: true,
            color: "teal",
            attached: "bottom",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Form, {
              reply: true,
              onSubmit: formSubmit,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
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
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          style: {
            marginTop: "5px"
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/messages?message=${newMessageReceived.sender}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "View All Messages"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(Instructions, {
            username: user.username
          })]
        })]
      })]
    })
  });
}

const Instructions = ({
  username
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.List, {
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.List.Item, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
      name: "help"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.List.Content, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.List.Header, {
        children: "If you do not like this popup to appear when you receive a new message:"
      })
    })]
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.List.Item, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
      name: "hand point right"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.List.Content, {
      children: ["You can disable it by going to", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/${username}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: " Account "
        })
      }), "Page and clicking on Settings Tab."]
    })]
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.List.Item, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
      name: "hand point right"
    }), "Inside the menu,there is an setting named: Show New Message Popup?"]
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.List.Item, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
      name: "hand point right"
    }), "Just toggle the setting to disable/enable the Message Popup to appear."]
  })]
});

/* harmony default export */ var Home_MessageNotificationModal = (MessageNotificationModal);
// EXTERNAL MODULE: ./utils/newMsgSound.js
var newMsgSound = __webpack_require__(1553);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/Home/NotificationPortal.js







function NotificationPortal({
  newNotification,
  notificationPopup,
  showNotificationPopup
}) {
  const router = (0,router_.useRouter)();
  const {
    name,
    profilePicUrl,
    username,
    postId
  } = newNotification;
  return /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.TransitionablePortal, {
    transition: {
      animation: "fade left",
      duration: "500"
    },
    onClose: () => notificationPopup && showNotificationPopup(false),
    onOpen: newMsgSound/* default */.Z,
    open: notificationPopup,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Segment, {
      style: {
        right: "5%",
        position: "fixed",
        top: "10%",
        zIndex: 1000
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
        name: "close",
        size: "large",
        style: {
          float: "right",
          cursor: "pointer"
        },
        onClick: () => showNotificationPopup(false)
      }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Feed.Event, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Label, {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: profilePicUrl
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Content, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Feed.Summary, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Feed.User, {
                onClick: () => router.push(`/${username}`),
                children: [name, " "]
              }), " ", "liked your ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: () => router.push(`/post/${postId}`),
                children: " post"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Feed.Date, {
                children: (0,calculateTime/* default */.Z)(Date.now())
              })]
            })
          })]
        })
      })]
    })
  });
}

/* harmony default export */ var Home_NotificationPortal = (NotificationPortal);
;// CONCATENATED MODULE: ./pages/index.js




function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { pages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function Index({
  user,
  postsData,
  errorLoading
}) {
  const {
    0: posts,
    1: setPosts
  } = (0,external_react_.useState)(postsData || []);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,external_react_.useState)(false);
  const {
    0: hasMore,
    1: setHasMore
  } = (0,external_react_.useState)(true);
  const {
    0: pageNumber,
    1: setPageNumber
  } = (0,external_react_.useState)(2);
  const socket = (0,external_react_.useRef)();
  const {
    0: newMessageReceived,
    1: setNewMessageReceived
  } = (0,external_react_.useState)(null);
  const {
    0: newMessageModal,
    1: showNewMessageModal
  } = (0,external_react_.useState)(false);
  const {
    0: newNotification,
    1: setNewNotification
  } = (0,external_react_.useState)(null);
  const {
    0: notificationPopup,
    1: showNotificationPopup
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (!socket.current) {
      socket.current = external_socket_io_client_default()((baseUrl_default()));
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
        } = await (0,getUserInfo/* default */.Z)(newMsg.sender);

        if (user.newMessagePopup) {
          setNewMessageReceived(pages_objectSpread(pages_objectSpread({}, newMsg), {}, {
            senderName: name,
            senderProfilePic: profilePicUrl
          }));
          showNewMessageModal(true);
        }

        (0,newMsgSound/* default */.Z)(name);
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
  (0,external_react_.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]);

  const fetchDataOnScroll = async () => {
    try {
      const res = await external_axios_default().get(`${(baseUrl_default())}/api/posts`, {
        headers: {
          Authorization: external_js_cookie_default().get("token")
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

  if (posts.length === 0 || errorLoading) return /*#__PURE__*/jsx_runtime_.jsx(NoData/* NoPosts */.o0, {});
  (0,external_react_.useEffect)(() => {
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
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [notificationPopup && newNotification !== null && /*#__PURE__*/jsx_runtime_.jsx(Home_NotificationPortal, {
      newNotification: newNotification,
      notificationPopup: notificationPopup,
      showNotificationPopup: showNotificationPopup
    }), showToastr && /*#__PURE__*/jsx_runtime_.jsx(Toastr/* PostDeleteToastr */.g0, {}), newMessageModal && newMessageReceived !== null && /*#__PURE__*/jsx_runtime_.jsx(Home_MessageNotificationModal, {
      socket: socket,
      showNewMessageModal: showNewMessageModal,
      newMessageModal: newMessageModal,
      newMessageReceived: newMessageReceived,
      user: user
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Segment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Post_CreatePost, {
        user: user,
        setPosts: setPosts
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_infinite_scroll_component_default()), {
        hasMore: hasMore,
        next: fetchDataOnScroll,
        loader: /*#__PURE__*/jsx_runtime_.jsx(PlaceHolderGroup/* PlaceHolderPosts */.pj, {}),
        endMessage: /*#__PURE__*/jsx_runtime_.jsx(PlaceHolderGroup/* EndMessage */.SC, {}),
        dataLength: posts.length,
        children: posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(CardPost/* default */.Z, {
          socket: socket,
          post: post,
          user: user,
          setPosts: setPosts,
          setShowToastr: setShowToastr
        }, post._id))
      })]
    })]
  });
}

Index.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,external_nookies_.parseCookies)(ctx);
    const res = await external_axios_default().get(`${(baseUrl_default())}/api/posts`, {
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

/* harmony default export */ var pages = (Index);

/***/ }),

/***/ 7354:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4953);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6155);
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

/* harmony default export */ __webpack_exports__["Z"] = (getUserInfo);

/***/ }),

/***/ 1553:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["Z"] = (newMsgSound);

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

/***/ 3804:
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

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

/***/ }),

/***/ 7069:
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
var __webpack_exports__ = __webpack_require__.X(0, [664,880,585,194,401], function() { return __webpack_exec__(2195); });
module.exports = __webpack_exports__;

})();