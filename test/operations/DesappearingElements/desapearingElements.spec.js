import { expect } from "chai";

describe("Disappearing Elements", () => {
  before("open page", () => {
    browser.url("http://the-internet.herokuapp.com/disappearing_elements");
    expect("The Internet").eq(browser.getTitle());
  });

  it("should reload page until length of linksBtn will be equal 5", () => {
    let linksList = $$("ul>li>a");
    browser.pause(2000);

    while (linksList.length !== 5) {
      browser.refresh();
      linksList = $$("ul>li>a");
    }

    expect(5, "There is not a 5 links on a page").eq(linksList.length);
  });

});
