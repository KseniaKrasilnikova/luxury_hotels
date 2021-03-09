// reviews pagination
var reviewItems = document.querySelectorAll(".testimonials__item:not(.prev,.next,.testimonials__item--disabled)");
var nextBtn = document.getElementsByClassName("pagination__next");
var prevBtn = document.getElementsByClassName("pagination__prev");



//nextBtn.addEventListener('click', function (evt) {
  //  prevBtn.classList.remove("disabled");
    //reviewItems.classList.add("testimonials__item--disabled");

// });

var showNext = function () {
    prevBtn.classList.remove("disabled");
}

for (var i = 0; i < nextBtn.length; i++) {
    nextBtn[i].addEventListener('click', showNext, true);
}

