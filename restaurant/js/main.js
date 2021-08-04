new WOW().init();


window.addEventListener("scroll",()=>{
    let scroll=document.getElementById("top");

    if(this.scrollY>=560){
        scroll.classList.add("top-icon-plus");
    }
    else{
        scroll.classList.remove("top-icon-plus");
    }
})