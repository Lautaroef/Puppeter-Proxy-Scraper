import launchWithProxy from "./launchWithProxy";
import { getProxy } from "./getProxy";

// Proxy config | https://www.proxyrotator.com/app/rotating-proxy-api/7/
const proxyUrl = "http://falcon.proxyrotator.com:51337";
const apiKey = process.env.PROXY_ROTATOR_API_KEY as string;
const proxyParams = {
  get: true,
  cookies: true,
  userAgent: true,
  city: "New York",
  country: "US",
  connectionType: "Residential",
};

// Get proxy and launch Puppeteer
getProxy(proxyUrl, apiKey, proxyParams)
  .then((proxy) => {
    launchWithProxy(proxy);
  })
  .catch((error) => {
    console.error(error);
  });
