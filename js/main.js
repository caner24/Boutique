class GUI {
  myProducts = [
    { id: "1", name: "Kui Ye Chen’s AirPods", price: "$250", imgSrc: "img/product-1.jpg" },
    { id: "2", name: "Air Jordan 12 gym red", price: "$300", imgSrc: "img/product-2.jpg" },
    { id: "3", name: "Cyan cotton t-shirt", price: "$25", imgSrc: "img/product-3.jpg" },
    { id: "4", name: "Timex Unisex Originals", price: "$351", imgSrc: "img/product-4.jpg" },
    { id: "5", name: "Red digital smartwatch", price: "$250", imgSrc: "img/product-5.jpg" },
    { id: "6", name: "Nike air max 95", price: "$300", imgSrc: "img/product-6.jpg" },
    { id: "7", name: "Joemalone Women prefume", price: "$25", imgSrc: "img/product-7.jpg" },
    { id: "8", name: "Apple Watch", price: "$351", imgSrc: "img/product-8.jpg" }
  ]
  putTrendingProduct() {
    for (var a of this.myProducts) {
      var myhtmlCode = `<div class="col-xl-3 col-lg-4 col-sm-6">
        <div class="product text-center">
          <div class="position-relative mb-3">
          <!--<div class="badge text-white bg-info">New</div><a class="d-block" href="detail.html"><img
          class="img-fluid w-100" src="img/product-4.jpg" alt="..."></a> badge isteğe bağı-->

            <div class="badge text-white bg-"></div><a class="d-block" href="detail.html"><img class="img-fluid w-100" src="${a.imgSrc}" alt="${a.name}"></a>
            <div class="product-overlay">
              <ul class="mb-0 list-inline">
                <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark" href="#!"><i class="far fa-heart"></i></a></li>
                <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                <li class="list-inline-item me-0"><a id="${a.id}" class="details btn btn-sm btn-outline-dark fas fa-expand" href="#productView" data-bs-toggle="modal"></a></li>
              </ul>
            </div>
          </div>
          <h6> <a class="reset-anchor" href="detail.html">${a.name}</a></h6>
          <p class="small text-muted">${a.price}</p>
        </div>
      </div>`;
      document.querySelector("#trendingProduct").insertAdjacentHTML("afterbegin", myhtmlCode);

    }
  }
}
var myTempArray = new GUI();
myTempArray.putTrendingProduct();
var sayac = 0;
var mySliderİtems = ["gif/ezgif-3-5f0dc91d66.gif", "gif/ezgif-3-e2172f0072.gif", "gif/ezgif-3-8d6abfe4bf.gif"];
setInterval(displayHello, 7500);
function displayHello() {

  document.getElementById("slider-background").style.backgroundImage = `url('${mySliderİtems[sayac]}')`;
  if (sayac == mySliderİtems.length) {
    document.getElementById("slider-background").style.backgroundImage = `url('${mySliderİtems[0]}')`
    sayac = 0;
  }
  sayac++;
}

document.querySelector("#trendingProduct").addEventListener('click', function (e) {
  if (e.target.tagName == "A") {
    var number = e.target.id;
    var myInpector = `<div class="modal-dialog modal-lg modal-dialog-centered">
  <div class="modal-content overflow-hidden border-0">
    <button class="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
    <div class="modal-body p-0">
      <div class="row align-items-stretch">
        <div class="col-lg-6 p-lg-0"><a class="glightbox product-view d-block h-100 bg-cover bg-center" style="background: url(${myTempArray.myProducts[number - 1].imgSrc})" href="${myTempArray.myProducts[number - 1].imgSrc}" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a><a class="glightbox d-none" href="img/product-5-alt-1.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a><a class="glightbox d-none" href="img/product-5-alt-2.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a></div>
        <div class="col-lg-6">
          <div class="p-4 my-md-4">
            <ul class="list-inline mb-2">
              <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
              <li class="list-inline-item m-0 1"><i class="fas fa-star small text-warning"></i></li>
              <li class="list-inline-item m-0 2"><i class="fas fa-star small text-warning"></i></li>
              <li class="list-inline-item m-0 3"><i class="fas fa-star small text-warning"></i></li>
              <li class="list-inline-item m-0 4"><i class="fas fa-star small text-warning"></i></li>
            </ul>
            <h2 class="h4">${myTempArray.myProducts[number - 1].name}</h2>
            <p class="text-muted">${myTempArray.myProducts[number - 1].price}</p>
            <p class="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
            <div class="row align-items-stretch mb-4 gx-0">
              <div class="col-sm-7">
                <div class="border d-flex align-items-center justify-content-between py-1 px-3"><span class="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                  <div class="quantity">
                    <button class="dec-btn p-0"><i class="fas fa-caret-left"></i></button>
                    <input class="form-control border-0 shadow-0 p-0" type="text" value="1">
                    <button class="inc-btn p-0"><i class="fas fa-caret-right"></i></button>
                  </div>
                </div>
              </div>
              <div class="col-sm-5"><a class="btn btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center px-0" href="cart.html">Add to cart</a></div>
            </div><a class="btn btn-link text-dark text-decoration-none p-0" href="#!"><i class="far fa-heart me-2"></i>Add to wish list</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
    var doc = document.querySelector("#productView");
    doc.insertAdjacentHTML("afterbegin", myInpector);
    while (doc.childElementCount != 1) {
      doc.removeChild(doc.children[1]);
    }
  }
});
