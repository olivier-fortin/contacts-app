// Main object
var contacts = window.contacts || {};

contacts.App = function (document, $, console) {

    'use strict';

    var init = function () {

        //Prevent double click on mobile
        $('a:not([target="_blank"])').on('click touchend', function (e) {
            var el = $(this);
            window.location = el.attr('href');
        });

        //Initialise modules
        contacts.loadContactList.init();
        contacts.addContact.init();

    };

    return {
        init: init
    };

}(window.document, window.jQuery, window.console);
window.jQuery(window.document).on('ready', contacts.App.init);
