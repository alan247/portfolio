/* Menu */
$(window).scroll(function() {
        if ($('main').position().top - $(window).scrollTop() > -616) {
            $('.top-bar-section ul li').removeClass('active');
        }
        if ($('#projects').position().top - $(window).scrollTop() < 96) {
            $('.menu-projects').parent().addClass('active').siblings().removeClass('active');
        }
        if ($('#skills').position().top - $(window).scrollTop() < 96) {
            $('.menu-skills').parent().addClass('active').siblings().removeClass('active');
        }
    });

/* Circle graphs */
$('.skill-html5').circleProgress({
    value: 0.85,
    size: 250,
    thickness: 30,
    fill: {
        color: "#E44D26"
    }
});
$('.skill-css3').circleProgress({
    value: 0.75,
    size: 250,
    thickness: 30,
    fill: {
        color: "#0171BB"
    }
});
$('.skill-js').circleProgress({
    value: 0.20,
    size: 250,
    thickness: 30,
    fill: {
        color: "#E5A32B"
    }
});
$('.skill-php').circleProgress({
    value: 0.35,
    size: 250,
    thickness: 30,
    fill: {
        color: "#6785B7"
    }
});
$('.skill-git').circleProgress({
    value: 0.40,
    size: 250,
    thickness: 30,
    fill: {
        color: "#F34F29"
    }
});

