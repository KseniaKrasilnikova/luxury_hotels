// localstorage

var contactForm = document.querySelector(".form");

var onSubmit = function () {
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("mail", document.getElementById("mail").value);
};

contactForm.addEventListener('submit', onSubmit, true);