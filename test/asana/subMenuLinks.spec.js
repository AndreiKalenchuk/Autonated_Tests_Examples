import {expect} from "chai";
import HomePage from "./_page/HomePage";
import {
    homeURL,
    homePageTitle,
    subMenuDropDownLinks
} from "./_data/homePageData";

describe("SUB MENU DROP DOWN LINKS", () => {
    before("Go to asana verify url", () => {
        browser.maximizeWindow();
        HomePage.open(homeURL);
        browser.waitUntil(
            () => expect(browser.getTitle()).eq(homePageTitle),
            10,
            "Wrong title"
        );
    });
    it("verify count of sub menu drop down links", () => {
        HomePage.whyAsanaBtnLink.click();
        browser.waitUntil(() =>
            expect(HomePage.subMenuDropDownLinksList.length, 'Quantity of subMenuLinks is not correct').eq(
                subMenuDropDownLinks.count
            )
        );
    });

    it("all links redirect to correct page", () => {
        let nextSubMenu = HomePage.solutionsBtnLink;
        HomePage.subMenuDropDownLinksList.forEach(el => {
            if (!el.isClickable()) {
                nextSubMenu.click();
                nextSubMenu = HomePage.resourcesBtnLink;
            } else if (!el.isClickable()) {
                nextSubMenu.click();
            }
            let url = el.getAttribute("href");
            el.click();
            expect(browser.getUrl()).eq(url);
            HomePage.open(homeURL);
            HomePage.whyAsanaBtnLink.click();
            browser.waitUntil(
                () => expect(HomePage.subMenuActive.isDisplayed()).true,
                5000,
                "No sub menu dropped down"
            );
        });
    });

    it("verify API response on all sub menu links", async () => {
        const el = HomePage.subMenuDropDownLinksList;
        for (let i = 0; i < el.length; i++) {
            const response = await axios({
                method: "get",
                url: el[i].getAttribute("href")
            })
                .then(res => res)
                .catch(err => err);
            expect(response.status).eq(200);
        }
    });
});
