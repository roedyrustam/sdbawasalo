'use client';

import React, { useState } from 'react';
import {
  UserCheck,
  Search,
  FileSpreadsheet,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Download,
  Share2,
} from 'lucide-react';
import { PpdbRegistration } from '@/types';
import { schoolInfo } from '@/data/school-info';

export default function PpdbForm() {
  const [activeTab, setActiveTab] = useState<'form' | 'status' | 'rekap'>('form');

  // Form states
  const [formData, setFormData] = useState({
    studentName: '',
    nik: '',
    birthPlace: '',
    birthDate: '',
    gender: 'Laki-laki' as 'Laki-laki' | 'Perempuan',
    religion: 'Islam',
    address: '',
    parentFather: '',
    parentMother: '',
    parentPhone: '',
    parentJob: '',
    previousSchool: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<PpdbRegistration | null>(null);

  // Status check states
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<PpdbRegistration[] | null>(null);
  const [searchNotFound, setSearchNotFound] = useState(false);

  // Rekap states
  const [rekapList, setRekapList] = useState<PpdbRegistration[]>([]);
  const [rekapLoading, setRekapLoading] = useState(false);

  const calculateAge = (dobString: string) => {
    if (!dobString) return null;
    const dob = new Date(dobString);
    const targetDate = new Date('2026-07-01'); // Tahun Ajaran Baru 1 Juli
    let years = targetDate.getFullYear() - dob.getFullYear();
    const m = targetDate.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && targetDate.getDate() < dob.getDate())) {
      years--;
    }
    return years;
  };

  const currentAge = calculateAge(formData.birthDate);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await fetch('/api/ppdb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || 'Gagal mengirim pendaftaran.');
      }

      setSuccessData(json.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg('Terjadi kendala saat mengirimkan pendaftaran.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setSearchLoading(true);
    setSearchNotFound(false);
    setSearchResult(null);

    try {
      const res = await fetch(`/api/ppdb?search=${encodeURIComponent(searchQuery.trim())}`);
      const json = await res.json();

      if (json.success && json.data.length > 0) {
        setSearchResult(json.data);
      } else {
        setSearchNotFound(true);
      }
    } catch {
      setSearchNotFound(true);
    } finally {
      setSearchLoading(false);
    }
  };

  const loadRekap = async () => {
    setRekapLoading(true);
    try {
      const res = await fetch('/api/ppdb');
      const json = await res.json();
      if (json.success) {
        setRekapList(json.data);
      }
    } catch {
      // Handled silently
    } finally {
      setRekapLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-slate-200 bg-slate-50/70 p-2 gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('form')}
          type="button"
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition whitespace-nowrap ${
            activeTab === 'form'
              ? 'bg-red-700 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          Formulir Pendaftaran Siswa
        </button>

        <button
          onClick={() => setActiveTab('status')}
          type="button"
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition whitespace-nowrap ${
            activeTab === 'status'
              ? 'bg-red-700 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
        >
          <Search className="w-4 h-4" />
          Cek Status Berkas Pendaftar
        </button>

        <button
          onClick={() => {
            setActiveTab('rekap');
            loadRekap();
          }}
          type="button"
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition whitespace-nowrap ${
            activeTab === 'rekap'
              ? 'bg-red-700 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4" />
          Rekapitulasi & Ekspor Data
        </button>
      </div>

      {/* Tab 1: Formulir Pendaftaran */}
      {activeTab === 'form' && (
        <div className="p-6 md:p-10">
          {successData ? (
            <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Pendaftaran Berhasil Dikirim
                </span>
                <h3 className="mt-3 text-2xl font-black text-slate-900">
                  Selamat! Data Telah Diterima Sistem
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Simpan nomor registrasi ini sebagai bukti dan acuan untuk memeriksa kelengkapan berkas fisik ke sekolah.
                </p>
              </div>

              {/* Registration Proof Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Nomor Pendaftaran Resmi:</span>
                    <p className="text-xl font-extrabold text-red-700 tracking-wider">
                      {successData.regNumber}
                    </p>
                  </div>
                  <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2.5 py-1 rounded-full">
                    {successData.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400">Nama Lengkap Siswa:</span>
                    <p className="font-bold text-slate-800 text-sm">{successData.studentName}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">NIK:</span>
                    <p className="font-semibold text-slate-800">{successData.nik}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Tempat, Tgl Lahir:</span>
                    <p className="font-semibold text-slate-800">
                      {successData.birthPlace}, {successData.birthDate}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400">Nama Orang Tua / Wali:</span>
                    <p className="font-semibold text-slate-800">
                      {successData.parentFather} / {successData.parentMother}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${schoolInfo.contact.whatsappNumberOnly}?text=${encodeURIComponent(
                    `Assalamu Alaikum Panitia PPDB SD 32 Bawasalo, saya telah mendaftarkan anak saya atas nama ${successData.studentName} dengan Nomor Registrasi: ${successData.regNumber}. Mohon informasi tahapan verifikasi selanjutnya. Terima kasih.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl shadow-md transition"
                >
                  <Share2 className="w-4 h-4" />
                  Konfirmasi ke WhatsApp Panitia
                </a>

                <button
                  onClick={() => {
                    setSuccessData(null);
                    setFormData({
                      studentName: '',
                      nik: '',
                      birthPlace: '',
                      birthDate: '',
                      gender: 'Laki-laki',
                      religion: 'Islam',
                      address: '',
                      parentFather: '',
                      parentMother: '',
                      parentPhone: '',
                      parentJob: '',
                      previousSchool: '',
                    });
                  }}
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-xl transition"
                >
                  Daftarkan Siswa Lain
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Section 1: Data Calon Siswa */}
              <div>
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-5">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">
                    Identitas Calon Peserta Didik Baru
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nama Lengkap Siswa <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Sesuai Akta Kelahiran"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      NIK Calon Siswa (16 Digit) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={16}
                      placeholder="Lihat di Kartu Keluarga (KK)"
                      value={formData.nik}
                      onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Tempat Lahir <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Pangkep / Bawasalo"
                      value={formData.birthPlace}
                      onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Tanggal Lahir <span className="text-red-500">*</span>
                      </label>
                      {currentAge !== null && (
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded ${
                            currentAge >= 7
                              ? 'bg-emerald-100 text-emerald-800'
                              : currentAge >= 6
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          Usia per 1 Juli 2026: {currentAge} tahun
                        </span>
                      )}
                    </div>
                    <input
                      type="date"
                      required
                      value={formData.birthDate}
                      onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Jenis Kelamin <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          gender: e.target.value as 'Laki-laki' | 'Perempuan',
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                    >
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Asal Sekolah Sebelumnya
                    </label>
                    <input
                      type="text"
                      placeholder="Nama TK / RA / PAUD (Boleh dikosongkan)"
                      value={formData.previousSchool}
                      onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Alamat Tempat Tinggal Lengkap <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Dusun, RT/RW, Kelurahan Bawasalo atau sekitarnya"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Section 2: Data Orang Tua / Wali */}
              <div>
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-5">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">
                    Data Orang Tua / Wali Siswa
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nama Ayah Kandung
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Ayah"
                      value={formData.parentFather}
                      onChange={(e) => setFormData({ ...formData, parentFather: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nama Ibu Kandung
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Ibu"
                      value={formData.parentMother}
                      onChange={(e) => setFormData({ ...formData, parentMother: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nomor HP / WhatsApp Aktif <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 0821xxxxxxx (Untuk info kelulusan)"
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Pekerjaan Orang Tua
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Petani / Wiraswasta / PNS / Guru"
                      value={formData.parentJob}
                      onChange={(e) => setFormData({ ...formData, parentJob: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Data yang dikirimkan dilindungi dan hanya digunakan untuk keperluan pendaftaran resmi sekolah.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white font-bold text-sm shadow-md transition hover:scale-[1.01]"
                >
                  {loading ? (
                    'Memproses Data...'
                  ) : (
                    <>
                      Kirim Formulir Pendaftaran Sekarang
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Tab 2: Cek Status Berkas */}
      {activeTab === 'status' && (
        <div className="p-6 md:p-10 space-y-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-slate-900">
              Periksa Status Verifikasi Berkas Calon Siswa
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Masukkan Nomor Registrasi (contoh: <code>PPDB-2026-001</code>) atau NIK siswa yang telah didaftarkan.
            </p>

            <form onSubmit={handleSearch} className="mt-5 flex gap-2">
              <input
                type="text"
                placeholder="Nomor Pendaftaran atau NIK..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
              />
              <button
                type="submit"
                disabled={searchLoading}
                className="px-6 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-sm shadow-sm transition"
              >
                {searchLoading ? 'Mencari...' : 'Periksa'}
              </button>
            </form>
          </div>

          {searchNotFound && (
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-md mx-auto space-y-2">
              <Clock className="w-8 h-8 text-amber-500 mx-auto" />
              <p className="text-sm font-bold text-slate-800">Data Pendaftar Belum Ditemukan</p>
              <p className="text-xs text-slate-500">
                Pastikan nomor pendaftaran atau NIK sudah benar. Jika baru saja mendaftar, mohon tunggu beberapa saat atau hubungi panitia sekolah.
              </p>
            </div>
          )}

          {searchResult && (
            <div className="max-w-3xl mx-auto space-y-4">
              {searchResult.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-red-700">{item.regNumber}</span>
                      <span className="text-xs text-slate-400">• NIK: {item.nik}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{item.studentName}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.gender} • Asal: {item.previousSchool} • Wali: {item.parentFather} / {item.parentMother}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                        item.status === 'Lulus Seleksi'
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.status === 'Berkas Diterima'
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Rekapitulasi & Ekspor Data (Operator) */}
      {activeTab === 'rekap' && (
        <div className="p-6 md:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Data Rekapitulasi Pendaftar PPDB
              </h3>
              <p className="text-xs text-slate-500">
                Total {rekapList.length} calon siswa terdaftar dalam sistem.
              </p>
            </div>
            <a
              href="/api/ppdb?format=csv"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-sm transition"
            >
              <Download className="w-4 h-4" />
              Unduh File CSV / Excel
            </a>
          </div>

          {rekapLoading ? (
            <p className="text-center py-10 text-xs text-slate-500">Memuat data rekap...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">No. Registrasi</th>
                    <th className="py-3 px-4">Nama Siswa</th>
                    <th className="py-3 px-4">NIK</th>
                    <th className="py-3 px-4">L/P</th>
                    <th className="py-3 px-4">Nama Orang Tua</th>
                    <th className="py-3 px-4">No. WhatsApp</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  {rekapList.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/80">
                      <td className="py-3 px-4 font-bold text-red-700">{row.regNumber}</td>
                      <td className="py-3 px-4 font-semibold text-slate-900">{row.studentName}</td>
                      <td className="py-3 px-4">{row.nik}</td>
                      <td className="py-3 px-4">{row.gender}</td>
                      <td className="py-3 px-4">{row.parentFather}</td>
                      <td className="py-3 px-4">{row.parentPhone}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            row.status === 'Lulus Seleksi'
                              ? 'bg-emerald-100 text-emerald-800'
                              : row.status === 'Berkas Diterima'
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
