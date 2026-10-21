'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  CheckCircle,
  Building2,
  Sparkles,
} from 'lucide-react';
import { facilitiesData } from '@/data/facilities';

export default function FasilitasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Akademik', 'Olahraga', 'Penunjang', 'Kesehatan & Ibadah'];

  const filteredFacilities = facilitiesData.filter((item) => {
    if (selectedCategory === 'Semua') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-50 text-red-700 border border-red-200">
          Sarana & Prasarana
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Fasilitas Pembelajaran SD 32 Bawasalo
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Sarana fisik yang nyaman, aman, ramah anak, dan senantiasa terawat guna menunjang keberhasilan kegiatan belajar mengajar di Kelurahan Bawasalo, Segeri.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            type="button"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              selectedCategory === cat
                ? 'bg-red-700 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFacilities.map((facility) => (
          <div
            key={facility.id}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 card-hover-effect flex flex-col shadow-xs"
          >
            <div className="relative h-56 w-full bg-slate-100">
              <Image
                src={facility.imageUrl}
                alt={facility.name}
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                {facility.category}
              </span>
              <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                {facility.condition}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">{facility.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Kelengkapan Fasilitas:
                </span>
                <ul className="text-xs text-slate-700 space-y-1">
                  {facility.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Standard Quality Banner */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Standar Sarana & Prasarana Pendidikan Nasional
            </h4>
            <p className="text-xs text-slate-600">
              Pengembangan fasilitas didukung oleh Dana BOS & Bantuan Pemerintah Daerah Kabupaten Pangkep.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold text-red-700 bg-white px-3 py-1.5 rounded-lg border border-red-200 shrink-0">
          ● Bersih & Ramah Anak
        </span>
      </div>
    </div>
  );
}
