import React from 'react';
import type { Metadata } from 'next';
import { SourcesDashboard } from '@/components/SourcesDashboard';
import { readSourceEntries, sourceCopy } from '@/lib/source-catalog';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';
  const title = isTr ? 'Kaynaklar ve Araştırma Kataloğu - NeuroPortal' : 'Sources & Research Catalog - NeuroPortal';
  const description = isTr
    ? 'NeuroPortal kaynak kataloğu: özgün İngilizce araştırma kayıtları, açıklamalar ve doğrudan kaynak bağlantıları.'
    : 'NeuroPortal source catalog: original English research records, descriptions, and direct source links.';
  const baseUrl = 'https://mind.bugraakin.com';
  return {
    title,
    description,
    openGraph: { title, description, url: baseUrl + '/' + locale + '/sources', siteName: 'NeuroPortal', locale: isTr ? 'tr_TR' : 'en_US', type: 'website' },
    alternates: { canonical: baseUrl + '/' + locale + '/sources', languages: { tr: baseUrl + '/tr/sources', en: baseUrl + '/en/sources' } }
  };
}

export default async function SourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const normalizedLocale = locale === 'en' ? 'en' : 'tr';
  const entries = readSourceEntries();
  return <SourcesDashboard locale={normalizedLocale} entries={entries} copy={sourceCopy[normalizedLocale]} />;
}
