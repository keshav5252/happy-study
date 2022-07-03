let loader = document.querySelector('.loader');
let nav = document.querySelector('.site-nav');

function timeToHome() {

    setTimeout(() => {
        loader.style.display = 'none';
        nav.style.zIndex = '100';
        var allElements = document.getElementsByTagName("*");
        for (var i = 0, len = allElements.length; i < len; i++) {
            var element = allElements[i];
            element.style.overflowY = 'visible';
        }

    }, 2500);

}

window.addEventListener('load', timeToHome());


window.onload = function () {

    const newDiv = document.createElement('div');

    document.body.appendChild(newDiv);

    newDiv.innerHTML = '<h3 id="wm-text">Maded by Genuity Code</h3>';

    const newDivText = document.querySelector("#wm-text");

    newDivText.style = "font-size: 20px; font-family: Raleway; font-weight: 400; position: fixed;user-select: none;";

    newDiv.style = "width: 16rem; height: 30px; background: linear-gradient(45deg,rgb(128, 128, 255), yellow,green); color: black; display: flex; align-items: center; justify-content: center; float: right; border-top-left-radius: 15px;position: fixed; bottom: 0; right: 0; backdrop-filter: blur(25px); opacity: 0.5; cursor: pointer;";

    var x = window.matchMedia("(max-width: 558px)");

    if (x.matches) {

        newDiv.style.display = "none";

    } else {

        newDiv.style.display = "flex";

    }
    window.scrollTo(0, 0);
}


let hamburger = document.querySelector('.site-hamburger');
let mobileNav = document.querySelector('.site-mobi-nav');

hamburger.addEventListener('click', function () {
    if (mobileNav.style.display === 'none') {
        mobileNav.style.display = 'block';
    } else {
        mobileNav.style.display = 'none';
    }
})


let dropIcon1 = document.querySelector('#drop-icon-1');
let dropIcon2 = document.querySelector('#drop-icon-2');
let dropIcon3 = document.querySelector('#drop-icon-3');
let dropIcon4 = document.querySelector('#drop-icon-4');


let dropDeepNav1 = document.querySelector('.mobi-drop-div-1');
let dropDeepNav2 = document.querySelector('.mobi-drop-div-2');
let dropDeepNav3 = document.querySelector('.mobi-drop-div-3');
let dropDeepNav4 = document.querySelector('.mobi-drop-div-4');


dropIcon1.addEventListener('click', function () {
    if (dropDeepNav1.style.display === 'none') {
        dropDeepNav1.style.display = 'block';
    } else {
        dropDeepNav1.style.display = 'none';
    }
})


dropIcon2.addEventListener('click', function () {
    if (dropDeepNav2.style.display === 'none') {
        dropDeepNav2.style.display = 'block';
    } else {
        dropDeepNav2.style.display = 'none';
    }
})

dropIcon3.addEventListener('click', function () {
    if (dropDeepNav3.style.display === 'none') {
        dropDeepNav3.style.display = 'block';
    } else {
        dropDeepNav3.style.display = 'none';
    }
})

dropIcon4.addEventListener('click', function () {
    if (dropDeepNav4.style.display === 'none') {
        dropDeepNav4.style.display = 'block';
    } else {
        dropDeepNav4.style.display = 'none';
    }
})




