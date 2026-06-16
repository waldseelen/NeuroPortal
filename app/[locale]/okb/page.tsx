import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Locale, getDictionary } from '@/lib/dictionary';
import { InfoBox } from '@/components/InfoBox';
import { Badge } from '@/components/Badge';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const baseUrl = 'https://mind.bugraakin.com';

  return {
    title: `${dict.okb.title} - NeuroPortal`,
    description: dict.okb.description,
    openGraph: {
      title: `${dict.okb.title} - NeuroPortal`,
      description: dict.okb.description,
      url: `${baseUrl}/${locale}/okb`,
      siteName: 'NeuroPortal',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/okb`,
      languages: {
        tr: `${baseUrl}/tr/okb`,
        en: `${baseUrl}/en/okb`,
      },
    },
  };
}

interface OkbPageProps {
  params: Promise<{ locale: string }>;
}

export default async function OkbPage({ params }: OkbPageProps) {
  const resolvedParams = await params;
  const locale = (resolvedParams.locale as Locale) || 'tr';
  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-col gap-6 md:gap-8 animate-fadeIn">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="teal" className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="8" />
              <circle cx="12" cy="12" r="4.5" strokeDasharray="2,2" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              <circle cx="12" cy="4" r="1.3" fill="currentColor" />
              <circle cx="12" cy="20" r="1.3" fill="currentColor" />
            </svg>
            <span>{locale === 'tr' ? 'Nöro-Bilişsel' : 'Neuro-Cognitive'}</span>
          </Badge>
          <span className="text-[11px] text-text-tertiary font-bold uppercase tracking-wider">
            {locale === 'tr' ? 'Bilişsel Esneklik' : 'Cognitive Flexibility'}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary">
          {dict.okb.title}
        </h1>
        <p className="text-[13px] md:text-[14px] text-text-secondary leading-relaxed max-w-[800px]">
          {dict.okb.description}
        </p>
      </div>

      {/* Cross link */}
      <div className="border border-border-secondary/60 bg-bg-secondary rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[13px]">
        <div className="flex items-start gap-3">
          <span className="text-text-info bg-bg-info/60 border border-text-info/10 p-2 rounded-lg flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
          </span>
          <div>
            <span className="font-semibold text-text-primary">
              {dict.okb.connectionTitle}
            </span>
            <p className="text-text-secondary mt-0.5">
              {dict.okb.connectionDesc}
            </p>
          </div>
        </div>
        <Link
          href={`/${locale}/adhd`}
          className="text-text-info font-bold text-nowrap self-end sm:self-center hover:opacity-85 text-[12px] shrink-0"
        >
          {dict.okb.connectionAction}
        </Link>
      </div>

      {/* Visual OCD Loop Representation */}
      <section className="bg-bg-secondary border border-border-tertiary rounded-lg p-5">
        <h2 className="font-bold text-[15px] text-text-primary mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-text-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10" />
            <path d="M12 6a6 6 0 1 0 6 6" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
          <span>{dict.okb.loopTitle}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
          
          {/* Box 1 */}
          <div className="bg-bg-primary border border-border-tertiary rounded-md p-3.5 relative">
            <Badge variant="red" className="mb-2">{dict.okb.loopObsessionTitle}</Badge>
            <p className="text-[12px] text-text-secondary leading-relaxed font-semibold">
              {dict.okb.loopObsessionDesc}
            </p>
            <div className="text-[11px] text-text-tertiary mt-2">{dict.okb.loopObsessionExample}</div>
          </div>

          {/* Box 2 */}
          <div className="bg-bg-primary border border-border-tertiary rounded-md p-3.5">
            <Badge variant="amber" className="mb-2">{dict.okb.loopAnxietyTitle}</Badge>
            <p className="text-[12px] text-text-secondary leading-relaxed font-semibold">
              {dict.okb.loopAnxietyDesc}
            </p>
            <div className="text-[11px] text-text-tertiary mt-2">{dict.okb.loopAnxietyExample}</div>
          </div>

          {/* Box 3 */}
          <div className="bg-bg-primary border border-border-tertiary rounded-md p-3.5">
            <Badge variant="blue" className="mb-2">{dict.okb.loopCompulsionTitle}</Badge>
            <p className="text-[12px] text-text-secondary leading-relaxed font-semibold">
              {dict.okb.loopCompulsionDesc}
            </p>
            <div className="text-[11px] text-text-tertiary mt-2">{dict.okb.loopCompulsionExample}</div>
          </div>

          {/* Box 4 */}
          <div className="bg-bg-primary border border-border-tertiary rounded-md p-3.5">
            <Badge variant="green" className="mb-2">{dict.okb.loopReliefTitle}</Badge>
            <p className="text-[12px] text-text-secondary leading-relaxed font-semibold">
              {dict.okb.loopReliefDesc}
            </p>
            <div className="text-[11px] text-text-tertiary mt-2">{dict.okb.loopReliefExample}</div>
          </div>

        </div>
      </section>

      {/* Scientific Strategies Panel */}
      <div>
        <h2 className="font-bold text-[15px] text-text-primary mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-text-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>{dict.okb.erpTitle}</span>
        </h2>
        
        <InfoBox type="tip">
          <span className="font-semibold">{dict.okb.erpGoldenRuleTitle}</span>{' '}
          {dict.okb.erpGoldenRuleDesc}
        </InfoBox>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div className="border border-border-tertiary rounded-lg p-5 bg-bg-secondary shadow-sm">
            <h3 className="font-bold text-[14px] text-text-primary mb-2">
              {dict.okb.erpCard1Title}
            </h3>
            <p className="text-[12.5px] text-text-secondary leading-relaxed">
              {dict.okb.erpCard1Desc}
            </p>
          </div>

          <div className="border border-border-tertiary rounded-lg p-5 bg-bg-secondary shadow-sm">
            <h3 className="font-bold text-[14px] text-text-primary mb-2">
              {dict.okb.erpCard2Title}
            </h3>
            <p className="text-[12.5px] text-text-secondary leading-relaxed">
              {dict.okb.erpCard2Desc}
            </p>
          </div>

          <div className="border border-border-tertiary rounded-lg p-5 bg-bg-secondary shadow-sm">
            <h3 className="font-bold text-[14px] text-text-primary mb-2">
              {dict.okb.erpCard3Title}
            </h3>
            <p className="text-[12.5px] text-text-secondary leading-relaxed">
              {dict.okb.erpCard3Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
