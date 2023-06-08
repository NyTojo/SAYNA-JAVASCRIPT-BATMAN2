function showPopup(imageURL) {
  var popup = document.getElementById('popup');
  var popupImage = document.getElementById('popup-image');
  popupImage.src = imageURL;
  popup.classList.add('active');
}

function toggleDropdown() {
  var dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = (dropdownContent.style.display === 'none') ? 'block' : 'none';
}