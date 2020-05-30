const expect = require('chai').expect;
const fetch = require('node-fetch');

describe('broken link test', () => {
    it('should check the page for broken links', async () => {
        browser.url('http://the-internet.herokuapp.com/status_codes');

        // get all the links on the page
        const links = $$('a');

        const urls = links.map(link => link.getAttribute('href'));

        const requests = urls.map(url => fetch(url));

        const responses = await Promise.all(requests);

        const statusCodes = responses.map(response => response.status);

        statusCodes.forEach(statusCode => {
            expect(statusCode, 'Status code not below 400').below(400);
        })
    });
});