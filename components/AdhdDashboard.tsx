'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TabGroup, TabItem } from './TabGroup';
import { SubTabGroup } from './SubTabGroup';
import { InfoBox } from './InfoBox';
import { HackCard } from './HackCard';
import { Badge } from './Badge';
import { Locale } from '@/lib/dictionary';
import {
  adhdStudyCardsDehb,
  adhdStudyCardsNormal,
  adhdStudyCardsOrtak,
  adhdHacks,
  HackData,
} from '@/lib/adhd-data';

interface AdhdDashboardProps {
  dict: any;
  locale: Locale;
}

export const AdhdDashboard: React.FC<AdhdDashboardProps> = ({ dict, locale }) => {
  const isTr = locale === 'tr';

  // Main Tab State
  const [activeTab, setActiveTab] = useState('farklar');
  
  // Study Techniques Subtab State
  const [activeSubTab, setActiveSubTab] = useState('dehb');

  // Brain Hacks Subtab State
  const [activeHackSubTab, setActiveHackSubTab] = useState('egzersiz');

  // Filters State
  const [evidenceFilter, setEvidenceFilter] = useState<'all' | 'strong'>('all');
  const [speedFilter, setSpeedFilter] = useState<'all' | 'aninda' | 'orta-uzun'>('all');

  // Interactive Card Highlights & Scrolling State
  const [highlightedCardId, setHighlightedCardId] = useState<string | null>(null);

  // Clear highlight after a timeout
  useEffect(() => {
    if (highlightedCardId) {
      const timer = setTimeout(() => {
        setHighlightedCardId(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [highlightedCardId]);

  // Main Tabs Configuration
  const mainTabs: TabItem[] = [
    { id: 'farklar', label: dict.adhd.tabs.farklar },
    { id: 'calisma', label: dict.adhd.tabs.calisma },
    { id: 'hackler', label: dict.adhd.tabs.hackler },
  ];

  // Study Techniques Subtabs Configuration
  const studySubTabs: TabItem[] = [
    { id: 'dehb', label: dict.adhd.subtabs.dehb },
    { id: 'normal', label: dict.adhd.subtabs.normal },
    { id: 'ortak', label: dict.adhd.subtabs.ortak },
  ];

  // Brain Hacks Subtabs Configuration
  const hackSubTabs: TabItem[] = [
    { id: 'egzersiz', label: dict.adhd.hackTabs.egzersiz },
    { id: 'beslenme', label: dict.adhd.hackTabs.beslenme },
    { id: 'ortam', label: dict.adhd.hackTabs.ortam },
    { id: 'bilistek', label: dict.adhd.hackTabs.bilistek },
    { id: 'uyku', label: dict.adhd.hackTabs.uyku },
  ];

  // Onboarding action trigger
  const handleOnboarding = (type: 'baslangic' | 'dikkat' | 'odaklanamama' | 'zihin') => {
    setActiveTab('calisma');
    setActiveSubTab('dehb');

    let targetId = '';
    if (type === 'baslangic') targetId = 'calisma-ilk2dk';
    else if (type === 'dikkat') targetId = 'calisma-uyarimdengesi';
    else if (type === 'odaklanamama') targetId = 'calisma-mikrosprint';
    else if (type === 'zihin') targetId = 'calisma-aktifcikti';

    setHighlightedCardId(targetId);

    // Dynamic scroll logic
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  // Quick glance click handler
  const handleQuickGlanceClick = (hack: HackData) => {
    setActiveTab('hackler');
    setActiveHackSubTab(hack.category);
    setHighlightedCardId(hack.id);

    setTimeout(() => {
      const el = document.getElementById(hack.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  // Filtering Logic for Brain Hacks
  const filteredHacks = adhdHacks.filter((hack) => {
    const matchesEvidence = evidenceFilter === 'all' || hack.evidence === 'strong';
    const matchesSpeed =
      speedFilter === 'all' ||
      (speedFilter === 'aninda' && hack.speed === 'aninda') ||
      (speedFilter === 'orta-uzun' && hack.speed === 'orta-uzun');
    const matchesCategory = hack.category === activeHackSubTab;

    return matchesEvidence && matchesSpeed && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      
      {/* Dynamic SEO Title & Description */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="purple" className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4L4 20M12 4l8 16M6.5 15h11" />
              <circle cx="12" cy="4" r="1.8" fill="currentColor" />
              <circle cx="4" cy="20" r="1.8" fill="currentColor" />
              <circle cx="20" cy="20" r="1.8" fill="currentColor" />
              <circle cx="9" cy="10" r="1.3" fill="currentColor" />
              <circle cx="15" cy="10" r="1.3" fill="currentColor" />
            </svg>
            <span>{isTr ? 'Nöro-Gelişimsel' : 'Neuro-Developmental'}</span>
          </Badge>
          <span className="text-[11px] text-text-tertiary font-bold uppercase tracking-wider">
            {isTr ? 'Dopamin Optimizasyonu' : 'Dopamine Optimization'}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary">
          {dict.adhd.title}
        </h1>
        <p className="text-[13px] md:text-[14px] text-text-secondary leading-relaxed max-w-[800px]">
          {dict.adhd.desc}
        </p>
      </div>

      {/* Cross-link alert to OCD page */}
      <div className="border border-border-secondary/60 bg-bg-secondary rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[13px] animate-fadeIn">
        <div className="flex items-start gap-3">
          <span className="text-text-info bg-bg-info/60 border border-text-info/10 p-2 rounded-lg flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
          </span>
          <div>
            <span className="font-semibold text-text-primary">{dict.adhd.crossTitle}</span>
            <p className="text-text-secondary mt-0.5">
              {dict.adhd.crossDesc}
            </p>
          </div>
        </div>
        <Link
          href={`/${locale}/okb`}
          className="text-text-info font-bold text-nowrap self-end sm:self-center hover:opacity-85 text-[12px] flex items-center gap-1 shrink-0"
        >
          {dict.adhd.crossAction}
        </Link>
      </div>

      {/* INTERACTIVE ONBOARDING FLOW */}
      <section className="bg-bg-secondary border border-border-tertiary rounded-lg p-5">
        <div className="flex items-center gap-2 mb-2">
          <svg className="text-text-info" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
            <line x1="9" y1="3" x2="9" y2="18"></line>
            <line x1="15" y1="6" x2="15" y2="21"></line>
          </svg>
          <h2 className="font-bold text-[15px] text-text-primary">
            {dict.onboarding.title}
          </h2>
        </div>
        <p className="text-text-secondary text-[13px] mb-4">
          {dict.onboarding.desc}
        </p>

        {/* Onboarding Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div
            onClick={() => handleOnboarding('baslangic')}
            className="bg-bg-primary border border-border-tertiary rounded-md p-3.5 hover:border-text-info hover:shadow-sm cursor-pointer transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <svg className="w-5 h-5 text-text-info mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M12 2l3 3-6 6-3-3 6-6z" />
                <path d="M12 2s4 0 7 3 3 7 3 7l-5-2-4-4-2-5z" />
                <path d="M9 15l-3 5M15 9l5-3" />
              </svg>
              <h3 className="font-semibold text-[13px] text-text-primary mb-1">
                {dict.onboarding.cards.baslangic.title}
              </h3>
              <p className="text-text-tertiary text-[11px] leading-relaxed">
                {dict.onboarding.cards.baslangic.desc}
              </p>
            </div>
            <div className="text-text-info text-[11px] font-bold mt-3 flex items-center gap-0.5">
              {dict.onboarding.cards.baslangic.action}
            </div>
          </div>

          <div
            onClick={() => handleOnboarding('dikkat')}
            className="bg-bg-primary border border-border-tertiary rounded-md p-3.5 hover:border-text-info hover:shadow-sm cursor-pointer transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <svg className="w-5 h-5 text-text-info mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <h3 className="font-semibold text-[13px] text-text-primary mb-1">
                {dict.onboarding.cards.dikkat.title}
              </h3>
              <p className="text-text-tertiary text-[11px] leading-relaxed">
                {dict.onboarding.cards.dikkat.desc}
              </p>
            </div>
            <div className="text-text-info text-[11px] font-bold mt-3 flex items-center gap-0.5">
              {dict.onboarding.cards.dikkat.action}
            </div>
          </div>

          <div
            onClick={() => handleOnboarding('odaklanamama')}
            className="bg-bg-primary border border-border-tertiary rounded-md p-3.5 hover:border-text-info hover:shadow-sm cursor-pointer transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <svg className="w-5 h-5 text-text-info mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 2h14M5 22h14M19 2v4c0 3-2 5-5 7 3 2 5 4 5 7v4M5 2v4c0 3 2 5 5 7-3 2-5 4-5 7v4" />
                <path d="M12 13V7" />
              </svg>
              <h3 className="font-semibold text-[13px] text-text-primary mb-1">
                {dict.onboarding.cards.odaklanamama.title}
              </h3>
              <p className="text-text-tertiary text-[11px] leading-relaxed">
                {dict.onboarding.cards.odaklanamama.desc}
              </p>
            </div>
            <div className="text-text-info text-[11px] font-bold mt-3 flex items-center gap-0.5">
              {dict.onboarding.cards.odaklanamama.action}
            </div>
          </div>

          <div
            onClick={() => handleOnboarding('zihin')}
            className="bg-bg-primary border border-border-tertiary rounded-md p-3.5 hover:border-text-info hover:shadow-sm cursor-pointer transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <svg className="w-5 h-5 text-text-info mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" />
              </svg>
              <h3 className="font-semibold text-[13px] text-text-primary mb-1">
                {dict.onboarding.cards.zihin.title}
              </h3>
              <p className="text-text-tertiary text-[11px] leading-relaxed">
                {dict.onboarding.cards.zihin.desc}
              </p>
            </div>
            <div className="text-text-info text-[11px] font-bold mt-3 flex items-center gap-0.5">
              {dict.onboarding.cards.zihin.action}
            </div>
          </div>
        </div>
      </section>

      {/* STICKY MAIN TAB NAVIGATION */}
      <div className="sticky top-[53px] z-40 bg-bg-primary/95 py-2.5 border-b border-border-tertiary">
        <TabGroup tabs={mainTabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* TAB 1 CONTENT: TEMEL FARKLAR */}
      {activeTab === 'farklar' && (
        <div className="overflow-x-auto border border-border-tertiary rounded-lg bg-bg-secondary animate-fadeIn">
          <table className="w-full text-left border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-bg-primary border-b border-border-tertiary">
                <th className="p-3 font-semibold text-text-tertiary w-[28%]">
                  {dict.adhd.table.headerSubject}
                </th>
                <th className="p-3 font-semibold text-text-primary w-[36%]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600 dark:bg-purple-400 shrink-0 shadow-sm" />
                    <span>{dict.adhd.table.headerAdhd}</span>
                  </span>
                </th>
                <th className="p-3 font-semibold text-text-primary w-[36%]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 shadow-sm" />
                    <span>{dict.adhd.table.headerNormal}</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-tertiary/60">
              {Object.entries(dict.adhd.table.rows).map(([key, row]: [string, any]) => (
                <tr key={key}>
                  <td className="p-3.5 font-semibold text-text-primary">{row.subject}</td>
                  <td className="p-3.5 text-text-secondary leading-relaxed">
                    {key === 'zaman' ? (
                      <>
                        <span className="font-semibold text-text-info bg-bg-info px-1.5 py-0.5 rounded text-[11px] mr-1">
                          {locale === 'tr' ? '"Şimdi"' : '"Now"'}
                        </span>
                        {locale === 'tr' ? ' ve ' : ' and '}
                        <span className="font-semibold text-text-tertiary bg-bg-primary px-1.5 py-0.5 rounded border text-[11px] mx-1">
                          {locale === 'tr' ? '"şimdi değil"' : '"not now"'}
                        </span>
                        {row.adhd.replace(/"Şimdi" ve "şimdi değil" — /, '').replace(/"Now" and "not now" — /, '')}
                      </>
                    ) : (
                      row.adhd
                    )}
                  </td>
                  <td className="p-3.5 text-text-secondary leading-relaxed">{row.normal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 2 CONTENT: ÇALIŞMA TEKNİKLERİ */}
      {activeTab === 'calisma' && (
        <div className="flex flex-col animate-fadeIn">
          
          {/* Nested Subtabs */}
          <SubTabGroup tabs={studySubTabs} activeTab={activeSubTab} onChange={setActiveSubTab} />

          {/* Subtab Contents */}
          {activeSubTab === 'dehb' && (
            <div>
              <InfoBox type="tip">
                <span className="font-semibold">{dict.adhd.cognitiveHint}:</span> {dict.adhd.cognitiveHintDesc}
              </InfoBox>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {adhdStudyCardsDehb.map((card) => {
                  const isHighlighted = highlightedCardId === card.id;
                  const currentTitle = isTr ? card.title.tr : card.title.en;
                  const currentCategory = isTr ? card.category.tr : card.category.en;
                  const currentPoints = isTr ? card.points.tr : card.points.en;
                  const currentSolution = isTr ? card.solutionLabel.tr : card.solutionLabel.en;
                  return (
                    <div
                      key={card.id}
                      id={card.id}
                      className={`border rounded-lg p-5 bg-bg-secondary shadow-sm transition-all duration-300 ${
                        isHighlighted
                          ? 'border-text-info ring-2 ring-text-info/20 shadow-md scale-[1.01]'
                          : 'border-border-tertiary hover:border-border-secondary'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <h3 className="font-bold text-[14px] text-text-primary">
                          {currentTitle}
                        </h3>
                        <Badge variant="purple">{currentCategory}</Badge>
                      </div>
                      <ul className="space-y-1.5 pl-4 list-disc mb-3">
                        {currentPoints.map((p, idx) => (
                          <li key={idx} className="text-[12.5px] text-text-secondary leading-relaxed">
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-2.5 border-t border-border-tertiary/60">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-text-info bg-bg-info/60 border border-text-info/10 px-2 py-0.5 rounded-full">
                          <svg className="w-3 h-3 text-text-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3M15.5 7.5L14 9M18.5 4.5L17 6" />
                          </svg>
                          <span>{dict.adhd.solutionPrefix}: {currentSolution}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeSubTab === 'normal' && (
            <div>
              <InfoBox type="tip">
                <span className="font-semibold">{dict.adhd.neurotypicalHint}:</span> {dict.adhd.neurotypicalHintDesc}
              </InfoBox>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {adhdStudyCardsNormal.map((card) => {
                  const currentTitle = isTr ? card.title.tr : card.title.en;
                  const currentCategory = isTr ? card.category.tr : card.category.en;
                  const currentPoints = isTr ? card.points.tr : card.points.en;
                  return (
                    <div key={card.id} className="border border-border-tertiary rounded-lg p-5 bg-bg-secondary shadow-sm hover:border-border-secondary transition-all">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <h3 className="font-bold text-[14px] text-text-primary">
                          {currentTitle}
                        </h3>
                        <Badge variant="teal">{currentCategory}</Badge>
                      </div>
                      <ul className="space-y-1.5 pl-4 list-disc mb-3">
                        {currentPoints.map((p, idx) => {
                          const isCross = p.startsWith('✗') || p.startsWith('Pitfall:');
                          return (
                            <li 
                              key={idx} 
                              className={`text-[12.5px] leading-relaxed ${isCross ? 'text-red-600 dark:text-red-400 list-none -ml-4' : 'text-text-secondary'}`}
                            >
                              {p}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeSubTab === 'ortak' && (
            <div>
              <InfoBox type="tip">
                <span className="font-semibold">{dict.adhd.universalHint}:</span> {dict.adhd.universalHintDesc}
              </InfoBox>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {adhdStudyCardsOrtak.map((card) => {
                  const currentTitle = isTr ? card.title.tr : card.title.en;
                  const currentCategory = isTr ? card.category.tr : card.category.en;
                  const currentPoints = isTr ? card.points.tr : card.points.en;
                  return (
                    <div key={card.id} className="border border-border-tertiary rounded-lg p-5 bg-bg-secondary shadow-sm hover:border-border-secondary transition-all">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <h3 className="font-bold text-[14px] text-text-primary">
                          {currentTitle}
                        </h3>
                        <Badge variant="blue">{currentCategory}</Badge>
                      </div>
                      <ul className="space-y-1.5 pl-4 list-disc">
                        {currentPoints.map((p, idx) => (
                          <li key={idx} className="text-[12.5px] text-text-secondary leading-relaxed">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      )}

      {/* TAB 3 CONTENT: BEYİN BİLİMSEL HACKLER */}
      {activeTab === 'hackler' && (
        <div className="flex flex-col animate-fadeIn">
          
          {/* Nested Subtabs */}
          <SubTabGroup tabs={hackSubTabs} activeTab={activeHackSubTab} onChange={setActiveHackSubTab} />

          {/* ADVANCED DYNAMIC FILTERING PANEL */}
          <section className="bg-bg-secondary border border-border-tertiary rounded-lg p-4 mb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Evidence Level Filter */}
              <div className="flex items-center gap-2">
                <span className="text-[11.5px] font-bold text-text-tertiary uppercase tracking-wider">
                  {dict.adhd.filters.evidence}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setEvidenceFilter('all')}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded border transition-colors ${
                      evidenceFilter === 'all'
                        ? 'bg-text-info text-white border-transparent'
                        : 'bg-bg-primary text-text-secondary border-border-secondary hover:bg-bg-secondary'
                    }`}
                  >
                    {dict.adhd.filters.all}
                  </button>
                  <button
                    onClick={() => setEvidenceFilter('strong')}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded border transition-colors ${
                      evidenceFilter === 'strong'
                        ? 'bg-text-info text-white border-transparent'
                        : 'bg-bg-primary text-text-secondary border-border-secondary hover:bg-bg-secondary'
                    }`}
                  >
                    {dict.adhd.filters.strong}
                  </button>
                </div>
              </div>

              {/* Speed of Effect Filter */}
              <div className="flex items-center gap-2">
                <span className="text-[11.5px] font-bold text-text-tertiary uppercase tracking-wider">
                  {dict.adhd.filters.speed}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setSpeedFilter('all')}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded border transition-colors ${
                      speedFilter === 'all'
                        ? 'bg-text-info text-white border-transparent'
                        : 'bg-bg-primary text-text-secondary border-border-secondary hover:bg-bg-secondary'
                    }`}
                  >
                    {dict.adhd.filters.allSpeed}
                  </button>
                  <button
                    onClick={() => setSpeedFilter('aninda')}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded border transition-colors ${
                      speedFilter === 'aninda'
                        ? 'bg-text-info text-white border-transparent'
                        : 'bg-bg-primary text-text-secondary border-border-secondary hover:bg-bg-secondary'
                    }`}
                  >
                    {dict.adhd.filters.instant}
                  </button>
                  <button
                    onClick={() => setSpeedFilter('orta-uzun')}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded border transition-colors ${
                      speedFilter === 'orta-uzun'
                        ? 'bg-text-info text-white border-transparent'
                        : 'bg-bg-primary text-text-secondary border-border-secondary hover:bg-bg-secondary'
                    }`}
                  >
                    {dict.adhd.filters.long}
                  </button>
                </div>
              </div>
            </div>

            {/* Total Indicator */}
            <div className="text-[11px] text-text-tertiary font-bold self-end md:self-center bg-bg-primary border border-border-tertiary/60 px-2 py-0.5 rounded">
              {dict.adhd.displayedCount}: {filteredHacks.length} / 15
            </div>
          </section>

          {/* DYNAMIC QUICK GLANCE PANEL */}
          <div className="flex flex-col gap-2 mb-6">
            <span className="text-[12px] font-bold text-text-primary flex items-center gap-1.5">
              <svg className="w-4 h-4 text-text-info shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span>{dict.adhd.quickGlanceTitle}</span>
            </span>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {adhdHacks.map((hack) => {
                const isSelected = activeHackSubTab === hack.category;
                const currentTitle = isTr ? hack.title.tr : hack.title.en;
                return (
                  <div
                    key={hack.id}
                    onClick={() => handleQuickGlanceClick(hack)}
                    className={`border rounded-md p-2.5 text-left cursor-pointer transition-all duration-200 select-none flex flex-col justify-between h-[75px] ${
                      isSelected
                        ? 'bg-bg-info text-text-info border-text-info/30 shadow-xs'
                        : 'bg-bg-secondary text-text-secondary border-border-tertiary hover:border-text-info/30 hover:bg-bg-info/30'
                    }`}
                  >
                    <span className="font-semibold text-[10.5px] leading-tight text-text-primary line-clamp-2">
                      {currentTitle.split(' — ')[0]}
                    </span>
                    <span className="text-[8px] text-text-tertiary font-bold tracking-wider uppercase mt-1">
                      {hack.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* HACK CARD LISTS */}
          <div>
            {activeHackSubTab === 'beslenme' && (
              <InfoBox type="warn">
                <span>{dict.adhd.healthWarning}</span>
              </InfoBox>
            )}

            {filteredHacks.length > 0 ? (
              <div className="flex flex-col">
                {filteredHacks.map((hack) => {
                  const isHighlighted = highlightedCardId === hack.id;
                  const currentTitle = isTr ? hack.title.tr : hack.title.en;
                  const currentMechanism = isTr ? hack.mechanism.tr : hack.mechanism.en;
                  const currentSteps = isTr ? hack.steps.tr : hack.steps.en;
                  const currentBadges = isTr ? hack.badges.tr : hack.badges.en;
                  return (
                    <HackCard
                      key={hack.id}
                      id={hack.id}
                      title={currentTitle}
                      evidence={hack.evidence}
                      speed={hack.speed}
                      badges={currentBadges}
                      mechanism={currentMechanism}
                      steps={currentSteps}
                      source={hack.source}
                      highlighted={isHighlighted}
                      hideLabel={isTr ? 'Mekanizma ve Adımları Gizle' : 'Hide Mechanism & Steps'}
                      showLabel={isTr ? 'Mekanizma ve Adımları Göster' : 'Show Mechanism & Steps'}
                      sourceLabel={isTr ? 'Kaynak' : 'Source'}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="border border-dashed border-border-secondary/60 text-center py-10 rounded-lg text-text-tertiary text-[13px]">
                {dict.adhd.noHacksFound}
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
};
