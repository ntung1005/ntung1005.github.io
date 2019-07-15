// Search 

function search_responsive() {
    let x = document.getElementById('input_search');

    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    

}

// 




// Modal

$('.message a').click(function () {
    $('.form_1').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
});


function login() {

    let a = document.getElementById('login-page');

    if (a.style.display === 'block') {
        a.style.display = 'none'
    } else {
        a.style.display = 'block';
    }
    document.getElementById('fullscreen').style.visibility = 'visible';
    document.getElementById('fullscreen').style.opacity = 1;
    document.getElementById('fullscreen').style.zIndex=1000;
    
}


function off() {
    let a = document.getElementById('login-page');

    if (a.style.display === 'block') {
        a.style.display = 'none'
    }

    document.getElementById('fullscreen').style.visibility = 'hidden';
    document.getElementById('fullscreen').style.opacity = 0;
    document.getElementById('fullscreen').style.zIndex=-1000;

}
// 