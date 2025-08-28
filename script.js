const height = document.getElementById("height");
const weight = document.getElementById("weight");
const result = document.getElementById("result");
const form = document.getElementById("bmi-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const heightVal = parseInt(height.value);
    const weightVal = parseInt(weight.value);

    if (!heightVal || !weightVal) {
        result.textContent = "Height and Weight cannot be blank.";
        return;
    }

    let category = "";
    const bmi = (10000 * weightVal) / (heightVal * heightVal);
    if (bmi < 18) {
        category = "Underweight";
    } else if (bmi >= 18 && bmi <= 25) {
        category = "Normal";
    } else if (bmi > 25 && bmi <= 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.textContent = "Your BMI is " + bmi.toFixed(2) + " (" + category + ").";
});