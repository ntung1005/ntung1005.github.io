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


let b='';
for(i=0;i<3;i++){
  b+=`<div id="comment" class="col" style="padding: 1.2rem">
  <div id="comment_1" style="width:5rem">
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


let c='';
for(i=0;i<3;i++){
  c+=`<div id="news" class="col" style="padding: 1.2rem">
  
  <div id="news_1">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</div>`
}

document.getElementById('main_5_1').innerHTML = c;