// $('.carousel').carousel({
//     interval: 1000
// })
// document.querySelector("#areas"){

// }
// $(".log-in").click(function () {
//     $(".signIn").addClass("active-dx");
//     $(".signUp").addClass("inactive-sx");
//     $(".signUp").removeClass("active-sx");
//     $(".signIn").removeClass("inactive-dx");
// });

// $(".back").click(function () {
//     $(".signUp").addClass("active-sx");
//     $(".signIn").addClass("inactive-dx");
//     $(".signIn").removeClass("active-dx");
//     $(".signUp").removeClass("inactive-sx");
// });

let navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

