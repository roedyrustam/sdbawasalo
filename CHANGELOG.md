# Changelog: SD Negeri 32 Bawasalo

Semua perubahan dan catatan rilis terdokumentasi di sini.

## [1.0.0] - 2026-10-21
### Added
- **Sistem Inti & Fondasi**: Setup Next.js 15 (App Router), React 19, TypeScript 5, dan Tailwind CSS v4.
- **Dokumentasi Arsitektur**: `PRD.md`, `ERD.md`, `DOCUMENTATION.md`, `BLUEPRINT.md`, dan `PROGRESS.md`.
- **Halaman Lengkap (Multi-Page)**:
  - Beranda (`/`) dengan Hero Section, Sambutan Kepala Sekolah, Statistik Kunci, Warta Terbaru, dan Peta Google Maps.
  - Profil (`/profil`) dengan Sejarah, Visi Misi, Identitas Satuan Pendidikan, dan Falsafah Budaya Bugis-Makassar (Sipakatau, Sipakalebbi, Sipakainge).
  - Direktori Guru & Staf (`/guru-staf`) dengan pencarian instan dan filter kategori jabatan.
  - Fasilitas Sekolah (`/fasilitas`) dengan klasifikasi akademik, olahraga, kesehatan, dan ibadah.
  - Ekstrakurikuler (`/ekstrakurikuler`) mencakup Pramuka, Tari Tradisional, Sepak Takraw, BTQ, dan Dokter Kecil.
  - Warta Berita & Pengumuman (`/berita` & `/berita/[slug]`) dengan fitur bagikan ke WhatsApp.
  - Layanan PPDB Online (`/ppdb`) dengan kalkulator usia otomatis, cek status berkas pendaftar, dan unduh data CSV/Excel bagi operator sekolah.
  - Kontak & Peta (`/kontak`) dengan form pesan dan petunjuk arah ke Bawasalo Segeri.
- **Komponen Global**:
  - `Navbar` responsif dengan drawer mobile dan link cepat PPDB.
  - `Footer` lengkap dengan atribusi resmi Pemkab Pangkep dan nilai falsafah sekolah.
  - `WhatsAppFloating` dengan efek animasi pulse dan one-click chat ke panitia sekolah.
- **SEO & Discovery**: Konfigurasi otomatis `robots.ts` dan `sitemap.ts` untuk Google indexing.
