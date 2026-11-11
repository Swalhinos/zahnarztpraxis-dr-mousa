// Legal pages for Zahnarztpraxis Dr. Safwan Mousa.
// All practice data comes from CLINIC (lib/translations.ts) so a future
// address change needs exactly one edit. Lines marked [PLATZHALTER] are
// legally required details the practice itself must confirm before the
// site goes live (chamber membership, degree-awarding country, USt-IdNr.
// if any, professional liability insurer).
import { CLINIC, type Lang } from '@/lib/translations'

export type LegalBlock = { h: string; lines: string[] }
export type LegalDoc = { title: string; back: string; blocks: LegalBlock[] }
export type LegalContent = { impressum: LegalDoc; datenschutz: LegalDoc }

const de: LegalContent = {
  impressum: {
    title: 'Impressum',
    back: 'Zurück zur Startseite',
    blocks: [
      {
        h: 'Angaben gemäß § 5 DDG',
        lines: [
          CLINIC.name,
          `${CLINIC.doctor} — Zahnarzt & Fachzahnarzt für Oralchirurgie`,
          CLINIC.address,
          'Deutschland',
        ],
      },
      {
        h: 'Kontakt',
        lines: [
          `Telefon (Praxis): ${CLINIC.landlineDisplay}`,
          `Mobil / WhatsApp: ${CLINIC.phoneDisplay}`,
        ],
      },
      {
        h: 'Berufsbezeichnung und berufsrechtliche Regelungen',
        lines: [
          'Berufsbezeichnung: Zahnarzt, Fachzahnarzt für Oralchirurgie [PLATZHALTER: verleihender Staat von der Praxis zu bestätigen]',
          'Zuständige Kammer: Zahnärztekammer Berlin [PLATZHALTER: von der Praxis zu bestätigen]',
          'Berufsrechtliche Regelungen: Zahnheilkundegesetz, Heilberufe-Kammergesetz Berlin, Berufsordnung der Zahnärztekammer Berlin, Gebührenordnung für Zahnärzte (GOZ)',
        ],
      },
      {
        h: 'Verantwortlich für den Inhalt',
        lines: [`${CLINIC.doctor}, Anschrift wie oben.`],
      },
      {
        h: 'Hinweis',
        lines: [
          'Umsatzsteuer-ID: [PLATZHALTER: falls vorhanden, von der Praxis zu ergänzen]. Berufshaftpflichtversicherung: [PLATZHALTER: Name und Anschrift des Versicherers von der Praxis zu ergänzen].',
        ],
      },
    ],
  },
  datenschutz: {
    title: 'Datenschutzerklärung',
    back: 'Zurück zur Startseite',
    blocks: [
      {
        h: '1. Verantwortliche Stelle',
        lines: [
          `Verantwortlich für die Datenverarbeitung auf dieser Website ist: ${CLINIC.name}, ${CLINIC.doctor}, ${CLINIC.address}, Telefon ${CLINIC.landlineDisplay}, Mobil/WhatsApp ${CLINIC.phoneDisplay}.`,
        ],
      },
      {
        h: '2. Aufruf der Website / Hosting',
        lines: [
          'Diese Website ist eine rein statische Informationsseite. Sie setzt keine Cookies, verwendet keine Analyse- oder Tracking-Dienste und bindet keine Schriftarten oder Skripte von Drittanbietern ein. Beim Aufruf verarbeitet der Hosting-Anbieter (Vercel Inc.) technisch notwendige Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt, abgerufene Seite) in Server-Protokollen, um die Seite auszuliefern und zu schützen.',
        ],
      },
      {
        h: '3. Kontakt über WhatsApp und Telefon',
        lines: [
          'Die Buttons und Links zu WhatsApp und Telefon verlassen diese Website. Erst wenn Sie einen solchen Link aktiv anklicken, werden Daten an den jeweiligen Anbieter (WhatsApp/Meta bzw. Ihren Telefonanbieter) übermittelt; es gelten dann dessen Datenschutzbestimmungen. Vor dem Klick findet keine Übermittlung statt.',
        ],
      },
      {
        h: '4. Google Maps',
        lines: [
          'Die Karte im Kontaktbereich wird aus Datenschutzgründen erst geladen, wenn Sie aktiv auf „Karte laden" klicken. Erst dann wird eine Verbindung zu Google (Google Ireland Ltd.) aufgebaut und Ihre IP-Adresse an Google übermittelt. Die bloße Anzeige dieser Seite lädt keine Inhalte von Google.',
        ],
      },
      {
        h: '5. Terminformular',
        lines: [
          'Das Terminformular speichert nichts auf dieser Website und überträgt nichts an einen Server. Es erstellt lediglich lokal in Ihrem Browser eine vorbereitete WhatsApp-Nachricht aus Ihren Angaben, die Sie anschließend selbst in WhatsApp absenden.',
        ],
      },
      {
        h: '6. Ihre Rechte',
        lines: [
          'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem besteht ein Beschwerderecht bei der zuständigen Aufsichtsbehörde, der Berliner Beauftragten für Datenschutz und Informationsfreiheit.',
        ],
      },
      {
        h: '7. Stand',
        lines: ['Stand dieser Erklärung: November 2026. [PLATZHALTER: vor dem Livegang von der Praxis zu prüfen und freizugeben.]'],
      },
    ],
  },
}

