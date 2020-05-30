import { expect } from "chai";

describe("mouse move simulation right click JS execute", () => {
  it("move to el right mouse click", () => {
    browser.url("http://the-internet.herokuapp.com/context_menu");
    const el = $("#hot-spot");
    el.moveTo();
    el.click({ button: "right" });
  });
});
