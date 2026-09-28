'use client';

import React, { useMemo, useState } from 'react';
import type { SourceEntry } from '@/lib/source-catalog';

type SourceCopy = { title: string; description: string; note: string; sourceLabel: string; openLabel: string };

export const SourcesDashboard: React.FC<{ locale: 'tr' | 'en'; entries: SourceEntry[]; copy: SourceCopy }> = ({ locale, entries, copy }) => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<'all' | SourceEntry['type']>('all');
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase(locale === 'tr' ? 'tr-TR' : 'en-US');
    return entries.filter((entry) => {
      const matchesType = type === 'all' || entry.type === type;
      if (!matchesType) return false;
      if (!q) return true;
      return [entry.title, entry.description, entry.type, entry.grade]
        .join(' ')
        .toLocaleLowerCase(locale === 'tr' ? 'tr-TR' : 'en-US')
        .includes(q);
    });
  }, [entries, locale, query, type]);

  const labelType = (value: SourceEntry['type']) => {
    if (locale === 'en') return value;
    if (value === 'Practice Guide') return 'Uygulama Rehberi';
    if (value === 'Intervention Report') return 'Müdahale Raporu';
    return 'Bireysel Çalışma İncelemesi';
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-border-tertiary bg-bg-secondary px-2.5 py-1 text-[11px] font-bold text-text-info">
            {locale === 'tr' ? 'Kaynak Altyapısı' : 'Source Layer'}
          </span>
          <span className="text-[11px] text-text-tertiary font-bold uppercase tracking-wider">
            What Works Clearinghouse
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary">{copy.title}</h1>
        <p className="text-[13px] md:text-[14px] text-text-secondary leading-relaxed max-w-[820px]">{copy.description}</p>
      </header>

      <section className="border border-border-secondary/60 bg-bg-secondary rounded-lg p-4">
        <p className="text-[12px] text-text-secondary leading-relaxed">{copy.note}</p>
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={locale === 'tr' ? 'Kaynaklarda ara…' : 'Search sources…'}
            className="w-full md:flex-1 rounded-lg border border-border-tertiary bg-bg-primary px-3 py-2 text-[12px] text-text-primary outline-none focus:border-text-info"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value as typeof type)}
            className="rounded-lg border border-border-tertiary bg-bg-primary px-3 py-2 text-[12px] text-text-primary outline-none focus:border-text-info"
          >
            <option value="all">{locale === 'tr' ? 'Tüm türler' : 'All types'}</option>
            <option value="Practice Guide">{labelType('Practice Guide')}</option>
            <option value="Intervention Report">{labelType('Intervention Report')}</option>
            <option value="Reviews of Individual Studies">{labelType('Reviews of Individual Studies')}</option>
          </select>
        </div>
        <div className="text-[11px] text-text-tertiary">
          {filtered.length} / {entries.length} {locale === 'tr' ? 'kayıt gösteriliyor' : 'records shown'}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        {filtered.map((entry, index) => {
          const isOpen = expanded === index;
          return (
            <article key={index} className="border border-border-tertiary rounded-lg bg-bg-secondary p-4 md:p-5">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-bg-info px-2 py-0.5 text-[10px] font-bold text-text-info">
                    {labelType(entry.type)}
                  </span>
                  <span className="text-[10px] font-semibold text-text-tertiary">{entry.grade}</span>
                </div>
                <h2 className="text-[13.5px] font-extrabold leading-relaxed text-text-primary">{entry.title}</h2>
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : index)}
                  className="self-start text-[11px] font-bold text-text-info hover:underline"
                >
                  {isOpen
                    ? (locale === 'tr' ? 'Ayrıntıları gizle' : 'Hide details')
                    : (locale === 'tr' ? 'Ayrıntıları göster' : 'Show details')}
                </button>
                {isOpen && (
                  <div className="mt-1 border-t border-border-tertiary/60 pt-3">
                    <p className="text-[12px] leading-relaxed text-text-secondary">{entry.description || (locale === 'tr' ? 'Bu kaynak için ek açıklama sağlanmamıştır.' : 'No additional description was supplied for this source.')}</p>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary">
                        {copy.sourceLabel}
                      </span>
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-text-info hover:underline"
                      >
                        {copy.openLabel}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <p className="text-[10px] text-text-tertiary leading-relaxed">
        {locale === 'tr'
          ? 'Katalogdaki İngilizce kaynak metni özgün haliyle korunur. Türkçe alanlar yalnızca arayüz katmanıdır.'
          : 'The English source records are preserved in their original form. Localized text is limited to the interface layer.'}
      </p>
    </div>
  );
};
