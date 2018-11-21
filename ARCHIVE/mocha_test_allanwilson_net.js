var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');

test.describe('Test allanwilson.net', function() {
  test.it('should open allanwilson.net', function() {
    this.timeout(15000)
    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
    driver.get('http://allanwilsongithub.github.io/');
    driver.getTitle().then(function(title) {
            console.log('Current Page Title: ' + title);
    });

    driver.quit();
  });
  test.it('should open all main links', function() {
    this.timeout(15000)
    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
    driver.get('http://allanwilsongithub.github.io/');
    var linkElements = ["Welcome", "Sports and Hobbies", "Cookbook", "Pictures", "Suomea", "Portfolio", "Contact"];
    linkElements.forEach(function (item) {
          console.log("Checking link: " + item);
          element = driver.findElement(webdriver.By.linkText(item)).click();
    });

    driver.quit();
  });
});
