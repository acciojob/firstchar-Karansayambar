function firstChar(text) {
  // Check if the input string is empty or contains only spaces
  if (text.trim() === '') {
    return '';
  }

  // Iterate through each character in the string
  for (let i = 0; i < text.length; i++) {
    // If a non-space character is found, return it
    if (text[i] !== ' ') {
      return text[i];
    }
  }

  // Return an empty string if no non-space character is found
  return '';
}

// Taking input using prompt and displaying the result using alert
const text = prompt("Enter text:");
alert(firstChar(text));
