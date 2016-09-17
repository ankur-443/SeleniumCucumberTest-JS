// const seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {
  this.Given(/^I am on the google page$/, function() {
    const baseUrl = this.options.baseUrl;
    return this.driver.get(baseUrl);
  });

  this.When(/^I click on "([^"]*)"$/, function (text) {
    this.waitForElement({ name: text }, 10000);
    return this.driver.findElement({ name: text }).then(element => element.click());
  });

  this.Then(/^I should see google page with "([^"]*)"$/, function (text) {
    const xpath = "//*[@id='logo']";
    this.waitForElement({ xpath }, 0);
    // this.driver.findElement({ xpath }).then(element => element.getText());
    return this.driver.findElement({ xpath }).then(function (element) {
      const xx = element.getAttribute("title");
      xx.then(function(text){
        console.log("Title Text ----   ", text);
      });
    });
  });

  this.When(/^I search on page for "([^"]*)"$/, function (text, dataTable) {
    console.log("Table - ", dataTable.hashes());
    const xpath = "//*[@id='searchinput']";
    this.waitForElement({ xpath }, 10000);
    this.driver.findElement({ xpath }).then(function(element) {
      element.sendKeys(text);
    });
    const xpath1 = "//*[@id='searchbtn']";
    this.driver.findElement({ xpath: xpath1 }).then(element => element.click())
    return this.driver.getCurrentUrl().then(function (text) {
      console.log('URL Text ----- ', text);
    });
  });
};
