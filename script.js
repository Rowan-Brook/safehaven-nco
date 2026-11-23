const LEGAL_DOCS_BY_LANG = {
  en: "https://drive.google.com/file/d/14VP51Jj712ht4Cb5mi_7Nr6xDlNuCAG8/view?usp=drivesdk",
  ru: "https://drive.google.com/file/d/164WkrYuOAirbKutfYoyNS0X7Sgb86qTt/view?usp=drivesdk",
  uz: "https://drive.google.com/file/d/1qvtnf3kLdVm4rSEBWCdMVjwwEY3Q18pe/view?usp=drivesdk",
  es: "https://drive.google.com/file/d/1IM2-0qE8KsnHE20bzeHruO6w892Vv9Gr/view?usp=drivesdk",
  fr: "https://drive.google.com/file/d/1I13hn0UQvDCtRtjNdalnCBzI2YHUs6pv/view?usp=drivesdk",
  de: "https://drive.google.com/file/d/1VNhVjFI9_S1AEDpfx6Ixz2GaRmuIiHUv/view?usp=drivesdk",
  it: "https://drive.google.com/file/d/1q5roGNh6p8e7G80nIDAvGTwz3d2VXZtn/view?usp=drivesdk",
  zh: "https://drive.google.com/file/d/1K9bj2JOEW6XCMTHUxoIMlvFu5CshU4IX/view?usp=drivesdk",
  ar: "https://drive.google.com/file/d/1XOUtdz8jRmVZ3OXIl7opyDy30QuTJPMp/view?usp=drivesdk",
  tr: "https://drive.google.com/file/d/1qdG3P9wANgeC269reSWnGoRz-RaPxcLo/view?usp=drivesdk",
};

function getLegalDocUrl(langCode = currentLang) {
  return LEGAL_DOCS_BY_LANG[langCode] || LEGAL_DOCS_BY_LANG.en;
}

const CONTACT_EMAIL = "safehaven.nco@gmail.com";

const LANGUAGES = [
  { code: "en", label: "English (EN)", locale: "en-US", dir: "ltr" },
  { code: "ru", label: "Русский (RU)", locale: "ru-RU", dir: "ltr" },
  { code: "uz", label: "O'zbekcha (UZ)", locale: "uz-UZ", dir: "ltr" },
  { code: "es", label: "Español (ES)", locale: "es-ES", dir: "ltr" },
  { code: "fr", label: "Français (FR)", locale: "fr-FR", dir: "ltr" },
  { code: "de", label: "Deutsch (DE)", locale: "de-DE", dir: "ltr" },
  { code: "it", label: "Italiano (IT)", locale: "it-IT", dir: "ltr" },
  { code: "zh", label: "中文 (ZH)", locale: "zh-CN", dir: "ltr" },
  { code: "ar", label: "العربية (AR)", locale: "ar-SA", dir: "rtl" },
  { code: "tr", label: "Türkçe (TR)", locale: "tr-TR", dir: "ltr" }
];

