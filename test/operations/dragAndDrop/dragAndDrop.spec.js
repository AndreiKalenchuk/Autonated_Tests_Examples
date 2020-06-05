import { expect } from "chai";

describe("Drag And Drop element", () => {
  before("open page", () => {
    browser.url("http://the-internet.herokuapp.com/drag_and_drop");
    expect("The Internet").eq(browser.getTitle());
  });

  it("should drag element A to element B", () => {
    const elementA = $("#column-a");
    const target = $("#column-b");
    const firstColumn = $$('[id="columns"]>div>header')[0];
    elementA.dragAndDrop(target);
    expect("B").eq(firstColumn.getText());
  });
});
