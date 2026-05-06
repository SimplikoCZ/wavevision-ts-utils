"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toFixedCelled = (n, decimals = 1) => Number(`${Math.ceil(Number(`${n}e${decimals}`))}e-${decimals}`);
exports.default = toFixedCelled;
//# sourceMappingURL=toFixedCelled.js.map