// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  console.log("Button clicked!");

// Defined password variable
var password = "";

// Set password length prompts
var characters = prompt("How many characters would you like your password to be?");
if (characters < 8 || characters > 128) {
  alert("Your password must be between 8 and 128 characters to be valid. Please try again!");
  return;
}

// Set character selection prompts
var upperCase = confirm("Click OK to include uppercase characters, or cancel to exclude them.");
var lowerCase = confirm("Click OK to include lowercase characters, or cancel to exclude them.");
var numbers = confirm("Click OK to include numbers, or cancel to exclude them.");
var specials = confirm("Click OK to include special characters, or cancel to exclude them.");

// Set possbile character options
var upperCaseOnly = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
var lowerCaseOnly = "abcdefghijklmnopqrstuvwxyz";
var numbersOnly = "0123456789";
var specialsOnly = "~!@#$%^&*+-.,{}[]();:";

// Combination loops (upperCase ONLY)
if(upperCase === true && lowerCase === false && numbers === false && specials === false) {
  for(var i = 0; i < characters; i++ ) {
    var random = Math.floor(Math.random() * upperCaseOnly.length);
    password += upperCaseOnly.substring(random, random + 1);
  }
}

// Combination loops (lowerCase ONLY)
else if (upperCase === false && lowerCase === true && numbers === false && specials === false) {
  for(var i = 0; i < characters; i++ ) {
    var random = Math.floor(Math.random() * lowerCaseOnly.length);
    password += lowerCaseOnly.substring(random, random + 1);
  }
}

//Combination loops (numbers ONLY)
else if (upperCase === false && lowerCase === false && numbers === true && specials === false) {
  for(var i = 0; i < characters; i++ ) {
    var random = Math.floor(Math.random() * numbersOnly.length);
    password += numbersOnly.substring(random, random + 1);
  }
}

return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

