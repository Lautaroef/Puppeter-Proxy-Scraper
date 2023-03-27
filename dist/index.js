"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const launchWithProxy_1 = __importDefault(require("./launchWithProxy"));
const getProxy_1 = require("./getProxy");
// Proxy config | https://www.proxyrotator.com/app/rotating-proxy-api/7/
const proxyUrl = "http://falcon.proxyrotator.com:51337";
const apiKey = process.env.PROXY_ROTATOR_API_KEY;
const proxyParams = {
    get: true,
    cookies: true,
    userAgent: true,
    city: "New York",
    country: "US",
    connectionType: "Residential",
};
// Get proxy and launch Puppeteer
(0, getProxy_1.getProxy)(proxyUrl, apiKey, proxyParams)
    .then((proxy) => {
    (0, launchWithProxy_1.default)(proxy);
})
    .catch((error) => {
    console.error(error);
});
//# sourceMappingURL=index.js.map