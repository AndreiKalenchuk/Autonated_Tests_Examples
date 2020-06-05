import { expect } from "chai";

describe("MODAL WINDOW", () => {
  before("open page", () => {
    browser.url("http://the-internet.herokuapp.com/entry_ad");
    expect("The Internet").eq(browser.getTitle());
  });

  it("should waite until modal pop up and ckick close", () => {
    const modalTitle = $("div#modal h3");
    browser.waitUntil(() => modalTitle.isDisplayed());
    const handle1 = browser.getWindowHandle();
    const handlesList = browser.getWindowHandles();
    let handle2 = "";
    handlesList.forEach(el => {
      if (el !== handle1) {
        handle2 = el;
      }
    });
    browser.switchToWindow(handle2);
    expect("THIS IS A MODAL WINDOW", `didt't switch to second windows`).eq(
      modalTitle.getText()
    );
    const closeBtn = $(".modal-footer>p");
    closeBtn.click();
    browser.switchToWindow(handle1);
    expect("The Internet", "Wrong title").eq(browser.getTitle());
  });
});
