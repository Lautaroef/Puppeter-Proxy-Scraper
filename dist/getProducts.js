"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const getProducts = async (page) => {
    await page.goto("https://www.hardgamers.com.ar/builder/custom/cpu?text=intel%20i7&products%3A=on&page=7&limit=18&minPrice=94900&maxPrice=1196098");
    // Wait for the products to load
    await page.waitForSelector(".row.white-background");
    // Get all the products and store their names and prices in an array
    const products = await page.evaluate(() => {
        const productList = [];
        const productElements = document.querySelectorAll(".row.white-background .product");
        productElements.forEach((productElement) => {
            const imageElement = productElement.querySelector("img");
            const priceElement = productElement.querySelector(".product-price");
            const rawPrice = priceElement.textContent; // '\n   $ 9.999\n   '
            const price = parseInt(rawPrice.replace(/\D/g, "")); // 9999
            productList.push({ name: imageElement.alt, price });
        });
        return productList;
    });
    // Write the products array to a JSON file
    await promises_1.default.writeFile("products.json", JSON.stringify(products));
    return products;
};
exports.getProducts = getProducts;
//# sourceMappingURL=getProducts.js.map