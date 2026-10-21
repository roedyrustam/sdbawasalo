# Product Requirements Document (PRD)

**Project**: Website Resmi UPTD SD Negeri 32 Bawasalo  
**Lokasi**: Kelurahan Bawasalo, Kecamatan Segeri, Kabupaten Pangkajene dan Kepulauan (Pangkep), Sulawesi Selatan  
**Version**: 1.0.0  
**Status**: Approved (Brainstorming Complete)  
**Created**: 2026-10-21  
**Last Updated**: 2026-10-21  

---

## 1. Executive Summary
Website UPTD SD Negeri 32 Bawasalo adalah portal web profil publik dan layanan digital sekolah modern yang dirancang untuk meningkatkan transparansi, memudahkan akses informasi kegiatan akademis, menampilkan profil pendidik dan fasilitas sekolah, serta menyediakan formulir Penerimaan Peserta Didik Baru (PPDB) online yang ramah orang tua murid di Kecamatan Segeri dan sekitarnya.

## 2. Problem Statement
- **Problem**: Kurangnya kehadiran digital resmi untuk SD Negeri 32 Bawasalo menyebabkan wali murid dan masyarakat umum kesulitan memperoleh informasi profil sekolah, jadwal penerimaan siswa baru, prestasi, dan agenda sekolah secara cepat dan terpercaya.
- **Target Users**:
  1. Orang tua/Wali calon siswa di wilayah Kelurahan Bawasalo, Segeri, Pangkep.
  2. Siswa dan Guru/Staf SD Negeri 32 Bawasalo.
  3. Dinas Pendidikan Kabupaten Pangkep & Pengawas Sekolah.
  4. Masyarakat umum dan alumni.
- **Current Pain Points**:
  - Pendaftaran siswa baru sebelumnya mengandalkan dokumen fisik kertas dan tatap muka langsung.
  - Dokumentasi prestasi dan kegiatan ekstrakurikuler tidak terarsipkan secara rapi di ranah publik.
  - Komunikasi antara panitia sekolah dan calon wali murid sering terhambat jarak dan waktu.

## 3. Goals & Success Metrics
| Goal | Metric | Target |
|---|---|---|
| Performa & Kecepatan Akses | Google Lighthouse Score (Mobile/Desktop) | ≥ 95 untuk Performance, SEO, & Accessibility |
| Efisiensi Pendaftaran PPDB | Waktu pengisian form PPDB online | < 4 menit dengan konfirmasi instan |
| Responsivitas Mobile | 100% viewport compliance (smartphone & tablet) | Zero layout shift (CLS < 0.05) |
| Kemudahan Komunikasi | Akses kontak hotline WhatsApp sekolah | 1-klik langsung terhubung ke panitia |

## 4. User Personas
### Persona 1: Ibu Hasnah (Orang Tua Calon Siswa)
- **Role**: Ibu rumah tangga warga Bawasalo, Segeri (32 tahun).
- **Goals**: Mencari informasi syarat pendaftaran kelas 1 SD, jadwal masuk tahun ajaran baru, dan fasilitas sekolah lewat smartphone.
- **Frustrations**: Sering kali harus datang berkali-kali ke sekolah hanya untuk bertanya syarat dan brosur.
- **Key Behaviors**: Mengakses web via HP Android, menyukai tombol chat WhatsApp langsung dan form yang simpel tanpa ribet.

### Persona 2: Pak Syamsuddin, S.Pd. (Guru / Operator Sekolah)
- **Role**: Operator Dapodik & Guru SD 32 Bawasalo (38 tahun).
- **Goals**: Mempublikasikan berita kegiatan upacara, pramuka, pentas seni, dan mengekspor rekap pendaftar PPDB ke format spreadsheet Excel/CSV.
- **Frustrations**: File pendaftaran murid baru berserakan dan rawan hilang jika hanya dicatat manual di buku tamu.
- **Key Behaviors**: Mengakses dari laptop dan HP, membutuhkan data terstruktur dan rekap otomatis.

---

## 5. Feature Requirements

### MVP Features (Must Have — v1.0)
- [x] **Beranda Komprehensif (`/`)**:
  - Hero section dengan sambutan Kepala Sekolah, foto sekolah, dan tombol CTA utama (Jelajahi Profil & Daftar PPDB).
  - Visi & Misi Ringkas.
  - Statistik Sekolah (Jumlah Siswa, Guru Berdedikasi, Ruang Kelas, Akreditasi).
  - Sorotan Program & Prestasi Siswa.
  - Cuplikan Berita & Pengumuman Terbaru.
  - Peta Lokasi Google Maps responsif ke Kelurahan Bawasalo, Segeri, Pangkep.
- [x] **Profil Lengkap Sekolah (`/profil`)**:
  - Sejarah singkat sekolah di Segeri Pangkep.
  - Visi, Misi, dan Tujuan Sekolah.
  - Nilai Karakter Budaya Sekolah (Sipakatau, Sipakalebbi, Sipakainge khas Sulawesi Selatan).
  - Struktur Organisasi dan Tata Kelola.
- [x] **Direktori Guru & Tenaga Kependidikan (`/guru-staf`)**:
  - Kartu profil guru dengan foto, nama lengkap, gelar, jabatan, dan mata pelajaran.
  - Kontak konsultasi edukasi.
