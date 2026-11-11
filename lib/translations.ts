// Clinic identity for Zahnarztpraxis Dr. Safwan Mousa — Berlin-Mitte.
// SINGLE SOURCE OF TRUTH for all contact data (the practice plans to move
// in about a year: edit CLINIC below and every page, link, the chat
// assistant and the legal pages update automatically).
// WhatsApp / mobile: +49 176 3631 3068 (wa.me/4917636313068).
// Landline (KZV Berlin roster): 030 5588626.
// Address: Schillingstr. 12, 10179 Berlin (U-Bhf Schillingstraße, U5).
// Opening hours are NOT published anywhere: the Mo–Fr 09:00–18:00 shown
// on the site is a PLACEHOLDER the practice must confirm.

export type Lang = 'de' | 'ar' | 'en' | 'fr'

export const CLINIC = {
  name: 'Zahnarztpraxis Dr. Safwan Mousa',
  shortName: 'Praxis Dr. Safwan Mousa',
  doctor: 'Dr. Safwan Mousa',
  city: 'Berlin-Mitte',
  phoneDisplay: '+49 176 3631 3068',
  phone: '4917636313068',
  whatsapp: 'https://wa.me/4917636313068',
  landlineDisplay: '030 5588626',
  landlineHref: 'tel:+49305588626',
  address: 'Schillingstr. 12, 10179 Berlin',
  mapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Zahnarztpraxis+Dr.+Safwan+Mousa,+Schillingstr.+12,+10179+Berlin',
  mapsEmbed: 'https://www.google.com/maps?q=Schillingstr.+12,+10179+Berlin&z=16&output=embed',
  instagram: 'https://www.instagram.com/safwan_87m',
  tiktok: 'https://www.tiktok.com/@safwan.mousa',
  doctolib: 'https://www.doctolib.de/zahnmedizin/berlin/safwan-mousa',
}

