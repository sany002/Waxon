
 $(function(){
    //  Sticky Header 
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 200){
            $('.navbar').addClass('sticky_header');
        }
        else {
             $('.navbar').removeClass('sticky_header');
        }
        
        }); 

    //  Sticky Header 


    // Banner Slider 
        
        
$('.banner_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,

  });



    // Banner Slider 

    // Service Slider 
            
$('.service_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,

    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        
      ]


  });



    // Service Slider 

    // Portfolio Slider 
    var containerEl = document.querySelector('.portfolio_filter');

    var mixer = mixitup(containerEl);
    // Portfolio Slider 

    // Video Slider 
    new VenoBox({
        selector: '.my-video-links',
    });
    // Video Slider 


    // Counter Slider 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // Counter Slider 

        // Service Slider 
            
$('.blog_slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        
      ]
  });



    // Service Slider 
        // Service Slider 
            
$('.client_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows:false,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        
      ]
  });

//==== Back-to-top button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});

    // Service Slider 
 });
