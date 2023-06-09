function toggleDropdown() {
  var dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = (dropdownContent.style.display === 'none') ? 'block' : 'none';
}

function showPopup(imageUrl) {
  var popup = document.querySelector('.popup');
  popup.innerHTML = '<img src="' + imageUrl + '" alt="popup" style="width: 100%; height: 100%;">';
  popup.style.display = 'block';
  setTimeout(function()
  {popup.style.display = 'none';}, 2000);
}