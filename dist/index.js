"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const auth_1 = require("./auth");
const getProducts_1 = require("./getProducts");
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// add stealth plugin and use defaults (all evasion techniques)
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
(async () => {
    const browser = await puppeteer_extra_1.default.launch({
        headless: false,
        executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
        userDataDir: "C:\\Users\\Usuario\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 3",
    });
    const page = await browser.newPage();
    // Authenticate the user
    const email = process.env.HARDGAMERS_EMAIL;
    const password = process.env.HARDGAMERS_PASSWORD;
    console.log(email, password);
    await (0, auth_1.authenticate)(page, email, password);
    // Get the products
    const products = await (0, getProducts_1.getProducts)(page);
    console.log(products);
    await browser.close();
})();
// Code to launch Puppeteer with a proxy
// // Proxy config | https://www.proxyrotator.com/app/rotating-proxy-api/7/
// const proxyUrl = "http://falcon.proxyrotator.com:51337";
// const apiKey = process.env.PROXY_ROTATOR_API_KEY as string;
// const proxyParams = {
//   get: true,
//   cookies: true,
//   userAgent: true,
//   city: "New York",
//   country: "US",
//   connectionType: "Residential",
// };
// // Get proxy and launch Puppeteer
// getProxy(proxyUrl, apiKey, proxyParams)
//   .then((proxy) => {
//     launchWithProxy(proxy);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
//# sourceMappingURL=index.js.map