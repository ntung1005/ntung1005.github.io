let a = '';
for (i = 1; i <= 8; i++) {

    a += `<div class=" col-md-3 col-sm-6">
    <div class="product">
        <div class="imgbox">
            <img src="../img/sản phẩm ${i}.jpg" alt="">

            <div class="details">

                <a href="">Thêm Vào Giỏ</a>
                <a href="">Mua Ngay</a>
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

document.getElementById('item').innerHTML = a;

// /Load Image/ 


let gallery = '';
for (i = 1; i <= 8; i++) {

    gallery += `<div class=" col-md-3 col-sm-6">
    <div class="product">
        <div class="imgbox">
            <img src="../img/sản phẩm ${i}.jpg" alt="">

            <div class="details">

                <a href="item.html">Thêm Vào Giỏ</a>
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

function loadImages() {
    document.getElementById("other_item").innerHTML = gallery;

    $("#e").remove();
}