// Main object
var contacts = window.contacts || {};

contacts.addContact = function (document, $, console) {

    'use strict';

    function addContact() {
        alert ('add contact')
    }

    $(".btn-add-contact").click(function() {
        $(".contact-edit").show();
        $(".contact-details").hide();

        $(".new-contact").addClass('add');
    });

    $(".btn-cancel").click(function() {
       $(".contact-edit").hide();
       $(".new-contact").removeClass('add');
    });

}(window.document, window.jQuery, window.console);
