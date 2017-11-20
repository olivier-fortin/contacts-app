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

                $(".btn-delete").show();

                var id = $(this).attr('id');
                var currentContact = json[id - 1];

                console.log(currentContact);

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
                $(".new-contact").removeClass("add");

                if($(".btn-cancel").hasClass("add")){
                    $(".contact-details").hide();
                    $(this).removeClass("add");
                }
                else {
                    $(".contact-details").show();
                }
            });

            $(".btn-save").click(function () {
                save();
                console.log(json[id - 1]);
                $(".contact-edit").hide();
                $(".new-contact").removeClass("add");
            });

            function save() {

                json[id - 1] = {
                    "id":$("#id").val(),
                    "firstName": $("#firstName").val(),
                    "lastName": $("#lastName").val(),
                    "jobTitle": $("#jobTitle").val(),
                    "address": {
                        "street": $("#address").val(),
                        "city": $("#city").val(),
                        "state": $("#state").val(),
                        "postcode": $("#postcode").val()
                    },
                    "phoneNumber": $("#phoneNumber").val(),
                    "cellNumber": $("#cellNumber").val(),
                    "email": $("#email").val()

                };

                alert("Saved!")
            }
        })
    }

    editContact();

}(window.document, window.jQuery, window.console);
