class Page {
  open(url) {
    browser.url(url);
  }

  get imageBtn() {
    return $('[aria-label="Search by image"]');
  }

  get uploadImage() {
    return $('//a[text() = "Upload an image"]');
  }

  get uploadFileBtn() {
    return $('[id="awyMjb"]');
  }

  get searchValue() {
    return $('//a[@class="Gj7ine"]/div');
  }
}
export default new Page();
