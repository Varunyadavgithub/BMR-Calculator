const age = document.querySelector(".bmr-calculator .controls form .age-section #age");
const height = document.querySelector(".bmr-calculator .controls form .height-section #height");
const weight = document.querySelector(".bmr-calculator .controls form .weight-section #weight");
const calculateBtn = document.querySelector(".bmr-calculator .result .calculate-btn");
const calories = document.querySelector(".bmr-calculator .result .result-msg .calories");
const errorMessage = document.querySelector(".bmr-calculator .result .error-msg");

// Mifflin-St jeor equation to calculate BMR(basal metabolic rate)
// {(10*weight)+(6.25*height)-(5*age)+(5)} -> for male
// {(10*weight)+(6.25*height)-(5*age)-(161)} -> for female

const calculateBMR = (weight, height, age, gender) => {
    if(gender == "male"){
        return 10*weight+6.25*height-5*age+5;
    }
    return 10*weight+6.25*height-5*age-161;
};

calculateBtn.addEventListener("click", () => {

    if(age.classList.contains("invalid") || height.classList.contains("invalid") || weight.classList.contains("invalid")){
        errorMessage.classList.add("active");
        return;
    }
    errorMessage.classList.remove("active");

    let genderValue = document.querySelector(".bmr-calculator form input[name='gender']:checked").value;
    let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);
    calories.innerHTML = BMR.toLocaleString("en-US");
});

// Input Validation
age.addEventListener("input", (e) => {
    let ageValue = e.target.value;

    if(!ageValue || isNaN(ageValue) || ageValue<0) {
        age.classList.add("invalid");
    }
    else {
        age.classList.remove("invalid");
    }
});

height.addEventListener("input", (e) => {
    let heightValue = e.target.value;

    if(!heightValue || isNaN(heightValue) || heightValue<0) {
        height.classList.add("invalid");
    }
    else {
        height.classList.remove("invalid");
    }
});

weight.addEventListener("input", (e) => {
    let weightValue = e.target.value;

    if(!weightValue || isNaN(weightValue) || weightValue<0) {
        weight.classList.add("invalid");
    }
    else {
        weight.classList.remove("invalid");
    }
});