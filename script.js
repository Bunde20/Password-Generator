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
var upperCase = confirm("Click YES to include uppercase characters.");
var lowerCase = confirm("Click YES to include lowercase characters.");
var numbers = confirm("Click YES to include numbers.");
var specials = confirm("Click YES to include special characters.");

// Set possbile character options
upperCase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
lowerCase = "abcdefghijklmnopqrstuvwxyz";
numbers = "0123456789";
specials = "~!@#$%^&*+-.,{}[]();:";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

