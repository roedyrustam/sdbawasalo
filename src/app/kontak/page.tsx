'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Building,
  CheckCircle,
} from 'lucide-react';
import { schoolInfo } from '@/data/school-info';

export default function KontakPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWA = () => {
    const text = encodeURIComponent(
      `Assalamu Alaikum Pihak SD Negeri 32 Bawasalo,\nNama: ${form.name}\nNo. HP: ${form.phone}\nPerihal: ${form.subject}\nPesan: ${form.message}`
    );
    window.open(`https://wa.me/${schoolInfo.contact.whatsappNumberOnly}?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-50 text-red-700 border border-red-200">
          Hubungi Kami
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Kontak Resmi & Peta Lokasi
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Kami siap melayani kebutuhan informasi pendidikan, pendaftaran siswa baru, maupun kunjungan kedinasan ke kampus UPTD SD Negeri 32 Bawasalo, Segeri, Pangkep.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-center">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 flex items-center justify-center mx-auto mb-2">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Alamat Sekolah</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            {schoolInfo.address.fullAddress}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-center">
          <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mx-auto mb-2">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Telepon / Hotline</h3>
          <p className="text-xs text-slate-500">{schoolInfo.contact.phone}</p>
          <p className="text-xs font-bold text-emerald-600">{schoolInfo.contact.whatsappHotline}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-center">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-2">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Surel / Email</h3>
          <p className="text-xs text-slate-500 break-all">{schoolInfo.contact.email}</p>
          <p className="text-[11px] text-slate-400">Respon dalam 1x24 jam kerja</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-center">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-2">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Jam Layanan Kantor</h3>
          <p className="text-xs text-slate-500">{schoolInfo.contact.operationalHours}</p>
          <p className="text-[11px] text-slate-400">Minggu & Hari Libur: Tutup</p>
        </div>
      </div>

      {/* Main Form and Route Guide */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Message */}
        <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Kirim Pesan / Pengaduan Sekolah
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Silakan tuliskan pertanyaan atau keperluan Anda, panitia akan segera merespon.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
              <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-emerald-900">Pesan Anda Siap Dikirim!</h3>
              <p className="text-xs text-emerald-700">
                Untuk respon kilat, Anda dapat meneruskan pesan ini langsung ke nomor WhatsApp Kepala Sekolah / Panitia PPDB.
              </p>
              <button
                onClick={handleSendWA}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition"
              >
                <MessageCircle className="w-4 h-4" />
                Teruskan ke WhatsApp Sekolah
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Nama Lengkap Anda
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama Anda"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Nomor Telepon / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="08xxxxxxx"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Perihal / Topik
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Pertanyaan PPDB / Kunjungan Dinas"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Isi Pesan
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-bold shadow-md transition"
              >
                <Send className="w-4 h-4" />
                Kirim Pesan Sekarang
              </button>
            </form>
          )}
        </div>

        {/* Route Guide & Info */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-red-700">
              <Building className="w-5 h-5" />
              <h3 className="font-bold text-slate-900 text-base">
                Petunjuk Akses Menuju Bawasalo Segeri
              </h3>
            </div>
            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              <p>
                <strong>Dari Arah Kota Pangkajene (Pusat Kabupaten):</strong> Lalui Jalan Poros Trans Sulawesi (Makassar - Parepare) ke arah utara menuju Kecamatan Segeri (jarak tempuh ± 25 menit). Setibanya di pertigaan Pasar Segeri, belok ke arah barat menuju kawasan Kelurahan Bawasalo.
              </p>
              <p>
                <strong>Dari Arah Kabupaten Barru:</strong> Bergerak ke arah selatan melintasi perbatasan Barru - Pangkep di Kecamatan Segeri, masuk melalui gerbang utama kelurahan Bawasalo.
              </p>
              <p className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-500">
                💡 Lokasi sekolah berdekatan dengan fasilitas umum kelurahan dan memiliki area parkir yang memadai untuk penjemputan siswa.
              </p>
            </div>
          </div>

          {/* Interactive Google Maps Frame */}
          <div className="h-80 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
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
    </div>
  );
}
