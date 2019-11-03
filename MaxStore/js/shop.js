$(document).ready(function() {
  $(".name-filter-item").click(function() {
    $(this)
      .next(".content-filter-item")
      .slideToggle();
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

for (let i = 0; i < 8; i++) {
  products += `
        <div class="col-lg-4 col-md-6 blogBox" style="display: none;">
        <div class="product-grid">
					<div class="product-image">
						<a href="#">
							<img class="pic-1" src="../img/products/img-1.jpg">
							<img class="pic-2" src="../img/products/img-2.jpg">
						</a>
						<span class="product-trend-label">Trend</span>
						<ul class="social">
							<li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
							<li><a href="#" data-tip="Wishlist"><i class="fa fa-heart"></i></a></li>
							<li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
							<li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
						</ul>
					</div>
					<div class="product-content">
						<h3 class="title"><a href="#">Men's Blazer</a></h3>
						<div class="price">$21.00</div>
					</div>
				</div>
    </div>
        `;
}

$(".items").html(products);












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