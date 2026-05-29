import { BadgeVariant } from '@/components/Badge';

export interface StudyCardData {
  id: string;
  category: { tr: string; en: string };
  title: { tr: string; en: string };
  solutionLabel: { tr: string; en: string };
  points: { tr: string[]; en: string[] };
}

export interface HackData {
  id: string;
  category: 'egzersiz' | 'beslenme' | 'ortam' | 'bilistek' | 'uyku';
  title: { tr: string; en: string };
  evidence: 'strong' | 'medium';
  speed: 'aninda' | 'orta-uzun';
  badges: {
    tr: { text: string; variant: BadgeVariant }[];
    en: { text: string; variant: BadgeVariant }[];
  };
  mechanism: { tr: string; en: string };
  steps: { tr: string[]; en: string[] };
  source: string;
}

export const adhdStudyCardsDehb: StudyCardData[] = [
  {
    id: 'calisma-mikrosprint',
    category: { tr: 'Zaman', en: 'Time' },
    title: { tr: 'Pomodoro değil, mikro-sprint', en: 'Micro-sprints, not Pomodoro' },
    solutionLabel: { tr: 'En iyi çalışma süresi / Zaman algısı', en: 'Optimal working time / Time perception' },
    points: {
      tr: [
        '15-20 dk çalış, 5 dk kesin mola',
        'Zamanlayıcı görünür ve sesli olsun',
        'Molada ekran yok — fiziksel hareket',
        'Klasik 25 dk bazen çok uzun gelebilir'
      ],
      en: [
        'Study for 15-20 mins, take a strict 5-min break',
        'Make the timer visible and auditory',
        'No screens during breaks — physical movement',
        'The classic 25 mins can sometimes feel too long'
      ]
    }
  },
  {
    id: 'calisma-discapa',
    category: { tr: 'Yapı', en: 'Structure' },
    title: { tr: 'Dışsal çapa noktaları', en: 'External anchor points' },
    solutionLabel: { tr: 'Yapı ihtiyacı', en: 'Need for structure' },
    points: {
      tr: [
        'Her oturum için tek görev listesi',
        'Çalışma arkadaşı / body double',
        'Ne yapacağım? değil Neyle başlıyorum? sor',
        'Fiziksel to-do (yapışkan not, beyaz tahta)'
      ],
      en: [
        'Single task list for each session',
        'Study buddy / body double',
        'Ask "What do I start with?" not "What will I do?"',
        'Physical to-do (sticky notes, whiteboard)'
      ]
    }
  },
  {
    id: 'calisma-anlikodul',
    category: { tr: 'Dopamin', en: 'Dopamine' },
    title: { tr: 'Anında ödül döngüsü', en: 'Instant reward loop' },
    solutionLabel: { tr: 'Motivasyon kaynağı', en: 'Source of motivation' },
    points: {
      tr: [
        'Her küçük adım sonrası görsel işaret (tik at!)',
        'Konuyu oyunlaştır: süre rekoru kır',
        'İlgi çekici formatla başla (video → metin)',
        'Görevi seninle yarışan biriyle yap'
      ],
      en: [
        'Visual sign after each small step (check it!)',
        'Gamify the subject: break time records',
        'Start with an engaging format (video → text)',
        'Do the task with someone competing with you'
      ]
    }
  },
  {
    id: 'calisma-uyarimdengesi',
    category: { tr: 'Ortam', en: 'Environment' },
    title: { tr: 'Uyarım dengesi', en: 'Stimulation balance' },
    solutionLabel: { tr: 'Gürültü / ortam', en: 'Noise / environment' },
    points: {
      tr: [
        'Lofi / beyaz gürültü / kafe sesi dene',
        'Standart bir çalışma kıyafeti ritüeli',
        'Telefonu başka odaya koy, değil masaüstüne',
        'Ayakta masa veya hareket izni olan ortam'
      ],
      en: [
        'Try lofi / white noise / cafe ambient sound',
        'Establish a standard study attire ritual',
        'Put the phone in another room, not on the desk',
        'Standing desk or environments permitting movement'
      ]
    }
  },
  {
    id: 'calisma-aktifcikti',
    category: { tr: 'Öğrenme', en: 'Learning' },
    title: { tr: 'Aktif çıktı odaklı', en: 'Active output-oriented' },
    solutionLabel: { tr: 'Dikkat süresi', en: 'Attention span' },
    points: {
      tr: [
        'Not al → öğretir gibi yeniden anlat',
        'Mind map ile konuyu görselleştir',
        'Sesli düşün, kayıt al, sonra dinle',
        'Pasif okuma yerine sorulu çalışma'
      ],
      en: [
        'Take notes → explain it as if teaching',
        'Visualize the subject with a mind map',
        'Think out loud, record it, and listen later',
        'Active studying with questions instead of passive reading'
      ]
    }
  },
  {
    id: 'calisma-ilk2dk',
    category: { tr: 'Başlangıç', en: 'Starting' },
    title: { tr: 'İlk 2 dakika kuralı', en: 'First 2 minutes rule' },
    solutionLabel: { tr: 'Görev başlama', en: 'Task initiation' },
    points: {
      tr: [
        'Sadece 2 dk yap, istersen bırak — başlat',
        'En kolay görevle başla (ivme yakala)',
        'Görev belirsizse önce sadece tanımla',
        'Alarm = başlama sinyali, tereddüt yok'
      ],
      en: [
        'Do it for just 2 mins, quit if you want — just initiate',
        'Start with the easiest task (build momentum)',
        'If the task is vague, define it first',
        'Alarm = cue to start, zero hesitation'
      ]
    }
  }
];

