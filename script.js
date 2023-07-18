// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {

// Defined password variable
var password = "";

// Set password length prompts
var size = prompt("How many characters would you like your password to be?");
if (size < 8 || size > 128) {
  alert("Your password must be between 8 and 128 characters to be valid. Please try again!");
  return;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

