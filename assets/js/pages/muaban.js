var drop_item= document.querySelectorAll(".item");
var modal=document.querySelectorAll(".modal");
var close_btn =document.querySelectorAll(".modal .modal-body-head .close-btn");
console.log(drop_item[3]);
console.log(modal[1]);
drop_item[2].addEventListener('click',function (event) {
    modal[0].style.display="block";
})
drop_item[3].addEventListener('click',function (event) {
    modal[1].style.display="block";
})


close_btn[0].addEventListener("click", function (evt) {
    modal[0].style.display="none";
})
close_btn[1].addEventListener("click", function (evt) {
    modal[1].style.display="none";
})

var model=document.querySelector(".model");
drop_item[1].addEventListener('click',function (event) {
    model.style.display="block";
})

var close_btn =document.querySelector(".modal .modal-body-head .close-btn");
close_btn.addEventListener("click", function (evt) {
    modal.style.display="none";
});

window.onclick = function(event) {
    var modal_overlay=document.querySelectorAll(".modal-overlay");
    console.log(modal_overlay);
    if (event.target == modal_overlay[1]) {
        console.log('alo')
        modal[0].style.display = "none";
    }
    if (event.target == modal_overlay[2]) {
        console.log('alo')
        modal[1].style.display = "none";
    }
    console.log(event.target);
}