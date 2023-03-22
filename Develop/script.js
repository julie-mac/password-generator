// Assignment code here

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', '[', ']', '{', '}', '|', ',', '<', '>', '.', '?', '/', ' ']


function generatePassword() {

  //Storing the chosen criteria in an object, these will be changed later by the user 
  var chosenCriteria = {
      passLength : "",
      useLowercase : null,
      useUppercase : null,
      useNumbers : null,
      useSymbols : null
    }
  
  //Asks the user how long they would like their password to be
  var askLength = prompt("Please enter your desired length of your password, a number between 8 and 128.");
  Number(askLength);

  //stores the value given by the user in the chosenCriteria object
  //If the user enters a number over 128 or less than 8, an alert shows asking to try again
  if (askLength <= 128 && askLength >= 8) {
    chosenCriteria.passLength = askLength;
  } else if (askLength > 128 || askLength < 8) {
    alert("You've entered an invalid number. Please enter an amount between 8 and 128.");
    return
  } else {
    return;
  }

  //These confirm prompts ask the use if they would like to include certain criteria
  chosenCriteria.useLowercase = confirm("Would you like to include lower case letters in your password? Click OK for Yes, and Cancel for No.");

  chosenCriteria.useUppercase = confirm("Would you like to include upper case letters in your password? Click OK for Yes, and Cancel for No.");

  chosenCriteria.useNumbers = confirm("Would you like to include numbers 0-9 in your password? Click OK for Yes, and Cancel for No.");

  chosenCriteria.useSymbols = confirm("Would you like to include symbols in your password? Click OK for Yes, and Cancel for No.");
  
  //starting off the characters chosen and password as empty values, to be added onto based on the user's choices
  let characters = [];
  let password = "";

  //Conditional statements to concat the arrays containing different characters, based off user's choices
  if (chosenCriteria.useLowercase) {
    characters = characters.concat(lowerCase);
  }
  
  if (chosenCriteria.useUppercase) {
    characters = characters.concat(upperCase);
  }

  if (chosenCriteria.useNumbers) {
    characters = characters.concat(numbers);
  }

  if (chosenCriteria.useSymbols) {
    characters = characters.concat(symbols);
  } else if (
    !chosenCriteria.useLowercase &&
    !chosenCriteria.useUppercase &&
    !chosenCriteria.useNumbers &&
    !chosenCriteria.useSymbols
    ) {
      alert("You haven't included any character sets to put in your password. You need to include at least one. Please try again.");
      return;
    } //If the user has said 'No' or 'Cancel' for each set of characters, an alert pops up asking them to try again, as they need to include at least one character set.


  //The for loop adds characters from the set of chosen characters to the password, repeats as long as the length of the password chosen by the user
  for (i = 0 ; i < chosenCriteria.passLength ; i++) {
    var randomChar = characters[Math.floor(Math.random() * characters.length)];
    password = password + randomChar;
  }
  //Returns the final password to the global scope, to be displayed to the user
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "Here is your password: " + password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
