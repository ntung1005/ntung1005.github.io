$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 3
            },
            
        }
    });


    $('.btn-evaluate').click(function(){
        $(".evaluate-content").slideToggle();
    })
});