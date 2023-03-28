"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const auth_1 = require("../auth");
const getProducts_1 = require("../getProducts");
const launchWithProxy = async (proxy) => {
    const browser = await puppeteer_1.default.launch({
        headless: true,
        args: [`--proxy-server=${proxy}`],
    });
    const page = await browser.newPage();
    // Authenticate user
    await (0, auth_1.authenticate)(page, "lautaroef@gmail.com", "maj8iJjtdt88MhJ");
    // Get all the products
    const products = await (0, getProducts_1.getProducts)(page);
    console.log(products);
    await browser.close();
};
exports.default = launchWithProxy;
//# sourceMappingURL=launchWithProxy.js.map