const TRANSLATIONS = {
  en: {
    legalHubLink: "Legal & Policies",
    projDisclaimerNote: "Early-stage concept notice: Safe Haven parameters and support pathways are currently in active development and do not constitute a public offer.",
    navAbout: "About",
    navProject: "Project",
    footerEmail: "Email",
    footerHelp: "Help",
    heroBadge: "Tashkent · Building & questioning things",
    heroTitle: "Hi, I'm Nodirjon!",
    heroTagline: "Allergic to chaos, addicted to figuring out how things actually work.",
    heroLine1: "I tend to treat almost everything—from interstate freight compliance to early-stage social startups—like a puzzle that just needs cleaner logic.",
    heroLine2: "This site started as a spontaneous “why not?”, and now serves as my personal lab for testing ideas, breaking layouts, and keeping track of what I build along the way.",
    expSectionTitle: "What I've Been Doing",
    expTag: "Operations & Safety",
    expRoleTitle: "Road Transport Health and Safety Manager",
    expRoleSub: "Safety & Fleet Department (US Logistics)",
    expDateRange: "Apr 2026 – Nov 2026",
    showDetails: "Show details",
    hideDetails: "Hide details",
    expBullet1: "Oversaw DOT & FMCSA regulatory compliance, driver safety audits, and electronic logging device (ELD) analytics across interstate fleet operations.",
    expBullet2: "Designed structured risk-mitigation workflows and incident prevention protocols, reducing operational violations and improving fleet reliability.",
    expBullet3: "Coordinated cross-functional safety reporting and quantitative performance tracking for dispatch and leadership teams.",
    eduSectionTitle: "Education Path",
    lyceumBadge: "Academic Lyceum",
    lyceumTitle: "Academic Lyceum of Westminster International University in Tashkent",
    lyceumSub: "Where the habit of structured thinking, economics, and late-night problem sets officially started.",
    lyceumStep: "Foundation · Step 01",
    eduBadge: "University",
    eduUniTitle: "Westminster International University in Tashkent (WIUT)",
    eduDegree: "Business Administration & Analytical Systems — turning numbers, markets, and logic into practical decisions.",
    uniStep: "Current · Step 02",
    projSubtitle: "Breaking systemic poverty through free applied IT education, psychological resilience, and an ethical self-sustaining model.",
    projHook: "Talent is universal, yet opportunity is not. Safe Haven removes financial, housing, and psychological barriers for motivated individuals facing severe socio-economic hardship—transforming them from vulnerable survivors into independent digital professionals who pay opportunity forward.",
    pillar1Title: "100% Barrier-Free Entry",
    pillar1Desc: "Zero upfront tuition. Covers living stipends, safe housing, meals, and certified psychological support.",
    pillar2Title: "The "6 + 2" Acceleration Track",
    pillar2Desc: "6 months of intensive applied IT, followed by 2 months building real commercial software products with mentorship.",
    pillar3Title: "Ethical Recyclable ISA",
    pillar3Desc: "Graduates contribute 10% of salary ONLY after securing employment above $450/month with hardship freeze.",
    pillar4Title: "Intimate Mini-Cohorts",
    pillar4Desc: "Compact 10–12 student hubs targeting 80%+ placement with verified Behavioral & Hard-Skills Profiles.",
    ctaSectionTitle: "Build Safe Haven With Us",
    btnSponsor: "Become a Sponsor",
    btnSponsorSub: "CSR, grants & equipment partners",
    btnDonate: "Make a Donation",
    btnDonateSub: "Fund housing, meals & laptops",
    btnJoin: "Join the Team",
    btnJoinSub: "Mentors, educators & psychologists",
    copyEmail: "Copy Email",
    copied: "Copied!",
    openMailApp: "Open Mail App",
    tplSponsor: "Hello Safe Haven Team,

I would like to explore sponsoring Safe Haven and supporting its students.",
    tplDonate: "Hello Safe Haven Team,

I would like to make a donation to support student housing, meals, and equipment.",
    tplJoin: "Hello Safe Haven Team,

I would love to join the Safe Haven team as a mentor, educator, or specialist."
  },
  ru: {
    legalHubLink: "Правовая информация и политики",
    projDisclaimerNote: "Примечание о ранней стадии: параметры Safe Haven и форматы участия находятся в разработке и не являются публичной офертой.",
    navAbout: "Обо мне",
    navProject: "Проект",
    footerEmail: "Email",
    footerHelp: "Help",
    heroBadge: "Ташкент · Собираю смыслы и проверяю гипотезы",
    heroTitle: "Привет, я Нодиржон!",
    heroTagline: "Аллергия на хаос и хронический интерес к тому, как всё устроено на самом деле.",
    heroLine1: "Я смотрю почти на всё — от контроля безопасности грузоперевозок в США до архитектуры социальных проектов — как на головоломку, которой просто не хватает нормальной логики.",
    heroLine2: "Этот сайт начался со спонтанного «а почему бы и нет?», а превратился в личную лабораторию, где можно тестировать идеи, ломать сетки и фиксировать свой путь.",
    expSectionTitle: "Практика и дело",
    expTag: "Операции и безопасность",
    expRoleTitle: "Менеджер по безопасности дорожного транспорта",
    expRoleSub: "Департамент безопасности и автопарка (Логистика США)",
    expDateRange: "Апр 2026 – Ноя 2026",
    showDetails: "Подробнее",
    hideDetails: "Скрыть",
    expBullet1: "Контроль соблюдения стандартов DOT и FMCSA, аудит безопасности водителей и аналитика электронных журналов (ELD).",
    expBullet2: "Разработка структурированных процессов снижения рисков и протоколов предотвращения инцидентов.",
    expBullet3: "Координация кросс-функциональной отчётности по безопасности и количественного трекинга эффективности.",
    eduSectionTitle: "Образовательный маршрут",
    lyceumBadge: "Академический лицей",
    lyceumTitle: "Академический лицей Международного Вестминстерского университета в Ташкенте",
    lyceumSub: "Место, где официально началась привычка мыслить структурно, разбираться в экономике и решать задачи до поздней ночи.",
    lyceumStep: "База · Шаг 01",
    eduBadge: "Университет",
    eduUniTitle: "Международный Вестминстерский университет в Ташкенте (WIUT)",
    eduDegree: "Бизнес-администрирование и аналитические системы — превращаю цифры, рынки и логику в рабочие решения.",
    uniStep: "Сейчас · Шаг 02",
    projSubtitle: "Преодоление системной бедности через бесплатное прикладное IT-образование, психологическую опору и этичную самоокупаемую модель.",
    projHook: "Талант есть у каждого, но возможности доступны не всем. Safe Haven снимает финансовые, жилищные и психологические барьеры для мотивированных людей в трудной жизненной ситуации, помогая им стать самостоятельными специалистами и передавать возможность дальше.",
    pillar1Title: "100% бесплатный вход",
    pillar1Desc: "Никакой платы за обучение. Покрывает жильё, питание, стипендию и работу с психологом.",
    pillar2Title: "Акселератор «6 + 2»",
    pillar2Desc: "6 месяцев интенсивного прикладного IT, затем 2 месяца создания реальных коммерческих продуктов.",
    pillar3Title: "Этичный возвратный ISA",
    pillar3Desc: "Выпускники отчисляют 10% дохода ТОЛЬКО после трудоустройства с зарплатой выше $450/мес.",
    pillar4Title: "Камерные мини-группы",
    pillar4Desc: "Компактные хабы по 10–12 студентов с целью 80%+ трудоустройства.",
    ctaSectionTitle: "Развивайте Safe Haven вместе с нами",
    btnSponsor: "Стать спонсором",
    btnSponsorSub: "КСО, гранты и техническое партнёрство",
    btnDonate: "Сделать пожертвование",
    btnDonateSub: "Оплата жилья, питания и ноутбуков",
    btnJoin: "Вступить в команду",
    btnJoinSub: "Менторы, преподаватели и психологи",
    copyEmail: "Копировать Email",
    copied: "Скопировано!",
    openMailApp: "Открыть почту",
    tplSponsor: "Здравствуйте, команда Safe Haven!

Хотел(а) бы обсудить спонсорство и партнёрство с проектом Safe Haven.",
    tplDonate: "Здравствуйте, команда Safe Haven!

Хотел(а) бы сделать пожертвование на жильё, питание и оборудование для студентов.",
    tplJoin: "Здравствуйте, команда Safe Haven!

Хотел(а) бы присоединиться к команде проекта в качестве ментора, преподавателя или специалиста."
  },
  uz: {
    legalHubLink: "Huquqiy ma’lumotlar va siyosatlar",
    projDisclaimerNote: "Dastlabki bosqich eslatmasi: Safe Haven parametrlari va ishtirok etish shartlari ishlab chiqilmoqda va ommaviy oferta hisoblanmaydi.",
    navAbout: "Men haqimda",
    navProject: "Loyiha",
    footerEmail: "Email",
    footerHelp: "Help",
    heroBadge: "Toshkent · G‘oyalar va tizimlarni o‘rganaman",
    heroTitle: "Salom, men Nodirjonman!",
    heroTagline: "Tartibsizlikka allergiyam bor, hamma narsa aslida qanday ishlashini tushunishga esa ishtiyoqim baland.",
    heroLine1: "Men deyarli har bir narsaga — AQSh yuk tashish xavfsizligidan tortib ijtimoiy loyihalargacha — shunchaki toza mantiq kerak bo‘lgan boshqotirma sifatida qarayman.",
    heroLine2: "Bu sayt shunchaki «nega endi yo‘q?» degan fikrdan boshlangan, hozir esa g‘oyalarni sinash va o‘z yo‘limni kuzatish laboratoriyasiga aylandi.",
    expSectionTitle: "Amaliy tajriba",
    expTag: "Operatsiyalar va xavfsizlik",
    expRoleTitle: "Avtotransport xavfsizligi va mehnat muhofazasi menejeri",
    expRoleSub: "Xavfsizlik va avtopark bo‘limi (AQSh logistikasi)",
    expDateRange: "Apr 2026 – Noy 2026",
    showDetails: "Batafsil",
    hideDetails: "Yashirish",
    expBullet1: "Shtatlararo yuk tashishda DOT va FMCSA talablariga rioya etilishini va ELD tahlillarini nazorat qildim.",
    expBullet2: "Xavflarni kamaytirish va hodisalarning oldini olish protokollarini ishlab chiqdim.",
    expBullet3: "Dispetcherlik va rahbariyat jamoalari uchun xavfsizlik hisobotlarini muvofiqlashtirdim.",
    eduSectionTitle: "Ta’lim yo‘li",
    lyceumBadge: "Akademik litsey",
    lyceumTitle: "Toshkentdagi Xalqaro Vestminster Universiteti Akademik Litseyi",
    lyceumSub: "Tizimli fikrlash, iqtisodiyot va yarim tungacha masalalar yechish odati boshlangan maskan.",
    lyceumStep: "Poydevor · 01-qadam",
    eduBadge: "Universitet",
    eduUniTitle: "Toshkentdagi Xalqaro Vestminster Universiteti (WIUT)",
    eduDegree: "Biznes boshqaruvi va tahliliy tizimlar — raqamlar, bozorlar va mantiqni amaliy qarorlarga aylantirish.",
    uniStep: "Hozir · 02-qadam",
    projSubtitle: "Bepul amaliy IT ta’limi va psixologik tayanch orqali tizimli qashshoqlikni yengish.",
    projHook: "Iste’dod hammada bor, ammo imkoniyatlar teng emas. Safe Haven og‘ir vaziyatdagi insonlar uchun moliyaviy, uy-joy va psixologik to‘siqlarni olib tashlaydi.",
    pillar1Title: "100% to‘siqsiz kirish",
    pillar1Desc: "Boshlang‘ich to‘lovlarsiz ta’lim. Turar-joy, ovqatlanish va stipendiya qoplanadi.",
    pillar2Title: "«6 + 2» tezlashtirilgan dasturi",
    pillar2Desc: "6 oy amaliy IT, so‘ng 2 oy mentorlar bilan real mahsulotlar yaratish.",
    pillar3Title: "Axloqiy aylanma ISA modeli",
    pillar3Desc: "Bitiruvchilar $450/oydan yuqori ishga joylashgach daromadining 10% ini qaytaradi.",
    pillar4Title: "Ixcham mini-guruhlar",
    pillar4Desc: "80%+ ishga joylashish maqsadiga ega 10–12 talabalik markazlar.",
    ctaSectionTitle: "Safe Haven loyihasini birga rivojlantiramiz",
    btnSponsor: "Homiy bo‘lish",
    btnSponsorSub: "KSM, grantlar va texnik hamkorlar",
    btnDonate: "Xayriya qilish",
    btnDonateSub: "Turar-joy, ovqat va noutbuklar uchun",
    btnJoin: "Jamoaga qo‘shilish",
    btnJoinSub: "Mentorlar, o‘qituvchilar va psixologlar",
    copyEmail: "Emailni nusxalash",
    copied: "Nusxalandi!",
    openMailApp: "Pochta ilovasini ochish",
    tplSponsor: "Assalomu alaykum, Safe Haven jamoasi!

Safe Haven loyihasiga homiylik va hamkorlik qilish imkoniyatlarini muhokama qilmoqchiman.",
    tplDonate: "Assalomu alaykum, Safe Haven jamoasi!

Talabalar uchun turar-joy, ovqatlanish va jihozlarga xayriya qilmoqchiman.",
    tplJoin: "Assalomu alaykum, Safe Haven jamoasi!

Loyiha jamoasiga mentor, o‘qituvchi yoki mutaxassis sifatida qo‘shilmoqchiman."
  },
  es: {
    legalHubLink: "Información legal y políticas",
    projDisclaimerNote: "Aviso de etapa inicial: los parámetros de Safe Haven están en desarrollo activo y no constituyen una oferta pública.",
    navAbout: "Sobre mí",
    navProject: "Proyecto",
    footerEmail: "Email",
    footerHelp: "Help",
    heroBadge: "Taskent · Construyendo y cuestionando cosas",
    heroTitle: "¡Hola, soy Nodirjon!",
    heroTagline: "Alérgico al caos, adicto a descubrir cómo funcionan realmente las cosas.",
    heroLine1: "Suelo tratar casi todo —desde el cumplimiento del transporte en EE. UU. hasta startups sociales— como un rompecabezas que solo necesita una lógica más limpia.",
    heroLine2: "Este sitio nació de un espontáneo «¿por qué no?» y hoy funciona como mi laboratorio personal para probar ideas y experimentar con el diseño.",
    expSectionTitle: "Lo que he estado haciendo",
    expTag: "Operaciones y Seguridad",
    expRoleTitle: "Gerente de Salud y Seguridad del Transporte Terrestre",
    expRoleSub: "Departamento de Seguridad y Flota (Logística de EE. UU.)",
    expDateRange: "Abr 2026 – Nov 2026",
    showDetails: "Mostrar detalles",
    hideDetails: "Ocultar detalles",
    expBullet1: "Supervisé el cumplimiento normativo de DOT y FMCSA, auditorías de seguridad de conductores y análisis de dispositivos de registro electrónico (ELD).",
    expBullet2: "Diseñé flujos estructurados de mitigación de riesgos y protocolos de prevención de incidentes.",
    expBullet3: "Coordiné informes transversales de seguridad y seguimiento cuantitativo del rendimiento.",
    eduSectionTitle: "Trayectoria educativa",
    lyceumBadge: "Liceo Académico",
    lyceumTitle: "Liceo Académico de la Universidad Internacional de Westminster en Taskent",
    lyceumSub: "Donde empezó oficialmente el hábito de pensar con estructura, estudiar economía y resolver problemas hasta tarde.",
    lyceumStep: "Base · Paso 01",
    eduBadge: "Universidad",
    eduUniTitle: "Universidad Internacional de Westminster en Taskent (WIUT)",
    eduDegree: "Administración de Empresas y Sistemas Analíticos — convirtiendo números, mercados y lógica en decisiones prácticas.",
    uniStep: "Actual · Paso 02",
    projSubtitle: "Rompiendo la pobreza sistémica mediante educación práctica gratuita en TI, resiliencia psicológica y un modelo ético autosostenible.",
    projHook: "El talento es universal, pero las oportunidades no. Safe Haven elimina las barreras financieras, de vivienda y psicológicas para personas motivadas que enfrentan dificultades socioeconómicas graves.",
    pillar1Title: "Acceso 100% sin barreras",
    pillar1Desc: "Sin matrícula inicial. Cubre estipendio para vivir, vivienda segura, comidas y apoyo psicológico certificado.",
    pillar2Title: "Programa acelerado "6 + 2"",
    pillar2Desc: "6 meses de TI práctica intensiva, seguidos de 2 meses creando productos de software comerciales reales con mentoría.",
    pillar3Title: "ISA ético y reciclable",
    pillar3Desc: "Los graduados aportan el 10% de su salario SOLO tras conseguir empleo por encima de $450/mes con pausa por dificultades.",
    pillar4Title: "Mini-cohortes cercanas",
    pillar4Desc: "Centros compactos de 10–12 estudiantes con objetivo de más del 80% de inserción laboral.",
    ctaSectionTitle: "Construye Safe Haven con nosotros",
    btnSponsor: "Ser patrocinador",
    btnSponsorSub: "RSE, subvenciones y socios de equipamiento",
    btnDonate: "Hacer una donación",
    btnDonateSub: "Financia vivienda, comidas y portátiles",
    btnJoin: "Unirse al equipo",
    btnJoinSub: "Mentores, educadores y psicólogos",
    copyEmail: "Copiar correo",
    copied: "¡Copiado!",
    openMailApp: "Abrir correo",
    tplSponsor: "Hola equipo de Safe Haven,

Me gustaría explorar opciones de patrocinio para Safe Haven y apoyar a sus estudiantes.",
    tplDonate: "Hola equipo de Safe Haven,

Me gustaría realizar una donación para apoyar la vivienda, alimentación y equipos de los estudiantes.",
    tplJoin: "Hola equipo de Safe Haven,

Me encantaría unirme al equipo de Safe Haven como mentor, educador o especialista."
  },
  fr: {
    legalHubLink: "Mentions légales et politiques",
    projDisclaimerNote: "Note de phase initiale : les paramètres de Safe Haven sont en cours d’élaboration et ne constituent pas une offre publique.",
    navAbout: "À propos",
    navProject: "Projet",
    footerEmail: "Email",
    footerHelp: "Help",
    heroBadge: "Tachkent · Construire et questionner",
    heroTitle: "Bonjour, je suis Nodirjon !",
    heroTagline: "Allergique au chaos, accro à l’idée de comprendre comment les choses fonctionnent vraiment.",
    heroLine1: "J’aborde presque tout — de la conformité routière aux États-Unis aux projets sociaux — comme un puzzle qui demande juste une logique plus claire.",
    heroLine2: "Ce site est né d’un spontané « pourquoi pas ? » et me sert aujourd’hui de laboratoire personnel pour tester des idées et faire évoluer le format.",
    expSectionTitle: "Ce que j'ai fait",
    expTag: "Opérations et Sécurité",
    expRoleTitle: "Responsable Santé et Sécurité du Transport Routier",
    expRoleSub: "Département Sécurité et Flotte (Logistique États-Unis)",
    expDateRange: "Avr 2026 – Nov 2026",
    showDetails: "Voir les détails",
    hideDetails: "Masquer les détails",
    expBullet1: "Supervision de la conformité DOT et FMCSA, des audits de sécurité des conducteurs et des analyses ELD sur les opérations inter-États.",
    expBullet2: "Conception de processus structurés de gestion des risques et de protocoles de prévention des incidents.",
    expBullet3: "Coordination des rapports de sécurité transversaux et du suivi quantitatif des performances.",
    eduSectionTitle: "Parcours académique",
    lyceumBadge: "Lycée Académique",
    lyceumTitle: "Lycée Académique de l'Université internationale de Westminster à Tachkent",
    lyceumSub: "Là où l'habitude de la pensée structurée, de l'économie et des exercices tardifs a officiellement commencé.",
    lyceumStep: "Fondation · Étape 01",
    eduBadge: "Université",
    eduUniTitle: "Université internationale de Westminster à Tachkent (WIUT)",
    eduDegree: "Administration des affaires et Systèmes analytiques — transformer les chiffres et la logique en décisions concrètes.",
    uniStep: "Actuel · Étape 02",
    projSubtitle: "Briser la pauvreté systémique grâce à une formation informatique appliquée gratuite, un soutien psychologique et un modèle éthique durable.",
    projHook: "Le talent est universel, mais les opportunités ne le sont pas. Safe Haven lève les obstacles financiers, de logement et psychologiques pour les personnes motivées en grande difficulté.",
    pillar1Title: "Entrée 100 % sans barrière",
    pillar1Desc: "Aucun frais initial. Couvre allocation de vie, logement sûr, repas et soutien psychologique certifié.",
    pillar2Title: "Parcours accéléré "6 + 2"",
    pillar2Desc: "6 mois d'informatique appliquée intensive, puis 2 mois de création de produits logiciels commerciaux avec mentorat.",
    pillar3Title: "ISA éthique et solidaire",
    pillar3Desc: "Les diplômés versent 10 % de leur salaire UNIQUEMENT après un emploi au-dessus de 450 $/mois avec gel en cas de difficulté.",
    pillar4Title: "Petites cohortes dédiées",
    pillar4Desc: "Groupes compacts de 10 à 12 étudiants visant 80 %+ d'insertion professionnelle.",
    ctaSectionTitle: "Développez Safe Haven avec nous",
    btnSponsor: "Devenir sponsor",
    btnSponsorSub: "RSE, subventions et partenaires matériel",
    btnDonate: "Faire un don",
    btnDonateSub: "Financer logement, repas et ordinateurs",
    btnJoin: "Rejoindre l'équipe",
    btnJoinSub: "Mentors, formateurs et psychologues",
    copyEmail: "Copier l'e-mail",
    copied: "Copié !",
    openMailApp: "Ouvrir la messagerie",
    tplSponsor: "Bonjour l'équipe Safe Haven,

Je souhaiterais échanger sur un parrainage ou partenariat avec Safe Haven.",
    tplDonate: "Bonjour l'équipe Safe Haven,

Je souhaite faire un don pour soutenir le logement, les repas et l'équipement des étudiants.",
    tplJoin: "Bonjour l'équipe Safe Haven,

Je souhaite rejoindre l'équipe Safe Haven en tant que mentor, formateur ou spécialiste."
  },
  de: {
    legalHubLink: "Rechtliches & Richtlinien",
    projDisclaimerNote: "Hinweis zur Frühphase: Die Parameter von Safe Haven befinden sich in aktiver Entwicklung und stellen kein öffentliches Angebot dar.",
    navAbout: "Über mich",
    navProject: "Projekt",
    footerEmail: "Email",
    footerHelp: "Help",
    heroBadge: "Taschkent · Bauen & Hinterfragen",
    heroTitle: "Hallo, ich bin Nodirjon!",
    heroTagline: "Allergisch gegen Chaos, süchtig danach herauszufinden, wie Dinge wirklich funktionieren.",
    heroLine1: "Ich betrachte fast alles — von US-Transport-Compliance bis hin zu sozialen Projekten — wie ein Puzzle, das nur eine klarere Logik braucht.",
    heroLine2: "Diese Seite begann als spontanes „Warum eigentlich nicht?“ und ist heute mein persönliches Labor für neue Ideen und Experimente.",
    expSectionTitle: "Was ich bisher gemacht habe",
    expTag: "Betrieb & Sicherheit",
    expRoleTitle: "Manager für Gesundheit und Sicherheit im Straßentransport",
    expRoleSub: "Abteilung Sicherheit & Fuhrpark (US-Logistik)",
    expDateRange: "Apr 2026 – Nov 2026",
    showDetails: "Details anzeigen",
    hideDetails: "Details ausblenden",
    expBullet1: "Verantwortung für DOT- und FMCSA-Compliance, Sicherheitsaudits für Fahrer und ELD-Analysen im bundesstaatenübergreifenden Betrieb.",
    expBullet2: "Entwicklung strukturierter Risikominimierungsprozesse und Präventionsprotokolle zur Reduzierung von Verstößen.",
    expBullet3: "Koordination bereichsübergreifender Sicherheitsberichte und quantitativer Leistungskennzahlen.",
    eduSectionTitle: "Bildungsweg",
    lyceumBadge: "Akademisches Lyzeum",
    lyceumTitle: "Akademisches Lyzeum der Westminster International University in Taschkent",
    lyceumSub: "Wo die Gewohnheit für strukturiertes Denken, Wirtschaft und späte Aufgaben offiziell begann.",
    lyceumStep: "Basis · Schritt 01",
    eduBadge: "Universität",
    eduUniTitle: "Westminster International University in Taschkent (WIUT)",
    eduDegree: "Betriebswirtschaft & Analytische Systeme — Zahlen, Märkte und Logik in praktische Entscheidungen übersetzen.",
    uniStep: "Aktuell · Schritt 02",
    projSubtitle: "Systemische Armut durch kostenlose praxisnahe IT-Bildung, psychologische Resilienz und ein faires, tragfähiges Modell überwinden.",
    projHook: "Talent ist weltweit verteilt, Chancen jedoch nicht. Safe Haven baut finanzielle, wohnliche und psychologische Hürden für motivierte Menschen in schwierigen Lebenslagen ab.",
    pillar1Title: "100 % barrierefreier Zugang",
    pillar1Desc: "Keine Vorkosten. Deckt Lebensunterhalt, sichere Unterkunft, Verpflegung und psychologische Begleitung.",
    pillar2Title: "Das "6 + 2"-Beschleunigungsprogramm",
    pillar2Desc: "6 Monate intensive angewandte IT, gefolgt von 2 Monaten Entwicklung echter kommerzieller Software mit Mentoring.",
    pillar3Title: "Faires, umlaufendes ISA-Modell",
    pillar3Desc: "Absolventen zahlen 10 % des Einkommens NUR bei einem Gehalt über 450 $/Monat mit Härtefallregelung.",
    pillar4Title: "Kleine Lernkohorten",
    pillar4Desc: "Kompakte Gruppen mit 10–12 Teilnehmenden und dem Ziel von über 80 % Vermittlung.",
    ctaSectionTitle: "Gestalten Sie Safe Haven mit uns",
    btnSponsor: "Sponsor werden",
    btnSponsorSub: "CSR, Fördermittel & Hardware-Partner",
    btnDonate: "Spenden",
    btnDonateSub: "Unterkunft, Verpflegung & Laptops fördern",
    btnJoin: "Team beitreten",
    btnJoinSub: "Mentorinnen/Mentoren, Lehrkräfte & Psychologen",
    copyEmail: "E-Mail kopieren",
    copied: "Kopiert!",
    openMailApp: "E-Mail-App öffnen",
    tplSponsor: "Hallo Safe-Haven-Team,

gerne möchte ich Möglichkeiten für Sponsoring und Partnerschaft mit Safe Haven besprechen.",
    tplDonate: "Hallo Safe-Haven-Team,

ich möchte eine Spende für Unterkunft, Verpflegung und Ausstattung der Teilnehmenden leisten.",
    tplJoin: "Hallo Safe-Haven-Team,

ich möchte das Safe-Haven-Team als Mentor/in, Lehrkraft oder Fachkraft unterstützen."
  },
  it: {
    legalHubLink: "Note legali e policy",
    projDisclaimerNote: "Nota sulla fase iniziale: i parametri di Safe Haven sono in fase di sviluppo attivo e non costituiscono un’offerta pubblica.",
    navAbout: "Chi sono",
    navProject: "Progetto",
    footerEmail: "Email",
    footerHelp: "Help",
    heroBadge: "Tashkent · Costruisco e metto in discussione",
    heroTitle: "Ciao, sono Nodirjon!",
    heroTagline: "Allergico al caos, dipendente dal capire come funzionano davvero le cose.",
    heroLine1: "Tratto quasi tutto — dalla conformità dei trasporti negli Stati Uniti ai progetti sociali — come un puzzle che ha solo bisogno di una logica più pulita.",
    heroLine2: "Questo sito è nato da uno spontaneo «perché no?» ed è diventato il mio laboratorio personale per sperimentare idee e formati.",
    expSectionTitle: "Cosa ho fatto finora",
    expTag: "Operazioni e Sicurezza",
    expRoleTitle: "Responsabile Salute e Sicurezza del Trasporto Stradale",
    expRoleSub: "Dipartimento Sicurezza e Flotta (Logistica USA)",
    expDateRange: "Apr 2026 – Nov 2026",
    showDetails: "Mostra dettagli",
    hideDetails: "Nascondi dettagli",
    expBullet1: "Gestione della conformità DOT e FMCSA, audit sulla sicurezza dei conducenti e analisi dei dati ELD sulle flotte interstatali.",
    expBullet2: "Progettazione di flussi strutturati di mitigazione del rischio e protocolli di prevenzione degli incidenti.",
    expBullet3: "Coordinamento della reportistica sulla sicurezza e del monitoraggio quantitativo delle prestazioni.",
    eduSectionTitle: "Percorso di studi",
    lyceumBadge: "Liceo Accademico",
    lyceumTitle: "Liceo Accademico della Westminster International University di Tashkent",
    lyceumSub: "Dove è iniziata ufficialmente l'abitudine al pensiero strutturato, all'economia e allo studio fino a tardi.",
    lyceumStep: "Base · Fase 01",
    eduBadge: "Università",
    eduUniTitle: "Westminster International University di Tashkent (WIUT)",
    eduDegree: "Economia Aziendale e Sistemi Analitici — trasformare numeri, mercati e logica in decisioni concrete.",
    uniStep: "Attuale · Fase 02",
    projSubtitle: "Superare la povertà sistemica attraverso formazione IT pratica gratuita, resilienza psicologica e un modello etico autosufficiente.",
    projHook: "Il talento è universale, ma le opportunità non lo sono. Safe Haven rimuove barriere economiche, abitative e psicologiche per persone motivate in grave difficoltà.",
    pillar1Title: "Accesso 100% senza barriere",
    pillar1Desc: "Nessuna retta iniziale. Copre indennità di sussistenza, alloggio sicuro, pasti e supporto psicologico.",
    pillar2Title: "Percorso accelerato "6 + 2"",
    pillar2Desc: "6 mesi di informatica applicata intensiva, seguiti da 2 mesi di sviluppo di prodotti software reali con mentoring.",
    pillar3Title: "ISA etico e circolare",
    pillar3Desc: "I diplomati versano il 10% dello stipendio SOLO dopo aver ottenuto un impiego sopra i $450/mese con tutela nei momenti difficili.",
    pillar4Title: "Piccole coorti dedicate",
    pillar4Desc: "Hub compatti da 10–12 studenti con obiettivo oltre l'80% di inserimento lavorativo.",
    ctaSectionTitle: "Costruisci Safe Haven insieme a noi",
    btnSponsor: "Diventa sponsor",
    btnSponsorSub: "CSR, grant e partner per attrezzature",
    btnDonate: "Fai una donazione",
    btnDonateSub: "Sostieni alloggio, pasti e laptop",
    btnJoin: "Unisciti al team",
    btnJoinSub: "Mentor, docenti e psicologi",
    copyEmail: "Copia email",
    copied: "Copiato!",
    openMailApp: "Apri app email",
    tplSponsor: "Ciao team di Safe Haven,

vorrei valutare una sponsorizzazione o collaborazione per sostenere gli studenti di Safe Haven.",
    tplDonate: "Ciao team di Safe Haven,

vorrei effettuare una donazione per sostenere alloggio, pasti e attrezzature degli studenti.",
    tplJoin: "Ciao team di Safe Haven,

mi piacerebbe unirmi al team di Safe Haven come mentor, docente o specialista."
  },
  zh: {
    legalHubLink: "法律声明与政策",
    projDisclaimerNote: "早期概念说明：Safe Haven 的具体参数与参与方式仍在持续完善中，不构成公开要约。",
    navAbout: "关于我",
    navProject: "项目",
    footerEmail: "Email",
    footerHelp: "Help",
    heroBadge: "塔什干 · 构建与探索事物本质",
    heroTitle: "你好，我是 Nodirjon！",
    heroTagline: "对混乱过敏，却对搞清楚事物底层运转逻辑有着重度瘾头。",
    heroLine1: "我习惯把几乎所有事情——从美国州际货运安全合规到早期社会企业构想——都当作一道只需要更清晰逻辑的谜题。",
    heroLine2: "这个网站源于一个随性的“为什么不试试呢？”，如今成了我测试想法、折腾界面和记录成长的个人实验室。",
    expSectionTitle: "实践经历",
    expTag: "运营与安全",
    expRoleTitle: "道路运输健康与安全经理",
    expRoleSub: "安全与车队部门（美国物流）",
    expDateRange: "2026年4月 – 2026年11月",
    showDetails: "查看详情",
    hideDetails: "收起详情",
    expBullet1: "负责跨州车队运营的 DOT 与 FMCSA 合规管理、驾驶员安全审计及电子日志（ELD）数据分析。",
    expBullet2: "构建结构化风险缓解决策流程与事故预防规范，降低违规率并提升车队可靠性。",
    expBullet3: "统筹跨部门安全汇报与定量绩效追踪，支持调度与管理团队决策。",
    eduSectionTitle: "求学轨迹",
    lyceumBadge: "学术高中",
    lyceumTitle: "塔什干威斯敏斯特国际大学附属学术高中（ALWIUT）",
    lyceumSub: "结构化思维、经济学思维和深夜刷题习惯正式启航的地方。",
    lyceumStep: "基础 · 第一站",
    eduBadge: "大学",
    eduUniTitle: "塔什干威斯敏斯特国际大学（WIUT）",
    eduDegree: "工商管理与分析系统 — 把数据、市场规律与逻辑转化为务实决策。",
    uniStep: "当前 · 第二站",
    projSubtitle: "通过免费实用 IT 教育、心理韧性支持与可持续的伦理模式，打破系统性贫困。",
    projHook: "天赋普遍存在，但机会并不均等。Safe Haven 为面临严重困境且充满动力的人移除经济、住房与心理障碍，助力他们成长为独立的数字专业人才。",
    pillar1Title: "100% 零门槛入学",
    pillar1Desc: "零前期学费。提供生活津贴、安全住所、餐饮及专业心理支持。",
    pillar2Title: "“6 + 2”加速培养计划",
    pillar2Desc: "6个月高强度实用 IT 训练，随后2个月在导师指导下开发真实商业软件产品。",
    pillar3Title: "循环伦理 ISA 机制",
    pillar3Desc: "毕业生仅在月收入超过 $450 后按薪资的 10% 回馈，遇困难可暂停。",
    pillar4Title: "精简小班队列",
    pillar4Desc: "10–12 人的紧凑学习中心，就业目标超过 80%。",
    ctaSectionTitle: "与我们共同建设 Safe Haven",
    btnSponsor: "成为赞助方",
    btnSponsorSub: "企业社会责任、资助与设备合作伙伴",
    btnDonate: "进行捐赠",
    btnDonateSub: "资助住宿、餐饮与笔记本电脑",
    btnJoin: "加入团队",
    btnJoinSub: "导师、讲师与心理咨询师",
    copyEmail: "复制邮箱",
    copied: "已复制！",
    openMailApp: "打开邮件应用",
    tplSponsor: "你好 Safe Haven 团队：

我希望探讨赞助 Safe Haven 并支持学员发展的合作方式。",
    tplDonate: "你好 Safe Haven 团队：

我希望捐助支持学员的住宿、餐饮与学习设备。",
    tplJoin: "你好 Safe Haven 团队：

我希望作为导师、讲师或专业人员加入 Safe Haven 团队。"
  },
  ar: {
    legalHubLink: "المعلومات القانونية والسياسات",
    projDisclaimerNote: "تنويه المرحلة المبكرة: معايير Safe Haven ومسارات الدعم قيد التطوير النشط ولا تُعد عرضًا عامًا ملزمًا.",
    navAbout: "نبذة عني",
    navProject: "المشروع",
    footerEmail: "Email",
    footerHelp: "Help",
    heroBadge: "طشقند · أبني وأستكشف كيف تعمل الأشياء",
    heroTitle: "مرحبًا، أنا نوديرجون!",
    heroTagline: "لديّ حساسية من الفوضى، وشغف دائم بفهم كيف تعمل الأشياء فعلًا.",
    heroLine1: "أتعامل مع كل شيء تقريبًا — من الامتثال لسلامة النقل في الولايات المتحدة إلى المبادرات الاجتماعية — كأحجية تحتاج فقط إلى منطق أوضح.",
    heroLine2: "بدأ هذا الموقع بفكرة عفوية «لِمَ لا؟»، وتحول اليوم إلى مختبري الشخصي لتجربة الأفكار وتطوير المسار.",
    expSectionTitle: "ما الذي كنت أعمل عليه",
    expTag: "العمليات والسلامة",
    expRoleTitle: "مدير الصحة والسلامة للنقل البري",
    expRoleSub: "قسم السلامة والأسطول (لوجستيات الولايات المتحدة)",
    expDateRange: "أبريل 2026 – نوفمبر 2026",
    showDetails: "عرض التفاصيل",
    hideDetails: "إخفاء التفاصيل",
    expBullet1: "الإشراف على الامتثال للوائح DOT وFMCSA وتدقيق سلامة السائقين وتحليلات سجلات القيادة الإلكترونية (ELD).",
    expBullet2: "تصميم مسارات منظمة لتقليل المخاطر وبروتوكولات منع الحوادث وتحسين موثوقية الأسطول.",
    expBullet3: "تنسيق تقارير السلامة بين الأقسام ومتابعة الأداء الكمي لفرق التشغيل والإدارة.",
    eduSectionTitle: "المسار التعليمي",
    lyceumBadge: "الثانوية الأكاديمية",
    lyceumTitle: "الثانوية الأكاديمية التابعة لجامعة وستمنستر الدولية في طشقند",
    lyceumSub: "حيث بدأت رسميًا عادة التفكير المنظم ودراسة الاقتصاد وحل المسائل حتى ساعات متأخرة.",
    lyceumStep: "الأساس · المرحلة 01",
    eduBadge: "الجامعة",
    eduUniTitle: "جامعة وستمنستر الدولية في طشقند (WIUT)",
    eduDegree: "إدارة الأعمال والأنظمة التحليلية — تحويل الأرقام والأسواق والمنطق إلى قرارات عملية.",
    uniStep: "الحالي · المرحلة 02",
    projSubtitle: "كسر الفقر الممنهج عبر تعليم تقني تطبيقي مجاني ودعم نفسي ونموذج أخلاقي مستدام.",
    projHook: "الموهبة عالمية لكن الفرص ليست كذلك. يزيل Safe Haven الحواجز المالية والسكنية والنفسية أمام الطموحين في الظروف الصعبة ليصبحوا محترفين رقميين مستقلين.",
    pillar1Title: "دخول ميسّر بالكامل 100%",
    pillar1Desc: "بدون رسوم مسبقة. يشمل بدل المعيشة والسكن الآمن والوجبات والدعم النفسي المعتمد.",
    pillar2Title: "مسار التسريع «6 + 2»",
    pillar2Desc: "6 أشهر من التدريب التقني المكثف تليها شهران لبناء منتجات برمجية تجارية حقيقية بإشراف مرشدين.",
    pillar3Title: "اتفاقية ISA أخلاقية متجددة",
    pillar3Desc: "يساهم الخريجون بنسبة 10% من الراتب فقط بعد الحصول على وظيفة تتجاوز 450$ شهريًا مع مراعاة الظروف الصعبة.",
    pillar4Title: "مجموعات مصغّرة متابعة",
    pillar4Desc: "مراكز مدمجة من 10–12 طالبًا تستهدف توظيفًا يتجاوز 80%.",
    ctaSectionTitle: "ابنِ Safe Haven معنا",
    btnSponsor: "كن راعيًا",
    btnSponsorSub: "المسؤولية المجتمعية والمنح وشركاء التجهيز",
    btnDonate: "تبرع الآن",
    btnDonateSub: "دعم السكن والوجبات وأجهزة الحاسوب",
    btnJoin: "انضم إلى الفريق",
    btnJoinSub: "مرشدون ومعلمون وأخصائيون نفسيون",
    copyEmail: "نسخ البريد",
    copied: "تم النسخ!",
    openMailApp: "فتح تطبيق البريد",
    tplSponsor: "مرحبًا فريق Safe Haven،

أود مناقشة إمكانية رعاية Safe Haven ودعم طلابه.",
    tplDonate: "مرحبًا فريق Safe Haven،

أود تقديم تبرع لدعم سكن الطلاب ووجباتهم وتجهيزاتهم.",
    tplJoin: "مرحبًا فريق Safe Haven،

يسعدني الانضمام إلى فريق Safe Haven كمرشد أو معلم أو متخصص."
  },
  tr: {
    legalHubLink: "Yasal Bilgiler ve Politikalar",
    projDisclaimerNote: "Erken aşama bildirimi: Safe Haven parametreleri ve destek modelleri geliştirme aşamasındadır ve halka açık bağlayıcı bir teklif niteliği taşımaz.",
    navAbout: "Hakkımda",
    navProject: "Proje",
    footerEmail: "Email",
    footerHelp: "Help",
    heroBadge: "Taşkent · İnşa ediyor ve sorguluyorum",
    heroTitle: "Merhaba, ben Nodirjon!",
    heroTagline: "Kaosa alerjim var, şeylerin gerçekte nasıl çalıştığını çözmeye ise bağımlıyım.",
    heroLine1: "ABD lojistik güvenliğinden sosyal girişim mimarisine kadar neredeyse her şeye, sadece daha temiz bir mantığa ihtiyaç duyan bir bulmaca gibi bakıyorum.",
    heroLine2: "Bu site spontane bir «neden olmasın?» ile başladı; şimdi fikirleri test ettiğim ve yolculuğumu kaydettiğim kişisel laboratuvarım.",
    expSectionTitle: "Neler Yaptım",
    expTag: "Operasyon ve Güvenlik",
    expRoleTitle: "Karayolu Taşımacılığı Sağlık ve Güvenlik Müdürü",
    expRoleSub: "Güvenlik ve Filo Departmanı (ABD Lojistiği)",
    expDateRange: "Nis 2026 – Kas 2026",
    showDetails: "Detayları göster",
    hideDetails: "Detayları gizle",
    expBullet1: "Eyaletler arası filo operasyonlarında DOT ve FMCSA mevzuat uyumu, sürücü güvenlik denetimleri ve ELD analizlerini yönettim.",
    expBullet2: "İhlalleri azaltan ve filo güvenilirliğini artıran yapılandırılmış risk azaltma ve olay önleme protokolleri oluşturdum.",
    expBullet3: "Sevkiyat ve yönetim ekipleri için çapraz güvenlik raporlaması ve nicel performans takibini koordine ettim.",
    eduSectionTitle: "Eğitim Yolculuğu",
    lyceumBadge: "Akademik Lise",
    lyceumTitle: "Taşkent Westminster Uluslararası Üniversitesi Akademik Lisesi",
    lyceumSub: "Yapılandırılmış düşünme, ekonomi ve gece geç saatlere kadar problem çözme alışkanlığının resmen başladığı yer.",
    lyceumStep: "Temel · Adım 01",
    eduBadge: "Üniversite",
    eduUniTitle: "Taşkent Westminster Uluslararası Üniversitesi (WIUT)",
    eduDegree: "İşletme Yönetimi ve Analitik Sistemler — sayıları, piyasaları ve mantığı pratik kararlara dönüştürmek.",
    uniStep: "Güncel · Adım 02",
    projSubtitle: "Ücretsiz uygulamalı BT eğitimi, psikolojik dayanıklılık ve sürdürülebilir etik modelle yapısal yoksulluğu aşmak.",
    projHook: "Yetenek evrenseldir ancak fırsatlar eşit değildir. Safe Haven, zorlu sosyoekonomik koşullardaki motive bireylerin finansal, barınma ve psikolojik engellerini kaldırır.",
    pillar1Title: "%100 Engelsiz Giriş",
    pillar1Desc: "Ön ödeme yoktur. Yaşam desteği, güvenli barınma, yemek ve sertifikalı psikolojik destek sağlanır.",
    pillar2Title: "“6 + 2” Hızlandırma Programı",
    pillar2Desc: "6 aylık yoğun uygulamalı BT eğitimi ve ardından mentorluk eşliğinde 2 ay gerçek ticari yazılım üretimi.",
    pillar3Title: "Etik Dönüşümlü ISA Modeli",
    pillar3Desc: "Mezunlar yalnızca aylık $450 üzeri gelir elde ettikten sonra maaşlarının %10'unu katkı olarak sunar.",
    pillar4Title: "Küçük Odaklı Kohortlar",
    pillar4Desc: "%80 üzeri yerleştirme hedefiyle 10–12 kişilik kompakt öğrenme merkezleri.",
    ctaSectionTitle: "Safe Haven'ı Birlikte Kuralım",
    btnSponsor: "Sponsor Ol",
    btnSponsorSub: "KSS, hibeler ve donanım ortakları",
    btnDonate: "Bağış Yap",
    btnDonateSub: "Barınma, yemek ve dizüstü bilgisayar desteği",
    btnJoin: "Ekibe Katıl",
    btnJoinSub: "Mentorlar, eğitmenler ve psikologlar",
    copyEmail: "E-postayı Kopyala",
    copied: "Kopyalandı!",
    openMailApp: "E-posta Uygulamasını Aç",
    tplSponsor: "Merhaba Safe Haven Ekibi,

Safe Haven'a sponsorluk ve öğrencilere destek olanaklarını görüşmek isterim.",
    tplDonate: "Merhaba Safe Haven Ekibi,

Öğrencilerin barınma, yemek ve ekipman ihtiyaçlarına bağışta bulunmak isterim.",
    tplJoin: "Merhaba Safe Haven Ekibi,

Safe Haven ekibine mentor, eğitmen veya uzman olarak katılmak isterim."
  }
};

