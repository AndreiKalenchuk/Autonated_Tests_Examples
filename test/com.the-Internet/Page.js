class Page {

    open(path) {
        browser.url('http://the-internet.herokuapp.com' + path)
    }
}
export default Page;