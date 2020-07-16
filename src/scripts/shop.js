
$('.shop__specification-btn').mouseover(e=>{
  //$this=$(e.currentTarget);
  $(e.currentTarget).next('.shop__specification-popup').css('display', 'block');
})

$('.shop__specification-btn').mouseout(e=>{
  //$this=$(e.currentTarget);
  $(e.currentTarget).next('.shop__specification-popup').css('display', 'none');
})

$('.shop__specification-popup').mouseover(e=>{
  //$this=$(e.currentTarget);
  $(e.currentTarget).css('display', 'block');
})

$('.shop__specification-popup').mouseout(e=>{
  //$this=$(e.currentTarget);
  $(e.currentTarget).css('display', 'none');
})

const slider=$('.slider').bxSlider({
  pager: false,
  controls: false
});

$('.shop__arrow-left').click(e=>{
  slider.goToPrevSlide();
})

$('.shop__arrow-right').click(e=>{
  slider.goToNextSlide();
})