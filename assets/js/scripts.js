var contacts=window.contacts||{};contacts.addContact=function(c,t,n){"use strict";t(".btn-add-contact").click(function(){t(".contact-edit").show(),t(".contact-details").hide(),t(".new-contact").addClass("add")}),t(".btn-cancel").click(function(){t(".contact-edit").hide(),t(".new-contact").removeClass("add")})}(window.document,window.jQuery,window.console);
var contacts=window.contacts||{};contacts.App=function(t,n,o){"use strict";return{init:function(){n('a:not([target="_blank"])').on("click touchend",function(t){var o=n(this);window.location=o.attr("href")}),contacts.loadContactList.init(),contacts.addContact.init(),contacts.editContact.init()}}}(window.document,window.jQuery,window.console),window.jQuery(window.document).on("ready",contacts.App.init);
var contacts=window.contacts||{};contacts.editContact=function(t,a,e){"use strict";a.getJSON("contacts-api.json",function(t){a(".btn-edit-contact").click(function(){a(".contact-edit").show(),a(".contact-details").hide();var e=a(this).attr("id"),c=t[e-1];a("#id").val(c.id),a("#firstName").val(c.firstName),a("#lastName").val(c.lastName),a("#jobTitle").val(c.jobTitle),a("#address").val(c.address.street),a("#city").val(c.address.city),a("#state").val(c.address.state),a("#postcode").val(c.address.postcode),a("#phoneNumber").val(c.phoneNumber),a("#cellNumber").val(c.cellNumber),a("#email").val(c.email)}),a(".btn-cancel").click(function(){a(".contact-edit").hide(),a(".contact-details").show()})})}(window.document,window.jQuery,window.console);
var contacts=window.contacts||{};contacts.loadContactList=function(t,c,a){"use strict";function e(){c("html, body").stop().animate({scrollTop:0},500,"swing")}c.getJSON("contacts-api.json",function(t){for(var a=c(".list-group"),i=0;i<t.length;i++)a.append("<li class='list-group-item' id='"+t[i].id+"'><img class='img-circle' src="+t[i].picture+"><div class='profile-info'>\n<h4 class='list-group-item-heading'>"+t[i].firstName+" "+t[i].lastName+"</h4><p class='list-group-item-text'>"+t[i].jobTitle+"</p>\n</div>\n</li>");c(".navbar-brand").click(function(){e()}),c(".list-group-item").click(function(){c(".contact-edit").hide(),c(".contact-details").show(),e();var a=c(this).attr("id"),i=t[a-1];c(".contact-image").attr("src",i.picture),c(".contact-name").html(i.firstName+" "+i.lastName),c(".contact-job-title").html(i.jobTitle),c(".contact-address").html(i.address.street+", "+i.address.city+"<br>"+i.address.state+", "+i.address.postcode),c(".contact-phone").html(i.phoneNumber),c(".contact-phone").attr("href","tel:"+i.phoneNumber),c(".contact-cell").html(i.cellNumber),c(".contact-cell").attr("href","tel:"+i.cellNumber),c(".contact-email").html(i.email),c(".contact-email").attr("href","mailto:"+i.email),c(".btn-edit-contact").attr("id",i.id)})})}(window.document,window.jQuery,window.console);