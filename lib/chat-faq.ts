// Instant FAQ engine for the Praxis Dr. Safwan Mousa chat assistant.
// Runs 100% in the browser: no API call, no external service, no AI
// provider — verified by code inspection (this file is the whole engine).
//
// "Training" = three matching layers, in order:
// 1) Precise regex intents (approved practice facts only, DE/AR/EN/FR +
//    Moroccan dialect, the languages the practice's visitors speak).
// 2) A keyword-scoring net over normalized text (Arabic diacritics and
//    ة/ه, ي/ى unified; German umlauts folded ä→a, ö→o, ü→u, ß→ss) that
//    catches rephrasings and small typos the regexes miss — it can only
//    pick an intent, never invent an answer.
// 3) Off-list -> a WhatsApp invitation. Prices are always deflected to
//    WhatsApp and medical questions to the practice team, by construction.

import type { Lang } from '@/lib/translations'

export type FaqAnswer = { text: string; cards: string[]; answerLang: Lang }

const ARABIC_SCRIPT = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/
const WA = '+49 176 3631 3068'
const TEL = '030 5588626'

type FaqItem = {
  id: string
  cards?: string[]
  match: RegExp
  keywords?: string[]
  answers: Record<Lang, string>
}

const FAQ: FaqItem[] = [
  {
    id: 'emergency',
    cards: ['phone', 'whatsapp'],
    match: /(ألم|وجع|يوجع|توجع|كيضر|طوارئ|ضرني|zahnschmerz|schmerz|notfall|weh|douleur|mal aux dents|urgence|dental pain|toothache|emergency|hurts|in pain)/i,
    keywords: ['وجع', 'الم شديد', 'طوارئ', 'schmerz', 'notfall', 'douleur', 'toothache', 'urgence'],
    answers: {
      de: `Das tut mir leid. Ich kann keine Diagnose stellen und keine Medikamente empfehlen: Bei Schmerzen oder im Notfall kontaktieren Sie die Praxis bitte so schnell wie möglich auf WhatsApp unter ${WA} oder telefonisch unter ${TEL} — wir kümmern uns zügig um Sie.`,
      ar: `آسف لسماع ذلك. لا أستطيع تقديم تشخيص أو وصف دواء: في حالة الألم أو الطوارئ، تواصلوا مع العيادة في أقرب وقت عبر واتساب على ${WA} أو بالهاتف على ${TEL}، وسنهتم بكم بسرعة.`,
      en: `I am sorry you are in pain. I cannot give a diagnosis or recommend medication: for pain or an emergency, please contact the practice as soon as possible on WhatsApp at ${WA} or by phone at ${TEL}, and we will take care of you quickly.`,
      fr: `Je suis désolé pour votre douleur. Je ne peux pas poser de diagnostic ni recommander de médicament : en cas de douleur ou d'urgence, contactez le cabinet au plus vite sur WhatsApp au ${WA} ou par téléphone au ${TEL}, nous nous occuperons de vous rapidement.`,
    },
  },
  {
    id: 'bleeding',
    cards: ['phone', 'whatsapp'],
    match: /(نزيف|بينزف|دم من|ورم|انتفاخ|متورم|خراج|blutung|blutet|schwellung|geschwollen|abszess|eiter|saignement|gonflement|enflé|bleeding|swelling|swollen|abscess)/i,
    keywords: ['نزيف', 'ورم', 'انتفاخ', 'blutung', 'schwellung', 'abszess', 'saignement', 'bleeding', 'swelling'],
    answers: {
      de: `Eine Blutung, Schwellung oder ein Abszess sollte schnell von einem Zahnarzt angesehen werden. Ich kann keine Diagnose stellen: Kontaktieren Sie die Praxis bitte ohne Warten auf WhatsApp unter ${WA} oder telefonisch unter ${TEL}.`,
      ar: `النزيف أو الانتفاخ أو الخراج يحتاج أن يراه طبيب أسنان بسرعة. لا أستطيع تقديم تشخيص: تواصلوا مع العيادة دون انتظار عبر واتساب على ${WA} أو بالهاتف على ${TEL}.`,
      en: `Bleeding, swelling or an abscess needs to be seen quickly by a dentist. I cannot give a diagnosis: contact the practice without waiting on WhatsApp at ${WA} or by phone at ${TEL}.`,
      fr: `Un saignement, un gonflement ou un abcès doit être vu rapidement par un dentiste. Je ne peux pas poser de diagnostic : contactez le cabinet sans attendre sur WhatsApp au ${WA} ou par téléphone au ${TEL}.`,
    },
  },
  {
    id: 'broken',
    cards: ['phone', 'whatsapp'],
    match: /(سن مكسور|ضرس مكسور|اتكسر|مكسورة|كسر في|تهرس|abgebrochen|abgebrochener zahn|zahn abgebrochen|ausgebrochen|dent cassée|cassé ma dent|broken tooth|chipped|cracked tooth|broke my tooth)/i,
    keywords: ['سن مكسور', 'تهرس', 'abgebrochen', 'broken tooth', 'dent cassee'],
    answers: {
      de: `Ein abgebrochener Zahn sollte möglichst schnell untersucht werden, um ihn wenn möglich zu erhalten. Kontaktieren Sie die Praxis auf WhatsApp unter ${WA} oder telefonisch — wir sagen Ihnen, was Sie bis dahin tun können.`,
      ar: `السن المكسور يجب فحصه بسرعة لإنقاذه إن أمكن. تواصلوا مع العيادة عبر واتساب على ${WA} أو بالهاتف، وسيخبركم الفريق بما تفعلونه في الانتظار.`,
      en: `A broken tooth should be examined quickly to save it if possible. Contact the practice on WhatsApp at ${WA} or by phone, and the team will tell you what to do meanwhile.`,
      fr: `Une dent cassée doit être examinée rapidement pour la sauver si possible. Contactez le cabinet sur WhatsApp au ${WA} ou par téléphone, l'équipe vous dira quoi faire en attendant.`,
    },
  },
  {
    id: 'price',
    cards: ['whatsapp'],
    match: /(ثمن|سعر|أسعار|بشحال|بكم|بكام|كم تكلفة|تكلفة|was kostet|kostet|kosten|preis|preise|tarif|kostenvoranschlag|prix|coût|combien coûte|price|cost|how much|fees)/i,
    keywords: ['بشحال', 'اسعار', 'تكلفه', 'kostet', 'kosten', 'preis', 'prix', 'tarif', 'price', 'how much', 'combien'],
    answers: {
      de: `Die Kosten hängen von Ihrem individuellen Behandlungsplan ab, der nach einer Untersuchung erstellt wird — inklusive eines transparenten Heil- und Kostenplans, bevor eine Behandlung beginnt. Für eine erste Auskunft schreiben Sie uns gern auf WhatsApp unter ${WA}.`,
      ar: `تختلف الأسعار حسب خطة العلاج الخاصة بكم، والتي تُحدَّد بعد الفحص — مع خطة علاج وتكلفة شفافة قبل بدء أي علاج. للحصول على معلومة أولى، راسلونا عبر واتساب على ${WA}.`,
      en: `Prices depend on your personal treatment plan, which is set after an examination — including a transparent cost plan before any treatment begins. For a first estimate, message us on WhatsApp at ${WA}.`,
      fr: `Les tarifs dépendent de votre plan de traitement personnalisé, établi après un examen — avec un devis transparent avant le début de tout soin. Pour une première estimation, écrivez-nous sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'payment',
    cards: ['whatsapp'],
    match: /(تقسيط|أقساط|اقساط|طرق الدفع|وسائل الدفع|كاش|نقداً|بطاقة بنكية|فيزا|zahlung|bezahlen|raten|ratenzahlung|karte|bar|überweisung|paiement|payment|installment|pay in|credit card|cash|visa)/i,
    keywords: ['تقسيط', 'اقساط', 'zahlung', 'raten', 'paiement', 'payment', 'installment'],
    answers: {
      de: `Zu den Zahlungsmöglichkeiten informiert Sie die Praxis gern persönlich — je nach Behandlungsplan. Fragen Sie einfach auf WhatsApp unter ${WA} oder telefonisch unter ${TEL} nach.`,
      ar: `بخصوص طرق الدفع، ستعلمكم العيادة بالخيارات المتاحة شخصياً — حسب خطة علاجكم. اسألوا ببساطة عبر واتساب على ${WA} أو بالهاتف على ${TEL}.`,
      en: `For payment options, the practice will gladly inform you personally, depending on your treatment plan. Just ask on WhatsApp at ${WA} or by phone at ${TEL}.`,
      fr: `Pour les modalités de paiement, le cabinet vous informera volontiers personnellement, selon votre plan de traitement. Demandez simplement sur WhatsApp au ${WA} ou par téléphone au ${TEL}.`,
    },
  },
  {
    id: 'insurance',
    cards: ['whatsapp'],
    match: /(تأمين|تامين|ضمان صحي|krankenkasse|kasse|versichert|versicherung|kostenübernahme|gesetzlich|privat versichert|selbstzahler|assurance|mutuelle|insurance|coverage|covered)/i,
    keywords: ['تامين', 'تأمين', 'krankenkasse', 'versichert', 'selbstzahler', 'assurance', 'insurance'],
    answers: {
      de: `Unsere Praxis ist eine Privatpraxis; die Abrechnung erfolgt nach der Gebührenordnung für Zahnärzte (GOZ). Gesetzlich Versicherte sind als Selbstzahler herzlich willkommen. Ob Ihre private Versicherung Kosten übernimmt, hängt von Ihrem Tarif ab — für eine genaue Auskunft fragen Sie bitte die Praxis auf WhatsApp unter ${WA}.`,
      ar: `عيادتنا عيادة خاصة؛ تتم المحاسبة وفق جدول أتعاب أطباء الأسنان (GOZ). نرحب بالمؤمّنين قانونياً كمريض يدفع بنفسه. أما تغطية تأمينكم الخاص فتعتمد على تعاقدكم — لمعلومة دقيقة اسألوا العيادة عبر واتساب على ${WA}.`,
      en: `Our practice is a private practice; billing follows the German fee schedule for dentists (GOZ). Patients with statutory insurance are welcome as self-payers. Whether your private insurance covers costs depends on your tariff — for a precise answer, ask the practice on WhatsApp at ${WA}.`,
      fr: `Notre cabinet est un cabinet privé ; la facturation suit la nomenclature allemande des dentistes (GOZ). Les patients du régime légal sont les bienvenus en paiement direct. La prise en charge par votre assurance privée dépend de votre contrat — pour une réponse précise, demandez au cabinet sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'private',
    cards: ['whatsapp'],
    match: /(privatpraxis|private praxis|privatpatient|عيادة خاصة|عياده خاصه|خاصة|clinique privée|cabinet privé|private practice|private patient)/i,
    keywords: ['privatpraxis', 'عياده خاصه', 'private practice', 'cabinet prive'],
    answers: {
      de: `Ja, die Praxis Dr. Safwan Mousa ist eine Privatpraxis in Berlin-Mitte (Schillingstr. 12). Privat und gesetzlich Versicherte sind gleichermaßen willkommen — gesetzlich Versicherte als Selbstzahler. Mehr dazu gern auf WhatsApp unter ${WA}.`,
      ar: `نعم، عيادة الدكتور صفوان موسى عيادة خاصة في برلين-ميته (شارع شيلينغ 12). نرحب بالمؤمّنين خاصاً وقانونياً على حد سواء — والمؤمّنون قانونياً كمريض يدفع بنفسه. تفاصيل أكثر عبر واتساب على ${WA}.`,
      en: `Yes, Praxis Dr. Safwan Mousa is a private practice in Berlin-Mitte (Schillingstr. 12). Private and statutory patients are equally welcome — statutory patients as self-payers. More details on WhatsApp at ${WA}.`,
      fr: `Oui, le cabinet du Dr Safwan Mousa est un cabinet privé à Berlin-Mitte (Schillingstr. 12). Assurés privés et du régime légal sont également bienvenus — ces derniers en paiement direct. Plus de détails sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'warranty',
    cards: ['whatsapp'],
    match: /(ضمان|ضمانة|garantie|gewährleistung|warranty|guarantee)/i,
    keywords: ['ضمان', 'garantie', 'gewahrleistung', 'warranty'],
    answers: {
      de: `Garantie- und Gewährleistungsbedingungen hängen von der jeweiligen Behandlung ab: Die Praxis erklärt sie Ihnen vor Behandlungsbeginn genau — fragen Sie gern auf WhatsApp unter ${WA} nach.`,
      ar: `شروط الضمان تختلف حسب العلاج المنفذ: ستشرحها لكم العيادة بدقة قبل بدء العلاج — اسألوا عبر واتساب على ${WA}.`,
      en: `Warranty conditions depend on the treatment performed: the practice will explain them precisely before starting — feel free to ask on WhatsApp at ${WA}.`,
      fr: `Les conditions de garantie dépendent du traitement réalisé : le cabinet vous les expliquera précisément avant de commencer — demandez sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'hours',
    cards: ['booking'],
    match: /(ساعات العمل|مواعيد|أوقات|وقتاش تفتحو|وقتاش تسكرو|متى تفتح|متى تغلق|فاتحين|öffnungszeiten|oeffnungszeiten|offnungszeiten|sprechzeiten|wann geöffnet|wann offen|geöffnet|horaire|heures d'ouverture|ouvert|quand ouvrez|opening hours|when.*open|what time)/i,
    keywords: ['مواعيد العياده', 'ساعات العمل', 'اوقات', 'offnungszeiten', 'oeffnungszeiten', 'sprechzeiten', 'horaire', 'opening hours', 'ouvert'],
    answers: {
      de: `Die Praxis ist Montag bis Freitag von 09:00 bis 18:00 Uhr für Sie da. Für einen Termin schreiben Sie uns auf WhatsApp unter ${WA} oder rufen Sie an: ${TEL}.`,
      ar: `العيادة مفتوحة من الاثنين إلى الجمعة من 09:00 إلى 18:00. للحجز، راسلونا عبر واتساب على ${WA} أو اتصلوا على ${TEL}.`,
      en: `The practice is open Monday to Friday from 09:00 to 18:00. To book, message us on WhatsApp at ${WA} or call ${TEL}.`,
      fr: `Le cabinet est ouvert du lundi au vendredi de 09:00 à 18:00. Pour réserver, écrivez-nous sur WhatsApp au ${WA} ou appelez le ${TEL}.`,
    },
  },
  {
    id: 'reschedule',
    cards: ['whatsapp', 'phone'],
    match: /(تأجيل|تاجيل|إلغاء موعد|الغاء موعد|تغيير الموعد|تغير الموعد|الغي|termin verschieben|termin absagen|absagen|verschieben|annuler|reporter|déplacer mon|reschedule|cancel my|move my appointment)/i,
    keywords: ['تاجيل موعد', 'الغاء موعد', 'termin verschieben', 'absagen', 'reschedule', 'annuler'],
    answers: {
      de: `Kein Problem: Um Ihren Termin zu verschieben oder abzusagen, geben Sie der Praxis bitte kurz auf WhatsApp unter ${WA} oder telefonisch Bescheid — wir finden einen neuen Zeitpunkt.`,
      ar: `لا مشكلة: لتأجيل موعدكم أو إلغائه، أخبروا العيادة عبر واتساب على ${WA} أو بالهاتف، وسنجد لكم موعداً آخر.`,
      en: `No problem: to reschedule or cancel your appointment, let the practice know on WhatsApp at ${WA} or by phone, and we will find another slot.`,
      fr: `Aucun souci : pour reporter ou annuler votre rendez-vous, prévenez le cabinet sur WhatsApp au ${WA} ou par téléphone, et nous trouverons un autre créneau.`,
    },
  },
  {
    id: 'booking',
    cards: ['booking', 'whatsapp'],
    match: /(حجز|احجز|موعد|نبغي نجي|نحب نجي|termin|vereinbaren|buchen|buchung|sprechstunde|rendez-vous|rendez vous|réserv|prendre rendez|book|appointment|booking|rdv)/i,
    keywords: ['احجز موعد', 'حجز موعد', 'termin vereinbaren', 'termin buchen', 'rendez vous', 'appointment', 'booking'],
    answers: {
      de: `Sie können auf drei Wegen einen Termin vereinbaren: über das Formular auf dieser Website, telefonisch unter ${TEL} oder auf WhatsApp unter ${WA}. Die Praxis bestätigt Ihren Termin persönlich.`,
      ar: `يمكنكم الحجز بثلاث طرق: عبر نموذج المواعيد في هذا الموقع، أو بالهاتف على ${TEL}، أو عبر واتساب على ${WA}. وستؤكد لكم العيادة الموعد شخصياً.`,
      en: `You can book in three ways: the appointment form on this website, by phone at ${TEL}, or on WhatsApp at ${WA}. The practice will confirm your appointment personally.`,
      fr: `Vous pouvez réserver de trois façons : le formulaire de rendez-vous sur ce site, par téléphone au ${TEL}, ou sur WhatsApp au ${WA}. Le cabinet confirmera votre rendez-vous personnellement.`,
    },
  },
  {
    id: 'location',
    cards: ['maps'],
    match: /(أين|فين|العنوان|الموقع|تقع|يقع|كاين|البلاصة|لوكيشن|كيفاش نوصل|نوصل|باركينج|adresse|wo ist|wo sind|anfahrt|wie komme|u-bahn|ubahn|bahnhof|parken|parking|localisation|emplacement|où se trouve|où êtes-vous|comment venir|address|where|location|directions|how to get|position|gps)/i,
    keywords: ['العنوان', 'مكانكم فين', 'لوكيشن', 'adresse', 'anfahrt', 'u-bahn', 'where are you', 'location', 'directions'],
    answers: {
      de: `Sie finden uns in der Schillingstr. 12, 10179 Berlin (Mitte) — der U-Bahnhof Schillingstraße (U5) liegt direkt vor der Tür, der Alexanderplatz ist wenige Gehminuten entfernt. Auf dieser Seite finden Sie eine Karte und einen Button zur Routenplanung.`,
      ar: `توجد العيادة في شارع شيلينغ 12، 10179 برلين (ميته) — محطة شيلينغ شتراسه (U5) أمام الباب مباشرة، وألكسندر بلاتس على بُعد دقائق سيراً. ستجدون في هذه الصفحة خريطة وزراً لتخطيط الطريق.`,
      en: `You will find us at Schillingstr. 12, 10179 Berlin (Mitte) — Schillingstraße station (U5) is right outside the door, and Alexanderplatz is a few minutes on foot. This page has a map and a directions button.`,
      fr: `Vous nous trouverez Schillingstr. 12, 10179 Berlin (Mitte) — la station Schillingstraße (U5) est juste devant la porte, et Alexanderplatz à quelques minutes à pied. Cette page contient une carte et un bouton d'itinéraire.`,
    },
  },
  {
    id: 'team',
    cards: ['whatsapp'],
    match: /(من هو الدكتور|مين الدكتور|مين دكتور|خبرة الدكتور|نبذة|الطبيب|فريق|wer ist|dr. mousa|doktor mousa|erfahrung|fachzahnarzt|oralchirurg|qui est le docteur|qui est le dr|expérience du|who is the doctor|who is dr|doctor's experience|about the doctor|the team)/i,
    keywords: ['مين الدكتور', 'خبره الدكتور', 'wer ist', 'fachzahnarzt', 'who is the doctor', 'the team'],
    answers: {
      de: `Dr. Safwan Mousa ist Zahnarzt und Fachzahnarzt für Oralchirurgie. Seine Schwerpunkte sind Oralchirurgie, Implantologie und hochwertiger Zahnersatz — dazu die ganze allgemeine Zahnmedizin. Für Fragen zu Ihrem Fall schreiben Sie uns auf WhatsApp unter ${WA}, die Praxis antwortet Ihnen direkt.`,
      ar: `الدكتور صفوان موسى طبيب أسنان وأخصائي في جراحة الفم. تخصصاته: جراحة الفم وزراعة الأسنان والتركيبات عالية الجودة — إضافة إلى طب الأسنان العام كاملاً. لأي سؤال عن حالتكم، راسلونا عبر واتساب على ${WA} وسترد عليكم العيادة مباشرة.`,
      en: `Dr Safwan Mousa is a dentist and a specialist in oral surgery. His focus areas are oral surgery, implantology and high-quality dentures — plus complete general dentistry. For any question about your case, message us on WhatsApp at ${WA} and the practice will reply directly.`,
      fr: `Le Dr Safwan Mousa est dentiste et spécialiste en chirurgie orale. Ses spécialités : chirurgie orale, implantologie et prothèses de haute qualité — ainsi que toute la dentisterie générale. Pour toute question sur votre cas, écrivez-nous sur WhatsApp au ${WA}, le cabinet vous répondra directement.`,
    },
  },
  {
    id: 'duration',
    cards: ['whatsapp'],
    match: /(كم جلسة|كام جلسة|كم مدة|كام مدة|مدة العلاج|wie viele termine|wie lange dauert|wie viele sitzungen|dauer der behandlung|combien de séances|combien de temps|how many visits|how long does|how many sessions)/i,
    keywords: ['كم جلسه', 'كام جلسه', 'wie lange dauert', 'wie viele termine', 'how many visits', 'combien de seances'],
    answers: {
      de: `Die Anzahl der Termine hängt von Ihrem Fall ab und wird nach der Untersuchung festgelegt. Für einen genauen Plan für Ihre Situation schreiben Sie uns auf WhatsApp unter ${WA}.`,
      ar: `عدد الجلسات يعتمد على حالتكم ويُحدَّد بعد الفحص. لخطة دقيقة تناسب وضعكم، راسلونا عبر واتساب على ${WA}.`,
      en: `The number of sessions depends on your case, set after examination. For a precise plan for your situation, message us on WhatsApp at ${WA}.`,
      fr: `Le nombre de séances dépend de votre cas, établi après examen. Pour un plan précis adapté à votre situation, écrivez-nous sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'implants',
    cards: ['whatsapp'],
    match: /(زراعة|زرعه|زرعة|زراعه|غرسة|اغرس|implant)/i,
    keywords: ['زراعه', 'زرعه', 'غرسه', 'implantat', 'implant'],
    answers: {
      de: `Ein Zahnimplantat ersetzt die Wurzel eines fehlenden Zahns — fest, stabil und langlebig, ohne die Nachbarzähne zu beschleifen. Implantologie ist ein Schwerpunkt von Dr. Mousa: Von der Planung bis zur fertigen Krone bleibt alles in einer Praxis. Ob ein Implantat für Sie passt, klärt eine Untersuchung — schreiben Sie uns auf WhatsApp unter ${WA}.`,
      ar: `زراعة الأسنان تعوّض جذر السن المفقودة بحل ثابت ومستقر ودائم، دون المساس بالأسنان المجاورة. الزراعة من تخصصات الدكتور موسى: من التخطيط إلى التاج النهائي كل شيء في عيادة واحدة. لمعرفة ما إذا كانت مناسبة لكم، يلزم فحص — راسلونا عبر واتساب على ${WA}.`,
      en: `A dental implant replaces the root of a missing tooth — fixed, stable and long-lasting, without grinding the neighbouring teeth. Implantology is one of Dr Mousa's specialities: from planning to the finished crown, everything stays in one practice. Whether an implant suits you is decided after an examination — message us on WhatsApp at ${WA}.`,
      fr: `L'implant dentaire remplace la racine d'une dent manquante — fixe, stable et durable, sans toucher aux dents voisines. L'implantologie est une spécialité du Dr Mousa : de la planification à la couronne définitive, tout se fait dans un seul cabinet. Un examen dira si l'implant vous convient — écrivez-nous sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'surgery',
    cards: ['whatsapp'],
    match: /(جراحة|جراحه|عملية|عمليه|weisheitszahn|weisheitszähne|oralchirurgie|chirurgie|operation|operativ|knochenaufbau|sinuslift|chirurgie orale|chirurgie buccale|oral surgery|surgery|wisdom tooth|wisdom teeth)/i,
    keywords: ['جراحه', 'عمليه', 'weisheitszahn', 'oralchirurgie', 'sinuslift', 'oral surgery', 'wisdom tooth'],
    answers: {
      de: `Als Fachzahnarzt für Oralchirurgie führt Dr. Mousa operative Eingriffe selbst durch — darunter Weisheitszahn-Entfernungen und weitere oralchirurgische Behandlungen. Was in Ihrem Fall nötig ist, wird nach Untersuchung und Befund besprochen: Schreiben Sie uns auf WhatsApp unter ${WA}.`,
      ar: `بصفته أخصائياً في جراحة الفم، يجري الدكتور موسى التدخلات الجراحية بنفسه — ومنها خلع أضراس العقل وعلاجات جراحية أخرى. ما يلزم في حالتكم يُناقش بعد الفحص: راسلونا عبر واتساب على ${WA}.`,
      en: `As a specialist in oral surgery, Dr Mousa performs surgical procedures himself — including wisdom tooth removal and other oral-surgery treatments. What your case needs is discussed after examination and findings: message us on WhatsApp at ${WA}.`,
      fr: `En tant que spécialiste en chirurgie orale, le Dr Mousa réalise lui-même les interventions — dont l'extraction des dents de sagesse et d'autres soins de chirurgie orale. Ce qu'il faut dans votre cas se discute après examen : écrivez-nous sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'zahnersatz',
    cards: ['whatsapp'],
    match: /(تيجان|تاج السن|تركيبات|تركيبة|zahnersatz|krone|kronen|brücke|brücken|prothese|prothetik|vollprothese|teilprothese|couronne|prothèse|prothese|prosthetics|denture|crown|bridge)/i,
    keywords: ['تركيبات', 'تيجان', 'zahnersatz', 'krone', 'brucke', 'prothese', 'couronne', 'crown', 'denture'],
    answers: {
      de: `Zahnersatz ist ein Schwerpunkt der Praxis: Kronen, Brücken und Prothesen werden individuell geplant und angefertigt. Beispiele aus der Praxis sehen Sie im Bereich „Ergebnisse" auf dieser Seite und auf Instagram (@safwan_87m). Für Ihren Fall ist eine Untersuchung nötig — schreiben Sie uns auf WhatsApp unter ${WA}.`,
      ar: `التركيبات من تخصصات العيادة: التيجان والجسور والأطقم تُخطط وتُصنع بشكل فردي. أمثلة من العيادة تجدونها في قسم «النتائج» في هذه الصفحة وعلى إنستغرام (@safwan_87m). لحالتكم يلزم فحص — راسلونا عبر واتساب على ${WA}.`,
      en: `Dentures and prosthetics are a speciality of the practice: crowns, bridges and dentures are planned and made individually. You can see examples in the "Results" section of this page and on Instagram (@safwan_87m). Your case needs an examination — message us on WhatsApp at ${WA}.`,
      fr: `Les prothèses sont une spécialité du cabinet : couronnes, bridges et prothèses sont planifiés et réalisés sur mesure. Vous verrez des exemples dans la rubrique « Résultats » de cette page et sur Instagram (@safwan_87m). Votre cas nécessite un examen — écrivez-nous sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'veneers',
    cards: ['whatsapp'],
    match: /(فينير|عدسات الأسنان|عدسات الاسنان|قشرة|هوليوود|veneer|facette|hollywood)/i,
    keywords: ['فينير', 'هوليوود', 'veneer', 'facette'],
    answers: {
      de: `Veneers — dünne Keramikschalen für die Frontzähne — gehören zur ästhetischen Zahnmedizin der Praxis. Ob sie für Ihre Zähne geeignet sind, klärt eine Untersuchung: Schreiben Sie uns auf WhatsApp unter ${WA}.`,
      ar: `الفينير — قشرة خزفية رقيقة للأسنان الأمامية — جزء من طب الأسنان التجميلي في العيادة. ما إذا كانت مناسبة لأسنانكم يحدده الفحص: راسلونا عبر واتساب على ${WA}.`,
      en: `Veneers — thin ceramic shells for the front teeth — are part of the practice's aesthetic dentistry. Whether they suit your teeth is decided after an examination: message us on WhatsApp at ${WA}.`,
      fr: `Les facettes — de fines coques en céramique pour les dents de devant — font partie de la dentisterie esthétique du cabinet. Un examen dira si elles conviennent à vos dents : écrivez-nous sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'rootcanal',
    cards: ['whatsapp'],
    match: /(علاج جذور|علاج عصب|حشو عصب|عصب السن|wurzelbehandlung|wurzel|nervbehandlung|traitement de racine|dévitalisation|root canal|endodont)/i,
    keywords: ['علاج جذور', 'حشو عصب', 'wurzelbehandlung', 'root canal'],
    answers: {
      de: `Die Praxis bietet Wurzelbehandlungen an, um einen tief geschädigten Zahn zu erhalten — schonend und in Ruhe erklärt. Für eine Beurteilung Ihres Falls schreiben Sie uns auf WhatsApp unter ${WA}.`,
      ar: `توفر العيادة علاج الجذور لإنقاذ السن المصاب في العمق، برعاية لطيفة وشرح هادئ. لتقييم حالتكم، راسلونا عبر واتساب على ${WA}.`,
      en: `The practice offers root canal treatment to save a deeply damaged tooth, gently and explained calmly. For an assessment of your case, message us on WhatsApp at ${WA}.`,
      fr: `Le cabinet propose le traitement de racine pour sauver une dent atteinte en profondeur, en douceur et avec des explications calmes. Pour une évaluation de votre cas, écrivez-nous sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'whitening',
    cards: ['whatsapp'],
    match: /(تبييض|تبيض|بياض|اسناني صفرا|اصفرار|bleaching|aufhellung|weiße zähne|weisse zähne|weißere|zahnaufhellung|blanchiment|whitening|whiter teeth)/i,
    keywords: ['تبييض', 'تبيض', 'bleaching', 'aufhellung', 'blanchiment', 'whitening'],
    answers: {
      de: `Wir bieten professionelles Bleaching in der Praxis an — für ein sichtbar helleres, natürliches Lächeln. Für Details und einen Termin schreiben Sie uns auf WhatsApp unter ${WA}.`,
      ar: `نوفر تبييضاً احترافياً للأسنان في العيادة، لابتسامة أكثر إشراقاً وطبيعية. للتفاصيل وحجز موعد، راسلونا عبر واتساب على ${WA}.`,
      en: `We offer professional in-practice whitening — for a visibly brighter, natural smile. For details and an appointment, message us on WhatsApp at ${WA}.`,
      fr: `Nous proposons un blanchiment professionnel au cabinet, pour un sourire visiblement plus éclatant et naturel. Pour les détails et un rendez-vous, écrivez-nous sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'kids',
    cards: ['whatsapp'],
    match: /(أطفال|اطفال|طفلي|طفل |ابني|ابنتي|ولدي|kinder|kind|mein sohn|meine tochter|enfants|pour enfant|kids|children|my child|my son|my daughter)/i,
    keywords: ['اطفال', 'طفلي', 'ابني', 'kinder', 'kids', 'children'],
    answers: {
      de: `Auch Kinder sind in der Praxis willkommen — mit ruhiger, altersgerechter Betreuung. Für einen konkreten Wunsch für Ihr Kind beschreiben Sie uns kurz Ihr Anliegen auf WhatsApp unter ${WA}, wir leiten Sie weiter.`,
      ar: `الأطفال أيضاً مرحب بهم في العيادة — برعاية هادئة مناسبة لأعمارهم. لعلاج محدد لطفلكم، صفوا لنا الحاجة عبر واتساب على ${WA} وسيرشدكم الفريق.`,
      en: `Children are also welcome at the practice, with calm, age-appropriate care. For a specific treatment for your child, briefly describe the need on WhatsApp at ${WA} and the team will guide you.`,
      fr: `Les enfants sont aussi les bienvenus au cabinet, avec des soins calmes et adaptés à leur âge. Pour un soin précis pour votre enfant, décrivez-nous le besoin sur WhatsApp au ${WA}, l'équipe vous orientera.`,
    },
  },
  {
    id: 'cleaning',
    cards: ['whatsapp'],
    match: /(تنظيف|تنضيف|إزالة الجير|ازالة الجير|تلميع|كشف|فحص شامل|zahnreinigung|professionelle zahnreinigung|prophylaxe|vorsorge|kontrolle|untersuchung|détartrage|detartrage|nettoyage|check-up|checkup|cleaning|scaling|polishing|check up)/i,
    keywords: ['تنظيف', 'تنضيف', 'ازاله الجير', 'zahnreinigung', 'prophylaxe', 'vorsorge', 'detartrage', 'cleaning', 'checkup'],
    answers: {
      de: `Die Praxis bietet Kontrolluntersuchungen, professionelle Zahnreinigung (Prophylaxe) und Vorsorge an, damit Zähne und Zahnfleisch gesund bleiben. Für einen Termin schreiben Sie uns auf WhatsApp unter ${WA}.`,
      ar: `تقدم العيادة الفحوصات الدورية والتنظيف الاحترافي للأسنان (الوقاية) للحفاظ على صحة الأسنان واللثة. لحجز موعد، راسلونا عبر واتساب على ${WA}.`,
      en: `The practice offers check-ups, professional dental cleaning (prophylaxis) and prevention to keep teeth and gums healthy. To book, message us on WhatsApp at ${WA}.`,
      fr: `Le cabinet propose contrôles, nettoyage professionnel (prophylaxie) et prévention pour garder dents et gencives en bonne santé. Pour un rendez-vous, écrivez-nous sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'filling',
    cards: ['whatsapp'],
    match: /(حشو|حشوه|حشوة|تسوس|مسوس|füllung|fullung|karies|loch im zahn|plombage|filling|cavity|carie|decay)/i,
    keywords: ['حشو', 'تسوس', 'fullung', 'karies', 'filling', 'cavity'],
    answers: {
      de: `Füllungen sind Teil der Zahnerhaltung in der Praxis: Dr. Mousa untersucht den Zahn und schlägt die passende Versorgung vor — modern und zahnfarbend. Für einen Termin schreiben Sie uns auf WhatsApp unter ${WA}.`,
      ar: `الحشوات جزء من الحفاظ على الأسنان في العيادة: يفحص الدكتور موسى السن ويقترح العلاج المناسب — حديثاً وبلون الأسنان. لحجز موعد، راسلونا عبر واتساب على ${WA}.`,
      en: `Fillings are part of tooth preservation at the practice: Dr Mousa examines the tooth and proposes the right treatment — modern and tooth-coloured. To book, message us on WhatsApp at ${WA}.`,
      fr: `Les obturations font partie de la conservation dentaire au cabinet : le Dr Mousa examinera votre dent et proposera le soin adapté — moderne et de la couleur des dents. Pour un rendez-vous, écrivez-nous sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'extraction',
    cards: ['whatsapp'],
    match: /(خلع|اخلع|zahn ziehen|ziehen|extraktion|entfernen|extraction|extraire|remove a tooth|pull a tooth|take out)/i,
    keywords: ['خلع', 'اخلع', 'zahn ziehen', 'extraktion', 'extraction'],
    answers: {
      de: `Eine Zahnentfernung wird erst nach Untersuchung entschieden, wenn ein Zahn nicht erhalten werden kann — als Fachzahnarzt für Oralchirurgie führt Dr. Mousa sie schonend selbst durch. Für eine Untersuchung schreiben Sie uns auf WhatsApp unter ${WA}.`,
      ar: `الخلع لا يُقرَّر إلا بعد فحص، عندما لا يمكن إنقاذ السن — وبصفته أخصائي جراحة الفم يجريه الدكتور موسى بنفسه بلطف. لفحص سنكم، راسلونا عبر واتساب على ${WA}.`,
      en: `Extraction is only decided after an examination, when a tooth cannot be saved — as a specialist in oral surgery, Dr Mousa performs it gently himself. To have your tooth examined, message us on WhatsApp at ${WA}.`,
      fr: `L'extraction n'est décidée qu'après un examen, quand la dent ne peut pas être sauvée — en tant que spécialiste en chirurgie orale, le Dr Mousa la réalise lui-même en douceur. Pour faire examiner votre dent, écrivez-nous sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'sensitivity',
    cards: ['whatsapp'],
    match: /(حساسية|حساسيه|حساسة|الم مع البارد|الم مع الحلو|empfindlich|sensibilität|sensibilite|sensitivity|sensitive teeth|hurts when I drink cold)/i,
    keywords: ['حساسيه', 'الم مع البارد', 'empfindlich', 'sensitivity'],
    answers: {
      de: `Empfindliche Zähne können mehrere Ursachen haben, und eine Diagnose kann ich hier nicht stellen. Eine Untersuchung in der Praxis findet die Ursache: Schreiben Sie uns auf WhatsApp unter ${WA} für einen Termin.`,
      ar: `حساسية الأسنان قد تكون لها أسباب متعددة، ولا أستطيع التشخيص هنا. الفحص في العيادة سيحدد السبب: راسلونا عبر واتساب على ${WA} لحجز موعد.`,
      en: `Sensitivity can have several causes, and I cannot diagnose here. An examination at the practice will find the cause: message us on WhatsApp at ${WA} to book.`,
      fr: `La sensibilité peut avoir plusieurs causes, et je ne peux pas poser de diagnostic ici. Un examen au cabinet permettra d'en trouver la cause : écrivez-nous sur WhatsApp au ${WA} pour un rendez-vous.`,
    },
  },
  {
    id: 'xray',
    cards: ['whatsapp'],
    match: /(أشعة|اشعه|بانوراما|راديو|röntgen|rontgen|aufnahme|radiographie|panoramique|x-ray|xray|scan)/i,
    keywords: ['اشعه', 'بانوراما', 'rontgen', 'xray', 'x-ray'],
    answers: {
      de: `Ob in Ihrem Fall ein Röntgenbild nötig ist, bestätigt Ihnen die Praxis bei der Untersuchung oder direkt auf WhatsApp unter ${WA}.`,
      ar: `لمعرفة ما إذا كانت الأشعة ضرورية في حالتكم، ستؤكد لكم العيادة ذلك عند الفحص أو مباشرة عبر واتساب على ${WA}.`,
      en: `To know whether an X-ray is needed in your case, the practice will confirm during the examination or directly on WhatsApp at ${WA}.`,
      fr: `Pour savoir si une radiographie est nécessaire dans votre cas, le cabinet vous le confirmera lors de l'examen ou directement sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'results',
    cards: ['whatsapp'],
    match: /(نتائج|قبل وبعد|قبل بعد|صور الحالات|vorher|nachher|ergebnisse|vorher-nachher|beispiele|fälle|instagram|avant après|avant-après|résultats|resultats|before and after|before\/after|results|examples|instagram)/i,
    keywords: ['قبل وبعد', 'ergebnisse', 'vorher nachher', 'instagram', 'resultats', 'before after', 'results'],
    answers: {
      de: `Echte Vorher/Nachher-Ergebnisse von Dr. Mousa sehen Sie im Bereich „Ergebnisse" auf dieser Seite und auf seinem Instagram-Profil @safwan_87m. Jeder Fall ist individuell — was bei Ihnen möglich ist, klärt eine Untersuchung in der Praxis.`,
      ar: `تجدون نتائج حقيقية قبل/بعد من عمل الدكتور موسى في قسم «النتائج» في هذه الصفحة وعلى حسابه في إنستغرام @safwan_87m. كل حالة فردية — وما هو ممكن في حالتكم يحدده الفحص في العيادة.`,
      en: `You can see real before/after results by Dr Mousa in the "Results" section of this page and on his Instagram profile @safwan_87m. Every case is individual — what is possible for you is decided after an examination at the practice.`,
      fr: `Vous verrez de vrais résultats avant/après du Dr Mousa dans la rubrique « Résultats » de cette page et sur son profil Instagram @safwan_87m. Chaque cas est individuel — ce qui est possible pour vous se décide après un examen au cabinet.`,
    },
  },
  {
    id: 'languages',
    match: /(بتتكلموا|تتكلمون|كتتكلمو|لغات|انجليزي|فرنساوي|عربي|arabisch|sprachen|sprache|englisch|französisch|langues|parlez-vous|parlez vous|do you speak|you speak|speak english|speak arabic|speak german)/i,
    keywords: ['بتتكلموا', 'لغات', 'arabisch', 'sprachen', 'do you speak', 'parlez vous'],
    answers: {
      de: `In der Praxis betreuen wir Sie in vier Sprachen: Deutsch, Arabisch, Englisch und Französisch — Dr. Mousa berät Sie gern in Ihrer Sprache. Auch diese Website gibt es in allen vier Sprachen.`,
      ar: `نرعاكم في العيادة بأربع لغات: الألمانية والعربية والإنجليزية والفرنسية — ويسعد الدكتور موسى باستشارتكم بلغتكم. وهذا الموقع أيضاً متوفر باللغات الأربع.`,
      en: `At the practice we care for you in four languages: German, Arabic, English and French — Dr Mousa is happy to advise you in your language. This website is also available in all four languages.`,
      fr: `Au cabinet, nous vous accueillons en quatre langues : allemand, arabe, anglais et français — le Dr Mousa vous conseille volontiers dans votre langue. Ce site existe aussi dans les quatre langues.`,
    },
  },
  {
    id: 'services',
    match: /(خدمات|علاجات|تخصصات|شنو كتديرو|اش كتديرو|leistungen|behandlungen|angebot|was bieten|services|soins|traitements|spécialités|treatments|what do you (do|offer)|your services)/i,
    keywords: ['خدمات', 'علاجات', 'leistungen', 'behandlungen', 'services', 'treatments'],
    answers: {
      de: `Die Praxis bietet: Oralchirurgie, Implantologie, Zahnersatz (Kronen, Brücken, Prothesen), Zahnerhaltung und Füllungen, ästhetische Zahnmedizin (Bleaching, Veneers) sowie Prophylaxe und professionelle Zahnreinigung. Was darf ich Ihnen im Detail erklären?`,
      ar: `تقدم العيادة: جراحة الفم، زراعة الأسنان، التركيبات (تيجان وجسور وأطقم)، الحفاظ على الأسنان والحشوات، طب الأسنان التجميلي (تبييض وفينير)، والوقاية والتنظيف الاحترافي. ما الذي تريدون أن أشرحه لكم بالتفصيل؟`,
      en: `The practice offers: oral surgery, implantology, dentures (crowns, bridges, prostheses), tooth preservation and fillings, aesthetic dentistry (whitening, veneers), and prevention and professional cleaning. What would you like me to explain in detail?`,
      fr: `Le cabinet propose : chirurgie orale, implantologie, prothèses (couronnes, bridges, prothèses), conservation et obturations, dentisterie esthétique (blanchiment, facettes), ainsi que prévention et nettoyage professionnel. Que puis-je vous expliquer en détail ?`,
    },
  },
  {
    id: 'human',
    cards: ['phone', 'whatsapp'],
    match: /(أكلم شخص|اكلم شخص|موظف|شخص حقيقي|بشري|الطبيب نفسه|كلمني|بغيت نهضر مع|einen menschen|echte person|persönlich sprechen|mit jemandem|parler à quelqu|un humain|une personne|real person|human|talk to someone|speak to the|a person)/i,
    keywords: ['اكلم شخص', 'موظف', 'echte person', 'real person', 'humain'],
    answers: {
      de: `Sehr gern! Ich bin der automatische Assistent der Praxis, aber das Team antwortet Ihnen direkt auf WhatsApp unter ${WA} oder telefonisch unter ${TEL} — tippen Sie einfach auf eine der Karten unten.`,
      ar: `بالطبع! أنا المساعد الآلي للعيادة، لكن الفريق يرد عليكم مباشرة عبر واتساب على ${WA} أو بالهاتف على ${TEL} — اضغطوا على إحدى البطاقتين أسفله.`,
      en: `Of course! I am the practice's automated assistant, but the team replies to you directly on WhatsApp at ${WA} or by phone at ${TEL} — tap a card below.`,
      fr: `Bien sûr ! Je suis l'assistant automatique du cabinet, mais l'équipe vous répond directement sur WhatsApp au ${WA} ou par téléphone au ${TEL} — touchez une carte ci-dessous.`,
    },
  },
  {
    id: 'thanks',
    match: /(شكرا|شكراً|مشكور|متشكر|تسلم|بارك الله|danke|vielen dank|merci|thank)/i,
    keywords: ['شكرا', 'متشكر', 'danke', 'merci', 'thank'],
    answers: {
      de: `Sehr gern! Wenn Sie noch eine Frage zu unseren Leistungen, den Öffnungszeiten oder der Terminbuchung haben, bin ich für Sie da. Wir freuen uns auf Ihren Besuch in der Praxis.`,
      ar: `بكل سرور! لا تترددوا إن كان لديكم أي سؤال آخر عن خدماتنا أو أوقات العمل أو الحجز. نتطلع لاستقبالكم في العيادة.`,
      en: `You are very welcome! Do not hesitate if you have another question about our services, hours or booking. We look forward to welcoming you to the practice.`,
      fr: `Avec grand plaisir ! N'hésitez pas si vous avez une autre question sur nos soins, les horaires ou la réservation. Au plaisir de vous accueillir au cabinet.`,
    },
  },
  {
    id: 'bye',
    match: /(مع السلامة|مع السلامه|إلى اللقاء|الى اللقاء|باي|تصبح على خير|tschüss|tschuss|auf wiedersehen|bis bald|au revoir|à bientôt|bye|goodbye|see you)/i,
    keywords: ['مع السلامه', 'الي اللقاء', 'tschuss', 'auf wiedersehen', 'au revoir', 'bye'],
    answers: {
      de: `Auf Wiedersehen und danke für Ihr Interesse! Für einen Termin oder eine Frage bleibt die Praxis auf WhatsApp unter ${WA} erreichbar.`,
      ar: `إلى اللقاء، وشكراً لاهتمامكم! للحجز أو أي سؤال، تبقى العيادة رهن إشارتكم عبر واتساب على ${WA}.`,
      en: `Goodbye and thank you for your interest! To book or ask a question, the practice stays reachable on WhatsApp at ${WA}.`,
      fr: `Au revoir et merci de votre intérêt ! Pour réserver ou poser une question, le cabinet reste joignable sur WhatsApp au ${WA}.`,
    },
  },
  {
    id: 'greeting',
    match: /(^\s*(سلام|السلام عليكم|سلامو عليكم|مرحبا|صباح الخير|مساء الخير|أهلا|اهلا|لاباس|صباح النور)[\s!.,،]*$)|(^\s*(hallo|guten tag|guten morgen|guten abend|servus|bonjour|bonsoir|salut|hello|hi|hey)\b)/i,
    answers: {
      de: `Herzlich willkommen in der Praxis Dr. Safwan Mousa! Ich kann Ihnen zu unseren Leistungen, Implantaten, Öffnungszeiten oder zur Terminbuchung Auskunft geben. Wie kann ich helfen?`,
      ar: `مرحباً بكم في عيادة الدكتور صفوان موسى! يمكنني إخباركم بخدماتنا، زراعة الأسنان، أوقات العمل أو كيفية حجز موعد. كيف يمكنني مساعدتكم؟`,
      en: `Hello and welcome to Praxis Dr Safwan Mousa! I can tell you about our services, implants, opening hours or how to book an appointment. How can I help you?`,
      fr: `Bonjour et bienvenue au cabinet du Dr Safwan Mousa ! Je peux vous renseigner sur nos soins, les implants, les horaires ou la prise de rendez-vous. Comment puis-je vous aider ?`,
    },
  },
]

const OFFLIST: Record<Lang, string> = {
  de: `Vielen Dank für Ihre Nachricht! Für diese genaue Frage antwortet Ihnen die Praxis direkt und schnell auf WhatsApp unter ${WA} — tippen Sie auf die Karte unten. Hier kann ich Ihnen zu Leistungen, Öffnungszeiten, Adresse oder Terminbuchung Auskunft geben.`,
  ar: `شكراً لرسالتكم! بخصوص هذا السؤال بالذات، سيرد عليكم فريق العيادة مباشرة وبسرعة عبر واتساب على ${WA} — اضغطوا على البطاقة أسفله. ويمكنني أيضاً إخباركم هنا بخدماتنا أو أوقات العمل أو العنوان أو كيفية الحجز.`,
  en: `Thank you for your message! For this specific question, the practice team will reply to you directly and quickly on WhatsApp at ${WA} — tap the card below. I can also help you here with our services, hours, address or booking.`,
  fr: `Merci pour votre message ! Pour cette question précise, l'équipe du cabinet vous répondra directement et rapidement sur WhatsApp au ${WA} — touchez la carte ci-dessous. Je peux aussi vous renseigner ici sur nos soins, les horaires, l'adresse ou la réservation.`,
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/[ً-ٰٟ]/g, '')
    .replace(/ـ/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ئ/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ة/g, 'ه')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function faqAnswer(text: string, siteLang: Lang): FaqAnswer {
  const lang: Lang = ARABIC_SCRIPT.test(text) ? 'ar' : siteLang
  // Layer 1: precise regex intents.
  for (const item of FAQ) {
    if (item.match.test(text)) {
      return { text: item.answers[lang] || item.answers.de, cards: item.cards || [], answerLang: lang }
    }
  }
  // Layer 2: keyword scoring over normalized text — catches rephrasings
  // and small typos. A single strong keyword (score >= 2 total) wins.
  const norm = ' ' + normalize(text) + ' '
  let best: FaqItem | null = null
  let bestScore = 0
  for (const item of FAQ) {
    if (!item.keywords) continue
    let score = 0
    for (const kw of item.keywords) {
      if (norm.includes(' ' + normalize(kw) + ' ') || norm.includes(normalize(kw))) score += kw.length >= 8 ? 2 : 1
    }
    if (score > bestScore) {
      bestScore = score
      best = item
    }
  }
  if (best && bestScore >= 2) {
    return { text: best.answers[lang] || best.answers.de, cards: best.cards || [], answerLang: lang }
  }
  // Layer 3: off-list -> WhatsApp invitation.
  return { text: OFFLIST[lang], cards: ['whatsapp'], answerLang: lang }
}
