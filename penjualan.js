const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalBelanja = 0;
let jumlahItem = 3;
let itemKe = 1;

function pilihBarang() {
    if (itemKe > jumlahItem) {
        hitungPembayaran();
        return;
    }

    console.log("\n===== DAFTAR BARANG =====");
    console.log("1. Buku        - Rp20000");
    console.log("2. Pulpen      - Rp10000");
    console.log("3. Pensil      - Rp5000");
    console.log("4. Penghapus   - Rp7000");
    console.log("5. Tas         - Rp75000");

    rl.question(`\nPilih barang ke-${itemKe}: `, function(pilihan) {

        let namaBarang;
        let hargaBarang;

        switch (parseInt(pilihan)) {
            case 1:
                namaBarang = "Buku";
                hargaBarang = 20000;
                break;

            case 2:
                namaBarang = "Pulpen";
                hargaBarang = 10000;
                break;

            case 3:
                namaBarang = "Pensil";
                hargaBarang = 5000;
                break;

            case 4:
                namaBarang = "Penghapus";
                hargaBarang = 7000;
                break;

            case 5:
                namaBarang = "Tas";
                hargaBarang = 75000;
                break;

            default:
                console.log("Pilihan barang tidak tersedia!");
                pilihBarang();
                return;
        }

        rl.question(`Jumlah ${namaBarang} yang dibeli: `, function(jumlah) {

            jumlah = parseInt(jumlah);

            let subtotal = hargaBarang * jumlah;
            totalBelanja = totalBelanja + subtotal;

            console.log("\n--- Detail Pembelian ---");
            console.log("Barang   :", namaBarang);
            console.log("Harga    : Rp" + hargaBarang);
            console.log("Jumlah   :", jumlah);
            console.log("Subtotal : Rp" + subtotal);

            itemKe++;

            pilihBarang();
        });
    });
}

function hitungPembayaran() {

    let totalDiskon = 0;
    let totalBayar = 0;
    let persentaseDiskon = 0;

    // Menentukan diskon
    if (totalBelanja >= 300000) {
        persentaseDiskon = 10;
    } else if (totalBelanja >= 100000) {
        persentaseDiskon = 5;
    } else if (totalBelanja >= 50000) {
        persentaseDiskon = 3;
    }

    // Menghitung diskon
    totalDiskon = totalBelanja * persentaseDiskon / 100;

    // Menghitung total bayar
    totalBayar = totalBelanja - totalDiskon;

    console.log("\n================================");
    console.log("        STRUK PEMBELIAN");
    console.log("================================");

    if (persentaseDiskon > 0) {

        console.log("Total Belanja : Rp" + totalBelanja);
        console.log("Diskon        : " + persentaseDiskon + "%");
        console.log("Total Diskon  : Rp" + totalDiskon);
        console.log("Total Bayar   : Rp" + totalBayar);

    } else {

        console.log("Total Belanja : Rp" + totalBelanja);
        console.log(
            "Anda tidak mendapat diskon karena tidak mencapai minimum pembelanjaan"
        );
        console.log("Total Bayar   : Rp" + totalBayar);
    }

    console.log("================================");

    rl.close();
}

console.log("================================");
console.log("       PROGRAM PENJUALAN");
console.log("================================");
console.log("Pembelian minimal 3 item");

pilihBarang();
