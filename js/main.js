$(document).ready(function(){
    $('.btn-navigation').click(function(){
        $('.navigation').toggleClass('isopen');
        $('.btn-navigation').toggleClass('rotate');
        $('body').toggleClass('nav-open');
    });
});
