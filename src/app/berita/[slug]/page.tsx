import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Tag,
} from 'lucide-react';
import { newsArticlesData } from '@/data/news';

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticlesData.find((a) => a.slug === slug);
  if (!article) return { title: 'Berita Tidak Ditemukan' };

  return {
    title: `${article.title} | SD 32 Bawasalo`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const shareText = encodeURIComponent(
    `Baca artikel menarik ini dari SD Negeri 32 Bawasalo: ${article.title}`
  );

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Back Link */}
      <Link
        href="/berita"
        className="inline-flex items-center gap-2 text-xs font-bold text-red-700 hover:text-red-800 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Daftar Berita
      </Link>

      {/* Article Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 border border-red-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Tag className="w-3 h-3" />
            {article.category}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center justify-between border-y border-slate-200 py-3 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <User className="w-4 h-4 text-slate-400" />
            Ditulis oleh: {article.author}
          </span>

          <a
            href={`https://wa.me/?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold"
          >
            <Share2 className="w-3.5 h-3.5" />
            Bagikan ke WhatsApp
          </a>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
        {article.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Bottom CTA / Related */}
      <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900">UPTD SD Negeri 32 Bawasalo</h4>
          <p className="text-xs text-slate-500">Kelurahan Bawasalo, Kecamatan Segeri, Kabupaten Pangkep.</p>
        </div>
        <Link
          href="/ppdb"
          className="px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white text-xs font-bold rounded-xl transition"
        >
          Informasi PPDB Online
        </Link>
      </div>
    </div>
  );
}