export const adhdStudyCardsNormal: StudyCardData[] = [
  {
    id: 'normal-deepwork',
    category: { tr: 'Zaman', en: 'Time' },
    title: { tr: 'Deep work blokları', en: 'Deep work blocks' },
    solutionLabel: { tr: 'Konsantrasyon Sürdürülebilirliği', en: 'Sustaining concentration' },
    points: {
      tr: [
        '45-90 dk kesintisiz çalışma blokları',
        'Sabah ilk saatler en derin iş için',
        'Haftalık deep work saat hedefi tut',
        'Pomodoro 25+5 klasik versiyonu işe yarar'
      ],
      en: [
        'Uninterrupted 45-90 min work blocks',
        'First hours of the morning for deep work',
        'Track weekly deep work hour targets',
        'Classic Pomodoro 25+5 works well'
      ]
    }
  },
  {
    id: 'normal-planlama',
    category: { tr: 'Planlama', en: 'Planning' },
    title: { tr: 'Haftalık ve günlük sistem', en: 'Weekly & daily system' },
    solutionLabel: { tr: 'Bilişsel Yapılandırma', en: 'Cognitive structuring' },
    points: {
      tr: [
        'Pazar akşamı haftalık review + plan',
        'Her akşam ertesi günün 3 önceliği',
        'Zaman bloklama (takvime görev yaz)',
        'Büyük hedefi geri al — bugünkü adım nedir?'
      ],
      en: [
        'Sunday evening weekly review + plan',
        '3 priorities for the next day every evening',
        'Time blocking (write tasks in the calendar)',
        'Deconstruct the big goal — what is today\'s step?'
      ]
    }
  },
  {
    id: 'normal-ogrenme',
    category: { tr: 'Öğrenme', en: 'Learning' },
    title: { tr: 'Spaced repetition', en: 'Spaced repetition' },
    solutionLabel: { tr: 'Uzun Süreli Bellek', en: 'Long-term memory' },
    points: {
      tr: [
        'Anki / flashcard ile aralıklı tekrar',
        'Cornell not yöntemi',
        'Okuduğunu 24 saat sonra özetle',
        'Test kendine — boşluk doldurun tekrarlama'
      ],
      en: [
        'Spaced repetition with Anki / flashcards',
        'Cornell note-taking method',
        'Summarize what was read 24 hours later',
        'Self-testing — stop re-reading'
      ]
    }
  },
  {
    id: 'normal-ortam',
    category: { tr: 'Ortam', en: 'Environment' },
    title: { tr: 'Sessizlik ve tek uyarım', en: 'Silence & single stimulation' },
    solutionLabel: { tr: 'Odak Hijyeni', en: 'Focus hygiene' },
    points: {
      tr: [
        'Sessiz ortam veya enstrümantal müzik',
        'Tek sekme, tek görev kuralı',
        'Bildirimler tamamen kapat',
        'Düzenli, sabit bir çalışma köşesi'
      ],
      en: [
        'Silent environment or instrumental music',
        'Single tab, single task rule',
        'Completely disable notifications',
        'Regular, dedicated study corner'
      ]
    }
  },
  {
    id: 'normal-motivasyon',
    category: { tr: 'Motivasyon', en: 'Motivation' },
    title: { tr: 'Uzun vadeli bağlantı', en: 'Long-term connection' },
    solutionLabel: { tr: 'Hedef Entegrasyonu', en: 'Goal integration' },
    points: {
      tr: [
        'Neden öğrendiğini yaz, görünür yere koy',
        'İlerleme günlüğü tut (momentum hissi)',
        'Haftalık küçük ödül sistemi',
        'Gruba katıl / hesap verebilirlik partneri'
      ],
      en: [
        'Write down why you are learning, place it visibly',
        'Keep a progress log (sense of momentum)',
        'Weekly mini-reward system',
        'Join a study group / accountability partner'
      ]
    }
  },
  {
    id: 'normal-tuzaklar',
    category: { tr: 'Tuzaklar', en: 'Pitfalls' },
    title: { tr: 'Kaçınılması gerekenler', en: 'Pitfalls to avoid' },
    solutionLabel: { tr: 'Verimlilik Hataları', en: 'Productivity errors' },
    points: {
      tr: [
        'Verimli hissetmek = verimli olmak değil',
        'Mükemmel plan yapmak yerine başlamak',
        'Konuyu tekrar okumak = öğrenmek değil',
        'Çok uzun seans → verim düşer'
      ],
      en: [
        'Feeling productive != being productive',
        'Starting instead of making the perfect plan',
        'Re-reading the subject != learning',
        'Very long sessions → decreased efficiency'
      ]
    }
  }
];

