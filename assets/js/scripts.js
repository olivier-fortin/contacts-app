var contacts=window.contacts||{};contacts.addContact=function(t,c,n){"use strict";c(".btn-add-contact").click(function(){c(".contact-edit").show(),c(".contact-details").hide(),c(".new-contact").addClass("add"),c(".btn-delete").hide(),c(".btn-cancel").addClass("add")})}(window.document,window.jQuery,window.console);
var contacts=window.contacts||{};contacts.App=function(t,n,o){"use strict";return{init:function(){n('a:not([target="_blank"])').on("click touchend",function(t){var o=n(this);window.location=o.attr("href")}),contacts.loadContactList.init(),contacts.addContact.init(),contacts.editContact.init()}}}(window.document,window.jQuery,window.console),window.jQuery(window.document).on("ready",contacts.App.init);
var contacts=window.contacts||{};contacts.editContact=function(t,a,e){"use strict";function c(){a.getJSON("contacts-api.json",function(t){a(".btn-edit-contact").click(function(){a(".contact-edit").show(),a(".contact-details").hide(),a(".btn-delete").show();var c=a(this).attr("id"),l=t[c-1];e.log(l),a("#id").val(l.id),a("#firstName").val(l.firstName),a("#lastName").val(l.lastName),a("#jobTitle").val(l.jobTitle),a("#address").val(l.address.street),a("#city").val(l.address.city),a("#state").val(l.address.state),a("#postcode").val(l.address.postcode),a("#phoneNumber").val(l.phoneNumber),a("#cellNumber").val(l.cellNumber),a("#email").val(l.email)}),a(".btn-cancel").click(function(){a(".contact-edit").hide(),a(".new-contact").removeClass("add"),a(".btn-cancel").hasClass("add")?(a(".contact-details").hide(),a(this).removeClass("add")):a(".contact-details").show()}),a(".btn-save").click(function(){t[id-1]={id:a("#id").val(),firstName:a("#firstName").val(),lastName:a("#lastName").val(),jobTitle:a("#jobTitle").val(),address:{street:a("#address").val(),city:a("#city").val(),state:a("#state").val(),postcode:a("#postcode").val()},phoneNumber:a("#phoneNumber").val(),cellNumber:a("#cellNumber").val(),email:a("#email").val()},e.log(t[id-1]),a(".contact-edit").hide(),a(".new-contact").removeClass("add")})})}c()}(window.document,window.jQuery,window.console);
var contacts=window.contacts||{};contacts.loadContactList=function(t,c,a){"use strict";function e(){c("html, body").stop().animate({scrollTop:0},500,"swing")}c.getJSON("contacts-api.json",function(t){for(var a=c(".list-group"),o=0;o<t.length;o++)a.append("<button class='list-group-item' id='"+t[o].id+"'><img class='img-circle' src="+t[o].picture+"><div class='profile-info'>\n<h4 class='list-group-item-heading'>"+t[o].firstName+" "+t[o].lastName+"</h4><p class='list-group-item-text'>"+t[o].jobTitle+"</p>\n</div>\n</button>");c(".navbar-brand").click(function(){e()}),c(".list-group-item").click(function(){c(".contact-edit").hide(),c(".contact-details").show(),c(".new-contact").removeClass("add"),e();var a=c(this).attr("id"),o=t[a-1];c(".contact-image").attr("src",o.picture),c(".contact-name").html(o.firstName+" "+o.lastName),c(".contact-job-title").html(o.jobTitle),c(".contact-address").html(o.address.street+", "+o.address.city+"<br>"+o.address.state+", "+o.address.postcode),c(".contact-phone").html(o.phoneNumber),c(".contact-phone").attr("href","tel:"+o.phoneNumber),c(".contact-cell").html(o.cellNumber),c(".contact-cell").attr("href","tel:"+o.cellNumber),c(".contact-email").html(o.email),c(".contact-email").attr("href","mailto:"+o.email),c(".btn-edit-contact").attr("id",o.id)})})}(window.document,window.jQuery,window.console);