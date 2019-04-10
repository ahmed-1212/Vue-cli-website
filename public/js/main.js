//Wow Js Init
new WOW().init();

$(function () {
    'use strict';

    //Hide And Show The Search Overlay
    $('.search-ic').click(function (e) {
        e.preventDefault();
        $('.search').animate({
            opacity: 1,
            zIndex: '2000'
        }, 400)
    })

    $('.close').click(function (e) {
        e.preventDefault();
        $('.search').animate({
            opacity: 0,
            zIndex: '-1'
        }, 400)
    });

    $('.search').click(function (e) {
        $(this).animate({
            opacity: 0,
            zIndex: '-1'
        }, 400)
    })

    $('.form-groupe').click(function (e) {
        e.stopPropagation();
    })

    //Adjusting The Height
    $('.img').height($('.aboyt-sec').innerHeight());
    
    $(window).resize(function () {
        $('.img').height($('.aboyt-sec').innerHeight());
    })

    //Hide And show The Overlay
    $('.col-s').hover(function () {

        $(this).children('.work-img').children('.over').fadeIn()
    }, function () {

        $(this).children('.work-img').children('.over').fadeOut()
    });

    //Switching The Active Link
    $('.navi li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        //Shuffle The Work
        if ($(this).data('class') === 'all') {
            $('.row-s .work-img').css('opacity', 1);
        } else {
            $('.row-s .work-img').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    })
    
    //Show And Hide The Scroll Up Button
    $(window).scroll(function () {
        if($(this).scrollTop() >= 400) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });

    //Scroll Up Button
    $('.up').click(function () {

        $('body, html').animate({
            scrollTop: 0
        }, 600)
    })

    //Show And Hide Section One Overlay
    $('.serv-img').hover(function () {
        $(this).children('.over').animate({
            top: 0
        });
    }, function () {
        $(this).children('.over').animate({
            top: '-500px'
        });
    });

    //Adjusting The Width Of The Overlay On Section One
    $('.serv-img ').children('.over').width($('.work-imgi').width());
    $(window).resize(function () {
        $('.serv-img ').children('.over').width($('.work-imgi').width());
    });

    //Show And Hide The News Section Overlay
    $('.news').hover(function () {
        $(this).children('.over').slideDown();
    }, function () {
        $(this).children('.over').slideUp();
    });

    $('.news-title').hover(function () {
        $(this).siblings('.news').children('.over').slideDown();
    }, function () {
        $(this).siblings('.news').children('.over').slideUp();
    });

    //Hiden The Search And The Get Quote Button
    $('.navbar-toggler').click(function () {
        $('.another-nav').toggleClass('hide');
        $('#navbarNavDropdown').toggleClass('toggler-color');
    })

    //Changing The Navbar Background-color After Scrolling Down
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 300) {
            $('.navbar').addClass('white-nav')
            $('.navbar').removeClass('trans-nav')
        } else {
            $('.navbar').addClass('trans-nav')
            $('.navbar').removeClass('white-nav')
        }
    })
    
})