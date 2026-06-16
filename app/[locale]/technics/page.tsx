import React from 'react';
import type { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/dictionary';
import { TechnicsDashboard } from '@/components/TechnicsDashboard';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const baseUrl = 'https://mind.bugraakin.com';

  const title = locale === 'tr'
    ? 'Bilimsel Çalışma Teknikleri - NeuroPortal'
    : 'Evidence-Based Study Techniques - NeuroPortal';
  const description = locale === 'tr'
    ? 'Aralıklı Tekrar, Geri Çağırma, Interleaving ve daha fazlası. Kanıta dayalı STEM çalışma protokolleri ve 2 haftalık eylem planı.'
    : 'Spaced Repetition, Retrieval Practice, Interleaving and more. Evidence-based STEM study protocols with a 2-week action plan.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/technics`,
      siteName: 'NeuroPortal',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/technics`,
      languages: {
        tr: `${baseUrl}/tr/technics`,
        en: `${baseUrl}/en/technics`,
      },
    },
  };
}

interface TechnicsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TechnicsPage({ params }: TechnicsPageProps) {
  const resolvedParams = await params;
  const locale = (resolvedParams.locale as Locale) || 'tr';
  const dict = await getDictionary(locale);

  return <TechnicsDashboard dict={dict} locale={locale} />;
}
