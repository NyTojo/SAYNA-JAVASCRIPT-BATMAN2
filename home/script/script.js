// Fonction pour basculer l'affichage de dropdown
function toggleDropdown() {
  var dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = (dropdownContent.style.display === 'none') ? 'block' : 'none';
}

// Fonction pour afficher une popup avec le message
function showPopup(message) {
  var popup = document.getElementById("popup");
  popup.textContent = message;
  popup.style.display = "flex";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";
  popup.style.fontSize = "30px";
  popup.style.fontFamily = "space-grotesk";
  popup.style.marginTop = "-1px"

  setTimeout(function() {
    popup.style.display = 'none';
  }, 2000);
}

// Gestion de l'image pour le clic justice ligue
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

document.addEventListener("DOMContentLoaded", function() {
  // Récupérer l'élément de l'image
  var image = document.querySelector(".image-annonce");

  // Récupérer l'élément de la vidéo
  var video = document.querySelector(".video");

  // Masquer la vidéo en ajoutant la classe CSS "hidden"
  video.classList.add("hidden");

  // Ajouter un gestionnaire d'événement au clic sur l'image
  image.addEventListener("click", function() {
    // Afficher la vidéo en enlevant la classe CSS "hidden"
    video.classList.remove("hidden");

    // Masquer l'image en ajoutant la classe CSS "hidden"
    image.classList.add("hidden");

    // Jouer la vidéo lorsque celle-ci est prête à être lue
    video.addEventListener("canplay", function() {
      video.play();
    });
  });
});
