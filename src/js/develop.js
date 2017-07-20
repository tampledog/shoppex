function cabinet() {
        var btn = $('.js-cabinet');
        var lst = $('.js-options');
    $(document).on('click', '.js-cabinet', function () {
        if (btn.hasClass('active')) {
            btn.removeClass('active');
            lst.stop().slideUp();
        } else {
            btn.addClass('active');
            lst.stop().slideDown();
        }
    });
    $(document).on('click touchstart', function () {
        if (!btn.is(event.target) && btn.has(event.target).length === 0 && !lst.is(event.target) && lst.has(event.target).length === 0)  {
            btn.removeClass('active');
            lst.stop().slideUp();
        }
    });
}

function search () {
    var srch = $('.js-form input[type=text]');
    var lst = $('.js-search');
    if (srch.length > 0) {
        srch.focus(function () {
            lst.slideDown(290);
            setTimeout(function () {
                scrolling();
            }, 300)

        });
        srch.blur(function () {
            lst.slideUp();
        });
    }
}

function lang () {
    $('.js-left select').styler({
        selectSmartPositioning:false
    });
}

function scrolling () {
    $('.js-search').jScrollPane({
        showArrows: false
    });
}

function slideBg() {
        $('.js-slider-bg').slick({
            arrows: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1
        });
}

function slideFwd() {
    var obj = $('.js-slider-bg');
    $('.js-forward').click(function () {
        obj.slick('slickNext')
    });
    $('.js-backward').click(function () {
        obj.slick('slickPrev')
    });
}

function saleSlide() {
        $('.js-sales-slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false
        });
}

function slideSales() {
    var obj = $('.js-sales-slider');
    $('.js-sales-b-r').click(function () {
        obj.slick('slickNext')
    });
    $('.js-sales-b-l').click(function () {
        obj.slick('slickPrev')
    });
}

$(document).ready(function () {
    lang();
    search();
    cabinet();
    slideBg();
    slideFwd()
    saleSlide();
    slideSales();

});

