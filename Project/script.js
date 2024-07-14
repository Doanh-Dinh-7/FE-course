document.addEventListener("DOMContentLoaded", function () {
  initializeMap();
});

// Link Google map by
function initializeMap() {
  let x = 16.04751;
  let y = 108.2398;
  var map = L.map("map").setView([x, y], 16);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([x, y])
    .addTo(map)
    .bindPopup("Trường Đại học Kinh tế - Đại học Đà Nẵng ")
    .openPopup();
}

$(document).ready(function () {
  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
});
