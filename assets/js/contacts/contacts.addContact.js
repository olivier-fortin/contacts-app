// Main object
var contacts = window.contacts || {};

contacts.addContact = function (document, $, console) {

    'use strict';

    function addContact() {

        $(".btn-add-contact").click(function() {
            $(".contact-edit").show();
            $(".contact-details").hide();

            $(".new-contact").addClass("add");

            $(".btn-delete").hide();
            $(".btn-cancel").addClass("add");
        });
    }

    addContact();

}(window.document, window.jQuery, window.console);
