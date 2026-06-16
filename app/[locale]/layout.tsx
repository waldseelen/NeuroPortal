import React from 'react';
import type { Metadata } from 'next';
import { Locale, getDictionary } from '@/lib/dictionary';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import '../globals.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const siteName = 'NeuroPortal';

  if (locale === 'en') {
    return {
      title: `${siteName} - ADHD, OCD & Polymathy Guide`,
      description: 'A science-based practical study guide and neuroscientific hacks for ADHD, OCD, Polymathy, and academic productivity.',
    };
  }

  return {
    title: `${siteName} - DEHB, OKB ve Polimatlık Rehberi`,
    description: 'DEHB (ADHD), OKB (OCD) ve Polimatlık üzerine bilimsel temelli pratik çalışma rehberi ve beyin bilimsel hackleri.',
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const resolvedParams = await params;
  const locale = (resolvedParams.locale as Locale) || 'tr';
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className="transition-colors duration-200">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className="bg-bg-primary text-text-primary min-h-screen flex flex-col antialiased">
        <Navbar dict={dict} />
        <main className="flex-1 w-full max-w-[1000px] mx-auto px-4 py-6 md:py-8 transition-colors duration-200">
          <div className="animate-fadeIn">
            {children}
          </div>
        </main>
        <footer className="border-t border-border-tertiary bg-bg-secondary/40 transition-colors duration-200 mt-12 py-6 text-[12px] text-text-secondary">
          <div className="max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-text-tertiary">
              © {new Date().getFullYear()} NeuroPortal. All rights reserved.
            </div>

            {/* Simple footer links */}
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-text-tertiary">
              <Link href={`/${locale}/adhd`} className="hover:text-text-info transition-colors">ADHD</Link>
              <span>·</span>
              <Link href={`/${locale}/okb`} className="hover:text-text-info transition-colors">OCD</Link>
              <span>·</span>
              <Link href={`/${locale}/polimatlik`} className="hover:text-text-info transition-colors">Polymathy</Link>
              <span>·</span>
              <Link href={`/${locale}/technics`} className="hover:text-text-info transition-colors">Technics</Link>
              <span>·</span>
              <Link href={`/${locale}/about`} className="hover:text-text-info transition-colors">{dict.navbar.about}</Link>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}
