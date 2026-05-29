import React from 'react';
import { getDictionary, Locale } from '@/lib/dictionary';
import { AdhdDashboard } from '@/components/AdhdDashboard';

interface AdhdPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AdhdPage({ params }: AdhdPageProps) {
  const resolvedParams = await params;
  const locale = (resolvedParams.locale as Locale) || 'tr';
  const dict = await getDictionary(locale);

  return <AdhdDashboard dict={dict} locale={locale} />;
}
