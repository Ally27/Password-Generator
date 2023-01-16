// Assignment code here
var characterLength = 8;
var choice = [];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = newPassword;
}

function generatePassword() {
    var password = "";
    choice = [];

   characterLength = prompt("Enter character length amount. (8-128)");
   if (isNaN(characterLength) || characterLength <8 || characterLength > 128){
    alert ("Invalid input. Characters must be between 8-128!");
    return "";
   }
    if (confirm("Numbers?")){
        choice = choice.concat(numbers);
    }
    if (confirm("Lowercases?")){
        choice = choice.concat(lowerCase);
    }
    if (confirm("Uppercases?")){
        choice = choice.concat(upperCase);
    }
    if (confirm("Special Characters?")){
        choice = choice.concat(specialCharacters);
    }

    for (var i = 0; i < characterLength; i++) {
        var index = Math.floor(Math.random() * choice.length);
        password = password + choice[index];
    }

    return password;
}