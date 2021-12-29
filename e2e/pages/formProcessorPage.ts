import {
    browser,
    by,
    element,
    ElementFinder,
    ExpectedConditions as EC,
} from "protractor";

export class FormProcessorPage {
    public explanationText: ElementFinder;
    public usernameValue: ElementFinder;
    public passwordValue: ElementFinder;
    public commentValue: ElementFinder;

    constructor() {
        this.explanationText = element(by.className("explanation"));
        this.usernameValue = element(by.id("_valueusername"));
        this.passwordValue = element(by.id("_valuepassword"));
        this.commentValue = element(by.id("_valuecomments"));
    }

    public go() {
        return browser.get("/styled/the_form_processor.php");
    }

    public async getExplanationText() {
        await browser.wait(EC.visibilityOf(this.explanationText));
        return this.explanationText.getText();
    }

    public async getUsernameText() {
        await browser.wait(EC.visibilityOf(this.usernameValue));
        return this.usernameValue.getText();
    }

    public async getPasswordValue() {
        await browser.wait(EC.visibilityOf(this.passwordValue));
        return this.passwordValue.getText();
    }

    public async getCommentValue() {
        await browser.wait(EC.visibilityOf(this.commentValue));
        return this.commentValue.getText();
    }
}
