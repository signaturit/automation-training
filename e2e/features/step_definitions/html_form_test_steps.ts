import {Given, When, Then} from "cucumber";
import {HtmlFormTestPage} from "../../pages/htmlFormTestPage";
import {assert} from "chai";
import {strictEqual} from "assert";
import {browser} from "protractor";

const htmlFormTestPage: HtmlFormTestPage = new HtmlFormTestPage();

Then(/^I validate the page title is "([^"]*)"$/, async (title) => {
    assert.strictEqual(await htmlFormTestPage.getPageTitleText(), title);
});