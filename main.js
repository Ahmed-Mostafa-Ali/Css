
window.addEventListener("scroll" , ()=>{
    if(window.scrollY>200){
        document.querySelector(".navbar").classList.add("change-bg")
    }else{
        document.querySelector(".navbar").classList.remove("change-bg")
    }
})
if(window.scrollY>200){
    document.querySelector(".navbar").classList.add("change-bg")
}else{
    document.querySelector(".navbar").classList.remove("change-bg")
}
