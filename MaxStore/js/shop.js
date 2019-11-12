$(document).ready(function() {
  $(".name-filter-item").click(function() {
    $(this)
      .next(".content-filter-item")
      .slideToggle();
  });
});

// Products

let item = [
  {
    name: "Giày 1",
    price: "14",
    src1: "../img/products/sản phẩm 1.jpg",
    src2: "../img/products/sản phẩm 1.jpg"
  },
  {
    name: "Giày 2",
    price: "16",
    src1: "../img/products/sản phẩm 2.jpg",
    src2: "../img/products/sản phẩm 2.jpg"
  },
  {
    name: "Giày 3",
    price: "55",
    src1: "../img/products/sản phẩm 3.jpg",
    src2: "../img/products/sản phẩm 3.jpg"
  },
  {
    name: "Giày 4",
    price: "144",
    src1: "../img/products/sản phẩm 4.jpg",
    src2: "../img/products/sản phẩm 4.jpg"
  },
  {
    name: "Giày 5",
    price: "198",
    src1: "../img/products/sản phẩm 5.jpg",
    src2: "../img/products/sản phẩm 5.jpg"
  },
  {
    name: "Giày 6",
    price: "151",
    src1: "../img/products/sản phẩm 6.jpg",
    src2: "../img/products/sản phẩm 6.jpg"
  },
  {
    name: "Giày 7",
    price: "265",
    src1: "../img/products/sản phẩm 7.jpg",
    src2: "../img/products/sản phẩm 7.jpg"
  },
  {
    name: "Giày 8",
    price: "134",
    src1: "../img/products/sản phẩm 8.jpg",
    src2: "../img/products/sản phẩm 8.jpg"
  },
  {
    name: "Giày 9",
    price: "1114",
    src1: "../img/products/sản phẩm 9.jpg",
    src2: "../img/products/sản phẩm 9.jpg"
  },
  
];

let products = "";

for (let i = 0; i < item.length; i++) {
  products += `
        <div class="col-lg-4 col-md-6 blogBox" style="display: none;">
        <div class="product-grid">
					<div class="product-image">
						<a href="#">
							<img class="pic-1" src="${item[i].src1}">
							<img class="pic-2" src="${item[i].src2}">
						</a>
						
						<ul class="social">
							<li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
							<li><a href="#" data-tip="Wishlist"><i class="fa fa-heart"></i></a></li>
							<li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
							<li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
						</ul>
					</div>
					<div class="product-content">
						<h3 class="title"><a href="#">${item[i].name}</a></h3>
						<div class="price">$${item[i].price}</div>
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
      .slice(0, item.length)
      .show();
    if ($(".blogBox:hidden").length == 0) {
      $("#loadMore").hide();
    }
  });
});