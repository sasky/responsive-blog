
jQuery().ready(function($){
    //states, small, med or large
    var layout = 'small';

    if($(window).width() < 400){
        layout = 'small';
    } else if ($(window).width() < 900){
        layout = 'med';
    } else {
        layout = 'large';
    }
    console.log(layout);
    var aside_width = function(){
        var asideWidth = ($(window).width() - 120);
        console.log("asideWidth "  + asideWidth);
        return asideWidth
    }

    if(layout === 'small'){
        $('aside').css("width",aside_width);

    }

    var debug = function(){
        $('body').append('<p><strong> layout '+ layout + '</strong></p>');
    }
    //debug();
});
