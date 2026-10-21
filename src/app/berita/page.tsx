'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  ArrowRight,
  User,
  Search,
} from 'lucide-react';
import { newsArticlesData } from '@/data/news';

export default function BeritaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Semua', 'Pengumuman', 'Kegiatan', 'Prestasi'];

  const filteredNews = newsArticlesData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedCategory === 'Semua') return matchesSearch;
    return matchesSearch && news.category === selectedCategory;
  });

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-50 text-red-700 border border-red-200">
          Warta & Publikasi
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Berita & Agenda Sekolah
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Ikuti perkembangan terkini seputar kegiatan belajar, prestasi anak didik, dan pengumuman resmi UPTD SD Negeri 32 Bawasalo, Segeri, Pangkep.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                selectedCategory === cat
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari judul berita..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((news) => (
          <article
            key={news.id}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 card-hover-effect flex flex-col shadow-xs"
          >
            <div className="relative h-52 w-full bg-slate-200">
              <Image
                src={news.imageUrl}
                alt={news.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-red-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
                {news.category}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-slate-400 text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {news.date}
                  </span>
                  <span>•</span>
                  <span>{news.readTime}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug hover:text-red-700 transition">
                  <Link href={`/berita/${news.slug}`}>{news.title}</Link>
                </h3>

                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {news.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {news.author}
                </span>

                <Link
                  href={`/berita/${news.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-700 hover:text-red-800"
                >
                  Baca <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
