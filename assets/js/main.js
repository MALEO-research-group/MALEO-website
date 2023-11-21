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

  /* Toggle mobile menu */
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector("#menu");

  function toggleMenu() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggle.innerHTML = "<i class='fas fa-bars'></i>";
    } else {
      menu.classList.add("active");
      toggle.innerHTML = "<i class='fas fa-times'></i>";
    }
  }
  toggle.addEventListener("click", toggleMenu, false);
});

