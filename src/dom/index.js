"use strict";
exports.__esModule = true;
var pages_1 = require("../pages");
var ReactDOM = require("react-dom");
function hydrate() {
    var el = document.querySelectorAll('div[data-reactroot]');
    var pageInput = document.querySelectorAll('script#config');
    if (pageInput.length > 0 && el.length > 0) {
        var jsonString = pageInput[0].textContent;
        if (jsonString) {
            var settingsJson = JSON.parse(jsonString);
            if (settingsJson.pageName) {
                var item = pages_1["default"][settingsJson.pageName];
                if (item) {
                    ReactDOM.hydrate(item, el[0]);
                }
            }
        }
    }
}
exports.hydrate = hydrate;
