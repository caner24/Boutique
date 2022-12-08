var loginControl = document.querySelector("#login");
var ref = document.getElementById("loginSuccesMsg");
loginControl.addEventListener('click', function () {

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    if (email == "admin" && password == 123) {
        var myHtml = "<h5 style='background-color:#4d3a33;' class='text-light' ><i>Giris Basarili yönlendiriliyorsunuz . . .<i></h5>";
        ref.insertAdjacentHTML('afterend', myHtml);
        setInterval(getHref, 1500);
    }
    else if (email == "cnr24clp@gmail.com" && password == 123456) {
        var myHtml = "<h5 style='background-color:#4d3a33;' class='text-light' ><i>Giris Basarili yönlendiriliyorsunuz . . .<i></h5>";
        ref.insertAdjacentHTML('afterend', myHtml);
        setInterval(getHref2, 1500);
    }
    else {
        setTimeout(getError, 1500);
    }
});
function getHref() {
    window.location.href = "admin.html";
}
function getHref2() {
    window.location.href = "index.html";
}
function getError() {
    var myHtml = "<h5 class='bg-danger' ><i>Hatali bir giriş yaptiniz  . . .<i></h5>";
    ref.insertAdjacentHTML('afterend', myHtml);
}