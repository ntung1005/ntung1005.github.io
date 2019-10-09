// Fix header
window.onscroll = function() {
    myFunction();
  };
  
  let header = document.getElementById("header");
  let sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  
  // Header hamburger
  
  $(".hamburger-bars").click(function() {
    $(".mobile-nav").addClass("add");
  });
  
  $(".close-nav").click(function() {
    $(".mobile-nav").removeClass("add");
  });
  
  
  
  
  
  
  // Search
  $('.search').click(function(){
    event.preventDefault;
    $('.search-area').addClass('show')
  })
  
  
  $('.close-search-area').click(function(){
    $('.search-area').removeClass('show')
  })
  
  