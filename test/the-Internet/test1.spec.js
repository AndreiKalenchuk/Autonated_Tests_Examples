import { expect } from "chai";
import Page from "./Page";
const num = 20;
describe ('THE INTERNET',() => {
    before('open page', () => {
        Page.open;
    });

    it ('add element verify', () => {
        expect(num, 'incrementation Delete Btn error')
            .eq(Page.incrementBtnVerificator(num));
    });

    it('remove all Delete Btn length equal 0', () => {
        browser.refresh();
        expect(0, 'length NOT equal 0')
            .eq(Page.decrementBtnVerificator(num))
    });

});
