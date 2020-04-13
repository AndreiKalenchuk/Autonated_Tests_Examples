export default class ElementUtils {
​
    getElement(testId) {
        return browser.$('testId');
    }
​
    elementsAreLoaded(elements, timeout = 10000) {
        browser.waitUntil(() => {
            return this.getMissingElements(elements).length === 0;
        }, timeout, 'Items missing: ' +
            `${this.getMissingElements(elements)}. \n` +
            `Current url: ${browser.getUrl()}`);
        return true;
    }
​
    getMissingElements(elements) {
        return elements
            .filter((element) => !element.isVisible())
            .map((element) => element.selector);
    }
}
