const changeStepOptions = '[name="negative"]';
const LLFfield = '[name="lower"]';
describe('LLF field', () => {
    it('spinner UP', () => {
        browser.url('https://likejean.github.io/homework-5/')
        $(changeStepOptions).click();
        const xOffset = 160
        const yOffset = 15
        $('[name="lower"]').moveTo({xOffset, yOffset});
        browser.positionClick();
        expect($(LLFfield)).toHaveValue('2')
    })
})