const de = {
  nav: {
    about: 'Über uns',
    services: 'Leistungen',
    implants: 'Schwerpunkte',
    results: 'Ergebnisse',
    whyUs: 'Warum wir',
    faq: 'FAQ',
    contact: 'Kontakt',
    book: 'Termin vereinbaren',
  },
  hero: {
    badge: 'Zahnarztpraxis · Berlin-Mitte (Alexanderplatz)',
    title: 'Moderne Zahnmedizin & Oralchirurgie in Berlin-Mitte',
    subtitle:
      'Dr. Safwan Mousa — Zahnarzt und Fachzahnarzt für Oralchirurgie — begrüßt Sie in seiner Privatpraxis in der Schillingstraße 12: Implantologie, hochwertiger Zahnersatz und die ganze allgemeine Zahnmedizin, persönlich betreut in vier Sprachen.',
    cta: 'Termin vereinbaren',
    call: 'Anrufen',
    whatsapp: 'WhatsApp',
    directions: 'Anfahrt',
    stats: [
      { value: 'Fachzahnarzt', label: 'für Oralchirurgie' },
      { value: '4', label: 'Sprachen: DE · AR · EN · FR' },
      { value: 'U5', label: 'U-Bhf Schillingstraße, Berlin-Mitte' },
    ],
  },
  about: {
    badge: 'Über die Praxis',
    title: 'Dr. Safwan Mousa',
    role: 'Zahnarzt & Fachzahnarzt für Oralchirurgie · Implantologie',
    p1: 'Dr. Safwan Mousa ist Zahnarzt und Fachzahnarzt für Oralchirurgie. In seiner Privatpraxis in der Schillingstraße 12 in Berlin-Mitte — nur wenige Minuten vom Alexanderplatz entfernt — verbindet er operative Erfahrung mit moderner Zahnmedizin: von der Implantologie über anspruchsvollen Zahnersatz bis zur allgemeinen Zahnerhaltung.',
    p2: 'Die Praxis betreut Patientinnen und Patienten in vier Sprachen — Deutsch, Arabisch, Englisch und Französisch. Dr. Mousa nimmt sich Zeit, jeden Befund verständlich zu erklären, und begleitet Sie persönlich von der ersten Beratung bis zur Nachsorge.',
    points: [
      'Fachzahnarzt für Oralchirurgie',
      'Schwerpunkte: Implantologie & Zahnersatz',
      'Betreuung in Deutsch, Arabisch, Englisch & Französisch',
      'Zentrale Lage: U-Bhf Schillingstraße (U5), nahe Alexanderplatz',
    ],
    cardTitle: 'Aus unserer Praxis',
    cardNote: 'Implantatmodell und Zahnersatz-Planung in unserer Praxis in Berlin-Mitte.',
  },
  services: {
    badge: 'Unsere Leistungen',
    title: 'Komplette Zahnmedizin unter einem Dach',
    subtitle: 'Von der Vorsorge bis zum komplexen Eingriff — alle Behandlungen an einem Ort.',
    items: [
      {
        title: 'Oralchirurgie',
        desc: 'Operative Eingriffe in erfahrenen Händen — von der schonenden Zahnentfernung bis zum komplexen Eingriff, durch einen Fachzahnarzt für Oralchirurgie.',
      },
      {
        title: 'Implantologie',
        desc: 'Festsitzender Ersatz auf Implantaten — für einzelne Zähne oder ganze Zahnreihen, natürlich in Aussehen und Gefühl.',
      },
      {
        title: 'Zahnersatz & Prothetik',
        desc: 'Kronen, Brücken und Prothesen nach Maß — für Funktion, Ästhetik und ein sicheres Gefühl beim Lächeln, Sprechen und Essen.',
      },
      {
        title: 'Zahnerhaltung & Füllungen',
        desc: 'Moderne, zahnfarbene Füllungen und Wurzelbehandlungen, um Ihre natürlichen Zähne so lange wie möglich zu erhalten.',
      },
      {
        title: 'Ästhetische Zahnmedizin',
        desc: 'Bleaching und Veneers für ein strahlendes, natürliches Lächeln — schonend und individuell geplant.',
      },
      {
        title: 'Prophylaxe & Zahnreinigung',
        desc: 'Professionelle Zahnreinigung und Vorsorge, damit Zähne und Zahnfleisch langfristig gesund bleiben.',
      },
    ],
  },
  implants: {
    badge: 'Unsere Schwerpunkte',
    title: 'Oralchirurgie & Implantologie — aus einer Hand',
    subtitle:
      'Als Fachzahnarzt für Oralchirurgie plant und operiert Dr. Mousa selbst — vom ersten Befund über das Implantat bis zur fertigen Krone bleiben Sie in einer Praxis und bei einem Ansprechpartner.',
    benefits: [
      'Fachzahnarzt für Oralchirurgie — Eingriffe sind tägliche Routine',
      'Implantate von der Planung bis zur Krone in einer Praxis',
      'Schonende, moderne Verfahren für eine zügige Heilung',
      'Persönliche Betreuung durch Dr. Mousa — Beratung bis Nachsorge',
    ],
    cta: 'Beratung auf WhatsApp anfragen',
  },
  results: {
    badge: 'Ergebnisse',
    title: 'Vorher / Nachher — echte Fälle aus der Praxis',
    subtitle:
      'Diese Ergebnisse stammen aus der eigenen Arbeit von Dr. Mousa und wurden zuerst auf seinem Instagram-Profil veröffentlicht.',
    caption: 'Zahnersatz',
    note: 'Jeder Fall ist individuell — welche Behandlung für Sie die richtige ist, klären wir nach einer Untersuchung in der Praxis.',
    ctaInstagram: 'Mehr Ergebnisse auf Instagram',
    before: 'Vorher',
    after: 'Nachher',
    enlarge: 'Vergrößern',
    close: 'Schließen',
  },
  tour: {
    badge: 'Praxisrundgang',
    title: 'Ein Blick in unsere Praxis',
    subtitle: 'Moderne Räume in der Schillingstraße 12 — zentral in Berlin-Mitte, direkt an der U5.',
    play: 'Rundgang abspielen',
  },
  why: {
    badge: 'Warum wir',
    title: 'Die Praxis im Überblick',
    items: [
      {
        title: 'Echte Spezialisierung',
        desc: 'Fachzahnarzt für Oralchirurgie: operative Eingriffe und Implantate gehören zur täglichen Routine.',
      },
      {
        title: 'Alles unter einem Dach',
        desc: 'Von der Beratung über den Eingriff bis zum fertigen Zahnersatz — ein Ansprechpartner, ein Ort.',
      },
      {
        title: 'In Ihrer Sprache',
        desc: 'Beratung und Behandlung in Deutsch, Arabisch, Englisch oder Französisch — ohne Sprachbarriere.',
      },
      {
        title: 'Zentral in Berlin-Mitte',
        desc: 'Schillingstr. 12, direkt am U-Bhf Schillingstraße (U5) — wenige Minuten vom Alexanderplatz.',
      },
    ],
  },
  reviews: {
    badge: 'Bewertungen',
    title: 'Was unsere Patienten sagen',
    text: 'Echte Patientenbewertungen zu Dr. Safwan Mousa finden Sie auf Doctolib und Google — lesen Sie dort, wie andere ihren Besuch in der Praxis erlebt haben.',
    doctolib: 'Bewertungen auf Doctolib',
    google: 'Bewertungen auf Google',
  },
  faq: {
    badge: 'Häufige Fragen',
    title: 'Fragen & Antworten',
    items: [
      {
        q: 'Wie vereinbare ich einen Termin?',
        a: 'Am schnellsten über WhatsApp an +49 176 3631 3068, telefonisch unter 030 5588626 oder über das Formular auf dieser Seite. Die Praxis bestätigt Ihren Termin persönlich.',
      },
      {
        q: 'Was kostet eine Behandlung?',
        a: 'Die Kosten hängen von Ihrem individuellen Behandlungsplan ab. Nach der Untersuchung erhalten Sie einen transparenten Heil- und Kostenplan, bevor eine Behandlung beginnt — für eine erste Auskunft schreiben Sie uns gern auf WhatsApp.',
      },
      {
        q: 'Ist die Praxis eine Privatpraxis?',
        a: 'Ja, es handelt sich um eine Privatpraxis; die Abrechnung erfolgt nach der Gebührenordnung für Zahnärzte (GOZ). Gesetzlich Versicherte sind als Selbstzahler herzlich willkommen — Details klären wir gern vorab mit Ihnen.',
      },
      {
        q: 'Welche Sprachen sprechen Sie in der Praxis?',
        a: 'Wir betreuen Sie in Deutsch, Arabisch, Englisch und Französisch — Dr. Mousa berät Sie gern in Ihrer Sprache.',
      },
      {
        q: 'Wie finde ich die Praxis?',
        a: 'Sie finden uns in der Schillingstr. 12, 10179 Berlin (Mitte). Der U-Bahnhof Schillingstraße (U5) liegt direkt vor der Tür, der Alexanderplatz ist wenige Gehminuten entfernt.',
      },
      {
        q: 'Setzen Sie auch Implantate?',
        a: 'Ja — Implantologie ist einer unserer Schwerpunkte. Nach Untersuchung und Planung erhalten Sie einen klaren Behandlungs- und Kostenplan, von der Implantation bis zur fertigen Krone in einer Praxis.',
      },
    ],
  },
  appointment: {
    badge: 'Termin',
    title: 'Termin vereinbaren',
    subtitle:
      'Füllen Sie das Formular aus — wir öffnen WhatsApp mit Ihrer vorbereiteten Nachricht an die Praxis. Dr. Mousa und sein Team bestätigen Ihren Termin persönlich.',
    name: 'Ihr Name',
    phone: 'Ihre Telefonnummer',
    service: 'Behandlung',
    date: 'Wunschtermin (optional)',
    message: 'Ihre Nachricht (optional)',
    messagePlaceholder: 'Beschreiben Sie kurz Ihr Anliegen…',
    submit: 'Per WhatsApp senden',
    note: 'Mit dem Absenden öffnet sich WhatsApp — es werden keine Daten auf dieser Website gespeichert.',
    errors: {
      name: 'Bitte geben Sie Ihren Namen an.',
      phone: 'Bitte geben Sie eine gültige Telefonnummer an.',
    },
    whatsappIntro: 'Terminwunsch über die Website',
  },
  contact: {
    badge: 'Kontakt',
    title: 'So erreichen Sie uns',
    addressLabel: 'Adresse',
    phoneLabel: 'Telefon (Praxis)',
    whatsappLabel: 'WhatsApp / Mobil',
    hoursLabel: 'Öffnungszeiten',
    hoursValue: 'Mo–Fr 09:00–18:00',
    transitLabel: 'Anfahrt',
    transitValue: 'U-Bhf Schillingstraße (U5) direkt vor der Tür · Alexanderplatz wenige Gehminuten',
    directions: 'Route planen',
  },
  footer: {
    desc: 'Privatpraxis für Zahnmedizin, Oralchirurgie und Implantologie in Berlin-Mitte — persönlich betreut in vier Sprachen.',
    quickLinks: 'Navigation',
    servicesTitle: 'Leistungen',
    contactTitle: 'Kontakt',
    rights: 'Alle Rechte vorbehalten.',
    impressum: 'Impressum',
    datenschutz: 'Datenschutzerklärung',
    socials: 'Folgen Sie uns',
  },
}

