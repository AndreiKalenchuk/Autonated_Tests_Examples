import Page from "./Page";
import { expect } from "chai";

describe("CLIENT SIDE EXECUTE", () => {
  beforeEach("open home page", () => {
    Page.open;
  });
  it("change a heading styl", () => {
    const newTitle = "Some new Title";
    browser.pause(1000);
    browser.execute(
      (newTitle, color) => {
        document.querySelector(".heading").backgroundColor = "red";
        document.querySelector(".heading").style.color = color;
        document.querySelector(".heading").textContent = newTitle;
        document.querySelector(".heading").remove();
      },
      newTitle,
      "orange"
    );
    browser.pause(1000);
  });

  it("return style value", () => {
    const output = browser.execute(() => {
      return document.querySelector(".heading").textContent;
    });
    expect(output).eq("Welcome to the-internet");
  });

  it("verify CSS color", () => {
    const header = $(".heading");
    const color = header.getCSSProperty("color");
    expect(color.value).eq("rgba(34,34,34,1)");
  });
});
