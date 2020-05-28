class Page {
  get addElementBtn() {
    return $("//button[contains(text(),'Add Element')]");
  }

  get listDeleteBtns() {
    return $$(".added-manually");
  }

  get deleteBtn() {
    return $("#elements button");
  }

  get open() {
    return browser.url("http://the-internet.herokuapp.com");
  }

  get startBtn() {
    return $("#start button");
  }

  get finish() {
    return $("#finish");
  }

  get loading() {
    return $("#loading");
  }

  get enabledDesabledInput() {
    return $("#input-example input");
  }

  get disableBtn() {
    return $("#input-example button");
  }

  get checkBox() {
    return $("#checkbox");
  }

  get removeBtn() {
    return $("#checkbox-example button");
  }
  incrementBtnVerificator(int) {
    for (let i = 1; i <= int; i++) {
      this.addElementBtn.click();
    }
    return this.listDeleteBtns.length;
  }

  decrementBtnVerificator(int) {
    for (let i = 1; i <= int; i++) {
      this.addElementBtn.click();
      this.deleteBtn.waitForDisplayed();
      this.deleteBtn.click();
    }
    return this.listDeleteBtns.length;
  }

  openLink(el) {
    $('//a[contains(text(),"' + el + '")]').click();
  }
}
export default new Page();

const linksList = {
  dynamicLoading: "Dynamic Loading",
  example1: "Example 1: Element on page that is hidden",
  example2: "Example 2: Element rendered after the fact",
  dynamicControls: "Dynamic Controls"
};

export { linksList };
