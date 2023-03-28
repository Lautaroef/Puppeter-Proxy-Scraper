import puppeteer from "puppeteer";
import { authenticate } from "../auth";
import { getProducts } from "../getProducts";

const launchWithProxy = async (proxy: string) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [`--proxy-server=${proxy}`],
  });
  const page = await browser.newPage();

  // Authenticate user
  await authenticate(page, "lautaroef@gmail.com", "maj8iJjtdt88MhJ");

  // Get all the products
  const products = await getProducts(page);

  console.log(products);

  await browser.close();
};

export default launchWithProxy;
