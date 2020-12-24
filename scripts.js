
  let position = 0;
  const slidesToShow = 1;
  const slidesToScroll = 1;
  let container = document.querySelector('.slider-nobuttons');
  let track = document.querySelector('.slider-track');
  let items = document.querySelectorAll('.slider-item');
  let btnPrev = document.querySelector('.btn-prev');
  let btnNext = document.querySelector('.btn-next');
  let itemWidth =  container.clientWidth / slidesToShow;
  let movePosition = slidesToShow * itemWidth;
  const itemsCount = items.length;


  /*items.forEach((item) => {
    item.style.minWidth = '$(itemWidth)px';
  });*/


  btnNext.addEventListener('click',() => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= ((itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemsWidth));

    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener('click',() => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += ((itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemsWidth));

    setPosition();
    checkBtns();
  })

  const setPosition = () => {
    track.style.transform = 'translateX(' + position + 'px)';
    track.style.transition = "all 1.5s";
  }

  const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= - (itemsCount - slidesToShow) * itemWidth;
  }

  checkBtns();

jQuery(document).ready(function($){
  $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html,body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});
});

function changeItem(num) {
  const image = document.getElementById('img' + num);
  image.style.opacity = '1';
  image.style.transition = "all 0.5s";
}

function rechangeItem(num) {
  const image = document.getElementById('img' + num);
  image.style.opacity = '0';
  image.style.transition = "all 0.5s";
}

$(function(e) {
        $('.one-employee').on("click", function(e){
            window.open("employeePage.html?&" + e.target.id, "self");

            });
        });
