import React from 'react';
import { getDictionary, Locale } from '@/lib/dictionary';
import { TechnicsDashboard } from '@/components/TechnicsDashboard';

interface TechnicsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TechnicsPage({ params }: TechnicsPageProps) {
  const resolvedParams = await params;
  const locale = (resolvedParams.locale as Locale) || 'tr';
  const dict = await getDictionary(locale);

  return <TechnicsDashboard dict={dict} locale={locale} />;
}
