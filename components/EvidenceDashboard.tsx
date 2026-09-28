'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Badge } from './Badge';
import { TabGroup, TabItem } from './TabGroup';
import { Locale } from '@/lib/dictionary';
import { evidenceRecords, wwcSnapshot, EvidenceProductType } from '@/lib/evidence-data';

interface EvidenceDashboardProps { locale: Locale; }

const labels: Record<EvidenceProductType, { tr: string; en: string }> = {
  'practice-guide': { tr: 'Practice Guide', en: 'Practice Guide' },
  'intervention-report': { tr: 'Müdahale Raporu', en: 'Intervention Report' },
  'individual-study': { tr: 'Bireysel Çalışma İncelemesi', en: 'Individual Study Review' }
};

export const EvidenceDashboard: React.FC<EvidenceDashboardProps> = ({ locale }) => {
  const isTr = locale === 'tr';
  const [filter, setFilter] = useState<'all' | EvidenceProductType>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const copy = wwcSnapshot[isTr ? 'tr' : 'en'];
  const filtered = useMemo(() => evidenceRecords.filter(r => filter === 'all' || r.productType === filter), [filter]);

  const tabs: TabItem[] = [
    { id: 'all', label: isTr ? 'Tümü' : 'All' },
    { id: 'practice-guide', label: 'Practice Guides' },
    { id: 'intervention-report', label: isTr ? 'Müdahale Raporları' : 'Intervention Reports' },
    { id: 'individual-study', label: isTr ? 'Bireysel Çalışmalar' : 'Individual Studies' }
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="blue">{isTr ? 'Kanıt Altyapısı' : 'Evidence Layer'}</Badge>
          <span className="text-[11px] text-text-tertiary font-bold uppercase tracking-wider">What Works Clearinghouse</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary">{isTr ? 'Evidence: Öğrenme Araştırmaları Haritası' : 'Evidence: Learning Research Map'}</h1>
        <p className="text-[13px] md:text-[14px] text-text-secondary leading-relaxed max-w-[800px]">{copy.description}</p>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[copy.results, copy.practiceGuides, copy.interventionReports, copy.individualStudies].map(value => (
          <div key={value} className="border border-border-tertiary bg-bg-secondary rounded-lg p-3"><p className="text-[12px] font-semibold text-text-primary">{value}</p></div>
        ))}
      </section>

      <div className="border border-border-secondary/60 bg-bg-secondary rounded-lg p-4 text-[12px] text-text-secondary">
        <strong className="text-text-primary">{isTr ? 'WWC kanıt katmanları: ' : 'WWC evidence tiers: '}</strong>{copy.tiers}
        <span className="block mt-1 text-text-tertiary">{isTr ? 'Sayılar kullanıcı tarafından sağlanan WWC arama çıktısının anlık görüntüsüdür; canlı WWC senkronizasyonu değildir.' : 'Counts are a snapshot of the supplied WWC search export, not a live WWC synchronization.'}</span>
      </div>

      <section className="border-b border-border-tertiary pb-1"><TabGroup tabs={tabs} activeTab={filter} onChange={id => setFilter(id as typeof filter)} /></section>

      <div className="flex flex-col gap-4">
        {filtered.map(record => {
          const expanded = expandedId === record.id;
          const title = isTr ? record.title.tr : record.title.en;
          const summary = isTr ? record.summary.tr : record.summary.en;
          const relevance = isTr ? record.relevance.tr : record.relevance.en;
          return (
            <article key={record.id} className="border border-border-tertiary rounded-lg bg-bg-secondary p-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2"><Badge variant="teal">{labels[record.productType][isTr ? 'tr' : 'en']}</Badge><span className="text-[11px] text-text-tertiary font-semibold">{record.date}</span></div>
                  <h2 className="font-extrabold text-[15px] text-text-primary">{title}</h2>
                </div>
                <span className="text-[11px] text-text-tertiary font-semibold">{record.population === 'postsecondary' ? 'Postsecondary' : 'K–Postsecondary'}</span>
              </div>
              <p className="text-[12.5px] text-text-secondary leading-relaxed mt-3">{summary}</p>
              <button onClick={() => setExpandedId(expanded ? null : record.id)} className="mt-3 text-[12px] font-bold text-text-info hover:opacity-85">{expanded ? (isTr ? 'Detayları gizle' : 'Hide details') : (isTr ? 'Bağlamı göster' : 'Show context')}</button>
              {expanded && <div className="mt-4 pt-4 border-t border-border-tertiary/60 flex flex-col gap-3">
                <div><span className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">{isTr ? 'NeuroPortal açısından önemi' : 'NeuroPortal relevance'}</span><p className="text-[12.5px] text-text-secondary leading-relaxed mt-1">{relevance}</p></div>
                <div className="flex flex-wrap gap-1.5">{record.tags.map(tag => <span key={tag} className="px-2 py-1 rounded bg-bg-primary border border-border-tertiary text-[10px] text-text-tertiary">{tag}</span>)}</div>
                <a href={record.sourceUrl} target="_blank" rel="noreferrer" className="text-[12px] font-bold text-text-info hover:underline">{isTr ? 'WWC kaynağını aç →' : 'Open WWC source →'}</a>
              </div>}
            </article>
          );
        })}
      </div>

      <section className="border border-border-tertiary bg-bg-secondary/50 rounded-lg p-5">
        <h2 className="font-extrabold text-[14px] text-text-primary">{isTr ? 'Kanıt ile sentezi ayır' : 'Separate evidence from synthesis'}</h2>
        <p className="text-[12.5px] text-text-secondary leading-relaxed mt-2">{isTr ? 'NeuroPortal’daki mevcut çalışma teknikleri literatür sentezidir. WWC kayıtları burada belirli teknikleri otomatik olarak “WWC onaylı” ilan etmek için değil; yükseköğretim araştırmalarını, uygulama kanıtını ve kanıt katmanlarını ayrı izlemek için kullanılır.' : 'NeuroPortal’s existing study techniques are a literature synthesis. WWC records are used to track postsecondary research and evidence layers, not to label individual techniques as automatically “WWC-approved”.'}</p>
      </section>

      <section className="border border-border-secondary/60 bg-bg-secondary rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[12px]">
        <span className="text-text-secondary">{isTr ? 'Uygulanabilir çalışma protokolleri için:' : 'For actionable study protocols:'}</span>
        <Link href={'/' + locale + '/technics'} className="text-text-info font-bold hover:underline">→ Technics</Link>
      </section>
    </div>
  );
};