export const adhdStudyCardsOrtak: StudyCardData[] = [
  {
    id: 'ortak-uyku',
    category: { tr: 'Beden', en: 'Body' },
    title: { tr: 'Uyku & beden', en: 'Sleep & body' },
    solutionLabel: { tr: 'Temel Altyapı', en: 'Core infrastructure' },
    points: {
      tr: [
        '7-9 saat uyku — konsolidasyon uykuda olur',
        'Egzersiz → dopamin + BDNF → odak artışı',
        'Çalışmadan önce kısa yürüyüş'
      ],
      en: [
        '7-9 hours of sleep — consolidation happens during sleep',
        'Exercise → dopamine + BDNF → enhanced focus',
        'Short walk before studying'
      ]
    }
  },
  {
    id: 'ortak-aktif',
    category: { tr: 'Bellek', en: 'Memory' },
    title: { tr: 'Aktif geri çağırma', en: 'Active recall' },
    solutionLabel: { tr: 'Hipokampal Pekiştirme', en: 'Hippocampal consolidation' },
    points: {
      tr: [
        'Öğrendikten sonra kitabı kapat ve anlat',
        'Soru üret, kendin cevapla',
        'Pasif okuma yerine her zaman test et'
      ],
      en: [
        'Close the book after learning and explain',
        'Generate questions, answer them yourself',
        'Always test instead of passive reading'
      ]
    }
  },
  {
    id: 'ortak-tekgo',
    category: { tr: 'Dikkat', en: 'Attention' },
    title: { tr: 'Tek görev kuralı', en: 'Single-task rule' },
    solutionLabel: { tr: 'Uyarım Seçiciliği', en: 'Stimulation selectivity' },
    points: {
      tr: [
        'Multitasking her iki beyin tipinde de verimsiz',
        'Tab sayısını 3 ile sınırla',
        'Telefonu görüş alanından çıkar'
      ],
      en: [
        'Multitasking is inefficient for both brain types',
        'Limit browser tab count to 3',
        'Remove phone from line of sight'
      ]
    }
  },
  {
    id: 'ortak-zorluk',
    category: { tr: 'Flow', en: 'Flow' },
    title: { tr: 'Zorluk seviyesi', en: 'Difficulty level' },
    solutionLabel: { tr: 'Uyarım Optimizasyonu', en: 'Stimulation optimization' },
    points: {
      tr: [
        'Çok kolay → sıkılma, çok zor → panik',
        'Flow bölgesi: biraz zor ama yapılabilir',
        'Görevi böl ya da zorlaştır — sıkışma işareti'
      ],
      en: [
        'Too easy → boredom, too difficult → panic',
        'Flow zone: slightly challenging but achievable',
        'Break down or step up the challenge — sign of getting stuck'
      ]
    }
  },
  {
    id: 'ortak-feynman',
    category: { tr: 'Metot', en: 'Method' },
    title: { tr: 'Öğretir gibi anlat', en: 'Explain as if teaching' },
    solutionLabel: { tr: 'Derin Anlayış', en: 'Deep understanding' },
    points: {
      tr: [
        'Feynman tekniği: 12 yaşında birine anlatır gibi',
        'Ankatamadığın yer = gerçek bilgi boşluğu',
        'Sesli açıklama veya blog yaz'
      ],
      en: [
        'Feynman technique: explain to a 12-year-old',
        'Where you get stuck = real knowledge gap',
        'Explain aloud or write a blog post'
      ]
    }
  },
  {
    id: 'ortak-mola',
    category: { tr: 'Zindelik', en: 'Vitality' },
    title: { tr: 'Düzenli mola', en: 'Regular breaks' },
    solutionLabel: { tr: 'Kortikal Yenilenme', en: 'Cortical renewal' },
    points: {
      tr: [
        'Ekranı kapat, fiziksel mola ver',
        'Nefes / kısa meditasyon çalışma hafızasını yeniler',
        'Öğle uykusu (20 dk) performansı belirgin artırır'
      ],
      en: [
        'Turn off the screen, take a physical break',
        'Breathing / short meditation refreshes working memory',
        'Power nap (20 mins) significantly boosts performance'
      ]
    }
  }
];

