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

    it('returns true when down arrow key pressed', function() {
        expect($.isDownArrowKey(downArrowKey())).toBe(true);
    });

    it('returns true when up arrow key pressed', function() {
        expect($.isUpArrowKey(upArrowKey())).toBe(true);
    });

    it('returns true when right arrow key pressed', function() {
        expect($.isRightArrowKey(rightArrowKey())).toBe(true);
    });

    it('returns true when left arrow key pressed', function() {
        expect($.isLeftArrowKey(leftArrowKey())).toBe(true);
    });

    it('returns true when end key pressed', function() {
        expect($.isEndKey(endKey())).toBe(true);
    });

    it('returns true when home key pressed', function() {
        expect($.isHomeKey(homeKey())).toBe(true);
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

    function downArrowKey() {
        return triggerKeydown(40);
    }

    function upArrowKey() {
        return triggerKeydown(38);
    }

    function rightArrowKey() {
        return triggerKeydown(39);
    }

    function leftArrowKey() {
        return triggerKeydown(37);
    }

    function endKey() {
        return triggerKeydown(35);
    }

    function homeKey() {
        return triggerKeydown(36);
    }
});