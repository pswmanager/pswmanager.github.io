const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
const characters = alpha + numbers + symbols;

function generate(e) {

    e.preventDefault();

    let password = "";
    for (let i = 0; i < 8; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    document.getElementById('password').value = password;

}