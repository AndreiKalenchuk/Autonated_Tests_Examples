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

  it("should verify menu links text", () => {
    const el = HomePage.menuLinksList;
    for (let i = 0; i < el.length; i++) {
      expect(el[i].getText()).eq(menuLinksTextArr[i]);
    }
  });

  it("should verify menu links is Clickable", () => {
    HomePage.menuLinksList.forEach(el => expect(el.isClickable()).true);
  });

  it("click on menu links should drop down sub menu links", () => {
    const el = HomePage.menuLinksList;
    for (let i = 0; i < el.length; i++) {
      el[i].click();
      browser.waitUntil(() => {
        return expect(HomePage.subMenuActive.isEnabled()).true,
          5000,
          "No sub menu dropped down";
      });
      browser.refresh();
    }
  });
});