const ar: typeof de = {
  nav: {
    about: 'من نحن',
    services: 'خدماتنا',
    implants: 'تخصصاتنا',
    results: 'النتائج',
    whyUs: 'لماذا نحن',
    faq: 'الأسئلة الشائعة',
    contact: 'اتصلوا بنا',
    book: 'احجزوا موعداً',
  },
  hero: {
    badge: 'عيادة طب الأسنان · برلين-ميته (ألكسندر بلاتس)',
    title: 'طب أسنان حديث وجراحة فم في قلب برلين',
    subtitle:
      'الدكتور صفوان موسى — طبيب أسنان وأخصائي جراحة الفم — يرحب بكم في عيادته الخاصة في شارع شيلينغ 12: زراعة الأسنان، تركيبات عالية الجودة، وطب الأسنان العام كاملاً، مع رعاية شخصية بأربع لغات.',
    cta: 'احجزوا موعداً',
    call: 'اتصال',
    whatsapp: 'واتساب',
    directions: 'الاتجاهات',
    stats: [
      { value: 'أخصائي', label: 'في جراحة الفم' },
      { value: '4', label: 'لغات: ألمانية · عربية · إنجليزية · فرنسية' },
      { value: 'U5', label: 'محطة شيلينغ شتراسه، برلين-ميته' },
    ],
  },
  about: {
    badge: 'عن العيادة',
    title: 'الدكتور صفوان موسى',
    role: 'طبيب أسنان وأخصائي جراحة الفم · زراعة الأسنان',
    p1: 'الدكتور صفوان موسى طبيب أسنان وأخصائي في جراحة الفم. في عيادته الخاصة في شارع شيلينغ 12 في برلين-ميته — على بُعد دقائق قليلة من ألكسندر بلاتس — يجمع بين خبرة جراحية وطب أسنان حديث: من زراعة الأسنان والتركيبات المتقنة إلى الحفاظ على الأسنان الطبيعية.',
    p2: 'تستقبل العيادة المرضى بأربع لغات — الألمانية والعربية والإنجليزية والفرنسية. يأخذ الدكتور موسى وقته ليشرح كل حالة بوضوح، ويرافقكم شخصياً من أول استشارة حتى المتابعة بعد العلاج.',
    points: [
      'أخصائي في جراحة الفم',
      'التخصصات: زراعة الأسنان والتركيبات',
      'رعاية بالألمانية والعربية والإنجليزية والفرنسية',
      'موقع مركزي: محطة شيلينغ شتراسه (U5)، قرب ألكسندر بلاتس',
    ],
    cardTitle: 'من داخل عيادتنا',
    cardNote: 'نموذج زرعة أسنان وتخطيط التركيبات في عيادتنا في برلين-ميته.',
  },
  services: {
    badge: 'خدماتنا',
    title: 'طب أسنان متكامل تحت سقف واحد',
    subtitle: 'من الوقاية إلى الجراحات المعقدة — كل العلاجات في مكان واحد.',
    items: [
      {
        title: 'جراحة الفم',
        desc: 'تدخلات جراحية بأيدٍ خبيرة — من الخلع اللطيف للأسنان إلى الجراحات المعقدة، على يد أخصائي في جراحة الفم.',
      },
      {
        title: 'زراعة الأسنان',
        desc: 'تعويض ثابت على الغرسات — لسن واحدة أو لصف كامل، بمظهر وإحساس طبيعيين.',
      },
      {
        title: 'تركيبات الأسنان',
        desc: 'تيجان وجسور وأطقم مصنوعة على المقاس — للوظيفة والجمال وشعور آمن عند الابتسام والكلام والأكل.',
      },
      {
        title: 'الحفاظ على الأسنان والحشوات',
        desc: 'حشوات حديثة بلون الأسنان وعلاج جذور، للحفاظ على أسنانكم الطبيعية أطول فترة ممكنة.',
      },
      {
        title: 'طب الأسنان التجميلي',
        desc: 'تبييض وقشرة تجميلية (فينير) لابتسامة مشرقة وطبيعية — بلطف وبخطة فردية.',
      },
      {
        title: 'الوقاية وتنظيف الأسنان',
        desc: 'تنظيف احترافي للأسنان ووقاية دورية، لتبقى الأسنان واللثة بصحة جيدة على المدى الطويل.',
      },
    ],
  },
  implants: {
    badge: 'تخصصاتنا',
    title: 'جراحة الفم وزراعة الأسنان — من يد واحدة',
    subtitle:
      'بصفته أخصائياً في جراحة الفم، يخطط الدكتور موسى ويجري العملية بنفسه — من أول فحص إلى الغرسة وحتى التاج النهائي، تبقون في عيادة واحدة ومع شخص واحد مسؤول عنكم.',
    benefits: [
      'أخصائي جراحة الفم — الجراحات جزء من عمله اليومي',
      'الغرسات من التخطيط إلى التاج في عيادة واحدة',
      'أساليب حديثة ولطيفة لشفاء سريع',
      'متابعة شخصية من الدكتور موسى — من الاستشارة حتى ما بعد العلاج',
    ],
    cta: 'اطلبوا استشارة عبر واتساب',
  },
  results: {
    badge: 'النتائج',
    title: 'قبل / بعد — حالات حقيقية من العيادة',
    subtitle: 'هذه النتائج من عمل الدكتور موسى نفسه، ونُشرت أولاً على حسابه في إنستغرام.',
    caption: 'تركيبات الأسنان',
    note: 'كل حالة فردية — العلاج المناسب لكم نحدده بعد الفحص في العيادة.',
    ctaInstagram: 'نتائج أكثر على إنستغرام',
    before: 'قبل',
    after: 'بعد',
    enlarge: 'تكبير',
    close: 'إغلاق',
  },
  tour: {
    badge: 'جولة في العيادة',
    title: 'نظرة داخل عيادتنا',
    subtitle: 'غرف حديثة في شارع شيلينغ 12 — في قلب برلين-ميته، مباشرة عند خط U5.',
    play: 'تشغيل الجولة',
  },
  why: {
    badge: 'لماذا نحن',
    title: 'العيادة باختصار',
    items: [
      {
        title: 'تخصص حقيقي',
        desc: 'أخصائي في جراحة الفم: العمليات الجراحية والغرسات جزء من عمله اليومي.',
      },
      {
        title: 'كل شيء تحت سقف واحد',
        desc: 'من الاستشارة إلى العملية حتى التركيبة النهائية — شخص واحد مسؤول ومكان واحد.',
      },
      {
        title: 'بلغتكم',
        desc: 'استشارة وعلاج بالألمانية أو العربية أو الإنجليزية أو الفرنسية — دون حاجز لغة.',
      },
      {
        title: 'في قلب برلين-ميته',
        desc: 'شارع شيلينغ 12، مباشرة عند محطة شيلينغ شتراسه (U5) — على بُعد دقائق من ألكسندر بلاتس.',
      },
    ],
  },
  reviews: {
    badge: 'التقييمات',
    title: 'ماذا يقول مرضانا',
    text: 'تجدون تقييمات حقيقية من مرضى الدكتور صفوان موسى على Doctolib وGoogle — اقرأوا هناك كيف عاش الآخرون زيارتهم للعيادة.',
    doctolib: 'التقييمات على Doctolib',
    google: 'التقييمات على Google',
  },
  faq: {
    badge: 'الأسئلة الشائعة',
    title: 'أسئلة وأجوبة',
    items: [
      {
        q: 'كيف أحجز موعداً؟',
        a: 'الأسرع عبر واتساب على +49 176 3631 3068، أو بالهاتف على 030 5588626، أو عبر النموذج في هذه الصفحة. تؤكد العيادة موعدكم شخصياً.',
      },
      {
        q: 'كم تكلفة العلاج؟',
        a: 'تعتمد التكلفة على خطة العلاج الفردية الخاصة بكم. بعد الفحص تتلقون خطة علاج وتكلفة شفافة قبل بدء أي علاج — ولأي استفسار أول راسلونا عبر واتساب.',
      },
      {
        q: 'هل العيادة خاصة؟',
        a: 'نعم، هي عيادة خاصة؛ تتم المحاسبة وفق جدول أتعاب أطباء الأسنان (GOZ). نرحب أيضاً بالمؤمّنين قانونياً كمريض يدفع بنفسه — ونوضح لكم التفاصيل مسبقاً بكل سرور.',
      },
      {
        q: 'ما اللغات التي تتحدثونها في العيادة؟',
        a: 'نرعاكم بالألمانية والعربية والإنجليزية والفرنسية — يسعد الدكتور موسى باستشارتكم بلغتكم.',
      },
      {
        q: 'كيف أصل إلى العيادة؟',
        a: 'تجدوننا في شارع شيلينغ 12، 10179 برلين (ميته). محطة شيلينغ شتراسه (U5) أمام الباب مباشرة، وألكسندر بلاتس على بُعد دقائق سيراً.',
      },
      {
        q: 'هل تقومون بزراعة الأسنان؟',
        a: 'نعم — زراعة الأسنان من تخصصاتنا. بعد الفحص والتخطيط تتلقون خطة علاج وتكلفة واضحة، من الغرسة حتى التاج النهائي في عيادة واحدة.',
      },
    ],
  },
  appointment: {
    badge: 'الموعد',
    title: 'احجزوا موعداً',
    subtitle:
      'املؤوا النموذج — سنفتح واتساب برسالتكم الجاهزة إلى العيادة. يؤكد الدكتور موسى وفريقه موعدكم شخصياً.',
    name: 'اسمكم',
    phone: 'رقم هاتفكم',
    service: 'العلاج',
    date: 'الموعد المفضل (اختياري)',
    message: 'رسالتكم (اختياري)',
    messagePlaceholder: 'صفوا طلبكم باختصار…',
    submit: 'إرسال عبر واتساب',
    note: 'عند الإرسال يُفتح واتساب — لا تُحفظ أي بيانات على هذا الموقع.',
    errors: {
      name: 'يرجى إدخال اسمكم.',
      phone: 'يرجى إدخال رقم هاتف صحيح.',
    },
    whatsappIntro: 'طلب موعد عبر الموقع',
  },
  contact: {
    badge: 'اتصلوا بنا',
    title: 'كيف تصلون إلينا',
    addressLabel: 'العنوان',
    phoneLabel: 'الهاتف (العيادة)',
    whatsappLabel: 'واتساب / الجوال',
    hoursLabel: 'أوقات العمل',
    hoursValue: 'الاثنين–الجمعة 09:00–18:00',
    transitLabel: 'الوصول',
    transitValue: 'محطة شيلينغ شتراسه (U5) أمام الباب مباشرة · ألكسندر بلاتس على بُعد دقائق سيراً',
    directions: 'خططوا الطريق',
  },
  footer: {
    desc: 'عيادة خاصة لطب الأسنان وجراحة الفم وزراعة الأسنان في برلين-ميته — رعاية شخصية بأربع لغات.',
    quickLinks: 'التنقل',
    servicesTitle: 'الخدمات',
    contactTitle: 'الاتصال',
    rights: 'كل الحقوق محفوظة.',
    impressum: 'بيانات النشر (Impressum)',
    datenschutz: 'سياسة الخصوصية',
    socials: 'تابعونا',
  },
}

