// Main object
var contacts = window.contacts || {};

contacts.loadContactList = function (document, $, console) {

    'use strict';

    function loadContactList() {

        $.getJSON('contacts-api.json', function(json) {
            //console.log(json);

            var listGroup = $(".list-group");

            for (var i = 0; i < json.length; i++) {

                listGroup.append(
                    "<li class='list-group-item' id='" + json[i].id + "'>" +
                    "<img class='img-circle' src=" + json[i].picture + ">" +
                    "<div class='profile-info'>\n" +
                    "<h4 class='list-group-item-heading'>" + json[i].firstName + " " + json[i].lastName + "</h4>" +
                    "<p class='list-group-item-text'>" + json[i].jobTitle + "</p>\n" +
                    "</div>\n" +
                    "</li>"
                );
            }

            $(".navbar-brand").click(function() {
                scrollToTop();
            });

            // View contact details
            $(".list-group-item").click(function() {
                $(".contact-edit").hide();
                $(".contact-details").show();

                scrollToTop();

                var id = $(this).attr('id');
                var currentContact = json[id-1];

                $(".contact-image").attr("src", currentContact.picture);
                $(".contact-name").html( currentContact.firstName + " " + currentContact.lastName);
                $(".contact-job-title").html(currentContact.jobTitle);
                $(".contact-address").html(currentContact.address.street + ", " + currentContact.address.city + "<br>" + currentContact.address.state + ", " + currentContact.address.postcode);
                $(".contact-phone").html(currentContact.phoneNumber);
                $(".contact-phone").attr('href', 'tel:' + currentContact.phoneNumber);
                $(".contact-cell").html(currentContact.cellNumber);
                $(".contact-cell").attr('href', 'tel:' + currentContact.cellNumber);
                $(".contact-email").html(currentContact.email);
                $(".contact-email").attr('href', 'mailto:' + currentContact.email);
                $(".btn-edit-contact").attr("id", currentContact.id);

            });

        });
    }

    // Scroll to top
    function scrollToTop() {
        $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
    }

    loadContactList();

}(window.document, window.jQuery, window.console);
