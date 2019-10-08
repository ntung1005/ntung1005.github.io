$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin: 10,
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
