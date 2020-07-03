class Page {
    scrollThroughAllProductsImages() {
        const el = $$(".item.imageThumbnail");
        for (let i = 0; i < el.length; i++) {
            el[i].waitForClickable().click();
        }
    }

    get sortByReview() {
        const sortByBtn = $('//span[@id="a-autoid-0"]');
        const sortOption = $('[id="s-result-sort-select_3"]');
        sortByBtn.waitForClickable();
        sortByBtn.click();
        sortOption.waitForClickable();
        sortOption.click();
    }

    addToCart() {
        const addtoCartBtn = $('[id="add-to-cart-button"]');
        const itemTitle = $('[id="productTitle"]');
        const noThksBtn = $('[id="siNoCoverage-announce"]');
        itemTitle.scrollIntoView();
        browser.pause(1000);
        addtoCartBtn.click();
        browser.pause(1500);

        if (noThksBtn.isDisplayed()) {
            noThksBtn.click();
            browser.pause(1000);
        }
    }

    sponsoredCarouselClickNumber(num) {
        const el = $(
            '//h2[contains(text(),"Sponsored products related to this item")]'
        );
        const elCaruselList = $$(".a-carousel-card");
        el.scrollIntoView();
        elCaruselList[num].click();
    }

    deleteFromCart(num) {
        const el = $$('[value="Delete"]');
        el[num - 1].click();
    }

    get printPriceOriginal() {
        const priceOriginal = $(
            "//span[@class='priceBlockStrikePriceString a-text-strike']"
        );
        return console.log("Original price : " + priceOriginal.getText());
    }

    get printPriceSale() {
        const priceSale = $('//span[@id="priceblock_ourprice"]');
        return console.log("Discount price : " + priceSale.getText());
    }

    get printASIN() {
        const el = $('//th[contains(text(),"ASIN")]/parent::tr/td');
        return console.log("ASIN # : " + el.getText());
    }

    get printItemCustomerReview() {
        const el = $$("#acrCustomerReviewText")[0];
        return console.log("Customer ratings # : " + el.getText());
    }

    get printSellerName() {
        const el = $('//a[@id="bylineInfo"]');
        return console.log("Seller Name : " + el.getText());
    }

    loginFromHomePage() {
        const el = $('[data-nav-role="signin"]');
        el.waitForDisplayed();
        el.click();
        const email = $('[id="ap_email"]');
        const contin = $('[id="continue"]');
        email.setValue('');
        contin.waitForClickable();
        contin.click();

        const pass = $('[id="ap_password"]');
        const contin2 = $('[id="signInSubmit"]');
        pass.setValue('');
        contin2.waitForClickable();
        contin2.click();
    }
}

export default new Page();
