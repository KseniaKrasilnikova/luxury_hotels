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
        'text': '"hahaha"',
        'author': 'Mr. and Mr. Smith, USA'
    },
    {
        'text': '"Best breakfasts I ever tried and softest beds"',
        'author': 'Mr. Yang, China'
    }
]

var currentReview = 0;
var lastReview = reviewData[reviewData.length - 1];
var firstReview = reviewData[0];

var fillReview = function (review) {
    reviewText.textContent = review.text;
    reviewAuthor.textContent = review.author;
};

fillReview(reviewData[currentReview]);

var showNext = function () {
    prevBtn.classList.remove("disabled");
    currentReview++;
    fillReview(reviewData[currentReview]);
    if (reviewData[currentReview] == lastReview) {
        nextBtn.classList.add('disabled');
    }
};

var showPrev = function () {
    nextBtn.classList.remove("disabled");
    currentReview--;
    fillReview(reviewData[currentReview]);
    if (reviewData[currentReview] == firstReview) {
        prevBtn.classList.add('disabled');
    }
};


nextBtn.addEventListener('click', showNext, true);
prevBtn.addEventListener('click', showPrev, true);