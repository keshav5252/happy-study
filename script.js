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
