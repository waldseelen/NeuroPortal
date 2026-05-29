import React from 'react';
import Link from 'next/link';
import { Locale, getDictionary } from '@/lib/dictionary';
import { InfoBox } from '@/components/InfoBox';
import { Badge } from '@/components/Badge';

interface PolimatlikPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PolimatlikPage({ params }: PolimatlikPageProps) {
  const resolvedParams = await params;
  const locale = (resolvedParams.locale as Locale) || 'tr';
  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-col gap-6 md:gap-8 animate-fadeIn">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="purple" className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 20V4h6a5 5 0 0 1 0 10H7" />
              <path d="M12 4l5 5-5 5" strokeWidth="1.5" />
              <circle cx="7" cy="4" r="1.3" fill="currentColor" />
              <circle cx="7" cy="14" r="1.3" fill="currentColor" />
              <circle cx="7" cy="20" r="1.3" fill="currentColor" />
              <circle cx="13" cy="4" r="1.3" fill="currentColor" />
              <circle cx="13" cy="14" r="1.3" fill="currentColor" />
            </svg>
            <span>{locale === 'tr' ? 'Disiplinlerarası' : 'Interdisciplinary'}</span>
          </Badge>
          <span className="text-[11px] text-text-tertiary font-bold uppercase tracking-wider">
            {locale === 'tr' ? 'Bilişsel Sentez' : 'Cognitive Synthesis'}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary">
          {dict.polimatlik.title}
        </h1>
        <p className="text-[13px] md:text-[14px] text-text-secondary leading-relaxed max-w-[800px]">
          {dict.polimatlik.description}
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
              {dict.polimatlik.connectionTitle}
            </span>
            <p className="text-text-secondary mt-0.5">
              {dict.polimatlik.connectionDesc}
            </p>
          </div>
        </div>
        <Link
          href={`/${locale}/adhd`}
          className="text-text-info font-bold text-nowrap self-end sm:self-center hover:opacity-85 text-[12px] shrink-0"
        >
          {dict.polimatlik.connectionAction}
        </Link>
      </div>

      {/* T-Shaped Skills Model Visual */}
      <section className="bg-bg-secondary border border-border-tertiary rounded-lg p-5">
        <h2 className="font-bold text-[15px] text-text-primary mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-text-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
          <span>{dict.polimatlik.tshapedTitle}</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {/* Horizontal bar */}
          <div className="flex-1 bg-bg-primary border border-border-tertiary rounded-md p-4 flex flex-col justify-between">
            <div>
              <Badge variant="blue" className="mb-2">{dict.polimatlik.tshapedHorizontalTitle}</Badge>
              <h3 className="font-bold text-[13px] text-text-primary mt-1">
                {dict.polimatlik.tshapedHorizontalSubtitle}
              </h3>
              <p className="text-[12px] text-text-secondary leading-relaxed mt-2">
                {dict.polimatlik.tshapedHorizontalDesc}
              </p>
            </div>
            <div className="text-[11px] text-text-tertiary mt-3">{dict.polimatlik.tshapedHorizontalExample}</div>
          </div>

          {/* Vertical bar */}
          <div className="flex-1 bg-bg-primary border border-border-tertiary rounded-md p-4 flex flex-col justify-between">
            <div>
              <Badge variant="purple" className="mb-2">{dict.polimatlik.tshapedVerticalTitle}</Badge>
              <h3 className="font-bold text-[13px] text-text-primary mt-1">
                {dict.polimatlik.tshapedVerticalSubtitle}
              </h3>
              <p className="text-[12px] text-text-secondary leading-relaxed mt-2">
                {dict.polimatlik.tshapedVerticalDesc}
              </p>
            </div>
            <div className="text-[11px] text-text-tertiary mt-3">{dict.polimatlik.tshapedVerticalExample}</div>
          </div>
        </div>
      </section>

      {/* Polymathic Learning Framework */}
      <div>
        <h2 className="font-bold text-[15px] text-text-primary mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-text-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          <span>{dict.polimatlik.synthesisTitle}</span>
        </h2>
        
        <InfoBox type="tip">
          <span className="font-semibold">{dict.polimatlik.synthesisGoldenRuleTitle}</span>{' '}
          {dict.polimatlik.synthesisGoldenRuleDesc}
        </InfoBox>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div className="border border-border-tertiary rounded-lg p-5 bg-bg-secondary shadow-sm">
            <h3 className="font-bold text-[14px] text-text-primary mb-2">
              {dict.polimatlik.synthesisCard1Title}
            </h3>
            <p className="text-[12.5px] text-text-secondary leading-relaxed">
              {dict.polimatlik.synthesisCard1Desc}
            </p>
          </div>

          <div className="border border-border-tertiary rounded-lg p-5 bg-bg-secondary shadow-sm">
            <h3 className="font-bold text-[14px] text-text-primary mb-2">
              {dict.polimatlik.synthesisCard2Title}
            </h3>
            <p className="text-[12.5px] text-text-secondary leading-relaxed">
              {dict.polimatlik.synthesisCard2Desc}
            </p>
          </div>

          <div className="border border-border-tertiary rounded-lg p-5 bg-bg-secondary shadow-sm">
            <h3 className="font-bold text-[14px] text-text-primary mb-2">
              {dict.polimatlik.synthesisCard3Title}
            </h3>
            <p className="text-[12.5px] text-text-secondary leading-relaxed">
              {dict.polimatlik.synthesisCard3Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
