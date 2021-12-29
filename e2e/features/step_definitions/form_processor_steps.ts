import { assert, expect } from "chai";
import {Then} from "cucumber";
import { FormProcessorPage } from "../../pages/formProcessorPage";

const formProcessorPage: FormProcessorPage = new FormProcessorPage();

Then(/^"([^"]*)" message is displayed$/, async (expectedText) => {
    let text = await formProcessorPage.getExplanationText();
    assert(text.includes(expectedText));
});

Then(/^"([^"]*)" submitted value is "([^"]*)"$/, async (option, value) => {
    switch (option) {
        case "username" :
            assert.strictEqual(await formProcessorPage.getUsernameText(), value);
            break;
        case "password":
            assert.strictEqual(await formProcessorPage.getPasswordValue(), value);
            break;
        case "textarea comment":
            assert.strictEqual(await formProcessorPage.getCommentValue(), value);
            break;
    }
});
