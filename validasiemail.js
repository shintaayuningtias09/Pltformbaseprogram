const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan email: ", function(email) {

    let adaAt = false;
    let adaTitik = false;
    let posisiAt = -1;

    // Mengecek setiap karakter menggunakan perulangan
    for (let i = 0; i < email.length; i++) {

        if (email[i] === "@") {
            adaAt = true;
            posisiAt = i;
        }

        if (email[i] === ".") {
            adaTitik = true;
        }
    }

    // Mengecek validitas email
    if (
        adaAt &&
        adaTitik &&
        posisiAt > 0 &&
        posisiAt < email.length - 1
    ) {
        console.log("Email VALID");
    } else {
        console.log("Email TIDAK VALID");
    }

    rl.close();
});
