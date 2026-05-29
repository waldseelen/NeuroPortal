'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TabGroup, TabItem } from './TabGroup';
import { Badge } from './Badge';
import { InfoBox } from './InfoBox';
import { Locale } from '@/lib/dictionary';
import {
  academicTechniques,
  AcademicTechnique,
} from '@/lib/technics-data';

interface TechnicsDashboardProps {
  dict: any;
  locale: Locale;
}

export const TechnicsDashboard: React.FC<TechnicsDashboardProps> = ({ dict, locale }) => {
  const [activeTab, setActiveTab] = useState('techniques');
  const [expandedTechId, setExpandedTechId] = useState<string | null>(null);

  const isTr = locale === 'tr';

  const mainTabs: TabItem[] = [
    { id: 'techniques', label: isTr ? 'Bilimsel Çalışma Teknikleri' : 'Scientific Study Techniques' },
    { id: 'schedule', label: isTr ? '2 Haftalık Uygulama Planı' : '2-Week Action Plan' },
  ];

  const toggleTechCollapse = (id: string) => {
    if (expandedTechId === id) {
      setExpandedTechId(null);
    } else {
      setExpandedTechId(id);
    }
  };

  // Localized days of the week
  const days = {
    monday: isTr ? 'Pazartesi' : 'Monday',
    tuesday: isTr ? 'Salı' : 'Tuesday',
    wednesday: isTr ? 'Çarşamba' : 'Wednesday',
    thursday: isTr ? 'Perşembe' : 'Thursday',
    friday: isTr ? 'Cuma' : 'Friday',
    saturday: isTr ? 'Cumartesi' : 'Saturday',
    sunday: isTr ? 'Pazar' : 'Sunday',
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="blue" className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M12 6v14" />
              <path d="M8 6l4 4 4-4" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="1.8" fill="currentColor" />
              <circle cx="4" cy="6" r="1.3" fill="currentColor" />
              <circle cx="20" cy="6" r="1.3" fill="currentColor" />
              <circle cx="12" cy="20" r="1.3" fill="currentColor" />
            </svg>
            <span>{isTr ? 'Akademik & Bilimsel' : 'Academic & Scientific'}</span>
          </Badge>
          <span className="text-[11px] text-text-tertiary font-bold uppercase tracking-wider">
            {isTr ? 'Kanıt Temelli Metotlar' : 'Evidence-Based Methods'}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary">
          {isTr ? 'Technics: İleri Düzey Çalışma Teknikleri Sentezi' : 'Technics: Advanced Study Techniques Synthesis'}
        </h1>
        <p className="text-[13px] md:text-[14px] text-text-secondary leading-relaxed max-w-[800px]">
          {isTr
            ? 'Mühendislik ve STEM derslerinde bilişsel performansı maksimize ettiği kontrollü deneyler (RCT) ve meta-analizler ile kanıtlanmış akademik çalışma protokolleri.'
            : 'Academic learning protocols proven by Randomized Controlled Trials (RCTs) and meta-analyses to maximize cognitive performance in STEM and engineering courses.'}
        </p>
      </div>

      {/* Cross links */}
      <div className="border border-border-secondary/60 bg-bg-secondary rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[13px] animate-fadeIn">
        <div className="flex items-start gap-3">
          <span className="text-text-info bg-bg-info/60 border border-text-info/10 p-2 rounded-lg flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
          </span>
          <div>
            <span className="font-semibold text-text-primary">
              {isTr ? 'DEHB Bağlantısı: Uyarım vs. Yapısal Yakıt' : 'ADHD Link: Stimulation vs. Structured Fuel'}
            </span>
            <p className="text-text-secondary mt-0.5">
              {isTr
                ? 'Bu akademik teknikler, DEHB sayfamızda ele alınan dopaminerjik "INCUP" motivasyon modelleri ve gamifikasyon (XP, quest) iskeleleriyle mükemmel bir sinerji oluşturur.'
                : 'These rigorous academic techniques synergize perfectly with the dopamine-driven "INCUP" models and gamification strategies detailed in our ADHD page.'}
            </p>
          </div>
        </div>
        <Link
          href={`/${locale}/adhd`}
          className="text-text-info font-bold text-nowrap self-end sm:self-center hover:opacity-85 text-[12px] shrink-0"
        >
          {isTr ? '→ DEHB Sayfasına Git' : '→ Go to ADHD Page'}
        </Link>
      </div>

      {/* Navigation tabs inside page */}
      <div className="border-b border-border-tertiary pb-1">
        <TabGroup tabs={mainTabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* TAB 1: ADVANCED COGNITIVE TECHNIQUES */}
      {activeTab === 'techniques' && (
        <div className="flex flex-col gap-5 animate-fadeIn">
          <InfoBox type="tip">
            <strong>{isTr ? 'Bilişsel Altın Kural:' : 'Cognitive Principle:'}</strong>{' '}
            {isTr
              ? 'Öğrenme sürecinin verimli hissettirmesi (fluency illusion) genellikle gerçek öğrenmenin düşük olduğuna işarettir. Gerçek uzun vadeli kalıcılık, "arzulanan zorluk" (desirable difficulty) oluşturan metotlarla sağlanır.'
              : 'The feeling of smooth, effortless studying (fluency illusion) is often an indicator of shallow learning. True long-term memory consolidation thrives on "desirable difficulty".'}
          </InfoBox>

          {/* Terminology Glossary Guide */}
          <div className="border border-border-tertiary bg-bg-secondary rounded-lg p-4 animate-fadeIn transition-all">
            <details className="group" open>
              <summary className="font-bold text-[13px] text-text-primary cursor-pointer select-none flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-text-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1" />
                    <path d="M9 14h2M9 10h2M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1-1v3" />
                  </svg>
                  <span>{isTr ? 'Bilişsel Metrikler ve İstatistik Terimleri Sözlüğü (d, SMD, OR Nedir?)' : 'Glossary of Cognitive Metrics (What are d, SMD, OR?)'}</span>
                </span>
                <span className="text-[11px] text-text-info group-open:hidden">{isTr ? 'Genişlet' : 'Expand'}</span>
                <span className="text-[11px] text-text-tertiary hidden group-open:inline">{isTr ? 'Daralt' : 'Collapse'}</span>
              </summary>
              <div className="mt-3.5 pt-3.5 border-t border-border-tertiary/60 grid grid-cols-1 md:grid-cols-3 gap-5 text-[12px] leading-relaxed text-text-secondary">
                <div className="bg-bg-primary/50 p-3 rounded-md border border-border-tertiary/20">
                  <span className="font-bold text-text-primary block mb-1">
                    {isTr ? "Cohen's d (Etki Büyüklüğü):" : "Cohen's d (Effect Size):"}
                  </span>
                  {isTr 
                    ? "İki yöntem veya grup arasındaki başarı farkını standart sapma cinsinden ölçer. d = 0.20 küçük, d = 0.50 orta, d = 0.80+ ise çok güçlü bir akademik gelişim etkisini temsil eder."
                    : "Measures the difference between two study methods in standard deviations. d = 0.20 is small, d = 0.50 is medium, and d = 0.80+ represents a very powerful learning effect."}
                </div>
                <div className="bg-bg-primary/50 p-3 rounded-md border border-border-tertiary/20">
                  <span className="font-bold text-text-primary block mb-1">
                    {isTr ? "SMD (Standartlaştırılmış Ortalama Fark):" : "SMD (Standardized Mean Difference):"}
                  </span>
                  {isTr 
                    ? "Farklı çalışmaların ve ölçeklerin sonuçlarını ortak bir paydada birleştirerek karşılaştırmamızı sağlayan etki büyüklüğü metriğidir (Cohen's d ile benzer yorumlanır)."
                    : "Standardized Mean Difference. A metric that aggregates study results across different trials and scales onto a common denominator for unified effect comparison."}
                </div>
                <div className="bg-bg-primary/50 p-3 rounded-md border border-border-tertiary/20">
                  <span className="font-bold text-text-primary block mb-1">
                    {isTr ? "OR (Odds Ratio / Olasılıklar Oranı):" : "OR (Odds Ratio):"}
                  </span>
                  {isTr 
                    ? "Bir davranış veya metodun başarı olasılığını kaç kat artırdığını gösterir. Örn: OR = 2.09, aralıklı tekrar yapanların tıp sınavını geçme şansının 2 katından fazla olduğunu ifade eder."
                    : "Odds Ratio. Measures the odds of success when using a protocol versus not. For example, OR = 2.09 means spaced repetition users have over 2x higher odds of passing."}
                </div>
              </div>
            </details>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {academicTechniques.map((tech) => {
              const isExpanded = expandedTechId === tech.id;
              const currentTitle = isTr ? tech.title.tr : tech.title.en;
              const currentEvidenceBasis = isTr ? tech.evidenceBasis.tr : tech.evidenceBasis.en;
              const currentEffectSize = isTr ? tech.effectSize.tr : tech.effectSize.en;
              const currentWorkedExample = isTr ? tech.workedExample.tr : tech.workedExample.en;
              const currentProtocol = isTr ? tech.protocol.tr : tech.protocol.en;
              const currentMechanism = isTr ? tech.mechanism.tr : tech.mechanism.en;
              const currentLimitations = isTr ? tech.limitations.tr : tech.limitations.en;

              return (
                <div
                  key={tech.id}
                  id={tech.id}
                  className="border border-border-tertiary rounded-lg p-5 bg-bg-secondary hover:border-border-secondary transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="font-extrabold text-[15px] text-text-primary">
                      {currentTitle}
                    </h3>
                    <Badge variant={tech.category === 'strategic' ? 'blue' : 'teal'}>
                      {tech.category === 'strategic' ? (isTr ? 'Bilişsel Strateji' : 'Cognitive Strategy') : (isTr ? 'Disiplin & Alışkanlık' : 'Discipline & Habit')}
                    </Badge>
                  </div>

                  <p className="text-[13px] text-text-secondary leading-relaxed mb-3">
                    <span className="font-semibold text-text-primary">{isTr ? 'Bilimsel Dayanak: ' : 'Scientific Basis: '}</span>
                    {currentEvidenceBasis}
                  </p>

                  <div className="bg-bg-primary border border-border-tertiary/60 p-3 rounded-md mb-4">
                    <span className="text-[11px] font-bold text-text-tertiary uppercase tracking-wider block mb-1">
                      {isTr ? 'ÖLÇÜLMÜŞ ETKİ BOYUTU' : 'MEASURED EFFECT SIZE'}
                    </span>
                    <p className="text-[12.5px] text-text-info font-semibold leading-relaxed">
                      {currentEffectSize}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleTechCollapse(tech.id)}
                    className="flex items-center gap-1 text-[12px] font-bold text-text-info hover:opacity-85 focus:outline-none transition-opacity py-1"
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
                      className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    {isExpanded ? (isTr ? 'Protokol ve Detayları Gizle' : 'Hide Protocol & Details') : (isTr ? 'Protokol ve Detayları Göster' : 'Show Protocol & Details')}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {/* Worked Example */}
                    <div className="mb-4">
                      <span className="text-[11px] font-bold text-text-tertiary uppercase tracking-wider block mb-1">
                        {isTr ? 'NİCEL / MÜHENDİSLİK DERSİ UYARLAMASI' : 'QUANTITATIVE / STEM ADAPTATION'}
                      </span>
                      <p className="text-[12.5px] text-text-secondary leading-relaxed bg-bg-primary border border-border-tertiary/60 p-3 rounded-md italic">
                        {currentWorkedExample}
                      </p>
                    </div>

                    {/* Protocol */}
                    <div className="mb-4">
                      <span className="text-[11px] font-bold text-text-tertiary uppercase tracking-wider block mb-1.5">
                        {isTr ? 'UYGULAMA PROTOKOLÜ' : 'ACTIONABLE APPLICATION PROTOCOL'}
                      </span>
                      <ul className="space-y-1.5 list-none pl-0">
                        {currentProtocol.map((step, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start text-[12.5px] text-text-secondary leading-relaxed">
                            <span className="bg-bg-primary text-text-tertiary text-[10px] font-bold w-5 h-5 rounded border border-border-tertiary flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mechanism */}
                    <div className="mb-4">
                      <span className="text-[11px] font-bold text-text-tertiary uppercase tracking-wider block mb-1">
                        {isTr ? 'NEDEN İŞE YARIYOR? (NÖRO-BİLİŞSEL MEKANİZMA)' : 'WHY IT WORKS (NEURO-COGNITIVE MECHANISM)'}
                      </span>
                      <p className="text-[12.5px] text-text-secondary leading-relaxed">
                        {currentMechanism}
                      </p>
                    </div>

                    {/* Limitations */}
                    <div className="mb-3">
                      <span className="text-[11px] font-bold text-text-tertiary uppercase tracking-wider block mb-1">
                        {isTr ? 'SINIRLAR & HANGİ DURUMDA ÇALIŞMAZ?' : 'LIMITATIONS & FAIL SAFE CONDITIONS'}
                      </span>
                      <p className="text-[12.5px] text-text-secondary leading-relaxed text-red-600 dark:text-red-400">
                        {currentLimitations}
                      </p>
                    </div>

                    {/* References tags */}
                    <div className="pt-3 border-t border-border-tertiary/60 text-[11px] text-text-tertiary">
                      <strong>Citations:</strong> {tech.sources.join(' · ')}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: Actionable 2-Week Plan */}
      {activeTab === 'schedule' && (
        <div className="flex flex-col gap-5 animate-fadeIn">
          <InfoBox type="tip">
            {isTr
              ? 'Aşağıdaki plan, en yüksek akademik getiriye sahip 5 yöntemi (Aralıklı Tekrar, Geri Getirme, Karışık Alıştırma, If-Then Planları ve Formatif Test) bir araya getirerek 14 günlük net bir uygulanabilir takvim sunmaktadır.'
              : 'This actionable schedule integrates Spaced Repetition, Retrieval, Interleaving, If-Then plans, and Formative Tests into a highly effective 14-day protocol.'}
          </InfoBox>

          <div className="border border-border-tertiary rounded-lg overflow-hidden bg-bg-secondary">
            {/* Week 1 */}
            <div className="p-4 bg-bg-primary border-b border-border-tertiary">
              <h3 className="font-extrabold text-[14px] text-text-info">
                {isTr ? 'HAFTA 1: Altyapı ve İvme Kazanma' : 'WEEK 1: Foundation & Momentum'}
              </h3>
            </div>
            <div className="divide-y divide-border-tertiary/60 text-[12.5px]">
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.monday}</span>
                <span className="text-text-secondary">
                  {isTr 
                    ? 'Yeni konu çalış + Geri Getirme (Kitap kapalı, 20 dk kavramları yaz ve doğru notlarla eşleştir).'
                    : 'Study new topic + Retrieval Practice (Book closed, write down key concepts for 20 mins and align with official notes).'}
                </span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.tuesday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? 'Aralıklı Tekrar 1 (Dünkü konudan 2 zor örnek problem çöz, 20 dk).'
                    : 'Spaced Repetition 1 (Solve 2 hard practice problems from yesterday\'s topic, 20 mins).'}
                </span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.wednesday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? 'Karışık Alıştırma (Farklı ünitelerden 3 problem seç, ardı ardına çözerek stratejilerini kıyasla, 45 dk).'
                    : 'Interleaved Practice (Select 3 problems from different units, solve consecutively to compare strategic formulations, 45 mins).'}
                </span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.thursday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? 'If-Then planı yaz (5 dk), ardından telefon sessizde 2x25 dk Pomodoro ile derin çalışma.'
                    : 'Write an If-Then plan (5 mins), then run 2x25 min deep study Pomodoros with the phone completely silenced.'}
                </span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.friday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? 'Mini Formatif Quiz (10 problem, not kapalı) + Hızlı Geri Bildirim (Yanlışları kırmızı kalemle analiz et, 50 dk).'
                    : 'Mini Formative Quiz (10 problems, book closed) + Immediate Feedback (Analyze mistakes in red ink, 50 mins).'}
                </span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.saturday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? 'Haftalık Sentez (Öğrenilenleri 12 yaşındaki birine anlatır gibi ses kaydı al - Feynman Metodu).'
                    : 'Weekly Synthesis (Record an explanation of what was learned as if explaining to a 12-year-old - Feynman Method).'}
                </span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.sunday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? 'Dijital Detoks ve Değerlendirme (Sosyal medya max 30 dk, zihinsel dinlenme).'
                    : 'Digital Detox & Review (Social media usage under 30 mins, cognitive rest and stabilization).'}
                </span>
              </div>
            </div>

            {/* Week 2 */}
            <div className="p-4 bg-bg-primary border-t border-b border-border-tertiary">
              <h3 className="font-extrabold text-[14px] text-text-info">
                {isTr ? 'HAFTA 2: Derinleşme ve Konsolidasyon' : 'WEEK 2: Deepening & Consolidation'}
              </h3>
            </div>
            <div className="divide-y divide-border-tertiary/60 text-[12.5px]">
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.monday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? 'Geçen haftanın konusu için Aralıklı Tekrar 2 (15 dk flashcard testi) + Yeni konu başlangıcı.'
                    : 'Spaced Repetition 2 for last week\'s topic (15 mins flashcard review) + Initiate new study module.'}
                </span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.tuesday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? 'Gelişmiş Karışık Alıştırma (4 farklı problem tipini rastgele sırayla süre tutarak çöz).'
                    : 'Advanced Interleaved Practice (Solve 4 different types of problems in randomized order under a timer).'}
                </span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.wednesday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? '3x25 dk Pomodoro ile derin odaklanma + Molalarda ekransız esneme hareketleri.'
                    : 'Deep focus sessions with 3x25 min Pomodoro blocks + screen-free light stretching during breaks.'}
                </span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.thursday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? 'Zor kavramlar için Elaborative Interrogation (Kendine "Neden bu formül doğru?" diye 3 kademeli soru sor).'
                    : 'Elaborative Interrogation for complex formulas (Ask yourself "Why is this equation structurally correct?" across 3 conceptual layers).'}
                </span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.friday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? 'Haftalık Quiz + Geri Bildirim oturumu (Hata analiz günlüğüne yeni kayıt ekle).'
                    : 'Weekly Quiz + explanatory feedback session (Log new records in your Error Analysis Journal).'}
                </span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.saturday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? 'Çözüm Yöntemlerini Kıyaslama (Aynı problemi düğüm analizi ve göz akımıyla yan yana çözüp analiz et).'
                    : 'Comparing Solution Formularies (Solve the same STEM problem side-by-side using two separate analytical methods and compare).'}
                </span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row gap-2.5">
                <span className="font-bold text-text-primary w-24 shrink-0">{days.sunday}</span>
                <span className="text-text-secondary">
                  {isTr
                    ? 'Gelecek haftanın If-Then planlarını ve WOOP şablonlarını hazırlama (15 dk).'
                    : 'Prepare If-Then action plans and WOOP blueprints for the upcoming week (15 mins).'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QUICK LINK TO FULL SCIENTIFIC BIBLIOGRAPHY */}
      <section className="border border-border-tertiary bg-bg-secondary/40 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[13px] animate-fadeIn mt-4">
        <div className="flex items-start gap-3">
          <span className="text-text-info bg-bg-info/60 border border-text-info/10 p-2 rounded-lg flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </span>
          <div>
            <span className="font-semibold text-text-primary">
              {isTr ? 'Akademik Doğrulama & Kaynakça' : 'Academic Verification & Bibliography'}
            </span>
            <p className="text-text-secondary mt-0.5">
              {isTr
                ? 'Bu çalışmada kullanılan tüm teknikler uluslararası hakemli STEM dergilerindeki makalelere dayanmaktadır. Detaylı literatür listesini görmek için künye sayfamızı ziyaret edin.'
                : 'All techniques are grounded in publications inside international peer-reviewed STEM journals. Visit our bibliography page to view the exhaustive database.'}
            </p>
          </div>
        </div>
        <Link
          href={`/${locale}/about`}
          className="px-4 py-2 bg-bg-primary border border-border-secondary hover:border-text-info hover:text-text-info text-text-primary text-[12px] font-bold rounded-full shadow-xs transition-all duration-150 flex items-center gap-1 shrink-0"
        >
          {isTr ? 'Künye ve Kaynakça Sayfası →' : 'Credits & Bibliography Page →'}
        </Link>
      </section>
    </div>
  );
};
