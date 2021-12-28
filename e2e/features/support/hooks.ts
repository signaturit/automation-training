import { AfterAll, BeforeAll, setDefaultTimeout } from "cucumber";
import { browser } from "protractor";

BeforeAll(() => {
    setDefaultTimeout(1800000);
});

AfterAll({ timeout: 100 * 1000 }, async () => {
    await browser.quit();
});
