import puppeteer from "puppeteer-extra";
import { authenticate } from "./auth";
import { getAllProducts } from "./products";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

// add stealth plugin and use defaults (all evasion techniques)
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    userDataDir: "C:\\Users\\Usuario\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 3",
  });

  const page = await browser.newPage();

  // Authenticate the user
  await authenticate(page, "lautaroef@gmail.com", "maj8iJjtdt88MhJ");

  // Get all the products
  const products = await getAllProducts(page);

  console.log(products);

  await browser.close();
})();

// ! Code to launch Puppeteer with a proxy
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
