// KF panda character search

// Variables for HTML Elements
let searchBtnEl = document.getElementById("search-btn")
let nameInputEl = document.getElementById("name-input")
let charImgEl = document.getElementById("char-img");
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");

// button event listener
searchBtnEl.addEventListener("click", characterSearch)

// Event Function
function characterSearch() {
    // Get input
    let name = nameInputEl.value;

// Check the name
if (name === "Po") {
    charImgEl.src = "images/po.png";
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "\"Buddy, I am the Dragon Warrior.\"";
} else if (name === "Viper") {
    charImgEl.src = "images/viper.png";
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "\"I don't need to bite to fight!\"";
} else if (name === "Mantis") {
    document.getElementById("char-img").src = "images/mantis.png";
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "\"Fear the bug!\"";
} else if (name === "Crane") {
    document.getElementById("char-img").src = "images/crane.png";
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "\"You can chain my body, but you will never chain my warrior spirit!\"";
} else if (name === "Tigress") {
    document.getElementById("char-img").src = "images/tigress.png";
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "\"That was pretty hardcore!\"";
} else if (name === "Monkey") {
    document.getElementById("char-img").src = "images/monkey.png";
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "\"We should hang out!\"";
} else {
    document.getElementById("char-img").src = "images/question-mark.png";
    charNameEl.innerHTML = "Character not found";
    charQuoteEl.innerHTML = "\"Character not found\"";
}
}
