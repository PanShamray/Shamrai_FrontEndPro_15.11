const slider = document.querySelector(".wrapper__images__slider");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

let offset = 0;

nextBtn.addEventListener("click", function () {
    offset += 500;
    slider.style.left = -offset + "px";

    backBtn.style.display = "inline";

    if (offset >= 3500) {
        nextBtn.style.display = "none";
    }
});

backBtn.addEventListener("click", function () {
    offset -= 500;
    slider.style.left = -offset + "px";

    nextBtn.style.display = "inline";
    
    if (offset <= 0) {
        backBtn.style.display = "none";
    }
});
