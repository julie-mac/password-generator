// Assignment code here

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', '[', ']', '{', '}', '|', ',', '<', '>', '.', '?', '/']




function generatePassword() {
  var chosenCriteria = {
      passLength : "",
      useLowercase : "",
      useUppercase : "",
      useNumbers : "",
      useSymbols : ""
    }
  
  var askLength = prompt("Please enter your desired length of your password, a number between 8 and 128.");

  Number(askLength);
  console.log(askLength);

  if (askLength <= 128 && askLength >= 8) {
    chosenCriteria.passLength = askLength;
  } else if (askLength > 128 || askLength < 8) {
    alert("You've entered an invalid number. Please enter an amount between 8 and 128.");
    return
  } else {
    return;
  }

  var confirmLowercase = confirm("Would you like to include lower case letters in your password? Click OK for Yes, and Cancel for No.");

  if (confirmLowercase) {
    chosenCriteria.useLowercase = true;
  } else {
    chosenCriteria.useLowercase = false;
  }

  var confirmUppercase = confirm("Would you like to include upper case letters in your password? Click OK for Yes, and Cancel for No.");

  if (confirmUppercase) {
    chosenCriteria.useUppercase = true;
  } else {
    chosenCriteria.useUppercase = false;
  }

  var confirmNumbers = confirm("Would you like to include numbers 0-9 in your password? Click OK for Yes, and Cancel for No.");

  if (confirmNumbers) {
    chosenCriteria.useNumbers = true;
  } else {
    chosenCriteria.useNumbers = false;
  }

  var confirmSymbols = confirm("Would you like to include symbols in your password? Click OK for Yes, and Cancel for No.");

  if (confirmSymbols) {
    chosenCriteria.useSymbols = true;
  } else {
    chosenCriteria.useSymbols = false;
  }

  console.log(chosenCriteria)
  
  let characters = [];
  let password = "";

  if (chosenCriteria.useLowercase0) {
    characters = characters.concat(lowerCase);
  }
  
  if (chosenCriteria.useUppercase) {
    characters = characters.concat(upperCase);
  }

  if (chosenCriteria.useNumbers) {
    characters = characters.concat(useNumbers);
  }

  if (chosenCriteria.useSymbols) {
    characters = characters.concat(symbols);
  }

  console.log(characters)
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
