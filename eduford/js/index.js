// let navMenu=document.getElementById("navMenu");

// let showMenu=document.getElementById("showMenu").addEventListener("click",()=>{
//     navMenu.style.right="0";
// })
// let closeMenu=document.getElementById("closeMenu").addEventListener("click",()=>{
//     navMenu.style.right="-250px";
// })

let navMenu=document.getElementById("navMenu");
navMenu.style.right="-250px";
let showMenu=document.getElementById("showMenu").addEventListener("click",()=>{
    if(navMenu.style.right=="-250px"){
        navMenu.style.right="0";
    }
    
});
let closeMenu=document.getElementById("closeMenu").addEventListener("click",()=>{
    if(navMenu.style.right="0"){
        navMenu.style.right="-250px";
    }
});


