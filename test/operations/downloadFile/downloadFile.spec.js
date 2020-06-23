describe('DOWNLOAD FILE', () => {

  it('should download file', () => {
    browser.url('http://the-internet.herokuapp.com/download');
    const file = $('//a[contains(text(),"some-file.txt")]')

  });
});