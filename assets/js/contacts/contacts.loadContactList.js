// Main object
var contacts = window.contacts || {};

contacts.loadContactList = function (document, $, console) {

    'use strict';

    function loadContactList() {
        //alert("Load the contents of the JSON file to populate the list");
        $.getJSON('contacts-api.json', function(json) {
            console.log(json);

            var listGroup = $(".list-group");

            for (var i = 0; i < json.length; i++) {
                listGroup.append(
                    "<li class='list-group-item'>" + json[i].id +
                    "<img class='img-circle' src=" + json[i].picture + ">" +
                    "<div class='profile-info'>\n" +
                    "<h4 class='list-group-item-heading'>" + json[i].firstName + " " + json[i].lastName + "</h4>" +
                    "<p class='list-group-item-text'>" + json[i].jobTitle + "</p>\n" +
                    "</div>\n" +
                    "</li>"
                );
            }
        });
    }
    loadContactList();

}(window.document, window.jQuery, window.console);
