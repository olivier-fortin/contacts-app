// Main object
var contacts = window.contacts || {};

contacts.editContact = function (document, $, console) {

    'use strict';

    function editContact() {

        $.getJSON('contacts-api.json', function(json) {

            // Edit contact
            $(".btn-edit-contact").click(function () {
                $(".contact-edit").show();
                $(".contact-details").hide();

                var id = $(this).attr('id');
                var currentContact = json[id - 1];

                $("#id").val(currentContact.id);
                $("#firstName").val(currentContact.firstName);
                $("#lastName").val(currentContact.lastName);
                $("#jobTitle").val(currentContact.jobTitle);
                $("#address").val(currentContact.address.street);
                $("#city").val(currentContact.address.city);
                $("#state").val(currentContact.address.state);
                $("#postcode").val(currentContact.address.postcode);
                $("#phoneNumber").val(currentContact.phoneNumber);
                $("#cellNumber").val(currentContact.cellNumber);
                $("#email").val(currentContact.email);
            });

            $(".btn-cancel").click(function () {
                $(".contact-edit").hide();
                $(".contact-details").show();
            });
        })
    }

    editContact();

}(window.document, window.jQuery, window.console);
