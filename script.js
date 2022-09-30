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

  var  typeLower=window.confirm ("would you like your password to contain lowercase letters?")
  var typeUpper=window.confirm ("Would you like your password to contain uppercase letters?")
  var typeNum=window.confirm ("Would you like your password to contain numbers?")
  var typeSpecial=window.confirm ("Would you like your password to contain special characters?")
  // these are to help us confirm what kind of characters are going to be used for the password

  var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upperChar = ["A","B"];
  var numChar = [1,2,3,4,5,6,7,8,9,0];
  var specialChar = ["!","@","#","$","%","^","&","*"];
  var passMixer = []
//these are the different types of characters that are offered to
  

  
  if (typeLower){
   passMixer = passMixer.concat(lowerChar)
  } 
  if (typeUpper){
   passMixer =  passMixer.concat(upperChar)
  } 
  if (typeNum){
   passMixer = passMixer.concat(numChar)
  }
   if (typeSpecial){
   passMixer = passMixer.concat(specialChar)
  }

console.log(passMixer)
  var printedPass = []
for (var i = 0; i < passLength; i++) {
  var randomPass = Math.floor(Math.random()*passMixer.length);
  var randomValue =passMixer[randomPass]
  printedPass.push(randomValue)

}
console.log(printedPass)
var actualPass = printedPass.join ("")
return actualPass
  


}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
