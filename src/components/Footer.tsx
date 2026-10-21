import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  ExternalLink,
} from 'lucide-react';
import { schoolInfo } from '@/data/school-info';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Pangkep Values & Support Banner */}
      <div className="bg-red-950/60 border-b border-red-900/40 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-red-800/80 rounded-xl text-amber-300">
              <GraduationCap className="w-5 h-5" />
            </span>
            <div>
              <p className="text-white font-bold text-sm tracking-wide">
                Falsafah Luhur Pendidikan SD 32 Bawasalo
              </p>
              <p className="text-xs text-red-200/80">
                Sipakatau (Memanusiakan) • Sipakalebbi (Menghargai) • Sipakainge (Saling Mengingatkan)
              </p>
            </div>
          </div>
          <Link
            href="/ppdb"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition"
          >
            Penerimaan Siswa Baru (PPDB 2026/2027)
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-black">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base tracking-tight leading-tight">
                  UPTD SD NEGERI 32 BAWASALO
                </h3>
                <p className="text-xs text-slate-400">NPSN: {schoolInfo.npsn} • {schoolInfo.accreditationGrade}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mendidik generasi muda Bawasalo dan Segeri dengan keteladanan budi pekerti, kecakapan literasi-numerasi, serta semangat berprestasi berlandaskan budaya kearifan lokal.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
                ● Sekolah Sehat & Ramah Anak
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-4">
              Jelajahi Portal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition">
                  Beranda Utama
                </Link>
              </li>
              <li>
                <Link href="/profil" className="text-slate-400 hover:text-white transition">
                  Profil & Visi Misi Sekolah
                </Link>
              </li>
              <li>
                <Link href="/guru-staf" className="text-slate-400 hover:text-white transition">
                  Daftar Guru & Tenaga Kependidikan
                </Link>
              </li>
              <li>
                <Link href="/fasilitas" className="text-slate-400 hover:text-white transition">
                  Sarana & Prasarana Pembelajaran
                </Link>
              </li>
              <li>
                <Link href="/ekstrakurikuler" className="text-slate-400 hover:text-white transition">
                  Ekstrakurikuler & Bakat Siswa
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-slate-400 hover:text-white transition">
                  Warta Kegiatan & Pengumuman
                </Link>
              </li>
              <li>
                <Link href="/ppdb" className="text-slate-400 hover:text-white transition">
                  Layanan PPDB Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-4">
              Kontak & Lokasi
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{schoolInfo.address.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{schoolInfo.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="break-all">{schoolInfo.contact.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{schoolInfo.contact.operationalHours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Affiliation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-4">
              Afiliasi Resmi
            </h4>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs">
              <p className="font-semibold text-slate-200">
                Pemerintah Kabupaten Pangkajene dan Kepulauan
              </p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Dinas Pendidikan dan Kebudayaan Kabupaten Pangkep • Wilayah Binaan Korwil Pendidikan Kecamatan Segeri
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                <span>Kurikulum Merdeka</span>
                <span>Kemendikbudristek</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} UPTD SD Negeri 32 Bawasalo. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="flex items-center gap-1.5">
            Didedikasikan dengan <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> untuk pendidikan anak bangsa di Pangkep.
          </p>
        </div>
      </div>
    </footer>
  );
}
