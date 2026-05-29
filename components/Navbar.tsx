'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { Locale } from '@/lib/dictionary';

interface NavbarProps {
  dict: {
    navbar: {
      adhd: string;
      okb: string;
      polimatlik: string;
      technics: string;
      about: string;
    };
    common: {
      themeToggle: string;
      language: string;
    };
  };
}

export const Navbar: React.FC<NavbarProps> = ({ dict }) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  
  const currentLocale = (params.locale as Locale) || 'tr';
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const changeLanguage = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;
    
    // Replace the locale segment in the pathname
    // pathname format: /tr/adhd or /en/okb
    const segments = pathname.split('/');
    segments[1] = newLocale; // change tr to en or vice-versa
    
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const navItems = [
    { id: 'adhd', label: dict.navbar.adhd, href: `/${currentLocale}/adhd` },
    { id: 'okb', label: dict.navbar.okb, href: `/${currentLocale}/okb` },
    { id: 'polimatlik', label: dict.navbar.polimatlik, href: `/${currentLocale}/polimatlik` },
    { id: 'technics', label: dict.navbar.technics, href: `/${currentLocale}/technics` },
    { id: 'about', label: dict.navbar.about, href: `/${currentLocale}/about` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-primary/80 backdrop-blur-md border-b border-border-tertiary transition-colors duration-200">
      <div className="max-w-[1000px] mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand Logo / Home */}
        <Link 
          href={`/${currentLocale}/adhd`} 
          className="flex items-center gap-2.5 font-bold text-[16px] tracking-tight text-text-primary hover:opacity-90 transition-opacity"
        >
          <svg className="w-6.5 h-6.5 text-text-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M12 6v12" />
            <path d="M8 10c0-2 2-3 4-3s4 1 4 3-2 3-4 3-4-1-4-3z" />
            <circle cx="12" cy="6" r="1.5" fill="currentColor" />
            <circle cx="12" cy="18" r="1.5" fill="currentColor" />
            <circle cx="8" cy="10" r="1.5" fill="currentColor" />
            <circle cx="16" cy="10" r="1.5" fill="currentColor" />
          </svg>
          <span className="hidden sm:inline">NeuroPortal</span>
        </Link>

        {/* Dynamic Route Switching Tabs */}
        <nav className="flex items-center bg-bg-secondary p-1 rounded-full border border-border-tertiary">
          {navItems.map((item) => {
            const isActive = pathname.includes(item.href) || (item.id === 'adhd' && pathname.endsWith(`/${currentLocale}`));
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-bg-primary text-text-info shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Toggles Container */}
        <div className="flex items-center gap-2.5">
          {/* Language Selector Selector */}
          <div className="flex items-center gap-0.5 bg-bg-secondary p-0.5 rounded-lg border border-border-tertiary">
            <button
              onClick={() => changeLanguage('tr')}
              className={`px-2 py-1 text-[11px] font-bold rounded transition-colors ${
                currentLocale === 'tr'
                  ? 'bg-text-info text-white'
                  : 'text-text-secondary hover:bg-bg-primary hover:text-text-primary'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-2 py-1 text-[11px] font-bold rounded transition-colors ${
                currentLocale === 'en'
                  ? 'bg-text-info text-white'
                  : 'text-text-secondary hover:bg-bg-primary hover:text-text-primary'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            title={dict.common.themeToggle}
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-bg-secondary hover:bg-bg-primary border border-border-tertiary text-text-secondary hover:text-text-primary transition-all duration-200"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
