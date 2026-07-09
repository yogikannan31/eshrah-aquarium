/*=========================================
ESHRAH AQUARIUM
JavaScript - Part 1
=========================================*/

/*------------------------------
WELCOME MESSAGE
------------------------------*/

window.onload = function () {
    setTimeout(function () {
        alert("🐠 Welcome to ESHRAH AQUARIUM!\nEnjoy your shopping.");
    }, 500);
};


/*------------------------------
SCROLL TO TOP BUTTON
------------------------------*/

const topButton = document.querySelector(".top-btn");

window.addEventListener("scroll", function () {

    if (topButton) {

        if (window.scrollY > 300) {
            topButton.style.display = "flex";
        } else {
            topButton.style.display = "none";
        }

    }

});


/*------------------------------
STICKY HEADER EFFECT
------------------------------*/

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background = "#003B46";
        header.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";

    } else {

        header.style.background = "rgba(0,70,90,.88)";
        header.style.boxShadow = "none";

    }

});


/*------------------------------
BUTTON HOVER ANIMATION
------------------------------*/

const buttons = document.querySelectorAll(".btn1,.btn2,.shop-btn,.login-btn");

buttons.forEach(function(btn){

    btn.addEventListener("mouseenter",function(){

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",function(){

        btn.style.transform="scale(1)";

    });

});


/*------------------------------
NEWSLETTER
------------------------------*/

const newsletter = document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank you for subscribing!");

newsletter.reset();

});

}


/*------------------------------
CONTACT FORM
------------------------------*/

const contactForm=document.querySelector(".payment-form form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("📨 Your message has been sent successfully!");

contactForm.reset();

});

}


/*------------------------------
LOGIN BUTTON
------------------------------*/

const loginButton=document.querySelector(".login-btn");

if(loginButton){

loginButton.addEventListener("click",function(){

console.log("Login button clicked");

});

}


/*------------------------------
PAGE LOADED
------------------------------*/

console.log("✅ ESHRAH AQUARIUM Loaded Successfully");
/*=========================================
ESHRAH AQUARIUM
JavaScript - Part 2
=========================================*/

/*------------------------------
AUTO IMAGE SLIDER
------------------------------*/

const hero = document.querySelector(".hero");

const heroImages = [
    "images/banner.jpg",
    "images/aquarium.png",
    "images/betta.jpg",
    "images/flower-horn.jpg"
];

let currentImage = 0;

if(hero){

setInterval(function(){

currentImage++;

if(currentImage >= heroImages.length){
currentImage = 0;
}

hero.style.background =
"url('" + heroImages[currentImage] + "') center/cover no-repeat";

},5000);

}


/*------------------------------
DIGITAL CLOCK
------------------------------*/

const clock = document.getElementById("clock");

if(clock){

setInterval(function(){

const now = new Date();

clock.innerHTML = now.toLocaleTimeString();

},1000);

}


/*------------------------------
SCROLL ANIMATION
------------------------------*/

const cards = document.querySelectorAll(
".feature,.product-card,.why-card,.service-box,.review-card"
);

