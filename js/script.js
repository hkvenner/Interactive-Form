document.getElementById("name").focus();

const other_title = document.getElementById("other-title");
other_title.style.display = "none";

const title = document.getElementById('title');

// if (title.value === 'other'){
//     other_title.style.display = 'inline';
// }

// Display a text input field if the user selects the title option "Other"
title.addEventListener("click", (e) => {
    if (e.target.value == "other"){
        other_title.style.display = 'block';
    } else {
        other_title.style.display = 'none';
    }
});

//T-Shirt Section
const design = document.getElementById("design");
design.firstElementChild.style.display = "none";

const color = document.getElementById("color");
const colorChildNodes = color.children;


const option = document.createElement("option");
option.innerText = "Please select a T-shirt theme";
option.selected = "selected";

color.appendChild(option);

for (let i= 0; i < colorChildNodes.length; i ++){
    colorChildNodes[i].style.display = "none";
}


//Event listener that displays appropriate color options if "I love JS or "JS Puns" design options
//are chosen
design.addEventListener("click", (e) => {
    if (e.target.value == "js puns"){
        for (let i = 0; i < colorChildNodes.length; i ++){
            if (colorChildNodes[i].value == "cornflowerblue" ||
             colorChildNodes[i].value == "darkslategrey" || 
            colorChildNodes[i].value == "gold"){
                colorChildNodes[i].style.display = "block";
                colorChildNodes[0].selected = "selected";
            } else {
                colorChildNodes[i].style.display = "none";
            }

        }
    } else {
        for (let i = 0; i < colorChildNodes.length; i ++){
            if (colorChildNodes[i].value == "tomato" ||
             colorChildNodes[i].value == "steelblue" || 
            colorChildNodes[i].value == "dimgrey"){
                colorChildNodes[i].style.display = "block";
                colorChildNodes[3].selected = "selected";
            } else {
                colorChildNodes[i].style.display = "none";
            }

        }


    }

});

const activities = document.querySelector(".activities");
let totalCost = 0;
let dayAndTime = "still the same";
//Creates an element in the DOM to display the total activity cost in the activities section
let h4 = document.createElement('h4');
h4.innerText = "Total Activities Cost: $" + totalCost;
activities.appendChild(h4);

// Gets all the input elements in the activities section and stores them in an array
const activityOptions = document.querySelectorAll(".activities input");
console.log(activityOptions);

//Function that sets "disabled" input property to true or false
function setActivityOptions(value,e){
    for (let i = 0; i < activityOptions.length; i ++){
        if (activityOptions[i].dataset.dayAndTime === dayAndTime 
            && activityOptions[i].name !== e.target.name){
                activityOptions[i].disabled = value;
        } 
    }
}
//Listening for changes in the activities section and updates and displays the total activity cost
activities.addEventListener("change", (e) => {
    if (e.target.checked == true){
        totalCost += parseInt(e.target.dataset.cost);
        dayAndTime = e.target.dataset.dayAndTime;
        //disables any other options going on at the same time
        setActivityOptions(true,e);
    } else if (e.target.checked == false) {
        totalCost -= parseInt(e.target.dataset.cost);
        dayAndTime = e.target.dataset.dayAndTime;
        setActivityOptions(false,e);
        
    }
    h4.innerText = "Total Activities Cost: $" + totalCost;
});

/* Payment Section*/

const creditCard = document.getElementById("credit-card");
const bitCoin = document.getElementById("bitcoin");
const payPal = document.getElementById("paypal");

const payment = document.getElementById('payment');
//hide "Select Payment Option"
payment.firstElementChild.style.display = "none";

//displays credit card payment option by default
bitCoin.style.display = "none";
payPal.style.display = "none";
payment.firstElementChild.nextElementSibling.selected = "selected";


payment.addEventListener("change", (e) => {
    if(e.target.value == "credit card"){
        creditCard.style.display = "block";
        bitCoin.style.display = "none";
        payPal.style.display = "none";
    } else if(e.target.value == "paypal") {
        console.log("selected!");
        payPal.style.display = "block";
        creditCard.style.display = "none";
        bitCoin.style.display = "none";
    } else if(e.target.value == "bitcoin") {
        bitCoin.style.display = "block";
        creditCard.style.display = "none";
        payPal.style.display = "none";
    } 
});

/**
 * Form Validation
 **/

//Validating the name

const name = document.getElementById("name");
const fieldset = document.querySelector("fieldset");
const span = document.createElement("span");

function validName() { 
    //console.log("this is the length of the value entered: " + name.value.length);
    if (name.value.length == 0){
        span.innerText = "Name must be at least 1 character long";
        span.style.color = "red";
        fieldset.insertBefore(span, name);
        return false;
    } 
    else {
        span.innerText = "";
        return true;
    }
}

function validateEmail(){

}

function validateActivitySection(){

}

function validateCreditCard() {

}

function validateZipCode() {

}

function validateCVV() {
    
}


// Master Validation Function - calls all the validation functions above
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    //try if invalid then e.preventDefault but if not then let things go through
    e.preventDefault();
    validName();
    // let isValid = validName();
    // if(!isValid) {
    //     alert("name too short");
    // }
});
