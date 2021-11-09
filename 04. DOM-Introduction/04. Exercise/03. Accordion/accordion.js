function toggle() {
    document.querySelector(".button").textContent = 
        document.querySelector(".button").textContent == "More" ? "Less" : "More";
    document.getElementById("extra").style.display = 
        document.getElementById("extra").style.display == "none" ?
        document.getElementById("extra").style.display = "block" :
        document.getElementById("extra").style.display = "none";
}