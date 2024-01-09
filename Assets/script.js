// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  window.alert("What types of Characters would you like to use?");
  var choiceLC = window.confirm("Would you like to use lowercase characters? Type yes if so." );
  var choiceUC = window.confirm("Would you like to use uppercase characters? Type yes if so.");
  var choiceNum = window.confirm("Would you like to use numeric characters? Type yes if so.");
  var choiceSpec = window.confirm("Would you like to use special characters? Type yes if so.");
  const amount = Number(window.prompt("How long would you like your password to be? (must be between 8 and 128 characters)"));

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "1234567890";
  var special = "`~!@#$%^&*()_-+=[{]}\|;:',<.>/?";
  var passwordText = "";
 
  if ((amount < 8 )||
      (amount >128)||
      (!amount)) { 
    window.alert("Please enter a value between 8 and 128.")
    generatePassword();
    return;
  }
  
    if (choiceLC && choiceUC && choiceNum && choiceSpec) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (lowercase + uppercase + numeric + special).charAt(Math.floor(Math.random() * (lowercase.length + uppercase.length + numeric.length + special.length)));
      passwordLength ++ ;
      }
    return passwordText;
  } 
  else if ((choiceLC && choiceUC && choiceSpec) && (!choiceNum)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (lowercase + uppercase + special).charAt(Math.floor(Math.random() * (lowercase.length + uppercase.length + special.length)));
      passwordLength ++ ;
      }
  return passwordText;
}
  else if ((choiceLC && choiceUC && choiceNum) && (!choiceSpec)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (lowercase + uppercase + numeric).charAt(Math.floor(Math.random() * (lowercase.length + uppercase.length + numeric.length)));
      passwordLength ++ ;
      }
  return passwordText;
}
  else if ((choiceLC && choiceNum && choiceSpec) && (!choiceUC)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (lowercase + numeric + special).charAt(Math.floor(Math.random() * (lowercase.length + numeric.length + special.length)));
      passwordLength ++ ;
      }
  return passwordText;
}
   else if ((choiceSpec && choiceUC && choiceNum) && (!choiceLC)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (uppercase + numeric + special).charAt(Math.floor(Math.random() * (uppercase.length + numeric.length + special.length)));
      passwordLength ++ ;
      }
  return passwordText;
} 
  else if ((choiceLC && choiceUC) && (!choiceNum && !choiceSpec)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (lowercase + uppercase).charAt(Math.floor(Math.random() * (lowercase.length + uppercase.length)));
      passwordLength ++ ;
      }
  return passwordText;
}
   else if ((choiceLC && choiceNum) && (!choiceUC && !choiceSpec)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (lowercase + numeric).charAt(Math.floor(Math.random() * (lowercase.length + numeric.length)));
      passwordLength ++ ;
      }
  return passwordText;
}
  else if ((choiceLC && choiceSpec) && (!choiceUC && !choiceNum)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (lowercase + special).charAt(Math.floor(Math.random() * (lowercase.length + special.length)));
      passwordLength ++ ;
      }
  return passwordText;
}
   else if ((choiceUC && choiceNum) && (!choiceLC && !choiceSpec)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (uppercase + numeric).charAt(Math.floor(Math.random() * (uppercase.length + numeric.length)));
      passwordLength ++ ;
      }
  return passwordText;
}
   else if ((choiceUC && choiceSpec) && (!choiceLC && !choiceNum)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (uppercase + numeric).charAt(Math.floor(Math.random() * (uppercase.length + numeric.length)));
      passwordLength ++ ;
      }
  return passwordText;
}
   else if ((choiceNum && choiceSpec) && (!choiceLC && !choiceUC)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (numeric + special).charAt(Math.floor(Math.random() * (numeric.length + special.length)));
      passwordLength ++ ;
      }
  return passwordText;
 }
  else if ((choiceLC) && (!choiceSpec && !choiceUC && !choiceNum)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (lowercase).charAt(Math.floor(Math.random() * (lowercase.length)));
      passwordLength ++ ;
      }
  return passwordText;
} 
  else if ((choiceUC) && (!choiceSpec && !choiceLC && !choiceNum)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (uppercase).charAt(Math.floor(Math.random() * (uppercase.length)));
      passwordLength ++ ;
      }
  return passwordText;
} 
  else if ((choiceNum) && (!choiceSpec && !choiceUC && !choiceLC)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (numeric).charAt(Math.floor(Math.random() * (numeric.length)));
      passwordLength ++ ;
      }
  return passwordText;
 }
  else if ((choiceSpec) && (!choiceLC && !choiceUC && !choiceNum)) {
      let passwordLength = 0
      while ( passwordLength < amount ) {
      passwordText +=  (special).charAt(Math.floor(Math.random() * (special.length)));
      passwordLength ++ ;
      }
  return passwordText;
 } 
  else {
    window.alert("Please enter a yes for at least one character type.")
  };
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

