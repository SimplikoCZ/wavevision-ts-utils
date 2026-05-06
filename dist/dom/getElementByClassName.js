"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getElementsByClassName_1 = __importDefault(require("./getElementsByClassName"));
const getElementByClassName = (className, parent = document) => (0, getElementsByClassName_1.default)(className, parent).item(0);
exports.default = getElementByClassName;
//# sourceMappingURL=getElementByClassName.js.map