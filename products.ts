import type { Page } from "puppeteer";

interface Product {
  name: string;
  price: number;
}

const getAllProducts = async (page: Page) => {
  await page.goto(
    "https://www.hardgamers.com.ar/builder/custom/cpu?text=intel%20i7&products%3A=on&page=7&limit=18&minPrice=94900&maxPrice=1196098"
  );

  // Wait for the products to load
  await page.waitForSelector(".row.white-background");

  // Get all the products and store their names and prices in an array
  const products = await page.evaluate(() => {
    const productList: Product[] = [];
    const productElements = document.querySelectorAll(".row.white-background .product");

    productElements.forEach((productElement) => {
      const imageElement = productElement.querySelector("img") as HTMLImageElement;
      const priceElement = productElement.querySelector(".product-price") as HTMLSpanElement;

      const rawPrice = priceElement.textContent as string; // '\n   $ 9.999\n   '
      const price = parseInt(rawPrice.replace(/\D/g, "")); // 9999

      productList.push({ name: imageElement.alt, price });
    });

    return productList;
  });

  return products as Product[];
};

export { getAllProducts };
