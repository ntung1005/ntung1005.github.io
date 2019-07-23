let info_item = [{
        name: 'Sản Phẩm 1',
        old_price: "",

        new_price: "1.000.000",
        new_price_value: 10,
        data_newprice: "5-15",
        data_kindofitem: "fake",
        data_firm: "adidas",
        src: '../img/sản phẩm 1.jpg',

    },

    {
        name: 'Sản Phẩm 2',
        old_price: "",
        new_price: "5.000.000",
        new_price_value: 50,
        data_newprice: "15-50",
        data_kindofitem: "auth",
        data_firm: "nike",
        src: '../img/sản phẩm 2.jpg',

    },

    {
        name: 'Sản Phẩm 3',
        old_price: "",
        new_price: "4.000.000",
        new_price_value: 40,
        data_newprice: "15-50",
        data_kindofitem: "rep",
        data_firm: "other",
        src: '../img/sản phẩm 3.jpg',

    },

    {
        name: 'Sản Phẩm 4',
        old_price: "",
        new_price: "3.000.000",
        new_price_value: 30,
        data_newprice: "15-50",
        data_kindofitem: "fake",
        data_firm: "adidas",
        src: '../img/sản phẩm 4.jpg'
    },

    {
        name: 'Sản Phẩm 5',
        old_price: "",
        new_price: "32.000.000",
        new_price_value: 320,
        data_newprice: "50",
        data_kindofitem: "auth",
        data_firm: "other",
        src: '../img/sản phẩm 5.jpg'
    },

    {
        name: 'Sản Phẩm 6',
        old_price: "",
        new_price: "9.000.000",
        new_price_value: 90,
        data_newprice: "50",
        data_kindofitem: "rep",
        data_firm: "adidas",
        src: '../img/sản phẩm 6.jpg'
    },

    {
        name: 'Sản Phẩm 7',
        old_price: "",
        new_price: "71.000.000",
        new_price_value: 710,
        data_newprice: "50",
        data_firm: "nike",
        src: '../img/sản phẩm 7.jpg'
    },

    {
        name: 'Sản Phẩm 8',
        old_price: "",
        new_price: "1.000.000",
        new_price_value: 10,
        data_newprice: "5-15",
        data_kindofitem: "fake",
        data_firm: "other",
        src: '../img/sản phẩm 8.jpg'
    },

    {
        name: 'Sản Phẩm 9',
        old_price: "",
        new_price: "100.000",
        new_price_value: 1,
        data_newprice: "1-5",
        data_kindofitem: "fake",
        data_firm: "other",
        src: '../img/sản phẩm 9.jpg'
    },

    {
        name: 'Sản Phẩm 10',
        old_price: "",
        new_price: "400.000",
        new_price_value: 4,
        data_newprice: "1-5",
        data_kindofitem: "fake",
        data_firm: "other",
        src: '../img/sản phẩm 10.jpg'
    },

    {
        name: 'Sản Phẩm 11',
        old_price: "",
        new_price: "4.000.000",
        new_price_value: 40,
        data_newprice: "15-50",
        data_kindofitem: "auth",
        data_firm: "nike",
        src: '../img/sản phẩm 11.jpg'
    },

    {
        name: 'Sản Phẩm 12',
        old_price: "",
        new_price: "1.500.000",
        new_price_value: 15,
        data_newprice: "5-15",
        data_kindofitem: "rep",
        data_firm: "adidas",
        src: '../img/sản phẩm 12.jpg'
    },



];








// Filter Menu


$("#menu_filter #click").click(function () {

    if (
        $(this)
        .next("#con")
        .css("display") === "none"
    ) {
        $(this)
            .next("#con")
            .slideDown();

        $(this)
            .children(".click_1")
            .html('<i class="fas fa-minus"></i>');
    } else {
        $(this)
            .next("#con")
            .slideUp();
        $(this)
            .children(".click_1")
            .html('<i class="fas fa-plus"></i>');
    }
});

// 















// Sort

