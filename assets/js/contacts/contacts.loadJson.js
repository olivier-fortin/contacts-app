// Main object
var contacts = window.contacts || {};

contacts.loadJson = function (document, $, console) {

    'use strict';

    function loadJson() {
        //alert("Load the contents of the JSON file to populate the list");
        $.getJSON('contacts-api.json', function(json) {
            console.log(json);
        });
    }
    loadJson();

}(window.document, window.jQuery, window.console);
