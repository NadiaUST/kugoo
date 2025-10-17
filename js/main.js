function toggleMenu() {
  document.getElementById("catalogMenu").classList.toggle("show");
}

// Закрывает меню при клике вне кнопки
window.onclick = function (event) {
  if (!event.target.closest(".catalog-container")) {
    document.getElementById("catalogMenu").classList.remove("show");
  }
};
