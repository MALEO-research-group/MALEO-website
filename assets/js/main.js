$(document).ready(function() {
  // smooth on-hover tooltips
  $("a[title], abbr[title], img[title]").tooltip();

  $("#staff_search").on("focusin", function() {
    if ($(this).val() == "Search by name") {
      $(this).val('');
    }
  });

  $("#staff_search").on("focusout", function() {
    if ($(this).val() == "") {
      $(this).val("Search by name");
    }
  });

  // every time we write something into the search field
  $("#staff_search").on("keyup", function() {
    var search_value = $(this).val().toLowerCase();
    console.log("changed!" + search_value);
    $("#staff li").each(function() {
      var member_name = $(this).find("a").html().toLowerCase();
      if (member_name.includes(search_value)) {
        $(this).removeClass('hide');
      } else {
        $(this).addClass('hide');
      }
    });
  });

  // build quick-jump menu
  var hs = $("#content h2");
  if (hs.length > 1) {
    var qa = '<nav><b>Quick access:</b> <ul>';
    hs.each(function(index) {
      qa = qa + '<li><a href="#h' + index + '">' + $(this).text() + '</a></li>';
      $(this).attr('id', 'h' + index);
    });
    qa = qa + '</ul></nav>';
    // alert(qa);
    $("#quick_access").append(qa);
  }

  // smooth scroll if scroll destinations are fixed DOM IDs
  $("#quick_access a").click(function(e) {
    if (this.hash !== "") {
      // get the destination and prevent default reaction
      var hash = this.hash;
      e.preventDefault();

      // now smoothly scroll
      $('html, body').animate({
        'scrollTop': $(hash).offset().top - 25
      }, 300);
    }
  });

  $("#menu_icon").on("click", function() {
    $("#main_nav").slideToggle();
    $(this).toggleClass("active");
  });
});

