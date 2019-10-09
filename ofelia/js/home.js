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

$(document).ready(function() {
  $(".blogBox")
    .slice(0, 3)
    .show();
  if ($(".blogBox:hidden").length != 0) {
    $("#loadMore").show();
  }
  $("#loadMore").on("click", function(e) {
    e.preventDefault();
    $(".blogBox:hidden")
      .slice(0, info_item.length)
      .show();
    if ($(".blogBox:hidden").length == 0) {
      $("#loadMore").hide();
    }
  });
});

let products = "";

for (let i = 0; i < info_item.length; i++) {
  products += `
    <div class="col-md-4 col-sm-6 blogBox" style="display: none;">
    
    <div id="item">
    <a href="pages/single-product.html">

        <div class="img-item1"><img src="${info_item[i].src1}" alt=""></div>
        <div class="img-item2"><img src="${info_item[i].src2}" alt=""></div>
    
      </a>
        <div class="info-item">
            <h6>${info_item[i].name}</h6>
            <p>${info_item[i].new_price} VNĐ</p>
        </div>
    </div>
</div>
    `;
}

$(".items").html(products);
