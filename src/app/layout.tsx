import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';

export const metadata: Metadata = {
  title: 'UPTD SD Negeri 32 Bawasalo | Segeri, Pangkep',
  description:
    'Website resmi UPTD SD Negeri 32 Bawasalo, Kelurahan Bawasalo, Kecamatan Segeri, Kabupaten Pangkajene dan Kepulauan (Pangkep), Sulawesi Selatan. Informasi profil sekolah, tenaga pendidik, kegiatan, fasilitas, dan pendaftaran siswa baru (PPDB online).',
  keywords: [
    'SD 32 Bawasalo',
    'SD Negeri 32 Bawasalo',
    'Sekolah Dasar Bawasalo',
    'SD Segeri Pangkep',
    'PPDB SD Bawasalo',
    'Pendidikan Pangkep Sulawesi Selatan',
  ],
  authors: [{ name: 'UPTD SD Negeri 32 Bawasalo' }],
  openGraph: {
    title: 'UPTD SD Negeri 32 Bawasalo | Segeri, Pangkep',
    description:
      'Portal resmi pendidikan cerdas, berkarakter, dan berakar pada nilai budaya luhur Sipakatau, Sipakalebbi, dan Sipakainge di Bawasalo, Segeri, Pangkep.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'SD Negeri 32 Bawasalo',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900 antialiased selection:bg-red-200 selection:text-red-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppFloating />
        <Footer />
      </body>
    </html>
  );
}
