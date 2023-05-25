var slides = document.querySelectorAll('.container1');
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(function() {
  showSlide(currentSlide + 1);
}, 3000);


var questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
  var answer = question.querySelector('.answer');
  var header = question.querySelector('h3');
  
  header.addEventListener('click', function() {
    if (answer.classList.contains('active')) {
      answer.classList.remove('active');
      answer.style.maxHeight = null;
    } else {
      answer.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