let currentLang = localStorage.getItem("site_lang") || "en";
let currentTheme = localStorage.getItem("site_theme") || "dark";
let activeTab = "about";
let activeModalAction = "sponsor";
let copyResetTimer = null;

function getDict(langCode = currentLang) {
  return TRANSLATIONS[langCode] || TRANSLATIONS.en;
}

function getTemplateForAction(actionType, langCode = currentLang) {
  const dict = getDict(langCode);
  if (actionType === "donate") return dict.tplDonate;
  if (actionType === "join") return dict.tplJoin;
  return dict.tplSponsor;
}

function getTitleForAction(actionType, langCode = currentLang) {
  const dict = getDict(langCode);
  if (actionType === "donate") return dict.btnDonate;
  if (actionType === "join") return dict.btnJoin;
  return dict.btnSponsor;
}

function syncMailtoLink() {
  const openMailtoLink = document.getElementById("openMailtoLink");
  const modalTemplate = document.getElementById("modalTemplate");
  const modalTitle = document.getElementById("modalTitle");
  if (!openMailtoLink || !modalTemplate) return;
  const subject = encodeURIComponent(`${modalTitle ? modalTitle.textContent.trim() : "Safe Haven"} - Safe Haven`);
  const body = encodeURIComponent(modalTemplate.value);
  openMailtoLink.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function renderLanguageOptions() {
  const langMenu = document.getElementById("langMenu");
  if (!langMenu) return;
  langMenu.innerHTML = LANGUAGES.map(lang => `
    <button type="button" data-lang="${lang.code}" class="lang-option w-full text-start px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between gap-2 cursor-pointer ${lang.code === currentLang ? "font-semibold" : ""}" style="${lang.code === currentLang ? "background: var(--accent-soft); color: var(--accent);" : ""}">
      <span>${lang.label}</span>
      ${lang.code === currentLang ? '<span>✓</span>' : ""}
    </button>
  `).join("");
}

function updateLocalizedDate() {
  const liveDateEl = document.getElementById("liveDate");
  if (!liveDateEl) return;
  const langObj = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];
  const now = new Date();
  try {
    const weekday = new Intl.DateTimeFormat(langObj.locale, { weekday: "long" }).format(now);
    const monthDay = new Intl.DateTimeFormat(langObj.locale, { month: "long", day: "numeric" }).format(now);
    liveDateEl.textContent = `${weekday.charAt(0).toUpperCase() + weekday.slice(1)},
${monthDay.charAt(0).toUpperCase() + monthDay.slice(1)}`;
  } catch (e) {
    liveDateEl.textContent = "Monday,
November 23";
  }
}

