$(".archive-filter").on("click", function () {
  let activeCategory = $(this).attr("categoryfilter");
  console.log(activeCategory);
  
  if (activeCategory === "all") {
    $(".archive-item").removeClass("hide");
  } else {
    $(".archive-item").each(function() {
      let item = $(this);
      let hasCategory = false;
      
      // Check if any attribute starts with "category" and matches the active category
      $.each(this.attributes, function() {
        if (this.name.startsWith('category') && this.value === activeCategory) {
          hasCategory = true;
          return false; // Exit loop once a match is found
        }
      });

      if (hasCategory) {
        item.removeClass("hide");
      } else {
        item.addClass("hide");
      }
    });
  }

  $(".archive-filter.active").removeClass("active");
  $(this).addClass("active");

  const element = document.getElementById("projects");
  element.scrollIntoView({
    behavior: "smooth"
  });
});
