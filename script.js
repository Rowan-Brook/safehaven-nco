const LEGAL_DOCS_BY_LANG = {
  en: "https://drive.google.com/file/d/14VP51Jj712ht4Cb5mi_7Nr6xDlNuCAG8/view?usp=drivesdk",
  ru: "https://drive.google.com/file/d/164WkrYuOAirbKutfYoyNS0X7Sgb86qTt/view?usp=drivesdk",
  uz: "https://drive.google.com/file/d/1Gh-QeuknlHx7voUX-ReQM9lLRi_Qovi7/view?usp=drivesdk",
  es: "https://drive.google.com/file/d/1Rhh9Osbjyl3ITqYDV2ltUdZQTwbv1YNN/view?usp=drivesdk",
  fr: "https://drive.google.com/file/d/1O1UQGmu8EOfx5kHRyGC0eV1J_qxm6fgw/view?usp=drivesdk",
  de: "https://drive.google.com/file/d/1pKDaVaCsS5Sj5xjLQ7Q0wqN7QTZ2QbGS/view?usp=drivesdk",
  it: "https://drive.google.com/file/d/1LVX8QhcuZFFGx2MKNM9G2QVCrg8WvOtt/view?usp=drivesdk",
  zh: "https://drive.google.com/file/d/1ISUv4Cykl8Tidt7cp0g3XpnnLdGCmNPj/view?usp=drivesdk",
  ar: "https://drive.google.com/file/d/1V-cbZP6hZufTAdurF7TyNTsh1BZSX-ST/view?usp=drivesdk",
  tr: "https://drive.google.com/file/d/14WmXhKHgRxip9EgwGkPcR5ijPzHSuWZL/view?usp=drivesdk",
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
    legalHubLink: "Legal & Policies", projDisclaimerNote: "Early-stage concept notice: Safe Haven parameters and support pathways are currently in active development and do not constitute a public offer.", legalContactNote: "Questions: ntolipov.site.help@gmail.com", legalCloseBtn: "Close",
    navAbout: "About", navProject: "Project", themeLight: "Light", themeDark: "Dark", footerEmail: "Email", footerHelp: "Help", settingsLabel: "Settings", settingsThemeTitle: "Theme", settingsLangTitle: "Language", settingsLinksTitle: "Connect & Help",
    heroTitle: "Hi, I'm Nodirjon!", heroSubtitle: "Student at Westminster International University in Tashkent (WIUT)",
    heroLine1: "Interested in logic, patterns, and systemic relationships.",
    heroLine2: "My curiosity spans analytical systems, quantitative methods, business administration, and operational compliance.",
    heroLine3: "Dedicated to structured problem-solving and continuous professional growth.",
    expSectionTitle: "Professional Experience",
    expRoleTitle: "Road Transport Health and Safety Manager",
    expRoleSub: "Safety & Fleet Department (US Logistics)",
    expDateRange: "Apr 2026 - Nov 2026",
    showDetails: "Show details", hideDetails: "Hide details",
    expBullet1: "Oversaw DOT & FMCSA regulatory compliance, driver safety audits, and electronic logging device (ELD) analytics across interstate fleet operations.",
    expBullet2: "Designed structured risk-mitigation workflows and incident prevention protocols, reducing operational violations and improving fleet reliability.",
    expBullet3: "Coordinated cross-functional safety reporting and quantitative performance tracking for dispatch and leadership teams.",
    eduBadge: "Education", eduUniTitle: "Westminster International University in Tashkent (WIUT)",
    eduDegree: "Business Administration & Analytical Systems",
    eduNote: "Focus on quantitative modeling, organizational logic, and socio-economic systems.",
    focusBadge: "Core Focus", focusTitle: "Logic, Compliance & Social Architecture",
    focusDesc: "Bridging quantitative rigor with human-centered institutional design.",
    tag1: "Quantitative Methods", tag2: "Operational Compliance", tag3: "Social Impact",
    projSubtitle: "Breaking systemic poverty through free applied IT education, psychological resilience, and an ethical self-sustaining model.",
    projHook: "Talent is universal, yet opportunity is not. Safe Haven removes financial, housing, and psychological barriers for motivated individuals facing severe socio-economic hardship—transforming them from vulnerable survivors into independent digital professionals who pay opportunity forward.",
    pillar1Title: "100% Barrier-Free Entry", pillar1Desc: "Zero upfront tuition. Covers living stipends, safe housing, meals, and certified psychological support.",
    pillar2Title: "The \"6 + 2\" Acceleration Track", pillar2Desc: "6 months of intensive applied IT, followed by 2 months building real commercial software products with mentorship.",
    pillar3Title: "Ethical Recyclable ISA", pillar3Desc: "Graduates contribute 10% of salary ONLY after securing employment above $450/month with hardship freeze.",
    pillar4Title: "Intimate Mini-Cohorts", pillar4Desc: "Compact 10–12 student hubs targeting 80%+ placement with verified Behavioral & Hard-Skills Profiles.",
    ctaSectionTitle: "Build Safe Haven With Us",
    btnSponsor: "Become a Sponsor", btnSponsorSub: "CSR, grants & equipment partners",
    btnDonate: "Make a Donation", btnDonateSub: "Fund housing, meals & laptops",
    btnJoin: "Join the Team", btnJoinSub: "Mentors, educators & psychologists",
    copyEmail: "Copy Email", copied: "Copied!", openMailApp: "Open Mail App",
    tplSponsor: "Hello Safe Haven Team,\n\nI would like to explore sponsoring Safe Haven and supporting its students.",
    tplDonate: "Hello Safe Haven Team,\n\nI would like to make a donation to support student housing, meals, and equipment.",
    tplJoin: "Hello Safe Haven Team,\n\nI would love to join the Safe Haven team as a mentor, educator, or specialist."
  },
  ru: {
    legalHubLink: "Правовая информация и политики", projDisclaimerNote: "Примечание о ранней стадии: параметры Safe Haven и форматы участия находятся в разработке и не являются публичной офертой.", legalContactNote: "Вопросы по правилам: ntolipov.site.help@gmail.com", legalCloseBtn: "Закрыть",
    navAbout: "Обо мне", navProject: "Проект", themeLight: "Светлая", themeDark: "Тёмная", footerEmail: "Email", footerHelp: "Help", settingsLabel: "Настройки", settingsThemeTitle: "Тема", settingsLangTitle: "Язык", settingsLinksTitle: "Ссылки и помощь",
    heroTitle: "Привет, я Нодиржон!", heroSubtitle: "Студент Международного Вестминстерского университета в Ташкенте (WIUT)",
    heroLine1: "Увлечён логикой, закономерностями и системными взаимосвязями.",
    heroLine2: "Мои интересы охватывают аналитические системы, количественные методы, бизнес-администрирование и операционный комплаенс.",
    heroLine3: "Стремлюсь к структурированному решению задач и постоянному профессиональному росту.",
    expSectionTitle: "Профессиональный опыт",
    expRoleTitle: "Менеджер по безопасности дорожного транспорта",
    expRoleSub: "Департамент безопасности и автопарка (Логистика США)",
    expDateRange: "Апр 2026 - Ноя 2026",
    showDetails: "Подробнее", hideDetails: "Скрыть",
    expBullet1: "Контроль соблюдения стандартов DOT и FMCSA, аудит безопасности водителей и аналитика электронных журналов (ELD).",
    expBullet2: "Разработка структурированных процессов снижения рисков и протоколов предотвращения инцидентов.",
    expBullet3: "Координация кросс-функциональной отчётности по безопасности и количественного трекинга эффективности.",
    eduBadge: "Образование", eduUniTitle: "Международный Вестминстерский университет в Ташкенте (WIUT)",
    eduDegree: "Бизнес-администрирование и аналитические системы",
    eduNote: "Фокус на количественном моделировании, организационной логике и социально-экономических системах.",
    focusBadge: "Ключевой фокус", focusTitle: "Логика, комплаенс и социальная архитектура",
    focusDesc: "Соединение количественной точности с человекоцентричным институциональным дизайном.",
    tag1: "Количественные методы", tag2: "Операционный комплаенс", tag3: "Социальный эффект",
    projSubtitle: "Преодоление системной бедности через бесплатное прикладное IT-образование, психологическую опору и этичную самоокупаемую модель.",
    projHook: "Талант есть у каждого, но возможности доступны не всем. Safe Haven снимает финансовые, жилищные и психологические барьеры для мотивированных людей в трудной жизненной ситуации, помогая им стать самостоятельными специалистами и передавать возможность дальше.",
    pillar1Title: "100% бесплатный вход", pillar1Desc: "Никакой платы за обучение. Покрывает жильё, питание, стипендию и работу с психологом.",
    pillar2Title: "Акселератор «6 + 2»", pillar2Desc: "6 месяцев интенсивного прикладного IT, затем 2 месяца создания реальных коммерческих продуктов.",
    pillar3Title: "Этичный возвратный ISA", pillar3Desc: "Выпускники отчисляют 10% дохода ТОЛЬКО после трудоустройства с зарплатой выше $450/мес.",
    pillar4Title: "Камерные мини-группы", pillar4Desc: "Компактные хабы по 10–12 студентов с целью 80%+ трудоустройства.",
    ctaSectionTitle: "Развивайте Safe Haven вместе с нами",
    btnSponsor: "Стать спонсором", btnSponsorSub: "КСО, гранты и техническое партнёрство",
    btnDonate: "Сделать пожертвование", btnDonateSub: "Оплата жилья, питания и ноутбуков",
    btnJoin: "Вступить в команду", btnJoinSub: "Менторы, преподаватели и психологи",
    copyEmail: "Копировать Email", copied: "Скопировано!", openMailApp: "Открыть почту",
    tplSponsor: "Здравствуйте, команда Safe Haven!\n\nХотел(а) бы обсудить спонсорство и партнёрство с проектом Safe Haven.",
    tplDonate: "Здравствуйте, команда Safe Haven!\n\nХотел(а) бы сделать пожертвование на жильё, питание и оборудование для студентов.",
    tplJoin: "Здравствуйте, команда Safe Haven!\n\nХотел(а) бы присоединиться к команде проекта в качестве ментора, преподавателя или специалиста."
  },
  uz: {
    legalHubLink: "Huquqiy ma’lumotlar va siyosatlar", projDisclaimerNote: "Dastlabki bosqich eslatmasi: Safe Haven parametrlari va ishtirok etish shartlari ishlab chiqilmoqda va ommaviy oferta hisoblanmaydi.", legalContactNote: "Savollar uchun: ntolipov.site.help@gmail.com", legalCloseBtn: "Yopish",
    navAbout: "Men haqimda", navProject: "Loyiha", themeLight: "Yorug‘", themeDark: "Qorong‘i", footerEmail: "Email", footerHelp: "Help", settingsLabel: "Sozlamalar", settingsThemeTitle: "Mavzu", settingsLangTitle: "Til", settingsLinksTitle: "Havolalar va yordam",
    heroTitle: "Salom, men Nodirjonman!", heroSubtitle: "Toshkentdagi Xalqaro Vestminster Universiteti (WIUT) talabasi",
    heroLine1: "Mantiq, qonuniyatlar va tizimli bog‘liqliklarga qiziqaman.",
    heroLine2: "Qiziqishlarim tahliliy tizimlar, miqdoriy usullar, biznes boshqaruvi va operatsion muvofiqlikni qamrab oladi.",
    heroLine3: "Tizimli muammolarni hal qilish va uzluksiz kasbiy o‘sishga intilaman.",
    expSectionTitle: "Kasbiy tajriba",
    expRoleTitle: "Avtotransport xavfsizligi va mehnat muhofazasi menejeri",
    expRoleSub: "Xavfsizlik va avtopark bo‘limi (AQSh logistikasi)",
    expDateRange: "Apr 2026 - Noy 2026",
    showDetails: "Batafsil", hideDetails: "Yashirish",
    expBullet1: "Shtatlararo yuk tashishda DOT va FMCSA talablariga rioya etilishini va ELD tahlillarini nazorat qildim.",
    expBullet2: "Xavflarni kamaytirish va hodisalarning oldini olish protokollarini ishlab chiqdim.",
    expBullet3: "Dispetcherlik va rahbariyat jamoalari uchun xavfsizlik hisobotlarini muvofiqlashtirdim.",
    eduBadge: "Ta’lim", eduUniTitle: "Toshkentdagi Xalqaro Vestminster Universiteti (WIUT)",
    eduDegree: "Biznes boshqaruvi va tahliliy tizimlar",
    eduNote: "Miqdoriy modellashtirish, tashkiliy mantiq va ijtimoiy-iqtisodiy tizimlarga e’tibor.",
    focusBadge: "Asosiy yo‘nalish", focusTitle: "Mantiq, komplayens va ijtimoiy arxitektura",
    focusDesc: "Miqdoriy aniqlikni insonga yo‘naltirilgan institutsional dizayn bilan birlashtirish.",
    tag1: "Miqdoriy usullar", tag2: "Operatsion komplayens", tag3: "Ijtimoiy ta’sir",
    projSubtitle: "Bepul amaliy IT ta’limi va psixologik tayanch orqali tizimli qashshoqlikni yengish.",
    projHook: "Iste’dod hammada bor, ammo imkoniyatlar teng emas. Safe Haven og‘ir vaziyatdagi insonlar uchun moliyaviy, uy-joy va psixologik to‘siqlarni olib tashlaydi.",
    pillar1Title: "100% to‘siqsiz kirish", pillar1Desc: "Boshlang‘ich to‘lovlarsiz ta’lim. Turar-joy, ovqatlanish va stipendiya qoplanadi.",
    pillar2Title: "«6 + 2» tezlashtirilgan dasturi", pillar2Desc: "6 oy amaliy IT, so‘ng 2 oy mentorlar bilan real mahsulotlar yaratish.",
    pillar3Title: "Axloqiy aylanma ISA modeli", pillar3Desc: "Bitiruvchilar $450/oydan yuqori ishga joylashgach daromadining 10% ini qaytaradi.",
    pillar4Title: "Ixcham mini-guruhlar", pillar4Desc: "80%+ ishga joylashish maqsadiga ega 10–12 talabalik markazlar.",
    ctaSectionTitle: "Safe Haven loyihasini birga rivojlantiramiz",
    btnSponsor: "Homiy bo‘lish", btnSponsorSub: "KSM, grantlar va texnik hamkorlar",
    btnDonate: "Xayriya qilish", btnDonateSub: "Turar-joy, ovqat va noutbuklar uchun",
    btnJoin: "Jamoaga qo‘shilish", btnJoinSub: "Mentorlar, o‘qituvchilar va psixologlar",
    copyEmail: "Emailni nusxalash", copied: "Nusxalandi!", openMailApp: "Pochta ilovasini ochish",
    tplSponsor: "Assalomu alaykum, Safe Haven jamoasi!\n\nSafe Haven loyihasiga homiylik va hamkorlik qilish imkoniyatlarini muhokama qilmoqchiman.",
    tplDonate: "Assalomu alaykum, Safe Haven jamoasi!\n\nTalabalar uchun turar-joy, ovqatlanish va jihozlarga xayriya qilmoqchiman.",
    tplJoin: "Assalomu alaykum, Safe Haven jamoasi!\n\nLoyiha jamoasiga mentor, o‘qituvchi yoki mutaxassis sifatida qo‘shilmoqchiman."
  },
  es: {
    legalHubLink: "Información legal y políticas", projDisclaimerNote: "Aviso de etapa inicial: los parámetros de Safe Haven están en desarrollo activo y no constituyen una oferta pública.", legalContactNote: "Consultas: ntolipov.site.help@gmail.com", legalCloseBtn: "Cerrar",
    navAbout: "Sobre mí", navProject: "Proyecto", themeLight: "Claro", themeDark: "Oscuro", footerEmail: "Email", footerHelp: "Help", settingsLabel: "Ajustes", settingsThemeTitle: "Tema", settingsLangTitle: "Idioma", settingsLinksTitle: "Enlaces y ayuda",
    heroTitle: "¡Hola, soy Nodirjon!", heroSubtitle: "Estudiante en la Universidad Internacional de Westminster en Taskent (WIUT)",
    heroLine1: "Me interesan la lógica, los patrones y las relaciones sistémicas.",
    heroLine2: "Mi curiosidad abarca sistemas analíticos, métodos cuantitativos, administración de empresas y cumplimiento operativo.",
    heroLine3: "Comprometido con la resolución estructurada de problemas y el crecimiento profesional continuo.",
    expSectionTitle: "Experiencia profesional",
    expRoleTitle: "Gerente de Salud y Seguridad del Transporte Terrestre",
    expRoleSub: "Departamento de Seguridad y Flota (Logística de EE. UU.)",
    expDateRange: "Abr 2026 - Nov 2026",
    showDetails: "Mostrar detalles", hideDetails: "Ocultar detalles",
    expBullet1: "Supervisé el cumplimiento normativo de DOT y FMCSA, auditorías de seguridad de conductores y análisis de dispositivos de registro electrónico (ELD) en operaciones interestatales.",
    expBullet2: "Diseñé flujos estructurados de mitigación de riesgos y protocolos de prevención de incidentes, reduciendo infracciones y mejorando la fiabilidad de la flota.",
    expBullet3: "Coordiné informes transversales de seguridad y seguimiento cuantitativo del rendimiento para los equipos de despacho y dirección.",
    eduBadge: "Educación", eduUniTitle: "Universidad Internacional de Westminster en Taskent (WIUT)",
    eduDegree: "Administración de Empresas y Sistemas Analíticos",
    eduNote: "Enfoque en modelado cuantitativo, lógica organizacional y sistemas socioeconómicos.",
    focusBadge: "Enfoque principal", focusTitle: "Lógica, Cumplimiento y Arquitectura Social",
    focusDesc: "Uniendo el rigor cuantitativo con el diseño institucional centrado en las personas.",
    tag1: "Métodos cuantitativos", tag2: "Cumplimiento operativo", tag3: "Impacto social",
    projSubtitle: "Rompiendo la pobreza sistémica mediante educación práctica gratuita en TI, resiliencia psicológica y un modelo ético autosostenible.",
    projHook: "El talento es universal, pero las oportunidades no. Safe Haven elimina las barreras financieras, de vivienda y psicológicas para personas motivadas que enfrentan dificultades socioeconómicas graves, transformándolas en profesionales digitales independientes.",
    pillar1Title: "Acceso 100% sin barreras", pillar1Desc: "Sin matrícula inicial. Cubre estipendio para vivir, vivienda segura, comidas y apoyo psicológico certificado.",
    pillar2Title: "Programa acelerado \"6 + 2\"", pillar2Desc: "6 meses de TI práctica intensiva, seguidos de 2 meses creando productos de software comerciales reales con mentoría.",
    pillar3Title: "ISA ético y reciclable", pillar3Desc: "Los graduados aportan el 10% de su salario SOLO tras conseguir empleo por encima de $450/mes con pausa por dificultades.",
    pillar4Title: "Mini-cohortes cercanas", pillar4Desc: "Centros compactos de 10–12 estudiantes con objetivo de más del 80% de inserción laboral.",
    ctaSectionTitle: "Construye Safe Haven con nosotros",
    btnSponsor: "Ser patrocinador", btnSponsorSub: "RSE, subvenciones y socios de equipamiento",
    btnDonate: "Hacer una donación", btnDonateSub: "Financia vivienda, comidas y portátiles",
    btnJoin: "Unirse al equipo", btnJoinSub: "Mentores, educadores y psicólogos",
    copyEmail: "Copiar correo", copied: "¡Copiado!", openMailApp: "Abrir correo",
    tplSponsor: "Hola equipo de Safe Haven,\n\nMe gustaría explorar opciones de patrocinio para Safe Haven y apoyar a sus estudiantes.",
    tplDonate: "Hola equipo de Safe Haven,\n\nMe gustaría realizar una donación para apoyar la vivienda, alimentación y equipos de los estudiantes.",
    tplJoin: "Hola equipo de Safe Haven,\n\nMe encantaría unirme al equipo de Safe Haven como mentor, educador o especialista."
  },
  fr: {
    legalHubLink: "Mentions légales et politiques", projDisclaimerNote: "Note de phase initiale : les paramètres de Safe Haven sont en cours d’élaboration et ne constituent pas une offre publique.", legalContactNote: "Questions : ntolipov.site.help@gmail.com", legalCloseBtn: "Fermer",
    navAbout: "À propos", navProject: "Projet", themeLight: "Clair", themeDark: "Sombre", footerEmail: "Email", footerHelp: "Help", settingsLabel: "Paramètres", settingsThemeTitle: "Thème", settingsLangTitle: "Langue", settingsLinksTitle: "Liens et aide",
    heroTitle: "Bonjour, je suis Nodirjon !", heroSubtitle: "Étudiant à l'Université internationale de Westminster à Tachkent (WIUT)",
    heroLine1: "Passionné par la logique, les schémas et les relations systémiques.",
    heroLine2: "Ma curiosité couvre les systèmes analytiques, les méthodes quantitatives, la gestion d'entreprise et la conformité opérationnelle.",
    heroLine3: "Dédié à la résolution structurée de problèmes et à une croissance professionnelle continue.",
    expSectionTitle: "Expérience professionnelle",
    expRoleTitle: "Responsable Santé et Sécurité du Transport Routier",
    expRoleSub: "Département Sécurité et Flotte (Logistique États-Unis)",
    expDateRange: "Avr 2026 - Nov 2026",
    showDetails: "Voir les détails", hideDetails: "Masquer les détails",
    expBullet1: "Supervision de la conformité DOT et FMCSA, des audits de sécurité des conducteurs et des analyses ELD sur les opérations inter-États.",
    expBullet2: "Conception de processus structurés de gestion des risques et de protocoles de prévention des incidents.",
    expBullet3: "Coordination des rapports de sécurité transversaux et du suivi quantitatif des performances.",
    eduBadge: "Éducation", eduUniTitle: "Université internationale de Westminster à Tachkent (WIUT)",
    eduDegree: "Administration des affaires et Systèmes analytiques",
    eduNote: "Accent sur la modélisation quantitative, la logique organisationnelle et les systèmes socio-économiques.",
    focusBadge: "Axe principal", focusTitle: "Logique, Conformité et Architecture Sociale",
    focusDesc: "Allier rigueur quantitative et conception institutionnelle centrée sur l'humain.",
    tag1: "Méthodes quantitatives", tag2: "Conformité opérationnelle", tag3: "Impact social",
    projSubtitle: "Briser la pauvreté systémique grâce à une formation informatique appliquée gratuite, un soutien psychologique et un modèle éthique durable.",
    projHook: "Le talent est universel, mais les opportunités ne le sont pas. Safe Haven lève les obstacles financiers, de logement et psychologiques pour les personnes motivées en grande difficulté socio-économique.",
    pillar1Title: "Entrée 100 % sans barrière", pillar1Desc: "Aucun frais initial. Couvre allocation de vie, logement sûr, repas et soutien psychologique certifié.",
    pillar2Title: "Parcours accéléré \"6 + 2\"", pillar2Desc: "6 mois d'informatique appliquée intensive, puis 2 mois de création de produits logiciels commerciaux avec mentorat.",
    pillar3Title: "ISA éthique et solidaire", pillar3Desc: "Les diplômés versent 10 % de leur salaire UNIQUEMENT après un emploi au-dessus de 450 $/mois avec gel en cas de difficulté.",
    pillar4Title: "Petites cohortes dédiées", pillar4Desc: "Groupes compacts de 10 à 12 étudiants visant 80 %+ d'insertion professionnelle.",
    ctaSectionTitle: "Développez Safe Haven avec nous",
    btnSponsor: "Devenir sponsor", btnSponsorSub: "RSE, subventions et partenaires matériel",
    btnDonate: "Faire un don", btnDonateSub: "Financer logement, repas et ordinateurs",
    btnJoin: "Rejoindre l'équipe", btnJoinSub: "Mentors, formateurs et psychologues",
    copyEmail: "Copier l'e-mail", copied: "Copié !", openMailApp: "Ouvrir la messagerie",
    tplSponsor: "Bonjour l'équipe Safe Haven,\n\nJe souhaiterais échanger sur un parrainage ou partenariat avec Safe Haven.",
    tplDonate: "Bonjour l'équipe Safe Haven,\n\nJe souhaite faire un don pour soutenir le logement, les repas et l'équipement des étudiants.",
    tplJoin: "Bonjour l'équipe Safe Haven,\n\nJe souhaite rejoindre l'équipe Safe Haven en tant que mentor, formateur ou spécialiste."
  },
  de: {
    legalHubLink: "Rechtliches & Richtlinien", projDisclaimerNote: "Hinweis zur Frühphase: Die Parameter von Safe Haven befinden sich in aktiver Entwicklung und stellen kein öffentliches Angebot dar.", legalContactNote: "Fragen: ntolipov.site.help@gmail.com", legalCloseBtn: "Schließen",
    navAbout: "Über mich", navProject: "Projekt", themeLight: "Hell", themeDark: "Dunkel", footerEmail: "Email", footerHelp: "Help", settingsLabel: "Einstellungen", settingsThemeTitle: "Design", settingsLangTitle: "Sprache", settingsLinksTitle: "Links & Hilfe",
    heroTitle: "Hallo, ich bin Nodirjon!", heroSubtitle: "Student an der Westminster International University in Taschkent (WIUT)",
    heroLine1: "Interessiert an Logik, Mustern und systemischen Zusammenhängen.",
    heroLine2: "Mein Interesse umfasst analytische Systeme, quantitative Methoden, Betriebswirtschaft und operative Compliance.",
    heroLine3: "Engagiert für strukturierte Problemlösung und kontinuierliche berufliche Weiterentwicklung.",
    expSectionTitle: "Berufserfahrung",
    expRoleTitle: "Manager für Gesundheit und Sicherheit im Straßentransport",
    expRoleSub: "Abteilung Sicherheit & Fuhrpark (US-Logistik)",
    expDateRange: "Apr 2026 - Nov 2026",
    showDetails: "Details anzeigen", hideDetails: "Details ausblenden",
    expBullet1: "Verantwortung für DOT- und FMCSA-Compliance, Sicherheitsaudits für Fahrer und ELD-Analysen im bundesstaatenübergreifenden Betrieb.",
    expBullet2: "Entwicklung strukturierter Risikominimierungsprozesse und Präventionsprotokolle zur Reduzierung von Verstößen.",
    expBullet3: "Koordination bereichsübergreifender Sicherheitsberichte und quantitativer Leistungskennzahlen.",
    eduBadge: "Ausbildung", eduUniTitle: "Westminster International University in Taschkent (WIUT)",
    eduDegree: "Betriebswirtschaft & Analytische Systeme",
    eduNote: "Schwerpunkt auf quantitativer Modellierung, Organisationslogik und sozioökonomischen Systemen.",
    focusBadge: "Schwerpunkt", focusTitle: "Logik, Compliance & Soziale Architektur",
    focusDesc: "Verbindung quantitativer Präzision mit menschenzentriertem Institutionendesign.",
    tag1: "Quantitative Methoden", tag2: "Operative Compliance", tag3: "Soziale Wirkung",
    projSubtitle: "Systemische Armut durch kostenlose praxisnahe IT-Bildung, psychologische Resilienz und ein faires, tragfähiges Modell überwinden.",
    projHook: "Talent ist weltweit verteilt, Chancen jedoch nicht. Safe Haven baut finanzielle, wohnliche und psychologische Hürden für motivierte Menschen in schwierigen Lebenslagen ab.",
    pillar1Title: "100 % barrierefreier Zugang", pillar1Desc: "Keine Vorkosten. Deckt Lebensunterhalt, sichere Unterkunft, Verpflegung und psychologische Begleitung.",
    pillar2Title: "Das \"6 + 2\"-Beschleunigungsprogramm", pillar2Desc: "6 Monate intensive angewandte IT, gefolgt von 2 Monaten Entwicklung echter kommerzieller Software mit Mentoring.",
    pillar3Title: "Faires, umlaufendes ISA-Modell", pillar3Desc: "Absolventen zahlen 10 % des Einkommens NUR bei einem Gehalt über 450 $/Monat mit Härtefallregelung.",
    pillar4Title: "Kleine Lernkohorten", pillar4Desc: "Kompakte Gruppen mit 10–12 Teilnehmenden und dem Ziel von über 80 % Vermittlung.",
    ctaSectionTitle: "Gestalten Sie Safe Haven mit uns",
    btnSponsor: "Sponsor werden", btnSponsorSub: "CSR, Fördermittel & Hardware-Partner",
    btnDonate: "Spenden", btnDonateSub: "Unterkunft, Verpflegung & Laptops fördern",
    btnJoin: "Team beitreten", btnJoinSub: "Mentorinnen/Mentoren, Lehrkräfte & Psychologen",
    copyEmail: "E-Mail kopieren", copied: "Kopiert!", openMailApp: "E-Mail-App öffnen",
    tplSponsor: "Hallo Safe-Haven-Team,\n\ngerade möchte ich Möglichkeiten für Sponsoring und Partnerschaft mit Safe Haven besprechen.",
    tplDonate: "Hallo Safe-Haven-Team,\n\nich möchte eine Spende für Unterkunft, Verpflegung und Ausstattung der Teilnehmenden leisten.",
    tplJoin: "Hallo Safe-Haven-Team,\n\nich möchte das Safe-Haven-Team als Mentor/in, Lehrkraft oder Fachkraft unterstützen."
  },
  it: {
    legalHubLink: "Note legali e policy", projDisclaimerNote: "Nota sulla fase iniziale: i parametri di Safe Haven sono in fase di sviluppo attivo e non costituiscono un’offerta pubblica.", legalContactNote: "Domande: ntolipov.site.help@gmail.com", legalCloseBtn: "Chiudi",
    navAbout: "Chi sono", navProject: "Progetto", themeLight: "Chiaro", themeDark: "Scuro", footerEmail: "Email", footerHelp: "Help", settingsLabel: "Impostazioni", settingsThemeTitle: "Tema", settingsLangTitle: "Lingua", settingsLinksTitle: "Link e aiuto",
    heroTitle: "Ciao, sono Nodirjon!", heroSubtitle: "Studente presso la Westminster International University di Tashkent (WIUT)",
    heroLine1: "Interessato a logica, schemi e relazioni sistemiche.",
    heroLine2: "La mia curiosità spazia tra sistemi analitici, metodi quantitativi, economia aziendale e conformità operativa.",
    heroLine3: "Dedicato alla risoluzione strutturata dei problemi e alla crescita professionale continua.",
    expSectionTitle: "Esperienza professionale",
    expRoleTitle: "Responsabile Salute e Sicurezza del Trasporto Stradale",
    expRoleSub: "Dipartimento Sicurezza e Flotta (Logistica USA)",
    expDateRange: "Apr 2026 - Nov 2026",
    showDetails: "Mostra dettagli", hideDetails: "Nascondi dettagli",
    expBullet1: "Gestione della conformità DOT e FMCSA, audit sulla sicurezza dei conducenti e analisi dei dati ELD sulle flotte interstatali.",
    expBullet2: "Progettazione di flussi strutturati di mitigazione del rischio e protocolli di prevenzione degli incidenti.",
    expBullet3: "Coordinamento della reportistica sulla sicurezza e del monitoraggio quantitativo delle prestazioni.",
    eduBadge: "Formazione", eduUniTitle: "Westminster International University di Tashkent (WIUT)",
    eduDegree: "Economia Aziendale e Sistemi Analitici",
    eduNote: "Focus su modellazione quantitativa, logica organizzativa e sistemi socio-economici.",
    focusBadge: "Focus principale", focusTitle: "Logica, Conformità e Architettura Sociale",
    focusDesc: "Unire rigore quantitativo e progettazione istituzionale centrata sulla persona.",
    tag1: "Metodi quantitativi", tag2: "Conformità operativa", tag3: "Impatto sociale",
    projSubtitle: "Superare la povertà sistemica attraverso formazione IT pratica gratuita, resilienza psicologica e un modello etico autosufficiente.",
    projHook: "Il talento è universale, ma le opportunità non lo sono. Safe Haven rimuove barriere economiche, abitative e psicologiche per persone motivate in grave difficoltà.",
    pillar1Title: "Accesso 100% senza barriere", pillar1Desc: "Nessuna retta iniziale. Copre indennità di sussistenza, alloggio sicuro, pasti e supporto psicologico.",
    pillar2Title: "Percorso accelerato \"6 + 2\"", pillar2Desc: "6 mesi di informatica applicata intensiva, seguiti da 2 mesi di sviluppo di prodotti software reali con mentoring.",
    pillar3Title: "ISA etico e circolare", pillar3Desc: "I diplomati versano il 10% dello stipendio SOLO dopo aver ottenuto un impiego sopra i $450/mese con tutela nei momenti difficili.",
    pillar4Title: "Piccole coorti dedicate", pillar4Desc: "Hub compatti da 10–12 studenti con obiettivo oltre l'80% di inserimento lavorativo.",
    ctaSectionTitle: "Costruisci Safe Haven insieme a noi",
    btnSponsor: "Diventa sponsor", btnSponsorSub: "CSR, grant e partner per attrezzature",
    btnDonate: "Fai una donazione", btnDonateSub: "Sostieni alloggio, pasti e laptop",
    btnJoin: "Unisciti al team", btnJoinSub: "Mentor, docenti e psicologi",
    copyEmail: "Copia email", copied: "Copiato!", openMailApp: "Apri app email",
    tplSponsor: "Ciao team di Safe Haven,\n\nvorrei valutare una sponsorizzazione o collaborazione per sostenere gli studenti di Safe Haven.",
    tplDonate: "Ciao team di Safe Haven,\n\nvorrei effettuare una donazione per sostenere alloggio, pasti e attrezzature degli studenti.",
    tplJoin: "Ciao team di Safe Haven,\n\nmi piacerebbe unirmi al team di Safe Haven come mentor, docente o specialista."
  },
  zh: {
    legalHubLink: "法律声明与政策", projDisclaimerNote: "早期概念说明：Safe Haven 的具体参数与参与方式仍在持续完善中，不构成公开要约。", legalContactNote: "相关咨询：ntolipov.site.help@gmail.com", legalCloseBtn: "关闭",
    navAbout: "关于我", navProject: "项目", themeLight: "浅色", themeDark: "深色", footerEmail: "Email", footerHelp: "Help", settingsLabel: "设置", settingsThemeTitle: "主题", settingsLangTitle: "语言", settingsLinksTitle: "链接与帮助",
    heroTitle: "你好，我是 Nodirjon！", heroSubtitle: "塔什干威斯敏斯特国际大学（WIUT）在读学生",
    heroLine1: "热衷于逻辑、规律与系统性关联。",
    heroLine2: "我的兴趣涵盖分析系统、定量方法、工商管理与运营合规。",
    heroLine3: "致力于结构化解决问题与持续的专业成长。",
    expSectionTitle: "专业经历",
    expRoleTitle: "道路运输健康与安全经理",
    expRoleSub: "安全与车队部门（美国物流）",
    expDateRange: "2026年4月 - 2026年11月",
    showDetails: "查看详情", hideDetails: "收起详情",
    expBullet1: "负责跨州车队运营的 DOT 与 FMCSA 合规管理、驾驶员安全审计及电子日志（ELD）数据分析。",
    expBullet2: "构建结构化风险缓解决策流程与事故预防规范，降低违规率并提升车队可靠性。",
    expBullet3: "统筹跨部门安全汇报与定量绩效追踪，支持调度与管理团队决策。",
    eduBadge: "教育背景", eduUniTitle: "塔什干威斯敏斯特国际大学（WIUT）",
    eduDegree: "工商管理与分析系统",
    eduNote: "侧重定量建模、组织逻辑与社会经济系统研究。",
    focusBadge: "核心方向", focusTitle: "逻辑、合规与社会架构",
    focusDesc: "将定量严谨性与以人为本的制度设计相结合。",
    tag1: "定量方法", tag2: "运营合规", tag3: "社会影响",
    projSubtitle: "通过免费实用 IT 教育、心理韧性支持与可持续的伦理模式，打破系统性贫困。",
    projHook: "天赋普遍存在，但机会并不均等。Safe Haven 为面临严重困境且充满动力的人移除经济、住房与心理障碍，助力他们成长为独立的数字专业人才。",
    pillar1Title: "100% 零门槛入学", pillar1Desc: "零前期学费。提供生活津贴、安全住所、餐饮及专业心理支持。",
    pillar2Title: "“6 + 2”加速培养计划", pillar2Desc: "6个月高强度实用 IT 训练，随后2个月在导师指导下开发真实商业软件产品。",
    pillar3Title: "循环伦理 ISA 机制", pillar3Desc: "毕业生仅在月收入超过 $450 后按薪资的 10% 回馈，遇困难可暂停。",
    pillar4Title: "精简小班队列", pillar4Desc: "10–12 人的紧凑学习中心，就业目标超过 80%。",
    ctaSectionTitle: "与我们共同建设 Safe Haven",
    btnSponsor: "成为赞助方", btnSponsorSub: "企业社会责任、资助与设备合作伙伴",
    btnDonate: "进行捐赠", btnDonateSub: "资助住宿、餐饮与笔记本电脑",
    btnJoin: "加入团队", btnJoinSub: "导师、讲师与心理咨询师",
    copyEmail: "复制邮箱", copied: "已复制！", openMailApp: "打开邮件应用",
    tplSponsor: "你好 Safe Haven 团队：\n\n我希望探讨赞助 Safe Haven 并支持学员发展的合作方式。",
    tplDonate: "你好 Safe Haven 团队：\n\n我希望捐助支持学员的住宿、餐饮与学习设备。",
    tplJoin: "你好 Safe Haven 团队：\n\n我希望作为导师、讲师或专业人员加入 Safe Haven 团队。"
  },
  ar: {
    legalHubLink: "المعلومات القانونية والسياسات", projDisclaimerNote: "تنويه المرحلة المبكرة: معايير Safe Haven ومسارات الدعم قيد التطوير النشط ولا تُعد عرضًا عامًا ملزمًا.", legalContactNote: "للاستفسارات: ntolipov.site.help@gmail.com", legalCloseBtn: "إغلاق",
    navAbout: "نبذة عني", navProject: "المشروع", themeLight: "فاتح", themeDark: "داكن", footerEmail: "Email", footerHelp: "Help", settingsLabel: "الإعدادات", settingsThemeTitle: "المظهر", settingsLangTitle: "اللغة", settingsLinksTitle: "الروابط والمساعدة",
    heroTitle: "مرحبًا، أنا نوديرجون!", heroSubtitle: "طالب في جامعة وستمنستر الدولية في طشقند (WIUT)",
    heroLine1: "مهتم بالمنطق والأنماط والعلاقات النظامية.",
    heroLine2: "يمتد اهتمامي إلى الأنظمة التحليلية والأساليب الكمية وإدارة الأعمال والامتثال التشغيلي.",
    heroLine3: "ملتزم بحل المشكلات بطرق منظمة والنمو المهني المستمر.",
    expSectionTitle: "الخبرة المهنية",
    expRoleTitle: "مدير الصحة والسلامة للنقل البري",
    expRoleSub: "قسم السلامة والأسطول (لوجستيات الولايات المتحدة)",
    expDateRange: "أبريل 2026 - نوفمبر 2026",
    showDetails: "عرض التفاصيل", hideDetails: "إخفاء التفاصيل",
    expBullet1: "الإشراف على الامتثال للوائح DOT وFMCSA وتدقيق سلامة السائقين وتحليلات سجلات القيادة الإلكترونية (ELD).",
    expBullet2: "تصميم مسارات منظمة لتقليل المخاطر وبروتوكولات منع الحوادث وتحسين موثوقية الأسطول.",
    expBullet3: "تنسيق تقارير السلامة بين الأقسام ومتابعة الأداء الكمي لفرق التشغيل والإدارة.",
    eduBadge: "التعليم", eduUniTitle: "جامعة وستمنستر الدولية في طشقند (WIUT)",
    eduDegree: "إدارة الأعمال والأنظمة التحليلية",
    eduNote: "التركيز على النمذجة الكمية والمنطق التنظيمي والأنظمة الاقتصادية والاجتماعية.",
    focusBadge: "التركيز الأساسي", focusTitle: "المنطق والامتثال والهندسة الاجتماعية",
    focusDesc: "الربط بين الدقة الكمية والتصميم المؤسسي المرتكز على الإنسان.",
    tag1: "الأساليب الكمية", tag2: "الامتثال التشغيلي", tag3: "الأثر الاجتماعي",
    projSubtitle: "كسر الفقر الممنهج عبر تعليم تقني تطبيقي مجاني ودعم نفسي ونموذج أخلاقي مستدام.",
    projHook: "الموهبة عالمية لكن الفرص ليست كذلك. يزيل Safe Haven الحواجز المالية والسكنية والنفسية أمام الطموحين في الظروف الصعبة ليصبحوا محترفين رقميين مستقلين.",
    pillar1Title: "دخول ميسّر بالكامل 100%", pillar1Desc: "بدون رسوم مسبقة. يشمل بدل المعيشة والسكن الآمن والوجبات والدعم النفسي المعتمد.",
    pillar2Title: "مسار التسريع «6 + 2»", pillar2Desc: "6 أشهر من التدريب التقني المكثف تليها شهران لبناء منتجات برمجية تجارية حقيقية بإشراف مرشدين.",
    pillar3Title: "اتفاقية ISA أخلاقية متجددة", pillar3Desc: "يساهم الخريجون بنسبة 10% من الراتب فقط بعد الحصول على وظيفة تتجاوز 450$ شهريًا مع مراعاة الظروف الصعبة.",
    pillar4Title: "مجموعات مصغّرة متابعة", pillar4Desc: "مراكز مدمجة من 10–12 طالبًا تستهدف توظيفًا يتجاوز 80%.",
    ctaSectionTitle: "ابنِ Safe Haven معنا",
    btnSponsor: "كن راعيًا", btnSponsorSub: "المسؤولية المجتمعية والمنح وشركاء التجهيز",
    btnDonate: "تبرع الآن", btnDonateSub: "دعم السكن والوجبات وأجهزة الحاسوب",
    btnJoin: "انضم إلى الفريق", btnJoinSub: "مرشدون ومعلمون وأخصائيون نفسيون",
    copyEmail: "نسخ البريد", copied: "تم النسخ!", openMailApp: "فتح تطبيق البريد",
    tplSponsor: "مرحبًا فريق Safe Haven،\n\nأود مناقشة إمكانية رعاية Safe Haven ودعم طلابه.",
    tplDonate: "مرحبًا فريق Safe Haven،\n\nأود تقديم تبرع لدعم سكن الطلاب ووجباتهم وتجهيزاتهم.",
    tplJoin: "مرحبًا فريق Safe Haven،\n\nيسعدني الانضمام إلى فريق Safe Haven كمرشد أو معلم أو متخصص."
  },
  tr: {
    legalHubLink: "Yasal Bilgiler ve Politikalar", projDisclaimerNote: "Erken aşama bildirimi: Safe Haven parametreleri ve destek modelleri geliştirme aşamasındadır ve halka açık bağlayıcı bir teklif niteliği taşımaz.", legalContactNote: "Sorularınız için: ntolipov.site.help@gmail.com", legalCloseBtn: "Kapat",
    navAbout: "Hakkımda", navProject: "Proje", themeLight: "Açık", themeDark: "Koyu", footerEmail: "Email", footerHelp: "Help", settingsLabel: "Ayarlar", settingsThemeTitle: "Tema", settingsLangTitle: "Dil", settingsLinksTitle: "Bağlantılar ve Yardım",
    heroTitle: "Merhaba, ben Nodirjon!", heroSubtitle: "Taşkent Westminster Uluslararası Üniversitesi (WIUT) öğrencisi",
    heroLine1: "Mantık, örüntüler ve sistemsel ilişkilerle ilgileniyorum.",
    heroLine2: "İlgi alanlarım analitik sistemler, nicel yöntemler, işletme yönetimi ve operasyonel uyumu kapsıyor.",
    heroLine3: "Yapılandırılmış problem çözme ve sürekli mesleki gelişime odaklanıyorum.",
    expSectionTitle: "Mesleki Deneyim",
    expRoleTitle: "Karayolu Taşımacılığı Sağlık ve Güvenlik Müdürü",
    expRoleSub: "Güvenlik ve Filo Departmanı (ABD Lojistiği)",
    expDateRange: "Nis 2026 - Kas 2026",
    showDetails: "Detayları göster", hideDetails: "Detayları gizle",
    expBullet1: "Eyaletler arası filo operasyonlarında DOT ve FMCSA mevzuat uyumu, sürücü güvenlik denetimleri ve ELD analizlerini yönettim.",
    expBullet2: "İhlalleri azaltan ve filo güvenilirliğini artıran yapılandırılmış risk azaltma ve olay önleme protokolleri oluşturdum.",
    expBullet3: "Sevkiyat ve yönetim ekipleri için çapraz güvenlik raporlaması ve nicel performans takibini koordine ettim.",
    eduBadge: "Eğitim", eduUniTitle: "Taşkent Westminster Uluslararası Üniversitesi (WIUT)",
    eduDegree: "İşletme Yönetimi ve Analitik Sistemler",
    eduNote: "Nicel modelleme, örgütsel mantık ve sosyoekonomik sistemlere odaklanma.",
    focusBadge: "Temel Odak", focusTitle: "Mantık, Uyum ve Sosyal Mimari",
    focusDesc: "Nicel titizliği insan odaklı kurumsal tasarımla buluşturmak.",
    tag1: "Nicel Yöntemler", tag2: "Operasyonel Uyum", tag3: "Sosyal Etki",
    projSubtitle: "Ücretsiz uygulamalı BT eğitimi, psikolojik dayanıklılık ve sürdürülebilir etik modelle yapısal yoksulluğu aşmak.",
    projHook: "Yetenek evrenseldir ancak fırsatlar eşit değildir. Safe Haven, zorlu sosyoekonomik koşullardaki motive bireylerin finansal, barınma ve psikolojik engellerini kaldırır.",
    pillar1Title: "%100 Engelsiz Giriş", pillar1Desc: "Ön ödeme yoktur. Yaşam desteği, güvenli barınma, yemek ve sertifikalı psikolojik destek sağlanır.",
    pillar2Title: "“6 + 2” Hızlandırma Programı", pillar2Desc: "6 aylık yoğun uygulamalı BT eğitimi ve ardından mentorluk eşliğinde 2 ay gerçek ticari yazılım üretimi.",
    pillar3Title: "Etik Dönüşümlü ISA Modeli", pillar3Desc: "Mezunlar yalnızca aylık $450 üzeri gelir elde ettikten sonra maaşlarının %10'unu katkı olarak sunar.",
    pillar4Title: "Küçük Odaklı Kohortlar", pillar4Desc: "%80 üzeri yerleştirme hedefiyle 10–12 kişilik kompakt öğrenme merkezleri.",
    ctaSectionTitle: "Safe Haven'ı Birlikte Kuralım",
    btnSponsor: "Sponsor Ol", btnSponsorSub: "KSS, hibeler ve donanım ortakları",
    btnDonate: "Bağış Yap", btnDonateSub: "Barınma, yemek ve dizüstü bilgisayar desteği",
    btnJoin: "Ekibe Katıl", btnJoinSub: "Mentorlar, eğitmenler ve psikologlar",
    copyEmail: "E-postayı Kopyala", copied: "Kopyalandı!", openMailApp: "E-posta Uygulamasını Aç",
    tplSponsor: "Merhaba Safe Haven Ekibi,\n\nSafe Haven'a sponsorluk ve öğrencilere destek olanaklarını görüşmek isterim.",
    tplDonate: "Merhaba Safe Haven Ekibi,\n\nÖğrencilerin barınma, yemek ve ekipman ihtiyaçlarına bağışta bulunmak isterim.",
    tplJoin: "Merhaba Safe Haven Ekibi,\n\nSafe Haven ekibine mentor, eğitmen veya uzman olarak katılmak isterim."
  }
};

