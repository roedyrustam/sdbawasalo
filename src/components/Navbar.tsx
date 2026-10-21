'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Phone,
  Clock,
  MapPin,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { schoolInfo } from '@/data/school-info';

const navItems = [
  { name: 'Beranda', href: '/' },
  { name: 'Profil Sekolah', href: '/profil' },
  { name: 'Guru & Staf', href: '/guru-staf' },
  { name: 'Fasilitas', href: '/fasilitas' },
  { name: 'Ekstrakurikuler', href: '/ekstrakurikuler' },
  { name: 'Berita & Agenda', href: '/berita' },
  { name: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Mini Header */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Kelurahan Bawasalo, Segeri, Pangkep (Sulsel)
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {schoolInfo.contact.operationalHours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              Hotline: {schoolInfo.contact.whatsappHotline}
            </span>
            <span className="text-slate-500">|</span>
            <span className="bg-red-800/80 text-white px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider">
              NPSN: {schoolInfo.npsn}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* School Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-700 to-red-800 text-white flex items-center justify-center shadow-md shadow-red-900/10 border border-red-900/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-red-700 tracking-wider uppercase">
                  UPTD
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold border border-slate-200">
                  {schoolInfo.accreditationGrade}
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-tight">
                SD NEGERI 32 BAWASALO
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Kec. Segeri, Kab. Pangkajene & Kepulauan
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-red-700 bg-red-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* PPDB CTA Button */}
            <Link
              href="/ppdb"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white text-sm font-bold shadow-md shadow-red-700/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              PPDB Online
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/ppdb"
              className="px-3 py-1.5 text-xs font-bold bg-red-700 text-white rounded-lg shadow-sm"
            >
              PPDB
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-red-50 text-red-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2 mt-2 border-t border-slate-100">
              <Link
                href="/ppdb"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-red-700 text-white text-sm font-bold rounded-xl shadow-md text-center"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Pendaftaran Siswa Baru (PPDB Online)
              </Link>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
              <p>📍 {schoolInfo.address.fullAddress}</p>
              <p>📞 {schoolInfo.contact.phone} | {schoolInfo.contact.whatsappHotline}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
