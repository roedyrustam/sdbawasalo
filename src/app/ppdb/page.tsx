import React from 'react';
import {
  FileCheck,
  Calendar,
  CheckCircle,
  HelpCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import PpdbForm from '@/components/PpdbForm';
import { schoolInfo } from '@/data/school-info';

export const metadata = {
  title: 'PPDB Online 2026/2027 | SD Negeri 32 Bawasalo',
  description: 'Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 UPTD SD Negeri 32 Bawasalo, Segeri, Pangkep.',
};

export default function PpdbPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-50 text-red-700 border border-red-200">
          Penerimaan Siswa Baru
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          PPDB Online Tahun Ajaran 2026/2027
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Pendaftaran calon peserta didik baru kelas 1 UPTD SD Negeri 32 Bawasalo, Kelurahan Bawasalo, Kecamatan Segeri, Kabupaten Pangkajene dan Kepulauan.
        </p>
      </div>

      {/* Syarat & Alur Pendaftaran Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Persyaratan Berkas */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">Syarat Dokumen & Usia</h3>
            <p className="text-xs text-slate-500 mt-1">Dokumen yang perlu disiapkan orang tua:</p>
          </div>
          <ul className="text-xs text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Usia minimal 6 tahun per 1 Juli 2026 (Diprioritaskan usia 7 tahun).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Fotokopi Akta Kelahiran anak (2 lembar).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Fotokopi Kartu Keluarga (KK) orang tua / wali.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Fotokopi KTP kedua orang tua kandung.</span>
            </li>
          </ul>
        </div>

        {/* Card 2: Jadwal Gelombang */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">Jadwal Penting PPDB</h3>
            <p className="text-xs text-slate-500 mt-1">Tahapan pendaftaran resmi:</p>
          </div>
          <ul className="text-xs text-slate-600 space-y-2.5">
            <li className="border-l-2 border-red-600 pl-3 py-0.5">
              <strong className="block text-slate-900">Pendaftaran Online & Offline:</strong>
              <span>1 Mei – 30 Juni 2026</span>
            </li>
            <li className="border-l-2 border-sky-600 pl-3 py-0.5">
              <strong className="block text-slate-900">Verifikasi Dokumen Fisik:</strong>
              <span>1 – 5 Juli 2026 di Ruang Tata Usaha</span>
            </li>
            <li className="border-l-2 border-emerald-600 pl-3 py-0.5">
              <strong className="block text-slate-900">Pengumuman & Daftar Ulang:</strong>
              <span>7 – 9 Juli 2026</span>
            </li>
            <li className="border-l-2 border-amber-600 pl-3 py-0.5">
              <strong className="block text-slate-900">Hari Pertama Masuk (MPLS):</strong>
              <span>13 Juli 2026</span>
            </li>
          </ul>
        </div>

        {/* Card 3: Keunggulan & Bantuan */}
        <div className="bg-gradient-to-br from-red-800 to-red-950 text-white p-6 rounded-3xl shadow-md space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 text-amber-300 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-white">Biaya Pendidikan 100% Gratis</h3>
            <p className="text-xs text-red-100 leading-relaxed">
              Seluruh proses pendaftaran dan biaya pendidikan di UPTD SD Negeri 32 Bawasalo tidak dipungut biaya apapun (Bebas Uang Gedung & Bebas SPP).
            </p>
          </div>

          <div className="pt-3 border-t border-red-700/60 text-xs text-amber-200 flex items-center gap-2">
            <Clock className="w-4 h-4 shrink-0" />
            <span>Pelayanan Panitia: 07.30 - 13.00 WITA</span>
          </div>
        </div>
      </div>

      {/* Main Interactive PPDB Form & Status Checker Component */}
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Formulir Pendaftaran & Status Berkas
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Isi formulir di bawah ini dengan data yang benar dan sesuai Kartu Keluarga.
          </p>
        </div>

        <PpdbForm />
      </section>

      {/* Help Hotline Banner */}
      <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-red-700 shrink-0" />
          <div>
            <p className="font-bold text-slate-900">Mengalami kendala saat mengisi formulir online?</p>
            <p className="text-slate-500">Panitia PPDB siap membantu langsung melalui chat WhatsApp resmi sekolah.</p>
          </div>
        </div>
        <a
          href={`https://wa.me/${schoolInfo.contact.whatsappNumberOnly}?text=${encodeURIComponent(
            'Halo Panitia PPDB SD 32 Bawasalo, saya ingin berkonsultasi mengenai pendaftaran siswa baru.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs transition shrink-0"
        >
          Hubungi Hotline PPDB
        </a>
      </div>
    </div>
  );
}