// up




$(function () {
    $('#sortprice').change(function () {
        let abc = $('#sortprice option:selected').val();

        if (abc === 'price_up') {
            let xyz = info_item.sort(function (a, b) {
                if (a.new_price_value > b.new_price_value) {
                    return 1;
                } else {
                    return -1;
                }
            });
            let a = '';
            for (i = 0; i < info_item.length; i++) {

                a += `<div class="col-lg-4 col-md-4 col-sm-6 sanpham" data-oldprice="${xyz[i].data_oldprice}"  data-newprice="${xyz[i].data_newprice}"  data-kind-item="${xyz[i].data_kindofitem}" data-firm="${xyz[i].data_firm}">
                        <div class="product">
                            <div class="imgbox">
                            <a href="item.html"><img src="${xyz[i].src}" alt=""></a>

                                <div class="details">
                                    <a data-toggle="modal" data-target="#exampleModal">Xem Nhanh</a>
                                    <a href="item.html">Mua Ngay</a>
                                </div>
                            </div>

                            <div class="info">
                                <div style="padding-bottom: 15px">
                                    <h4>${xyz[i].name}</h4> 
                                    <div class="price_old">${xyz[i].old_price}</div>
                                    <div class="price_new">${xyz[i].new_price}</div>

                                </div>
                            </div>
                        </div>
                    </div>`
            }

            document.getElementById('qwe').innerHTML = a;


        } else if (abc === 'price_down') {
            let xyz = info_item.sort(function (a, b) {
                if (a.new_price_value < b.new_price_value) {
                    return 1;
                } else {
                    return -1;
                }
            });
            let a = '';
            for (i = 0; i < info_item.length; i++) {

                a += `<div class="col-lg-4 col-md-4 col-sm-6 sanpham" data-oldprice="${xyz[i].data_oldprice}"  data-newprice="${xyz[i].data_newprice}"  data-kind-item="${xyz[i].data_kindofitem}" data-firm="${xyz[i].data_firm}">
                        <div class="product">
                            <div class="imgbox">
                            <a href="item.html"><img src="${xyz[i].src}" alt=""></a>

                                <div class="details">
                                    <a data-toggle="modal" data-target="#exampleModal">Xem Nhanh</a>
                                    <a href="item.html">Mua Ngay</a>
                                </div>
                            </div>

                            <div class="info">
                                <div style="padding-bottom: 15px">
                                    <h4>${xyz[i].name}</h4> 
                                    <div class="price_old">${xyz[i].old_price}</div>
                                    <div class="price_new">${xyz[i].new_price}</div>

                                </div>
                            </div>
                        </div>
                    </div>`
            }

            document.getElementById('qwe').innerHTML = a;

        }





    })
})




// 

















$("input[type='checkbox']").click(function () {
    let checked = $(" #main_1 input[type='checkbox']:checked");

    let productItem = $(".sanpham");

    if (checked.length > 0) {
        productItem.hide();

        checked.each(function () {

            $('.sanpham[data-newprice=' + this.value + ']').show();
            $('.sanpham[data-kind-item=' + this.value + ']').show();
            $('.sanpham[data-firm=' + this.value + ']').show();

        })

    } else {
        productItem.show();
    }


});
















// 













        let a = '';
        for (i = 0; i < info_item.length; i++) {

            a += `<div class="col-lg-4 col-md-4 col-sm-6 sanpham" data-oldprice="${info_item[i].data_oldprice}"  data-newprice="${info_item[i].data_newprice}"  data-kind-item="${info_item[i].data_kindofitem}" data-firm="${info_item[i].data_firm}">
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

        document.getElementById('item').innerHTML = a;

        // /Load Image/ 


        let gallery = '';
        for (i = 0; i < info_item.length; i++) {

            gallery += `<div class="col-lg-4 col-md-4 col-sm-6 sanpham">
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

        function loadImages() {
            document.getElementById("other_item").innerHTML = gallery;

            $("#e").remove();
        };