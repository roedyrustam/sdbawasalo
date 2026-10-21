# Dokumentasi Arsitektur & Panduan Sistem: SD Negeri 32 Bawasalo

**Nama Institusi**: UPTD SD Negeri 32 Bawasalo  
**Alamat**: Kelurahan Bawasalo, Kecamatan Segeri, Kabupaten Pangkajene dan Kepulauan (Pangkep), Sulawesi Selatan  
**Tech Stack**: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Lucide Icons  

---

## 1. Ikhtisar Arsitektur

Website dirancang dengan arsitektur **Server-Side Rendered (SSR) & Static Generation** berbasis **Next.js 15 App Router** untuk menjamin kecepatan pemuatan super kilat, keramahan terhadap mesin pencari (SEO), dan efisiensi konsumsi kuota data internet bagi wali murid di daerah Bawasalo, Segeri, Pangkep.

### Diagram Struktur Proyek
```text
c:\sdbawasalo\
├── public/                     # Aset statis (logo, favicon, gambar fasilitas/sekolah)
├── src/
│   ├── app/                    # Next.js 15 App Router Routes
│   │   ├── layout.tsx          # Root Layout (Navbar, Footer, Floating WhatsApp, Metadata)
│   │   ├── page.tsx            # Beranda Utama (Hero, Sambutan, Statistik, Highlights)
│   │   ├── profil/page.tsx     # Profil Sekolah, Sejarah, Visi Misi & Budaya Sekolah
│   │   ├── guru-staf/page.tsx  # Direktori Guru & Tenaga Kependidikan
│   │   ├── fasilitas/page.tsx  # Dokumentasi Sarana & Prasarana
│   │   ├── ekstrakurikuler/    # Kegiatan Ekstrakurikuler & Pembinaan Bakat
│   │   ├── berita/
│   │   │   ├── page.tsx        # Indeks Berita & Agenda Sekolah
│   │   │   └── [slug]/page.tsx # Detail Warta Berita & Artikel Kegiatan
│   │   ├── ppdb/page.tsx       # Alur Pendaftaran & Formulir PPDB Online Interaktif
│   │   ├── kontak/page.tsx     # Kontak Resmi & Peta Lokasi Segeri Pangkep
│   │   └── api/
│   │       └── ppdb/route.ts   # API Endpoint untuk submit & ekspor data PPDB
│   ├── components/             # Reusable UI Components
│   │   ├── Navbar.tsx          # Navigasi utama responsif (mobile drawer + desktop menu)
│   │   ├── Footer.tsx          # Informasi kontak, tautan cepat, dan hak cipta
│   │   ├── WhatsAppFloating.tsx# Tombol chat WhatsApp mengambang instan
│   │   ├── PpdbForm.tsx        # Formulir pendaftaran calon siswa dengan validasi
│   │   └── Card.tsx            # Komponen kartu konsisten dengan border 1px tajam
│   ├── data/                   # Structured TypeScript Data Repositories
│   │   ├── school-info.ts      # Profil identitas, visi misi, kontak, statistik
│   │   ├── teachers.ts         # Daftar tenaga pendidik & kependidikan
│   │   ├── facilities.ts       # Sarana prasarana sekolah
│   │   ├── extracurricular.ts  # Daftar ekskul (Pramuka, Tari Bugis, dll)
│   │   └── news.ts             # Data berita dan agenda kegiatan
│   ├── types/                  # Kontrak TypeScript global
│   │   └── index.ts
│   └── styles/
│       └── globals.css         # Tailwind CSS v4 directives & custom theme variables
├── PRD.md                      # Product Requirements Document
├── ERD.md                      # Entity Relationship Diagram & Contracts
├── DOCUMENTATION.md            # Dokumentasi Sistem (File Ini)
├── package.json
└── tsconfig.json
```

---

## 2. Fitur Unggulan Sistem

### 2.1. Beranda Lengkap & Ramah Anak
- **Hero Banner**: Menyambut pengunjung dengan identitas resmi UPTD SD Negeri 32 Bawasalo, didukung sambutan hangat Kepala Sekolah.
- **Statistik Terverifikasi**: Menampilkan jumlah siswa, jumlah guru, kelas, dan status akreditasi sekolah.
- **Nilai Karakter Kearifan Lokal**: Memadukan nilai Profil Pelajar Pancasila dengan kearifan lokal Sulawesi Selatan (*Sipakatau, Sipakalebbi, Sipakainge*).

### 2.2. Sistem PPDB Online Mandiri
- Memberikan informasi lengkap mengenai syarat usia, berkas yang dibutuhkan (Akta Lahir, KK), jadwal tahapan gelombang, serta kuota kelas 1.
- Formulir online yang mudah diisi lewat smartphone:
  - Validasi NIK dan Nomor WhatsApp orang tua.
  - Penomoran otomatis bukti pendaftaran (`PPDB-2026-XXXX`).
  - Fitur simpan data ke penyimpanan lokal peramban & API endpoint internal.
  - Tombol **Ekspor Data Pendaftar (CSV/Excel)** untuk memudahkan operator/panitia sekolah merekap calon siswa baru tanpa aplikasi tambahan yang rumit.
  - Tombol konfirmasi 1-klik ke WhatsApp panitia PPDB.

### 2.3. Warta & Dokumentasi Kegiatan
- Menampilkan foto-foto dan liputan kegiatan sekolah seperti Upacara Bendera, Pembelajaran Aktif Kurikulum Merdeka, Latihan Pramuka Siaga/Penggalang, dan kegiatan Porseni antar-sekolah di Kecamatan Segeri.

### 2.4. Integrasi WhatsApp Hotline & Peta Lokasi
- Floating action button yang selalu terlihat di pojok kanan bawah layar untuk membantu orang tua murid yang ingin berkonsultasi cepat tanpa harus menginstal aplikasi khusus.
- Embed Google Maps responsif yang mengarah tepat ke wilayah Kelurahan Bawasalo, Segeri, Pangkep.

---

## 3. Panduan Menjalankan & Membangun Proyek

### 3.1. Persyaratan Sistem
- Node.js versi 18.x atau 20.x+
- npm atau pnpm / bun

### 3.2. Instalasi & Pengujian Lokal
```bash
# Masuk ke direktori
cd c:\sdbawasalo

# Menjalankan server pengembangan (development mode)
npm run dev
# Buka http://localhost:3000 pada browser
```

### 3.3. Build Produksi
```bash
# Menghasilkan bundle produksi optimal
npm run build

# Menjalankan server produksi
npm run start
```

---

## 4. Keamanan, Aksesibilitas, & SEO
- **SEO & Metatags**: Dilengkapi dengan metadata open-graph, judul halaman deskriptif (`title`), dan kata kunci relevan ("SD 32 Bawasalo", "Sekolah Dasar Segeri", "SD Pangkep", "PPDB SD Bawasalo").
- **Aksesibilitas (WCAG 2.2 AA)**: Kontras warna teruji, tag alt semantik pada seluruh gambar, navigasi keyboard penuh, dan tombol interaktif yang jelas.
- **Privasi Data**: Formulir PPDB tidak mengekspos data pribadi calon siswa ke publik; hanya nomor registrasi dan status verifikasi yang dapat dilacak.
