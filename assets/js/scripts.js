var contacts=window.contacts||{};contacts.addContact=function(t,c,n){"use strict";c(".btn-add-contact").click(function(){c(".contact-edit").show(),c(".contact-details").hide(),c(".new-contact").addClass("add"),c(".btn-delete").hide(),c(".btn-cancel").addClass("add")})}(window.document,window.jQuery,window.console);
var contacts=window.contacts||{};contacts.App=function(t,n,o){"use strict";return{init:function(){n('a:not([target="_blank"])').on("click touchend",function(t){var o=n(this);window.location=o.attr("href")}),contacts.loadContactList.init(),contacts.addContact.init(),contacts.editContact.init()}}}(window.document,window.jQuery,window.console),window.jQuery(window.document).on("ready",contacts.App.init);
var contacts=window.contacts||{};contacts.editContact=function(t,e,a){"use strict";function c(){e.getJSON("contacts-api.json",function(t){e(".btn-edit-contact").click(function(){e(".contact-edit").show(),e(".contact-details").hide(),e(".btn-delete").show();var c=e(this).attr("id"),l=t[c-1];a.log(l),e("#id").val(l.id),e("#firstName").val(l.firstName),e("#lastName").val(l.lastName),e("#jobTitle").val(l.jobTitle),e("#address").val(l.address.street),e("#city").val(l.address.city),e("#state").val(l.address.state),e("#postcode").val(l.address.postcode),e("#phoneNumber").val(l.phoneNumber),e("#cellNumber").val(l.cellNumber),e("#email").val(l.email)}),e(".btn-cancel").click(function(){e(".contact-edit").hide(),e(".new-contact").removeClass("add"),e(".btn-cancel").hasClass("add")?(e(".contact-details").hide(),e(this).removeClass("add")):e(".contact-details").show()}),e(".btn-save").click(function(){t[id-1]={id:e("#id").val(),firstName:e("#firstName").val(),lastName:e("#lastName").val(),jobTitle:e("#jobTitle").val(),address:{street:e("#address").val(),city:e("#city").val(),state:e("#state").val(),postcode:e("#postcode").val()},phoneNumber:e("#phoneNumber").val(),cellNumber:e("#cellNumber").val(),email:e("#email").val()},a.log(t[id-1]),e(".contact-edit").hide(),e(".new-contact").removeClass("add")}),e(".btn-delete-conf").click(function(){delete t[id-1],a.log(t[id-1]),e("#confirmDeleteModal").modal("hide"),e(".contact-edit").hide()})})}c()}(window.document,window.jQuery,window.console);
var contacts=window.contacts||{};contacts.loadContactList=function(t,c,a){"use strict";function e(){c("html, body").stop().animate({scrollTop:0},500,"swing")}c.getJSON("contacts-api.json",function(t){for(var a=c(".list-group"),o=0;o<t.length;o++)a.append("<button class='list-group-item' id='"+t[o].id+"'><img class='img-circle' src="+t[o].picture+"><div class='profile-info'>\n<h4 class='list-group-item-heading'>"+t[o].firstName+" "+t[o].lastName+"</h4><p class='list-group-item-text'>"+t[o].jobTitle+"</p>\n</div>\n</button>");c(".navbar-brand").click(function(){e()}),c(".list-group-item").click(function(){c(".contact-edit").hide(),c(".contact-details").show(),c(".new-contact").removeClass("add"),e();var a=c(this).attr("id"),o=t[a-1];c(".contact-image").attr("src",o.picture),c(".contact-name").html(o.firstName+" "+o.lastName),c(".contact-job-title").html(o.jobTitle),c(".contact-address").html(o.address.street+", "+o.address.city+"<br>"+o.address.state+", "+o.address.postcode),c(".contact-phone").html(o.phoneNumber),c(".contact-phone").attr("href","tel:"+o.phoneNumber),c(".contact-cell").html(o.cellNumber),c(".contact-cell").attr("href","tel:"+o.cellNumber),c(".contact-email").html(o.email),c(".contact-email").attr("href","mailto:"+o.email),c(".btn-edit-contact").attr("id",o.id)})})}(window.document,window.jQuery,window.console);