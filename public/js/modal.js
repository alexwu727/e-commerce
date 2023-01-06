// Get the modal
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");
var forgotPasswordModal = document.getElementById("forgotPasswordModal");
var verifyModal = document.getElementById("verifyModal");
var resetPasswordModal = document.getElementById("resetPasswordModal");

// Get the button that opens the modal
var loginBtn1 = document.getElementById("loginBtn1");
var loginBtn2 = document.getElementById("loginBtn2");
var registerBtn1 = document.getElementById("registerBtn1");
var registerBtn2 = document.getElementById("registerBtn2");
var forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
var verifyBtn = document.getElementById("verifyBtn");
var resetPasswordBtn = document.getElementById("resetPasswordBtn");

// Get the <span> element that closes the modal
var loginClose = document.getElementById("loginClose");
var registerClose = document.getElementById("registerClose");
var forgotPasswordClose = document.getElementById("forgotPasswordClose");
var verifyClose = document.getElementById("verifyClose");
var resetPasswordClose = document.getElementById("resetPasswordClose");

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
verifyBtn.onclick = function () {
    verifyModal.style.display = "block";
    forgotPasswordModal.style.display = "none";
}
resetPasswordBtn.onclick = function () {
    resetPasswordModal.style.display = "block";
    verifyModal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
loginClose.onclick = function () {
    loginModal.style.display = "none";
}
registerClose.onclick = function () {
    registerModal.style.display = "none";
}
forgotPasswordClose.onclick = function () {
    forgotPasswordModal.style.display = "none";
}
verifyClose.onclick = function () {
    verifyModal.style.display = "none";
}
resetPasswordClose.onclick = function () {
    resetPasswordModal.style.display = "none";
}
