var  istatus = document.querySelector("h5");
var btn = document.querySelector("button");

var flag = 0;
btn.addEventListener("click" , function() {
    if(flag == 0) {
        istatus.style.color = "green"
        istatus.innerHTML = "Friends!!"
        btn.innerHTML = "Remove Friend"
        flag = 1;
    } else {
        istatus.style.color = "red"
        istatus.innerHTML = "Stranger"
        btn.innerHTML = "Add Friend"

        flag = 0;
    }
})