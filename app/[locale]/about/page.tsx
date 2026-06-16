import React from 'react';
import type { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/dictionary';
import { Badge } from '@/components/Badge';
import { academicReferences, academicVision } from '@/lib/technics-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://mind.bugraakin.com';

  const title = locale === 'tr'
    ? 'Hakkında - NeuroPortal Proje Künyesi ve Bilimsel Çerçeve'
    : 'About - NeuroPortal Project Credits & Scientific Framework';
  const description = locale === 'tr'
    ? 'NeuroPortal vizyonu, misyonu ve 20+ akademik referansla bilimsel kaynakçası.'
    : 'NeuroPortal vision, mission and bibliography with 20+ academic references.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/about`,
      siteName: 'NeuroPortal',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        tr: `${baseUrl}/tr/about`,
        en: `${baseUrl}/en/about`,
      },
    },
  };
}

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const resolvedParams = await params;
  const locale = (resolvedParams.locale as Locale) || 'tr';
  const dict = await getDictionary(locale);

  const isTr = locale === 'tr';
  const activeVision = isTr ? academicVision.tr : academicVision.en;

  return (
    <div className="flex flex-col gap-6 md:gap-8 animate-fadeIn">
      
      {/* Title */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="blue" className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 20V4l12 16V4" />
              <circle cx="6" cy="4" r="1.3" fill="currentColor" />
              <circle cx="6" cy="20" r="1.3" fill="currentColor" />
              <circle cx="18" cy="4" r="1.3" fill="currentColor" />
              <circle cx="18" cy="20" r="1.3" fill="currentColor" />
            </svg>
            <span>{isTr ? 'Bilimsel Künye' : 'Scientific Credits'}</span>
          </Badge>
          <span className="text-[11px] text-text-tertiary font-bold uppercase tracking-wider">
            {isTr ? 'Proje Felsefesi & Kaynakça' : 'Project Philosophy & Bibliography'}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary">
          {isTr ? 'NeuroPortal Proje Künyesi ve Bilimsel Çerçeve' : 'NeuroPortal Project Credits & Scientific Framework'}
        </h1>
        <p className="text-[13px] md:text-[14px] text-text-secondary leading-relaxed max-w-[800px]">
          {isTr
            ? 'NeuroPortal, nörogelişimsel farklılıklar ve akademik verimlilik üzerine yayınlanmış en güncel hakemli makalelerin sentezidir.'
            : 'NeuroPortal is a synthesis of the latest peer-reviewed literature on neurodevelopmental profiles and academic productivity.'}
        </p>
      </div>

      {/* Vision & Mission Deep Section */}
      <section className="bg-gradient-to-r from-bg-secondary to-bg-info/30 border border-border-tertiary rounded-lg p-6">
        <h2 className="font-extrabold text-[16px] text-text-primary mb-4 flex items-center gap-2 border-b border-border-tertiary pb-2.5">
          <svg className="w-5 h-5 text-text-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
          <span>{isTr ? 'Vizyonumuz ve Misyonumuz' : 'Our Vision & Our Mission'}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[13px] leading-relaxed">
          <div className="flex flex-col gap-2 bg-bg-primary/70 p-5 rounded-md border border-border-tertiary/40">
            <span className="font-bold text-[14px] text-text-info block border-b border-border-tertiary/20 pb-1 mb-1">
              {isTr ? 'Vizyonumuz' : 'Our Vision'}
            </span>
            <p className="text-text-secondary leading-relaxed">
              {activeVision.vision}
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-bg-primary/70 p-5 rounded-md border border-border-tertiary/40">
            <span className="font-bold text-[14px] text-text-info block border-b border-border-tertiary/20 pb-1 mb-1">
              {isTr ? 'Misyonumuz' : 'Our Mission'}
            </span>
            <p className="text-text-secondary leading-relaxed">
              {activeVision.mission}
            </p>
          </div>
        </div>
      </section>

      {/* EXHAUSTIVE ACADEMIC BIBLIOGRAPHY (KAYNAKÇA) SECTION */}
      <section className="border border-border-tertiary rounded-lg bg-bg-secondary p-6">
        <h2 className="font-extrabold text-[16px] text-text-primary mb-3.5 flex items-center gap-2 border-b border-border-tertiary pb-2.5">
          <svg className="w-5 h-5 text-text-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          <span>{isTr ? "Bilimsel Referanslar ve Akademik Veritabanı" : "Scientific References & Academic Database"}</span>
        </h2>
        <p className="text-[12.5px] text-text-secondary mb-5 leading-relaxed">
          {isTr
            ? "NeuroPortal içerisinde sunulan DEHB dopamin modelleri, OKB ERP stratejileri, Polimatlık T-skala metodolojileri ve Technics çalışma protokolleri, uluslararası hakemli dergilerde yayınlanmış Randomize Kontrollü Çalışmalara (RCT) ve meta-analizlere dayanmaktadır. Orijinal yayınlara doğrudan yönlendiren linkler aşağıda sunulmuştur:"
            : "The ADHD dopamine models, OCD ERP strategies, Polymathy T-scale frameworks, and Technics study protocols presented in NeuroPortal are directly rooted in peer-reviewed meta-analyses and RCTs. Active outward links to original publications are available below:"}
        </p>

        <ul className="space-y-4 pl-0 list-none text-[12.5px]">
          {academicReferences.map((ref, idx) => (
            <li
              key={idx}
              className="pb-3.5 border-b border-border-tertiary/50 last:border-b-0 flex gap-3.5 items-start leading-relaxed text-text-secondary hover:text-text-primary transition-colors"
            >
              <span className="font-bold text-text-tertiary shrink-0 mt-0.5 bg-bg-primary w-6 h-6 border border-border-tertiary rounded flex items-center justify-center text-[10px]">
                {idx + 1}
              </span>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span>{ref.citation}</span>
                <a
                  href={ref.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-info font-bold hover:underline flex items-center gap-0.5 shrink-0"
                >
                  {isTr ? "Yayına Git ↗" : "View Paper ↗"}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
