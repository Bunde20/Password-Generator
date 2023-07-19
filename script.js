// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  console.log("Button clicked!");

// Defined password variable
var password = "";

// Set password length prompt and alert
var characters = prompt("How many characters would you like your password to be?");
if (characters < 8 || characters > 128) {
  alert("Your password must be between 8 and 128 characters to be valid. Please try again!");
  return;
}

// Set character selection prompts
var upperCase = confirm("Include UPPERCASE letters? OK = YES or Cancel = NO");
var lowerCase = confirm("Include LOWERCASE letters? OK = YES or Cancel = NO");
var numbers = confirm("Include NUMBERS? OK = YES or Cancel = NO");
var specials = confirm("Include SPECIAL CHARACTERS? OK = YES or Cancel = NO");

// Set possbile character options
var upperCaseOnly = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
var lowerCaseOnly = "abcdefghijklmnopqrstuvwxyz";
var numbersOnly = "0123456789";
var specialsOnly = "~!@#$%^&*+-.,{}[]();:";
var upperLowerOnly = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
var upperNumbersOnly = "ABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789"
var upperSpecialsOnly = "ABCDEFGHIGKLMNOPQRSTUVWXYZ~!@#$%^&*+-.,{}[]();:"
var upperLowerNumbersOnly = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// Combination loops (UPPERCASE ONLY)
if(upperCase === true && lowerCase === false && numbers === false && specials === false) {
  for(var i = 0; i < characters; i++ ) {
    var random = Math.floor(Math.random() * upperCaseOnly.length);
    password += upperCaseOnly.substring(random, random + 1);
  }
}

// Combination loops (LOWERCASE ONLY)
else if (upperCase === false && lowerCase === true && numbers === false && specials === false) {
  for(var i = 0; i < characters; i++ ) {
    var random = Math.floor(Math.random() * lowerCaseOnly.length);
    password += lowerCaseOnly.substring(random, random + 1);
  }
}

//Combination loops (NUMBERS ONLY)
else if (upperCase === false && lowerCase === false && numbers === true && specials === false) {
  for(var i = 0; i < characters; i++ ) {
    var random = Math.floor(Math.random() * numbersOnly.length);
    password += numbersOnly.substring(random, random + 1);
  }
}

//Combination loops (SPECIALS ONLY)
else if (upperCase === false && lowerCase === false && numbers === false && specials === true) {
  for(var i = 0; i < characters; i++ ) {
    var random = Math.floor(Math.random() * specialsOnly.length);
    password += specialsOnly.substring(random, random + 1);
  }
}

//Combination loops (UPPER/LOWER ONLY)
else if (upperCase === true && lowerCase === true && numbers === false && specials === false) {
  for(var i = 0; i < characters; i++ ) {
    var random = Math.floor(Math.random() * upperLowerOnly.length);
    password += upperLowerOnly.substring(random, random + 1);
  }
}

//Combination loops (UPPER/NUMBER ONLY)
else if (upperCase === true && lowerCase === false && numbers === true && specials === false) {
  for(var i = 0; i < characters; i++ ) {
    var random = Math.floor(Math.random() * upperNumbersOnly.length);
    password += upperNumbersOnly.substring(random, random + 1);
  }
}

//Combination loops (UPPER/SPECIALS ONLY)
else if (upperCase === true && lowerCase === false && numbers === false && specials === true) {
  for(var i = 0; i < characters; i++ ) {
    var random = Math.floor(Math.random() * upperSpecialsOnly.length);
    password += upperSpecialsOnly.substring(random, random + 1);
  }
}

//Combination loops (UPPER/LOWER/NUMBERS ONLY)
else if (upperCase === true && lowerCase === true && numbers === true && specials === false) {
  for(var i = 0; i < characters; i++ ) {
    var random = Math.floor(Math.random() * upperLowerNumbersOnly.length);
    password += upperLowerNumbersOnly.substring(random, random + 1);
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

