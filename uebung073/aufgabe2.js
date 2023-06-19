const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

// Aufgabe 2
/* 
 * togglePassword.addEventListener("click", function () {
 *   // toggle the type attribute
 *   const type = password.getAttribute("type") === "password" ? "text" : "password";
 *   password.setAttribute("type", type);
 *
 *   // toggle the icon
 *   this.classList.toggle("bi-eye");
 *});
 */

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});


// Herausforderung
togglePassword.addEventListener('mouseenter', function () {
    password.setAttribute('type', 'text');
    this.classList.toggle("bi-eye");
    togglePassword.style.color ="green";
});

togglePassword.addEventListener('mouseleave', function () {
    password.setAttribute('type', 'password');
    this.classList.toggle("bi-eye");
    this.style.color = 'black'
});