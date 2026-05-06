"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const camelCaseToDashCase = (s) => s.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
exports.default = camelCaseToDashCase;
//# sourceMappingURL=camelCaseToDashCase.js.map