const ar: LegalContent = {
  impressum: {
    title: 'بيانات النشر (Impressum)',
    back: 'عودة إلى الصفحة الرئيسية',
    blocks: [
      {
        h: 'بيانات وفق المادة 5 من القانون الألماني DDG',
        lines: [CLINIC.name, `${CLINIC.doctor} — طبيب أسنان وأخصائي جراحة الفم`, CLINIC.address, 'ألمانيا'],
      },
      {
        h: 'الاتصال',
        lines: [`الهاتف (العيادة): ${CLINIC.landlineDisplay}`, `الجوال / واتساب: ${CLINIC.phoneDisplay}`],
      },
      {
        h: 'المسمى المهني والأنظمة المهنية',
        lines: [
          'المسمى المهني: طبيب أسنان، أخصائي جراحة الفم [تنبيه: الدولة المانحة للشهادة تؤكدها العيادة]',
          'الغرفة المختصة: غرفة أطباء الأسنان في برلين (Zahnärztekammer Berlin) [تنبيه: تؤكدها العيادة]',
          'الأنظمة المهنية: قانون طب الأسنان، قانون غرف المهن الصحية في برلين، النظام المهني لغرفة أطباء الأسنان في برلين، جدول أتعاب أطباء الأسنان (GOZ)',
        ],
      },
      {
        h: 'المسؤول عن المحتوى',
        lines: [`${CLINIC.doctor}، العنوان كما أعلاه.`],
      },
    ],
  },
  datenschutz: {
    title: 'سياسة الخصوصية',
    back: 'عودة إلى الصفحة الرئيسية',
    blocks: [
      {
        h: '1. الجهة المسؤولة',
        lines: [
          `المسؤول عن معالجة البيانات على هذا الموقع هو: ${CLINIC.name}، ${CLINIC.doctor}، ${CLINIC.address}، الهاتف ${CLINIC.landlineDisplay}، الجوال/واتساب ${CLINIC.phoneDisplay}.`,
        ],
      },
      {
        h: '2. زيارة الموقع / الاستضافة',
        lines: [
          'هذا الموقع صفحة معلومات ثابتة تماماً: لا يستخدم أي ملفات تعريف ارتباط (Cookies)، ولا أي خدمات تحليل أو تتبع، ولا يحمّل أي خطوط أو سكربتات من أطراف ثالثة. عند الزيارة يعالج مزود الاستضافة (Vercel Inc.) بيانات وصول تقنية ضرورية (مثل عنوان IP والوقت والصفحة المطلوبة) في سجلات الخادم لتقديم الصفحة وحمايتها.',
        ],
      },
      {
        h: '3. التواصل عبر واتساب والهاتف',
        lines: [
          'أزرار وروابط واتساب والهاتف تغادر هذا الموقع. فقط عند نقركم الفعلي على أحدها تُنقل بيانات إلى المزود المعني (واتساب/Meta أو شركة اتصالاتكم) وتسري حينها سياسة الخصوصية الخاصة به. قبل النقر لا يحدث أي نقل.',
        ],
      },
      {
        h: '4. خرائط Google',
        lines: [
          'تُحمَّل الخريطة في قسم الاتصال فقط عندما تنقرون فعلياً على «تحميل الخريطة» حمايةً لخصوصيتكم. عندها فقط يُنشأ اتصال بـ Google (Google Ireland Ltd.) ويُرسَل عنوان IP الخاص بكم إلى Google. مجرد عرض هذه الصفحة لا يحمّل أي محتوى من Google.',
        ],
      },
      {
        h: '5. نموذج المواعيد',
        lines: [
          'نموذج المواعيد لا يحفظ أي شيء على هذا الموقع ولا ينقل أي شيء إلى خادم. إنه يُنشئ فقط محلياً في متصفحكم رسالة واتساب جاهزة من بياناتكم، ترسلونها أنتم بأنفسكم في واتساب.',
        ],
      },
      {
        h: '6. حقوقكم',
        lines: [
          'لكم الحق في الاطلاع والتصحيح والمحو وتقييد المعالجة ونقل البيانات والاعتراض. كما يوجد حق الشكوى لدى الجهة الرقابية المختصة: مفوضة برلين لحماية البيانات وحرية المعلومات.',
        ],
      },
      {
        h: '7. الحالة',
        lines: ['حالة هذه السياسة: نوفمبر 2026. [تنبيه: تُراجعها العيادة وتُقرّها قبل النشر.]'],
      },
    ],
  },
}