- [x] **Fasilitas & Sarana Prasarana (`/fasilitas`)**:
  - Dokumentasi visual ruang kelas ramah anak, perpustakaan, UKS, musholla, lapangan olahraga, dan sanitasi sehat.
- [x] **Ekstrakurikuler & Pembinaan Bakat (`/ekstrakurikuler`)**:
  - Informasi Pramuka, Seni Tari Tradisional Bugis-Makassar, Olahraga (Sepak Takraw, Bulutangkis), dan Kerohanian/Baca Tulis Al-Qur'an (BTQ).
- [x] **Warta Berita & Pengumuman (`/berita`)**:
  - Feed artikel kegiatan sekolah, agenda kalender akademik, dan pengumuman resmi berkala.
- [x] **Layanan PPDB Online (`/ppdb`)**:
  - Panduan syarat pendaftaran (usia minimal, fotokopi KK, akte kelahiran).
  - Alur tahapan seleksi & jadwal gelombang.
  - Formulir pendaftaran interaktif dengan validasi input (Nama Calon Siswa, NIK, Tempat/Tgl Lahir, Jenis Kelamin, Nama Ayah/Ibu, No HP/WA, Alamat Lengkap).
  - Tombol simpan data & ekspor rekap data pendaftar ke file CSV/Excel untuk operator sekolah.
- [x] **Halaman Kontak & Lokasi (`/kontak`)**:
  - Alamat lengkap UPTD SD Negeri 32 Bawasalo, Kelurahan Bawasalo, Kec. Segeri, Kab. Pangkep.
  - Nomor telepon, email sekolah, formulir pesan, dan integrasi WhatsApp Hotline.
- [x] **Floating WhatsApp Action**:
  - Tombol WhatsApp melayang di sudut layar untuk chat instan dengan panitia/administrasi sekolah.

---

## 6. Technical Architecture

### Stack Decision
| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 15 (App Router, React 19) | Server Components cepat, rendering SSR ramah SEO, performa native unggul |
| **Language** | TypeScript 5 (Strict Mode) | Type-safe data schema, mencegah bug runtime, kontrak data terstruktur |
| **Styling** | Tailwind CSS v4 | Utility-first modern CSS, performa build kilat, desain responsif mobile-first |
| **Icons** | Lucide React | Ikon modern, ringan, tree-shakeable, representatif untuk sektor edukasi |
| **Data Management** | Hybrid Config + Local Storage / Server Action | Nol biaya database cloud, penyimpanan instan, aman dan bisa diekspor ke CSV |
| **Deploy Target** | Vercel / Cloudflare Pages / Static Export | Hosting handal dengan latensi rendah di seluruh Indonesia |

### Visual Identity & Theme Tokens
- **Primary Color**: Crimson Edukasi (`#B91C1C` / `#991B1B`) melambangkan seragam merah putih SD.
- **Secondary Color**: Bahari Pangkep Navy/Sky (`#0284C7` / `#0C4A6E`) melambangkan nuansa kepulauan maritim Pangkep.
- **Accent Color**: Kuning Emas Ceria (`#F59E0B` / `#D97706`) melambangkan keceriaan dan prestasi tunas bangsa.
- **Background**: Slate-50 / White bersih dengan card border halus 1px slate-200.
- **Typography**: Inter / Plus Jakarta Sans dengan keterbacaan tinggi.

---

## 7. Data Models (TypeScript Contracts)
Data sekolah diorganisir dalam entitas terdefinisi:
1. `SchoolProfile`: Data identitas, NPSN, akreditasi, alamat, kepala sekolah, kontak.
2. `Teacher`: Data pengajar, NIP, jabatan, foto, pendidikan terakhir.
3. `Facility`: Nama sarana prasarana, deskripsi, kapasitas, foto.
4. `Extracurricular`: Nama ekskul, pembina, jadwal latihan, capaian.
5. `NewsArticle`: ID, judul, slug, tanggal, kategori, ringkasan, isi, cover image.
6. `PpdbRegistration`: Nomor pendaftaran unik, timestamp, data calon siswa, data orang tua, status verifikasi.

---

## 8. User Flows
### Primary Flow 1: Pendaftaran Siswa Baru (PPDB Online)
1. Orang tua membuka menu **/ppdb**.
2. Membaca persyaratan dan jadwal gelombang.
3. Mengisi formulir online (data anak & kontak orang tua).
4. Klik tombol "Kirim Pendaftaran".
5. Sistem memvalidasi, mencatat nomor registrasi unik (misal `PPDB-2026-001`), dan menampilkan tanda bukti pendaftaran.
6. Orang tua dapat mengunduh bukti atau klik konfirmasi via WhatsApp panitia.

### Primary Flow 2: Menjelajahi Profil & Informasi Kegiatan Sekolah
1. Pengunjung masuk ke Beranda (`/`).
2. Melihat sambutan kepala sekolah dan nilai keunggulan.
3. Menjelajah menu profil guru, fasilitas, dan membaca warta berita terbaru.
4. Membuka kontak atau peta untuk mendapatkan petunjuk arah rute ke Bawasalo Segeri.
