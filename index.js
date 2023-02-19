let dropdownButton = document.querySelectorAll(".btn");
let dropButton = document.querySelectorAll(".drop-btn");

dropdownButton.forEach(ele => {
    ele.addEventListener("click", e => {
        e.preventDefault();
        e.currentTarget.classList.toggle("change-color");
        e.currentTarget.nextElementSibling.classList.toggle("show");
        e.currentTarget.classList.toggle("active");
    });
});

let aside = document.querySelector(".popup-aside");
let closeIcon = document.querySelector(".close");
let mobileDevices = document.querySelector(".mobile");

mobileDevices.addEventListener('click', _ => aside.style.left = "0");

closeIcon.addEventListener("click", _ => {
    aside.style.left = "100%";
});

let headOne = document.querySelectorAll("h1");
console.log(headOne[0]);
console.log(document.body.clientWidth)

if (document.body.clientWidth < 992) {
    headOne[0].innerHTML = "Make remote work";
    console.log("work");
}