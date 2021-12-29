import {
    browser,
    by,
    element, ElementArrayFinder,
    ElementFinder,
    ExpectedConditions as EC,
} from "protractor";

export class HtmlFormTestPage {
    public pageTitle: ElementFinder;
    public formContainer: ElementFinder;
    public usernameInput: ElementFinder;
    public passwordInput: ElementFinder;
    public commentTextArea: ElementFinder;
    public submitButton: ElementFinder;
    public checkboxes: ElementArrayFinder;
    public multipleSelect: ElementArrayFinder;

    constructor() {
        this.usernameInput = element(by.name("username"));
        this.passwordInput = element(by.name("password"));
        this.commentTextArea = element(by.name("comments"));
        this.formContainer = element(by.name("HTMLFormElements"));
        this.pageTitle = element(by.tagName("h1"));
        this.submitButton = element(by.buttonText("submit"));
        this.checkboxes = element.all(by.name("checkboxes[]"));
        this.multipleSelect = element.all(by.css("[name='multipleselect[]'] > option"));
    }

    public go() {
        return browser.get("/styled/basic-html-form-test.html");
    }

    public async getPageTitleText() {
        await browser.wait(EC.visibilityOf(this.pageTitle));
        return this.pageTitle.getText();
    }

    public async enterUsername(text) {
        await this.usernameInput.clear();
        return this.usernameInput.sendKeys(text);
    }

    public async enterPassword(text) {
        await this.passwordInput.clear();
        return this.passwordInput.sendKeys(text);
    }

    public async enterComment(text) {
        await this.commentTextArea.clear();
        return this.commentTextArea.sendKeys(text);
    }

    public async clickOnSubmitButton() {
        await browser.wait(EC.visibilityOf(this.submitButton));
        return this.submitButton.click();
    }

    public async selectCheckboxByText(text) {
        const size = await this.checkboxes.count();
        for (let i=0; i<size; i++)  {
            const checkbox = this.checkboxes.get(i);
            const checkboxText = await checkbox.getAttribute("value");
            if (checkboxText.includes(text)) {
                await checkbox.click();
            }
        }
    }

    public async cleanAllOptions() {
        const size = await this.checkboxes.count();
        for(let i=0; i<size; i++) {
            const checkbox = this.checkboxes.get(i);
            const isCheckboxSelected = await checkbox.isSelected();
            if (isCheckboxSelected) {
                await checkbox.click();
            }
        }
    }

    public async selectSelectionOption(option) {
        const selectionOption = element(by.cssContainingText('option', option));
        if(!await selectionOption.isSelected()) {
            await selectionOption.click();
        }
    }

    public async deselectAllOptions() {
        await this.multipleSelect.each(async (multipleSelectOption) => {
            if (await multipleSelectOption.isSelected()) {
                await multipleSelectOption.click();
            }
        });
    }
}
