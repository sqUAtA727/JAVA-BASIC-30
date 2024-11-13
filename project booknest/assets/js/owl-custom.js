$(document).ready(function () {
  // $(".owl-carousel").owlCarousel();
  $(".owl-carousel").owlCarousel({
    loop: true, // giờ mới thấy lệch lặp khiếp thật
    margin: 10, //Khoảnh cách item
    nav: false, //Nút định hướng
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
