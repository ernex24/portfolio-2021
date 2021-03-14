window.onload = function (e) {
    console.log('load')
    var subtitle = document.getElementsByClassName("hero-subtitle")[0].style.transform = "translateX(0)";
    var title = document.getElementsByClassName("hero-title")[0].style.transform = "translateX(0)";
    var description = document.getElementsByClassName("hero-description")[0].style.transform = "translateX(0)"
    var scrolldown = document.getElementsByClassName("scrolldown")[0].style.transform = "translateY(0)"
    var counter = document.getElementsByClassName("counter")[0].style.transform = "translateY(0)";
};

var myFullpage = new fullpage('#fullpage', {
    anchors: ['about_me', 'project_1', 'project_2'],
    css3: true,
    navigation: true,
    navigationPosition: 'left',
    scrollingSpeed: 500,
    onLeave: function (origin, destination, direction) {


        if (origin.index === 0){
            console.log("After load destination " + destination.index)
            document.getElementsByClassName("hero-image")[0].style.transform = "scale(0.8)";
        }
        
        if (origin.index === 1){
            let das = document.getElementsByClassName("hero-image")[1].style.transform = "scale(0.8)";
            console.log(das)
        }

        if (origin.index === 2){
            let das = document.getElementsByClassName("hero-image")[2].style.transform = "scale(0.8)";
            console.log(das)
        }



        if (destination.index === 0) {
            console.log(destination.index)
            var subtitle = document.getElementsByClassName("hero-subtitle")[0].style.transform = "translateX(0)";
            var title = document.getElementsByClassName("hero-title")[0].style.transform = "translateX(0)";
            var description = document.getElementsByClassName("hero-description")[0].style.transform = "translateX(0)"
            var scrolldown = document.getElementsByClassName("scrolldown")[0].style.transform = "translateY(0)"
            var counter = document.getElementsByClassName("counter")[0].style.transform = "translateY(0)";
            
        }

        if (origin.index === 0) {
            console.log(origin.index)
            var subtitle = document.getElementsByClassName("hero-subtitle")[0].style.transform = "translateX(-120%)";
            var title = document.getElementsByClassName("hero-title")[0].style.transform = "translateX(-120%)";
            var description = document.getElementsByClassName("hero-description")[0].style.transform = "translateX(-120%)";
            var counter = document.getElementsByClassName("counter")[0].style.transform = "translateY(200%)";

        }

        if (destination.index === 1) {
            console.log(destination.index)
            var subtitle = document.getElementsByClassName("hero-subtitle2")[0].style.transform = "translateX(0)";
            var title = document.getElementsByClassName("hero-title2")[0].style.transform = "translateX(0)";
            var description = document.getElementsByClassName("hero-description2")[0].style.transform = "translateX(0)";
            var scrolldown = document.getElementsByClassName("scrolldown")[0].style.transform = "translateY(300%)"
            var counter1 = document.getElementsByClassName("counter1")[0].style.transform = "translateY(0)";
 

        }

        if (origin.index === 1) {
            var subtitle = document.getElementsByClassName("hero-subtitle2")[0].style.transform = "translateX(-120%)";
            var title = document.getElementsByClassName("hero-title2")[0].style.transform = "translateX(-120%)";
            var description = document.getElementsByClassName("hero-description2")[0].style.transform = "translateX(-120%)";
            var counter1 = document.getElementsByClassName("counter1")[0].style.transform = "translateY(200%)";

        }

        if (destination.index === 2) {
            var subtitle = document.getElementsByClassName("hero-subtitle3")[0].style.transform = "translateX(0)";
            var title = document.getElementsByClassName("hero-title3")[0].style.transform = "translateX(0)";
            var description = document.getElementsByClassName("hero-description3")[0].style.transform = "translateX(0)";
            var scrolldown = document.getElementsByClassName("scrolldown")[0].style.transform = "translateY(300%)"
            var counter2 = document.getElementsByClassName("counter2")[0].style.transform = "translateY(0)";

        }

        if (origin.index === 2) {
            var subtitle = document.getElementsByClassName("hero-subtitle3")[0].style.transform = "translateX(-120%)";
            var title = document.getElementsByClassName("hero-title3")[0].style.transform = "translateX(-120%)";
            var description = document.getElementsByClassName("hero-description3")[0].style.transform = "translateX(-120%)";
            var counter2 = document.getElementsByClassName("counter2")[0].style.transform = "translateY(200%)";

        }

    },

    afterLoad: function(origin, destination, direction){

        if (destination.index === 0){
            console.log("After load destination " + destination.index)
            document.getElementsByClassName("hero-image")[0].style.transform = "scale(1)";
        }
        
        if (destination.index === 1){
            let das = document.getElementsByClassName("hero-image")[1].style.transform = "scale(1)";
            console.log(das)
        }

        if (destination.index === 2){
            let das = document.getElementsByClassName("hero-image")[2].style.transform = "scale(1)";
            console.log(das)
        }
    },

    afterSlideLoad: function (section, origin, destination, direction) {
        console.log(destination.index)
        if (section.index === 0) {
            var subtitle = document.getElementsByClassName("hero-subtitle")[0].style.transform = "translateX(0)";
            var title = document.getElementsByClassName("hero-title")[0].style.transform = "translateX(0)";
            var description = document.getElementsByClassName("hero-description")[0].style.transform = "translateX(0)";
            var scrolldown = document.getElementsByClassName("scrolldown")[0].style.transform = "translateY(0)"
            var counter = document.getElementsByClassName("counter")[0].style.transform = "translateY(0)";
        }

    },


});
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


$(document).ready(function () {
    $(".animsition-overlay").animsition({
        inClass: 'overlay-slide-in-top',
        outClass: 'overlay-slide-out-top',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: true,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) {
            window.location.href = url;
        }
    });

        let botton = document.getElementsByClassName('menu')[0].addEventListener('click', function(){
            this.classList.toggle('opened');
            this.setAttribute('aria-expanded', this.classList.contains('opened'));
            let menu = document.getElementsByClassName('over-menu')[0];
            menu.classList.toggle('over-menu-opened');
            console.log(menu)
        })
        
     
    
    
});