let currentLang = "en";
let currentTheme = "dark";
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
    liveDateEl.textContent = `${weekday.charAt(0).toUpperCase() + weekday.slice(1)},\n${monthDay.charAt(0).toUpperCase() + monthDay.slice(1)}`;
  } catch (e) {
    liveDateEl.textContent = "Saturday,\nNovember 21";
  }
}

/* Position the sliding underline on desktop and oval glider on mobile */
function updateNavGlider() {
  document.querySelectorAll("nav").forEach(nav => {
    const underlineGlider = nav.querySelector(".nav-underline-glider");
    const ovalGlider = nav.querySelector(".nav-oval-glider");
    const activeBtn = nav.querySelector(`.tab-btn[data-tab="${activeTab}"]`);
    if (!activeBtn || activeBtn.offsetWidth === 0) return;

    if (underlineGlider) {
      underlineGlider.style.width = `${activeBtn.offsetWidth}px`;
      underlineGlider.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
    }
    if (ovalGlider) {
      ovalGlider.style.width = `${activeBtn.offsetWidth}px`;
      ovalGlider.style.transform = `translateX(${activeBtn.offsetLeft - 6}px)`;
    }
  });
}

function setLanguage(langCode) {
  if (!TRANSLATIONS[langCode]) langCode = "en";
  currentLang = langCode;
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
setTheme(currentTheme);
  updateLocalizedDate();
  renderLanguageOptions();
  requestAnimationFrame(updateNavGlider);
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelectorAll(".theme-option").forEach(btn => {
    const isSelected = btn.getAttribute("data-set-theme") === theme;
    btn.style.background = isSelected ? "var(--accent-soft)" : "transparent";
    btn.style.color = isSelected ? "var(--accent)" : "var(--text-primary)";
    btn.style.borderColor = isSelected ? "var(--border-strong)" : "var(--border-subtle)";
  });
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
    }, 240);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeAllDropdowns() {
  const settingsMenu = document.getElementById("settingsMenu");
  const settingsToggleBtn = document.getElementById("settingsToggleBtn");
  if (settingsMenu) {
    settingsMenu.classList.remove("dropdown-visible");
    settingsMenu.classList.add("dropdown-hidden");
  }
  if (settingsToggleBtn) {
    settingsToggleBtn.setAttribute("aria-expanded", "false");
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

/* IntersectionObserver for silky scroll reveals */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

function triggerScrollReveals() {
  document.querySelectorAll(".reveal-scroll").forEach(el => {
    revealObserver.observe(el);
  });
}

document.addEventListener("click", async (e) => {
  const target = e.target;

  // Unified Settings toggle
  if (target.closest("#settingsToggleBtn")) {
    e.stopPropagation();
    const settingsMenu = document.getElementById("settingsMenu");
    const settingsToggleBtn = document.getElementById("settingsToggleBtn");
    const isOpen = settingsMenu && settingsMenu.classList.contains("dropdown-visible");
    closeAllDropdowns();
    if (!isOpen && settingsMenu) {
      settingsMenu.classList.remove("dropdown-hidden");
      settingsMenu.classList.add("dropdown-visible");
      if (settingsToggleBtn) settingsToggleBtn.setAttribute("aria-expanded", "true");
    }
    return;
  }

  // Language option select inside Settings
  const langOption = target.closest(".lang-option");
  if (langOption) {
    setLanguage(langOption.getAttribute("data-lang"));
    return;
  }

  // Theme option select inside Settings
  const themeOption = target.closest(".theme-option");
  if (themeOption) {
    setTheme(themeOption.getAttribute("data-set-theme"));
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
// Click outside Settings menu
  if (!target.closest("#settingsDropdownWrap")) {
    closeAllDropdowns();
  }
});

document.addEventListener("input", (e) => {
  if (e.target && e.target.id === "modalTemplate") {
    syncMailtoLink();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const connectModal = document.getElementById("connectModal");
    if (connectModal && connectModal.classList.contains("open")) {
      closeActionModal();
    }
}
});

window.addEventListener("resize", updateNavGlider);

setLanguage("en");
setTheme("dark");
triggerScrollReveals();
window.addEventListener("load", updateNavGlider);
