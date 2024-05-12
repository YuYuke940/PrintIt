const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
let index = 0;
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const bannerImage = document.querySelector(".banner-img");
const text = document.querySelector("#banner p");
const dots = document.querySelector(".dots");
const uptadeData = () => {
  console.log(index);

  console.log(slides[index]);
  bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
  text.innerHTML = slides[index].tagLine;
  generateDots()
};
const generateDots = () => {
	dots.innerHTML=""
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    if (i === index) {
      dot.className = "dot dot_selected";
    } else {
      dot.className = "dot";
    }

    dots.appendChild(dot);
  }
};
generateDots();

const goToNextImage = () => {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  uptadeData();
};
const goToPreviousImage = () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  uptadeData();
};

arrowRight.addEventListener("click", goToNextImage);
arrowLeft.addEventListener("click", goToPreviousImage);
