"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const camelCaseToDashCase_1 = __importDefault(require("../strings/camelCaseToDashCase"));
const dataAttribute = (attribute, prefix) => {
    const currentName = (0, camelCaseToDashCase_1.default)(prefix ? `data-${prefix}-${attribute}` : `data-${attribute}`);
    let currentValue = '';
    const value = v => {
        if (typeof v !== 'undefined')
            currentValue = `${v}`;
        return currentValue;
    };
    const asObject = v => ({
        [currentName]: value(v),
    });
    const assign = e => {
        e.setAttribute(currentName, currentValue);
        return e;
    };
    const asString = v => `${currentName}="${value(v)}"`;
    const get = e => e.getAttribute(currentName);
    const has = e => get(e) !== null;
    const name = () => currentName;
    const remove = e => {
        e.removeAttribute(currentName);
        return e;
    };
    return {
        asObject,
        assign,
        asString,
        get,
        has,
        name,
        remove,
        toString: () => asString(),
        toJSON: () => asObject(),
        value,
    };
};
exports.default = dataAttribute;
//# sourceMappingURL=dataAttribute.js.map