class ShopDetail {

  myRef = document.querySelector("#myReferanceDiv");

  constructor() {
    this.allProduct = [{ id: "1", name: "Kui Ye Chen’s AirPods", price: "$250", imgSrc: "img/product-1.jpg", category: "technology" },
    { id: "2", name: "Air Jordan 12 gym red", price: "$300", imgSrc: "img/product-2.jpg", category: "shoes" },
    { id: "3", name: "Cyan cotton t-shirt", price: "$25", imgSrc: "img/product-3.jpg" },
    { id: "4", name: "Timex Unisex Originals", price: "$351", imgSrc: "img/product-4.jpg" },
    { id: "5", name: "Red digital smartwatch", price: "$250", imgSrc: "img/product-5.jpg" },
    { id: "6", name: "Nike air max 95", price: "$300", imgSrc: "img/product-6.jpg" },
    { id: "7", name: "Joemalone Women prefume", price: "$25", imgSrc: "img/product-7.jpg" },
    { id: "8", name: "Apple Watch", price: "$351", imgSrc: "img/product-8.jpg", category: "technology" },
    { id: "9", name: "Varsity Blouson", price: "$4500", imgSrc: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-varsity-blouson--HOL07WU35900_PM2_Front%20view.png?wid=456&hei=456" },
    { id: "10", name: "LV Trainer Sneaker", price: "$300", imgSrc: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BO9U2PMI20_PM2_Front%20view.png?wid=456&hei=456" },
    { id: "11", name: "Morman Kardon", price: "$25", imgSrc: "img/product-3.jpg" },
    { id: "12", name: "Güle", price: "$351", imgSrc: "img/product-4.jpg" },
    { id: "13", name: "MULTI-PATCHES MIXED LEATHER VARSITY BLOUSON ", price: "$3500", imgSrc: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-multi-patches-mixed-leather-varsity-blouson--HNL91WMJY002_PM2_Front%20view.png?wid=456&hei=456" },
    { id: "14", name: "Metropolis Flat Ranger", price: "$3000", imgSrc: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-metropolis-flat-ranger--AO5Q1BDN54_PM2_Front%20view.png?wid=456&hei=456", category: "shoes" },
    { id: "15", name: "Joemalone Women prefume", price: "$25", imgSrc: "img/product-7.jpg" },
    { id: "16", name: "Apple Pro Watch", price: "$351", imgSrc: "img/product-8.jpg" },
    { id: "17", name: "ererser Ye Chen’s AirPods", price: "$250", imgSrc: "img/product-1.jpg" },
    { id: "18", name: "Charlie Sneaker", price: "$2500", imgSrc: "img/product-2.jpg" },
    { id: "19", name: "Cyan cotton t-shirt", price: "$25", imgSrc: "img/product-3.jpg" },
    { id: "20", name: "Timex Unisex Originals", price: "$351", imgSrc: "img/product-4.jpg" },
    { id: "21", name: "Red digital smartwatch", price: "$250", imgSrc: "img/product-5.jpg" },
    { id: "22", name: "Wonderland Flat Ranger", price: "$2500", imgSrc: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-wonderland-flat-ranger--AOWQ1BSL33_PM2_Front%20view.png?wid=456&hei=456", category: "shoes" },
    { id: "23", name: "Joemalone Women prefume", price: "$25", imgSrc: "img/product-7.jpg" },
    { id: "24", name: "Apple Watch", price: "$351", imgSrc: "img/product-8.jpg", category: "technology" }
    ];
    this.myProductArray = [
      { id: "9", name: "Varsity Blouson", price: "$4500", imgSrc: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-varsity-blouson--HOL07WU35900_PM2_Front%20view.png?wid=456&hei=456" },
      { id: "10", name: "LV Trainer Sneaker", price: "$300", imgSrc: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BO9U2PMI20_PM2_Front%20view.png?wid=456&hei=456" },
      { id: "11", name: "Morman Kardon", price: "$25", imgSrc: "img/product-3.jpg" },
      { id: "12", name: "Güle", price: "$351", imgSrc: "img/product-4.jpg" },
      { id: "13", name: "MULTI-PATCHES MIXED LEATHER VARSITY BLOUSON ", price: "$3500", imgSrc: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-multi-patches-mixed-leather-varsity-blouson--HNL91WMJY002_PM2_Front%20view.png?wid=456&hei=456" },
      { id: "14", name: "Metropolis Flat Ranger", price: "$3000", imgSrc: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-metropolis-flat-ranger--AO5Q1BDN54_PM2_Front%20view.png?wid=456&hei=456", category: "shoes" },
      { id: "15", name: "Joemalone Women prefume", price: "$25", imgSrc: "img/product-7.jpg" },
      { id: "16", name: "Apple Pro Watch", price: "$351", imgSrc: "img/product-8.jpg" }
    ];
    this.myProductArray2 = [
      { id: "9", name: "Tissot Watch", price: "$250", imgSrc: "img/product-1.jpg", category: "technology" },
      { id: "10", name: "Sarman Kardon", price: "$300", imgSrc: "img/product-2.jpg" },
      { id: "11", name: "Morman Kardon", price: "$25", imgSrc: "img/product-3.jpg" },
      { id: "12", name: "Güle", price: "$351", imgSrc: "img/product-4.jpg" },
      { id: "13", name: "Red ", price: "$250", imgSrc: "img/product-5.jpg" },
      { id: "14", name: "Nike air max 95", price: "$300", imgSrc: "img/product-6.jpg" },
      { id: "15", name: "Joemalone Women prefume", price: "$25", imgSrc: "img/product-7.jpg" },
      { id: "16", name: "Apple Pro Watch", price: "$351", imgSrc: "img/product-8.jpg", category: "technology" }
    ];
    this.myProductArray3 = [
      { id: "17", name: "ererser Ye Chen’s AirPods", price: "$250", imgSrc: "img/product-1.jpg" },
      { id: "18", name: "Charlie Sneaker", price: "$2500", imgSrc: "img/product-2.jpg" },
      { id: "19", name: "Cyan cotton t-shirt", price: "$25", imgSrc: "img/product-3.jpg" },
      { id: "20", name: "Timex Unisex Originals", price: "$351", imgSrc: "img/product-4.jpg" },
      { id: "21", name: "Red digital smartwatch", price: "$250", imgSrc: "img/product-5.jpg" },
      { id: "22", name: "Wonderland Flat Ranger", price: "$2500", imgSrc: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-wonderland-flat-ranger--AOWQ1BSL33_PM2_Front%20view.png?wid=456&hei=456", category: "shoes" },
      { id: "23", name: "Joemalone Women prefume", price: "$25", imgSrc: "img/product-7.jpg" },
      { id: "24", name: "Apple Watch", price: "$351", imgSrc: "img/product-8.jpg", category: "technology" }
    ];
  }
  renderPage() {
    for (var a of this.myProductArray) {
      var myHtml = `
      <div class="col-xl-3 col-lg-4 col-sm-6">
        <div class="product text-center">
          <div class="position-relative mb-3">
          <!--<div class="badge text-white bg-info">New</div><a class="d-block" href="detail.html"><img
          class="img-fluid w-100" src="img/product-4.jpg" alt="..."></a> badge isteğe bağı-->

            <div class="badge text-white bg-"></div><a id="pictureInDetail" class="d-block" href="detail.html"><img class="img-fluid w-100" src="${a.imgSrc}" alt="${a.name}"></a>
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
      this.myRef.insertAdjacentHTML('afterbegin', myHtml);
    }
  }

  renderPageFromCategory(selectedCategory) {
    for (var a of this.allProduct) {
      if (selectedCategory == a.category) {
        var myHtml = `
      <div class="col-xl-3 col-lg-4 col-sm-6">
        <div class="product text-center">
          <div class="position-relative mb-3">
          <!--<div class="badge text-white bg-info">New</div><a class="d-block" href="detail.html"><img
          class="img-fluid w-100" src="img/product-4.jpg" alt="..."></a> badge isteğe bağı-->

            <div class="badge text-white bg-"></div><a id="pictureInDetail" class="d-block" href="detail.html"><img class="img-fluid w-100" src="${a.imgSrc}" alt="${a.name}"></a>
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
        this.myRef.insertAdjacentHTML('afterbegin', myHtml);
      }
    }
  }

  renderPage2() {
    for (var a of this.myProductArray2) {
      var myHtml = `
      <div class="col-xl-3 col-lg-4 col-sm-6">
        <div class="product text-center">
          <div class="position-relative mb-3">
          <!--<div class="badge text-white bg-info">New</div><a class="d-block" href="detail.html"><img
          class="img-fluid w-100" src="img/product-4.jpg" alt="..."></a> badge isteğe bağı-->

            <div class="badge text-white bg-"></div><a id="pictureInDetail" class="d-block" href="detail.html"><img class="img-fluid w-100" src="${a.imgSrc}" alt="${a.name}"></a>
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
      this.myRef.insertAdjacentHTML('afterbegin', myHtml);
    }
  }

  renderPage3() {
    for (var a of this.myProductArray3) {
      var myHtml = `
      <div class="col-xl-3 col-lg-4 col-sm-6">
        <div class="product text-center">
          <div class="position-relative mb-3">
          <!--<div class="badge text-white bg-info">New</div><a class="d-block" href="detail.html"><img
          class="img-fluid w-100" src="img/product-4.jpg" alt="..."></a> badge isteğe bağı-->

            <div class="badge text-white bg-"></div><a id="pictureInDetail" class="d-block" href="detail.html"><img class="img-fluid w-100" src="${a.imgSrc}" alt="${a.name}"></a>
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
      this.myRef.insertAdjacentHTML('afterbegin', myHtml);
    }
  }

  getProductFromId(tempId) {
    this.renderPageFromId(tempId);
  }
}


var myItem = new ShopDetail();
myItem.renderPage();

document.querySelector("#myReferanceDiv").addEventListener('click', function (e) {
  if (e.target.tagName == "A") {
    var number = e.target.id;
    var myInpector = `<div class="modal-dialog modal-lg modal-dialog-centered">
  <div class="modal-content overflow-hidden border-0">
    <button class="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
    <div class="modal-body p-0">
      <div class="row align-items-stretch">
        <div class="col-lg-6 p-lg-0"><a class="glightbox product-view d-block h-100 bg-cover bg-center" style="background: url(${myItem.allProduct[number - 1].imgSrc})" href="${myItem.allProduct[number - 1].imgSrc}" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a><a class="glightbox d-none" href="img/product-5-alt-1.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a><a class="glightbox d-none" href="img/product-5-alt-2.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a></div>
        <div class="col-lg-6">
          <div class="p-4 my-md-4">
            <ul class="list-inline mb-2">
              <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
              <li class="list-inline-item m-0 1"><i class="fas fa-star small text-warning"></i></li>
              <li class="list-inline-item m-0 2"><i class="fas fa-star small text-warning"></i></li>
              <li class="list-inline-item m-0 3"><i class="fas fa-star small text-warning"></i></li>
              <li class="list-inline-item m-0 4"><i class="fas fa-star small text-warning"></i></li>
            </ul>
            <h2 class="h4">${myItem.allProduct[number - 1].name}</h2>
            <p class="text-muted">${myItem.allProduct[number - 1].price}</p>
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

var myClick = document.querySelector("#getArray1");
myClick.addEventListener('click', function () {
  myClick.parentNode.classList.add("active");

  if (document.querySelector("#getArray2").parentNode.classList.contains("active"))
    document.querySelector("#getArray2").parentNode.classList.remove("active");

  if (document.querySelector("#getArray3").parentNode.classList.contains("active"))
    document.querySelector("#getArray3").parentNode.classList.remove("active");

  if (document.querySelector("#getFirst").parentNode.classList.contains("active"))
    document.querySelector("#getFirst").parentNode.classList.remove("active");

  if (document.querySelector("#getLast").parentNode.classList.contains("active"))
    document.querySelector("#getLast").parentNode.classList.remove("active");

  while (myItem.myRef.childElementCount != 2) {
    myItem.myRef.removeChild(myItem.myRef.children[0]);
  }
  myItem.renderPage();
});

var myClick2 = document.querySelector("#getArray2");
myClick2.addEventListener('click', function () {
  myClick2.parentNode.classList.add("active");

  if (document.querySelector("#getFirst").parentNode.classList.contains("active"))
    document.querySelector("#getFirst").parentNode.classList.remove("active");

  if (document.querySelector("#getArray1").parentNode.classList.contains("active"))
    document.querySelector("#getArray1").parentNode.classList.remove("active");

  if (document.querySelector("#getArray3").parentNode.classList.contains("active"))
    document.querySelector("#getArray3").parentNode.classList.remove("active");

  if (document.querySelector("#getLast").parentNode.classList.contains("active"))
    document.querySelector("#getLast").parentNode.classList.remove("active");

  var sayac = 0;
  while (myItem.myRef.childElementCount != 2) {
    myItem.myRef.removeChild(myItem.myRef.children[0]);
  }
  myItem.renderPage2();
});

var myClick3 = document.querySelector("#getArray3");
myClick3.addEventListener('click', function () {
  myClick3.parentNode.classList.add("active");


  if (document.querySelector("#getFirst").parentNode.classList.contains("active"))
    document.querySelector("#getFirst").parentNode.classList.remove("active");

  if (document.querySelector("#getArray2").parentNode.classList.contains("active"))
    document.querySelector("#getArray2").parentNode.classList.remove("active");

  if (document.querySelector("#getArray1").parentNode.classList.contains("active"))
    document.querySelector("#getArray1").parentNode.classList.remove("active");

  if (document.querySelector("#getLast").parentNode.classList.contains("active"))
    document.querySelector("#getLast").parentNode.classList.remove("active");

  while (myItem.myRef.childElementCount != 2) {
    myItem.myRef.removeChild(myItem.myRef.children[0]);
  }
  myItem.renderPage3();
});

var myClick4 = document.querySelector("#getLast");
myClick4.addEventListener('click', function () {
  myClick4.parentNode.classList.add("active");

  if (document.querySelector("#getArray1").parentNode.classList.contains("active"))
    document.querySelector("#getArray1").parentNode.classList.remove("active");

  if (document.querySelector("#getArray2").parentNode.classList.contains("active"))
    document.querySelector("#getArray2").parentNode.classList.remove("active");

  if (document.querySelector("#getFirst").parentNode.classList.contains("active"))
    document.querySelector("#getFirst").parentNode.classList.remove("active");

  document.querySelector("#getArray3").parentNode.classList.add("active");

  while (myItem.myRef.childElementCount != 2) {
    myItem.myRef.removeChild(myItem.myRef.children[0]);
  }
  myItem.renderPage3();
});

var myClick5 = document.querySelector("#getFirst");
myClick5.addEventListener('click', function () {
  myClick5.parentNode.classList.add("active");
  document.querySelector("#getArray1").parentNode.classList.add("active");

  if (document.querySelector("#getArray2").parentNode.classList.contains("active"))
    document.querySelector("#getArray2").parentNode.classList.remove("active");
  if (document.querySelector("#getArray3").parentNode.classList.contains("active"))
    document.querySelector("#getArray3").parentNode.classList.remove("active");
  if (document.querySelector("#getLast").parentNode.classList.contains("active"))
    document.querySelector("#getLast").parentNode.classList.remove("active");

  while (myItem.myRef.childElementCount != 2) {
    myItem.myRef.removeChild(myItem.myRef.children[0]);
  }
  myItem.renderPage();
});

var myClick6 = document.querySelector("#getElectronic");
myClick6.addEventListener('click', function () {
  myClick6.parentNode.classList.toggle("text-primary");

  while (myItem.myRef.childElementCount != 2) {
    myItem.myRef.removeChild(myItem.myRef.children[0]);
  }
  myItem.renderPageFromCategory("technology");
});

var myClick7 = document.querySelector("#womenTshirt");
myClick7.addEventListener('click', function () {
  myClick7.parentNode.classList.toggle("text-primary");

  while (myItem.myRef.childElementCount != 2) {
    myItem.myRef.removeChild(myItem.myRef.children[0]);
  }
  myItem.renderPageFromCategory("technology");
});

var myClick7 = document.querySelector("#womenTshirt");
myClick7.addEventListener('click', function () {
  myClick7.parentNode.classList.toggle("text-primary");

  while (myItem.myRef.childElementCount != 2) {
    myItem.myRef.removeChild(myItem.myRef.children[0]);
  }
  myItem.renderPageFromCategory("technology");
});

var myClick8 = document.querySelector("#womenTshirt");
myClick8.addEventListener('click', function () {
  myClick8.parentNode.classList.toggle("text-primary");

  while (myItem.myRef.childElementCount != 2) {
    myItem.myRef.removeChild(myItem.myRef.children[0]);
  }
  myItem.renderPageFromCategory("technology");
});

var myClick9 = document.querySelector("#menTshirt");
myClick9.addEventListener('click', function () {
  myClick9.parentNode.classList.toggle("text-primary");

  while (myItem.myRef.childElementCount != 2) {
    myItem.myRef.removeChild(myItem.myRef.children[0]);
  }
  myItem.renderPageFromCategory("technology");
});

var myClick10 = document.querySelector("#dresses");
myClick9.addEventListener('click', function () {
  myClick9.parentNode.classList.toggle("text-primary");

  while (myItem.myRef.childElementCount != 2) {
    myItem.myRef.removeChild(myItem.myRef.children[0]);
  }
  myItem.renderPageFromCategory("technology");
});

var myClick10 = document.querySelector("#shoes");
myClick9.addEventListener('click', function () {
  myClick9.parentNode.classList.toggle("text-primary");

  while (myItem.myRef.childElementCount != 2) {
    myItem.myRef.removeChild(myItem.myRef.children[0]);
  }
  myItem.renderPageFromCategory("shoes");
});