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

---

# **Subquery and Indexing**

## **Penjelasan Akademis**

Subquery and Indexing adalah teknik optimasi yang menggabungkan penggunaan subquery dengan strategi indexing yang tepat untuk meningkatkan performa query. Subquery adalah query yang bersarang di dalam query utama, yang dapat digunakan dalam klausa WHERE, FROM, atau SELECT. Kombinasi subquery dengan indexing yang optimal dapat secara signifikan mengurangi waktu eksekusi query, terutama pada operasi yang melibatkan multiple table joins dan filtering yang kompleks.

Teknik ini sangat relevan untuk skema data warehouse seperti snowflake dan starflake, di mana query sering kali melibatkan multiple dimension tables dan fact tables dengan relasi yang kompleks. Dengan menerapkan subquery yang efisien dan indexing yang tepat, sistem dapat melakukan filtering data pada level yang tepat sebelum melakukan join operations, sehingga mengurangi jumlah data yang perlu diproses.

### **Rumus Subquery and Indexing**

Persamaan subquery and indexing dapat dituliskan sebagai:

    SQ(T, K, C) = Q_opt

Dimana:

- **SQ** = Proses subquery and indexing
- **T** = Tabel target
- **K** = Kolom yang diindeks
- **C** = Kondisi subquery
- **Q_opt** = Query yang dioptimasi

### **Tahapan Implementasi Subquery and Indexing (Secara Teoritis)**

1. **Identifikasi Query yang Dapat Dioptimasi:**

   - Query yang melibatkan multiple table joins
   - Query dengan filtering conditions yang kompleks
   - Query yang menggunakan aggregate functions pada subquery

2. **Analisis Struktur Subquery:**

   - Evaluasi apakah subquery dapat dioptimasi dengan indexing
   - Identifikasi kolom yang sering digunakan dalam subquery conditions
   - Tentukan tipe subquery (correlated vs non-correlated)

3. **Implementasi Indexing pada Subquery:**

   - Buat index pada kolom yang digunakan dalam subquery WHERE clause
   - Optimasi index untuk aggregate functions (COUNT, SUM, AVG)
   - Pertimbangkan composite index untuk multiple conditions

4. **Optimasi Subquery Structure:**

   - Konversi correlated subquery menjadi non-correlated jika memungkinkan
   - Gunakan EXISTS atau IN berdasarkan karakteristik data
   - Pertimbangkan penggunaan JOIN sebagai alternatif subquery

5. **Evaluasi Performa:**

   - Bandingkan execution time sebelum dan sesudah optimasi
   - Analisis query execution plan
   - Monitor resource usage (CPU, memory, I/O)

6. **Tahapan ini berlaku baik untuk model snowflake maupun starflake, dengan menyesuaikan kompleksitas relasi dan kebutuhan query pada masing-masing model.**

Dengan menerapkan teori subquery and indexing ini, sistem basis data pada kedua model (snowflake dan starflake) dapat mencapai optimasi performa query yang maksimal, terutama pada operasi yang melibatkan multiple table joins dan filtering yang kompleks.

---

# **Parallel Query Execution**

## **Penjelasan Akademis**

Parallel Query Execution adalah teknik optimasi yang memanfaatkan multiple CPU cores untuk mengeksekusi query secara bersamaan, sehingga dapat mengurangi waktu eksekusi secara signifikan. Teknik ini membagi query menjadi beberapa bagian yang dapat dieksekusi secara paralel oleh worker processes yang berbeda, kemudian menggabungkan hasilnya untuk menghasilkan output final.

Parallel Query Execution sangat efektif untuk query yang melibatkan operasi scan, join, dan aggregate pada tabel dengan volume data besar. Pada data warehouse seperti snowflake dan starflake, teknik ini dapat memberikan peningkatan performa yang dramatis, terutama untuk query analitik yang kompleks dan resource-intensive.

### **Rumus Parallel Query Execution**

Persamaan parallel query execution dapat dituliskan sebagai:

    PQ(Q, W, R) = Q_parallel

Dimana:

- **PQ** = Proses parallel query execution
- **Q** = Query yang akan dieksekusi
- **W** = Jumlah worker processes
- **R** = Resource allocation (CPU, memory, I/O)
- **Q_parallel** = Query yang dieksekusi secara paralel

### **Rumus Perhitungan Speedup**

Speedup yang diperoleh dari parallel execution dapat dihitung dengan:

    S = T_sequential / T_parallel

Dimana:

- **S** = Speedup factor
- **T_sequential** = Waktu eksekusi sequential
- **T_parallel** = Waktu eksekusi parallel

### **Rumus Efisiensi Parallel**

Efisiensi parallel execution dapat dihitung dengan:

    E = S / W

Dimana:

- **E** = Efisiensi parallel execution
- **S** = Speedup factor
- **W** = Jumlah worker processes

### **Tahapan Implementasi Parallel Query Execution (Secara Teoritis)**

1. **Identifikasi Query yang Dapat Diparallelkan:**

   - Query dengan operasi scan yang besar
   - Query dengan multiple table joins
   - Query dengan aggregate functions (SUM, COUNT, AVG)
   - Query yang tidak bergantung pada urutan eksekusi

2. **Analisis Resource Availability:**

   - Evaluasi jumlah CPU cores yang tersedia
   - Analisis memory capacity untuk worker processes
   - Identifikasi I/O bandwidth yang dapat dimanfaatkan
   - Tentukan optimal number of workers

3. **Implementasi Parallel Settings:**

   - Set parameter parallel workers per gather
   - Konfigurasi work memory per worker
   - Tentukan parallel tuple cost dan setup cost
   - Optimasi shared buffers dan effective cache size

4. **Query Optimization untuk Parallel:**

   - Struktur query yang mendukung parallel execution
   - Index yang mendukung parallel scan
   - Partition-aware parallel processing
   - Minimasi data movement antar workers

5. **Monitoring dan Tuning:**

   - Monitor parallel worker utilization
   - Analisis parallel execution plan
   - Tune parameter berdasarkan workload
   - Evaluasi scalability dengan berbagai jumlah workers

6. **Tahapan ini berlaku baik untuk model snowflake maupun starflake, dengan menyesuaikan kompleksitas query dan resource availability pada masing-masing model.**

Dengan menerapkan teori parallel query execution ini, sistem basis data pada kedua model (snowflake dan starflake) dapat mencapai peningkatan performa yang signifikan, terutama untuk query analitik yang kompleks dan resource-intensive pada data warehouse dengan volume data besar.
