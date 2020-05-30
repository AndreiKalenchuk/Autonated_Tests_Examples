class AlertPage {

    get jsAlertBtn() {
        return $('[onclick="jsAlert()"]')
    }

    get jsConfirmBtn() {
        return $('[onclick="jsConfirm()"]')
    }

    get jsPromptBtn() {
        return $('[onclick="jsPrompt()"]')
    }

    getConformationMsg() {
       return $('#result').getText();
    }

    getAlertTextMsg() {
        return browser.getAlertText();
    }
} export default new AlertPage();