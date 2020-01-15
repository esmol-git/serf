$(document).ready(function () {
    svg4everybody({});
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="static/images/content/icon/arrow-left.svg" alt="arrow-left"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="static/images/content/icon/arrow-right.svg" alt="arrow-right"></img>',
        asNavFor: '.slider-dotshead',
    })
    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="static/images/content/icon/arrow-left.svg" alt="arrow-left"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="static/images/content/icon/arrow-right.svg" alt="arrow-right"></img>',
        asNavFor: '.slider-map'
    })
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    })
    $('.holder__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="static/images/content/icon/arrow-left.svg" alt="arrow-left"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="static/images/content/icon/arrow-right.svg" alt="arrow-right"></img>',
    })
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="static/images/content/sleep/plus.svg", alt="minus"></div><div class="quantity-button quantity-down"><img src="static/images/content/sleep/minus.svg", alt="minus"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    $('.quantity-button').on('click', function () {
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
        $('.summ').html('$' + ' ' + summ)
    });
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + ' ' + summ)


});


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}