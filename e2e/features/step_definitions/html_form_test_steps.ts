import {Given, When, Then} from "cucumber";
import {HtmlFormTestPage} from "../../pages/htmlFormTestPage";
import {assert} from "chai";
import {browser, ExpectedConditions as EC} from "protractor";
import {fail} from "assert";

const htmlFormTestPage: HtmlFormTestPage = new HtmlFormTestPage();

// WHEN
When(/^I enter "([^"]*)" in "([^"]*)" field$/, async (text, option) => {
    await browser.wait(EC.visibilityOf(htmlFormTestPage.formContainer));
    switch(option) {
        case "username" :
            await browser.wait(EC.visibilityOf(htmlFormTestPage.usernameInput));
            await htmlFormTestPage.enterUsername(text);
            break;
        case "password" :
            await browser.wait(EC.visibilityOf(htmlFormTestPage.passwordInput));
            await htmlFormTestPage.enterPassword(text);
            break;
        case "textarea comment" :
            await browser.wait(EC.visibilityOf(htmlFormTestPage.commentTextArea));
            await htmlFormTestPage.enterComment(text);
            break;
        default:
            fail("Element type not found");
            break;
    }
});

When(/^I click on "([^"]*)" button$/, async (buttonText) => {
    await htmlFormTestPage.clickOnSubmitButton();
});

When(/^I select checkbox "([^"]*)" in checkbox items section$/, async (option) => {
    await htmlFormTestPage.selectCheckboxByText(option);
    await browser.sleep(4000);
});

When(/^I deselect all the option$/, async () => {
    await htmlFormTestPage.cleanAllOptions();
    await browser.sleep(3000);
});

When(/^I select "([^"]*)" from (dropdown|multiple selection)$/,  async (option, type) => {
    await htmlFormTestPage.selectSelectionOption(option);
    await browser.sleep(3000);
});

When(/^I deselect all options in multiple selects value$/, async () => {
    await htmlFormTestPage.deselectAllOptions();
});


Then(/^I validate the page title is "([^"]*)"$/, async (title) => {
    assert.strictEqual(await htmlFormTestPage.getPageTitleText(), title);
});