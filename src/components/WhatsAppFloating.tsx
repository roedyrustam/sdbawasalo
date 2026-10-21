'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { schoolInfo } from '@/data/school-info';

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Assalamu Alaikum, Halo Panitia SD Negeri 32 Bawasalo Segeri. Saya ingin bertanya seputar informasi sekolah dan pendaftaran siswa baru (PPDB).'
  );
  const waUrl = `https://wa.me/${schoolInfo.contact.whatsappNumberOnly}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 print:hidden">
      {/* Mini Tooltip Popup */}
      {showTooltip && (
        <div className="relative bg-white text-slate-800 text-xs px-3.5 py-2 rounded-xl shadow-xl border border-slate-200 flex items-center gap-2 max-w-xs animate-fade-in">
          <span>
            Butuh bantuan informasi? <strong>Chat WhatsApp Sekolah</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded transition"
            aria-label="Tutup petunjuk WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi SD 32 Bawasalo via WhatsApp"
        className="wa-pulse flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
