import rawSources from '../SOURCES.md?raw';

export interface SourceEntry {
  type: string;
  grade: string;
  title: string;
  description: string;
  url: string;
}

export interface SourceCatalog {
  tr: {
    title: string;
    description: string;
    note: string;
    sourceLabel: string;
    openLabel: string;
    entries: SourceEntry[];
  };
  en: {
    title: string;
    description: string;
    note: string;
    sourceLabel: string;
    openLabel: string;
    entries: SourceEntry[];
  };
}

const links = Array.from(rawSources.matchAll(/\*\*(Practice Guide|Intervention Report|Reviews of Individual Studies)\*\*\s*\|\s*\*\*([^*]+)\*\*\s*\|\s*\|\s*\[([^\]]+)\]\((https?:\/\/[^)]+)\)\s*(.*?)(?=\n\|\s*\*\*|$)/gs));

const entries: SourceEntry[] = links.map((m) => ({
  type: m[1],
  grade: m[2].trim(),
  title: m[3].trim(),
  url: m[4].trim(),
  description: m[5].replace(/\s+/g, ' ').trim(),
}));

export const sourceCatalog: SourceCatalog = {
  en: {
    title: 'Sources & Research Catalog',
    description: 'The complete source catalog supplied with NeuroPortal, preserving the original English titles, descriptions, and direct links.',
    note: 'Source text is kept in its original English form. NeuroPortal adds interface structure around it; it does not silently rewrite or remove source records.',
    sourceLabel: 'Original source',
    openLabel: 'Open source →',
    entries,
  },
  tr: {
    title: 'Kaynaklar ve Araştırma Kataloğu',
    description: 'NeuroPortal ile birlikte sağlanan tam kaynak kataloğu. Özgün İngilizce başlıklar ve açıklamalar korunur; arayüz Türkçeleştirilir.',
    note: 'Kaynak kayıtlarının İngilizce aslı korunur. Türkçe arayüz ve kısa açıklamalar kaynak metninin yerine geçmez; doğrudan özgün kayda yönlendirir.',
    sourceLabel: 'Özgün kaynak',
    openLabel: 'Kaynağı aç →',
    entries,
  },
};
