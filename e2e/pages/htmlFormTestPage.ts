import {browser,by,element,ElementFinder,ExpectedConditions as EC} from "protractor";

export class HtmlFormTestPage{
    public pageTitle: ElementFinder;

    constructor() {
        this.pageTitle = element(by.tagName("h1"));
    }

    public async getPageTitleText() {
        await browser.wait(EC.visibilityOf(this.pageTitle));
        return this.pageTitle.getText();
    }
}