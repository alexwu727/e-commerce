// Get the modal
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");
var forgotPasswordModal = document.getElementById("forgotPasswordModal");

// Get the button that opens the modal
var loginBtn1 = document.getElementById("loginBtn1");
var loginBtn2 = document.getElementById("loginBtn2");
var registerBtn1 = document.getElementById("registerBtn1");
var registerBtn2 = document.getElementById("registerBtn2");
var forgotPasswordBtn = document.getElementById("forgotPasswordBtn");

// Get the <span> element that closes the modal
var loginClose = document.getElementById("loginClose");
var registerClose = document.getElementById("registerClose");
var forgotPasswordClose = document.getElementById("forgotPasswordClose");

// When the user clicks on the button, open the modal
loginBtn1.onclick = function () {
    loginModal.style.display = "block";
}
loginBtn2.onclick = function () {
    loginModal.style.display = "block";
    registerModal.style.display = "none";
}
registerBtn1.onclick = function () {
    registerModal.style.display = "block";
}
registerBtn2.onclick = function () {
    registerModal.style.display = "block";
    loginModal.style.display = "none";
}
forgotPasswordBtn.onclick = function () {
    forgotPasswordModal.style.display = "block";
    loginModal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
loginClose.onclick = function () {
    loginModal.style.display = "none";
    console.log("helloe");
}
registerClose.onclick = function () {
    registerModal.style.display = "none";
}
forgotPasswordClose.onclick = function () {
    forgotPasswordModal.style.display = "none";
}
