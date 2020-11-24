var btn=document.getElementById("btn-event");
var modal = document.querySelector(".modal");
console.log(modal);
btn.addEventListener('click',function (event) {
    event.preventDefault()
    modal.style.display="flex";

})