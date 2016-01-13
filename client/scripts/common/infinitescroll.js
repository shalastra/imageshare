Session.set("imageLimit", 8);

lastScrollTop = 0;
$(window).scroll(function(event) {
  // detect near bottom of window
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    var scrollTop = $(this).scrollTop();
    // see if we are going up or down
    if (scrollTop > lastScrollTop) {
      Session.set("imageLimit", Session.get("imageLimit") + 4);
    }

    lastScrollTop = scrollTop;
  }
});