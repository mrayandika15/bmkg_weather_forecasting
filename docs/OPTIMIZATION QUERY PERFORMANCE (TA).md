# **Indexing**

## **Penjelasan Akademis**

Pada Persamaan (1), proses indexing (I) adalah upaya menambahkan struktur indeks pada tabel (T) yang memiliki kolom atau atribut tertentu (K). Proses ini menghasilkan sebuah indeks (IDXᵢ) yang bertujuan untuk meningkatkan efisiensi dan kinerja query, khususnya pada operasi join antar tabel yang melibatkan relasi Foreign Key secara intensif. Kolom yang diberikan indeks umumnya adalah kolom yang sering digunakan dalam operasi join atau pencarian data, sehingga akses data menjadi lebih cepat dan optimal. Penerapan teori ini dapat digunakan baik pada skema snowflake maupun starflake, karena keduanya memiliki kebutuhan optimasi performa query yang serupa dalam pengelolaan data relasional.

Indeks sangat penting dalam sistem basis data relasional karena dapat mempercepat proses pencarian data, mengurangi waktu eksekusi query, dan meningkatkan performa sistem secara keseluruhan. Dengan memberikan indeks pada kolom yang tepat, sistem dapat melakukan pencarian data secara lebih efisien tanpa harus melakukan pemindaian seluruh tabel.

### **Rumus Indexing**

Persamaan indexing dapat dituliskan sebagai:

    I(T, K) = IDXᵢ

Dimana:

- **I** = Proses indexing
- **T** = Tabel target
- **K** = Kolom yang diindeks
- **IDXᵢ** = Nama indeks yang dihasilkan

### **Tahapan Implementasi Indexing (Secara Teoritis)**

1. Identifikasi tabel dan kolom yang sering digunakan dalam operasi join atau pencarian data.
2. Tentukan kolom yang menjadi kandidat indeks, biasanya kolom Foreign Key atau kolom yang sering digunakan dalam klausa WHERE.
3. Lakukan proses indexing pada kolom tersebut untuk menghasilkan struktur indeks (IDXᵢ).
4. Evaluasi performa query setelah indexing untuk memastikan adanya peningkatan efisiensi.
5. Tahapan ini berlaku baik untuk model snowflake maupun starflake, dengan menyesuaikan struktur relasi dan kebutuhan query pada masing-masing model.

---

# **Table Partition**

## **Penjelasan Akademis**

Table Partition adalah teknik membagi satu tabel besar menjadi beberapa bagian (partisi) berdasarkan kriteria tertentu, seperti rentang nilai, hash, atau list. Setiap partisi dapat dikelola secara independen, sehingga query yang mengakses subset data tertentu menjadi lebih efisien. Kolom yang dipilih untuk partisi adalah kolom dengan sebaran data paling merata, di mana proses penentuan sebaran ini dilakukan berdasarkan teori Coefficient of Variation (CV).

### **Rumus Coefficient of Variation (CV)**

    CV = (σ / μ) × 100%

Dimana:

- **CV** = Coefficient of Variation (Koefisien Variasi)
- **σ** = Standar deviasi dari jumlah data per grup (misal, per hari atau per kategori)
- **μ** = Rata-rata jumlah data per grup
- **100%** = Faktor konversi ke persentase

### **Cara Berhitung CV**

1. Kelompokkan data berdasarkan kolom kandidat partisi (misal, waktu atau kategori).
2. Hitung jumlah data pada setiap grup.
3. Hitung rata-rata (μ) dari jumlah data per grup.
4. Hitung standar deviasi (σ) dari jumlah data per grup.
5. Hitung CV dengan rumus di atas.
6. Pilih kolom dengan nilai CV terendah sebagai kandidat utama partisi, karena distribusi datanya paling merata.

### **Tahapan Implementasi Table Partition (Secara Teoritis)**

1. Identifikasi kolom kandidat partisi berdasarkan pola query dan distribusi data.
2. Hitung nilai CV untuk setiap kolom kandidat menggunakan langkah di atas.
3. Pilih kolom dengan CV terendah sebagai basis partisi.
4. Bagi tabel menjadi beberapa partisi berdasarkan nilai/rentang pada kolom terpilih.
5. Lakukan evaluasi performa query dan maintenance pada setiap partisi.
6. Tahapan ini dapat diterapkan baik pada model snowflake maupun starflake, dengan menyesuaikan struktur tabel dan kebutuhan analisis pada masing-masing model.

Dengan menerapkan teori dan rumus ini, sistem basis data pada kedua model (snowflake dan starflake) dapat memastikan bahwa proses indexing dan table partition dilakukan secara optimal, sehingga performa query dan efisiensi pengelolaan data dapat tercapai secara maksimal.
