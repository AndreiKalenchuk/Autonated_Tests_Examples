
class Notification {
    successMsgDisplayed() {
        browser.waitUntil(() => $('.notification-success').isDisplayed(),5000, 'Wrong / no notification displayed');
    }

    failMsgDisplayed() {
        browser.waitUntil(() => $('.notification-error').isDisplayed(),5000, 'Wrong / no notification displayed')
    }

    get title() {
        return $('//h4[@class="notification-title"]');
    }

    get invalidMsg() {
        return $('//div[contains(@class, "form")]//div[contains(text(), "Invalid")]');
    }

}

export default new Notification();
