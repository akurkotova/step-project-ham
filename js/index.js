$(function () {
    $("#our-services-tabs").tabs();

    $("#loadItems").click(loadItems);

    $(".amazing-work .pictures-filter a").click((eventObject) => filterPictures(eventObject));

    loadItems();

    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 105,
        itemMargin: 0,
        asNavFor: '#slider',
        nextText: '<i class="fas fa-angle-right"></i>',
        prevText: '<i class="fas fa-angle-left"></i>'
      });
     
      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        nextText: '<i class="fas fa-angle-right"></i>',
        prevText: '<i class="fas fa-angle-left"></i>'
      });
});

