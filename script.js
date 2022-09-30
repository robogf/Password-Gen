// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  passLength = prompt ('Choose the amount of characters youd like your password to have (8-128)')
  if (passLength<8||passLength>128){
    alert ('Please select a password length between 8 and 128 characters ')
  } else if (isNaN(passLength)){
  alert('Please enter a valid number')
  } // This prompt allows the user to pick the amount of characters for the password and has them enter valid answers

  

}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
