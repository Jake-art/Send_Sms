"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Test = function Test() {
  var data = JSON.stringify({
    "SenderId": "Mobitext",
    "MessageParameters": [{
      "Number": "254722352740",
      "Text": "moses"
    }],
    "ApiKey": "zpEdD5mAa6itV2YhC4lrZc8e1LMwuxPFn9vB0b3G7UJkgoKj",
    "ClientId": "Jake"
  });
  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://apis.onfonmedia.co.ke/v1/sms/SendBulkSMS',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  _axios["default"].request(config).then(function (response) {
    console.log(JSON.stringify(response.data));
  })["catch"](function (error) {
    console.log(error);
  });
};

var _default = Test;
exports["default"] = _default;