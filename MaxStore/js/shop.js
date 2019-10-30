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
        <div class="col-lg-4 col-md-6 blogBox">
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













// Phân Trang
//<![CDATA[
$(document).ready(function() {
  var show_per_page = 6;

  var number_of_items = $("#content")
    .children()
    .size();

  var number_of_pages = Math.ceil(number_of_items / show_per_page);

  $("#current_page").val(0);
  $("#show_per_page").val(show_per_page);

  var navigation_html =
    '<a class="previous_link" href="javascript:previous();">«</a>';

  var current_link = 0;
  while (number_of_pages > current_link) {
    navigation_html +=
      '<a class="page_link" href="javascript:go_to_page(' +
      current_link +
      ')" longdesc="' +
      current_link +
      '">' +
      (current_link + 1) +
      "</a>";
    current_link++;
  }

  navigation_html += '<a class="next_link" href="javascript:next();">»</a>';

  $("#page_navigation").html(navigation_html);

  $("#page_navigation .page_link:first").addClass("active_page");

  $("#content")
    .children()
    .css("display", "none");

  $("#content")
    .children()
    .slice(0, show_per_page)
    .css("display", "block");
});

function previous() {
  new_page = parseInt($("#current_page").val()) - 1;

  if ($(".active_page").prev(".page_link").length == true) {
    go_to_page(new_page);
  }
}

function next() {
  new_page = parseInt($("#current_page").val()) + 1;

  if ($(".active_page").next(".page_link").length == true) {
    go_to_page(new_page);
  }
}
function go_to_page(page_num) {
  var show_per_page = parseInt($("#show_per_page").val());

  start_from = page_num * show_per_page;

  end_on = start_from + show_per_page;

  $("#content")
    .children()
    .css("display", "none")
    .slice(start_from, end_on)
    .css("display", "block");

  $(".page_link[longdesc=" + page_num + "]")
    .addClass("active_page")
    .siblings(".active_page")
    .removeClass("active_page");

  $("#current_page").val(page_num);
}
