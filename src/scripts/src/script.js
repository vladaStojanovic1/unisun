$(document).ready(function(){
    $('.eng').on('click',function(e){
        e.preventDefault();
        $('.de').slideToggle(50);
        $(this).toggleClass('-arrowUp');
      });
    
    $('.hamburger').click(function(){
        $('body').toggleClass('responsive');
    })  

    $( window ).resize(function() {
        $("body").removeClass("responsive");
    });
})