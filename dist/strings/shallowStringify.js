"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shallowStringify = (object) => JSON.stringify(object, (k, v) => (k ? String(v) : v));
exports.default = shallowStringify;
//# sourceMappingURL=shallowStringify.js.map