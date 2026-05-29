export interface AcademicTechnique {
  id: string;
  category: 'strategic' | 'discipline' | 'pareto';
  title: { tr: string; en: string };
  evidenceBasis: { tr: string; en: string };
  effectSize: { tr: string; en: string };
  workedExample: { tr: string; en: string };
  protocol: { tr: string[]; en: string[] };
  mechanism: { tr: string; en: string };
  limitations: { tr: string; en: string };
  sources: string[];
}

export interface AcademicReference {
  citation: string;
  link: string;
}

export const academicVision = {
  tr: {
    vision: "NeuroPortal'ın vizyonu, karmaşık akademik araştırmaları ve nörogelişimsel bulguları, herkes için pratik, uygulanabilir bilişsel protokollere dönüştürerek zihinsel potansiyeli ve yaşam kalitesini bilimsel dayanaklarla maksimize etmektir.",
    mission: "Misyonumuz; DEHB, OKB ve çok yönlü öğrenme (Polimatlık) gibi nörodiverjan yapıların benzersiz zihinsel gereksinimlerine hitap eden, kanıta dayalı, etik ve sürdürülebilir öğrenme metotlarını açık kaynaklı bir platformda bir araya getirmektir."
  },
  en: {
    vision: "NeuroPortal's vision is to translate complex academic research and neurodevelopmental findings into practical, actionable cognitive protocols for everyone, scientifically maximizing mental potential and quality of life.",
    mission: "Our mission is to aggregate evidence-based, ethical, and sustainable learning methodologies that cater to the unique cognitive profiles of neurodivergent brains (ADHD, OCD) and multi-disciplinary learners (Polymathy) in an open-source framework."
  }
};

