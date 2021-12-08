$(".customer-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=' ti-arrow-left  button-left ' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='ti-arrow-right button-right' aria-hidden='true'></i></button>",
             responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    
  ]
            
}); 
	