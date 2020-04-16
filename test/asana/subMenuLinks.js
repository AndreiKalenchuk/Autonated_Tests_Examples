import { expect } from "chai";
import HomePage from "./_page/HomePage";
import {
  homeURL,
  homePageHeader,
  homePageTitle,
  subMenuDropDownLinks
} from "./_data/homePageData";

describe("SUB MENU DROP DOWN LINKS", () => {
  before("Go to asana verify url", () => {
    browser.maximizeWindow();
    HomePage.open(homeURL);
    browser.waitUntil(
      () => expect(browser.getTitle()).eq(homePageTitle),
      10,
      "Wrong title"
    );
  });
  it("verify count of sub menu drop down links", () => {
    HomePage.whyAsanaLink.click();
    browser.waitUntil(() =>
      expect(HomePage.subMenuDropDownLinksList.length).eq(
        subMenuDropDownLinks.count
      )
    );
  });

  it("all links redirect to correct page", () => {
    HomePage.subMenuDropDownLinksList.forEach(el => {
      let url = el.getAttribute("href");
      el.click();
      expect(browser.getUrl()).eq(url);
      HomePage.open(homeURL);
      HomePage.whyAsanaLink.click();
    });
  });

  it("verify API response on all sub menu links", async () => {
    const el = HomePage.subMenuDropDownLinksList;
    for (let i = 0; i < el.length; i++) {
       const response = await axios({
        method: "get",
        url: el[i].getAttribute("href")
      })
        .then(res => res)
        .catch(err => err);
      expect(response.status).eq(200);
    }
  });
});
