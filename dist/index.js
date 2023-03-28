"use strict";
// import launchWithProxy from "./launchWithProxy";
// import { getProxy } from "./getProxy";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
// add stealth plugin and use defaults (all evasion techniques)
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
// puppeteer usage as normal
puppeteer_extra_1.default
    .launch({
    headless: false,
    executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    userDataDir: "C:\\Users\\Usuario\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 3",
})
    .then(async (browser) => {
    console.log("Running tests..");
    const page = await browser.newPage();
    await page.goto("https://bot.sannysoft.com");
    new Promise((r) => setTimeout(r, 5000));
    await page.screenshot({ path: "./testResult-2.png", fullPage: true });
    await browser.close();
    console.log(`All done, check the screenshot. ✨`);
});
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