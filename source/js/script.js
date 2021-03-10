// reviews pagination
var nextBtn = document.querySelector(".pagination__next");
var prevBtn = document.querySelector(".pagination__prev");
var reviewText = document.querySelector(".testimonials__text");
var reviewAuthor = document.querySelector(".testimonials__author");
var reviewData = [
    {
        'text': '"Calm, Serene, Retro – What a way to relax and enjoy"',
        'author': 'Mr. and Mrs. Baxter, UK'
    },
    {
        'review': '"hahaha"',
        'author': 'Mr. and Mr. Smith, USA'
    }
]

var currentReview = 0;

var fillReview = function (review) {
    reviewText.textContent = review.text;
    reviewAuthor.textContent = review.author;
};

fillReview(reviewData[currentReview]);

var showNext = function () {
    prevBtn.classList.remove("disabled");
    currentReview++;
    fillReview(reviewData[currentReview]);
}


nextBtn.addEventListener('click', showNext, true);