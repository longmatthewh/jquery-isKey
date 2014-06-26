;(function ( $, window, document, undefined ) {

    var ENTER_KEY = 13;

    $.isEnterKey = function($event) {
        return _isKey($event, ENTER_KEY);
    };

    function _isKey($event, key) {
        return $event.which === key;
    }

})( jQuery, window, document );