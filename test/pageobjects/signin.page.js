const { By, until } = require('selenium-webdriver');
const Base = require('./Base');

class SignInPage extends Base {
    constructor(driver) {
        super(driver);

        this.enterUserNameLocator = By.id("nombreUsuario");
        this.enterKeyLocator = By.id("clave");
        this.registerEnterLocator = By.xpath("//span[@class='ui-button-text ui-c']");
        this.registerGoOut = By.xpath("//span[@class='ui-button-text ui-c' and text()='Salir']");
        this.registerMenu = By.xpath("//span[@class='ui-button-icon-left ui-icon ui-c pi pi-bars']");
    }

    async signIn(user, key) {
        await this.type(user, this.enterUserNameLocator);
        await this.type(key, this.enterKeyLocator);
        await this.click(this.registerEnterLocator);
    }
}

module.exports = SignInPage; // Exporta la clase para poder importarla en otros archivos
