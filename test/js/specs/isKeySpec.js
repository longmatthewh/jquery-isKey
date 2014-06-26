describe('isKey utility plugin', function() {
    const MAIN_SELECTOR = '#main';

    beforeEach(function() {
        var htmlContent = '<div id="main"></div>';
        $('body').append(htmlContent);
    });

    afterEach(function() {
        $(MAIN_SELECTOR).remove();
    });

    it('dummy test', function() {
        expect(true).toBe(true);
    });
});