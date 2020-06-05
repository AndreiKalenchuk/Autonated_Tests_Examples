import { expect } from "chai";
import { assert } from "chai";
import AlertPage from "./AlertPage";

describe("JS ALERT HANDLER", () => {
  before("open a page", () => {
    browser.url("http://the-internet.herokuapp.com/javascript_alerts");
  });

  it("click on Click for JSAlert Btn ", () => {
    AlertPage.jsAlertBtn.click();
    browser.waitUntil(() => {
      return assert.equal(
        "I am a JS Alert",
        AlertPage.getAlertTextMsg(),
        "Wrong Alert Msg"
      );
    });
    browser.acceptAlert();
    expect("You successfuly clicked an alert", "Wrong conformation Msg").eq(
      AlertPage.getConformationMsg()
    );
  });

  it("click on Confirm Btn ", () => {
    AlertPage.jsConfirmBtn.click();
    browser.waitUntil(() =>
      expect("I am a JS Confirm", "Wrong Alert Msg").eq(
        AlertPage.getAlertTextMsg()
    ));
    browser.dismissAlert();
    expect("You clicked: Cancel", "Wrong conformation Msg").eq(
      AlertPage.getConformationMsg()
    );
  });

  it("click on Prompt Btn ", () => {
    const alertText = "Hello";
    AlertPage.jsPromptBtn.click();
    browser.waitUntil(() => {
      return expect("I am a JS prompt", "Wrong Alert Msg").eq(
        AlertPage.getAlertTextMsg()
      );
    });
    browser.sendAlertText(alertText);
    browser.acceptAlert();
    expect(`You entered: ${alertText}`, "Wrong conformation Msg").eq(
      AlertPage.getConformationMsg()
    );
  });
});
