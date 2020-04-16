import { expect } from "chai";
import HomePage from "./_page/HomePage";
import {
  tryForFreeBtn,
  homeURL,
  homePageHeader,
  homePageTitle
} from "./_data/homePageData";

describe("ASANA AB TESTING TRY FOR FREE BTN", () => {
  before("Go to asana verify url", () => {
    browser.maximizeWindow();
    HomePage.open(homeURL);
    browser.waitUntil(
      () => expect(browser.getTitle()).eq(homePageTitle),
      10,
      "Wrong title"
    );
  });

  it("verify all 6 buttons exist", () => {
    expect(HomePage.tryForFreeBtnList.length).eq(tryForFreeBtn.countTotal);
  });

  it("verify all buttons text", () => {
    HomePage.tryForFreeBtnList.forEach(el =>
      expect(el.getText()).oneOf([tryForFreeBtn.textA, tryForFreeBtn.textB])
    );
  });

  it("verify only 2 buttons Visible on the page body", () => {
    let count = 0;
    HomePage.tryForFreeBtnList.forEach(el => {
      if (el.isDisplayed()) count++;
    });
    expect(count).eq(tryForFreeBtn.countVisible);
  });

  it("all buttons redirect to Create Account page", () => {
    HomePage.tryForFreeBtnList.forEach(el => {
      if (el.isDisplayed()) {
        let url = el.getAttribute("href");
        el.click();
        expect(browser.getUrl()).eq(url);
        browser.back();
      }
    });
  });
});
