import { expect } from "chai";
import HomePage from "./_page/HomePage";
import {
  homeURL,
  homePageHeader,
  homePageTitle,
  menuLinksTextArr
} from "./_data/homePageData";

describe("HOME PAGE MENU LINKS", () => {
  before("Go to asana verify url", () => {
    browser.maximizeWindow();
    HomePage.open(homeURL);
    browser.waitUntil(
      () => expect(browser.getTitle()).eq(homePageTitle),
      10,
      "Wrong title"
    );
  });

  it("should verify text", () => {
    for (let i = 0; i < HomePage.menuLinksList.length; i++) {
      expect(HomePage.menuLinksList[i].getText()).eq(menuLinksTextArr[i]);
    }
  });

  it("should verify it is Clickable", () => {
    HomePage.menuLinksList.forEach(el => expect(el.isClickable()).true);
  });

  it("click on it should drop down sub menu links", () => {
    const el = HomePage.menuLinksList;
    for (let i = 0; i < el.length - 1; i++) {
      el[i].click();
      browser.pause(2000)
      browser.waitUntil(
        () => expect(HomePage.subMenuActive.isEnabled()).true,
        5000,
        "No sub menu dropped down"
      );
      browser.refresh();
    }
  });
});
