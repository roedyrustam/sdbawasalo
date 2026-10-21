import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Building,
  Calendar,
  CheckCircle,
  MapPin,
  HeartHandshake,
  Compass,
  PhoneCall,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';
import { schoolInfo } from '@/data/school-info';
import { newsArticlesData } from '@/data/news';
import SectionHeader from '@/components/SectionHeader';

export default function HomePage() {
  const latestNews = newsArticlesData.slice(0, 3);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-900 via-red-800 to-slate-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-700/60 border border-red-500/30 text-amber-300 text-xs font-semibold backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Portal Resmi UPTD Pendidikan Kab. Pangkep</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Mendidik Generasi Cerdas & Berkarakter Luhur di{' '}
                <span className="text-amber-400 underline decoration-amber-500/50 decoration-wavy decoration-2">
                  SD 32 Bawasalo
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Lembaga pendidikan dasar negeri yang berkomitmen melahirkan tunas bangsa berprestasi, berwawasan lingkungan, dan berakar kuat pada nilai kearifan lokal di Kecamatan Segeri, Kabupaten Pangkajene dan Kepulauan.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/ppdb"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition hover:scale-105 active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  Daftar PPDB Online 2026/2027
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <Link
                  href="/profil"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-xs transition"
                >
                  <BookOpen className="w-4 h-4" />
                  Profil & Visi Misi
                </Link>
              </div>

              {/* Badges Info */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  NPSN: {schoolInfo.npsn}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
                  <Award className="w-4 h-4 text-amber-400" />
                  {schoolInfo.accreditationGrade}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
                  <Building className="w-4 h-4 text-sky-400" />
                  Kelurahan Bawasalo, Segeri
                </span>
              </div>
            </div>

            {/* Right Column: Visual School Highlights */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-800">
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800"
                    alt="Gedung Pembelajaran SD 32 Bawasalo"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-red-600 px-2 py-0.5 rounded text-white">
                      Suasana Belajar Nyaman
                    </span>
                    <p className="mt-1 text-sm font-semibold text-slate-100">
                      Lingkungan asri, sejuk, dan kondusif untuk tumbuh kembang putra-putri Anda.
                    </p>
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <div className="p-4 bg-slate-900 border-t border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-300 font-medium">Tahun Ajaran 2026/2027</span>
                  </div>
                  <Link
                    href="/guru-staf"
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    14 Guru Berdedikasi <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Stats Highlights */}
      <section className="-mt-12 lg:-mt-16 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 card-hover-effect text-center">
            <div className="w-12 h-12 bg-red-50 text-red-700 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">{schoolInfo.stats.totalStudents}</p>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Peserta Didik</p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 card-hover-effect text-center">
            <div className="w-12 h-12 bg-sky-50 text-sky-700 rounded-xl flex items-center justify-center mx-auto mb-3">
              <GraduationCap className="w-6 h-6" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">{schoolInfo.stats.totalTeachers}</p>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Guru & Staf</p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 card-hover-effect text-center">
            <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Building className="w-6 h-6" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">{schoolInfo.stats.totalClasses}</p>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Ruang Rombel</p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 card-hover-effect text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">{schoolInfo.accreditationGrade}</p>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Akreditasi BAN-S/M</p>
          </div>
        </div>
      </section>

      {/* 3. Sambutan Kepala Sekolah & Budaya Lokal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-lg border-4 border-red-100">
                <Image
                  src={schoolInfo.principal.photoUrl}
                  alt={schoolInfo.principal.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {schoolInfo.principal.name}
              </h3>
              <p className="text-xs text-red-700 font-semibold">
                Kepala UPTD SD Negeri 32 Bawasalo
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">NIP. {schoolInfo.principal.nip}</p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full uppercase tracking-wider">
                Sambutan Kepala Sekolah
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Menyemai Budi Pekerti, Menumbuhkan Potensi Anak Bangsa
              </h2>
              <blockquote className="text-slate-600 italic text-sm sm:text-base leading-relaxed border-l-4 border-red-600 pl-4 py-1">
                &ldquo;{schoolInfo.principal.greeting}&rdquo;
              </blockquote>

              {/* Falsafah Luhur 3 Nilai Karakter */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {schoolInfo.coreValues.map((v) => (
                  <div key={v.localTerm} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-red-700 uppercase">{v.localTerm}</p>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">{v.title}</p>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Keunggulan & Program Pendidikan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Keunggulan Sekolah"
          title="Fokus Pembelajaran & Pembinaan Karakter"
          subtitle="Kurikulum Merdeka yang dirancang untuk membekali siswa dengan kecakapan hidup, literasi, numerasi, dan nilai keteladanan."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 card-hover-effect space-y-4">
            <div className="w-12 h-12 bg-red-100 text-red-700 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Kurikulum Merdeka Belajar</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pembelajaran berdiferensiasi yang menyenangkan, memicu daya nalar kritis, dan berorientasi pada bakat unik setiap peserta didik.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Proyek Penguatan Profil Pelajar Pancasila (P5)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Pojok Baca Literasi Setiap Kelas</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 card-hover-effect space-y-4">
            <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-xl flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Karakter & Nilai Keagamaan</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pembiasaan sholat dhuha berjamaah, tahsin Al-Qur\'an (BTQ), senyum-sapa-salam, serta penerapan budaya Tabe\' khas Bugis-Makassar.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Bimbingan Ibadah & Doa Harian Siswa</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Kegiatan Jumat Berkah & Bersih Lingkungan</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 card-hover-effect space-y-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Bakat Minat & Ekstrakurikuler</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Wadah kepramukaan aktif, sanggar seni tari tradisional Paduppa, regu sepak takraw, dan kader dokter kecil UKS.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Pramuka Gudep SD 32 Berprestasi</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Pelatihan Seni Tari Budaya Pangkep</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Warta Berita & Pengumuman Terbaru */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Warta & Pengumuman
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                Kabar Terkini dari SD 32 Bawasalo
              </h2>
            </div>
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 text-xs font-bold text-red-700 hover:text-red-800 transition"
            >
              Lihat Semua Warta Berita <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 card-hover-effect flex flex-col"
              >
                <div className="relative h-48 w-full bg-slate-200">
                  <Image
                    src={news.imageUrl}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-red-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                    {news.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{news.date}</span>
                      <span>•</span>
                      <span>{news.readTime}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2">
                      <Link href={`/berita/${news.slug}`} className="hover:text-red-700 transition">
                        {news.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {news.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={`/berita/${news.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-800"
                    >
                      Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Peta Lokasi Segeri Pangkep */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-bold rounded-full uppercase tracking-wider">
                Lokasi & Petunjuk Arah
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Kunjungi Kampus SD Negeri 32 Bawasalo
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Terletak strategis di kawasan Kelurahan Bawasalo, Kecamatan Segeri, Kabupaten Pangkep. Mudah dijangkau kendaraan roda dua maupun roda empat dari jalan poros utama Segeri.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{schoolInfo.address.fullAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Hotline: {schoolInfo.contact.whatsappHotline}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition"
                >
                  Informasi Kontak Lengkap
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Google Maps Responsive Frame */}
            <div className="lg:col-span-7 h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
              <iframe
                title="Peta Lokasi SD Negeri 32 Bawasalo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31804.88789508544!2d119.57864!3d-4.63665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbe2c47491cfc2f%3A0x6b107b7168bfa170!2sBawasalo%2C%20Segeri%2C%20Pangkajene%20and%20Kepulauan%20Regency%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PPDB Bottom Banner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-800 to-red-950 rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 px-3 py-1 rounded-full">
              Penerimaan Siswa Baru
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Siap Mendaftarkan Putra-Putri Anda di SD 32 Bawasalo?
            </h3>
            <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
              Daftar online dalam 3 menit, gratis, dan dapatkan bimbingan guru profesional berdedikasi. Kuota kelas terbatas.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/ppdb"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-800 hover:bg-slate-100 font-extrabold text-sm rounded-xl shadow-lg transition hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              Buka Formulir PPDB Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
