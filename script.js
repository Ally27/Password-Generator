// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var passwordLength = prompt("How many characters? (8-128)");
    var number = confirm("Numbers?");
    var lowercase = confirm("Any lower cases?");
    var uppercase = confirm("What about UPPERCASE?")
    var special = confirm("lastly, any special characters?")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);