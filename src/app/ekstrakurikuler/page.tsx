import React from 'react';
import {
  Compass,
  Music,
  Trophy,
  BookOpen,
  HeartPulse,
  Calendar,
  User,
  Award,
} from 'lucide-react';
import { extracurricularsData } from '@/data/extracurricular';

export const metadata = {
  title: 'Ekstrakurikuler & Bakat Siswa | SD Negeri 32 Bawasalo',
  description: 'Program pengembangan minat, bakat, kepemimpinan, seni budaya Bugis, dan olahraga di SD 32 Bawasalo.',
};

export default function EkstrakurikulerPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-red-700" />;
      case 'Music':
        return <Music className="w-6 h-6 text-sky-700" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-700" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-700" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-rose-700" />;
      default:
        return <Award className="w-6 h-6 text-red-700" />;
    }
  };

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-50 text-red-700 border border-red-200">
          Pengembangan Potensi
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Ekstrakurikuler & Pembinaan Bakat
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Wadah bagi setiap peserta didik untuk mengeksplorasi minat, melatih kepemimpinan, menumbuhkan jiwa sportivitas, dan melestarikan budaya seni daerah Sulawesi Selatan.
        </p>
      </div>

      {/* Grid of Extracurriculars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {extracurricularsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-7 border border-slate-200 card-hover-effect shadow-xs flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full border border-slate-200">
                  {item.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Jadwal: <strong>{item.schedule}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Pembina: <strong>{item.coach}</strong></span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-1.5 text-amber-700 text-xs font-bold">
                <Trophy className="w-3.5 h-3.5" />
                <span>Prestasi Terbaru:</span>
              </div>
              <ul className="text-[11px] text-slate-600 space-y-1">
                {item.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
