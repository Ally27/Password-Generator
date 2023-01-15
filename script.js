// Assignment code here
var specialCharacters = "!@#$%^&*()";
var numbers = "0123456789";
var lowerCase = "";
var upperCase = "";
var minimumCount = 8;
var maximumCount = 128;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var passwordLength = prompt("How many characters would you like? (8-128)");
    var newPassword = ""
    if (passwordLength) {
        var number = confirm("Numbers?");
        if (number) {
            newPassword += "1"


        }
        var lowercase = confirm("Any lower cases?");
        if (lowerCase) {
            newPassword += "a"

        }
        var uppercase = confirm("What about UPPERCASE?")
        if (upperCase) {
            newPassword += "A"

        }
        var special = confirm("lastly, any special characters?")
        if (specialCharacters) {
            newPassword += "!"

        }
    }
    return newPassword
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
