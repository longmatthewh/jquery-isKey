;(function ( $, window, document, undefined ) {
    var PLUGIN_NAME = 'isKey';

    function Plugin( element, options ) {
        this.element = element;
        this.init();
    }

    Plugin.prototype = {
        init : function () {
        }
    };

    $.fn[PLUGIN_NAME] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + PLUGIN_NAME)) {
                $.data(this, 'plugin_' + PLUGIN_NAME,
                    new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );