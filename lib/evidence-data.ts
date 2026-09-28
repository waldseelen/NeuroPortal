export type EvidenceProductType = 'practice-guide' | 'intervention-report' | 'individual-study';

export interface EvidenceRecord {
  id: string; productType: EvidenceProductType; population: 'postsecondary' | 'k-12-postsecondary';
  title: { tr: string; en: string }; date: string; summary: { tr: string; en: string };
  relevance: { tr: string; en: string }; sourceUrl: string; tags: string[];
}

export const wwcSnapshot = {
  tr: { description: 'Yapıştırılan WWC arama çıktısındaki Postsecondary sonuçlarının yapısal özeti.', results: '277 Postsecondary sonuç', practiceGuides: '6 Practice Guide', interventionReports: '20 Intervention Report', individualStudies: '251 Individual Study Review', tiers: '55 Tier 1 · 35 Tier 2 · 80 Tier 3 · 3 tiersiz kayıt' },
  en: { description: 'Structural summary of the Postsecondary results in the supplied WWC search export.', results: '277 Postsecondary results', practiceGuides: '6 Practice Guides', interventionReports: '20 Intervention Reports', individualStudies: '251 Individual Study Reviews', tiers: '55 Tier 1 · 35 Tier 2 · 80 Tier 3 · 3 without an assigned tier' }
};

export const evidenceRecords: EvidenceRecord[] = [
  {
    id: 'wwc-organizing-study', productType: 'practice-guide', population: 'k-12-postsecondary', date: '2007',
    title: { tr: 'Organizing Instruction and Study to Improve Student Learning', en: 'Organizing Instruction and Study to Improve Student Learning' },
    summary: { tr: 'Bilim, matematik ve yoğun içerik öğrenimi gerektiren derslerde öğretim ve çalışma zamanının düzenlenmesine yönelik somut eylemler içeren WWC Practice Guide.', en: 'A WWC Practice Guide containing concrete actions for organizing instructional and study time in science, mathematics, and other content-heavy subjects.' },
    relevance: { tr: 'EEE gibi kümülatif ve problem ağırlıklı derslerde çalışma düzenini tasarlamak için doğrudan ilgili bir kaynak.', en: 'Directly relevant when designing study structure for cumulative, problem-heavy courses such as engineering.' },
    sourceUrl: 'https://ies.ed.gov/ncee/WWC/PracticeGuide/1', tags: ['study-structure', 'mathematics', 'science']
  },
  {
    id: 'wwc-technology-learning', productType: 'practice-guide', population: 'postsecondary', date: '2019',
    title: { tr: 'Using Technology to Support Postsecondary Student Learning', en: 'Using Technology to Support Postsecondary Student Learning' },
    summary: { tr: 'Yükseköğretimde teknolojinin öğrenmeyi destekleyecek biçimde kullanımına yönelik beş öneri sunan WWC Practice Guide.', en: 'A WWC Practice Guide with five recommendations for using technology effectively to support learning in postsecondary education.' },
    relevance: { tr: 'NeuroPortal gibi dijital bir öğrenme aracının teknoloji kullanımını pedagojik amaçlarla ilişkilendirmek için temel kaynak.', en: 'A foundation for connecting a digital learning tool such as NeuroPortal to explicit learning purposes.' },
    sourceUrl: 'https://ies.ed.gov/ncee/WWC/PracticeGuide/25', tags: ['technology', 'postsecondary', 'digital-learning']
  },
  {
    id: 'wwc-advising', productType: 'practice-guide', population: 'postsecondary', date: '2021',
    title: { tr: 'Effective Advising for Postsecondary Students', en: 'Effective Advising for Postsecondary Students' },
    summary: { tr: 'Öğrencilerin eğitimsel başarısını desteklemek için kapsamlı ve bütünleşik akademik danışmanlık tasarımına yönelik dört kanıt-temelli öneri içerir.', en: 'Provides four evidence-based recommendations for designing and delivering comprehensive, integrated advising to support postsecondary students.' },
    relevance: { tr: 'Kişisel çalışma planı, hedef takibi ve akademik karar desteği gibi gelecekteki özellikler için referans.', en: 'A reference for future features around study planning, goal tracking, and academic decision support.' },
    sourceUrl: 'https://ies.ed.gov/ncee/WWC/PracticeGuide/28', tags: ['advising', 'planning', 'postsecondary']
  },
  {
    id: 'wwc-developmental-education', productType: 'practice-guide', population: 'postsecondary', date: '2016',
    title: { tr: 'Strategies for Postsecondary Students in Developmental Education', en: 'Strategies for Postsecondary Students in Developmental Education' },
    summary: { tr: 'Akademik olarak hazırlıksız öğrencilerin başarısını desteklemek için altı kanıt-temelli öneri ve uygulama kontrol listeleri sunar.', en: 'Provides six evidence-based recommendations and implementation checklists for supporting academically underprepared postsecondary students.' },
    relevance: { tr: 'Öğrenme desteğinin teknik seçiminden çok uygulama koşullarının da önemli olduğunu göstermek için kullanılabilir.', en: 'Useful for showing that learning support depends on implementation conditions as well as technique selection.' },
    sourceUrl: 'https://ies.ed.gov/ncee/WWC/PracticeGuide/23', tags: ['implementation', 'postsecondary', 'support']
  },
  {
    id: 'wwc-ipass', productType: 'individual-study', population: 'postsecondary', date: '2020',
    title: { tr: 'Using Technology to Redesign College Advising and Student Support (iPASS)', en: 'Using Technology to Redesign College Advising and Student Support (iPASS)' },
    summary: { tr: 'WWC çıktısındaki randomize değerlendirmede güçlendirilmiş iPASS hizmetleri standart hizmetlerle karşılaştırılmış; iletişim ve danışman temasında değişiklikler görülürken akademik sonuçlarda olumlu etki bulunmamıştır.', en: 'The supplied WWC export describes a randomized evaluation of enhanced iPASS services versus standard services; communication and advising contact changed, but academic outcomes did not improve.' },
    relevance: { tr: 'Dijital özellik eklemek ile akademik sonuç üretmek arasındaki farkı NeuroPortal tasarımında görünür tutmak için önemli bir karşı örnek.', en: 'An important counterexample: adding a digital feature is not equivalent to demonstrating an academic outcome.' },
    sourceUrl: 'https://ies.ed.gov/ncee/WWC/Study/90086', tags: ['technology', 'advising', 'RCT', 'implementation']
  }
];
