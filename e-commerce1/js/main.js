let mainImg=document.getElementById("MainImg");
let smallImg=document.getElementsByClassName("small-img");
for(let i=0;i<4;i++){
    smallImg[i].addEventListener("click",()=>{
        mainImg.src=smallImg[i].src;
    })
}
//wow js
new WOW().init();