function myFunction(x) {
    x.classList.toggle("change");
  }


  document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const cards = document.querySelectorAll(".card");
    const arrowNext = document.querySelector(".arrow-next");
    const arrowPrev = document.querySelector(".arrow-prev");
  
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight);
  
    arrowNext.addEventListener("click", function() {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        scrollToCurrentIndex();
      }
    });
  
    arrowPrev.addEventListener("click", function() {
      if (currentIndex > 0) {
        currentIndex--;
        scrollToCurrentIndex();
      }
    });
  
    function scrollToCurrentIndex() {
      carousel.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth"
      });
    }
  });
  
  