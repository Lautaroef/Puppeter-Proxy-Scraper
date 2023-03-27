"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = void 0;
const getAllProducts = async (page) => {
    await page.goto("https://www.hardgamers.com.ar/builder/custom/cpu?text=intel%20i7&products%3A=on&page=7&limit=18&minPrice=94900&maxPrice=1196099");
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
    return products;
};
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=products.js.map