;(function ( $, window, document, undefined ) {

    var ENTER_KEY = 13;
    var DOWN_ARROW_KEY = 40, UP_ARROW_KEY = 38, RIGHT_ARROW_KEY = 39, LEFT_ARROW_KEY = 37;
    var END_KEY = 35, HOME_KEY = 36;

    $.isEnterKey = function($event) {
        return _isKey($event, ENTER_KEY);
    };

    $.isDownArrowKey = function($event) {
        return _isKey($event, DOWN_ARROW_KEY);
    };

    $.isUpArrowKey = function($event) {
        return _isKey($event, UP_ARROW_KEY);
    };

    $.isRightArrowKey = function($event) {
        return _isKey($event, RIGHT_ARROW_KEY);
    };

    $.isLeftArrowKey = function($event) {
        return _isKey($event, LEFT_ARROW_KEY);
    };

    $.isEndKey = function($event) {
        return _isKey($event, END_KEY);
    };

    $.isHomeKey = function($event) {
        return _isKey($event, HOME_KEY);
    };

    function _isKey($event, key) {
        return $event.which === key;
    }

})( jQuery, window, document );