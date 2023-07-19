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
    generatePassword();
  }

  // Set variables for possbile character options & split method set to return a string
  var upperCaseOnly = "ABCDEFGHIGKLMNOPQRSTUVWXYZ".split("");
  var lowerCaseOnly = "abcdefghijklmnopqrstuvwxyz".split("");
  var numbersOnly = "0123456789".split("");
  var specialsOnly = "~!@#$%^&*+-.,{}[]();:".split("");
  var prePassword = [];

  // Create response messages for input from user
  if (confirm("Include UPPERCASE letters? OK = YES or Cancel = NO")) {
    prePassword = prePassword.concat(upperCaseOnly)
  }
  if (confirm("Include LOWERCASE letters? OK = YES or Cancel = NO")) {
    prePassword = prePassword.concat(lowerCaseOnly)
  }
  if (confirm("Include NUMBERS? OK = YES or Cancel = NO")) {
    prePassword = prePassword.concat(numbersOnly)
  }
  if (confirm("Include SPECIAL CHARACTERS? OK = YES or Cancel = NO")) {
    prePassword = prePassword.concat(specialsOnly)
  }
  if (prePassword.length === 0) {
    alert("You must choose at least one type of character to create a password. Please try again!")
    return;

  } else {

  // Set a for loop to create random password from responses
    for (var i = 0; i < characters; i++) {
      var random = Math.floor(Math.random() * prePassword.length);
      password += prePassword[random];
    }
  }

  // Print responses from information above to ensure input is correct
  console.log(prePassword)

  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (!password) {
    passwordText.value = "Please select at least one option!";
  }
  else {
  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

