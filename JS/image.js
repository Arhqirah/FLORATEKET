var imageSrc1 = "IMAGES/Bonsai.png";
var imageSrc2 = "IMAGES/AnotherBonsai.png";
var currentImageSrc = imageSrc1;
var imgElement = document.getElementById("bonsaiImage");

function toggleImage() {
  if (currentImageSrc === imageSrc1) {
    imgElement.src = imageSrc2;
    currentImageSrc = imageSrc2;
  } else {
    imgElement.src = imageSrc1;
    currentImageSrc = imageSrc1;
  }
}
