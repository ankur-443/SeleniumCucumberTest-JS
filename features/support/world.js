const webdriver = require('selenium-webdriver');
    // By = webdriver.By,
    // until = webdriver.until;

function CustomWorld(options) {
  this.options = options;

  this.driver = new webdriver.Builder()
    .forBrowser(options.browser)
    .build();

  this.By = webdriver.By;
  this.until = webdriver.until;
  // this.driver.manage().timeouts().implicitlyWait(200);

  // Returns a promise that resolves to the element
  this.waitForElement = (locator, timeout = 10000) => {
    const condition = webdriver.until.elementLocated(locator);
    return this.driver.wait(condition, timeout);
  };
}

export default function () {
  this.World = CustomWorld;
}
