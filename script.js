let currentIndex = 0; 


function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide'); 
    const totalSlides = slides.length;  

   
    currentIndex += direction;

   
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

   
    const newTransformValue = -currentIndex * 100; 
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue}%)`;
}
