var notify = document.querySelector(".item");
var notify_open = document.querySelector(".notify");
console.log(notify);
notify.addEventListener('click', function () {
    notify_open.style.display="block";
})

var AddMore = document.querySelector(".them");
var add_open = document.querySelector(".menu");
AddMore.addEventListener('click',function (evt) {
    add_open.style.display="block";
})