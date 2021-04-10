// localstorage

var subscribeForm = document.querySelector(".subscribe__form");

var onSubmit = function () {
    localStorage.setItem("email", document.getElementById("email").value);
};

subscribeForm.addEventListener('submit', onSubmit, true);