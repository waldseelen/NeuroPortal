import React from 'react';
import type { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/dictionary';
import { AdhdDashboard } from '@/components/AdhdDashboard';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const baseUrl = 'https://mind.bugraakin.com';

  return {
    title: `${dict.adhd.title} - NeuroPortal`,
    description: dict.adhd.desc,
    openGraph: {
      title: `${dict.adhd.title} - NeuroPortal`,
      description: dict.adhd.desc,
      url: `${baseUrl}/${locale}/adhd`,
      siteName: 'NeuroPortal',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/adhd`,
      languages: {
        tr: `${baseUrl}/tr/adhd`,
        en: `${baseUrl}/en/adhd`,
      },
    },
  };
}

interface AdhdPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AdhdPage({ params }: AdhdPageProps) {
  const resolvedParams = await params;
  const locale = (resolvedParams.locale as Locale) || 'tr';
  const dict = await getDictionary(locale);

  return <AdhdDashboard dict={dict} locale={locale} />;
}
