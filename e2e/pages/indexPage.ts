import {browser,by,element,ElementFinder,ExpectedConditions as EC} from "protractor";

export class IndexPage {
    public htmlFormExample: ElementFinder;

    constructor() {
        this.htmlFormExample = element(by.id("htmlformtest"));
    }

    public go() {
        return browser.get("/styled/index.html")
    }

    public async clickOnHtmlFormExample() {
        await browser.wait(EC.elementToBeClickable(this.htmlFormExample));
        await this.htmlFormExample.click();
    }
}