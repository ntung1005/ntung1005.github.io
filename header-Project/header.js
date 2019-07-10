$('.message a').click(function () {
    $('form').animate({
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
}


function off() {
    let a = document.getElementById('login-page');

    if (a.style.display === 'block') {
        a.style.display = 'none'
    }

    document.getElementById('fullscreen').style.visibility = 'hidden';
    document.getElementById('fullscreen').style.opacity = 0;

}