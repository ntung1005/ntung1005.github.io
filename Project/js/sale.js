let info_item = [{
        name: 'Sản Phẩm 1',
        old_price: "2.000.000 đ",
        new_price: "1.000.000",
        src: '../img/sản phẩm 1.jpg'
    },

    {
        name: 'Sản Phẩm 2',
        old_price: " 8.000.000 đ",
        new_price: "5.000.000",
        src: '../img/sản phẩm 2.jpg'
    },

    {
        name: 'Sản Phẩm 3',
        old_price: "5.000.000 đ",
        new_price: "4.000.000",
        src: '../img/sản phẩm 3.jpg'
    },

    {
        name: 'Sản Phẩm 4',
        old_price: "4.000.000 đ",
        new_price: "3.000.000",
        src: '../img/sản phẩm 4.jpg'
    },

    {
        name: 'Sản Phẩm 5',
        old_price: "35.000.000 đ",
        new_price: "32.000.000",
        src: '../img/sản phẩm 5.jpg'
    },

    {
        name: 'Sản Phẩm 6',
        old_price: "10.000.000 đ",
        new_price: "9.000.000",
        src: '../img/sản phẩm 6.jpg'
    },

    {
        name: 'Sản Phẩm 7',
        old_price: " 75.000.000 đ",
        new_price: "71.000.000",
        src: '../img/sản phẩm 7.jpg'
    },

    {
        name: 'Sản Phẩm 8',
        old_price: "1.500.000 đ",
        new_price: "1.000.000",
        src: '../img/sản phẩm 8.jpg'
    },

    {
        name: 'Sản Phẩm 9',
        old_price: "150.000đ",
        new_price: "100.000",
        data_newprice: "1-5",
        data_kindofitem: "fake",
        data_firm:"other",
        src: '../img/sản phẩm 9.jpg'
    },
    
    {
        name: 'Sản Phẩm 10',
        old_price: "600.000đ",
        new_price: "400.000",
        data_newprice: "1-5",
        data_kindofitem: "fake",
        data_firm:"other",
        src: '../img/sản phẩm 10.jpg'
    },
    
    {
        name: 'Sản Phẩm 11',
        old_price: "5.000.000đ",
        new_price: "4.000.000",
        data_newprice: "15-50",
        data_kindofitem: "auth",
        data_firm:"nike",
        src: '../img/sản phẩm 11.jpg'
    },
    
    {
        name: 'Sản Phẩm 12',
        old_price: "2.000.000đ",
        new_price: "1.500.000",
        data_newprice: "5-15",
        data_kindofitem: "rep",
        data_firm:"adidas",
        src: '../img/sản phẩm 12.jpg'
    },



];














let a = '';
for (i = 0; i < info_item.length; i++) {

    a += ` 
    <div class="col-lg-3 col-md-4 col-sm-6 sanpham">
        <div class="product">
            <div class="imgbox">
            <a href="item.html"><img src="${info_item[i].src}" alt=""></a>

                <div class="details">
                    <a data-toggle="modal" data-target="#exampleModal">Xem Nhanh</a>
                    <a href="item.html">Mua Ngay</a>
                </div>
            </div>

            <div class="info">
                <div style="padding-bottom: 15px">
                    <h4>${info_item[i].name}</h4> 
                    <div class="price_old">${info_item[i].old_price}</div>
                    <div class="price_new">${info_item[i].new_price}</div>

                </div>
            </div>
        </div>
    </div>
    
`
}

document.getElementById('newitem').innerHTML = a;
document.getElementById('hotitem').innerHTML = a;


let gallery = '';
for (i = 0; i <info_item.length; i++) {

    gallery += `
    <div class="col-lg-3 col-md-4 col-sm-6 sanpham">
        <div class="product">
            <div class="imgbox">
            <a href="item.html"><img src="${info_item[i].src}" alt=""></a>

                <div class="details">
                    <a data-toggle="modal" data-target="#exampleModal">Xem Nhanh</a>
                    <a href="item.html">Mua Ngay</a>
                </div>
            </div>

            <div class="info">
                <div style="padding-bottom: 15px">
                    <h4>${info_item[i].name}</h4> 
                    <div class="price_old">${info_item[i].old_price}</div>
                    <div class="price_new">${info_item[i].new_price}</div>

                </div>
            </div>
        </div>
    </div>`
}

function load() {
    document.getElementById("other_item").innerHTML = gallery;

    $("#e").remove();
}