var contacts=window.contacts||{};contacts.addContact=function(c,t,n){"use strict";t(".btn-add-contact").click(function(){t(".contact-edit").show(),t(".contact-details").hide(),t(".new-contact").addClass("add")}),t(".btn-cancel").click(function(){t(".contact-edit").hide(),t(".new-contact").removeClass("add")})}(window.document,window.jQuery,window.console);
var contacts=window.contacts||{};contacts.App=function(t,n,o){"use strict";return{init:function(){n('a:not([target="_blank"])').on("click touchend",function(t){var o=n(this);window.location=o.attr("href")}),contacts.loadContactList.init(),contacts.addContact.init()}}}(window.document,window.jQuery,window.console),window.jQuery(window.document).on("ready",contacts.App.init);
var contacts=window.contacts||{};contacts.loadContactList=function(t,i,s){"use strict";i.getJSON("contacts-api.json",function(t){s.log(t);for(var o=i(".list-group"),c=0;c<t.length;c++)o.append("<li class='list-group-item'>"+t[c].id+"<img class='img-circle' src="+t[c].picture+"><div class='profile-info'>\n<h4 class='list-group-item-heading'>"+t[c].firstName+" "+t[c].lastName+"</h4><p class='list-group-item-text'>"+t[c].jobTitle+"</p>\n</div>\n</li>")})}(window.document,window.jQuery,window.console);