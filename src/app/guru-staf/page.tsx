'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Search,
} from 'lucide-react';
import { teachersData } from '@/data/teachers';

export default function GuruStafPage() {
  const [selectedRole, setSelectedRole] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const roles = ['Semua', 'Kepala Sekolah', 'Guru Kelas', 'Guru Mata Pelajaran', 'Tenaga Kependidikan'];

  const filteredTeachers = teachersData.filter((teacher) => {
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedRole === 'Semua') return matchesSearch;
    if (selectedRole === 'Kepala Sekolah') return matchesSearch && teacher.role.includes('Kepala Sekolah');
    if (selectedRole === 'Guru Kelas') return matchesSearch && teacher.role.includes('Wali Kelas');
    if (selectedRole === 'Guru Mata Pelajaran') return matchesSearch && (teacher.role.includes('PAI') || teacher.role.includes('PJOK'));
    if (selectedRole === 'Tenaga Kependidikan') return matchesSearch && teacher.role.includes('Operator');

    return matchesSearch;
  });

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-50 text-red-700 border border-red-200">
          Pendidik & Tenaga Kependidikan
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Dewan Guru & Staf SD Negeri 32 Bawasalo
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Mengenal para pendidik berdedikasi yang membimbing putra-putri Anda dengan keikhlasan, kompetensi profesional, dan keteladanan budi pekerti luhur.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Role Filters */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              type="button"
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedRole === role
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari nama atau mata pelajaran..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
          />
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 card-hover-effect flex flex-col shadow-xs"
          >
            <div className="relative h-64 w-full bg-slate-100">
              <Image
                src={teacher.photoUrl}
                alt={teacher.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-red-700 text-white px-2 py-0.5 rounded shadow-xs">
                    {teacher.status}
                  </span>
                  <h3 className="text-white font-bold text-base leading-snug mt-1">
                    {teacher.name}
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">{teacher.role}</p>
                </div>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-xs">
              <div className="space-y-2 text-slate-600">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Bidang: <strong className="text-slate-800">{teacher.subject}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Kualifikasi: <strong className="text-slate-800">{teacher.education}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>NIP: <strong className="font-mono text-slate-800">{teacher.nip}</strong></span>
                </div>
              </div>

              {teacher.quote && (
                <div className="pt-3 border-t border-slate-100 italic text-slate-500 text-[11px] leading-relaxed">
                  &ldquo;{teacher.quote}&rdquo;
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredTeachers.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <Users className="w-10 h-10 text-slate-300 mx-auto mb-2" />
          <p className="text-sm font-bold text-slate-700">Data Pendidik Tidak Ditemukan</p>
          <p className="text-xs text-slate-400 mt-1">Coba gunakan kata kunci pencarian yang lain.</p>
        </div>
      )}
    </div>
  );
}
