function toggleMenu() {
  document.getElementById("catalogMenu").classList.toggle("show");
}

// Закрывает меню при клике вне кнопки
window.onclick = function (event) {
  if (!event.target.closest(".catalog-container")) {
    document.getElementById("catalogMenu").classList.remove("show");
  }
};
$(window).keyup(function (e) {
  var target = $(".checkbox-other input:focus");
  if (e.keyCode == 9 && $(target).length) {
    $(target).parent().addClass("focused");
  }
});

$(".checkbox-other input").focusout(function () {
  $(this).parent().removeClass("focused");
});
