!function e(r,n,t){function i(u,a){if(!n[u]){if(!r[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(o)return o(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var c=n[u]={exports:{}};r[u][0].call(c.exports,function(e){var n=r[u][1][e];return i(n||e)},c,c.exports,e,r,n,t)}return n[u].exports}for(var o="function"==typeof require&&require,u=0;u<t.length;u++)i(t[u]);return i}({1:[function(e,r,n){"use strict";jQuery(function(){jQuery(".navbar-toggle").on("click",function(){jQuery(".Description").fadeToggle()}),jQuery(".owl-carousel").owlCarousel({center:!0,items:3,loop:!0,nav:!0,navText:["Anterior","Siguiente"],margin:100,stagePadding:80,responsive:{1e3:{items:3},600:{stagePadding:0,margin:10,items:2},0:{stagePadding:10,items:1}}})})},{}]},{},[1]);
//# sourceMappingURL=maps/app.js.map