const en: typeof de = {
  nav: {
    about: 'About',
    services: 'Services',
    implants: 'Specialities',
    results: 'Results',
    whyUs: 'Why us',
    faq: 'FAQ',
    contact: 'Contact',
    book: 'Book an appointment',
  },
  hero: {
    badge: 'Dental practice · Berlin-Mitte (Alexanderplatz)',
    title: 'Modern dentistry & oral surgery in Berlin-Mitte',
    subtitle:
      'Dr Safwan Mousa — dentist and specialist in oral surgery — welcomes you to his private practice at Schillingstraße 12: implantology, high-quality dentures and complete general dentistry, personally cared for in four languages.',
    cta: 'Book an appointment',
    call: 'Call',
    whatsapp: 'WhatsApp',
    directions: 'Directions',
    stats: [
      { value: 'Specialist', label: 'in oral surgery' },
      { value: '4', label: 'Languages: DE · AR · EN · FR' },
      { value: 'U5', label: 'Schillingstraße station, Berlin-Mitte' },
    ],
  },
  about: {
    badge: 'About the practice',
    title: 'Dr Safwan Mousa',
    role: 'Dentist & specialist in oral surgery · Implantology',
    p1: 'Dr Safwan Mousa is a dentist and a specialist in oral surgery (Fachzahnarzt für Oralchirurgie). At his private practice at Schillingstraße 12 in Berlin-Mitte — just a few minutes from Alexanderplatz — he combines surgical experience with modern dentistry: from implantology and demanding prosthetics to preserving your natural teeth.',
    p2: 'The practice cares for patients in four languages — German, Arabic, English and French. Dr Mousa takes the time to explain every finding clearly, and personally accompanies you from the first consultation to aftercare.',
    points: [
      'Specialist in oral surgery',
      'Focus: implantology & dentures',
      'Care in German, Arabic, English & French',
      'Central location: Schillingstraße station (U5), near Alexanderplatz',
    ],
    cardTitle: 'From our practice',
    cardNote: 'Implant model and denture planning at our practice in Berlin-Mitte.',
  },
  services: {
    badge: 'Our services',
    title: 'Complete dentistry under one roof',
    subtitle: 'From prevention to complex surgery — every treatment in one place.',
    items: [
      {
        title: 'Oral surgery',
        desc: 'Surgical procedures in experienced hands — from gentle tooth removal to complex operations, by a specialist in oral surgery.',
      },
      {
        title: 'Implantology',
        desc: 'Fixed replacements on implants — for single teeth or whole rows, natural in look and feel.',
      },
      {
        title: 'Dentures & prosthetics',
        desc: 'Crowns, bridges and dentures made to measure — for function, aesthetics and confidence when smiling, speaking and eating.',
      },
      {
        title: 'Tooth preservation & fillings',
        desc: 'Modern tooth-coloured fillings and root canal treatments to keep your natural teeth as long as possible.',
      },
      {
        title: 'Aesthetic dentistry',
        desc: 'Whitening and veneers for a bright, natural smile — gentle and individually planned.',
      },
      {
        title: 'Prevention & dental cleaning',
        desc: 'Professional cleaning and check-ups so teeth and gums stay healthy in the long term.',
      },
    ],
  },
  implants: {
    badge: 'Our specialities',
    title: 'Oral surgery & implantology — from one pair of hands',
    subtitle:
      'As a specialist in oral surgery, Dr Mousa plans and operates himself — from the first examination to the implant and the finished crown, you stay in one practice with one person responsible for you.',
    benefits: [
      'Specialist in oral surgery — operations are daily routine',
      'Implants from planning to the crown in one practice',
      'Gentle, modern techniques for a speedy recovery',
      'Personal care by Dr Mousa — from consultation to aftercare',
    ],
    cta: 'Ask for advice on WhatsApp',
  },
  results: {
    badge: 'Results',
    title: 'Before / after — real cases from the practice',
    subtitle: "These results are Dr Mousa's own work and were first published on his Instagram profile.",
    caption: 'Dentures (Zahnersatz)',
    note: 'Every case is individual — after an examination at the practice we will clarify which treatment is right for you.',
    ctaInstagram: 'More results on Instagram',
    before: 'Before',
    after: 'After',
    enlarge: 'Enlarge',
    close: 'Close',
  },
  tour: {
    badge: 'Practice tour',
    title: 'A look inside our practice',
    subtitle: 'Modern rooms at Schillingstraße 12 — central in Berlin-Mitte, right on the U5 line.',
    play: 'Play the tour',
  },
  why: {
    badge: 'Why us',
    title: 'The practice at a glance',
    items: [
      {
        title: 'Real specialisation',
        desc: 'Specialist in oral surgery: surgical procedures and implants are part of the daily routine.',
      },
      {
        title: 'Everything under one roof',
        desc: 'From consultation to the operation to the finished denture — one contact person, one place.',
      },
      {
        title: 'In your language',
        desc: 'Consultation and treatment in German, Arabic, English or French — no language barrier.',
      },
      {
        title: 'Central in Berlin-Mitte',
        desc: 'Schillingstr. 12, right at Schillingstraße station (U5) — a few minutes from Alexanderplatz.',
      },
    ],
  },
  reviews: {
    badge: 'Reviews',
    title: 'What our patients say',
    text: 'You can find genuine patient reviews of Dr Safwan Mousa on Doctolib and Google — read there how others experienced their visit to the practice.',
    doctolib: 'Reviews on Doctolib',
    google: 'Reviews on Google',
  },
  faq: {
    badge: 'Common questions',
    title: 'Questions & answers',
    items: [
      {
        q: 'How do I book an appointment?',
        a: 'Fastest via WhatsApp at +49 176 3631 3068, by phone at 030 5588626, or via the form on this page. The practice confirms your appointment personally.',
      },
      {
        q: 'What does a treatment cost?',
        a: 'Costs depend on your individual treatment plan. After the examination you receive a transparent treatment and cost plan before any treatment begins — for a first estimate, feel free to message us on WhatsApp.',
      },
      {
        q: 'Is the practice a private practice?',
        a: 'Yes, it is a private practice; billing follows the German fee schedule for dentists (GOZ). Patients with statutory insurance are warmly welcome as self-payers — we are happy to clarify the details with you in advance.',
      },
      {
        q: 'Which languages do you speak at the practice?',
        a: 'We care for you in German, Arabic, English and French — Dr Mousa is happy to advise you in your language.',
      },
      {
        q: 'How do I find the practice?',
        a: 'You will find us at Schillingstr. 12, 10179 Berlin (Mitte). Schillingstraße station (U5) is right outside the door, and Alexanderplatz is a few minutes on foot.',
      },
      {
        q: 'Do you also place implants?',
        a: 'Yes — implantology is one of our specialities. After examination and planning you receive a clear treatment and cost plan, from implantation to the finished crown in one practice.',
      },
    ],
  },
  appointment: {
    badge: 'Appointment',
    title: 'Book an appointment',
    subtitle:
      'Fill in the form — we will open WhatsApp with your prepared message to the practice. Dr Mousa and his team confirm your appointment personally.',
    name: 'Your name',
    phone: 'Your phone number',
    service: 'Treatment',
    date: 'Preferred date (optional)',
    message: 'Your message (optional)',
    messagePlaceholder: 'Briefly describe your request…',
    submit: 'Send via WhatsApp',
    note: 'On submitting, WhatsApp opens — no data is stored on this website.',
    errors: {
      name: 'Please enter your name.',
      phone: 'Please enter a valid phone number.',
    },
    whatsappIntro: 'Appointment request via the website',
  },
  contact: {
    badge: 'Contact',
    title: 'How to reach us',
    addressLabel: 'Address',
    phoneLabel: 'Phone (practice)',
    whatsappLabel: 'WhatsApp / mobile',
    hoursLabel: 'Opening hours',
    hoursValue: 'Mon–Fri 09:00–18:00',
    transitLabel: 'Getting here',
    transitValue: 'Schillingstraße station (U5) right outside · Alexanderplatz a few minutes on foot',
    directions: 'Plan route',
  },
  footer: {
    desc: 'Private practice for dentistry, oral surgery and implantology in Berlin-Mitte — personal care in four languages.',
    quickLinks: 'Navigation',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
    impressum: 'Imprint (Impressum)',
    datenschutz: 'Privacy policy',
    socials: 'Follow us',
  },
}

