exports.id = "utils_baseUrl_js-utils_catchErrors_js";
exports.ids = ["utils_baseUrl_js-utils_catchErrors_js"];
exports.modules = {

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(module) {

const baseUrl =  true ? "http://localhost:3000" : 0;
module.exports = baseUrl;

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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9pZ25vcmVkfEM6XFxVc2Vyc1xceXRxaXRcXERlc2t0b3BcXHNvY2lhbC1tZWRpYVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2F0Y2hFcnJvcnMiLCJlcnJvciIsImVycm9yTXNnIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTUEsT0FBTyxHQUNYLFFBQ0ksdUJBREosR0FFSSxDQUhOO0FBS0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkYsT0FBakIsQzs7Ozs7Ozs7Ozs7O0FDTEEsTUFBTUcsV0FBVyxHQUFHQyxLQUFLLElBQUk7QUFDM0IsTUFBSUMsUUFBSjs7QUFFQSxNQUFJRCxLQUFLLENBQUNFLFFBQVYsRUFBb0I7QUFDbEI7QUFFQUQsWUFBUSxHQUFHRCxLQUFLLENBQUNFLFFBQU4sQ0FBZUMsSUFBMUI7QUFFQUMsV0FBTyxDQUFDSixLQUFSLENBQWNDLFFBQWQ7QUFDRCxHQU5ELE1BTU8sSUFBSUQsS0FBSyxDQUFDSyxPQUFWLEVBQW1CO0FBQ3hCO0FBQ0FKLFlBQVEsR0FBR0QsS0FBSyxDQUFDSyxPQUFqQjtBQUVBRCxXQUFPLENBQUNKLEtBQVIsQ0FBY0MsUUFBZDtBQUNELEdBTE0sTUFLQTtBQUNMO0FBQ0FBLFlBQVEsR0FBR0QsS0FBSyxDQUFDTSxPQUFqQjtBQUVBRixXQUFPLENBQUNKLEtBQVIsQ0FBY0MsUUFBZDtBQUNEOztBQUNELFNBQU9BLFFBQVA7QUFDRCxDQXJCRDs7QUF1QkEsK0RBQWVGLFdBQWYsRTs7Ozs7Ozs7OztBQ3ZCQSxlIiwiZmlsZSI6InV0aWxzX2Jhc2VVcmxfanMtdXRpbHNfY2F0Y2hFcnJvcnNfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlVXJsID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiXG4gICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXG4gICAgOiBcImh0dHBzOi8vaW5kZXItc29jaWFsLW1lZGlhMi5oZXJva3VhcHAuY29tXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVybDtcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gZXJyb3IgPT4ge1xuICBsZXQgZXJyb3JNc2c7XG5cbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxuXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XG5cbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgfVxuICByZXR1cm4gZXJyb3JNc2c7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXRjaEVycm9ycztcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=