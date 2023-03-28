import puppeteer from "puppeteer";
import { authenticate } from "./auth";
import { getAllProducts } from "./products";

const launchWithProxy = async (proxy: string) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [`--proxy-server=${proxy}`],
  });
  const page = await browser.newPage();

  // Authenticate user
  await authenticate(page, "lautaroef@gmail.com", "maj8iJjtdt88MhJ");

  // Get all the products
  const products = await getAllProducts(page);

  console.log(products);

  await browser.close();
};

export default launchWithProxy;
