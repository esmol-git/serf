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