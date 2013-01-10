jQuery().ready(function($){
    //states, small, med or large

    var layout, width;
    var menu_toggle_state = 'hide';

    var get_width = function(){
        width = $(window).width();
        if(width < 500 ) { layout = 'small'}
        else if(width > 500 && width < 700){ layout = 'med'}
        else if (width > 700){ layout = 'large'}
        //console.log('width : '+ width + ' layout : '+ layout );
    }
    var fit_colums = function (){
        var biggestHeight = 0;
        var colums = $('[class*="col-"]');
        colums.each(function(){
            $(this).css('height', 'auto');
            if($(this).height() > biggestHeight){
                biggestHeight = $(this).height();
            }
        });
        colums.height( biggestHeight );
    }

    get_width();
    fit_colums();
    $(window).resize( function(){
        get_width();
        // TODO possible memory leak, running fit colums when in small layout
        fit_colums();
        /*
        // TODO figure this out,
        if(layout != 'small' && menu_toggle_state == 'show'){
            console.log('resize should hide menu');
            hide_menu();
            $('.col-1').css({'width':'66.66%'});
            $('.col-2').css({'display':'block','width':'33.33%'});
        }
        */

    });


    var show_menu = function(){
        var col1_width = $('.col-1').width();
        var col2_width = 270;
        $('.btnmenu').css({'right':0});
        $('.grid').css({'width' : col1_width + col2_width,
                        'position':'relative',
                        'left':  - col2_width });

        $('.col-1').css({'width':col1_width,
                         'float':'left'});
        $('.col-2').css({'display':'block',
                         'width':col2_width,
                         'float': 'right'});
        menu_toggle_state = 'show';

    }
    var hide_menu = function (){
        var col1_width = $('.col-1').width();

        $('.btnmenu').css({'right':'-1em'});
        $('.grid').css({'width' : 'auto',
                        'position':'relative',
                        'left':  0 });

        $('.col-1').css({'width':'auto',
                         'float':'left'});
        $('.col-2').css({'display':'none'});
        menu_toggle_state = 'hide';

    }
    var toggle = function( e ){
        e.preventDefault();
        if(menu_toggle_state == 'hide'){
            show_menu();

            /*
            // TODO figure out why this does not work,
            $('.col-1').bind('click',function( e ){
                e.preventDefault();
                hide_menu();
                 menu_toggle_state = 'hide';
             });
             */
        } else {
            hide_menu();
            //$('.col-1').unbind('click');

        }
        console.log( menu_toggle_state );
    }
    var menu_btn = $('.btnmenu');

    menu_btn.click( toggle );
    menu_btn.css({'cursor':'pointer','cursor':'hand'});
});