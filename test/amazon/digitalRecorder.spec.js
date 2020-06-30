import {expect} from "chai";
import Page from "./Page";

const searchValue = "voice recorder";

describe(" voice recorder ", () => {
    before("open amazom.com", () => {
        browser.maximizeWindow();
        browser.url("https://www.amazon.com/");
    });

    it("should verify page title", () => {
        expect(browser.getTitle()).eq(
            "Amazon.com: Online Shopping for " +
            "Electronics, Apparel, Computers, Books, DVDs & more"
        );
    });

    it("should type a searching product in search field ", () => {
        const el = $('//input[@id="twotabsearchtextbox"]');
        el.setValue(searchValue);
        browser.pause(1000);
    });

    it('should select department "Electronics" ', () => {
        const el = $('//select[@id="searchDropdownBox"]');
        const electronicsDropDown = $('[value="search-alias=electronics"]');
        el.click();
        browser.pause(1000);
        electronicsDropDown.click();
    });

    it("should click search button", () => {
        const submitBtn = $('[type="submit"]');
        browser.pause(500);
        submitBtn.click();
    });

    it("should sort by review", () => {
        Page.sortByReview;
    });

    it('should select "free shipping by Amazon"', () => {
        const el = $(
            '//div[@id="deliveryRefinements"]//i[@class="a-icon a-icon-checkbox"]'
        );
        el.waitForClickable();
        el.click();

        //   checkBox[1].click();
        browser.pause(1000);
    });

    it("scroll into entire page", () => {
        for (let i = 1; i < 6; i++) {
            $(`//div[@data-index="${i}"]`).scrollIntoView();
            browser.pause(1400);
        }
    });

    it("click on amazons-choice result", () => {
        const amznChoice = $('[id="B06XFTWCBJ-amazons-choice"]');
        amznChoice.scrollIntoView();
        console.log("First Item search result -- 5");
        browser.pause(1000);
        amznChoice.click();
    });

    it("print regular price, discount prices, ASIN ...", () => {
        Page.printPriceOriginal;
        Page.printPriceSale;
        Page.printASIN;
        Page.printItemCustomerReview;
        Page.printSellerName;
    });

    it("scroll all images", () => {
        Page.scrollThroughAllProductsImages();
    });

    it("scrolle down page and back", () => {
        const el = $('//a[contains(text(),"New & Used (28) from")]');
        const el1 = $('//h2[contains(text(),"From the manufacturer")]');
        const el2 = $('//h3[contains(text(), "Feature")]');
        const el3 = $('[id="comparison_table_title"]');
        const el4 = $('//h2[contains(text(), "Product information")]');
        el.scrollIntoView();
        browser.pause(1500);
        el1.scrollIntoView();
        browser.pause(1500);
        el2.scrollIntoView();
        browser.pause(1500);
        el3.scrollIntoView();
        browser.pause(1500);
        el4.scrollIntoView();
        browser.pause(1500);
        //scroll back
        el3.scrollIntoView();
        browser.pause(200);
        el2.scrollIntoView();
        browser.pause(200);
        el1.scrollIntoView();
        browser.pause(200);
        el.scrollIntoView();
        browser.pause(200);
    });

    it("click add to cart", () => {
        Page.addToCart();
    });

    it("go back", () => {
        browser.back();
    });

    it("click on sponsored Carousel products #4", () => {
        Page.sponsoredCarouselClickNumber(4);
    });

    it("scroll images", () => {
        Page.scrollThroughAllProductsImages();
    });

    it("add to cart", () => {
        Page.addToCart();
    });

    it("go to card", () => {
        const el = $('[id="hlb-view-cart-announce"]');
        el.click();
        browser.pause(1500);
    });

    it("delete item", () => {
        browser.pause(1000);
        Page.deleteFromCart(2);
    });

    it("click proceed to checkout", () => {
        const el = $('[name="proceedToRetailCheckout"]');
        el.click();
        browser.pause(2000);
    });
});
