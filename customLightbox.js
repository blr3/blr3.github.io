let slideIndex1 = 1;
let slideIndex2 = 1;

showSlides1(slideIndex1);
showSlides2(slideIndex2);

function openModal1() {
  document.getElementById("myModal").style.display = "block";
}

function openModal2() {
  document.getElementById("fsModal").style.display = "block";
}

// Close the Modal
function closeModal1() {
  document.getElementById("myModal").style.display = "none";
}

function closeModal2() {
  document.getElementById("fsModal").style.display = "none";
}
// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  const slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) {
    slideIndex1 = 1;
  };

  if (n < 1) {
    slideIndex1 = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };

  slides[slideIndex1 - 1].style.display = "block";
};



function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  const slides = document.getElementsByClassName("fsSlides");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) {
    slideIndex2 = 1;
  };

  if (n < 1) {
    slideIndex2 = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };

  slides[slideIndex2 - 1].style.display = "block";
};
