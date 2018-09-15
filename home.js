(function(){
    $(document).ready(init);
    
    function init(){
        $('.sidenav').sidenav();
        $('#ied').on('click', ied);
        $('#home').on('click', home);
    }

    function ied(){
        $('.ied').css('display', 'block');
        $('.info').css('display', 'none');
        $('.compSci').css('display', 'none');
        $('.about').css('display', 'none');

        $('.sidenav').sidenav();
        $('html, body').animate({
            scrollTop: $('.ied').offset().top},
        "slow");
    }

    function home(){
        $('.ied').css('display', 'none');
        $('.info').css('display', 'block');
        $('.compSci').css('display', 'none');
        $('.about').css('display', 'none');

        $('.sidenav').sidenav();
        $('html, body').animate({
            scrollTop: $('.info').offset().top},
        "slow");
    }
})();