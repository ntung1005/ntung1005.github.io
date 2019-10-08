$(document).ready(function() {
  $(".name-filter-color").click(function() {
    $(".content-filter-color").slideToggle();
  });
});

// Products

let info_item = [
  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "../img/products/item1.jpg",
    src2: "../img/products/item2.jpg"
  },

  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "../img/products/item1.jpg",
    src2: "../img/products/item2.jpg"
  },
  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "../img/products/item1.jpg",
    src2: "../img/products/item2.jpg"
  },
  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "../img/products/item1.jpg",
    src2: "../img/products/item2.jpg"
  },
  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "../img/products/item1.jpg",
    src2: "../img/products/item2.jpg"
  },
  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "../img/products/item1.jpg",
    src2: "../img/products/item2.jpg"
  },
  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "../img/products/item1.jpg",
    src2: "../img/products/item2.jpg"
  },
  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "../img/products/item1.jpg",
    src2: "../img/products/item2.jpg"
  },
  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "../img/products/item1.jpg",
    src2: "../img/products/item2.jpg"
  },
  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "../img/products/item1.jpg",
    src2: "../img/products/item2.jpg"
  },
  {
    name: "MODERN MATTE LIPSTICK",
    new_price: "299,000",
    src1: "../img/products/item1.jpg",
    src2: "../img/products/item2.jpg"
  }
];

let products = "";

for (let i = 0; i < info_item.length; i++) {
  products += `
      <div class="col-lg-4 col-md-6 blogBox">
      <div id="item">
          <div class="img-item1"><img src="${info_item[i].src1}" alt=""></div>
          <div class="img-item2"><img src="${info_item[i].src2}" alt=""></div>
          <div class="info-item">
              <h6>${info_item[i].name}</h6>
              <p>${info_item[i].new_price} VNĐ</p>
          </div>
      </div>
  </div>
      `;
}

$(".items").html(products);
