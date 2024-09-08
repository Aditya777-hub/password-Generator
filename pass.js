function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function pass(){
    document.getElementById('password').value = generatePassword(10)
}

window.addEventListener('DOMContentLoaded', function() {
//    pass();

   const copyBtn = document.getElementById('copy-btn');
   copyBtn.addEventListener('click', async function() {
       try {
           const passwordField = document.getElementById('password');
           await navigator.clipboard.writeText(passwordField.value);
           alert('Password copied to clipboard!');
       } catch (err) {
          alert('Failed to copy text: ', err);
       }
   });
})