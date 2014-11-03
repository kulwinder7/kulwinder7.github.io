/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
    fullScr.innerHTML = 'full';
 */

var figures;
var current;
var container;
var document;

var init = function (doc) {
    document = doc;
    container = document.getElementById("container");
    figures = container.querySelectorAll('figure');
    controls();
    setListeners();
    current = 0;
};

var forward = function () {
    if (current < figures.length - 1) {
        hide(figures[current]);
        current = current + 1;
        show(figures[current]);
    }
};

var back = function () {
    if (current > 0) {
        hide(figures[current]);
        current = current - 1;
        show(figures[current]);
    }
};

var setListeners = function () {
    container.querySelector('.back-icon').addEventListener('click', function () {
        back();
    }, false);
    container.querySelector('.forward-icon').addEventListener('click', function () {
        forward();
    }, false);
    document.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode === 37 || e.keyCode === 33) {
            back();
        }
        else if (e.keyCode === 39 || e.keyCode === 34) {
            forward();
        }
    };
    container.querySelector('.fullscreen-icon').addEventListener('click',function(){
        fullScreen();
    },false);    
};

var hey = function () {
    alert("hello! from kul's js function hey");
};

var show = function (element) {
    element.classList.add('show');
};

var hide = function (element) {
    element.classList.remove('show');
};

var controls = function () {
    var back = document.createElement("span"),
            forward = document.createElement("span"),
            fragment = document.createDocumentFragment(),
            fullScr = document.createElement("span");

    back.classList.add('back-icon');
    forward.classList.add('forward-icon');
    fullScr.classList.add('fullscreen-icon');

    back.innerHTML = '<';
    forward.innerHTML = '>';
    fragment.appendChild(forward);
    fragment.appendChild(back);
    fragment.appendChild(fullScr);
    container.appendChild(fragment);    
};

var fullScreen = function(){
    if (!document.fullscreenElement && // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {  // current working methods
        if (document.documentElement.requestFullscreen) {
            container.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            container.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            container.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            container.webkitRequestFullscreen(container.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
};
