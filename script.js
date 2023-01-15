// Assignment code here
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var characterSetNames = [
    "specialCharacters",
    "numbers",
    "lowerCase",
    "upperCase",
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
function writePassword() {
    var password = prompt("How many characters would you like? (8-128)");
    if (password < 8) {
        alert("Input must be between 8-128!");
        password();

    } else if (password > 128) {
        alert("Input must be between 8-128!");
        password();
    }

    var numbers = confirm("Numbers?");
    if (numbers === true) {
        password += "1";


    }
    var lowerCase = confirm("Any lower cases?");
    if (lowerCase) {
        password += "a";

    }
    var upperCase = confirm("What about UPPERCASE?");
    if (upperCase) {
        password += "A";

    }
    var specialCharacters = confirm("Special characters?");
    if (specialCharacters) {
        password += specialCharacters;

    }

    for (var i = 0; i < characterSetNames; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
