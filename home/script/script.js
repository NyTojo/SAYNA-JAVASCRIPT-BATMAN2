function toggleDropdown() {
  var dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = (dropdownContent.style.display === 'none') ? 'block' : 'none';
}

function showPopup(message) {
  var popup = document.getElementById("popup");
  popup.textContent = message;
  popup.style.display = "flex";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";
  popup.style.fontSize = "30px";
  popup.style.fontFamily = "space-grotesk";
  popup.style.marginTop = "-1px"

  setTimeout(function()
  {popup.style.display = 'none';}, 2000);
}

var image = document.getElementById("justice-league-image");
var originalImageSrc = image.src;
var newImageSrc = "./home/Illustrations/justiceleague.png";
var isClicked = false;

image.addEventListener("click", function() {
    if (isClicked) {
        image.src = originalImageSrc;
        isClicked = false;
    } else {
        image.src = newImageSrc;
        isClicked = true;
    }
});