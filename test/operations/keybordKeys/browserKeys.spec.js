const changeStepOptions = '[name="negative"]';
const LLFfield = '[name="lower"]';
describe('LLF field', () => {
    it('spinner UP', () => {
        browser.url('https://likejean.github.io/homework-5/')
        $(changeStepOptions).click();
        const int = 2;
        $(LLFfield).setValue(int);
        browser.pause(2000);
        browser.keys("ArrowUp")
        browser.pause(2000);
        expect($(LLFfield)).toHaveValue((int + 1).toString())
    })
})