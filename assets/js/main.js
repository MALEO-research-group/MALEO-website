$(document).ready(function() {
  // smooth on-hover tooltips
  $("a[title], abbr[title], img[title]").tooltip();

  // smooth scroll if scroll destinations are fixed DOM IDs
  $("#menu a").click(function(e) {
    if (this.hash !== "") {
      // get the destination and prevent default reaction
      var hash = this.hash;
      e.preventDefault();

      // now smoothly scroll
      $('html, body').animate({
        'scrollTop': $(hash).offset().top - 100
      }, 700);
    }
  });

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

  /* Toggle mobile menu */
  // const toggle = document.querySelector(".toggle");
  // const menu = document.querySelector("#menu");

  // function toggleMenu() {
  //   if (menu.classList.contains("active")) {
  //     menu.classList.remove("active");
  //     toggle.innerHTML = "<i class='fas fa-bars'></i>";
  //   } else {
  //     menu.classList.add("active");
  //     toggle.innerHTML = "<i class='fas fa-times'></i>";
  //   }
  // }
  // toggle.addEventListener("click", toggleMenu, false);
});

