// Assignment Code
var generateBtn = document.querySelector("#generate");

var finalValue ="";
var character ="qwertyuiopasdfghjklzxcvbnm";
var SpecialCharacters ="`~!@#$%^&*()_+-=<>?,./;:'";
var numberic = "0123456789";
var uppercase ="QWERTYUIOPASDFGHJKLZXCVBNM"; 

var str = character;
console.log(str);
 
function generatePassword()  {
  
  var characterCount = prompt("How many characters?");  
  if (isNaN(characterCount) || !characterCount || characterCount <8 || characterCount >128) {
    alert ("You need to add number and Between 8 and 128 pls");
    generatePassword();
  }   //good vcc
  
  
    var askSpecialCharacters = confirm("Allow special characters?");
    var asknumberic = confirm("Allow numeric characters?");
    var askuppercase = confirm("Allow uppercase characters?");


    if (askSpecialCharacters) {
      str = str + SpecialCharacters; 
      console.log(str);
    }
    if (asknumberic) {
      str = str + numberic;
      console.log(str);
    }

    if (askuppercase) {
      str = str + uppercase;
      console.log(str);
    }
    

  for(i = 0; i< characterCount; i++) {
    var randomPW = Math.floor(Math.random() * str.length+1);
    finalValue += str.charAt(randomPW);
  }


  console.log(str);
  return finalValue
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
