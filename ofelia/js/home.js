// Fix header
window.onscroll = function() {myFunction()};

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

// Products

let info_item = [
  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "img/products/item1.jpg",
    src2: "img/products/item2.jpg"
  },

  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "img/products/item1.jpg",
    src2: "img/products/item2.jpg"
  },

  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "img/products/item1.jpg",
    src2: "img/products/item2.jpg"
  },

  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "img/products/item1.jpg",
    src2: "img/products/item2.jpg"
  },

  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "img/products/item1.jpg",
    src2: "img/products/item2.jpg"
  },

  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "img/products/item1.jpg",
    src2: "img/products/item2.jpg"
  },

  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "img/products/item1.jpg",
    src2: "img/products/item2.jpg"
  },

  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "img/products/item1.jpg",
    src2: "img/products/item2.jpg"
  }
];

let products = "";
for (const element of info_item) {
    products += `
    <div class="col-md-4 col-sm-6">
    <div id="item">
        <div class="img-item1"><img src="${element.src1}" alt=""></div>
        <div class="img-item2"><img src="${element.src2}" alt=""></div>
        <div class="info-item">
            <h6>${element.name}</h6>
            <p>${element.new_price} VNĐ</p>
        </div>
    </div>
</div>
    `;
}

$(".items").html(products);
