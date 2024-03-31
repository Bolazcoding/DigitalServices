const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("nav a").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

var faq = document.getElementsByClassName("faq-header");
var i;

for(i = 0; i < faq.length; i++){
    faq[i].addEventListener("click", function(){
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var faqDetails = this.nextElementSibling;
        if(faqDetails.style.display === "block"){
            faqDetails.style.display = "none";
        }else{
            faqDetails.style.display = "block";
        }
    });
}

// function submitForm() {
//     alert("Your request were successfully submitted")
// }