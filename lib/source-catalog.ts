import fs from 'node:fs';
import path from 'node:path';

export interface SourceEntry {
  type: string;
  grade: string;
  title: string;
  description: string;
  url: string;
}

export const sourceCopy = {
  en: {
    title: 'Sources & Research Catalog',
    description: 'The complete source catalog supplied with NeuroPortal, preserving the original English titles, descriptions, and direct links.',
    note: 'Source text is kept in its original English form. NeuroPortal adds interface structure around it; it does not silently rewrite or remove source records.',
    sourceLabel: 'Original source',
    openLabel: 'Open source →',
  },
  tr: {
    title: 'Kaynaklar ve Araştırma Kataloğu',
    description: 'NeuroPortal ile birlikte sağlanan tam kaynak kataloğu. Özgün İngilizce başlıklar ve açıklamalar korunur; arayüz Türkçeleştirilir.',
    note: 'Kaynak kayıtlarının İngilizce aslı korunur. Türkçe arayüz ve kısa açıklamalar kaynak metninin yerine geçmez; doğrudan özgün kayda yönlendirir.',
    sourceLabel: 'Özgün kaynak',
    openLabel: 'Kaynağı aç →',
  },
} as const;

export function readSourceEntries(): SourceEntry[] {
  const file = fs.readFileSync(path.join(process.cwd(), 'SOURCES.md'), 'utf8');
  return file
    .split(/\r?\n/)
    .map((line) => {
      const match = line.match(/^\|\s*\*\*(Practice Guide|Intervention Report|Reviews of Individual Studies)\*\*\s*\|\s*\*\*([^*]+)\*\*\s*\|\s*\|\s*\[([^\]]+)\]\((https?:\/\/[^)]+)\)\s*(.*?)\s*\|?\s*$/);
      if (!match) return null;
      return {
        type: match[1],
        grade: match[2].trim(),
        title: match[3].trim(),
        url: match[4].trim(),
        description: match[5].trim(),
      };
    })
    .filter((entry): entry is SourceEntry => entry !== null);
}