const en: LegalContent = {
  impressum: {
    title: 'Imprint (Impressum)',
    back: 'Back to the homepage',
    blocks: [
      {
        h: 'Information according to § 5 DDG (Germany)',
        lines: [CLINIC.name, `${CLINIC.doctor} — Dentist & specialist in oral surgery`, CLINIC.address, 'Germany'],
      },
      {
        h: 'Contact',
        lines: [`Phone (practice): ${CLINIC.landlineDisplay}`, `Mobile / WhatsApp: ${CLINIC.phoneDisplay}`],
      },
      {
        h: 'Professional title and regulations',
        lines: [
          'Professional title: Dentist, specialist in oral surgery (Fachzahnarzt für Oralchirurgie) [PLACEHOLDER: awarding country to be confirmed by the practice]',
          'Responsible chamber: Zahnärztekammer Berlin (Berlin Dental Chamber) [PLACEHOLDER: to be confirmed by the practice]',
          'Professional regulations: Zahnheilkundegesetz, Heilberufe-Kammergesetz Berlin, professional code of the Zahnärztekammer Berlin, fee schedule for dentists (GOZ)',
        ],
      },
      {
        h: 'Responsible for the content',
        lines: [`${CLINIC.doctor}, address as above.`],
      },
      {
        h: 'Note',
        lines: [
          'VAT ID: [PLACEHOLDER: to be added by the practice if applicable]. Professional liability insurer: [PLACEHOLDER: name and address to be added by the practice].',
        ],
      },
    ],
  },
  datenschutz: {
    title: 'Privacy policy',
    back: 'Back to the homepage',
    blocks: [
      {
        h: '1. Controller',
        lines: [
          `The controller for data processing on this website is: ${CLINIC.name}, ${CLINIC.doctor}, ${CLINIC.address}, phone ${CLINIC.landlineDisplay}, mobile/WhatsApp ${CLINIC.phoneDisplay}.`,
        ],
      },
      {
        h: '2. Visiting the website / hosting',
        lines: [
          'This website is a purely static information page. It sets no cookies, uses no analytics or tracking services, and loads no fonts or scripts from third parties. When you visit, the hosting provider (Vercel Inc.) processes technically necessary access data (e.g. IP address, time, requested page) in server logs in order to deliver and protect the page.',
        ],
      },
      {
        h: '3. Contact via WhatsApp and phone',
        lines: [
          'The WhatsApp and phone buttons and links leave this website. Only when you actively click such a link is data transmitted to the respective provider (WhatsApp/Meta or your phone provider), whose privacy policy then applies. Nothing is transmitted before the click.',
        ],
      },
      {
        h: '4. Google Maps',
        lines: [
          'For privacy reasons, the map in the contact section is only loaded when you actively click "Load map". Only then is a connection to Google (Google Ireland Ltd.) established and your IP address transmitted to Google. Merely viewing this page loads no content from Google.',
        ],
      },
      {
        h: '5. Appointment form',
        lines: [
          'The appointment form stores nothing on this website and transmits nothing to a server. It only creates, locally in your browser, a prepared WhatsApp message from your entries, which you then send yourself in WhatsApp.',
        ],
      },
      {
        h: '6. Your rights',
        lines: [
          'You have the right to access, rectification, erasure, restriction of processing, data portability and objection. You also have a right to complain to the competent supervisory authority, the Berlin Commissioner for Data Protection and Freedom of Information.',
        ],
      },
      {
        h: '7. Version',
        lines: ['Version of this policy: November 2026. [PLACEHOLDER: to be reviewed and approved by the practice before going live.]'],
      },
    ],
  },
}

