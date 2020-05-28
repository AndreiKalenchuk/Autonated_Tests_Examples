import { expect } from "chai";
import Page from "./Page";
import { linksList } from "./Page";
const input = "String";

describe("WAIT FOR ELEMENT", () => {
  beforeEach("open page", () => {
    Page.open;
  });
  it("wait for load bur appear Example 1 ", () => {
    Page.openLink(linksList.dynamicLoading);
    Page.openLink(linksList.example1);
    Page.startBtn.click();
    // wait for NOT Displayed load bur
    Page.loading.waitForDisplayed(undefined, true);
    // assertion after load bur disappear
    expect("Hello World!").eq(Page.finish.getText());
  });

  it("wait for load bur appear Example 2 ", () => {
    Page.openLink(linksList.dynamicLoading);
    Page.openLink(linksList.example2);
    Page.startBtn.click();
    expect("Hello World!").eq(Page.finish.getText());
  });

  it("wait for Enabled", () => {
    Page.openLink(linksList.dynamicControls);
    expect(false, "Not Clickable before click Btn").eq(
      Page.enabledDesabledInput.isClickable()
    );
    Page.disableBtn.click();
    Page.enabledDesabledInput.waitForEnabled();
    Page.enabledDesabledInput.setValue(input);
    expect(input).eq(Page.enabledDesabledInput.getValue());
  });

  it("wait for Exist", () => {
    Page.openLink(linksList.dynamicControls);
    expect(Page.checkBox.isExisting(), "checkBox NOT exist first").true;
    Page.removeBtn.click();
    Page.loading.waitForDisplayed(undefined, true);
    expect(Page.checkBox.isExisting(), "checkBox NOT exist second").false;
  });
});
