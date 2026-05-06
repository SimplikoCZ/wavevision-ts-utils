"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const parseCurrentUrl = (url = window.location.href) => (0, url_1.parse)(url, true);
exports.default = parseCurrentUrl;
//# sourceMappingURL=parseCurrentUrl.js.map