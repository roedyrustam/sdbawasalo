import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {badge && (
        <span
          className={`inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full mb-3 ${
            light
              ? 'bg-white/20 text-white border border-white/30'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg leading-relaxed ${
            light ? 'text-slate-200' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
