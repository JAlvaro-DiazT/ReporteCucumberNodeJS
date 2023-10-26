const { Builder, By, Key, until } = require('selenium-webdriver');
class Base {
    constructor(driver) {
        this.driver = driver;
    }
    async finElement(locator) {
        return this.driver.findElement(locator);
    }
    async type(inputText, locator) {
        const element = await this.finElement(locator);
        await element.clear();
        await element.sendKeys(inputText);
    }
    async click(locator) {
        const element = await this.finElement(locator);
        await element.click();
    }
    async isElementVisible(locator) {
        try {
            const element = await this.finElement(locator);
            await this.driver.wait(until.elementIsVisible(element));
            return await element.isDisplayed();
        } catch (error) {
            if (error.name === 'NoSuchElementError') {
                return false;
            } else {
                throw error;
            }
        }
    }
}
module.exports = Base;