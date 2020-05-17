import { expect } from "chai";
import Page from "./Page"

describe(' Design verification', () => {

  before('open app set correct values', () => {
    browser.url("https://pachkovska.github.io/simple-counter/");
    Page.insertInputValuesMethod();
  });

  it('should verify', () => {
console.log(Page.numBtnList[1].getCSSProperty('background-color') + '..............');
    Page.numBtnList.forEach(el => expect(el.getCSSProperty('button.background-color')).eq('buttontext'))
  });


});