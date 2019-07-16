let a = '';
for (i = 1; i <= 8; i++) {

    a += `<div class="col-lg-3 col-md-4 col-sm-6" id="sanpham">
    <div class="product">
        <div class="imgbox">
            <img src="../img/sản phẩm ${i}.jpg" alt="">

            <div class="details">

                <a href=""><i class="fas fa-cart-arrow-down"></i></a>
                <a href=""><i class="fas fa-search-plus"></i></a>
                <a href="item.html">Mua Ngay</a>
            </div>
        </div>

        <div class="info">
            <div style="padding-bottom: 15px">
                <h6>Brand Name<br><span>Giày XXX</span></h6>
                <div class="price">$55.55</div>
            </div>
        </div>
    </div>
</div>`
}

document.getElementById('newitem').innerHTML = a;
document.getElementById('hotitem').innerHTML = a;


let b = '';
for (i = 0; i < 3; i++) {
    b += `<div id="comment" class="col-sm-4" style="padding: 1.2rem">
  <div id="comment_1" style="width:5rem; left:50%; transform: translate(-50%)">
      <img src="../img/chandung.png" alt="">
  </div>
  <div id="comment_2">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</div>`
}

document.getElementById('main_4_1').innerHTML = b;


let c = '';
for (i = 0; i < 3; i++) {
    c += `<div id="news" class="col-sm-4" style="padding: 1.2rem">
  
  <div id="news_1">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</div>`
}

document.getElementById('main_5_1').innerHTML = c;