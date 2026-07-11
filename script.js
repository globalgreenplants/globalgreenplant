
function setLanguage(lang) {

    if (lang === "bn") {

        document.querySelector(".hero h2").innerHTML = "আপনার ঘরকে সবুজে ভরিয়ে তুলুন";

        document.querySelector(".hero p").innerHTML =
        "স্বাস্থ্যকর ইনডোর ও আউটডোর গাছ সাশ্রয়ী মূল্যে। আপনার বাড়িকে আরও সুন্দর ও সবুজ করে তুলুন।";

        document.querySelector(".btn").innerHTML = "গাছ দেখুন";

        document.querySelector(".about h2").innerHTML = "আমাদের সম্পর্কে";

        document.querySelector(".about p").innerHTML =
        "গ্লোবাল গ্রিন প্ল্যান্ট ঘর, অফিস ও বাগানের জন্য উন্নত মানের গাছ সরবরাহ করে।";

        document.querySelector(".contact h2").innerHTML = "যোগাযোগ করুন";

    } else {

        document.querySelector(".hero h2").innerHTML = "Bring Nature Into Your Home";

        document.querySelector(".hero p").innerHTML =
        "Healthy indoor and outdoor plants at affordable prices. Make your home greener and healthier.";

        document.querySelector(".btn").innerHTML = "Explore Plants";

        document.querySelector(".about h2").innerHTML = "About Us";

        document.querySelector(".about p").innerHTML =
        "Global Green Plant provides healthy and affordable plants for homes, offices and gardens.";

        document.querySelector(".contact h2").innerHTML = "Contact Us";

    }

}
// ===== Auto Slider =====

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

setInterval(() => {
    current++;
    if (current >= slides.length) {
        current = 0;
    }
    showSlide(current);
}, 5000);
function searchPlants(){

    let input=document.getElementById("plantSearch").value.toLowerCase();

    let cards=document.querySelectorAll(".card");

    cards.forEach(function(card){

        let title=card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(input)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

}
