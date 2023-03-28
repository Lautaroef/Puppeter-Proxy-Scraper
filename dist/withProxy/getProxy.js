"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProxy = void 0;
const axios_1 = __importDefault(require("axios"));
// Define function to get proxy
const getProxy = async (proxyUrl, apiKey, proxyParams) => {
    const response = await axios_1.default.get(proxyUrl, { params: { apiKey, ...proxyParams } });
    return response.data.text;
};
exports.getProxy = getProxy;
//# sourceMappingURL=getProxy.js.map