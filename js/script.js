
"use strict";

document.addEventListener("click", documentClick);

function documentClick(e){
    const targetItem = e.target;

    if(targetItem.closest(".icon-menu")){
        document.documentElement.classList.toggle('menu-open');
        document.querySelector('html').classList.toggle('scroll-off')
    }
}

// const stopLoad = document.querySelector(".stop-load");
const stopLoad = document.getElementsByClassName('stop-load')[0];
const stopLoad2 = document.getElementsByClassName('stop-load')[1];
const stopLoad3 = document.getElementsByClassName('stop-load')[2];

stopLoad.addEventListener("click", (e)=>{
    e.preventDefault();
})
stopLoad2.addEventListener("click", (e)=>{
    e.preventDefault();
})
stopLoad3.addEventListener("click", (e)=>{
    e.preventDefault();
})