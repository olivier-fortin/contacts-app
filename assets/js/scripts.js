var contacts=window.contacts||{};contacts.addContact=function(c,t,n){"use strict";t(".btn-add-contact").click(function(){t(".contact-edit").show(),t(".contact-details").hide(),t(".new-contact").addClass("add")}),t(".btn-cancel").click(function(){t(".contact-edit").hide(),t(".new-contact").removeClass("add")})}(window.document,window.jQuery,window.console);
var contacts=window.contacts||{};contacts.App=function(t,n,o){"use strict";return{init:function(){n('a:not([target="_blank"])').on("click touchend",function(t){var o=n(this);window.location=o.attr("href")}),contacts.loadContactList.init(),contacts.addContact.init()}}}(window.document,window.jQuery,window.console),window.jQuery(window.document).on("ready",contacts.App.init);
var contacts=window.contacts||{};contacts.loadContactList=function(t,e,c){"use strict";e.getJSON("contacts-api.json",function(t){c.log(t);for(var a=e(".list-group"),i=0;i<t.length;i++)a.append("<li class='list-group-item' id='"+t[i].id+"'><img class='img-circle' src="+t[i].picture+"><div class='profile-info'>\n<h4 class='list-group-item-heading'>"+t[i].firstName+" "+t[i].lastName+"</h4><p class='list-group-item-text'>"+t[i].jobTitle+"</p>\n</div>\n</li>");e(".list-group-item").click(function(){e(".contact-edit").hide(),e(".contact-details").show();var a=e(this).attr("id"),i=t[a-1];alert("Clicked"+a),c.log(i),e(".contact-image").attr("src",i.picture),e(".contact-name").html(i.firstName+" "+i.lastName),e(".contact-job-title").html(i.jobTitle),e(".contact-address").html(i.address.street+", "+i.address.city+"<br>"+i.address.state+", "+i.address.postcode),e(".contact-phone").html(i.phoneNumber),e(".contact-phone").attr("href","tel:"+i.phoneNumber),e(".contact-cell").html(i.cellNumber),e(".contact-cell").attr("href","tel:"+i.cellNumber),e(".contact-email").html(i.email),e(".contact-email").attr("href","mailto:"+i.email)})})}(window.document,window.jQuery,window.console);