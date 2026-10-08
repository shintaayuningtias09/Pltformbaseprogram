const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalKalori = 0;
let jumlahAktivitas;
let aktivitasKe = 1;

console.log("======================================");
console.log("      PROGRAM HITUNG KALORI OLAHRAGA");
console.log("======================================");
console.log("1. Lari     = 60 kalori / 5 menit");
console.log("2. Push-up  = 200 kalori / 30 menit");
console.log("3. Plank    = 5 kalori / 1 menit");
console.log("======================================");

rl.question("Berapa jenis aktivitas olahraga? ", function(input) {

    jumlahAktivitas = parseInt(input);

    // Mulai perulangan
    tanyaOlahraga();
});


function tanyaOlahraga() {

    // Jika semua aktivitas sudah selesai
    if (aktivitasKe > jumlahAktivitas) {

        console.log("\n======================================");
        console.log("Total kalori yang terbakar = " + totalKalori + " kalori");
        console.log("======================================");

        rl.close();
        return;
    }

    console.log(`\n--- Aktivitas ke-${aktivitasKe} ---`);

    rl.question(
        "Pilih olahraga (1 = Lari, 2 = Push-up, 3 = Plank): ",
        function(inputPilihan) {

            let pilihan = parseInt(inputPilihan);

            rl.question(
                "Berapa menit dilakukan? ",
                function(inputMenit) {

                    let menit = parseInt(inputMenit);

                    let kalori = 0;
                    let namaOlahraga = "";

                    switch (pilihan) {

                        case 1:
                            namaOlahraga = "Lari";
                            kalori = (menit / 5) * 60;
                            break;

                        case 2:
                            namaOlahraga = "Push-up";
                            kalori = (menit / 30) * 200;
                            break;

                        case 3:
                            namaOlahraga = "Plank";
                            kalori = menit * 5;
                            break;

                        default:
                            console.log("Pilihan olahraga tidak tersedia.");
                            tanyaOlahraga();
                            return;
                    }

                    totalKalori += kalori;

                    console.log(
                        `${namaOlahraga} selama ${menit} menit = ${kalori} kalori`
                    );

                    aktivitasKe++;

                    // Lanjut ke aktivitas berikutnya
                    tanyaOlahraga();
                }
            );
        }
    );
}
