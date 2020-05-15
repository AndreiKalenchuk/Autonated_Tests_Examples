import { expect } from "chai";

import Page from "./Page";
import { title, filePath, fileName } from "./data";

describe("uploadFile in google", () => {
  before("go to google.imghp", () => {
    browser.maximizeWindow();
    Page.open("https://google.com/imghp");
  });

  it("verify title", () => {
    expect(title).eq(browser.getTitle());
  });

  it("should click on imageBtn", () => {
    browser.waitUntil(
      () => expect(Page.imageBtn.isDisplayed()).true,
      5000,
      "uploadImage isn't Clickable"
    );
    Page.imageBtn.click();
  });

  it("should click on uploadImage", () => {
    browser.waitUntil(
      () => expect(Page.uploadImage.isClickable()).true,
      5000,
      "uploadImage isn't Clickable"
    );
    Page.uploadImage.click();
  });

  it("upload file from desktop", () => {
    Page.uploadFileBtn.setValue(browser.uploadFile(filePath));
  });

  it("should verify file loaded", () => {
    expect(fileName).eq(Page.searchValue.getText());
  });
});
