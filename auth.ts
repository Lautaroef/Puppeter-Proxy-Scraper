import type { Page } from "puppeteer";

const authenticate = async (page: Page, email: string, password: string) => {
  await page.goto("https://www.hardgamers.com.ar/");

  const authenticated = await page.evaluate(() => {
    const loginElement = document.querySelector("#user-name h2");
    const loginText = loginElement?.textContent as string;

    // If not authenticated, the textContent will be "Login", otherwise it will be " "
    if (loginText.length < 2) {
      return false;
    }

    return true;
  });

  if (!authenticated) {
    await login(page, email, password);
    console.log("Successfully authenticated!");
  } else {
    console.log("Already authenticated!");
  }
};

const login = async (page: Page, email: string, password: string) => {
  // Click on the Login button
  await page.click("#user-name");
  // Click on the "Login with email" button
  await page.click("#showLocalLogin");
  // Fill the form and submit it
  await page.type('input[name="email"]', email);
  await page.type('input[name="password"]', password);
  await page.click("form button.btn-danger");
  // Wait for the page to reload
  await page.waitForNavigation();
};

export { authenticate };
