function openNav() {
  const mainHeader = document.getElementById('main-header');
  const closeButton = document.getElementById('close');
  mainHeader.classList.toggle('popout');
  closeButton.classList.toggle('hidden');
}

function closeNav() {
  const mainHeader = document.getElementById('main-header');
  const closeButton = document.getElementById('close');
  mainHeader.classList.remove('popout');
  closeButton.classList.add('hidden');
}

openNav();
closeNav();