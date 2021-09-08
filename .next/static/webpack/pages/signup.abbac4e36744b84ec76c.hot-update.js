self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\ytqit\\Desktop\\social-media\\components\\Common\\ImageDropDiv.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_ytqit_Desktop_social_media_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function ImageDropDiv(_ref) {
  var highlighted = _ref.highlighted,
      setHighlighted = _ref.setHighlighted,
      inputRef = _ref.inputRef,
      handleChange = _ref.handleChange,
      mediaPreview = _ref.mediaPreview,
      setMediaPreview = _ref.setMediaPreview,
      setMedia = _ref.setMedia;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
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
          onDragOver: function onDragOver(e) {
            e.preventDefault();
            setHighlighted(true);
          },
          onDragLeave: function onDragLeave(e) {
            e.preventDefault();
            setHighlighted(false);
          },
          onDrop: function onDrop(e) {
            e.preventDefault();
            setHighlighted(true);
            var droppedFile = Array.from(e.dataTransfer.files);
            setMedia(droppedFile[0]);
            setMediaPreview(URL.createObjectURL(droppedFile[0]));
          },
          children: mediaPreview === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, _objectSpread(_objectSpread({}, highlighted && {
              color: "green"
            }), {}, {
              placeholder: true,
              basic: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Header, {
                icon: true,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                  name: "file image outline",
                  style: {
                    cursor: "pointer"
                  },
                  onClick: function onClick() {
                    return inputRef.current.click();
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 21
                }, this), "Drag and Drop or Click To Upload Image"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 19
              }, this)
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, this)
          }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
              color: "green",
              placeholder: true,
              basic: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                src: mediaPreview,
                size: "medium",
                centered: true,
                style: {
                  cursor: "pointer"
                },
                onClick: function onClick() {
                  return inputRef.current.click();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
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

_c = ImageDropDiv;
/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

var _c;

$RefreshReg$(_c, "ImageDropDiv");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIl0sIm5hbWVzIjpbIkltYWdlRHJvcERpdiIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsImhhbmRsZUNoYW5nZSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb2xvciIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FRRztBQUFBLE1BUERDLFdBT0MsUUFQREEsV0FPQztBQUFBLE1BTkRDLGNBTUMsUUFOREEsY0FNQztBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUFBLE1BSkRDLFlBSUMsUUFKREEsWUFJQztBQUFBLE1BSERDLFlBR0MsUUFIREEsWUFHQztBQUFBLE1BRkRDLGVBRUMsUUFGREEsZUFFQztBQUFBLE1BRERDLFFBQ0MsUUFEREEsUUFDQztBQUNELHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMseURBQUQ7QUFBQSw2QkFDRSw4REFBQyxzREFBRDtBQUFTLG1CQUFXLE1BQXBCO0FBQXFCLGFBQUssTUFBMUI7QUFBMkIsaUJBQVMsTUFBcEM7QUFBQSxnQ0FDRTtBQUNFLGVBQUssRUFBRTtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FEVDtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UsZ0JBQU0sRUFBQyxTQUhUO0FBSUUsa0JBQVEsRUFBRUosWUFKWjtBQUtFLGNBQUksRUFBQyxPQUxQO0FBTUUsYUFBRyxFQUFFRDtBQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFVRTtBQUNFLG9CQUFVLEVBQUUsb0JBQUFNLENBQUMsRUFBSTtBQUNmQSxhQUFDLENBQUNDLGNBQUY7QUFDQVIsMEJBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRCxXQUpIO0FBS0UscUJBQVcsRUFBRSxxQkFBQU8sQ0FBQyxFQUFJO0FBQ2hCQSxhQUFDLENBQUNDLGNBQUY7QUFDQVIsMEJBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxXQVJIO0FBU0UsZ0JBQU0sRUFBRSxnQkFBQU8sQ0FBQyxFQUFJO0FBQ1hBLGFBQUMsQ0FBQ0MsY0FBRjtBQUNBUiwwQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUVBLGdCQUFNUyxXQUFXLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXSixDQUFDLENBQUNLLFlBQUYsQ0FBZUMsS0FBMUIsQ0FBcEI7QUFDQVIsb0JBQVEsQ0FBQ0ksV0FBVyxDQUFDLENBQUQsQ0FBWixDQUFSO0FBQ0FMLDJCQUFlLENBQUNVLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQk4sV0FBVyxDQUFDLENBQUQsQ0FBL0IsQ0FBRCxDQUFmO0FBQ0QsV0FoQkg7QUFBQSxvQkFpQkdOLFlBQVksS0FBSyxJQUFqQixnQkFDQztBQUFBLG1DQUNFLDhEQUFDLHNEQUFELGtDQUFjSixXQUFXLElBQUk7QUFBQ2lCLG1CQUFLLEVBQUM7QUFBUCxhQUE3QjtBQUFnRCx5QkFBVyxNQUEzRDtBQUE0RCxtQkFBSyxNQUFqRTtBQUFBLHFDQUNFLDhEQUFDLHFEQUFEO0FBQVEsb0JBQUksTUFBWjtBQUFBLHdDQUNFLDhEQUFDLG1EQUFEO0FBQ0Usc0JBQUksRUFBQyxvQkFEUDtBQUVFLHVCQUFLLEVBQUU7QUFBRUMsMEJBQU0sRUFBRTtBQUFWLG1CQUZUO0FBR0UseUJBQU8sRUFBRTtBQUFBLDJCQUFNaEIsUUFBUSxDQUFDaUIsT0FBVCxDQUFpQkMsS0FBakIsRUFBTjtBQUFBO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsMkJBREQsZ0JBY0M7QUFBQSxtQ0FDRSw4REFBQyxzREFBRDtBQUFTLG1CQUFLLEVBQUMsT0FBZjtBQUF1Qix5QkFBVyxNQUFsQztBQUFtQyxtQkFBSyxNQUF4QztBQUFBLHFDQUNFLDhEQUFDLG9EQUFEO0FBQ0UsbUJBQUcsRUFBRWhCLFlBRFA7QUFFRSxvQkFBSSxFQUFDLFFBRlA7QUFHRSx3QkFBUSxNQUhWO0FBSUUscUJBQUssRUFBRTtBQUFFYyx3QkFBTSxFQUFFO0FBQVYsaUJBSlQ7QUFLRSx1QkFBTyxFQUFFO0FBQUEseUJBQU1oQixRQUFRLENBQUNpQixPQUFULENBQWlCQyxLQUFqQixFQUFOO0FBQUE7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBL0JKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBNkREOztLQXRFUXJCLFk7QUF3RVQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmFiYmFjNGUzNjc0NGI4NGVjNzZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIFNlZ21lbnQsIEltYWdlLCBJY29uLCBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlRHJvcERpdih7XHJcbiAgaGlnaGxpZ2h0ZWQsXHJcbiAgc2V0SGlnaGxpZ2h0ZWQsXHJcbiAgaW5wdXRSZWYsXHJcbiAgaGFuZGxlQ2hhbmdlLFxyXG4gIG1lZGlhUHJldmlldyxcclxuICBzZXRNZWRpYVByZXZpZXcsXHJcbiAgc2V0TWVkaWFcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICA8U2VnbWVudCBwbGFjZWhvbGRlciBiYXNpYyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7LyogSFRNTCBkcmFnIGFuZCBkcm9wIGFwaSAqL31cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25EcmFnT3Zlcj17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkRyYWdMZWF2ZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25Ecm9wPXtlID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGRyb3BwZWRGaWxlID0gQXJyYXkuZnJvbShlLmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xyXG4gICAgICAgICAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGRyb3BwZWRGaWxlWzBdKSk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7bWVkaWFQcmV2aWV3ID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8U2VnbWVudCB7Li4uKGhpZ2hsaWdodGVkICYmIHtjb2xvcjpcImdyZWVuXCJ9KX0gIHBsYWNlaG9sZGVyIGJhc2ljPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlIGltYWdlIG91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRHJhZyBhbmQgRHJvcCBvciBDbGljayBUbyBVcGxvYWQgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwiZ3JlZW5cIiBwbGFjZWhvbGRlciBiYXNpYz5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZURyb3BEaXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=