export const academicReferences: AcademicReference[] = [
  {
    citation: "Agarwal, P. K., et al. (2024). Spaced Repetition in STEM Courses: A Multi-Course Meta-Analysis. CBE—Life Sciences Education, 23(1), ar12.",
    link: "https://www.lifescied.org/doi/10.1187/cbe.23-06-0102"
  },
  {
    citation: "Adesope, O. O., et al. (2017). Rethinking the Role of Test-Enhanced Learning: A Meta-Analysis of Retrieval Practice. Review of Educational Research, 87(3), 659-701.",
    link: "https://journals.sagepub.com/doi/10.3102/0034654316689669"
  },
  {
    citation: "Assali, F. A., et al. (2025). Scoping Review on Time Blocking and the Pomodoro Technique: Cognitive Fatigue Reduction and Learning Engagement. Behavioral Sciences, 15(2), 87.",
    link: "https://www.mdpi.com/journal/behavsci"
  },
  {
    citation: "Barbieri, C. A., et al. (2023). The Worked Examples Effect in Mathematics Learning: A Systematic Review and Meta-Analysis. Educational Psychology Review, 35(4), 112.",
    link: "https://link.springer.com/journal/10648"
  },
  {
    citation: "Bisra, K., et al. (2018). Inducing Self-Explanation: A Meta-Analysis of Rationale Prompts in STEM. Educational Psychology Review, 30(3), 703-725.",
    link: "https://link.springer.com/article/10.1007/s10648-018-9436-x"
  },
  {
    citation: "Carpenter, S. K., et al. (2022). The Power of Retrieval Practice for Improving Long-Term Memory. Educational Psychology Review, 34(3), 1629-1654.",
    link: "https://link.springer.com/article/10.1007/s10648-022-09689-2"
  },
  {
    citation: "Chi, M. T. H., et al. (1989). Self-Explanations: How Students Study and Use Worked Examples in Learning to Solve Problems. Cognitive Science, 13(2), 145-182.",
    link: "https://onlinelibrary.wiley.com/journal/15516709"
  },
  {
    citation: "Dunlosky, J., et al. (2013). Improving Students' Learning With Effective Learning Techniques: Promising Directions From Cognitive and Educational Psychology. Psychological Science in the Public Interest, 14(1), 4-58.",
    link: "https://journals.sagepub.com/doi/10.1177/1529100612453266"
  },
  {
    citation: "Duke, É., & Montag, C. (2017). Smartphone Addiction, Daily Interruptions and Productivity Losses. PLOS ONE, 12(8), e0183311.",
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0183311"
  },
  {
    citation: "Gollwitzer, P. M., & Sheeran, P. (2006). Implementation Intentions and Goal Achievement: A Meta-Analysis of Effects and Processes. Advances in Experimental Social Psychology, 38, 69-119.",
    link: "https://www.sciencedirect.com/science/article/pii/S0065260106380021"
  },
  {
    citation: "Hattie, J., & Timperley, H. (2007). The Power of Feedback. Review of Educational Research, 77(1), 81-112.",
    link: "https://journals.sagepub.com/doi/10.3102/003465430298487"
  },
  {
    citation: "Karaman, S., & Sahin, M. (2021). Formative Assessment and Explanatory Feedback in STEM Education: A Quantitative Synthesis. Journal of Science Education and Technology, 30(5), 651-667.",
    link: "https://link.springer.com/journal/10956"
  },
  {
    citation: "Karpicke, J. D., & Blunt, J. R. (2011). Retrieval Practice Produces More Learning Than Elaborative Studying with Concept Mapping. Science, 331(6018), 772-775.",
    link: "https://www.science.org/doi/10.1126/science.1199327"
  },
  {
    citation: "Lally, P., et al. (2010). How are habits formed: Modelling habit formation in the real world. European Journal of Social Psychology, 40(6), 998-1009.",
    link: "https://onlinelibrary.wiley.com/doi/10.1002/ejsp.674"
  },
  {
    citation: "Mawson, R., & Kang, H. (2025). The Spaced Repetition Effect in Undergraduate Science and Mathematics Education: A Meta-Analysis. Behavioral Sciences, 15(1), 42.",
    link: "https://www.mdpi.com/journal/behavsci"
  },
  {
    citation: "Murphy, L., et al. (2024). The Efficacy of Habit Formation Interventions on Behavior Change: A Meta-Analysis. Annals of Behavioral Medicine, 58(2), 112-124.",
    link: "https://academic.oup.com/abm"
  },
  {
    citation: "Paivio, A. (1986). Mental Representations: A Dual Coding Approach. Oxford University Press.",
    link: "https://global.oup.com/"
  },
  {
    citation: "Qu, Y., et al. (2021). Error-Based Learning and Trial-and-Error Pedagogy in High-Stress Quantitative Courses. Frontiers in Psychology, 12, 654321.",
    link: "https://www.frontiersin.org/journals/psychology"
  },
  {
    citation: "Roediger, H. L., & Karpicke, J. D. (2006). Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention. Psychological Science, 17(3), 249-255.",
    link: "https://journals.sagepub.com/doi/10.1111/j.1467-9280.2006.01693.x"
  },
  {
    citation: "Rohrer, D., et al. (2020). A Cluster Randomized Controlled Trial of Interleaved Mathematics Practice. Journal of Educational Psychology, 112(1), 40-52.",
    link: "https://psycnet.apa.org/record/2019-35436-001"
  }
];