const fr: LegalContent = {
  impressum: {
    title: 'Mentions légales (Impressum)',
    back: "Retour à l'accueil",
    blocks: [
      {
        h: 'Informations selon le § 5 DDG (Allemagne)',
        lines: [CLINIC.name, `${CLINIC.doctor} — Dentiste & spécialiste en chirurgie orale`, CLINIC.address, 'Allemagne'],
      },
      {
        h: 'Contact',
        lines: [`Téléphone (cabinet) : ${CLINIC.landlineDisplay}`, `Mobile / WhatsApp : ${CLINIC.phoneDisplay}`],
      },
      {
        h: 'Titre professionnel et réglementation',
        lines: [
          'Titre professionnel : dentiste, spécialiste en chirurgie orale (Fachzahnarzt für Oralchirurgie) [À COMPLÉTER : pays de délivrance à confirmer par le cabinet]',
          'Chambre compétente : Zahnärztekammer Berlin (chambre des dentistes de Berlin) [À COMPLÉTER : à confirmer par le cabinet]',
          'Réglementations professionnelles : Zahnheilkundegesetz, Heilberufe-Kammergesetz Berlin, code professionnel de la Zahnärztekammer Berlin, nomenclature des dentistes (GOZ)',
        ],
      },
      {
        h: 'Responsable du contenu',
        lines: [`${CLINIC.doctor}, adresse ci-dessus.`],
      },
      {
        h: 'Remarque',
        lines: [
          "N° de TVA : [À COMPLÉTER par le cabinet le cas échéant]. Assurance responsabilité professionnelle : [À COMPLÉTER : nom et adresse de l'assureur, par le cabinet].",
        ],
      },
    ],
  },
  datenschutz: {
    title: 'Protection des données',
    back: "Retour à l'accueil",
    blocks: [
      {
        h: '1. Responsable du traitement',
        lines: [
          `Le responsable du traitement des données sur ce site est : ${CLINIC.name}, ${CLINIC.doctor}, ${CLINIC.address}, téléphone ${CLINIC.landlineDisplay}, mobile/WhatsApp ${CLINIC.phoneDisplay}.`,
        ],
      },
      {
        h: '2. Visite du site / hébergement',
        lines: [
          "Ce site est une page d'information purement statique. Il ne dépose aucun cookie, n'utilise aucun service d'analyse ou de suivi et ne charge aucune police ni aucun script de tiers. Lors de la visite, l'hébergeur (Vercel Inc.) traite les données d'accès techniquement nécessaires (p. ex. adresse IP, heure, page demandée) dans des journaux serveur afin de fournir et de protéger la page.",
        ],
      },
      {
        h: '3. Contact via WhatsApp et téléphone',
        lines: [
          "Les boutons et liens WhatsApp et téléphone quittent ce site. Ce n'est que lorsque vous cliquez activement sur un tel lien que des données sont transmises au fournisseur concerné (WhatsApp/Meta ou votre opérateur), dont la politique de confidentialité s'applique alors. Rien n'est transmis avant le clic.",
        ],
      },
      {
        h: '4. Google Maps',
        lines: [
          "Pour protéger vos données, la carte de la rubrique contact n'est chargée que lorsque vous cliquez activement sur « Charger la carte ». Ce n'est qu'alors qu'une connexion à Google (Google Ireland Ltd.) est établie et que votre adresse IP est transmise à Google. Le simple affichage de cette page ne charge aucun contenu de Google.",
        ],
      },
      {
        h: '5. Formulaire de rendez-vous',
        lines: [
          "Le formulaire de rendez-vous n'enregistre rien sur ce site et ne transmet rien à un serveur. Il crée uniquement, localement dans votre navigateur, un message WhatsApp préparé à partir de vos saisies, que vous envoyez ensuite vous-même dans WhatsApp.",
        ],
      },
      {
        h: '6. Vos droits',
        lines: [
          "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité des données et d'opposition. Vous avez également le droit de déposer une réclamation auprès de l'autorité de contrôle compétente, la commissaire berlinoise à la protection des données et à la liberté d'information.",
        ],
      },
      {
        h: '7. Version',
        lines: ['Version de cette déclaration : novembre 2026. [À COMPLÉTER : à vérifier et valider par le cabinet avant la mise en ligne.]'],
      },
    ],
  },
}

export const LEGAL: Record<Lang, LegalContent> = { de, ar, en, fr }
