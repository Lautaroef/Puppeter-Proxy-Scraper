"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProxy = void 0;
const axios = require("axios");
// Define function to get proxy
const getProxy = async (proxyUrl, apiKey, proxyParams) => {
    const response = await axios.get(proxyUrl, { params: { apiKey, ...proxyParams } });
    return response.data.text;
};
exports.getProxy = getProxy;
//# sourceMappingURL=getProxy.js.map