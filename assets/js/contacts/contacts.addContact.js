// Main object
var contacts = window.contacts || {};

contacts.addContact = function (document, $, console) {

    'use strict';

    function addContact() {

        $(".btn-add-contact").click(function() {
            $(".contact-edit").show();
            $(".contact-details").hide();

            $(".new-contact").addClass('add');
        });

        $(".btn-cancel").click(function() {
            $(".contact-edit").hide();
            $(".new-contact").removeClass('add');
        });
    }

    addContact();

}(window.document, window.jQuery, window.console);
