const { Builder, By, Key } = require("selenium-webdriver");
const { expect } = require("chai");
const driver = new Builder().forBrowser("chrome").build();
const searchTextList = ["Cotton", "Leather", "Maxi"];
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function runTest() {
  await driver.get("https://demo.evershop.io");
  await driver.manage().window().maximize();
  await driver.findElement(By.xpath("//a[@class='search__icon']")).click();
  const searchText = searchTextList[getRandomInteger(0, 2)];
  await driver
    .findElement(By.xpath("//input[@placeholder='Search']"))
    .sendKeys(searchText, Key.ENTER);
  const actualProductName = await driver
    .findElement(
      By.xpath("//a/div/h3[@class='product__list__name h5 font-medium']"),
    )
    .getText();
  console.log(`actualProductName: ${actualProductName}`);
  expect(actualProductName).to.include(searchText);
  console.log(`Expected: ${searchText}`);
  await driver.sleep(2000);
  await driver.quit();
}
runTest();