const fr: typeof de = {
  nav: {
    about: 'À propos',
    services: 'Soins',
    implants: 'Spécialités',
    results: 'Résultats',
    whyUs: 'Pourquoi nous',
    faq: 'FAQ',
    contact: 'Contact',
    book: 'Prendre rendez-vous',
  },
  hero: {
    badge: 'Cabinet dentaire · Berlin-Mitte (Alexanderplatz)',
    title: 'Dentisterie moderne & chirurgie orale à Berlin-Mitte',
    subtitle:
      'Le Dr Safwan Mousa — dentiste et spécialiste en chirurgie orale — vous accueille dans son cabinet privé, Schillingstraße 12 : implantologie, prothèses de haute qualité et dentisterie générale complète, avec un suivi personnel en quatre langues.',
    cta: 'Prendre rendez-vous',
    call: 'Appeler',
    whatsapp: 'WhatsApp',
    directions: 'Itinéraire',
    stats: [
      { value: 'Spécialiste', label: 'en chirurgie orale' },
      { value: '4', label: 'Langues : DE · AR · EN · FR' },
      { value: 'U5', label: 'Station Schillingstraße, Berlin-Mitte' },
    ],
  },
  about: {
    badge: 'À propos du cabinet',
    title: 'Dr Safwan Mousa',
    role: 'Dentiste & spécialiste en chirurgie orale · Implantologie',
    p1: 'Le Dr Safwan Mousa est dentiste et spécialiste en chirurgie orale (Fachzahnarzt für Oralchirurgie). Dans son cabinet privé, Schillingstraße 12 à Berlin-Mitte — à quelques minutes d’Alexanderplatz — il allie expérience chirurgicale et dentisterie moderne : de l’implantologie et des prothèses exigeantes à la préservation de vos dents naturelles.',
    p2: 'Le cabinet accueille les patients en quatre langues — allemand, arabe, anglais et français. Le Dr Mousa prend le temps d’expliquer chaque diagnostic clairement et vous accompagne personnellement, de la première consultation au suivi.',
    points: [
      'Spécialiste en chirurgie orale',
      'Spécialités : implantologie & prothèses',
      'Accueil en allemand, arabe, anglais & français',
      'Adresse centrale : station Schillingstraße (U5), près d’Alexanderplatz',
    ],
    cardTitle: 'Dans notre cabinet',
    cardNote: 'Modèle d’implant et planification de prothèse dans notre cabinet à Berlin-Mitte.',
  },
  services: {
    badge: 'Nos soins',
    title: 'Une dentisterie complète sous un même toit',
    subtitle: 'De la prévention aux interventions complexes — tous les soins au même endroit.',
    items: [
      {
        title: 'Chirurgie orale',
        desc: 'Des interventions chirurgicales entre des mains expérimentées — de l’extraction douce aux opérations complexes, par un spécialiste en chirurgie orale.',
      },
      {
        title: 'Implantologie',
        desc: 'Des remplacements fixes sur implants — pour une dent ou une arcade entière, naturels d’aspect et de sensation.',
      },
      {
        title: 'Prothèses dentaires',
        desc: 'Couronnes, bridges et prothèses sur mesure — pour la fonction, l’esthétique et la confiance en souriant, parlant et mangeant.',
      },
      {
        title: 'Conservation & obturations',
        desc: 'Obturations modernes de la couleur des dents et traitements de racine, pour conserver vos dents naturelles le plus longtemps possible.',
      },
      {
        title: 'Dentisterie esthétique',
        desc: 'Blanchiment et facettes pour un sourire lumineux et naturel — en douceur et sur mesure.',
      },
      {
        title: 'Prévention & détartrage',
        desc: 'Nettoyage professionnel et contrôles réguliers, pour garder dents et gencives en bonne santé durablement.',
      },
    ],
  },
  implants: {
    badge: 'Nos spécialités',
    title: 'Chirurgie orale & implantologie — d’une seule main',
    subtitle:
      'En tant que spécialiste en chirurgie orale, le Dr Mousa planifie et opère lui-même — du premier examen à l’implant et à la couronne définitive, vous restez dans un seul cabinet, avec un seul interlocuteur.',
    benefits: [
      'Spécialiste en chirurgie orale — les interventions sont son quotidien',
      'Implants de la planification à la couronne dans un seul cabinet',
      'Techniques modernes et douces pour une guérison rapide',
      'Suivi personnel par le Dr Mousa — de la consultation au contrôle',
    ],
    cta: 'Demander conseil sur WhatsApp',
  },
  results: {
    badge: 'Résultats',
    title: 'Avant / après — de vrais cas du cabinet',
    subtitle: 'Ces résultats sont le travail du Dr Mousa lui-même et ont d’abord été publiés sur son profil Instagram.',
    caption: 'Prothèses dentaires',
    note: 'Chaque cas est individuel — le soin adapté à votre situation se décide après un examen au cabinet.',
    ctaInstagram: 'Plus de résultats sur Instagram',
    before: 'Avant',
    after: 'Après',
    enlarge: 'Agrandir',
    close: 'Fermer',
  },
  tour: {
    badge: 'Visite du cabinet',
    title: 'Un aperçu de notre cabinet',
    subtitle: 'Des locaux modernes, Schillingstraße 12 — au centre de Berlin-Mitte, directement sur la ligne U5.',
    play: 'Lancer la visite',
  },
  why: {
    badge: 'Pourquoi nous',
    title: 'Le cabinet en un coup d’œil',
    items: [
      {
        title: 'Une vraie spécialisation',
        desc: 'Spécialiste en chirurgie orale : interventions et implants font partie de son quotidien.',
      },
      {
        title: 'Tout sous un même toit',
        desc: 'De la consultation à l’intervention et à la prothèse définitive — un interlocuteur, un lieu.',
      },
      {
        title: 'Dans votre langue',
        desc: 'Consultation et soins en allemand, arabe, anglais ou français — sans barrière de langue.',
      },
      {
        title: 'Au centre de Berlin-Mitte',
        desc: 'Schillingstr. 12, juste à la station Schillingstraße (U5) — à quelques minutes d’Alexanderplatz.',
      },
    ],
  },
  reviews: {
    badge: 'Avis',
    title: 'Ce que disent nos patients',
    text: 'Vous trouverez de véritables avis de patients sur le Dr Safwan Mousa sur Doctolib et Google — découvrez-y comment d’autres ont vécu leur visite au cabinet.',
    doctolib: 'Avis sur Doctolib',
    google: 'Avis sur Google',
  },
  faq: {
    badge: 'Questions fréquentes',
    title: 'Questions & réponses',
    items: [
      {
        q: 'Comment prendre rendez-vous ?',
        a: 'Le plus rapide : WhatsApp au +49 176 3631 3068, par téléphone au 030 5588626 ou via le formulaire de cette page. Le cabinet confirme votre rendez-vous personnellement.',
      },
      {
        q: 'Combien coûte un traitement ?',
        a: 'Le coût dépend de votre plan de traitement individuel. Après l’examen, vous recevez un plan de traitement et de coûts transparent avant tout début de soin — pour une première estimation, écrivez-nous sur WhatsApp.',
      },
      {
        q: 'Le cabinet est-il un cabinet privé ?',
        a: 'Oui, il s’agit d’un cabinet privé ; la facturation suit la nomenclature allemande des dentistes (GOZ). Les patients assurés au régime légal sont les bienvenus en paiement direct — nous clarifions volontiers les détails avec vous à l’avance.',
      },
      {
        q: 'Quelles langues parlez-vous au cabinet ?',
        a: 'Nous vous accueillons en allemand, arabe, anglais et français — le Dr Mousa vous conseille volontiers dans votre langue.',
      },
      {
        q: 'Comment trouver le cabinet ?',
        a: 'Vous nous trouverez Schillingstr. 12, 10179 Berlin (Mitte). La station Schillingstraße (U5) est juste devant la porte, et Alexanderplatz à quelques minutes à pied.',
      },
      {
        q: 'Posez-vous aussi des implants ?',
        a: 'Oui — l’implantologie est l’une de nos spécialités. Après examen et planification, vous recevez un plan de traitement et de coûts clair, de la pose de l’implant à la couronne définitive, dans un seul cabinet.',
      },
    ],
  },
  appointment: {
    badge: 'Rendez-vous',
    title: 'Prendre rendez-vous',
    subtitle:
      'Remplissez le formulaire — nous ouvrirons WhatsApp avec votre message préparé pour le cabinet. Le Dr Mousa et son équipe confirment votre rendez-vous personnellement.',
    name: 'Votre nom',
    phone: 'Votre numéro de téléphone',
    service: 'Soin souhaité',
    date: 'Date souhaitée (optionnel)',
    message: 'Votre message (optionnel)',
    messagePlaceholder: 'Décrivez brièvement votre demande…',
    submit: 'Envoyer via WhatsApp',
    note: 'À l’envoi, WhatsApp s’ouvre — aucune donnée n’est enregistrée sur ce site.',
    errors: {
      name: 'Veuillez indiquer votre nom.',
      phone: 'Veuillez indiquer un numéro de téléphone valide.',
    },
    whatsappIntro: 'Demande de rendez-vous via le site web',
  },
  contact: {
    badge: 'Contact',
    title: 'Comment nous joindre',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone (cabinet)',
    whatsappLabel: 'WhatsApp / mobile',
    hoursLabel: 'Horaires',
    hoursValue: 'Lun–Ven 09:00–18:00',
    transitLabel: 'Accès',
    transitValue: 'Station Schillingstraße (U5) juste devant · Alexanderplatz à quelques minutes à pied',
    directions: 'Planifier l’itinéraire',
  },
  footer: {
    desc: 'Cabinet privé de dentisterie, chirurgie orale et implantologie à Berlin-Mitte — un suivi personnel en quatre langues.',
    quickLinks: 'Navigation',
    servicesTitle: 'Soins',
    contactTitle: 'Contact',
    rights: 'Tous droits réservés.',
    impressum: 'Mentions légales (Impressum)',
    datenschutz: 'Protection des données',
    socials: 'Suivez-nous',
  },
}

export type Translation = typeof de

export const translations: Record<Lang, Translation> = { de, ar, en, fr }