/* Position the iOS sliding pill glider on desktop and mobile */
function updateNavGlider() {
  document.querySelectorAll("nav").forEach(nav => {
    const desktopGlider = nav.querySelector(".nav-desktop-glider");
    const ovalGlider = nav.querySelector(".nav-oval-glider");
    const activeBtn = nav.querySelector(`.tab-btn[data-tab="${activeTab}"]`);
    if (!activeBtn || activeBtn.offsetWidth === 0) return;

    if (desktopGlider) {
      desktopGlider.style.width = `${activeBtn.offsetWidth}px`;
      desktopGlider.style.transform = `translate3d(${activeBtn.offsetLeft - 4}px, 0, 0)`;
    }
    if (ovalGlider) {
      ovalGlider.style.width = `${activeBtn.offsetWidth}px`;
      ovalGlider.style.transform = `translate3d(${activeBtn.offsetLeft - 6}px, 0, 0)`;
    }
  });
}

function setLanguage(langCode) {
  if (!TRANSLATIONS[langCode]) langCode = "en";
  currentLang = langCode;
  try { localStorage.setItem("site_lang", langCode); } catch (e) {}

  const langObj = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0];
  const dict = getDict(langCode);

  document.documentElement.setAttribute("lang", langCode);
  document.documentElement.setAttribute("dir", langObj.dir);

  const legalPageLink = document.getElementById("legalPageLink");
  if (legalPageLink) legalPageLink.href = getLegalDocUrl(langCode);

  const currentLangCode = document.getElementById("currentLangCode");
  if (currentLangCode) currentLangCode.textContent = langCode.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const expDetailsBody = document.getElementById("expDetailsBody");
  const expDetailsLabel = document.getElementById("expDetailsLabel");
  if (expDetailsBody && expDetailsLabel) {
    const isDetailsOpen = expDetailsBody.classList.contains("open");
    expDetailsLabel.textContent = isDetailsOpen ? dict.hideDetails : dict.showDetails;
  }

  const connectModal = document.getElementById("connectModal");
  if (connectModal && connectModal.classList.contains("open")) {
    const modalTitle = document.getElementById("modalTitle");
    const modalTemplate = document.getElementById("modalTemplate");
    if (modalTitle) modalTitle.textContent = getTitleForAction(activeModalAction, langCode);
    if (modalTemplate) modalTemplate.value = getTemplateForAction(activeModalAction, langCode);
    syncMailtoLink();
  }

  updateLocalizedDate();
  renderLanguageOptions();
  requestAnimationFrame(updateNavGlider);
}