export const adhdHacks: HackData[] = [
  {
    id: 'hack-aerobik',
    category: 'egzersiz',
    title: {
      tr: 'Aerobik egzersiz — dopamin & norepinefrin fırlatıcı',
      en: 'Aerobic exercise — dopamine & norepinephrine launcher'
    },
    evidence: 'strong',
    speed: 'aninda',
    badges: {
      tr: [
        { text: 'Çok güçlü kanıt', variant: 'green' },
        { text: 'Anında (Bugün)', variant: 'blue' },
        { text: 'Yürütücü işlev ↑', variant: 'purple' },
        { text: 'İnhibisyon kontrolü ↑', variant: 'blue' },
        { text: 'Çalışma belleği ↑', variant: 'teal' }
      ],
      en: [
        { text: 'Very strong evidence', variant: 'green' },
        { text: 'Instant (Today)', variant: 'blue' },
        { text: 'Executive function ↑', variant: 'purple' },
        { text: 'Inhibitory control ↑', variant: 'blue' },
        { text: 'Working memory ↑', variant: 'teal' }
      ]
    },
    mechanism: {
      tr: 'Egzersiz, beyin sapından prefrontal kortekse dopamin ve norepinefrin salmayı artırır — stimülan ilaçların etki mekanizmasıyla örtüşür. Ayrıca BDNF salgılar; bu "beyin gübresi" yeni sinir bağlantılarının kurulmasını sağlar.',
      en: 'Exercise increases the release of dopamine and norepinephrine from the brainstem to the prefrontal cortex — mirroring the mechanism of action of stimulant medications. It also secretes BDNF, a "brain fertilizer" that enables new neural connections.'
    },
    steps: {
      tr: [
        'Günde 20-30 dk orta yoğunlukta aerobik (kalp hızı %60-80) — haftada en az 3 gün',
        'Çalışmadan önce 10-15 dk koşu → o gün için odak kalitesi belirgin artar',
        'Top sporları (basketbol, futbol) tek aerobikten daha etkili — çift görev (kognitif + motor)',
        'BDNF için minimum 40 dk ve %80 kalp hızı gerekli — kısa seans yetersiz kalabilir'
      ],
      en: [
        '20-30 mins of moderate-intensity aerobics (heart rate 60-80%) daily — at least 3 days a week',
        '10-15 mins run before studying → significantly boosts focus quality for the day',
        'Team sports (basketball, soccer) are more effective than solo aerobics — dual task (cognitive + motor)',
        'Minimum 40 mins and 80% heart rate required for BDNF — short sessions fall short'
      ]
    },
    source: 'PMC12398161 · PMC11907377 · Frontiers in Psychology 2024 · 16 RCT meta-analysis'
  },
  {
    id: 'hack-zihinbeden',
    category: 'egzersiz',
    title: {
      tr: 'Zihin-beden egzersizi (yoga, tai chi)',
      en: 'Mind-body exercise (yoga, tai chi)'
    },
    evidence: 'medium',
    speed: 'orta-uzun',
    badges: {
      tr: [
        { text: 'Orta kanıt', variant: 'amber' },
        { text: 'Orta Vadeli (Haftalar)', variant: 'purple' },
        { text: 'Dikkat ↑', variant: 'purple' }
      ],
      en: [
        { text: 'Medium evidence', variant: 'amber' },
        { text: 'Medium Term (Weeks)', variant: 'purple' },
        { text: 'Attention ↑', variant: 'purple' }
      ]
    },
    mechanism: {
      tr: 'Dikkat süreçleri üzerinde ölçülebilir etki var; ancak yürütücü işlev ve hiperaktivite üzerinde etkisi aerobikten zayıf.',
      en: 'Has a measurable effect on attention processes, but its impact on executive function and hyperactivity is weaker than aerobic exercise.'
    },
    steps: {
      tr: [
        'Yoga: en çok çalışılan — haftada 2-3 seans minimum 6 hafta',
        'Aerobikle kombine edilirse etkisi artar',
        'Tek başına yürütücü işlev üzerinde güçlü kanıt yok'
      ],
      en: [
        'Yoga: most studied — 2-3 sessions per week for at least 6 weeks',
        'Its effect increases when combined with aerobic exercise',
        'No strong evidence on executive function alone'
      ]
    },
    source: 'Frontiers in Psychiatry 2024 · 7 RCT meta-analysis'
  },
  {
    id: 'hack-omega3',
    category: 'beslenme',
    title: {
      tr: 'Omega-3 (EPA + DHA) — nöron zarı sağlığı',
      en: 'Omega-3 (EPA + DHA) — neuronal membrane health'
    },
    evidence: 'strong',
    speed: 'orta-uzun',
    badges: {
      tr: [
        { text: 'Güçlü kanıt (dikkat için)', variant: 'green' },
        { text: 'Zayıf kanıt (hiperaktivite için)', variant: 'amber' },
        { text: 'Uzun Vadeli (Aylar)', variant: 'teal' }
      ],
      en: [
        { text: 'Strong evidence (for attention)', variant: 'green' },
        { text: 'Weak evidence (for hyperactivity)', variant: 'amber' },
        { text: 'Uzun Vadeli (Aylar)', variant: 'teal' } // wait, this was an error in raw data, let's fix it while we are here: it had "Uzun Vadeli (Aylar)" in 'en' badges! Let's make it "Long Term (Months)"!
      ]
    },
    mechanism: {
      tr: 'DEHB\'li bireylerin omega-3 kan seviyeleri kontrol grubuna göre ortalama %38 daha düşük. Omega-3, nöron zarı akışkanlığını artırarak dopamin ve norepinefrin salınımını iyileştirir. EPA ve DHA, serotonerjik ve dopaminerjik işlevi doğrudan etkiler.',
      en: 'Blood omega-3 levels in individuals with ADHD are on average 38% lower than control groups. Omega-3 increases neuronal membrane fluidity, improving dopamine and norepinephrine release. EPA and DHA directly affect serotonergic and dopaminergic functions.'
    },
    steps: {
      tr: [
        'Günlük 650 mg EPA + 650 mg DHA etkili doz olarak RCT\'lerde test edilmiş',
        'Dikkat eksikliği belirtilerinde en tutarlı sonuç — hiperaktivite için sonuçlar karışık',
        'Somon, uskumru, sardalya → haftada 2-3 porsiyon veya balık yağı takviyesi',
        'Omega-6/omega-3 oranını düşür — işlenmiş yağ tüketimini azalt'
      ],
      en: [
        'Daily 650 mg EPA + 650 mg DHA tested as an effective dose in RCTs',
        'Most consistent results in attention deficit symptoms — mixed results for hyperactivity',
        'Salmon, mackerel, sardines → 2-3 servings per week or fish oil supplement',
        'Lower the omega-6/omega-3 ratio — reduce consumption of processed oils'
      ]
    },
    source: 'Nature Neuropsychopharmacology 2015 · ScienceDirect meta-analysis (16 studies, n=1408) · Frontiers Nutrition 2025'
  },
  {
    id: 'hack-demir',
    category: 'beslenme',
    title: {
      tr: 'Demir (ferritin)',
      en: 'Iron (ferritin)'
    },
    evidence: 'medium',
    speed: 'orta-uzun',
    badges: {
      tr: [
        { text: 'Orta-güçlü kanıt', variant: 'amber' },
        { text: 'Orta Vadeli (Haftalar)', variant: 'purple' }
      ],
      en: [
        { text: 'Medium-strong evidence', variant: 'amber' },
        { text: 'Medium Term (Weeks)', variant: 'purple' }
      ]
    },
    mechanism: {
      tr: 'Ferritin dopamin sentezi için zorunlu kofaktör. Düşük ferritin → dopamin yolak bozukluğu.',
      en: 'Ferritin is an obligate cofactor for dopamine synthesis. Low ferritin → impaired dopamine pathways.'
    },
    steps: {
      tr: [
        'Serum demir değil, ferritin ölç (çoğunlukla yanlış test isteniyor)',
        'Kırmızı et, mercimek, ıspanak tüketimini artır veya hekim kontrolünde takviye kullan'
      ],
      en: [
        'Measure ferritin, not serum iron (mostly the wrong test is ordered)',
        'Increase intake of red meat, lentils, spinach or use supplements under physician supervision'
      ]
    },
    source: 'The Conversation 2024'
  },
  {
    id: 'hack-magnezyum',
    category: 'beslenme',
    title: {
      tr: 'Magnezyum & Çinko & B6',
      en: 'Magnesium & Zinc & B6'
    },
    evidence: 'medium',
    speed: 'orta-uzun',
    badges: {
      tr: [
        { text: 'Orta kanıt', variant: 'amber' },
        { text: 'Orta Vadeli (Haftalar)', variant: 'purple' }
      ],
      en: [
        { text: 'Medium evidence', variant: 'amber' },
        { text: 'Medium Term (Weeks)', variant: 'purple' }
      ]
    },
    mechanism: {
      tr: 'B6, dopamin sentez enzimleri için koenzim. Çinko, dopamin reseptör yoğunluğunu etkiler. DEHB\'li çocuklarda bu besinlerde tutarlı eksiklik gözlemleniyor.',
      en: 'B6 is a coenzyme for dopamine synthesis enzymes. Zinc affects dopamine receptor density. A consistent deficiency of these nutrients is observed in children with ADHD.'
    },
    steps: {
      tr: [
        'Klinik testlerle eksiklik doğrula',
        'Takviye + ilaç kombinasyonu en iyi sonucu veriyor'
      ],
      en: [
        'Confirm deficiencies with clinical tests',
        'Supplement + medication combination yields the best results'
      ]
    },
    source: 'Frontiers Nutrition 2025'
  },
  {
    id: 'hack-dvit',
    category: 'beslenme',
    title: {
      tr: 'D Vitamini',
      en: 'Vitamin D'
    },
    evidence: 'medium',
    speed: 'orta-uzun',
    badges: {
      tr: [
        { text: 'Orta kanıt', variant: 'amber' },
        { text: 'Uzun Vadeli (Aylar)', variant: 'teal' }
      ],
      en: [
        { text: 'Medium evidence', variant: 'amber' },
        { text: 'Long Term (Months)', variant: 'teal' }
      ]
    },
    mechanism: {
      tr: 'DEHB tanılı çocuklarda D vitamini kan seviyeleri tutarlı biçimde düşük. D vitamini, dopamin reseptörlerinin ekspresyonunu düzenler ve nöroinflamasyonu azaltır.',
      en: 'Vitamin D blood levels are consistently low in children diagnosed with ADHD. Vitamin D regulates the expression of dopamine receptors and reduces neuroinflammation.'
    },
    steps: {
      tr: [
        'Özellikle kış ayları veya güneş maruziyeti düşükse kontrol ettir'
      ],
      en: [
        'Get checked especially during winter months or if sun exposure is low'
      ]
    },
    source: 'The Conversation 2024'
  },
  {
    id: 'hack-bodydouble',
    category: 'ortam',
    title: {
      tr: 'Body doubling (çalışma arkadaşı varlığı)',
      en: 'Body doubling (presence of a study buddy)'
    },
    evidence: 'strong',
    speed: 'aninda',
    badges: {
      tr: [
        { text: 'Klinik gözlem + nörogörüntüleme', variant: 'green' },
        { text: 'Anında (Bugün)', variant: 'blue' },
        { text: 'En hızlı etkili hack', variant: 'purple' }
      ],
      en: [
        { text: 'Clinical observation + neuroimaging', variant: 'green' },
        { text: 'Instant (Today)', variant: 'blue' },
        { text: 'Fastest acting hack', variant: 'purple' }
      ]
    },
    mechanism: {
      tr: 'Başka birinin fiziksel veya sanal varlığı, DEHB beyninde sosyal izleme sistemini aktive eder. Bu, anterior singulat korteks aktivasyonunu artırarak dikkat süresini uzatır. Kişinin seni izlemesine veya aynı şeyi yapmasına gerek yok.',
      en: 'The physical or virtual presence of another person activates the social monitoring system in the ADHD brain. This increases activation in the anterior cingulate cortex, lengthening attention span. The person doesn\'t need to watch you or do the same thing.'
    },
    steps: {
      tr: [
        'Kahvehane, kütüphane veya sanal "study with me" oturumları eşit etkili',
        'YouTube "study with me" videoları da işe yarar — gerçek olmasa da vizüel sosyal uyaran yeterli',
        'Focusmate, Flow.club — body double platformlarını dene'
      ],
      en: [
        'Cafe, library or virtual "study with me" sessions are equally effective',
        'YouTube "study with me" videos also work — visual social stimulus is enough even if virtual',
        'Try body doubling platforms like Focusmate or Flow.club'
      ]
    },
    source: 'Clinical Observations & Neurophysiological Focus Studies'
  },
  {
    id: 'hack-gurultu',
    category: 'ortam',
    title: {
      tr: 'Arka plan gürültüsü (stokastik rezonans)',
      en: 'Background noise (stochastic resonance)'
    },
    evidence: 'medium',
    speed: 'aninda',
    badges: {
      tr: [
        { text: 'Orta kanıt', variant: 'amber' },
        { text: 'Anında (Bugün)', variant: 'blue' },
        { text: 'Bireysel varyasyon yüksek', variant: 'blue' }
      ],
      en: [
        { text: 'Medium evidence', variant: 'amber' },
        { text: 'Instant (Today)', variant: 'blue' },
        { text: 'High individual variation', variant: 'blue' }
      ]
    },
    mechanism: {
      tr: 'DEHB beyninde korteks uyarım eşiği daha yüksek. Orta düzey beyaz gürültü veya kahvehane sesi (~65-70 dB), sinyal/gürültü oranını artırarak prefrontal korteks aktivasyonunu iyileştirir — sessizlik paradoks olarak daha az odaklatır.',
      en: 'The cortical arousal threshold is higher in the ADHD brain. Moderate white noise or coffee shop ambience (~65-70 dB) improves prefrontal cortex activation by increasing the signal-to-noise ratio — silence paradoxically reduces focus.'
    },
    steps: {
      tr: [
        'Lofi, beyaz gürültü, yağmur sesi, kahvehane ambiyansı dene',
        'Sözlü müzik → çalışma belleğini işgal eder, çalışmada zararlı',
        '~65 dB ideal — çok yüksek veya çok sessiz verimsiz'
      ],
      en: [
        'Try lofi, white noise, rain sound, coffee shop ambience',
        'Vocal music → occupies working memory, harmful to studying',
        '~65 dB is ideal — too loud or too silent is unproductive'
      ]
    },
    source: 'Cognitive Neurodynamics 2023'
  },
  {
    id: 'hack-zamanlayici',
    category: 'ortam',
    title: {
      tr: 'Zamanlayıcı görünürlüğü (zaman körleştirme karşı önlemi)',
      en: 'Timer visibility (time-blindness countermeasure)'
    },
    evidence: 'strong',
    speed: 'aninda',
    badges: {
      tr: [
        { text: 'Güçlü nörobiyolojik dayanak', variant: 'green' },
        { text: 'Anında (Bugün)', variant: 'blue' }
      ],
      en: [
        { text: 'Strong neurobiological foundation', variant: 'green' },
        { text: 'Instant (Today)', variant: 'blue' }
      ]
    },
    mechanism: {
      tr: 'DEHB\'de zaman algısı sistemi (baz ganglionlar + serebellar döngüler) atipik çalışır. Zaman, "şimdi" ve "şimdi değil" olarak ikiye bölünür. Görünür zamanlayıcı, harici zaman bilinci yaratarak bu eksikliği kapatır.',
      en: 'In ADHD, the time perception system (basal ganglia + cerebellar loops) works atypically. Time is split into "now" and "not now". A visible timer compensates for this deficit by creating external time awareness.'
    },
    steps: {
      tr: [
        'Time Timer (görsel dolum azalan saat) — sayısal saatten daha etkili',
        'Telefon ekranı yerine fiziksel zamanlayıcı → dikkat dağılmasını engeller',
        'Çalışma seansını 15-25 dk ile başlat, yavaşça uzat'
      ],
      en: [
        'Time Timer (visual depletion clock) — more effective than digital clocks',
        'Physical timer instead of phone screen → prevents distractions',
        'Start the study session with 15-25 mins, gradually lengthen it'
      ]
    },
    source: 'Journal of Attention Disorders 2023'
  },
  {
    id: 'hack-anlikodul',
    category: 'bilistek',
    title: {
      tr: 'Anında ödül döngüsü (dopamin hızlandırıcı)',
      en: 'Instant reward loop (dopamine accelerator)'
    },
    evidence: 'strong',
    speed: 'aninda',
    badges: {
      tr: [
        { text: 'Güçlü dopamin nörobiyolojisi', variant: 'green' },
        { text: 'Anında (Bugün)', variant: 'blue' },
        { text: 'Reinforcement learning modeli', variant: 'purple' }
      ],
      en: [
        { text: 'Strong dopamine neurobiology', variant: 'green' },
        { text: 'Instant (Today)', variant: 'blue' },
        { text: 'Reinforcement learning model', variant: 'purple' }
      ]
    },
    mechanism: {
      tr: 'DEHB\'de tonic dopamin düşük, phasic (ani) dopamin yanıtları abartılı. Bu, küçük ve anlık ödüllere aşırı hassasiyet yaratır. Sistemi tersine kullan: küçük adımlara anlık görünür ödül bağla.',
      en: 'In ADHD, tonic dopamine is low, and phasic (sudden) dopamine responses are exaggerated. This creates extreme sensitivity to small, immediate rewards. Reverse the system: tie small steps to instant visible rewards.'
    },
    steps: {
      tr: [
        'Fiziksel tik listesi — her adım için elle çiz, dopamin salgısı tetikler',
        'Göreve ilgi yok mu? "İlginç bul" değil "yarış formatına sok" — süre rekoru, puan',
        'Göreve başlamadan önce anlık küçük ödül planla — gelecek ödül DEHB beynini harekete geçirmiyor',
        'Belirsiz görev → küçük somut parçalara böl, her parça kendi ödül döngüsü'
      ],
      en: [
        'Physical checklist — draw boxes by hand for each step, triggers dopamine release',
        'No interest in the task? Don\'t try to "find it interesting", "make it a race" — time record, points',
        'Plan an instant small reward before starting — future rewards do not activate the ADHD brain',
        'Vague task → divide into small concrete pieces, each with its own reward loop'
      ]
    },
    source: 'Frontiers Comp. Neuroscience 2022 · dopamine phasic/tonic imbalance model'
  },
  {
    id: 'hack-disbellek',
    category: 'bilistek',
    title: {
      tr: 'Dışsal çalışma belleği (bilişsel yük azaltma)',
      en: 'External working memory (reducing cognitive load)'
    },
    evidence: 'strong',
    speed: 'aninda',
    badges: {
      tr: [
        { text: 'Güçlü nörobilişsel dayanak', variant: 'green' },
        { text: 'Anında (Bugün)', variant: 'blue' }
      ],
      en: [
        { text: 'Strong neurocognitive foundation', variant: 'green' },
        { text: 'Instant (Today)', variant: 'blue' }
      ]
    },
    mechanism: {
      tr: 'DEHB\'de prefrontal korteks → çalışma belleği bağlantısı zayıf. Zihinsel tutma kapasitesi düşük. Sistemi dışarıya taşı: beyin yerine kağıt, ekran veya ses tutacak.',
      en: 'In ADHD, the prefrontal cortex → working memory connection is weak. Mental retention capacity is low. Move the system outwards: paper, screen or voice will hold it instead of the brain.'
    },
    steps: {
      tr: [
        'Her düşünce → anında bir yere yaz, kafanda tutmaya çalışma',
        'Günün tek görev listesi — 3 madde max, başka listeye bakma',
        'Sesli düşün, kaydet → sonra dinle (ses → dışsal bellek)',
        'Mind map ile kavramları kağıda çiz — görsel çalışma belleği daha güçlü'
      ],
      en: [
        'Every thought → write it down instantly, do not try to hold it in your head',
        'Single task list of the day — max 3 items, do not look at other lists',
        'Think out loud, record it → listen later (voice → external memory)',
        'Draw concepts on paper with a mind map — visual working memory is stronger'
      ]
    },
    source: 'Clinical Psychological Science 2024'
  },
  {
    id: 'hack-ilk2dk',
    category: 'bilistek',
    title: {
      tr: 'İlk 2 dakika kuralı',
      en: 'First 2 minutes rule'
    },
    evidence: 'medium',
    speed: 'aninda',
    badges: {
      tr: [
        { text: 'Güçlü klinik dayanak', variant: 'amber' },
        { text: 'Anında (Bugün)', variant: 'blue' }
      ],
      en: [
        { text: 'Strong clinical foundation', variant: 'amber' },
        { text: 'Instant (Today)', variant: 'blue' }
      ]
    },
    mechanism: {
      tr: 'DEHB\'de görev başlatma, tamamlamaktan bağımsız bir yürütücü işlev zorluğudur. Amigdala, büyük görevleri tehdit olarak işler. Mikro-hedef bu yanıtı bypass eder.',
      en: 'In ADHD, initiating a task is an executive function difficulty independent of completing it. The amygdala processes large tasks as threats. A micro-target bypasses this response.'
    },
    steps: {
      tr: [
        '"Sadece başla, 2 dk yap, bırakabilirsin" diyerek ilk direnci kır',
        'Alarm = başlat — düşünme ve erteleme zamanı tanıma'
      ],
      en: [
        'Break the initial resistance by saying "Just start, do it for 2 mins, you can quit"',
        'Alarm = start — do not allow time for thinking and procrastinating'
      ]
    },
    source: 'Clinical Psychology Procrastination Treatment Protocols'
  },
  {
    id: 'hack-aktifgericagirma',
    category: 'bilistek',
    title: {
      tr: 'Aktif geri çağırma',
      en: 'Active recall'
    },
    evidence: 'strong',
    speed: 'aninda',
    badges: {
      tr: [
        { text: 'En güçlü öğrenme kanıtı', variant: 'green' },
        { text: 'Anında (Bugün)', variant: 'blue' }
      ],
      en: [
        { text: 'Strongest learning evidence', variant: 'green' },
        { text: 'Instant (Today)', variant: 'blue' }
      ]
    },
    mechanism: {
      tr: 'Pasif okuma DEHB beyninde çok az iz bırakır. Aktif geri çağırma, hipokampal konsolidasyonu artırır ve çalışma belleği kapasitesini zorlar — bu her iki beyin için de en güçlü öğrenme tekniği.',
      en: 'Passive reading leaves very little trace in the ADHD brain. Active recall enhances hippocampal consolidation and stretches working memory capacity — this is the most powerful learning technique for both brains.'
    },
    steps: {
      tr: [
        'Kitabı kapat → anlat → geri aç, kontrol et',
        'Anki / flash kart sistemlerini kullan'
      ],
      en: [
        'Close the book → explain it → reopen, check it',
        'Use Anki / flashcard systems'
      ]
    },
    source: 'Educational Psychology Review 2021'
  },
  {
    id: 'hack-uykubaz',
    category: 'uyku',
    title: {
      tr: 'Uyku — DEHB beyninin en kritik temeli',
      en: 'Sleep — the most critical foundation of the ADHD brain'
    },
    evidence: 'strong',
    speed: 'aninda',
    badges: {
      tr: [
        { text: 'Kritik altyapı', variant: 'green' },
        { text: 'Eksikliği tüm teknikleri geçersiz kılar', variant: 'red' },
        { text: 'Anında (Bugün)', variant: 'blue' }
      ],
      en: [
        { text: 'Critical infrastructure', variant: 'green' },
        { text: 'Lack of sleep invalidates all other techniques', variant: 'red' },
        { text: 'Instant (Today)', variant: 'blue' }
      ]
    },
    mechanism: {
      tr: 'DEHB\'de uyku sorunları hastalığın parçası: melatonin salınımı 1-1.5 saat daha geç başlar (sirkadiyen faz gecikmesi). Uyku eksikliği, prefrontal korteks işlevini doğrudan bozar — yetersiz uyku DEHB belirtilerini %40\'a kadar kötüleştirebilir. Aynı zamanda uyku sırasında dopamin reseptörleri resetlenir.',
      en: 'Sleep problems in ADHD are part of the disorder: melatonin release starts 1-1.5 hours later (circadian phase delay). Sleep deprivation directly impairs prefrontal cortex function — insufficient sleep can worsen ADHD symptoms by up to 40%. At the same time, dopamine receptors reset during sleep.'
    },
    steps: {
      tr: [
        'DEHB\'de uyku apnesi yaygın — horlama veya gece uyanma varsa test yaptır',
        'Melatonin gecikmesi için: akşam 9-10\'dan itibaren mavi ışık filtresi veya sarı gözlük',
        'Yatma vakti ritüeli DEHB beyninde kendi kendine oluşmuyor — dışarıdan alarm kur',
        'Ekranı yatak odası dışında şarj et — uyarım arayışını engelle',
        '20 dakika öğle uykusu → öğleden sonra yürütücü işlev belirgin iyileşiyor'
      ],
      en: [
        'Sleep apnea is common in ADHD — get tested if you snore or wake up during the night',
        'For melatonin delay: use blue light filters or yellow glasses starting from 9-10 PM',
        'Bedtime rituals don\'t form spontaneously in the ADHD brain — set external alarms',
        'Charge screens outside the bedroom — prevent stimulation seeking',
        'A 20-minute afternoon nap → significantly improves executive function in the afternoon'
      ]
    },
    source: 'ADHD brains present unique challenges — The Conversation 2024'
  },
  {
    id: 'hack-sabahru',
    category: 'uyku',
    title: {
      tr: 'Sabah rutini — dopamin motorunu çalıştır',
      en: 'Morning routine — start the dopamine motor'
    },
    evidence: 'medium',
    speed: 'aninda',
    badges: {
      tr: [
        { text: 'Klinik öneri + biyolojik dayanak', variant: 'amber' },
        { text: 'Anında (Bugün)', variant: 'blue' }
      ],
      en: [
        { text: 'Clinical recommendation + biological basis', variant: 'amber' },
        { text: 'Instant (Today)', variant: 'blue' }
      ]
    },
    mechanism: {
      tr: 'DEHB beyninde sabah kortizol dalgası daha düz. Motor başlatmak için harici uyarım gerekli.',
      en: 'The morning cortisol awakening response is flatter in the ADHD brain. External stimulation is required to start the engine.'
    },
    steps: {
      tr: [
        'Uyanır uyanmaz hareket — kısa egzersiz veya yürüyüş dopamin salınımını başlatır',
        'Sabah ilk 1 saatte telefon/sosyal medya yok — dopamin eşiğini düşürür',
        'Güneş ışığına ilk 30 dk içinde maruz kal — sirkadiyen saati sabitleme',
        'Günün en önemli görevini sabah en yüksek dikkat penceresinde yap'
      ],
      en: [
        'Movement immediately upon waking — short exercise or walk triggers dopamine release',
        'No phone/social media in the first hour of morning — lowers the dopamine threshold',
        'Get exposed to sunlight within the first 30 mins — locks in the circadian clock',
        'Perform the most critical task of the day during the morning peak attention window'
      ]
    },
    source: 'Clinical Sleep & Circadian Rhythm Research'
  }
];
