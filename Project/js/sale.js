let a = '';
for (i = 1; i <= 8; i++) {

    a += `<div class="card col-md-3 col-sm-6">
    <img src="../img/sản phẩm ${i}.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"><span style="text-decoration:line-through;font-size:0.7rem;color:grey">600.000đ</span>~400.000đ</p>
    </div>
    
    <div class="card-body">
    <a href="item.html"><button type="button" class="btn btn-danger">Danger</button></a>
    <a href="item.html"><button type="button" class="btn btn-danger">Danger</button></a>
    </div>
  </div>`
}

document.getElementById('newitem').innerHTML = a;
document.getElementById('hotitem').innerHTML = a;


let gallery = '';
for (i = 1; i <= 8; i++) {

    gallery += `<div class="card col-md-3 col-sm-6">
    <img src="../img/sản phẩm ${i}.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"><span style="text-decoration:line-through;font-size:0.7rem;color:grey">600.000đ</span>~400.000đ</p>
    </div>
    
    <div class="card-body">
    <a href="item.html"><button type="button" class="btn btn-danger">Danger</button></a>
    <a href="item.html"><button type="button" class="btn btn-danger">Danger</button></a>
    </div>
  </div>`
}

function load() {
    document.getElementById("other_item").innerHTML = gallery;

    $("#e").remove();
}