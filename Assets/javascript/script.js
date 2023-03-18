// linking the id generate in our html to our generateBtn variable
var generateBtn = document.querySelector("#generate");

// character variables
const lowerChars = "abcdefghijklmnopqrstuvwxyz";

const upperChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numberChars = "1234567890";

const specialChars = ",<.>/?;:'[{]}=+-_)(*&^%$#@!";


// Write password to the textarea in html
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Added event listener to generate button when I click the button to generate a password
generateBtn.addEventListener("click", writePassword);

// function to create a secure password
function generatePassword() {
  
  let lockBoxChars = "";

  let length = prompt("how many characters would you like in your password? (8 - 128 characters)");

  if (length < 8 || length > 128) {
    alert("Must be between 8 and 128 characters!");
    return;
  } 


// WHEN all prompts are answered
// WHEN I answer each prompt my input should be validated and at least one character type should be selected
let upperCase = confirm("would you like to use uppercase characters?");

if (upperCase) {
  lockBoxChars += upperChars;
} 

let lowerCase = confirm("would you like to use lowercase characters?");

if (lowerCase) {
  lockBoxChars += lowerChars;
} 

let numberCharacters = confirm("would you like to use number characters?");

if (numberCharacters) {
  lockBoxChars += numberChars;
} 

let specialCharacters = confirm("would you like to use special characters?");

if (specialCharacters) {
  lockBoxChars += specialChars;
} 

if (!upperCase && !lowerCase && !numberCharacters && !specialCharacters) {
  alert('You must choose at least one character type!');
  generatePassword();
}


// the password is generated and written to the page
password = "";
for (let i = 0; i < length; i++) {
  let randomChars = Math.floor(Math.random() * lockBoxChars.length);
  password += lockBoxChars.charAt(randomChars);
}

return password;

}