window.addEventListener("scroll",function(){

cards.forEach(function(card){

const position = card.getBoundingClientRect().top;

if(position < window.innerHeight - 100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});

cards.forEach(function(card){

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="all .8s ease";

});


/*------------------------------
PRODUCT CARD EFFECT
------------------------------*/

const productCards = document.querySelectorAll(".product-card");

productCards.forEach(function(card){

card.addEventListener("mouseenter",function(){

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",function(){

card.style.transform="translateY(0) scale(1)";

});

});


/*------------------------------
FLOATING BUBBLES
------------------------------*/

function createBubble(){

const bubble = document.createElement("div");

bubble.classList.add("bubble");

bubble.style.left = Math.random()*100+"vw";

bubble.style.width = Math.random()*25+10+"px";

bubble.style.height = bubble.style.width;

bubble.style.animationDuration =
Math.random()*5+5+"s";

document.body.appendChild(bubble);

setTimeout(function(){

bubble.remove();

},10000);

}

setInterval(createBubble,800);


/*------------------------------
PRODUCT BUTTON CLICK
------------------------------*/

const buyButtons = document.querySelectorAll(".product-card a");

buyButtons.forEach(function(button){

button.addEventListener("click",function(){

alert("🛒 Product added. Continue to payment.");

});

});


console.log("Part 2 Loaded Successfully");
/*=========================================
ESHRAH AQUARIUM
JavaScript - Part 3
=========================================*/

/*------------------------------
SHOPPING CART COUNTER
------------------------------*/

let cartCount = 0;

const cartCounter = document.getElementById("cart-count");

const buyNowButtons = document.querySelectorAll(".product-card a");

buyNowButtons.forEach(function(button){

button.addEventListener("click",function(e){

cartCount++;

if(cartCounter){
cartCounter.innerHTML = cartCount;
}

alert("🛒 Product Added to Cart!");

});

});


/*------------------------------
PRODUCT SEARCH
------------------------------*/

const searchBox = document.getElementById("search");

const products = document.querySelectorAll(".product-card");

if(searchBox){

searchBox.addEventListener("keyup",function(){

let value = searchBox.value.toLowerCase();

products.forEach(function(product){

let title = product.querySelector("h2").innerText.toLowerCase();

if(title.includes(value)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

}


/*------------------------------
CATEGORY FILTER
------------------------------*/

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button){

button.addEventListener("click",function(){

let category = this.getAttribute("data-filter");

products.forEach(function(product){

if(category=="all"){

product.style.display="block";

}else if(product.classList.contains(category)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

});


/*------------------------------
WISHLIST BUTTON
------------------------------*/

const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(function(button){

button.addEventListener("click",function(){

if(this.classList.contains("active")){

this.classList.remove("active");

this.innerHTML="🤍";

}else{

this.classList.add("active");

this.innerHTML="❤️";

}

});

});


/*------------------------------
PRODUCT HOVER SOUND
------------------------------*/

products.forEach(function(product){

product.addEventListener("mouseenter",function(){

this.style.transition=".3s";

this.style.boxShadow="0 15px 35px rgba(0,188,212,.35)";

});

product.addEventListener("mouseleave",function(){

this.style.boxShadow="";

});

});


console.log("Part 3 Loaded Successfully");
/*=========================================
ESHRAH AQUARIUM
JavaScript - Part 3
=========================================*/

/*------------------------------
SHOPPING CART COUNTER
------------------------------*/

let cartCount = 0;

const cartCounter = document.getElementById("cart-count");

const buyNowButtons = document.querySelectorAll(".product-card a");

buyNowButtons.forEach(function(button){

button.addEventListener("click",function(e){

cartCount++;

if(cartCounter){
cartCounter.innerHTML = cartCount;
}

alert("🛒 Product Added to Cart!");

});

});


/*------------------------------
PRODUCT SEARCH
------------------------------*/

const searchBox = document.getElementById("search");

const products = document.querySelectorAll(".product-card");

if(searchBox){

searchBox.addEventListener("keyup",function(){

let value = searchBox.value.toLowerCase();

products.forEach(function(product){

let title = product.querySelector("h2").innerText.toLowerCase();

if(title.includes(value)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

}


/*------------------------------
CATEGORY FILTER
------------------------------*/

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button){

button.addEventListener("click",function(){

let category = this.getAttribute("data-filter");

products.forEach(function(product){

if(category=="all"){

product.style.display="block";

}else if(product.classList.contains(category)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

});


/*------------------------------
WISHLIST BUTTON
------------------------------*/

const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(function(button){

button.addEventListener("click",function(){

if(this.classList.contains("active")){

this.classList.remove("active");

this.innerHTML="🤍";

}else{

this.classList.add("active");

this.innerHTML="❤️";

}

});

});


/*------------------------------
PRODUCT HOVER SOUND
------------------------------*/

products.forEach(function(product){

product.addEventListener("mouseenter",function(){

this.style.transition=".3s";

this.style.boxShadow="0 15px 35px rgba(0,188,212,.35)";

});

product.addEventListener("mouseleave",function(){

this.style.boxShadow="";

});

});


console.log("Part 3 Loaded Successfully");
/*=========================================
ESHRAH AQUARIUM
JavaScript - Part 5 (Final)
=========================================*/


/*------------------------------
LOGIN VALIDATION
------------------------------*/

const loginForm = document.querySelector(".login-card form");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

let username = loginForm.querySelector('input[type="text"]').value.trim();

let password = loginForm.querySelector('input[type="password"]').value.trim();

if(username=="" || password==""){

alert("⚠ Please enter Username and Password.");

return;

}

alert("✅ Login Successful!");

loginForm.reset();

});

}


/*------------------------------
CONTACT FORM VALIDATION
------------------------------*/

const contactForms=document.querySelector(".payment-form form");

if(contactForms){

contactForms.addEventListener("submit",function(e){

e.preventDefault();

alert("📨 Thank you! Your message has been sent.");

contactForms.reset();

});

}


/*------------------------------
PAYMENT VALIDATION
------------------------------*/

const paymentForm=document.querySelector(".payment-form form");

if(paymentForm){

paymentForm.addEventListener("submit",function(e){

e.preventDefault();

alert("💳 Payment Successful!\n\nThank you for shopping at ESHRAH AQUARIUM.");

paymentForm.reset();

});

}


/*------------------------------
VISITOR COUNTER
------------------------------*/

let visitors=localStorage.getItem("visitors");

if(visitors==null){

visitors=1;

}else{

visitors=parseInt(visitors)+1;

}

localStorage.setItem("visitors",visitors);

const visitor=document.getElementById("visitor-count");

if(visitor){

visitor.innerHTML=visitors;

}


/*------------------------------
SMOOTH SCROLL
------------------------------*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/*------------------------------
LIVE CART TOTAL
------------------------------*/

let total=0;

document.querySelectorAll(".product-card").forEach(function(card){

let btn=card.querySelector("a");

if(btn){

btn.addEventListener("click",function(){

let price=card.querySelector("h3").innerText;

price=parseInt(price.replace(/[₹,]/g,""));

total+=price;

const totalBox=document.getElementById("cart-total");

if(totalBox){

totalBox.innerHTML="₹ "+total;

}

});

}

});


/*------------------------------
WELCOME MESSAGE
------------------------------*/

console.log("🐠 Welcome to ESHRAH AQUARIUM");

console.log("Website Developed Successfully!");

alert("🎉 Welcome to ESHRAH AQUARIUM!\nEnjoy Premium Aquarium Shopping.");
alert("✅ Login Successful!");

window.location.href = "home.html";
/*================ VOICE SEARCH =================*/

const voiceBtn = document.getElementById("voiceSearch");

if(voiceBtn){

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if(SpeechRecognition){

const recognition = new SpeechRecognition();

recognition.lang = "en-US";

voiceBtn.addEventListener("click",function(){

recognition.start();

});

recognition.onresult = function(event){

document.getElementById("search").value =
event.results[0][0].transcript;

};

}else{

voiceBtn.style.display="none";

}

}
function filterProducts(category){

    const products =
        document.querySelectorAll('.product-card');

    products.forEach(product => {

        if(category === 'all'){
            product.style.display = 'block';
        }
        else if(product.classList.contains(category)){
            product.style.display = 'block';
        }
        else{
            product.style.display = 'none';
        }

    });

}
let cart=[];

function addToCart(name,price){

    cart.push({
        name:name,
        price:price
    });

    alert(name + " added to cart!");

    console.log(cart);

}
function searchProducts(){

    let input=
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let products=
        document.querySelectorAll(".product-card");

    products.forEach(product=>{

        let name=
            product.querySelector("h3")
            .innerText
            .toLowerCase();

        if(name.includes(input)){
            product.style.display="block";
        }
        else{
            product.style.display="none";
        }

    });

}
function toggleChat(){
    let chat=document.getElementById("chatBox");

    if(chat.style.display==="block"){
        chat.style.display="none";
    }
    else{
        chat.style.display="block";
    }
}

function sendMessage(){

    let input=
        document.getElementById("userInput");

    let text=input.value.toLowerCase();

    if(text==="") return;

    let body=
        document.getElementById("chatBody");

    body.innerHTML +=
    `<div class="user-message">${text}</div>`;

    let reply="Sorry, I don't understand.";

    if(text.includes("goldfish")){
        reply=
        "Goldfish require at least a 20 gallon tank and prefer cool water.";
    }

    else if(text.includes("betta")){
        reply=
        "Betta fish should usually be kept alone and need warm water.";
    }

    else if(text.includes("plant")){
        reply=
        "Java Fern and Anubias are excellent beginner plants.";
    }

    else if(text.includes("water")){
        reply=
        "Change 20% to 30% of aquarium water every week.";
    }

    else if(text.includes("food")){
        reply=
        "High quality pellets and frozen foods are recommended.";
    }

    setTimeout(()=>{

        body.innerHTML +=
        `<div class="bot-message">${reply}</div>`;

        body.scrollTop=
        body.scrollHeight;

    },500);

    input.value="";
}