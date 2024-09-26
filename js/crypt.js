const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+= ";

// Encryption function
function encrypt(text, key) {
  let encryptedText = "";

  for (let i = 0; i < text.length; i++) {
    const textChar = text[i];
    const keyChar = key[i % key.length];

    const textIndex = alphabet.indexOf(textChar);
    const keyIndex = alphabet.indexOf(keyChar);

    if (textIndex === -1) {
      encryptText += textChar;
    } else {
      const newIndex = (textIndex + keyIndex) % alphabet.length;
      encryptedText += alphabet[newIndex];
    }
  }

  return encryptedText;
}

// Decrypt function
function decrypt(encryptedText, key) {
  let decryptedText = "";

  for (let i = 0; i < encryptedText.length; i++) {
    const encryptedChar = encryptedText[i];
    const keyChar = key[i % key.length];

    const encryptedIndex = alphabet.indexOf(encryptedChar);
    const keyIndex = alphabet.indexOf(keyChar);

    if (encryptedText === -1) {
      decryptedText += encryptedChar;
    } else {
      let newIndex = encryptedIndex - keyIndex;
      if (newIndex < 0) newIndex += alphabet.length;
      decryptedText += alphabet[newIndex];
    }
  }

  return decryptedText;
}

// Update result based on selected operation (enc or dec)
function update(isEncrypting) {
  const text = document.getElementById("message").value;
  const key = document.getElementById("key").value;

  let result = "";

  if (isEncrypting) {
    result = encrypt(text, key);
  } else {
    result = decrypt(text, key);
  }

  document.getElementById("result").textContent = result;
}

// Add event listeners to buttons
document.getElementById("enc-txt").addEventListener("click", function () {
  update(true);
});

document.getElementById("dec-txt").addEventListener("click", function () {
  update(false);
});

// Initialize the result with encrypted text when page loads
document.addEventListener("DOMContentLoaded", () => {
  update(true);
});
