(function(){
    $(document).ready(init);
    
    function init(){
        $('.sidenav').sidenav();
        $('.collapsible').collapsible();
        $('#ied').on('click', ied);
        $('#home').on('click', home);
        $('#compSci').on('click', compSci);
    }

    function ied(){
        $('.ied').css('display', 'block');
        $('.home').css('display', 'none');
        $('.compSci').css('display', 'none');
        $('.about').css('display', 'none');

        $('.sidenav').sidenav();
        $('html, body').animate({
            scrollTop: $('.ied').offset().top},
        "slow");
    }

    function home(){
        $('.ied').css('display', 'none');
        $('.home').css('display', 'block');
        $('.compSci').css('display', 'none');
        $('.about').css('display', 'none');

        $('.sidenav').sidenav();
        $('html, body').animate({
            scrollTop: $('.home').offset().top},
        "slow");
    }
    
    function compSci(){
        $('.ied').css('display', 'none');
        $('.home').css('display', 'none');
        $('.compSci').css('display', 'block');
        $('.about').css('display', 'none');

        $('.sidenav').sidenav();
        $('html, body').animate({
            scrollTop: $('.compSci').offset().top},
        "slow");
    }
})();
