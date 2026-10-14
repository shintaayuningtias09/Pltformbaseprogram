// Object Literal Produk
let produk = {
  nama: "Mouse Wireless",
  harga: 150000,
  stok: 3,
  diskon: 0.1,
  
  // Method untuk menampilkan info produk
  tampilkanProduk: function() {
    console.log(`📦 ${this.nama}`);
    console.log(`💰 Harga: Rp${this.harga}`);
    console.log(`📦 Stok tersedia: ${this.stok}`);
    console.log("-------------------------------");
  },

  // Method untuk menghitung harga setelah diskon
  hargaDiskon: function() {
    let hargaAkhir = this.harga - (this.harga * this.diskon);
    return hargaAkhir;
  },

  // Method untuk mengurangi stok saat produk dibeli
  beliProduk: function(jumlah) {
    if (this.stok <= 0) {
      console.log("⚠️ Maaf, stok produk sudah habis!");
    } else if (jumlah > this.stok) {
      console.log(`⚠️ Stok tidak mencukupi! Hanya tersisa ${this.stok} item.`);
    } else {
      this.stok -= jumlah;
      console.log(`✅ Pembelian berhasil! Anda membeli ${jumlah} ${this.nama}.`);
      console.log(`Sisa stok sekarang: ${this.stok}`);

      // Jika setelah pembelian stok habis
      if (this.stok <= 0) {
        console.log("❌ Stok produk kini habis, segera restock!");
      }
    }
    console.log("-------------------------------");
  }
};

// --- Simulasi Program ---
produk.tampilkanProduk();

// Menampilkan harga setelah diskon
console.log(`💲 Harga setelah diskon: Rp${produk.hargaDiskon()}`);
console.log("-------------------------------");

// Melakukan pembelian
produk.beliProduk(1);  // beli 1 produk
produk.beliProduk(2);  // beli 2 produk (akan habis)
produk.beliProduk(1);  // mencoba beli lagi saat stok habis
