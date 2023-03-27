"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const authenticate = async (page, email, password) => {
    await page.goto("https://www.hardgamers.com.ar/");
    const authenticated = await page.evaluate(() => {
        const loginElement = document.querySelector("#user-name h2");
        const loginText = loginElement === null || loginElement === void 0 ? void 0 : loginElement.textContent;
        // If not authenticated, the textContent will be "Login", otherwise it will be " "
        if (loginText.length < 2) {
            return false;
        }
        return true;
    });
    if (!authenticated) {
        await login(page, email, password);
        console.log("Successfully authenticated!");
    }
    else {
        console.log("Already authenticated!");
    }
};
exports.authenticate = authenticate;
const login = async (page, email, password) => {
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
//# sourceMappingURL=auth.js.map