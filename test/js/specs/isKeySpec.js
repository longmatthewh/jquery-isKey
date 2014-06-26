describe('isKey utility plugin', function() {
    const MAIN_SELECTOR = '#main';

    beforeEach(function() {
        var htmlContent = '<div id="main"></div>';
        $('body').append(htmlContent);
        $(MAIN_SELECTOR).append('<button id="my-button">button</button>');
    });

    afterEach(function() {
        $(MAIN_SELECTOR).remove();
    });

    it('returns true when enter key pressed', function() {
        expect($.isEnterKey(enterKey())).toBe(true);
    });

    function triggerKeydown(key) {
        var event = $.Event('keydown');
        event.which = key;
        $('#my-button').trigger(event);
        return event;
    }

    function enterKey() {
        return triggerKeydown(13);
    }
});