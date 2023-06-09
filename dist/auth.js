"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const authenticate = async (page, email, password) => {
    await page.goto("https://www.hardgamers.com.ar");
    const authenticated = await page.evaluate(() => {
        var _a;
        const loginElement = document.querySelector("#user-name h2.black");
        const loginText = (_a = loginElement === null || loginElement === void 0 ? void 0 : loginElement.textContent) === null || _a === void 0 ? void 0 : _a.trim();
        // If not authenticated, the textContent will be "Login", otherwise it will be " "
        if (loginText === "Login") {
            return false;
        }
        return true;
    });
    if (!authenticated) {
        console.log("Authenticating...");
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
    await page.type('input[name="email"]', email.toString());
    await page.type('input[name="password"]', password.toString());
    // Submit data by clicking to this element <button class="btn btn-danger btn-md w-100">Login</button> that is inside a form that contains an action="/auth/login"
    await page.click('form[action="/auth/login"] button');
    // Wait for the page to reload
    await page.waitForNavigation();
};
//# sourceMappingURL=auth.js.map