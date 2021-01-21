$(document).ready(function(){
    $('.eng').on('click',function(){
        $('.de').slideToggle(280);
        $(this).toggleClass('-arrowUp');
      });
    
    $('.hamburger').click(function(){
        $('body').toggleClass('responsive');
    })  
})