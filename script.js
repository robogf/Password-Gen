// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  passLength = prompt ('Choose the amount of characters youd like your password to have (8-128)')
    if (passLength<8||passLength>128){
    alert ('Please select a password length between 8 and 128 characters ')
    }
      else if (isNaN(passLength)){
        alert('Please enter a valid number')
      }// This prompt allows the user to pick the amount of characters for the password and has them enter valid answers

  typeLower=confirm('would you like your password to contain lowercase letters?')
  typeUpper=confirm ('Would you like your password to contain uppercase letters?')
  typeNum=confirm ('Would you like your password to contain numbers?')
  typeSpecial=confirm ('Would you like your password to contain special characters?')
  // these are to help us confirm what kind of characters are going to be used for the password

  var lowerChar = [...Array(26)].map((_,i) => String.fromCharCode(i+97));
  var upperChar = [...Array(26)].map((_,i) => String.fromCharCode(i+capital ? 65: 97));
  var numChar = [...Array(10).keys()]
  var specialChar = ["!","@","#","$","%","^","&","*"]

  
  


}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
