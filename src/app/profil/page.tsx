import React from 'react';
import Image from 'next/image';
import {
  History,
  Target,
  Compass,
  CheckCircle,
  Building,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { schoolInfo } from '@/data/school-info';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Profil & Visi Misi | SD Negeri 32 Bawasalo',
  description: 'Sejarah, Visi, Misi, dan Falsafah Budaya Karakter UPTD SD Negeri 32 Bawasalo, Segeri, Pangkep.',
};

export default function ProfilPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-50 text-red-700 border border-red-200">
          Tentang Kami
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Profil UPTD SD Negeri 32 Bawasalo
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Mengenal lebih dekat sejarah pengabdian, visi masa depan, serta nilai-nilai luhur yang membimbing setiap langkah pendidikan kami di Kelurahan Bawasalo, Segeri, Pangkep.
        </p>
      </div>

      {/* 1. Identitas Resmi Sekolah */}
      <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-6 h-6 text-red-700" />
              Identitas Satuan Pendidikan
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 divide-y divide-slate-100">
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Nama Resmi:</span>
                <span className="font-bold text-slate-900 text-right">{schoolInfo.officialName}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">NPSN:</span>
                <span className="font-mono font-bold text-red-700">{schoolInfo.npsn}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Status Sekolah:</span>
                <span className="font-semibold">{schoolInfo.status}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Status Akreditasi:</span>
                <span className="font-bold text-emerald-700">{schoolInfo.accreditationGrade}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Tahun Berdiri:</span>
                <span className="font-semibold">{schoolInfo.foundedYear}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Alamat:</span>
                <span className="font-semibold text-right max-w-xs">{schoolInfo.address.fullAddress}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Naungan:</span>
                <span className="font-semibold text-right">Dinas Pendidikan Kab. Pangkep</span>
              </div>
            </div>
          </div>

          <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=700"
              alt="Gedung SD 32 Bawasalo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-xs font-semibold">
                Kampus SD Negeri 32 Bawasalo - Menghadirkan suasana asri dan kondusif bagi pendidikan generasi penerus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sejarah Singkat */}
      <section className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-md space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <History className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Perjalanan & Kilas Balik</span>
            <h2 className="text-2xl font-bold text-slate-900">Sejarah SD Negeri 32 Bawasalo</h2>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
          <p>
            UPTD SD Negeri 32 Bawasalo didirikan pada tahun 1982 di Kelurahan Bawasalo, sebuah wilayah yang sarat dengan semangat gotong royong dan kebersamaan di Kecamatan Segeri, Kabupaten Pangkajene dan Kepulauan. Pendirian sekolah ini berawal dari inisiatif para tokoh masyarakat dan pemerintah daerah untuk memperluas akses wajib belajar bagi anak-anak usia sekolah dasar di kawasan pesisir dan persawahan Bawasalo.
          </p>
          <p>
            Selama lebih dari empat dekade pengabdian, SD 32 Bawasalo telah meluluskan ribuan alumni yang kini berkiprah di berbagai bidang pembangunan daerah maupun nasional. Sekolah terus bertransformasi mengikuti perkembangan kurikulum nasional, dari era CBSA, KBK, KTSP, Kurikulum 2013, hingga kini mengadopsi <strong>Kurikulum Merdeka</strong> yang berfokus pada penguatan Profil Pelajar Pancasila.
          </p>
        </div>
      </section>

      {/* 3. Visi, Misi & Tujuan */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Visi */}
        <div className="bg-gradient-to-br from-red-800 to-red-950 text-white rounded-3xl p-8 shadow-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider">
              <Target className="w-4 h-4" />
              Visi Sekolah
            </div>
            <h3 className="text-2xl sm:text-3xl font-black leading-snug">
              &ldquo;{schoolInfo.vision}&rdquo;
            </h3>
            <p className="text-xs text-red-200 leading-relaxed">
              Visi ini menjadi kompas seluruh warga sekolah dalam menanamkan kecerdasan intelektual, kematangan emosional, dan keluhuran budi pekerti.
            </p>
          </div>
          <div className="pt-4 border-t border-red-700/60 flex items-center gap-2 text-xs text-amber-300 font-semibold">
            <Sparkles className="w-4 h-4" />
            Terakreditasi B • Kurikulum Merdeka
          </div>
        </div>

        {/* Misi */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            Misi Sekolah
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Langkah Nyata Mewujudkan Visi
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
            {schoolInfo.missions.map((m, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Nilai Falsafah Luhur Budaya Lokal */}
      <section className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 space-y-6">
        <SectionHeader
          badge="Kearifan Lokal Pangkep"
          title="Falsafah Budaya Karakter Sekolah"
          subtitle="Mengintegrasikan nilai luhur warisan leluhur Bugis-Makassar dalam pembiasaan harian siswa."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {schoolInfo.coreValues.map((val) => (
            <div key={val.localTerm} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-xs font-black text-red-700 tracking-wider uppercase">
                {val.localTerm}
              </span>
              <h4 className="text-base font-bold text-slate-900">{val.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
