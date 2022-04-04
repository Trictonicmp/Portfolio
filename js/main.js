let isMenuOpen = false;

function openNav(){
  let mainHeader = document.getElementById("main-header");
  let closeButton = document.getElementById("close");
  mainHeader.classList.toggle("popout");
  closeButton.classList.toggle("hidden");
}

function closeNav() {
  let mainHeader = document.getElementById("main-header");
  let closeButton = document.getElementById("close");
  mainHeader.classList.remove("popout");
  closeButton.classList.add("hidden");
}