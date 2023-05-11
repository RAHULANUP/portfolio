let darkLight = document.querySelector(".switcher");

darkLight.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
})
ScrollReveal({
    reset: true,
    distance:"80px",
    duration:2000,
    delay: 200 
});
ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.project-box', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1', { origin:'left' });