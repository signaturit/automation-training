import {Given} from "cucumber";
import {IndexPage} from "../../pages/indexPage";

const indexPage: IndexPage = new IndexPage();

Given(/^I am on the index page$/, async() => {
    await indexPage.go();
});

Given(/^I click on "([^"]*)" option$/, async (option) => {
    if (option === "HTML form example") {
        await indexPage.clickOnHtmlFormExample();
    }
})