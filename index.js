"use strict";
const fishGallery = document.getElementById("fish-pic-gallery");
const showFishBtn = document.getElementById("show-fish-btn");
const upTriangle = document.getElementById('up-triangle')
const downTriangle = document.getElementById('down-triangle')

showFishBtn.addEventListener("click", toggleFishGallery);

function toggleFishGallery() {
  console.log('button press')
  if (fishGallery.style.display == "none") {
    showFishGallery()
  } else {
    hideFishGallery()
  }
}

function showFishGallery(){
  fishGallery.style.display = "block";
  downTriangle.style.display = "block"
  upTriangle.style.display = 'none'
}

function hideFishGallery(){
  fishGallery.style.display = "none";
  upTriangle.style.display = "block"
  downTriangle.style.display = 'none'
}
