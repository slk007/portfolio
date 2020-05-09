$('.js-anchor-link').click(function(e){
    e.preventDefault();
    var target = $($(this).after('href'));
    if(target.lenth){
        var scrolTo =target.offset().top;
        $('body,html').animate({scrolltop:scrollTo+'px'},800);
    }
});