const { When, Then, And, Given, Before} = require("@cucumber/cucumber");
const SignInPage = require("../../test/pageobjects/signin.page");
const assert = require("assert");
const fs = require('fs');
const Hook = require("./hook");
let signInPage;
let driver;

Before(async function () {
    driver = Hook.getDriver();
    signInPage = new SignInPage(driver);
});
Given(/^The user is on the login page$/, async function () {});
When(/^The user enters their username "([^"]*)" and password "([^"]*)"$/, async function (param1,param2) {
    await signInPage.signIn(param1, param2);
});
Then(/^The user should see the Logout button and Menu button$/, async function () {
    const isMenuVisible = await signInPage.isElementVisible(signInPage.registerMenu);
    const isGoOutVisible = await signInPage.isElementVisible(signInPage.registerGoOut);
    assert.strictEqual(isMenuVisible && isGoOutVisible, true);
});
