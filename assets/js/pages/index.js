var dot = document.querySelector(".dot");
var expand_btn=document.querySelector(".expand-btn");
var more =document.querySelector(".more-text");
console.log(expand_btn);
expand_btn.addEventListener('click',function () {
    if(dot.style.display==="none"){
    dot.style.display="block";
    expand_btn.innerHTML="Mở rộng";
    more.style.display="none";
    }
    else {
        dot.style.display="none";
        expand_btn.innerHTML="Thu gọn";
        more.style.display="block";
    }
})

// var item_slide = document.querySelector(".item");
// function showslide(n) {
//     for(var i =0;i<item_slide.length;i++){
//         item_slide[i].style.display="none";
//     }
//     item_slide[n].style.display="block";
// }
// showslide(0)