function setTheme(theme) {
  currentTheme = theme === "light" ? "light" : "dark";
  try { localStorage.setItem("site_theme", currentTheme); } catch (e) {}
  document.documentElement.setAttribute("data-theme", currentTheme);

  const sunIcon = document.getElementById("themeIconSun");
  const moonIcon = document.getElementById("themeIconMoon");
  if (sunIcon && moonIcon) {
    sunIcon.classList.toggle("hidden", currentTheme === "dark");
    moonIcon.classList.toggle("hidden", currentTheme === "light");
  }
}

function switchTab(tabName) {
  if (!tabName || tabName === activeTab) return;
  activeTab = tabName;

  document.querySelectorAll(".tab-btn").forEach(btn => {
    const isTarget = btn.getAttribute("data-tab") === tabName;
    btn.classList.toggle("nav-pill-active", isTarget);
    btn.classList.toggle("nav-pill-inactive", !isTarget);
  });
  updateNavGlider();

  const aboutView = document.getElementById("view-about");
  const projectView = document.getElementById("view-project");
  const incomingView = tabName === "about" ? aboutView : projectView;
  const outgoingView = tabName === "about" ? projectView : aboutView;

  if (outgoingView && incomingView) {
    outgoingView.classList.remove("tab-view-active");
    outgoingView.classList.add("tab-view-entering");

    setTimeout(() => {
      outgoingView.classList.add("hidden");
      outgoingView.classList.remove("tab-view-entering");

      incomingView.classList.remove("hidden");
      incomingView.classList.add("tab-view-entering");
      void incomingView.offsetWidth;

      requestAnimationFrame(() => {
        incomingView.classList.remove("tab-view-entering");
        incomingView.classList.add("tab-view-active");
        triggerScrollReveals();
      });
    }, 220);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeLangPopover() {
  const langPopover = document.getElementById("langPopover");
  const langToggleBtn = document.getElementById("langToggleBtn");
  const langChevron = document.getElementById("langChevron");
  if (langPopover) {
    langPopover.classList.remove("dropdown-visible");
    langPopover.classList.add("dropdown-hidden");
  }
  if (langToggleBtn) {
    langToggleBtn.setAttribute("aria-expanded", "false");
  }
  if (langChevron) {
    langChevron.style.transform = "rotate(0deg)";
  }
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(helper);
  if (!ok) throw new Error("Copy failed");
  return true;
}

function openActionModal(actionType) {
  activeModalAction = actionType || "sponsor";
  const connectModal = document.getElementById("connectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalTemplate = document.getElementById("modalTemplate");
  const copyBtnText = document.getElementById("copyBtnText");

  if (modalTitle) modalTitle.textContent = getTitleForAction(activeModalAction, currentLang);
  if (modalTemplate) modalTemplate.value = getTemplateForAction(activeModalAction, currentLang);
  if (copyBtnText) copyBtnText.textContent = getDict(currentLang).copyEmail;
  syncMailtoLink();

  if (connectModal) {
    connectModal.classList.add("open");
  }
}

function closeActionModal() {
  const connectModal = document.getElementById("connectModal");
  if (connectModal) {
    connectModal.classList.remove("open");
  }
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -24px 0px" });

function triggerScrollReveals() {
  document.querySelectorAll(".reveal-scroll").forEach(el => {
    revealObserver.observe(el);
  });
}

document.addEventListener("click", async (e) => {
  const target = e.target;

  // Direct iOS Theme toggle
  if (target.closest("#themeToggleBtn")) {
    setTheme(currentTheme === "dark" ? "light" : "dark");
    return;
  }

  // Language popover toggle
  if (target.closest("#langToggleBtn")) {
    e.stopPropagation();
    const langPopover = document.getElementById("langPopover");
    const langToggleBtn = document.getElementById("langToggleBtn");
    const langChevron = document.getElementById("langChevron");
    const isOpen = langPopover && langPopover.classList.contains("dropdown-visible");
    closeLangPopover();
    if (!isOpen && langPopover) {
      langPopover.classList.remove("dropdown-hidden");
      langPopover.classList.add("dropdown-visible");
      if (langToggleBtn) langToggleBtn.setAttribute("aria-expanded", "true");
      if (langChevron) langChevron.style.transform = "rotate(180deg)";
    }
    return;
  }

  // Language option select
  const langOption = target.closest(".lang-option");
  if (langOption) {
    setLanguage(langOption.getAttribute("data-lang"));
    closeLangPopover();
    return;
  }

  // Tab switch
  const tabBtn = target.closest(".tab-btn");
  if (tabBtn) {
    switchTab(tabBtn.getAttribute("data-tab"));
    return;
  }

  // Experience details accordion
  const expToggle = target.closest("#expDetailsToggle");
  if (expToggle) {
    const expDetailsBody = document.getElementById("expDetailsBody");
    const expDetailsChevron = document.getElementById("expDetailsChevron");
    const expDetailsLabel = document.getElementById("expDetailsLabel");
    if (expDetailsBody) {
      const isOpen = expDetailsBody.classList.toggle("open");
      expToggle.setAttribute("aria-expanded", String(isOpen));
      if (expDetailsChevron) expDetailsChevron.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
      const dict = getDict(currentLang);
      if (expDetailsLabel) expDetailsLabel.textContent = isOpen ? dict.hideDetails : dict.showDetails;
    }
    return;
  }

  // CTA Modal open
  const actionBtn = target.closest(".action-cta-btn");
  if (actionBtn) {
    openActionModal(actionBtn.getAttribute("data-action"));
    return;
  }

  // Copy email inside modal
  if (target.closest("#copyEmailBtn")) {
    const modalEmailText = document.getElementById("modalEmailText");
    const copyBtnText = document.getElementById("copyBtnText");
    const emailToCopy = (modalEmailText && modalEmailText.textContent.trim()) || CONTACT_EMAIL;
    const dict = getDict(currentLang);
    try {
      await copyTextToClipboard(emailToCopy);
      if (copyBtnText) copyBtnText.textContent = dict.copied;
      if (copyResetTimer) clearTimeout(copyResetTimer);
      copyResetTimer = setTimeout(() => {
        if (copyBtnText) copyBtnText.textContent = getDict(currentLang).copyEmail;
      }, 2000);
    } catch (err) {
      if (modalEmailText) {
        const range = document.createRange();
        range.selectNodeContents(modalEmailText);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    return;
  }

  // Close modal
  if (target.closest("#closeModalBtn") || target.id === "connectModal") {
    closeActionModal();
    return;
  }

  // Click outside Language popover
  if (!target.closest("#langDropdownWrap")) {
    closeLangPopover();
  }
});

document.addEventListener("input", (e) => {
  if (e.target && e.target.id === "modalTemplate") {
    syncMailtoLink();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLangPopover();
    const connectModal = document.getElementById("connectModal");
    if (connectModal && connectModal.classList.contains("open")) {
      closeActionModal();
    }
  }
});

window.addEventListener("resize", updateNavGlider);

setLanguage(currentLang);
setTheme(currentTheme);
triggerScrollReveals();
window.addEventListener("load", updateNavGlider);
