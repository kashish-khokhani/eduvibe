$(document).ready(function(){

  // pre loader
  setTimeout(function(){
    $('.preloader').fadeOut();
  },200);

 // sticky header
  $(window).scroll(function(){
    var sticky = $('.sticky'),
    scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

    // counter
    function visible(partial) {
      var $t = partial,
          $w = jQuery(window),
          viewTop = $w.scrollTop(),
          viewBottom = viewTop + $w.height(),
          _top = $t.offset().top,
          _bottom = _top + $t.height(),
          compareTop = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
  
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));
  
      }
      
      $(window).scroll(function(){
      
        if(visible($('.count-digit')))
          {
            if($('.count-digit').hasClass('counter-loaded')) return;
            $('.count-digit').addClass('counter-loaded');
            
      $('.count-digit').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 5000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          }
        });
      });
          }
      })

      // accordian
    $(document).ready(function(){
      $('.accordion-list > li > .answer').hide();
        
      $('.accordion-list > li').click(function() {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".answer").slideUp();
        } else {
          $(".accordion-list > li.active .answer").slideUp();
          $(".accordion-list > li.active").removeClass("active");
          $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
      });    
    });
  
    // testimonial
    $('.about_testi').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      items: 1,
      navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
  });
  
    // owl carousel slider
    $('.carousel_slider').owlCarousel({
      loop:true,
      nav:false,
      dots: true,
      items: 3,
  });

  // course detail 
  $('.course_detail_slider').owlCarousel({
    loop:true,
    nav:false,
    items:3,
  });

  // course detail 
  $('.instructor_slider').owlCarousel({
    loop:true,
    nav:true,
    items:4,
    navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
  });

  // course detail 
  $('.edu_testimonial').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
  });

  // blog page  
  $('.blog_car_testi').owlCarousel({
    loop:true,
    nav:false,
    items:3,
    dots: true,
  });

  // testimonial page top testimonial
  $('.testomonial_page_testi').owlCarousel({
    loop:true,
    nav:false,
    items:3,
    margin: 30,
    dots: true,
  });

  // student tesimonial
  $('.student_testimonial').owlCarousel({
    loop:true,
    nav:false,
    items:1,
    dots: true,
  });

  // student feedback tesimonial
  $('.feedback_testimonial').owlCarousel({
    loop:true,
    nav:false,
    items:1,
  });
  

  // student feedback thumbnail tesimonial
  $('.student_thumb').owlCarousel({
    loop:true,
    nav:false,
    items:3,
  });
  $('.student_thumb a').click(function(){
    $('.student_thumb a').removeClass('thumb_active');
    $(this).addClass('thumb_active');
});
  
// bottom to top
$(window).scroll(function(){ 
  if ($(this).scrollTop() > 100) { 
      $('#scroll').fadeIn(); 
  } else { 
      $('#scroll').fadeOut(); 
  } 
}); 
$('#scroll').click(function(){ 
  $("html, body").animate({ scrollTop: 0 }, 600); 
  return false; 
}); 

})  