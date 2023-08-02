let humburger = document.getElementById("humburger")
let navBar = document.getElementById("navBar")
let homeNav = document.getElementById("homeNav")
let suplementNav = document.getElementById("suplementNav")
let ourprogramNav = document.getElementById("ourprogramNav")
let pricingNav = document.getElementById("pricingNav")
let bestreasonNav = document.getElementById("bestreasonNav")
let calculaterNav = document.getElementById("calculaterNav")

function toggleofnavbar(){
    navBar.classList.toggle("active")
}

humburger.onclick = function () {
    toggleofnavbar()
}
homeNav.onclick = function () {
    toggleofnavbar()
}
suplementNav.onclick = function () {
    toggleofnavbar()
}
ourprogramNav.onclick = function () {
    toggleofnavbar()
}
pricingNav.onclick = function () {
    toggleofnavbar()
}
bestreasonNav.onclick = function () {
    toggleofnavbar()
}
calculaterNav.onclick = function () {
    toggleofnavbar()
}



// varables of bmi calculater
let calcform = document.getElementById("calc-form"),
    calculaterBox   = document.getElementsByClassName("calculater-box"),
    height   = document.getElementById("height"),
    heightMassege   = document.getElementById("height-massege"),
    weight   = document.getElementById("weight"),
    weightMassege   = document.getElementById("weight-massege"),
    submit   = document.getElementById("submit"),
    calcmassege   = document.getElementById("calc-massege")
// function of bmi calculater
submit.onclick = function(){
        // if user didnot enter weight and height
    if (height.value === "" && weight.value === ""){
        // height massege
        heightMassege.style.display = "block"
        heightMassege.innerHTML = "please inter your height"
        calculaterBox[0].style.border = "solid red 1px"
        // weight massege
        weightMassege.style.display = "block"
        weightMassege.innerHTML = "please inter your weight"
        calculaterBox[1].style.border = "solid red 1px"
        height.focus()
    }
    // if user didnot enter height
    else if(height.value === ""){
        // height massege
        heightMassege.style.display = "block";
        heightMassege.innerHTML = "please inter your height";
        weightMassege.style.display = "block";
        weightMassege.innerHTML = "";
        calculaterBox[0].style.border = "solid red 1px";
        height.focus()
    }
    // if user didnot enter weight
    else if(weight.value === ""){
        // weight massege
        heightMassege.style.display = "block"
        heightMassege.innerHTML = ""
        weightMassege.style.display = "block"
        weightMassege.innerHTML = "please inter your weight"
        calculaterBox[1].style.border = "solid red 1px"
        weight.focus()
    }
    // if user enter height and weight
    else{
        calcmassege.style.visibility = "visible"
        calcmassege.style.color = "green"
        // calculatin equation
        calcmassege.innerHTML = ("your BMI = " + Math.round( weight.value / ((height.value / 100) **2) ) )
        weight.value = "";
        height.value = "";
        // remov calc massege after 3s
        setTimeout(function(){
            calcmassege.innerHTML = ""; 
        }, 3000)
    } 

    // oninput weight
    weight.oninput = function(){
        heightMassege.style.display = "block"
        weightMassege.style.display = "block"
        weightMassege.innerHTML = ""
        calculaterBox[1].style.border = "solid hsl(79, 72%, 55%)   1px"
    }
    // oninput height
    height.oninput = function(){
        weightMassege.style.display = "block"
        heightMassege.style.display = "block"
        heightMassege.innerHTML = ""
        calculaterBox[0].style.border = "solid hsl(79, 72%, 55%)   1px"
    }
}

// after press enter weight input focus
height.addEventListener("keyup", e => {
    e.preventDefault()
    // user entered weight
    if(e.keyCode === 13 && weight.value != ""){
        submit.click()
    }
    // user didnot entered weight
    else if(e.keyCode === 13 && weight.value == "") {
        weight.focus()
    }
})
// after press enter submit button clicked
weight.addEventListener("keyup", e => {
    e.preventDefault()
    // user didnot entered height
    if(e.keyCode === 13 && height.value == ""){
        height.focus()
    }
    // user entered height
     else if(e.keyCode === 13 && height.value != "") {
        submit.click()
    }
})










let inp = document.querySelectorAll(".inp")
let submitss = document.querySelectorAll(".submit")
console.log()

inp.forEach(function(ele){
    ele.addEventListener("focus", function(){
        this.parentElement.style.backgroundColor = "hsl(79, 72%, 45%)";
    }, false);

    ele.addEventListener("blur", function(){
        this.parentElement.style.backgroundColor = "aliceblue";
    }, false);
});

    


