$(document).ready(function() {

/*========profile=======*/
  $(".profile").hover(function(event) {
    if($(window).width() >= 1025)
      {
        event.preventDefault();
        $(this).find('.profile__dropdown').fadeToggle();
    }
  });

  $(".profile").on("click", function(event) {
    if($(window).width() < 1025)
      {
        event.preventDefault();
        $(this).find('.profile__dropdown').fadeToggle();
    }
  });

  $(document).mouseup(function (e) {
      var dropdown = $(".profile");
      if (dropdown.has(e.target).length === 0 ){
        $('.profile__dropdown').fadeOut(111);
      }    
  });
  /*========/profile=======*/

  /*===========Menu=========*/
  $(".menu-btn").on("click", function(event) {
      event.preventDefault();
      $('.menu__block').fadeIn();
      $('body').addClass('hidden');
  });
  $(".menu__close").on("click", function(event) {
      event.preventDefault();
      $('.menu__block').fadeOut();
      $('body').removeClass('hidden');
  });
  $(".menu__block-bg").on("click", function() {
      $('.menu__block').fadeOut();
      $('body').removeClass('hidden');
  });
  /*===========/menu=========*/

  /*===========Menu-list=========*/
  $(".menu-list__title").on("click", function() {
      $(this).toggleClass('active');
      $(this).next().slideToggle(333);
      $(".menu-list__title").not(this).next().slideUp();
      $(".menu-list__title").not(this).removeClass('active');
  });
  /*===========/menu-list=========*/

  /*===========course-menu=========*/
  $(".course-menu__name").on("click", function() {
      $(this).toggleClass('active');
      $(this).next().slideToggle(333);
  });
  /*===========/course-menu=========*/

});


