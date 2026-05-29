'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Badge, BadgeVariant } from './Badge';

export interface HackBadge {
  text: string;
  variant: BadgeVariant;
}

export interface HackCardProps {
  id: string;
  title: string;
  evidence: 'strong' | 'medium' | 'weak';
  speed: 'aninda' | 'orta-uzun';
  badges: HackBadge[];
  mechanism: string;
  steps: string[];
  source?: string;
  highlighted?: boolean;
  hideLabel?: string;
  showLabel?: string;
  sourceLabel?: string;
}

export const HackCard: React.FC<HackCardProps> = ({
  id,
  title,
  evidence,
  speed,
  badges,
  mechanism,
  steps,
  source,
  highlighted = false,
  hideLabel = 'Mekanizma ve Adımları Gizle',
  showLabel = 'Mekanizma ve Adımları Göster',
  sourceLabel = 'Kaynak',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // If the parent requests highlights, scroll and expand!
  useEffect(() => {
    if (highlighted && cardRef.current) {
      setIsOpen(true);
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [highlighted]);

  return (
    <div
      ref={cardRef}
      id={id}
      data-evidence={evidence}
      data-speed={speed}
      className={`border rounded-lg p-5 mb-3.5 bg-bg-secondary transition-all duration-300 animate-fadeIn ${
        highlighted
          ? 'border-text-info ring-2 ring-text-info/20 shadow-md scale-[1.01]'
          : 'border-border-tertiary shadow-sm hover:border-border-secondary'
      }`}
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between mb-3">
        <div>
          <h4 className="font-semibold text-[15px] text-text-primary leading-snug">
            {title}
          </h4>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {badges.map((b, idx) => {
              const isInstant = b.text.includes('Anında') || b.text.includes('Instant');
              const isMedium = b.text.includes('Orta Vadeli') || b.text.includes('Medium Term');
              const isLong = b.text.includes('Uzun Vadeli') || b.text.includes('Long Term');

              return (
                <Badge key={idx} variant={b.variant} className="inline-flex items-center gap-1.5">
                  {isInstant && (
                    <svg className="w-3 h-3 text-current shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  )}
                  {isMedium && (
                    <svg className="w-3 h-3 text-current shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 2h14M5 22h14M19 2v4c0 3-2 5-5 7 3 2 5 4 5 7v4M5 2v4c0 3 2 5 5 7-3 2-5 4-5 7v4" />
                    </svg>
                  )}
                  {isLong && (
                    <svg className="w-3 h-3 text-current shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                    </svg>
                  )}
                  <span>{b.text}</span>
                </Badge>
              );
            })}
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-[12px] font-semibold text-text-info hover:opacity-85 focus:outline-none transition-opacity py-1.5"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        {isOpen ? hideLabel : showLabel}
      </button>

      {/* Collapsible Content using smooth Tailwind heights */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-[12px] text-text-secondary leading-relaxed bg-bg-primary p-3 rounded-md border border-border-tertiary/60 mb-3">
          {mechanism}
        </div>
        <ul className="space-y-2 pl-0 list-none mb-3">
          {steps.map((step, idx) => (
            <li
              key={idx}
              className="py-1.5 border-b border-border-tertiary/40 last:border-b-0 text-[13px] text-text-secondary flex gap-3 items-start"
            >
              <span className="font-semibold text-text-tertiary min-w-[18px] bg-bg-primary border border-border-tertiary rounded text-center text-[11px] px-1 py-0.5">
                {idx + 1}
              </span>
              <span className="flex-1 leading-relaxed">{step}</span>
            </li>
          ))}
        </ul>
        {source && (
          <div className="text-[11px] text-text-tertiary mt-3 pt-2.5 border-t border-border-tertiary/60 font-medium">
            {sourceLabel}: {source}
          </div>
        )}
      </div>
    </div>
  );
};
