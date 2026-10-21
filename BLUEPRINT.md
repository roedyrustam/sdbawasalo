# Architecture Blueprint: SD Negeri 32 Bawasalo

**Target System**: Web Portal Resmi & PPDB Online UPTD SD Negeri 32 Bawasalo  
**Lokasi**: Kelurahan Bawasalo, Kec. Segeri, Kab. Pangkep, Sulawesi Selatan  
**Version**: 1.0.0  
**Stack**: Next.js 15 (App Router, React 19) + TypeScript + Tailwind CSS v4 + Lucide Icons  

---

## 1. Directory Structure Blueprint
```text
c:\sdbawasalo\
├── public/
│   ├── images/
│   │   ├── logo-tutwuri.svg
│   │   ├── hero-school.jpg
│   │   ├── kepala-sekolah.jpg
│   │   ├── teachers/
│   │   └── facilities/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── profil/page.tsx
│   │   ├── guru-staf/page.tsx
│   │   ├── fasilitas/page.tsx
│   │   ├── ekstrakurikuler/page.tsx
│   │   ├── berita/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── ppdb/page.tsx
│   │   ├── kontak/page.tsx
│   │   └── api/
│   │       └── ppdb/route.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppFloating.tsx
│   │   ├── SectionHeader.tsx
│   │   └── PpdbForm.tsx
│   ├── data/
│   │   ├── school-info.ts
│   │   ├── teachers.ts
│   │   ├── facilities.ts
│   │   ├── extracurricular.ts
│   │   └── news.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
│       └── globals.css
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

## 2. Design Tokens & Styling
- Primary: `#B91C1C` (Red 700 - Merah Sekolah Dasar)
- Primary Dark: `#991B1B` (Red 800)
- Secondary: `#0284C7` (Sky 600 - Biru Bahari Pangkep)
- Secondary Dark: `#0369A1` (Sky 700)
- Accent: `#F59E0B` (Amber 500 - Kuning Emas Prestasi)
- Base background: `#F8FAFC` (Slate 50)
- Card border: 1px solid `#E2E8F0` (Slate 200)
- Font: Inter / Plus Jakarta Sans