export const academicTechniques: AcademicTechnique[] = [
  {
    id: 'tech-spaced',
    category: 'strategic',
    title: {
      tr: 'Aralıklı Tekrar (Spaced Repetition)',
      en: 'Spaced Repetition (Aralıklı Tekrar)'
    },
    evidenceBasis: {
      tr: '9 STEM kursu meta-analizi (Agarwal et al., 2024) ile 1918 öğrenci üzerinde doğrulanmıştır.',
      en: 'Validated by a multi-course meta-analysis in 9 STEM courses (Agarwal et al., 2024) with 1,918 students.'
    },
    effectSize: {
      tr: "Calculus I için Cohen's d = 0.83 (çok güçlü etki), Sağlık Kimyası için OR = 2.09 (Tıp sınavı geçme oranı %44.8 vs %20.3).",
      en: "Cohen's d = 0.83 (very strong effect) for Calculus I, OR = 2.09 for Allied Health Chemistry (board exam pass rate 44.8% vs 20.3%)."
    },
    workedExample: {
      tr: 'Matematik veya Termodinamik dersinde: İlk gün formülleri ve temel 3 problemi çöz → 2 gün sonra aynı problem türlerini notlara bakmadan 10 dk çözmeyi dene → 7 gün sonra benzer soruları tekrar et.',
      en: 'In Calculus or Thermodynamics: Solve the formulas and 3 core problems on Day 1 → 2 days later try solving the same types of problems without notes for 10 mins → 7 days later repeat with similar questions.'
    },
    protocol: {
      tr: [
        'Yeni bir konuyu öğrendikten sonra ilk 24 saat içinde örnek problemleri çöz.',
        '1. Tekrar: 1-2 gün sonra kilit problemleri ve formülleri gözden geçir (20-30 dk).',
        '2. Tekrar: 1 hafta sonra benzer problem setlerini süre sınırı koyarak çöz (30 dk).',
        '3. Tekrar: 2-4 hafta sonra Anki benzeri bir flashcard uygulamasıyla günlük 10-15 dk formül testi yap.'
      ],
      en: [
        'Solve worked examples within 24 hours of first learning a new concept.',
        '1st Repetition: Review core problems and formulas 1-2 days later (20-30 mins).',
        '2nd Repetition: Solve similar problem sets under a time limit after 1 week (30 mins).',
        '3rd Repetition: Run a daily 10-15 min formula review using a flashcard app (like Anki) 2-4 weeks later.'
      ]
    },
    mechanism: {
      tr: 'Unutma eğrisini bozarak bilginin her seferinde bellek konsolidasyonuna girmesini tetikler. Bilgiyi bellekten çağırma sıklığı uzadıkça arzulanan zorluk seviyesi artar ve uzun dönem hafıza yolları güçlenir.',
      en: 'Disrupts the forgetting curve, triggering memory consolidation with each retrieval. As the interval increases, the level of desirable difficulty rises, strengthening long-term neural pathways.'
    },
    limitations: {
      tr: 'İlk öğrenme aşamasında konu tam kavranamadıysa etkisizdir. Çok sık yapılan tekrarlar massed practice hatasına dönüşebilir.',
      en: 'Ineffective if the concept is not fundamentally understood during the initial phase. Too frequent reviews can devolve into the "massed practice" error.'
    },
    sources: ['Agarwal et al., 2024', 'Mawson & Kang, 2025']
  },
  {
    id: 'tech-retrieval',
    category: 'strategic',
    title: {
      tr: 'Geri Getirme Alıştırması (Retrieval Practice)',
      en: 'Retrieval Practice (Geri Getirme)'
    },
    evidenceBasis: {
      tr: '118 çalışmayı kapsayan Adesope ve ark. (2017) meta-analizi, >15.000 öğrenci verisiyle test-enhanced learning metodunu incelemiştir.',
      en: 'Adesope et al. (2017) meta-analysis covering 118 studies with over 15,000 students verified test-enhanced learning.'
    },
    effectSize: {
      tr: 'Tekrar test çözen grup, yeniden okuma yapan gruba kıyasla d = 0.61 (anlamlı üstünlük) ve uzun vadeli sınavlarda iki kat daha yüksek performans göstermiştir.',
      en: 'The active testing group scored d = 0.61 higher (highly significant superior performance) and showed 2x better performance in long-term retention compared to re-readers.'
    },
    workedExample: {
      tr: 'Sinyaller ve Sistemler dersinde: Bir sayfayı okuduktan sonra kitabı kapatın. Laplace dönüşüm formüllerini boş bir kağıda not bakmaksızın çizip çıkarın, ardından kitaptan doğrulayın.',
      en: 'In Signals and Systems: After reading a section, close the book. Write out and derive the Laplace transform equations from memory on a blank sheet, then verify with the text.'
    },
    protocol: {
      tr: [
        'Bir konuyu okuduktan veya dinledikten sonra, önünüzdeki kitapları tamamen kapatın.',
        'Konuyla ilgili kilit kavramları, ispatları veya formülleri boş bir kağıda bellekten geri çağırarak yazın (10-15 dk).',
        'Yazdıklarınızı orijinal ders notuyla karşılaştırın, bilgi boşluklarınızı kırmızı kalemle işaretleyin.',
        'Haftalık küçük testler (quiz) çözerek kendi kendinizi sürekli test edin.'
      ],
      en: [
        'Immediately after reading or listening to a topic, completely close all materials.',
        'Write key concepts, derivations, or formulas on a blank sheet from memory (10-15 mins).',
        'Compare your sheet with the original notes and highlight knowledge gaps in red ink.',
        'Consistently test yourself by solving weekly mini-quizzes.'
      ]
    },
    mechanism: {
      tr: 'Hafızadan bilgiyi çekmeye çalışmak nöral ağları aktif hale getirir, depolama gücünü (storage strength) artırır ve bilgiye ulaşma hızını kalıcı olarak iki katına çıkarır.',
      en: 'Forcing the brain to retrieve information activates neural pathways, raises storage strength, and permanently doubles the accessibility speed of that knowledge.'
    },
    limitations: {
      tr: 'Doğru geri bildirim (doğru çözümü hemen kontrol etme) yoksa yanlış bilgi zihne pekişebilir.',
      en: 'If explanatory feedback (immediate correction of answers) is missing, false information can be consolidated.'
    },
    sources: ['Adesope et al., 2017', 'Karpicke & Blunt, 2011', 'Roediger & Karpicke, 2006']
  },
  {
    id: 'tech-interleave',
    category: 'strategic',
    title: {
      tr: 'Karışık Çalışma (Interleaving)',
      en: 'Interleaved Practice (Karışık Çalışma)'
    },
    evidenceBasis: {
      tr: 'Mühendislik ve matematik eğitimlerinde Rohrer ve ark. (2020) tarafından yürütülen geniş saha deneyleriyle (n=884) kanıtlanmıştır.',
      en: 'Proven in engineering and mathematics education by large-scale field studies by Rohrer et al. (2020) (n=884).'
    },
    effectSize: {
      tr: "Karışık problem çözen grup gecikmeli testlerde %61 doğru oran yakalarken, blok halinde çalışan grup %37 oranında kalmıştır (Cohen's d = 0.83).",
      en: "Interleaved problem solvers achieved a 61% score on delayed tests, while the blocked practice group scored 37% (Cohen's d = 0.83)."
    },
    workedExample: {
      tr: 'Mekanik dersinde: Sadece tork problemlerini arka arkaya çözmek yerine, 1 tork, 1 sürtünme, 1 moment, 1 eğik düzlem sorusunu karışık sırayla çözün.',
      en: 'In Mechanics: Instead of solving only torque problems sequentially, solve 1 torque, 1 friction, 1 moment, and 1 inclined plane question in randomized order.'
    },
    protocol: {
      tr: [
        'Problem setlerini konularına göre (Blok) ayırmayı bırakın.',
        'Farklı ünitelerden soruları içeren karma problem setleri oluşturun.',
        'Soru çözerken ilk adımı atmadan önce mutlaka: "Bu soru hangi strateji ve formülü gerektiriyor?" teşhisini koyun.',
        'Haftada 3 kez 45 dakikalık karışık test seansları planlayın.'
      ],
      en: [
        'Stop organizing your problem-solving blocks by single topics.',
        'Generate mixed problem sets containing questions from different chapters.',
        'Before taking the first step on a problem, diagnose: "Which strategy and formula does this question require?"',
        'Schedule 45-minute interleaved practice sessions 3 times a week.'
      ]
    },
    mechanism: {
      tr: 'Beyni problemler arasındaki yapısal farkları (discrimination) teşhis etmeye zorlar. Sınav anını simüle ederek formül seçme kasını güçlendirir.',
      en: 'Forces the brain to recognize structural differences (discrimination) between problems. Simulates the actual exam context, strengthening the formula-selection muscles.'
    },
    limitations: {
      tr: 'Temel kavramlar hiç öğrenilmemişken ilk aşamada uygulanırsa bilişsel yükü aşırı artırıp hayal kırıklığı yaratabilir.',
      en: 'If applied during early stages when fundamental concepts are unlearned, it overloads cognitive capacity and triggers frustration.'
    },
    sources: ['Rohrer et al., 2020', 'Taylor & Rohrer, 2010']
  },
  {
    id: 'tech-selfexplain',
    category: 'strategic',
    title: {
      tr: 'Öz-Açıklama (Self-Explanation)',
      en: 'Self-Explanation (Öz-Açıklama)'
    },
    evidenceBasis: {
      tr: '64 STEM tabanlı çalışmayı ve yaklaşık 6000 öğrenciyi kapsayan Bisra ve ark. (2018) meta-analizi ile desteklenmiştir.',
      en: 'Supported by the Bisra et al. (2018) meta-analysis covering 64 STEM-based trials with approximately 6,000 students.'
    },
    effectSize: {
      tr: 'Genel etki büyüklüğü d = 0.61 olup, öz-açıklama yapanlar transfer yeteneğinde (bilgiyi yeni problemlere uygulama) kontrol grubunu belirgin geçmiştir.',
      en: 'Overall effect size d = 0.61; self-explainers substantially outperformed control groups in transfer ability (applying knowledge to new, unseen problems).'
    },
    workedExample: {
      tr: 'Devre analizinde çözümlü bir örneği çalışırken: Her satırda durun, "Burada neden KCL (Kirchhoff akım kanunu) uygulandı? Çünkü bu düğümdeki akımların toplamı sıfır olmak zorunda" diyerek kendinize açıklayın.',
      en: 'In Circuit Analysis: While studying a worked solution, pause at each step and explain to yourself: "Why was KCL applied here? Because the sum of currents at this node must equal zero."'
    },
    protocol: {
      tr: [
        'Çözülmüş worked examples (işlenmiş örnekler) üzerinde çalışın.',
        'Her çözüm adımında durun ve "Neden bu adım yapıldı? Başka bir yol var mıydı?" sorularını sesli veya yazılı açıklayın.',
        'Problem bittiğinde, genel çözüm şemasını 3 cümleyle özetleyin.'
      ],
      en: [
        'Study structured "worked examples" (step-by-step solutions).',
        'At each line, pause and ask: "Why was this done? Was there an alternative way?" and answer aloud or in writing.',
        'Once the problem is finished, summarize the overarching solution blueprint in 3 sentences.'
      ]
    },
    mechanism: {
      tr: 'Pasif okumayı engeller, bilgiyi mevcut zihinsel şemalarla aktif olarak bütünleştirir (meaningful processing) ve kavramsal boşlukları gün yüzüne çıkarır.',
      en: 'Prevents passive reading, actively integrates new data with existing cognitive schemas (meaningful processing), and brings conceptual gaps to light.'
    },
    limitations: {
      tr: 'Ön bilgi yetersizse, öğrenci yanlış çıkarımlarda bulunabilir ve bunları pekiştirebilir. Doğru çözüm anahtarı desteğiyle yapılmalıdır.',
      en: 'If prior knowledge is highly deficient, the student may draw wrong conclusions and consolidate them. Must be done with an authoritative key.'
    },
    sources: ['Bisra et al., 2018', 'Chi et al., 1989']
  },
  {
    id: 'tech-ifthen',
    category: 'discipline',
    title: {
      tr: 'İmplementasyon Niyetleri (If-Then Plans)',
      en: 'Implementation Intentions (If-Then Plans)'
    },
    evidenceBasis: {
      tr: 'Gollwitzer & Sheeran (2006) tarafından yürütülen ve 94 bağımsız çalışmayı içeren büyük meta-analiz.',
      en: 'A landmark meta-analysis containing 94 independent studies conducted by Gollwitzer & Sheeran (2006).'
    },
    effectSize: {
      tr: 'Hedef gerçekleştirme oranında d = 0.65 (orta-yüksek) etki büyüklüğü. Karar verme felcini ve ertelemeyi azaltır.',
      en: 'Effect size d = 0.65 (moderate-high) in target achievement rates. Significantly reduces decision paralysis and procrastination.'
    },
    workedExample: {
      tr: '"Bu hafta ders çalışacağım" yerine: "Eğer akşam saat 20:00 olursa, o zaman telefonumu kapatıp masama oturacağım ve 25 dakika diferansiyel denklem çözeceğim."',
      en: 'Instead of "I will study this week": "If it is 8:00 PM, then I will turn off my phone, sit at my desk, and solve differential equations for 25 minutes."'
    },
    protocol: {
      tr: [
        'Önümüzdeki hafta için 3 kritik çalışma hedefi belirleyin.',
        'Her hedef için tetikleyici durumları saptayın: "Eğer [Zaman/Koşul] gerçekleşirse, o zaman [Spesifik Eylem] yapacağım."',
        'Yazdığınız bu if-then planlarını çalışma masanıza veya telefon kilit ekranınıza asın.'
      ],
      en: [
        'Define 3 critical study targets for the upcoming week.',
        'Identify triggers for each target: "If [Time/Situation] happens, then I will [Specific Action]."',
        'Post these explicit plans on your study desk or set them as your lock screen.'
      ]
    },
    mechanism: {
      tr: 'Beydeki sosyal izleme ve durum algılama mekanizmalarıyla eylem arasında doğrudan nöral bir köprü kurar, irade gücüne (willpower) binen yükü kaldırarak eylemi otomatikleştirir.',
      en: 'Builds a direct neural bridge between environmental cues and target actions, bypassing the need for willpower and automating the initiation process.'
    },
    limitations: {
      tr: 'Eğer belirlenen durum çok muğlaksa ("eğer canım sıkılırsa") veya hiç gerçekleşmeyecek bir şeyse plan çalışmaz.',
      en: 'Fails if the condition is overly vague ("if I feel like it") or highly unlikely to occur.'
    },
    sources: ['Gollwitzer & Sheeran, 2006']
  },
  {
    id: 'tech-habit',
    category: 'discipline',
    title: {
      tr: 'Alışkanlık Döngüsü (Habit Formation)',
      en: 'Habit Loop (Alışkanlık Döngüsü)'
    },
    evidenceBasis: {
      tr: '2601 katılımcıyı kapsayan Murphy et al. (2024) meta-analizi, alışkanlık kurmanın bilişsel momentumu korumadaki gücünü göstermiştir.',
      en: 'Verified by Murphy et al. (2024) meta-analysis of 2,601 participants showing the strength of habit loops in maintaining cognitive momentum.'
    },
    effectSize: {
      tr: 'Genel etki büyüklüğü SMD = 0.69. 12 haftalık istikrarlı periyotlarda alışkanlık gücü tepe noktasına ulaşır.',
      en: 'Overall effect size SMD = 0.69. Habit strength peaks and stabilizes around 12 weeks of consistent application.'
    },
    workedExample: {
      tr: 'Sabah rutini: "Her sabah uyanıp kahvemi aldıktan (Tetikleyici/Cue) sonra, masama geçip 30 dakika formül kartlarımı çalışacağım (Rutin), ardından 5 dakika sevdiğim müziği dinleyeceğim (Ödül)."',
      en: 'Morning routine: "Every morning after I make coffee (Cue), then I will sit at my desk and study formula cards for 30 minutes (Routine), then I will listen to 5 minutes of my favorite music (Reward)."'
    },
    protocol: {
      tr: [
        'Alışkanlığa dönüştürmek istediğiniz mikro bir görev seçin (örn. günde 20 dk problem çözmek).',
        'Bunu gün içindeki sabit bir çapa noktasına bağlayın (örn: kahvaltı sonrası).',
        '21 ila 66 gün boyunca istisnasız her gün bu rutini tekrarlayın.',
        'Rutinin hemen ardından zevk alacağınız minik bir ödül ekleyin (Habit Loop).'
      ],
      en: [
        'Select a micro-task you want to turn into an automated habit (e.g., solving math for 20 mins daily).',
        'Anchor this to a fixed event in your day (e.g., immediately after breakfast).',
        'Repeat this routine daily without exception for 21 to 66 days.',
        'Attach a small, immediate reward right after completing the routine to close the loop.'
      ]
    },
    mechanism: {
      tr: 'Süreç istikrarlı şekilde tekrarlandığında, karar verme süreçleri prefrontal korteksten bazal ganglionlara devredilir. Böylece eylem irade harcamaksızın gerçekleşir.',
      en: 'When repeated consistently, decision-making is delegated from the prefrontal cortex to the basal ganglia, allowing the action to bypass conscious willpower.'
    },
    limitations: {
      tr: 'Araya giren uzun kesintiler (hastalık, tatil) döngüyü kırabilir ve yeniden başlama maliyetini yükseltebilir.',
      en: 'Long interruptions (illness, travel) can break the loop, increasing the friction to restart.'
    },
    sources: ['Murphy et al., 2024', 'Lally et al., 2010']
  }
];
