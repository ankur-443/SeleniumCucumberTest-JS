export default function () {
  this.After(function () {
    return this.driver.quit();
  });
}
