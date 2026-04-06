let currentIndex=0;
const slides = document.querySelectorAll(".carousel-item img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

function showSlide(index){
    slides.forEach(slide => slide.classlist.remove("active"));
if (index >= slides.length) currentIndex = 0;
else if (index < 0) currentIndex = slides.length - 1;
else currentIndex = index;

slides[currentIndex].classList.add("active"); 
}

next.addEventListener("click", () => showSlide(currentIndex + 1));
prev.addEventListener("click", () => showSlide(currentIndex - 1));
