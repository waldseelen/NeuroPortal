import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/lib/dictionary';
import { EvidenceDashboard } from '@/components/EvidenceDashboard';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://mind.bugraakin.com';
  const title = locale === 'tr' ? 'Kanıt Haritası - NeuroPortal' : 'Evidence Map - NeuroPortal';
  const description = locale === 'tr' ? 'What Works Clearinghouse kaynaklarından oluşturulan Postsecondary kanıt haritası ve araştırma bağlamı.' : 'A postsecondary evidence map and research context built from supplied What Works Clearinghouse results.';
  return {
    title, description,
    openGraph: { title, description, url: baseUrl + '/' + locale + '/evidence', siteName: 'NeuroPortal', locale: locale === 'tr' ? 'tr_TR' : 'en_US', type: 'website' },
    alternates: { canonical: baseUrl + '/' + locale + '/evidence', languages: { tr: baseUrl + '/tr/evidence', en: baseUrl + '/en/evidence' } }
  };
}

export default async function EvidencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <EvidenceDashboard locale={(locale as Locale) || 'tr'} />;
}
