"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toFixed = (n, decimals = 1) => {
    const exp = new RegExp(`^-?\\d+(?:.\\d{0,${decimals || -1}})?`);
    const match = n.toString().match(exp);
    return match ? parseFloat(match[0]) : n;
};
exports.default = toFixed;
//# sourceMappingURL=toFixed.js.map